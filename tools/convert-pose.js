#!/usr/bin/env node
/**
 * VRM Posing Desktop の JSON ポーズデータを
 * GESTURE_POSES 形式（オイラー角 {x, y, z}）に変換するツール
 *
 * 使い方:
 *   node convert-pose.js pose.json [ラベル名]
 *   node convert-pose.js poses_folder/ [all]
 *
 * 入力: VRM Posing Desktop 形式 — { "BoneName": { "rotation": [qx, qy, qz, qw] } }
 * 出力: GESTURE_POSES 形式 — { boneName: { x, y, z } } (ラジアン)
 */

const fs = require('fs')
const path = require('path')

// VRM Posing Desktop のボーン名 → GESTURE_POSES のボーン名マッピング
const BONE_MAP = {
  'Hips': 'hips',
  'Spine': 'spine',
  'Chest': 'chest',
  'UpperChest': 'upperChest',
  'Neck': 'neck',
  'Head': 'head',
  'LeftShoulder': 'leftShoulder',
  'RightShoulder': 'rightShoulder',
  'LeftUpperArm': 'leftUpperArm',
  'RightUpperArm': 'rightUpperArm',
  'LeftLowerArm': 'leftLowerArm',
  'RightLowerArm': 'rightLowerArm',
  'LeftHand': 'leftHand',
  'RightHand': 'rightHand',
  'LeftUpperLeg': 'leftUpperLeg',
  'RightUpperLeg': 'rightUpperLeg',
  'LeftLowerLeg': 'leftLowerLeg',
  'RightLowerLeg': 'rightLowerLeg',
  'LeftFoot': 'leftFoot',
  'RightFoot': 'rightFoot',
  // 指ボーン
  'LeftThumbProximal': 'leftThumbProximal',
  'LeftThumbIntermediate': 'leftThumbIntermediate',
  'LeftThumbDistal': 'leftThumbDistal',
  'LeftIndexProximal': 'leftIndexProximal',
  'LeftIndexIntermediate': 'leftIndexIntermediate',
  'LeftIndexDistal': 'leftIndexDistal',
  'LeftMiddleProximal': 'leftMiddleProximal',
  'LeftMiddleIntermediate': 'leftMiddleIntermediate',
  'LeftMiddleDistal': 'leftMiddleDistal',
  'LeftRingProximal': 'leftRingProximal',
  'LeftRingIntermediate': 'leftRingIntermediate',
  'LeftRingDistal': 'leftRingDistal',
  'LeftLittleProximal': 'leftLittleProximal',
  'LeftLittleIntermediate': 'leftLittleIntermediate',
  'LeftLittleDistal': 'leftLittleDistal',
  'RightThumbProximal': 'rightThumbProximal',
  'RightThumbIntermediate': 'rightThumbIntermediate',
  'RightThumbDistal': 'rightThumbDistal',
  'RightIndexProximal': 'rightIndexProximal',
  'RightIndexIntermediate': 'rightIndexIntermediate',
  'RightIndexDistal': 'rightIndexDistal',
  'RightMiddleProximal': 'rightMiddleProximal',
  'RightMiddleIntermediate': 'rightMiddleIntermediate',
  'RightMiddleDistal': 'rightMiddleDistal',
  'RightRingProximal': 'rightRingProximal',
  'RightRingIntermediate': 'rightRingIntermediate',
  'RightRingDistal': 'rightRingDistal',
  'RightLittleProximal': 'rightLittleProximal',
  'RightLittleIntermediate': 'rightLittleIntermediate',
  'RightLittleDistal': 'rightLittleDistal',
}

// 上半身のボーン（ジェスチャーで主に使うもの）
const UPPER_BODY_BONES = new Set([
  'spine', 'chest', 'upperChest', 'neck', 'head',
  'leftShoulder', 'rightShoulder',
  'leftUpperArm', 'rightUpperArm',
  'leftLowerArm', 'rightLowerArm',
  'leftHand', 'rightHand',
  // 指ボーン
  ...Object.values(BONE_MAP).filter(b => b.includes('Thumb') || b.includes('Index') || b.includes('Middle') || b.includes('Ring') || b.includes('Little'))
])

/**
 * クォータニオン [x, y, z, w] → オイラー角 {x, y, z} (ラジアン)
 * Three.js の Euler.setFromQuaternion (order: 'XYZ') と同等
 */
function quaternionToEuler(qx, qy, qz, qw) {
  // Roll (X)
  const sinr_cosp = 2 * (qw * qx + qy * qz)
  const cosr_cosp = 1 - 2 * (qx * qx + qy * qy)
  const x = Math.atan2(sinr_cosp, cosr_cosp)

  // Pitch (Y)
  const sinp = 2 * (qw * qy - qz * qx)
  let y
  if (Math.abs(sinp) >= 1) {
    y = Math.sign(sinp) * Math.PI / 2 // gimbal lock
  } else {
    y = Math.asin(sinp)
  }

  // Yaw (Z)
  const siny_cosp = 2 * (qw * qz + qx * qy)
  const cosy_cosp = 1 - 2 * (qy * qy + qz * qz)
  const z = Math.atan2(siny_cosp, cosy_cosp)

  return { x, y, z }
}

/**
 * ほぼゼロの回転かどうか判定（閾値 0.01 rad ≈ 0.6°）
 */
function isNearZero(euler, threshold = 0.01) {
  return Math.abs(euler.x) < threshold && Math.abs(euler.y) < threshold && Math.abs(euler.z) < threshold
}

/**
 * 小数を丸める
 */
function round(val, digits = 4) {
  return Math.round(val * Math.pow(10, digits)) / Math.pow(10, digits)
}

/**
 * VRM Posing Desktop JSON → GESTURE_POSES 形式に変換
 */
function convertPose(data, label = 'ポーズ', upperOnly = true) {
  const bones = {}

  for (const [vrmBone, transform] of Object.entries(data)) {
    const boneName = BONE_MAP[vrmBone]
    if (!boneName) continue
    if (upperOnly && !UPPER_BODY_BONES.has(boneName)) continue

    const rot = transform.rotation
    if (!rot || rot.length !== 4) continue

    const euler = quaternionToEuler(rot[0], rot[1], rot[2], rot[3])
    if (isNearZero(euler)) continue // ほぼ無回転は省略

    bones[boneName] = {
      x: round(euler.x),
      y: round(euler.y),
      z: round(euler.z)
    }
  }

  return { label, bones }
}

/**
 * GESTURE_POSES 形式のコードを出力
 */
function formatPoseCode(pose) {
  const lines = [`  { // ${pose.label}`]
  lines.push('    label: \'' + pose.label + '\',')
  lines.push('    bones: {')
  for (const [bone, rot] of Object.entries(pose.bones)) {
    const pad = ' '.repeat(Math.max(0, 22 - bone.length))
    lines.push(`      ${bone}:${pad} { x: ${rot.x}, y: ${rot.y}, z: ${rot.z} },`)
  }
  lines.push('    }')
  lines.push('  },')
  return lines.join('\n')
}

// === メイン ===
const args = process.argv.slice(2)
if (args.length === 0) {
  console.log('使い方:')
  console.log('  node convert-pose.js <pose.json> [ラベル名]')
  console.log('  node convert-pose.js <folder/> [all]  # フォルダ内の全JSONを変換')
  console.log('')
  console.log('例:')
  console.log('  node convert-pose.js guts_pose.json ガッツポーズ')
  console.log('  node convert-pose.js ./poses/ all')
  process.exit(0)
}

const target = args[0]
const label = args[1] || 'ポーズ'

const stat = fs.statSync(target)
if (stat.isDirectory()) {
  // フォルダ内の全 JSON を変換
  const files = fs.readdirSync(target).filter(f => f.endsWith('.json'))
  console.log(`// ${files.length} files found in ${target}\n`)
  for (const file of files) {
    const data = JSON.parse(fs.readFileSync(path.join(target, file), 'utf-8'))
    const poseName = path.basename(file, '.json')
    const pose = convertPose(data, poseName)
    if (Object.keys(pose.bones).length > 0) {
      console.log(formatPoseCode(pose))
    } else {
      console.log(`  // ${poseName}: 上半身の回転データなし（スキップ）`)
    }
  }
} else {
  // 単一ファイル
  const data = JSON.parse(fs.readFileSync(target, 'utf-8'))
  const pose = convertPose(data, label)
  console.log(formatPoseCode(pose))
  console.log('\n// ボーン数:', Object.keys(pose.bones).length)
}

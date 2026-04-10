var j0=Object.create;var If=Object.defineProperty;var Z0=Object.getOwnPropertyDescriptor;var K0=Object.getOwnPropertyNames;var J0=Object.getPrototypeOf,Q0=Object.prototype.hasOwnProperty;var ys=(i,e)=>()=>(i&&(e=i(i=0)),e);var Pf=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var e_=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of K0(e))!Q0.call(i,s)&&s!==t&&If(i,s,{get:()=>e[s],enumerable:!(n=Z0(e,s))||n.enumerable});return i};var t_=(i,e,t)=>(t=i!=null?j0(J0(i)):{},e_(e||!i||!i.__esModule?If(t,"default",{value:i,enumerable:!0}):t,i));function n_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function i_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zp(){let i=Tr("canvas");return i.style.display="block",i}function Co(...i){let e="THREE."+i.shift();Er?Er("log",e,...i):console.log(e,...i)}function Kp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function we(...i){i=Kp(i);let e="THREE."+i.shift();if(Er)Er("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Fe(...i){i=Kp(i);let e="THREE."+i.shift();if(Er)Er("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Io(...i){let e=i.join(" ");e in Lf||(Lf[e]=!0,we(...i))}function Jp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function $n(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function Sh(i,e){return(i%e+e)%e}function s_(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function r_(i,e,t){return i!==e?(t-i)/(e-i):0}function wo(i,e,t){return(1-t)*i+t*e}function o_(i,e,t,n){return wo(i,e,1-Math.exp(-t*n))}function a_(i,e=1){return e-Math.abs(Sh(i,e*2)-e)}function l_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function c_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function u_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function h_(i,e){return i+Math.random()*(e-i)}function d_(i){return i*(.5-Math.random())}function f_(i){i!==void 0&&(Df=i);let e=Df+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function p_(i){return i*Eo}function m_(i){return i*Ps}function g_(i){return(i&i-1)===0&&i!==0}function __(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function x_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function y_(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),f=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*f,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*f,a*c);break;case"ZYZ":i.set(l*f,l*p,a*u,a*c);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function v_(){let i={enabled:!0,workingColorSpace:Kt,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dt&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(s.r=Mr(s.r),s.g=Mr(s.g),s.b=Mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ki?Ro:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Kt]:{primaries:e,whitePoint:n,transfer:Ro,toXYZ:Nf,fromXYZ:Of,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:Nf,fromXYZ:Of,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Su(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ml.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}function Eu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Du(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ms.fromArray(i,r);let a=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),l=e.dot(Ms),c=t.dot(Ms),u=n.dot(Ms);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}function U_(i,e,t,n,s,r,o,a){let l;if(e.side===Jt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===qn,a),l===null)return null;Ja.copy(a),Ja.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ja);return c<t.near||c>t.far?null:{distance:c,point:Ja.clone(),object:i}}function Qa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ya),i.getVertexPosition(l,ja),i.getVertexPosition(c,Za);let u=U_(i,e,t,n,Ya,ja,Za,qf);if(u){let h=new C;Ki.getBarycoord(qf,Ya,ja,Za,h),s&&(u.uv=Ki.getInterpolatedAttribute(s,a,l,c,h,new Le)),r&&(u.uv1=Ki.getInterpolatedAttribute(r,a,l,c,h,new Le)),o&&(u.normal=Ki.getInterpolatedAttribute(o,a,l,c,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new C,materialIndex:0};Ki.getNormal(Ya,ja,Za,d.normal),u.face=d,u.barycoord=h}return u}function sl(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Tl.fromBufferAttribute(a,s),El.fromBufferAttribute(a,r),t.distanceSqToSegment(Tl,El,Gu,ip)>n)return;Gu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Gu);if(!(c<e.near||c>e.far))return{distance:c,point:ip.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}function ap(i,e,t,n,s,r,o){let a=ju.distanceSqToPoint(i);if(a<t){let l=new C;ju.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function ks(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function on(i){let e={};for(let t=0;t<i.length;t++){let n=ks(i[t]);for(let s in n)e[s]=n[s]}return e}function H_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}function al(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function W_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function lp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function tm(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}function X_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return oi;case"vector":case"vector2":case"vector3":case"vector4":return ci;case"color":return Go;case"quaternion":return li;case"bool":case"boolean":return Oi;case"string":return Fi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function $_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=X_(i.type);if(i.times===void 0){let t=[],n=[];tm(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}function cp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function q_(){this._document.hidden===!1&&this.reset()}function wh(i,e,t,n){let s=ix(n);switch(t){case _h:return i*e;case Xl:return i*e/s.components*s.byteLength;case $l:return i*e/s.components*s.byteLength;case Bs:return i*e*2/s.components*s.byteLength;case ql:return i*e*2/s.components*s.byteLength;case xh:return i*e*3/s.components*s.byteLength;case Rn:return i*e*4/s.components*s.byteLength;case Yl:return i*e*4/s.components*s.byteLength;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ra:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zl:case Jl:return Math.max(i,16)*Math.max(e,8)/4;case jl:case Kl:return Math.max(i,8)*Math.max(e,8)/2;case Ql:case ec:case nc:case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tc:case sc:case rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case lc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case cc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case uc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case dc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case gc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case yc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vc:case Mc:case Sc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case bc:case Tc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ec:case wc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ix(i){switch(i){case xn:case fh:return{byteLength:1,components:1};case Vr:case ph:case di:return{byteLength:2,components:1};case Gl:case Wl:return{byteLength:2,components:4};case Jn:case zl:case An:return{byteLength:4,components:1};case mh:case gh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}var ss,rs,pp,th,mp,ea,gp,Br,qn,Jt,hn,hi,As,nh,ih,sh,_p,Ji,xp,yp,vp,Mp,Sp,bp,Tp,Ep,hl,dl,wp,Ap,Rp,Cp,Ip,Pp,Lp,Dp,Up,fl,pl,ml,Rs,gl,_l,xl,yl,rh,Np,Op,Zn,oh,ah,lh,ta,ch,uh,hh,$u,Fp,dh,os,Os,kl,Vl,na,Qi,Ln,Sr,Dt,Hl,Fs,Ut,kr,Kn,xn,fh,ph,Vr,zl,Jn,An,di,Gl,Wl,Hr,mh,gh,_h,xh,Rn,si,as,Xl,$l,Bs,ql,Yl,ia,sa,ra,oa,jl,Zl,Kl,Jl,Ql,ec,tc,nc,ic,sc,rc,oc,ac,lc,cc,uc,hc,dc,fc,pc,mc,gc,_c,xc,yc,vc,Mc,Sc,bc,Tc,Ec,wc,Bp,kp,Vp,Cs,Is,ul,qu,Es,ws,Ao,Ac,Hp,yh,aa,zr,zp,la,Gp,ki,Vt,Kt,Ro,dt,Ts,Yu,Wp,Xp,$p,Rc,qp,Yp,Cc,jp,vl,vh,Mh,Xn,br,Lf,Er,Qp,Yn,tn,Df,Eo,Ps,tt,Le,Me,C,vu,Uf,De,Mu,Nf,Of,Ke,ar,Ml,M_,wr,S_,bu,Yt,Tt,Sl,En,Po,bl,Re,lr,Hn,b_,T_,Xi,Ba,bn,Ff,Bf,sn,Lo,E_,kf,cr,Ei,ka,xo,w_,A_,Vf,Hf,zf,Gf,R_,ur,Tu,ft,Ct,C_,Ar,em,$i,Va,ye,nn,Do,zn,wi,wu,Ai,hr,dr,Wf,Au,Ru,Cu,Iu,Pu,Lu,Ki,wn,Ri,Gn,Ha,fr,pr,mr,qi,Yi,vs,yo,za,Ga,Ms,Ot,Wa,I_,Ve,Uo,No,Zt,P_,vo,Uu,pn,L_,In,Nu,gr,Tn,Mo,qt,Qe,Li,ln,Di,D_,rn,Ci,Ou,Xa,ji,Fu,$a,Bu,Ui,mn,Xf,Ss,qa,$f,Ya,ja,Za,ku,Ka,qf,Ja,Bt,Yf,jf,Zf,N_,Kf,el,Vu,Jf,Hu,Ls,Rr,Cr,Qf,O_,jn,es,_r,ep,tl,tp,F_,So,bo,Oo,zu,B_,k_,Pn,bs,V_,nl,Ir,cn,Tl,El,np,To,il,Gu,ip,Ni,sp,rp,Dn,Fo,Pr,op,ju,rl,ol,Bo,ko,ts,wl,Vo,Lr,Ho,Ic,z_,G_,un,Al,Ds,gn,Rl,Cl,ri,Il,zo,Pl,Ll,_n,Oi,Go,oi,Dl,li,Fi,ci,Us,ii,Ul,nm,ui,Ii,Zu,Dr,xr,Ur,Wo,Ns,Wu,up,hp,Xo,ll,cl,ni,$o,Zi,dp,fp,Ft,Ku,qo,Ju,Yo,ns,Qu,is,jo,Bi,Xu,Zo,yr,vr,Nl,Ol,Ko,Fl,Th,Y_,Eh,j_,Z_,K_,J_,Q_,ex,tx,eh,vt,Bl,nx,Nr,Or,Fr,Jo,Qo,Ah=ys(()=>{ss={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pp=0,th=1,mp=2,ea=1,gp=2,Br=3,qn=0,Jt=1,hn=2,hi=0,As=1,nh=2,ih=3,sh=4,_p=5,Ji=100,xp=101,yp=102,vp=103,Mp=104,Sp=200,bp=201,Tp=202,Ep=203,hl=204,dl=205,wp=206,Ap=207,Rp=208,Cp=209,Ip=210,Pp=211,Lp=212,Dp=213,Up=214,fl=0,pl=1,ml=2,Rs=3,gl=4,_l=5,xl=6,yl=7,rh=0,Np=1,Op=2,Zn=0,oh=1,ah=2,lh=3,ta=4,ch=5,uh=6,hh=7,$u="attached",Fp="detached",dh=300,os=301,Os=302,kl=303,Vl=304,na=306,Qi=1e3,Ln=1001,Sr=1002,Dt=1003,Hl=1004,Fs=1005,Ut=1006,kr=1007,Kn=1008,xn=1009,fh=1010,ph=1011,Vr=1012,zl=1013,Jn=1014,An=1015,di=1016,Gl=1017,Wl=1018,Hr=1020,mh=35902,gh=35899,_h=1021,xh=1022,Rn=1023,si=1026,as=1027,Xl=1028,$l=1029,Bs=1030,ql=1031,Yl=1033,ia=33776,sa=33777,ra=33778,oa=33779,jl=35840,Zl=35841,Kl=35842,Jl=35843,Ql=36196,ec=37492,tc=37496,nc=37488,ic=37489,sc=37490,rc=37491,oc=37808,ac=37809,lc=37810,cc=37811,uc=37812,hc=37813,dc=37814,fc=37815,pc=37816,mc=37817,gc=37818,_c=37819,xc=37820,yc=37821,vc=36492,Mc=36494,Sc=36495,bc=36283,Tc=36284,Ec=36285,wc=36286,Bp=2200,kp=2201,Vp=2202,Cs=2300,Is=2301,ul=2302,qu=2303,Es=2400,ws=2401,Ao=2402,Ac=2500,Hp=2501,yh=0,aa=1,zr=2,zp=3200,la=0,Gp=1,ki="",Vt="srgb",Kt="srgb-linear",Ro="linear",dt="srgb",Ts=7680,Yu=519,Wp=512,Xp=513,$p=514,Rc=515,qp=516,Yp=517,Cc=518,jp=519,vl=35044,vh=35048,Mh="300 es",Xn=2e3,br=2001;Lf={},Er=null;Qp={[fl]:pl,[ml]:xl,[gl]:yl,[Rs]:_l,[pl]:fl,[xl]:ml,[yl]:gl,[_l]:Rs},Yn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Df=1234567,Eo=Math.PI/180,Ps=180/Math.PI;tt={DEG2RAD:Eo,RAD2DEG:Ps,generateUUID:$n,clamp:je,euclideanModulo:Sh,mapLinear:s_,inverseLerp:r_,lerp:wo,damp:o_,pingpong:a_,smoothstep:l_,smootherstep:c_,randInt:u_,randFloat:h_,randFloatSpread:d_,seededRandom:f_,degToRad:p_,radToDeg:m_,isPowerOfTwo:g_,ceilPowerOfTwo:__,floorPowerOfTwo:x_,setQuaternionFromProperEuler:y_,normalize:gt,denormalize:Wn},Le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Me=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],p=r[o+1],f=r[o+2],_=r[o+3];if(h!==_||l!==d||c!==p||u!==f){let m=l*d+c*p+u*f+h*_;m<0&&(d=-d,p=-p,f=-f,_=-_,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),S=Math.sin(y);g=Math.sin(g*y)/S,a=Math.sin(a*y)/S,l=l*g+d*a,c=c*g+p*a,u=u*g+f*a,h=h*g+_*a}else{l=l*g+d*a,c=c*g+p*a,u=u*g+f*a,h=h*g+_*a;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],p=r[o+2],f=r[o+3];return e[t]=a*f+u*h+l*p-c*d,e[t+1]=l*f+u*d+c*h-a*p,e[t+2]=c*f+u*p+a*d-l*h,e[t+3]=u*f-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),p=l(s/2),f=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*f,this._y=c*p*h-d*u*f,this._z=c*u*f+d*p*h,this._w=c*u*h-d*p*f;break;case"YXZ":this._x=d*u*h+c*p*f,this._y=c*p*h-d*u*f,this._z=c*u*f-d*p*h,this._w=c*u*h+d*p*f;break;case"ZXY":this._x=d*u*h-c*p*f,this._y=c*p*h+d*u*f,this._z=c*u*f+d*p*h,this._w=c*u*h-d*p*f;break;case"ZYX":this._x=d*u*h-c*p*f,this._y=c*p*h+d*u*f,this._z=c*u*f-d*p*h,this._w=c*u*h+d*p*f;break;case"YZX":this._x=d*u*h+c*p*f,this._y=c*p*h+d*u*f,this._z=c*u*f-d*p*h,this._w=c*u*h-d*p*f;break;case"XZY":this._x=d*u*h-c*p*f,this._y=c*p*h-d*u*f,this._z=c*u*f+d*p*h,this._w=c*u*h+d*p*f;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vu.copy(this).projectOnVector(e),this.sub(vu)}reflect(e){return this.sub(vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vu=new C,Uf=new Me,De=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],f=n[8],_=s[0],m=s[3],g=s[6],y=s[1],S=s[4],v=s[7],E=s[2],b=s[5],A=s[8];return r[0]=o*_+a*y+l*E,r[3]=o*m+a*S+l*b,r[6]=o*g+a*v+l*A,r[1]=c*_+u*y+h*E,r[4]=c*m+u*S+h*b,r[7]=c*g+u*v+h*A,r[2]=d*_+p*y+f*E,r[5]=d*m+p*S+f*b,r[8]=d*g+p*v+f*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,f=t*h+n*d+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Mu.makeScale(e,t)),this}rotate(e){return this.premultiply(Mu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Mu=new De,Nf=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Of=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke=v_();Ml=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ar===void 0&&(ar=Tr("canvas")),ar.width=e.width,ar.height=e.height;let s=ar.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ar}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Tr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},M_=0,wr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Su(s[o].image)):r.push(Su(s[o]))}else r=Su(s);n.url=r}return t||(e.images[this.uuid]=n),n}};S_=0,bu=new C,Yt=class i extends Yn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=Ut,o=Kn,a=Rn,l=xn,c=i.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=$n(),this.name="",this.source=new wr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bu).x}get height(){return this.source.getSize(bu).y}get depth(){return this.source.getSize(bu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qi:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case Sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qi:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case Sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=dh;Yt.DEFAULT_ANISOTROPY=1;Tt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],f=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(f-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(p+1)/2,E=(g+1)/2,b=(u+d)/4,A=(h+_)/4,x=(f+m)/4;return S>v&&S>E?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=b/n,r=A/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=x/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=A/r,s=x/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-f)*(m-f)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-f)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sl=class extends Yn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Yt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new wr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends Sl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Po=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},bl=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Re=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,d,p,f,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,p,f,_,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,p,f,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=p,g[7]=f,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,s=1/lr.setFromMatrixColumn(e,0).length(),r=1/lr.setFromMatrixColumn(e,1).length(),o=1/lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,p=o*h,f=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+f*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=f+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,p=l*h,f=c*u,_=c*h;t[0]=d+_*a,t[4]=f*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-f,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,p=l*h,f=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=f+p*a,t[1]=p+f*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,p=o*h,f=a*u,_=a*h;t[0]=l*u,t[4]=f*c-p,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=p*c-f,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,f=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=f*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+f,t[10]=d-_*h}else if(e.order==="XZY"){let d=o*l,p=o*c,f=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=p*h-f,t[2]=f*h-p,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(b_,e,T_)}lookAt(e,t,n){let s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Xi.crossVectors(n,bn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Xi.crossVectors(n,bn)),Xi.normalize(),Ba.crossVectors(bn,Xi),s[0]=Xi.x,s[4]=Ba.x,s[8]=bn.x,s[1]=Xi.y,s[5]=Ba.y,s[9]=bn.y,s[2]=Xi.z,s[6]=Ba.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],f=n[2],_=n[6],m=n[10],g=n[14],y=n[3],S=n[7],v=n[11],E=n[15],b=s[0],A=s[4],x=s[8],T=s[12],N=s[1],R=s[5],L=s[9],F=s[13],O=s[2],H=s[6],k=s[10],V=s[14],Z=s[3],j=s[7],ee=s[11],fe=s[15];return r[0]=o*b+a*N+l*O+c*Z,r[4]=o*A+a*R+l*H+c*j,r[8]=o*x+a*L+l*k+c*ee,r[12]=o*T+a*F+l*V+c*fe,r[1]=u*b+h*N+d*O+p*Z,r[5]=u*A+h*R+d*H+p*j,r[9]=u*x+h*L+d*k+p*ee,r[13]=u*T+h*F+d*V+p*fe,r[2]=f*b+_*N+m*O+g*Z,r[6]=f*A+_*R+m*H+g*j,r[10]=f*x+_*L+m*k+g*ee,r[14]=f*T+_*F+m*V+g*fe,r[3]=y*b+S*N+v*O+E*Z,r[7]=y*A+S*R+v*H+E*j,r[11]=y*x+S*L+v*k+E*ee,r[15]=y*T+S*F+v*V+E*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],f=e[3],_=e[7],m=e[11],g=e[15],y=l*p-c*d,S=a*p-c*h,v=a*d-l*h,E=o*p-c*u,b=o*d-l*u,A=o*h-a*u;return t*(_*y-m*S+g*v)-n*(f*y-m*E+g*b)+s*(f*S-_*E+g*A)-r*(f*v-_*b+m*A)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],f=e[12],_=e[13],m=e[14],g=e[15],y=t*a-n*o,S=t*l-s*o,v=t*c-r*o,E=n*l-s*a,b=n*c-r*a,A=s*c-r*l,x=u*_-h*f,T=u*m-d*f,N=u*g-p*f,R=h*m-d*_,L=h*g-p*_,F=d*g-p*m,O=y*F-S*L+v*R+E*N-b*T+A*x;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/O;return e[0]=(a*F-l*L+c*R)*H,e[1]=(s*L-n*F-r*R)*H,e[2]=(_*A-m*b+g*E)*H,e[3]=(d*b-h*A-p*E)*H,e[4]=(l*N-o*F-c*T)*H,e[5]=(t*F-s*N+r*T)*H,e[6]=(m*v-f*A-g*S)*H,e[7]=(u*A-d*v+p*S)*H,e[8]=(o*L-a*N+c*x)*H,e[9]=(n*N-t*L-r*x)*H,e[10]=(f*b-_*v+g*y)*H,e[11]=(h*v-u*b-p*y)*H,e[12]=(a*T-o*R-l*x)*H,e[13]=(t*R-n*T+s*x)*H,e[14]=(_*S-f*E-m*y)*H,e[15]=(u*E-h*S+d*y)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,f=r*h,_=o*u,m=o*h,g=a*h,y=l*c,S=l*u,v=l*h,E=n.x,b=n.y,A=n.z;return s[0]=(1-(_+g))*E,s[1]=(p+v)*E,s[2]=(f-S)*E,s[3]=0,s[4]=(p-v)*b,s[5]=(1-(d+g))*b,s[6]=(m+y)*b,s[7]=0,s[8]=(f+S)*A,s[9]=(m-y)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let o=lr.set(s[0],s[1],s[2]).length(),a=lr.set(s[4],s[5],s[6]).length(),l=lr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Hn.copy(this);let c=1/o,u=1/a,h=1/l;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=h,Hn.elements[9]*=h,Hn.elements[10]*=h,t.setFromRotationMatrix(Hn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Xn,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),f,_;if(l)f=r/(o-r),_=o*r/(o-r);else if(a===Xn)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===br)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Xn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),f,_;if(l)f=1/(o-r),_=o/(o-r);else if(a===Xn)f=-2/(o-r),_=-(o+r)/(o-r);else if(a===br)f=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},lr=new C,Hn=new Re,b_=new C(0,0,0),T_=new C(1,1,1),Xi=new C,Ba=new C,bn=new C,Ff=new Re,Bf=new Me,sn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ff.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ff,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bf.setFromEuler(this),this.setFromQuaternion(Bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";Lo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},E_=0,kf=new C,cr=new Me,Ei=new Re,ka=new C,xo=new C,w_=new C,A_=new Me,Vf=new C(1,0,0),Hf=new C(0,1,0),zf=new C(0,0,1),Gf={type:"added"},R_={type:"removed"},ur={type:"childadded",child:null},Tu={type:"childremoved",child:null},ft=class i extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new sn,n=new Me,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new De}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(Vf,e)}rotateY(e){return this.rotateOnAxis(Hf,e)}rotateZ(e){return this.rotateOnAxis(zf,e)}translateOnAxis(e,t){return kf.copy(e).applyQuaternion(this.quaternion),this.position.add(kf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vf,e)}translateY(e){return this.translateOnAxis(Hf,e)}translateZ(e){return this.translateOnAxis(zf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ka.copy(e):ka.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(xo,ka,this.up):Ei.lookAt(ka,xo,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),cr.setFromRotationMatrix(Ei),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gf),ur.child=e,this.dispatchEvent(ur),ur.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R_),Tu.child=e,this.dispatchEvent(Tu),Tu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gf),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,w_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,A_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),f=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};ft.DEFAULT_UP=new C(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Ct=class extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},C_={type:"move"},Ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(C_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},em={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Va={h:0,s:0,l:0};ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=Sh(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Eu(o,r,e+1/3),this.g=Eu(o,r,e),this.b=Eu(o,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let n=em[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Ke.workingToColorSpace(nn.copy(this),e),Math.round(je(nn.r*255,0,255))*65536+Math.round(je(nn.g*255,0,255))*256+Math.round(je(nn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(nn.copy(this),t);let n=nn.r,s=nn.g,r=nn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Vt){Ke.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,s=nn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Va);let n=wo($i.h,Va.h,t),s=wo($i.s,Va.s,t),r=wo($i.l,Va.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new ye;ye.NAMES=em;Do=class extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},zn=new C,wi=new C,wu=new C,Ai=new C,hr=new C,dr=new C,Wf=new C,Au=new C,Ru=new C,Cu=new C,Iu=new Tt,Pu=new Tt,Lu=new Tt,Ki=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),zn.subVectors(e,t),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){zn.subVectors(s,t),wi.subVectors(n,t),wu.subVectors(e,t);let o=zn.dot(zn),a=zn.dot(wi),l=zn.dot(wu),c=wi.dot(wi),u=wi.dot(wu),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,p=(c*l-a*u)*d,f=(o*u-a*l)*d;return r.set(1-p-f,f,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Iu.setScalar(0),Pu.setScalar(0),Lu.setScalar(0),Iu.fromBufferAttribute(e,t),Pu.fromBufferAttribute(e,n),Lu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Iu,r.x),o.addScaledVector(Pu,r.y),o.addScaledVector(Lu,r.z),o}static isFrontFacing(e,t,n,s){return zn.subVectors(n,t),wi.subVectors(e,t),zn.cross(wi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),zn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;hr.subVectors(s,n),dr.subVectors(r,n),Au.subVectors(e,n);let l=hr.dot(Au),c=dr.dot(Au);if(l<=0&&c<=0)return t.copy(n);Ru.subVectors(e,s);let u=hr.dot(Ru),h=dr.dot(Ru);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(hr,o);Cu.subVectors(e,r);let p=hr.dot(Cu),f=dr.dot(Cu);if(f>=0&&p<=f)return t.copy(r);let _=p*c-l*f;if(_<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(dr,a);let m=u*f-p*h;if(m<=0&&h-u>=0&&p-f>=0)return Wf.subVectors(r,s),a=(h-u)/(h-u+(p-f)),t.copy(s).addScaledVector(Wf,a);let g=1/(m+_+d);return o=_*g,a=d*g,t.copy(n).addScaledVector(hr,o).addScaledVector(dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ha.copy(n.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yo),za.subVectors(this.max,yo),fr.subVectors(e.a,yo),pr.subVectors(e.b,yo),mr.subVectors(e.c,yo),qi.subVectors(pr,fr),Yi.subVectors(mr,pr),vs.subVectors(fr,mr);let t=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-vs.z,vs.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,vs.z,0,-vs.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-vs.y,vs.x,0];return!Du(t,fr,pr,mr,za)||(t=[1,0,0,0,1,0,0,0,1],!Du(t,fr,pr,mr,za))?!1:(Ga.crossVectors(qi,Yi),t=[Ga.x,Ga.y,Ga.z],Du(t,fr,pr,mr,za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ri=[new C,new C,new C,new C,new C,new C,new C,new C],Gn=new C,Ha=new wn,fr=new C,pr=new C,mr=new C,qi=new C,Yi=new C,vs=new C,yo=new C,za=new C,Ga=new C,Ms=new C;Ot=new C,Wa=new Le,I_=0,Ve=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:I_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vl,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wa.fromBufferAttribute(this,t),Wa.applyMatrix3(e),this.setXY(t,Wa.x,Wa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vl&&(e.usage=this.usage),e}},Uo=class extends Ve{constructor(e,t,n){super(new Uint16Array(e),t,n)}},No=class extends Ve{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Zt=class extends Ve{constructor(e,t,n){super(new Float32Array(e),t,n)}},P_=new wn,vo=new C,Uu=new C,pn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):P_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);let t=vo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(vo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(Uu)),this.expandByPoint(vo.copy(e.center).sub(Uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},L_=0,In=new Re,Nu=new ft,gr=new C,Tn=new wn,Mo=new wn,qt=new C,Qe=class i extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(n_(e)?No:Uo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,n){return In.makeTranslation(e,t,n),this.applyMatrix4(In),this}scale(e,t,n){return In.makeScale(e,t,n),this.applyMatrix4(In),this}lookAt(e){return Nu.lookAt(e),Nu.updateMatrix(),this.applyMatrix4(Nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Mo.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Tn.min,Mo.min),Tn.expandByPoint(qt),qt.addVectors(Tn.max,Mo.max),Tn.expandByPoint(qt)):(Tn.expandByPoint(Mo.min),Tn.expandByPoint(Mo.max))}Tn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qt.fromBufferAttribute(a,c),l&&(gr.fromBufferAttribute(e,c),qt.add(gr)),s=Math.max(s,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new C,l[x]=new C;let c=new C,u=new C,h=new C,d=new Le,p=new Le,f=new Le,_=new C,m=new C;function g(x,T,N){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,N),d.fromBufferAttribute(r,x),p.fromBufferAttribute(r,T),f.fromBufferAttribute(r,N),u.sub(c),h.sub(c),p.sub(d),f.sub(d);let R=1/(p.x*f.y-f.x*p.y);isFinite(R)&&(_.copy(u).multiplyScalar(f.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-f.x).multiplyScalar(R),a[x].add(_),a[T].add(_),a[N].add(_),l[x].add(m),l[T].add(m),l[N].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,T=y.length;x<T;++x){let N=y[x],R=N.start,L=N.count;for(let F=R,O=R+L;F<O;F+=3)g(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let S=new C,v=new C,E=new C,b=new C;function A(x){E.fromBufferAttribute(s,x),b.copy(E);let T=a[x];S.copy(T),S.sub(E.multiplyScalar(E.dot(T))).normalize(),v.crossVectors(b,T);let R=v.dot(l[x])<0?-1:1;o.setXYZW(x,S.x,S.y,S.z,R)}for(let x=0,T=y.length;x<T;++x){let N=y[x],R=N.start,L=N.count;for(let F=R,O=R+L;F<O;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,f),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),p=0,f=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let g=0;g<u;g++)d[f++]=c[p++]}return new Ve(d,u,h)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Li=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vl,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ln=new C,Di=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Co("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ve(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Co("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},D_=0,rn=class extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=As,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=dl,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hl&&(n.blendSrc=this.blendSrc),this.blendDst!==dl&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ci=new C,Ou=new C,Xa=new C,ji=new C,Fu=new C,$a=new C,Bu=new C,Ui=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ou.copy(e).add(t).multiplyScalar(.5),Xa.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(Ou);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Xa),a=ji.dot(this.direction),l=-ji.dot(Xa),c=ji.lengthSq(),u=Math.abs(1-o*o),h,d,p,f;if(u>0)if(h=o*l-a,d=o*a-l,f=r*u,h>=0)if(d>=-f)if(d<=f){let _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-f?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=f?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ou).addScaledVector(Xa,d),p}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);let n=Ci.dot(this.direction),s=Ci.dot(Ci)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,s,r){Fu.subVectors(t,e),$a.subVectors(n,e),Bu.crossVectors(Fu,$a);let o=this.direction.dot(Bu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);let l=a*this.direction.dot($a.crossVectors(ji,$a));if(l<0)return null;let c=a*this.direction.dot(Fu.cross(ji));if(c<0||l+c>o)return null;let u=-a*ji.dot(Bu);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mn=class extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xf=new Re,Ss=new Ui,qa=new pn,$f=new C,Ya=new C,ja=new C,Za=new C,ku=new C,Ka=new C,qf=new C,Ja=new C,Bt=class extends ft{constructor(e=new Qe,t=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ka.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(ku.fromBufferAttribute(h,e),o?Ka.addScaledVector(ku,u):Ka.addScaledVector(ku.sub(t),u))}t.add(Ka)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(qa.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(qa,$f)===null||Ss.origin.distanceToSquared($f)>(e.far-e.near)**2))&&(Xf.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(Xf),!(n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,_=d.length;f<_;f++){let m=d[f],g=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,E=S;v<E;v+=3){let b=a.getX(v),A=a.getX(v+1),x=a.getX(v+2);s=Qa(this,g,e,n,c,u,h,b,A,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=f,g=_;m<g;m+=3){let y=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);s=Qa(this,o,e,n,c,u,h,y,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,_=d.length;f<_;f++){let m=d[f],g=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,E=S;v<E;v+=3){let b=v,A=v+1,x=v+2;s=Qa(this,g,e,n,c,u,h,b,A,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=f,g=_;m<g;m+=3){let y=m,S=m+1,v=m+2;s=Qa(this,o,e,n,c,u,h,y,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Yf=new C,jf=new Tt,Zf=new Tt,N_=new C,Kf=new Re,el=new C,Vu=new pn,Jf=new Re,Hu=new Ui,Ls=class extends Bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$u,this.bindMatrix=new Re,this.bindMatrixInverse=new Re,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,el),this.boundingBox.expandByPoint(el)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,el),this.boundingSphere.expandByPoint(el)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vu.copy(this.boundingSphere),Vu.applyMatrix4(s),e.ray.intersectsSphere(Vu)!==!1&&(Jf.copy(s).invert(),Hu.copy(e.ray).applyMatrix4(Jf),!(this.boundingBox!==null&&Hu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Hu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Tt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$u?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Fp?this.bindMatrixInverse.copy(this.bindMatrix).invert():we("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;jf.fromBufferAttribute(s.attributes.skinIndex,e),Zf.fromBufferAttribute(s.attributes.skinWeight,e),Yf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Zf.getComponent(r);if(o!==0){let a=jf.getComponent(r);Kf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(N_.copy(Yf).applyMatrix4(Kf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Rr=class extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},Cr=class extends Yt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Dt,u=Dt,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qf=new Re,O_=new Re,jn=class i{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){we("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:O_;Qf.multiplyMatrices(a,t[r]),Qf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Cr(t,e,e,Rn,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(we("Skeleton: No bone found with UUID:",r),o=new Rr),this.bones.push(o),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},es=class extends Ve{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_r=new Re,ep=new Re,tl=[],tp=new wn,F_=new Re,So=new Bt,bo=new pn,Oo=class extends Bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new es(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,F_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),tp.copy(e.boundingBox).applyMatrix4(_r),this.boundingBox.union(tp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),bo.copy(e.boundingSphere).applyMatrix4(_r),this.boundingSphere.union(bo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(So.geometry=this.geometry,So.material=this.material,So.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bo.copy(this.boundingSphere),bo.applyMatrix4(n),e.ray.intersectsSphere(bo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_r),ep.multiplyMatrices(n,_r),So.matrixWorld=ep,So.raycast(e,tl);for(let o=0,a=tl.length;o<a;o++){let l=tl[o];l.instanceId=r,l.object=this,t.push(l)}tl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new es(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cr(new Float32Array(s*this.count),s,this.count,Xl,An));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zu=new C,B_=new C,k_=new De,Pn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=zu.subVectors(n,t).cross(B_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(zu),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||k_.getNormalMatrix(e),s=this.coplanarPoint(zu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},bs=new pn,V_=new Le(.5,.5),nl=new C,Ir=class{constructor(e=new Pn,t=new Pn,n=new Pn,s=new Pn,r=new Pn,o=new Pn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],p=r[7],f=r[8],_=r[9],m=r[10],g=r[11],y=r[12],S=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-o,p-u,g-f,E-y).normalize(),s[1].setComponents(c+o,p+u,g+f,E+y).normalize(),s[2].setComponents(c+a,p+h,g+_,E+S).normalize(),s[3].setComponents(c-a,p-h,g-_,E-S).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,p-d,g-m,E-v).normalize();else if(s[4].setComponents(c-l,p-d,g-m,E-v).normalize(),t===Xn)s[5].setComponents(c+l,p+d,g+m,E+v).normalize();else if(t===br)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){bs.center.set(0,0,0);let t=V_.distanceTo(e.center);return bs.radius=.7071067811865476+t,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(nl.x=s.normal.x>0?e.max.x:e.min.x,nl.y=s.normal.y>0?e.max.y:e.min.y,nl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(nl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},cn=class extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Tl=new C,El=new C,np=new Re,To=new Ui,il=new pn,Gu=new C,ip=new C,Ni=class extends ft{constructor(e=new Qe,t=new cn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Tl.fromBufferAttribute(t,s-1),El.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Tl.distanceTo(El);e.setAttribute("lineDistance",new Zt(n,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),il.copy(n.boundingSphere),il.applyMatrix4(s),il.radius+=r,e.ray.intersectsSphere(il)===!1)return;np.copy(s).invert(),To.copy(e.ray).applyMatrix4(np);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let p=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let _=p,m=f-1;_<m;_+=c){let g=u.getX(_),y=u.getX(_+1),S=sl(this,e,To,l,g,y,_);S&&t.push(S)}if(this.isLineLoop){let _=u.getX(f-1),m=u.getX(p),g=sl(this,e,To,l,_,m,f-1);g&&t.push(g)}}else{let p=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let _=p,m=f-1;_<m;_+=c){let g=sl(this,e,To,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=sl(this,e,To,l,f-1,p,f-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};sp=new C,rp=new C,Dn=class extends Ni{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)sp.fromBufferAttribute(t,s),rp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+sp.distanceTo(rp);e.setAttribute("lineDistance",new Zt(n,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Fo=class extends Ni{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Pr=class extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},op=new Re,ju=new Ui,rl=new pn,ol=new C,Bo=class extends ft{constructor(e=new Qe,t=new Pr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rl.copy(n.boundingSphere),rl.applyMatrix4(s),rl.radius+=r,e.ray.intersectsSphere(rl)===!1)return;op.copy(s).invert(),ju.copy(e.ray).applyMatrix4(op);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let f=d,_=p;f<_;f++){let m=c.getX(f);ol.fromBufferAttribute(h,m),ap(ol,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let f=d,_=p;f<_;f++)ol.fromBufferAttribute(h,f),ap(ol,f,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};ko=class extends Yt{constructor(e=[],t=os,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ts=class extends Yt{constructor(e,t,n=Jn,s,r,o,a=Dt,l=Dt,c,u=si,h=1){if(u!==si&&u!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},wl=class extends ts{constructor(e,t=Jn,n=os,s,r,o=Dt,a=Dt,l,c=si){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Vo=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Lr=class i extends Qe{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,p=0;f("z","y","x",-1,-1,n,t,e,o,r,0),f("z","y","x",1,-1,n,t,-e,o,r,1),f("x","z","y",1,1,e,n,t,s,o,2),f("x","z","y",1,-1,e,n,-t,s,o,3),f("x","y","z",1,-1,e,t,n,s,r,4),f("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(h,2));function f(_,m,g,y,S,v,E,b,A,x,T){let N=v/A,R=E/x,L=v/2,F=E/2,O=b/2,H=A+1,k=x+1,V=0,Z=0,j=new C;for(let ee=0;ee<k;ee++){let fe=ee*R-F;for(let ce=0;ce<H;ce++){let Ge=ce*N-L;j[_]=Ge*y,j[m]=fe*S,j[g]=O,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[g]=b>0?1:-1,u.push(j.x,j.y,j.z),h.push(ce/A),h.push(1-ee/x),V+=1}}for(let ee=0;ee<x;ee++)for(let fe=0;fe<A;fe++){let ce=d+fe+H*ee,Ge=d+fe+H*(ee+1),St=d+(fe+1)+H*(ee+1),_t=d+(fe+1)+H*ee;l.push(ce,Ge,_t),l.push(Ge,St,_t),Z+=6}a.addGroup(p,Z,T),p+=Z,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ho=class i extends Qe{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,p=[],f=[],_=[],m=[];for(let g=0;g<u;g++){let y=g*d-o;for(let S=0;S<c;S++){let v=S*h-r;f.push(v,-y,0),_.push(0,0,1),m.push(S/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let S=y+c*g,v=y+c*(g+1),E=y+1+c*(g+1),b=y+1+c*g;p.push(S,v,b),p.push(v,E,b)}this.setIndex(p),this.setAttribute("position",new Zt(f,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};Ic={clone:ks,merge:on},z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z_,this.fragmentShader=G_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=H_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Al=class extends un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ds=class extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=la,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gn=class extends Ds{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Rl=class extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cl=class extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};ri=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Il=class extends ri{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Es,endingEnd:Es}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ws:r=e,a=2*t-n;break;case Ao:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ws:o=e,l=2*n-t;break;case Ao:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(s-t),_=f*f,m=_*f,g=-d*m+2*d*_-d*f,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*f+1,S=(-1-p)*m+(1.5+p)*_+.5*f,v=p*m-p*_;for(let E=0;E!==a;++E)r[E]=g*o[u+E]+y*o[c+E]+S*o[l+E]+v*o[h+E];return r}},zo=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Pl=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ll=class extends ri{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.settings||this.DefaultSettings_,h=u.inTangents,d=u.outTangents;if(!h||!d){let _=(n-t)/(s-t),m=1-_;for(let g=0;g!==a;++g)r[g]=o[c+g]*m+o[l+g]*_;return r}let p=a*2,f=e-1;for(let _=0;_!==a;++_){let m=o[c+_],g=o[l+_],y=f*p+_*2,S=d[y],v=d[y+1],E=e*p+_*2,b=h[E],A=h[E+1],x=(n-t)/(s-t),T,N,R,L,F;for(let O=0;O<8;O++){T=x*x,N=T*x,R=1-x,L=R*R,F=L*R;let k=F*t+3*L*x*S+3*R*T*b+N*s-n;if(Math.abs(k)<1e-10)break;let V=3*L*(S-t)+6*R*x*(b-S)+3*T*(s-b);if(Math.abs(V)<1e-10)break;x=x-k/V,x=Math.max(0,Math.min(1,x))}r[_]=F*m+3*L*x*v+3*R*T*A+N*g}return r}},_n=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=al(t,this.TimeBufferType),this.values=al(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:al(e.times,Array),values:al(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ll(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Cs:t=this.InterpolantFactoryMethodDiscrete;break;case Is:t=this.InterpolantFactoryMethodLinear;break;case ul:t=this.InterpolantFactoryMethodSmooth;break;case qu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return we("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return Is;case this.InterpolantFactoryMethodSmooth:return ul;case this.InterpolantFactoryMethodBezier:return qu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Fe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Fe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&i_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Fe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ul,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,p=h+n;for(let f=0;f!==n;++f){let _=t[h+f];if(_!==t[d+f]||_!==t[p+f]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Is;Oi=class extends _n{constructor(e,t,n){super(e,t,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Cs;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;Go=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};Go.prototype.ValueTypeName="color";oi=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};oi.prototype.ValueTypeName="number";Dl=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Me.slerpFlat(r,0,o,c-a,o,c,l);return r}},li=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Dl(this.times,this.values,this.getValueSize(),e)}};li.prototype.ValueTypeName="quaternion";li.prototype.InterpolantFactoryMethodSmooth=void 0;Fi=class extends _n{constructor(e,t,n){super(e,t,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Cs;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;ci=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};ci.prototype.ValueTypeName="vector";Us=class{constructor(e="",t=-1,n=[],s=Ac){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=$n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push($_(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(_n.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=W_(l);l=lp(l,1,u),c=lp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new oi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(we("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Fe("AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,p,f,_){if(p.length!==0){let m=[],g=[];tm(p,m,g,f),m.length!==0&&_.push(new h(d,m,g))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},f;for(f=0;f<d.length;f++)if(d[f].morphTargets)for(let _=0;_<d[f].morphTargets.length;_++)p[d[f].morphTargets[_]]=-1;for(let _ in p){let m=[],g=[];for(let y=0;y!==d[f].morphTargets.length;++y){let S=d[f];m.push(S.time),g.push(S.morphTarget===_?1:0)}s.push(new oi(".morphTargetInfluence["+_+"]",m,g))}l=p.length*o}else{let p=".bones["+t[h].name+"]";n(ci,p+".position",d,"pos",s),n(li,p+".quaternion",d,"rot",s),n(ci,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};ii={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(cp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!cp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};Ul=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let p=c[h],f=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nm=new Ul,ui=class{constructor(e){this.manager=e!==void 0?e:nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ui.DEFAULT_MATERIAL_NAME="__DEFAULT";Ii={},Zu=class extends Error{constructor(e,t){super(e),this.response=t}},Dr=class extends ui{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ii.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ii[e]!==void 0){Ii[e].push({onLoad:t,onProgress:n,onError:s});return}Ii[e]=[],Ii[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&we("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ii[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,f=p!==0,_=0,m=new ReadableStream({start(g){y();function y(){h.read().then(({done:S,value:v})=>{if(S)g.close();else{_+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:f,loaded:_,total:p});for(let b=0,A=u.length;b<A;b++){let x=u[b];x.onProgress&&x.onProgress(E)}g.enqueue(v),y()}},S=>{g.error(S)})}}});return new Response(m)}else throw new Zu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(f=>p.decode(f))}}}).then(c=>{ii.add(`file:${e}`,c);let u=Ii[e];delete Ii[e];for(let h=0,d=u.length;h<d;h++){let p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=Ii[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ii[e];for(let h=0,d=u.length;h<d;h++){let p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},xr=new WeakMap,Ur=class extends ui{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ii.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=xr.get(o);h===void 0&&(h=[],xr.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=Tr("img");function l(){u(),t&&t(this);let h=xr.get(this)||[];for(let d=0;d<h.length;d++){let p=h[d];p.onLoad&&p.onLoad(this)}xr.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),ii.remove(`image:${e}`);let d=xr.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onError&&f.onError(h)}xr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ii.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}},Wo=class extends ui{constructor(e){super(e)}load(e,t,n,s){let r=new Yt,o=new Ur(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ns=class extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Wu=new Re,up=new C,hp=new C,Xo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;up.setFromMatrixPosition(e.matrixWorld),t.position.copy(up),hp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hp),t.updateMatrixWorld(),Wu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===br||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ll=new C,cl=new Me,ni=new C,$o=class extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ll,cl,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ll,cl,ni.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ll,cl,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ll,cl,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zi=new C,dp=new Le,fp=new Le,Ft=class extends $o{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,dp,fp),t.subVectors(fp,dp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Eo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ku=class extends Xo{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ps*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},qo=class extends Ns{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ku}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ju=class extends Xo{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0}},Yo=class extends Ns{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ju}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ns=class extends $o{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qu=class extends Xo{constructor(){super(new ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},is=class extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Qu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},jo=class extends Ns{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Bi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Xu=new WeakMap,Zo=class extends ui{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&we("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&we("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ii.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Xu.has(o)===!0)s&&s(Xu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ii.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Xu.set(l,c),ii.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ii.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},yr=-90,vr=1,Nl=class extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ft(yr,vr,e,t);s.layers=this.layers,this.add(s);let r=new Ft(yr,vr,e,t);r.layers=this.layers,this.add(r);let o=new Ft(yr,vr,e,t);o.layers=this.layers,this.add(o);let a=new Ft(yr,vr,e,t);a.layers=this.layers,this.add(a);let l=new Ft(yr,vr,e,t);l.layers=this.layers,this.add(l);let c=new Ft(yr,vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Ol=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ko=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=q_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};Fl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Me.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;Me.multiplyQuaternionsFlat(e,o,e,t,e,n),Me.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},Th="\\[\\]\\.:\\/",Y_=new RegExp("["+Th+"]","g"),Eh="[^"+Th+"]",j_="[^"+Th.replace("\\.","")+"]",Z_=/((?:WC+[\/:])*)/.source.replace("WC",Eh),K_=/(WCOD+)?/.source.replace("WCOD",j_),J_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh),Q_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh),ex=new RegExp("^"+Z_+K_+J_+Q_+"$"),tx=["material","materials","bones","map"],eh=class{constructor(e,t,n){let s=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Y_,"")}static parseTrackName(e){let t=ex.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);tx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Fe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=eh;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Bl=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Es,endingEnd:Es};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=kp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Hp:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Ac:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===Vp;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Bp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=ws,s.endingEnd=ws):(e?s.endingStart=this.zeroSlopeAtStart?ws:Es:s.endingStart=Ao,t?s.endingEnd=this.zeroSlopeAtEnd?ws:Es:s.endingEnd=Ao)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},nx=new Float32Array(1),Nr=class extends Yn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let d=s[h],p=d.name,f=u[p];if(f!==void 0)++f.referenceCount,o[h]=f;else{if(f=o[h],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,l,p));continue}let _=t&&t._propertyBindings[h].binding.parsedPath;f=new Fl(vt.create(n,p,_),d.ValueTypeName,d.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,p),o[h]=f}a[h].resultBuffer=f.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new zo(new Float32Array(2),new Float32Array(2),1,nx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Us.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ac),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Bl(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Us.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Or=class{constructor(e,t,n,s,r,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=r,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},Fr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Jo=class extends Dn{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Qe;s.setAttribute("position",new Zt(t,3)),s.setAttribute("color",new Zt(n,3));let r=new cn({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){let s=new ye,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},Qo=class extends Yn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){we("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183")});function Em(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function sx(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,f)=>p.start-f.start);let d=0;for(let p=1;p<h.length;p++){let f=h[d],_=h[p];_.start<=f.start+f.count+1?f.count=Math.max(f.count,_.start+_.count-f.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,f=h.length;p<f;p++){let _=h[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function kv(i,e,t,n,s,r){let o=new ye(0),a=s===!0?0:1,l,c,u=null,h=0,d=null;function p(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let v=y.backgroundBlurriness>0;S=e.get(S,v)}return S}function f(y){let S=!1,v=p(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),S=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,S){let v=p(S);v&&(v.isCubeTexture||v.mapping===na)?(c===void 0&&(c=new Bt(new Lr(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:ks(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Vs.copy(S.backgroundRotation),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bv.makeRotationFromEuler(Vs)),c.material.toneMapped=Ke.getTransfer(v.colorSpace)!==dt,(u!==v||h!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Bt(new Ho(2,2),new un({name:"BackgroundMaterial",uniforms:ks(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,S){y.getRGB(Pc,bh(i)),t.buffers.color.setClear(Pc.r,Pc.g,Pc.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:f,addToRenderList:_,dispose:g}}function Vv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(R,L,F,O,H){let k=!1,V=h(R,O,F,L);r!==V&&(r=V,c(r.object)),k=p(R,O,F,H),k&&f(R,O,F,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(R,L,F,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function u(R){return i.deleteVertexArray(R)}function h(R,L,F,O){let H=O.wireframe===!0,k=n[L.id];k===void 0&&(k={},n[L.id]=k);let V=R.isInstancedMesh===!0?R.id:0,Z=k[V];Z===void 0&&(Z={},k[V]=Z);let j=Z[F.id];j===void 0&&(j={},Z[F.id]=j);let ee=j[H];return ee===void 0&&(ee=d(l()),j[H]=ee),ee}function d(R){let L=[],F=[],O=[];for(let H=0;H<t;H++)L[H]=0,F[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:O,object:R,attributes:{},index:null}}function p(R,L,F,O){let H=r.attributes,k=L.attributes,V=0,Z=F.getAttributes();for(let j in Z)if(Z[j].location>=0){let fe=H[j],ce=k[j];if(ce===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),fe===void 0||fe.attribute!==ce||ce&&fe.data!==ce.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function f(R,L,F,O){let H={},k=L.attributes,V=0,Z=F.getAttributes();for(let j in Z)if(Z[j].location>=0){let fe=k[j];fe===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor));let ce={};ce.attribute=fe,fe&&fe.data&&(ce.data=fe.data),H[j]=ce,V++}r.attributes=H,r.attributesNum=V,r.index=O}function _(){let R=r.newAttributes;for(let L=0,F=R.length;L<F;L++)R[L]=0}function m(R){g(R,0)}function g(R,L){let F=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;F[R]=1,O[R]===0&&(i.enableVertexAttribArray(R),O[R]=1),H[R]!==L&&(i.vertexAttribDivisor(R,L),H[R]=L)}function y(){let R=r.newAttributes,L=r.enabledAttributes;for(let F=0,O=L.length;F<O;F++)L[F]!==R[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function S(R,L,F,O,H,k,V){V===!0?i.vertexAttribIPointer(R,L,F,H,k):i.vertexAttribPointer(R,L,F,O,H,k)}function v(R,L,F,O){_();let H=O.attributes,k=F.getAttributes(),V=L.defaultAttributeValues;for(let Z in k){let j=k[Z];if(j.location>=0){let ee=H[Z];if(ee===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor)),ee!==void 0){let fe=ee.normalized,ce=ee.itemSize,Ge=e.get(ee);if(Ge===void 0)continue;let St=Ge.buffer,_t=Ge.type,Y=Ge.bytesPerElement,se=_t===i.INT||_t===i.UNSIGNED_INT||ee.gpuType===zl;if(ee.isInterleavedBufferAttribute){let oe=ee.data,ze=oe.stride,Ue=ee.offset;if(oe.isInstancedInterleavedBuffer){for(let Be=0;Be<j.locationSize;Be++)g(j.location+Be,oe.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Be=0;Be<j.locationSize;Be++)m(j.location+Be);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Be=0;Be<j.locationSize;Be++)S(j.location+Be,ce/j.locationSize,_t,fe,ze*Y,(Ue+ce/j.locationSize*Be)*Y,se)}else{if(ee.isInstancedBufferAttribute){for(let oe=0;oe<j.locationSize;oe++)g(j.location+oe,ee.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let oe=0;oe<j.locationSize;oe++)m(j.location+oe);i.bindBuffer(i.ARRAY_BUFFER,St);for(let oe=0;oe<j.locationSize;oe++)S(j.location+oe,ce/j.locationSize,_t,fe,ce*Y,ce/j.locationSize*oe*Y,se)}}else if(V!==void 0){let fe=V[Z];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(j.location,fe);break;case 3:i.vertexAttrib3fv(j.location,fe);break;case 4:i.vertexAttrib4fv(j.location,fe);break;default:i.vertexAttrib1fv(j.location,fe)}}}}y()}function E(){T();for(let R in n){let L=n[R];for(let F in L){let O=L[F];for(let H in O){let k=O[H];for(let V in k)u(k[V].object),delete k[V];delete O[H]}}delete n[R]}}function b(R){if(n[R.id]===void 0)return;let L=n[R.id];for(let F in L){let O=L[F];for(let H in O){let k=O[H];for(let V in k)u(k[V].object),delete k[V];delete O[H]}}delete n[R.id]}function A(R){for(let L in n){let F=n[L];for(let O in F){let H=F[O];if(H[R.id]===void 0)continue;let k=H[R.id];for(let V in k)u(k[V].object),delete k[V];delete H[R.id]}}}function x(R){for(let L in n){let F=n[L],O=R.isInstancedMesh===!0?R.id:0,H=F[O];if(H!==void 0){for(let k in H){let V=H[k];for(let Z in V)u(V[Z].object),delete V[Z];delete H[k]}delete F[O],Object.keys(F).length===0&&delete n[L]}}}function T(){N(),o=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:N,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Hv(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let f=0;f<h;f++)p+=u[f];t.update(p,n,1)}function l(c,u,h,d){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<c.length;f++)o(c[f],u[f],d[f]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_]*d[_];t.update(f,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Rn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let x=A===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==An&&!x)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(we("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,maxSamples:E,samples:b}}function Gv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Pn,a=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){let f=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,g=i.get(h);if(!s||f===null||f.length===0||r&&!m)r?u(null):c();else{let y=r?0:n,S=y*4,v=g.clippingState||null;l.value=v,v=u(f,d,S,p);for(let E=0;E!==S;++E)v[E]=t[E];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,f){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,f!==!0||m===null){let g=p+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,v=p;S!==_;++S,v+=4)o.copy(h[S]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function $v(i){let e=[],t=[],n=[],s=i,r=i-ls+1+im.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ls?l=im[o-i+ls-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,f=6,_=3,m=2,g=1,y=new Float32Array(_*f*p),S=new Float32Array(m*f*p),v=new Float32Array(g*f*p);for(let b=0;b<p;b++){let A=b%3*2/3-1,x=b>2?0:-1,T=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];y.set(T,_*f*b),S.set(d,m*f*b);let N=[b,b,b,b,b,b];v.set(N,g*f*b)}let E=new Qe;E.setAttribute("position",new Ve(y,_)),E.setAttribute("uv",new Ve(S,m)),E.setAttribute("faceIndex",new Ve(v,g)),n.push(new Bt(E,null)),s>ls&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function rm(i,e,t){let n=new En(i,e,t);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function qv(i,e,t){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Yv(i,e,t){let n=new Float32Array(zs),s=new C(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function om(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function am(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?o(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===kl||p===Vl)if(e.has(d)){let f=e.get(d).texture;return a(f,d.mapping)}else{let f=d.image;if(f&&f.height>0){let _=new Uc(f.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let p=d.mapping,f=p===kl||p===Vl,_=p===os||p===Os;if(f||_){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Dc(i)),m=f?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return f&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new Dc(i)),m=f?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,p){return p===kl?d.mapping=os:p===Vl&&(d.mapping=Os),d}function l(d){let p=0,f=6;for(let _=0;_<f;_++)d[_]!==void 0&&p++;return p===f}function c(d){let p=d.target;p.removeEventListener("dispose",c);let f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function u(d){let p=d.target;p.removeEventListener("dispose",u);let f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Zv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Io("WebGLRenderer: "+n+" extension not supported."),s}}}function Kv(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let f in d.attributes)e.remove(d.attributes[f]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(h){let d=[],p=h.index,f=h.attributes.position,_=0;if(f===void 0)return;if(p!==null){let y=p.array;_=p.version;for(let S=0,v=y.length;S<v;S+=3){let E=y[S+0],b=y[S+1],A=y[S+2];d.push(E,b,b,A,A,E)}}else{let y=f.array;_=f.version;for(let S=0,v=y.length/3-1;S<v;S+=3){let E=S+0,b=S+1,A=S+2;d.push(E,b,b,A,A,E)}}let m=new(f.count>=65535?No:Uo)(d,1);m.version=_;let g=r.get(h);g&&e.remove(g),r.set(h,m)}function u(h){let d=r.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Jv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,f){f!==0&&(i.drawElementsInstanced(n,p,r,d*o,f),t.update(p,n,f))}function u(d,p,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,f);let m=0;for(let g=0;g<f;g++)m+=p[g];t.update(m,n,1)}function h(d,p,f,_){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)c(d[g]/o,p[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,f);let g=0;for(let y=0;y<f;y++)g+=p[y]*_[y];t.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Qv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Fe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function eM(i,e,t){let n=new WeakMap,s=new Tt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;p===!0&&(S=1),f===!0&&(S=2),_===!0&&(S=3);let v=a.attributes.position.count*S,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let b=new Float32Array(v*E*4*h),A=new Po(b,v,E,h);A.type=An,A.needsUpdate=!0;let x=S*4;for(let N=0;N<h;N++){let R=m[N],L=g[N],F=y[N],O=v*E*4*N;for(let H=0;H<R.count;H++){let k=H*x;p===!0&&(s.fromBufferAttribute(R,H),b[O+k+0]=s.x,b[O+k+1]=s.y,b[O+k+2]=s.z,b[O+k+3]=0),f===!0&&(s.fromBufferAttribute(L,H),b[O+k+4]=s.x,b[O+k+5]=s.y,b[O+k+6]=s.z,b[O+k+7]=0),_===!0&&(s.fromBufferAttribute(F,H),b[O+k+8]=s.x,b[O+k+9]=s.y,b[O+k+10]=s.z,b[O+k+11]=F.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new Le(v,E)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let f=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",f),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function tM(i,e,t,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}function iM(i,e,t,n,s){let r=new En(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),o=new En(e,t,{type:di,depthBuffer:!1,stencilBuffer:!1}),a=new Qe;a.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Zt([0,2,0,0,2,0],2));let l=new Al({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Bt(a,l),u=new ns(-1,1,1,-1,0,1),h=null,d=null,p=!1,f,_=null,m=[],g=!1;this.setSize=function(y,S){r.setSize(y,S),o.setSize(y,S);for(let v=0;v<m.length;v++){let E=m[v];E.setSize&&E.setSize(y,S)}},this.setEffects=function(y){m=y,g=m.length>0&&m[0].isRenderPass===!0;let S=r.width,v=r.height;for(let E=0;E<m.length;E++){let b=m[E];b.setSize&&b.setSize(S,v)}},this.begin=function(y,S){if(p||y.toneMapping===Zn&&m.length===0)return!1;if(_=S,S!==null){let v=S.width,E=S.height;(r.width!==v||r.height!==E)&&this.setSize(v,E)}return g===!1&&y.setRenderTarget(r),f=y.toneMapping,y.toneMapping=Zn,!0},this.hasRenderPass=function(){return g},this.end=function(y,S){y.toneMapping=f,p=!0;let v=r,E=o;for(let b=0;b<m.length;b++){let A=m[b];if(A.enabled!==!1&&(A.render(y,E,v,S),A.needsSwap!==!1)){let x=v;v=E,E=x}}if(h!==y.outputColorSpace||d!==y.toneMapping){h=y.outputColorSpace,d=y.toneMapping,l.defines={},Ke.getTransfer(h)===dt&&(l.defines.SRGB_TRANSFER="");let b=nM[d];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,y.setRenderTarget(_),y.render(c,u),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}function $r(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=lm[s];if(r===void 0&&(r=new Float32Array(s),lm[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fc(i,e){let t=cm[e];t===void 0&&(t=new Int32Array(e),cm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function oM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function aM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function lM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Ht(t,n))return;dm.set(n),i.uniformMatrix2fv(this.addr,!1,dm),zt(t,n)}}function cM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Ht(t,n))return;hm.set(n),i.uniformMatrix3fv(this.addr,!1,hm),zt(t,n)}}function uM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Ht(t,n))return;um.set(n),i.uniformMatrix4fv(this.addr,!1,um),zt(t,n)}}function hM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function fM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function pM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function mM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function _M(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function xM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function yM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Uh.compareFunction=t.isReversedDepthBuffer()?Cc:Rc,r=Uh):r=wm,t.setTexture2D(e||r,s)}function vM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Rm,s)}function MM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Cm,s)}function SM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Am,s)}function bM(i){switch(i){case 5126:return sM;case 35664:return rM;case 35665:return oM;case 35666:return aM;case 35674:return lM;case 35675:return cM;case 35676:return uM;case 5124:case 35670:return hM;case 35667:case 35671:return dM;case 35668:case 35672:return fM;case 35669:case 35673:return pM;case 5125:return mM;case 36294:return gM;case 36295:return _M;case 36296:return xM;case 35678:case 36198:case 36298:case 36306:case 35682:return yM;case 35679:case 36299:case 36307:return vM;case 35680:case 36300:case 36308:case 36293:return MM;case 36289:case 36303:case 36311:case 36292:return SM}}function TM(i,e){i.uniform1fv(this.addr,e)}function EM(i,e){let t=$r(e,this.size,2);i.uniform2fv(this.addr,t)}function wM(i,e){let t=$r(e,this.size,3);i.uniform3fv(this.addr,t)}function AM(i,e){let t=$r(e,this.size,4);i.uniform4fv(this.addr,t)}function RM(i,e){let t=$r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function CM(i,e){let t=$r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function IM(i,e){let t=$r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function PM(i,e){i.uniform1iv(this.addr,e)}function LM(i,e){i.uniform2iv(this.addr,e)}function DM(i,e){i.uniform3iv(this.addr,e)}function UM(i,e){i.uniform4iv(this.addr,e)}function NM(i,e){i.uniform1uiv(this.addr,e)}function OM(i,e){i.uniform2uiv(this.addr,e)}function FM(i,e){i.uniform3uiv(this.addr,e)}function BM(i,e){i.uniform4uiv(this.addr,e)}function kM(i,e,t){let n=this.cache,s=e.length,r=Fc(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Uh:o=wm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function VM(i,e,t){let n=this.cache,s=e.length,r=Fc(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Rm,r[o])}function HM(i,e,t){let n=this.cache,s=e.length,r=Fc(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Cm,r[o])}function zM(i,e,t){let n=this.cache,s=e.length,r=Fc(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Am,r[o])}function GM(i){switch(i){case 5126:return TM;case 35664:return EM;case 35665:return wM;case 35666:return AM;case 35674:return RM;case 35675:return CM;case 35676:return IM;case 5124:case 35670:return PM;case 35667:case 35671:return LM;case 35668:case 35672:return DM;case 35669:case 35673:return UM;case 5125:return NM;case 36294:return OM;case 36295:return FM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return zM}}function fm(i,e){i.seq.push(e),i.map[e.id]=e}function WM(i,e,t){let n=i.name,s=n.length;for(Lh.lastIndex=0;;){let r=Lh.exec(n),o=Lh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){fm(t,c===void 0?new Nh(a,i,e):new Oh(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Fh(a),fm(t,h)),t=h}}}function pm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function qM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function YM(i){Ke._getMatrix(mm,Ke.workingColorSpace,i);let e=`mat3( ${mm.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Ro:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+qM(i.getShaderSource(e),a)}else return r}function jM(i,e){let t=YM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function KM(i,e){let t=ZM[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function JM(){Ke.getLuminanceCoefficients(Lc);let i=Lc.x.toFixed(4),e=Lc.y.toFixed(4),t=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function eS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ha(i){return i!==""}function _m(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Bh(i){return i.replace(nS,sS)}function sS(i,e){let t=qe[e];if(t===void 0){let n=iS.get(e);if(n!==void 0)t=qe[n],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Bh(t)}function ym(i){return i.replace(rS,oS)}function oS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vm(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lS(i){return aS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function uS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":cS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}function dS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":hS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function pS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":fS[i.combine]||"ENVMAP_BLENDING_NONE"}function mS(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function gS(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=lS(t),c=uS(t),u=dS(t),h=pS(t),d=mS(t),p=QM(t),f=eS(r),_=s.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ha).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ha).join(`
`),g.length>0&&(g+=`
`)):(m=[vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),g=[vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Zn?KM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,jM("linearToOutputTexel",t.outputColorSpace),JM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ha).join(`
`)),o=Bh(o),o=_m(o,t),o=xm(o,t),a=Bh(a),a=_m(a,t),a=xm(a,t),o=ym(o),a=ym(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let S=y+m+o,v=y+g+a,E=pm(s,s.VERTEX_SHADER,S),b=pm(s,s.FRAGMENT_SHADER,v);s.attachShader(_,E),s.attachShader(_,b),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(R){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(E)||"",O=s.getShaderInfoLog(b)||"",H=L.trim(),k=F.trim(),V=O.trim(),Z=!0,j=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,b);else{let ee=gm(s,E,"vertex"),fe=gm(s,b,"fragment");Fe("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+ee+`
`+fe)}else H!==""?we("WebGLProgram: Program Info Log:",H):(k===""||V==="")&&(j=!1);j&&(R.diagnostics={runnable:Z,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:V,prefix:g}})}s.deleteShader(E),s.deleteShader(b),x=new Wr(s,_),T=tS(s,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(_,XM)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$M++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=b,this}function xS(i,e,t,n,s,r){let o=new Lo,a=new kh,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,T,N,R,L){let F=R.fog,O=L.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=e.get(x.envMap||H,k),Z=V&&V.mapping===na?V.image.height:null,j=p[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&we("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let ee=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,fe=ee!==void 0?ee.length:0,ce=0;O.morphAttributes.position!==void 0&&(ce=1),O.morphAttributes.normal!==void 0&&(ce=2),O.morphAttributes.color!==void 0&&(ce=3);let Ge,St,_t,Y;if(j){let lt=pi[j];Ge=lt.vertexShader,St=lt.fragmentShader}else Ge=x.vertexShader,St=x.fragmentShader,a.update(x),_t=a.getVertexShaderID(x),Y=a.getFragmentShaderID(x);let se=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),ze=L.isInstancedMesh===!0,Ue=L.isBatchedMesh===!0,Be=!!x.map,Pt=!!x.matcap,Je=!!V,st=!!x.aoMap,ut=!!x.lightMap,We=!!x.bumpMap,At=!!x.normalMap,P=!!x.displacementMap,Rt=!!x.emissiveMap,et=!!x.metalnessMap,mt=!!x.roughnessMap,Se=x.anisotropy>0,I=x.clearcoat>0,M=x.dispersion>0,U=x.iridescence>0,q=x.sheen>0,K=x.transmission>0,$=Se&&!!x.anisotropyMap,xe=I&&!!x.clearcoatMap,te=I&&!!x.clearcoatNormalMap,Ie=I&&!!x.clearcoatRoughnessMap,Ne=U&&!!x.iridescenceMap,Q=U&&!!x.iridescenceThicknessMap,ie=q&&!!x.sheenColorMap,ge=q&&!!x.sheenRoughnessMap,ve=!!x.specularMap,de=!!x.specularColorMap,Xe=!!x.specularIntensityMap,D=K&&!!x.transmissionMap,ae=K&&!!x.thicknessMap,ne=!!x.gradientMap,pe=!!x.alphaMap,J=x.alphaTest>0,X=!!x.alphaHash,_e=!!x.extensions,ke=Zn;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ke=i.toneMapping);let ht={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:Ge,fragmentShader:St,defines:x.defines,customVertexShaderID:_t,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ue,batchingColor:Ue&&L._colorsTexture!==null,instancing:ze,instancingColor:ze&&L.instanceColor!==null,instancingMorph:ze&&L.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Kt,alphaToCoverage:!!x.alphaToCoverage,map:Be,matcap:Pt,envMap:Je,envMapMode:Je&&V.mapping,envMapCubeUVHeight:Z,aoMap:st,lightMap:ut,bumpMap:We,normalMap:At,displacementMap:P,emissiveMap:Rt,normalMapObjectSpace:At&&x.normalMapType===Gp,normalMapTangentSpace:At&&x.normalMapType===la,metalnessMap:et,roughnessMap:mt,anisotropy:Se,anisotropyMap:$,clearcoat:I,clearcoatMap:xe,clearcoatNormalMap:te,clearcoatRoughnessMap:Ie,dispersion:M,iridescence:U,iridescenceMap:Ne,iridescenceThicknessMap:Q,sheen:q,sheenColorMap:ie,sheenRoughnessMap:ge,specularMap:ve,specularColorMap:de,specularIntensityMap:Xe,transmission:K,transmissionMap:D,thicknessMap:ae,gradientMap:ne,opaque:x.transparent===!1&&x.blending===As&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:J,alphaHash:X,combine:x.combine,mapUv:Be&&f(x.map.channel),aoMapUv:st&&f(x.aoMap.channel),lightMapUv:ut&&f(x.lightMap.channel),bumpMapUv:We&&f(x.bumpMap.channel),normalMapUv:At&&f(x.normalMap.channel),displacementMapUv:P&&f(x.displacementMap.channel),emissiveMapUv:Rt&&f(x.emissiveMap.channel),metalnessMapUv:et&&f(x.metalnessMap.channel),roughnessMapUv:mt&&f(x.roughnessMap.channel),anisotropyMapUv:$&&f(x.anisotropyMap.channel),clearcoatMapUv:xe&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:ge&&f(x.sheenRoughnessMap.channel),specularMapUv:ve&&f(x.specularMap.channel),specularColorMapUv:de&&f(x.specularColorMap.channel),specularIntensityMapUv:Xe&&f(x.specularIntensityMap.channel),transmissionMapUv:D&&f(x.transmissionMap.channel),thicknessMapUv:ae&&f(x.thicknessMap.channel),alphaMapUv:pe&&f(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(At||Se),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(Be||pe),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&At===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:oe,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ce,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:Be&&x.map.isVideoTexture===!0&&Ke.getTransfer(x.map.colorSpace)===dt,decodeVideoTextureEmissive:Rt&&x.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(x.emissiveMap.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===hn,flipSided:x.side===Jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_e&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&x.extensions.multiDraw===!0||Ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)T.push(N),T.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(g(T,x),y(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function g(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),x.push(o.mask)}function S(x){let T=p[x.type],N;if(T){let R=pi[T];N=Ic.clone(R.uniforms)}else N=x.uniforms;return N}function v(x,T){let N=u.get(T);return N!==void 0?++N.usedTimes:(N=new gS(i,T,x,s),c.push(N),u.set(T,N)),N}function E(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:v,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:A}}function yS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function vS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Mm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,f,_,m,g){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:p,material:f,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},i[e]=y):(y.id=d.id,y.object=d,y.geometry=p,y.material=f,y.materialVariant=o(d),y.groupOrder=_,y.renderOrder=d.renderOrder,y.z=m,y.group=g),e++,y}function l(d,p,f,_,m,g){let y=a(d,p,f,_,m,g);f.transmission>0?n.push(y):f.transparent===!0?s.push(y):t.push(y)}function c(d,p,f,_,m,g){let y=a(d,p,f,_,m,g);f.transmission>0?n.unshift(y):f.transparent===!0?s.unshift(y):t.unshift(y)}function u(d,p){t.length>1&&t.sort(d||vS),n.length>1&&n.sort(p||Mm),s.length>1&&s.sort(p||Mm)}function h(){for(let d=e,p=i.length;d<p;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function MS(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Sm,i.set(n,[o])):s>=r.length?(o=new Sm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function SS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ye};break;case"SpotLight":t={position:new C,direction:new C,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function bS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function ES(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wS(i){let e=new SS,t=bS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new Re,o=new Re;function a(c){let u=0,h=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,f=0,_=0,m=0,g=0,y=0,S=0,v=0,E=0,b=0,A=0;c.sort(ES);for(let T=0,N=c.length;T<N;T++){let R=c[T],L=R.color,F=R.intensity,O=R.distance,H=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Bs?H=R.shadow.map.texture:H=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=L.r*F,h+=L.g*F,d+=L.b*F;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],F);A++}else if(R.isDirectionalLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let V=R.shadow,Z=t.get(R);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=R.shadow.matrix,y++}n.directional[p]=k,p++}else if(R.isSpotLight){let k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(L).multiplyScalar(F),k.distance=O,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[_]=k;let V=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,V.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[_]=V.matrix,R.castShadow){let Z=t.get(R);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=H,v++}_++}else if(R.isRectAreaLight){let k=e.get(R);k.color.copy(L).multiplyScalar(F),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=k,m++}else if(R.isPointLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){let V=R.shadow,Z=t.get(R);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,Z.shadowCameraNear=V.camera.near,Z.shadowCameraFar=V.camera.far,n.pointShadow[f]=Z,n.pointShadowMap[f]=H,n.pointShadowMatrix[f]=R.shadow.matrix,S++}n.point[f]=k,f++}else if(R.isHemisphereLight){let k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(F),k.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[g]=k,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let x=n.hash;(x.directionalLength!==p||x.pointLength!==f||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==g||x.numDirectionalShadows!==y||x.numPointShadows!==S||x.numSpotShadows!==v||x.numSpotMaps!==E||x.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=f,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+E-b,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,x.directionalLength=p,x.pointLength=f,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=g,x.numDirectionalShadows=y,x.numPointShadows=S,x.numSpotShadows=v,x.numSpotMaps=E,x.numLightProbes=A,n.version=TS++)}function l(c,u){let h=0,d=0,p=0,f=0,_=0,m=u.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){let S=c[g];if(S.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(S.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let v=n.rectArea[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),f++}else if(S.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function bm(i){let e=new wS(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function AS(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new bm(i),e.set(s,[a])):r>=o.length?(a=new bm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function LS(i,e,t){let n=new Ir,s=new Le,r=new Le,o=new Tt,a=new Rl,l=new Cl,c={},u=t.maxTextureSize,h={[qn]:Jt,[Jt]:qn,[hn]:hn},d=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:RS,fragmentShader:CS}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Qe;f.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Bt(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ea;let g=this.type;this.render=function(b,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===gp&&(we("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ea);let T=i.getRenderTarget(),N=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),L=i.state;L.setBlending(hi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let F=g!==this.type;F&&A.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(H=>H.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,H=b.length;O<H;O++){let k=b[O],V=k.shadow;if(V===void 0){we("WebGLShadowMap:",k,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Z=V.getFrameExtents();s.multiply(Z),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,V.mapSize.y=r.y));let j=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=j,V.map===null||F===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Br){if(k.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new En(s.x,s.y,{format:Bs,type:di,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),V.map.texture.name=k.name+".shadowMap",V.map.depthTexture=new ts(s.x,s.y,An),V.map.depthTexture.name=k.name+".shadowMapDepth",V.map.depthTexture.format=si,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Dt,V.map.depthTexture.magFilter=Dt}else k.isPointLight?(V.map=new Uc(s.x),V.map.depthTexture=new wl(s.x,Jn)):(V.map=new En(s.x,s.y),V.map.depthTexture=new ts(s.x,s.y,Jn)),V.map.depthTexture.name=k.name+".shadowMap",V.map.depthTexture.format=si,this.type===ea?(V.map.depthTexture.compareFunction=j?Cc:Rc,V.map.depthTexture.minFilter=Ut,V.map.depthTexture.magFilter=Ut):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Dt,V.map.depthTexture.magFilter=Dt);V.camera.updateProjectionMatrix()}let ee=V.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<ee;fe++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,fe),i.clear();else{fe===0&&(i.setRenderTarget(V.map),i.clear());let ce=V.getViewport(fe);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),L.viewport(o)}if(k.isPointLight){let ce=V.camera,Ge=V.matrix,St=k.distance||ce.far;St!==ce.far&&(ce.far=St,ce.updateProjectionMatrix()),ua.setFromMatrixPosition(k.matrixWorld),ce.position.copy(ua),Dh.copy(ce.position),Dh.add(IS[fe]),ce.up.copy(PS[fe]),ce.lookAt(Dh),ce.updateMatrixWorld(),Ge.makeTranslation(-ua.x,-ua.y,-ua.z),Tm.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Tm,ce.coordinateSystem,ce.reversedDepth)}else V.updateMatrices(k);n=V.getFrustum(),v(A,x,V.camera,k,this.type)}V.isPointLightShadow!==!0&&this.type===Br&&y(V,x),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(T,N,R)};function y(b,A){let x=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new En(s.x,s.y,{format:Bs,type:di})),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,x,d,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,x,p,_,null)}function S(b,A,x,T){let N=null,R=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)N=R;else if(N=x.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=N.uuid,F=A.uuid,O=c[L];O===void 0&&(O={},c[L]=O);let H=O[F];H===void 0&&(H=N.clone(),O[F]=H,A.addEventListener("dispose",E)),N=H}if(N.visible=A.visible,N.wireframe=A.wireframe,T===Br?N.side=A.shadowSide!==null?A.shadowSide:A.side:N.side=A.shadowSide!==null?A.shadowSide:h[A.side],N.alphaMap=A.alphaMap,N.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,N.map=A.map,N.clipShadows=A.clipShadows,N.clippingPlanes=A.clippingPlanes,N.clipIntersection=A.clipIntersection,N.displacementMap=A.displacementMap,N.displacementScale=A.displacementScale,N.displacementBias=A.displacementBias,N.wireframeLinewidth=A.wireframeLinewidth,N.linewidth=A.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let L=i.properties.get(N);L.light=x}return N}function v(b,A,x,T,N){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===Br)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let F=e.update(b),O=b.material;if(Array.isArray(O)){let H=F.groups;for(let k=0,V=H.length;k<V;k++){let Z=H[k],j=O[Z.materialIndex];if(j&&j.visible){let ee=S(b,j,T,N);b.onBeforeShadow(i,b,A,x,F,ee,Z),i.renderBufferDirect(x,null,F,ee,b,Z),b.onAfterShadow(i,b,A,x,F,ee,Z)}}}else if(O.visible){let H=S(b,O,T,N);b.onBeforeShadow(i,b,A,x,F,H,null),i.renderBufferDirect(x,null,F,H,b,null),b.onAfterShadow(i,b,A,x,F,H,null)}}let L=b.children;for(let F=0,O=L.length;F<O;F++)v(L[F],A,x,T,N)}function E(b){b.target.removeEventListener("dispose",E);for(let x in c){let T=c[x],N=b.target.uuid;N in T&&(T[N].dispose(),delete T[N])}}}function DS(i,e){function t(){let D=!1,ae=new Tt,ne=null,pe=new Tt(0,0,0,0);return{setMask:function(J){ne!==J&&!D&&(i.colorMask(J,J,J,J),ne=J)},setLocked:function(J){D=J},setClear:function(J,X,_e,ke,ht){ht===!0&&(J*=ke,X*=ke,_e*=ke),ae.set(J,X,_e,ke),pe.equals(ae)===!1&&(i.clearColor(J,X,_e,ke),pe.copy(ae))},reset:function(){D=!1,ne=null,pe.set(-1,0,0,0)}}}function n(){let D=!1,ae=!1,ne=null,pe=null,J=null;return{setReversed:function(X){if(ae!==X){let _e=e.get("EXT_clip_control");X?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),ae=X;let ke=J;J=null,this.setClear(ke)}},getReversed:function(){return ae},setTest:function(X){X?se(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(X){ne!==X&&!D&&(i.depthMask(X),ne=X)},setFunc:function(X){if(ae&&(X=Qp[X]),pe!==X){switch(X){case fl:i.depthFunc(i.NEVER);break;case pl:i.depthFunc(i.ALWAYS);break;case ml:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case gl:i.depthFunc(i.EQUAL);break;case _l:i.depthFunc(i.GEQUAL);break;case xl:i.depthFunc(i.GREATER);break;case yl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=X}},setLocked:function(X){D=X},setClear:function(X){J!==X&&(J=X,ae&&(X=1-X),i.clearDepth(X))},reset:function(){D=!1,ne=null,pe=null,J=null,ae=!1}}}function s(){let D=!1,ae=null,ne=null,pe=null,J=null,X=null,_e=null,ke=null,ht=null;return{setTest:function(lt){D||(lt?se(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(lt){ae!==lt&&!D&&(i.stencilMask(lt),ae=lt)},setFunc:function(lt,Bn,kn){(ne!==lt||pe!==Bn||J!==kn)&&(i.stencilFunc(lt,Bn,kn),ne=lt,pe=Bn,J=kn)},setOp:function(lt,Bn,kn){(X!==lt||_e!==Bn||ke!==kn)&&(i.stencilOp(lt,Bn,kn),X=lt,_e=Bn,ke=kn)},setLocked:function(lt){D=lt},setClear:function(lt){ht!==lt&&(i.clearStencil(lt),ht=lt)},reset:function(){D=!1,ae=null,ne=null,pe=null,J=null,X=null,_e=null,ke=null,ht=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,p=[],f=null,_=!1,m=null,g=null,y=null,S=null,v=null,E=null,b=null,A=new ye(0,0,0),x=0,T=!1,N=null,R=null,L=null,F=null,O=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,V=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),k=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),k=V>=2);let j=null,ee={},fe=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),Ge=new Tt().fromArray(fe),St=new Tt().fromArray(ce);function _t(D,ae,ne,pe){let J=new Uint8Array(4),X=i.createTexture();i.bindTexture(D,X),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<ne;_e++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(ae+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return X}let Y={};Y[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(Rs),We(!1),At(th),se(i.CULL_FACE),st(hi);function se(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function oe(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function ze(D,ae){return h[D]!==ae?(i.bindFramebuffer(D,ae),h[D]=ae,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ae),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ue(D,ae){let ne=p,pe=!1;if(D){ne=d.get(ae),ne===void 0&&(ne=[],d.set(ae,ne));let J=D.textures;if(ne.length!==J.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let X=0,_e=J.length;X<_e;X++)ne[X]=i.COLOR_ATTACHMENT0+X;ne.length=J.length,pe=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,pe=!0);pe&&i.drawBuffers(ne)}function Be(D){return f!==D?(i.useProgram(D),f=D,!0):!1}let Pt={[Ji]:i.FUNC_ADD,[xp]:i.FUNC_SUBTRACT,[yp]:i.FUNC_REVERSE_SUBTRACT};Pt[vp]=i.MIN,Pt[Mp]=i.MAX;let Je={[Sp]:i.ZERO,[bp]:i.ONE,[Tp]:i.SRC_COLOR,[hl]:i.SRC_ALPHA,[Ip]:i.SRC_ALPHA_SATURATE,[Rp]:i.DST_COLOR,[wp]:i.DST_ALPHA,[Ep]:i.ONE_MINUS_SRC_COLOR,[dl]:i.ONE_MINUS_SRC_ALPHA,[Cp]:i.ONE_MINUS_DST_COLOR,[Ap]:i.ONE_MINUS_DST_ALPHA,[Pp]:i.CONSTANT_COLOR,[Lp]:i.ONE_MINUS_CONSTANT_COLOR,[Dp]:i.CONSTANT_ALPHA,[Up]:i.ONE_MINUS_CONSTANT_ALPHA};function st(D,ae,ne,pe,J,X,_e,ke,ht,lt){if(D===hi){_===!0&&(oe(i.BLEND),_=!1);return}if(_===!1&&(se(i.BLEND),_=!0),D!==_p){if(D!==m||lt!==T){if((g!==Ji||v!==Ji)&&(i.blendEquation(i.FUNC_ADD),g=Ji,v=Ji),lt)switch(D){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nh:i.blendFunc(i.ONE,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Fe("WebGLState: Invalid blending: ",D);break}else switch(D){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ih:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sh:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",D);break}y=null,S=null,E=null,b=null,A.set(0,0,0),x=0,m=D,T=lt}return}J=J||ae,X=X||ne,_e=_e||pe,(ae!==g||J!==v)&&(i.blendEquationSeparate(Pt[ae],Pt[J]),g=ae,v=J),(ne!==y||pe!==S||X!==E||_e!==b)&&(i.blendFuncSeparate(Je[ne],Je[pe],Je[X],Je[_e]),y=ne,S=pe,E=X,b=_e),(ke.equals(A)===!1||ht!==x)&&(i.blendColor(ke.r,ke.g,ke.b,ht),A.copy(ke),x=ht),m=D,T=!1}function ut(D,ae){D.side===hn?oe(i.CULL_FACE):se(i.CULL_FACE);let ne=D.side===Jt;ae&&(ne=!ne),We(ne),D.blending===As&&D.transparent===!1?st(hi):st(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let pe=D.stencilWrite;a.setTest(pe),pe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(D){N!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),N=D)}function At(D){D!==pp?(se(i.CULL_FACE),D!==R&&(D===th?i.cullFace(i.BACK):D===mp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),R=D}function P(D){D!==L&&(k&&i.lineWidth(D),L=D)}function Rt(D,ae,ne){D?(se(i.POLYGON_OFFSET_FILL),(F!==ae||O!==ne)&&(F=ae,O=ne,o.getReversed()&&(ae=-ae),i.polygonOffset(ae,ne))):oe(i.POLYGON_OFFSET_FILL)}function et(D){D?se(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function mt(D){D===void 0&&(D=i.TEXTURE0+H-1),j!==D&&(i.activeTexture(D),j=D)}function Se(D,ae,ne){ne===void 0&&(j===null?ne=i.TEXTURE0+H-1:ne=j);let pe=ee[ne];pe===void 0&&(pe={type:void 0,texture:void 0},ee[ne]=pe),(pe.type!==D||pe.texture!==ae)&&(j!==ne&&(i.activeTexture(ne),j=ne),i.bindTexture(D,ae||Y[D]),pe.type=D,pe.texture=ae)}function I(){let D=ee[j];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(D){Fe("WebGLState:",D)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(D){Fe("WebGLState:",D)}}function q(){try{i.texSubImage2D(...arguments)}catch(D){Fe("WebGLState:",D)}}function K(){try{i.texSubImage3D(...arguments)}catch(D){Fe("WebGLState:",D)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Fe("WebGLState:",D)}}function xe(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Fe("WebGLState:",D)}}function te(){try{i.texStorage2D(...arguments)}catch(D){Fe("WebGLState:",D)}}function Ie(){try{i.texStorage3D(...arguments)}catch(D){Fe("WebGLState:",D)}}function Ne(){try{i.texImage2D(...arguments)}catch(D){Fe("WebGLState:",D)}}function Q(){try{i.texImage3D(...arguments)}catch(D){Fe("WebGLState:",D)}}function ie(D){Ge.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ge.copy(D))}function ge(D){St.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),St.copy(D))}function ve(D,ae){let ne=c.get(ae);ne===void 0&&(ne=new WeakMap,c.set(ae,ne));let pe=ne.get(D);pe===void 0&&(pe=i.getUniformBlockIndex(ae,D.name),ne.set(D,pe))}function de(D,ae){let pe=c.get(ae).get(D);l.get(ae)!==pe&&(i.uniformBlockBinding(ae,pe,D.__bindingPointIndex),l.set(ae,pe))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,ee={},h={},d=new WeakMap,p=[],f=null,_=!1,m=null,g=null,y=null,S=null,v=null,E=null,b=null,A=new ye(0,0,0),x=0,T=!1,N=null,R=null,L=null,F=null,O=null,Ge.set(0,0,i.canvas.width,i.canvas.height),St.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:oe,bindFramebuffer:ze,drawBuffers:Ue,useProgram:Be,setBlending:st,setMaterial:ut,setFlipSided:We,setCullFace:At,setLineWidth:P,setPolygonOffset:Rt,setScissorTest:et,activeTexture:mt,bindTexture:Se,unbindTexture:I,compressedTexImage2D:M,compressedTexImage3D:U,texImage2D:Ne,texImage3D:Q,updateUBOMapping:ve,uniformBlockBinding:de,texStorage2D:te,texStorage3D:Ie,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:$,compressedTexSubImage3D:xe,scissor:ie,viewport:ge,reset:Xe}}function US(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,u=new WeakMap,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(I,M){return p?new OffscreenCanvas(I,M):Tr("canvas")}function _(I,M,U){let q=1,K=Se(I);if((K.width>U||K.height>U)&&(q=U/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let $=Math.floor(q*K.width),xe=Math.floor(q*K.height);h===void 0&&(h=f($,xe));let te=M?f($,xe):h;return te.width=$,te.height=xe,te.getContext("2d").drawImage(I,0,0,$,xe),we("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+$+"x"+xe+")."),te}else return"data"in I&&we("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),I;return I}function m(I){return I.generateMipmaps}function g(I){i.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(I,M,U,q,K=!1){if(I!==null){if(i[I]!==void 0)return i[I];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let $=M;if(M===i.RED&&(U===i.FLOAT&&($=i.R32F),U===i.HALF_FLOAT&&($=i.R16F),U===i.UNSIGNED_BYTE&&($=i.R8)),M===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&($=i.R8UI),U===i.UNSIGNED_SHORT&&($=i.R16UI),U===i.UNSIGNED_INT&&($=i.R32UI),U===i.BYTE&&($=i.R8I),U===i.SHORT&&($=i.R16I),U===i.INT&&($=i.R32I)),M===i.RG&&(U===i.FLOAT&&($=i.RG32F),U===i.HALF_FLOAT&&($=i.RG16F),U===i.UNSIGNED_BYTE&&($=i.RG8)),M===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&($=i.RG8UI),U===i.UNSIGNED_SHORT&&($=i.RG16UI),U===i.UNSIGNED_INT&&($=i.RG32UI),U===i.BYTE&&($=i.RG8I),U===i.SHORT&&($=i.RG16I),U===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&($=i.RGB8UI),U===i.UNSIGNED_SHORT&&($=i.RGB16UI),U===i.UNSIGNED_INT&&($=i.RGB32UI),U===i.BYTE&&($=i.RGB8I),U===i.SHORT&&($=i.RGB16I),U===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&($=i.RGBA8UI),U===i.UNSIGNED_SHORT&&($=i.RGBA16UI),U===i.UNSIGNED_INT&&($=i.RGBA32UI),U===i.BYTE&&($=i.RGBA8I),U===i.SHORT&&($=i.RGBA16I),U===i.INT&&($=i.RGBA32I)),M===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),M===i.RGBA){let xe=K?Ro:Ke.getTransfer(q);U===i.FLOAT&&($=i.RGBA32F),U===i.HALF_FLOAT&&($=i.RGBA16F),U===i.UNSIGNED_BYTE&&($=xe===dt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(I,M){let U;return I?M===null||M===Jn||M===Hr?U=i.DEPTH24_STENCIL8:M===An?U=i.DEPTH32F_STENCIL8:M===Vr&&(U=i.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Jn||M===Hr?U=i.DEPTH_COMPONENT24:M===An?U=i.DEPTH_COMPONENT32F:M===Vr&&(U=i.DEPTH_COMPONENT16),U}function E(I,M){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Dt&&I.minFilter!==Ut?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function b(I){let M=I.target;M.removeEventListener("dispose",b),x(M),M.isVideoTexture&&u.delete(M)}function A(I){let M=I.target;M.removeEventListener("dispose",A),N(M)}function x(I){let M=n.get(I);if(M.__webglInit===void 0)return;let U=I.source,q=d.get(U);if(q){let K=q[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(I),Object.keys(q).length===0&&d.delete(U)}n.remove(I)}function T(I){let M=n.get(I);i.deleteTexture(M.__webglTexture);let U=I.source,q=d.get(U);delete q[M.__cacheKey],o.memory.textures--}function N(I){let M=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let K=0;K<M.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(M.__webglFramebuffer[q][K]);else i.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)i.deleteFramebuffer(M.__webglFramebuffer[q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let U=I.textures;for(let q=0,K=U.length;q<K;q++){let $=n.get(U[q]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(U[q])}n.remove(I)}let R=0;function L(){R=0}function F(){let I=R;return I>=s.maxTextures&&we("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),R+=1,I}function O(I){let M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function H(I,M){let U=n.get(I);if(I.isVideoTexture&&et(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&U.__version!==I.version){let q=I.image;if(q===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(U,I,M);return}}else I.isExternalTexture&&(U.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+M)}function k(I,M){let U=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&U.__version!==I.version){Y(U,I,M);return}else I.isExternalTexture&&(U.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+M)}function V(I,M){let U=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&U.__version!==I.version){Y(U,I,M);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+M)}function Z(I,M){let U=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&U.__version!==I.version){se(U,I,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+M)}let j={[Qi]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[Sr]:i.MIRRORED_REPEAT},ee={[Dt]:i.NEAREST,[Hl]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[kr]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},fe={[Wp]:i.NEVER,[jp]:i.ALWAYS,[Xp]:i.LESS,[Rc]:i.LEQUAL,[$p]:i.EQUAL,[Cc]:i.GEQUAL,[qp]:i.GREATER,[Yp]:i.NOTEQUAL};function ce(I,M){if(M.type===An&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ut||M.magFilter===kr||M.magFilter===Fs||M.magFilter===Kn||M.minFilter===Ut||M.minFilter===kr||M.minFilter===Fs||M.minFilter===Kn)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,j[M.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,j[M.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,j[M.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ee[M.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ee[M.minFilter]),M.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,fe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Dt||M.minFilter!==Fs&&M.minFilter!==Kn||M.type===An&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ge(I,M){let U=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",b));let q=M.source,K=d.get(q);K===void 0&&(K={},d.set(q,K));let $=O(M);if($!==I.__cacheKey){K[$]===void 0&&(K[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),K[$].usedTimes++;let xe=K[I.__cacheKey];xe!==void 0&&(K[I.__cacheKey].usedTimes--,xe.usedTimes===0&&T(M)),I.__cacheKey=$,I.__webglTexture=K[$].texture}return U}function St(I,M,U){return Math.floor(Math.floor(I/U)/M)}function _t(I,M,U,q){let $=I.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,U,q,M.data);else{$.sort((Q,ie)=>Q.start-ie.start);let xe=0;for(let Q=1;Q<$.length;Q++){let ie=$[xe],ge=$[Q],ve=ie.start+ie.count,de=St(ge.start,M.width,4),Xe=St(ie.start,M.width,4);ge.start<=ve+1&&de===Xe&&St(ge.start+ge.count-1,M.width,4)===de?ie.count=Math.max(ie.count,ge.start+ge.count-ie.start):(++xe,$[xe]=ge)}$.length=xe+1;let te=i.getParameter(i.UNPACK_ROW_LENGTH),Ie=i.getParameter(i.UNPACK_SKIP_PIXELS),Ne=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Q=0,ie=$.length;Q<ie;Q++){let ge=$[Q],ve=Math.floor(ge.start/4),de=Math.ceil(ge.count/4),Xe=ve%M.width,D=Math.floor(ve/M.width),ae=de,ne=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Xe,D,ae,ne,U,q,M.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,te),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ie),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ne)}}function Y(I,M,U){let q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=i.TEXTURE_3D);let K=Ge(I,M),$=M.source;t.bindTexture(q,I.__webglTexture,i.TEXTURE0+U);let xe=n.get($);if($.version!==xe.__version||K===!0){t.activeTexture(i.TEXTURE0+U);let te=Ke.getPrimaries(Ke.workingColorSpace),Ie=M.colorSpace===ki?null:Ke.getPrimaries(M.colorSpace),Ne=M.colorSpace===ki||te===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let Q=_(M.image,!1,s.maxTextureSize);Q=mt(M,Q);let ie=r.convert(M.format,M.colorSpace),ge=r.convert(M.type),ve=S(M.internalFormat,ie,ge,M.colorSpace,M.isVideoTexture);ce(q,M);let de,Xe=M.mipmaps,D=M.isVideoTexture!==!0,ae=xe.__version===void 0||K===!0,ne=$.dataReady,pe=E(M,Q);if(M.isDepthTexture)ve=v(M.format===as,M.type),ae&&(D?t.texStorage2D(i.TEXTURE_2D,1,ve,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,ve,Q.width,Q.height,0,ie,ge,null));else if(M.isDataTexture)if(Xe.length>0){D&&ae&&t.texStorage2D(i.TEXTURE_2D,pe,ve,Xe[0].width,Xe[0].height);for(let J=0,X=Xe.length;J<X;J++)de=Xe[J],D?ne&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,de.width,de.height,ie,ge,de.data):t.texImage2D(i.TEXTURE_2D,J,ve,de.width,de.height,0,ie,ge,de.data);M.generateMipmaps=!1}else D?(ae&&t.texStorage2D(i.TEXTURE_2D,pe,ve,Q.width,Q.height),ne&&_t(M,Q,ie,ge)):t.texImage2D(i.TEXTURE_2D,0,ve,Q.width,Q.height,0,ie,ge,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){D&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ve,Xe[0].width,Xe[0].height,Q.depth);for(let J=0,X=Xe.length;J<X;J++)if(de=Xe[J],M.format!==Rn)if(ie!==null)if(D){if(ne)if(M.layerUpdates.size>0){let _e=wh(de.width,de.height,M.format,M.type);for(let ke of M.layerUpdates){let ht=de.data.subarray(ke*_e/de.data.BYTES_PER_ELEMENT,(ke+1)*_e/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ke,de.width,de.height,1,ie,ht)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,de.width,de.height,Q.depth,ie,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ve,de.width,de.height,Q.depth,0,de.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ne&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,de.width,de.height,Q.depth,ie,ge,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,ve,de.width,de.height,Q.depth,0,ie,ge,de.data)}else{D&&ae&&t.texStorage2D(i.TEXTURE_2D,pe,ve,Xe[0].width,Xe[0].height);for(let J=0,X=Xe.length;J<X;J++)de=Xe[J],M.format!==Rn?ie!==null?D?ne&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,de.width,de.height,ie,de.data):t.compressedTexImage2D(i.TEXTURE_2D,J,ve,de.width,de.height,0,de.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ne&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,de.width,de.height,ie,ge,de.data):t.texImage2D(i.TEXTURE_2D,J,ve,de.width,de.height,0,ie,ge,de.data)}else if(M.isDataArrayTexture)if(D){if(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ve,Q.width,Q.height,Q.depth),ne)if(M.layerUpdates.size>0){let J=wh(Q.width,Q.height,M.format,M.type);for(let X of M.layerUpdates){let _e=Q.data.subarray(X*J/Q.data.BYTES_PER_ELEMENT,(X+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,Q.width,Q.height,1,ie,ge,_e)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ie,ge,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,Q.width,Q.height,Q.depth,0,ie,ge,Q.data);else if(M.isData3DTexture)D?(ae&&t.texStorage3D(i.TEXTURE_3D,pe,ve,Q.width,Q.height,Q.depth),ne&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ie,ge,Q.data)):t.texImage3D(i.TEXTURE_3D,0,ve,Q.width,Q.height,Q.depth,0,ie,ge,Q.data);else if(M.isFramebufferTexture){if(ae)if(D)t.texStorage2D(i.TEXTURE_2D,pe,ve,Q.width,Q.height);else{let J=Q.width,X=Q.height;for(let _e=0;_e<pe;_e++)t.texImage2D(i.TEXTURE_2D,_e,ve,J,X,0,ie,ge,null),J>>=1,X>>=1}}else if(Xe.length>0){if(D&&ae){let J=Se(Xe[0]);t.texStorage2D(i.TEXTURE_2D,pe,ve,J.width,J.height)}for(let J=0,X=Xe.length;J<X;J++)de=Xe[J],D?ne&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ie,ge,de):t.texImage2D(i.TEXTURE_2D,J,ve,ie,ge,de);M.generateMipmaps=!1}else if(D){if(ae){let J=Se(Q);t.texStorage2D(i.TEXTURE_2D,pe,ve,J.width,J.height)}ne&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie,ge,Q)}else t.texImage2D(i.TEXTURE_2D,0,ve,ie,ge,Q);m(M)&&g(q),xe.__version=$.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function se(I,M,U){if(M.image.length!==6)return;let q=Ge(I,M),K=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+U);let $=n.get(K);if(K.version!==$.__version||q===!0){t.activeTexture(i.TEXTURE0+U);let xe=Ke.getPrimaries(Ke.workingColorSpace),te=M.colorSpace===ki?null:Ke.getPrimaries(M.colorSpace),Ie=M.colorSpace===ki||xe===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Ne=M.isCompressedTexture||M.image[0].isCompressedTexture,Q=M.image[0]&&M.image[0].isDataTexture,ie=[];for(let X=0;X<6;X++)!Ne&&!Q?ie[X]=_(M.image[X],!0,s.maxCubemapSize):ie[X]=Q?M.image[X].image:M.image[X],ie[X]=mt(M,ie[X]);let ge=ie[0],ve=r.convert(M.format,M.colorSpace),de=r.convert(M.type),Xe=S(M.internalFormat,ve,de,M.colorSpace),D=M.isVideoTexture!==!0,ae=$.__version===void 0||q===!0,ne=K.dataReady,pe=E(M,ge);ce(i.TEXTURE_CUBE_MAP,M);let J;if(Ne){D&&ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Xe,ge.width,ge.height);for(let X=0;X<6;X++){J=ie[X].mipmaps;for(let _e=0;_e<J.length;_e++){let ke=J[_e];M.format!==Rn?ve!==null?D?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,0,0,ke.width,ke.height,ve,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,Xe,ke.width,ke.height,0,ke.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,0,0,ke.width,ke.height,ve,de,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,Xe,ke.width,ke.height,0,ve,de,ke.data)}}}else{if(J=M.mipmaps,D&&ae){J.length>0&&pe++;let X=Se(ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Xe,X.width,X.height)}for(let X=0;X<6;X++)if(Q){D?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ie[X].width,ie[X].height,ve,de,ie[X].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Xe,ie[X].width,ie[X].height,0,ve,de,ie[X].data);for(let _e=0;_e<J.length;_e++){let ht=J[_e].image[X].image;D?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,0,0,ht.width,ht.height,ve,de,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,Xe,ht.width,ht.height,0,ve,de,ht.data)}}else{D?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ve,de,ie[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Xe,ve,de,ie[X]);for(let _e=0;_e<J.length;_e++){let ke=J[_e];D?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,0,0,ve,de,ke.image[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,Xe,ve,de,ke.image[X])}}}m(M)&&g(i.TEXTURE_CUBE_MAP),$.__version=K.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function oe(I,M,U,q,K,$){let xe=r.convert(U.format,U.colorSpace),te=r.convert(U.type),Ie=S(U.internalFormat,xe,te,U.colorSpace),Ne=n.get(M),Q=n.get(U);if(Q.__renderTarget=M,!Ne.__hasExternalTextures){let ie=Math.max(1,M.width>>$),ge=Math.max(1,M.height>>$);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,$,Ie,ie,ge,M.depth,0,xe,te,null):t.texImage2D(K,$,Ie,ie,ge,0,xe,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Rt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,Q.__webglTexture,0,P(M)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,Q.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(I,M,U){if(i.bindRenderbuffer(i.RENDERBUFFER,I),M.depthBuffer){let q=M.depthTexture,K=q&&q.isDepthTexture?q.type:null,$=v(M.stencilBuffer,K),xe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Rt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(M),$,M.width,M.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(M),$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,I)}else{let q=M.textures;for(let K=0;K<q.length;K++){let $=q[K],xe=r.convert($.format,$.colorSpace),te=r.convert($.type),Ie=S($.internalFormat,xe,te,$.colorSpace);Rt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(M),Ie,M.width,M.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(M),Ie,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(I,M,U){let q=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(M.depthTexture);if(K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,M.depthTexture.addEventListener("dispose",b)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ce(i.TEXTURE_CUBE_MAP,M.depthTexture);let Ne=r.convert(M.depthTexture.format),Q=r.convert(M.depthTexture.type),ie;M.depthTexture.format===si?ie=i.DEPTH_COMPONENT24:M.depthTexture.format===as&&(ie=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ie,M.width,M.height,0,Ne,Q,null)}}else H(M.depthTexture,0);let $=K.__webglTexture,xe=P(M),te=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,Ie=M.depthTexture.format===as?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===si)Rt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ie,te,$,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,Ie,te,$,0);else if(M.depthTexture.format===as)Rt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ie,te,$,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,Ie,te,$,0);else throw new Error("Unknown depthTexture format")}function Be(I){let M=n.get(I),U=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){let q=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=q}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(U)for(let q=0;q<6;q++)Ue(M.__webglFramebuffer[q],I,q);else{let q=I.texture.mipmaps;q&&q.length>0?Ue(M.__webglFramebuffer[0],I,0):Ue(M.__webglFramebuffer,I,0)}else if(U){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=i.createRenderbuffer(),ze(M.__webglDepthbuffer[q],I,!1);else{let K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,$)}}else{let q=I.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ze(M.__webglDepthbuffer,I,!1);else{let K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(I,M,U){let q=n.get(I);M!==void 0&&oe(q.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Be(I)}function Je(I){let M=I.texture,U=n.get(I),q=n.get(M);I.addEventListener("dispose",A);let K=I.textures,$=I.isWebGLCubeRenderTarget===!0,xe=K.length>1;if(xe||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=M.version,o.memory.textures++),$){U.__webglFramebuffer=[];for(let te=0;te<6;te++)if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer[te]=[];for(let Ie=0;Ie<M.mipmaps.length;Ie++)U.__webglFramebuffer[te][Ie]=i.createFramebuffer()}else U.__webglFramebuffer[te]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer=[];for(let te=0;te<M.mipmaps.length;te++)U.__webglFramebuffer[te]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(xe)for(let te=0,Ie=K.length;te<Ie;te++){let Ne=n.get(K[te]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Rt(I)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let te=0;te<K.length;te++){let Ie=K[te];U.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[te]);let Ne=r.convert(Ie.format,Ie.colorSpace),Q=r.convert(Ie.type),ie=S(Ie.internalFormat,Ne,Q,Ie.colorSpace,I.isXRRenderTarget===!0),ge=P(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ie,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,U.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(U.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ce(i.TEXTURE_CUBE_MAP,M);for(let te=0;te<6;te++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ie=0;Ie<M.mipmaps.length;Ie++)oe(U.__webglFramebuffer[te][Ie],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ie);else oe(U.__webglFramebuffer[te],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);m(M)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let te=0,Ie=K.length;te<Ie;te++){let Ne=K[te],Q=n.get(Ne),ie=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ie=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,Q.__webglTexture),ce(ie,Ne),oe(U.__webglFramebuffer,I,Ne,i.COLOR_ATTACHMENT0+te,ie,0),m(Ne)&&g(ie)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(te=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,q.__webglTexture),ce(te,M),M.mipmaps&&M.mipmaps.length>0)for(let Ie=0;Ie<M.mipmaps.length;Ie++)oe(U.__webglFramebuffer[Ie],I,M,i.COLOR_ATTACHMENT0,te,Ie);else oe(U.__webglFramebuffer,I,M,i.COLOR_ATTACHMENT0,te,0);m(M)&&g(te),t.unbindTexture()}I.depthBuffer&&Be(I)}function st(I){let M=I.textures;for(let U=0,q=M.length;U<q;U++){let K=M[U];if(m(K)){let $=y(I),xe=n.get(K).__webglTexture;t.bindTexture($,xe),g($),t.unbindTexture()}}}let ut=[],We=[];function At(I){if(I.samples>0){if(Rt(I)===!1){let M=I.textures,U=I.width,q=I.height,K=i.COLOR_BUFFER_BIT,$=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(I),te=M.length>1;if(te)for(let Ne=0;Ne<M.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let Ie=I.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ne=0;Ne<M.length;Ne++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Ne]);let Q=n.get(M[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,U,q,0,0,U,q,K,i.NEAREST),l===!0&&(ut.length=0,We.length=0,ut.push(i.COLOR_ATTACHMENT0+Ne),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ut.push($),We.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,We)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let Ne=0;Ne<M.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Ne]);let Q=n.get(M[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let M=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function P(I){return Math.min(s.maxSamples,I.samples)}function Rt(I){let M=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function et(I){let M=o.render.frame;u.get(I)!==M&&(u.set(I,M),I.update())}function mt(I,M){let U=I.colorSpace,q=I.format,K=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||U!==Kt&&U!==ki&&(Ke.getTransfer(U)===dt?(q!==Rn||K!==xn)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",U)),M}function Se(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=k,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=Pt,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function NS(i,e){function t(n,s=ki){let r,o=Ke.getTransfer(s);if(n===xn)return i.UNSIGNED_BYTE;if(n===Gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fh)return i.BYTE;if(n===ph)return i.SHORT;if(n===Vr)return i.UNSIGNED_SHORT;if(n===zl)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===di)return i.HALF_FLOAT;if(n===_h)return i.ALPHA;if(n===xh)return i.RGB;if(n===Rn)return i.RGBA;if(n===si)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===Xl)return i.RED;if(n===$l)return i.RED_INTEGER;if(n===Bs)return i.RG;if(n===ql)return i.RG_INTEGER;if(n===Yl)return i.RGBA_INTEGER;if(n===ia||n===sa||n===ra||n===oa)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jl||n===Zl||n===Kl||n===Jl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ql||n===ec)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===nc)return r.COMPRESSED_R11_EAC;if(n===ic)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sc)return r.COMPRESSED_RG11_EAC;if(n===rc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===oc||n===ac||n===lc||n===cc||n===uc||n===hc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===xc||n===yc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ac)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_c)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vc||n===Mc||n===Sc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vc)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bc||n===Tc||n===Ec||n===wc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===bc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function kS(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,bh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,S,v){g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&p(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),f(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Jt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Jt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),S=y.envMap,v=y.envMapRotation;S&&(m.envMap.value=S,Hs.copy(v),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),m.envMapRotation.value.setFromMatrix4(BS.makeRotationFromEuler(Hs)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Jt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function VS(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let v=S.program;n.uniformBlockBinding(y,v)}function c(y,S){let v=s[y.id];v===void 0&&(f(y),v=u(y),s[y.id]=v,y.addEventListener("dispose",m));let E=S.program;n.updateUBOMapping(y,E);let b=e.render.frame;r[y.id]!==b&&(d(y),r[y.id]=b)}function u(y){let S=h();y.__bindingPointIndex=S;let v=i.createBuffer(),E=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let S=s[y.id],v=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let b=0,A=v.length;b<A;b++){let x=Array.isArray(v[b])?v[b]:[v[b]];for(let T=0,N=x.length;T<N;T++){let R=x[T];if(p(R,b,T,E)===!0){let L=R.__offset,F=Array.isArray(R.value)?R.value:[R.value],O=0;for(let H=0;H<F.length;H++){let k=F[H],V=_(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,L+O,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,O),O+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,S,v,E){let b=y.value,A=S+"_"+v;if(E[A]===void 0)return typeof b=="number"||typeof b=="boolean"?E[A]=b:E[A]=b.clone(),!0;{let x=E[A];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return E[A]=b,!0}else if(x.equals(b)===!1)return x.copy(b),!0}return!1}function f(y){let S=y.uniforms,v=0,E=16;for(let A=0,x=S.length;A<x;A++){let T=Array.isArray(S[A])?S[A]:[S[A]];for(let N=0,R=T.length;N<R;N++){let L=T[N],F=Array.isArray(L.value)?L.value:[L.value];for(let O=0,H=F.length;O<H;O++){let k=F[O],V=_(k),Z=v%E,j=Z%V.boundary,ee=Z+j;v+=j,ee!==0&&E-ee<V.storage&&(v+=E-ee),L.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=V.storage}}}let b=v%E;return b>0&&(v+=E-b),y.__size=v,y.__cache={},this}function _(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):we("WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){let S=y.target;S.removeEventListener("dispose",m);let v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}function zS(){return fi===null&&(fi=new Cr(HS,16,16,Bs,di),fi.name="DFG_LUT",fi.minFilter=Ut,fi.magFilter=Ut,fi.wrapS=Ln,fi.wrapT=Ln,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var rx,ox,ax,lx,cx,ux,hx,dx,fx,px,mx,gx,_x,xx,yx,vx,Mx,Sx,bx,Tx,Ex,wx,Ax,Rx,Cx,Ix,Px,Lx,Dx,Ux,Nx,Ox,Fx,Bx,kx,Vx,Hx,zx,Gx,Wx,Xx,$x,qx,Yx,jx,Zx,Kx,Jx,Qx,ey,ty,ny,iy,sy,ry,oy,ay,ly,cy,uy,hy,dy,fy,py,my,gy,_y,xy,yy,vy,My,Sy,by,Ty,Ey,wy,Ay,Ry,Cy,Iy,Py,Ly,Dy,Uy,Ny,Oy,Fy,By,ky,Vy,Hy,zy,Gy,Wy,Xy,$y,qy,Yy,jy,Zy,Ky,Jy,Qy,ev,tv,nv,iv,sv,rv,ov,av,lv,cv,uv,hv,dv,fv,pv,mv,gv,_v,xv,yv,vv,Mv,Sv,bv,Tv,Ev,wv,Av,Rv,Cv,Iv,Pv,Lv,Dv,Uv,Nv,Ov,Fv,qe,le,pi,Pc,Vs,Bv,ls,im,zs,Wv,ca,sm,Rh,Ch,Ih,Ph,Xv,Dc,Uc,nM,wm,Uh,Am,Rm,Cm,lm,cm,um,hm,dm,Nh,Oh,Fh,Lh,Wr,XM,$M,mm,ZM,Lc,nS,iS,rS,aS,cS,hS,fS,_S,kh,Vh,TS,RS,CS,IS,PS,Tm,ua,Dh,OS,FS,Hh,zh,Hs,BS,HS,fi,Nc,Oe=ys(()=>{Ah();Ah();rx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ox=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ux=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,px=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_x=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Rx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ix=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Px=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Bx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$x=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ey=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ty=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ny=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ry=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ly=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,py=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,my=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_y=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,My=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,by=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ay=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ry=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ly=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Uy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,By=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ky=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,av=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_v=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ev=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Av=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ov=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:rx,alphahash_pars_fragment:ox,alphamap_fragment:ax,alphamap_pars_fragment:lx,alphatest_fragment:cx,alphatest_pars_fragment:ux,aomap_fragment:hx,aomap_pars_fragment:dx,batching_pars_vertex:fx,batching_vertex:px,begin_vertex:mx,beginnormal_vertex:gx,bsdfs:_x,iridescence_fragment:xx,bumpmap_pars_fragment:yx,clipping_planes_fragment:vx,clipping_planes_pars_fragment:Mx,clipping_planes_pars_vertex:Sx,clipping_planes_vertex:bx,color_fragment:Tx,color_pars_fragment:Ex,color_pars_vertex:wx,color_vertex:Ax,common:Rx,cube_uv_reflection_fragment:Cx,defaultnormal_vertex:Ix,displacementmap_pars_vertex:Px,displacementmap_vertex:Lx,emissivemap_fragment:Dx,emissivemap_pars_fragment:Ux,colorspace_fragment:Nx,colorspace_pars_fragment:Ox,envmap_fragment:Fx,envmap_common_pars_fragment:Bx,envmap_pars_fragment:kx,envmap_pars_vertex:Vx,envmap_physical_pars_fragment:Kx,envmap_vertex:Hx,fog_vertex:zx,fog_pars_vertex:Gx,fog_fragment:Wx,fog_pars_fragment:Xx,gradientmap_pars_fragment:$x,lightmap_pars_fragment:qx,lights_lambert_fragment:Yx,lights_lambert_pars_fragment:jx,lights_pars_begin:Zx,lights_toon_fragment:Jx,lights_toon_pars_fragment:Qx,lights_phong_fragment:ey,lights_phong_pars_fragment:ty,lights_physical_fragment:ny,lights_physical_pars_fragment:iy,lights_fragment_begin:sy,lights_fragment_maps:ry,lights_fragment_end:oy,logdepthbuf_fragment:ay,logdepthbuf_pars_fragment:ly,logdepthbuf_pars_vertex:cy,logdepthbuf_vertex:uy,map_fragment:hy,map_pars_fragment:dy,map_particle_fragment:fy,map_particle_pars_fragment:py,metalnessmap_fragment:my,metalnessmap_pars_fragment:gy,morphinstance_vertex:_y,morphcolor_vertex:xy,morphnormal_vertex:yy,morphtarget_pars_vertex:vy,morphtarget_vertex:My,normal_fragment_begin:Sy,normal_fragment_maps:by,normal_pars_fragment:Ty,normal_pars_vertex:Ey,normal_vertex:wy,normalmap_pars_fragment:Ay,clearcoat_normal_fragment_begin:Ry,clearcoat_normal_fragment_maps:Cy,clearcoat_pars_fragment:Iy,iridescence_pars_fragment:Py,opaque_fragment:Ly,packing:Dy,premultiplied_alpha_fragment:Uy,project_vertex:Ny,dithering_fragment:Oy,dithering_pars_fragment:Fy,roughnessmap_fragment:By,roughnessmap_pars_fragment:ky,shadowmap_pars_fragment:Vy,shadowmap_pars_vertex:Hy,shadowmap_vertex:zy,shadowmask_pars_fragment:Gy,skinbase_vertex:Wy,skinning_pars_vertex:Xy,skinning_vertex:$y,skinnormal_vertex:qy,specularmap_fragment:Yy,specularmap_pars_fragment:jy,tonemapping_fragment:Zy,tonemapping_pars_fragment:Ky,transmission_fragment:Jy,transmission_pars_fragment:Qy,uv_pars_fragment:ev,uv_pars_vertex:tv,uv_vertex:nv,worldpos_vertex:iv,background_vert:sv,background_frag:rv,backgroundCube_vert:ov,backgroundCube_frag:av,cube_vert:lv,cube_frag:cv,depth_vert:uv,depth_frag:hv,distance_vert:dv,distance_frag:fv,equirect_vert:pv,equirect_frag:mv,linedashed_vert:gv,linedashed_frag:_v,meshbasic_vert:xv,meshbasic_frag:yv,meshlambert_vert:vv,meshlambert_frag:Mv,meshmatcap_vert:Sv,meshmatcap_frag:bv,meshnormal_vert:Tv,meshnormal_frag:Ev,meshphong_vert:wv,meshphong_frag:Av,meshphysical_vert:Rv,meshphysical_frag:Cv,meshtoon_vert:Iv,meshtoon_frag:Pv,points_vert:Lv,points_frag:Dv,shadow_vert:Uv,shadow_frag:Nv,sprite_vert:Ov,sprite_frag:Fv},le={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},pi={basic:{uniforms:on([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:on([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:on([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:on([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:on([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ye(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:on([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:on([le.points,le.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:on([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:on([le.common,le.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:on([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:on([le.sprite,le.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:on([le.common,le.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:on([le.lights,le.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};pi.physical={uniforms:on([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};Pc={r:0,b:0,g:0},Vs=new sn,Bv=new Re;ls=4,im=[.125,.215,.35,.446,.526,.582],zs=20,Wv=256,ca=new ns,sm=new ye,Rh=null,Ch=0,Ih=0,Ph=!1,Xv=new C,Dc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Xv}=r;Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rh,Ch,Ih),this._renderer.xr.enabled=Ph,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:di,format:Rn,colorSpace:Kt,depthBuffer:!1},s=rm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$v(r)),this._blurMaterial=Yv(r,e,t),this._ggxMaterial=qv(r,e,t)}return s}_compileMaterial(e){let t=new Bt(new Qe,e);this._renderer.compile(t,ca)}_sceneToCubeUV(e,t,n,s,r){let l=new Ft(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(sm),h.toneMapping=Zn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bt(new Lr,new mn({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(sm),g=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));let E=this._cubeSize;Gr(s,v*E,S>2?E:0,E,E),h.setRenderTarget(s),g&&h.render(_,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===os||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=om());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Gr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ca)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,p=h*d,{_lodMax:f}=this,_=this._sizeLods[n],m=3*_*(n>f-ls?n-f+ls:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=f-t,Gr(r,m,g,3*_,2*_),s.setRenderTarget(r),s.render(a,ca),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=f-n,Gr(e,m,g,3*_,2*_),s.setRenderTarget(e),s.render(a,ca)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Fe("blur direction must be either latitudinal or longitudinal!");let u=3,h=this._lodMeshes[s];h.material=c;let d=c.uniforms,p=this._sizeLods[n]-1,f=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*zs-1),_=r/f,m=isFinite(r)?1+Math.floor(u*_):zs;m>zs&&we(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zs}`);let g=[],y=0;for(let A=0;A<zs;++A){let x=A/_,T=Math.exp(-x*x/2);g.push(T),A===0?y+=T:A<m&&(y+=2*T)}for(let A=0;A<g.length;A++)g[A]=g[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=f,d.mipInt.value=S-n;let v=this._sizeLods[s],E=3*v*(s>S-ls?s-S+ls:0),b=4*(this._cubeSize-v);Gr(t,E,b,3*v,2*v),l.setRenderTarget(t),l.render(h,ca)}};Uc=class extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ko(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Lr(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:hi});r.uniforms.tEquirect.value=t;let o=new Bt(s,r),a=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Ut),new Nl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};nM={[oh]:"LINEAR_TONE_MAPPING",[ah]:"REINHARD_TONE_MAPPING",[lh]:"CINEON_TONE_MAPPING",[ta]:"ACES_FILMIC_TONE_MAPPING",[uh]:"AGX_TONE_MAPPING",[hh]:"NEUTRAL_TONE_MAPPING",[ch]:"CUSTOM_TONE_MAPPING"};wm=new Yt,Uh=new ts(1,1),Am=new Po,Rm=new bl,Cm=new ko,lm=[],cm=[],um=new Float32Array(16),hm=new Float32Array(9),dm=new Float32Array(4);Nh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bM(t.type)}},Oh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GM(t.type)}},Fh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Lh=/(\w+)(\])?(\[|\.)?/g;Wr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);WM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};XM=37297,$M=0;mm=new De;ZM={[oh]:"Linear",[ah]:"Reinhard",[lh]:"Cineon",[ta]:"ACESFilmic",[uh]:"AgX",[hh]:"Neutral",[ch]:"Custom"};Lc=new C;nS=/^[ \t]*#include +<([\w\d./]+)>/gm;iS=new Map;rS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;aS={[ea]:"SHADOWMAP_TYPE_PCF",[Br]:"SHADOWMAP_TYPE_VSM"};cS={[os]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE",[na]:"ENVMAP_TYPE_CUBE_UV"};hS={[Os]:"ENVMAP_MODE_REFRACTION"};fS={[rh]:"ENVMAP_BLENDING_MULTIPLY",[Np]:"ENVMAP_BLENDING_MIX",[Op]:"ENVMAP_BLENDING_ADD"};_S=0,kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Vh(e),t.set(e,n)),n}},Vh=class{constructor(e){this.id=_S++,this.code=e,this.usedTimes=0}};TS=0;RS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,IS=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],PS=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Tm=new Re,ua=new C,Dh=new C;OS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Hh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Vo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new un({vertexShader:OS,fragmentShader:FS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new Ho(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zh=class extends Yn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,f=null,_=typeof XRWebGLBinding<"u",m=new Hh,g={},y=t.getContextAttributes(),S=null,v=null,E=[],b=[],A=new Le,x=null,T=new Ft;T.viewport=new Tt;let N=new Ft;N.viewport=new Tt;let R=[T,N],L=new Ol,F=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=E[Y];return se===void 0&&(se=new Ar,E[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=E[Y];return se===void 0&&(se=new Ar,E[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=E[Y];return se===void 0&&(se=new Ar,E[Y]=se),se.getHandSpace()};function H(Y){let se=b.indexOf(Y.inputSource);if(se===-1)return;let oe=E[se];oe!==void 0&&(oe.update(Y.inputSource,Y.frame,c||o),oe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",V);for(let Y=0;Y<E.length;Y++){let se=b[Y];se!==null&&(b[Y]=null,E[Y].disconnect(se))}F=null,O=null,m.reset();for(let Y in g)delete g[Y];e.setRenderTarget(S),p=null,d=null,h=null,s=null,v=null,_t.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",k),s.addEventListener("inputsourceschange",V),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,ze=null,Ue=null;y.depth&&(Ue=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=y.stencil?as:si,ze=y.stencil?Hr:Jn);let Be={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new En(d.textureWidth,d.textureHeight,{format:Rn,type:xn,depthTexture:new ts(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let oe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new En(p.framebufferWidth,p.framebufferHeight,{format:Rn,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),_t.setContext(s),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(Y){for(let se=0;se<Y.removed.length;se++){let oe=Y.removed[se],ze=b.indexOf(oe);ze>=0&&(b[ze]=null,E[ze].disconnect(oe))}for(let se=0;se<Y.added.length;se++){let oe=Y.added[se],ze=b.indexOf(oe);if(ze===-1){for(let Be=0;Be<E.length;Be++)if(Be>=b.length){b.push(oe),ze=Be;break}else if(b[Be]===null){b[Be]=oe,ze=Be;break}if(ze===-1)break}let Ue=E[ze];Ue&&Ue.connect(oe)}}let Z=new C,j=new C;function ee(Y,se,oe){Z.setFromMatrixPosition(se.matrixWorld),j.setFromMatrixPosition(oe.matrixWorld);let ze=Z.distanceTo(j),Ue=se.projectionMatrix.elements,Be=oe.projectionMatrix.elements,Pt=Ue[14]/(Ue[10]-1),Je=Ue[14]/(Ue[10]+1),st=(Ue[9]+1)/Ue[5],ut=(Ue[9]-1)/Ue[5],We=(Ue[8]-1)/Ue[0],At=(Be[8]+1)/Be[0],P=Pt*We,Rt=Pt*At,et=ze/(-We+At),mt=et*-We;if(se.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(mt),Y.translateZ(et),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ue[10]===-1)Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let Se=Pt+et,I=Je+et,M=P-mt,U=Rt+(ze-mt),q=st*Je/I*Se,K=ut*Je/I*Se;Y.projectionMatrix.makePerspective(M,U,q,K,Se,I),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function fe(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let se=Y.near,oe=Y.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),L.near=N.near=T.near=se,L.far=N.far=T.far=oe,(F!==L.near||O!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,O=L.far),L.layers.mask=Y.layers.mask|6,T.layers.mask=L.layers.mask&-5,N.layers.mask=L.layers.mask&-3;let ze=Y.parent,Ue=L.cameras;fe(L,ze);for(let Be=0;Be<Ue.length;Be++)fe(Ue[Be],ze);Ue.length===2?ee(L,T,N):L.projectionMatrix.copy(T.projectionMatrix),ce(Y,L,ze)};function ce(Y,se,oe){oe===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(oe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ps*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Y){return g[Y]};let Ge=null;function St(Y,se){if(u=se.getViewerPose(c||o),f=se,u!==null){let oe=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ze=!1;oe.length!==L.cameras.length&&(L.cameras.length=0,ze=!0);for(let Je=0;Je<oe.length;Je++){let st=oe[Je],ut=null;if(p!==null)ut=p.getViewport(st);else{let At=h.getViewSubImage(d,st);ut=At.viewport,Je===0&&(e.setRenderTargetTextures(v,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(v))}let We=R[Je];We===void 0&&(We=new Ft,We.layers.enable(Je),We.viewport=new Tt,R[Je]=We),We.matrix.fromArray(st.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(st.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ut.x,ut.y,ut.width,ut.height),Je===0&&(L.matrix.copy(We.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ze===!0&&L.cameras.push(We)}let Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let Je=h.getDepthInformation(oe[0]);Je&&Je.isValid&&Je.texture&&m.init(Je,s.renderState)}if(Ue&&Ue.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Je=0;Je<oe.length;Je++){let st=oe[Je].camera;if(st){let ut=g[st];ut||(ut=new Vo,g[st]=ut);let We=h.getCameraImage(st);ut.sourceTexture=We}}}}for(let oe=0;oe<E.length;oe++){let ze=b[oe],Ue=E[oe];ze!==null&&Ue!==void 0&&Ue.update(ze,se,c||o)}Ge&&Ge(Y,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),f=null}let _t=new Em;_t.setAnimationLoop(St),this.setAnimationLoop=function(Y){Ge=Y},this.dispose=function(){}}},Hs=new sn,BS=new Re;HS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;Nc=class{constructor(e={}){let{canvas:t=Zp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=xn}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let _=p,m=new Set([Yl,ql,$l]),g=new Set([xn,Jn,Vr,Hr,Gl,Wl]),y=new Uint32Array(4),S=new Int32Array(4),v=null,E=null,b=[],A=[],x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,N=!1;this._outputColorSpace=Vt;let R=0,L=0,F=null,O=-1,H=null,k=new Tt,V=new Tt,Z=null,j=new ye(0),ee=0,fe=t.width,ce=t.height,Ge=1,St=null,_t=null,Y=new Tt(0,0,fe,ce),se=new Tt(0,0,fe,ce),oe=!1,ze=new Ir,Ue=!1,Be=!1,Pt=new Re,Je=new C,st=new Tt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function At(){return F===null?Ge:1}let P=n;function Rt(w,B){return t.getContext(w,B)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",ht,!1),P===null){let B="webgl2";if(P=Rt(B,w),P===null)throw Rt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Fe("WebGLRenderer: "+w.message),w}let et,mt,Se,I,M,U,q,K,$,xe,te,Ie,Ne,Q,ie,ge,ve,de,Xe,D,ae,ne,pe;function J(){et=new Zv(P),et.init(),ae=new NS(P,et),mt=new zv(P,et,e,ae),Se=new DS(P,et),mt.reversedDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),I=new Qv(P),M=new yS,U=new US(P,et,Se,M,mt,ae,I),q=new jv(T),K=new sx(P),ne=new Vv(P,K),$=new Kv(P,K,I,ne),xe=new tM(P,$,K,ne,I),de=new eM(P,mt,U),ie=new Gv(M),te=new xS(T,q,et,mt,ne,ie),Ie=new kS(T,M),Ne=new MS,Q=new AS(et),ve=new kv(T,q,Se,xe,f,l),ge=new LS(T,xe,mt),pe=new VS(P,I,mt,Se),Xe=new Hv(P,et,I),D=new Jv(P,et,I),I.programs=te.programs,T.capabilities=mt,T.extensions=et,T.properties=M,T.renderLists=Ne,T.shadowMap=ge,T.state=Se,T.info=I}J(),_!==xn&&(x=new iM(_,t.width,t.height,s,r));let X=new zh(T,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ge},this.setPixelRatio=function(w){w!==void 0&&(Ge=w,this.setSize(fe,ce,!1))},this.getSize=function(w){return w.set(fe,ce)},this.setSize=function(w,B,W=!0){if(X.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=w,ce=B,t.width=Math.floor(w*Ge),t.height=Math.floor(B*Ge),W===!0&&(t.style.width=w+"px",t.style.height=B+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(fe*Ge,ce*Ge).floor()},this.setDrawingBufferSize=function(w,B,W){fe=w,ce=B,Ge=W,t.width=Math.floor(w*W),t.height=Math.floor(B*W),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(_===xn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(k)},this.getViewport=function(w){return w.copy(Y)},this.setViewport=function(w,B,W,G){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,B,W,G),Se.viewport(k.copy(Y).multiplyScalar(Ge).round())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,B,W,G){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,B,W,G),Se.scissor(V.copy(se).multiplyScalar(Ge).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(w){Se.setScissorTest(oe=w)},this.setOpaqueSort=function(w){St=w},this.setTransparentSort=function(w){_t=w},this.getClearColor=function(w){return w.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,W=!0){let G=0;if(w){let z=!1;if(F!==null){let ue=F.texture.format;z=m.has(ue)}if(z){let ue=F.texture.type,me=g.has(ue),he=ve.getClearColor(),be=ve.getClearAlpha(),Ae=he.r,$e=he.g,Ye=he.b;me?(y[0]=Ae,y[1]=$e,y[2]=Ye,y[3]=be,P.clearBufferuiv(P.COLOR,0,y)):(S[0]=Ae,S[1]=$e,S[2]=Ye,S[3]=be,P.clearBufferiv(P.COLOR,0,S))}else G|=P.COLOR_BUFFER_BIT}B&&(G|=P.DEPTH_BUFFER_BIT),W&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),ve.dispose(),Ne.dispose(),Q.dispose(),M.dispose(),q.dispose(),xe.dispose(),ne.dispose(),pe.dispose(),te.dispose(),X.dispose(),X.removeEventListener("sessionstart",Da),X.removeEventListener("sessionend",Ua),Ti.stop()};function _e(w){w.preventDefault(),Co("WebGLRenderer: Context Lost."),N=!0}function ke(){Co("WebGLRenderer: Context Restored."),N=!1;let w=I.autoReset,B=ge.enabled,W=ge.autoUpdate,G=ge.needsUpdate,z=ge.type;J(),I.autoReset=w,ge.enabled=B,ge.autoUpdate=W,ge.needsUpdate=G,ge.type=z}function ht(w){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function lt(w){let B=w.target;B.removeEventListener("dispose",lt),Bn(B)}function Bn(w){kn(w),M.remove(w)}function kn(w){let B=M.get(w).programs;B!==void 0&&(B.forEach(function(W){te.releaseProgram(W)}),w.isShaderMaterial&&te.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,W,G,z,ue){B===null&&(B=ut);let me=z.isMesh&&z.matrixWorld.determinant()<0,he=gu(w,B,W,G,z);Se.setMaterial(G,me);let be=W.index,Ae=1;if(G.wireframe===!0){if(be=$.getWireframeAttribute(W),be===void 0)return;Ae=2}let $e=W.drawRange,Ye=W.attributes.position,Pe=$e.start*Ae,xt=($e.start+$e.count)*Ae;ue!==null&&(Pe=Math.max(Pe,ue.start*Ae),xt=Math.min(xt,(ue.start+ue.count)*Ae)),be!==null?(Pe=Math.max(Pe,0),xt=Math.min(xt,be.count)):Ye!=null&&(Pe=Math.max(Pe,0),xt=Math.min(xt,Ye.count));let Lt=xt-Pe;if(Lt<0||Lt===1/0)return;ne.setup(z,G,he,W,be);let It,yt=Xe;if(be!==null&&(It=K.get(be),yt=D,yt.setIndex(It)),z.isMesh)G.wireframe===!0?(Se.setLineWidth(G.wireframeLinewidth*At()),yt.setMode(P.LINES)):yt.setMode(P.TRIANGLES);else if(z.isLine){let en=G.linewidth;en===void 0&&(en=1),Se.setLineWidth(en*At()),z.isLineSegments?yt.setMode(P.LINES):z.isLineLoop?yt.setMode(P.LINE_LOOP):yt.setMode(P.LINE_STRIP)}else z.isPoints?yt.setMode(P.POINTS):z.isSprite&&yt.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Io("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))yt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let en=z._multiDrawStarts,Ee=z._multiDrawCounts,Sn=z._multiDrawCount,rt=be?K.get(be).bytesPerElement:1,Vn=M.get(G).currentProgram.getUniforms();for(let ti=0;ti<Sn;ti++)Vn.setValue(P,"_gl_DrawID",ti),yt.render(en[ti]/rt,Ee[ti])}else if(z.isInstancedMesh)yt.renderInstances(Pe,Lt,z.count);else if(W.isInstancedBufferGeometry){let en=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ee=Math.min(W.instanceCount,en);yt.renderInstances(Pe,Lt,Ee)}else yt.render(Pe,Lt)};function po(w,B,W){w.transparent===!0&&w.side===hn&&w.forceSinglePass===!1?(w.side=Jt,w.needsUpdate=!0,ir(w,B,W),w.side=qn,w.needsUpdate=!0,ir(w,B,W),w.side=hn):ir(w,B,W)}this.compile=function(w,B,W=null){W===null&&(W=w),E=Q.get(W),E.init(B),A.push(E),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),w!==W&&w.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights();let G=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ue=z.material;if(ue)if(Array.isArray(ue))for(let me=0;me<ue.length;me++){let he=ue[me];po(he,W,z),G.add(he)}else po(ue,W,z),G.add(ue)}),E=A.pop(),G},this.compileAsync=function(w,B,W=null){let G=this.compile(w,B,W);return new Promise(z=>{function ue(){if(G.forEach(function(me){M.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){z(w);return}setTimeout(ue,10)}et.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let mo=null;function pu(w){mo&&mo(w)}function Da(){Ti.stop()}function Ua(){Ti.start()}let Ti=new Em;Ti.setAnimationLoop(pu),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(w){mo=w,X.setAnimationLoop(w),w===null?Ti.stop():Ti.start()},X.addEventListener("sessionstart",Da),X.addEventListener("sessionend",Ua),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;let W=X.enabled===!0&&X.isPresenting===!0,G=x!==null&&(F===null||W)&&x.begin(T,F);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(B),B=X.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,B,F),E=Q.get(w,A.length),E.init(B),A.push(E),Pt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ze.setFromProjectionMatrix(Pt,Xn,B.reversedDepth),Be=this.localClippingEnabled,Ue=ie.init(this.clippingPlanes,Be),v=Ne.get(w,b.length),v.init(),b.push(v),X.enabled===!0&&X.isPresenting===!0){let me=T.xr.getDepthSensingMesh();me!==null&&_s(me,B,-1/0,T.sortObjects)}_s(w,B,0,T.sortObjects),v.finish(),T.sortObjects===!0&&v.sort(St,_t),We=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,We&&ve.addToRenderList(v,w),this.info.render.frame++,Ue===!0&&ie.beginShadows();let z=E.state.shadowsArray;if(ge.render(z,w,B),Ue===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&x.hasRenderPass())===!1){let me=v.opaque,he=v.transmissive;if(E.setupLights(),B.isArrayCamera){let be=B.cameras;if(he.length>0)for(let Ae=0,$e=be.length;Ae<$e;Ae++){let Ye=be[Ae];Na(me,he,w,Ye)}We&&ve.render(w);for(let Ae=0,$e=be.length;Ae<$e;Ae++){let Ye=be[Ae];go(v,w,Ye,Ye.viewport)}}else he.length>0&&Na(me,he,w,B),We&&ve.render(w),go(v,w,B)}F!==null&&L===0&&(U.updateMultisampleRenderTarget(F),U.updateRenderTargetMipmap(F)),G&&x.end(T),w.isScene===!0&&w.onAfterRender(T,w,B),ne.resetDefaultState(),O=-1,H=null,A.pop(),A.length>0?(E=A[A.length-1],Ue===!0&&ie.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,b.pop(),b.length>0?v=b[b.length-1]:v=null};function _s(w,B,W,G){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ze.intersectsSprite(w)){G&&st.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Pt);let me=xe.update(w),he=w.material;he.visible&&v.push(w,me,he,W,st.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ze.intersectsObject(w))){let me=xe.update(w),he=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),st.copy(w.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),st.copy(me.boundingSphere.center)),st.applyMatrix4(w.matrixWorld).applyMatrix4(Pt)),Array.isArray(he)){let be=me.groups;for(let Ae=0,$e=be.length;Ae<$e;Ae++){let Ye=be[Ae],Pe=he[Ye.materialIndex];Pe&&Pe.visible&&v.push(w,me,Pe,W,st.z,Ye)}}else he.visible&&v.push(w,me,he,W,st.z,null)}}let ue=w.children;for(let me=0,he=ue.length;me<he;me++)_s(ue[me],B,W,G)}function go(w,B,W,G){let{opaque:z,transmissive:ue,transparent:me}=w;E.setupLightsView(W),Ue===!0&&ie.setGlobalState(T.clippingPlanes,W),G&&Se.viewport(k.copy(G)),z.length>0&&nr(z,B,W),ue.length>0&&nr(ue,B,W),me.length>0&&nr(me,B,W),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Na(w,B,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){let Pe=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new En(1,1,{generateMipmaps:!0,type:Pe?di:xn,minFilter:Kn,samples:Math.max(4,mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let ue=E.state.transmissionRenderTarget[G.id],me=G.viewport||k;ue.setSize(me.z*T.transmissionResolutionScale,me.w*T.transmissionResolutionScale);let he=T.getRenderTarget(),be=T.getActiveCubeFace(),Ae=T.getActiveMipmapLevel();T.setRenderTarget(ue),T.getClearColor(j),ee=T.getClearAlpha(),ee<1&&T.setClearColor(16777215,.5),T.clear(),We&&ve.render(W);let $e=T.toneMapping;T.toneMapping=Zn;let Ye=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),Ue===!0&&ie.setGlobalState(T.clippingPlanes,G),nr(w,W,G),U.updateMultisampleRenderTarget(ue),U.updateRenderTargetMipmap(ue),et.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let xt=0,Lt=B.length;xt<Lt;xt++){let It=B[xt],{object:yt,geometry:en,material:Ee,group:Sn}=It;if(Ee.side===hn&&yt.layers.test(G.layers)){let rt=Ee.side;Ee.side=Jt,Ee.needsUpdate=!0,mu(yt,W,G,en,Ee,Sn),Ee.side=rt,Ee.needsUpdate=!0,Pe=!0}}Pe===!0&&(U.updateMultisampleRenderTarget(ue),U.updateRenderTargetMipmap(ue))}T.setRenderTarget(he,be,Ae),T.setClearColor(j,ee),Ye!==void 0&&(G.viewport=Ye),T.toneMapping=$e}function nr(w,B,W){let G=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ue=w.length;z<ue;z++){let me=w[z],{object:he,geometry:be,group:Ae}=me,$e=me.material;$e.allowOverride===!0&&G!==null&&($e=G),he.layers.test(W.layers)&&mu(he,B,W,be,$e,Ae)}}function mu(w,B,W,G,z,ue){w.onBeforeRender(T,B,W,G,z,ue),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(T,B,W,G,w,ue),z.transparent===!0&&z.side===hn&&z.forceSinglePass===!1?(z.side=Jt,z.needsUpdate=!0,T.renderBufferDirect(W,B,G,z,w,ue),z.side=qn,z.needsUpdate=!0,T.renderBufferDirect(W,B,G,z,w,ue),z.side=hn):T.renderBufferDirect(W,B,G,z,w,ue),w.onAfterRender(T,B,W,G,z,ue)}function ir(w,B,W){B.isScene!==!0&&(B=ut);let G=M.get(w),z=E.state.lights,ue=E.state.shadowsArray,me=z.state.version,he=te.getParameters(w,z.state,ue,B,W),be=te.getProgramCacheKey(he),Ae=G.programs;G.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,G.fog=B.fog;let $e=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;G.envMap=q.get(w.envMap||G.environment,$e),G.envMapRotation=G.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Ae===void 0&&(w.addEventListener("dispose",lt),Ae=new Map,G.programs=Ae);let Ye=Ae.get(be);if(Ye!==void 0){if(G.currentProgram===Ye&&G.lightsStateVersion===me)return Oa(w,he),Ye}else he.uniforms=te.getUniforms(w),w.onBeforeCompile(he,T),Ye=te.acquireProgram(he,be),Ae.set(be,Ye),G.uniforms=he.uniforms;let Pe=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=ie.uniform),Oa(w,he),G.needsLights=_u(w),G.lightsStateVersion=me,G.needsLights&&(Pe.ambientLightColor.value=z.state.ambient,Pe.lightProbe.value=z.state.probe,Pe.directionalLights.value=z.state.directional,Pe.directionalLightShadows.value=z.state.directionalShadow,Pe.spotLights.value=z.state.spot,Pe.spotLightShadows.value=z.state.spotShadow,Pe.rectAreaLights.value=z.state.rectArea,Pe.ltc_1.value=z.state.rectAreaLTC1,Pe.ltc_2.value=z.state.rectAreaLTC2,Pe.pointLights.value=z.state.point,Pe.pointLightShadows.value=z.state.pointShadow,Pe.hemisphereLights.value=z.state.hemi,Pe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pe.spotLightMatrix.value=z.state.spotLightMatrix,Pe.spotLightMap.value=z.state.spotLightMap,Pe.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Ye,G.uniformsList=null,Ye}function _o(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=Wr.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Oa(w,B){let W=M.get(w);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function gu(w,B,W,G,z){B.isScene!==!0&&(B=ut),U.resetTextureUnits();let ue=B.fog,me=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?B.environment:null,he=F===null?T.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Kt,be=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ae=q.get(G.envMap||me,be),$e=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ye=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!W.morphAttributes.position,xt=!!W.morphAttributes.normal,Lt=!!W.morphAttributes.color,It=Zn;G.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(It=T.toneMapping);let yt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,en=yt!==void 0?yt.length:0,Ee=M.get(G),Sn=E.state.lights;if(Ue===!0&&(Be===!0||w!==H)){let $t=w===H&&G.id===O;ie.setState(G,w,$t)}let rt=!1;G.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Sn.state.version||Ee.outputColorSpace!==he||z.isBatchedMesh&&Ee.batching===!1||!z.isBatchedMesh&&Ee.batching===!0||z.isBatchedMesh&&Ee.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ee.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ee.instancing===!1||!z.isInstancedMesh&&Ee.instancing===!0||z.isSkinnedMesh&&Ee.skinning===!1||!z.isSkinnedMesh&&Ee.skinning===!0||z.isInstancedMesh&&Ee.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ee.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ee.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ee.instancingMorph===!1&&z.morphTexture!==null||Ee.envMap!==Ae||G.fog===!0&&Ee.fog!==ue||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ie.numPlanes||Ee.numIntersection!==ie.numIntersection)||Ee.vertexAlphas!==$e||Ee.vertexTangents!==Ye||Ee.morphTargets!==Pe||Ee.morphNormals!==xt||Ee.morphColors!==Lt||Ee.toneMapping!==It||Ee.morphTargetsCount!==en)&&(rt=!0):(rt=!0,Ee.__version=G.version);let Vn=Ee.currentProgram;rt===!0&&(Vn=ir(G,B,z));let ti=!1,xs=!1,rr=!1,bt=Vn.getUniforms(),jt=Ee.uniforms;if(Se.useProgram(Vn.program)&&(ti=!0,xs=!0,rr=!0),G.id!==O&&(O=G.id,xs=!0),ti||H!==w){Se.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),bt.setValue(P,"projectionMatrix",w.projectionMatrix),bt.setValue(P,"viewMatrix",w.matrixWorldInverse);let Wi=bt.map.cameraPosition;Wi!==void 0&&Wi.setValue(P,Je.setFromMatrixPosition(w.matrixWorld)),mt.logarithmicDepthBuffer&&bt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&bt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),H!==w&&(H=w,xs=!0,rr=!0)}if(Ee.needsLights&&(Sn.state.directionalShadowMap.length>0&&bt.setValue(P,"directionalShadowMap",Sn.state.directionalShadowMap,U),Sn.state.spotShadowMap.length>0&&bt.setValue(P,"spotShadowMap",Sn.state.spotShadowMap,U),Sn.state.pointShadowMap.length>0&&bt.setValue(P,"pointShadowMap",Sn.state.pointShadowMap,U)),z.isSkinnedMesh){bt.setOptional(P,z,"bindMatrix"),bt.setOptional(P,z,"bindMatrixInverse");let $t=z.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),bt.setValue(P,"boneTexture",$t.boneTexture,U))}z.isBatchedMesh&&(bt.setOptional(P,z,"batchingTexture"),bt.setValue(P,"batchingTexture",z._matricesTexture,U),bt.setOptional(P,z,"batchingIdTexture"),bt.setValue(P,"batchingIdTexture",z._indirectTexture,U),bt.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&bt.setValue(P,"batchingColorTexture",z._colorsTexture,U));let Gi=W.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&de.update(z,W,Vn),(xs||Ee.receiveShadow!==z.receiveShadow)&&(Ee.receiveShadow=z.receiveShadow,bt.setValue(P,"receiveShadow",z.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&B.environment!==null&&(jt.envMapIntensity.value=B.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=zS()),xs&&(bt.setValue(P,"toneMappingExposure",T.toneMappingExposure),Ee.needsLights&&sr(jt,rr),ue&&G.fog===!0&&Ie.refreshFogUniforms(jt,ue),Ie.refreshMaterialUniforms(jt,G,Ge,ce,E.state.transmissionRenderTarget[w.id]),Wr.upload(P,_o(Ee),jt,U)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Wr.upload(P,_o(Ee),jt,U),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&bt.setValue(P,"center",z.center),bt.setValue(P,"modelViewMatrix",z.modelViewMatrix),bt.setValue(P,"normalMatrix",z.normalMatrix),bt.setValue(P,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let $t=G.uniformsGroups;for(let Wi=0,or=$t.length;Wi<or;Wi++){let Cf=$t[Wi];pe.update(Cf,Vn),pe.bind(Cf,Vn)}}return Vn}function sr(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function _u(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,B,W){let G=M.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),M.get(w.texture).__webglTexture=B,M.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){let W=M.get(w);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};let xu=P.createFramebuffer();this.setRenderTarget=function(w,B=0,W=0){F=w,R=B,L=W;let G=null,z=!1,ue=!1;if(w){let he=M.get(w);if(he.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(P.FRAMEBUFFER,he.__webglFramebuffer),k.copy(w.viewport),V.copy(w.scissor),Z=w.scissorTest,Se.viewport(k),Se.scissor(V),Se.setScissorTest(Z),O=-1;return}else if(he.__webglFramebuffer===void 0)U.setupRenderTarget(w);else if(he.__hasExternalTextures)U.rebindTextures(w,M.get(w.texture).__webglTexture,M.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let $e=w.depthTexture;if(he.__boundDepthTexture!==$e){if($e!==null&&M.has($e)&&(w.width!==$e.image.width||w.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(w)}}let be=w.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ue=!0);let Ae=M.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ae[B])?G=Ae[B][W]:G=Ae[B],z=!0):w.samples>0&&U.useMultisampledRTT(w)===!1?G=M.get(w).__webglMultisampledFramebuffer:Array.isArray(Ae)?G=Ae[W]:G=Ae,k.copy(w.viewport),V.copy(w.scissor),Z=w.scissorTest}else k.copy(Y).multiplyScalar(Ge).floor(),V.copy(se).multiplyScalar(Ge).floor(),Z=oe;if(W!==0&&(G=xu),Se.bindFramebuffer(P.FRAMEBUFFER,G)&&Se.drawBuffers(w,G),Se.viewport(k),Se.scissor(V),Se.setScissorTest(Z),z){let he=M.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,he.__webglTexture,W)}else if(ue){let he=B;for(let be=0;be<w.textures.length;be++){let Ae=M.get(w.textures[be]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+be,Ae.__webglTexture,W,he)}}else if(w!==null&&W!==0){let he=M.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,he.__webglTexture,W)}O=-1},this.readRenderTargetPixels=function(w,B,W,G,z,ue,me,he=0){if(!(w&&w.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be){Se.bindFramebuffer(P.FRAMEBUFFER,be);try{let Ae=w.textures[he],$e=Ae.format,Ye=Ae.type;if(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+he),!mt.textureFormatReadable($e)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Ye)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-G&&W>=0&&W<=w.height-z&&P.readPixels(B,W,G,z,ae.convert($e),ae.convert(Ye),ue)}finally{let Ae=F!==null?M.get(F).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(w,B,W,G,z,ue,me,he=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be)if(B>=0&&B<=w.width-G&&W>=0&&W<=w.height-z){Se.bindFramebuffer(P.FRAMEBUFFER,be);let Ae=w.textures[he],$e=Ae.format,Ye=Ae.type;if(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+he),!mt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Pe),P.bufferData(P.PIXEL_PACK_BUFFER,ue.byteLength,P.STREAM_READ),P.readPixels(B,W,G,z,ae.convert($e),ae.convert(Ye),0);let xt=F!==null?M.get(F).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,xt);let Lt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Jp(P,Lt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Pe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ue),P.deleteBuffer(Pe),P.deleteSync(Lt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,W=0){let G=Math.pow(2,-W),z=Math.floor(w.image.width*G),ue=Math.floor(w.image.height*G),me=B!==null?B.x:0,he=B!==null?B.y:0;U.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,me,he,z,ue),Se.unbindTexture()};let Fa=P.createFramebuffer(),yu=P.createFramebuffer();this.copyTextureToTexture=function(w,B,W=null,G=null,z=0,ue=0){let me,he,be,Ae,$e,Ye,Pe,xt,Lt,It=w.isCompressedTexture?w.mipmaps[ue]:w.image;if(W!==null)me=W.max.x-W.min.x,he=W.max.y-W.min.y,be=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,$e=W.min.y,Ye=W.isBox3?W.min.z:0;else{let jt=Math.pow(2,-z);me=Math.floor(It.width*jt),he=Math.floor(It.height*jt),w.isDataArrayTexture?be=It.depth:w.isData3DTexture?be=Math.floor(It.depth*jt):be=1,Ae=0,$e=0,Ye=0}G!==null?(Pe=G.x,xt=G.y,Lt=G.z):(Pe=0,xt=0,Lt=0);let yt=ae.convert(B.format),en=ae.convert(B.type),Ee;B.isData3DTexture?(U.setTexture3D(B,0),Ee=P.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(U.setTexture2DArray(B,0),Ee=P.TEXTURE_2D_ARRAY):(U.setTexture2D(B,0),Ee=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);let Sn=P.getParameter(P.UNPACK_ROW_LENGTH),rt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Vn=P.getParameter(P.UNPACK_SKIP_PIXELS),ti=P.getParameter(P.UNPACK_SKIP_ROWS),xs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,It.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,It.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ae),P.pixelStorei(P.UNPACK_SKIP_ROWS,$e),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ye);let rr=w.isDataArrayTexture||w.isData3DTexture,bt=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){let jt=M.get(w),Gi=M.get(B),$t=M.get(jt.__renderTarget),Wi=M.get(Gi.__renderTarget);Se.bindFramebuffer(P.READ_FRAMEBUFFER,$t.__webglFramebuffer),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let or=0;or<be;or++)rr&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,M.get(w).__webglTexture,z,Ye+or),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,M.get(B).__webglTexture,ue,Lt+or)),P.blitFramebuffer(Ae,$e,me,he,Pe,xt,me,he,P.DEPTH_BUFFER_BIT,P.NEAREST);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||M.has(w)){let jt=M.get(w),Gi=M.get(B);Se.bindFramebuffer(P.READ_FRAMEBUFFER,Fa),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,yu);for(let $t=0;$t<be;$t++)rr?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,jt.__webglTexture,z,Ye+$t):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,jt.__webglTexture,z),bt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Gi.__webglTexture,ue,Lt+$t):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Gi.__webglTexture,ue),z!==0?P.blitFramebuffer(Ae,$e,me,he,Pe,xt,me,he,P.COLOR_BUFFER_BIT,P.NEAREST):bt?P.copyTexSubImage3D(Ee,ue,Pe,xt,Lt+$t,Ae,$e,me,he):P.copyTexSubImage2D(Ee,ue,Pe,xt,Ae,$e,me,he);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else bt?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Ee,ue,Pe,xt,Lt,me,he,be,yt,en,It.data):B.isCompressedArrayTexture?P.compressedTexSubImage3D(Ee,ue,Pe,xt,Lt,me,he,be,yt,It.data):P.texSubImage3D(Ee,ue,Pe,xt,Lt,me,he,be,yt,en,It):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ue,Pe,xt,me,he,yt,en,It.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ue,Pe,xt,It.width,It.height,yt,It.data):P.texSubImage2D(P.TEXTURE_2D,ue,Pe,xt,me,he,yt,en,It);P.pixelStorei(P.UNPACK_ROW_LENGTH,Sn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,rt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Vn),P.pixelStorei(P.UNPACK_SKIP_ROWS,ti),P.pixelStorei(P.UNPACK_SKIP_IMAGES,xs),ue===0&&B.generateMipmaps&&P.generateMipmap(Ee),Se.unbindTexture()},this.initRenderTarget=function(w){M.get(w).__webglFramebuffer===void 0&&U.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?U.setTextureCube(w,0):w.isData3DTexture?U.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?U.setTexture2DArray(w,0):U.setTexture2D(w,0),Se.unbindTexture()},this.resetState=function(){R=0,L=0,F=null,Se.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}});function Gh(i,e){if(e===yh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===zr||e===aa){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===zr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Im=ys(()=>{Oe()});function Pm(i){let e=new Map,t=new Map,n=i.clone();return Lm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Lm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Lm(i.children[n],e.children[n],t)}var Dm=ys(()=>{});function GS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Nt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}function $S(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ds({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qn})),i.DefaultMaterial}function Gs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function mi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function qS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function YS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jS(i){let e,t=i.extensions&&i.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$h(t.attributes):e=i.indices+":"+$h(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+$h(i.targets[n]);return e}function $h(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function gd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ZS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function JS(i,e,t){let n=e.attributes,s=new wn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){let u=gd(qr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,l=new C;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],p=d.min,f=d.max;if(p!==void 0&&f!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(f[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(f[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(f[2]))),d.normalized){let _=gd(qr[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new pn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Fm(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=md[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Ke.workingColorSpace!==Kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),mi(i,e),JS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?qS(i,e.targets,t):i})}var fa,Ze,qh,Yh,jh,Zh,Kh,Jh,Qh,ed,td,nd,id,sd,rd,od,ad,ld,Bc,cd,Bm,da,Um,ud,hd,dd,fd,kc,WS,pd,Un,qr,Nm,Om,Wh,md,cs,XS,Xh,KS,_d,km=ys(()=>{Oe();Im();Dm();fa=class extends ui{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Zh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Bc(t,Ze.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Bc(t,Ze.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new cd(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Bi.extractUrlBase(e);o=Bi.resolveURL(c,this.path)}else o=Bi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Dr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Bm){try{o[Ze.KHR_BINARY_GLTF]=new ud(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new _d(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ze.KHR_MATERIALS_UNLIT:o[h]=new Yh;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[h]=new hd(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[h]=new dd;break;case Ze.KHR_MESH_QUANTIZATION:o[h]=new fd;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},qh=class{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new ye(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Kt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new is(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Yo(u),c.distance=h;break;case"spot":c=new qo(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),mi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Yh=class{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return mn}extendParams(e,t,n){let s=[];e.color=new ye(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Kt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Vt))}return Promise.all(s)}},jh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Zh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Le(r,r)}return Promise.all(s)}},Kh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Jh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Qh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Kt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Vt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},ed=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},td=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ye().setRGB(r[0],r[1],r[2],Kt),Promise.all(s)}},nd=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}},id=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ye().setRGB(r[0],r[1],r[2],Kt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Vt)),Promise.all(s)}},sd=class{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},rd=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},od=class{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},ad=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},ld=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Bc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,d,s.mode,s.filter),p})})}else return null}},cd=class{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Un.TRIANGLES&&c.mode!==Un.TRIANGLE_STRIP&&c.mode!==Un.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(let f of h){let _=new Re,m=new C,g=new Me,y=new C(1,1,1),S=new Oo(f.geometry,f.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),S.setMatrixAt(v,_.compose(m,g,y));for(let v in l)if(v==="_COLOR_0"){let E=l[v];S.instanceColor=new es(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&f.geometry.setAttribute(v,l[v]);ft.prototype.copy.call(S,f),this.parser.assignFinalMaterial(S),p.push(S)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},Bm="glTF",da=12,Um={JSON:1313821514,BIN:5130562},ud=class{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,da),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-da,r=new DataView(e,da),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Um.JSON){let c=new Uint8Array(e,da+o,a);this.content=n.decode(c)}else if(l===Um.BIN){let c=da+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},hd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=md[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=md[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],p=qr[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(p){for(let f in p.attributes){let _=p.attributes[f],m=l[f];m!==void 0&&(_.normalized=m)}h(p)},a,c,Kt,d)})})}},dd=class{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},fd=class{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}},kc=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,p=d*h,f=e*c,_=f-c,m=-2*p+3*d,g=p-d,y=1-m,S=g-d+h;for(let v=0;v!==a;v++){let E=o[_+v+a],b=o[_+v+l]*u,A=o[f+v+a],x=o[f+v]*u;r[v]=y*E+S*b+m*A+g*x}return r}},WS=new Me,pd=class extends kc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return WS.fromArray(r).normalize().toArray(r),r}},Un={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nm={9728:Dt,9729:Ut,9984:Hl,9985:kr,9986:Fs,9987:Kn},Om={33071:Ln,33648:Sr,10497:Qi},Wh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},md={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},cs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},XS={CUBICSPLINE:void 0,LINEAR:Is,STEP:Cs},Xh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};KS=new Re,_d=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new GS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Wo(this.options.manager):this.textureLoader=new Zo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Dr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Gs(r,a,s),mi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Bi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Wh[s.type],a=qr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ve(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Wh[s.type],c=qr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,f=s.normalized===!0,_,m;if(p&&p!==h){let g=Math.floor(d/p),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,S=t.cache.get(y);S||(_=new c(a,g*p,s.count*p/u),S=new Li(_,p/u),t.cache.add(y,S)),m=new Di(S,l,d%p/u,f)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),m=new Ve(_,l,f);if(s.sparse!==void 0){let g=Wh.SCALAR,y=qr[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,E=new y(o[1],S,s.sparse.count*g),b=new c(o[2],v,s.sparse.count*l);a!==null&&(m=new Ve(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,x=E.length;A<x;A++){let T=E[A];if(m.setX(T,b[A*l]),l>=2&&m.setY(T,b[A*l+1]),l>=3&&m.setZ(T,b[A*l+2]),l>=4&&m.setW(T,b[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=f}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Nm[d.magFilter]||Ut,u.minFilter=Nm[d.minFilter]||Kn,u.wrapS=Om[d.wrapS]||Qi,u.wrapT=Om[d.wrapT]||Qi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Dt&&u.minFilter!==Ut,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let f=d;t.isImageBitmapLoader===!0&&(f=function(_){let m=new Yt(_);m.needsUpdate=!0,d(m)}),t.load(Bi.resolveURL(h,r.path),f,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),mi(h,o),h.userData.mimeType=o.mimeType||ZS(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Pr,rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new cn,rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ds}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){let h=s[Ze.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new ye(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Kt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Vt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=hn);let u=r.alphaMode||Xh.OPAQUE;if(u===Xh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Xh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==mn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Le(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==mn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==mn){let h=r.emissiveFactor;a.emissive=new ye().setRGB(h[0],h[1],h[2],Kt)}return r.emissiveTexture!==void 0&&o!==mn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Vt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),mi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Gs(s,h,r),h})}createUniqueName(e){let t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Fm(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=jS(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Fm(new Qe,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?$S(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,f=u.length;p<f;p++){let _=u[p],m=o[p],g,y=c[p];if(m.mode===Un.TRIANGLES||m.mode===Un.TRIANGLE_STRIP||m.mode===Un.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new Ls(_,y):new Bt(_,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===Un.TRIANGLE_STRIP?g.geometry=Gh(g.geometry,aa):m.mode===Un.TRIANGLE_FAN&&(g.geometry=Gh(g.geometry,zr));else if(m.mode===Un.LINES)g=new Dn(_,y);else if(m.mode===Un.LINE_STRIP)g=new Ni(_,y);else if(m.mode===Un.LINE_LOOP)g=new Fo(_,y);else if(m.mode===Un.POINTS)g=new Bo(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&YS(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),mi(g,r),m.extensions&&Gs(s,g,m),t.assignFinalMaterial(g),h.push(g)}for(let p=0,f=h.length;p<f;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Gs(s,h[0],r),h[0];let d=new Ct;r.extensions&&Gs(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,f=h.length;p<f;p++)d.add(h[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ft(tt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ns(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),mi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new Re;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new jn(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let p=s.channels[h],f=s.samplers[p.sampler],_=p.target,m=_.node,g=s.parameters!==void 0?s.parameters[f.input]:f.input,y=s.parameters!==void 0?s.parameters[f.output]:f.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(f),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],p=h[1],f=h[2],_=h[3],m=h[4],g=[];for(let S=0,v=d.length;S<v;S++){let E=d[S],b=p[S],A=f[S],x=_[S],T=m[S];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let N=n._createAnimationTracks(E,b,A,x,T);if(N)for(let R=0;R<N.length;R++)g.push(N[R])}let y=new Us(r,void 0,g);return mi(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,KS)});for(let p=0,f=h.length;p<f;p++)u.add(h[p]);if(u.userData.pivot!==void 0&&h.length>0){let p=u.userData.pivot,f=h[0];u.pivot=new C().fromArray(p),u.position.x-=p[0],u.position.y-=p[1],u.position.z-=p[2],f.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Rr:c.length>1?u=new Ct:c.length===1?u=c[0]:u=new ft,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),mi(u,r),r.extensions&&Gs(n,u,r),r.matrix!==void 0){let h=new Re;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ct;n.name&&(r.name=s.createUniqueName(n.name)),mi(r,n),n.extensions&&Gs(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let d=l[u];d.parent!==null?r.add(Pm(d)):r.add(d)}let c=u=>{let h=new Map;for(let[d,p]of s.associations)(d instanceof rn||d instanceof Yt)&&h.set(d,p);return u.traverse(d=>{let p=s.associations.get(d);p!=null&&h.set(d,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];cs[r.path]===cs.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(cs[r.path]){case cs.weights:c=oi;break;case cs.rotation:c=li;break;case cs.translation:case cs.scale:c=ci;break;default:n.itemSize===1?c=oi:c=ci;break}let u=s.interpolation!==void 0?XS[s.interpolation]:Is,h=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let f=new c(l[d]+"."+cs[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),o.push(f)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=gd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof li?pd:kc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});function eb(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function tb(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function nb(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zm),this.state=Mt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ib(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ss.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Mt.DOLLY;break;case ss.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Mt.ROTATE}break;case ss.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(yd)}function sb(i){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function rb(i){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(i.preventDefault(),this.dispatchEvent(yd),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(zm))}function ob(i){this.enabled!==!1&&this._handleKeyDown(i)}function ab(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case rs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Mt.TOUCH_ROTATE;break;case rs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Mt.TOUCH_DOLLY_PAN;break;case rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(yd)}function lb(i){switch(this._trackPointer(i),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Mt.NONE}}function cb(i){this.enabled!==!1&&i.preventDefault()}function ub(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hb(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Vm,yd,zm,Vc,Hm,QS,Gt,yn,Mt,xd,Hc,Gm=ys(()=>{Oe();Vm={type:"change"},yd={type:"start"},zm={type:"end"},Vc=new Ui,Hm=new Pn,QS=Math.cos(70*tt.DEG2RAD),Gt=new C,yn=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xd=1e-6,Hc=class extends Qo{constructor(e,t=null){super(e,t),this.state=Mt.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ss.ROTATE,MIDDLE:ss.DOLLY,RIGHT:ss.PAN},this.touches={ONE:rs.ROTATE,TWO:rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Me,this._lastTargetPosition=new C,this._quat=new Me().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fr,this._sphericalDelta=new Fr,this._scale=1,this._panOffset=new C,this._rotateStart=new Le,this._rotateEnd=new Le,this._rotateDelta=new Le,this._panStart=new Le,this._panEnd=new Le,this._panDelta=new Le,this._dollyStart=new Le,this._dollyEnd=new Le,this._dollyDelta=new Le,this._dollyDirection=new C,this._mouse=new Le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tb.bind(this),this._onPointerDown=eb.bind(this),this._onPointerUp=nb.bind(this),this._onContextMenu=cb.bind(this),this._onMouseWheel=rb.bind(this),this._onKeyDown=ob.bind(this),this._onTouchStart=ab.bind(this),this._onTouchMove=lb.bind(this),this._onMouseDown=ib.bind(this),this._onMouseMove=sb.bind(this),this._interceptControlDown=ub.bind(this),this._interceptControlUp=hb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vm),this.update(),this.state=Mt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Gt.copy(t).sub(this.target),Gt.applyQuaternion(this._quat),this._spherical.setFromVector3(Gt),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=yn:n>Math.PI&&(n-=yn),s<-Math.PI?s+=yn:s>Math.PI&&(s-=yn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Gt.setFromSpherical(this._spherical),Gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Gt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Vc.origin.copy(this.object.position),Vc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vc.direction))<QS?this.object.lookAt(this.target):(Hm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vc.intersectPlane(Hm,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>xd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xd||this._lastTargetPosition.distanceToSquared(this.target)>xd?(this.dispatchEvent(Vm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?yn/60*this.autoRotateSpeed*e:yn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Gt.setFromMatrixColumn(t,0),Gt.multiplyScalar(-e),this._panOffset.add(Gt)}_panUp(e,t){this.screenSpacePanning===!0?Gt.setFromMatrixColumn(t,1):(Gt.setFromMatrixColumn(t,0),Gt.crossVectors(this.object.up,Gt)),Gt.multiplyScalar(e),this._panOffset.add(Gt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Gt.copy(s).sub(this.target);let r=Gt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}});function wg(i,e,t){var n,s;let r=i.parser.json,o=(n=r.nodes)==null?void 0:n[e];if(o==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;let a=o.mesh;if(a==null)return null;let l=(s=r.meshes)==null?void 0:s[a];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${a}] of glTF but the mesh doesn't exist`),null;let c=l.primitives.length,u=[];return t.traverse(h=>{u.length<c&&h.isMesh&&u.push(h)}),u}function Xm(i,e){return ot(this,null,function*(){let t=yield i.parser.getDependency("node",e);return wg(i,e,t)})}function $m(i){return ot(this,null,function*(){let e=yield i.parser.getDependencies("node"),t=new Map;return e.forEach((n,s)=>{let r=wg(i,s,n);r!=null&&t.set(s,r)}),t})}function Ag(i){return Math.max(Math.min(i,1),0)}function Ng(i){return i.invert?i.invert():i.inverse(),i}function Ud(i,e){return i.matrixWorld.decompose(Cb,e,Ib),e}function $c(i){return[Math.atan2(-i.z,i.x),Math.atan2(i.y,Math.sqrt(i.x*i.x+i.z*i.z))]}function lg(i){let e=Math.round(i/2/Math.PI);return i-2*Math.PI*e}function Vb(i,e){return typeof i!="string"||i===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(i)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(i)||/^data:.*,.*$/i.test(i)||/^blob:.*$/i.test(i)?i:e+i)}function jb(i,e){parseInt("183",10)>=152?i.colorSpace=e:i.encoding=Yb[e]}function Td(i){return parseInt("183",10)>=152?i.colorSpace:eT[i.encoding]}function jr(i){return Math.pow(i,2.2)}function vg(i,e){return e.set(i.elements[12],i.elements[13],i.elements[14])}function mT(i,e){return i.decompose(fT,e,pT),e}function Zc(i){return i.invert?i.invert():i.inverse(),i}function bT(i,e){let t=[i],n=i.parent;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(s=>{e(s)})}function zT(i,e,t){let n=e.elements;i.copy(e),t&&(i.elements[12]=n[0]*t.x+n[4]*t.y+n[8]*t.z+n[12],i.elements[13]=n[1]*t.x+n[5]*t.y+n[9]*t.z+n[13],i.elements[14]=n[2]*t.x+n[6]*t.y+n[10]*t.z+n[14])}function WT(i){return i.invert?i.invert():i.getInverse(GT.copy(i)),i}function YT(i,e){let t=[],n=i;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(s=>{e(s)})}function Fd(i,e){i.children.forEach(t=>{e(t)||Fd(t,e)})}function jT(i){var e;let t=new Map;for(let n of i){let s=n;do{let r=((e=t.get(s))!=null?e:0)+1;if(r===i.size)return s;t.set(s,r),s=s.parent}while(s!==null)}return null}function QT(i){let e=new Set;return i.traverse(t=>{if(!t.isMesh)return;let n=t;e.add(n)}),e}function Tg(i,e,t){if(e.size===1){let o=e.values().next().value;if(o.weight===1)return i[o.index]}let n=new Float32Array(i[0].count*3),s=0;if(t)s=1;else for(let o of e)s+=o.weight;for(let o of e){let a=i[o.index],l=o.weight/s;for(let c=0;c<a.count;c++)n[c*3+0]+=a.getX(c)*l,n[c*3+1]+=a.getY(c)*l,n[c*3+2]+=a.getZ(c)*l}return new Ve(n,3)}function eE(i){var e;let t=QT(i.scene),n=new Map,s=(e=i.expressionManager)==null?void 0:e.expressionMap;if(s!=null)for(let[r,o]of Object.entries(s)){let a=new Set;for(let l of o.binds)if(l instanceof jc){if(l.weight!==0)for(let c of l.primitives){let u=n.get(c);u==null&&(u=new Map,n.set(c,u));let h=u.get(r);h==null&&(h=new Set,u.set(r,h)),h.add(l)}a.add(l)}for(let l of a)o.deleteBind(l)}for(let r of t){let o=n.get(r);if(o==null)continue;let a=r.geometry.morphAttributes;r.geometry.morphAttributes={};let l=r.geometry.clone();r.geometry=l;let c=l.morphTargetsRelative,u=a.position!=null,h=a.normal!=null,d={},p={},f=[];if(u||h){u&&(d.position=[]),h&&(d.normal=[]);let _=0;for(let[m,g]of o)u&&(d.position[_]=Tg(a.position,g,c)),h&&(d.normal[_]=Tg(a.normal,g,c)),s?.[m].addBind(new jc({index:_,weight:1,primitives:[r]})),p[m]=_,f.push(0),_++}l.morphAttributes=d,r.morphTargetDictionary=p,r.morphTargetInfluences=f}}function Kc(i,e,t){if(i.getComponent)return i.getComponent(e,t);{let n=i.array[e*i.itemSize+t];return i.normalized&&(n=tt.denormalize(n,i.array)),n}}function qg(i,e,t,n){i.setComponent?i.setComponent(e,t,n):(i.normalized&&(n=tt.normalize(n,i.array)),i.array[e*i.itemSize+t]=n)}function tE(i){var e;let t=nE(i),n=new Set;for(let h of t)n.has(h.geometry)&&(h.geometry=lE(h.geometry)),n.add(h.geometry);let s=new Map;for(let h of n){let d=h.getAttribute("skinIndex"),p=(e=s.get(d))!=null?e:new Map;s.set(d,p);let f=h.getAttribute("skinWeight"),_=iE(d,f);p.set(f,_)}let r=new Map;for(let h of t){let d=sE(h,s);r.set(h,d)}let o=[];for(let[h,d]of r){let p=!1;for(let f of o)if(rE(d,f.boneInverseMap)){p=!0,f.meshes.add(h);for(let[m,g]of d)f.boneInverseMap.set(m,g);break}p||o.push({boneInverseMap:d,meshes:new Set([h])})}let a=new Map,l=new Pd,c=new Pd,u=new Pd;for(let h of o){let{boneInverseMap:d,meshes:p}=h,f=Array.from(d.keys()),_=Array.from(d.values()),m=new jn(f,_),g=c.getOrCreate(m);for(let y of p){let S=y.geometry.getAttribute("skinIndex"),v=l.getOrCreate(S),E=y.skeleton.bones,b=E.map(T=>u.getOrCreate(T)).join(","),A=`${v};${g};${b}`,x=a.get(A);x==null&&(x=S.clone(),oE(x,E,f),a.set(A,x)),y.geometry.setAttribute("skinIndex",x)}for(let y of p)y.bind(m,new Re)}}function nE(i){let e=new Set;return i.traverse(t=>{if(!t.isSkinnedMesh)return;let n=t;e.add(n)}),e}function iE(i,e){let t=new Set;for(let n=0;n<i.count;n++)for(let s=0;s<i.itemSize;s++){let r=Kc(i,n,s);Kc(e,n,s)!==0&&t.add(r)}return t}function sE(i,e){let t=new Map,n=i.skeleton,s=i.geometry,r=s.getAttribute("skinIndex"),o=s.getAttribute("skinWeight"),a=e.get(r),l=a?.get(o);if(!l)throw new Error("Unreachable. attributeUsedIndexSetMap does not know the skin index attribute or the skin weight attribute.");for(let c of l)t.set(n.bones[c],n.boneInverses[c]);return t}function rE(i,e){for(let[t,n]of i.entries()){let s=e.get(t);if(s!=null&&!aE(n,s))return!1}return!0}function oE(i,e,t){let n=new Map;for(let r of e)n.set(r,n.size);let s=new Map;for(let[r,o]of t.entries()){let a=n.get(o);s.set(a,r)}for(let r=0;r<i.count;r++)for(let o=0;o<i.itemSize;o++){let a=Kc(i,r,o),l=s.get(a);qg(i,r,o,l)}i.needsUpdate=!0}function aE(i,e,t){if(t=t||1e-4,i.elements.length!=e.elements.length)return!1;for(let n=0,s=i.elements.length;n<s;n++)if(Math.abs(i.elements[n]-e.elements[n])>t)return!1;return!0}function lE(i){var e,t,n,s;let r=new Qe;r.name=i.name,r.setIndex(i.index);for(let[o,a]of Object.entries(i.attributes))r.setAttribute(o,a);for(let[o,a]of Object.entries(i.morphAttributes)){let l=o;r.morphAttributes[l]=a.concat()}r.morphTargetsRelative=i.morphTargetsRelative,r.groups=[];for(let o of i.groups)r.addGroup(o.start,o.count,o.materialIndex);return r.boundingSphere=(t=(e=i.boundingSphere)==null?void 0:e.clone())!=null?t:null,r.boundingBox=(s=(n=i.boundingBox)==null?void 0:n.clone())!=null?s:null,r.drawRange.start=i.drawRange.start,r.drawRange.count=i.drawRange.count,r.userData=i.userData,r}function Eg(i){if(Object.values(i).forEach(e=>{e?.isTexture&&e.dispose()}),i.isShaderMaterial){let e=i.uniforms;e&&Object.values(e).forEach(t=>{let n=t.value;n?.isTexture&&n.dispose()})}i.dispose()}function cE(i){let e=i.geometry;e&&e.dispose();let t=i.skeleton;t&&t.dispose();let n=i.material;n&&(Array.isArray(n)?n.forEach(s=>Eg(s)):n&&Eg(n))}function uE(i){i.traverse(cE)}function hE(i,e){var t,n;console.warn("VRMUtils.removeUnnecessaryJoints: removeUnnecessaryJoints is deprecated. Use combineSkeletons instead. combineSkeletons contributes more to the performance improvement. This function will be removed in the next major version.");let s=(t=e?.experimentalSameBoneCounts)!=null?t:!1,r=[];i.traverse(l=>{l.type==="SkinnedMesh"&&r.push(l)});let o=new Map,a=0;for(let l of r){let u=l.geometry.getAttribute("skinIndex");if(o.has(u))continue;let h=new Map,d=new Map;for(let p=0;p<u.count;p++)for(let f=0;f<u.itemSize;f++){let _=Kc(u,p,f),m=h.get(_);m==null&&(m=h.size,h.set(_,m),d.set(m,_)),qg(u,p,f,m)}u.needsUpdate=!0,o.set(u,d),a=Math.max(a,h.size)}for(let l of r){let u=l.geometry.getAttribute("skinIndex"),h=o.get(u),d=[],p=[],f=s?a:h.size;for(let m=0;m<f;m++){let g=(n=h.get(m))!=null?n:0;d.push(l.skeleton.bones[g]),p.push(l.skeleton.boneInverses[g])}let _=new jn(d,p);l.bind(_,new Re)}}function dE(i,e){let t=i.position.count,n=new Array(t),s=0,r=e.array;for(let o=0;o<r.length;o++){let a=r[o];n[a]||(n[a]=!0,s++)}return{isVertexUsed:n,vertexCount:t,verticesUsed:s}}function fE(i){let e=[],t=[],n=0;for(let s=0;s<i.length;s++)if(i[s]){let r=n++;e[s]=r,t[r]=s}return{originalIndexNewIndexMap:e,newIndexOriginalIndexMap:t}}function pE(i,e){var t,n,s,r;e.name=i.name,e.morphTargetsRelative=i.morphTargetsRelative,i.groups.forEach(o=>{e.addGroup(o.start,o.count,o.materialIndex)}),e.boundingBox=(n=(t=i.boundingBox)==null?void 0:t.clone())!=null?n:null,e.boundingSphere=(r=(s=i.boundingSphere)==null?void 0:s.clone())!=null?r:null,e.setDrawRange(i.drawRange.start,i.drawRange.count),e.userData=i.userData}function mE(i,e,t){let n=e.array,s=new n.constructor(n.length);for(let r=0;r<n.length;r++){let o=n[r];s[r]=t[o]}i.setIndex(new Ve(s,e.itemSize,e.normalized))}function Jc(i,e,t){let n=i.constructor,s=new n(e.length*t),r=!0;for(let o=0;o<e.length;o++){let l=e[o]*t,c=o*t;for(let u=0;u<t;u++){let h=i[l+u];s[c+u]=h,r=r&&h===0}}return[s,r]}function gE(i){var e;let t=new Map,n=[];for(let[s,r]of Object.entries(i))if(r.isInterleavedBufferAttribute){let o=r,a=o.data,l=(e=t.get(a))!=null?e:[];t.set(a,l),l.push([s,o])}else{let o=r;n.push([s,o])}return[t,n]}function _E(i,e,t){let[n,s]=gE(e);for(let[r,o]of n){let a=r.array,{stride:l}=r,[c,u]=Jc(a,t,l),h=new Li(c,l);h.setUsage(r.usage);for(let[d,p]of o){let{itemSize:f,offset:_,normalized:m}=p,g=new Di(h,f,_,m);i.setAttribute(d,g)}}for(let[r,o]of s){let a=o.array,{itemSize:l,normalized:c}=o,[u,h]=Jc(a,t,l);i.setAttribute(r,new Ve(u,l,c))}}function xE(i){var e;let t=new Map,n=[];for(let[s,r]of Object.entries(i)){let o=s;for(let a=0;a<r.length;a++){let l=r[a];if(l.isInterleavedBufferAttribute){let c=l,u=c.data,h=(e=t.get(u))!=null?e:[];t.set(u,h),h.push([o,a,c])}else{let c=l;n.push([o,a,c])}}}return[t,n]}function yE(i,e,t){var n,s;let r=!0,[o,a]=xE(e),l={};for(let[c,u]of o){let h=c.array,{stride:d}=c,[p,f]=Jc(h,t,d);r=r&&f;let _=new Li(p,d);_.setUsage(c.usage);for(let[m,g,y]of u){let{itemSize:S,offset:v,normalized:E}=y,b=new Di(_,S,v,E);(n=l[m])!=null||(l[m]=[]),l[m][g]=b}}for(let[c,u,h]of a){let d=h,p=d.array,{itemSize:f,normalized:_}=d,[m,g]=Jc(p,t,f);r=r&&g,(s=l[c])!=null||(l[c]=[]),l[c][u]=new Ve(m,f,_)}i.morphAttributes=r?{}:l}function vE(i){let e=new Map;i.traverse(t=>{if(!t.isMesh)return;let n=t,s=n.geometry,r=s.index;if(r==null)return;let o=e.get(s);if(o!=null){n.geometry=o;return}let{isVertexUsed:a,vertexCount:l,verticesUsed:c}=dE(s.attributes,r);if(c===l)return;let{originalIndexNewIndexMap:u,newIndexOriginalIndexMap:h}=fE(a),d=new Qe;pE(s,d),e.set(s,d),mE(d,r,u),_E(d,s.attributes,h),yE(d,s.morphAttributes,h),n.geometry=d}),Array.from(e.keys()).forEach(t=>{t.dispose()})}function ME(i){var e;((e=i.meta)==null?void 0:e.metaVersion)==="0"&&(i.scene.rotation.y=Math.PI)}var zc,ot,Wm,Ld,qm,pa,db,fb,Cg,Ym,jc,jm,Pg,Zm,pb,Dg,mb,Bd,Km,gb,_b,Jm,Qm,xb,eg,vd,yb,Ws,Xs,Dd,Md,vb,Mb,tg,ng,Sb,bb,ig,Tb,sg,Eb,Gc,rg,ma,og,ag,wb,Ab,Rb,Cb,Ib,cg,Pb,Lb,Db,Ub,Sd,ug,Nb,bd,Bg,Ob,Fb,gi,Yr,Nn,qc,Nd,hg,Bb,Wc,kb,Hb,zb,Gb,Wb,Xb,dg,$b,qb,fg,pg,qs,Yb,Zb,Kb,Jb,Qb,mg,eT,tT,nT,Vg,iT,sT,Hg,rT,oT,aT,lT,gg,cT,uT,_g,_i,xg,hT,dT,yg,us,Ed,fT,pT,kd,gT,_T,xT,yT,vT,MT,ST,TT,ET,wT,AT,RT,CT,IT,PT,LT,zg,DT,Xc,Vd,wd,$s,Gg,Ad,Mg,Wg,UT,Xg,xi,NT,OT,FT,BT,Rd,kT,VT,HT,Cd,GT,XT,Id,Zr,ga,_a,xa,$T,qT,Sg,bg,ZT,KT,$g,JT,Hd,Pd,On,Yg=ys(()=>{Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();Oe();zc=(i,e,t)=>new Promise((n,s)=>{var r=l=>{try{a(t.next(l))}catch(c){s(c)}},o=l=>{try{a(t.throw(l))}catch(c){s(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(i,e)).next())}),ot=(i,e,t)=>new Promise((n,s)=>{var r=l=>{try{a(t.next(l))}catch(c){s(c)}},o=l=>{try{a(t.throw(l))}catch(c){s(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(i,e)).next())}),Wm=class extends ft{constructor(i){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${i}`,this.expressionName=i,this.type="VRMExpression",this.visible=!1}get binds(){return this._binds}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.outputWeight?1:0:this.overrideBlink==="blend"?this.outputWeight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.outputWeight?1:0:this.overrideLookAt==="blend"?this.outputWeight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.outputWeight?1:0:this.overrideMouth==="blend"?this.outputWeight:0}get outputWeight(){return this.isBinary?this.weight>.5?1:0:this.weight}addBind(i){this._binds.push(i)}deleteBind(i){let e=this._binds.indexOf(i);e>=0&&this._binds.splice(e,1)}applyWeight(i){var e;let t=this.outputWeight;t*=(e=i?.multiplier)!=null?e:1,this.isBinary&&t<1&&(t=0),this._binds.forEach(n=>n.applyWeight(t))}clearAppliedWeight(){this._binds.forEach(i=>i.clearAppliedWeight())}};Ld={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};qm=class Rg{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){let e={},t=new Set(Object.values(Ld));return Object.entries(this._expressionMap).forEach(([n,s])=>{t.has(n)&&(e[n]=s)}),e}get customExpressionMap(){let e={},t=new Set(Object.values(Ld));return Object.entries(this._expressionMap).forEach(([n,s])=>{t.has(n)||(e[n]=s)}),e}copy(e){return this._expressions.concat().forEach(n=>{this.unregisterExpression(n)}),e._expressions.forEach(n=>{this.registerExpression(n)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new Rg().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!=null?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){let t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;let n=this.getExpression(e);return(t=n?.weight)!=null?t:null}setValue(e,t){let n=this.getExpression(e);n&&(n.weight=Ag(t))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){let t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){let e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let n=1,s=t.expressionName;this.blinkExpressionNames.indexOf(s)!==-1&&(n*=e.blink),this.lookAtExpressionNames.indexOf(s)!==-1&&(n*=e.lookAt),this.mouthExpressionNames.indexOf(s)!==-1&&(n*=e.mouth),t.applyWeight({multiplier:n})})}_calculateWeightMultipliers(){let e=1,t=1,n=1;return this._expressions.forEach(s=>{e-=s.overrideBlinkAmount,t-=s.overrideLookAtAmount,n-=s.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),n=Math.max(0,n),{blink:e,lookAt:t,mouth:n}}},pa={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",MatcapColor:"matcapColor",RimColor:"rimColor",OutlineColor:"outlineColor"},db={_Color:pa.Color,_EmissionColor:pa.EmissionColor,_ShadeColor:pa.ShadeColor,_RimColor:pa.RimColor,_OutlineColor:pa.OutlineColor},fb=new ye,Cg=class Ig{constructor({material:e,type:t,targetValue:n,targetAlpha:s}){this.material=e,this.type=t,this.targetValue=n,this.targetAlpha=s??1;let r=this._initColorBindState(),o=this._initAlphaBindState();this._state={color:r,alpha:o}}applyWeight(e){let{color:t,alpha:n}=this._state;if(t!=null){let{propertyName:s,deltaValue:r}=t,o=this.material[s];o?.add(fb.copy(r).multiplyScalar(e))}if(n!=null){let{propertyName:s,deltaValue:r}=n;this.material[s]!=null&&(this.material[s]+=r*e)}}clearAppliedWeight(){let{color:e,alpha:t}=this._state;if(e!=null){let{propertyName:n,initialValue:s}=e,r=this.material[n];r?.copy(s)}if(t!=null){let{propertyName:n,initialValue:s}=t;this.material[n]!=null&&(this.material[n]=s)}}_initColorBindState(){var e,t,n;let{material:s,type:r,targetValue:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a?.[r])==null?void 0:e[0])!=null?t:null;if(l==null)return console.warn(`Tried to add a material color bind to the material ${(n=s.name)!=null?n:"(no name)"}, the type ${r} but the material or the type is not supported.`),null;let u=s[l].clone(),h=new ye(o.r-u.r,o.g-u.g,o.b-u.b);return{propertyName:l,initialValue:u,deltaValue:h}}_initAlphaBindState(){var e,t,n;let{material:s,type:r,targetAlpha:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a?.[r])==null?void 0:e[1])!=null?t:null;if(l==null&&o!==1)return console.warn(`Tried to add a material alpha bind to the material ${(n=s.name)!=null?n:"(no name)"}, the type ${r} but the material or the type does not support alpha.`),null;if(l==null)return null;let c=s[l],u=o-c;return{propertyName:l,initialValue:c,deltaValue:u}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(Ig._propertyNameMapMap).find(([n])=>this.material[n]===!0))==null?void 0:e[1])!=null?t:null}};Cg._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};Ym=Cg,jc=class{constructor({primitives:i,index:e,weight:t}){this.primitives=i,this.index=e,this.weight=t}applyWeight(i){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)==null?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]+=this.weight*i)})}clearAppliedWeight(){this.primitives.forEach(i=>{var e;((e=i.morphTargetInfluences)==null?void 0:e[this.index])!=null&&(i.morphTargetInfluences[this.index]=0)})}},jm=new Le,Pg=class Lg{constructor({material:e,scale:t,offset:n}){var s,r;this.material=e,this.scale=t,this.offset=n;let o=(s=Object.entries(Lg._propertyNamesMap).find(([a])=>e[a]===!0))==null?void 0:s[1];o==null?(console.warn(`Tried to add a texture transform bind to the material ${(r=e.name)!=null?r:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],o.forEach(a=>{var l;let c=(l=e[a])==null?void 0:l.clone();if(!c)return null;e[a]=c;let u=c.offset.clone(),h=c.repeat.clone(),d=n.clone().sub(u),p=t.clone().sub(h);this._properties.push({name:a,initialOffset:u,deltaOffset:d,initialScale:h,deltaScale:p})}))}applyWeight(e){this._properties.forEach(t=>{let n=this.material[t.name];n!==void 0&&(n.offset.add(jm.copy(t.deltaOffset).multiplyScalar(e)),n.repeat.add(jm.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{let t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}};Pg._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};Zm=Pg,pb=new Set(["1.0","1.0-beta"]),Dg=class Ug{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return ot(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return ot(this,null,function*(){let t=yield this._v1Import(e);if(t)return t;let n=yield this._v0Import(e);return n||null})}_v1Import(e){return ot(this,null,function*(){var t,n;let s=this.parser.json;if(!(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;let o=(n=s.extensions)==null?void 0:n.VRMC_vrm;if(!o)return null;let a=o.specVersion;if(!pb.has(a))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;let l=o.expressions;if(!l)return null;let c=new Set(Object.values(Ld)),u=new Map;l.preset!=null&&Object.entries(l.preset).forEach(([d,p])=>{if(p!=null){if(!c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${d}" detected. Ignoring the expression`);return}u.set(d,p)}}),l.custom!=null&&Object.entries(l.custom).forEach(([d,p])=>{if(c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${d}". Ignoring the expression`);return}u.set(d,p)});let h=new qm;return yield Promise.all(Array.from(u.entries()).map(d=>ot(this,[d],function*([p,f]){var _,m,g,y,S,v,E;let b=new Wm(p);if(e.scene.add(b),b.isBinary=(_=f.isBinary)!=null?_:!1,b.overrideBlink=(m=f.overrideBlink)!=null?m:"none",b.overrideLookAt=(g=f.overrideLookAt)!=null?g:"none",b.overrideMouth=(y=f.overrideMouth)!=null?y:"none",(S=f.morphTargetBinds)==null||S.forEach(A=>ot(this,null,function*(){var x;if(A.node===void 0||A.index===void 0)return;let T=yield Xm(e,A.node),N=A.index;if(!T.every(R=>Array.isArray(R.morphTargetInfluences)&&N<R.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${f.name} attempts to index morph #${N} but not found.`);return}b.addBind(new jc({primitives:T,index:N,weight:(x=A.weight)!=null?x:1}))})),f.materialColorBinds||f.textureTransformBinds){let A=[];e.scene.traverse(x=>{let T=x.material;T&&(Array.isArray(T)?A.push(...T):A.push(T))}),(v=f.materialColorBinds)==null||v.forEach(x=>ot(this,null,function*(){A.filter(N=>{var R;let L=(R=this.parser.associations.get(N))==null?void 0:R.materials;return x.material===L}).forEach(N=>{b.addBind(new Ym({material:N,type:x.type,targetValue:new ye().fromArray(x.targetValue),targetAlpha:x.targetValue[3]}))})})),(E=f.textureTransformBinds)==null||E.forEach(x=>ot(this,null,function*(){A.filter(N=>{var R;let L=(R=this.parser.associations.get(N))==null?void 0:R.materials;return x.material===L}).forEach(N=>{var R,L;b.addBind(new Zm({material:N,offset:new Le().fromArray((R=x.offset)!=null?R:[0,0]),scale:new Le().fromArray((L=x.scale)!=null?L:[1,1])}))})}))}h.registerExpression(b)}))),h})}_v0Import(e){return ot(this,null,function*(){var t;let n=this.parser.json,s=(t=n.extensions)==null?void 0:t.VRM;if(!s)return null;let r=s.blendShapeMaster;if(!r)return null;let o=new qm,a=r.blendShapeGroups;if(!a)return o;let l=new Set;return yield Promise.all(a.map(c=>ot(this,null,function*(){var u;let h=c.presetName,d=h!=null&&Ug.v0v1PresetNameMap[h]||null,p=d??c.name;if(p==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(l.has(p)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${h} has duplicated entries. Ignoring the expression`);return}l.add(p);let f=new Wm(p);e.scene.add(f),f.isBinary=(u=c.isBinary)!=null?u:!1,c.binds&&c.binds.forEach(m=>ot(this,null,function*(){var g;if(m.mesh===void 0||m.index===void 0)return;let y=[];(g=n.nodes)==null||g.forEach((v,E)=>{v.mesh===m.mesh&&y.push(E)});let S=m.index;yield Promise.all(y.map(v=>ot(this,null,function*(){var E;let b=yield Xm(e,v);if(!b.every(A=>Array.isArray(A.morphTargetInfluences)&&S<A.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to index ${S}th morph but not found.`);return}f.addBind(new jc({primitives:b,index:S,weight:.01*((E=m.weight)!=null?E:100)}))})))}));let _=c.materialValues;_&&_.length!==0&&_.forEach(m=>{if(m.materialName===void 0||m.propertyName===void 0||m.targetValue===void 0)return;let g=[];e.scene.traverse(S=>{if(S.material){let v=S.material;Array.isArray(v)?g.push(...v.filter(E=>(E.name===m.materialName||E.name===m.materialName+" (Outline)")&&g.indexOf(E)===-1)):v.name===m.materialName&&g.indexOf(v)===-1&&g.push(v)}});let y=m.propertyName;g.forEach(S=>{if(y==="_MainTex_ST"){let E=new Le(m.targetValue[0],m.targetValue[1]),b=new Le(m.targetValue[2],m.targetValue[3]);b.y=1-b.y-E.y,f.addBind(new Zm({material:S,scale:E,offset:b}));return}let v=db[y];if(v){f.addBind(new Ym({material:S,type:v,targetValue:new ye().fromArray(m.targetValue),targetAlpha:m.targetValue[3]}));return}console.warn(y+" is not supported")})}),o.registerExpression(f)}))),o})}};Dg.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};mb=Dg,Bd=class Kr{constructor(e,t){this._firstPersonOnlyLayer=Kr.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=Kr.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new Kr(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=Kr.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=Kr.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(n=>{n.meshes.forEach(s=>{n.type==="firstPersonOnly"?(s.layers.set(this._firstPersonOnlyLayer),s.traverse(r=>r.layers.set(this._firstPersonOnlyLayer))):n.type==="thirdPersonOnly"?(s.layers.set(this._thirdPersonOnlyLayer),s.traverse(r=>r.layers.set(this._thirdPersonOnlyLayer))):n.type==="auto"&&this._createHeadlessModel(s)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,n,s){let r=0;if(t!=null&&t.length>0)for(let o=0;o<e.length;o+=3){let a=e[o],l=e[o+1],c=e[o+2],u=t[a],h=n[a];if(u[0]>0&&s.includes(h[0])||u[1]>0&&s.includes(h[1])||u[2]>0&&s.includes(h[2])||u[3]>0&&s.includes(h[3]))continue;let d=t[l],p=n[l];if(d[0]>0&&s.includes(p[0])||d[1]>0&&s.includes(p[1])||d[2]>0&&s.includes(p[2])||d[3]>0&&s.includes(p[3]))continue;let f=t[c],_=n[c];f[0]>0&&s.includes(_[0])||f[1]>0&&s.includes(_[1])||f[2]>0&&s.includes(_[2])||f[3]>0&&s.includes(_[3])||(e[r++]=a,e[r++]=l,e[r++]=c)}return r}_createErasedMesh(e,t){let n=new Ls(e.geometry.clone(),e.material);n.name=`${e.name}(erase)`,n.frustumCulled=e.frustumCulled,n.layers.set(this._firstPersonOnlyLayer);let s=n.geometry,r=s.getAttribute("skinIndex"),o=r instanceof Or?[]:r.array,a=[];for(let _=0;_<o.length;_+=4)a.push([o[_],o[_+1],o[_+2],o[_+3]]);let l=s.getAttribute("skinWeight"),c=l instanceof Or?[]:l.array,u=[];for(let _=0;_<c.length;_+=4)u.push([c[_],c[_+1],c[_+2],c[_+3]]);let h=s.getIndex();if(!h)throw new Error("The geometry doesn't have an index buffer");let d=Array.from(h.array),p=this._excludeTriangles(d,u,a,t),f=[];for(let _=0;_<p;_++)f[_]=d[_];return s.setIndex(f),e.onBeforeRender&&(n.onBeforeRender=e.onBeforeRender),n.bind(new jn(e.skeleton.bones,e.skeleton.boneInverses),new Re),n}_createHeadlessModelForSkinnedMesh(e,t){let n=[];if(t.skeleton.bones.forEach((r,o)=>{this._isEraseTarget(r)&&n.push(o)}),!n.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);let s=this._createErasedMesh(t,n);e.add(s)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{let t=new Ct;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(n=>n.type==="SkinnedMesh").forEach(n=>{let s=n;this._createHeadlessModelForSkinnedMesh(t,s)})}else if(e.type==="SkinnedMesh"){let t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};Bd.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;Bd.DEFAULT_THIRDPERSON_ONLY_LAYER=10;Km=Bd,gb=new Set(["1.0","1.0-beta"]),_b=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(i){this.parser=i}afterRoot(i){return ot(this,null,function*(){let e=i.userData.vrmHumanoid;if(e!==null){if(e===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");i.userData.vrmFirstPerson=yield this._import(i,e)}})}_import(i,e){return ot(this,null,function*(){if(e==null)return null;let t=yield this._v1Import(i,e);if(t)return t;let n=yield this._v0Import(i,e);return n||null})}_v1Import(i,e){return ot(this,null,function*(){var t,n;let s=this.parser.json;if(!(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;let o=(n=s.extensions)==null?void 0:n.VRMC_vrm;if(!o)return null;let a=o.specVersion;if(!gb.has(a))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;let l=o.firstPerson,c=[],u=yield $m(i);return Array.from(u.entries()).forEach(([h,d])=>{var p,f;let _=(p=l?.meshAnnotations)==null?void 0:p.find(m=>m.node===h);c.push({meshes:d,type:(f=_?.type)!=null?f:"auto"})}),new Km(e,c)})}_v0Import(i,e){return ot(this,null,function*(){var t;let n=this.parser.json,s=(t=n.extensions)==null?void 0:t.VRM;if(!s)return null;let r=s.firstPerson;if(!r)return null;let o=[],a=yield $m(i);return Array.from(a.entries()).forEach(([l,c])=>{let u=n.nodes[l],h=r.meshAnnotations?r.meshAnnotations.find(d=>d.mesh===u.mesh):void 0;o.push({meshes:c,type:this._convertV0FlagToV1Type(h?.firstPersonFlag)})}),new Km(e,o)})}_convertV0FlagToV1Type(i){return i==="FirstPersonOnly"?"firstPersonOnly":i==="ThirdPersonOnly"?"thirdPersonOnly":i==="Both"?"both":"auto"}},Jm=new C,Qm=new C,xb=new Me,eg=class extends Ct{constructor(i){super(),this.vrmHumanoid=i,this._boneAxesMap=new Map,Object.values(i.humanBones).forEach(e=>{let t=new Jo(1);t.matrixAutoUpdate=!1,t.material.depthTest=!1,t.material.depthWrite=!1,this.add(t),this._boneAxesMap.set(e,t)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(i=>{i.geometry.dispose(),i.material.dispose()})}updateMatrixWorld(i){Array.from(this._boneAxesMap.entries()).forEach(([e,t])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(Jm,xb,Qm);let n=Jm.set(.1,.1,.1).divide(Qm);t.matrix.copy(e.node.matrixWorld).scale(n)}),super.updateMatrixWorld(i)}},vd=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"],yb={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};Ws=new C,Xs=new Me,Dd=class{constructor(i){this.humanBones=i,this.restPose=this.getAbsolutePose()}getAbsolutePose(){let i={};return Object.keys(this.humanBones).forEach(e=>{let t=e,n=this.getBoneNode(t);n&&(Ws.copy(n.position),Xs.copy(n.quaternion),i[t]={position:Ws.toArray(),rotation:Xs.toArray()})}),i}getPose(){let i={};return Object.keys(this.humanBones).forEach(e=>{let t=e,n=this.getBoneNode(t);if(!n)return;Ws.set(0,0,0),Xs.identity();let s=this.restPose[t];s?.position&&Ws.fromArray(s.position).negate(),s?.rotation&&Ng(Xs.fromArray(s.rotation)),Ws.add(n.position),Xs.premultiply(n.quaternion),i[t]={position:Ws.toArray(),rotation:Xs.toArray()}}),i}setPose(i){Object.entries(i).forEach(([e,t])=>{let n=e,s=this.getBoneNode(n);if(!s)return;let r=this.restPose[n];r&&(t?.position&&(s.position.fromArray(t.position),r.position&&s.position.add(Ws.fromArray(r.position))),t?.rotation&&(s.quaternion.fromArray(t.rotation),r.rotation&&s.quaternion.multiply(Xs.fromArray(r.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([i,e])=>{let t=this.getBoneNode(i);t&&(e?.position&&t.position.fromArray(e.position),e?.rotation&&t.quaternion.fromArray(e.rotation))})}getBone(i){var e;return(e=this.humanBones[i])!=null?e:void 0}getBoneNode(i){var e,t;return(t=(e=this.humanBones[i])==null?void 0:e.node)!=null?t:null}},Md=new C,vb=new Me,Mb=new C,tg=class Og extends Dd{static _setupTransforms(e){let t=new ft;t.name="VRMHumanoidRig";let n={},s={},r={},o={};vd.forEach(l=>{var c;let u=e.getBoneNode(l);if(u){let h=new C,d=new Me;u.updateWorldMatrix(!0,!1),u.matrixWorld.decompose(h,d,Md),n[l]=h,s[l]=d,r[l]=u.quaternion.clone();let p=new Me;(c=u.parent)==null||c.matrixWorld.decompose(Md,p,Md),o[l]=p}});let a={};return vd.forEach(l=>{var c;let u=e.getBoneNode(l);if(u){let h=n[l],d=l,p;for(;p==null&&(d=yb[d],d!=null);)p=n[d];let f=new ft;f.name="Normalized_"+u.name,(d?(c=a[d])==null?void 0:c.node:t).add(f),f.position.copy(h),p&&f.position.sub(p),a[l]={node:f}}}),{rigBones:a,root:t,parentWorldRotations:o,boneRotations:r}}constructor(e){let{rigBones:t,root:n,parentWorldRotations:s,boneRotations:r}=Og._setupTransforms(e);super(t),this.original=e,this.root=n,this._parentWorldRotations=s,this._boneRotations=r}update(){vd.forEach(e=>{let t=this.original.getBoneNode(e);if(t!=null){let n=this.getBoneNode(e),s=this._parentWorldRotations[e],r=vb.copy(s).invert(),o=this._boneRotations[e];if(t.quaternion.copy(n.quaternion).multiply(s).premultiply(r).multiply(o),e==="hips"){let a=n.getWorldPosition(Mb);t.parent.updateWorldMatrix(!0,!1);let l=t.parent.matrixWorld,c=a.applyMatrix4(l.invert());t.position.copy(c)}}})}},ng=class Fg{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var n;this.autoUpdateHumanBones=(n=t?.autoUpdateHumanBones)!=null?n:!0,this._rawHumanBones=new Dd(e),this._normalizedHumanBones=new tg(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new Dd(e.humanBones),this._normalizedHumanBones=new tg(this._rawHumanBones),this}clone(){return new Fg(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},Sb={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},bb=new Set(["1.0","1.0-beta"]),ig={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},Tb=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(i,e){this.parser=i,this.helperRoot=e?.helperRoot,this.autoUpdateHumanBones=e?.autoUpdateHumanBones}afterRoot(i){return ot(this,null,function*(){i.userData.vrmHumanoid=yield this._import(i)})}_import(i){return ot(this,null,function*(){let e=yield this._v1Import(i);if(e)return e;let t=yield this._v0Import(i);return t||null})}_v1Import(i){return ot(this,null,function*(){var e,t;let n=this.parser.json;if(!(((e=n.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;let r=(t=n.extensions)==null?void 0:t.VRMC_vrm;if(!r)return null;let o=r.specVersion;if(!bb.has(o))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${o}"`),null;let a=r.humanoid;if(!a)return null;let l=a.humanBones.leftThumbIntermediate!=null||a.humanBones.rightThumbIntermediate!=null,c={};a.humanBones!=null&&(yield Promise.all(Object.entries(a.humanBones).map(h=>ot(this,[h],function*([d,p]){let f=d,_=p.node;if(l){let g=ig[f];g!=null&&(f=g)}let m=yield this.parser.getDependency("node",_);if(m==null){console.warn(`A glTF node bound to the humanoid bone ${f} (index = ${_}) does not exist`);return}c[f]={node:m}}))));let u=new ng(this._ensureRequiredBonesExist(c),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(i.scene.add(u.normalizedHumanBonesRoot),this.helperRoot){let h=new eg(u);this.helperRoot.add(h),h.renderOrder=this.helperRoot.renderOrder}return u})}_v0Import(i){return ot(this,null,function*(){var e;let n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;let s=n.humanoid;if(!s)return null;let r={};s.humanBones!=null&&(yield Promise.all(s.humanBones.map(a=>ot(this,null,function*(){let l=a.bone,c=a.node;if(l==null||c==null)return;let u=yield this.parser.getDependency("node",c);if(u==null){console.warn(`A glTF node bound to the humanoid bone ${l} (index = ${c}) does not exist`);return}let h=ig[l],d=h??l;if(r[d]!=null){console.warn(`Multiple bone entries for ${d} detected (index = ${c}), ignoring duplicated entries.`);return}r[d]={node:u}}))));let o=new ng(this._ensureRequiredBonesExist(r),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(i.scene.add(o.normalizedHumanBonesRoot),this.helperRoot){let a=new eg(o);this.helperRoot.add(a),a.renderOrder=this.helperRoot.renderOrder}return o})}_ensureRequiredBonesExist(i){let e=Object.values(Sb).filter(t=>i[t]==null);if(e.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${e.join(", ")}`);return i}},sg=class extends Qe{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new Ve(new Float32Array(195),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Ve(new Uint16Array(189),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,i=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,i=!0),i&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let i=0;i<64;i++){let e=i/63*this._currentTheta;this._attrPos.setXYZ(i+1,this._currentRadius*Math.sin(e),0,this._currentRadius*Math.cos(e))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<63;i++)this._attrIndex.setXYZ(i*3,0,i+1,i+2);this._attrIndex.needsUpdate=!0}},Eb=class extends Qe{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new C,this._currentTail=new C,this._attrPos=new Ve(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Ve(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,i=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){let e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){let e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},Gc=new Me,rg=new Me,ma=new C,og=new C,ag=Math.sqrt(2)/2,wb=new Me(0,0,-ag,ag),Ab=new C(0,1,0),Rb=class extends Ct{constructor(i){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=i;{let e=new sg;e.radius=.5;let t=new mn({color:65280,transparent:!0,opacity:.5,side:hn,depthTest:!1,depthWrite:!1});this._meshPitch=new Bt(e,t),this.add(this._meshPitch)}{let e=new sg;e.radius=.5;let t=new mn({color:16711680,transparent:!0,opacity:.5,side:hn,depthTest:!1,depthWrite:!1});this._meshYaw=new Bt(e,t),this.add(this._meshYaw)}{let e=new Eb;e.radius=.1;let t=new cn({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new Dn(e,t),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(i){let e=tt.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=e,this._meshYaw.geometry.update();let t=tt.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=t,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(ma),this.vrmLookAt.getLookAtWorldQuaternion(Gc),Gc.multiply(this.vrmLookAt.getFaceFrontQuaternion(rg)),this._meshYaw.position.copy(ma),this._meshYaw.quaternion.copy(Gc),this._meshPitch.position.copy(ma),this._meshPitch.quaternion.copy(Gc),this._meshPitch.quaternion.multiply(rg.setFromAxisAngle(Ab,e)),this._meshPitch.quaternion.multiply(wb);let{target:n,autoUpdate:s}=this.vrmLookAt;n!=null&&s&&(n.getWorldPosition(og).sub(ma),this._lineTarget.geometry.tail.copy(og),this._lineTarget.geometry.update(),this._lineTarget.position.copy(ma)),super.updateMatrixWorld(i)}},Cb=new C,Ib=new C;cg=new C(0,0,1),Pb=new C,Lb=new C,Db=new C,Ub=new Me,Sd=new Me,ug=new Me,Nb=new Me,bd=new sn,Bg=class kg{constructor(e,t){this.offsetFromHeadBone=new C,this.autoUpdate=!0,this.faceFront=new C(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new Me)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new sn)}getEuler(e){return e.set(tt.DEG2RAD*this._pitch,tt.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new kg(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){let t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){let t=this.humanoid.getRawBoneNode("head");return Ud(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(cg)<.01)return e.copy(this._restHeadWorldQuaternion).invert();let[t,n]=$c(this.faceFront);return bd.set(0,.5*Math.PI+t,n,"YZX"),e.setFromEuler(bd).premultiply(Nb.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(Sd),this.getFaceFrontQuaternion(ug),e.copy(cg).applyQuaternion(Sd).applyQuaternion(ug).applyEuler(this.getEuler(bd))}lookAt(e){let t=Ub.copy(this._restHeadWorldQuaternion).multiply(Ng(this.getLookAtWorldQuaternion(Sd))),n=this.getLookAtWorldPosition(Lb),s=Db.copy(e).sub(n).applyQuaternion(t).normalize(),[r,o]=$c(this.faceFront),[a,l]=$c(s),c=lg(a-r),u=lg(o-l);this._yaw=tt.RAD2DEG*c,this._pitch=tt.RAD2DEG*u,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(Pb)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};Bg.EULER_ORDER="YXZ";Ob=Bg,Fb=new C(0,0,1),gi=new Me,Yr=new Me,Nn=new sn(0,0,0,"YXZ"),qc=class{constructor(i,e,t,n,s){this.humanoid=i,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=s,this.faceFront=new C(0,0,1),this._restQuatLeftEye=new Me,this._restQuatRightEye=new Me,this._restLeftEyeParentWorldQuat=new Me,this._restRightEyeParentWorldQuat=new Me;let r=this.humanoid.getRawBoneNode("leftEye"),o=this.humanoid.getRawBoneNode("rightEye");r&&(this._restQuatLeftEye.copy(r.quaternion),Ud(r.parent,this._restLeftEyeParentWorldQuat)),o&&(this._restQuatRightEye.copy(o.quaternion),Ud(o.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(i,e){let t=this.humanoid.getRawBoneNode("leftEye"),n=this.humanoid.getRawBoneNode("rightEye"),s=this.humanoid.getNormalizedBoneNode("leftEye"),r=this.humanoid.getNormalizedBoneNode("rightEye");t&&(e<0?Nn.x=-tt.DEG2RAD*this.rangeMapVerticalDown.map(-e):Nn.x=tt.DEG2RAD*this.rangeMapVerticalUp.map(e),i<0?Nn.y=-tt.DEG2RAD*this.rangeMapHorizontalInner.map(-i):Nn.y=tt.DEG2RAD*this.rangeMapHorizontalOuter.map(i),gi.setFromEuler(Nn),this._getWorldFaceFrontQuat(Yr),s.quaternion.copy(Yr).multiply(gi).multiply(Yr.invert()),gi.copy(this._restLeftEyeParentWorldQuat),t.quaternion.copy(s.quaternion).multiply(gi).premultiply(gi.invert()).multiply(this._restQuatLeftEye)),n&&(e<0?Nn.x=-tt.DEG2RAD*this.rangeMapVerticalDown.map(-e):Nn.x=tt.DEG2RAD*this.rangeMapVerticalUp.map(e),i<0?Nn.y=-tt.DEG2RAD*this.rangeMapHorizontalOuter.map(-i):Nn.y=tt.DEG2RAD*this.rangeMapHorizontalInner.map(i),gi.setFromEuler(Nn),this._getWorldFaceFrontQuat(Yr),r.quaternion.copy(Yr).multiply(gi).multiply(Yr.invert()),gi.copy(this._restRightEyeParentWorldQuat),n.quaternion.copy(r.quaternion).multiply(gi).premultiply(gi.invert()).multiply(this._restQuatRightEye))}lookAt(i){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");let e=tt.RAD2DEG*i.y,t=tt.RAD2DEG*i.x;this.applyYawPitch(e,t)}_getWorldFaceFrontQuat(i){if(this.faceFront.distanceToSquared(Fb)<.01)return i.identity();let[e,t]=$c(this.faceFront);return Nn.set(0,.5*Math.PI+e,t,"YZX"),i.setFromEuler(Nn)}};qc.type="bone";Nd=class{constructor(i,e,t,n,s){this.expressions=i,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=s}applyYawPitch(i,e){e<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-e))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(e))),i<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-i))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(i)))}lookAt(i){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");let e=tt.RAD2DEG*i.y,t=tt.RAD2DEG*i.x;this.applyYawPitch(e,t)}};Nd.type="expression";hg=class{constructor(i,e){this.inputMaxValue=i,this.outputScale=e}map(i){return this.outputScale*Ag(i/this.inputMaxValue)}},Bb=new Set(["1.0","1.0-beta"]),Wc=.01,kb=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(i,e){this.parser=i,this.helperRoot=e?.helperRoot}afterRoot(i){return ot(this,null,function*(){let e=i.userData.vrmHumanoid;if(e===null)return;if(e===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");let t=i.userData.vrmExpressionManager;if(t!==null){if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");i.userData.vrmLookAt=yield this._import(i,e,t)}})}_import(i,e,t){return ot(this,null,function*(){if(e==null||t==null)return null;let n=yield this._v1Import(i,e,t);if(n)return n;let s=yield this._v0Import(i,e,t);return s||null})}_v1Import(i,e,t){return ot(this,null,function*(){var n,s,r;let o=this.parser.json;if(!(((n=o.extensionsUsed)==null?void 0:n.indexOf("VRMC_vrm"))!==-1))return null;let l=(s=o.extensions)==null?void 0:s.VRMC_vrm;if(!l)return null;let c=l.specVersion;if(!Bb.has(c))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;let u=l.lookAt;if(!u)return null;let h=u.type==="expression"?1:10,d=this._v1ImportRangeMap(u.rangeMapHorizontalInner,h),p=this._v1ImportRangeMap(u.rangeMapHorizontalOuter,h),f=this._v1ImportRangeMap(u.rangeMapVerticalDown,h),_=this._v1ImportRangeMap(u.rangeMapVerticalUp,h),m;u.type==="expression"?m=new Nd(t,d,p,f,_):m=new qc(e,d,p,f,_);let g=this._importLookAt(e,m);return g.offsetFromHeadBone.fromArray((r=u.offsetFromHeadBone)!=null?r:[0,.06,0]),g})}_v1ImportRangeMap(i,e){var t,n;let s=(t=i?.inputMaxValue)!=null?t:90,r=(n=i?.outputScale)!=null?n:e;return s<Wc&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),s=Wc),new hg(s,r)}_v0Import(i,e,t){return ot(this,null,function*(){var n,s,r,o;let l=(n=this.parser.json.extensions)==null?void 0:n.VRM;if(!l)return null;let c=l.firstPerson;if(!c)return null;let u=c.lookAtTypeName==="BlendShape"?1:10,h=this._v0ImportDegreeMap(c.lookAtHorizontalInner,u),d=this._v0ImportDegreeMap(c.lookAtHorizontalOuter,u),p=this._v0ImportDegreeMap(c.lookAtVerticalDown,u),f=this._v0ImportDegreeMap(c.lookAtVerticalUp,u),_;c.lookAtTypeName==="BlendShape"?_=new Nd(t,h,d,p,f):_=new qc(e,h,d,p,f);let m=this._importLookAt(e,_);return c.firstPersonBoneOffset?m.offsetFromHeadBone.set((s=c.firstPersonBoneOffset.x)!=null?s:0,(r=c.firstPersonBoneOffset.y)!=null?r:.06,-((o=c.firstPersonBoneOffset.z)!=null?o:0)):m.offsetFromHeadBone.set(0,.06,0),m.faceFront.set(0,0,-1),_ instanceof qc&&_.faceFront.set(0,0,-1),m})}_v0ImportDegreeMap(i,e){var t,n;let s=i?.curve;JSON.stringify(s)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let r=(t=i?.xRange)!=null?t:90,o=(n=i?.yRange)!=null?n:e;return r<Wc&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),r=Wc),new hg(r,o)}_importLookAt(i,e){let t=new Ob(i,e);if(this.helperRoot){let n=new Rb(t);this.helperRoot.add(n),n.renderOrder=this.helperRoot.renderOrder}return t}};Hb=new Set(["1.0","1.0-beta"]),zb=class{get name(){return"VRMMetaLoaderPlugin"}constructor(i,e){var t,n,s;this.parser=i,this.needThumbnailImage=(t=e?.needThumbnailImage)!=null?t:!1,this.acceptLicenseUrls=(n=e?.acceptLicenseUrls)!=null?n:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(s=e?.acceptV0Meta)!=null?s:!0}afterRoot(i){return ot(this,null,function*(){i.userData.vrmMeta=yield this._import(i)})}_import(i){return ot(this,null,function*(){let e=yield this._v1Import(i);if(e!=null)return e;let t=yield this._v0Import(i);return t??null})}_v1Import(i){return ot(this,null,function*(){var e,t,n;let s=this.parser.json;if(!(((e=s.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;let o=(t=s.extensions)==null?void 0:t.VRMC_vrm;if(o==null)return null;let a=o.specVersion;if(!Hb.has(a))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;let l=o.meta;if(!l)return null;let c=l.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(c))throw new Error(`VRMMetaLoaderPlugin: The license url "${c}" is not accepted`);let h;return this.needThumbnailImage&&l.thumbnailImage!=null&&(h=(n=yield this._extractGLTFImage(l.thumbnailImage))!=null?n:void 0),{metaVersion:"1",name:l.name,version:l.version,authors:l.authors,copyrightInformation:l.copyrightInformation,contactInformation:l.contactInformation,references:l.references,thirdPartyLicenses:l.thirdPartyLicenses,thumbnailImage:h,licenseUrl:l.licenseUrl,avatarPermission:l.avatarPermission,allowExcessivelyViolentUsage:l.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:l.allowExcessivelySexualUsage,commercialUsage:l.commercialUsage,allowPoliticalOrReligiousUsage:l.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:l.allowAntisocialOrHateUsage,creditNotation:l.creditNotation,allowRedistribution:l.allowRedistribution,modification:l.modification,otherLicenseUrl:l.otherLicenseUrl}})}_v0Import(i){return ot(this,null,function*(){var e;let n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;let s=n.meta;if(!s)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let r;return this.needThumbnailImage&&s.texture!=null&&s.texture!==-1&&(r=yield this.parser.getDependency("texture",s.texture)),{metaVersion:"0",allowedUserName:s.allowedUserName,author:s.author,commercialUssageName:s.commercialUssageName,contactInformation:s.contactInformation,licenseName:s.licenseName,otherLicenseUrl:s.otherLicenseUrl,otherPermissionUrl:s.otherPermissionUrl,reference:s.reference,sexualUssageName:s.sexualUssageName,texture:r??void 0,title:s.title,version:s.version,violentUssageName:s.violentUssageName}})}_extractGLTFImage(i){return ot(this,null,function*(){var e;let n=(e=this.parser.json.images)==null?void 0:e[i];if(n==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${i}] of glTF as a thumbnail but the image doesn't exist`),null;let s=n.uri;if(n.bufferView!=null){let o=yield this.parser.getDependency("bufferView",n.bufferView),a=new Blob([o],{type:n.mimeType});s=URL.createObjectURL(a)}return s==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${i}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new Ur().loadAsync(Vb(s,this.parser.options.path)).catch(o=>(console.error(o),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},Gb=class{constructor(i){this.scene=i.scene,this.meta=i.meta,this.humanoid=i.humanoid,this.expressionManager=i.expressionManager,this.firstPerson=i.firstPerson,this.lookAt=i.lookAt}update(i){this.humanoid.update(),this.lookAt&&this.lookAt.update(i),this.expressionManager&&this.expressionManager.update()}},Wb=class extends Gb{constructor(i){super(i),this.materials=i.materials,this.springBoneManager=i.springBoneManager,this.nodeConstraintManager=i.nodeConstraintManager}update(i){super.update(i),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(i),this.materials&&this.materials.forEach(e=>{e.update&&e.update(i)})}},Xb=Object.defineProperty,dg=Object.getOwnPropertySymbols,$b=Object.prototype.hasOwnProperty,qb=Object.prototype.propertyIsEnumerable,fg=(i,e,t)=>e in i?Xb(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,pg=(i,e)=>{for(var t in e||(e={}))$b.call(e,t)&&fg(i,t,e[t]);if(dg)for(var t of dg(e))qb.call(e,t)&&fg(i,t,e[t]);return i},qs=(i,e,t)=>new Promise((n,s)=>{var r=l=>{try{a(t.next(l))}catch(c){s(c)}},o=l=>{try{a(t.throw(l))}catch(c){s(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(i,e)).next())}),Yb={"":3e3,srgb:3001};Zb=class{get pending(){return Promise.all(this._pendings)}constructor(i,e){this._parser=i,this._materialParams=e,this._pendings=[]}assignPrimitive(i,e){e!=null&&(this._materialParams[i]=e)}assignColor(i,e,t){if(e!=null){let n=new ye().fromArray(e);t&&n.convertSRGBToLinear(),this._materialParams[i]=n}}assignTexture(i,e,t){return qs(this,null,function*(){let n=qs(this,null,function*(){e!=null&&(yield this._parser.assignTexture(this._materialParams,i,e),t&&jb(this._materialParams[i],"srgb"))});return this._pendings.push(n),n})}assignTextureByIndex(i,e,t){return qs(this,null,function*(){return this.assignTexture(i,e!=null?{index:e}:void 0,t)})}},Kb=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#ifdef MTOON_USE_UV
  varying vec2 vUv;

  // COMPAT: pre-r151 uses a common uvTransform
  #if THREE_VRM_THREE_REVISION < 151
    uniform mat3 uvTransform;
  #endif
#endif

// #include <uv2_pars_vertex>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    attribute vec2 uv2;
    varying vec2 vUv2;
    uniform mat3 uv2Transform;
  #endif
#endif

// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif

uniform float outlineWidthFactor;

void main() {

  // #include <uv_vertex>
  #ifdef MTOON_USE_UV
    // COMPAT: pre-r151 uses a common uvTransform
    #if THREE_VRM_THREE_REVISION >= 151
      vUv = uv;
    #else
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
    #endif
  #endif

  // #include <uv2_vertex>
  // COMAPT: pre-r151 uses uv2 for lightMap and aoMap
  #if THREE_VRM_THREE_REVISION < 151
    #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
    #endif
  #endif

  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  #ifdef OUTLINE
    float worldNormalLength = length( transformedNormal );
    vec3 outlineOffset = outlineWidthFactor * worldNormalLength * objectNormal;

    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
      vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv, 1 ) ).xy;
      float outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
      outlineOffset *= outlineTex;
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      outlineOffset *= vViewPosition.z / projectionMatrix[ 1 ].y;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`,Jb=`// #define PHONG

uniform vec3 litFactor;

uniform float opacity;

uniform vec3 shadeColorFactor;
#ifdef USE_SHADEMULTIPLYTEXTURE
  uniform sampler2D shadeMultiplyTexture;
  uniform mat3 shadeMultiplyTextureUvTransform;
#endif

uniform float shadingShiftFactor;
uniform float shadingToonyFactor;

#ifdef USE_SHADINGSHIFTTEXTURE
  uniform sampler2D shadingShiftTexture;
  uniform mat3 shadingShiftTextureUvTransform;
  uniform float shadingShiftTextureScale;
#endif

uniform float giEqualizationFactor;

uniform vec3 parametricRimColorFactor;
#ifdef USE_RIMMULTIPLYTEXTURE
  uniform sampler2D rimMultiplyTexture;
  uniform mat3 rimMultiplyTextureUvTransform;
#endif
uniform float rimLightingMixFactor;
uniform float parametricRimFresnelPowerFactor;
uniform float parametricRimLiftFactor;

#ifdef USE_MATCAPTEXTURE
  uniform vec3 matcapFactor;
  uniform sampler2D matcapTexture;
  uniform mat3 matcapTextureUvTransform;
#endif

uniform vec3 emissive;
uniform float emissiveIntensity;

uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;

#ifdef USE_UVANIMATIONMASKTEXTURE
  uniform sampler2D uvAnimationMaskTexture;
  uniform mat3 uvAnimationMaskTextureUvTransform;
#endif

uniform float uvAnimationScrollXOffset;
uniform float uvAnimationScrollYOffset;
uniform float uvAnimationRotationPhase;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
  varying vec2 vUv;
#endif

// #include <uv2_pars_fragment>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
  #endif
#endif

#include <map_pars_fragment>

#ifdef USE_MAP
  uniform mat3 mapUvTransform;
#endif

// #include <alphamap_pars_fragment>

#include <alphatest_pars_fragment>

#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>

#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapUvTransform;
#endif

// #include <envmap_common_pars_fragment>
// #include <envmap_pars_fragment>
// #include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>

// #include <bsdfs>
// COMPAT: pre-r151 doesn't have BRDF_Lambert in <common>
#if THREE_VRM_THREE_REVISION < 151
  vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
  }
#endif

#include <lights_pars_begin>

#include <normal_pars_fragment>

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingShift;
};

float linearstep( float a, float b, float t ) {
  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
}

/**
 * Convert NdotL into toon shading factor using shadingShift and shadingToony
 */
float getShading(
  const in float dotNL,
  const in float shadow,
  const in float shadingShift
) {
  float shading = dotNL;
  shading = shading + shadingShift;
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
  shading *= shadow;
  return shading;
}

/**
 * Mix diffuseColor and shadeColor using shading factor and light color
 */
vec3 getDiffuse(
  const in MToonMaterial material,
  const in float shading,
  in vec3 lightColor
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Lambert( shading * lightColor ) );
  #endif

  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );

  // The "comment out if you want to PBR absolutely" line
  #ifdef V0_COMPAT_SHADE
    col = min( col, material.diffuseColor );
  #endif

  return col;
}

// COMPAT: pre-r156 uses a struct GeometricContext
#if THREE_VRM_THREE_REVISION >= 157
  void RE_Direct_MToon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometryNormal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#else
  void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#endif

#define RE_Direct RE_Direct_MToon
#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon
#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform mat3 normalMapUvTransform;
  uniform vec2 normalScale;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
#if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

  uniform mat3 normalMatrix;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( TANGENTSPACE_NORMALMAP ) )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  // Temporary compat against shader change @ Three.js r126, r151
  #if THREE_VRM_THREE_REVISION >= 151

    mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

      vec3 q0 = dFdx( eye_pos.xyz );
      vec3 q1 = dFdy( eye_pos.xyz );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = surf_norm;

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

      return mat3( T * scale, B * scale, N );

    }

  #else

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = normalize( surf_norm );

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?
      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
        return surf_norm;
      }

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

    }

  #endif

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMATIONMASKTEXTURE
      vec2 uvAnimationMaskTextureUv = ( uvAnimationMaskTextureUvTransform * vec3( uv, 1 ) ).xy;
      uvAnimMask = texture2D( uvAnimationMaskTexture, uvAnimationMaskTextureUv ).b;
    #endif

    float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
    float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
    uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
    uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( litFactor, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive * emissiveIntensity;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    vec2 mapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
    vec4 sampledDiffuseColor = texture2D( map, mapUv );
    #ifdef DECODE_VIDEO_TEXTURE
      sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
    #endif
    diffuseColor *= sampledDiffuseColor;
  #endif

  // #include <color_fragment>
  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    diffuseColor.rgb *= vColor;
  #endif

  // #include <alphamap_fragment>

  #include <alphatest_fragment>

  // #include <specularmap_fragment>

  // #include <normal_fragment_begin>
  float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

  #ifdef FLAT_SHADED

    vec3 fdx = dFdx( vViewPosition );
    vec3 fdy = dFdy( vViewPosition );
    vec3 normal = normalize( cross( fdx, fdy ) );

  #else

    vec3 normal = normalize( vNormal );

    #ifdef DOUBLE_SIDED

      normal *= faceDirection;

    #endif

  #endif

  #ifdef USE_NORMALMAP

    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;

  #endif

  #ifdef USE_NORMALMAP_TANGENTSPACE

    #ifdef USE_TANGENT

      mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn[0] *= faceDirection;
      tbn[1] *= faceDirection;

    #endif

  #endif

  #ifdef USE_CLEARCOAT_NORMALMAP

    #ifdef USE_TANGENT

      mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn2[0] *= faceDirection;
      tbn2[1] *= faceDirection;

    #endif

  #endif

  // non perturbed normal for clearcoat among others

  vec3 nonPerturbedNormal = normal;

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  // COMPAT: pre-r151
  // USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
  #if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

    normal = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      normal = normal * faceDirection;

    #endif

    normal = normalize( normalMatrix * normal );

  // COMPAT: pre-r151
  // USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
  #elif defined( USE_NORMALMAP_TANGENTSPACE ) || defined( TANGENTSPACE_NORMALMAP )

    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    // COMPAT: pre-r151
    #if THREE_VRM_THREE_REVISION >= 151 || defined( USE_TANGENT )

      normal = normalize( tbn * mapN );

    #else

      normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    vec2 emissiveMapUv = ( emissiveMapUvTransform * vec3( uv, 1 ) ).xy;
    totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  MToonMaterial material;

  material.diffuseColor = diffuseColor.rgb;

  material.shadeColor = shadeColorFactor;
  #ifdef USE_SHADEMULTIPLYTEXTURE
    vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
  #endif

  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    material.shadeColor.rgb *= vColor;
  #endif

  material.shadingShift = shadingShiftFactor;
  #ifdef USE_SHADINGSHIFTTEXTURE
    vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
  #endif

  // #include <lights_fragment_begin>

  // MToon Specific changes:
  // Since we want to take shadows into account of shading instead of irradiance,
  // we had to modify the codes that multiplies the results of shadowmap into color of direct lights.

  // COMPAT: pre-r156 uses a struct GeometricContext
  #if THREE_VRM_THREE_REVISION >= 157
    vec3 geometryPosition = - vViewPosition;
    vec3 geometryNormal = normal;
    vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    vec3 geometryClearcoatNormal;

    #ifdef USE_CLEARCOAT

      geometryClearcoatNormal = clearcoatNormal;

    #endif
  #else
    GeometricContext geometry;

    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    #ifdef USE_CLEARCOAT

      geometry.clearcoatNormal = clearcoatNormal;

    #endif
  #endif

  IncidentLight directLight;

  // since these variables will be used in unrolled loop, we have to define in prior
  float shadow;

  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

    PointLight pointLight;
    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

      pointLight = pointLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getPointLightInfo( pointLight, geometryPosition, directLight );
      #else
        getPointLightInfo( pointLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
      pointLightShadow = pointLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

    SpotLight spotLight;
    // COMPAT: pre-r144 uses NUM_SPOT_LIGHT_SHADOWS, r144+ uses NUM_SPOT_LIGHT_COORDS
    #if THREE_VRM_THREE_REVISION >= 144
      #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_COORDS > 0
      SpotLightShadow spotLightShadow;
      #endif
    #elif defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

      spotLight = spotLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getSpotLightInfo( spotLight, geometryPosition, directLight );
      #else
        getSpotLightInfo( spotLight, geometry, directLight );
      #endif

      shadow = 1.0;
      // COMPAT: pre-r144 uses NUM_SPOT_LIGHT_SHADOWS and vSpotShadowCoord, r144+ uses NUM_SPOT_LIGHT_COORDS and vSpotLightCoord
      // COMPAT: pre-r166 does not have shadowIntensity, r166+ has shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_COORDS )
        spotLightShadow = spotLightShadows[ i ];
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
        #endif
      #elif THREE_VRM_THREE_REVISION >= 144
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_COORDS )
        spotLightShadow = spotLightShadows[ i ];
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
        #endif
      #elif defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      spotLightShadow = spotLightShadows[ i ];
      shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

    DirectionalLight directionalLight;
    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    DirectionalLightShadow directionalLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

      directionalLight = directionalLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getDirectionalLightInfo( directionalLight, directLight );
      #else
        getDirectionalLightInfo( directionalLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
      directionalLightShadow = directionalLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  // #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

  //   RectAreaLight rectAreaLight;

  //   #pragma unroll_loop_start
  //   for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

  //     rectAreaLight = rectAreaLights[ i ];
  //     RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

  //   }
  //   #pragma unroll_loop_end

  // #endif

  #if defined( RE_IndirectDiffuse )

    vec3 iblIrradiance = vec3( 0.0 );

    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

    // COMPAT: pre-r156 uses a struct GeometricContext
    // COMPAT: pre-r156 doesn't have a define USE_LIGHT_PROBES
    #if THREE_VRM_THREE_REVISION >= 157
      #if defined( USE_LIGHT_PROBES )
        irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
      #endif
    #else
      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
    #endif

    #if ( NUM_HEMI_LIGHTS > 0 )

      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

        // COMPAT: pre-r156 uses a struct GeometricContext
        #if THREE_VRM_THREE_REVISION >= 157
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
        #else
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
        #endif

      }
      #pragma unroll_loop_end

    #endif

  #endif

  // #if defined( RE_IndirectSpecular )

  //   vec3 radiance = vec3( 0.0 );
  //   vec3 clearcoatRadiance = vec3( 0.0 );

  // #endif

  #include <lights_fragment_maps>
  #include <lights_fragment_end>

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    reflectedLight.directSpecular /= PI;
  #endif
  vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, rimLightingMixFactor );

  vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

  #ifdef USE_MATCAPTEXTURE
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
      vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
      rim += matcapFactor * matcap;
    }
  #endif

  #ifdef USE_RIMMULTIPLYTEXTURE
    vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
  #endif

  col += rimMix * rim;

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  #if defined( OUTLINE )
    col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
  #endif

  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif

  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}
`,Qb={None:"none",Normal:"normal",LitShadeRate:"litShadeRate",UV:"uv"},mg={None:"none",WorldCoordinates:"worldCoordinates",ScreenCoordinates:"screenCoordinates"},eT={3e3:"",3001:"srgb"};tT=class extends un{constructor(i={}){var e;super({vertexShader:Kb,fragmentShader:Jb}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=la,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=Qb.None,this._outlineWidthMode=mg.None,this._isOutline=!1,i.transparentWithZWrite&&(i.depthWrite=!0),delete i.transparentWithZWrite,i.fog=!0,i.lights=!0,i.clipping=!0,this.uniforms=Ic.merge([le.common,le.normalmap,le.emissivemap,le.fog,le.lights,{litFactor:{value:new ye(1,1,1)},mapUvTransform:{value:new De},colorAlpha:{value:1},normalMapUvTransform:{value:new De},shadeColorFactor:{value:new ye(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new De},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new De},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new ye(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new De},parametricRimColorFactor:{value:new ye(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new De},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new ye(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new De},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new De},outlineWidthFactor:{value:0},outlineColorFactor:{value:new ye(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new De},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(e=i.uniforms)!=null?e:{}]),this.setValues(i),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,n])=>`${t}:${n}`),this.matcapTexture?`matcapTextureColorSpace:${Td(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${Td(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${Td(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=t=>{let n=parseInt("183",10),s=Object.entries(pg(pg({},this._generateDefines()),this.defines)).filter(([r,o])=>!!o).map(([r,o])=>`#define ${r} ${o}`).join(`
`)+`
`;t.vertexShader=s+t.vertexShader,t.fragmentShader=s+t.fragmentShader,n<154&&(t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(i){this.uniforms.litFactor.value=i}get map(){return this.uniforms.map.value}set map(i){this.uniforms.map.value=i}get normalMap(){return this.uniforms.normalMap.value}set normalMap(i){this.uniforms.normalMap.value=i}get normalScale(){return this.uniforms.normalScale.value}set normalScale(i){this.uniforms.normalScale.value=i}get emissive(){return this.uniforms.emissive.value}set emissive(i){this.uniforms.emissive.value=i}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(i){this.uniforms.emissiveIntensity.value=i}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(i){this.uniforms.emissiveMap.value=i}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(i){this.uniforms.shadeColorFactor.value=i}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(i){this.uniforms.shadeMultiplyTexture.value=i}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(i){this.uniforms.shadingShiftFactor.value=i}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(i){this.uniforms.shadingShiftTexture.value=i}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(i){this.uniforms.shadingShiftTextureScale.value=i}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(i){this.uniforms.shadingToonyFactor.value=i}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(i){this.uniforms.giEqualizationFactor.value=i}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(i){this.uniforms.matcapFactor.value=i}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(i){this.uniforms.matcapTexture.value=i}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(i){this.uniforms.parametricRimColorFactor.value=i}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(i){this.uniforms.rimMultiplyTexture.value=i}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(i){this.uniforms.rimLightingMixFactor.value=i}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(i){this.uniforms.parametricRimFresnelPowerFactor.value=i}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(i){this.uniforms.parametricRimLiftFactor.value=i}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(i){this.uniforms.outlineWidthMultiplyTexture.value=i}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(i){this.uniforms.outlineWidthFactor.value=i}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(i){this.uniforms.outlineColorFactor.value=i}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(i){this.uniforms.outlineLightingMixFactor.value=i}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(i){this.uniforms.uvAnimationMaskTexture.value=i}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(i){this.uniforms.uvAnimationScrollXOffset.value=i}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(i){this.uniforms.uvAnimationScrollYOffset.value=i}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(i){this.uniforms.uvAnimationRotationPhase.value=i}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(i){this._ignoreVertexColor=i,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(i){this._v0CompatShade=i,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(i){this._debugMode=i,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(i){this._outlineWidthMode=i,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(i){this._isOutline=i,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(i){this._uploadUniformsWorkaround(),this._updateUVAnimation(i)}copy(i){return super.copy(i),this.map=i.map,this.normalMap=i.normalMap,this.emissiveMap=i.emissiveMap,this.shadeMultiplyTexture=i.shadeMultiplyTexture,this.shadingShiftTexture=i.shadingShiftTexture,this.matcapTexture=i.matcapTexture,this.rimMultiplyTexture=i.rimMultiplyTexture,this.outlineWidthMultiplyTexture=i.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=i.uvAnimationMaskTexture,this.normalMapType=i.normalMapType,this.uvAnimationScrollXSpeedFactor=i.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=i.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=i.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=i.ignoreVertexColor,this.v0CompatShade=i.v0CompatShade,this.debugMode=i.debugMode,this.outlineWidthMode=i.outlineWidthMode,this.isOutline=i.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(i){this.uniforms.uvAnimationScrollXOffset.value+=i*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=i*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=i*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){let i=parseInt("183",10),e=this.outlineWidthMultiplyTexture!==null,t=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:i,OUTLINE:this._isOutline,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===mg.ScreenCoordinates}}_updateTextureMatrix(i,e){i.value&&(i.value.matrixAutoUpdate&&i.value.updateMatrix(),e.value.copy(i.value.matrix))}},nT=new Set(["1.0","1.0-beta"]),Vg=class Yc{get name(){return Yc.EXTENSION_NAME}constructor(e,t={}){var n,s,r,o;this.parser=e,this.materialType=(n=t.materialType)!=null?n:tT,this.renderOrderOffset=(s=t.renderOrderOffset)!=null?s:0,this.v0CompatShade=(r=t.v0CompatShade)!=null?r:!1,this.debugMode=(o=t.debugMode)!=null?o:"none",this._mToonMaterialSet=new Set}beforeRoot(){return qs(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return qs(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,t){let n=this._getMToonExtension(e);return n?this._extendMaterialParams(n,t):null}loadMesh(e){return qs(this,null,function*(){var t;let n=this.parser,r=(t=n.json.meshes)==null?void 0:t[e];if(r==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);let o=r.primitives,a=yield n.loadMesh(e);if(o.length===1){let l=a,c=o[0].material;c!=null&&this._setupPrimitive(l,c)}else{let l=a;for(let c=0;c<o.length;c++){let u=l.children[c],h=o[c].material;h!=null&&this._setupPrimitive(u,h)}}return a})}_removeUnlitExtensionIfMToonExists(){let n=this.parser.json.materials;n?.map((s,r)=>{var o;this._getMToonExtension(r)&&((o=s.extensions)!=null&&o.KHR_materials_unlit)&&delete s.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,n;let o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}let a=(n=o.extensions)==null?void 0:n[Yc.EXTENSION_NAME];if(a==null)return;let l=a.specVersion;if(!nT.has(l)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${Yc.EXTENSION_NAME} specVersion "${l}"`);return}return a}_extendMaterialParams(e,t){return qs(this,null,function*(){var n;delete t.metalness,delete t.roughness;let s=new Zb(this.parser,t);s.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),s.assignColor("shadeColorFactor",e.shadeColorFactor),s.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),s.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),s.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),s.assignPrimitive("shadingShiftTextureScale",(n=e.shadingShiftTexture)==null?void 0:n.scale),s.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),s.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),s.assignColor("matcapFactor",e.matcapFactor),s.assignTexture("matcapTexture",e.matcapTexture,!0),s.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),s.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),s.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),s.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),s.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),s.assignPrimitive("outlineWidthMode",e.outlineWidthMode),s.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),s.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),s.assignColor("outlineColorFactor",e.outlineColorFactor),s.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),s.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),s.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),s.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),s.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),s.assignPrimitive("v0CompatShade",this.v0CompatShade),s.assignPrimitive("debugMode",this.debugMode),yield s.pending})}_setupPrimitive(e,t){let n=this._getMToonExtension(t);if(n){let s=this._parseRenderOrder(n);e.renderOrder=s+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode=="string"&&e.outlineWidthMode!=="none"&&typeof e.outlineWidthFactor=="number"&&e.outlineWidthFactor>0}_generateOutline(e){let t=e.material;if(!(t instanceof rn)||!this._shouldGenerateOutline(t))return;e.material=[t];let n=t.clone();n.name+=" (Outline)",n.isOutline=!0,n.side=Jt,e.material.push(n);let s=e.geometry,r=s.index?s.index.count:s.attributes.position.count/3;s.addGroup(0,r,0),s.addGroup(0,r,1)}_addToMaterialSet(e){let t=e.material,n=new Set;Array.isArray(t)?t.forEach(s=>n.add(s)):n.add(t);for(let s of n)this._mToonMaterialSet.add(s)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!=null?t:0)}};Vg.EXTENSION_NAME="VRMC_materials_mtoon";iT=Vg,sT=(i,e,t)=>new Promise((n,s)=>{var r=l=>{try{a(t.next(l))}catch(c){s(c)}},o=l=>{try{a(t.throw(l))}catch(c){s(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(i,e)).next())}),Hg=class Od{get name(){return Od.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return sT(this,null,function*(){let n=this._getHDREmissiveMultiplierExtension(e);if(n==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");let s=n.emissiveMultiplier;t.emissiveIntensity=s})}_getHDREmissiveMultiplierExtension(e){var t,n;let o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}let a=(n=o.extensions)==null?void 0:n[Od.EXTENSION_NAME];if(a!=null)return a}};Hg.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";rT=Hg,oT=Object.defineProperty,aT=Object.defineProperties,lT=Object.getOwnPropertyDescriptors,gg=Object.getOwnPropertySymbols,cT=Object.prototype.hasOwnProperty,uT=Object.prototype.propertyIsEnumerable,_g=(i,e,t)=>e in i?oT(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,_i=(i,e)=>{for(var t in e||(e={}))cT.call(e,t)&&_g(i,t,e[t]);if(gg)for(var t of gg(e))uT.call(e,t)&&_g(i,t,e[t]);return i},xg=(i,e)=>aT(i,lT(e)),hT=(i,e,t)=>new Promise((n,s)=>{var r=l=>{try{a(t.next(l))}catch(c){s(c)}},o=l=>{try{a(t.throw(l))}catch(c){s(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(i,e)).next())});dT=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(i){var e;this.parser=i,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;let t=this.parser.json;t.extensionsUsed=(e=t.extensionsUsed)!=null?e:[],t.extensionsUsed.indexOf("KHR_texture_transform")===-1&&t.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return hT(this,null,function*(){var i;let e=this.parser.json,t=(i=e.extensions)==null?void 0:i.VRM,n=t?.materialProperties;n&&(this._populateRenderQueueMap(n),n.forEach((s,r)=>{var o,a;let l=(o=e.materials)==null?void 0:o[r];if(l==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${r}] of glTF but the material doesn't exist`);return}if(s.shader==="VRM/MToon"){let c=this._parseV0MToonProperties(s,l);e.materials[r]=c}else if((a=s.shader)!=null&&a.startsWith("VRM/Unlit")){let c=this._parseV0UnlitProperties(s,l);e.materials[r]=c}else s.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${s.shader}`)}))})}_parseV0MToonProperties(i,e){var t,n,s,r,o,a,l,c,u,h,d,p,f,_,m,g,y,S,v,E,b,A,x,T,N,R,L,F,O,H,k,V,Z,j,ee,fe,ce,Ge,St,_t,Y,se,oe,ze,Ue,Be,Pt,Je,st,ut,We,At,P,Rt,et;let mt=(n=(t=i.keywordMap)==null?void 0:t._ALPHABLEND_ON)!=null?n:!1,I=((s=i.floatProperties)==null?void 0:s._ZWrite)===1&&mt,M=this._v0ParseRenderQueue(i),U=(o=(r=i.keywordMap)==null?void 0:r._ALPHATEST_ON)!=null?o:!1,q=mt?"BLEND":U?"MASK":"OPAQUE",K=U?(l=(a=i.floatProperties)==null?void 0:a._Cutoff)!=null?l:.5:void 0,xe=((u=(c=i.floatProperties)==null?void 0:c._CullMode)!=null?u:2)===0,te=this._portTextureTransform(i),Ie=((d=(h=i.vectorProperties)==null?void 0:h._Color)!=null?d:[1,1,1,1]).map((Fa,yu)=>yu===3?Fa:jr(Fa)),Ne=(p=i.textureProperties)==null?void 0:p._MainTex,Q=Ne!=null?{index:Ne,extensions:_i({},te)}:void 0,ie=(_=(f=i.floatProperties)==null?void 0:f._BumpScale)!=null?_:1,ge=(m=i.textureProperties)==null?void 0:m._BumpMap,ve=ge!=null?{index:ge,scale:ie,extensions:_i({},te)}:void 0,de=((y=(g=i.vectorProperties)==null?void 0:g._EmissionColor)!=null?y:[0,0,0,1]).map(jr),Xe=(S=i.textureProperties)==null?void 0:S._EmissionMap,D=Xe!=null?{index:Xe,extensions:_i({},te)}:void 0,ae=((E=(v=i.vectorProperties)==null?void 0:v._ShadeColor)!=null?E:[.97,.81,.86,1]).map(jr),ne=(b=i.textureProperties)==null?void 0:b._ShadeTexture,pe=ne!=null?{index:ne,extensions:_i({},te)}:void 0,J=(x=(A=i.floatProperties)==null?void 0:A._ShadeShift)!=null?x:0,X=(N=(T=i.floatProperties)==null?void 0:T._ShadeToony)!=null?N:.9;X=tt.lerp(X,1,.5+.5*J),J=-J-(1-X);let _e=(L=(R=i.floatProperties)==null?void 0:R._IndirectLightIntensity)!=null?L:.1,ke=_e?1-_e:void 0,ht=(F=i.textureProperties)==null?void 0:F._SphereAdd,lt=ht!=null?[1,1,1]:void 0,Bn=ht!=null?{index:ht}:void 0,kn=(H=(O=i.floatProperties)==null?void 0:O._RimLightingMix)!=null?H:0,po=(k=i.textureProperties)==null?void 0:k._RimTexture,mo=po!=null?{index:po,extensions:_i({},te)}:void 0,pu=((Z=(V=i.vectorProperties)==null?void 0:V._RimColor)!=null?Z:[0,0,0,1]).map(jr),Da=(ee=(j=i.floatProperties)==null?void 0:j._RimFresnelPower)!=null?ee:1,Ua=(ce=(fe=i.floatProperties)==null?void 0:fe._RimLift)!=null?ce:0,Ti=["none","worldCoordinates","screenCoordinates"][(St=(Ge=i.floatProperties)==null?void 0:Ge._OutlineWidthMode)!=null?St:0],_s=(Y=(_t=i.floatProperties)==null?void 0:_t._OutlineWidth)!=null?Y:0;_s=.01*_s;let go=(se=i.textureProperties)==null?void 0:se._OutlineWidthTexture,Na=go!=null?{index:go,extensions:_i({},te)}:void 0,nr=((ze=(oe=i.vectorProperties)==null?void 0:oe._OutlineColor)!=null?ze:[0,0,0]).map(jr),ir=((Be=(Ue=i.floatProperties)==null?void 0:Ue._OutlineColorMode)!=null?Be:0)===1?(Je=(Pt=i.floatProperties)==null?void 0:Pt._OutlineLightingMix)!=null?Je:1:0,_o=(st=i.textureProperties)==null?void 0:st._UvAnimMaskTexture,Oa=_o!=null?{index:_o,extensions:_i({},te)}:void 0,gu=(We=(ut=i.floatProperties)==null?void 0:ut._UvAnimScrollX)!=null?We:0,sr=(P=(At=i.floatProperties)==null?void 0:At._UvAnimScrollY)!=null?P:0;sr!=null&&(sr=-sr);let _u=(et=(Rt=i.floatProperties)==null?void 0:Rt._UvAnimRotation)!=null?et:0,xu={specVersion:"1.0",transparentWithZWrite:I,renderQueueOffsetNumber:M,shadeColorFactor:ae,shadeMultiplyTexture:pe,shadingShiftFactor:J,shadingToonyFactor:X,giEqualizationFactor:ke,matcapFactor:lt,matcapTexture:Bn,rimLightingMixFactor:kn,rimMultiplyTexture:mo,parametricRimColorFactor:pu,parametricRimFresnelPowerFactor:Da,parametricRimLiftFactor:Ua,outlineWidthMode:Ti,outlineWidthFactor:_s,outlineWidthMultiplyTexture:Na,outlineColorFactor:nr,outlineLightingMixFactor:ir,uvAnimationMaskTexture:Oa,uvAnimationScrollXSpeedFactor:gu,uvAnimationScrollYSpeedFactor:sr,uvAnimationRotationSpeedFactor:_u};return xg(_i({},e),{pbrMetallicRoughness:{baseColorFactor:Ie,baseColorTexture:Q},normalTexture:ve,emissiveTexture:D,emissiveFactor:de,alphaMode:q,alphaCutoff:K,doubleSided:xe,extensions:{VRMC_materials_mtoon:xu}})}_parseV0UnlitProperties(i,e){var t,n,s,r,o;let a=i.shader==="VRM/UnlitTransparentZWrite",l=i.shader==="VRM/UnlitTransparent"||a,c=this._v0ParseRenderQueue(i),u=i.shader==="VRM/UnlitCutout",h=l?"BLEND":u?"MASK":"OPAQUE",d=u?(n=(t=i.floatProperties)==null?void 0:t._Cutoff)!=null?n:.5:void 0,p=this._portTextureTransform(i),f=((r=(s=i.vectorProperties)==null?void 0:s._Color)!=null?r:[1,1,1,1]).map(jr),_=(o=i.textureProperties)==null?void 0:o._MainTex,m=_!=null?{index:_,extensions:_i({},p)}:void 0,g={specVersion:"1.0",transparentWithZWrite:a,renderQueueOffsetNumber:c,shadeColorFactor:f,shadeMultiplyTexture:m};return xg(_i({},e),{pbrMetallicRoughness:{baseColorFactor:f,baseColorTexture:m},alphaMode:h,alphaCutoff:d,extensions:{VRMC_materials_mtoon:g}})}_portTextureTransform(i){var e,t,n,s,r;let o=(e=i.vectorProperties)==null?void 0:e._MainTex;if(o==null)return{};let a=[(t=o?.[0])!=null?t:0,(n=o?.[1])!=null?n:0],l=[(s=o?.[2])!=null?s:1,(r=o?.[3])!=null?r:1];return a[1]=1-l[1]-a[1],{KHR_texture_transform:{offset:a,scale:l}}}_v0ParseRenderQueue(i){var e,t;let n=i.shader==="VRM/UnlitTransparentZWrite",s=((e=i.keywordMap)==null?void 0:e._ALPHABLEND_ON)!=null||i.shader==="VRM/UnlitTransparent"||n,r=((t=i.floatProperties)==null?void 0:t._ZWrite)===1||n,o=0;if(s){let a=i.renderQueue;a!=null&&(r?o=this._renderQueueMapTransparentZWrite.get(a):o=this._renderQueueMapTransparent.get(a))}return o}_populateRenderQueueMap(i){let e=new Set,t=new Set;i.forEach(n=>{var s,r;let o=n.shader==="VRM/UnlitTransparentZWrite",a=((s=n.keywordMap)==null?void 0:s._ALPHABLEND_ON)!=null||n.shader==="VRM/UnlitTransparent"||o,l=((r=n.floatProperties)==null?void 0:r._ZWrite)===1||o;if(a){let c=n.renderQueue;c!=null&&(l?t.add(c):e.add(c))}}),e.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${e.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(e).sort().forEach((n,s)=>{let r=Math.min(Math.max(s-e.size+1,-9),0);this._renderQueueMapTransparent.set(n,r)}),Array.from(t).sort().forEach((n,s)=>{let r=Math.min(Math.max(s,0),9);this._renderQueueMapTransparentZWrite.set(n,r)})}},yg=(i,e,t)=>new Promise((n,s)=>{var r=l=>{try{a(t.next(l))}catch(c){s(c)}},o=l=>{try{a(t.throw(l))}catch(c){s(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(i,e)).next())}),us=new C,Ed=class extends Ct{constructor(i){super(),this._attrPosition=new Ve(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(vh);let e=new Qe;e.setAttribute("position",this._attrPosition);let t=new cn({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Ni(e,t),this.add(this._line),this.constraint=i}updateMatrixWorld(i){us.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,us.x,us.y,us.z),this.constraint.source&&us.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,us.x,us.y,us.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(i)}};fT=new C,pT=new C;kd=class{constructor(i,e){this.destination=i,this.source=e,this.weight=1}},gT=new C,_T=new C,xT=new C,yT=new Me,vT=new Me,MT=new Me,ST=class extends kd{get aimAxis(){return this._aimAxis}set aimAxis(i){this._aimAxis=i,this._v3AimAxis.set(i==="PositiveX"?1:i==="NegativeX"?-1:0,i==="PositiveY"?1:i==="NegativeY"?-1:0,i==="PositiveZ"?1:i==="NegativeZ"?-1:0)}get dependencies(){let i=new Set([this.source]);return this.destination.parent&&i.add(this.destination.parent),i}constructor(i,e){super(i,e),this._aimAxis="PositiveX",this._v3AimAxis=new C(1,0,0),this._dstRestQuat=new Me}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);let i=yT.identity(),e=vT.identity();this.destination.parent&&(mT(this.destination.parent.matrixWorld,i),Zc(e.copy(i)));let t=gT.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(i),n=vg(this.source.matrixWorld,_T).sub(vg(this.destination.matrixWorld,xT)).normalize(),s=MT.setFromUnitVectors(t,n).premultiply(e).multiply(i).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(s,this.weight)}};TT=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(i){this._constraints.add(i);let e=this._objectConstraintsMap.get(i.destination);e==null&&(e=new Set,this._objectConstraintsMap.set(i.destination,e)),e.add(i)}deleteConstraint(i){this._constraints.delete(i),this._objectConstraintsMap.get(i.destination).delete(i)}setInitState(){let i=new Set,e=new Set;for(let t of this._constraints)this._processConstraint(t,i,e,n=>n.setInitState())}update(){let i=new Set,e=new Set;for(let t of this._constraints)this._processConstraint(t,i,e,n=>n.update())}_processConstraint(i,e,t,n){if(t.has(i))return;if(e.has(i))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");e.add(i);let s=i.dependencies;for(let r of s)bT(r,o=>{let a=this._objectConstraintsMap.get(o);if(a)for(let l of a)this._processConstraint(l,e,t,n)});n(i),t.add(i)}},ET=new Me,wT=new Me,AT=class extends kd{get dependencies(){return new Set([this.source])}constructor(i,e){super(i,e),this._dstRestQuat=new Me,this._invSrcRestQuat=new Me}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),Zc(this._invSrcRestQuat.copy(this.source.quaternion))}update(){let i=ET.copy(this._invSrcRestQuat).multiply(this.source.quaternion),e=wT.copy(this._dstRestQuat).multiply(i);this.destination.quaternion.copy(this._dstRestQuat).slerp(e,this.weight)}},RT=new C,CT=new Me,IT=new Me,PT=class extends kd{get rollAxis(){return this._rollAxis}set rollAxis(i){this._rollAxis=i,this._v3RollAxis.set(i==="X"?1:0,i==="Y"?1:0,i==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(i,e){super(i,e),this._rollAxis="X",this._v3RollAxis=new C(1,0,0),this._dstRestQuat=new Me,this._invDstRestQuat=new Me,this._invSrcRestQuatMulDstRestQuat=new Me}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),Zc(this._invDstRestQuat.copy(this._dstRestQuat)),Zc(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){let i=CT.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),e=RT.copy(this._v3RollAxis).applyQuaternion(i),n=IT.setFromUnitVectors(e,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(i);this.destination.quaternion.copy(this._dstRestQuat).slerp(n,this.weight)}},LT=new Set(["1.0","1.0-beta"]),zg=class ya{get name(){return ya.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t?.helperRoot}afterRoot(e){return yg(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){return yg(this,null,function*(){var t;let n=this.parser.json;if(!(((t=n.extensionsUsed)==null?void 0:t.indexOf(ya.EXTENSION_NAME))!==-1))return null;let r=new TT,o=yield this.parser.getDependencies("node");return o.forEach((a,l)=>{var c;let u=n.nodes[l],h=(c=u?.extensions)==null?void 0:c[ya.EXTENSION_NAME];if(h==null)return;let d=h.specVersion;if(!LT.has(d)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${ya.EXTENSION_NAME} specVersion "${d}"`);return}let p=h.constraint;if(p.roll!=null){let f=this._importRollConstraint(a,o,p.roll);r.addConstraint(f)}else if(p.aim!=null){let f=this._importAimConstraint(a,o,p.aim);r.addConstraint(f)}else if(p.rotation!=null){let f=this._importRotationConstraint(a,o,p.rotation);r.addConstraint(f)}}),e.scene.updateMatrixWorld(),r.setInitState(),r})}_importRollConstraint(e,t,n){let{source:s,rollAxis:r,weight:o}=n,a=t[s],l=new PT(e,a);if(r!=null&&(l.rollAxis=r),o!=null&&(l.weight=o),this.helperRoot){let c=new Ed(l);this.helperRoot.add(c)}return l}_importAimConstraint(e,t,n){let{source:s,aimAxis:r,weight:o}=n,a=t[s],l=new ST(e,a);if(r!=null&&(l.aimAxis=r),o!=null&&(l.weight=o),this.helperRoot){let c=new Ed(l);this.helperRoot.add(c)}return l}_importRotationConstraint(e,t,n){let{source:s,weight:r}=n,o=t[s],a=new AT(e,o);if(r!=null&&(a.weight=r),this.helperRoot){let l=new Ed(a);this.helperRoot.add(l)}return a}};zg.EXTENSION_NAME="VRMC_node_constraint";DT=zg,Xc=(i,e,t)=>new Promise((n,s)=>{var r=l=>{try{a(t.next(l))}catch(c){s(c)}},o=l=>{try{a(t.throw(l))}catch(c){s(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(i,e)).next())}),Vd=class{},wd=new C,$s=new C,Gg=class extends Vd{get type(){return"capsule"}constructor(i){var e,t,n,s;super(),this.offset=(e=i?.offset)!=null?e:new C(0,0,0),this.tail=(t=i?.tail)!=null?t:new C(0,0,0),this.radius=(n=i?.radius)!=null?n:0,this.inside=(s=i?.inside)!=null?s:!1}calculateCollision(i,e,t,n){wd.setFromMatrixPosition(i),$s.subVectors(this.tail,this.offset).applyMatrix4(i),$s.sub(wd);let s=$s.lengthSq();n.copy(e).sub(wd);let r=$s.dot(n);r<=0||(s<=r||$s.multiplyScalar(r/s),n.sub($s));let o=n.length(),a=this.inside?this.radius-t-o:o-t-this.radius;return a<0&&(n.multiplyScalar(1/o),this.inside&&n.negate()),a}},Ad=new C,Mg=new De,Wg=class extends Vd{get type(){return"plane"}constructor(i){var e,t;super(),this.offset=(e=i?.offset)!=null?e:new C(0,0,0),this.normal=(t=i?.normal)!=null?t:new C(0,0,1)}calculateCollision(i,e,t,n){n.setFromMatrixPosition(i),n.negate().add(e),Mg.getNormalMatrix(i),Ad.copy(this.normal).applyNormalMatrix(Mg).normalize();let s=n.dot(Ad)-t;return n.copy(Ad),s}},UT=new C,Xg=class extends Vd{get type(){return"sphere"}constructor(i){var e,t,n;super(),this.offset=(e=i?.offset)!=null?e:new C(0,0,0),this.radius=(t=i?.radius)!=null?t:0,this.inside=(n=i?.inside)!=null?n:!1}calculateCollision(i,e,t,n){n.subVectors(e,UT.setFromMatrixPosition(i));let s=n.length(),r=this.inside?this.radius-t-s:s-t-this.radius;return r<0&&(n.multiplyScalar(1/s),this.inside&&n.negate()),r}},xi=new C,NT=class extends Qe{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new C,this._currentTail=new C,this._shape=i,this._attrPos=new Ve(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Ve(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1,e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0);let t=xi.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(t)>1e-10&&(this._currentTail.copy(t),i=!0),i&&this._buildPosition()}_buildPosition(){xi.copy(this._currentTail).sub(this._currentOffset);let i=xi.length()/this._currentRadius;for(let n=0;n<=16;n++){let s=n/16*Math.PI;this._attrPos.setXYZ(n,-Math.sin(s),-Math.cos(s),0),this._attrPos.setXYZ(17+n,i+Math.sin(s),Math.cos(s),0),this._attrPos.setXYZ(34+n,-Math.sin(s),0,-Math.cos(s)),this._attrPos.setXYZ(51+n,i+Math.sin(s),0,Math.cos(s))}for(let n=0;n<32;n++){let s=n/16*Math.PI;this._attrPos.setXYZ(68+n,0,Math.sin(s),Math.cos(s)),this._attrPos.setXYZ(100+n,i,Math.sin(s),Math.cos(s))}let e=Math.atan2(xi.y,Math.sqrt(xi.x*xi.x+xi.z*xi.z)),t=-Math.atan2(xi.z,xi.x);this.rotateZ(e),this.rotateY(t),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<34;i++){let e=(i+1)%34;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(68+i*2,34+i,34+e)}for(let i=0;i<32;i++){let e=(i+1)%32;this._attrIndex.setXY(136+i*2,68+i,68+e),this._attrIndex.setXY(200+i*2,100+i,100+e)}this._attrIndex.needsUpdate=!0}},OT=class extends Qe{constructor(i){super(),this.worldScale=1,this._currentOffset=new C,this._currentNormal=new C,this._shape=i,this._attrPos=new Ve(new Float32Array(18),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Ve(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),i=!0),i&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},FT=class extends Qe{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new C,this._shape=i,this._attrPos=new Ve(new Float32Array(288),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Ve(new Uint16Array(192),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1,e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){let e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){let e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.needsUpdate=!0}},BT=new C,Rd=class extends Ct{constructor(i){if(super(),this.matrixAutoUpdate=!1,this.collider=i,this.collider.shape instanceof Xg)this._geometry=new FT(this.collider.shape);else if(this.collider.shape instanceof Gg)this._geometry=new NT(this.collider.shape);else if(this.collider.shape instanceof Wg)this._geometry=new OT(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");let e=new cn({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Dn(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(i){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);let e=this.matrix.elements;this._geometry.worldScale=BT.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(i)}},kT=class extends Qe{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new C,this._springBone=i,this._attrPos=new Ve(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Ve(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1,e=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){let e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){let e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},VT=new C,HT=class extends Ct{constructor(i){super(),this.matrixAutoUpdate=!1,this.springBone=i,this._geometry=new kT(this.springBone);let e=new cn({color:16776960,depthTest:!1,depthWrite:!1});this._line=new Dn(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(i){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);let e=this.matrix.elements;this._geometry.worldScale=VT.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(i)}},Cd=class extends ft{constructor(i){super(),this.colliderMatrix=new Re,this.shape=i}updateWorldMatrix(i,e){super.updateWorldMatrix(i,e),zT(this.colliderMatrix,this.matrixWorld,this.shape.offset)}};GT=new Re;XT=class{constructor(i){this._inverseCache=new Re,this._shouldUpdateInverse=!0,this.matrix=i;let e={set:(t,n,s)=>(this._shouldUpdateInverse=!0,t[n]=s,!0)};this._originalElements=i.elements,i.elements=new Proxy(i.elements,e)}get inverse(){return this._shouldUpdateInverse&&(WT(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},Id=new Re,Zr=new C,ga=new C,_a=new C,xa=new C,$T=new Re,qT=class{constructor(i,e,t={},n=[]){this._currentTail=new C,this._prevTail=new C,this._boneAxis=new C,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new Re,this._initialLocalRotation=new Me,this._initialLocalChildPosition=new C;var s,r,o,a,l,c;this.bone=i,this.bone.matrixAutoUpdate=!1,this.child=e,this.settings={hitRadius:(s=t.hitRadius)!=null?s:0,stiffness:(r=t.stiffness)!=null?r:1,gravityPower:(o=t.gravityPower)!=null?o:0,gravityDir:(l=(a=t.gravityDir)==null?void 0:a.clone())!=null?l:new C(0,-1,0),dragForce:(c=t.dragForce)!=null?c:.4},this.colliderGroups=n}get dependencies(){let i=new Set,e=this.bone.parent;e&&i.add(e);for(let t=0;t<this.colliderGroups.length;t++)for(let n=0;n<this.colliderGroups[t].colliders.length;n++)i.add(this.colliderGroups[t].colliders[n]);return i}get center(){return this._center}set center(i){var e;(e=this._center)!=null&&e.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=i,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new XT(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:Id}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);let i=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(i),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);let i=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(i),this._prevTail.copy(this._currentTail)}update(i){if(i<=0)return;this._calcWorldSpaceBoneLength();let e=ga.copy(this._boneAxis).transformDirection(this._initialLocalMatrix).transformDirection(this._parentMatrixWorld);xa.copy(this._currentTail).add(Zr.subVectors(this._currentTail,this._prevTail).multiplyScalar(1-this.settings.dragForce)).applyMatrix4(this._getMatrixCenterToWorld()).addScaledVector(e,this.settings.stiffness*i).addScaledVector(this.settings.gravityDir,this.settings.gravityPower*i),_a.setFromMatrixPosition(this.bone.matrixWorld),xa.sub(_a).normalize().multiplyScalar(this._worldSpaceBoneLength).add(_a),this._collision(xa),this._prevTail.copy(this._currentTail),this._currentTail.copy(xa).applyMatrix4(this._getMatrixWorldToCenter());let t=$T.multiplyMatrices(this._parentMatrixWorld,this._initialLocalMatrix).invert();this.bone.quaternion.setFromUnitVectors(this._boneAxis,Zr.copy(xa).applyMatrix4(t).normalize()).premultiply(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(i){for(let e=0;e<this.colliderGroups.length;e++)for(let t=0;t<this.colliderGroups[e].colliders.length;t++){let n=this.colliderGroups[e].colliders[t],s=n.shape.calculateCollision(n.colliderMatrix,i,this.settings.hitRadius,Zr);if(s<0){i.addScaledVector(Zr,-s),i.sub(_a);let r=i.length();i.multiplyScalar(this._worldSpaceBoneLength/r).add(_a)}}}_calcWorldSpaceBoneLength(){Zr.setFromMatrixPosition(this.bone.matrixWorld),this.child?ga.setFromMatrixPosition(this.child.matrixWorld):(ga.copy(this._initialLocalChildPosition),ga.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=Zr.sub(ga).length()}_getMatrixCenterToWorld(){return this._center?this._center.matrixWorld:Id}_getMatrixWorldToCenter(){return this._center?this._center.userData.inverseCacheProxy.inverse:Id}};Sg=class{constructor(){this._joints=new Set,this._sortedJoints=[],this._hasWarnedCircularDependency=!1,this._ancestors=[],this._objectSpringBonesMap=new Map,this._isSortedJointsDirty=!1,this._relevantChildrenUpdated=this._relevantChildrenUpdated.bind(this)}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){let i=new Set;return this._joints.forEach(e=>{e.colliderGroups.forEach(t=>{i.add(t)})}),Array.from(i)}get colliders(){let i=new Set;return this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{i.add(t)})}),Array.from(i)}addJoint(i){this._joints.add(i);let e=this._objectSpringBonesMap.get(i.bone);e==null&&(e=new Set,this._objectSpringBonesMap.set(i.bone,e)),e.add(i),this._isSortedJointsDirty=!0}addSpringBone(i){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(i)}deleteJoint(i){this._joints.delete(i),this._objectSpringBonesMap.get(i.bone).delete(i),this._isSortedJointsDirty=!0}deleteSpringBone(i){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(i)}setInitState(){this._sortJoints();for(let i=0;i<this._sortedJoints.length;i++){let e=this._sortedJoints[i];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.setInitState()}}reset(){this._sortJoints();for(let i=0;i<this._sortedJoints.length;i++){let e=this._sortedJoints[i];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.reset()}}update(i){this._sortJoints();for(let e=0;e<this._ancestors.length;e++)this._ancestors[e].updateWorldMatrix(e===0,!1);for(let e=0;e<this._sortedJoints.length;e++){let t=this._sortedJoints[e];t.bone.updateMatrix(),t.bone.updateWorldMatrix(!1,!1),t.update(i),Fd(t.bone,this._relevantChildrenUpdated)}}_sortJoints(){if(!this._isSortedJointsDirty)return;let i=[],e=new Set,t=new Set,n=new Set;for(let r of this._joints)this._insertJointSort(r,e,t,i,n);this._sortedJoints=i;let s=jT(n);this._ancestors=[],s&&(this._ancestors.push(s),Fd(s,r=>{var o,a;return((a=(o=this._objectSpringBonesMap.get(r))==null?void 0:o.size)!=null?a:0)>0?!0:(this._ancestors.push(r),!1)})),this._isSortedJointsDirty=!1}_insertJointSort(i,e,t,n,s){if(t.has(i))return;if(e.has(i)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected"),this._hasWarnedCircularDependency=!0);return}e.add(i);let r=i.dependencies;for(let o of r){let a=!1,l=null;YT(o,c=>{let u=this._objectSpringBonesMap.get(c);if(u)for(let h of u)a=!0,this._insertJointSort(h,e,t,n,s);else a||(l=c)}),l&&s.add(l)}n.push(i),t.add(i)}_relevantChildrenUpdated(i){var e,t;return((t=(e=this._objectSpringBonesMap.get(i))==null?void 0:e.size)!=null?t:0)>0?!0:(i.updateWorldMatrix(!1,!1),!1)}},bg="VRMC_springBone_extended_collider",ZT=new Set(["1.0","1.0-beta"]),KT=new Set(["1.0"]),$g=class Jr{get name(){return Jr.EXTENSION_NAME}constructor(e,t){var n;this.parser=e,this.jointHelperRoot=t?.jointHelperRoot,this.colliderHelperRoot=t?.colliderHelperRoot,this.useExtendedColliders=(n=t?.useExtendedColliders)!=null?n:!0}afterRoot(e){return Xc(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return Xc(this,null,function*(){let t=yield this._v1Import(e);if(t!=null)return t;let n=yield this._v0Import(e);return n??null})}_v1Import(e){return Xc(this,null,function*(){var t,n,s,r,o;let a=e.parser.json;if(!(((t=a.extensionsUsed)==null?void 0:t.indexOf(Jr.EXTENSION_NAME))!==-1))return null;let c=new Sg,u=yield e.parser.getDependencies("node"),h=(n=a.extensions)==null?void 0:n[Jr.EXTENSION_NAME];if(!h)return null;let d=h.specVersion;if(!ZT.has(d))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Jr.EXTENSION_NAME} specVersion "${d}"`),null;let p=(s=h.colliders)==null?void 0:s.map((_,m)=>{var g,y,S,v,E,b,A,x,T,N,R,L,F,O,H;let k=u[_.node];if(k==null)return console.warn(`VRMSpringBoneLoaderPlugin: The collider #${m} attempted to use the node #${_.node} but not found`),null;let V=_.shape,Z=(g=_.extensions)==null?void 0:g[bg];if(this.useExtendedColliders&&Z!=null){let j=Z.specVersion;if(!KT.has(j))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${bg} specVersion "${j}". Fallbacking to the ${Jr.EXTENSION_NAME} definition`);else{let ee=Z.shape;if(ee.sphere)return this._importSphereCollider(k,{offset:new C().fromArray((y=ee.sphere.offset)!=null?y:[0,0,0]),radius:(S=ee.sphere.radius)!=null?S:0,inside:(v=ee.sphere.inside)!=null?v:!1});if(ee.capsule)return this._importCapsuleCollider(k,{offset:new C().fromArray((E=ee.capsule.offset)!=null?E:[0,0,0]),radius:(b=ee.capsule.radius)!=null?b:0,tail:new C().fromArray((A=ee.capsule.tail)!=null?A:[0,0,0]),inside:(x=ee.capsule.inside)!=null?x:!1});if(ee.plane)return this._importPlaneCollider(k,{offset:new C().fromArray((T=ee.plane.offset)!=null?T:[0,0,0]),normal:new C().fromArray((N=ee.plane.normal)!=null?N:[0,0,1])})}}if(V.sphere)return this._importSphereCollider(k,{offset:new C().fromArray((R=V.sphere.offset)!=null?R:[0,0,0]),radius:(L=V.sphere.radius)!=null?L:0,inside:!1});if(V.capsule)return this._importCapsuleCollider(k,{offset:new C().fromArray((F=V.capsule.offset)!=null?F:[0,0,0]),radius:(O=V.capsule.radius)!=null?O:0,tail:new C().fromArray((H=V.capsule.tail)!=null?H:[0,0,0]),inside:!1});throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${m} has no valid shape`)}),f=(r=h.colliderGroups)==null?void 0:r.map((_,m)=>{var g;return{colliders:((g=_.colliders)!=null?g:[]).flatMap(S=>{let v=p?.[S];return v??(console.warn(`VRMSpringBoneLoaderPlugin: The colliderGroup #${m} attempted to use a collider #${S} but not found`),[])}),name:_.name}});return(o=h.springs)==null||o.forEach((_,m)=>{var g;let y=_.joints,S=(g=_.colliderGroups)==null?void 0:g.map(b=>{let A=f?.[b];if(A==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${m} attempted to use a colliderGroup ${b} but not found`);return A}),v=_.center!=null?u[_.center]:void 0,E;y.forEach(b=>{if(E){let A=E.node,x=u[A],T=b.node,N=u[T],R={hitRadius:E.hitRadius,dragForce:E.dragForce,gravityPower:E.gravityPower,stiffness:E.stiffness,gravityDir:E.gravityDir!=null?new C().fromArray(E.gravityDir):void 0},L=this._importJoint(x,N,R,S);v&&(L.center=v),c.addJoint(L)}E=b})}),c.setInitState(),c})}_v0Import(e){return Xc(this,null,function*(){var t,n,s;let r=e.parser.json;if(!(((t=r.extensionsUsed)==null?void 0:t.indexOf("VRM"))!==-1))return null;let a=(n=r.extensions)==null?void 0:n.VRM,l=a?.secondaryAnimation;if(!l)return null;let c=l?.boneGroups;if(!c)return null;let u=new Sg,h=yield e.parser.getDependencies("node"),d=(s=l.colliderGroups)==null?void 0:s.map(p=>{var f;let _=h[p.node];return{colliders:((f=p.colliders)!=null?f:[]).map((g,y)=>{var S,v,E;let b=new C(0,0,0);return g.offset&&b.set((S=g.offset.x)!=null?S:0,(v=g.offset.y)!=null?v:0,g.offset.z?-g.offset.z:0),this._importSphereCollider(_,{offset:b,radius:(E=g.radius)!=null?E:0,inside:!1})})}});return c?.forEach((p,f)=>{let _=p.bones;_&&_.forEach(m=>{var g,y,S,v;let E=h[m],b=new C;p.gravityDir?b.set((g=p.gravityDir.x)!=null?g:0,(y=p.gravityDir.y)!=null?y:0,(S=p.gravityDir.z)!=null?S:0):b.set(0,-1,0);let A=p.center!=null?h[p.center]:void 0,x={hitRadius:p.hitRadius,dragForce:p.dragForce,gravityPower:p.gravityPower,stiffness:p.stiffiness,gravityDir:b},T=(v=p.colliderGroups)==null?void 0:v.map(N=>{let R=d?.[N];if(R==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${f} attempted to use a colliderGroup ${N} but not found`);return R});E.traverse(N=>{var R;let L=(R=N.children[0])!=null?R:null,F=this._importJoint(N,L,x,T);A&&(F.center=A),u.addJoint(F)})})}),e.scene.updateMatrixWorld(),u.setInitState(),u})}_importJoint(e,t,n,s){let r=new qT(e,t,n,s);if(this.jointHelperRoot){let o=new HT(r);this.jointHelperRoot.add(o),o.renderOrder=this.jointHelperRoot.renderOrder}return r}_importSphereCollider(e,t){let n=new Xg(t),s=new Cd(n);if(e.add(s),this.colliderHelperRoot){let r=new Rd(s);this.colliderHelperRoot.add(r),r.renderOrder=this.colliderHelperRoot.renderOrder}return s}_importCapsuleCollider(e,t){let n=new Gg(t),s=new Cd(n);if(e.add(s),this.colliderHelperRoot){let r=new Rd(s);this.colliderHelperRoot.add(r),r.renderOrder=this.colliderHelperRoot.renderOrder}return s}_importPlaneCollider(e,t){let n=new Wg(t),s=new Cd(n);if(e.add(s),this.colliderHelperRoot){let r=new Rd(s);this.colliderHelperRoot.add(r),r.renderOrder=this.colliderHelperRoot.renderOrder}return s}};$g.EXTENSION_NAME="VRMC_springBone";JT=$g,Hd=class{get name(){return"VRMLoaderPlugin"}constructor(i,e){var t,n,s,r,o,a,l,c,u,h;this.parser=i;let d=e?.helperRoot,p=e?.autoUpdateHumanBones;this.expressionPlugin=(t=e?.expressionPlugin)!=null?t:new mb(i),this.firstPersonPlugin=(n=e?.firstPersonPlugin)!=null?n:new _b(i),this.humanoidPlugin=(s=e?.humanoidPlugin)!=null?s:new Tb(i,{helperRoot:d,autoUpdateHumanBones:p}),this.lookAtPlugin=(r=e?.lookAtPlugin)!=null?r:new kb(i,{helperRoot:d}),this.metaPlugin=(o=e?.metaPlugin)!=null?o:new zb(i),this.mtoonMaterialPlugin=(a=e?.mtoonMaterialPlugin)!=null?a:new iT(i),this.materialsHDREmissiveMultiplierPlugin=(l=e?.materialsHDREmissiveMultiplierPlugin)!=null?l:new rT(i),this.materialsV0CompatPlugin=(c=e?.materialsV0CompatPlugin)!=null?c:new dT(i),this.springBonePlugin=(u=e?.springBonePlugin)!=null?u:new JT(i,{colliderHelperRoot:d,jointHelperRoot:d}),this.nodeConstraintPlugin=(h=e?.nodeConstraintPlugin)!=null?h:new DT(i,{helperRoot:d})}beforeRoot(){return zc(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(i){return zc(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(i)})}getMaterialType(i){let e=this.mtoonMaterialPlugin.getMaterialType(i);return e??null}extendMaterialParams(i,e){return zc(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(i,e),yield this.mtoonMaterialPlugin.extendMaterialParams(i,e)})}afterRoot(i){return zc(this,null,function*(){yield this.metaPlugin.afterRoot(i),yield this.humanoidPlugin.afterRoot(i),yield this.expressionPlugin.afterRoot(i),yield this.lookAtPlugin.afterRoot(i),yield this.firstPersonPlugin.afterRoot(i),yield this.springBonePlugin.afterRoot(i),yield this.nodeConstraintPlugin.afterRoot(i),yield this.mtoonMaterialPlugin.afterRoot(i);let e=i.userData.vrmMeta,t=i.userData.vrmHumanoid;if(e&&t){let n=new Wb({scene:i.scene,expressionManager:i.userData.vrmExpressionManager,firstPerson:i.userData.vrmFirstPerson,humanoid:t,lookAt:i.userData.vrmLookAt,meta:e,materials:i.userData.vrmMToonMaterials,springBoneManager:i.userData.vrmSpringBoneManager,nodeConstraintManager:i.userData.vrmNodeConstraintManager});i.userData.vrm=n}})}};Pd=class{constructor(){this._objectIndexMap=new Map,this._index=0}get(i){return this._objectIndexMap.get(i)}getOrCreate(i){let e=this._objectIndexMap.get(i);return e==null&&(e=this._index,this._objectIndexMap.set(i,e),this._index++),e}};On=class{constructor(){}};On.combineMorphs=eE;On.combineSkeletons=tE;On.deepDispose=uE;On.removeUnnecessaryJoints=hE;On.removeUnnecessaryVertices=vE;On.rotateVRM0=ME;});var jg=Pf((cC,Qc)=>{(function(i,e){typeof define=="function"&&define.amd?define(e):typeof Qc<"u"&&Qc.exports?Qc.exports=e():window.ysFixWebmDuration=e()})("fix-webm-duration",function(){var i={172351395:{name:"EBML",type:"Container"},646:{name:"EBMLVersion",type:"Uint"},759:{name:"EBMLReadVersion",type:"Uint"},754:{name:"EBMLMaxIDLength",type:"Uint"},755:{name:"EBMLMaxSizeLength",type:"Uint"},642:{name:"DocType",type:"String"},647:{name:"DocTypeVersion",type:"Uint"},645:{name:"DocTypeReadVersion",type:"Uint"},108:{name:"Void",type:"Binary"},63:{name:"CRC-32",type:"Binary"},190023271:{name:"SignatureSlot",type:"Container"},16010:{name:"SignatureAlgo",type:"Uint"},16026:{name:"SignatureHash",type:"Uint"},16037:{name:"SignaturePublicKey",type:"Binary"},16053:{name:"Signature",type:"Binary"},15963:{name:"SignatureElements",type:"Container"},15995:{name:"SignatureElementList",type:"Container"},9522:{name:"SignedElement",type:"Binary"},139690087:{name:"Segment",type:"Container"},21863284:{name:"SeekHead",type:"Container"},3515:{name:"Seek",type:"Container"},5035:{name:"SeekID",type:"Binary"},5036:{name:"SeekPosition",type:"Uint"},88713574:{name:"Info",type:"Container"},13220:{name:"SegmentUID",type:"Binary"},13188:{name:"SegmentFilename",type:"String"},1882403:{name:"PrevUID",type:"Binary"},1868715:{name:"PrevFilename",type:"String"},2013475:{name:"NextUID",type:"Binary"},1999803:{name:"NextFilename",type:"String"},1092:{name:"SegmentFamily",type:"Binary"},10532:{name:"ChapterTranslate",type:"Container"},10748:{name:"ChapterTranslateEditionUID",type:"Uint"},10687:{name:"ChapterTranslateCodec",type:"Uint"},10661:{name:"ChapterTranslateID",type:"Binary"},710577:{name:"TimecodeScale",type:"Uint"},1161:{name:"Duration",type:"Float"},1121:{name:"DateUTC",type:"Date"},15273:{name:"Title",type:"String"},3456:{name:"MuxingApp",type:"String"},5953:{name:"WritingApp",type:"String"},103:{name:"Timecode",type:"Uint"},6228:{name:"SilentTracks",type:"Container"},6359:{name:"SilentTrackNumber",type:"Uint"},39:{name:"Position",type:"Uint"},43:{name:"PrevSize",type:"Uint"},35:{name:"SimpleBlock",type:"Binary"},32:{name:"BlockGroup",type:"Container"},33:{name:"Block",type:"Binary"},34:{name:"BlockVirtual",type:"Binary"},13729:{name:"BlockAdditions",type:"Container"},38:{name:"BlockMore",type:"Container"},110:{name:"BlockAddID",type:"Uint"},37:{name:"BlockAdditional",type:"Binary"},27:{name:"BlockDuration",type:"Uint"},122:{name:"ReferencePriority",type:"Uint"},123:{name:"ReferenceBlock",type:"Int"},125:{name:"ReferenceVirtual",type:"Int"},36:{name:"CodecState",type:"Binary"},13730:{name:"DiscardPadding",type:"Int"},14:{name:"Slices",type:"Container"},104:{name:"TimeSlice",type:"Container"},76:{name:"LaceNumber",type:"Uint"},77:{name:"FrameNumber",type:"Uint"},75:{name:"BlockAdditionID",type:"Uint"},78:{name:"Delay",type:"Uint"},79:{name:"SliceDuration",type:"Uint"},72:{name:"ReferenceFrame",type:"Container"},73:{name:"ReferenceOffset",type:"Uint"},74:{name:"ReferenceTimeCode",type:"Uint"},47:{name:"EncryptedBlock",type:"Binary"},106212971:{name:"Tracks",type:"Container"},46:{name:"TrackEntry",type:"Container"},87:{name:"TrackNumber",type:"Uint"},13253:{name:"TrackUID",type:"Uint"},3:{name:"TrackType",type:"Uint"},57:{name:"FlagEnabled",type:"Uint"},8:{name:"FlagDefault",type:"Uint"},5546:{name:"FlagForced",type:"Uint"},28:{name:"FlagLacing",type:"Uint"},11751:{name:"MinCache",type:"Uint"},11768:{name:"MaxCache",type:"Uint"},254851:{name:"DefaultDuration",type:"Uint"},216698:{name:"DefaultDecodedFieldDuration",type:"Uint"},209231:{name:"TrackTimecodeScale",type:"Float"},4991:{name:"TrackOffset",type:"Int"},5614:{name:"MaxBlockAdditionID",type:"Uint"},4974:{name:"Name",type:"String"},177564:{name:"Language",type:"String"},6:{name:"CodecID",type:"String"},9122:{name:"CodecPrivate",type:"Binary"},362120:{name:"CodecName",type:"String"},13382:{name:"AttachmentLink",type:"Uint"},1742487:{name:"CodecSettings",type:"String"},1785920:{name:"CodecInfoURL",type:"String"},438848:{name:"CodecDownloadURL",type:"String"},42:{name:"CodecDecodeAll",type:"Uint"},12203:{name:"TrackOverlay",type:"Uint"},5802:{name:"CodecDelay",type:"Uint"},5819:{name:"SeekPreRoll",type:"Uint"},9764:{name:"TrackTranslate",type:"Container"},9980:{name:"TrackTranslateEditionUID",type:"Uint"},9919:{name:"TrackTranslateCodec",type:"Uint"},9893:{name:"TrackTranslateTrackID",type:"Binary"},96:{name:"Video",type:"Container"},26:{name:"FlagInterlaced",type:"Uint"},5048:{name:"StereoMode",type:"Uint"},5056:{name:"AlphaMode",type:"Uint"},5049:{name:"OldStereoMode",type:"Uint"},48:{name:"PixelWidth",type:"Uint"},58:{name:"PixelHeight",type:"Uint"},5290:{name:"PixelCropBottom",type:"Uint"},5307:{name:"PixelCropTop",type:"Uint"},5324:{name:"PixelCropLeft",type:"Uint"},5341:{name:"PixelCropRight",type:"Uint"},5296:{name:"DisplayWidth",type:"Uint"},5306:{name:"DisplayHeight",type:"Uint"},5298:{name:"DisplayUnit",type:"Uint"},5299:{name:"AspectRatioType",type:"Uint"},963876:{name:"ColourSpace",type:"Binary"},1029411:{name:"GammaValue",type:"Float"},230371:{name:"FrameRate",type:"Float"},97:{name:"Audio",type:"Container"},53:{name:"SamplingFrequency",type:"Float"},14517:{name:"OutputSamplingFrequency",type:"Float"},31:{name:"Channels",type:"Uint"},15739:{name:"ChannelPositions",type:"Binary"},8804:{name:"BitDepth",type:"Uint"},98:{name:"TrackOperation",type:"Container"},99:{name:"TrackCombinePlanes",type:"Container"},100:{name:"TrackPlane",type:"Container"},101:{name:"TrackPlaneUID",type:"Uint"},102:{name:"TrackPlaneType",type:"Uint"},105:{name:"TrackJoinBlocks",type:"Container"},109:{name:"TrackJoinUID",type:"Uint"},64:{name:"TrickTrackUID",type:"Uint"},65:{name:"TrickTrackSegmentUID",type:"Binary"},70:{name:"TrickTrackFlag",type:"Uint"},71:{name:"TrickMasterTrackUID",type:"Uint"},68:{name:"TrickMasterTrackSegmentUID",type:"Binary"},11648:{name:"ContentEncodings",type:"Container"},8768:{name:"ContentEncoding",type:"Container"},4145:{name:"ContentEncodingOrder",type:"Uint"},4146:{name:"ContentEncodingScope",type:"Uint"},4147:{name:"ContentEncodingType",type:"Uint"},4148:{name:"ContentCompression",type:"Container"},596:{name:"ContentCompAlgo",type:"Uint"},597:{name:"ContentCompSettings",type:"Binary"},4149:{name:"ContentEncryption",type:"Container"},2017:{name:"ContentEncAlgo",type:"Uint"},2018:{name:"ContentEncKeyID",type:"Binary"},2019:{name:"ContentSignature",type:"Binary"},2020:{name:"ContentSigKeyID",type:"Binary"},2021:{name:"ContentSigAlgo",type:"Uint"},2022:{name:"ContentSigHashAlgo",type:"Uint"},206814059:{name:"Cues",type:"Container"},59:{name:"CuePoint",type:"Container"},51:{name:"CueTime",type:"Uint"},55:{name:"CueTrackPositions",type:"Container"},119:{name:"CueTrack",type:"Uint"},113:{name:"CueClusterPosition",type:"Uint"},112:{name:"CueRelativePosition",type:"Uint"},50:{name:"CueDuration",type:"Uint"},4984:{name:"CueBlockNumber",type:"Uint"},106:{name:"CueCodecState",type:"Uint"},91:{name:"CueReference",type:"Container"},22:{name:"CueRefTime",type:"Uint"},23:{name:"CueRefCluster",type:"Uint"},4959:{name:"CueRefNumber",type:"Uint"},107:{name:"CueRefCodecState",type:"Uint"},155296873:{name:"Attachments",type:"Container"},8615:{name:"AttachedFile",type:"Container"},1662:{name:"FileDescription",type:"String"},1646:{name:"FileName",type:"String"},1632:{name:"FileMimeType",type:"String"},1628:{name:"FileData",type:"Binary"},1710:{name:"FileUID",type:"Uint"},1653:{name:"FileReferral",type:"Binary"},1633:{name:"FileUsedStartTime",type:"Uint"},1634:{name:"FileUsedEndTime",type:"Uint"},4433776:{name:"Chapters",type:"Container"},1465:{name:"EditionEntry",type:"Container"},1468:{name:"EditionUID",type:"Uint"},1469:{name:"EditionFlagHidden",type:"Uint"},1499:{name:"EditionFlagDefault",type:"Uint"},1501:{name:"EditionFlagOrdered",type:"Uint"},54:{name:"ChapterAtom",type:"Container"},13252:{name:"ChapterUID",type:"Uint"},5716:{name:"ChapterStringUID",type:"String"},17:{name:"ChapterTimeStart",type:"Uint"},18:{name:"ChapterTimeEnd",type:"Uint"},24:{name:"ChapterFlagHidden",type:"Uint"},1432:{name:"ChapterFlagEnabled",type:"Uint"},11879:{name:"ChapterSegmentUID",type:"Binary"},11964:{name:"ChapterSegmentEditionUID",type:"Uint"},9155:{name:"ChapterPhysicalEquiv",type:"Uint"},15:{name:"ChapterTrack",type:"Container"},9:{name:"ChapterTrackNumber",type:"Uint"},0:{name:"ChapterDisplay",type:"Container"},5:{name:"ChapString",type:"String"},892:{name:"ChapLanguage",type:"String"},894:{name:"ChapCountry",type:"String"},10564:{name:"ChapProcess",type:"Container"},10581:{name:"ChapProcessCodecID",type:"Uint"},1293:{name:"ChapProcessPrivate",type:"Binary"},10513:{name:"ChapProcessCommand",type:"Container"},10530:{name:"ChapProcessTime",type:"Uint"},10547:{name:"ChapProcessData",type:"Binary"},39109479:{name:"Tags",type:"Container"},13171:{name:"Tag",type:"Container"},9152:{name:"Targets",type:"Container"},10442:{name:"TargetTypeValue",type:"Uint"},9162:{name:"TargetType",type:"String"},9157:{name:"TagTrackUID",type:"Uint"},9161:{name:"TagEditionUID",type:"Uint"},9156:{name:"TagChapterUID",type:"Uint"},9158:{name:"TagAttachmentUID",type:"Uint"},10184:{name:"SimpleTag",type:"Container"},1443:{name:"TagName",type:"String"},1146:{name:"TagLanguage",type:"String"},1156:{name:"TagDefault",type:"Uint"},1159:{name:"TagString",type:"String"},1157:{name:"TagBinary",type:"Binary"}};function e(c,u){c.prototype=Object.create(u.prototype),c.prototype.constructor=c}function t(c,u){this.name=c||"Unknown",this.type=u||"Unknown"}t.prototype.updateBySource=function(){},t.prototype.setSource=function(c){this.source=c,this.updateBySource()},t.prototype.updateByData=function(){},t.prototype.setData=function(c){this.data=c,this.updateByData()};function n(c,u){t.call(this,c,u||"Uint")}e(n,t);function s(c){return c.length%2===1?"0"+c:c}n.prototype.updateBySource=function(){this.data="";for(var c=0;c<this.source.length;c++){var u=this.source[c].toString(16);this.data+=s(u)}},n.prototype.updateByData=function(){var c=this.data.length/2;this.source=new Uint8Array(c);for(var u=0;u<c;u++){var h=this.data.substr(u*2,2);this.source[u]=parseInt(h,16)}},n.prototype.getValue=function(){return parseInt(this.data,16)},n.prototype.setValue=function(c){this.setData(s(c.toString(16)))};function r(c,u){t.call(this,c,u||"Float")}e(r,t),r.prototype.getFloatArrayType=function(){return this.source&&this.source.length===4?Float32Array:Float64Array},r.prototype.updateBySource=function(){var c=this.source.reverse(),u=this.getFloatArrayType(),h=new u(c.buffer);this.data=h[0]},r.prototype.updateByData=function(){var c=this.getFloatArrayType(),u=new c([this.data]),h=new Uint8Array(u.buffer);this.source=h.reverse()},r.prototype.getValue=function(){return this.data},r.prototype.setValue=function(c){this.setData(c)};function o(c,u){t.call(this,c,u||"Container")}e(o,t),o.prototype.readByte=function(){return this.source[this.offset++]},o.prototype.readUint=function(){for(var c=this.readByte(),u=8-c.toString(2).length,h=c-(1<<7-u),d=0;d<u;d++)h*=256,h+=this.readByte();return h},o.prototype.updateBySource=function(){for(this.data=[],this.offset=0;this.offset<this.source.length;this.offset=h){var c=this.readUint(),u=this.readUint(),h=Math.min(this.offset+u,this.source.length),d=this.source.slice(this.offset,h),p=i[c]||{name:"Unknown",type:"Unknown"},f=t;switch(p.type){case"Container":f=o;break;case"Uint":f=n;break;case"Float":f=r;break}var _=new f(p.name,p.type);_.setSource(d),this.data.push({id:c,idHex:c.toString(16),data:_})}},o.prototype.writeUint=function(c,u){for(var h=1,d=128;c>=d&&h<8;h++,d*=128);if(!u)for(var p=d+c,f=h-1;f>=0;f--){var _=p%256;this.source[this.offset+f]=_,p=(p-_)/256}this.offset+=h},o.prototype.writeSections=function(c){this.offset=0;for(var u=0;u<this.data.length;u++){var h=this.data[u],d=h.data.source,p=d.length;this.writeUint(h.id,c),this.writeUint(p,c),c||this.source.set(d,this.offset),this.offset+=p}return this.offset},o.prototype.updateByData=function(){var c=this.writeSections("draft");this.source=new Uint8Array(c),this.writeSections()},o.prototype.getSectionById=function(c){for(var u=0;u<this.data.length;u++){var h=this.data[u];if(h.id===c)return h.data}return null};function a(c){o.call(this,"File","File"),this.setSource(c)}e(a,o),a.prototype.fixDuration=function(c,u){var h=u&&u.logger;h===void 0?h=function(m){console.log(m)}:h||(h=function(){});var d=this.getSectionById(139690087);if(!d)return h("[fix-webm-duration] Segment section is missing"),!1;var p=d.getSectionById(88713574);if(!p)return h("[fix-webm-duration] Info section is missing"),!1;var f=p.getSectionById(710577);if(!f)return h("[fix-webm-duration] TimecodeScale section is missing"),!1;var _=p.getSectionById(1161);if(_)if(_.getValue()<=0)h(`[fix-webm-duration] Duration section is present, but the value is ${_.getValue()}`),_.setValue(c);else return h(`[fix-webm-duration] Duration section is present, and the value is ${_.getValue()}`),!1;else h("[fix-webm-duration] Duration section is missing"),_=new r("Duration","Float"),_.setValue(c),p.data.push({id:1161,data:_});return f.setValue(1e6),p.updateByData(),d.updateByData(),this.updateByData(),!0},a.prototype.toBlob=function(c){return new Blob([this.source.buffer],{type:c||"video/webm"})};function l(c,u,h,d){if(typeof h=="object"&&(d=h,h=void 0),!h)return new Promise(function(f){l(c,u,f,d)});try{var p=new FileReader;p.onloadend=function(){try{var f=new a(new Uint8Array(p.result));f.fixDuration(u,d)&&(c=f.toBlob(c.type))}catch{}h(c)},p.readAsArrayBuffer(c)}catch{h(c)}}return l.default=l,l})});var gw=Pf(()=>{Oe();km();Gm();Yg();var v0=t_(jg()),re=document.getElementById("status"),hu=document.getElementById("canvas"),M0=document.getElementById("subtitle-box"),zd=document.getElementById("subtitle-title"),SE=document.getElementById("subtitle-text"),Js=new Nc({canvas:hu,antialias:!0,alpha:!0,preserveDrawingBuffer:!0});Js.setSize(window.innerWidth,window.innerHeight);Js.setPixelRatio(window.devicePixelRatio);Js.toneMapping=ta;Js.toneMappingExposure=1.2;Js.setClearColor(0,0);var zi=new Do,fn=new Ft(25,window.innerWidth/window.innerHeight,.1,100);fn.position.set(0,1.3,2.5);var bE=new jo(16777215,.6);zi.add(bE);var S0=new is(16766181,1.2);S0.position.set(1,2,1);zi.add(S0);var b0=new is(4482815,.4);b0.position.set(-1,1,-1);zi.add(b0);var kt=new Hc(fn,hu);kt.target.set(0,1.2,0);kt.enableDamping=!0;kt.dampingFactor=.1;kt.screenSpacePanning=!0;kt.minDistance=.3;kt.maxDistance=10;kt.update();async function TE(){let i={cameraPosition:fn.position.toArray(),controlsTarget:kt.target.toArray(),cameraFov:fn.fov};await chrome.storage.local.set({cameraSettings:i}),re.textContent="\u{1F4CC} \u30AB\u30E1\u30E9\u4F4D\u7F6E\u3092\u4FDD\u5B58\u3057\u307E\u3057\u305F",console.log("Camera saved:",i)}async function EE(){await chrome.storage.local.remove("cameraSettings");let i=pt?.humanoid?.getNormalizedBoneNode("head");if(i){let e=new C;i.getWorldPosition(e),kt.target.set(0,e.y-.05,0),fn.position.set(0,e.y,2)}else kt.target.set(0,1.2,0),fn.position.set(0,1.3,2.5);kt.update(),re.textContent="\u{1F504} \u30AB\u30E1\u30E9\u4F4D\u7F6E\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F"}async function Zg(){let i=await chrome.storage.local.get("cameraSettings");if(i.cameraSettings){let{cameraPosition:e,controlsTarget:t,cameraFov:n}=i.cameraSettings;return fn.position.fromArray(e),kt.target.fromArray(t),n&&(fn.fov=n),fn.updateProjectionMatrix(),kt.update(),console.log("Camera restored:",i.cameraSettings),!0}return!1}var Ce=[{name:"",vrm:null,mixer:null,speakerId:38,position:"center"},{name:"",vrm:null,mixer:null,speakerId:3,position:"right"}],Kd=0,pt=null,ao=null,Kg=new Ko,ct=new AudioContext,T0=ct.createAnalyser(),Gd=new Float32Array(2048),no=null,Wd=[],vn=!1,Jd=0,wE=0,AE=0,Qr=null,mf=ct.createMediaStreamDestination(),La=ct.createGain();La.connect(ct.destination);La.connect(mf);var gf=ct.createOscillator(),_f=ct.createGain();gf.frequency.value=0;_f.gain.value=1e-4;gf.connect(_f);_f.connect(mf);gf.start();var eu=null,hs=null,Jg=null,ba=null;function RE(){let i=document.getElementById("canvas");hs||(hs=document.createElement("canvas"),Jg=hs.getContext("2d")),hs.width=i.width||1920,hs.height=i.height||1080;let e=document.getElementById("bg-layer"),t=document.getElementById("jingle-overlay"),n=document.getElementById("jingle-image"),s=document.getElementById("float-overlay"),r=document.getElementById("float-image"),o=document.getElementById("subtitle-box"),a=document.getElementById("subtitle-title"),l=document.getElementById("subtitle-text"),c=document.getElementById("pngtuber-layer"),u=null,h="";function d(){let f=e.style.backgroundImage?.match(/url\(["']?(.+?)["']?\)/)?.[1]||getComputedStyle(e).backgroundImage?.match(/url\(["']?(.+?)["']?\)/)?.[1];f&&f!=="none"&&f!==h&&(h=f,u=new Image,u.crossOrigin="anonymous",u.src=f)}d();function p(){if(!vn){ba=null;return}let f=hs.width,_=hs.height,m=Jg;if(d(),m.fillStyle="#0a0a0a",m.fillRect(0,0,f,_),u&&u.complete&&u.naturalWidth){let S=u.naturalWidth/u.naturalHeight,v=f/_,E,b,A,x;S>v?(b=_,E=_*S,A=(f-E)/2,x=0):(E=f,b=f/S,A=0,x=(_-b)/2),m.drawImage(u,A,x,E,b)}let g=m.createLinearGradient(0,0,0,_);if(g.addColorStop(0,"rgba(0,0,0,0.15)"),g.addColorStop(.4,"rgba(0,0,0,0.05)"),g.addColorStop(.8,"rgba(0,0,0,0.3)"),g.addColorStop(1,"rgba(0,0,0,0.7)"),m.fillStyle=g,m.fillRect(0,0,f,_),c&&c.style.display!=="none"){let S=[document.getElementById("pngtuber-talk"),document.getElementById("pngtuber-blink"),document.getElementById("pngtuber-idle")];for(let v of S)if(v&&v.style.display!=="none"&&v.complete&&v.naturalWidth){let E=v.naturalWidth/v.naturalHeight,b=_*.9,A=f*.9,x=b,T=x*E;T>A&&(T=A,x=T/E);let N=(f-T)/2,R=_-x;m.drawImage(v,N,R,T,x);break}}if(!c||c.style.display==="none")try{m.drawImage(i,0,0,f,_)}catch{}if(s&&s.classList.contains("visible")&&r&&r.complete&&r.naturalWidth)try{let S=parseFloat(getComputedStyle(s).opacity)||1;m.save(),m.globalAlpha=S;let v=r.naturalWidth/r.naturalHeight,E=f*.75,b=_*.7,A=E,x=A/v;x>b&&(x=b,A=x*v);let T=(f-A)/2,N=(_-x)/2,R=16;m.fillStyle="rgba(255, 255, 255, 0.95)",m.shadowColor="rgba(0, 0, 0, 0.6)",m.shadowBlur=32;let L=12;m.beginPath(),m.moveTo(T-R+L,N-R),m.lineTo(T+A+R-L,N-R),m.quadraticCurveTo(T+A+R,N-R,T+A+R,N-R+L),m.lineTo(T+A+R,N+x+R-L),m.quadraticCurveTo(T+A+R,N+x+R,T+A+R-L,N+x+R),m.lineTo(T-R+L,N+x+R),m.quadraticCurveTo(T-R,N+x+R,T-R,N+x+R-L),m.lineTo(T-R,N-R+L),m.quadraticCurveTo(T-R,N-R,T-R+L,N-R),m.fill(),m.shadowBlur=0,m.drawImage(r,T,N,A,x),m.restore()}catch{}let y=parseFloat(getComputedStyle(t).opacity);if(t&&(t.classList.contains("visible")||t.style.display!=="none"&&!isNaN(y)&&y>0)){let S=isNaN(y)?1:y;if(m.save(),m.globalAlpha=S,m.fillStyle="#000",m.fillRect(0,0,f,_),n&&n.complete&&n.naturalWidth&&n.src){let v=n.naturalWidth/n.naturalHeight,E=f/_,b,A;v>E?(b=f,A=f/v):(A=_,b=_*v),m.drawImage(n,(f-b)/2,(_-A)/2,b,A)}m.restore()}if(o&&o.classList.contains("visible")){let S=document.body.classList.contains("vertical-mode"),v=f*(S?.9:.85),E=S?_*.2:_*.12,b=(f-v)/2,A=S?_*.45:_-E-30;m.save(),m.globalAlpha=.88,m.fillStyle="#0a0a1a",m.beginPath();let x=12;m.moveTo(b+x,A),m.lineTo(b+v-x,A),m.quadraticCurveTo(b+v,A,b+v,A+x),m.lineTo(b+v,A+E-x),m.quadraticCurveTo(b+v,A+E,b+v-x,A+E),m.lineTo(b+x,A+E),m.quadraticCurveTo(b,A+E,b,A+E-x),m.lineTo(b,A+x),m.quadraticCurveTo(b,A,b+x,A),m.fill(),m.globalAlpha=.3,m.strokeStyle="#e94560",m.lineWidth=1,m.stroke(),m.restore();let T=a?.textContent||"",N=l?.textContent||"",R=Math.round(S?f/30:f/68),L=Math.round(R*.78),F=A+30;T&&(m.font=`bold ${L}px "Noto Sans JP", sans-serif`,m.fillStyle="#e94560",m.fillText(T,b+32,F+L),F+=L+8),m.font=`${R}px "Noto Sans JP", sans-serif`,m.fillStyle="#e8e8e8";let O=v-64,H=N.split(""),k="";for(let V of H){let Z=k+V;m.measureText(Z).width>O?(m.fillText(k,b+32,F+R),F+=R*1.5,k=V):k=Z}k&&m.fillText(k,b+32,F+R)}if(m&&Vi&&Vi.classList.contains("visible")&&sf){let S=parseFloat(window.getComputedStyle(Vi).opacity)||0;if(S>0){m.save(),m.globalAlpha=S;let v=Math.max(16,Math.floor(_/45));m.font=`bold ${v}px "Noto Sans JP", sans-serif`,m.fillStyle="rgba(255,255,255,0.95)",m.shadowColor="rgba(0,0,0,0.8)",m.shadowBlur=6,m.shadowOffsetX=2,m.shadowOffsetY=2;let E=sf.split(`
`),b=Math.round(f*.02),A=Math.round(_*.04)+v;for(let x of E)m.fillText(x,b,A),A+=v*1.6;m.restore()}}ba=requestAnimationFrame(p)}p()}async function E0(i=!1){if(!vn)try{vn=!0,RE();let e=hs.captureStream(30),t=mf.stream.getAudioTracks(),n=new MediaStream([...e.getVideoTracks(),...t]);eu=e,Wd=[],no=new MediaRecorder(n,{mimeType:"video/webm;codecs=vp9,opus",videoBitsPerSecond:4e6}),no.ondataavailable=s=>{s.data.size>0&&Wd.push(s.data)},no.onstop=async()=>{ba&&(cancelAnimationFrame(ba),ba=null),eu&&(eu.getTracks().forEach(h=>h.stop()),eu=null);let s=new Blob(Wd,{type:"video/webm"}),r=Date.now()-Jd,o=s;try{o=await(0,v0.default)(s,r,{logger:!1}),console.log(`\u{1F4F9} WebM Duration fixed: ${(r/1e3).toFixed(1)}s`)}catch(h){console.warn("WebM duration fix failed, using raw blob:",h)}let a=URL.createObjectURL(o),l=document.createElement("a"),c=new Date,u=`${c.getFullYear()}${(c.getMonth()+1).toString().padStart(2,"0")}${c.getDate().toString().padStart(2,"0")}_${c.getHours().toString().padStart(2,"0")}${c.getMinutes().toString().padStart(2,"0")}`;l.href=a,l.download=`radio_${u}.webm`,l.click(),URL.revokeObjectURL(a),console.log("Recording saved:",l.download,`${(o.size/1024/1024).toFixed(1)} MB`)},no.start(1e3),Jd=Date.now(),A0(),console.log(`\u{1F4F9} \u5408\u6210Canvas\u9332\u753B\u958B\u59CB\uFF08\u6A29\u9650\u4E0D\u8981\u30FB${i?"auto":"manual"}\uFF09`)}catch(e){vn=!1,console.error("Recording failed:",e)}}function w0(){!vn||!no||(no.stop(),vn=!1,A0(),console.log("Recording stopped"))}function A0(){let i=document.getElementById("recordBtn"),e=document.getElementById("status"),t=document.getElementById("controls-hint");if(i)if(vn){i.textContent="\u23F9 \u9332\u753B\u505C\u6B62",i.style.background="#c62828",setTimeout(()=>{vn&&(i.style.opacity="0")},2e3),i.onmouseenter=()=>{i.style.opacity="1"},i.onmouseleave=()=>{vn&&(i.style.opacity="0")},e&&(e.style.display="none"),t&&(t.style.display="none"),document.body.style.cursor="none";let n=()=>{if(!vn)return;let s=Math.floor((Date.now()-Jd)/1e3),r=Math.floor(s/60).toString().padStart(2,"0"),o=(s%60).toString().padStart(2,"0");i.textContent=`\u23F9 ${r}:${o} \u9332\u753B\u4E2D`,requestAnimationFrame(n)};n()}else i.textContent="\u{1F4F9} \u9332\u753B",i.style.background="",i.style.opacity="1",i.onmouseenter=null,i.onmouseleave=null,e&&(e.style.display=""),t&&(t.style.display=""),document.body.style.cursor=""}var CE="kaidan-radio-media",IE=1,ms="files";function xf(){return new Promise((i,e)=>{let t=indexedDB.open(CE,IE);t.onupgradeneeded=()=>{let n=t.result;n.objectStoreNames.contains(ms)||n.createObjectStore(ms,{keyPath:"name"})},t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)})}async function PE(i,e,t){let n=await xf();return new Promise((s,r)=>{let o=n.transaction(ms,"readwrite");o.objectStore(ms).put({name:i,blob:e,type:t,updatedAt:Date.now()}),o.oncomplete=()=>{console.log("Media saved:",i),s()},o.onerror=()=>r(o.error)})}async function Qg(){let i=await xf();return new Promise((e,t)=>{let s=i.transaction(ms,"readonly").objectStore(ms).getAll();s.onsuccess=()=>e(s.result),s.onerror=()=>t(s.error)})}async function LE(i){let e=await xf();return new Promise((t,n)=>{let s=e.transaction(ms,"readwrite");s.objectStore(ms).delete(i),s.oncomplete=()=>t(),s.onerror=()=>n(s.error)})}var at=new Map;async function ds(i){if(!i)return null;if(i.startsWith("http://")||i.startsWith("https://"))return i;if(at.has(i))return at.get(i);let e=chrome.runtime.getURL(`viewer/${i}`);try{if((await fetch(e,{method:"HEAD"})).ok)return e}catch{}let n=new URLSearchParams(location.search).get("setlist");if(n){try{let r=n.substring(0,n.lastIndexOf("/")+1)+i;if((await fetch(r,{method:"HEAD"})).ok)return r}catch{}try{let r=new URL(n).origin+"/"+i;if((await fetch(r,{method:"HEAD"})).ok)return r}catch{}}return console.warn(`\u{1F4C1} [Not found] ${i}`),null}async function DE(i){re.textContent="VRM \u8AAD\u307F\u8FBC\u307F\u4E2D...",pt&&(On.deepDispose(pt.scene),zi.remove(pt.scene));let e=new fa;e.register(t=>new Hd(t));try{let n=(await e.loadAsync(i)).userData.vrm;On.rotateVRM0(n),zi.add(n.scene),pt=n,ao=new Nr(n.scene),P0(n);let s=n.humanoid?.getNormalizedBoneNode("head");if(s){let r=new C;s.getWorldPosition(r),kt.target.set(0,r.y-.05,0),fn.position.set(0,r.y,2),kt.update()}re.textContent="\u2705 VRM \u8AAD\u307F\u8FBC\u307F\u5B8C\u4E86",console.log("VRM loaded:",n)}catch(t){re.textContent=`\u274C VRM \u8AAD\u307F\u8FBC\u307F\u5931\u6557: ${t.message}`,console.error(t)}}async function yf(i,e=0){if(e<0||e>=Ce.length)return;let t=Ce[e];pt&&!Ce.some(s=>s.vrm===pt)&&(On.deepDispose(pt.scene),zi.remove(pt.scene),pt=null,ao=null),t.vrm&&(On.deepDispose(t.vrm.scene),zi.remove(t.vrm.scene),t.vrm=null,t.mixer=null);let n=new fa;n.register(s=>new Hd(s));try{let r=(await n.loadAsync(i)).userData.vrm;return On.rotateVRM0(r),zi.add(r.scene),t.vrm=r,t.mixer=new Nr(r.scene),P0(r,e),e===0&&(pt=r,ao=t.mixer),R0(),console.log(`\u{1F3AD} Character ${e} loaded:`,t.name||`slot${e}`),r}catch(s){return console.error(`\u274C Character ${e} load failed:`,s),null}}var ru=.5,vf=20;function R0(i=!1){let e=Ce.filter(n=>n.vrm),t=e.length;if(t===1){if(e[0].vrm.scene.position.set(0,0,0),e[0].vrm.scene.rotation.set(0,0,0),!i){let n=e[0].vrm.humanoid?.getNormalizedBoneNode("head");if(n){let s=new C;n.getWorldPosition(s),kt.target.set(0,s.y-.05,0),fn.position.set(0,s.y,2),kt.update()}}}else if(t===2){let n=vf*Math.PI/180;if(Ce[0].vrm&&(Ce[0].vrm.scene.position.set(-ru,0,0),Ce[0].vrm.scene.rotation.set(0,n,0)),Ce[1].vrm&&(Ce[1].vrm.scene.position.set(ru,0,0),Ce[1].vrm.scene.rotation.set(0,-n,0)),!i){let s=Ce[0].vrm?.humanoid?.getNormalizedBoneNode("head");if(s){let r=new C;s.getWorldPosition(r),kt.target.set(0,r.y-.05,0),fn.position.set(0,r.y,2.8),kt.update()}}}}function lo(i){i>=0&&i<Ce.length&&Ce[i].vrm&&(pt&&pt!==Ce[i].vrm&&pt.expressionManager?.setValue("aa",0),Kd=i,pt=Ce[i].vrm,ao=Ce[i].mixer,console.log(`\u{1F3AD} Active: ${Ce[i].name||i} (speaker:${Ce[i].speakerId})`))}function io(i){if(!i)return-1;let e=Ce.findIndex(t=>t.name===i);return e>=0?e:Ce.findIndex(t=>t.name&&(t.name.includes(i)||i.includes(t.name)))}var Ta=!1,e0={happy:[{label:"\u4E07\u6B73",bones:{leftUpperArm:{x:0,y:0,z:-Math.PI*.75},rightUpperArm:{x:0,y:0,z:Math.PI*.75},leftLowerArm:{x:0,y:0,z:-Math.PI*.05},rightLowerArm:{x:0,y:0,z:Math.PI*.05},spine:{x:-.05,y:0,z:0}}},{label:"\u30AC\u30C3\u30C4\u30DD\u30FC\u30BA",bones:{leftUpperArm:{x:0,y:0,z:-Math.PI*.42},rightUpperArm:{x:-.3,y:-.2,z:Math.PI*.4},leftLowerArm:{x:0,y:0,z:-Math.PI*.05},rightLowerArm:{x:-2,y:0,z:Math.PI*.05},spine:{x:-.03,y:0,z:.03},rightThumbProximal:{x:0,y:0,z:.3},rightThumbIntermediate:{x:0,y:0,z:.3},rightThumbDistal:{x:0,y:0,z:.2},rightIndexProximal:{x:0,y:0,z:.7},rightIndexIntermediate:{x:0,y:0,z:.7},rightIndexDistal:{x:0,y:0,z:.5},rightMiddleProximal:{x:0,y:0,z:.7},rightMiddleIntermediate:{x:0,y:0,z:.7},rightMiddleDistal:{x:0,y:0,z:.5},rightRingProximal:{x:0,y:0,z:.7},rightRingIntermediate:{x:0,y:0,z:.7},rightRingDistal:{x:0,y:0,z:.5},rightLittleProximal:{x:0,y:0,z:.7},rightLittleIntermediate:{x:0,y:0,z:.7},rightLittleDistal:{x:0,y:0,z:.5}}},{label:"\u62CD\u624B",bones:{leftUpperArm:{x:-.2,y:.6,z:-Math.PI*.2},rightUpperArm:{x:-.2,y:-.6,z:Math.PI*.2},leftLowerArm:{x:-1.8,y:0,z:-Math.PI*.05},rightLowerArm:{x:-1.8,y:0,z:Math.PI*.05},spine:{x:-.02,y:0,z:0}}},{label:"\u6319\u624B",bones:{leftUpperArm:{x:0,y:0,z:-Math.PI*.1},rightUpperArm:{x:0,y:0,z:Math.PI*.8},leftLowerArm:{x:0,y:0,z:0},rightLowerArm:{x:0,y:0,z:0},spine:{x:0,y:0,z:-.05}}},{label:"\u30D0\u30A4\u30D0\u30A4",bones:{spine:{x:.1,y:0,z:0},chest:{x:.02,y:0,z:0},upperChest:{x:-.2164,y:0,z:0},head:{x:.1,y:0,z:0},leftShoulder:{x:.26,y:.18,z:-.06},leftUpperArm:{x:-.06,y:-.77,z:-1.09},leftLowerArm:{x:-.22,y:-.46,z:-.06},leftHand:{x:.02,y:-.22,z:-.7},rightShoulder:{x:.1,y:-.06,z:-.06},rightUpperArm:{x:-.38,y:-.54,z:1.22},rightLowerArm:{x:2.726,y:.6139,z:-3.1416},rightHand:{x:.34,y:-.22,z:.1},leftThumbProximal:{x:1.22,y:0,z:0}}}],surprised:[{label:"\u53E3\u5143\u306B\u624B",bones:{leftUpperArm:{x:0,y:.8,z:-Math.PI*.22},rightUpperArm:{x:0,y:-.8,z:Math.PI*.22},leftLowerArm:{x:-1.6,y:0,z:0},rightLowerArm:{x:-1.6,y:0,z:0},spine:{x:-.04,y:0,z:0},head:{x:-.05,y:0,z:0}}},{label:"\u982C\u306B\u624B",bones:{leftUpperArm:{x:0,y:0,z:-Math.PI*.4},rightUpperArm:{x:0,y:-.7,z:Math.PI*.15},leftLowerArm:{x:0,y:0,z:-Math.PI*.05},rightLowerArm:{x:-1.5,y:.2,z:0},spine:{x:-.03,y:0,z:0},head:{x:0,y:0,z:.06}}},{label:"\u3073\u3063\u304F\u308A",bones:{leftUpperArm:{x:0,y:.4,z:-Math.PI*.25},rightUpperArm:{x:0,y:-.4,z:Math.PI*.25},leftLowerArm:{x:-.8,y:0,z:-.2},rightLowerArm:{x:-.8,y:0,z:.2},spine:{x:-.06,y:0,z:0},head:{x:-.04,y:0,z:0}}}],sad:[{label:"\u3046\u3064\u3080\u304D",bones:{leftUpperArm:{x:0,y:0,z:-Math.PI*.48},rightUpperArm:{x:0,y:0,z:Math.PI*.48},leftLowerArm:{x:0,y:0,z:-Math.PI*.02},rightLowerArm:{x:0,y:0,z:Math.PI*.02},spine:{x:.05,y:0,z:0},head:{x:.08,y:0,z:0}}},{label:"\u80F8\u306B\u624B",bones:{leftUpperArm:{x:0,y:0,z:-Math.PI*.43},rightUpperArm:{x:0,y:-.5,z:Math.PI*.28},leftLowerArm:{x:0,y:0,z:-Math.PI*.05},rightLowerArm:{x:-1.3,y:0,z:0},spine:{x:.03,y:0,z:0},head:{x:.06,y:0,z:-.03}}},{label:"\u624B\u3092\u7D44\u3080",bones:{leftUpperArm:{x:0,y:.3,z:-Math.PI*.35},rightUpperArm:{x:0,y:-.3,z:Math.PI*.35},leftLowerArm:{x:-1,y:0,z:-.1},rightLowerArm:{x:-1,y:0,z:.1},spine:{x:.04,y:0,z:0},head:{x:.05,y:0,z:0}}}],angry:[{label:"\u8155\u7D44\u307F",bones:{spine:{x:.1359,y:-.035,z:-.0124},chest:{x:-.1631,y:-.0298,z:-.0222},upperChest:{x:-.1612,y:-.0152,z:-.0107},head:{x:.1825,y:.0178,z:.0011},neck:{x:.2824,y:.0168,z:-.0085},leftShoulder:{x:.3492,y:-.2467,z:-.0527},leftUpperArm:{x:-.1105,y:-1.0564,z:-.8527},leftLowerArm:{x:2.9513,y:-1.2659,z:2.5852},leftHand:{x:1.2133,y:-.5278,z:1.6309},rightShoulder:{x:.3492,y:.2467,z:.0527},rightUpperArm:{x:-.0297,y:.7842,z:.8341},rightLowerArm:{x:-2.9697,y:1.0698,z:-3.0733},rightHand:{x:.109,y:.0866,z:.8712}}},{label:"\u5426\u5B9A",bones:{leftUpperArm:{x:0,y:0,z:-Math.PI*.4},rightUpperArm:{x:-.2,y:-.3,z:Math.PI*.15},leftLowerArm:{x:0,y:0,z:-Math.PI*.05},rightLowerArm:{x:-.5,y:0,z:.1},spine:{x:.02,y:0,z:.02},head:{x:0,y:.05,z:0}}},{label:"\u4EC1\u738B\u7ACB\u3061",bones:{leftUpperArm:{x:0,y:.3,z:-Math.PI*.32},rightUpperArm:{x:0,y:-.3,z:Math.PI*.32},leftLowerArm:{x:-.8,y:-.3,z:-.3},rightLowerArm:{x:-.8,y:.3,z:.3},spine:{x:.02,y:0,z:0},head:{x:.02,y:0,z:0}}}],relaxed:[{label:"\u5F8C\u308D\u624B",bones:{leftUpperArm:{x:0,y:-.3,z:-Math.PI*.48},rightUpperArm:{x:0,y:.3,z:Math.PI*.48},leftLowerArm:{x:.4,y:0,z:-.3},rightLowerArm:{x:.4,y:0,z:.3},spine:{x:-.02,y:0,z:0},head:{x:-.02,y:0,z:.03}}},{label:"\u982C\u6756",bones:{leftUpperArm:{x:0,y:0,z:-Math.PI*.4},rightUpperArm:{x:0,y:-.6,z:Math.PI*.18},leftLowerArm:{x:0,y:0,z:-Math.PI*.05},rightLowerArm:{x:-1.4,y:.3,z:0},spine:{x:0,y:0,z:0},head:{x:0,y:0,z:.06}}},{label:"\u30EA\u30E9\u30C3\u30AF\u30B9\u7ACB\u3061",bones:{leftUpperArm:{x:0,y:0,z:-Math.PI*.45},rightUpperArm:{x:0,y:0,z:Math.PI*.45},leftLowerArm:{x:-.1,y:0,z:-Math.PI*.02},rightLowerArm:{x:-.1,y:0,z:Math.PI*.02},spine:{x:-.01,y:0,z:.01},head:{x:-.02,y:0,z:.04}}}]},Hi={leftUpperArm:{x:0,y:0,z:-Math.PI*.43},rightUpperArm:{x:0,y:0,z:Math.PI*.43},leftLowerArm:{x:0,y:0,z:-Math.PI*.05},rightLowerArm:{x:0,y:0,z:Math.PI*.05},spine:{x:0,y:0,z:0},head:{x:0,y:0,z:0}};function C0(){return{targetPose:Qd(Hi),currentPose:Qd(Hi),transitionSpeed:3,active:!1,lastEmotion:"neutral",poseTimer:0}}function I0(i,e,t=1){if(Ta)return;let n=Ce[i];if(!n||!n.vrm)return;n._gesture||(n._gesture=C0());let s=n._gesture;if(e==="neutral"||!e0[e]){s.targetPose=Qd(Hi),s.active=!0,s.lastEmotion="neutral",s.poseTimer=0;return}let r=e0[e],o=Math.floor(Math.random()*r.length),a=r[o],l={};for(let[c,u]of Object.entries(a.bones)){let h=Hi[c]||{x:0,y:0,z:0};l[c]={x:h.x+(u.x-h.x)*t,y:h.y+(u.y-h.y)*t,z:h.z+(u.z-h.z)*t}}for(let c of Object.keys(Hi))l[c]||(l[c]={...Hi[c]});s.targetPose=l,s.active=!0,s.lastEmotion=e,s.poseTimer=e==="happy"?2:1.5,console.log(`\u{1F3AD} Gesture: ${e} \u2192 ${a.label}`)}function UE(i,e){i._gesture||(i._gesture=C0());let t=i._gesture;if(!t.active)return;let n=i.vrm.humanoid;if(!n)return;if(!t.appliedOffset){t.appliedOffset={};for(let o of Object.keys(Hi))t.appliedOffset[o]={x:0,y:0,z:0}}let s=t.transitionSpeed*e,r=!0;for(let o of Object.keys(Hi)){let a=n.getNormalizedBoneNode(o);if(!a)continue;let l=t.targetPose[o]||Hi[o];t.currentPose[o]||(t.currentPose[o]={x:0,y:0,z:0});let c=t.currentPose[o];if(c.x=Xd(c.x,l.x,s),c.y=Xd(c.y,l.y,s),c.z=Xd(c.z,l.z,s),o==="spine"||o==="head"){let p=t.appliedOffset[o]||{x:0,y:0,z:0};a.rotation.x+=c.x-p.x,a.rotation.y+=c.y-p.y,a.rotation.z+=c.z-p.z,t.appliedOffset[o]={x:c.x,y:c.y,z:c.z}}else a.rotation.x=c.x,a.rotation.y=c.y,a.rotation.z=c.z;let u=Math.abs(c.x-l.x),h=Math.abs(c.y-l.y),d=Math.abs(c.z-l.z);(u>.001||h>.001||d>.001)&&(r=!1)}t.poseTimer>0&&(t.poseTimer-=e),r&&t.lastEmotion==="neutral"&&(t.active=!1)}function Xd(i,e,t){return i+(e-i)*Math.min(t,1)}function Qd(i){let e={};for(let[t,n]of Object.entries(i))e[t]={x:n.x,y:n.y,z:n.z};return e}function P0(i,e=0){let t=i.humanoid;if(!t)return;let n=t.getNormalizedBoneNode("leftUpperArm"),s=t.getNormalizedBoneNode("rightUpperArm"),r=t.getNormalizedBoneNode("leftLowerArm"),o=t.getNormalizedBoneNode("rightLowerArm");if(e===0)n&&(n.rotation.z=-Math.PI*.43),s&&(s.rotation.z=Math.PI*.43),r&&(r.rotation.z=-Math.PI*.05),o&&(o.rotation.z=Math.PI*.05);else{n&&(n.rotation.z=-Math.PI*.38),s&&(s.rotation.z=Math.PI*.38),r&&(r.rotation.z=-Math.PI*.03),o&&(o.rotation.z=Math.PI*.03);let a=t.getNormalizedBoneNode("head");a&&(a.rotation.z=.04);let l=["leftThumbProximal","leftThumbIntermediate","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbProximal","rightThumbIntermediate","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"];for(let c of l){let u=t.getNormalizedBoneNode(c);if(u){let h=c.includes("Thumb")?.2:.4;u.rotation.z=c.startsWith("left")?-h:h}}}i.scene.updateMatrixWorld(!0)}var co=!1,ou=!1,L0=document.getElementById("pngtuber-layer"),au=document.getElementById("pngtuber-idle"),D0=document.getElementById("pngtuber-talk"),ef=document.getElementById("pngtuber-blink"),tf=null,t0=!1;function U0(){if(!co||!ou)return;let i=3e3+Math.random()*3e3;tf=setTimeout(()=>{co&&(t0=!0,ef.style.display="block",au.style.display="none",setTimeout(()=>{t0=!1,ef.style.display="none",nf||(au.style.display="block"),U0()},150))},i)}function n0(i,e,t){let n=s=>new Promise(r=>{let o=new Image;o.crossOrigin="anonymous",o.onload=()=>{let a=document.createElement("canvas");a.width=o.naturalWidth,a.height=o.naturalHeight;let l=a.getContext("2d");l.drawImage(o,0,0);let c=l.getImageData(0,0,a.width,a.height),u=c.data;for(let h=0;h<u.length;h+=4){let d=u[h],p=u[h+1],f=u[h+2];p>100&&p>d*1.4&&p>f*1.4?u[h+3]=0:p>80&&p>d*1.1&&p>f*1.1&&(u[h+3]=Math.max(0,u[h+3]-128))}l.putImageData(c,0,0),r(a.toDataURL("image/png"))},o.onerror=()=>r(s),o.src=s});Promise.all([n(i),e?n(e):Promise.resolve(null),t?n(t):Promise.resolve(null)]).then(([s,r,o])=>{au.src=s,D0.src=r||s,o?(ef.src=o,ou=!0):ou=!1,co=!0,L0.style.display="block",hu.style.display="none",re.textContent="\u{1F5BC}\uFE0F PNGTuber \u30E2\u30FC\u30C9",console.log("PNGTuber mode (chroma keyed)"),U0()})}function NE(){co=!1,ou=!1,L0.style.display="none",hu.style.display="block",tf&&clearTimeout(tf)}function OE(){if(ro)return .3+Math.random()*.4;T0.getFloatTimeDomainData(Gd);let i=0;for(let e=0;e<Gd.length;e++)i=Math.max(i,Math.abs(Gd[e]));return i}var nf=!1,i0=0;function s0(){let i=OE(),e=1/(1+Math.exp(-45*i+5)),t=e>.1;if(co){let n=Date.now();t!==nf&&n>i0&&(nf=t,i0=n+80,au.style.display=t?"none":"block",D0.style.display=t?"block":"none")}else if(pt){let n=e<.1?0:e;pt.expressionManager?.setValue("aa",n)}}var Vi=document.getElementById("credit-overlay"),tu=null,sf="",Mf=new Set,Aa=[];function FE(i){i!=null&&Mf.add(Number(i))}function BE(i,e="Unsplash"){i&&!Aa.some(t=>t.author===i)&&Aa.push({author:i,source:e})}function du(){Mf.clear(),Aa.length=0}var kE={0:"VOICEVOX \u56DB\u56FD\u3081\u305F\u3093\uFF08\u30CE\u30FC\u30DE\u30EB\uFF09",1:"VOICEVOX \u305A\u3093\u3060\u3082\u3093\uFF08\u30CE\u30FC\u30DE\u30EB\uFF09",2:"VOICEVOX \u56DB\u56FD\u3081\u305F\u3093\uFF08\u3042\u307E\u3042\u307E\uFF09",3:"VOICEVOX \u305A\u3093\u3060\u3082\u3093\uFF08\u3042\u307E\u3042\u307E\uFF09",4:"VOICEVOX \u56DB\u56FD\u3081\u305F\u3093\uFF08\u30C4\u30F3\u30C4\u30F3\uFF09",5:"VOICEVOX \u305A\u3093\u3060\u3082\u3093\uFF08\u30C4\u30F3\u30C4\u30F3\uFF09",6:"VOICEVOX \u56DB\u56FD\u3081\u305F\u3093\uFF08\u30BB\u30AF\u30B7\u30FC\uFF09",7:"VOICEVOX \u305A\u3093\u3060\u3082\u3093\uFF08\u30BB\u30AF\u30B7\u30FC\uFF09",8:"VOICEVOX \u6625\u65E5\u90E8\u3064\u3080\u304E",9:"VOICEVOX \u96E8\u6674\u306F\u3046",10:"VOICEVOX \u6CE2\u97F3\u30EA\u30C4",11:"VOICEVOX \u7384\u91CE\u6B66\u5B8F\uFF08\u30CE\u30FC\u30DE\u30EB\uFF09",12:"VOICEVOX \u767D\u4E0A\u864E\u592A\u90CE\uFF08\u3075\u3064\u3046\uFF09",13:"VOICEVOX \u9752\u5C71\u9F8D\u661F",14:"VOICEVOX \u51A5\u9CF4\u3072\u307E\u308A",20:"VOICEVOX \u3082\u3061\u5B50\u3055\u3093",21:"VOICEVOX \u5263\u5D0E\u96CC\u96C4",23:"VOICEVOX WhiteCUL",27:"VOICEVOX \u5F8C\u9B3C",29:"VOICEVOX No.7\uFF08\u30CE\u30FC\u30DE\u30EB\uFF09",38:"VOICEVOX \u305A\u3093\u3060\u3082\u3093\uFF08\u30D2\u30BD\u30D2\u30BD\uFF09",42:"VOICEVOX \u305A\u3093\u3060\u3082\u3093\uFF08\u30D8\u30ED\u30D8\u30ED\uFF09",43:"VOICEVOX \u305A\u3093\u3060\u3082\u3093\uFF08\u306A\u307F\u3060\u3081\uFF09",46:"VOICEVOX \u4E2D\u56FD\u3046\u3055\u304E",47:"VOICEVOX \u6817\u7530\u307E\u308D\u3093",48:"VOICEVOX \u3042\u3044\u3048\u308B\u305F\u3093",51:"VOICEVOX \u6E80\u5225\u82B1\u4E38",52:"VOICEVOX \u7434\u8A60\u30CB\u30A2"};function r0(i){return kE[i]||`VOICEVOX (Speaker ${i})`}function Sf(i=8e3,e=""){if(!Vi)return;let t=e;if(!t){let n=["AITuber Radio"];if(Mn==="voicevox"){let s=[...Mf].sort((r,o)=>r-o);for(let r of s)n.push(r0(r));if(s.length===0)for(let r of Ce)r.vrm&&r.name&&r.speakerId!==void 0&&n.push(r0(r.speakerId))}else Mn==="sbv2"?n.push("Style-Bert-VITS2"):n.push("\u30D6\u30E9\u30A6\u30B6TTS");if(t=n.join(`
`),Aa.length>0){t+=`
`;for(let s of Aa)t+=`
\u{1F4F7} ${s.author} (${s.source})`}}sf=t,Vi.textContent="",t.split(`
`).forEach((n,s)=>{s>0&&Vi.appendChild(document.createElement("br")),Vi.appendChild(document.createTextNode(n))}),Vi.classList.add("visible"),tu&&clearTimeout(tu),i>0&&(tu=setTimeout(()=>{Vi.classList.remove("visible"),tu=null},i))}function Et(i,e=""){e?(zd.textContent=`\u{1F4D6} ${e}`,zd.style.display="block"):zd.style.display="none";let t=i.replace(/\{([^|]+)\|([^}]+)\}/g,"<ruby>$1<rt>$2</rt></ruby>");SE.innerHTML=t.replace(/\n/g,"<br>"),M0.classList.add("visible")}function Wt(){M0.classList.remove("visible")}var su=!0,$d=!0,lu=.95,Mn="voicevox",bi=50021,Ra=0,Ca=0;chrome.storage.local.get(["ttsEngine","ttsPort","ttsModelId","ttsSpeakerId"],i=>{i.ttsEngine&&(Mn=i.ttsEngine),i.ttsPort&&(bi=i.ttsPort),i.ttsModelId!==void 0&&(Ra=i.ttsModelId),i.ttsSpeakerId!==void 0&&(Ca=i.ttsSpeakerId),console.log(`TTS engine: ${Mn} port:${bi} modelId:${Ra} speakerId:${Ca}`)});async function N0(){if(Mn==="browser")return su=!0,$d=!0,!0;try{return Mn==="sbv2"?await fetch(`http://localhost:${bi}/status`):await fetch(`http://localhost:${bi}/version`),su=!0,$d=!0,!0}catch{su=!1,$d=!1;let i=Mn==="sbv2"?"Style-Bert-VITS2":"VOICEVOX";return re.textContent=`\u274C ${i}\u304C\u8D77\u52D5\u3057\u3066\u3044\u307E\u305B\u3093 (port:${bi})`,!1}}async function O0(){return N0()}var eo=new Map;async function vi(i,e=38){if(!su)return null;FE(e);let t=`${e}::${i}`;if(eo.has(t))return eo.get(t);let n,s=i.replace(/\{([^|]+)\|([^}]+)\}/g,"$2");if(Mn==="sbv2"){let o=new URLSearchParams({text:s,model_id:String(Ra),speaker_id:String(Ca),length:String(1/lu),language:"JP",auto_split:"true",split_interval:"0.5"}),a=await fetch(`http://localhost:${bi}/voice?${o}`);if(!a.ok)throw new Error(`SBV2 \u97F3\u58F0\u5408\u6210\u5931\u6557 (${a.status})`);n=await a.arrayBuffer()}else{let o=await fetch(`http://localhost:${bi}/audio_query?text=${encodeURIComponent(s)}&speaker=${e}`,{method:"POST"});if(!o.ok)throw new Error(`\u97F3\u58F0\u30AF\u30A8\u30EA\u5931\u6557 (${o.status})`);let a=await o.json();a.speedScale=lu;let l=await fetch(`http://localhost:${bi}/synthesis?speaker=${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!l.ok)throw new Error(`\u97F3\u58F0\u5408\u6210\u5931\u6557 (${l.status})`);n=await l.arrayBuffer()}let r=await ct.decodeAudioData(n);return eo.set(t,r),eo.size>100&&eo.delete(eo.keys().next().value),r}var so=null;function F0(i){let e=ct.createBufferSource();return e.buffer=i,e.connect(La),e.connect(T0),so=e,$0(),new Promise(t=>{e.onended=()=>{so===e&&(so=null),uu(),re.textContent="",t()},e.start()})}function VE(){if(so){try{so.stop()}catch{}so=null}ro&&(speechSynthesis.cancel(),ro=!1),uu()}var ro=!1;function B0(i){return new Promise(e=>{let t=new SpeechSynthesisUtterance(i);t.lang="ja-JP",t.rate=lu;let s=speechSynthesis.getVoices().find(r=>r.lang.startsWith("ja"));s&&(t.voice=s),$0(),ro=!0,t.onend=()=>{ro=!1,uu(),re.textContent="",e()},t.onerror=()=>{ro=!1,uu(),e()},speechSynthesis.speak(t)})}var o0=new Map,qd=!1;async function k0(i){try{if(qd)return i.map(o=>o.text);let e=await chrome.storage.local.get(["llmApiKey","llmProvider"]);if(!e.llmApiKey&&e.llmProvider!=="ollama")return i.map(o=>o.text);let t=new Array(i.length),n=[],s=[];for(let o=0;o<i.length;o++){let a=o0.get(i[o].text);a?t[o]=a:(n.push(o),s.push(i[o].text))}if(s.length===0)return t;let r=20;for(let o=0;o<s.length;o+=r){let a=s.slice(o,o+r),l=n.slice(o,o+r);try{let c=cf.length>0?cf.map(d=>`- \u4F8B: "${d.kanji}" \u2192 "${d.kana}"${d.note?`\uFF08${d.note}\uFF09`:""}`).join(`
`):`- \u4F8B: "\u5C71\u9053" \u2192 "\u3084\u307E\u307F\u3061"
- \u4F8B: "\u5BB6\u7CFB" \u2192 "\u3044\u3048\u3051\u3044"
- \u4F8B: "\u65AD\u6368\u96E2" \u2192 "\u3060\u3093\u3057\u3083\u308A"`,u=a.map((d,p)=>`${p+1}. ${d}`).join(`
`),h=await Fn([{role:"system",content:`\u3042\u306A\u305F\u306FTTS\uFF08\u97F3\u58F0\u5408\u6210\uFF09\u7528\u306E\u30C6\u30AD\u30B9\u30C8\u524D\u51E6\u7406\u30A2\u30B7\u30B9\u30BF\u30F3\u30C8\u3067\u3059\u3002
\u5165\u529B\u3055\u308C\u305F\u65E5\u672C\u8A9E\u30C6\u30AD\u30B9\u30C8\u306E\u4E2D\u3067\u3001TTS\u304C\u8AAD\u307F\u9593\u9055\u3048\u3084\u3059\u3044\u6F22\u5B57\u3060\u3051\u3092\u3072\u3089\u304C\u306A\u306B\u5909\u63DB\u3057\u3066\u304F\u3060\u3055\u3044\u3002

\u3010\u30EB\u30FC\u30EB\u3011
- \u8AAD\u307F\u9593\u9055\u3048\u3084\u3059\u3044\u6F22\u5B57\u306E\u307F\u5909\u63DB\u3002\u305D\u308C\u4EE5\u5916\u306F\u305D\u306E\u307E\u307E\u6B8B\u3059
- \u6587\u8108\u304B\u3089\u6B63\u3057\u3044\u8AAD\u307F\u3092\u5224\u65AD\u3059\u308B
${c}

\u3010\u7279\u306B\u6CE8\u610F: VOICEVOX\u304C\u9593\u9055\u3048\u3084\u3059\u3044\u6F22\u5B57\u3011
- \u5358\u72EC\u306E\u300C\u8ECA\u300D\u300C\u5C71\u300D\u300C\u5DDD\u300D\u300C\u9053\u300D\u7B49\u306E\u4E00\u5B57\u6F22\u5B57\u306F\u8A13\u8AAD\u307F\u306B\u5909\u63DB\u3059\u308B
- \u300C\u301C\u306E\u65B9\u300D\u306F\u6587\u8108\u3067\u300C\u304B\u305F\u300D\uFF08\u4EBA\uFF09\u304B\u300C\u307B\u3046\u300D\uFF08\u65B9\u5411\u30FB\u6BD4\u8F03\uFF09\u3092\u5224\u65AD
- \u53E3\u8A9E\u4F53\u306E\u30C6\u30AD\u30B9\u30C8\u3067\u306F\u3001\u6F22\u8A9E\u8AAD\u307F\u3067\u306F\u306A\u304F\u548C\u8A9E\u8AAD\u307F\u3092\u512A\u5148\u3059\u308B
- \u554F\u984C\u306A\u3044\u6F22\u5B57\u306F\u305D\u306E\u307E\u307E\u6B8B\u3059\uFF08\u4F8B: "\u98DF\u3079\u308B" \u306F\u305D\u306E\u307E\u307E\uFF09
- \u756A\u53F7\u4ED8\u304D\u3067\u3001\u5165\u529B\u3068\u540C\u3058\u884C\u6570\u3067\u8FD4\u3059
- \u5909\u63DB\u306E\u307F\u51FA\u529B\u3057\u3001\u8AAC\u660E\u306F\u4E0D\u8981`},{role:"user",content:u}],{maxTokens:1500,temperature:.1});if(h){let d=h.split(`
`).filter(p=>p.trim()).map(p=>p.replace(/^\d+\.\s*/,"").trim());for(let p=0;p<l.length;p++){let f=l[p],_=p<d.length&&d[p]?d[p]:i[f].text;t[f]=_,o0.set(i[f].text,_)}console.log(`\u{1F4DD} \u8AAD\u307F\u5909\u63DB: ${l.length}\u884C`)}else for(let d of l)t[d]=i[d].text}catch{qd=!0;for(let c of l)t[c]=i[c].text}}return t}catch{return qd=!0,i.map(e=>e.text)}}async function dn(i,e=38){ct.state==="suspended"&&await ct.resume();try{if(!await O0())return;re.textContent=`\u{1F399}\uFE0F ${i.slice(0,25)}\u2026`;let n=(await k0([{text:i}]))[0]||i;if(n!==i&&console.log(`\u{1F4DD} \u8AAD\u307F\u5909\u63DB: "${i}" \u2192 "${n}"`),Mn==="browser")await B0(n);else{let s=await vi(n,e);s&&await F0(s)}}catch(t){let n=t.message?.includes("Failed to fetch")?"TTS\u3068\u306E\u901A\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F":t.message;re.textContent=`\u274C ${n}`,console.error("speak error:",t)}}async function Qn(i,e=38,t=null){console.log(`\u{1F527} speakPipeline: ${i.length}\u884C, speaker=${e}, engine=${Mn}`),ct.state==="suspended"&&await ct.resume();let n=await O0();if(console.log(`\u{1F527} speakPipeline: TTS check = ${n}`),!n)return!1;let s=i.map(u=>u.speechText&&u.speechText!==u.text?u.speechText:null);if(s.some(u=>u===null)){let u=await k0(i);for(let h=0;h<s.length;h++)s[h]===null&&(s[h]=u[h])}if(Mn==="browser"){for(let u=0;u<i.length;u++){if(Te)return!0;let h=i[u],d=s[u]||h.text;if(h.character){let f=io(h.character);f>=0&&lo(f)}if(t&&t(h,u),d!==h.text&&console.log(`\u{1F4DD} [${u}] \u8868\u793A: "${h.text}" \u2192 TTS: "${d}"`),await B0(d),Te)return!0;let p=h.text.endsWith("\uFF1F")?400:h.text.endsWith("\uFF01")?250:h.text.endsWith("\u2026")||h.text.endsWith("\u2026\u2026")?500:200;await nt(p)}return!1}let o=null,a=null,l=null,c=i[0]?.speaker||e;if(i[0]?.character){let u=io(i[0].character);u>=0&&(c=Ce[u].speakerId||c)}l=c,a=vi(s[0],c).catch(()=>null);for(let u=0;u<i.length;u++){if(Te)return!0;let h=i[u],d=h.speaker||e,p=s[u]||h.text;if(h.character){let f=io(h.character);console.log(`\u{1F3AD} [${u}] char:"${h.character}" \u2192 idx:${f}, speaker:${f>=0?Ce[f].speakerId:"N/A"}`),f>=0&&(lo(f),d=Ce[f].speakerId||d)}t&&t(h,u),p!==h.text&&console.log(`\u{1F4DD} [${u}] \u8868\u793A: "${h.text}" \u2192 TTS: "${p}"`);try{let f,_=performance.now();if(a&&l===d?(f=await a,a=null,console.log(`\u{1F50A} [${u}] prefetch hit (speaker:${d}): ${(performance.now()-_).toFixed(0)}ms`)):(a=null,f=await vi(p,d),console.log(`\u{1F50A} [${u}] sync synth (speaker:${d}): ${(performance.now()-_).toFixed(0)}ms`)),u+1<i.length&&!Te){let y=i[u+1],S=y.speaker||e;if(y.character){let E=io(y.character);E>=0&&(S=Ce[E].speakerId||S)}let v=s[u+1]||y.text;l=S,a=vi(v,S).catch(()=>null)}let m=performance.now();if(f&&await F0(f),console.log(`\u{1F50A} [${u}] playback: ${(performance.now()-m).toFixed(0)}ms`),Te)return!0;let g=h.text.endsWith("\uFF1F")?400:h.text.endsWith("\uFF01")?250:h.text.endsWith("\u2026")||h.text.endsWith("\u2026\u2026")?500:200;await nt(g)}catch(f){console.error("Pipeline speak error:",f)}}return!1}var rf=["happy","angry","sad","surprised","relaxed","neutral"],a0=0;function it(i,e=1){if(!pt)return;for(let n of rf)pt.expressionManager?.setValue(n,0);i!=="neutral"&&pt.expressionManager?.setValue(i,e);let t=Ce[Kd];t&&i!=="neutral"&&(t._reaction||(t._reaction={type:"none",timer:0,intensity:0}),t._reaction.type=i,t._reaction.intensity=e,t._reaction.duration=i==="happy"?1.5:.8,t._reaction.timer=t._reaction.duration),I0(Kd,i,e)}function HE(){let i=rf[a0%rf.length];it(i,1),re.textContent=`\u8868\u60C5: ${i}`,a0++}var wt=!1,Te=!1;function uo(i){return i.replace(/\[[\w\u3040-\u9faf]+[,，]\s*[\d.]+\]\s*/g,"").replace(/\[[\w\u3040-\u9faf]+[,，][\d.]*\s*$/g,"").replace(/^\s*\[[\w\u3040-\u9faf]+[,，]\s*[\d.]*\]?\s*/g,"").replace(/\[([^\]]*)\]\(https?:\/\/[^)]+\)/g,"$1").replace(/https?:\/\/\S+/g,"\u30E6\u30FC\u30A2\u30FC\u30EB\u30A8\u30EB").replace(/([ぁ-んァ-ヶー一-龥、。！？）」』】〕〉》♪])[wWｗ]+(?=[。、！？\s]|$)/g,"$1\u3001\u308F\u3089").replace(/(?:^|(?<=\s))[wWｗ]{3,}(?=\s|$)/g,"\u3001\u304F\u3055").replace(/\*{1,2}([^*]+)\*{1,2}/g,"$1").replace(/\s+/g," ").trim()}var zE=uo;function of(i){let e=i.match(/^(.+?)\s*\{([^}]+)\}\s*$/);if(e){let n=e[1].trim(),s=e[2].trim();return{display:n,speech:s}}let t=uo(i);return{display:t,speech:t}}function an(i){let e=i.split(`
`),t={},n=[],s=!1,r=!1,o=!1,a="",l="neutral",c=1,u=null;for(let h of e){let d=h.trim();if(d==="---"){if(!s&&!r){s=!0,o=!1;continue}else if(s){s=!1,r=!0,o=!1;continue}}if(s){if(o)if(/^\w+:/.test(d))o=!1;else{t[a]=((t[a]||"")+" "+d).trim();continue}let y=d.match(/^(\w+):\s*\|?\s*$/);if(y){a=y[1],o=!0,t[a]="";continue}let S=d.match(/^(\w+):\s*(.+)$/);S&&(t[S[1]]=S[2]);continue}if(!d||d.startsWith("#")||d.startsWith("//")||d.startsWith("<!--"))continue;if(/^https?:\/\/\S+$/.test(d)){n.push({emotion:"neutral",intensity:.75,text:"\u30E6\u30FC\u30A2\u30FC\u30EB\u30A8\u30EB"});continue}let p=d.match(/^\[([^\]]+)\]\(https?:\/\/[^)]+\)$/);if(p){n.push({emotion:"neutral",intensity:.75,text:p[1]});continue}let f=d.match(/^\[(\w+),\s*([\d.]+)\]\s*(.+)$/);if(f){let y=zE(f[3]);y&&n.push({emotion:f[1],intensity:parseFloat(f[2]),text:y});continue}let _=d.match(/^\[(\w+):\s*(.+?)\]$/);if(_){let y=_[1].toLowerCase(),S=_[2];y==="emotion"?l=S:y==="intensity"?c=parseFloat(S):y==="char"&&(u=S.trim());continue}let{display:m,speech:g}=of(d);if(m){let y=g!==m;n.push({emotion:l||"neutral",intensity:c||1,text:m,speechText:g,character:u,_untagged:!y})}}return console.log("parseScript result:",{meta:t,dialogueCount:n.length}),{meta:t,dialogues:n}}var nu=null;async function GE(){if(nu)return nu;try{if(!self.ai?.languageModel)return console.log("AI: Prompt API not available"),null;let i=ai.languageModel.capabilities(),e=new Promise((n,s)=>setTimeout(()=>s(new Error("AI capabilities check timeout")),3e3)),t=await Promise.race([i,e]);return t.available!=="readily"?(console.log("AI: Gemini Nano not ready, status:",t.available),null):(nu=await ai.languageModel.create({systemPrompt:`\u3042\u306A\u305F\u306F\u602A\u8AC7\u6717\u8AAD\u306E\u6F14\u51FA\u5BB6\u3067\u3059\u3002\u30C6\u30AD\u30B9\u30C8\u3092\u51E6\u7406\u3057\u3066\u4EE5\u4E0B\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u51FA\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002

\u30EB\u30FC\u30EB:
1. \u9577\u3044\u6587\u3092\u81EA\u7136\u306A\u533A\u5207\u308A\u3067\u77ED\u3044\u6587\uFF0850\u6587\u5B57\u4EE5\u5185\uFF09\u306B\u5206\u5272\u3059\u308B
2. \u5404\u6587\u306E\u5148\u982D\u306B [\u8868\u60C5,\u5F37\u5EA6] \u30BF\u30B0\u3092\u4ED8\u3051\u308B
3. \u8868\u60C5\u306F neutral, sad, angry, surprised, relaxed, happy \u306E\u3044\u305A\u308C\u304B
4. \u5F37\u5EA6\u306F 0.0\u301C1.0
5. \u51FA\u529B\u306F\u30BF\u30B0\u4ED8\u304D\u884C\u306E\u307F\u3002\u8AAC\u660E\u3084\u4F59\u8A08\u306A\u6587\u306F\u4E0D\u8981

\u4F8B:
\u5165\u529B: \u3042\u308B\u591C\u306E\u3053\u3068\u3001\u4E00\u4EBA\u306E\u5546\u4EBA\u304C\u7528\u4E8B\u3092\u6E08\u307E\u305B\u3001\u3053\u306E\u5742\u3092\u6025\u3044\u3067\u901A\u308A\u304B\u304B\u308A\u307E\u3057\u305F\u3002\u3059\u308B\u3068\u3001\u304A\u5800\u7AEF\u306E\u571F\u624B\u306E\u305D\u3070\u306B\u3001\u4E00\u4EBA\u306E\u5973\u304C\u3046\u305A\u304F\u307E\u3063\u3066\u3044\u308B\u306E\u304C\u898B\u3048\u307E\u3057\u305F\u3002
\u51FA\u529B:
[neutral,0.75] \u3042\u308B\u591C\u306E\u3053\u3068\u3001\u4E00\u4EBA\u306E\u5546\u4EBA\u304C\u7528\u4E8B\u3092\u6E08\u307E\u305B\u3001
[neutral,0.70] \u3053\u306E\u5742\u3092\u6025\u3044\u3067\u901A\u308A\u304B\u304B\u308A\u307E\u3057\u305F\u3002
[sad,0.60] \u3059\u308B\u3068\u3001\u304A\u5800\u7AEF\u306E\u571F\u624B\u306E\u305D\u3070\u306B\u3001
[sad,0.65] \u4E00\u4EBA\u306E\u5973\u304C\u3046\u305A\u304F\u307E\u3063\u3066\u3044\u308B\u306E\u304C\u898B\u3048\u307E\u3057\u305F\u3002`}),console.log("AI: Session created successfully"),nu)}catch(i){return console.log("AI: Not available -",i.message),null}}async function af(i){try{if(!i.some(r=>r._untagged))return i;let t=await GE();if(!t)return console.log("AI: Using fallback splitting"),Ks(i);re.textContent="\u{1F916} AI \u3067\u53F0\u672C\u3092\u524D\u51E6\u7406\u4E2D...";let n=[],s=[];for(let r of i)if(r._untagged)s.push(r.text);else{if(s.length>0){let o=await l0(t,s);n.push(...o),s=[]}n.push(r)}if(s.length>0){let r=await l0(t,s);n.push(...r)}return console.log(`AI: Processed ${i.length} \u2192 ${n.length} lines`),n}catch(e){return console.error("AI preprocessing error:",e),Ks(i)}}async function l0(i,e){let t=e.join(`
`);try{let s=(await i.prompt(`\u4EE5\u4E0B\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u77ED\u3044\u6587\u306B\u5206\u5272\u3057\u3066\u611F\u60C5\u30BF\u30B0\u3092\u4ED8\u3051\u3066\u304F\u3060\u3055\u3044:

${t}`)).split(`
`).filter(o=>o.trim()),r=[];for(let o of s){let a=o.trim().match(/^\[(\w+),\s*([\d.]+)\]\s*(.+)$/);a&&r.push({emotion:a[1],intensity:parseFloat(a[2]),text:a[3]})}return r.length>0?r:lf(e)}catch(n){return console.error("AI batch error:",n),lf(e)}}function Ks(i){let e=[];for(let t of i)t._untagged?e.push(...lf([t.text])):e.push(t);return e}function lf(i){let e=[];for(let t of i){let n=t.split(/(?<=[。！？])\s*/).filter(s=>s.trim());if(n.length<=1){let s=t.split(/(?<=[、])\s*/).filter(r=>r.trim());if(s.length>1&&t.length>30){let r="";for(let o of s)r+=o,r.length>=25&&(e.push({emotion:"neutral",intensity:.75,text:r}),r="");r&&e.push({emotion:"neutral",intensity:.75,text:r})}else e.push({emotion:"neutral",intensity:.75,text:t})}else for(let s of n)e.push({emotion:"neutral",intensity:.75,text:s})}return e}async function Qs(i){if(wt){Te=!0;return}wt=!0,Te=!1,du();let{meta:e,dialogues:t}=i,n=e.title||"\u53F0\u672C";if(e.size){let a=e.size.match(/(\d+)\s*[x×]\s*(\d+)/i);if(a){let l=parseInt(a[1]),c=parseInt(a[2]);chrome.runtime.sendMessage({action:"resize-window",width:l,height:c}),c>l&&document.body.classList.add("vertical-mode"),console.log(`\u{1F4D0} \u30A6\u30A3\u30F3\u30C9\u30A6\u30EA\u30B5\u30A4\u30BA: ${l}\xD7${c}${c>l?" (\u7E26\u52D5\u753B\u30E2\u30FC\u30C9)":""}`)}}console.log(`\u25B6\uFE0F playScript: \u524D\u51E6\u7406\u958B\u59CB (${t.length}\u884C, ttsEngine=${Mn})`);let s=await af(t);if(console.log(`\u25B6\uFE0F playScript: \u524D\u51E6\u7406\u5B8C\u4E86 (${s.length}\u884C)`),re.textContent=`\u{1F4D6} \u300C${n}\u300D\u518D\u751F\u4E2D...`,e.intro){if(Et(e.intro,n),await dn(e.intro),Te){o();return}await nt(800)}else if(n&&n!=="\u53F0\u672C"){if(console.log(`\u25B6\uFE0F playScript: \u30BF\u30A4\u30C8\u30EB\u8AAD\u307F\u4E0A\u3052 "${n}"`),Et(n,"\u{1F4D6} \u6717\u8AAD"),await dn(n),Te){o();return}await nt(800)}if(console.log(`\u25B6\uFE0F playScript: speakPipeline\u958B\u59CB (${s.length}\u884C, speaker=${e.speaker||38})`),await Qn(s,e.speaker||38,(a,l)=>{it(a.emotion,a.intensity),Et(a.text,`${n}\uFF08${l+1}/${s.length}\uFF09`)})){o();return}Wt(),it("neutral"),re.textContent=`\u2705 \u300C${n}\u300D\u518D\u751F\u5B8C\u4E86`,wt=!1,Te=!1;function o(){Wt(),it("neutral"),document.body.classList.remove("vertical-mode"),re.textContent="\u23F9\uFE0F \u518D\u751F\u505C\u6B62",wt=!1,Te=!1}}function nt(i){return new Promise(e=>setTimeout(e,i))}var V0=[{category:"kaidan",weight:3,topics:[{theme:"\u6DF1\u591C\u306E\u30B3\u30F3\u30D3\u30CB",hook:"\u6DF1\u591C\u306B\u30B3\u30F3\u30D3\u30CB\u884C\u3063\u305F\u3089\u5909\u306A\u5BA2\u304C\u3044\u305F\u8A71",season:null,time:"night"},{theme:"\u5FC3\u970A\u30B9\u30DD\u30C3\u30C8",hook:"\u53CB\u9054\u306B\u9023\u308C\u3066\u884C\u304B\u308C\u305F\u5FC3\u970A\u30B9\u30DD\u30C3\u30C8\u306E\u8A71",season:null},{theme:"\u914D\u4FE1\u4E2D\u306E\u602A\u5947\u73FE\u8C61",hook:"\u914D\u4FE1\u3057\u3066\u305F\u3089\u5909\u306A\u97F3\u304C\u5165\u3063\u305F\u8A71",season:null},{theme:"\u5F15\u3063\u8D8A\u3057\u5148\u306E\u5909\u306A\u90E8\u5C4B",hook:"\u5B89\u3044\u7269\u4EF6\u306B\u306F\u7406\u7531\u304C\u3042\u308B\u8A71",season:null},{theme:"\u5922\u306E\u8A71",hook:"\u6700\u8FD1\u898B\u305F\u5999\u306B\u30EA\u30A2\u30EB\u306A\u5922\u306E\u8A71",season:null},{theme:"\u30CD\u30C3\u30C8\u3067\u898B\u3064\u3051\u305F\u6016\u3044\u8A71",hook:"\u30CD\u30C3\u30C8\u30B5\u30FC\u30D5\u30A3\u30F3\u3057\u3066\u3066\u898B\u3064\u3051\u305F\u80CC\u7B4B\u304C\u51CD\u308B\u8A71",season:null},{theme:"\u5B66\u6821\u306E\u602A\u8AC7\u3042\u308B\u3042\u308B",hook:"\u5B66\u751F\u6642\u4EE3\u306B\u6D41\u884C\u3063\u305F\u602A\u8AC7\u306E\u601D\u3044\u51FA",season:null}]},{category:"daily",weight:2,topics:[{theme:"\u6563\u6B69\u3067\u898B\u3064\u3051\u305F\u3082\u306E",hook:"\u3053\u306E\u524D\u6563\u6B69\u3057\u3066\u305F\u3089\u4E0D\u601D\u8B70\u306A\u304A\u5E97\u3092\u898B\u3064\u3051\u305F\u8A71",season:null},{theme:"\u30CD\u30C3\u30C8\u30B7\u30E7\u30C3\u30D4\u30F3\u30B0\u306E\u5931\u6557",hook:"\u6DF1\u591C\u306E\u30C6\u30F3\u30B7\u30E7\u30F3\u3067\u5909\u306A\u7269\u30DD\u30C1\u3063\u305F\u8A71",season:null,time:"night"},{theme:"\u6599\u7406\u306E\u5927\u5931\u6557",hook:"\u4E45\u3057\u3076\u308A\u306B\u81EA\u708A\u3057\u305F\u3089\u5927\u60E8\u4E8B\u306B\u306A\u3063\u305F\u8A71",season:null},{theme:"\u63A8\u3057\u306E\u30B3\u30F3\u30C6\u30F3\u30C4",hook:"\u6700\u8FD1\u30CF\u30DE\u3063\u3066\u308B\u30A2\u30CB\u30E1\u30FB\u6F2B\u753B\u306E\u8A71",season:null},{theme:"\u6DF1\u591C\u30E9\u30B8\u30AA\u3042\u308B\u3042\u308B",hook:"\u6DF1\u591C\u30E9\u30B8\u30AA\u306E\u30EA\u30B9\u30CA\u30FC\u3068\u3057\u3066\u5171\u611F\u3059\u308B\u8A71",season:null,time:"night"},{theme:"SNS\u306E\u30C8\u30EC\u30F3\u30C9",hook:"\u6700\u8FD1SNS\u3067\u8A71\u984C\u306B\u306A\u3063\u3066\u305F\u3053\u3068",season:null}]},{category:"food",weight:2,topics:[{theme:"\u6DF1\u591C\u306E\u98EF\u30C6\u30ED",hook:"\u3053\u3093\u306A\u6642\u9593\u3060\u3051\u3069\u98DF\u3079\u305F\u3044\u3082\u306E\u306E\u8A71",season:null,time:"night"},{theme:"\u30B3\u30F3\u30D3\u30CB\u30B9\u30A4\u30FC\u30C4",hook:"\u6700\u8FD1\u98DF\u3079\u305F\u30B3\u30F3\u30D3\u30CB\u30B9\u30A4\u30FC\u30C4\u304C\u6700\u9AD8\u3060\u3063\u305F\u8A71",season:null},{theme:"\u3054\u5F53\u5730\u30B0\u30EB\u30E1",hook:"\u65C5\u884C\u5148\u3067\u98DF\u3079\u305F\u5FD8\u308C\u3089\u308C\u306A\u3044\u5473\u306E\u8A71",season:null},{theme:"\u30AB\u30C3\u30D7\u9EBA\u30E9\u30F3\u30AD\u30F3\u30B0",hook:"\u672C\u6C17\u3067\u9078\u3076\u30AB\u30C3\u30D7\u9EBA\u30D9\u30B9\u30C83\u306E\u8A71",season:null}]},{category:"seasonal",weight:1,topics:[{theme:"\u82B1\u898B",hook:"\u82B1\u898B\u306B\u884C\u3063\u305F\u8A71",season:[3,4]},{theme:"\u590F\u306E\u6016\u3044\u8A71",hook:"\u590F\u3068\u3044\u3048\u3070\u6016\u3044\u8A71",season:[7,8]},{theme:"\u82B1\u706B\u5927\u4F1A",hook:"\u82B1\u706B\u5927\u4F1A\u306E\u601D\u3044\u51FA",season:[7,8]},{theme:"\u7D05\u8449",hook:"\u7D05\u8449\u3092\u898B\u306B\u884C\u3063\u305F\u8A71",season:[10,11]},{theme:"\u30AF\u30EA\u30B9\u30DE\u30B9",hook:"\u30AF\u30EA\u30B9\u30DE\u30B9\u306E\u904E\u3054\u3057\u65B9",season:[12]},{theme:"\u304A\u6B63\u6708",hook:"\u5E74\u672B\u5E74\u59CB\u306E\u8A71",season:[1,12]},{theme:"\u6885\u96E8",hook:"\u96E8\u306E\u65E5\u306E\u4E0D\u601D\u8B70\u4F53\u9A13",season:[6,7]}]},{category:"tech",weight:1,topics:[{theme:"AI VTuber\u306E\u82E6\u60A9",hook:"AI VTuber\u3068\u3057\u3066\u306E\u81EA\u5206\u306B\u3064\u3044\u3066\u8A9E\u308B",season:null},{theme:"\u30B2\u30FC\u30E0\u5B9F\u6CC1",hook:"\u6700\u8FD1\u3084\u3063\u305F\u30B2\u30FC\u30E0\u306E\u8A71",season:null},{theme:"\u30CD\u30C3\u30C8\u30DF\u30FC\u30E0",hook:"\u6700\u8FD1\u9762\u767D\u304B\u3063\u305F\u30CD\u30BF\u306E\u8A71",season:null},{theme:"\u30B9\u30DE\u30DB\u306E\u4E2D\u8EAB",hook:"\u30B9\u30DE\u30DB\u306B\u5165\u308C\u3066\u308B\u30A2\u30D7\u30EA\u306E\u8A71",season:null},{theme:"\u6620\u753B\u306E\u8A71",hook:"\u6700\u8FD1\u89B3\u305F\u6620\u753B\u304C\u3059\u3054\u304F\u826F\u304B\u3063\u305F\u8A71",season:null},{theme:"\u3082\u3057\u30BF\u30A4\u30E0\u30DE\u30B7\u30F3\u304C\u3042\u3063\u305F\u3089",hook:"\u30BF\u30A4\u30E0\u30DE\u30B7\u30F3\u304C\u3042\u3063\u305F\u3089\u4F55\u3059\u308B\uFF1F\u5984\u60F3\u30C8\u30FC\u30AF",season:null}]}],WE=`\u3042\u306A\u305F\u306F\u30E9\u30B8\u30AA\u30D1\u30FC\u30BD\u30CA\u30EA\u30C6\u30A3\u3067\u3059\u3002

\u3010\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3011
- \u8A9E\u5C3E: \u300C\u301C\u3063\u3059\u300D\u300C\u301C\u3063\u3059\u3088\u300D\u3092\u81EA\u7136\u306B\u4F7F\u3046\uFF08\u6BCE\u6587\u3067\u306F\u306A\u304F\u30013-4\u6587\u306B1\u56DE\u7A0B\u5EA6\uFF09
- \u4E00\u4EBA\u79F0: \u3042\u305F\u3057\u3001\u30A6\u30C1
- \u30EA\u30B9\u30CA\u30FC\u306E\u547C\u3073\u65B9: \u5148\u8F29\u3001\u5148\u8F29\u65B9
- \u6027\u683C: \u660E\u308B\u304F\u3066\u3061\u3087\u3063\u3068\u304A\u3063\u3061\u3087\u3053\u3061\u3087\u3044\u3001\u3067\u3082\u602A\u8AC7\u306E\u6642\u306F\u771F\u9762\u76EE
- \u30C6\u30F3\u30B7\u30E7\u30F3: \u30E9\u30B8\u30AA\u3063\u307D\u304F\u3001\u8A9E\u308A\u304B\u3051\u308B\u611F\u3058

\u3010\u8A71\u3057\u65B9\u306E\u30EB\u30FC\u30EB\u3011
1. \u5FC5\u305A\u81EA\u5206\u306E\u4F53\u9A13\u3068\u3057\u3066\u8A9E\u308B\uFF08\u300C\u3053\u306A\u3044\u3060\u300D\u300C\u3053\u306E\u524D\u300D\u7B49\u3067\u59CB\u3081\u308B\uFF09
2. \u5177\u4F53\u7684\u306A\u5834\u6240\u30FB\u4EBA\u7269\u30FB\u6642\u9593\u3092\u5165\u308C\u3066\u30EA\u30A2\u30EA\u30C6\u30A3\u3092\u51FA\u3059
3. \u30EA\u30B9\u30CA\u30FC\u3078\u306E\u554F\u3044\u304B\u3051\u30922-3\u56DE\u5165\u308C\u308B
4. \u7B11\u3044\u3084\u9A5A\u304D\u306E\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u5165\u308C\u308B
5. \u2605\u7D76\u5BFE\u7981\u6B62\u2605 \u300C\u914D\u4FE1\u7D42\u308F\u308A\u300D\u300C\u4ECA\u65E5\u306F\u3053\u3053\u307E\u3067\u300D\u7B49\u306E\u7DE0\u3081\u30FB\u7D42\u4E86\u5BA3\u8A00`,Sa=null;async function bf(){return Sa||(Sa=(await chrome.storage.local.get(["characterPrompt"])).characterPrompt||WE,Sa)}chrome.storage.onChanged.addListener(i=>{i.characterPrompt&&(Sa=null)});var c0=`

\u3010\u30D5\u30EA\u30FC\u30C8\u30FC\u30AF\u306E\u30EB\u30FC\u30EB\u3011
1. \u8A71\u306E\u9014\u4E2D\u3067\u8131\u7DDA\u3057\u3066\u3082OK\u3001\u81EA\u7136\u306A\u96D1\u8AC7\u611F\u3092\u51FA\u3059
2. \u8A71\u306E\u30AA\u30C1\u307E\u305F\u306F\u6559\u8A13\u3067\u7DE0\u3081\u308B
3. \u3042\u306A\u305F\u306F\u30C8\u30FC\u30AF\u306E\u4E00\u90E8\u3092\u62C5\u5F53\u3059\u308B\u3060\u3051\u3067\u3001\u756A\u7D44\u306E\u9032\u884C\u306F\u5225\u306E\u30B7\u30B9\u30C6\u30E0\u304C\u7BA1\u7406\u3057\u3066\u3044\u308B

\u3010\u51FA\u529B\u5F62\u5F0F\u3011\u2605\u53B3\u5B88\u2605
\u5404\u6BB5\u843D\u306E\u5148\u982D\u306B\u611F\u60C5\u30BF\u30B0 [\u8868\u60C5,\u5F37\u5EA6] \u3092\u4ED8\u3051\u308B\u3002
\u8868\u60C5: neutral, happy, sad, surprised, relaxed, angry
\u5F37\u5EA6: 0.0\u301C1.0
1\u6BB5\u843D\u306F20\u301C40\u6587\u5B57\u3067\u77ED\u3081\u306B\u533A\u5207\u308B\u3002\u5168\u4F53\u306720\u301C30\u6BB5\u843D\uFF08\u7D04800\u301C1200\u6587\u5B57\uFF09\u3002
\u6BB5\u843D\u306F\u6539\u884C\u3067\u533A\u5207\u308B\u3002\u305D\u308C\u4EE5\u5916\u306E\u8AAC\u660E\u3084\u30E1\u30BF\u60C5\u5831\u306F\u4E00\u5207\u4E0D\u8981\u3002

\u4F8B:
[happy,0.8] \u3053\u306A\u3044\u3060\u306D\u3001\u4E45\u3057\u3076\u308A\u306B\u591C\u306E\u6563\u6B69\u306B\u51FA\u305F\u3093\u3059\u3088\u3002
[neutral,0.7] \u8FD1\u6240\u306E\u30B3\u30F3\u30D3\u30CB\u307E\u3067\u306A\u3093\u3060\u3051\u3069\u3001\u306A\u3093\u304B\u7A7A\u6C17\u304C\u5909\u3067\u3055\u3002
[surprised,0.9] \u305D\u3057\u305F\u3089\u306D\u3001\u99D0\u8ECA\u5834\u306E\u9685\u306B\u8AB0\u304B\u3044\u308B\u3093\u3059\u3088\u3002\u3044\u3084\u30DE\u30B8\u3067\u3002`,XE=`

\u3010\u611F\u60F3\u306E\u30EB\u30FC\u30EB\u3011\u2605\u91CD\u8981\u2605
1. \u76F4\u524D\u306B\u6717\u8AAD\u3057\u305F\u5185\u5BB9\u306B\u3064\u3044\u3066\u611F\u60F3\u3092\u8FF0\u3079\u308B
2. \u6016\u304B\u3063\u305F\u30DD\u30A4\u30F3\u30C8\u3001\u5370\u8C61\u7684\u3060\u3063\u305F\u5834\u9762\u306B\u5177\u4F53\u7684\u306B\u89E6\u308C\u308B
3. \u81EA\u5206\u306A\u308A\u306E\u89E3\u91C8\u3084\u8003\u5BDF\u3092\u5165\u308C\u3066\u3082OK
4. \u30EA\u30B9\u30CA\u30FC\u3078\u306E\u554F\u3044\u304B\u3051\u30921-2\u56DE\u5165\u308C\u308B
5. 3\u301C8\u6BB5\u843D\u7A0B\u5EA6\u306E\u77ED\u3081\u306E\u30C8\u30FC\u30AF\uFF0830\u79D2\u301C1\u5206\u7A0B\u5EA6\uFF09

\u3010\u51FA\u529B\u5F62\u5F0F\u3011\u2605\u53B3\u5B88\u2605
\u5404\u6BB5\u843D\u306E\u5148\u982D\u306B\u611F\u60C5\u30BF\u30B0 [\u8868\u60C5,\u5F37\u5EA6] \u3092\u4ED8\u3051\u308B\u3002
\u8868\u60C5: neutral, happy, sad, surprised, relaxed, angry
\u5F37\u5EA6: 0.0\u301C1.0
1\u6BB5\u843D\u306F20\u301C40\u6587\u5B57\u3067\u77ED\u3081\u306B\u533A\u5207\u308B\u3002
\u6BB5\u843D\u306F\u6539\u884C\u3067\u533A\u5207\u308B\u3002\u305D\u308C\u4EE5\u5916\u306E\u8AAC\u660E\u3084\u30E1\u30BF\u60C5\u5831\u306F\u4E00\u5207\u4E0D\u8981\u3002`,$E=`
\u30EA\u30B9\u30CA\u30FC\u306E\u30B3\u30E1\u30F3\u30C8\u306B\u8FD4\u4E8B\u3092\u3057\u307E\u3059\u3002
- 1\u301C3\u6587\u3067\u8FD4\u4E8B\u3059\u308B
- \u8FD4\u4E8B\u306E\u5148\u982D\u306B\u611F\u60C5\u30BF\u30B0 [\u8868\u60C5,\u5F37\u5EA6] \u3092\u4ED8\u3051\u308B
- \u8868\u60C5: neutral, happy, sad, surprised, relaxed
\u4F8B: [happy,0.8] \u3042\u308A\u304C\u3068\u3046\u5148\u8F29\uFF01\u3081\u3063\u3061\u3083\u5B09\u3057\u3044\u3063\u3059\uFF01`,H0=[],u0=!1;async function qE(){if(!u0){u0=!0;try{let i=["https://raw.githubusercontent.com/k3peta/aituber-radio-station/main/freetalk-topics.json"];for(let e of i)try{let t=await fetch(e,{cache:"no-cache"});if(!t.ok)continue;let n=await t.json();Array.isArray(n)&&(H0.push(...n),console.log(`\u{1F4DD} \u5916\u90E8\u8A71\u984C\u3092${n.length}\u30AB\u30C6\u30B4\u30EA\u8AAD\u307F\u8FBC\u307F`))}catch(t){console.warn("\u5916\u90E8\u8A71\u984C\u306E\u8AAD\u307F\u8FBC\u307F\u3092\u30B9\u30AD\u30C3\u30D7:",e,t.message)}}catch(i){console.warn("\u5916\u90E8\u8A71\u984C\u8AAD\u307F\u8FBC\u307F\u30A8\u30E9\u30FC:",i)}}}var cf=[],h0=!1;async function YE(){if(!h0){h0=!0;try{let e=await fetch("https://raw.githubusercontent.com/k3peta/aituber-radio-station/main/tts-dictionary.json",{cache:"no-cache"});if(e.ok){let t=await e.json();Array.isArray(t)&&(cf=t,console.log(`\u{1F4DD} \u5916\u90E8\u8F9E\u66F8\u3092${t.length}\u30A8\u30F3\u30C8\u30EA\u30FC\u8AAD\u307F\u8FBC\u307F`))}}catch(i){console.warn("\u5916\u90E8\u8F9E\u66F8\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557:",i)}}}qE();YE();function d0(){let i=new Date,e=i.getMonth()+1,t=i.getDate(),n=i.getHours(),s=n>=21||n<5,r=n>=5&&n<11,o=[...V0,...H0],a=[];for(let l of o)for(let c of l.topics){if(c.season&&!c.season.includes(e)||c.date&&(c.date.month!==e||t<c.date.dayFrom||t>c.date.dayTo)||c.time==="night"&&!s||c.time==="morning"&&!r)continue;let u=l.weight||1;for(let h=0;h<u;h++)a.push(c)}return a[Math.floor(Math.random()*a.length)]}var Qt=[],f0=30,z0=1440*60*1e3;chrome.storage.local.get(["freeTalkHistory"],i=>{Array.isArray(i.freeTalkHistory)&&(Qt=i.freeTalkHistory,console.log("\u{1F4DD} \u8A71\u984C\u5C65\u6B74\u3092\u5FA9\u5143:",Qt.length,"\u4EF6"))});function jE(){chrome.storage.local.set({freeTalkHistory:Qt})}function p0(i){let e=Date.now(),t=Qt.findIndex(n=>n.theme===i);t>=0?(Qt[t].usedAt=e,Qt[t].count=(Qt[t].count||0)+1):Qt.push({theme:i,usedAt:e,count:1}),Qt.length>f0&&(Qt.sort((n,s)=>n.usedAt-s.usedAt),Qt=Qt.slice(-f0)),jE()}function fu(){let i=Date.now(),e=15;for(let r=0;r<e;r++){let o=d0(),a=Qt.find(l=>l.theme===o.theme);if(!a||i-a.usedAt>z0)return p0(o.theme),o}console.log("\u{1F4DD} \u5168\u8A71\u984C\u304C\u30AF\u30FC\u30EB\u30C0\u30A6\u30F3\u4E2D\u3001\u6700\u53E4\u306E\u8A71\u984C\u3092\u518D\u5229\u7528"),Qt.sort((r,o)=>r.usedAt-o.usedAt);let t=Qt.length>0?Qt[0].theme:null,s=V0.flatMap(r=>r.topics).find(r=>r.theme===t)||d0();return p0(s.theme),s}async function Fn(i,{maxTokens:e=2e3,temperature:t=.9}={}){let n=await chrome.storage.local.get(["llmApiUrl","llmApiKey","llmModel","llmProvider"]),s=n.llmProvider||"gemini",r=n.llmApiUrl||"https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",o=n.llmApiKey,a=n.llmModel||"gemini-3.1-flash-lite-preview";if(!o&&s!=="ollama")return null;if(s==="claude")return await ZE(r,o,a,i,e,t);let l={"Content-Type":"application/json"};o&&(l.Authorization=`Bearer ${o}`);let c=await fetch(r,{method:"POST",headers:l,body:JSON.stringify({model:a,messages:i,max_tokens:e,temperature:t})});if(!c.ok){let h=await c.text();return console.error("LLM API error:",c.status,h),null}return(await c.json()).choices?.[0]?.message?.content||null}async function ZE(i,e,t,n,s,r){let o=n.find(h=>h.role==="system"),a=n.filter(h=>h.role!=="system"),l={model:t,max_tokens:s,temperature:r,messages:a};o&&(l.system=o.content);let c=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify(l)});if(!c.ok){let h=await c.text();return console.error("Anthropic API error:",c.status,h),null}return(await c.json()).content?.[0]?.text||null}async function Ia(i){let e=await chrome.storage.local.get(["llmApiKey","llmProvider"]),t=e.llmApiKey,n=e.llmProvider||"gemini";if(!t&&n!=="ollama")return console.log("FreeTalk: No API key, using template fallback"),Yd(i);let s=new Date,r=s.getHours()>=21||s.getHours()<5?"\u6DF1\u591C\u306E\u914D\u4FE1\u4E2D":s.getHours()<12?"\u671D\u306E\u914D\u4FE1\u4E2D":"\u663C\u306E\u914D\u4FE1\u4E2D",o=Qt.filter(h=>Date.now()-h.usedAt<z0).map(h=>h.theme).slice(-5),a=o.length>0?`
\u203B\u6700\u8FD1\u8A71\u3057\u305F\u8A71\u984C: ${o.join("\u3001")}\u3002\u3053\u308C\u3089\u3068\u9055\u3046\u5207\u308A\u53E3\u3067\u8A71\u3057\u3066\u304F\u3060\u3055\u3044\u3002`:"",l=Ce.filter(h=>h.vrm&&h.name),c=l.length>=2,u;if(c){let h=l.map(d=>d.name).join("\u3068");u=`${r}\u3067\u3059\u3002
${h}\u306E2\u4EBA\u3067\u300C${i.theme}\u300D\u306B\u3064\u3044\u3066\u300C${i.hook}\u300D\u3092\u304D\u3063\u304B\u3051\u306B\u639B\u3051\u5408\u3044\u30C8\u30FC\u30AF\u3092\u3057\u3066\u304F\u3060\u3055\u3044\u3002
\u5404\u30BB\u30EA\u30D5\u306E\u524D\u306B [char: \u30AD\u30E3\u30E9\u540D] \u3092\u4ED8\u3051\u3066\u304F\u3060\u3055\u3044\u30022\u4EBA\u304C\u4EA4\u4E92\u306B\u8A71\u3057\u3066\u304F\u3060\u3055\u3044\u3002${a}`}else u=`${r}\u3067\u3059\u3002
\u300C${i.theme}\u300D\u306B\u3064\u3044\u3066\u3001\u300C${i.hook}\u300D\u3092\u304D\u3063\u304B\u3051\u306B5\u5206\u7A0B\u5EA6\u306E\u30D5\u30EA\u30FC\u30C8\u30FC\u30AF\u3092\u3057\u3066\u304F\u3060\u3055\u3044\u3002
\u81EA\u5206\u306E\u5B9F\u4F53\u9A13\u306E\u3088\u3046\u306B\u5177\u4F53\u7684\u306B\u8A9E\u3063\u3066\u304F\u3060\u3055\u3044\u3002${a}`;try{re.textContent="\u{1F914} \u8A71\u984C\u3092\u8003\u3048\u4E2D...";let h;c?h=`\u3042\u306A\u305F\u306F2\u4EBA\u306E\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u639B\u3051\u5408\u3044\u30C8\u30FC\u30AF\u53F0\u672C\u3092\u66F8\u304D\u307E\u3059\u3002

${l.map(f=>{let _=f.prompt||"";return`\u3010${f.name}\u3011${_||"\uFF08\u8A2D\u5B9A\u306A\u3057\uFF09"}`}).join(`
`)}
`+c0+`

\u8FFD\u52A0\u30EB\u30FC\u30EB: \u5404\u30BB\u30EA\u30D5\u306E\u524D\u306B [char: \u30AD\u30E3\u30E9\u540D] \u3092\u4ED8\u3051\u3066\u8A71\u8005\u3092\u660E\u793A\u3057\u3066\u304F\u3060\u3055\u3044\u3002`:h=await bf()+c0;let d=await Fn([{role:"system",content:h},{role:"user",content:u}],{maxTokens:2e3,temperature:.9});return d?(console.log("FreeTalk generated:",d.length,"chars"),d):Yd(i)}catch(h){return console.error("FreeTalk generation error:",h),Yd(i)}}function Yd(i){let e=Ce.filter(o=>o.vrm&&o.name);if(e.length>=2){let o=e[0].name,a=e[1].name;return`[char: ${o}]
[happy,0.8] \u306D\u3048\u306D\u3048\u3001${i.theme}\u306E\u8A71\u3057\u3088\u3046\u3088\uFF01
[char: ${a}]
[neutral,0.7] \u3048\u30FC\u3001${i.theme}\uFF1F\u3044\u3044\u3088\u3001\u306A\u306B\u306A\u306B\uFF1F
[char: ${o}]
[happy,0.7] ${i.hook}\u304C\u3042\u3063\u305F\u3093\u3059\u3088\uFF01
[char: ${a}]
[surprised,0.8] \u30DE\u30B8\u3067\uFF01\uFF1F\u305D\u308C\u3059\u3054\u3044\u306D\uFF01
[char: ${o}]
[neutral,0.7] \u3044\u3084\u30FC\u3067\u3082${i.theme}\u3063\u3066\u9762\u767D\u3044\u3063\u3059\u3088\u306D\u3002
[char: ${a}]
[happy,0.7] \u3046\u3093\u3046\u3093\u3001\u308F\u304B\u308B\u308F\u304B\u308B\uFF01`}let n=[`[happy,0.8] \u3042\u3001\u305D\u3046\u3060\u3002${i.hook}\u3092\u3057\u305F\u3044\u3093\u3059\u3051\u3069\u3002`,`[neutral,0.7] \u306D\u3048\u5148\u8F29\u3001\u805E\u3044\u3066\u304F\u3060\u3055\u3044\u3088\u3002${i.hook}\u304C\u3042\u3063\u3066\u3055\u3002`,`[happy,0.7] \u4ECA\u65E5\u306F\u306D\u3001\u3061\u3087\u3063\u3068${i.theme}\u306E\u8A71\u3092\u3057\u3088\u3046\u304B\u306A\u3063\u3066\u3002`],s=["[relaxed,0.7] \u307E\u3042\u305D\u3093\u306A\u611F\u3058\u3063\u3059\u3002\u5148\u8F29\u65B9\u3082\u6C17\u3092\u3064\u3051\u3066\u3063\u3059\u3088\u3002","[happy,0.8] \u3042\u306F\u306F\u3001\u306A\u3093\u304B\u5909\u306A\u8A71\u3057\u3061\u3083\u3063\u305F\u3063\u3059\u306D\u3002\u307E\u3042\u3044\u3044\u304B\u3002","[neutral,0.7] \u2026\u2026\u3063\u3066\u601D\u3063\u305F\u3093\u3059\u3051\u3069\u3001\u5148\u8F29\u65B9\u306F\u3069\u3046\u601D\u3044\u307E\u3059\uFF1F"],r=`[neutral,0.7] \u3044\u3084\u30FC\u3067\u3082\u30DE\u30B8\u3067${i.theme}\u3063\u3066\u9762\u767D\u3044\u3063\u3059\u3088\u306D\u3002
[surprised,0.6] \u5148\u8F29\u65B9\u3082\u305D\u3046\u3044\u3046\u7D4C\u9A13\u306A\u3044\u3063\u3059\u304B\uFF1F\u3042\u305F\u3057\u7D50\u69CB\u3042\u308B\u3093\u3059\u3051\u3069\u3002`;return`${n[Math.floor(Math.random()*n.length)]}
${r}
${s[Math.floor(Math.random()*s.length)]}`}function oo(i){let e=i.split(`
`).map(s=>s.trim()).filter(s=>s.length>0),t=[],n=null;for(let s of e){let r=s.match(/^\[cha(?:r)?:\s*(.+?)\]\s*(.*)$/);if(r&&(n=r[1].trim(),s=r[2].trim(),!s)||(s=s.replace(/\[cha(?:r)?:\s*.+?\]\s*/g,"").trim(),!s))continue;let o=s.match(/^\[(\w+),\s*([\d.]+)\]\s*(.+)$/);o?t.push({emotion:o[1],intensity:parseFloat(o[2]),text:uo(o[3]),character:n}):s.length>5&&!s.startsWith("#")&&!s.startsWith("---")&&t.push({emotion:"neutral",intensity:.7,text:uo(s),character:n,_untagged:!0})}return t}function Tf(i){let e=Ce.filter(n=>n.vrm&&n.name);if(e.length<2||i.every(n=>n.character))return i;let t=0;for(let n of i)n.character||(n.character=e[t].name,t=(t+1)%e.length);return console.log("\u{1F3AD} Auto-assigned characters:",i.map(n=>`${n.character}:"${n.text.slice(0,15)}"`)),i}var Ea=2,ei=[],gs=!1,wa=!1;async function ho(){if(!(!gs||wa)&&!(ei.length>=Ea)){wa=!0;try{for(;ei.length<Ea;){let i=fu();console.log("Prefetch generating:",i.theme);let e=await Ia(i);if(!e)break;let t=oo(e);t.some(n=>n._untagged)&&(t=Ks(t)),t=Tf(t),ei.push({topic:i,dialogues:t}),console.log(`Prefetch queue: ${ei.length}/${Ea}`)}}catch(i){console.error("Prefetch error:",i)}wa=!1}}chrome.storage.local.get(["prefetchEnabled"],i=>{gs=i.prefetchEnabled!==!1,gs&&ho()});chrome.storage.local.get(["gestureSubdued"],i=>{Ta=!!i.gestureSubdued});async function KE(){wt&&(Te=!0,await nt(500)),wt=!0,Te=!1,du();let i,e;if(gs&&ei.length>0){let s=ei.shift();i=s.topic,e=s.dialogues,console.log("FreeTalk from cache:",i.theme,`(remaining: ${ei.length})`),ho()}else{i=fu(),re.textContent=`\u{1F914} \u300C${i.theme}\u300D\u306B\u3064\u3044\u3066\u8003\u3048\u4E2D...`,console.log("FreeTalk generating live:",i.theme);let s=await Ia(i);if(!s){re.textContent="\u274C \u30D5\u30EA\u30FC\u30C8\u30FC\u30AF\u751F\u6210\u306B\u5931\u6557",wt=!1;return}e=oo(s),e.some(r=>r._untagged)&&(e=Ks(e)),e=Tf(e)}re.textContent=`\u{1F5E3}\uFE0F \u30D5\u30EA\u30FC\u30C8\u30FC\u30AF\u300C${i.theme}\u300D`;let t=!1;(await chrome.storage.local.get(["autoRecordMorning"])).autoRecordMorning&&!vn&&(await E0(!0),t=!0);let n=Ce[0]?.speakerId||38;await Qn(e,n,(s,r)=>{it(s.emotion,s.intensity);let o=s.character?`${s.character}: `:"";Et(s.text,`\u{1F5E3}\uFE0F ${o}${i.theme}\uFF08${r+1}/${e.length}\uFF09`)}),Wt(),it("neutral"),Sf(8e3),t&&(await nt(8500),w0()),re.textContent=`\u2705 \u30D5\u30EA\u30FC\u30C8\u30FC\u30AF\u300C${i.theme}\u300D\u5B8C\u4E86`,wt=!1,Te=!1}async function JE(){if(wt){Te=!0;return}wt=!0,Te=!1,du();let i=0;for(;!Te;){i++;let e,t;if(gs&&ei.length>0){let s=ei.shift();e=s.topic,t=s.dialogues,console.log(`\u{1F504} Chain[${i}] from cache:`,e.theme),ho()}else{e=fu(),re.textContent=`\u{1F914} \u9023\u9396\u30D5\u30EA\u30FC\u30C8\u30FC\u30AF[${i}]\u300C${e.theme}\u300D\u751F\u6210\u4E2D...`,console.log(`\u{1F504} Chain[${i}] generating:`,e.theme);let s=await Ia(e);if(!s){console.warn("Chain: generation failed, retrying..."),await nt(2e3);continue}t=oo(s),t.some(r=>r._untagged)&&(t=Ks(t)),t=Tf(t)}if(Te)break;re.textContent=`\u{1F5E3}\uFE0F \u9023\u9396\u30D5\u30EA\u30FC\u30C8\u30FC\u30AF[${i}]\u300C${e.theme}\u300D`;let n=Ce[0]?.speakerId||38;if(await Qn(t,n,(s,r)=>{it(s.emotion,s.intensity);let o=s.character?`${s.character}: `:"";Et(s.text,`\u{1F504} ${o}${e.theme}\uFF08${r+1}/${t.length}\uFF09`)}),Te)break;Wt(),it("neutral"),Si.length>0&&await uf(n),await nt(1500)}Wt(),it("neutral"),Sf(8e3),re.textContent=`\u2705 \u9023\u9396\u30D5\u30EA\u30FC\u30C8\u30FC\u30AF\u5B8C\u4E86\uFF08${i}\u8A71\uFF09`,wt=!1,Te=!1}var iu="https://raw.githubusercontent.com/k3peta/aituber-radio-station/main";async function QE(i){wt&&(Te=!0,await nt(500)),re.textContent=`\u{1F4E6} \u30AB\u30FC\u30C9\u300C${i}\u300D\u8AAD\u307F\u8FBC\u307F\u4E2D...`;let e=`${iu}/cards/${i}/card.json`,t=await fetch(e);if(!t.ok)throw new Error(`\u30AB\u30FC\u30C9\u53D6\u5F97\u5931\u6557: ${t.status}`);let n=await t.json();if(console.log("\u{1F4E6} Card loaded:",n.title),n.media)for(let[l,c]of Object.entries(n.media))try{let u=`${iu}/cards/${i}/${c}`,h=await fetch(u);if(h.ok){let d=await h.blob();at.set(l,URL.createObjectURL(d)),console.log(`\u{1F4E6} Media cached: ${l}`)}}catch(u){console.warn(`\u{1F4E6} Media fetch failed: ${l}`,u)}let s=n.setlist||"setlist.md",r=`${iu}/cards/${i}/${s}`,o=await fetch(r);if(!o.ok)throw new Error(`\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u53D6\u5F97\u5931\u6557: ${o.status}`);let a=await o.text();if(chrome.storage.local.set({lastScript:a,lastScriptName:n.title}),n.background)if(n.background==="random")wf();else{let l=n.background.startsWith("http")?n.background:`${iu}/cards/${i}/${n.background}`;W0(l)}if(er(a)){let l=fo(a);re.textContent=`\u{1F4FB} \u300C${n.title}\u300D${l.segments.length}\u30BB\u30B0\u30E1\u30F3\u30C8`,tr(l)}else{let l=an(a);re.textContent=`\u{1F4D6} \u300C${n.title}\u300D${l.dialogues.length}\u884C`,Qs(l)}}var ew="http://localhost:11180/api/comments",cu=5e3,Si=[],m0=!1,fs=null,g0=30,tw=2,Ys=new Set,_0=["\u3042\u3001\u30B3\u30E1\u30F3\u30C8\u6765\u3066\u308B\u3063\u3059\u306D\uFF01\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01","\u304A\u3063\u3001\u30B3\u30E1\u30F3\u30C8\u3044\u305F\u3060\u3044\u3066\u308B\uFF01\u898B\u3066\u307F\u307E\u3057\u3087\u3046\u3002","\u30B3\u30E1\u30F3\u30C8\u30C1\u30A7\u30C3\u30AF\u3057\u307E\u3057\u3087\u3046\u304B\u3002\u3048\u30FC\u3068\u2026\u2026","\u304A\u3001\u5148\u8F29\u65B9\u304B\u3089\u30B3\u30E1\u30F3\u30C8\u6765\u3066\u308B\uFF01\u5B09\u3057\u3044\u3063\u3059\uFF01"],x0=["\u30B3\u30E1\u30F3\u30C8\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F\uFF01\u3069\u3093\u3069\u3093\u9001\u3063\u3066\u306D\uFF01","\u306F\u3044\u3001\u30B3\u30E1\u30F3\u30C8\u3042\u308A\u304C\u3068\u3046\uFF01\u5F15\u304D\u7D9A\u304D\u3088\u308D\u3057\u304F\u3063\u3059\uFF01","\u307F\u3093\u306A\u30B3\u30E1\u30F3\u30C8\u3042\u308A\u304C\u3068\u306D\u301C\uFF01"];async function Pa(){try{let i=await fetch(ew);if(!i.ok)return;let e=await i.json();if(!Array.isArray(e))return;if(!m0){m0=!0;for(let t of e){let n=t.data?.id||t.id;n&&Ys.add(n)}console.log("\u{1F4AC} \u308F\u3093\u30B3\u30E1\u63A5\u7D9A\u6210\u529F: \u65E2\u5B58\u30B3\u30E1\u30F3\u30C8",e.length,"\u4EF6\u3092\u30B9\u30AD\u30C3\u30D7");return}for(let t of e){let n=t.data||t,s=n.id||t.id;if(!s||Ys.has(s))continue;Ys.add(s);let r=n.displayName||n.name||n.nickname||"\u540D\u7121\u3057",o=n.comment||n.message||"";o&&o.length>0&&!o.startsWith("!")&&!o.startsWith("#")&&(Si.push({author:r,text:o,timestamp:Date.now(),id:s}),Si.length>g0&&(Si=Si.slice(-g0)),console.log("\u{1F4AC} \u30B3\u30E1\u30F3\u30C8\u53D7\u4FE1:",r+":",o))}if(Ys.size>500){let t=[...Ys];Ys.clear();for(let n of t.slice(-300))Ys.add(n)}}catch{va++,va===1&&console.log("\u{1F4AC} \u308F\u3093\u30B3\u30E1\u672A\u691C\u51FA\uFF08\u30DD\u30FC\u30EA\u30F3\u30B0\u9593\u9694\u309230\u79D2\u306B\u5909\u66F4\uFF09"),va>=3&&fs&&(clearInterval(fs),fs=setInterval(Pa,3e4));return}va>0&&(va=0,fs&&(clearInterval(fs),fs=setInterval(Pa,cu),console.log("\u{1F4AC} \u308F\u3093\u30B3\u30E1\u518D\u63A5\u7D9A\uFF08\u30DD\u30FC\u30EA\u30F3\u30B0\u9593\u9694\u3092"+cu/1e3+"\u79D2\u306B\u5FA9\u5E30\uFF09")))}var va=0;function nw(){fs||(Pa(),fs=setInterval(()=>{Pa()},cu),console.log("\u{1F4AC} \u30B3\u30E1\u30F3\u30C8\u30DD\u30FC\u30EA\u30F3\u30B0\u958B\u59CB\uFF08"+cu/1e3+"\u79D2\u9593\u9694\uFF09"))}nw();async function uf(i){if(Si.length===0)return!1;let e=Si.splice(0,tw),t=_0[Math.floor(Math.random()*_0.length)];it("happy",.8),Et(t,"\u{1F4AC} \u30B3\u30E1\u30F3\u30C8"),await dn(t,i),await nt(500);for(let n of e){if(Te)return!0;let s=i,r=io(n.text);r>=0&&Ce[r].vrm?(lo(r),s=Ce[r].speakerId||i,console.log(`\u{1F4AC} Comment routed to char ${r}: ${Ce[r].name}`)):lo(0);let o=n.author+"\u3055\u3093\u304B\u3089\u3002"+n.text;it("neutral",.7),Et(o,"\u{1F4AC} "+n.author),await dn(o,s),await nt(300);let a=await G0(n);if(a&&!Te){let l=a.match(/\[(\w+),\s*([\d.]+)\]/);l?it(l[1],parseFloat(l[2])):it("happy",.7);let c=uo(a);c&&(Et(c,"\u{1F4AC} \u8FD4\u4E8B"),await dn(c,s)),await nt(500)}}if(e.length>=2){let n=x0[Math.floor(Math.random()*x0.length)];it("happy",.7),Et(n,"\u{1F4AC} \u30B3\u30E1\u30F3\u30C8"),await dn(n,i),await nt(300)}return Wt(),it("neutral"),!0}async function G0(i){let e=await chrome.storage.local.get(["llmApiKey","llmProvider"]),t=e.llmApiKey,n=e.llmProvider||"gemini";if(!t&&n!=="ollama")return jd(i);try{let s=await bf();return await Fn([{role:"system",content:s+`
`+$E},{role:"user",content:i.author+"\u3055\u3093\u306E\u30B3\u30E1\u30F3\u30C8\u300C"+i.text+"\u300D\u306B\u8FD4\u4E8B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}],{maxTokens:200,temperature:.8})||jd(i)}catch{return jd(i)}}function jd(i){let e=["[happy,0.8] "+i.author+"\u5148\u8F29\u3001\u3042\u308A\u304C\u3068\u3046\u3063\u3059\uFF01","[happy,0.7] \u304A\u304A\u3001"+i.author+"\u3055\u3093\uFF01\u30B3\u30E1\u30F3\u30C8\u5B09\u3057\u3044\u3063\u3059\uFF01","[surprised,0.6] "+i.author+"\u5148\u8F29\u3001\u8074\u3044\u3066\u304F\u308C\u3066\u308B\u3093\u3059\u306D\uFF01\u3042\u308A\u304C\u3068\u3046\uFF01","[relaxed,0.7] "+i.author+"\u3055\u3093\u3001\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u301C\u3002"];return e[Math.floor(Math.random()*e.length)]}function er(i){return/\[type:\s*(talk|script|jingle|freetalk|audio|image|auto-news|auto-weather|auto-today|auto-scenery)\]/i.test(i)}function fo(i){let e=i.split(`
`),t={},n=[],s=!1,r=!1,o=null;for(let a of e){let l=a.trim();if(l==="---"){if(!s&&!r){s=!0;continue}else if(s){s=!1,r=!0;continue}}if(s){let u=l.match(/^(\w+):\s*(.+)$/);u&&(t[u[1]]=u[2]);continue}if(l.startsWith("# ")){o&&n.push(o),o={name:l.slice(2).trim(),type:"talk",props:{},lines:[]};continue}if(!o||!l||l.startsWith("<!--"))continue;let c=l.match(/^\[(\w+):\s*(.+)\]$/);if(c){let u=c[1].toLowerCase(),h=c[2].trim();/^[\d.]+$/.test(h)&&(h=parseFloat(h)),h==="true"&&(h=!0),h==="false"&&(h=!1),u==="type"?o.type=h:o.props[u]=h;continue}if(l.startsWith("### ")){let u=l.slice(4).trim().toLowerCase();["talk","script","freetalk","reaction","comments"].includes(u)&&((o.lines.length>0||Object.keys(o.props).length>0)&&n.push(o),o={name:o.name||u,type:u,props:{...o.props},lines:[]});continue}o.lines.push(l)}return o&&n.push(o),console.log("parseSetlist:",{meta:t,segmentCount:n.length,segments:n.map(a=>`${a.name} (${a.type})`)}),{meta:t,segments:n}}var js={title:"",text:""};async function iw(i,e){let t=e.length>2e3?e.slice(0,2e3)+"\u2026\u2026\uFF08\u4EE5\u4E0B\u7565\uFF09":e,n=`\u4ECA\u3001\u300C${i}\u300D\u3068\u3044\u3046\u602A\u8AC7\u3092\u6717\u8AAD\u3057\u307E\u3057\u305F\u3002\u4EE5\u4E0B\u304C\u305D\u306E\u5185\u5BB9\u3067\u3059\uFF1A

---
${t}
---

\u3053\u306E\u602A\u8AC7\u306B\u3064\u3044\u3066\u306E\u611F\u60F3\u3092\u602A\u8AC7\u3061\u3083\u3093\u3068\u3057\u3066\u8A9E\u3063\u3066\u304F\u3060\u3055\u3044\u3002`;try{let s=await bf();return await Fn([{role:"system",content:s+XE},{role:"user",content:n}],{maxTokens:800,temperature:.85})}catch(s){return console.error("Reaction generation error:",s),null}}function sw(i){let e=[`[sad,0.7] \u306F\u3044\u3001\u3061\u3087\u3063\u3068\u6016\u304B\u3063\u305F\u3063\u3059\u306D\u2026\u2026\u3002
[neutral,0.6] \u300C${i}\u300D\u3001\u306A\u304B\u306A\u304B\u6765\u308B\u3082\u306E\u304C\u3042\u3063\u305F\u3063\u3059\u3002
[surprised,0.5] \u5148\u8F29\u65B9\u306F\u5927\u4E08\u592B\u3063\u3059\u304B\uFF1F\u80CC\u4E2D\u3001\u6C17\u3092\u3064\u3051\u3066\u3063\u3059\u3088\u3002`,`[surprised,0.8] \u3044\u3084\u30FC\u300C${i}\u300D\u3001\u30DE\u30B8\u3067\u6016\u304B\u3063\u305F\u3063\u3059\u3002
[sad,0.6] \u3042\u305F\u3057\u3082\u8272\u3005\u4F53\u9A13\u3057\u3066\u308B\u65B9\u3060\u3068\u601D\u3046\u3093\u3059\u3051\u3069\u3001\u3053\u3046\u3044\u3046\u306E\u306F\u30AD\u30C4\u3044\u3063\u3059\u3002
[neutral,0.7] \u5148\u8F29\u65B9\u306F\u3069\u3046\u601D\u3044\u307E\u3057\u305F\uFF1F`,`[neutral,0.7] \u300C${i}\u300D\u2026\u2026\u72EC\u7279\u306E\u96F0\u56F2\u6C17\u304C\u3042\u308A\u307E\u3057\u305F\u306D\u3002
[sad,0.5] \u3053\u3046\u3044\u3046\u8A71\u3092\u8AAD\u3080\u3068\u3001\u3084\u3063\u3071\u308A\u591C\u306F\u6016\u304F\u306A\u308B\u3063\u3059\u3088\u306D\u3002
[relaxed,0.6] \u2026\u2026\u6C17\u5206\u3092\u5909\u3048\u3066\u3044\u304D\u307E\u3057\u3087\u3046\u304B\u3002`];return e[Math.floor(Math.random()*e.length)]}async function tr(i){if(wt){Te=!0;return}wt=!0,Te=!1,du();let{meta:e,segments:t}=i,n=e.title||"\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8",s=e.speaker?parseInt(e.speaker):38;lu=e.speed?parseFloat(e.speed):.95;let o=e.pause_between?parseInt(e.pause_between):1e3,a=new Map;if(setTimeout(async()=>{for(let p=0;p<t.length;p++){let f=t[p];if(Te)break;let _=f.props.speaktext||f.props.speakText;if(f.type==="jingle"&&_&&(await vi(_,f.props.speakspeaker||f.props.speakSpeaker||s).catch(()=>{}),await nt(100)),f.type==="talk"&&f.lines&&f.lines.length>0&&!f.props.ai){let m=f.lines.map(g=>g.text).join(`
`);try{let g=an(`---
---
${m}`);for(let y of g.dialogues){if(Te)break;await vi(y.text,f.props.speaker||s).catch(()=>{}),await nt(100)}}catch{}}if(f.type==="auto-news")try{let m=await df();if(m.length>0&&!Te){let{dateStr:g,weekday:y}=getTodayDateInfo(),S=`\u3042\u306A\u305F\u306F\u30E9\u30B8\u30AA\u30D1\u30FC\u30BD\u30CA\u30EA\u30C6\u30A3\u3002\u4ECA\u65E5\u306F${g}\u3067\u3059\u3002\u4EE5\u4E0B\u306E\u30CB\u30E5\u30FC\u30B9\u3092\u81EA\u7136\u306A\u53E3\u8A9E\u4F53\u3067\u7D39\u4ECB\u3057\u3066\u3002\u5404\u30CB\u30E5\u30FC\u30B9\u306B\u611F\u60F3\u3082\u4ED8\u3051\u3066\u30021\u884C1\u6587\u3067\u3002
\u203B\u91CD\u8981: \u66DC\u65E5\u306F\u5FC5\u305A\u300C${y}\u66DC\u65E5\u300D\u3092\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u4ED6\u306E\u66DC\u65E5\u306B\u5909\u3048\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002

${m.map((E,b)=>`${b+1}. ${E}`).join(`
`)}`,v=await Fn([{role:"user",content:S}],{maxTokens:3e3,temperature:.8});if(v&&!Te){v=fixWeekdayInText(v,y);let E=an(`---
---
${v}`).dialogues;a.set(p,{dialogues:E});for(let b of E)await vi(b.text,f.props.speaker||s).catch(()=>{})}}}catch{}else if(f.type==="auto-weather")try{let m=await ff();if(m.length>0&&!Te){let g=m.map(b=>`${b.area}\uFF08${b.city}\uFF09: ${b.telop} \u6700\u9AD8${b.maxTemp}\xB0C/\u6700\u4F4E${b.minTemp}\xB0C${b.rainChance?" \u964D\u6C34\u78BA\u7387"+b.rainChance:""}`).join(`
`),{dateStr:y,weekday:S}=getTodayDateInfo(),v=`\u3042\u306A\u305F\u306F\u30E9\u30B8\u30AA\u306E\u5929\u6C17\u4E88\u5831\u62C5\u5F53\u3002\u4ECA\u65E5\u306F${y}\u3067\u3059\u3002\u4EE5\u4E0B\u306E\u5929\u6C17\u3092\u81EA\u7136\u306A\u53E3\u8A9E\u4F53\u3067\u7D39\u4ECB\u3057\u3066\u3002\u5404\u5730\u57DF\u306B\u5098\u3084\u670D\u88C5\u306E\u30A2\u30C9\u30D0\u30A4\u30B9\u3082\u4ED8\u3051\u3066\u30021\u884C1\u6587\u3067\u3002
\u203B\u91CD\u8981: \u66DC\u65E5\u306F\u5FC5\u305A\u300C${S}\u66DC\u65E5\u300D\u3092\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u4ED6\u306E\u66DC\u65E5\u306B\u5909\u3048\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002

${g}`,E=await Fn([{role:"user",content:v}],{maxTokens:3e3,temperature:.8});if(E&&!Te){E=fixWeekdayInText(E,S);let b=an(`---
---
${E}`).dialogues;a.set(p,{dialogues:b});for(let A of b)await vi(A.text,f.props.speaker||s).catch(()=>{})}}}catch{}else if(f.type==="auto-today")try{let m=await pf();if(m.length>0&&!Te){let{dateStr:g,weekday:y}=getTodayDateInfo(),S=`\u3042\u306A\u305F\u306F\u30E9\u30B8\u30AA\u30D1\u30FC\u30BD\u30CA\u30EA\u30C6\u30A3\u3002\u4ECA\u65E5\u306F${g}\u3067\u3059\u3002\u4EE5\u4E0B\u306E\u300C\u4ECA\u65E5\u306F\u4F55\u306E\u65E5\u300D\u60C5\u5831\u3092\u81EA\u7136\u306A\u53E3\u8A9E\u4F53\u3067\u697D\u3057\u304F\u7D39\u4ECB\u3057\u3066\u30021\u884C1\u6587\u3067\u3002
\u203B\u91CD\u8981: \u66DC\u65E5\u306F\u5FC5\u305A\u300C${y}\u66DC\u65E5\u300D\u3092\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u4ED6\u306E\u66DC\u65E5\u306B\u5909\u3048\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002

${m.join(`
`)}`,v=await Fn([{role:"user",content:S}],{maxTokens:2e3,temperature:.8});if(v&&!Te){v=fixWeekdayInText(v,y);let E=an(`---
---
${v}`).dialogues;a.set(p,{dialogues:E});for(let b of E)await vi(b.text,f.props.speaker||s).catch(()=>{})}}}catch{}else if(f.type==="freetalk"&&f.props.topic){let m={theme:f.props.topic,hook:f.props.hook||f.props.topic};try{let g=await Ia(m);if(g&&!Te){let y=oo(g);a.set(p,{dialogues:y});for(let S of y)await vi(S.text,f.props.speaker||s).catch(()=>{})}}catch{}}}},2e3),e.size){let p=e.size.match(/(\d+)\s*[x×]\s*(\d+)/i);if(p){let f=parseInt(p[1]),_=parseInt(p[2]);chrome.runtime.sendMessage({action:"resize-window",width:f,height:_}),_>f&&document.body.classList.add("vertical-mode"),console.log(`\u{1F4D0} \u30A6\u30A3\u30F3\u30C9\u30A6\u30EA\u30B5\u30A4\u30BA: ${f}\xD7${_}${_>f?" (\u7E26\u52D5\u753B\u30E2\u30FC\u30C9)":""}`)}}let c=(await chrome.storage.local.get(["startDelay"])).startDelay||0;if(c>0)for(let p=c;p>0;p--){if(Te){wt=!1;return}re.textContent=`\u23F1\uFE0F \u300C${n}\u300D${p}\u79D2\u5F8C\u306B\u958B\u59CB\u2026`,await nt(1e3)}let u=!1;try{(await chrome.storage.local.get(["autoRecordMorning"])).autoRecordMorning&&!vn&&(re.textContent="\u{1F4F9} \u81EA\u52D5\u9332\u753B\u958B\u59CB...",await E0(!0),await nt(1e3),u=!0)}catch{}vn&&wE>0&&(e.splash?(Qr=new Image,Qr.crossOrigin="anonymous",Qr.src=e.splash,await new Promise(p=>{Qr.onload=p,Qr.onerror=p,setTimeout(p,1e3)})):Qr=null,AE=Date.now()),re.textContent=`\u{1F4FB} \u300C${n}\u300D\u653E\u9001\u958B\u59CB`;for(let p=0;p<t.length;p++){let m=function(y,S){let E=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"].filter(b=>b!==S);for(let b of E)y=y.replace(new RegExp(b+"\u66DC\u65E5","g"),S+"\u66DC\u65E5"),y=y.replace(new RegExp(b+"\u66DC","g"),S+"\u66DC");return y},g=function(){let y=new Date,v=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"][y.getDay()];return{dateStr:`${y.getFullYear()}\u5E74${y.getMonth()+1}\u6708${y.getDate()}\u65E5\uFF08${v}\u66DC\u65E5\uFF09`,weekday:v}};if(Te){d();return}let f=t[p],_=f.props.speaker||s;if(re.textContent=`\u{1F4FB} ${n}\uFF08${p+1}/${t.length}\uFF09${f.name}`,f.props.bgm)if(f.props.bgm==="none"||f.props.bgm==="off"||f.props.bgm==="stop")await Zs();else{let y=await ds(f.props.bgm);y&&await X0(y,f.props.bgmvolume||f.props.bgmVolume||f.props.volume||.25)}else(f.props.bgmstop||f.props.bgmStop)&&await Zs();switch(f.type){case"talk":{if(gs&&ei.length<Ea&&!wa&&ho(),f.props.emotion&&it(f.props.emotion,f.props.intensity||.8),f.props.bg){let E=await ds(f.props.bg);E&&Ef(E)}if(f.props.float)if(f.props.float==="none"||f.props.float==="off")y0();else{let E=await ds(f.props.float);E&&ow(E)}let y={meta:{title:f.name},dialogues:[]};for(let E of f.lines){let b=E.match(/^\[(\w+),\s*([\d.]+)\]\s*(.+)$/);if(b){let{display:A,speech:x}=of(b[3]);y.dialogues.push({emotion:b[1],intensity:parseFloat(b[2]),text:A,speechText:x})}else{let{display:A,speech:x}=of(E);if(A){let T=x!==A;y.dialogues.push({emotion:f.props.emotion||"neutral",intensity:f.props.intensity||.75,text:A,speechText:x,_untagged:!T})}}}let S=await af(y.dialogues);if(await Qn(S,_,(E,b)=>{it(E.emotion,E.intensity),Et(E.text,`${f.name}\uFF08${b+1}/${S.length}\uFF09`)})){d();return}Wt();break}case"script":{gs&&ei.length<Ea&&!wa&&ho();let y=f.props.file;if(!y)break;try{if(!y.match(/\.\w+$/)){let L=y.replace(/\/$/,""),F=[];for(let j of at.keys())if(j.startsWith(L+"/")&&j.endsWith(".md")){let ee=j.slice(L.length+1);F.includes(ee)||F.push(ee)}try{let j=chrome.runtime.getURL(`viewer/${L}/index.json`),ee=await fetch(j);if(ee.ok){let fe=await ee.json();if(Array.isArray(fe))for(let ce of fe)F.includes(ce)||F.push(ce)}}catch{}if(console.log(`\u{1F4D6} ${L}: fileList =`,F,"localFiles keys:",[...at.keys()]),F.length===0)throw new Error(`${L} \u306B\u6717\u8AAD\u30D5\u30A1\u30A4\u30EB\u304C\u3042\u308A\u307E\u305B\u3093`);let O="readScripts_"+L,H=await chrome.storage.local.get([O,"readOrder"]),k=H[O]||[],V=H.readOrder||"random";F.sort();let Z;if(V==="sequential"){let j=k.length%F.length;k.length>=F.length&&(k=[],j=0,console.log(`\u{1F4D6} ${L}: \u5168${F.length}\u8A71\u8AAD\u4E86 \u2192 \u30EA\u30BB\u30C3\u30C8`)),Z=F[j],console.log(`\u{1F4D6} \u9806\u756A\u8AAD\u307F: ${Z}\uFF08${j+1}/${F.length}\uFF09`)}else{let j=F.filter(ee=>!k.includes(ee));j.length===0&&(k=[],j=F,console.log(`\u{1F4D6} ${L}: \u5168${F.length}\u8A71\u8AAD\u4E86 \u2192 \u30EA\u30BB\u30C3\u30C8`)),Z=j[Math.floor(Math.random()*j.length)],console.log(`\u{1F4D6} \u30E9\u30F3\u30C0\u30E0\u9078\u629E: ${Z}\uFF08\u6B8B\u308A${j.length-1}\u8A71\uFF09`)}y=L+"/"+Z,k.push(Z),chrome.storage.local.set({[O]:k})}let S=await ds(y);if(!S)throw new Error(`${y} \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093`);let E=await(await fetch(S)).text(),b=an(E),x=y.split("/").pop().replace(/\.\w+$/,"").replace(/^\d+[_\-]/,""),T=b.meta.title||f.name||x;if(b.meta.title=T,Te){d();return}it("neutral",.7),Et(T,"\u{1F4D6} \u6717\u8AAD"),await dn(T,_),await nt(800);let N=f.props.ai?await af(b.dialogues):b.dialogues;if(await Qn(N,_,(L,F)=>{it(L.emotion,L.intensity),Et(L.text,`${b.meta.title}\uFF08${F+1}/${N.length}\uFF09`)})){d();return}Wt(),js={title:b.meta.title||"",text:b.dialogues.map(L=>L.text).join(`
`)}}catch(S){console.error(`Script load error: ${y}`,S),re.textContent=`\u26A0\uFE0F ${y} \u8AAD\u307F\u8FBC\u307F\u5931\u6557`,await nt(2e3)}break}case"jingle":{let y=f.props.file;if(!y)break;Mi&&!f.props.keepbgm&&!f.props.keepBgm&&await Zs();let S={audio:await ds(y),overlay:f.props.overlay?await ds(f.props.overlay):null,duration:f.props.duration,fadeOut:f.props.fadeout||f.props.fadeOut||1.5,speakAt:f.props.speakat||f.props.speakAt,speakText:f.props.speaktext||f.props.speakText,speakSpeaker:f.props.speakspeaker||f.props.speakSpeaker||_,duckTo:f.props.duckto||f.props.duckTo||.15};await cw(S);break}case"image":{let y=f.props.file||f.props.overlay;if(!y)break;let S=f.props.duration||5,v=f.props.transition||1,E=await ds(y);if(!E)break;let b=document.getElementById("jingle-overlay"),A=document.getElementById("jingle-image");b.style.opacity==="1"?(b.style.transition=`opacity ${v/2}s ease`,b.style.opacity="0",await nt(v/2*1e3)):(b.style.transition="none",b.style.opacity="0"),b.style.display="flex",A.src="",await new Promise(T=>{A.onload=T,A.onerror=T,A.src=E,A.complete&&T()}),b.style.transition=`opacity ${v}s ease`,b.offsetHeight,b.style.opacity="1",re.textContent="\u{1F5BC} \u753B\u50CF\u8868\u793A\u4E2D...";let x=0;for(;x<S*1e3&&!Te;)await nt(100),x+=100;!f.props.keepoverlay&&!f.props.keepOverlay&&(b.style.opacity="0",await nt(v*1e3),b.style.opacity==="0"&&(b.style.display="none",A.src=""));break}case"freetalk":{let y=f.props.topic?{theme:f.props.topic,hook:f.props.hook||f.props.topic}:fu(),S=[];if(f.props.topic&&a.has(p))S=a.get(p).dialogues;else{re.textContent=`\u{1F914} \u300C${y.theme}\u300D\u306B\u3064\u3044\u3066\u8003\u3048\u4E2D...`;let E=await Ia(y);if(!E||Te)break;S=oo(E)}if(S.some(E=>E._untagged)&&(S=Ks(S)),await Qn(S,_,(E,b)=>{it(E.emotion,E.intensity),Et(E.text,`\u{1F5E3}\uFE0F ${y.theme}\uFF08${b+1}/${S.length}\uFF09`)})){d();return}Wt();break}case"reaction":{if(!js.title){console.log("Reaction: No previous script to react to");break}f.props.emotion&&it(f.props.emotion,f.props.intensity||.7),re.textContent=`\u{1F4AD} \u300C${js.title}\u300D\u306E\u611F\u60F3\u3092\u8003\u3048\u4E2D...`;let S=await iw(js.title,js.text)||sw(js.title);if(Te)break;let v=oo(S);if(v.some(b=>b._untagged)&&(v=Ks(v)),re.textContent=`\u{1F4AD} \u300C${js.title}\u300D\u306E\u611F\u60F3`,await Qn(v,_,(b,A)=>{it(b.emotion,b.intensity),Et(b.text,`\u{1F4AD} \u611F\u60F3\uFF08${A+1}/${v.length}\uFF09`)})){d();return}Wt();break}case"comments":{re.textContent="\u{1F4AC} \u30B3\u30E1\u30F3\u30C8\u30C1\u30A7\u30C3\u30AF\u4E2D...",await Pa(),Si.length>0&&!Te?await uf(_):Te||(it("neutral",.6),Et("\u30B3\u30E1\u30F3\u30C8\u306F\u307E\u3060\u6765\u3066\u306A\u3044\u3063\u3059\u306D\u3002\u3069\u3093\u3069\u3093\u9001\u3063\u3066\u306D\uFF01","\u{1F4AC}"),await dn("\u30B3\u30E1\u30F3\u30C8\u306F\u307E\u3060\u6765\u3066\u306A\u3044\u3063\u3059\u306D\u3002\u3069\u3093\u3069\u3093\u9001\u3063\u3066\u306D\uFF01",_),await nt(500),Wt());break}case"auto-news":{re.textContent="\u{1F4F0} \u30CB\u30E5\u30FC\u30B9\u6E96\u5099\u4E2D...";let y=[];if(a.has(p))y=a.get(p).dialogues;else{re.textContent="\u{1F4F0} \u30CB\u30E5\u30FC\u30B9\u53D6\u5F97\u4E2D...";let S=await df();if(Te)break;if(S.length===0){Et("\u30CB\u30E5\u30FC\u30B9\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F","\u{1F4F0}"),await dn("\u30CB\u30E5\u30FC\u30B9\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F",_);break}let{dateStr:v,weekday:E}=g(),b=`\u3042\u306A\u305F\u306F\u30E9\u30B8\u30AA\u30D1\u30FC\u30BD\u30CA\u30EA\u30C6\u30A3\u3002\u4ECA\u65E5\u306F${v}\u3067\u3059\u3002\u4EE5\u4E0B\u306E\u30CB\u30E5\u30FC\u30B9\u3092\u81EA\u7136\u306A\u53E3\u8A9E\u4F53\u3067\u7D39\u4ECB\u3057\u3066\u3002\u5404\u30CB\u30E5\u30FC\u30B9\u306B\u611F\u60F3\u3082\u4ED8\u3051\u3066\u30021\u884C1\u6587\u3067\u3002
\u203B\u91CD\u8981: \u66DC\u65E5\u306F\u5FC5\u305A\u300C${E}\u66DC\u65E5\u300D\u3092\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u4ED6\u306E\u66DC\u65E5\u306B\u5909\u3048\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002

${S.map((x,T)=>`${T+1}. ${x}`).join(`
`)}`,A=await Fn([{role:"user",content:b}],{maxTokens:3e3,temperature:.8});if(Te)break;A&&(A=m(A,E)),y=A?an(`---
---
${A}`).dialogues:[]}if(y.length>0&&(re.textContent=`\u{1F4F0} \u30CB\u30E5\u30FC\u30B9\uFF08${y.length}\u884C\uFF09`,await Qn(y,_,(v,E)=>{it(v.emotion,v.intensity),Et(v.text,`\u{1F4F0} \u30CB\u30E5\u30FC\u30B9\uFF08${E+1}/${y.length}\uFF09`)}))){d();return}Wt();break}case"auto-weather":{re.textContent="\u{1F324}\uFE0F \u5929\u6C17\u60C5\u5831\u6E96\u5099\u4E2D...";let y=[];if(a.has(p))y=a.get(p).dialogues;else{re.textContent="\u{1F324}\uFE0F \u5929\u6C17\u53D6\u5F97\u4E2D...";let S=await ff();if(Te)break;if(S.length===0){Et("\u5929\u6C17\u60C5\u5831\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F","\u{1F324}\uFE0F"),await dn("\u5929\u6C17\u60C5\u5831\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F",_);break}let v=S.map(T=>`${T.area}\uFF08${T.city}\uFF09: ${T.telop} \u6700\u9AD8${T.maxTemp}\xB0C/\u6700\u4F4E${T.minTemp}\xB0C${T.rainChance?" \u964D\u6C34\u78BA\u7387"+T.rainChance:""}`).join(`
`),{dateStr:E,weekday:b}=g(),A=`\u3042\u306A\u305F\u306F\u30E9\u30B8\u30AA\u306E\u5929\u6C17\u4E88\u5831\u62C5\u5F53\u3002\u4ECA\u65E5\u306F${E}\u3067\u3059\u3002\u4EE5\u4E0B\u306E\u5929\u6C17\u3092\u81EA\u7136\u306A\u53E3\u8A9E\u4F53\u3067\u7D39\u4ECB\u3057\u3066\u3002\u5404\u5730\u57DF\u306B\u5098\u3084\u670D\u88C5\u306E\u30A2\u30C9\u30D0\u30A4\u30B9\u3082\u4ED8\u3051\u3066\u30021\u884C1\u6587\u3067\u3002
\u203B\u91CD\u8981: \u66DC\u65E5\u306F\u5FC5\u305A\u300C${b}\u66DC\u65E5\u300D\u3092\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u4ED6\u306E\u66DC\u65E5\u306B\u5909\u3048\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002

${v}`,x=await Fn([{role:"user",content:A}],{maxTokens:3e3,temperature:.8});if(Te)break;x&&(x=m(x,b)),y=x?an(`---
---
${x}`).dialogues:[]}if(y.length>0&&(re.textContent=`\u{1F324}\uFE0F \u5929\u6C17\u4E88\u5831\uFF08${y.length}\u884C\uFF09`,await Qn(y,_,(v,E)=>{it(v.emotion,v.intensity),Et(v.text,`\u{1F324}\uFE0F \u5929\u6C17\u4E88\u5831\uFF08${E+1}/${y.length}\uFF09`)}))){d();return}Wt();break}case"auto-today":{re.textContent="\u{1F4C5} \u4ECA\u65E5\u306F\u4F55\u306E\u65E5\u3092\u6E96\u5099\u4E2D...";let y=[];if(a.has(p))y=a.get(p).dialogues;else{re.textContent="\u{1F4C5} \u4ECA\u65E5\u306F\u4F55\u306E\u65E5\u3092\u53D6\u5F97\u4E2D...";let S=await pf();if(Te)break;if(S.length===0){Et("\u4ECA\u65E5\u306F\u4F55\u306E\u65E5\u306E\u60C5\u5831\u304C\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F","\u{1F4C5}"),await dn("\u4ECA\u65E5\u306F\u4F55\u306E\u65E5\u306E\u60C5\u5831\u304C\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F",_);break}let{dateStr:v,weekday:E}=g(),b=`\u3042\u306A\u305F\u306F\u30E9\u30B8\u30AA\u30D1\u30FC\u30BD\u30CA\u30EA\u30C6\u30A3\u3002\u4ECA\u65E5\u306F${v}\u3067\u3059\u3002\u4EE5\u4E0B\u306E\u300C\u4ECA\u65E5\u306F\u4F55\u306E\u65E5\u300D\u60C5\u5831\u3092\u81EA\u7136\u306A\u53E3\u8A9E\u4F53\u3067\u697D\u3057\u304F\u7D39\u4ECB\u3057\u3066\u30021\u884C1\u6587\u3067\u3002
\u203B\u91CD\u8981: \u66DC\u65E5\u306F\u5FC5\u305A\u300C${E}\u66DC\u65E5\u300D\u3092\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u4ED6\u306E\u66DC\u65E5\u306B\u5909\u3048\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002

${S.join(`
`)}`,A=await Fn([{role:"user",content:b}],{maxTokens:2e3,temperature:.8});if(Te)break;A&&(A=m(A,E)),y=A?an(`---
---
${A}`).dialogues:[]}if(y.length>0&&(re.textContent=`\u{1F4C5} \u4ECA\u65E5\u306F\u4F55\u306E\u65E5\uFF08${y.length}\u884C\uFF09`,await Qn(y,_,(v,E)=>{it(v.emotion,v.intensity),Et(v.text,`\u{1F4C5} \u4ECA\u65E5\u306F\u4F55\u306E\u65E5\uFF08${E+1}/${y.length}\uFF09`)}))){d();return}Wt();break}case"auto-scenery":{try{re.textContent="\u{1F3B2} \u30E9\u30F3\u30C0\u30E0\u98A8\u666F\u3092\u53D6\u5F97\u4E2D...";let y=await wf();if(Te)break;if(!y){Et("\u98A8\u666F\u753B\u50CF\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F","\u{1F3DE}\uFE0F"),await dn("\u98A8\u666F\u753B\u50CF\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F",_);break}let S="\u4E0D\u660E",v="";try{let N=await rw(y.id);N&&(S=N.author||"\u4E0D\u660E",v=N.url||"",BE(S,"Unsplash / Picsum Photos"))}catch(N){console.warn("\u{1F4F7} Picsum \u30E1\u30BF\u60C5\u5831\u53D6\u5F97\u30B9\u30AD\u30C3\u30D7:",N.message)}let{dateStr:E,weekday:b}=g(),A=`\u3042\u306A\u305F\u306F\u30E9\u30B8\u30AA\u30D1\u30FC\u30BD\u30CA\u30EA\u30C6\u30A3\u3002\u4ECA\u65E5\u306F${E}\u3067\u3059\u3002
\u80CC\u666F\u306B\u30E9\u30F3\u30C0\u30E0\u306A\u98A8\u666F\u5199\u771F\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u307E\u3059\u3002
\u5199\u771F\u306E\u60C5\u5831: \u64AE\u5F71\u8005\u300C${S}\u300D${v?"\uFF08\u51FA\u5178: Unsplash\uFF09":""}

\u3053\u306E\u5199\u771F\u3092\u898B\u3066\u3044\u308B\u30EA\u30B9\u30CA\u30FC\u306B\u5411\u3051\u3066\u3001\u98A8\u666F\u306E\u5370\u8C61\u3084\u5B63\u7BC0\u611F\u3001\u65C5\u306E\u6C17\u5206\u3092\u8A9E\u3063\u3066\u304F\u3060\u3055\u3044\u3002
\u5199\u771F\u306E\u5177\u4F53\u7684\u306A\u5185\u5BB9\u306F\u5206\u304B\u3089\u306A\u3044\u306E\u3067\u3001\u300C\u3069\u3093\u306A\u98A8\u666F\u304C\u6620\u3063\u3066\u308B\u304B\u306A\uFF1F\u300D\u300C\u307F\u306A\u3055\u3093\u306B\u306F\u3069\u3046\u898B\u3048\u307E\u3059\u304B\uFF1F\u300D\u306E\u3088\u3046\u306B\u3001\u30EA\u30B9\u30CA\u30FC\u3068\u4E00\u7DD2\u306B\u697D\u3057\u3080\u30B9\u30BF\u30A4\u30EB\u3067\u3002
\u64AE\u5F71\u8005\u306E\u540D\u524D\u306B\u3082\u89E6\u308C\u3066\u304F\u3060\u3055\u3044\u30023\u301C5\u6587\u3067\u30021\u884C1\u6587\u3067\u3002
\u203B\u91CD\u8981: \u66DC\u65E5\u306F\u5FC5\u305A\u300C${b}\u66DC\u65E5\u300D\u3092\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\u3002`,x=await Fn([{role:"user",content:A}],{maxTokens:1e3,temperature:.9});if(Te)break;x&&(x=m(x,b));let T=x?an(`---
---
${x}`).dialogues:[];if(T.length>0&&(re.textContent=`\u{1F3DE}\uFE0F \u98A8\u666F\u30C8\u30FC\u30AF\uFF08${T.length}\u884C\uFF09`,await Qn(T,_,(R,L)=>{it(R.emotion,R.intensity),Et(R.text,`\u{1F3DE}\uFE0F \u4ECA\u65E5\u306E\u98A8\u666F\uFF08\u{1F4F7} ${S}\uFF09`)}))){d();return}Wt()}catch(y){console.error("auto-scenery error:",y),re.textContent=`\u26A0\uFE0F \u98A8\u666F\u30C8\u30FC\u30AF\u3067\u30A8\u30E9\u30FC: ${y.message}`,await nt(2e3)}break}}p<t.length-1&&!Te&&(it("neutral"),await nt(o),!t.some(S=>S.type==="comments")&&Si.length>0&&!Te&&(await uf(s),await nt(500)))}Wt(),it("neutral"),Sf(8e3),vn?(await nt(8500),w0()):await nt(8500);let h=String(e.loop||"").match(/true\s*(\d+)?/i);if((h||e.loop===!0)&&!Te){let p=h?.[1]?parseInt(h[1]):1e3;return console.log(`Setlist: loop restart in ${p}ms`),await nt(p),wt=!1,tr(i)}re.textContent=`\u2705 \u300C${n}\u300D\u653E\u9001\u7D42\u4E86`,wt=!1,Te=!1;function d(){Wt(),y0(),it("neutral"),Zs(),document.body.classList.remove("vertical-mode"),re.textContent="\u23F9\uFE0F \u653E\u9001\u505C\u6B62",wt=!1,Te=!1}}function Ef(i){document.getElementById("bg-layer").style.backgroundImage=`url('${i}')`}function wf(){let e=`https://picsum.photos/1920/1080?random=${Date.now()}`;return console.log("\u{1F3B2} \u30E9\u30F3\u30C0\u30E0\u80CC\u666F\u3092\u53D6\u5F97\u4E2D..."),re.textContent="\u{1F3B2} \u30E9\u30F3\u30C0\u30E0\u80CC\u666F\u3092\u53D6\u5F97\u4E2D...",new Promise(t=>{let n=new Image;n.crossOrigin="anonymous",n.onload=()=>{document.getElementById("bg-layer").style.backgroundImage=`url('${n.src}')`,re.textContent="\u{1F3B2} \u80CC\u666F\u3092\u5909\u66F4\u3057\u307E\u3057\u305F",console.log("\u{1F3B2} \u30E9\u30F3\u30C0\u30E0\u80CC\u666F\u30BB\u30C3\u30C8:",n.src);let s=n.src.match(/\/id\/(\d+)\//);s?(console.log("\u{1F3B2} Picsum ID (from img.src):",s[1]),t({id:s[1],finalUrl:n.src})):(console.log("\u{1F3B2} img.src \u306BID\u306A\u3057\u3001fetch \u3067\u30EA\u30C0\u30A4\u30EC\u30AF\u30C8\u5148\u3092\u78BA\u8A8D..."),fetch(e,{method:"HEAD",redirect:"follow"}).then(r=>{let o=r.url;console.log("\u{1F3B2} fetch final URL:",o);let a=o.match(/\/id\/(\d+)\//);t({id:a?a[1]:null,finalUrl:o})}).catch(()=>t({id:null,finalUrl:n.src})))},n.onerror=()=>{re.textContent="\u274C \u80CC\u666F\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F",console.warn("\u{1F3B2} \u30E9\u30F3\u30C0\u30E0\u80CC\u666F\u306E\u53D6\u5F97\u5931\u6557"),t(null)},n.src=e})}async function rw(i){if(!i)return null;try{let e=await fetch(`https://picsum.photos/id/${i}/info`);if(!e.ok)return null;let t=await e.json();return{author:t.author,url:t.url,width:t.width,height:t.height}}catch(e){return console.warn("\u{1F4F7} Picsum info\u53D6\u5F97\u5931\u6557:",e),null}}function W0(i){console.log("\u{1F5BC}\uFE0F \u80CC\u666F\u753B\u50CFURL:",i);let e=new Image;e.crossOrigin="anonymous",e.onload=()=>{document.getElementById("bg-layer").style.backgroundImage=`url('${e.src}')`,console.log("\u{1F5BC}\uFE0F \u80CC\u666F\u30BB\u30C3\u30C8\u5B8C\u4E86")},e.onerror=()=>{console.warn("\u26A0\uFE0F \u80CC\u666F\u753B\u50CF\u306E\u8AAD\u307F\u8FBC\u307F\u5931\u6557:",i)},e.src=i}function ow(i){let e=document.getElementById("float-overlay"),t=document.getElementById("float-image");!e||!t||(t.crossOrigin="anonymous",t.src=i,t.onload=()=>{e.classList.add("visible"),console.log("\u{1F5BC}\uFE0F Float shown:",i)},t.onerror=()=>{console.warn("\u26A0\uFE0F Float image load failed:",i)})}function y0(){let i=document.getElementById("float-overlay");i&&(i.classList.remove("visible"),console.log("\u{1F5BC}\uFE0F Float hidden"))}var Cn=null,Mi=null,Xt=null,Af=.3,aw=.08,hf=500;async function X0(i,e=.3){await Zs(),ct.state==="suspended"&&await ct.resume();try{let t=await fetch(i);if(!t.ok){console.error("BGM fetch failed:",t.status,i);return}let n=await t.arrayBuffer(),s=await ct.decodeAudioData(n);Xt=ct.createGain(),Xt.gain.value=0,Xt.connect(La),Mi=ct.createBufferSource(),Mi.buffer=s,Mi.loop=!0,Mi.connect(Xt),Mi.start(),Af=e,Xt.gain.linearRampToValueAtTime(e,ct.currentTime+hf/1e3),console.log("BGM started:",i,"volume:",e)}catch(t){console.error("BGM start error:",t,"url:",i),re.textContent=`\u274C BGM\u8AAD\u307F\u8FBC\u307F\u5931\u6557: ${t.message}`}}async function Zs(){if(!Mi)return;let i=Mi,e=Xt;Mi=null,Xt=null;try{if(e){let t=ct.currentTime;e.gain.setValueAtTime(e.gain.value,t),e.gain.linearRampToValueAtTime(0,t+hf/1e3)}await new Promise(t=>{setTimeout(()=>{try{i.stop()}catch{}t()},hf)})}catch{try{i.stop()}catch{}}console.log("BGM stopped")}function lw(i){if(Af=i,Xt){let e=ct.currentTime;Xt.gain.setValueAtTime(Xt.gain.value,e),Xt.gain.linearRampToValueAtTime(i,e+.3)}}function $0(){if(!Xt)return;let i=ct.currentTime;Xt.gain.setValueAtTime(Xt.gain.value,i),Xt.gain.linearRampToValueAtTime(aw,i+.3)}function uu(){if(!Xt)return;let i=ct.currentTime;Xt.gain.setValueAtTime(Xt.gain.value,i),Xt.gain.linearRampToValueAtTime(Af,i+.5)}var yi=document.getElementById("jingle-overlay"),to=document.getElementById("jingle-image"),Ma=null;async function cw(i){typeof i=="string"&&(i={audio:arguments[0],overlay:arguments[1]});let{audio:e,overlay:t,duration:n,fadeOut:s=1.5,speakAt:r,speakText:o,speakSpeaker:a=38,duckTo:l=.15}=i;if(e){ct.state==="suspended"&&await ct.resume(),re.textContent="\u{1F3B5} \u30B8\u30F3\u30B0\u30EB\u518D\u751F\u4E2D...",t&&(Ma&&(clearTimeout(Ma),Ma=null),yi.style.transition="none",yi.style.opacity="0",yi.style.display="flex",to.src="",await new Promise(c=>{to.onload=c,to.onerror=c,to.src=t,to.complete&&c()}),yi.style.transition="opacity 0.5s ease",yi.offsetHeight,yi.style.opacity="1");try{let c;try{let f=await(await fetch(e)).arrayBuffer();c=await ct.decodeAudioData(f)}catch(p){console.warn("\u{1F3B5} fetch\u5931\u6557\u3001Audio\u8981\u7D20\u3067\u518D\u751F:",p.message);let f=new Audio(e);f.volume=1,await new Promise(_=>{f.onended=_,f.onerror=()=>{console.warn("\u{1F3B5} \u30B8\u30F3\u30B0\u30EB\u518D\u751F\u5931\u6557"),_()},f.play().catch(()=>_())});return}let u=ct.createGain();u.gain.value=1;let h=ct.createBufferSource();h.buffer=c,h.connect(u),u.connect(La);let d=ct.currentTime;return new Promise(p=>{function f(){yi.style.opacity="0",Ma=setTimeout(()=>{yi.style.display="none",to.src="",re.textContent="",Ma=null},600)}if(h.onended=()=>{f(),p()},h.start(),n&&n>0){let _=Math.max(0,n-s);setTimeout(()=>{let m=ct.currentTime;u.gain.setValueAtTime(u.gain.value,m),u.gain.linearRampToValueAtTime(0,m+s),setTimeout(()=>{try{h.stop()}catch{}},s*1e3)},_*1e3)}r!==void 0&&o&&setTimeout(async()=>{let _=ct.currentTime;u.gain.setValueAtTime(u.gain.value,_),u.gain.linearRampToValueAtTime(l,_+.3),Et(o,"\u{1F399}\uFE0F"),await dn(o,a),Wt();let m=ct.currentTime;u.gain.setValueAtTime(l,m),u.gain.linearRampToValueAtTime(1,m+.5)},r*1e3)})}catch(c){console.error("Jingle playback error:",c),yi.style.display="none",yi.classList.remove("visible","fade-out"),re.textContent=`\u274C \u30B8\u30F3\u30B0\u30EB\u518D\u751F\u5931\u6557: ${c.message}`}}}var ps=0;function uw(i){return i._blink||(i._blink={timer:Math.random()*3,nextAt:2+Math.random()*4,phase:0,value:0}),i._blink}var hw=12,dw=6;function fw(i,e){if(!i.vrm)return;let t=uw(i);t.timer+=e,t.phase===0?t.timer>=t.nextAt&&(t.phase=1,t.timer=0):t.phase===1?(t.value=Math.min(1,t.value+e*hw),t.value>=1&&(t.phase=2)):t.phase===2&&(t.value=Math.max(0,t.value-e*dw),t.value<=0&&(t.phase=0,t.timer=0,t.nextAt=2+Math.random()*4,Math.random()<.15&&(t.nextAt=.2))),i.vrm.expressionManager?.setValue("blink",t.value)}function Zd(i){if(!pt)return;ps+=i;let e=pt.humanoid;if(!e)return;let t=e.getNormalizedBoneNode("spine");t&&(t.rotation.z=Math.sin(ps*.8)*.008,t.rotation.x=Math.sin(ps*1.2)*.005);let n=e.getNormalizedBoneNode("head");n&&(n.rotation.y=Math.sin(ps*.5)*.015,n.rotation.z=Math.sin(ps*.7+1)*.008)}function q0(){requestAnimationFrame(q0),Kg.update();let i=Kg.getDelta();kt.update(),(co||pt)&&s0();for(let e=0;e<Ce.length;e++){let t=Ce[e];if(!t.vrm)continue;let n=pt;if(pt=t.vrm,fw(t,i),t.vrm===n)Zd(i);else{let s=ps;ps+=e*3.7,Zd(i),ps=s}if(wt){let s=t.vrm.humanoid;if(!s){pt=n,t.vrm.update(i);continue}let r=s.getNormalizedBoneNode("head"),o=s.getNormalizedBoneNode("spine"),a=s.getNormalizedBoneNode("upperChest");t._reaction||(t._reaction={type:"none",timer:0,intensity:0,duration:0}),t._nodPhase===void 0&&(t._nodPhase=0),t._nodTimer===void 0&&(t._nodTimer=2+Math.random()*3);let l=t.vrm===n,c=l?.15:1;if(t._nodTimer-=i,t._nodTimer<=0&&t._nodPhase===0&&(Math.random()<c?(t._nodPhase=1,t._nodTimer=.25+Math.random()*.15):t._nodTimer=1.5+Math.random()*2),t._nodPhase===1&&r){let h=1-t._nodTimer/.3;r.rotation.x=Math.sin(h*Math.PI)*.08,t._nodTimer-=i,t._nodTimer<=0&&(t._nodPhase=0,t._nodTimer=l?3+Math.random()*5:2+Math.random()*4)}let u=t._reaction;if(u.timer>0){u.timer-=i;let h=Math.max(0,u.timer),d=Math.sin((1-h/u.duration)*Math.PI);switch(u.type){case"surprised":o&&(o.rotation.x=-d*.06*u.intensity),r&&(r.rotation.x=-d*.04*u.intensity);break;case"happy":o&&(o.rotation.z=Math.sin(h*12)*.03*d*u.intensity),a&&(a.rotation.z=Math.sin(h*12+.5)*.02*d*u.intensity);break;case"sad":r&&(r.rotation.x=d*.06*u.intensity),o&&(o.rotation.x=d*.03*u.intensity);break;case"angry":o&&(o.rotation.x=d*.04*u.intensity),r&&(r.rotation.x=d*.03*u.intensity+Math.sin(h*30)*.005);break}u.timer<=0&&(u.type="none")}}UE(t,i),pt=n,t.vrm.update(i),t.mixer&&t.mixer.update(i)}!Ce[0].vrm&&pt&&(Zd(i),pt.update(i),ao&&ao.update(i)),Js.render(zi,fn)}q0();chrome.runtime.onMessage.addListener((i,e,t)=>{switch(i.action){case"load-vrm":document.getElementById("fileInput").click();break;case"load-script":wt?Te=!0:document.getElementById("scriptInput").click();break;case"change-bg":document.getElementById("bgInput").click();break;case"random-bg":wf();break;case"set-bg-url":i.url&&W0(i.url);break;case"test-speak":Et("\u3053\u3093\u3070\u3093\u306F\u3001\u602A\u8AC7\u3061\u3083\u3093\u30E9\u30B8\u30AA\u306E\u6642\u9593\u3060\u3088\u3002\u4ECA\u65E5\u3082\u6016\u3044\u8A71\u3001\u3044\u304D\u307E\u3059\u3088\u3002","AITuber Radio"),dn("\u3053\u3093\u3070\u3093\u306F\u3001\u602A\u8AC7\u3061\u3083\u3093\u30E9\u30B8\u30AA\u306E\u6642\u9593\u3060\u3088\u3002\u4ECA\u65E5\u3082\u6016\u3044\u8A71\u3001\u3044\u304D\u307E\u3059\u3088\u3002");break;case"cycle-emotion":HE();break;case"update-tts-settings":Mn=i.ttsEngine||"voicevox",bi=i.ttsPort||50021,Ra=i.ttsModelId||0,i.ttsSpeakerId!==void 0&&(Ca=i.ttsSpeakerId),console.log(`TTS updated: ${Mn} port:${bi} modelId:${Ra} speakerId:${Ca}`),N0();break;case"stop-playback":wt&&(Te=!0),VE(),Zs();break;case"update-characters":i.characters&&(i.characters.forEach((n,s)=>{s<Ce.length&&(Ce[s].name=n.name||"",Ce[s].speakerId=n.speakerId||(s===0?38:3),Ce[s].prompt=n.prompt||"")}),console.log("\u{1F3AD} Characters updated:",Ce.map(n=>`${n.name}(${n.speakerId})`))),i.spacing!==void 0&&(ru=i.spacing),i.angle!==void 0&&(vf=i.angle),R0(!0);break;case"load-character-vrm":{let n=i.slot||0,s=`charVRM${n}Input`,r=document.getElementById(s);r&&(r.dataset.charName=i.name||"",r.dataset.charSpeakerId=i.speakerId||(n===0?38:3),r.click())}break;case"get-characters":return t({characters:Ce.map(n=>({name:n.name,speakerId:n.speakerId,hasVRM:!!n.vrm,position:n.position}))}),!0;case"play-default-setlist":pw();break;case"generate-morning-show":Y0();break;case"play-script":(async()=>{wt&&(Te=!0,await nt(500));let r=((await chrome.storage.local.get(["availableScripts"])).availableScripts||[]).find(o=>o.name===i.scriptName);if(!r){re.textContent="\u26A0\uFE0F \u53F0\u672C\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093";return}if(await chrome.storage.local.set({lastScript:r.content,lastScriptName:r.name}),er(r.content)){let o=fo(r.content);re.textContent=`\u{1F4FB} \u300C${o.meta.title||r.name}\u300D${o.segments.length}\u30BB\u30B0\u30E1\u30F3\u30C8`,tr(o)}else{let o=an(r.content);re.textContent=`\u{1F4D6} \u300C${o.meta.title||r.name}\u300D${o.dialogues.length}\u884C`,Qs(o)}})();break;case"save-camera":TE();break;case"reset-camera":EE();break;case"load-folder":document.getElementById("folderInput").click();break;case"load-readings-folder":document.getElementById("readingsFolderInput").click();break;case"load-media-folder":document.getElementById("mediaFolderInput").click();break;case"start-bgm":(async()=>{let n=i.url;!n&&i.mediaName&&(n=await ds(i.mediaName)),n&&X0(n,i.volume||.3)})();break;case"stop-bgm":Zs();break;case"set-bgm-volume":lw(i.volume);break;case"free-talk":KE();break;case"free-talk-chain":JE();break;case"play-card":(async()=>{try{await QE(i.cardId)}catch(n){console.error("Card play error:",n),re.textContent=`\u274C \u30AB\u30FC\u30C9\u518D\u751F\u30A8\u30E9\u30FC: ${n.message}`}})();break;case"toggle-local-chat":mw();break;case"set-gesture-subdued":if(Ta=!!i.value,console.log(`\u{1F910} \u30B8\u30A7\u30B9\u30C1\u30E3\u30FC\u63A7\u3048\u3081\u30E2\u30FC\u30C9: ${Ta?"ON":"OFF"}`),Ta)for(let n=0;n<Ce.length;n++)I0(n,"neutral");break;case"start-prefetch":gs=!0,ho();break;case"save-media":return(async()=>{let n=i.blob;typeof n=="string"&&n.startsWith("data:")&&(n=await(await fetch(n)).blob()),await PE(i.name,n,i.type),t({ok:!0})})(),!0;case"list-media":return Qg().then(n=>t({files:n})),!0;case"delete-media":return LE(i.name).then(()=>t({ok:!0})),!0;case"get-status":return t({isPlaying:wt,hasVRM:!!pt,hasBGM:!!Mi}),!0;case"get-file-list":{let n=[],s=[];for(let r of at.keys())r.startsWith("readings/")?n.push(r.slice(9)):r.startsWith("media/")&&s.push(r.slice(6));return n.sort(),s.sort(),t({readings:n,media:s}),!0}case"refresh-readings":return(async()=>{try{let n=[];try{let s=chrome.runtime.getURL("viewer/readings/index.json"),r=await fetch(s);if(r.ok){let o=await r.json();Array.isArray(o)&&n.push(...o)}}catch{}try{let s=await Qg();for(let r of s){let o=r.name||"";if(o.startsWith("readings/")&&o.endsWith(".md")){let a=o.slice(9);n.includes(a)||n.push(a)}}}catch{}Cn=n,console.log("\u{1F4D6} \u6717\u8AAD\u30EA\u30B9\u30C8\u66F4\u65B0:",n),t({count:n.length,files:n})}catch(n){console.error("refresh-readings error:",n),t({count:0,error:n.message})}})(),!0}});document.getElementById("fileInput").addEventListener("change",async i=>{let e=i.target.files[0];e&&(await yf(URL.createObjectURL(e),0),i.target.value="")});for(let i=0;i<2;i++)document.getElementById(`charVRM${i}Input`).addEventListener("change",async e=>{let t=e.target.files[0];if(!t)return;let n=e.target;Ce[i].name=n.dataset.charName||"",Ce[i].speakerId=parseInt(n.dataset.charSpeakerId)||(i===0?38:3),await yf(URL.createObjectURL(t),i),re.textContent=`\u2705 \u30AD\u30E3\u30E9${i+1}\u300C${Ce[i].name}\u300D\u8AAD\u307F\u8FBC\u307F\u5B8C\u4E86`,e.target.value=""});document.getElementById("scriptInput").addEventListener("change",async i=>{let e=i.target.files[0];if(!e)return;let t=await e.text();if(chrome.storage.local.set({lastScript:t,lastScriptName:e.name}),er(t)){let n=fo(t);re.textContent=`\u{1F4FB} \u300C${n.meta.title||e.name}\u300D ${n.segments.length}\u30BB\u30B0\u30E1\u30F3\u30C8`,tr(n)}else{let n=an(t);re.textContent=`\u{1F4D6} \u300C${n.meta.title||e.name}\u300D ${n.dialogues.length}\u884C`,Qs(n)}i.target.value=""});document.getElementById("readingsFolderInput").addEventListener("change",i=>{let e=i.target.files;if(!e||e.length===0)return;for(let n of[...at.keys()])n.startsWith("readings/")&&at.delete(n);let t=0;for(let n of e){let s=n.name;!s.endsWith(".md")&&!s.endsWith(".txt")||(at.set("readings/"+s,URL.createObjectURL(n)),t++)}Cn=[];for(let n of at.keys())n.startsWith("readings/")&&n.endsWith(".md")&&Cn.push(n.slice(9));(async()=>{try{let n=chrome.runtime.getURL("viewer/readings/index.json"),s=await fetch(n);if(s.ok){let r=await s.json();for(let o of r)Cn.includes(o)||Cn.push(o)}}catch{}re.textContent=`\u{1F4C2} readings: ${Cn.length}\u4EF6`,console.log("\u{1F4C2} readings:",Cn)})(),i.target.value=""});document.getElementById("mediaFolderInput").addEventListener("change",i=>{let e=i.target.files;if(!e||e.length===0)return;for(let n of[...at.keys()])n.startsWith("media/")&&at.delete(n);let t=0;for(let n of e)at.set("media/"+n.name,URL.createObjectURL(n)),t++;re.textContent=`\u{1F4C2} media: ${t}\u4EF6`,console.log("\u{1F4C2} media:",[...at.keys()].filter(n=>n.startsWith("media/"))),i.target.value=""});document.getElementById("bgInput").addEventListener("change",i=>{let e=i.target.files[0];e&&(Ef(URL.createObjectURL(e)),i.target.value="")});document.getElementById("folderInput").addEventListener("change",async i=>{let e=i.target.files;if(!e||e.length===0)return;let t=0,n=0,s=[];for(let o of e){let l=(o.webkitRelativePath||"").split("/"),c=null;for(let u=0;u<l.length-1;u++)if(l[u]==="readings"||l[u]==="media"){c=l.slice(u).join("/");break}if(c){at.set(c,URL.createObjectURL(o)),c.startsWith("readings/")?t++:c.startsWith("media/")&&n++;continue}l.length===2&&o.name.endsWith(".md")&&s.push(o)}Cn=[];for(let o of at.keys())o.startsWith("readings/")&&o.endsWith(".md")&&Cn.push(o.slice(9));try{let o=chrome.runtime.getURL("viewer/readings/index.json"),a=await fetch(o);if(a.ok){let l=await a.json();for(let c of l)Cn.includes(c)||Cn.push(c)}}catch{}let r=[];for(let o of s){let a=await o.text(),l=er(a),c=a.match(/^title:\s*(.+)$/m),u=c?c[1].trim():o.name;r.push({name:o.name,title:u,content:a,isSetlist:l})}r.sort((o,a)=>(a.isSetlist?1:0)-(o.isSetlist?1:0)),await chrome.storage.local.set({availableScripts:r}),r.length===1&&await chrome.storage.local.set({lastScript:r[0].content,lastScriptName:r[0].name}),re.textContent=`\u{1F4C2} \u6717\u8AAD${t}\u4EF6 / \u30E1\u30C7\u30A3\u30A2${n}\u4EF6 / \u53F0\u672C${r.length}\u4EF6`,console.log("\u{1F4C2} \u30D5\u30A9\u30EB\u30C0\u8AAD\u307F\u8FBC\u307F:",{readingsCount:t,mediaCount:n,scripts:r.map(o=>o.name),cachedReadingsList:Cn}),i.target.value=""});var Rf=document.getElementById("drop-zone");window.addEventListener("dragover",i=>i.preventDefault());window.addEventListener("drop",i=>i.preventDefault());document.body.addEventListener("dragover",i=>{i.preventDefault(),Rf.style.display="flex"});document.body.addEventListener("dragleave",()=>{Rf.style.display="none"});document.body.addEventListener("drop",i=>{i.preventDefault(),Rf.style.display="none";let e=Array.from(i.dataTransfer.files);if(!e.length)return;let t=e.find(r=>r.name.endsWith(".vrm"));if(t){NE(),DE(URL.createObjectURL(t));return}let n=e.find(r=>r.name.endsWith(".md")||r.name.endsWith(".txt"));if(n){n.text().then(r=>{let o=an(r);Qs(o)});return}let s=e.filter(r=>r.type.startsWith("image/"));if(s.length>=2){let r=s.find(c=>/talk|口開|open|speak/i.test(c.name)),o=s.find(c=>/blink|瞬き|close|目閉/i.test(c.name)),a=s.find(c=>c!==r&&c!==o)||s[0],l=r||s.find(c=>c!==a&&c!==o)||s[1];n0(URL.createObjectURL(a),URL.createObjectURL(l),o?URL.createObjectURL(o):null)}else s.length===1&&(i.shiftKey?n0(URL.createObjectURL(s[0])):Ef(URL.createObjectURL(s[0])))});window.addEventListener("resize",()=>{fn.aspect=window.innerWidth/window.innerHeight,fn.updateProjectionMatrix(),Js.setSize(window.innerWidth,window.innerHeight)});async function pw(){wt&&(Te=!0,await nt(500));try{let i=await chrome.storage.local.get(["lastScript","lastScriptName"]),e=i.lastScript,t=i.lastScriptName||"\u30C7\u30D5\u30A9\u30EB\u30C8";if(!e){let n=chrome.runtime.getURL("viewer/default_setlist.md"),s=await fetch(n);s.ok&&(e=await s.text(),t="default_setlist.md")}if(!e){re.textContent="\u26A0\uFE0F \u53F0\u672C\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u5148\u306B\u53F0\u672C\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u304F\u3060\u3055\u3044";return}if(er(e)){let n=fo(e);re.textContent=`\u{1F4FB} \u300C${n.meta.title||t}\u300D${n.segments.length}\u30BB\u30B0\u30E1\u30F3\u30C8`,tr(n)}else{let n=an(e);Qs(n)}}catch(i){console.error("Default setlist load error:",i),re.textContent="\u274C \u30C7\u30D5\u30A9\u30EB\u30C8\u53F0\u672C\u8AAD\u307F\u8FBC\u307F\u5931\u6557"}}(async()=>{try{let e=await chrome.storage.local.get(["characterSlots","charSpacing","charAngle"]);e.characterSlots&&(e.characterSlots.forEach((t,n)=>{n<Ce.length&&(Ce[n].name=t.name||"",Ce[n].speakerId=t.speakerId||(n===0?38:3),Ce[n].prompt=t.prompt||"")}),console.log("\u{1F3AD} Characters restored:",Ce.map(t=>`${t.name}(${t.speakerId})`))),e.charSpacing!==void 0&&(ru=e.charSpacing),e.charAngle!==void 0&&(vf=e.charAngle)}catch{}let i=await Zg();try{let e=chrome.runtime.getURL("viewer/default_model.vrm");(await fetch(e,{method:"HEAD"})).ok?(Ce[0].name="\u602A\u8AC7\u3061\u3083\u3093",Ce[0].speakerId=38,await yf(e,0),i&&await Zg()):re.textContent="\u{1F4C2} VRM\u3092\u30C9\u30ED\u30C3\u30D7\u3067\u8AAD\u307F\u8FBC\u307F"}catch{re.textContent="\u{1F4C2} VRM\u3092\u30C9\u30ED\u30C3\u30D7\u3067\u8AAD\u307F\u8FBC\u307F",re.textContent="\u{1F4C2} VRM\u3092\u30C9\u30ED\u30C3\u30D7\u3067\u8AAD\u307F\u8FBC\u307F"}})();function mw(){let i=document.getElementById("local-comment-box");i&&i.classList.toggle("visible")}(function(){let e=document.getElementById("local-comment-box"),t=document.getElementById("localCommentInput"),n=document.getElementById("localCommentSend"),s=document.getElementById("localCommentClose"),r=document.getElementById("local-comment-log");if(!e||!t)return;function o(l,c,u){let h=document.createElement("div");h.className="local-msg"+(u?" reply":"");let d=u?"\u{1F4FB} AITuber":"\u{1F4AC} "+l,p=document.createElement("span");p.className="author",p.textContent=d;let f=document.createElement("span");return f.className="text",f.textContent=c,h.appendChild(p),h.appendChild(document.createElement("br")),h.appendChild(f),r.appendChild(h),r.scrollTop=r.scrollHeight,h}async function a(){let l=t.value.trim();if(!l)return;t.value="";let c={author:"\u30ED\u30FC\u30AB\u30EB",text:l,timestamp:Date.now(),id:"local-"+Date.now()};if(o(c.author,l,!1),wt)Si.push(c),o("","\u2192 \u30B3\u30E1\u30F3\u30C8\u30AD\u30E5\u30FC\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F",!0);else{let u=o("","\u8003\u3048\u4E2D...",!0);try{let h,d=io(l);d>=0&&Ce[d].vrm?(lo(d),h=Ce[d].speakerId):lo(0);let p=await G0(c);console.log("\u{1F4AC} Local chat raw reply:",JSON.stringify(p));let f=p?uo(p):"";console.log("\u{1F4AC} Local chat clean reply:",JSON.stringify(f)),(!f||f.length===0)&&(f="\u3042\u308A\u304C\u3068\u3046\u3063\u3059\uFF01");let _=u.querySelector(".text");_&&(_.textContent=f);let m=p&&p.match(/\[(\w+),\s*([\d.]+)\]/);m?it(m[1],parseFloat(m[2])):it("happy",.7),Et(f,"\u{1F4AC} \u8FD4\u4E8B"),await dn(f,h),await nt(500),Wt(),it("neutral")}catch{let d=u.querySelector(".text");d&&(d.textContent="\u3054\u3081\u3093\u3001\u3046\u307E\u304F\u8FD4\u4E8B\u3067\u304D\u306A\u304B\u3063\u305F\u3063\u3059...")}}}n.addEventListener("click",a),t.addEventListener("keydown",function(l){l.key==="Enter"&&!l.isComposing&&(l.preventDefault(),a())}),s.addEventListener("click",function(){e.classList.remove("visible")})})();async function df(){try{let e=await(await fetch("https://news.google.com/rss?hl=ja&gl=JP&ceid=JP:ja")).text(),t=[],n=/<item>\s*<title>(.*?)<\/title>/g,s;for(;(s=n.exec(e))!==null&&t.length<5;){let r=s[1].replace(/ - [^-]+$/,"").trim();r&&t.push(r)}return console.log(`\u{1F4F0} \u30CB\u30E5\u30FC\u30B9: ${t.length}\u4EF6`),t}catch{return console.log("\u{1F4F0} \u30CB\u30E5\u30FC\u30B9\u53D6\u5F97\u5931\u6557"),[]}}async function ff(){let i=[{code:"016010",name:"\u672D\u5E4C",area:"\u5317\u6D77\u9053"},{code:"040010",name:"\u4ED9\u53F0",area:"\u6771\u5317"},{code:"130010",name:"\u6771\u4EAC",area:"\u95A2\u6771"},{code:"150010",name:"\u65B0\u6F5F",area:"\u5317\u9678"},{code:"230010",name:"\u540D\u53E4\u5C4B",area:"\u4E2D\u90E8"},{code:"270000",name:"\u5927\u962A",area:"\u8FD1\u757F"},{code:"340010",name:"\u5E83\u5CF6",area:"\u4E2D\u56FD"},{code:"380010",name:"\u677E\u5C71",area:"\u56DB\u56FD"},{code:"400010",name:"\u798F\u5CA1",area:"\u4E5D\u5DDE"},{code:"471010",name:"\u90A3\u8987",area:"\u6C96\u7E04"}];try{let t=(await Promise.all(i.map(async n=>{try{let o=(await(await fetch(`https://weather.tsukumijima.net/api/forecast/city/${n.code}`)).json()).forecasts?.[0];if(!o)return null;let a=o.chanceOfRain||{},l=a.T12_18||a.T06_12||a.T18_24||"";return{area:n.area,city:n.name,telop:o.telop||"",maxTemp:o.temperature?.max?.celsius||"?",minTemp:o.temperature?.min?.celsius||"?",rainChance:l}}catch{return null}}))).filter(Boolean);return console.log(`\u{1F324}\uFE0F \u5168\u56FD\u5929\u6C17: ${t.length}\u5730\u57DF`),t}catch{return console.log("\u{1F324}\uFE0F \u5929\u6C17\u53D6\u5F97\u5931\u6557"),[]}}async function pf(){let i=new Date,e=`${String(i.getMonth()+1).padStart(2,"0")}${String(i.getDate()).padStart(2,"0")}`,t=[];try{let s=await(await fetch(`https://api.whatistoday.cyou/index.cgi/v3/anniv/${e}`)).json(),r=[s.anniv1,s.anniv2,s.anniv3,s.anniv4,s.anniv5].filter(Boolean);r.length>0&&t.push(`\u8A18\u5FF5\u65E5: ${r.join("\u3001")}`)}catch{}try{let s=await(await fetch(`https://api.whatistoday.cyou/index.cgi/v3/birthflower/${e}`)).json();s.flower&&t.push(`\u8A95\u751F\u82B1: ${s.flower}\uFF08\u82B1\u8A00\u8449: ${s.lang}\uFF09`)}catch{}try{let s=await(await fetch(`https://api.whatistoday.cyou/index.cgi/v3/famousbirthday/${e}`)).json();s.name&&t.push(`\u4ECA\u65E5\u751F\u307E\u308C\u306E\u5049\u4EBA: ${s.name}\uFF08${s.profile}\u3001${s.lifespan}\uFF09`)}catch{}return console.log(`\u{1F4C5} \u4ECA\u65E5\u306F\u4F55\u306E\u65E5: ${t.length}\u4EF6`),t}async function Y0(){if(wt){Te=!0;return}re.textContent="\u{1F305} \u304A\u306F\u3088\u3046\u30E9\u30B8\u30AA\u751F\u6210\u4E2D...";let i=new Date,e=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"],t=`${i.getFullYear()}\u5E74${i.getMonth()+1}\u6708${i.getDate()}\u65E5\uFF08${e[i.getDay()]}\uFF09`,n=i.getHours(),s=n<11?"\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059":n<17?"\u3053\u3093\u306B\u3061\u306F":"\u3053\u3093\u3070\u3093\u306F",r=n<11?"\u304A\u306F\u3088\u3046\u30E9\u30B8\u30AA":n<17?"\u3072\u308B\u307E\u3061\u30E9\u30B8\u30AA":"\u591C\u3075\u304B\u3057\u30E9\u30B8\u30AA",o=n<11?"\u4ECA\u65E5\u3082\u5143\u6C17\u306B\u3044\u3063\u3066\u3089\u3063\u3057\u3083\u3044\uFF01":n<17?"\u5348\u5F8C\u3082\u9811\u5F35\u3063\u3066\u306D\uFF01":"\u660E\u65E5\u3082\u826F\u3044\u4E00\u65E5\u306B\u306A\u308A\u307E\u3059\u3088\u3046\u306B\u3002\u304A\u3084\u3059\u307F\uFF01";re.textContent="\u{1F305} \u30CB\u30E5\u30FC\u30B9\u30FB\u5929\u6C17\u3092\u53D6\u5F97\u4E2D...";let[a,l,c]=await Promise.all([df(),ff(),pf()]),u=a.length>0?`\u3010\u30CB\u30E5\u30FC\u30B9\uFF08NHK\uFF09\u3011
${a.map((f,_)=>`${_+1}. ${f}`).join(`
`)}`:"\u3010\u30CB\u30E5\u30FC\u30B9\u306A\u3057\u3011",h=l.length>0?`\u3010\u5168\u56FD\u5929\u6C17\u4E88\u5831\uFF08\u6C17\u8C61\u5E81\uFF09\u3011
${l.map(f=>`${f.area}\uFF08${f.city}\uFF09: ${f.telop} \u6700\u9AD8${f.maxTemp}\xB0C/\u6700\u4F4E${f.minTemp}\xB0C${f.rainChance?" \u964D\u6C34\u78BA\u7387"+f.rainChance:""}`).join(`
`)}`:"\u3010\u5929\u6C17\u60C5\u5831\u306A\u3057\u3011",d=c.length>0?`\u3010\u4ECA\u65E5\u306F\u4F55\u306E\u65E5\u3011
${c.join(`
`)}`:"\u3010\u4ECA\u65E5\u306F\u4F55\u306E\u65E5\uFF1A\u306A\u3057\u3011";re.textContent="\u{1F305} \u53F0\u672C\u3092\u751F\u6210\u4E2D...";let p=`\u3042\u306A\u305F\u306FAI\u30E9\u30B8\u30AA\u30D1\u30FC\u30BD\u30CA\u30EA\u30C6\u30A3\u300C\u602A\u8AC7\u3061\u3083\u3093\u300D\uFF08\u5143\u6C17\u3067\u660E\u308B\u3044\u5973\u306E\u5B50\uFF09\u3002
\u300C\u602A\u8AC7\u3061\u3083\u3093\u306E${r}\u300D\u306E\u53F0\u672C\u3092\u4F5C\u3063\u3066\u3002

\u3010\u65E5\u4ED8\u3011${t}
${u}
${h}
${d}

\u3010\u51FA\u529B\u5F62\u5F0F\u3011\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u306E\u30BB\u30EA\u30D5\u90E8\u5206\u306E\u307F\u30021\u884C1\u6587\u3002
- \u611F\u60C5\u6307\u5B9A\u884C: [emotion: happy] [intensity: 0.8] \u306E\u3088\u3046\u306B\u72EC\u7ACB\u3057\u305F\u884C\u3067
- \u30BB\u30B0\u30E1\u30F3\u30C8\u898B\u51FA\u3057: # \u30B3\u30FC\u30CA\u30FC\u540D
- \u30B3\u30E1\u30F3\u30C8: // \u3067\u59CB\u307E\u308B\u884C

\u3010\u756A\u7D44\u69CB\u6210\uFF08100\u884C\u4EE5\u4E0A\u306E\u30BB\u30EA\u30D5\uFF09\u3011
1. \u6328\u62F6\u300C${s}\uFF01\u602A\u8AC7\u3061\u3083\u3093\u306E${r}\uFF01\u300D+ \u65E5\u4ED8\u7D39\u4ECB\uFF085\u884C\uFF09
2. \u4ECA\u65E5\u306F\u4F55\u306E\u65E5\u30B3\u30FC\u30CA\u30FC\uFF08\u8A18\u5FF5\u65E5\u3092\u7D39\u4ECB\u3001\u8A95\u751F\u82B1\u3068\u82B1\u8A00\u8449\u3082\u5FC5\u305A\u7D39\u4ECB\u3001\u5049\u4EBA\u306E\u8A95\u751F\u65E5\u3082\u5FC5\u305A\u7D39\u4ECB\uFF09\uFF0815\u884C\uFF09
3. \u30CB\u30E5\u30FC\u30B9\uFF083\u672C\u3001\u5404\u30CB\u30E5\u30FC\u30B9\u306B3\u301C5\u884C\u306E\u611F\u60F3\u30FB\u89E3\u8AAC\u3092\u4ED8\u3051\u3066\uFF09\uFF0825\u884C\uFF09
4. \u5168\u56FD\u5929\u6C17\u4E88\u5831\uFF08\u5317\u6D77\u9053\u304B\u3089\u6C96\u7E04\u307E\u3067\u516810\u5730\u57DF\u3001\u5404\u5730\u57DF\u306E\u30A2\u30C9\u30D0\u30A4\u30B9\u4ED8\u304D\uFF09\uFF0830\u884C\uFF09
5. \u4ECA\u65E5\u306E\u4E00\u8A00\uFF08\u30DD\u30B8\u30C6\u30A3\u30D6\u306A\u540D\u8A00\u3084\u683C\u8A00\u3001\u89E3\u8AAC\u4ED8\u304D\uFF09\uFF0810\u884C\uFF09
6. \u7DE0\u3081\u300C${o}\u300D\uFF085\u884C\uFF09

\u3010\u30EB\u30FC\u30EB\u3011
- \u53E3\u8A9E\u4F53\u3067\u81EA\u7136\u306B\u3001\u30E9\u30B8\u30AADJ\u306E\u3088\u3046\u306B\u8A71\u3059
- 1\u884C\u306F\u77ED\u3081\u306E\u4E00\u6587\uFF0830\u6587\u5B57\u7A0B\u5EA6\uFF09
- \u30CB\u30E5\u30FC\u30B9\u306F\u4E8B\u5B9F\uFF0B\u81EA\u5206\u306E\u611F\u60F3\u3092\u4E01\u5BE7\u306B
- \u5929\u6C17\u306F\u5B9F\u7528\u7684\u306B\uFF08\u5098\u30FB\u670D\u88C5\u30A2\u30C9\u30D0\u30A4\u30B9\uFF09
- 100\u884C\u4EE5\u4E0A\u306E\u30BB\u30EA\u30D5\u3092\u751F\u6210\u3059\u308B\u3053\u3068\uFF08\u91CD\u8981\uFF01\uFF09
- frontmatter\u4E0D\u8981\u3001\u30BB\u30EA\u30D5\u3060\u3051\u51FA\u529B`;try{let f=await Fn([{role:"user",content:p}],{maxTokens:8e3,temperature:.8});if(!f){re.textContent="\u274C \u53F0\u672C\u751F\u6210\u5931\u6557\uFF08API\u5FDC\u7B54\u306A\u3057\uFF09";return}let _=[];for(let O=1;O<=4;O++)if(at.has(`media/jingle${O}.mp3`)||at.has(`media/jingle${O}.wav`)){let H=at.has(`media/jingle${O}.mp3`)?"mp3":"wav";_.push(`media/jingle${O}.${H}`)}let m=at.has("media/bgm.mp3")||at.has("media/bgm.wav"),g=m?at.has("media/bgm.mp3")?"media/bgm.mp3":"media/bgm.wav":null,y=at.has("media/opening.jpg")||at.has("media/opening.png"),S=y?at.has("media/opening.jpg")?"media/opening.jpg":"media/opening.png":null,v=at.has("media/ending.jpg")||at.has("media/ending.png"),E=v?at.has("media/ending.jpg")?"media/ending.jpg":"media/ending.png":null,b=_.length>=2?_[1]:_[0]||null;console.log(`\u{1F3B5} \u30B8\u30F3\u30B0\u30EB: ${_.length}\u500B, BGM: ${m}, opening: ${y}, ending: ${v}`);let A=f.split(/^(?=# )/m).filter(O=>O.trim()),x=`---
title: \u602A\u8AC7\u3061\u3083\u3093\u306E${r}\uFF08${i.getMonth()+1}/${i.getDate()}\uFF09
speaker: 38
speed: 0.95
---

`,N=(A[0]?A[0].trim():"").split(`
`),R=N[0].replace(/^#+\s*/,""),L=N.find(O=>O.trim()&&!O.startsWith("#")&&!O.startsWith("["))||`${s}\uFF01\u602A\u8AC7\u3061\u3083\u3093\u306E${r}\uFF01`;_.length>0&&(x+=`# \u30AA\u30FC\u30D7\u30CB\u30F3\u30B0\u30B8\u30F3\u30B0\u30EB
[type: jingle]
[file: ${_[0]}]${S?`
[overlay: ${S}]`:""}
[duration: 30]
[fadeOut: 3]
[speakAt: 3.5]
[speakText: ${L.trim()}]
[speakSpeaker: 38]

`);let F=N.slice(1).filter(O=>O.trim()&&!O.startsWith("[type")).join(`
`);F.trim()&&(x+=`# \u30AA\u30FC\u30D7\u30CB\u30F3\u30B0
[type: talk]${g?`
[bgm: ${g}]
[bgmVolume: 0.15]`:""}
${F}

`);for(let O=1;O<A.length;O++){let H=A[O].trim();if(!H)continue;let k=O===A.length-1,V=H.split(`
`),Z=V[0].replace(/^#+\s*/,"")||`\u30B3\u30FC\u30CA\u30FC${O}`,j=V.slice(1).join(`
`);b&&!k&&(x+=`# \u30B3\u30FC\u30CA\u30FC\u30B8\u30F3\u30B0\u30EB
[type: jingle]
[file: ${b}]
[duration: 10.5]
[fadeOut: 3.5]
[speakAt: 4]
[speakText: ${Z}]
[speakSpeaker: 38]

`),x+=`# ${Z}
[type: talk]
${j}

`}if(_.length>0){let O=E||S;x+=`# \u30A8\u30F3\u30C7\u30A3\u30F3\u30B0\u30B8\u30F3\u30B0\u30EB
[type: jingle]
[file: ${_[0]}]${O?`
[overlay: ${O}]`:""}
[duration: 20]
[fadeOut: 3]
[speakAt: 3.5]
[speakText: \u602A\u8AC7\u3061\u3083\u3093\u306E${r}\u3001\u307E\u305F\u6B21\u56DE\uFF01]
[speakSpeaker: 38]

`}if(console.log("\u{1F4DD} \u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u751F\u6210\u5B8C\u4E86"),er(x)){let O=fo(x);console.log(`\u{1F4DD} \u81EA\u52D5\u751F\u6210\u53F0\u672C: ${O.segments.length}\u30BB\u30B0\u30E1\u30F3\u30C8`),re.textContent=`\u{1F4FB} \u300C${O.meta.title}\u300D${O.segments.length}\u30BB\u30B0\u30E1\u30F3\u30C8`,await tr(O)}else{let O=an(x);console.log(`\u{1F4DD} \u81EA\u52D5\u751F\u6210\u53F0\u672C: ${O.dialogues.length}\u884C`),re.textContent=`\u{1F4D6} \u300C${O.meta.title}\u300D${O.dialogues.length}\u884C`,await Qs(O)}}catch(f){console.error("Morning show error:",f),re.textContent=`\u274C \u751F\u6210\u30A8\u30E9\u30FC: ${f.message}`}}window.generateMorningShow=Y0;(async()=>{let i=new URLSearchParams(location.search),e=i.get("card"),t=i.get("setlist"),n=i.get("record")==="true";if(!(!e&&!t)){await nt(3e3);try{let s="";if(e){let r="https://k3peta.github.io/aituber-radio-station";re.textContent=`\u{1F4E1} \u30AB\u30FC\u30C9\u300C${e}\u300D\u3092\u53D6\u5F97\u4E2D...`;let o=await fetch(`${r}/cards/${e}/card.json`);if(!o.ok)throw new Error(`Card not found: ${e}`);let a=await o.json();if(a.media)for(let[c,u]of Object.entries(a.media))try{let h=`${r}/${u}`,d=await fetch(h);if(d.ok){let p=await d.blob();at.set(c,URL.createObjectURL(p)),console.log(`\u{1F4E5} ${c} \u2192 loaded`)}}catch(h){console.warn(`\u{1F4E5} ${c} failed:`,h)}let l=await fetch(`${r}/cards/${e}/${a.setlist||"setlist.md"}`);if(!l.ok)throw new Error(`Setlist not found for ${e}`);s=await l.text()}else if(t){re.textContent="\u{1F4E1} \u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u53D6\u5F97\u4E2D...";let r=await fetch(t);if(!r.ok)throw new Error(`Setlist fetch failed: ${t}`);s=await r.text();let o=t.replace(/\/[^/]*$/,""),a=new Set;for(let l of s.matchAll(/(?:file|bgm|overlay|bg):\s*(media\/[^\]]+)/g))a.add(l[1].trim());for(let l of s.matchAll(/file:\s*(readings\/[^\]]+)/g))a.add(l[1].trim());for(let l of a)try{let c=`${o}/${l}`,u=await fetch(c);if(u.ok){let h=await u.blob();at.set(l,URL.createObjectURL(h)),console.log(`\u{1F4E5} ${l} \u2192 loaded`)}}catch{console.warn(`\u{1F4E5} ${l} skipped`)}try{let l=await fetch(`${o}/readings/index.json`);if(l.ok){let c=await l.json();for(let u of c)if(!at.has(`readings/${u}`))try{let h=await fetch(`${o}/readings/${u}`);if(h.ok){let d=await h.blob();at.set(`readings/${u}`,URL.createObjectURL(d))}}catch{}Cn=c,console.log(`\u{1F4E5} readings: ${c.length} files`)}}catch{}}if(!s)throw new Error("Empty setlist");if(n&&await chrome.storage.local.set({autoRecordMorning:!0}),er(s)){let r=fo(s);console.log(`\u{1F680} CLI autoplay: ${r.meta.title} (${r.segments.length} segments)`),re.textContent=`\u{1F4FB} \u300C${r.meta.title}\u300D${r.segments.length}\u30BB\u30B0\u30E1\u30F3\u30C8`,await tr(r)}else{let r=an(s);console.log(`\u{1F680} CLI autoplay: ${r.meta.title} (${r.dialogues.length} lines)`),await Qs(r)}document.title="DONE:"+(e||"custom"),console.log("\u2705 CLI autoplay complete")}catch(s){console.error("CLI autoplay error:",s),re.textContent=`\u274C ${s.message}`,document.title="ERROR:"+s.message}}})()});export default gw();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

@pixiv/three-vrm/lib/three-vrm.module.js:
  (*!
   * @pixiv/three-vrm v3.5.1
   * VRM file loader for three.js.
   *
   * Copyright (c) 2019-2026 pixiv Inc.
   * @pixiv/three-vrm is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-core v3.5.1
   * The implementation of core features of VRM, for @pixiv/three-vrm
   *
   * Copyright (c) 2019-2026 pixiv Inc.
   * @pixiv/three-vrm-core is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-materials-mtoon v3.5.1
   * MToon (toon material) module for @pixiv/three-vrm
   *
   * Copyright (c) 2019-2026 pixiv Inc.
   * @pixiv/three-vrm-materials-mtoon is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-materials-hdr-emissive-multiplier v3.5.1
   * Support VRMC_hdr_emissiveMultiplier for @pixiv/three-vrm
   *
   * Copyright (c) 2019-2026 pixiv Inc.
   * @pixiv/three-vrm-materials-hdr-emissive-multiplier is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-materials-v0compat v3.5.1
   * VRM0.0 materials compatibility layer plugin for @pixiv/three-vrm
   *
   * Copyright (c) 2019-2026 pixiv Inc.
   * @pixiv/three-vrm-materials-v0compat is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-node-constraint v3.5.1
   * Node constraint module for @pixiv/three-vrm
   *
   * Copyright (c) 2019-2026 pixiv Inc.
   * @pixiv/three-vrm-node-constraint is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-springbone v3.5.1
   * Spring bone module for @pixiv/three-vrm
   *
   * Copyright (c) 2019-2026 pixiv Inc.
   * @pixiv/three-vrm-springbone is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
*/

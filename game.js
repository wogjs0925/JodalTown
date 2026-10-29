"use strict";(()=>{var ru=0,Ec=1,au=2;var Tc=1,Ea=2,On=3,jn=0,Yt=1,Fn=2,ti=0,Ni=1,wc=2,Ac=3,Cc=4,ou=5,pi=100,cu=101,lu=102,uu=103,hu=104,du=200,fu=201,pu=202,mu=203,ea=204,ta=205,gu=206,yu=207,_u=208,vu=209,xu=210,bu=211,Mu=212,Su=213,Eu=214,Ta=0,wa=1,Aa=2,Ui=3,Ca=4,Ra=5,Ia=6,Pa=7,Rc=0,Tu=1,wu=2,ni=0,Au=1,Cu=2,Ru=3,Iu=4,Pu=5,Lu=6,Du=7;var Ic=300,zi=301,Vi=302,La=303,Da=304,yr=306,na=1e3,fi=1001,ia=1002,yn=1003,Nu=1004;var _r=1005;var wn=1006,Na=1007;var vi=1008;var In=1009,Pc=1010,Lc=1011,ys=1012,Ua=1013,xi=1014,Bn=1015,_s=1016,Oa=1017,Fa=1018,vs=1020,Dc=35902,Nc=35899,Uc=1021,Oc=1022,_n=1023,cs=1026,xs=1027,Fc=1028,Ba=1029,Bc=1030,ka=1031;var za=1033,vr=33776,xr=33777,br=33778,Mr=33779,Va=35840,Ha=35841,Ga=35842,Wa=35843,$a=36196,qa=37492,Xa=37496,Ya=37808,Za=37809,Ja=37810,Ka=37811,ja=37812,Qa=37813,eo=37814,to=37815,no=37816,io=37817,so=37818,ro=37819,ao=37820,oo=37821,co=36492,lo=36494,uo=36495,ho=36283,fo=36284,po=36285,mo=36286;var Ks=2300,sa=2301,Qr=2302,mc=2400,gc=2401,yc=2402;var Uu=3200,Ou=3201;var kc=0,Fu=1,ii="",Xt="srgb",Oi="srgb-linear",js="linear",Qe="srgb";var Di=7680;var _c=519,Bu=512,ku=513,zu=514,zc=515,Vu=516,Hu=517,Gu=518,Wu=519,vc=35044;var Vc="300 es",Tn=2e3,Qs=2001;var Qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $o=Math.PI/180,ra=180/Math.PI;function Sr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Ge(i,e,t){return Math.max(e,Math.min(t,i))}function hd(i,e){return(i%e+e)%e}function qo(i,e,t){return(1-t)*i+t*e}function qs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ze=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ei=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],y=r[a+2],M=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=y,e[t+3]=M;return}if(h!==M||c!==f||l!==p||u!==y){let m=1-o,d=c*f+l*p+u*y+h*M,S=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){let A=Math.sqrt(E),w=Math.atan2(A,d*S);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}let x=o*S;if(c=c*m+f*x,l=l*m+p*x,u=u*m+y*x,h=h*m+M*x,m===1-o){let A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],y=r[a+3];return e[t]=o*y+u*h+c*p-l*f,e[t+1]=c*y+u*f+l*h-o*p,e[t+2]=l*y+u*p+o*f-c*h,e[t+3]=u*y-o*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),f=c(n/2),p=c(s/2),y=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*p*y,this._y=l*p*h-f*u*y,this._z=l*u*y+f*p*h,this._w=l*u*h-f*p*y;break;case"YXZ":this._x=f*u*h+l*p*y,this._y=l*p*h-f*u*y,this._z=l*u*y-f*p*h,this._w=l*u*h+f*p*y;break;case"ZXY":this._x=f*u*h-l*p*y,this._y=l*p*h+f*u*y,this._z=l*u*y+f*p*h,this._w=l*u*h-f*p*y;break;case"ZYX":this._x=f*u*h-l*p*y,this._y=l*p*h+f*u*y,this._z=l*u*y-f*p*h,this._w=l*u*h+f*p*y;break;case"YZX":this._x=f*u*h+l*p*y,this._y=l*p*h+f*u*y,this._z=l*u*y-f*p*h,this._w=l*u*h-f*p*y;break;case"XZY":this._x=f*u*h-l*p*y,this._y=l*p*h-f*u*y,this._z=l*u*y+f*p*h,this._w=l*u*h+f*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xo.copy(this).projectOnVector(e),this.sub(Xo)}reflect(e){return this.sub(Xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xo=new U,Bl=new ei,Oe=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],y=n[8],M=s[0],m=s[3],d=s[6],S=s[1],E=s[4],x=s[7],A=s[2],w=s[5],R=s[8];return r[0]=a*M+o*S+c*A,r[3]=a*m+o*E+c*w,r[6]=a*d+o*x+c*R,r[1]=l*M+u*S+h*A,r[4]=l*m+u*E+h*w,r[7]=l*d+u*x+h*R,r[2]=f*M+p*S+y*A,r[5]=f*m+p*E+y*w,r[8]=f*d+p*x+y*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,p=l*r-a*c,y=t*h+n*f+s*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/y;return e[0]=h*M,e[1]=(s*l-u*n)*M,e[2]=(o*n-s*a)*M,e[3]=f*M,e[4]=(u*t-s*c)*M,e[5]=(s*r-o*t)*M,e[6]=p*M,e[7]=(n*c-l*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Yo.makeScale(e,t)),this}rotate(e){return this.premultiply(Yo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yo=new Oe;function Hc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $u(){let i=er("canvas");return i.style.display="block",i}var kl={};function ls(i){i in kl||(kl[i]=!0,console.warn(i))}function qu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var zl=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vl=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dd(){let i={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qe&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?js:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ls("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ls("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Oi]:{primaries:e,whitePoint:n,transfer:js,toXYZ:zl,fromXYZ:Vl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:zl,fromXYZ:Vl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}var Xe=dd();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Zi,aa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zi===void 0&&(Zi=er("canvas")),Zi.width=e.width,Zi.height=e.height;let s=Zi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Zi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=er("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fd=0,us=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zo(s[a].image)):r.push(Zo(s[a]))}else r=Zo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?aa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pd=0,Jo=new U,ln=class i extends Qn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=fi,s=fi,r=wn,a=vi,o=_n,c=In,l=i.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Sr(),this.name="",this.source=new us(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jo).x}get height(){return this.source.getSize(Jo).y}get depth(){return this.source.getSize(Jo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case na:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case na:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Ic;ln.DEFAULT_ANISOTROPY=1;var yt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],y=c[9],M=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-M)<.01&&Math.abs(y-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+M)<.1&&Math.abs(y+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,x=(p+1)/2,A=(d+1)/2,w=(u+f)/4,R=(h+M)/4,L=(y+m)/4;return E>x&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=R/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=L/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=L/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-y)*(m-y)+(h-M)*(h-M)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-y)/S,this.y=(h-M)/S,this.z=(f-u)/S,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oa=class extends Qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new ln(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new us(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends oa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},tr=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ca=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Or.subVectors(this.max,Xs),Ji.subVectors(e.a,Xs),Ki.subVectors(e.b,Xs),ji.subVectors(e.c,Xs),ai.subVectors(Ki,Ji),oi.subVectors(ji,Ki),Ri.subVectors(Ji,ji);let t=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-Ri.z,Ri.y,ai.z,0,-ai.x,oi.z,0,-oi.x,Ri.z,0,-Ri.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-Ri.y,Ri.x,0];return!Ko(t,Ji,Ki,ji,Or)||(t=[1,0,0,0,1,0,0,0,1],!Ko(t,Ji,Ki,ji,Or))?!1:(Fr.crossVectors(ai,oi),t=[Fr.x,Fr.y,Fr.z],Ko(t,Ji,Ki,ji,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qn=[new U,new U,new U,new U,new U,new U,new U,new U],Mn=new U,Ur=new Nn,Ji=new U,Ki=new U,ji=new U,ai=new U,oi=new U,Ri=new U,Xs=new U,Or=new U,Fr=new U,Ii=new U;function Ko(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ii.fromArray(i,r);let o=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),c=e.dot(Ii),l=t.dot(Ii),u=n.dot(Ii);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var md=new Nn,Ys=new U,jo=new U,hs=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):md.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);let t=Ys.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ys,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(jo)),this.expandByPoint(Ys.copy(e.center).sub(jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Xn=new U,Qo=new U,Br=new U,ci=new U,ec=new U,kr=new U,tc=new U,nr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Qo.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(Qo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=ci.dot(this.direction),c=-ci.dot(Br),l=ci.lengthSq(),u=Math.abs(1-a*a),h,f,p,y;if(u>0)if(h=a*c-o,f=a*o-c,y=r*u,h>=0)if(f>=-y)if(f<=y){let M=1/u;h*=M,f*=M,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-y?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=y?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Qo).addScaledVector(Br,f),p}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);let n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,s,r){ec.subVectors(t,e),kr.subVectors(n,e),tc.crossVectors(ec,kr);let a=this.direction.dot(tc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,e);let c=o*this.direction.dot(kr.crossVectors(ci,kr));if(c<0)return null;let l=o*this.direction.dot(ec.cross(ci));if(l<0||c+l>a)return null;let u=-o*ci.dot(tc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class i{constructor(e,t,n,s,r,a,o,c,l,u,h,f,p,y,M,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,f,p,y,M,m)}set(e,t,n,s,r,a,o,c,l,u,h,f,p,y,M,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=y,d[11]=M,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Qi.setFromMatrixColumn(e,0).length(),r=1/Qi.setFromMatrixColumn(e,1).length(),a=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=a*u,p=a*h,y=o*u,M=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+y*l,t[5]=f-M*l,t[9]=-o*c,t[2]=M-f*l,t[6]=y+p*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,p=c*h,y=l*u,M=l*h;t[0]=f+M*o,t[4]=y*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-y,t[6]=M+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,p=c*h,y=l*u,M=l*h;t[0]=f-M*o,t[4]=-a*h,t[8]=y+p*o,t[1]=p+y*o,t[5]=a*u,t[9]=M-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,p=a*h,y=o*u,M=o*h;t[0]=c*u,t[4]=y*l-p,t[8]=f*l+M,t[1]=c*h,t[5]=M*l+f,t[9]=p*l-y,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*l,y=o*c,M=o*l;t[0]=c*u,t[4]=M-f*h,t[8]=y*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+y,t[10]=f-M*h}else if(e.order==="XZY"){let f=a*c,p=a*l,y=o*c,M=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+M,t[5]=a*u,t[9]=p*h-y,t[2]=y*h-p,t[6]=o*u,t[10]=M*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gd,e,yd)}lookAt(e,t,n){let s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),li.crossVectors(n,an),li.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),li.crossVectors(n,an)),li.normalize(),zr.crossVectors(an,li),s[0]=li.x,s[4]=zr.x,s[8]=an.x,s[1]=li.y,s[5]=zr.y,s[9]=an.y,s[2]=li.z,s[6]=zr.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],y=n[2],M=n[6],m=n[10],d=n[14],S=n[3],E=n[7],x=n[11],A=n[15],w=s[0],R=s[4],L=s[8],b=s[12],v=s[1],I=s[5],F=s[9],V=s[13],W=s[2],X=s[6],$=s[10],ne=s[14],H=s[3],oe=s[7],de=s[11],we=s[15];return r[0]=a*w+o*v+c*W+l*H,r[4]=a*R+o*I+c*X+l*oe,r[8]=a*L+o*F+c*$+l*de,r[12]=a*b+o*V+c*ne+l*we,r[1]=u*w+h*v+f*W+p*H,r[5]=u*R+h*I+f*X+p*oe,r[9]=u*L+h*F+f*$+p*de,r[13]=u*b+h*V+f*ne+p*we,r[2]=y*w+M*v+m*W+d*H,r[6]=y*R+M*I+m*X+d*oe,r[10]=y*L+M*F+m*$+d*de,r[14]=y*b+M*V+m*ne+d*we,r[3]=S*w+E*v+x*W+A*H,r[7]=S*R+E*I+x*X+A*oe,r[11]=S*L+E*F+x*$+A*de,r[15]=S*b+E*V+x*ne+A*we,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],y=e[3],M=e[7],m=e[11],d=e[15];return y*(+r*c*h-s*l*h-r*o*f+n*l*f+s*o*p-n*c*p)+M*(+t*c*p-t*l*f+r*a*f-s*a*p+s*l*u-r*c*u)+m*(+t*l*h-t*o*p-r*a*h+n*a*p+r*o*u-n*l*u)+d*(-s*o*u-t*c*h+t*o*f+s*a*h-n*a*f+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],y=e[12],M=e[13],m=e[14],d=e[15],S=h*m*l-M*f*l+M*c*p-o*m*p-h*c*d+o*f*d,E=y*f*l-u*m*l-y*c*p+a*m*p+u*c*d-a*f*d,x=u*M*l-y*h*l+y*o*p-a*M*p-u*o*d+a*h*d,A=y*h*c-u*M*c-y*o*f+a*M*f+u*o*m-a*h*m,w=t*S+n*E+s*x+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return e[0]=S*R,e[1]=(M*f*r-h*m*r-M*s*p+n*m*p+h*s*d-n*f*d)*R,e[2]=(o*m*r-M*c*r+M*s*l-n*m*l-o*s*d+n*c*d)*R,e[3]=(h*c*r-o*f*r-h*s*l+n*f*l+o*s*p-n*c*p)*R,e[4]=E*R,e[5]=(u*m*r-y*f*r+y*s*p-t*m*p-u*s*d+t*f*d)*R,e[6]=(y*c*r-a*m*r-y*s*l+t*m*l+a*s*d-t*c*d)*R,e[7]=(a*f*r-u*c*r+u*s*l-t*f*l-a*s*p+t*c*p)*R,e[8]=x*R,e[9]=(y*h*r-u*M*r-y*n*p+t*M*p+u*n*d-t*h*d)*R,e[10]=(a*M*r-y*o*r+y*n*l-t*M*l-a*n*d+t*o*d)*R,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*p-t*o*p)*R,e[12]=A*R,e[13]=(u*M*s-y*h*s+y*n*f-t*M*f-u*n*m+t*h*m)*R,e[14]=(y*o*s-a*M*s-y*n*c+t*M*c+a*n*m-t*o*m)*R,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*f+t*o*f)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,f=r*l,p=r*u,y=r*h,M=a*u,m=a*h,d=o*h,S=c*l,E=c*u,x=c*h,A=n.x,w=n.y,R=n.z;return s[0]=(1-(M+d))*A,s[1]=(p+x)*A,s[2]=(y-E)*A,s[3]=0,s[4]=(p-x)*w,s[5]=(1-(f+d))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(y+E)*R,s[9]=(m-S)*R,s[10]=(1-(f+M))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Qi.set(s[0],s[1],s[2]).length(),a=Qi.set(s[4],s[5],s[6]).length(),o=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Sn.copy(this);let l=1/r,u=1/a,h=1/o;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,t.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Tn,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),y,M;if(c)y=r/(a-r),M=a*r/(a-r);else if(o===Tn)y=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Qs)y=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=y,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Tn,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),y,M;if(c)y=1/(a-r),M=a/(a-r);else if(o===Tn)y=-2/(a-r),M=-(a+r)/(a-r);else if(o===Qs)y=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=y,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qi=new U,Sn=new bt,gd=new U(0,0,0),yd=new U(1,1,1),li=new U,zr=new U,an=new U,Hl=new bt,Gl=new ei,An=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var ds=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_d=0,Wl=new U,es=new ei,Yn=new bt,Vr=new U,Zs=new U,vd=new U,xd=new ei,$l=new U(1,0,0),ql=new U(0,1,0),Xl=new U(0,0,1),Yl={type:"added"},bd={type:"removed"},ts={type:"childadded",child:null},nc={type:"childremoved",child:null},Ht=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new An,n=new ei,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new Oe}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis($l,e)}rotateY(e){return this.rotateOnAxis(ql,e)}rotateZ(e){return this.rotateOnAxis(Xl,e)}translateOnAxis(e,t){return Wl.copy(e).applyQuaternion(this.quaternion),this.position.add(Wl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($l,e)}translateY(e){return this.translateOnAxis(ql,e)}translateZ(e){return this.translateOnAxis(Xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vr.copy(e):Vr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Zs,Vr,this.up):Yn.lookAt(Vr,Zs,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Yn),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yl),ts.child=e,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bd),nc.child=e,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yl),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,xd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ht.DEFAULT_UP=new U(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new U,Zn=new U,ic=new U,Jn=new U,ns=new U,is=new U,Zl=new U,sc=new U,rc=new U,ac=new U,oc=new yt,cc=new yt,lc=new yt,di=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),En.subVectors(e,t),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){En.subVectors(s,t),Zn.subVectors(n,t),ic.subVectors(e,t);let a=En.dot(En),o=En.dot(Zn),c=En.dot(ic),l=Zn.dot(Zn),u=Zn.dot(ic),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(l*c-o*u)*f,y=(a*u-o*c)*f;return r.set(1-p-y,y,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(a,Jn.y),c.addScaledVector(o,Jn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return oc.setScalar(0),cc.setScalar(0),lc.setScalar(0),oc.fromBufferAttribute(e,t),cc.fromBufferAttribute(e,n),lc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(oc,r.x),a.addScaledVector(cc,r.y),a.addScaledVector(lc,r.z),a}static isFrontFacing(e,t,n,s){return En.subVectors(n,t),Zn.subVectors(e,t),En.cross(Zn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),En.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ns.subVectors(s,n),is.subVectors(r,n),sc.subVectors(e,n);let c=ns.dot(sc),l=is.dot(sc);if(c<=0&&l<=0)return t.copy(n);rc.subVectors(e,s);let u=ns.dot(rc),h=is.dot(rc);if(u>=0&&h<=u)return t.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(ns,a);ac.subVectors(e,r);let p=ns.dot(ac),y=is.dot(ac);if(y>=0&&p<=y)return t.copy(r);let M=p*l-c*y;if(M<=0&&l>=0&&y<=0)return o=l/(l-y),t.copy(n).addScaledVector(is,o);let m=u*y-p*h;if(m<=0&&h-u>=0&&p-y>=0)return Zl.subVectors(r,s),o=(h-u)/(h-u+(p-y)),t.copy(s).addScaledVector(Zl,o);let d=1/(m+M+f);return a=M*d,o=f*d,t.copy(n).addScaledVector(ns,a).addScaledVector(is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function uc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=hd(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=uc(a,r,e+1/3),this.g=uc(a,r,e),this.b=uc(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let n=Xu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Xe.workingToColorSpace(Vt.copy(this),e),Math.round(Ge(Vt.r*255,0,255))*65536+Math.round(Ge(Vt.g*255,0,255))*256+Math.round(Ge(Vt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Vt.copy(this),t);let n=Vt.r,s=Vt.g,r=Vt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Xt){Xe.workingToColorSpace(Vt.copy(this),e);let t=Vt.r,n=Vt.g,s=Vt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Hr);let n=qo(ui.h,Hr.h,t),s=qo(ui.s,Hr.s,t),r=qo(ui.l,Hr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new We;We.NAMES=Xu;var Md=0,mi=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=Ni,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=ta,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ea&&(n.blendSrc=this.blendSrc),this.blendDst!==ta&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ir=class extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var wt=new U,Gr=new ze,Sd=0,cn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vc,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vc&&(e.usage=this.usage),e}};var sr=class extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var rr=class extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Rt=class extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ed=0,mn=new bt,hc=new Ht,ss=new U,on=new Nn,Js=new Nn,Ut=new U,Cn=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hc(e)?rr:sr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return hc.lookAt(e),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Js.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(on.min,Js.min),on.expandByPoint(Ut),Ut.addVectors(on.max,Js.max),on.expandByPoint(Ut)):(on.expandByPoint(Js.min),on.expandByPoint(Js.max))}on.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ut.fromBufferAttribute(o,l),c&&(ss.fromBufferAttribute(e,l),Ut.add(ss)),s=Math.max(s,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new U,c[L]=new U;let l=new U,u=new U,h=new U,f=new ze,p=new ze,y=new ze,M=new U,m=new U;function d(L,b,v){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,v),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,b),y.fromBufferAttribute(r,v),u.sub(l),h.sub(l),p.sub(f),y.sub(f);let I=1/(p.x*y.y-y.x*p.y);isFinite(I)&&(M.copy(u).multiplyScalar(y.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-y.x).multiplyScalar(I),o[L].add(M),o[b].add(M),o[v].add(M),c[L].add(m),c[b].add(m),c[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,b=S.length;L<b;++L){let v=S[L],I=v.start,F=v.count;for(let V=I,W=I+F;V<W;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let E=new U,x=new U,A=new U,w=new U;function R(L){A.fromBufferAttribute(s,L),w.copy(A);let b=o[L];E.copy(b),E.sub(A.multiplyScalar(A.dot(b))).normalize(),x.crossVectors(w,b);let I=x.dot(c[L])<0?-1:1;a.setXYZW(L,E.x,E.y,E.z,I)}for(let L=0,b=S.length;L<b;++L){let v=S[L],I=v.start,F=v.count;for(let V=I,W=I+F;V<W;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,u=new U,h=new U;if(e)for(let f=0,p=e.count;f<p;f+=3){let y=e.getX(f+0),M=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,y),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u),p=0,y=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?p=c[M]*o.data.stride+o.offset:p=c[M]*u;for(let d=0;d<u;d++)f[y++]=l[p++]}return new cn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jl=new bt,Pi=new nr,Wr=new hs,Kl=new U,$r=new U,qr=new U,Xr=new U,dc=new U,Yr=new U,jl=new U,Zr=new U,dt=class extends Ht{constructor(e=new Cn,t=new ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Yr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(dc.fromBufferAttribute(h,e),a?Yr.addScaledVector(dc,u):Yr.addScaledVector(dc.sub(t),u))}t.add(Yr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(r),Pi.copy(e.ray).recast(e.near),!(Wr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Wr,Kl)===null||Pi.origin.distanceToSquared(Kl)>(e.far-e.near)**2))&&(Jl.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,M=f.length;y<M;y++){let m=f[y],d=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,A=E;x<A;x+=3){let w=o.getX(x),R=o.getX(x+1),L=o.getX(x+2);s=Jr(this,d,e,n,l,u,h,w,R,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let y=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=y,d=M;m<d;m+=3){let S=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);s=Jr(this,a,e,n,l,u,h,S,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let y=0,M=f.length;y<M;y++){let m=f[y],d=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,A=E;x<A;x+=3){let w=x,R=x+1,L=x+2;s=Jr(this,d,e,n,l,u,h,w,R,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let y=Math.max(0,p.start),M=Math.min(c.count,p.start+p.count);for(let m=y,d=M;m<d;m+=3){let S=m,E=m+1,x=m+2;s=Jr(this,a,e,n,l,u,h,S,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Td(i,e,t,n,s,r,a,o){let c;if(e.side===Yt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===jn,o),c===null)return null;Zr.copy(o),Zr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Zr);return l<t.near||l>t.far?null:{distance:l,point:Zr.clone(),object:i}}function Jr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,$r),i.getVertexPosition(c,qr),i.getVertexPosition(l,Xr);let u=Td(i,e,t,n,$r,qr,Xr,jl);if(u){let h=new U;di.getBarycoord(jl,$r,qr,Xr,h),s&&(u.uv=di.getInterpolatedAttribute(s,o,c,l,h,new ze)),r&&(u.uv1=di.getInterpolatedAttribute(r,o,c,l,h,new ze)),a&&(u.normal=di.getInterpolatedAttribute(a,o,c,l,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new U,materialIndex:0};di.getNormal($r,qr,Xr,f.normal),u.face=f,u.barycoord=h}return u}var Un=class i extends Cn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],f=0,p=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,s,a,2),y("x","z","y",1,-1,e,n,-t,s,a,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(u,3)),this.setAttribute("uv",new Rt(h,2));function y(M,m,d,S,E,x,A,w,R,L,b){let v=x/R,I=A/L,F=x/2,V=A/2,W=w/2,X=R+1,$=L+1,ne=0,H=0,oe=new U;for(let de=0;de<$;de++){let we=de*I-V;for(let Ve=0;Ve<X;Ve++){let st=Ve*v-F;oe[M]=st*S,oe[m]=we*E,oe[d]=W,l.push(oe.x,oe.y,oe.z),oe[M]=0,oe[m]=0,oe[d]=w>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(Ve/R),h.push(1-de/L),ne+=1}}for(let de=0;de<L;de++)for(let we=0;we<R;we++){let Ve=f+we+X*de,st=f+we+X*(de+1),lt=f+(we+1)+X*(de+1),Ze=f+(we+1)+X*de;c.push(Ve,st,Ze),c.push(st,lt,Ze),H+=6}o.addGroup(p,H,b),p+=H,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Hi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Gt(i){let e={};for(let t=0;t<i.length;t++){let n=Hi(i[t]);for(let s in n)e[s]=n[s]}return e}function wd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}var Yu={clone:Hi,merge:Gt},Ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ad,this.fragmentShader=Cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=wd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ar=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hi=new U,Ql=new ze,eu=new ze,tn=class extends ar{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ra*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,Ql,eu),t.subVectors(eu,Ql)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($o*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},rs=-90,as=1,la=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(rs,as,e,t);s.layers=this.layers,this.add(s);let r=new tn(rs,as,e,t);r.layers=this.layers,this.add(r);let a=new tn(rs,as,e,t);a.layers=this.layers,this.add(a);let o=new tn(rs,as,e,t);o.layers=this.layers,this.add(o);let c=new tn(rs,as,e,t);c.layers=this.layers,this.add(c);let l=new tn(rs,as,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},or=class extends ln{constructor(e=[],t=zi,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ua=class extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new or(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Un(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:ti});r.uniforms.tEquirect.value=t;let a=new dt(s,r),o=t.minFilter;return t.minFilter===vi&&(t.minFilter=wn),new la(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},gn=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rd={type:"move"},fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let M of e.hand.values()){let m=t.getJointPose(M,n),d=this._getHandJoint(l,M);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,y=.005;l.inputState.pinching&&f>p+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var cr=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var fc=new U,Id=new U,Pd=new Oe,Ln=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=fc.subVectors(n,t).cross(Id.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(fc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Pd.getNormalMatrix(e),s=this.coplanarPoint(fc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Li=new hs,Ld=new ze(.5,.5),Kr=new U,ps=class{constructor(e=new Ln,t=new Ln,n=new Ln,s=new Ln,r=new Ln,a=new Ln){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],p=r[7],y=r[8],M=r[9],m=r[10],d=r[11],S=r[12],E=r[13],x=r[14],A=r[15];if(s[0].setComponents(l-a,p-u,d-y,A-S).normalize(),s[1].setComponents(l+a,p+u,d+y,A+S).normalize(),s[2].setComponents(l+o,p+h,d+M,A+E).normalize(),s[3].setComponents(l-o,p-h,d-M,A-E).normalize(),n)s[4].setComponents(c,f,m,x).normalize(),s[5].setComponents(l-c,p-f,d-m,A-x).normalize();else if(s[4].setComponents(l-c,p-f,d-m,A-x).normalize(),t===Tn)s[5].setComponents(l+c,p+f,d+m,A+x).normalize();else if(t===Qs)s[5].setComponents(c,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);let t=Ld.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Kr.x=s.normal.x>0?e.max.x:e.min.x,Kr.y=s.normal.y>0?e.max.y:e.min.y,Kr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var lr=class extends ln{constructor(e,t,n=xi,s,r,a,o=yn,c=yn,l,u=cs,h=1){if(u!==cs&&u!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new us(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ur=class extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var gi=class i extends Cn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],y=0,M=[],m=n/2,d=0;S(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Rt(h,3)),this.setAttribute("normal",new Rt(f,3)),this.setAttribute("uv",new Rt(p,2));function S(){let x=new U,A=new U,w=0,R=(t-e)/n;for(let L=0;L<=r;L++){let b=[],v=L/r,I=v*(t-e)+e;for(let F=0;F<=s;F++){let V=F/s,W=V*c+o,X=Math.sin(W),$=Math.cos(W);A.x=I*X,A.y=-v*n+m,A.z=I*$,h.push(A.x,A.y,A.z),x.set(X,R,$).normalize(),f.push(x.x,x.y,x.z),p.push(V,1-v),b.push(y++)}M.push(b)}for(let L=0;L<s;L++)for(let b=0;b<r;b++){let v=M[b][L],I=M[b+1][L],F=M[b+1][L+1],V=M[b][L+1];(e>0||b!==0)&&(u.push(v,I,V),w+=3),(t>0||b!==r-1)&&(u.push(I,F,V),w+=3)}l.addGroup(d,w,0),d+=w}function E(x){let A=y,w=new ze,R=new U,L=0,b=x===!0?e:t,v=x===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*v,0),f.push(0,v,0),p.push(.5,.5),y++;let I=y;for(let F=0;F<=s;F++){let W=F/s*c+o,X=Math.cos(W),$=Math.sin(W);R.x=b*$,R.y=m*v,R.z=b*X,h.push(R.x,R.y,R.z),f.push(0,v,0),w.x=X*.5+.5,w.y=$*.5*v+.5,p.push(w.x,w.y),y++}for(let F=0;F<s;F++){let V=A+F,W=I+F;x===!0?u.push(W,W+1,V):u.push(W+1,W,V),L+=3}l.addGroup(d,L,x===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ha=class i extends Cn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new Rt(r,3)),this.setAttribute("normal",new Rt(r.slice(),3)),this.setAttribute("uv",new Rt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let E=new U,x=new U,A=new U;for(let w=0;w<t.length;w+=3)p(t[w+0],E),p(t[w+1],x),p(t[w+2],A),c(E,x,A,S)}function c(S,E,x,A){let w=A+1,R=[];for(let L=0;L<=w;L++){R[L]=[];let b=S.clone().lerp(x,L/w),v=E.clone().lerp(x,L/w),I=w-L;for(let F=0;F<=I;F++)F===0&&L===w?R[L][F]=b:R[L][F]=b.clone().lerp(v,F/I)}for(let L=0;L<w;L++)for(let b=0;b<2*(w-L)-1;b++){let v=Math.floor(b/2);b%2===0?(f(R[L][v+1]),f(R[L+1][v]),f(R[L][v])):(f(R[L][v+1]),f(R[L+1][v+1]),f(R[L+1][v]))}}function l(S){let E=new U;for(let x=0;x<r.length;x+=3)E.x=r[x+0],E.y=r[x+1],E.z=r[x+2],E.normalize().multiplyScalar(S),r[x+0]=E.x,r[x+1]=E.y,r[x+2]=E.z}function u(){let S=new U;for(let E=0;E<r.length;E+=3){S.x=r[E+0],S.y=r[E+1],S.z=r[E+2];let x=m(S)/2/Math.PI+.5,A=d(S)/Math.PI+.5;a.push(x,1-A)}y(),h()}function h(){for(let S=0;S<a.length;S+=6){let E=a[S+0],x=a[S+2],A=a[S+4],w=Math.max(E,x,A),R=Math.min(E,x,A);w>.9&&R<.1&&(E<.2&&(a[S+0]+=1),x<.2&&(a[S+2]+=1),A<.2&&(a[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function p(S,E){let x=S*3;E.x=e[x+0],E.y=e[x+1],E.z=e[x+2]}function y(){let S=new U,E=new U,x=new U,A=new U,w=new ze,R=new ze,L=new ze;for(let b=0,v=0;b<r.length;b+=9,v+=6){S.set(r[b+0],r[b+1],r[b+2]),E.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),w.set(a[v+0],a[v+1]),R.set(a[v+2],a[v+3]),L.set(a[v+4],a[v+5]),A.copy(S).add(E).add(x).divideScalar(3);let I=m(A);M(w,v+0,S,I),M(R,v+2,E,I),M(L,v+4,x,I)}}function M(S,E,x,A){A<0&&S.x===1&&(a[E]=S.x-1),x.x===0&&x.z===0&&(a[E]=A/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Fi=class i extends ha{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var hr=class i extends Cn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,f=t/c,p=[],y=[],M=[],m=[];for(let d=0;d<u;d++){let S=d*f-a;for(let E=0;E<l;E++){let x=E*h-r;y.push(x,-S,0),M.push(0,0,1),m.push(E/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<o;S++){let E=S+l*d,x=S+l*(d+1),A=S+1+l*(d+1),w=S+1+l*d;p.push(E,x,w),p.push(x,A,w)}this.setIndex(p),this.setAttribute("position",new Rt(y,3)),this.setAttribute("normal",new Rt(M,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var dr=class i extends Cn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new U,f=new U,p=[],y=[],M=[],m=[];for(let d=0;d<=n;d++){let S=[],E=d/n,x=0;d===0&&a===0?x=.5/t:d===n&&c===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){let w=A/t;h.x=-e*Math.cos(s+w*r)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(s+w*r)*Math.sin(a+E*o),y.push(h.x,h.y,h.z),f.copy(h).normalize(),M.push(f.x,f.y,f.z),m.push(w+x,1-E),S.push(l++)}u.push(S)}for(let d=0;d<n;d++)for(let S=0;S<t;S++){let E=u[d][S+1],x=u[d][S],A=u[d+1][S],w=u[d+1][S+1];(d!==0||a>0)&&p.push(E,x,w),(d!==n-1||c<Math.PI)&&p.push(x,A,w)}this.setIndex(p),this.setAttribute("position",new Rt(y,3)),this.setAttribute("normal",new Rt(M,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var un=class extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kc,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var da=class extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fa=class extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function jr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Dd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Bi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pa=class extends Bi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mc,endingEnd:mc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gc:r=e,o=2*t-n;break;case yc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case gc:a=e,c=2*n-t;break;case yc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,y=(n-t)/(s-t),M=y*y,m=M*y,d=-f*m+2*f*M-f*y,S=(1+f)*m+(-1.5-2*f)*M+(-.5+f)*y+1,E=(-1-p)*m+(1.5+p)*M+.5*y,x=p*m-p*M;for(let A=0;A!==o;++A)r[A]=d*a[u+A]+S*a[l+A]+E*a[c+A]+x*a[h+A];return r}},ma=class extends Bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*h+a[c+f]*u;return r}},ga=class extends Bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},hn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jr(t,this.TimeBufferType),this.values=jr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:jr(e.times,Array),values:jr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ks:t=this.InterpolantFactoryMethodDiscrete;break;case sa:t=this.InterpolantFactoryMethodLinear;break;case Qr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return sa;case this.InterpolantFactoryMethodSmooth:return Qr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Dd(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qr,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let h=o*n,f=h-n,p=h+n;for(let y=0;y!==n;++y){let M=t[h+y];if(M!==t[f+y]||M!==t[p+y]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=sa;var yi=class extends hn{constructor(e,t,n){super(e,t,n)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Ks;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};ya.prototype.ValueTypeName="color";var _a=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};_a.prototype.ValueTypeName="number";var va=class extends Bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)ei.slerpFlat(r,0,a,l-o,a,l,c);return r}},fr=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new va(this.times,this.values,this.getValueSize(),e)}};fr.prototype.ValueTypeName="quaternion";fr.prototype.InterpolantFactoryMethodSmooth=void 0;var _i=class extends hn{constructor(e,t,n){super(e,t,n)}};_i.prototype.ValueTypeName="string";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=Ks;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};xa.prototype.ValueTypeName="vector";var ba=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let p=l[h],y=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return y}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Zu=new ba,Ma=class{constructor(e){this.manager=e!==void 0?e:Zu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ma.DEFAULT_MATERIAL_NAME="__DEFAULT";var pr=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ms=class extends pr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},pc=new bt,tu=new U,nu=new U,xc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ps,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;tu.setFromMatrixPosition(e.matrixWorld),t.position.copy(tu),nu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nu),t.updateMatrixWorld(),pc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ki=class extends ar{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bc=class extends xc{constructor(){super(new ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gs=class extends pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new bc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Sa=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},mr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Wc="\\[\\]\\.:\\/",Nd=new RegExp("["+Wc+"]","g"),$c="[^"+Wc+"]",Ud="[^"+Wc.replace("\\.","")+"]",Od=/((?:WC+[\/:])*)/.source.replace("WC",$c),Fd=/(WCOD+)?/.source.replace("WCOD",Ud),Bd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$c),kd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$c),zd=new RegExp("^"+Od+Fd+Bd+kd+"$"),Vd=["material","materials","bones","map"],Mc=class{constructor(e,t,n){let s=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Nd,"")}static parseTrackName(e){let t=zd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=Mc;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q0=new Float32Array(1);var iu=new bt,gr=class{constructor(e,t,n=0,s=1/0){this.ray=new nr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ds,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return iu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(iu),this}intersectObject(e,t=!0,n=[]){return Sc(e,this,n,t),n.sort(su),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Sc(e[s],this,n,t);return n.sort(su),n}};function su(i,e){return i.distance-e.distance}function Sc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Sc(r[a],e,t,!0)}}function qc(i,e,t,n){let s=Hd(n);switch(t){case Uc:return i*e;case Fc:return i*e/s.components*s.byteLength;case Ba:return i*e/s.components*s.byteLength;case Bc:return i*e*2/s.components*s.byteLength;case ka:return i*e*2/s.components*s.byteLength;case Oc:return i*e*3/s.components*s.byteLength;case _n:return i*e*4/s.components*s.byteLength;case za:return i*e*4/s.components*s.byteLength;case vr:case xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case br:case Mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ha:case Wa:return Math.max(i,16)*Math.max(e,8)/4;case Va:case Ga:return Math.max(i,8)*Math.max(e,8)/2;case $a:case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case eo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case to:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case io:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case so:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ro:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ao:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case co:case lo:case uo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ho:case fo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case po:case mo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hd(i){switch(i){case In:case Pc:return{byteLength:1,components:1};case ys:case Lc:case _s:return{byteLength:2,components:1};case Oa:case Fa:return{byteLength:2,components:4};case xi:case Ua:case Bn:return{byteLength:4,components:1};case Dc:case Nc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function vh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Wd(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,y)=>p.start-y.start);let f=0;for(let p=1;p<h.length;p++){let y=h[f],M=h[p];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++f,h[f]=M)}h.length=f+1;for(let p=0,y=h.length;p<y;p++){let M=h[p];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var $d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qd=`#ifdef USE_ALPHAHASH
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
#endif`,Xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kd=`#ifdef USE_AOMAP
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
#endif`,jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qd=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rf=`#ifdef USE_IRIDESCENCE
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
#endif`,af=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mf=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yf=`vec3 transformedNormal = objectNormal;
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
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ef=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,If=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Df=`#ifdef USE_GRADIENTMAP
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
}`,Nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ff=`uniform bool receiveShadow;
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
#endif`,Bf=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Wf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$f=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tp=`#if defined( USE_POINTS_UV )
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
#endif`,np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
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
#endif`,cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,up=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pp=`#ifdef USE_NORMALMAP
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
#endif`,mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ip=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Np=`#ifdef USE_SKINNING
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
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kp=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qp=`uniform sampler2D t2D;
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`#include <common>
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
}`,jp=`#if DEPTH_PACKING == 3200
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
}`,Qp=`#define DISTANCE
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
}`,em=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`uniform float scale;
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#include <common>
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
}`,am=`uniform vec3 diffuse;
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
}`,om=`#define LAMBERT
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
}`,cm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,lm=`#define MATCAP
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
}`,um=`#define MATCAP
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
}`,hm=`#define NORMAL
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
}`,dm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fm=`#define PHONG
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
}`,pm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,mm=`#define STANDARD
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
}`,gm=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,ym=`#define TOON
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
}`,_m=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,vm=`uniform float size;
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
}`,xm=`uniform vec3 diffuse;
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
}`,bm=`#include <common>
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
}`,Mm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Sm=`uniform float rotation;
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
}`,Em=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:$d,alphahash_pars_fragment:qd,alphamap_fragment:Xd,alphamap_pars_fragment:Yd,alphatest_fragment:Zd,alphatest_pars_fragment:Jd,aomap_fragment:Kd,aomap_pars_fragment:jd,batching_pars_vertex:Qd,batching_vertex:ef,begin_vertex:tf,beginnormal_vertex:nf,bsdfs:sf,iridescence_fragment:rf,bumpmap_pars_fragment:af,clipping_planes_fragment:of,clipping_planes_pars_fragment:cf,clipping_planes_pars_vertex:lf,clipping_planes_vertex:uf,color_fragment:hf,color_pars_fragment:df,color_pars_vertex:ff,color_vertex:pf,common:mf,cube_uv_reflection_fragment:gf,defaultnormal_vertex:yf,displacementmap_pars_vertex:_f,displacementmap_vertex:vf,emissivemap_fragment:xf,emissivemap_pars_fragment:bf,colorspace_fragment:Mf,colorspace_pars_fragment:Sf,envmap_fragment:Ef,envmap_common_pars_fragment:Tf,envmap_pars_fragment:wf,envmap_pars_vertex:Af,envmap_physical_pars_fragment:Bf,envmap_vertex:Cf,fog_vertex:Rf,fog_pars_vertex:If,fog_fragment:Pf,fog_pars_fragment:Lf,gradientmap_pars_fragment:Df,lightmap_pars_fragment:Nf,lights_lambert_fragment:Uf,lights_lambert_pars_fragment:Of,lights_pars_begin:Ff,lights_toon_fragment:kf,lights_toon_pars_fragment:zf,lights_phong_fragment:Vf,lights_phong_pars_fragment:Hf,lights_physical_fragment:Gf,lights_physical_pars_fragment:Wf,lights_fragment_begin:$f,lights_fragment_maps:qf,lights_fragment_end:Xf,logdepthbuf_fragment:Yf,logdepthbuf_pars_fragment:Zf,logdepthbuf_pars_vertex:Jf,logdepthbuf_vertex:Kf,map_fragment:jf,map_pars_fragment:Qf,map_particle_fragment:ep,map_particle_pars_fragment:tp,metalnessmap_fragment:np,metalnessmap_pars_fragment:ip,morphinstance_vertex:sp,morphcolor_vertex:rp,morphnormal_vertex:ap,morphtarget_pars_vertex:op,morphtarget_vertex:cp,normal_fragment_begin:lp,normal_fragment_maps:up,normal_pars_fragment:hp,normal_pars_vertex:dp,normal_vertex:fp,normalmap_pars_fragment:pp,clearcoat_normal_fragment_begin:mp,clearcoat_normal_fragment_maps:gp,clearcoat_pars_fragment:yp,iridescence_pars_fragment:_p,opaque_fragment:vp,packing:xp,premultiplied_alpha_fragment:bp,project_vertex:Mp,dithering_fragment:Sp,dithering_pars_fragment:Ep,roughnessmap_fragment:Tp,roughnessmap_pars_fragment:wp,shadowmap_pars_fragment:Ap,shadowmap_pars_vertex:Cp,shadowmap_vertex:Rp,shadowmask_pars_fragment:Ip,skinbase_vertex:Pp,skinning_pars_vertex:Lp,skinning_vertex:Dp,skinnormal_vertex:Np,specularmap_fragment:Up,specularmap_pars_fragment:Op,tonemapping_fragment:Fp,tonemapping_pars_fragment:Bp,transmission_fragment:kp,transmission_pars_fragment:zp,uv_pars_fragment:Vp,uv_pars_vertex:Hp,uv_vertex:Gp,worldpos_vertex:Wp,background_vert:$p,background_frag:qp,backgroundCube_vert:Xp,backgroundCube_frag:Yp,cube_vert:Zp,cube_frag:Jp,depth_vert:Kp,depth_frag:jp,distanceRGBA_vert:Qp,distanceRGBA_frag:em,equirect_vert:tm,equirect_frag:nm,linedashed_vert:im,linedashed_frag:sm,meshbasic_vert:rm,meshbasic_frag:am,meshlambert_vert:om,meshlambert_frag:cm,meshmatcap_vert:lm,meshmatcap_frag:um,meshnormal_vert:hm,meshnormal_frag:dm,meshphong_vert:fm,meshphong_frag:pm,meshphysical_vert:mm,meshphysical_frag:gm,meshtoon_vert:ym,meshtoon_frag:_m,points_vert:vm,points_frag:xm,shadow_vert:bm,shadow_frag:Mm,sprite_vert:Sm,sprite_frag:Em},ae={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},kn={basic:{uniforms:Gt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Gt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new We(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Gt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Gt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Gt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new We(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Gt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Gt([ae.points,ae.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Gt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Gt([ae.common,ae.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Gt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Gt([ae.sprite,ae.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Gt([ae.common,ae.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Gt([ae.lights,ae.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};kn.physical={uniforms:Gt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var go={r:0,b:0,g:0},Gi=new An,Tm=new bt;function wm(i,e,t,n,s,r,a){let o=new We(0),c=r===!0?0:1,l,u,h=null,f=0,p=null;function y(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?t:e).get(x)),x}function M(E){let x=!1,A=y(E);A===null?d(o,c):A&&A.isColor&&(d(A,1),x=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,x){let A=y(x);A&&(A.isCubeTexture||A.mapping===yr)?(u===void 0&&(u=new dt(new Un(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Hi(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Gi.copy(x.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Tm.makeRotationFromEuler(Gi)),u.material.toneMapped=Xe.getTransfer(A.colorSpace)!==Qe,(h!==A||f!==A.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,p=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new dt(new hr(2,2),new Rn({name:"BackgroundMaterial",uniforms:Hi(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(A.colorSpace)!==Qe,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,f=A.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function d(E,x){E.getRGB(go,Gc(i)),n.buffers.color.setClear(go.r,go.g,go.b,x,a)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),c=x,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,d(o,c)},render:M,addToRenderList:m,dispose:S}}function Am(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(v,I,F,V,W){let X=!1,$=h(V,F,I);r!==$&&(r=$,l(r.object)),X=p(v,V,F,W),X&&y(v,V,F,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(v,I,F,V),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,I,F){let V=F.wireframe===!0,W=n[v.id];W===void 0&&(W={},n[v.id]=W);let X=W[I.id];X===void 0&&(X={},W[I.id]=X);let $=X[V];return $===void 0&&($=f(c()),X[V]=$),$}function f(v){let I=[],F=[],V=[];for(let W=0;W<t;W++)I[W]=0,F[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:V,object:v,attributes:{},index:null}}function p(v,I,F,V){let W=r.attributes,X=I.attributes,$=0,ne=F.getAttributes();for(let H in ne)if(ne[H].location>=0){let de=W[H],we=X[H];if(we===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(we=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(we=v.instanceColor)),de===void 0||de.attribute!==we||we&&de.data!==we.data)return!0;$++}return r.attributesNum!==$||r.index!==V}function y(v,I,F,V){let W={},X=I.attributes,$=0,ne=F.getAttributes();for(let H in ne)if(ne[H].location>=0){let de=X[H];de===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(de=v.instanceColor));let we={};we.attribute=de,de&&de.data&&(we.data=de.data),W[H]=we,$++}r.attributes=W,r.attributesNum=$,r.index=V}function M(){let v=r.newAttributes;for(let I=0,F=v.length;I<F;I++)v[I]=0}function m(v){d(v,0)}function d(v,I){let F=r.newAttributes,V=r.enabledAttributes,W=r.attributeDivisors;F[v]=1,V[v]===0&&(i.enableVertexAttribArray(v),V[v]=1),W[v]!==I&&(i.vertexAttribDivisor(v,I),W[v]=I)}function S(){let v=r.newAttributes,I=r.enabledAttributes;for(let F=0,V=I.length;F<V;F++)I[F]!==v[F]&&(i.disableVertexAttribArray(F),I[F]=0)}function E(v,I,F,V,W,X,$){$===!0?i.vertexAttribIPointer(v,I,F,W,X):i.vertexAttribPointer(v,I,F,V,W,X)}function x(v,I,F,V){M();let W=V.attributes,X=F.getAttributes(),$=I.defaultAttributeValues;for(let ne in X){let H=X[ne];if(H.location>=0){let oe=W[ne];if(oe===void 0&&(ne==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),ne==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor)),oe!==void 0){let de=oe.normalized,we=oe.itemSize,Ve=e.get(oe);if(Ve===void 0)continue;let st=Ve.buffer,lt=Ve.type,Ze=Ve.bytesPerElement,Y=lt===i.INT||lt===i.UNSIGNED_INT||oe.gpuType===Ua;if(oe.isInterleavedBufferAttribute){let K=oe.data,ge=K.stride,De=oe.offset;if(K.isInstancedInterleavedBuffer){for(let Te=0;Te<H.locationSize;Te++)d(H.location+Te,K.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Te=0;Te<H.locationSize;Te++)m(H.location+Te);i.bindBuffer(i.ARRAY_BUFFER,st);for(let Te=0;Te<H.locationSize;Te++)E(H.location+Te,we/H.locationSize,lt,de,ge*Ze,(De+we/H.locationSize*Te)*Ze,Y)}else{if(oe.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)d(H.location+K,oe.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let K=0;K<H.locationSize;K++)m(H.location+K);i.bindBuffer(i.ARRAY_BUFFER,st);for(let K=0;K<H.locationSize;K++)E(H.location+K,we/H.locationSize,lt,de,we*Ze,we/H.locationSize*K*Ze,Y)}}else if($!==void 0){let de=$[ne];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(H.location,de);break;case 3:i.vertexAttrib3fv(H.location,de);break;case 4:i.vertexAttrib4fv(H.location,de);break;default:i.vertexAttrib1fv(H.location,de)}}}}S()}function A(){L();for(let v in n){let I=n[v];for(let F in I){let V=I[F];for(let W in V)u(V[W].object),delete V[W];delete I[F]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;let I=n[v.id];for(let F in I){let V=I[F];for(let W in V)u(V[W].object),delete V[W];delete I[F]}delete n[v.id]}function R(v){for(let I in n){let F=n[I];if(F[v.id]===void 0)continue;let V=F[v.id];for(let W in V)u(V[W].object),delete V[W];delete F[v.id]}}function L(){b(),a=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function Cm(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let y=0;y<h;y++)p+=u[y];t.update(p,n,1)}function c(l,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<l.length;y++)a(l[y],u[y],f[y]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let y=0;for(let M=0;M<h;M++)y+=u[M]*f[M];t.update(y,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Rm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==_n&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let L=R===_s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==In&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Bn&&!L)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=y>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:A,maxSamples:w}}function Im(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Ln,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let y=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||y===null||y.length===0||r&&!m)r?u(null):l();else{let S=r?0:n,E=S*4,x=d.clippingState||null;c.value=x,x=u(y,f,E,p);for(let A=0;A!==E;++A)x[A]=t[A];d.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,y){let M=h!==null?h.length:0,m=null;if(M!==0){if(m=c.value,y!==!0||m===null){let d=p+M*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,x=p;E!==M;++E,x+=4)a.copy(h[E]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function Pm(i){let e=new WeakMap;function t(a,o){return o===La?a.mapping=zi:o===Da&&(a.mapping=Vi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===La||o===Da)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new ua(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ms=4,Ju=[.125,.215,.35,.446,.526,.582],qi=20,Xc=new ki,Ku=new We,Yc=null,Zc=0,Jc=0,Kc=!1,$i=(1+Math.sqrt(5))/2,bs=1/$i,ju=[new U(-$i,bs,0),new U($i,bs,0),new U(-bs,0,$i),new U(bs,0,$i),new U(0,$i,-bs),new U(0,$i,bs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Lm=new U,vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Lm}=r;Yc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yc,Zc,Jc),this._renderer.xr.enabled=Kc,e.scissorTest=!1,yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===Vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:_s,format:_n,colorSpace:Oi,depthBuffer:!1},s=Qu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dm(r)),this._blurMaterial=Nm(r,e,t)}return s}_compileMaterial(e){let t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,Xc)}_sceneToCubeUV(e,t,n,s,r){let c=new tn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Ku),h.toneMapping=ni,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let M=new ir({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),m=new dt(new Un,M),d=!1,S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,d=!0):(M.color.copy(Ku),d=!0);for(let E=0;E<6;E++){let x=E%3;x===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):x===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));let A=this._cubeSize;yo(s,x*A,E>2?A:0,A,A),h.setRenderTarget(s),d&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===zi||e.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;yo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Xc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ju[(s-r-1)%ju.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new dt(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*qi-1),M=r/y,m=isFinite(r)?1+Math.floor(u*M):qi;m>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);let d=[],S=0;for(let R=0;R<qi;++R){let L=R/M,b=Math.exp(-L*L/2);d.push(b),R===0?S+=b:R<m&&(S+=2*b)}for(let R=0;R<d.length;R++)d[R]=d[R]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:E}=this;f.dTheta.value=y,f.mipInt.value=E-n;let x=this._sizeLods[s],A=3*x*(s>E-Ms?s-E+Ms:0),w=4*(this._cubeSize-x);yo(t,A,w,3*x,2*x),c.setRenderTarget(t),c.render(h,Xc)}};function Dm(i){let e=[],t=[],n=[],s=i,r=i-Ms+1+Ju.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ms?c=Ju[a-i+Ms-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,y=6,M=3,m=2,d=1,S=new Float32Array(M*y*p),E=new Float32Array(m*y*p),x=new Float32Array(d*y*p);for(let w=0;w<p;w++){let R=w%3*2/3-1,L=w>2?0:-1,b=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];S.set(b,M*y*w),E.set(f,m*y*w);let v=[w,w,w,w,w,w];x.set(v,d*y*w)}let A=new Cn;A.setAttribute("position",new cn(S,M)),A.setAttribute("uv",new cn(E,m)),A.setAttribute("faceIndex",new cn(x,d)),e.push(A),s>Ms&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qu(i,e,t){let n=new Dn(i,e,t);return n.texture.mapping=yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Nm(i,e,t){let n=new Float32Array(qi),s=new U(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ol(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function eh(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function th(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function ol(){return`

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
	`}function Um(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===La||c===Da,u=c===zi||c===Vi;if(l||u){let h=e.get(o),f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new vo(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let p=o.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new vo(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Om(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ls("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fm(i,e,t,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let y in f.attributes)e.remove(f.attributes[y]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(h){let f=[],p=h.index,y=h.attributes.position,M=0;if(p!==null){let S=p.array;M=p.version;for(let E=0,x=S.length;E<x;E+=3){let A=S[E+0],w=S[E+1],R=S[E+2];f.push(A,w,w,R,R,A)}}else if(y!==void 0){let S=y.array;M=y.version;for(let E=0,x=S.length/3-1;E<x;E+=3){let A=E+0,w=E+1,R=E+2;f.push(A,w,w,R,R,A)}}else return;let m=new(Hc(f)?rr:sr)(f,1);m.version=M;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Bm(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function l(f,p,y){y!==0&&(i.drawElementsInstanced(n,p,r,f*a,y),t.update(p,n,y))}function u(f,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,y);let m=0;for(let d=0;d<y;d++)m+=p[d];t.update(m,n,1)}function h(f,p,y,M){if(y===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],M[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,M,0,y);let d=0;for(let S=0;S<y;S++)d+=p[S]*M[S];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function km(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zm(i,e,t){let n=new WeakMap,s=new yt;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let b=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],E=0;p===!0&&(E=1),y===!0&&(E=2),M===!0&&(E=3);let x=o.attributes.position.count*E,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*A*4*h),R=new tr(w,x,A,h);R.type=Bn,R.needsUpdate=!0;let L=E*4;for(let v=0;v<h;v++){let I=m[v],F=d[v],V=S[v],W=x*A*4*v;for(let X=0;X<I.count;X++){let $=X*L;p===!0&&(s.fromBufferAttribute(I,X),w[W+$+0]=s.x,w[W+$+1]=s.y,w[W+$+2]=s.z,w[W+$+3]=0),y===!0&&(s.fromBufferAttribute(F,X),w[W+$+4]=s.x,w[W+$+5]=s.y,w[W+$+6]=s.z,w[W+$+7]=0),M===!0&&(s.fromBufferAttribute(V,X),w[W+$+8]=s.x,w[W+$+9]=s.y,w[W+$+10]=s.z,w[W+$+11]=V.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new ze(x,A)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let M=0;M<l.length;M++)p+=l[M];let y=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Vm(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var xh=new ln,nh=new lr(1,1),bh=new tr,Mh=new ca,Sh=new or,ih=[],sh=[],rh=new Float32Array(16),ah=new Float32Array(9),oh=new Float32Array(4);function Es(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ih[s];if(r===void 0&&(r=new Float32Array(s),ih[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function bo(i,e){let t=sh[e];t===void 0&&(t=new Int32Array(e),sh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function $m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function qm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;oh.set(n),i.uniformMatrix2fv(this.addr,!1,oh),Pt(t,n)}}function Xm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;ah.set(n),i.uniformMatrix3fv(this.addr,!1,ah),Pt(t,n)}}function Ym(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;rh.set(n),i.uniformMatrix4fv(this.addr,!1,rh),Pt(t,n)}}function Zm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function Km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function Qm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function ig(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nh.compareFunction=zc,r=nh):r=xh,t.setTexture2D(e||r,s)}function sg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Mh,s)}function rg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Sh,s)}function ag(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bh,s)}function og(i){switch(i){case 5126:return Hm;case 35664:return Gm;case 35665:return Wm;case 35666:return $m;case 35674:return qm;case 35675:return Xm;case 35676:return Ym;case 5124:case 35670:return Zm;case 35667:case 35671:return Jm;case 35668:case 35672:return Km;case 35669:case 35673:return jm;case 5125:return Qm;case 36294:return eg;case 36295:return tg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return ag}}function cg(i,e){i.uniform1fv(this.addr,e)}function lg(i,e){let t=Es(e,this.size,2);i.uniform2fv(this.addr,t)}function ug(i,e){let t=Es(e,this.size,3);i.uniform3fv(this.addr,t)}function hg(i,e){let t=Es(e,this.size,4);i.uniform4fv(this.addr,t)}function dg(i,e){let t=Es(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fg(i,e){let t=Es(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pg(i,e){let t=Es(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mg(i,e){i.uniform1iv(this.addr,e)}function gg(i,e){i.uniform2iv(this.addr,e)}function yg(i,e){i.uniform3iv(this.addr,e)}function _g(i,e){i.uniform4iv(this.addr,e)}function vg(i,e){i.uniform1uiv(this.addr,e)}function xg(i,e){i.uniform2uiv(this.addr,e)}function bg(i,e){i.uniform3uiv(this.addr,e)}function Mg(i,e){i.uniform4uiv(this.addr,e)}function Sg(i,e,t){let n=this.cache,s=e.length,r=bo(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||xh,r[a])}function Eg(i,e,t){let n=this.cache,s=e.length,r=bo(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Mh,r[a])}function Tg(i,e,t){let n=this.cache,s=e.length,r=bo(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Sh,r[a])}function wg(i,e,t){let n=this.cache,s=e.length,r=bo(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||bh,r[a])}function Ag(i){switch(i){case 5126:return cg;case 35664:return lg;case 35665:return ug;case 35666:return hg;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return yg;case 35669:case 35673:return _g;case 5125:return vg;case 36294:return xg;case 36295:return bg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return wg}}var Qc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=og(t.type)}},el=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ag(t.type)}},tl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},jc=/(\w+)(\])?(\[|\.)?/g;function ch(i,e){i.seq.push(e),i.map[e.id]=e}function Cg(i,e,t){let n=i.name,s=n.length;for(jc.lastIndex=0;;){let r=jc.exec(n),a=jc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ch(t,l===void 0?new Qc(o,i,e):new el(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new tl(o),ch(t,h)),t=h}}}var Ss=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Cg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function lh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Rg=37297,Ig=0;function Pg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var uh=new Oe;function Lg(i){Xe._getMatrix(uh,Xe.workingColorSpace,i);let e=`mat3( ${uh.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case js:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Pg(i.getShaderSource(e),o)}else return r}function Dg(i,e){let t=Lg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ng(i,e){let t;switch(e){case Au:t="Linear";break;case Cu:t="Reinhard";break;case Ru:t="Cineon";break;case Iu:t="ACESFilmic";break;case Lu:t="AgX";break;case Du:t="Neutral";break;case Pu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _o=new U;function Ug(){Xe.getLuminanceCoefficients(_o);let i=_o.x.toFixed(4),e=_o.y.toFixed(4),t=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Og(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function Fg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Er(i){return i!==""}function dh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(i){return i.replace(kg,Vg)}var zg=new Map;function Vg(i,e){let t=ke[e];if(t===void 0){let n=zg.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return nl(t)}var Hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(i){return i.replace(Hg,Gg)}function Gg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Wg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ea?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function $g(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zi:case Vi:e="ENVMAP_TYPE_CUBE";break;case yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vi:e="ENVMAP_MODE_REFRACTION";break}return e}function Xg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rc:e="ENVMAP_BLENDING_MULTIPLY";break;case Tu:e="ENVMAP_BLENDING_MIX";break;case wu:e="ENVMAP_BLENDING_ADD";break}return e}function Yg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Zg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Wg(t),l=$g(t),u=qg(t),h=Xg(t),f=Yg(t),p=Og(t),y=Fg(r),M=s.createProgram(),m,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Er).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Er).join(`
`),d.length>0&&(d+=`
`)):(m=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),d=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?ke.tonemapping_pars_fragment:"",t.toneMapping!==ni?Ng("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Dg("linearToOutputTexel",t.outputColorSpace),Ug(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),a=nl(a),a=dh(a,t),a=fh(a,t),o=nl(o),o=dh(o,t),o=fh(o,t),a=ph(a),o=ph(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=S+m+a,x=S+d+o,A=lh(s,s.VERTEX_SHADER,E),w=lh(s,s.FRAGMENT_SHADER,x);s.attachShader(M,A),s.attachShader(M,w),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(I){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(M)||"",V=s.getShaderInfoLog(A)||"",W=s.getShaderInfoLog(w)||"",X=F.trim(),$=V.trim(),ne=W.trim(),H=!0,oe=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,A,w);else{let de=hh(s,A,"vertex"),we=hh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+de+`
`+we)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):($===""||ne==="")&&(oe=!1);oe&&(I.diagnostics={runnable:H,programLog:X,vertexShader:{log:$,prefix:m},fragmentShader:{log:ne,prefix:d}})}s.deleteShader(A),s.deleteShader(w),L=new Ss(s,M),b=Bg(s,M)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(M,Rg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ig++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=w,this}var Jg=0,il=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sl(e),t.set(e,n)),n}},sl=class{constructor(e){this.id=Jg++,this.code=e,this.usedTimes=0}};function Kg(i,e,t,n,s,r,a){let o=new ds,c=new il,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,v,I,F,V){let W=F.fog,X=V.geometry,$=b.isMeshStandardMaterial?F.environment:null,ne=(b.isMeshStandardMaterial?t:e).get(b.envMap||$),H=ne&&ne.mapping===yr?ne.image.height:null,oe=y[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let de=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,we=de!==void 0?de.length:0,Ve=0;X.morphAttributes.position!==void 0&&(Ve=1),X.morphAttributes.normal!==void 0&&(Ve=2),X.morphAttributes.color!==void 0&&(Ve=3);let st,lt,Ze,Y;if(oe){let Je=kn[oe];st=Je.vertexShader,lt=Je.fragmentShader}else st=b.vertexShader,lt=b.fragmentShader,c.update(b),Ze=c.getVertexShaderID(b),Y=c.getFragmentShaderID(b);let K=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),De=V.isInstancedMesh===!0,Te=V.isBatchedMesh===!0,qe=!!b.map,kt=!!b.matcap,C=!!ne,ut=!!b.aoMap,Ue=!!b.lightMap,Pe=!!b.bumpMap,ve=!!b.normalMap,ht=!!b.displacementMap,xe=!!b.emissiveMap,Be=!!b.metalnessMap,Nt=!!b.roughnessMap,St=b.anisotropy>0,T=b.clearcoat>0,g=b.dispersion>0,B=b.iridescence>0,q=b.sheen>0,J=b.transmission>0,G=St&&!!b.anisotropyMap,Ee=T&&!!b.clearcoatMap,ie=T&&!!b.clearcoatNormalMap,be=T&&!!b.clearcoatRoughnessMap,Me=B&&!!b.iridescenceMap,ee=B&&!!b.iridescenceThicknessMap,ue=q&&!!b.sheenColorMap,Ie=q&&!!b.sheenRoughnessMap,Se=!!b.specularMap,ce=!!b.specularColorMap,Fe=!!b.specularIntensityMap,P=J&&!!b.transmissionMap,te=J&&!!b.thicknessMap,re=!!b.gradientMap,me=!!b.alphaMap,j=b.alphaTest>0,Z=!!b.alphaHash,_e=!!b.extensions,Ne=ni;b.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ne=i.toneMapping);let rt={shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:st,fragmentShader:lt,defines:b.defines,customVertexShaderID:Ze,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Te,batchingColor:Te&&V._colorsTexture!==null,instancing:De,instancingColor:De&&V.instanceColor!==null,instancingMorph:De&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Oi,alphaToCoverage:!!b.alphaToCoverage,map:qe,matcap:kt,envMap:C,envMapMode:C&&ne.mapping,envMapCubeUVHeight:H,aoMap:ut,lightMap:Ue,bumpMap:Pe,normalMap:ve,displacementMap:f&&ht,emissiveMap:xe,normalMapObjectSpace:ve&&b.normalMapType===Fu,normalMapTangentSpace:ve&&b.normalMapType===kc,metalnessMap:Be,roughnessMap:Nt,anisotropy:St,anisotropyMap:G,clearcoat:T,clearcoatMap:Ee,clearcoatNormalMap:ie,clearcoatRoughnessMap:be,dispersion:g,iridescence:B,iridescenceMap:Me,iridescenceThicknessMap:ee,sheen:q,sheenColorMap:ue,sheenRoughnessMap:Ie,specularMap:Se,specularColorMap:ce,specularIntensityMap:Fe,transmission:J,transmissionMap:P,thicknessMap:te,gradientMap:re,opaque:b.transparent===!1&&b.blending===Ni&&b.alphaToCoverage===!1,alphaMap:me,alphaTest:j,alphaHash:Z,combine:b.combine,mapUv:qe&&M(b.map.channel),aoMapUv:ut&&M(b.aoMap.channel),lightMapUv:Ue&&M(b.lightMap.channel),bumpMapUv:Pe&&M(b.bumpMap.channel),normalMapUv:ve&&M(b.normalMap.channel),displacementMapUv:ht&&M(b.displacementMap.channel),emissiveMapUv:xe&&M(b.emissiveMap.channel),metalnessMapUv:Be&&M(b.metalnessMap.channel),roughnessMapUv:Nt&&M(b.roughnessMap.channel),anisotropyMapUv:G&&M(b.anisotropyMap.channel),clearcoatMapUv:Ee&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:ie&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&M(b.sheenRoughnessMap.channel),specularMapUv:Se&&M(b.specularMap.channel),specularColorMapUv:ce&&M(b.specularColorMap.channel),specularIntensityMapUv:Fe&&M(b.specularIntensityMap.channel),transmissionMapUv:P&&M(b.transmissionMap.channel),thicknessMapUv:te&&M(b.thicknessMap.channel),alphaMapUv:me&&M(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ve||St),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(qe||me),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:V.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ve,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:qe&&b.map.isVideoTexture===!0&&Xe.getTransfer(b.map.colorSpace)===Qe,decodeVideoTextureEmissive:xe&&b.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(b.emissiveMap.colorSpace)===Qe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Fn,flipSided:b.side===Yt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:_e&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&b.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function d(b){let v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)v.push(I),v.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(S(v,b),E(v,b),v.push(i.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function S(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function E(b,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),b.push(o.mask)}function x(b){let v=y[b.type],I;if(v){let F=kn[v];I=Yu.clone(F.uniforms)}else I=b.uniforms;return I}function A(b,v){let I;for(let F=0,V=u.length;F<V;F++){let W=u[F];if(W.cacheKey===v){I=W,++I.usedTimes;break}}return I===void 0&&(I=new Zg(i,v,b,r),u.push(I)),I}function w(b){if(--b.usedTimes===0){let v=u.indexOf(b);u[v]=u[u.length-1],u.pop(),b.destroy()}}function R(b){c.remove(b)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:L}}function jg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Qg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,f,p,y,M,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:y,renderOrder:h.renderOrder,z:M,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=y,d.renderOrder=h.renderOrder,d.z=M,d.group=m),e++,d}function o(h,f,p,y,M,m){let d=a(h,f,p,y,M,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(h,f,p,y,M,m){let d=a(h,f,p,y,M,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||Qg),n.length>1&&n.sort(f||gh),s.length>1&&s.sort(f||gh)}function u(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function e0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new yh,i.set(n,[a])):s>=r.length?(a=new yh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function t0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new We};break;case"SpotLight":t={position:new U,direction:new U,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function n0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var i0=0;function s0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function r0(i){let e=new t0,t=n0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new bt,a=new bt;function o(l){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,y=0,M=0,m=0,d=0,S=0,E=0,x=0,A=0,w=0,R=0;l.sort(s0);for(let b=0,v=l.length;b<v;b++){let I=l[b],F=I.color,V=I.intensity,W=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=F.r*V,h+=F.g*V,f+=F.b*V;else if(I.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(I.sh.coefficients[$],V);R++}else if(I.isDirectionalLight){let $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ne=I.shadow,H=t.get(I);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=I.shadow.matrix,S++}n.directional[p]=$,p++}else if(I.isSpotLight){let $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(F).multiplyScalar(V),$.distance=W,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,n.spot[M]=$;let ne=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,ne.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[M]=ne.matrix,I.castShadow){let H=t.get(I);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,n.spotShadow[M]=H,n.spotShadowMap[M]=X,x++}M++}else if(I.isRectAreaLight){let $=e.get(I);$.color.copy(F).multiplyScalar(V),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=$,m++}else if(I.isPointLight){let $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){let ne=I.shadow,H=t.get(I);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,H.shadowCameraNear=ne.camera.near,H.shadowCameraFar=ne.camera.far,n.pointShadow[y]=H,n.pointShadowMap[y]=X,n.pointShadowMatrix[y]=I.shadow.matrix,E++}n.point[y]=$,y++}else if(I.isHemisphereLight){let $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(V),$.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[d]=$,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let L=n.hash;(L.directionalLength!==p||L.pointLength!==y||L.spotLength!==M||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==S||L.numPointShadows!==E||L.numSpotShadows!==x||L.numSpotMaps!==A||L.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=M,n.rectArea.length=m,n.point.length=y,n.hemi.length=d,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,L.directionalLength=p,L.pointLength=y,L.spotLength=M,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=S,L.numPointShadows=E,L.numSpotShadows=x,L.numSpotMaps=A,L.numLightProbes=R,n.version=i0++)}function c(l,u){let h=0,f=0,p=0,y=0,M=0,m=u.matrixWorldInverse;for(let d=0,S=l.length;d<S;d++){let E=l[d];if(E.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(E.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let x=n.rectArea[y];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let x=n.hemi[M];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),M++}}}return{setup:o,setupView:c,state:n}}function _h(i){let e=new r0(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function a0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new _h(i),e.set(s,[o])):r>=a.length?(o=new _h(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var o0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function l0(i,e,t){let n=new ps,s=new ze,r=new ze,a=new yt,o=new da({depthPacking:Ou}),c=new fa,l={},u=t.maxTextureSize,h={[jn]:Yt,[Yt]:jn,[Fn]:Fn},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:o0,fragmentShader:c0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let y=new Cn;y.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new dt(y,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let d=this.type;this.render=function(w,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let b=i.getRenderTarget(),v=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ti),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=d!==On&&this.type===On,W=d===On&&this.type!==On;for(let X=0,$=w.length;X<$;X++){let ne=w[X],H=ne.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let oe=H.getFrameExtents();if(s.multiply(oe),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/oe.x),s.x=r.x*oe.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/oe.y),s.y=r.y*oe.y,H.mapSize.y=r.y)),H.map===null||V===!0||W===!0){let we=this.type!==On?{minFilter:yn,magFilter:yn}:{};H.map!==null&&H.map.dispose(),H.map=new Dn(s.x,s.y,we),H.map.texture.name=ne.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let de=H.getViewportCount();for(let we=0;we<de;we++){let Ve=H.getViewport(we);a.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),F.viewport(a),H.updateMatrices(ne,we),n=H.getFrustum(),x(R,L,H.camera,ne,this.type)}H.isPointLightShadow!==!0&&this.type===On&&S(H,L),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,v,I)};function S(w,R){let L=e.update(M);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Dn(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,L,f,M,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,L,p,M,null)}function E(w,R,L,b){let v=null,I=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)v=I;else if(v=L.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let F=v.uuid,V=R.uuid,W=l[F];W===void 0&&(W={},l[F]=W);let X=W[V];X===void 0&&(X=v.clone(),W[V]=X,R.addEventListener("dispose",A)),v=X}if(v.visible=R.visible,v.wireframe=R.wireframe,b===On?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:h[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let F=i.properties.get(v);F.light=L}return v}function x(w,R,L,b,v){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===On)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);let V=e.update(w),W=w.material;if(Array.isArray(W)){let X=V.groups;for(let $=0,ne=X.length;$<ne;$++){let H=X[$],oe=W[H.materialIndex];if(oe&&oe.visible){let de=E(w,oe,b,v);w.onBeforeShadow(i,w,R,L,V,de,H),i.renderBufferDirect(L,null,V,de,w,H),w.onAfterShadow(i,w,R,L,V,de,H)}}}else if(W.visible){let X=E(w,W,b,v);w.onBeforeShadow(i,w,R,L,V,X,null),i.renderBufferDirect(L,null,V,X,w,null),w.onAfterShadow(i,w,R,L,V,X,null)}}let F=w.children;for(let V=0,W=F.length;V<W;V++)x(F[V],R,L,b,v)}function A(w){w.target.removeEventListener("dispose",A);for(let L in l){let b=l[L],v=w.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}var u0={[Ta]:wa,[Aa]:Ia,[Ca]:Pa,[Ui]:Ra,[wa]:Ta,[Ia]:Aa,[Pa]:Ca,[Ra]:Ui};function h0(i,e){function t(){let P=!1,te=new yt,re=null,me=new yt(0,0,0,0);return{setMask:function(j){re!==j&&!P&&(i.colorMask(j,j,j,j),re=j)},setLocked:function(j){P=j},setClear:function(j,Z,_e,Ne,rt){rt===!0&&(j*=Ne,Z*=Ne,_e*=Ne),te.set(j,Z,_e,Ne),me.equals(te)===!1&&(i.clearColor(j,Z,_e,Ne),me.copy(te))},reset:function(){P=!1,re=null,me.set(-1,0,0,0)}}}function n(){let P=!1,te=!1,re=null,me=null,j=null;return{setReversed:function(Z){if(te!==Z){let _e=e.get("EXT_clip_control");Z?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),te=Z;let Ne=j;j=null,this.setClear(Ne)}},getReversed:function(){return te},setTest:function(Z){Z?K(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(Z){re!==Z&&!P&&(i.depthMask(Z),re=Z)},setFunc:function(Z){if(te&&(Z=u0[Z]),me!==Z){switch(Z){case Ta:i.depthFunc(i.NEVER);break;case wa:i.depthFunc(i.ALWAYS);break;case Aa:i.depthFunc(i.LESS);break;case Ui:i.depthFunc(i.LEQUAL);break;case Ca:i.depthFunc(i.EQUAL);break;case Ra:i.depthFunc(i.GEQUAL);break;case Ia:i.depthFunc(i.GREATER);break;case Pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=Z}},setLocked:function(Z){P=Z},setClear:function(Z){j!==Z&&(te&&(Z=1-Z),i.clearDepth(Z),j=Z)},reset:function(){P=!1,re=null,me=null,j=null,te=!1}}}function s(){let P=!1,te=null,re=null,me=null,j=null,Z=null,_e=null,Ne=null,rt=null;return{setTest:function(Je){P||(Je?K(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(Je){te!==Je&&!P&&(i.stencilMask(Je),te=Je)},setFunc:function(Je,$n,Pn){(re!==Je||me!==$n||j!==Pn)&&(i.stencilFunc(Je,$n,Pn),re=Je,me=$n,j=Pn)},setOp:function(Je,$n,Pn){(Z!==Je||_e!==$n||Ne!==Pn)&&(i.stencilOp(Je,$n,Pn),Z=Je,_e=$n,Ne=Pn)},setLocked:function(Je){P=Je},setClear:function(Je){rt!==Je&&(i.clearStencil(Je),rt=Je)},reset:function(){P=!1,te=null,re=null,me=null,j=null,Z=null,_e=null,Ne=null,rt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},h={},f=new WeakMap,p=[],y=null,M=!1,m=null,d=null,S=null,E=null,x=null,A=null,w=null,R=new We(0,0,0),L=0,b=!1,v=null,I=null,F=null,V=null,W=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,ne=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=ne>=1):H.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=ne>=2);let oe=null,de={},we=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),st=new yt().fromArray(we),lt=new yt().fromArray(Ve);function Ze(P,te,re,me){let j=new Uint8Array(4),Z=i.createTexture();i.bindTexture(P,Z),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<re;_e++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,j):i.texImage2D(te+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,j);return Z}let Y={};Y[i.TEXTURE_2D]=Ze(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(Ui),Pe(!1),ve(Ec),K(i.CULL_FACE),ut(ti);function K(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function ge(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function De(P,te){return h[P]!==te?(i.bindFramebuffer(P,te),h[P]=te,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=te),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=te),!0):!1}function Te(P,te){let re=p,me=!1;if(P){re=f.get(te),re===void 0&&(re=[],f.set(te,re));let j=P.textures;if(re.length!==j.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,_e=j.length;Z<_e;Z++)re[Z]=i.COLOR_ATTACHMENT0+Z;re.length=j.length,me=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,me=!0);me&&i.drawBuffers(re)}function qe(P){return y!==P?(i.useProgram(P),y=P,!0):!1}let kt={[pi]:i.FUNC_ADD,[cu]:i.FUNC_SUBTRACT,[lu]:i.FUNC_REVERSE_SUBTRACT};kt[uu]=i.MIN,kt[hu]=i.MAX;let C={[du]:i.ZERO,[fu]:i.ONE,[pu]:i.SRC_COLOR,[ea]:i.SRC_ALPHA,[xu]:i.SRC_ALPHA_SATURATE,[_u]:i.DST_COLOR,[gu]:i.DST_ALPHA,[mu]:i.ONE_MINUS_SRC_COLOR,[ta]:i.ONE_MINUS_SRC_ALPHA,[vu]:i.ONE_MINUS_DST_COLOR,[yu]:i.ONE_MINUS_DST_ALPHA,[bu]:i.CONSTANT_COLOR,[Mu]:i.ONE_MINUS_CONSTANT_COLOR,[Su]:i.CONSTANT_ALPHA,[Eu]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(P,te,re,me,j,Z,_e,Ne,rt,Je){if(P===ti){M===!0&&(ge(i.BLEND),M=!1);return}if(M===!1&&(K(i.BLEND),M=!0),P!==ou){if(P!==m||Je!==b){if((d!==pi||x!==pi)&&(i.blendEquation(i.FUNC_ADD),d=pi,x=pi),Je)switch(P){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wc:i.blendFunc(i.ONE,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ac:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,E=null,A=null,w=null,R.set(0,0,0),L=0,m=P,b=Je}return}j=j||te,Z=Z||re,_e=_e||me,(te!==d||j!==x)&&(i.blendEquationSeparate(kt[te],kt[j]),d=te,x=j),(re!==S||me!==E||Z!==A||_e!==w)&&(i.blendFuncSeparate(C[re],C[me],C[Z],C[_e]),S=re,E=me,A=Z,w=_e),(Ne.equals(R)===!1||rt!==L)&&(i.blendColor(Ne.r,Ne.g,Ne.b,rt),R.copy(Ne),L=rt),m=P,b=!1}function Ue(P,te){P.side===Fn?ge(i.CULL_FACE):K(i.CULL_FACE);let re=P.side===Yt;te&&(re=!re),Pe(re),P.blending===Ni&&P.transparent===!1?ut(ti):ut(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let me=P.stencilWrite;o.setTest(me),me&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),xe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(P){v!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),v=P)}function ve(P){P!==ru?(K(i.CULL_FACE),P!==I&&(P===Ec?i.cullFace(i.BACK):P===au?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),I=P}function ht(P){P!==F&&($&&i.lineWidth(P),F=P)}function xe(P,te,re){P?(K(i.POLYGON_OFFSET_FILL),(V!==te||W!==re)&&(i.polygonOffset(te,re),V=te,W=re)):ge(i.POLYGON_OFFSET_FILL)}function Be(P){P?K(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function Nt(P){P===void 0&&(P=i.TEXTURE0+X-1),oe!==P&&(i.activeTexture(P),oe=P)}function St(P,te,re){re===void 0&&(oe===null?re=i.TEXTURE0+X-1:re=oe);let me=de[re];me===void 0&&(me={type:void 0,texture:void 0},de[re]=me),(me.type!==P||me.texture!==te)&&(oe!==re&&(i.activeTexture(re),oe=re),i.bindTexture(P,te||Y[P]),me.type=P,me.texture=te)}function T(){let P=de[oe];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(P){st.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),st.copy(P))}function Ie(P){lt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),lt.copy(P))}function Se(P,te){let re=l.get(te);re===void 0&&(re=new WeakMap,l.set(te,re));let me=re.get(P);me===void 0&&(me=i.getUniformBlockIndex(te,P.name),re.set(P,me))}function ce(P,te){let me=l.get(te).get(P);c.get(te)!==me&&(i.uniformBlockBinding(te,me,P.__bindingPointIndex),c.set(te,me))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},oe=null,de={},h={},f=new WeakMap,p=[],y=null,M=!1,m=null,d=null,S=null,E=null,x=null,A=null,w=null,R=new We(0,0,0),L=0,b=!1,v=null,I=null,F=null,V=null,W=null,st.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:ge,bindFramebuffer:De,drawBuffers:Te,useProgram:qe,setBlending:ut,setMaterial:Ue,setFlipSided:Pe,setCullFace:ve,setLineWidth:ht,setPolygonOffset:xe,setScissorTest:Be,activeTexture:Nt,bindTexture:St,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:B,texImage2D:Me,texImage3D:ee,updateUBOMapping:Se,uniformBlockBinding:ce,texStorage2D:ie,texStorage3D:be,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:G,compressedTexSubImage3D:Ee,scissor:ue,viewport:Ie,reset:Fe}}function d0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ze,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,g){return p?new OffscreenCanvas(T,g):er("canvas")}function M(T,g,B){let q=1,J=St(T);if((J.width>B||J.height>B)&&(q=B/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let G=Math.floor(q*J.width),Ee=Math.floor(q*J.height);h===void 0&&(h=y(G,Ee));let ie=g?y(G,Ee):h;return ie.width=G,ie.height=Ee,ie.getContext("2d").drawImage(T,0,0,G,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+G+"x"+Ee+")."),ie}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,g,B,q,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let G=g;if(g===i.RED&&(B===i.FLOAT&&(G=i.R32F),B===i.HALF_FLOAT&&(G=i.R16F),B===i.UNSIGNED_BYTE&&(G=i.R8)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(G=i.R8UI),B===i.UNSIGNED_SHORT&&(G=i.R16UI),B===i.UNSIGNED_INT&&(G=i.R32UI),B===i.BYTE&&(G=i.R8I),B===i.SHORT&&(G=i.R16I),B===i.INT&&(G=i.R32I)),g===i.RG&&(B===i.FLOAT&&(G=i.RG32F),B===i.HALF_FLOAT&&(G=i.RG16F),B===i.UNSIGNED_BYTE&&(G=i.RG8)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(G=i.RG8UI),B===i.UNSIGNED_SHORT&&(G=i.RG16UI),B===i.UNSIGNED_INT&&(G=i.RG32UI),B===i.BYTE&&(G=i.RG8I),B===i.SHORT&&(G=i.RG16I),B===i.INT&&(G=i.RG32I)),g===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(G=i.RGB8UI),B===i.UNSIGNED_SHORT&&(G=i.RGB16UI),B===i.UNSIGNED_INT&&(G=i.RGB32UI),B===i.BYTE&&(G=i.RGB8I),B===i.SHORT&&(G=i.RGB16I),B===i.INT&&(G=i.RGB32I)),g===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),B===i.UNSIGNED_INT&&(G=i.RGBA32UI),B===i.BYTE&&(G=i.RGBA8I),B===i.SHORT&&(G=i.RGBA16I),B===i.INT&&(G=i.RGBA32I)),g===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),g===i.RGBA){let Ee=J?js:Xe.getTransfer(q);B===i.FLOAT&&(G=i.RGBA32F),B===i.HALF_FLOAT&&(G=i.RGBA16F),B===i.UNSIGNED_BYTE&&(G=Ee===Qe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function x(T,g){let B;return T?g===null||g===xi||g===vs?B=i.DEPTH24_STENCIL8:g===Bn?B=i.DEPTH32F_STENCIL8:g===ys&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===xi||g===vs?B=i.DEPTH_COMPONENT24:g===Bn?B=i.DEPTH_COMPONENT32F:g===ys&&(B=i.DEPTH_COMPONENT16),B}function A(T,g){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==yn&&T.minFilter!==wn?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function w(T){let g=T.target;g.removeEventListener("dispose",w),L(g),g.isVideoTexture&&u.delete(g)}function R(T){let g=T.target;g.removeEventListener("dispose",R),v(g)}function L(T){let g=n.get(T);if(g.__webglInit===void 0)return;let B=T.source,q=f.get(B);if(q){let J=q[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(T),Object.keys(q).length===0&&f.delete(B)}n.remove(T)}function b(T){let g=n.get(T);i.deleteTexture(g.__webglTexture);let B=T.source,q=f.get(B);delete q[g.__cacheKey],a.memory.textures--}function v(T){let g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let J=0;J<g.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(g.__webglFramebuffer[q][J]);else i.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)i.deleteFramebuffer(g.__webglFramebuffer[q]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let B=T.textures;for(let q=0,J=B.length;q<J;q++){let G=n.get(B[q]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(B[q])}n.remove(T)}let I=0;function F(){I=0}function V(){let T=I;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),I+=1,T}function W(T){let g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function X(T,g){let B=n.get(T);if(T.isVideoTexture&&Be(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){let q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,T,g);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function $(T,g){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Y(B,T,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function ne(T,g){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Y(B,T,g);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function H(T,g){let B=n.get(T);if(T.version>0&&B.__version!==T.version){K(B,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}let oe={[na]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[ia]:i.MIRRORED_REPEAT},de={[yn]:i.NEAREST,[Nu]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[Na]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},we={[Bu]:i.NEVER,[Wu]:i.ALWAYS,[ku]:i.LESS,[zc]:i.LEQUAL,[zu]:i.EQUAL,[Gu]:i.GEQUAL,[Vu]:i.GREATER,[Hu]:i.NOTEQUAL};function Ve(T,g){if(g.type===Bn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===wn||g.magFilter===Na||g.magFilter===_r||g.magFilter===vi||g.minFilter===wn||g.minFilter===Na||g.minFilter===_r||g.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,oe[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,oe[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,oe[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,de[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,de[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,we[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===yn||g.minFilter!==_r&&g.minFilter!==vi||g.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function st(T,g){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",w));let q=g.source,J=f.get(q);J===void 0&&(J={},f.set(q,J));let G=W(g);if(G!==T.__cacheKey){J[G]===void 0&&(J[G]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[G].usedTimes++;let Ee=J[T.__cacheKey];Ee!==void 0&&(J[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&b(g)),T.__cacheKey=G,T.__webglTexture=J[G].texture}return B}function lt(T,g,B){return Math.floor(Math.floor(T/B)/g)}function Ze(T,g,B,q){let G=T.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,B,q,g.data);else{G.sort((ee,ue)=>ee.start-ue.start);let Ee=0;for(let ee=1;ee<G.length;ee++){let ue=G[Ee],Ie=G[ee],Se=ue.start+ue.count,ce=lt(Ie.start,g.width,4),Fe=lt(ue.start,g.width,4);Ie.start<=Se+1&&ce===Fe&&lt(Ie.start+Ie.count-1,g.width,4)===ce?ue.count=Math.max(ue.count,Ie.start+Ie.count-ue.start):(++Ee,G[Ee]=Ie)}G.length=Ee+1;let ie=i.getParameter(i.UNPACK_ROW_LENGTH),be=i.getParameter(i.UNPACK_SKIP_PIXELS),Me=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ee=0,ue=G.length;ee<ue;ee++){let Ie=G[ee],Se=Math.floor(Ie.start/4),ce=Math.ceil(Ie.count/4),Fe=Se%g.width,P=Math.floor(Se/g.width),te=ce,re=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,Fe,P,te,re,B,q,g.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,be),i.pixelStorei(i.UNPACK_SKIP_ROWS,Me)}}function Y(T,g,B){let q=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=i.TEXTURE_3D);let J=st(T,g),G=g.source;t.bindTexture(q,T.__webglTexture,i.TEXTURE0+B);let Ee=n.get(G);if(G.version!==Ee.__version||J===!0){t.activeTexture(i.TEXTURE0+B);let ie=Xe.getPrimaries(Xe.workingColorSpace),be=g.colorSpace===ii?null:Xe.getPrimaries(g.colorSpace),Me=g.colorSpace===ii||ie===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ee=M(g.image,!1,s.maxTextureSize);ee=Nt(g,ee);let ue=r.convert(g.format,g.colorSpace),Ie=r.convert(g.type),Se=E(g.internalFormat,ue,Ie,g.colorSpace,g.isVideoTexture);Ve(q,g);let ce,Fe=g.mipmaps,P=g.isVideoTexture!==!0,te=Ee.__version===void 0||J===!0,re=G.dataReady,me=A(g,ee);if(g.isDepthTexture)Se=x(g.format===xs,g.type),te&&(P?t.texStorage2D(i.TEXTURE_2D,1,Se,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Se,ee.width,ee.height,0,ue,Ie,null));else if(g.isDataTexture)if(Fe.length>0){P&&te&&t.texStorage2D(i.TEXTURE_2D,me,Se,Fe[0].width,Fe[0].height);for(let j=0,Z=Fe.length;j<Z;j++)ce=Fe[j],P?re&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ce.width,ce.height,ue,Ie,ce.data):t.texImage2D(i.TEXTURE_2D,j,Se,ce.width,ce.height,0,ue,Ie,ce.data);g.generateMipmaps=!1}else P?(te&&t.texStorage2D(i.TEXTURE_2D,me,Se,ee.width,ee.height),re&&Ze(g,ee,ue,Ie)):t.texImage2D(i.TEXTURE_2D,0,Se,ee.width,ee.height,0,ue,Ie,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){P&&te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Se,Fe[0].width,Fe[0].height,ee.depth);for(let j=0,Z=Fe.length;j<Z;j++)if(ce=Fe[j],g.format!==_n)if(ue!==null)if(P){if(re)if(g.layerUpdates.size>0){let _e=qc(ce.width,ce.height,g.format,g.type);for(let Ne of g.layerUpdates){let rt=ce.data.subarray(Ne*_e/ce.data.BYTES_PER_ELEMENT,(Ne+1)*_e/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Ne,ce.width,ce.height,1,ue,rt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ce.width,ce.height,ee.depth,ue,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Se,ce.width,ce.height,ee.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ce.width,ce.height,ee.depth,ue,Ie,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Se,ce.width,ce.height,ee.depth,0,ue,Ie,ce.data)}else{P&&te&&t.texStorage2D(i.TEXTURE_2D,me,Se,Fe[0].width,Fe[0].height);for(let j=0,Z=Fe.length;j<Z;j++)ce=Fe[j],g.format!==_n?ue!==null?P?re&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,ce.width,ce.height,ue,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Se,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?re&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ce.width,ce.height,ue,Ie,ce.data):t.texImage2D(i.TEXTURE_2D,j,Se,ce.width,ce.height,0,ue,Ie,ce.data)}else if(g.isDataArrayTexture)if(P){if(te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Se,ee.width,ee.height,ee.depth),re)if(g.layerUpdates.size>0){let j=qc(ee.width,ee.height,g.format,g.type);for(let Z of g.layerUpdates){let _e=ee.data.subarray(Z*j/ee.data.BYTES_PER_ELEMENT,(Z+1)*j/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ee.width,ee.height,1,ue,Ie,_e)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,Ie,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,ee.width,ee.height,ee.depth,0,ue,Ie,ee.data);else if(g.isData3DTexture)P?(te&&t.texStorage3D(i.TEXTURE_3D,me,Se,ee.width,ee.height,ee.depth),re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,Ie,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Se,ee.width,ee.height,ee.depth,0,ue,Ie,ee.data);else if(g.isFramebufferTexture){if(te)if(P)t.texStorage2D(i.TEXTURE_2D,me,Se,ee.width,ee.height);else{let j=ee.width,Z=ee.height;for(let _e=0;_e<me;_e++)t.texImage2D(i.TEXTURE_2D,_e,Se,j,Z,0,ue,Ie,null),j>>=1,Z>>=1}}else if(Fe.length>0){if(P&&te){let j=St(Fe[0]);t.texStorage2D(i.TEXTURE_2D,me,Se,j.width,j.height)}for(let j=0,Z=Fe.length;j<Z;j++)ce=Fe[j],P?re&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ue,Ie,ce):t.texImage2D(i.TEXTURE_2D,j,Se,ue,Ie,ce);g.generateMipmaps=!1}else if(P){if(te){let j=St(ee);t.texStorage2D(i.TEXTURE_2D,me,Se,j.width,j.height)}re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Ie,ee)}else t.texImage2D(i.TEXTURE_2D,0,Se,ue,Ie,ee);m(g)&&d(q),Ee.__version=G.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function K(T,g,B){if(g.image.length!==6)return;let q=st(T,g),J=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);let G=n.get(J);if(J.version!==G.__version||q===!0){t.activeTexture(i.TEXTURE0+B);let Ee=Xe.getPrimaries(Xe.workingColorSpace),ie=g.colorSpace===ii?null:Xe.getPrimaries(g.colorSpace),be=g.colorSpace===ii||Ee===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Me=g.isCompressedTexture||g.image[0].isCompressedTexture,ee=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let Z=0;Z<6;Z++)!Me&&!ee?ue[Z]=M(g.image[Z],!0,s.maxCubemapSize):ue[Z]=ee?g.image[Z].image:g.image[Z],ue[Z]=Nt(g,ue[Z]);let Ie=ue[0],Se=r.convert(g.format,g.colorSpace),ce=r.convert(g.type),Fe=E(g.internalFormat,Se,ce,g.colorSpace),P=g.isVideoTexture!==!0,te=G.__version===void 0||q===!0,re=J.dataReady,me=A(g,Ie);Ve(i.TEXTURE_CUBE_MAP,g);let j;if(Me){P&&te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Fe,Ie.width,Ie.height);for(let Z=0;Z<6;Z++){j=ue[Z].mipmaps;for(let _e=0;_e<j.length;_e++){let Ne=j[_e];g.format!==_n?Se!==null?P?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,0,0,Ne.width,Ne.height,Se,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,Fe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,0,0,Ne.width,Ne.height,Se,ce,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,Fe,Ne.width,Ne.height,0,Se,ce,Ne.data)}}}else{if(j=g.mipmaps,P&&te){j.length>0&&me++;let Z=St(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Fe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ee){P?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ue[Z].width,ue[Z].height,Se,ce,ue[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Fe,ue[Z].width,ue[Z].height,0,Se,ce,ue[Z].data);for(let _e=0;_e<j.length;_e++){let rt=j[_e].image[Z].image;P?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,0,0,rt.width,rt.height,Se,ce,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,Fe,rt.width,rt.height,0,Se,ce,rt.data)}}else{P?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Se,ce,ue[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Fe,Se,ce,ue[Z]);for(let _e=0;_e<j.length;_e++){let Ne=j[_e];P?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,0,0,Se,ce,Ne.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,Fe,Se,ce,Ne.image[Z])}}}m(g)&&d(i.TEXTURE_CUBE_MAP),G.__version=J.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function ge(T,g,B,q,J,G){let Ee=r.convert(B.format,B.colorSpace),ie=r.convert(B.type),be=E(B.internalFormat,Ee,ie,B.colorSpace),Me=n.get(g),ee=n.get(B);if(ee.__renderTarget=g,!Me.__hasExternalTextures){let ue=Math.max(1,g.width>>G),Ie=Math.max(1,g.height>>G);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,G,be,ue,Ie,g.depth,0,Ee,ie,null):t.texImage2D(J,G,be,ue,Ie,0,Ee,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),xe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,ee.__webglTexture,0,ht(g)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,ee.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(T,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){let q=g.depthTexture,J=q&&q.isDepthTexture?q.type:null,G=x(g.stencilBuffer,J),Ee=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=ht(g);xe(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,G,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,G,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,G,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,T)}else{let q=g.textures;for(let J=0;J<q.length;J++){let G=q[J],Ee=r.convert(G.format,G.colorSpace),ie=r.convert(G.type),be=E(G.internalFormat,Ee,ie,G.colorSpace),Me=ht(g);B&&xe(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,be,g.width,g.height):xe(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,be,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,be,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(g.depthTexture);q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X(g.depthTexture,0);let J=q.__webglTexture,G=ht(g);if(g.depthTexture.format===cs)xe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(g.depthTexture.format===xs)xe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function qe(T){let g=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){let q=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){let J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=q}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");let q=T.texture.mipmaps;q&&q.length>0?Te(g.__webglFramebuffer[0],T):Te(g.__webglFramebuffer,T)}else if(B){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=i.createRenderbuffer(),De(g.__webglDepthbuffer[q],T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,G)}}else{let q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),De(g.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(T,g,B){let q=n.get(T);g!==void 0&&ge(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&qe(T)}function C(T){let g=T.texture,B=n.get(T),q=n.get(g);T.addEventListener("dispose",R);let J=T.textures,G=T.isWebGLCubeRenderTarget===!0,Ee=J.length>1;if(Ee||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=g.version,a.memory.textures++),G){B.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[ie]=[];for(let be=0;be<g.mipmaps.length;be++)B.__webglFramebuffer[ie][be]=i.createFramebuffer()}else B.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let ie=0;ie<g.mipmaps.length;ie++)B.__webglFramebuffer[ie]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let ie=0,be=J.length;ie<be;ie++){let Me=n.get(J[ie]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&xe(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ie=0;ie<J.length;ie++){let be=J[ie];B.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ie]);let Me=r.convert(be.format,be.colorSpace),ee=r.convert(be.type),ue=E(be.internalFormat,Me,ee,be.colorSpace,T.isXRRenderTarget===!0),Ie=ht(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,ue,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,B.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),De(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,g);for(let ie=0;ie<6;ie++)if(g.mipmaps&&g.mipmaps.length>0)for(let be=0;be<g.mipmaps.length;be++)ge(B.__webglFramebuffer[ie][be],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be);else ge(B.__webglFramebuffer[ie],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(g)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ie=0,be=J.length;ie<be;ie++){let Me=J[ie],ee=n.get(Me),ue=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,ee.__webglTexture),Ve(ue,Me),ge(B.__webglFramebuffer,T,Me,i.COLOR_ATTACHMENT0+ie,ue,0),m(Me)&&d(ue)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),Ve(ie,g),g.mipmaps&&g.mipmaps.length>0)for(let be=0;be<g.mipmaps.length;be++)ge(B.__webglFramebuffer[be],T,g,i.COLOR_ATTACHMENT0,ie,be);else ge(B.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,ie,0);m(g)&&d(ie),t.unbindTexture()}T.depthBuffer&&qe(T)}function ut(T){let g=T.textures;for(let B=0,q=g.length;B<q;B++){let J=g[B];if(m(J)){let G=S(T),Ee=n.get(J).__webglTexture;t.bindTexture(G,Ee),d(G),t.unbindTexture()}}}let Ue=[],Pe=[];function ve(T){if(T.samples>0){if(xe(T)===!1){let g=T.textures,B=T.width,q=T.height,J=i.COLOR_BUFFER_BIT,G=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(T),ie=g.length>1;if(ie)for(let Me=0;Me<g.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);let be=T.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Me=0;Me<g.length;Me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Me]);let ee=n.get(g[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,B,q,0,0,B,q,J,i.NEAREST),c===!0&&(Ue.length=0,Pe.length=0,Ue.push(i.COLOR_ATTACHMENT0+Me),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ue.push(G),Pe.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let Me=0;Me<g.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Me]);let ee=n.get(g[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ht(T){return Math.min(s.maxSamples,T.samples)}function xe(T){let g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Be(T){let g=a.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function Nt(T,g){let B=T.colorSpace,q=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Oi&&B!==ii&&(Xe.getTransfer(B)===Qe?(q!==_n||J!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),g}function St(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=ne,this.setTextureCube=H,this.rebindTextures=kt,this.setupRenderTarget=C,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=xe}function f0(i,e){function t(n,s=ii){let r,a=Xe.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===Oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pc)return i.BYTE;if(n===Lc)return i.SHORT;if(n===ys)return i.UNSIGNED_SHORT;if(n===Ua)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===_s)return i.HALF_FLOAT;if(n===Uc)return i.ALPHA;if(n===Oc)return i.RGB;if(n===_n)return i.RGBA;if(n===cs)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===Fc)return i.RED;if(n===Ba)return i.RED_INTEGER;if(n===Bc)return i.RG;if(n===ka)return i.RG_INTEGER;if(n===za)return i.RGBA_INTEGER;if(n===vr||n===xr||n===br||n===Mr)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===Ha||n===Ga||n===Wa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===qa||n===Xa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$a||n===qa)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ya||n===Za||n===Ja||n===Ka||n===ja||n===Qa||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao||n===oo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ya)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Za)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ka)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ja)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===to)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===no)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===io)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===so)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ro)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ao)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===co||n===lo||n===uo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===co)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ho||n===fo||n===po||n===mo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var p0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m0=`
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

}`,rl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ur(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Rn({vertexShader:p0,fragmentShader:m0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new hr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},al=class extends Qn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,y=null,M=typeof XRWebGLBinding<"u",m=new rl,d={},S=t.getContextAttributes(),E=null,x=null,A=[],w=[],R=new ze,L=null,b=new tn;b.viewport=new yt;let v=new tn;v.viewport=new yt;let I=[b,v],F=new Sa,V=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=A[Y];return K===void 0&&(K=new fs,A[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=A[Y];return K===void 0&&(K=new fs,A[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=A[Y];return K===void 0&&(K=new fs,A[Y]=K),K.getHandSpace()};function X(Y){let K=w.indexOf(Y.inputSource);if(K===-1)return;let ge=A[K];ge!==void 0&&(ge.update(Y.inputSource,Y.frame,l||a),ge.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",ne);for(let Y=0;Y<A.length;Y++){let K=w[Y];K!==null&&(w[Y]=null,A[Y].disconnect(K))}V=null,W=null,m.reset();for(let Y in d)delete d[Y];e.setRenderTarget(E),p=null,f=null,h=null,s=null,x=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ne),S.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,De=null,Te=null;S.depth&&(Te=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=S.stencil?xs:cs,De=S.stencil?vs:xi);let qe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(qe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Dn(f.textureWidth,f.textureHeight,{format:_n,type:In,depthTexture:new lr(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ge={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Dn(p.framebufferWidth,p.framebufferHeight,{format:_n,type:In,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(Y){for(let K=0;K<Y.removed.length;K++){let ge=Y.removed[K],De=w.indexOf(ge);De>=0&&(w[De]=null,A[De].disconnect(ge))}for(let K=0;K<Y.added.length;K++){let ge=Y.added[K],De=w.indexOf(ge);if(De===-1){for(let qe=0;qe<A.length;qe++)if(qe>=w.length){w.push(ge),De=qe;break}else if(w[qe]===null){w[qe]=ge,De=qe;break}if(De===-1)break}let Te=A[De];Te&&Te.connect(ge)}}let H=new U,oe=new U;function de(Y,K,ge){H.setFromMatrixPosition(K.matrixWorld),oe.setFromMatrixPosition(ge.matrixWorld);let De=H.distanceTo(oe),Te=K.projectionMatrix.elements,qe=ge.projectionMatrix.elements,kt=Te[14]/(Te[10]-1),C=Te[14]/(Te[10]+1),ut=(Te[9]+1)/Te[5],Ue=(Te[9]-1)/Te[5],Pe=(Te[8]-1)/Te[0],ve=(qe[8]+1)/qe[0],ht=kt*Pe,xe=kt*ve,Be=De/(-Pe+ve),Nt=Be*-Pe;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Nt),Y.translateZ(Be),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Te[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let St=kt+Be,T=C+Be,g=ht-Nt,B=xe+(De-Nt),q=ut*C/T*St,J=Ue*C/T*St;Y.projectionMatrix.makePerspective(g,B,q,J,St,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function we(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let K=Y.near,ge=Y.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),F.near=v.near=b.near=K,F.far=v.far=b.far=ge,(V!==F.near||W!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),V=F.near,W=F.far),F.layers.mask=Y.layers.mask|6,b.layers.mask=F.layers.mask&3,v.layers.mask=F.layers.mask&5;let De=Y.parent,Te=F.cameras;we(F,De);for(let qe=0;qe<Te.length;qe++)we(Te[qe],De);Te.length===2?de(F,b,v):F.projectionMatrix.copy(b.projectionMatrix),Ve(Y,F,De)};function Ve(Y,K,ge){ge===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(ge.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ra*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return d[Y]};let st=null;function lt(Y,K){if(u=K.getViewerPose(l||a),y=K,u!==null){let ge=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let De=!1;ge.length!==F.cameras.length&&(F.cameras.length=0,De=!0);for(let C=0;C<ge.length;C++){let ut=ge[C],Ue=null;if(p!==null)Ue=p.getViewport(ut);else{let ve=h.getViewSubImage(f,ut);Ue=ve.viewport,C===0&&(e.setRenderTargetTextures(x,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(x))}let Pe=I[C];Pe===void 0&&(Pe=new tn,Pe.layers.enable(C),Pe.viewport=new yt,I[C]=Pe),Pe.matrix.fromArray(ut.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(ut.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),C===0&&(F.matrix.copy(Pe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),De===!0&&F.cameras.push(Pe)}let Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){h=n.getBinding();let C=h.getDepthInformation(ge[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(Te&&Te.includes("camera-access")&&M){e.state.unbindTexture(),h=n.getBinding();for(let C=0;C<ge.length;C++){let ut=ge[C].camera;if(ut){let Ue=d[ut];Ue||(Ue=new ur,d[ut]=Ue);let Pe=h.getCameraImage(ut);Ue.sourceTexture=Pe}}}}for(let ge=0;ge<A.length;ge++){let De=w[ge],Te=A[ge];De!==null&&Te!==void 0&&Te.update(De,K,l||a)}st&&st(Y,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),y=null}let Ze=new vh;Ze.setAnimationLoop(lt),this.setAnimationLoop=function(Y){st=Y},this.dispose=function(){}}},Wi=new An,g0=new bt;function y0(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Gc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,E,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),y(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),M(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,S,E):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Yt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Yt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let S=e.get(d),E=S.envMap,x=S.envMapRotation;E&&(m.envMap.value=E,Wi.copy(x),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(g0.makeRotationFromEuler(Wi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,S,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Yt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,d){d.matcap&&(m.matcap.value=d.matcap)}function M(m,d){let S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _0(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,E){let x=E.program;n.uniformBlockBinding(S,x)}function l(S,E){let x=s[S.id];x===void 0&&(y(S),x=u(S),s[S.id]=x,S.addEventListener("dispose",m));let A=E.program;n.updateUBOMapping(S,A);let w=e.render.frame;r[S.id]!==w&&(f(S),r[S.id]=w)}function u(S){let E=h();S.__bindingPointIndex=E;let x=i.createBuffer(),A=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,x),x}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let E=s[S.id],x=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,R=x.length;w<R;w++){let L=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,v=L.length;b<v;b++){let I=L[b];if(p(I,w,b,A)===!0){let F=I.__offset,V=Array.isArray(I.value)?I.value:[I.value],W=0;for(let X=0;X<V.length;X++){let $=V[X],ne=M($);typeof $=="number"||typeof $=="boolean"?(I.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,F+W,I.__data)):$.isMatrix3?(I.__data[0]=$.elements[0],I.__data[1]=$.elements[1],I.__data[2]=$.elements[2],I.__data[3]=0,I.__data[4]=$.elements[3],I.__data[5]=$.elements[4],I.__data[6]=$.elements[5],I.__data[7]=0,I.__data[8]=$.elements[6],I.__data[9]=$.elements[7],I.__data[10]=$.elements[8],I.__data[11]=0):($.toArray(I.__data,W),W+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,E,x,A){let w=S.value,R=E+"_"+x;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:A[R]=w.clone(),!0;{let L=A[R];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return A[R]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function y(S){let E=S.uniforms,x=0,A=16;for(let R=0,L=E.length;R<L;R++){let b=Array.isArray(E[R])?E[R]:[E[R]];for(let v=0,I=b.length;v<I;v++){let F=b[v],V=Array.isArray(F.value)?F.value:[F.value];for(let W=0,X=V.length;W<X;W++){let $=V[W],ne=M($),H=x%A,oe=H%ne.boundary,de=H+oe;x+=oe,de!==0&&A-de<ne.storage&&(x+=A-de),F.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=ne.storage}}}let w=x%A;return w>0&&(x+=A-w),S.__size=x,S.__cache={},this}function M(S){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){let E=S.target;E.removeEventListener("dispose",m);let x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}var xo=class{constructor(e={}){let{canvas:t=$u(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let y=new Uint32Array(4),M=new Int32Array(4),m=null,d=null,S=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,A=!1;this._outputColorSpace=Xt;let w=0,R=0,L=null,b=-1,v=null,I=new yt,F=new yt,V=null,W=new We(0),X=0,$=t.width,ne=t.height,H=1,oe=null,de=null,we=new yt(0,0,$,ne),Ve=new yt(0,0,$,ne),st=!1,lt=new ps,Ze=!1,Y=!1,K=new bt,ge=new U,De=new yt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function kt(){return L===null?H:1}let C=n;function ut(_,D){return t.getContext(_,D)}try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",j,!1),C===null){let D="webgl2";if(C=ut(D,_),C===null)throw ut(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Ue,Pe,ve,ht,xe,Be,Nt,St,T,g,B,q,J,G,Ee,ie,be,Me,ee,ue,Ie,Se,ce,Fe;function P(){Ue=new Om(C),Ue.init(),Se=new f0(C,Ue),Pe=new Rm(C,Ue,e,Se),ve=new h0(C,Ue),Pe.reversedDepthBuffer&&f&&ve.buffers.depth.setReversed(!0),ht=new km(C),xe=new jg,Be=new d0(C,Ue,ve,xe,Pe,Se,ht),Nt=new Pm(x),St=new Um(x),T=new Wd(C),ce=new Am(C,T),g=new Fm(C,T,ht,ce),B=new Vm(C,g,T,ht),ee=new zm(C,Pe,Be),ie=new Im(xe),q=new Kg(x,Nt,St,Ue,Pe,ce,ie),J=new y0(x,xe),G=new e0,Ee=new a0(Ue),Me=new wm(x,Nt,St,ve,B,p,c),be=new l0(x,B,Pe),Fe=new _0(C,ht,Pe,ve),ue=new Cm(C,Ue,ht),Ie=new Bm(C,Ue,ht),ht.programs=q.programs,x.capabilities=Pe,x.extensions=Ue,x.properties=xe,x.renderLists=G,x.shadowMap=be,x.state=ve,x.info=ht}P();let te=new al(x,C);this.xr=te,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let _=Ue.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Ue.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(_){_!==void 0&&(H=_,this.setSize($,ne,!1))},this.getSize=function(_){return _.set($,ne)},this.setSize=function(_,D,k=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=_,ne=D,t.width=Math.floor(_*H),t.height=Math.floor(D*H),k===!0&&(t.style.width=_+"px",t.style.height=D+"px"),this.setViewport(0,0,_,D)},this.getDrawingBufferSize=function(_){return _.set($*H,ne*H).floor()},this.setDrawingBufferSize=function(_,D,k){$=_,ne=D,H=k,t.width=Math.floor(_*k),t.height=Math.floor(D*k),this.setViewport(0,0,_,D)},this.getCurrentViewport=function(_){return _.copy(I)},this.getViewport=function(_){return _.copy(we)},this.setViewport=function(_,D,k,z){_.isVector4?we.set(_.x,_.y,_.z,_.w):we.set(_,D,k,z),ve.viewport(I.copy(we).multiplyScalar(H).round())},this.getScissor=function(_){return _.copy(Ve)},this.setScissor=function(_,D,k,z){_.isVector4?Ve.set(_.x,_.y,_.z,_.w):Ve.set(_,D,k,z),ve.scissor(F.copy(Ve).multiplyScalar(H).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(_){ve.setScissorTest(st=_)},this.setOpaqueSort=function(_){oe=_},this.setTransparentSort=function(_){de=_},this.getClearColor=function(_){return _.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(_=!0,D=!0,k=!0){let z=0;if(_){let N=!1;if(L!==null){let Q=L.texture.format;N=Q===za||Q===ka||Q===Ba}if(N){let Q=L.texture.type,le=Q===In||Q===xi||Q===ys||Q===vs||Q===Oa||Q===Fa,ye=Me.getClearColor(),fe=Me.getClearAlpha(),Re=ye.r,Le=ye.g,Ae=ye.b;le?(y[0]=Re,y[1]=Le,y[2]=Ae,y[3]=fe,C.clearBufferuiv(C.COLOR,0,y)):(M[0]=Re,M[1]=Le,M[2]=Ae,M[3]=fe,C.clearBufferiv(C.COLOR,0,M))}else z|=C.COLOR_BUFFER_BIT}D&&(z|=C.DEPTH_BUFFER_BIT),k&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",j,!1),Me.dispose(),G.dispose(),Ee.dispose(),xe.dispose(),Nt.dispose(),St.dispose(),B.dispose(),ce.dispose(),Fe.dispose(),q.dispose(),te.dispose(),te.removeEventListener("sessionstart",Pn),te.removeEventListener("sessionend",Ll),Ai.stop()};function re(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let _=ht.autoReset,D=be.enabled,k=be.autoUpdate,z=be.needsUpdate,N=be.type;P(),ht.autoReset=_,be.enabled=D,be.autoUpdate=k,be.needsUpdate=z,be.type=N}function j(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Z(_){let D=_.target;D.removeEventListener("dispose",Z),_e(D)}function _e(_){Ne(_),xe.remove(_)}function Ne(_){let D=xe.get(_).programs;D!==void 0&&(D.forEach(function(k){q.releaseProgram(k)}),_.isShaderMaterial&&q.releaseShaderCache(_))}this.renderBufferDirect=function(_,D,k,z,N,Q){D===null&&(D=Te);let le=N.isMesh&&N.matrixWorld.determinant()<0,ye=rd(_,D,k,z,N);ve.setMaterial(z,le);let fe=k.index,Re=1;if(z.wireframe===!0){if(fe=g.getWireframeAttribute(k),fe===void 0)return;Re=2}let Le=k.drawRange,Ae=k.attributes.position,He=Le.start*Re,et=(Le.start+Le.count)*Re;Q!==null&&(He=Math.max(He,Q.start*Re),et=Math.min(et,(Q.start+Q.count)*Re)),fe!==null?(He=Math.max(He,0),et=Math.min(et,fe.count)):Ae!=null&&(He=Math.max(He,0),et=Math.min(et,Ae.count));let xt=et-He;if(xt<0||xt===1/0)return;ce.setup(N,z,ye,k,fe);let ot,it=ue;if(fe!==null&&(ot=T.get(fe),it=Ie,it.setIndex(ot)),N.isMesh)z.wireframe===!0?(ve.setLineWidth(z.wireframeLinewidth*kt()),it.setMode(C.LINES)):it.setMode(C.TRIANGLES);else if(N.isLine){let Ce=z.linewidth;Ce===void 0&&(Ce=1),ve.setLineWidth(Ce*kt()),N.isLineSegments?it.setMode(C.LINES):N.isLineLoop?it.setMode(C.LINE_LOOP):it.setMode(C.LINE_STRIP)}else N.isPoints?it.setMode(C.POINTS):N.isSprite&&it.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))it.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ce=N._multiDrawStarts,mt=N._multiDrawCounts,Ye=N._multiDrawCount,sn=fe?T.get(fe).bytesPerElement:1,Yi=xe.get(z).currentProgram.getUniforms();for(let rn=0;rn<Ye;rn++)Yi.setValue(C,"_gl_DrawID",rn),it.render(Ce[rn]/sn,mt[rn])}else if(N.isInstancedMesh)it.renderInstances(He,xt,N.count);else if(k.isInstancedBufferGeometry){let Ce=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,mt=Math.min(k.instanceCount,Ce);it.renderInstances(He,xt,mt)}else it.render(He,xt)};function rt(_,D,k){_.transparent===!0&&_.side===Fn&&_.forceSinglePass===!1?(_.side=Yt,_.needsUpdate=!0,Nr(_,D,k),_.side=jn,_.needsUpdate=!0,Nr(_,D,k),_.side=Fn):Nr(_,D,k)}this.compile=function(_,D,k=null){k===null&&(k=_),d=Ee.get(k),d.init(D),E.push(d),k.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),_!==k&&_.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();let z=new Set;return _.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let Q=N.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){let ye=Q[le];rt(ye,k,N),z.add(ye)}else rt(Q,k,N),z.add(Q)}),d=E.pop(),z},this.compileAsync=function(_,D,k=null){let z=this.compile(_,D,k);return new Promise(N=>{function Q(){if(z.forEach(function(le){xe.get(le).currentProgram.isReady()&&z.delete(le)}),z.size===0){N(_);return}setTimeout(Q,10)}Ue.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Je=null;function $n(_){Je&&Je(_)}function Pn(){Ai.stop()}function Ll(){Ai.start()}let Ai=new vh;Ai.setAnimationLoop($n),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(_){Je=_,te.setAnimationLoop(_),_===null?Ai.stop():Ai.start()},te.addEventListener("sessionstart",Pn),te.addEventListener("sessionend",Ll),this.render=function(_,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(D),D=te.getCamera()),_.isScene===!0&&_.onBeforeRender(x,_,D,L),d=Ee.get(_,E.length),d.init(D),E.push(d),K.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),lt.setFromProjectionMatrix(K,Tn,D.reversedDepth),Y=this.localClippingEnabled,Ze=ie.init(this.clippingPlanes,Y),m=G.get(_,S.length),m.init(),S.push(m),te.enabled===!0&&te.isPresenting===!0){let Q=x.xr.getDepthSensingMesh();Q!==null&&Go(Q,D,-1/0,x.sortObjects)}Go(_,D,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(oe,de),qe=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,qe&&Me.addToRenderList(m,_),this.info.render.frame++,Ze===!0&&ie.beginShadows();let k=d.state.shadowsArray;be.render(k,_,D),Ze===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=m.opaque,N=m.transmissive;if(d.setupLights(),D.isArrayCamera){let Q=D.cameras;if(N.length>0)for(let le=0,ye=Q.length;le<ye;le++){let fe=Q[le];Nl(z,N,_,fe)}qe&&Me.render(_);for(let le=0,ye=Q.length;le<ye;le++){let fe=Q[le];Dl(m,_,fe,fe.viewport)}}else N.length>0&&Nl(z,N,_,D),qe&&Me.render(_),Dl(m,_,D);L!==null&&R===0&&(Be.updateMultisampleRenderTarget(L),Be.updateRenderTargetMipmap(L)),_.isScene===!0&&_.onAfterRender(x,_,D),ce.resetDefaultState(),b=-1,v=null,E.pop(),E.length>0?(d=E[E.length-1],Ze===!0&&ie.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Go(_,D,k,z){if(_.visible===!1)return;if(_.layers.test(D.layers)){if(_.isGroup)k=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(D);else if(_.isLight)d.pushLight(_),_.castShadow&&d.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||lt.intersectsSprite(_)){z&&De.setFromMatrixPosition(_.matrixWorld).applyMatrix4(K);let le=B.update(_),ye=_.material;ye.visible&&m.push(_,le,ye,k,De.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||lt.intersectsObject(_))){let le=B.update(_),ye=_.material;if(z&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),De.copy(_.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),De.copy(le.boundingSphere.center)),De.applyMatrix4(_.matrixWorld).applyMatrix4(K)),Array.isArray(ye)){let fe=le.groups;for(let Re=0,Le=fe.length;Re<Le;Re++){let Ae=fe[Re],He=ye[Ae.materialIndex];He&&He.visible&&m.push(_,le,He,k,De.z,Ae)}}else ye.visible&&m.push(_,le,ye,k,De.z,null)}}let Q=_.children;for(let le=0,ye=Q.length;le<ye;le++)Go(Q[le],D,k,z)}function Dl(_,D,k,z){let N=_.opaque,Q=_.transmissive,le=_.transparent;d.setupLightsView(k),Ze===!0&&ie.setGlobalState(x.clippingPlanes,k),z&&ve.viewport(I.copy(z)),N.length>0&&Dr(N,D,k),Q.length>0&&Dr(Q,D,k),le.length>0&&Dr(le,D,k),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Nl(_,D,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new Dn(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?_s:In,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));let Q=d.state.transmissionRenderTarget[z.id],le=z.viewport||I;Q.setSize(le.z*x.transmissionResolutionScale,le.w*x.transmissionResolutionScale);let ye=x.getRenderTarget(),fe=x.getActiveCubeFace(),Re=x.getActiveMipmapLevel();x.setRenderTarget(Q),x.getClearColor(W),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),qe&&Me.render(k);let Le=x.toneMapping;x.toneMapping=ni;let Ae=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),Ze===!0&&ie.setGlobalState(x.clippingPlanes,z),Dr(_,k,z),Be.updateMultisampleRenderTarget(Q),Be.updateRenderTargetMipmap(Q),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let et=0,xt=D.length;et<xt;et++){let ot=D[et],it=ot.object,Ce=ot.geometry,mt=ot.material,Ye=ot.group;if(mt.side===Fn&&it.layers.test(z.layers)){let sn=mt.side;mt.side=Yt,mt.needsUpdate=!0,Ul(it,k,z,Ce,mt,Ye),mt.side=sn,mt.needsUpdate=!0,He=!0}}He===!0&&(Be.updateMultisampleRenderTarget(Q),Be.updateRenderTargetMipmap(Q))}x.setRenderTarget(ye,fe,Re),x.setClearColor(W,X),Ae!==void 0&&(z.viewport=Ae),x.toneMapping=Le}function Dr(_,D,k){let z=D.isScene===!0?D.overrideMaterial:null;for(let N=0,Q=_.length;N<Q;N++){let le=_[N],ye=le.object,fe=le.geometry,Re=le.group,Le=le.material;Le.allowOverride===!0&&z!==null&&(Le=z),ye.layers.test(k.layers)&&Ul(ye,D,k,fe,Le,Re)}}function Ul(_,D,k,z,N,Q){_.onBeforeRender(x,D,k,z,N,Q),_.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),N.onBeforeRender(x,D,k,z,_,Q),N.transparent===!0&&N.side===Fn&&N.forceSinglePass===!1?(N.side=Yt,N.needsUpdate=!0,x.renderBufferDirect(k,D,z,N,_,Q),N.side=jn,N.needsUpdate=!0,x.renderBufferDirect(k,D,z,N,_,Q),N.side=Fn):x.renderBufferDirect(k,D,z,N,_,Q),_.onAfterRender(x,D,k,z,N,Q)}function Nr(_,D,k){D.isScene!==!0&&(D=Te);let z=xe.get(_),N=d.state.lights,Q=d.state.shadowsArray,le=N.state.version,ye=q.getParameters(_,N.state,Q,D,k),fe=q.getProgramCacheKey(ye),Re=z.programs;z.environment=_.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(_.isMeshStandardMaterial?St:Nt).get(_.envMap||z.environment),z.envMapRotation=z.environment!==null&&_.envMap===null?D.environmentRotation:_.envMapRotation,Re===void 0&&(_.addEventListener("dispose",Z),Re=new Map,z.programs=Re);let Le=Re.get(fe);if(Le!==void 0){if(z.currentProgram===Le&&z.lightsStateVersion===le)return Fl(_,ye),Le}else ye.uniforms=q.getUniforms(_),_.onBeforeCompile(ye,x),Le=q.acquireProgram(ye,fe),Re.set(fe,Le),z.uniforms=ye.uniforms;let Ae=z.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ae.clippingPlanes=ie.uniform),Fl(_,ye),z.needsLights=od(_),z.lightsStateVersion=le,z.needsLights&&(Ae.ambientLightColor.value=N.state.ambient,Ae.lightProbe.value=N.state.probe,Ae.directionalLights.value=N.state.directional,Ae.directionalLightShadows.value=N.state.directionalShadow,Ae.spotLights.value=N.state.spot,Ae.spotLightShadows.value=N.state.spotShadow,Ae.rectAreaLights.value=N.state.rectArea,Ae.ltc_1.value=N.state.rectAreaLTC1,Ae.ltc_2.value=N.state.rectAreaLTC2,Ae.pointLights.value=N.state.point,Ae.pointLightShadows.value=N.state.pointShadow,Ae.hemisphereLights.value=N.state.hemi,Ae.directionalShadowMap.value=N.state.directionalShadowMap,Ae.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ae.spotShadowMap.value=N.state.spotShadowMap,Ae.spotLightMatrix.value=N.state.spotLightMatrix,Ae.spotLightMap.value=N.state.spotLightMap,Ae.pointShadowMap.value=N.state.pointShadowMap,Ae.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Le,z.uniformsList=null,Le}function Ol(_){if(_.uniformsList===null){let D=_.currentProgram.getUniforms();_.uniformsList=Ss.seqWithValue(D.seq,_.uniforms)}return _.uniformsList}function Fl(_,D){let k=xe.get(_);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function rd(_,D,k,z,N){D.isScene!==!0&&(D=Te),Be.resetTextureUnits();let Q=D.fog,le=z.isMeshStandardMaterial?D.environment:null,ye=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Oi,fe=(z.isMeshStandardMaterial?St:Nt).get(z.envMap||le),Re=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Le=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!k.morphAttributes.position,He=!!k.morphAttributes.normal,et=!!k.morphAttributes.color,xt=ni;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(xt=x.toneMapping);let ot=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,it=ot!==void 0?ot.length:0,Ce=xe.get(z),mt=d.state.lights;if(Ze===!0&&(Y===!0||_!==v)){let qt=_===v&&z.id===b;ie.setState(z,_,qt)}let Ye=!1;z.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==mt.state.version||Ce.outputColorSpace!==ye||N.isBatchedMesh&&Ce.batching===!1||!N.isBatchedMesh&&Ce.batching===!0||N.isBatchedMesh&&Ce.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ce.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ce.instancing===!1||!N.isInstancedMesh&&Ce.instancing===!0||N.isSkinnedMesh&&Ce.skinning===!1||!N.isSkinnedMesh&&Ce.skinning===!0||N.isInstancedMesh&&Ce.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ce.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ce.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ce.instancingMorph===!1&&N.morphTexture!==null||Ce.envMap!==fe||z.fog===!0&&Ce.fog!==Q||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ie.numPlanes||Ce.numIntersection!==ie.numIntersection)||Ce.vertexAlphas!==Re||Ce.vertexTangents!==Le||Ce.morphTargets!==Ae||Ce.morphNormals!==He||Ce.morphColors!==et||Ce.toneMapping!==xt||Ce.morphTargetsCount!==it)&&(Ye=!0):(Ye=!0,Ce.__version=z.version);let sn=Ce.currentProgram;Ye===!0&&(sn=Nr(z,D,N));let Yi=!1,rn=!1,$s=!1,gt=sn.getUniforms(),fn=Ce.uniforms;if(ve.useProgram(sn.program)&&(Yi=!0,rn=!0,$s=!0),z.id!==b&&(b=z.id,rn=!0),Yi||v!==_){ve.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),gt.setValue(C,"projectionMatrix",_.projectionMatrix),gt.setValue(C,"viewMatrix",_.matrixWorldInverse);let Qt=gt.map.cameraPosition;Qt!==void 0&&Qt.setValue(C,ge.setFromMatrixPosition(_.matrixWorld)),Pe.logarithmicDepthBuffer&&gt.setValue(C,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&gt.setValue(C,"isOrthographic",_.isOrthographicCamera===!0),v!==_&&(v=_,rn=!0,$s=!0)}if(N.isSkinnedMesh){gt.setOptional(C,N,"bindMatrix"),gt.setOptional(C,N,"bindMatrixInverse");let qt=N.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),gt.setValue(C,"boneTexture",qt.boneTexture,Be))}N.isBatchedMesh&&(gt.setOptional(C,N,"batchingTexture"),gt.setValue(C,"batchingTexture",N._matricesTexture,Be),gt.setOptional(C,N,"batchingIdTexture"),gt.setValue(C,"batchingIdTexture",N._indirectTexture,Be),gt.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&gt.setValue(C,"batchingColorTexture",N._colorsTexture,Be));let pn=k.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ee.update(N,k,sn),(rn||Ce.receiveShadow!==N.receiveShadow)&&(Ce.receiveShadow=N.receiveShadow,gt.setValue(C,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(fn.envMap.value=fe,fn.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(fn.envMapIntensity.value=D.environmentIntensity),rn&&(gt.setValue(C,"toneMappingExposure",x.toneMappingExposure),Ce.needsLights&&ad(fn,$s),Q&&z.fog===!0&&J.refreshFogUniforms(fn,Q),J.refreshMaterialUniforms(fn,z,H,ne,d.state.transmissionRenderTarget[_.id]),Ss.upload(C,Ol(Ce),fn,Be)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ss.upload(C,Ol(Ce),fn,Be),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&gt.setValue(C,"center",N.center),gt.setValue(C,"modelViewMatrix",N.modelViewMatrix),gt.setValue(C,"normalMatrix",N.normalMatrix),gt.setValue(C,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let qt=z.uniformsGroups;for(let Qt=0,Wo=qt.length;Qt<Wo;Qt++){let Ci=qt[Qt];Fe.update(Ci,sn),Fe.bind(Ci,sn)}}return sn}function ad(_,D){_.ambientLightColor.needsUpdate=D,_.lightProbe.needsUpdate=D,_.directionalLights.needsUpdate=D,_.directionalLightShadows.needsUpdate=D,_.pointLights.needsUpdate=D,_.pointLightShadows.needsUpdate=D,_.spotLights.needsUpdate=D,_.spotLightShadows.needsUpdate=D,_.rectAreaLights.needsUpdate=D,_.hemisphereLights.needsUpdate=D}function od(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(_,D,k){let z=xe.get(_);z.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),xe.get(_.texture).__webglTexture=D,xe.get(_.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,D){let k=xe.get(_);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0};let cd=C.createFramebuffer();this.setRenderTarget=function(_,D=0,k=0){L=_,w=D,R=k;let z=!0,N=null,Q=!1,le=!1;if(_){let fe=xe.get(_);if(fe.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(fe.__webglFramebuffer===void 0)Be.setupRenderTarget(_);else if(fe.__hasExternalTextures)Be.rebindTextures(_,xe.get(_.texture).__webglTexture,xe.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Ae=_.depthTexture;if(fe.__boundDepthTexture!==Ae){if(Ae!==null&&xe.has(Ae)&&(_.width!==Ae.image.width||_.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(_)}}let Re=_.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(le=!0);let Le=xe.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Le[D])?N=Le[D][k]:N=Le[D],Q=!0):_.samples>0&&Be.useMultisampledRTT(_)===!1?N=xe.get(_).__webglMultisampledFramebuffer:Array.isArray(Le)?N=Le[k]:N=Le,I.copy(_.viewport),F.copy(_.scissor),V=_.scissorTest}else I.copy(we).multiplyScalar(H).floor(),F.copy(Ve).multiplyScalar(H).floor(),V=st;if(k!==0&&(N=cd),ve.bindFramebuffer(C.FRAMEBUFFER,N)&&z&&ve.drawBuffers(_,N),ve.viewport(I),ve.scissor(F),ve.setScissorTest(V),Q){let fe=xe.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,fe.__webglTexture,k)}else if(le){let fe=D;for(let Re=0;Re<_.textures.length;Re++){let Le=xe.get(_.textures[Re]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Re,Le.__webglTexture,k,fe)}}else if(_!==null&&k!==0){let fe=xe.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,fe.__webglTexture,k)}b=-1},this.readRenderTargetPixels=function(_,D,k,z,N,Q,le,ye=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=xe.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&le!==void 0&&(fe=fe[le]),fe){ve.bindFramebuffer(C.FRAMEBUFFER,fe);try{let Re=_.textures[ye],Le=Re.format,Ae=Re.type;if(!Pe.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=_.width-z&&k>=0&&k<=_.height-N&&(_.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ye),C.readPixels(D,k,z,N,Se.convert(Le),Se.convert(Ae),Q))}finally{let Re=L!==null?xe.get(L).__webglFramebuffer:null;ve.bindFramebuffer(C.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(_,D,k,z,N,Q,le,ye=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=xe.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&le!==void 0&&(fe=fe[le]),fe)if(D>=0&&D<=_.width-z&&k>=0&&k<=_.height-N){ve.bindFramebuffer(C.FRAMEBUFFER,fe);let Re=_.textures[ye],Le=Re.format,Ae=Re.type;if(!Pe.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let He=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,He),C.bufferData(C.PIXEL_PACK_BUFFER,Q.byteLength,C.STREAM_READ),_.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ye),C.readPixels(D,k,z,N,Se.convert(Le),Se.convert(Ae),0);let et=L!==null?xe.get(L).__webglFramebuffer:null;ve.bindFramebuffer(C.FRAMEBUFFER,et);let xt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await qu(C,xt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,He),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Q),C.deleteBuffer(He),C.deleteSync(xt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,D=null,k=0){let z=Math.pow(2,-k),N=Math.floor(_.image.width*z),Q=Math.floor(_.image.height*z),le=D!==null?D.x:0,ye=D!==null?D.y:0;Be.setTexture2D(_,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,le,ye,N,Q),ve.unbindTexture()};let ld=C.createFramebuffer(),ud=C.createFramebuffer();this.copyTextureToTexture=function(_,D,k=null,z=null,N=0,Q=null){Q===null&&(N!==0?(ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let le,ye,fe,Re,Le,Ae,He,et,xt,ot=_.isCompressedTexture?_.mipmaps[Q]:_.image;if(k!==null)le=k.max.x-k.min.x,ye=k.max.y-k.min.y,fe=k.isBox3?k.max.z-k.min.z:1,Re=k.min.x,Le=k.min.y,Ae=k.isBox3?k.min.z:0;else{let pn=Math.pow(2,-N);le=Math.floor(ot.width*pn),ye=Math.floor(ot.height*pn),_.isDataArrayTexture?fe=ot.depth:_.isData3DTexture?fe=Math.floor(ot.depth*pn):fe=1,Re=0,Le=0,Ae=0}z!==null?(He=z.x,et=z.y,xt=z.z):(He=0,et=0,xt=0);let it=Se.convert(D.format),Ce=Se.convert(D.type),mt;D.isData3DTexture?(Be.setTexture3D(D,0),mt=C.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Be.setTexture2DArray(D,0),mt=C.TEXTURE_2D_ARRAY):(Be.setTexture2D(D,0),mt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);let Ye=C.getParameter(C.UNPACK_ROW_LENGTH),sn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Yi=C.getParameter(C.UNPACK_SKIP_PIXELS),rn=C.getParameter(C.UNPACK_SKIP_ROWS),$s=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ot.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ot.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Re),C.pixelStorei(C.UNPACK_SKIP_ROWS,Le),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ae);let gt=_.isDataArrayTexture||_.isData3DTexture,fn=D.isDataArrayTexture||D.isData3DTexture;if(_.isDepthTexture){let pn=xe.get(_),qt=xe.get(D),Qt=xe.get(pn.__renderTarget),Wo=xe.get(qt.__renderTarget);ve.bindFramebuffer(C.READ_FRAMEBUFFER,Qt.__webglFramebuffer),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,Wo.__webglFramebuffer);for(let Ci=0;Ci<fe;Ci++)gt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,xe.get(_).__webglTexture,N,Ae+Ci),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,xe.get(D).__webglTexture,Q,xt+Ci)),C.blitFramebuffer(Re,Le,le,ye,He,et,le,ye,C.DEPTH_BUFFER_BIT,C.NEAREST);ve.bindFramebuffer(C.READ_FRAMEBUFFER,null),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||_.isRenderTargetTexture||xe.has(_)){let pn=xe.get(_),qt=xe.get(D);ve.bindFramebuffer(C.READ_FRAMEBUFFER,ld),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,ud);for(let Qt=0;Qt<fe;Qt++)gt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,pn.__webglTexture,N,Ae+Qt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,pn.__webglTexture,N),fn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,qt.__webglTexture,Q,xt+Qt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,qt.__webglTexture,Q),N!==0?C.blitFramebuffer(Re,Le,le,ye,He,et,le,ye,C.COLOR_BUFFER_BIT,C.NEAREST):fn?C.copyTexSubImage3D(mt,Q,He,et,xt+Qt,Re,Le,le,ye):C.copyTexSubImage2D(mt,Q,He,et,Re,Le,le,ye);ve.bindFramebuffer(C.READ_FRAMEBUFFER,null),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else fn?_.isDataTexture||_.isData3DTexture?C.texSubImage3D(mt,Q,He,et,xt,le,ye,fe,it,Ce,ot.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(mt,Q,He,et,xt,le,ye,fe,it,ot.data):C.texSubImage3D(mt,Q,He,et,xt,le,ye,fe,it,Ce,ot):_.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Q,He,et,le,ye,it,Ce,ot.data):_.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Q,He,et,ot.width,ot.height,it,ot.data):C.texSubImage2D(C.TEXTURE_2D,Q,He,et,le,ye,it,Ce,ot);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ye),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,sn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Yi),C.pixelStorei(C.UNPACK_SKIP_ROWS,rn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,$s),Q===0&&D.generateMipmaps&&C.generateMipmap(mt),ve.unbindTexture()},this.initRenderTarget=function(_){xe.get(_).__webglFramebuffer===void 0&&Be.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Be.setTextureCube(_,0):_.isData3DTexture?Be.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Be.setTexture2DArray(_,0):Be.setTexture2D(_,0),ve.unbindTexture()},this.resetState=function(){w=0,R=0,L=null,ve.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}};var Xi={school:["\uAE30\uC874 \uAD50\uC2E4\uB3D9","\uB514\uC9C0\uD138 \uAD50\uC2E4","\uC2A4\uB9C8\uD2B8 \uC5D0\uB108\uC9C0 \uCEA0\uD37C\uC2A4"],fire:["\uAE30\uBCF8 \uB300\uAE30\uC18C","\uC548\uC804\uC7A5\uBE44 \uCC28\uACE0","\uC7AC\uB09C\uB300\uC751 \uC13C\uD130"],clinic:["\uAE30\uC874 \uC9C4\uB8CC\uC18C","\uC751\uAE09\uC9C0\uC6D0 \uBCF4\uAC74\uC18C","\uC2A4\uB9C8\uD2B8 \uC9C4\uB8CC\uB3D9"],library:["\uAE30\uC874 \uC5F4\uB78C\uC2E4","\uB514\uC9C0\uD138 \uB3C5\uC11C\uAD00","\uBCF5\uD569\uBB38\uD654 \uB3C4\uC11C\uAD00"],park:["\uC815\uBE44 \uC804 \uB179\uC9C0","\uD0DC\uC591\uAD11 \uC0B0\uCC45\uACF5\uC6D0","\uBD84\uC218 \uC815\uC6D0"],transport:["\uAE30\uBCF8 \uC815\uB958\uC7A5","\uC548\uC804 \uD1B5\uD559 \uC815\uB958\uC7A5","\uC7AC\uB09C\uC9C0\uC6D0 \uD130\uBBF8\uB110"]},cl=class{constructor(e,t){this.root=e;this.level=t}box(e,t,n,s,r,a,o,c=!1){let l=new dt(new Un(s,r,a),new un({color:o,roughness:.82}));return l.position.set(e,t,n),l.castShadow=!0,l.receiveShadow=!0,l.userData.window=c,this.root.add(l),l}cylinder(e,t,n,s,r,a,o,c=16){let l=new dt(new gi(s,r,a,c),new un({color:o,roughness:.72}));return l.position.set(e,t,n),l.castShadow=!0,l.receiveShadow=!0,this.root.add(l),l}roof(e,t,n,s,r,a,o){let c=this.cylinder(e,t,n,0,1,r,o,4);c.rotation.y=Math.PI/4,c.scale.set(s*.72,1,a*.72)}windows(e,t,n,s=10275792){for(let r of e)for(let a of t)this.box(r,a,n,.58,.62,.08,this.level?s:9215385,!0),this.box(r,a,n+.045,.035,.62,.025,15462113)}tree(e,t,n=.7){this.box(e,.5*n,t,.15*n,n,.15*n,9730657);let s=new dt(new Fi(.85*n,0),new un({color:this.level?7052148:9545098,flatShading:!0}));s.position.set(e,1.4*n,t),s.castShadow=!0,this.root.add(s)}bench(e,t,n=0){let s=this.box(e,.48,t,1.1,.12,.42,11700062);s.rotation.y=n;for(let a of[-.4,.4])this.box(e+a*Math.cos(n),.25,t-a*Math.sin(n),.1,.4,.3,6059372);let r=this.box(e,.75,t-.16,1.1,.42,.08,12160355);r.rotation.y=n}solar(e,t,n,s=1.2){this.box(e,t-.09,n,s+.12,.12,1.05,11978943);let r=this.box(e,t,n,s,.08,.94,3496312);r.rotation.x=-.12;for(let a of[-.3,0,.3])this.box(e+a*s,t+.05,n,.025,.025,.92,7445421)}lamp(e,t,n=!1){this.box(e,1.1,t,.1,2.1,.1,6387308),this.box(e,2.2,t,.55,.18,.55,16770464,!0),n&&this.solar(e,2.5,t,.65)}cross(e,t,n,s=16119263){this.box(e,t,n,.9,.23,.09,s),this.box(e,t,n+.01,.23,.9,.09,s)}vehicle(e,t,n,s){let r=s==="bus"?2.6:1.8;this.box(e,.55,t,r,.65,.9,n),this.box(e-.15,1,t,r*.7,.45,.82,s==="medical"?16052701:n);for(let a of[-.65,.65])for(let o of[-.46,.46]){let c=this.cylinder(e+a,.3,t+o,.23,.23,.12,3427922,10);c.rotation.x=Math.PI/2}for(let a=-r*.32;a<r*.3;a+=.45)this.box(e+a,1.02,t+.42,.32,.27,.04,5471883);if(this.box(e+r*.36,.95,t,.05,.3,.73,5471883),s==="fire"){this.box(e-.15,1.32,t,1.5,.1,.45,14475729);for(let a=0;a<6;a++)this.box(e-.75+a*.24,1.4,t,.05,.08,.48,7440778)}s==="medical"&&this.cross(e-.2,.72,t+.48,14779762),s!=="bus"&&this.box(e+.3,1.37,t,.35,.13,.36,8109265,!0)}};function Th(i,e,t){i.userData.facility=e,i.userData.designLevel=t;let n=new cl(i,t),s=11778471;if(n.box(0,.08,0,8.6,.18,7.8,t<0?11648679:14933961),t<0){for(let r of[-3.6,3.6])for(let a of[-3,3])n.box(r,.45,a,.12,.8,.12,9281160);n.box(0,.18,0,6.8,.04,5.8,10926236);return}if(e==="school"){let r=t?15848074:s,a=t?5406339:9214867;n.box(-.6,1.5,-.5,5.6,2.8,3.7,r),n.roof(-.6,3.25,-.5,6,.9,4.1,a),n.windows([-2.7,-1.5,.3,1.4],[1,2.1],1.39,12705243),n.box(-.6,2,-.25,1.4,3.8,3.9,r),n.roof(-.6,4.18,-.25,1.8,.7,4.1,a),n.box(-.6,.8,1.77,.85,1.4,.12,5668482);let o=n.cylinder(-.6,3.35,1.74,.3,.3,.08,16774867,20);o.rotation.x=Math.PI/2,n.box(-.6,3.42,1.8,.04,.22,.03,4351083),n.box(-.5,3.3,1.8,.22,.04,.03,4351083),t>=1&&(n.box(2.7,1.15,-.3,1.5,2.1,3.3,14989941),n.box(2.7,2.3,-.3,1.7,.22,3.5,a),n.windows([2.7],[1.35],1.39),n.box(1.2,2.7,1.62,1.3,.65,.12,3243655),n.box(1.2,2.7,1.7,.85,.4,.04,12380132),n.box(1.2,2.43,1.7,.45,.08,.05,15920317),n.tree(-3.5,2.7),n.bench(2.6,2.7)),t>=2&&(n.box(2.65,3.35,-.3,1.5,2.1,3.3,16049069),n.box(2.65,4.5,-.3,1.8,.25,3.5,a),n.windows([2.65],[3.5],1.4),n.solar(2.65,4.82,-1,1.2),n.solar(2.65,4.82,.35,1.2),n.box(0,.21,2.7,2.6,.1,1.7,12810599),n.box(0,.28,2.7,2.4,.02,.04,16772558),n.box(0,.28,2.7,.04,.02,1.5,16772558),n.lamp(3.8,2.6,!0))}else if(e==="fire"){let r=t?13200216:s;n.box(-.6,1.25,-.5,5.6,2.3,4.2,r),n.box(-.6,2.55,-.5,5.9,.25,4.4,t?9326667:8886158);for(let a of[-2.2,0,1.8]){n.box(a,.96,1.64,1.55,1.7,.08,t?4352106:9346709);for(let o of[.5,.9,1.3])n.box(a,o,1.7,1.5,.035,.03,11978427)}t>=1&&(n.vehicle(-1.4,2.6,14248274,"fire"),n.box(0,2.77,-.2,2.5,.18,.8,15784898),n.lamp(-3.5,2.6),n.box(2.7,1.2,-1.4,1.3,2.2,1.8,15188366)),t>=2&&(n.box(2.6,2.6,-1.5,1.4,5,2,14989955),n.box(2.6,5.2,-1.5,1.65,.25,2.25,10115660),n.windows([2.6],[1.5,2.8,4.1],-.46,5734023),n.box(-2.1,3.4,-.7,2.6,1.45,3.2,15784897),n.windows([-2.75,-1.6],[3.5],.94),n.box(-2.1,4.2,-.7,2.9,.2,3.45,11099213),n.vehicle(1.4,2.7,14920533,"fire"),n.box(3.6,.55,2.2,.55,.9,.7,6984337))}else if(e==="clinic"){let r=t?15986651:s,a=t?6727342:8821650;if(n.box(-.6,1.4,-.5,5.2,2.6,3.7,r),n.box(-.6,2.82,-.5,5.5,.24,4,a),n.windows([-2.5,-1.3,.4,1.5],[1.5],1.39),n.box(-.5,1,1.45,1,1.7,.12,6591387),n.box(-.6,3.4,-.2,1.5,1.1,1.4,a),n.cross(-.6,3.4,.54),t>=1){n.box(2.6,1.1,-.3,1.6,2,3.3,14543324),n.box(2.6,2.2,-.3,1.8,.2,3.5,a),n.cross(2.6,1.4,1.39,6067867),n.box(-.5,2,2,2.1,.2,1.2,a);for(let o of[-1.4,.4])n.box(o,1.1,2.4,.08,1.7,.08,13950926);n.tree(-3.4,2.8),n.bench(2.5,2.7)}t>=2&&(n.box(-.6,4,-.7,5.2,2.1,3.3,15986135),n.box(-.6,5.15,-.7,5.5,.25,3.6,a),n.windows([-2.5,-1.3,.4,1.5],[4.1],.99),n.box(-.6,5.75,-.7,1.2,1,1,a),n.cross(-.6,5.75,-.15),n.vehicle(1.2,2.9,16052444,"medical"),n.solar(1.1,5.4,-.7,1.4),n.box(-3.4,.25,-2.6,.6,.3,.8,9942921))}else if(e==="library"){let r=t?14994857:s,a=t?9402792:9018258;if(n.box(-.5,1.2,-.5,5.4,2.2,3.8,r),n.box(-.5,2.5,-.5,5.8,.35,4.1,a),n.windows([-2.5,-1.3,.3,1.5],[1.3],1.44),n.box(-.5,.9,1.5,.8,1.6,.12,6651528),t>=1){let o=n.box(-1.05,3.02,-.4,1.05,.16,1.65,16772552);o.rotation.z=.22;let c=n.box(.02,3.02,-.4,1.05,.16,1.65,16772552);c.rotation.z=-.22,n.box(-.5,2.82,-.4,2.3,.15,1.8,10057126),n.box(2.8,1.1,-.3,1.1,2,3.2,11783367);for(let l=0;l<5;l++)n.box(2.8,1.25,1.34,.7,.16,.07,[11889506,14005339,5935510][l%3]);n.bench(-2.5,2.7),n.bench(.1,2.7),n.tree(3.3,2.7,.8)}t>=2&&(n.box(-.5,3.65,-.8,5.1,2.1,3,15326407),n.windows([-2.4,-1.2,.2,1.4],[3.8],.74),n.roof(-.5,5,-.8,5.6,.65,3.5,8234927),n.box(3.1,2.2,-.3,.14,4.2,3.7,a),n.box(1.9,.19,2.7,2.4,.06,1.6,12768691),n.cylinder(2,.65,2.6,.55,.55,.12,14072192),n.cylinder(2,.4,2.6,.1,.1,.5,8360580),n.lamp(-3.5,2.8,!0))}else if(e==="park"){if(n.box(0,.2,0,8.2,.2,7.4,t?10865033:11647904),n.box(0,.33,0,1.1,.05,7.3,15194036),n.box(0,.34,0,8,.05,.8,15194036),t===0&&(n.tree(-2.6,-2.4,.6),n.bench(2.5,2.2)),t>=1){for(let r of[-2.8,2.8])for(let a of[-2.4,2.4])n.tree(r,a,.72),n.lamp(r*.66,a,!0);n.bench(-2.5,.9),n.bench(2.5,-1),n.cylinder(-1.9,.39,-1.35,1.1,1.2,.12,8567749,24);for(let r of[-2.7,2.7]){n.box(0,.4,r,1.2,.17,.75,12946280);for(let a of[-.4,0,.4])n.cylinder(a,.58,r,.13,.13,.18,14925415,8)}}if(t>=2){n.cylinder(0,.43,0,1.65,1.75,.2,15196358,24),n.cylinder(0,.57,0,1.45,1.45,.1,7715012,24),n.cylinder(0,.95,0,.3,.5,.65,15327944),n.cylinder(0,1.3,0,.8,.85,.12,9555153,24),n.cylinder(0,1.67,0,.045,.12,.65,12183007,10),n.box(-2.6,1.45,2,2.2,.18,1.5,13808775);for(let r of[-3.5,-1.7])n.box(r,.9,2.4,.1,1.2,.1,11045992);for(let r=0;r<6;r++)n.box(-3.5+r*.36,1.64,2,.1,.15,1.65,15456163);n.tree(3,-2.4,1)}}else{n.box(-2.7,1.05,-1.2,1.5,1.9,2.6,t?15390636:s),n.box(-2.7,2.1,-1.2,1.7,.2,2.8,t?6524316:9149588),n.windows([-2.7],[1.25],.14),n.box(.7,.22,1.1,5.2,.14,4.4,t?9610400:11318695);for(let r of[-.8,2.2])n.box(r,.32,1.3,.05,.03,3,16772029),n.box(r,1.2,-1.5,.1,2,.1,7441026);if(t>=1&&(n.box(.7,2.3,-1.5,4.2,.25,2,7315367),n.box(.7,1.2,-2.35,3.7,1.7,.08,11588560),n.bench(.7,-1.7),n.vehicle(.6,1.65,15120728,"bus"),n.box(3.3,1.4,2.7,.1,2.5,.1,7309696),n.box(3.3,2.25,2.7,.85,.8,.12,15386484)),t>=2){n.box(-2.7,3,-1.2,1.5,1.65,2.6,15918021),n.windows([-2.7],[3.1],.14),n.box(-.1,4,-1.2,6.9,.28,3,5014159);for(let r of[-2.1,-.5,1.1])n.solar(r,4.23,-1.3,1.15);n.box(2.8,2.1,-1.3,.13,3.7,.13,8824222),n.vehicle(.7,3.05,7579048,"bus");for(let r of[-3.3,-2.6])for(let a of[1.4,2.1])n.box(r,.55,a,.6,.7,.6,14070402);n.lamp(3.6,-2.8)}}i.userData.stageName=Xi[e][t]}var Et=(i,e,t,n,s="")=>({key:i,label:e,op:t,value:n,unit:s}),Tt=(i,e,t,n,s,r)=>({id:i,name:e,price:t,specs:n,note:s,runningCost:r});function Ts(i,e,t,n,s,r="spec"){return Array.from({length:e},(a,o)=>({id:`${i}-${String(o+1).padStart(2,"0")}`,label:`${i} ${String(o+1).padStart(2,"0")}`,expected:t,actual:n.includes(o+1)?s:t,kind:r,issue:n.includes(o+1)?r==="damage"?"DAMAGE":"SPEC_MISMATCH":void 0}))}var Mo="\uD544\uC218\uC870\uAC74\uC744 \uBAA8\uB450 \uCDA9\uC871\uD55C \uC81C\uC548 \uC911 \uCD1D\uC561\uC774 \uAC00\uC7A5 \uB0AE\uC740 \uC5C5\uCCB4\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4. \uC774 \uBBF8\uC158\uC5D0\uB9CC \uC801\uC6A9\uD558\uB294 \uAC8C\uC784 \uADDC\uCE59\uC785\uB2C8\uB2E4.",v0={title:"\uCEF4\uD4E8\uD130\uC2E4\uC744 \uB2E4\uC2DC \uC5F4\uC5B4\uC694",product:"\uAD50\uC721\uC6A9 PC",quantity:30,actualCount:30,budget:3e3,days:7,requirements:[Et("ram","RAM","min",16,"GB"),Et("ssd","SSD","min",512,"GB"),Et("warranty","\uBB34\uC0C1 \uBCF4\uC99D","min",3,"\uB144")],rule:"LOWEST_PRICE_AMONG_ELIGIBLE",ruleText:Mo,bids:[Tt("A","\uC0C8\uBD04\uCEF4\uD4E8\uD130",2400,{ram:8,ssd:512,warranty:3},"\uC2E4\uC18D \uC788\uB294 \uD559\uC2B5\uC6A9 \uCEF4\uD4E8\uD130"),Tt("B","\uBC14\uB978\uB514\uC9C0\uD138",2700,{ram:16,ssd:512,warranty:3},"\uAD50\uC2E4\uC5D0 \uD544\uC694\uD55C \uC131\uB2A5\uC744 \uCC28\uADFC\uCC28\uADFC"),Tt("C","\uB098\uB798\uD14C\uD06C",2900,{ram:32,ssd:1024,warranty:3},"\uB109\uB109\uD55C \uC800\uC7A5\uACF5\uAC04\uACFC \uC131\uB2A5")],items:Ts("PC",30,"RAM 16GB \xB7 SSD 512GB",[3,8,14,21,27],"RAM 8GB \xB7 SSD 512GB"),correctReason:"A\uB294 RAM 8GB\uB85C \uBD80\uC801\uACA9\uC785\uB2C8\uB2E4. B\uC640 C\uB294 \uC801\uACA9\uC774\uBA70, \uACF5\uAC1C\uB41C \uC801\uACA9 \uCD5C\uC800\uAC00 \uAE30\uC900\uC5D0 \uB530\uB77C 2,700\uB9CC \uAC8C\uC784\uC6D0\uC758 B\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4."},x0={title:"\uC548\uC804\uD55C \uCD9C\uB3D9\uC758 \uCCAB\uAC78\uC74C",product:"\uC548\uC804\uD5EC\uBA67",quantity:12,actualCount:11,budget:1400,days:3,requirements:[Et("model","\uBAA8\uB378","eq","FH-2"),Et("cert","\uC778\uC99D\uC790\uB8CC \uBAA8\uB378 \uC77C\uCE58","eq","\uD655\uC778"),Et("days","\uB0A9\uAE30","max",3,"\uC77C")],rule:"LOWEST_PRICE_AMONG_ELIGIBLE",ruleText:"\uC548\uC804\uADDC\uACA9\xB7\uC778\uC99D\uC790\uB8CC\xB73\uC77C \uC774\uB0B4 \uB0A9\uAE30\uB97C \uBAA8\uB450 \uCDA9\uC871\uD55C \uC81C\uC548\uB9CC \uBE44\uAD50\uD569\uB2C8\uB2E4. \uC801\uACA9 \uC911 \uB0AE\uC740 \uCD1D\uC561\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.",bids:[Tt("A","\uB4E0\uB4E0\uC548\uC804",1100,{model:"FH-2",cert:"FH-1 \uC790\uB8CC",days:2},"\uC81C\uD488 \uBAA8\uB378\uACFC \uC778\uC99D\uC790\uB8CC\uB97C \uB300\uC870\uD558\uC138\uC694"),Tt("B","\uC548\uC2EC\uC7A5\uBE44",1200,{model:"FH-2",cert:"\uD655\uC778",days:3},"FH-2 \uBAA8\uB378 \uC77C\uCE58 \uC790\uB8CC \uC81C\uCD9C"),Tt("C","\uCD9C\uB3D9\uC548\uC804",1e3,{model:"FH-2",cert:"\uD655\uC778",days:5},"\uC778\uC99D\uC790\uB8CC \uC788\uC74C \xB7 \uB0A9\uAE30 5\uC77C")],items:Ts("\uD5EC\uBA67",11,"FH-2 \xB7 \uD22C\uBA85\uCC3D \uC815\uC0C1",[4,9],"FH-2 \xB7 \uD22C\uBA85\uCC3D \uADE0\uC5F4","damage"),correctReason:"B\uB9CC \uBAA8\uB378\xB7\uC778\uC99D\uC790\uB8CC\xB7\uB0A9\uAE30\uB97C \uBAA8\uB450 \uCDA9\uC871\uD569\uB2C8\uB2E4. \uC778\uC99D \uBB38\uC11C\uAC00 \uC788\uB2E4\uB294 \uC0AC\uC2E4\uB9CC\uC73C\uB85C \uCDA9\uBD84\uD558\uC9C0 \uC54A\uACE0 \uB0A9\uD488 \uBAA8\uB378\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4."},b0={title:"\uAE30\uB2E4\uB9AC\uB294 \uC2DC\uBBFC\uC744 \uC704\uD574",product:"\uC751\uAE09\uC9C0\uC6D0 \uD0A4\uD2B8",quantity:20,actualCount:20,budget:1800,days:2,requirements:[Et("sku","\uD0A4\uD2B8 \uD488\uBC88","eq","MED-20"),Et("contents","\uD544\uC218 \uAD6C\uC131\uD488","eq","6\uC885 \uC644\uBE44"),Et("days","\uB0A9\uAE30","max",2,"\uC77C")],rule:"LOWEST_PRICE_AMONG_ELIGIBLE",ruleText:Mo,bids:[Tt("A","\uC628\uC720\uBA54\uB514",1500,{sku:"MED-20",contents:"6\uC885 \uC644\uBE44",days:4},"\uB0A9\uAE30 \uC77C\uC815\uC744 \uC0B4\uD3B4\uBCF4\uC138\uC694"),Tt("B","\uC774\uC74C\uCF00\uC5B4",1600,{sku:"MED-20",contents:"6\uC885 \uC644\uBE44",days:2},"\uD544\uC218 \uAD6C\uC131\uD488\uACFC \uAE30\uD55C \uBAA8\uB450 \uCDA9\uC871"),Tt("C","\uC791\uC740\uAC74\uAC15",1400,{sku:"MED-10",contents:"4\uC885",days:1},"\uC18C\uD615 \uC751\uAE09\uC9C0\uC6D0 \uD0A4\uD2B8")],items:Ts("\uD0A4\uD2B8",20,"MED-20 \xB7 \uAD6C\uC131\uD488 6\uC885",[5,12,18],"MED-10 \xB7 \uAD6C\uC131\uD488 4\uC885"),correctReason:"B\uAC00 MED-20\uC758 \uAD6C\uC131\uD488\uACFC 2\uC77C \uC774\uB0B4 \uB0A9\uAE30\uB97C \uCDA9\uC871\uD569\uB2C8\uB2E4. A\uB294 \uB0A9\uAE30 \uCD08\uACFC, C\uB294 \uD488\uBC88\xB7\uAD6C\uC131\uD488 \uBBF8\uB2EC\uC785\uB2C8\uB2E4."},M0={title:"\uBC1D\uC740 \uAD50\uC2E4, \uAC00\uBCBC\uC6B4 \uC5D0\uB108\uC9C0",product:"LED \uC870\uBA85",quantity:40,actualCount:38,budget:1200,days:5,requirements:[Et("watts","\uC18C\uBE44\uC804\uB825","max",20,"W"),Et("hours","\uC218\uBA85","min",4e4,"\uC2DC\uAC04"),Et("days","\uB0A9\uAE30","max",5,"\uC77C")],rule:"TOTAL_COST_AMONG_ELIGIBLE",ruleText:"\uD544\uC218\uC870\uAC74\uC744 \uCDA9\uC871\uD55C \uC5C5\uCCB4 \uC911 \uAD6C\uB9E4\uAC00\uACA9 + 5\uB144 \uC608\uC0C1 \uC804\uAE30\uBE44\uC6A9\uC774 \uAC00\uC7A5 \uB0AE\uC740 \uC81C\uC548\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4. \uBE44\uC6A9\uC740 \uAC8C\uC784\uC6A9 \uAC00\uC815\uC785\uB2C8\uB2E4.",bids:[Tt("A","\uD558\uB8E8\uBE5B",700,{watts:20,hours:4e4,days:4},"\uAD6C\uB9E4 700 + \uC804\uAE30 500 = \uCD1D 1,200",500),Tt("B","\uD478\uB978\uC870\uBA85",900,{watts:14,hours:5e4,days:5},"\uAD6C\uB9E4 900 + \uC804\uAE30 200 = \uCD1D 1,100",200),Tt("C","\uBC18\uC9DD\uC804\uAE30",600,{watts:24,hours:3e4,days:3},"\uAD6C\uB9E4 600 + \uC804\uAE30 600 = \uCD1D 1,200",600)],items:Ts("LED",38,"14W \xB7 \uC218\uBA85 50,000h",[6,19,32],"24W \xB7 \uC218\uBA85 30,000h"),correctReason:"B\uC758 \uCD1D\uBE44\uC6A9\uC740 900 + 200 = 1,100\uC73C\uB85C A\uC758 1,200\uBCF4\uB2E4 \uB0AE\uC2B5\uB2C8\uB2E4. C\uB294 \uC804\uB825\xB7\uC218\uBA85 \uD544\uC218\uC870\uAC74\uC744 \uCDA9\uC871\uD558\uC9C0 \uBABB\uD569\uB2C8\uB2E4. \uAC80\uC0AC\uB294 \uC120\uC815\uB41C B\uC758 \uACC4\uC57D \uADDC\uACA9 14W\uB97C \uAE30\uC900\uC73C\uB85C \uD569\uB2C8\uB2E4."},S0={title:"\uC0C8\uB85C\uC6B4 \uAE30\uC220\uB3C4, \uD655\uC778\uBD80\uD130",product:"\uD658\uACBD\uC13C\uC11C \uC2DC\uBC94\uC0AC\uC6A9",quantity:4,actualCount:4,budget:1400,days:7,countLabel:"\uC2DC\uBC94\uC0AC\uC6A9 \uAE30\uB85D",requirements:[Et("designated","\uC9C0\uC815 \uC790\uB8CC","eq","\uD655\uC778"),Et("period","\uC2DC\uD5D8 \uAE30\uAC04","min",7,"\uC77C"),Et("plan","\uC2DC\uD5D8\xB7\uACB0\uACFC \uACC4\uD68D","eq","\uC644\uBE44")],rule:"TRIAL_CONDITION_CHECK",ruleText:"\uCD5C\uC800\uAC00 \uACBD\uC7C1\uC774 \uC544\uB2D9\uB2C8\uB2E4. \uC9C0\uC815 \uC790\uB8CC, 7\uC77C \uC774\uC0C1 \uC2DC\uBC94\uC0AC\uC6A9, \uCE21\uC815\xB7\uD3C9\uAC00 \uACC4\uD68D\uC774 \uBAA8\uB450 \uC788\uB294 \uC81C\uC548\uB9CC \uC2DC\uBC94\uC0AC\uC6A9 \uB300\uC0C1\uC73C\uB85C \uD655\uC778\uD569\uB2C8\uB2E4. \uC2E4\uC81C \uC9C0\uC815 \uC808\uCC28\uB294 \uC0DD\uB7B5\uD55C \uAD50\uC721\uC6A9 \uACBD\uB85C\uC785\uB2C8\uB2E4.",bids:[Tt("A","\uC0C8\uC2F9\uC13C\uC11C",800,{designated:"\uD655\uC778",period:3,plan:"\uD3C9\uAC00 \uB204\uB77D"},"\uBE60\uB978 \uB3C4\uC785\uC744 \uC81C\uC548\uD569\uB2C8\uB2E4"),Tt("B","\uBBF8\uB798\uC228",1200,{designated:"\uD655\uC778",period:7,plan:"\uC644\uBE44"},"\uC124\uCE58 \uD6C4 \uD658\uACBD \uCE21\uC815\uACFC \uACB0\uACFC \uD3C9\uAC00"),Tt("C","\uB9D1\uC740\uC5F0\uAD6C",1e3,{designated:"\uBBF8\uC81C\uCD9C",period:7,plan:"\uC644\uBE44"},"\uC0C8\uB85C\uC6B4 \uAE30\uC220\uC774\uB77C\uB294 \uC124\uBA85\uB9CC \uC81C\uCD9C")],items:[{id:"\uAE30\uB85D-01",label:"\u2460 \uC124\uCE58 \uD655\uC778",expected:"\uC124\uCE58 \uC704\uCE58\xB7\uC218\uB7C9 \uAE30\uB85D",actual:"\uC124\uCE58 \uC704\uCE58\xB7\uC218\uB7C9 \uAE30\uB85D",kind:"record"},{id:"\uAE30\uB85D-02",label:"\u2461 \uC2DC\uD5D8 \uC870\uAC74",expected:"\uC2DC\uD5D8\uAE30\uAC04 7\uC77C \xB7 \uD658\uACBD \uC870\uAC74 \uAE30\uC7AC",actual:"\uC2DC\uD5D8\uAE30\uAC04 7\uC77C \xB7 \uD658\uACBD \uC870\uAC74 \uB204\uB77D",kind:"record",issue:"DOCUMENT_MISMATCH"},{id:"\uAE30\uB85D-03",label:"\u2462 \uCE21\uC815 \uACB0\uACFC",expected:"\uB9E4\uC77C \uCE21\uC815\uAC12 7\uC77C\uBD84",actual:"\uB9E4\uC77C \uCE21\uC815\uAC12 6\uC77C\uBD84 \xB7 7\uC77C\uCC28 \uB204\uB77D",kind:"record",issue:"DOCUMENT_MISMATCH"},{id:"\uAE30\uB85D-04",label:"\u2463 \uC0AC\uC6A9 \uC758\uACAC",expected:"\uB2F4\uB2F9\uC790 \uC0AC\uC6A9 \uC758\uACAC \uAE30\uB85D",actual:"\uB2F4\uB2F9\uC790 \uC0AC\uC6A9 \uC758\uACAC \uAE30\uB85D",kind:"record"}],correctReason:"B\uB9CC \uC9C0\uC815 \uC790\uB8CC\uC640 \uC2DC\uBC94\uC0AC\uC6A9\xB7\uD3C9\uAC00 \uACC4\uD68D\uC774 \uBAA8\uB450 \uC788\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C\uC6B4 \uAE30\uC220\uC774\uB77C\uB294 \uC774\uC720\uB9CC\uC73C\uB85C \uC131\uB2A5\uC774\uB098 \uC2DC\uBC94\uC0AC\uC6A9 \uACB0\uACFC\uB97C \uD655\uC815\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."},E0={title:"\uBCF5\uAD6C A \xB7 \uC18C\uBC29\uC11C \uBE44\uC0C1\uC804\uC6D0",product:"\uBE44\uC0C1\uC804\uC6D0 \uC7A5\uCE58",quantity:6,actualCount:6,budget:600,days:1,requirements:[Et("capacity","\uC6A9\uB7C9","min",500,"Wh"),Et("safety","\uC548\uC804\uC790\uB8CC","eq","\uD655\uC778"),Et("days","\uB0A9\uAE30","max",1,"\uC77C")],rule:"LOWEST_PRICE_AMONG_ELIGIBLE",ruleText:Mo,bids:[Tt("A","\uD2BC\uD2BC\uC804\uC6D0",350,{capacity:300,safety:"\uD655\uC778",days:1},"\uC6A9\uB7C9 \uD655\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4"),Tt("B","\uBC14\uB85C\uC804\uC6D0",500,{capacity:500,safety:"\uD655\uC778",days:1},"\uC694\uCCAD \uADDC\uACA9\uACFC \uB2F9\uC77C \uB0A9\uAE30 \uCDA9\uC871"),Tt("C","\uC2E0\uC18D\uD30C\uC6CC",400,{capacity:500,safety:"\uBBF8\uC81C\uCD9C",days:1},"\uC548\uC804\uC790\uB8CC\uB294 \uB098\uC911\uC5D0 \uC81C\uCD9C \uC608\uC815")],items:Ts("\uC804\uC6D0",6,"500Wh \xB7 \uC548\uC804\uC790\uB8CC \uD655\uC778",[2,5],"300Wh \xB7 \uC548\uC804\uC790\uB8CC \uD655\uC778"),correctReason:"\uAE34\uAE09\uD574\uB3C4 \uC6A9\uB7C9\uACFC \uC548\uC804\uC790\uB8CC \uD655\uC778\uC744 \uC0DD\uB7B5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. B\uB9CC \uBAA8\uB4E0 \uD544\uC218\uC870\uAC74\uC744 \uCDA9\uC871\uD569\uB2C8\uB2E4."},T0={title:"\uBCF5\uAD6C B \xB7 \uBCF4\uAC74\uC18C \uAD6C\uD638\uB2F4\uC694",product:"\uAD6C\uD638\uB2F4\uC694",quantity:10,actualCount:9,budget:600,days:1,requirements:[Et("size","\uD06C\uAE30","eq","150\xD7200cm"),Et("days","\uB0A9\uAE30","max",1,"\uC77C"),Et("fabric","\uC18C\uC7AC","eq","\uC138\uD0C1 \uAC00\uB2A5")],rule:"LOWEST_PRICE_AMONG_ELIGIBLE",ruleText:Mo,bids:[Tt("A","\uC628\uAE30\uC9C1\uBB3C",450,{size:"150\xD7200cm",days:1,fabric:"\uC138\uD0C1 \uAC00\uB2A5"},"\uC694\uCCAD \uD06C\uAE30\uC640 \uAE30\uD55C \uCDA9\uC871"),Tt("B","\uC774\uB978\uBC30\uC1A1",400,{size:"100\xD7150cm",days:1,fabric:"\uC138\uD0C1 \uAC00\uB2A5"},"\uD06C\uAE30\uB97C \uB300\uC870\uD574\uBCF4\uC138\uC694"),Tt("C","\uD3EC\uADFC\uC0C1\uC810",500,{size:"150\xD7200cm",days:2,fabric:"\uC138\uD0C1 \uAC00\uB2A5"},"\uB0A9\uAE30 2\uC77C")],items:Ts("\uB2F4\uC694",9,"150\xD7200cm \xB7 \uC190\uC0C1 \uC5C6\uC74C",[7],"150\xD7200cm \xB7 \uCC22\uC5B4\uC9D0","damage"),correctReason:"A\uAC00 \uD06C\uAE30\xB7\uC18C\uC7AC\xB71\uC77C \uB0A9\uAE30\uB97C \uCDA9\uC871\uD569\uB2C8\uB2E4. \uACC4\uC57D A\uB97C \uB9C8\uCCE4\uC5B4\uB3C4 \uACC4\uC57D B\uC758 \uC218\uB7C9\uACFC \uC190\uC0C1\uC740 \uBCC4\uB3C4\uB85C \uD655\uC778\uD574\uC57C \uD569\uB2C8\uB2E4."},wh=[{id:"M01",facility:"school",title:"\uB2E4\uC2DC \uCF1C\uC9C0\uB294 \uCEF4\uD4E8\uD130\uC2E4",subtitle:"\uD559\uAD50 \xB7 \uAD50\uC721\uC6A9 PC",npc:"\uAE40\uD558\uB298 \uC120\uC0DD\uB2D8",request:"\uC544\uC774\uB4E4\uC774 \uD568\uAED8 \uCF54\uB529 \uC218\uC5C5\uC744 \uAE30\uB2E4\uB9AC\uACE0 \uC788\uC5B4\uC694. 30\uBA85\uC774 \uC0AC\uC6A9\uD560 \uCEF4\uD4E8\uD130\uB97C \uC900\uBE44\uD574 \uC8FC\uC2E4\uB798\uC694?",contracts:[v0],badge:"\uACF5\uC815\uD55C \uCCAB \uACC4\uC57D",policyFact:"\uAD6C\uB9E4 \uC804\uC5D0 \uC694\uAD6C\uADDC\uACA9\uACFC \uBE44\uAD50 \uAE30\uC900\uC744 \uBA85\uD655\uD788 \uD558\uACE0, \uB0A9\uD488 \uD6C4 \uACC4\uC57D \uB0B4\uC6A9\uACFC \uC77C\uCE58\uD558\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4.",policySourceId:"S5",reward:"\uCEF4\uD4E8\uD130\uC2E4\uC5D0 \uBD88\uC774 \uCF1C\uC9C0\uACE0 \uD559\uC0DD\uB4E4\uC774 \uB3CC\uC544\uC654\uC5B4\uC694.",satisfaction:8,trust:6},{id:"M02",facility:"fire",title:"\uBAA8\uB450\uC758 \uC548\uC804\uC744 \uC9C0\uD0A4\uB294 \uC77C",subtitle:"\uC18C\uBC29\uC11C \xB7 \uC548\uC804\uD5EC\uBA67",npc:"\uBC15\uB4E0\uB4E0 \uC18C\uBC29\uB300\uC6D0",request:"\uCD9C\uB3D9\uD560 \uB300\uC6D0 12\uBA85\uC5D0\uAC8C \uC548\uC804\uD5EC\uBA67\uC774 \uD544\uC694\uD574\uC694. \uC778\uC99D\uC790\uB8CC\uB3C4 \uD655\uC778\uD558\uACE0 \uC2E4\uC81C \uC7A5\uBE44 \uC0C1\uD0DC\uB3C4 \uC0B4\uD3B4\uC8FC\uC138\uC694.",contracts:[x0],badge:"\uC548\uC804 \uC9C0\uD0B4\uC774",policyFact:"\uC548\uC804 \uAD00\uB828 \uADDC\uACA9\uACFC \uC99D\uBE59\uC744 \uB300\uC870\uD558\uACE0, \uB0A9\uD488\uD488\uC758 \uC218\uB7C9\uACFC \uD6FC\uC190 \uC5EC\uBD80\uB3C4 \uD655\uC778\uD569\uB2C8\uB2E4.",policySourceId:"S5",reward:"\uC548\uC804\uC7A5\uBE44\uB97C \uAC16\uCD98 \uB300\uC6D0\uB4E4\uACFC \uC18C\uBC29\uCC28\uAC00 \uCD9C\uB3D9 \uC900\uBE44\uB97C \uB9C8\uCCE4\uC5B4\uC694.",satisfaction:8,trust:6},{id:"M03",facility:"clinic",title:"\uAC74\uAC15\uD55C \uD558\uB8E8\uB97C \uC5F0\uACB0\uD574\uC694",subtitle:"\uBCF4\uAC74\uC18C \xB7 \uC751\uAE09\uC9C0\uC6D0 \uD0A4\uD2B8",npc:"\uC774\uC628\uC720 \uC758\uB8CC\uC9C4",request:"\uC774\uD2C0 \uB4A4 \uB9C8\uC744 \uAC74\uAC15 \uD589\uC0AC\uAC00 \uC5F4\uB824\uC694. \uD544\uC694\uD55C \uAD6C\uC131\uD488\uC774 \uB2F4\uAE34 \uD0A4\uD2B8 20\uAC1C\uB97C \uC81C\uB54C \uC900\uBE44\uD574\uC57C \uD574\uC694.",contracts:[b0],badge:"\uBE48\uD2C8\uC5C6\uB294 \uD655\uC778",policyFact:"\uC218\uC694\uAE30\uAD00\uC758 \uC694\uAD6C\uADDC\uACA9\uACFC \uB0A9\uAE30\uB294 \uACF5\uACF5\uC11C\uBE44\uC2A4\uC758 \uC5F0\uC18D\uC131\uACFC \uC5F0\uACB0\uB429\uB2C8\uB2E4.",policySourceId:"S5",reward:"\uC9C4\uB8CC\uC2E4\uC774 \uD655\uC7A5\uB418\uACE0 \uC2DC\uBBFC\uC744 \uB9DE\uC774\uD560 \uC900\uBE44\uAC00 \uB418\uC5C8\uC5B4\uC694.",satisfaction:8,trust:6},{id:"M04",facility:"school",title:"\uB0B4\uC77C\uC744 \uBC1D\uD788\uB294 \uAD50\uC2E4",subtitle:"\uD559\uAD50 \xB7 \uCE5C\uD658\uACBD LED",npc:"\uAE40\uD558\uB298 \uC120\uC0DD\uB2D8",request:"\uC624\uB798 \uC4F8 \uAD50\uC2E4 \uC870\uBA85 40\uAC1C\uAC00 \uD544\uC694\uD574\uC694. \uAD6C\uB9E4\uAC00\uACA9\uACFC \uC0AC\uC6A9 \uC911 \uC804\uAE30\uBE44\uC6A9\uC744 \uD568\uAED8 \uBE44\uAD50\uD574 \uC8FC\uC138\uC694.",contracts:[M0],badge:"\uC9C0\uC18D\uAC00\uB2A5\uD55C \uC120\uD0DD",policyFact:"\uD658\uACBD\uACFC \uD488\uC9C8\uC744 \uD568\uAED8 \uC0B4\uD53C\uB294 \uAD6C\uB9E4\uB97C \uCCB4\uD5D8\uD569\uB2C8\uB2E4. \uC774 \uBBF8\uC158\uC758 \uCD1D\uBE44\uC6A9 \uC0B0\uC2DD\uC740 \uAC00\uC0C1\uC758 \uACF5\uAC1C \uAE30\uC900\uC785\uB2C8\uB2E4.",policySourceId:"S2",reward:"\uC5D0\uB108\uC9C0\uB97C \uC544\uB07C\uB294 \uB530\uB73B\uD55C \uC870\uBA85\uC774 \uD559\uAD50\uB97C \uBC1D\uD600\uC694.",satisfaction:8,trust:6},{id:"M05",facility:"clinic",title:"\uC0C8\uB85C\uC6B4 \uAC00\uB2A5\uC131\uC744 \uC2DC\uD5D8\uD574\uC694",subtitle:"\uBCF4\uAC74\uC18C \xB7 \uD601\uC2E0\uC81C\uD488 \uC2DC\uBC94\uC0AC\uC6A9",npc:"\uC774\uC628\uC720 \uC758\uB8CC\uC9C4",request:"\uC2E4\uB0B4 \uD658\uACBD\uC744 \uC0B4\uD53C\uB294 \uC0C8\uB85C\uC6B4 \uC13C\uC11C\uB97C \uC2DC\uD5D8\uD574 \uBCF4\uB824 \uD574\uC694. \uB3C4\uC785 \uACC4\uD68D\uACFC \uC2E4\uC81C \uC2DC\uD5D8 \uAE30\uB85D\uC744 \uD568\uAED8 \uD655\uC778\uD574 \uC8FC\uC138\uC694.",contracts:[S0],badge:"\uD601\uC2E0\uC758 \uAD00\uCC30\uC790",policyFact:"\uD601\uC2E0\uC81C\uD488 \uC2DC\uBC94\uAD6C\uB9E4\uB294 \uACF5\uACF5 \uD604\uC7A5\uC5D0\uC11C \uC81C\uD488\uC744 \uC0AC\uC6A9\uD558\uACE0 \uACB0\uACFC\uB97C \uD3C9\uAC00\uD558\uB294 \uCDE8\uC9C0\uB97C \uAC16\uC2B5\uB2C8\uB2E4. \uC138\uBD80 \uC808\uCC28\uB294 \uAD50\uC721\uC6A9\uC73C\uB85C \uB2E8\uC21C\uD654\uD588\uC2B5\uB2C8\uB2E4.",policySourceId:"S8",reward:"\uD658\uACBD \uB370\uC774\uD130 \uD45C\uC2DC\uB300\uAC00 \uC124\uCE58\uB418\uC5B4 \uC2E4\uB0B4 \uC0C1\uD0DC\uB97C \uC0B4\uD544 \uC218 \uC788\uC5B4\uC694.",satisfaction:8,trust:6},{id:"M06",facility:"fire",title:"\uD568\uAED8 \uB418\uCC3E\uC740 \uC77C\uC0C1",subtitle:"\uD1B5\uD569 \xB7 \uAE34\uAE09\uBCF5\uAD6C 2\uAC74",npc:"\uC870\uB2EC \uC9C0\uC6D0\uC13C\uD130",request:"\uD3ED\uC6B0 \uB4A4 \uC2DC\uC124\uC744 \uBCF5\uAD6C\uD558\uACE0 \uC788\uC5B4\uC694. \uC18C\uBC29\uC11C \uC804\uC6D0\uACFC \uBCF4\uAC74\uC18C \uB2F4\uC694, \uB450 \uACC4\uC57D\uC744 \uCC28\uB840\uB300\uB85C \uD655\uC778\uD574 \uC8FC\uC138\uC694. \uAE09\uD574\uB3C4 \uD655\uC778\uC740 \uAF3C\uAF3C\uD558\uAC8C!",contracts:[E0,T0],badge:"\uC6B0\uB9AC \uB3C4\uC2DC\uC758 \uC5F0\uACB0\uC790",policyFact:"\uC0C1\uD669\uC774 \uAE34\uAE09\uD558\uB354\uB77C\uB3C4 \uD544\uC694\uD55C \uADDC\uACA9\xB7\uD488\uC9C8 \uD655\uC778\uC744 \uC0DD\uB7B5\uD558\uC9C0 \uC54A\uB294 \uD310\uB2E8\uC744 \uC5F0\uC2B5\uD569\uB2C8\uB2E4. \uC2E4\uC81C \uACC4\uC57D \uBC29\uC2DD\uACFC \uC694\uAC74\uC740 \uC801\uC6A9 \uBC95\uB839\xB7\uACC4\uC57D\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4.",policySourceId:"S5",reward:"\uD559\uAD50\xB7\uC18C\uBC29\uC11C\xB7\uBCF4\uAC74\uC18C\uAC00 \uBAA8\uB450 \uC81C \uC5ED\uD560\uC744 \uB418\uCC3E\uC558\uC5B4\uC694.",satisfaction:10,trust:10}],ws={S1:{title:"\uC870\uB2EC\uCCAD \uAC1C\uC694",url:"https://www.pps.go.kr/kor/content.do?key=00125"},S2:{title:"\uC870\uB2EC\uCCAD 2026 \uC5C5\uBB34\uACC4\uD68D",url:"https://www.pps.go.kr/kor/content.do?key=00647"},S5:{title:"\uC870\uB2EC\uCCAD \uCD1D\uC561\uACC4\uC57D \uBB3C\uD488\uAD6C\uB9E4 \uC5C5\uBB34\uCC98\uB9AC\uC808\uCC28",url:"https://www.pps.go.kr/kor/content.do?key=00179"},S8:{title:"\uD601\uC2E0\uC81C\uD488 \uC9C0\uC815\xB7\uC2DC\uBC94\uAD6C\uB9E4 \uC81C\uB3C4",url:"https://www.pps.go.kr/kor/content.do?key=00648"}},As="\uC5C5\uCCB4\xB7\uAE08\uC561\xB7\uC810\uC218\xB7\uC120\uC815 \uADDC\uCE59\uC740 \uAD50\uC721\uC6A9 \uAC00\uC0C1 \uC124\uC815\uC785\uB2C8\uB2E4. \uC2E4\uC81C \uACC4\uC57D\uC758 \uBC95\uC801 \uD310\uB2E8\uC774\uB098 \uC870\uB2EC\uCCAD\uC758 \uACF5\uC2DD \uAC8C\uC784\uC774 \uC544\uB2D9\uB2C8\uB2E4. \uC2E4\uC81C \uC5C5\uBB34 \uBD84\uC7A5\uC740 \uACC4\uC57D \uBC29\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4.";var Zt={school:"\uC81C1\uD559\uAD50",fire:"\uC18C\uBC29\uC11C",clinic:"\uB9C8\uC744 \uBCF4\uAC74\uC18C",library:"\uC2DC\uBBFC \uB3C4\uC11C\uAD00",park:"\uD587\uC0B4 \uACF5\uC6D0",transport:"\uAD50\uD1B5\xB7\uC7AC\uB09C\uC9C0\uC6D0"},bi={BID:"\uB098\uB77C\uC7A5\uD130 \xB7 \uACBD\uC7C1\uC785\uCC30",SHOPPING:"\uC885\uD569\uC1FC\uD551\uBAB0 \xB7 \uB4F1\uB85D\uC0C1\uD488 \uC8FC\uBB38",INNOVATION_TRIAL:"\uD601\uC2E0\uC7A5\uD130 \xB7 \uC2DC\uBC94\uC0AC\uC6A9"},Tr={BID:"\uC694\uAD6C\uADDC\uACA9\uACFC \uD3C9\uAC00\uAE30\uC900\uC744 \uBA3C\uC800 \uACF5\uACE0\uD558\uACE0 \uC81C\uC548\uC11C\uB97C \uBE44\uAD50\uD569\uB2C8\uB2E4.",SHOPPING:"\uC774\uBBF8 \uACC4\uC57D\uB41C \uB4F1\uB85D\uC0C1\uD488\uC744 \uBE44\uAD50\uD574 \uC8FC\uBB38\uD569\uB2C8\uB2E4. \uC2E0\uADDC \uC785\uCC30\uC774 \uC544\uB2D9\uB2C8\uB2E4. \uC774 \uC18C\uC561 \uAC8C\uC784 \uC8FC\uBB38\uC740 \uCD94\uAC00 \uACBD\uC7C1 \uBBF8\uB300\uC0C1\uC73C\uB85C \uC124\uC815\uD588\uC2B5\uB2C8\uB2E4. \uC2E4\uC81C \uCD94\uAC00 \uACBD\uC7C1 \uC5EC\uBD80\uB294 \uC81C\uB3C4\uC640 \uACC4\uC57D\uC870\uAC74\uC5D0 \uB530\uB985\uB2C8\uB2E4.",INNOVATION_TRIAL:"\uC9C0\uC815\xB7\uCC38\uC5EC \uC870\uAC74\uC744 \uD655\uC778\uD55C \uB4A4 \uC2DC\uBC94\uC0AC\uC6A9\uD558\uACE0 \uCE21\uC815 \uACB0\uACFC\uB97C \uBCF4\uACE0\uD569\uB2C8\uB2E4. \uAE30\uAC04\uC740 \uAC8C\uC784 \uB0A0\uC9DC\uB85C \uC555\uCD95\uD588\uC2B5\uB2C8\uB2E4."},Cs=i=>i.map(([e,t,n,s,r])=>({key:e,label:t,op:n,value:s,unit:r})),Ot=(i,e,t,n,s,r)=>({id:i,name:e,price:t,specs:n,note:s,runningCost:r}),Rs=(i,e,t,n,s,r="spec")=>Array.from({length:e},(a,o)=>({id:`${i}-${String(o+1).padStart(2,"0")}`,label:`${i} ${o+1}`,expected:t,actual:n.includes(o+1)?s:t,kind:r,issue:n.includes(o+1)?r==="damage"?"DAMAGE":"SPEC_MISMATCH":void 0}));function Is(i,e,t,n,s,r,a,o,c=!1){return{title:i,product:i,quantity:e,actualCount:t,budget:n,days:2,requirements:s,bids:r,items:a,rule:c?"TOTAL_COST_AMONG_ELIGIBLE":"LOWEST_PRICE_AMONG_ELIGIBLE",ruleText:c?"\uD544\uC218\uC870\uAC74 \uCDA9\uC871 \uD6C4 \uAD6C\uB9E4\uBE44 + \uACF5\uAC1C\uB41C \uC720\uC9C0\uBE44 \uD569\uACC4\uAC00 \uAC00\uC7A5 \uB0AE\uC740 \uC81C\uC548\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4. \uAC8C\uC784\uC6A9 \uBE44\uAD50\uC2DD\uC785\uB2C8\uB2E4.":"\uD544\uC218\uC870\uAC74\uC744 \uCDA9\uC871\uD55C \uD6C4\uBCF4 \uC911 \uAC00\uC7A5 \uB0AE\uC740 \uC81C\uC548 \uCD1D\uC561\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4. \uC774 \uC694\uCCAD\uC5D0\uB9CC \uC801\uC6A9\uD558\uB294 \uAC8C\uC784 \uAE30\uC900\uC785\uB2C8\uB2E4.",correctReason:o}}var Ah=[Is("\uC804\uC790\uCC45 \uC5F4\uB78C\uAE30",8,8,1600,Cs([["screen","\uD654\uBA74","min",10,"\uC778\uCE58"],["registered","\uB4F1\uB85D \uACC4\uC57D","eq","\uD655\uC778"],["days","\uB0A9\uAE30","max",2,"\uC77C"]]),[Ot("A","\uCC45\uC774\uC74C",1400,{screen:10,registered:"\uD655\uC778",days:2},"\uB4F1\uB85D\uB41C \uACC4\uC57D\uC0C1\uD488 \xB7 8\uB300"),Ot("B","\uB3C5\uC11C\uB098\uBB34",1200,{screen:8,registered:"\uD655\uC778",days:1},"\uD654\uBA74 \uD06C\uAE30\uB97C \uB300\uC870\uD558\uC138\uC694"),Ot("C","\uAE00\uBE5B\uC0C1\uC810",1500,{screen:11,registered:"\uD655\uC778",days:2},"\uB4F1\uB85D\uB41C \uACC4\uC57D\uC0C1\uD488 \xB7 \uB113\uC740 \uD654\uBA74")],Rs("\uC5F4\uB78C\uAE30",8,"10\uC778\uCE58 \xB7 \uACC4\uC57D\uBAA8\uB378 RE-10",[3],"8\uC778\uCE58 \xB7 \uB2E4\uB978 \uBAA8\uB378 RE-8"),"A\uC640 C\uAC00 \uC870\uAC74\uC744 \uCDA9\uC871\uD558\uBA70, \uC774\uBC88 \uC8FC\uBB38\uC758 \uACF5\uAC1C \uAE30\uC900\uC5D0 \uB530\uB77C \uCD1D\uC561\uC774 \uB0AE\uC740 A\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4."),Is("\uC5B4\uB9B0\uC774\uBCF4\uD638\uAD6C\uC5ED \uC548\uC804\uD45C\uC9C0",10,9,900,Cs([["reflect","\uBC18\uC0AC \uB4F1\uAE09","eq","\uAC8C\uC784 R2"],["size","\uD45C\uC9C0 \uD06C\uAE30","eq","60\xD760cm"],["days","\uB0A9\uAE30","max",2,"\uC77C"]]),[Ot("A","\uC548\uC804\uAE38",650,{reflect:"\uAC8C\uC784 R1",size:"60\xD760cm",days:1},"\uBC18\uC0AC \uB4F1\uAE09 \uBBF8\uB2EC"),Ot("B","\uBC1D\uC740\uB3C4\uB85C",700,{reflect:"\uAC8C\uC784 R2",size:"60\xD760cm",days:2},"\uACF5\uACE0 \uADDC\uACA9 \uCDA9\uC871"),Ot("C","\uB9C8\uC744\uD45C\uC9C0",800,{reflect:"\uAC8C\uC784 R2",size:"60\xD760cm",days:2},"\uB3D9\uC77C \uADDC\uACA9")],Rs("\uD45C\uC9C0",9,"60\xD760cm \xB7 \uC190\uC0C1 \uC5C6\uC74C",[6],"60\xD760cm \xB7 \uD310\uBA74 \uADE0\uC5F4","damage"),"B\uAC00 \uD544\uC218\uC870\uAC74\uC744 \uCDA9\uC871\uD558\uBA70 \uC801\uACA9 \uD6C4\uBCF4 \uC911 \uB0AE\uC740 \uAC00\uACA9\uC785\uB2C8\uB2E4. \uC2E4\uC81C \uC548\uC804\uD45C\uC9C0 \uBC95\uC815 \uADDC\uACA9\uC744 \uB300\uC2E0\uD558\uC9C0 \uC54A\uB294 \uAC00\uC0C1 \uC0AC\uB840\uC785\uB2C8\uB2E4."),Is("\uACF5\uC6D0 \uD0DC\uC591\uAD11 \uC870\uBA85",12,12,1200,Cs([["hours","\uC57C\uAC04 \uC810\uB4F1","min",8,"\uC2DC\uAC04"],["warranty","\uBCF4\uC99D","min",3,"\uB144"],["days","\uB0A9\uAE30","max",2,"\uC77C"]]),[Ot("A","\uD587\uBE5B\uACF5\uC6D0",800,{hours:8,warranty:3,days:2},"\uAD6C\uB9E4 800 + \uC720\uC9C0 400",400),Ot("B","\uCD08\uB85D\uC800\uB141",1e3,{hours:10,warranty:3,days:2},"\uAD6C\uB9E4 1000 + \uC720\uC9C0 100",100),Ot("C","\uC791\uC740\uD0DC\uC591",700,{hours:6,warranty:3,days:1},"\uC810\uB4F1\uC2DC\uAC04 \uBBF8\uB2EC",200)],Rs("\uD0DC\uC591\uB4F1",12,"\uC810\uB4F1 10\uC2DC\uAC04 \xB7 \uBCF4\uC99D 3\uB144",[2,10],"\uC810\uB4F1 6\uC2DC\uAC04 \xB7 \uBCF4\uC99D 3\uB144"),"B\uC758 \uCD1D\uBE44\uC6A9 1,100\uC774 A\uC758 1,200\uBCF4\uB2E4 \uB0AE\uC73C\uBA70 \uC810\uB4F1 \uC870\uAC74\uB3C4 \uCDA9\uC871\uD569\uB2C8\uB2E4.",!0),Is("\uC758\uB8CC\uBB3C\uD488 \uBCF4\uAD00 \uB0C9\uC7A5\uACE0",2,2,2300,Cs([["accuracy","\uC628\uB3C4 \uD3B8\uCC28","max",1,"\u2103"],["report","\uC2DC\uD5D8\uC131\uC801\uC11C","eq","\uBAA8\uB378 \uC77C\uCE58"],["days","\uB0A9\uAE30","max",2,"\uC77C"]]),[Ot("A","\uCC28\uAC00\uC6B4\uBD04",1800,{accuracy:2,report:"\uBAA8\uB378 \uC77C\uCE58",days:1},"\uC628\uB3C4 \uD3B8\uCC28 \uCD08\uACFC"),Ot("B","\uC628\uB3C4\uC9C0\uD0B4",2100,{accuracy:1,report:"\uBAA8\uB378 \uC77C\uCE58",days:2},"\uC694\uAD6C \uC2DC\uD5D8\uC131\uC801\uC11C \uC81C\uCD9C"),Ot("C","\uAC74\uAC15\uBCF4\uAD00",2e3,{accuracy:1,report:"\uBBF8\uC81C\uCD9C",days:2},"\uD544\uC218 \uC99D\uBE59 \uB204\uB77D")],Rs("\uB0C9\uC7A5\uACE0",2,"\uC2DC\uD5D8 \uD3B8\uCC28 0.8\u2103 \xB7 \uBAA8\uB378 \uC77C\uCE58",[2],"\uC2DC\uD5D8 \uD3B8\uCC28 2.1\u2103 \xB7 \uBAA8\uB378 \uC77C\uCE58"),"B\uB9CC \uC628\uB3C4 \uC720\uC9C0 \uC131\uB2A5, \uC2DC\uD5D8\uC131\uC801\uC11C, \uB0A9\uAE30\uB97C \uBAA8\uB450 \uCDA9\uC871\uD569\uB2C8\uB2E4. \uBCF4\uAD00 \uC628\uB3C4\uB294 \uAC8C\uC784 \uC0AC\uB840\uC774\uBA70 \uC758\uB8CC \uC9C0\uCE68\uC774 \uC544\uB2D9\uB2C8\uB2E4."),Is("AI \uD559\uC2B5 \uC9C0\uC6D0 \uC774\uC6A9\uAD8C",6,6,1e3,Cs([["months","\uC774\uC6A9 \uAE30\uAC04","min",12,"\uAC1C\uC6D4"],["privacy","\uC678\uBD80 \uD559\uC2B5 \uC804\uC1A1","eq","\uC5C6\uC74C"],["support","\uAD50\uC721 \uC9C0\uC6D0","eq","\uD3EC\uD568"]]),[Ot("A","\uAD50\uC2E4\uB3C4\uC6B0\uBBF8",800,{months:12,privacy:"\uC5C6\uC74C",support:"\uD3EC\uD568"},"\uC5F0\uAC04 \uC774\uC6A9\uAD8C \xB7 \uC2E4\uC2DC\uAC04 AI API \uC5C6\uC74C"),Ot("B","\uBE60\uB978\uD559\uC2B5",600,{months:6,privacy:"\uC5C6\uC74C",support:"\uD3EC\uD568"},"\uAE30\uAC04 6\uAC1C\uC6D4"),Ot("C","\uD568\uAED8\uBC30\uC6C0",900,{months:12,privacy:"\uC5C6\uC74C",support:"\uD3EC\uD568"},"\uAD50\uC0AC \uC9C0\uC6D0 \uD3EC\uD568")],Rs("\uC774\uC6A9\uAD8C",6,"\uC774\uC6A9 12\uAC1C\uC6D4 \xB7 \uC678\uBD80 \uD559\uC2B5 \uC804\uC1A1 \uC5C6\uC74C",[4],"\uC774\uC6A9 6\uAC1C\uC6D4 \xB7 \uC678\uBD80 \uD559\uC2B5 \uC804\uC1A1 \uC5C6\uC74C"),"A\uC640 C\uAC00 \uC694\uAD6C\uC870\uAC74\uC744 \uCDA9\uC871\uD558\uBA70 \uACF5\uAC1C\uB41C \uCD1D\uC561 \uAE30\uC900\uC5D0\uC11C A\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4. \uC2E4\uC81C AI\uB97C \uC5F0\uACB0\uD558\uC9C0 \uC54A\uB294 \uB77C\uC774\uC120\uC2A4 \uBE44\uAD50 \uD37C\uC990\uC785\uB2C8\uB2E4."),Is("\uC7AC\uB09C\uC9C0\uC6D0 \uAD6C\uD638\uD488 \uC138\uD2B8",15,13,800,Cs([["contents","\uAD6C\uC131","eq","\uD544\uC218 5\uC885"],["days","\uB0A9\uAE30","max",1,"\uC77C"],["expiry","\uC794\uC5EC \uC0AC\uC6A9\uAE30\uD55C","min",12,"\uAC1C\uC6D4"]]),[Ot("A","\uD568\uAED8\uAD6C\uD638",600,{contents:"\uD544\uC218 4\uC885",days:1,expiry:12},"\uAD6C\uC131\uD488 \uBD80\uC871"),Ot("B","\uB9C8\uC744\uC628\uAE30",650,{contents:"\uD544\uC218 5\uC885",days:1,expiry:18},"\uB4F1\uB85D\uC0C1\uD488 \xB7 \uAE34\uAE09 \uD544\uC694 \uB300\uC751"),Ot("C","\uC774\uC6C3\uBB3C\uB958",700,{contents:"\uD544\uC218 5\uC885",days:2,expiry:18},"\uB0A9\uAE30 2\uC77C")],Rs("\uAD6C\uD638\uD488",13,"\uD544\uC218 5\uC885 \xB7 \uD3EC\uC7A5 \uC815\uC0C1",[5],"\uD544\uC218 5\uC885 \xB7 \uD3EC\uC7A5 \uD30C\uC190","damage"),"B\uAC00 \uAD6C\uC131\uD488\xB7\uAE30\uD55C\xB7\uB0A9\uAE30\uB97C \uCDA9\uC871\uD569\uB2C8\uB2E4. \uAE34\uAE09\uD55C \uC0C1\uD669\uC5D0\uC11C\uB3C4 \uD5C8\uC6A9\uB41C \uAD6C\uB9E4 \uACBD\uB85C\uC640 \uC218\uB7C9 \uD655\uC778\uC744 \uC9C0\uD0B5\uB2C8\uB2E4.")],ll=[[1,4,0],[2,6,1],[2,6,1],[3,10,1],[5,12,3],[10,14,1]],Wt=wh.map((i,e)=>({...i,releaseDay:ll[e][0],deadlineDay:ll[e][1],leadDays:ll[e][2],allowedRoutes:[e===4?"INNOVATION_TRIAL":"BID"],unlockAfter:e?1:0,impact:e===0||e===3?{education:18,environment:e===3?12:0}:e===1||e===5?{safety:20,life:8}:{health:20,life:6},icon:["pc","helmet","kit","led","sensor","power"][e]})),w0=[["library","\uB204\uAD6C\uC5D0\uAC8C\uB098 \uC5F4\uB9B0 \uCC45\uC7A5","\uC804\uC790\uCC45 \uC5F4\uB78C \uACF5\uAC04\uC744 \uC5F4\uC5B4\uC8FC\uC138\uC694.",4,10,"SHOPPING",2],["transport","\uC544\uC774\uB4E4\uC758 \uC548\uC804\uD55C \uB4F1\uAD63\uAE38","\uD559\uAD50 \uC55E \uC548\uC804\uD45C\uC9C0\uB97C \uC81C\uB54C \uC900\uBE44\uD574\uC8FC\uC138\uC694.",4,9,"BID",2],["park","\uD574\uAC00 \uC838\uB3C4 \uAC77\uACE0 \uC2F6\uC740 \uAE38","\uC720\uC9C0\uBE44\uC640 \uC810\uB4F1\uC2DC\uAC04\uC744 \uD568\uAED8 \uC0B4\uD3B4\uC8FC\uC138\uC694.",5,12,"BID",3],["clinic","\uAC74\uAC15\uC744 \uC9C0\uD0A4\uB294 \uC801\uC815 \uC628\uB3C4","\uC2DC\uD5D8\uAE30\uB85D\uAE4C\uC9C0 \uAF3C\uAF3C\uD788 \uD655\uC778\uD574\uC8FC\uC138\uC694.",6,11,"BID",2],["school","\uD568\uAED8 \uBC30\uC6B0\uB294 \uC0C8\uB85C\uC6B4 \uB3C4\uAD6C","\uC774\uC6A9 \uAE30\uAC04\uACFC \uB370\uC774\uD130 \uC870\uAC74\uC744 \uBE44\uAD50\uD574\uC8FC\uC138\uC694.",7,13,"SHOPPING",3],["transport","\uB3C4\uCC29\uD574\uC57C \uC644\uC131\uB418\uB294 \uC9C0\uC6D0","\uAE30\uD55C \uC548\uC5D0 \uAD6C\uD638\uD488\uC744 \uC900\uBE44\uD574\uC8FC\uC138\uC694.",10,14,"SHOPPING",3]];w0.forEach(([i,e,t,n,s,r,a],o)=>Wt.push({id:`M${String(o+7).padStart(2,"0")}`,facility:i,title:e,subtitle:`${Zt[i]} \xB7 ${Ah[o].product}`,request:t,npc:`${Zt[i]} \uB2F4\uB2F9\uC790`,contracts:[Ah[o]],badge:["\uC5F4\uB9B0 \uBC30\uC6C0","\uC548\uC804\uD55C \uB4F1\uAD63\uAE38","\uCD08\uB85D\uBE5B \uC0B0\uCC45","\uC628\uB3C4\uC758 \uC218\uD638\uC790","\uCC45\uC784 \uC788\uB294 AI \uAD6C\uB9E4","\uD568\uAED8\uD558\uB294 \uC7AC\uB09C\uC9C0\uC6D0"][o],policyFact:r==="SHOPPING"?"\uC885\uD569\uC1FC\uD551\uBAB0\uC740 \uC774\uBBF8 \uACC4\uC57D\uB41C \uC0C1\uD488\uC744 \uBE44\uAD50\xB7\uC8FC\uBB38\uD558\uB294 \uACBD\uB85C\uC785\uB2C8\uB2E4. \uCD94\uAC00 \uACBD\uC7C1 \uB4F1 \uC2E4\uC81C \uC694\uAC74\uC740 \uD574\uB2F9 \uC81C\uB3C4\uC640 \uACC4\uC57D\uC870\uAC74\uC744 \uD655\uC778\uD574\uC57C \uD569\uB2C8\uB2E4.":"\uC694\uAD6C\uADDC\uACA9\xB7\uB0A9\uAE30\uC640 \uC0AC\uC804 \uACF5\uAC1C\uD55C \uBE44\uAD50 \uAE30\uC900\uC744 \uD568\uAED8 \uD655\uC778\uD569\uB2C8\uB2E4. \uC774 \uC694\uCCAD\uC758 \uADDC\uACA9\uACFC \uAC00\uACA9\uC740 \uAD50\uC721\uC6A9 \uAC00\uC0C1 \uC124\uC815\uC785\uB2C8\uB2E4.",policySourceId:r==="SHOPPING"?"S6":"S5",reward:`${Zt[i]}\uC758 \uC11C\uBE44\uC2A4\uAC00 \uAC1C\uC120\uB410\uC5B4\uC694.`,satisfaction:6,trust:3,releaseDay:n,deadlineDay:s,leadDays:1,allowedRoutes:[r],unlockAfter:a,impact:i==="library"?{education:18,life:20}:i==="park"?{environment:30,life:10}:i==="transport"?{safety:15,life:20}:i==="clinic"?{health:25}:{education:20},icon:["pc","sign","led","kit","sensor","box"][o]}));ws.S6={title:"\uB2E4\uC218\uACF5\uAE09\uC790\uACC4\uC57D \uC5C5\uBB34\uCC98\uB9AC\uC808\uCC28",url:"https://www.pps.go.kr/kor/content.do?key=00182"};var Ps=i=>{let e=Wt.find(t=>t.id===i);if(!e)throw Error("\uC54C \uC218 \uC5C6\uB294 \uC758\uB8B0\uC785\uB2C8\uB2E4.");return e},si=[{id:"weather",title:"\uD0DC\uD48D \uC608\uBCF4",text:"\uAD50\uD1B5\xB7\uC7AC\uB09C\uC9C0\uC6D0 \uC694\uCCAD\uC758 \uC6B0\uC120\uC21C\uC704\uB97C \uC815\uD558\uC138\uC694.",choices:["\uC548\uC804 \uC0AC\uC5C5\uC744 \uC6B0\uC120 \uAC80\uD1A0","\uD604\uC7AC \uACC4\uD68D \uC720\uC9C0"],effect:"transport"},{id:"delay",title:"\uB0A9\uD488 \uC77C\uC815 \uC7AC\uD655\uC778",text:"\uC6B4\uC1A1\uB9DD\uC774 \uD63C\uC7A1\uD569\uB2C8\uB2E4. \uB0A9\uD488 \uC804 \uACC4\uC57D \uD55C \uAC74\uC758 \uB3C4\uCC29\uC774 \uD558\uB8E8 \uB2A6\uC5B4\uC9D1\uB2C8\uB2E4. \uB0A0\uC9DC\uB97C \uD655\uC778\uD558\uACE0 \uB300\uC751\uD558\uC138\uC694.",choices:["\uC77C\uC815 \uD655\uC778\xB7\uAE30\uB85D","\uD574\uB2F9 \uACF5\uAE09\uC0AC \uCDE8\uC18C \uC0AC\uC720 \uAC80\uD1A0"],effect:"delay"},{id:"demand",title:"\uB3C5\uC11C \uACF5\uAC04 \uC218\uC694 \uC99D\uAC00",text:"\uB3C4\uC11C\uAD00 \uC774\uC6A9\uC744 \uD76C\uB9DD\uD558\uB294 \uC2DC\uBBFC\uC774 \uB298\uC5C8\uC2B5\uB2C8\uB2E4.",choices:["\uB3C4\uC11C\uAD00 \uC694\uCCAD \uC6B0\uC120 \uAC8C\uC2DC","\uAE30\uC874 \uC6B0\uC120\uC21C\uC704 \uC720\uC9C0"],effect:"library"},{id:"evidence",title:"\uC5C5\uCCB4 \uC99D\uBE59 \uC7AC\uD655\uC778",text:"\uBAA8\uB378\uBA85\uACFC \uC99D\uBE59 \uC790\uB8CC\uB97C \uB2E4\uC2DC \uB300\uC870\uD569\uB2C8\uB2E4. \uC758\uC2EC\uB9CC\uC73C\uB85C \uC704\uBC95\uC744 \uB2E8\uC815\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",choices:["\uD655\uC778 \uAE30\uB85D \uB0A8\uAE30\uAE30","\uCD94\uAC00 \uAC80\uD1A0 \uD6C4 \uAE30\uB85D"],effect:"trust"},{id:"green",title:"\uCE5C\uD658\uACBD \uC124\uBE44 \uC694\uCCAD",text:"\uACF5\uC6D0 \uC870\uBA85 \uC0AC\uC5C5\uC758 \uC720\uC9C0\uBE44\uC640 \uD488\uC9C8\uC744 \uD568\uAED8 \uAC80\uD1A0\uD560 \uAE30\uD68C\uC785\uB2C8\uB2E4.",choices:["\uD658\uACBD \uC0AC\uC5C5 \uC6B0\uC120 \uAC8C\uC2DC","\uAE30\uC874 \uC6B0\uC120\uC21C\uC704 \uC720\uC9C0"],effect:"park"},{id:"trial",title:"\uD601\uC2E0\uC81C\uD488 \uAD00\uCC30 \uC8FC\uAC04",text:"\uC2DC\uBC94\uC0AC\uC6A9\uC5D0\uB294 \uC2E4\uC81C \uCE21\uC815\uACFC \uBCF4\uACE0\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. \uACB0\uACFC\uAC00 \uBD88\uCDA9\uBD84\uD558\uBA74 \uADF8\uB300\uB85C \uBCF4\uACE0\uD558\uC138\uC694.",choices:["\uBCF4\uAC74\uC18C \uC694\uCCAD \uC6B0\uC120 \uAC8C\uC2DC","\uD604\uC7AC \uC0AC\uC5C5 \uBA3C\uC800 \uB9C8\uBB34\uB9AC"],effect:"clinic"},{id:"supply",title:"\uACF5\uAE09\uB9DD \uC810\uAC80",text:"\uC55E\uC73C\uB85C \uD544\uC694\uD55C \uBB3C\uB7C9\uC744 \uD655\uC778\uD560 \uC2DC\uAC04\uC785\uB2C8\uB2E4. \uACC4\uC57D \uC870\uAC74\uC744 \uC0AC\uD6C4 \uBCC0\uACBD\uD558\uC9C0 \uC54A\uACE0 \uACC4\uD68D\uC744 \uC810\uAC80\uD569\uB2C8\uB2E4.",choices:["\uC218\uC694\uC640 \uC794\uC561 \uAE30\uB85D\uD558\uAE30","\uB0A9\uD488 \uC77C\uC815 \uAE30\uB85D\uD558\uAE30"],effect:"trust"},{id:"citizen",title:"\uC2DC\uBBFC \uD3B8\uC758 \uC758\uACAC",text:"\uD559\uAD50\uC758 \uB514\uC9C0\uD138 \uC811\uADFC\uC131\uC5D0 \uB300\uD55C \uC758\uACAC\uC774 \uC811\uC218\uB410\uC2B5\uB2C8\uB2E4.",choices:["\uAD50\uC721 \uC0AC\uC5C5 \uC6B0\uC120 \uAC8C\uC2DC","\uAE30\uC874 \uC6B0\uC120\uC21C\uC704 \uC720\uC9C0"],effect:"school"},{id:"safety",title:"\uC548\uC804 \uC7A5\uBE44 \uC810\uAC80\uC77C",text:"\uC18C\uBC29\uC11C \uC7A5\uBE44\uC758 \uC694\uCCAD \uAE30\uD55C\uC744 \uB2E4\uC2DC \uD655\uC778\uD574\uC8FC\uC138\uC694.",choices:["\uC18C\uBC29\uC11C \uC694\uCCAD \uC6B0\uC120 \uAC8C\uC2DC","\uD604\uC7AC \uC6B0\uC120\uC21C\uC704 \uC720\uC9C0"],effect:"fire"}];var Vn=si.map(i=>i.effect==="delay"?{...i,text:"\uC6B4\uC1A1\uB9DD\uC774 \uD63C\uC7A1\uD569\uB2C8\uB2E4. \uC544\uC9C1 \uB3C4\uCC29\uD558\uC9C0 \uC54A\uC740 \uACC4\uC57D \uD55C \uAC74\uC758 \uB0A9\uD488 \uC608\uC815 \uC5F0\uB3C4\uAC00 1\uB144 \uC5F0\uC7A5\uB429\uB2C8\uB2E4. \uC774\uBBF8 \uB3C4\uCC29\uD55C \uBB3C\uD488\uC740 \uB300\uC0C1\uC774 \uC544\uB2D9\uB2C8\uB2E4. \uC5F0\uAC04 \uD134\uC73C\uB85C \uC555\uCD95\uD55C \uAC8C\uC784\uC6A9 \uC77C\uC815\uC785\uB2C8\uB2E4."}:i.id==="trial"?{...i,title:"\uD601\uC2E0\uC81C\uD488 \uC5F0\uAC04 \uAD00\uCC30"}:{...i}),dn={years:10,initialPopulation:500,annualBase:4e3,maxSubsidy:1e3,subsidyPerProject:100,slots:2,serviceBase:45,servicePerProject:4,unresolvedPenalty:4,essentialPenalty:3,minPopulation:100,maxGrowth:.06,minGrowth:-.06,populationClamp:.08},vn={},ul=new Map;function hl(i){let e=ul.get(i);return e||(e=`V${String(ul.size+1).padStart(3,"0")}`,ul.set(i,e),vn[e]={id:e,name:i}),e}Wt.slice(0,6).forEach(i=>i.contracts.forEach(e=>e.bids.forEach(t=>hl(t.name))));var A0=[[1,1,0],[2,3,0],[2,3,0],[3,5,0],[4,6,1],[7,9,0],[3,5,0],[5,7,0],[4,6,0],[5,7,1],[6,8,0],[8,10,0]],_t=Wt.map((i,e)=>{let{releaseDay:t,deadlineDay:n,leadDays:s,unlockAfter:r,...a}=i,[o,c,l]=A0[e];return{...a,availableFromYear:o,deadlineYear:c,durationYears:l,contracts:a.contracts.map(u=>({...u,bids:u.bids.map((h,f)=>{let p=e<6?hl(h.name):hl(Wt[(e-6)%3].contracts[0].bids[f].name),{name:y,...M}=h;return{...M,vendorId:p,get name(){return vn[p].name}}})}))}}),Lt=i=>{let e=_t.find(t=>t.id===i);if(!e)throw Error("\uC54C \uC218 \uC5C6\uB294 \uC758\uB8B0\uC785\uB2C8\uB2E4.");return e},zn=(i,e)=>i.bids.find(t=>t.id===e)?.vendorId,wr={school:{year:1,population:0,projects:0},fire:{year:2,population:0,projects:0},clinic:{year:2,population:0,projects:0},library:{year:2,population:650,projects:3},park:{year:2,population:750,projects:5},transport:{year:2,population:850,projects:7}};function Ch(i,e){if(i<3)return[];let t=zn(_t[0].contracts[0],"A"),n=zn(_t[0].contracts[0],"B"),s="\uC870\uB2EC\uD0C0\uC6B4 \uAC00\uC0C1 \uD589\uC815\uAE30\uB85D \xB7 \uC2E4\uC81C \uAE30\uC0AC/\uC81C\uC7AC \uC544\uB2D8",r=[{id:`performance-${i}`,year:i,vendorId:n,status:"VERIFIED_PERFORMANCE",title:"\uB0A9\uD488 \uC774\uB825\uC744 \uD655\uC778\uD560 \uC2DC\uAC04",text:"\uC644\uB8CC \uACC4\uC57D\uC758 \uC815\uC2DC \uC778\uC218\xB7\uBCF4\uC644 \uC774\uB825\uC785\uB2C8\uB2E4. \uC0AC\uC804 \uACF5\uAC1C \uAE30\uC900 \uBC16\uC758 \uAC00\uC810\uC744 \uBD80\uC5EC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",source:s,contractKeys:e.filter(a=>a.vendorId===n).map(a=>a.key)}];return(i===3||i===4)&&r.push({id:`rumor-${i}`,year:i,vendorId:t,status:"RUMOR",title:"\uC99D\uBE59\uC5D0 \uB300\uD55C \uC758\uBB38 \uC81C\uAE30 \xB7 \uD655\uC778 \uC911",text:"\uAC00\uC0C1 \uC81C\uBCF4\uC758 \uC0AC\uC2E4\uAD00\uACC4\uB97C \uD655\uC778 \uC911\uC785\uB2C8\uB2E4. \uC758\uD639\uB9CC\uC73C\uB85C \uCC38\uAC00 \uC81C\uD55C\uC774\uB098 \uC2E0\uB8B0\uB3C4 \uAC10\uC810\uC744 \uC801\uC6A9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",source:"\uC870\uB2EC\uD0C0\uC6B4 \uD5C8\uAD6C \uAE30\uC0AC \xB7 \uBBF8\uD655\uC778 \uC81C\uBCF4",contractKeys:[]}),i===5&&r.push({id:"restriction-5",year:i,vendorId:t,status:"OFFICIAL_RESTRICTION",title:"\uAC00\uC0C1 \uACF5\uC2DD \uCC38\uAC00\uC81C\uD55C \uACB0\uC815",text:"YEAR 5\uC5D0 \uACF5\uACE0\uD55C \uACBD\uC7C1\uC785\uCC30\uC5D0\uB9CC \uC801\uC6A9\uD569\uB2C8\uB2E4. YEAR 6\uBD80\uD130 \uD6A8\uB825\uC774 \uC5C6\uC73C\uBA70 \uC885\uD569\uC1FC\uD551\uBAB0 \uC8FC\uBB38\uC5D0\uB294 \uC774 \uAC00\uC0C1 \uACB0\uC815\uC774 \uC801\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",fromYear:5,throughYear:5,routes:["BID"],source:s,contractKeys:[]}),i>=6&&r.push({id:`quality-${i}`,year:i,vendorId:t,status:"CONFIRMED_DEFECT",title:"\uB0A9\uD488 \uD488\uC9C8 \uAE30\uB85D \uD655\uC778",text:"\uD655\uC778\uB41C \uACFC\uAC70 \uD558\uC790\uC640 \uBCF4\uC644 \uC774\uB825\uC744 \uCC38\uACE0\uD569\uB2C8\uB2E4. \uACF5\uC2DD \uC81C\uD55C\uC774 \uC544\uB2C8\uBA70 \uACF5\uAC1C\uB418\uC9C0 \uC54A\uC740 \uAC10\uC810\uC740 \uC801\uC6A9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",source:s,contractKeys:e.filter(a=>a.vendorId===t).map(a=>a.key)}),r}var dl={ink:2309960,grass:11127201,road:8491415,pavement:15131599,teal:3768194,cream:16772559},So=class{constructor(e,t){this.host=e;this.select=t;this.cameraTarget=new U;this.inputLocked=!1;this.unlocked=["school"];this.drag=null;this.scene=new cr;this.pick=[];this.levels={school:-1,fire:-1,clinic:-1,library:-1,park:-1,transport:-1};this.cars=[];this.people=[];this.clock=new mr;this.zoom=1;this.low=!1;this.reduced=!1;this.night=!1;this.frame=0;this.upgradeStart=0;this.upgradeFacility=null;this.animate=()=>{requestAnimationFrame(this.animate);let e=this.clock.getElapsedTime();if(this.cars.forEach((t,n)=>{let s=this.reduced?n*7:(e*(n===1?.7:1)+n*8)%25;t.position.set(s-12,.1,n%2?.65:-.65),t.rotation.y=n%2?Math.PI:0,t.visible=n!==1||this.levels.fire>0}),this.people.forEach((t,n)=>{t.visible=n<3||this.levels.school>0;let s=this.reduced?n:(e*.35+n*2)%12;t.position.set(s-7,.1+(this.reduced?0:Math.sin(e*5+n)*.025),n<5?1.7:-1.7)}),this.upgradeFacility){let t=e-this.upgradeStart,n=this.buildings[this.upgradeFacility];if(t<3){n.scale.y=t<1?.8+.2*Math.min(1,t):1;let s=Math.sin(t/3*Math.PI)*.22;this.camera.lookAt(this.cameraTarget.x+n.position.x*s,0,this.cameraTarget.z+n.position.z*s),this.camera.zoom=this.zoom+s,this.camera.updateProjectionMatrix()}else n.scale.y=1,this.camera.lookAt(this.cameraTarget),this.camera.zoom=this.zoom,this.camera.updateProjectionMatrix(),this.upgradeFacility=null}this.renderer.render(this.scene,this.camera);for(let t of Object.keys(this.labels)){let n=this.buildings[t].position.clone().add(new U(0,Math.max(3,this.buildings[t].userData.labelHeight||5),0)).project(this.camera),s=this.labels[t];s.style.left=`${(n.x*.5+.5)*this.host.clientWidth}px`,s.style.top=`${(-n.y*.5+.5)*this.host.clientHeight}px`}};this.renderer=new xo({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ea,this.renderer.setClearColor(15397614,0),this.renderer.outputColorSpace=Xt,this.host.append(this.renderer.domElement),this.camera=new ki(-18,18,14,-14,.1,150),this.camera.position.set(23,23,28),this.camera.lookAt(0,0,0),this.scene.add(new ms(16775391,9153703,2.7));let n=new gs(16773592,3.2);n.position.set(-12,25,16),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),Object.assign(n.shadow.camera,{left:-22,right:22,top:22,bottom:-22}),n.shadow.normalBias=.04,n.shadow.bias=-2e-4,this.scene.add(n);let s=this.box(this.scene,0,-.65,0,36,1.2,26,9943450);s.receiveShadow=!0,this.box(this.scene,0,-.08,0,36,.08,26,dl.grass),this.box(this.scene,0,-1.32,0,35.2,.2,25.2,7772288),this.box(this.scene,0,.02,0,34,.07,2.5,dl.road),this.box(this.scene,-.7,.025,0,2.5,.08,21,dl.road);for(let c=-12;c<13;c+=2)this.box(this.scene,c,.07,0,.85,.02,.07,15788760);for(let c=-10;c<11;c+=2)this.box(this.scene,-.7,.08,c,.07,.02,.85,15788760);for(let c=0;c<6;c++)this.box(this.scene,-2.5+c*.28,.09,1,.13,.02,1.05,16314845),this.box(this.scene,1,.09,-1+c*.28,1.05,.02,.13,16314845);this.buildings={school:this.facility("school",-11,-6),clinic:this.facility("clinic",0,-6),fire:this.facility("fire",11,-6),library:this.facility("library",-11,6),park:this.facility("park",0,6),transport:this.facility("transport",11,6)},this.labels={};let r=Zt;for(let c of Object.keys(this.buildings)){let l=document.createElement("button");l.className="map-label",l.dataset.facility=c,l.dataset.tutorialTarget=c,l.setAttribute("aria-label",r[c]+" \uC120\uD0DD"),l.innerHTML=`<span class="label-dot"></span>${r[c]} <small>LV.0</small>`,l.onclick=()=>{this.unlocked.includes(c)&&(!this.inputLocked||c==="school")&&t(c)},e.append(l),this.labels[c]=l}for(let c=0;c<26;c++){let l=c*2.4,u=Math.sin(l)*17,h=Math.cos(l)*12;Math.abs(u)<2&&(u+=3),this.tree(u,h,.7+c%4*.15)}[[-16,-4],[-16,-8],[16,8],[16,4],[16,-8],[-16,-3],[-16,9]].forEach(([c,l])=>this.tree(c,l,.8));for(let[c,l]of[[-3,2],[-3,-2],[2,-2],[2,2],[-11,2],[11,-2]])this.box(this.scene,c,1.05,l,.09,2.1,.09,5862254),this.box(this.scene,c,2.1,l,.35,.12,.35,16773050);for(let c=0;c<8;c++){let l=-11+c*1.1;this.box(this.scene,l,.18,-9.5,.65,.3,.6,7314034);for(let u=0;u<3;u++)this.box(this.scene,l+(u-1)*.18,.38,-9.5,.11,.12,.1,c%2?16767634:14523296)}for(let c=0;c<3;c++){let l=this.car(c===0?14595175:c===1?13202021:6266788);this.scene.add(l),this.cars.push(l)}for(let c=0;c<9;c++){let l=new gn;this.box(l,0,.35,0,.22,.45,.2,[3694198,14192755,15056487][c%3]);let u=new dt(new dr(.13,6,5),new un({color:15844772}));u.position.y=.69,l.add(u),this.scene.add(l),this.people.push(l)}let a=this.renderer.domElement,o=new gr;a.style.touchAction="none",a.addEventListener("contextmenu",c=>c.preventDefault()),a.addEventListener("pointerdown",c=>{this.inputLocked||![0,2].includes(c.button)||(this.drag={id:c.pointerId,button:c.button,x:c.clientX,y:c.clientY,startX:c.clientX,startY:c.clientY,moved:!1},c.button===2&&a.setPointerCapture(c.pointerId))}),a.addEventListener("pointermove",c=>{let l=this.drag;if(!(!l||l.id!==c.pointerId||this.inputLocked)){if(Math.hypot(c.clientX-l.startX,c.clientY-l.startY)>5&&(l.moved=!0),l.button===2&&l.moved){let u=a.getBoundingClientRect(),h=(this.camera.top-this.camera.bottom)/(Math.max(1,u.height)*this.zoom),f=new U().setFromMatrixColumn(this.camera.matrixWorld,0);f.y=0,f.normalize();let p=new U(-f.z,0,f.x),y=c.clientX-l.x,M=c.clientY-l.y;this.pan(-y*h*f.x+M*h*p.x,-y*h*f.z+M*h*p.z)}l.x=c.clientX,l.y=c.clientY}}),a.addEventListener("pointerup",c=>{let l=this.drag;if(this.drag=null,a.hasPointerCapture(c.pointerId)&&a.releasePointerCapture(c.pointerId),this.inputLocked||!l||l.button!==0||l.moved)return;let u=a.getBoundingClientRect();o.setFromCamera(new ze((c.clientX-u.left)/u.width*2-1,-(c.clientY-u.top)/u.height*2+1),this.camera);let h=o.intersectObjects(this.pick,!0)[0];if(h){let f=h.object;for(;f&&!f.userData.facility;)f=f.parent;f&&this.unlocked.includes(f.userData.facility)&&t(f.userData.facility)}}),a.addEventListener("pointercancel",()=>this.drag=null),a.addEventListener("lostpointercapture",()=>this.drag=null),a.addEventListener("wheel",c=>{c.preventDefault(),this.inputLocked||this.setZoom(this.zoom+(c.deltaY<0?.08:-.08))},{passive:!1}),new ResizeObserver(()=>this.resize()).observe(e),this.resize(),this.animate()}box(e,t,n,s,r,a,o,c){let l=new dt(new Un(r,a,o),new un({color:c,roughness:.84}));return l.position.set(t,n,s),l.castShadow=!0,l.receiveShadow=!0,l.userData.window=Math.abs(s)===1.88&&o===.08,e.add(l),l}roof(e,t,n,s,r,a,o,c){let l=new dt(new gi(0,1,a,4,1),new un({color:c,roughness:1}));l.rotation.y=Math.PI/4,l.scale.set(r*.72,1,o*.72),l.position.set(t,n,s),l.castShadow=!0,e.add(l)}tree(e,t,n){let s=new gn;s.position.set(e,0,t),s.scale.setScalar(n),this.box(s,0,.5,0,.18,1,.18,10061172);let r=new dt(new Fi(.9,0),new un({color:7248509,flatShading:!0}));r.position.y=1.5,r.castShadow=!0,s.add(r),this.scene.add(s)}car(e){let t=new gn;this.box(t,0,.38,0,1.45,.5,.8,e),this.box(t,-.12,.76,0,.75,.38,.7,15066836),this.box(t,.28,.8,0,.04,.22,.6,7640220);for(let n of[-.48,.48])for(let s of[-.4,.4]){let r=new dt(new gi(.2,.2,.12,10),new un({color:3623758}));r.rotation.x=Math.PI/2,r.position.set(n,.22,s),t.add(r)}return t}facility(e,t,n){let s=new gn;return s.position.set(t,0,n),s.userData.facility=e,this.scene.add(s),this.pick.push(s),s}render(e){this.unlocked=[...e.unlocked];for(let t of Object.keys(this.buildings)){let n=e.unlocked.includes(t)?e.facilityLevel[t]:-2;if(this.levels[t]===n)continue;this.levels[t]=n;let s=this.buildings[t];for(;s.children.length;){let r=s.children[0];s.remove(r),r.traverse(a=>{a instanceof dt&&(a.geometry.dispose(),(Array.isArray(a.material)?a.material:[a.material]).forEach(o=>o.dispose()))})}s.scale.set(1,1,1),Th(s,t,n),s.userData.labelHeight=new Nn().setFromObject(s).max.y+.65,this.labels[t].innerHTML=`<span class="label-dot ${n?"on":""}"></span>${Zt[t]} <small>LV.${n}</small>`}this.setNight(this.night)}setNight(e){this.night=e,this.host.parentElement?.classList.toggle("night",e),this.scene.traverse(t=>{if(t instanceof ms&&(t.intensity=e?.8:2.7),t instanceof gs&&(t.intensity=e?.5:3.2),t instanceof dt&&t.userData.window){let n=t.parent?.userData.facility,s=t.material;s.emissive.setHex(e&&this.levels[n]>0?16763493:0),s.emissiveIntensity=e?1.1:0}})}setZoom(e){this.zoom=Math.max(.75,Math.min(1.5,e)),this.camera.zoom=this.zoom,this.camera.updateProjectionMatrix()}setInputMode(e){this.inputLocked=e,e&&(this.drag=null)}pan(e,t){if(this.inputLocked)return;let n=Math.max(-7,Math.min(7,this.cameraTarget.x+e)),s=Math.max(-5,Math.min(5,this.cameraTarget.z+t)),r=new U(n-this.cameraTarget.x,0,s-this.cameraTarget.z);this.cameraTarget.add(r),this.camera.position.add(r),this.camera.lookAt(this.cameraTarget),this.camera.updateMatrixWorld()}setQuality(e,t){t&&this.finishUpgrade(),this.low=e,this.reduced=t,this.renderer.shadowMap.enabled=!e,this.renderer.setPixelRatio(e?1:Math.min(devicePixelRatio,1.5)),this.resize()}resize(){let e=this.host.clientWidth,t=this.host.clientHeight;if(!e||!t)return;this.renderer.setSize(e,t);let n=Math.max(17,24*t/e);this.camera.left=-n*e/t,this.camera.right=n*e/t,this.camera.top=n,this.camera.bottom=-n,this.camera.updateProjectionMatrix()}highlightFacility(e){Object.entries(this.labels).forEach(([t,n])=>n.classList.toggle("selected",t===e))}finishUpgrade(){this.upgradeFacility&&(this.buildings[this.upgradeFacility].scale.set(1,1,1),this.labels[this.upgradeFacility].classList.remove("upgrade")),this.upgradeFacility=null,this.camera.lookAt(this.cameraTarget),this.camera.zoom=this.zoom,this.camera.updateProjectionMatrix()}playUpgrade(e){this.finishUpgrade(),!this.reduced&&(this.upgradeFacility=e,this.upgradeStart=this.clock.getElapsedTime(),this.labels[e].classList.add("upgrade"),setTimeout(()=>this.labels[e].classList.remove("upgrade"),3e3))}setStatus(e){for(let t of Object.keys(this.labels)){let n=_t.filter(c=>c.facility===t),s=e.activeContracts.filter(c=>n.some(l=>l.id===c.requestId)),r=!e.unlocked.includes(t),a=e.offers.some(c=>n.some(l=>l.id===c)),o=r?"\uBBF8\uAC1C\uBC29":s.some(c=>c.dueYear<=e.year)?"\uAC80\uC218 \uB300\uAE30":s.length?"\uB0A9\uD488 \uB300\uAE30":a?"\uC0C8 \uC758\uB8B0":e.facilityLevel[t]>0?"\uC6B4\uC601 \uC911":"\uB300\uAE30";this.labels[t].innerHTML=`<span class="label-dot ${a?"on":""}"></span>${Zt[t]} <small>LV.${e.facilityLevel[t]} \xB7 ${o}</small>`,this.labels[t].classList.toggle("locked",r),this.labels[t].disabled=r,this.labels[t].title=r?"\uC0AC\uC5C5 \uC870\uAC74\uC744 \uCDA9\uC871\uD558\uBA74 \uAC1C\uBC29\uB429\uB2C8\uB2E4.":Xi[t][e.facilityLevel[t]],this.labels[t].setAttribute("aria-label",Zt[t]+" "+o+(r?"":" \xB7 "+Xi[t][e.facilityLevel[t]]))}}};function Eo(i,e){let t=i.requirements.filter(n=>{let s=e.specs[n.key];return n.op==="min"?!(typeof s=="number"&&s>=Number(n.value)):n.op==="max"?!(typeof s=="number"&&s<=Number(n.value)):s!==n.value}).map(n=>`${n.label}: \uD544\uC694 ${n.op==="min"?"\u2265":n.op==="max"?"\u2264":""}${n.value}${n.unit||""} / \uC81C\uC548 ${e.specs[n.key]??"\uBBF8\uC81C\uCD9C"}${n.unit||""}`);return e.price>i.budget&&t.push("\uC694\uCCAD \uC608\uC0B0\uC744 \uCD08\uACFC\uD569\uB2C8\uB2E4."),{eligible:t.length===0,failures:t}}function C0(i,e){return Eo(i,e)}function Ar(i){let e=i.bids.filter(t=>(i.rule==="TRIAL_CONDITION_CHECK"?C0(i,t):Eo(i,t)).eligible);return i.rule==="TRIAL_CONDITION_CHECK"?e.length===1?e[0]:void 0:[...e].sort((t,n)=>t.price+(i.rule==="TOTAL_COST_AMONG_ELIGIBLE"&&t.runningCost||0)-(n.price+(i.rule==="TOTAL_COST_AMONG_ELIGIBLE"&&n.runningCost||0)))[0]}function To(i,e,t,n=i.year){return i.newsHistory.find(s=>s.vendorId===e&&s.status==="OFFICIAL_RESTRICTION"&&s.fromYear<=n&&s.throughYear>=n&&s.routes?.includes(t))}function Ls(i,e,t,n,s=t.year){let r=Eo(i,e),a=To(t,zn(i,e.id),n,s),o=[...r.failures,...a?[`\uACF5\uC2DD \uCC38\uAC00\uC81C\uD55C: YEAR ${a.fromYear}~${a.throughYear}, \uD574\uB2F9 \uACBD\uC7C1\uC785\uCC30\uC5D0 \uC801\uC6A9`]:[]];return{eligible:o.length===0,failures:o}}function wo(i,e,t,n=e.year){return Ar({...i,bids:i.bids.filter(s=>Ls(i,s,e,t,n).eligible)})}function Mi(i,e,t,n){let s=i.bids.find(a=>a.id===e);if(!s)return{ok:!1,reason:"\uD6C4\uBCF4\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694."};let r=Ls(i,s,t,n);return r.eligible?wo(i,t,n)?.id!==e?{ok:!1,reason:"\uC870\uAC74\uC5D0 \uB9DE\uB294 \uD6C4\uBCF4\uB07C\uB9AC \uC774\uBC88 \uC758\uB8B0\uC758 \uACF5\uAC1C \uAE30\uC900\uC744 \uBE44\uAD50\uD574\uC8FC\uC138\uC694. "+i.ruleText}:{ok:!0,reason:i.correctReason}:{ok:!1,reason:r.failures.join(" \xB7 ")}}var Rh=(i,e)=>i.length===e.length&&new Set(i).size===i.length&&i.every(t=>e.includes(t));function Ds(i,e,t=!1){let n=t?[]:i.items.filter(c=>c.issue&&c.kind!=="damage").map(c=>c.id),s=t?[]:i.items.filter(c=>c.issue&&c.kind==="damage").map(c=>c.id),r=t?i.quantity:i.actualCount,a=e.specChecked&&Rh(e.spec,n),o=e.countChecked&&Rh(e.damage,s)&&e.count===r&&e.countMismatch===(r!==i.quantity);return{ok:a&&o,inspectionOK:a,acceptanceOK:o,spec:n,damage:s,countMismatch:r!==i.quantity,hasIssues:n.length+s.length>0||r!==i.quantity}}var Ao=()=>({spec:[],damage:[],countMismatch:!1,count:null,specChecked:!1,countChecked:!1});var fl=["school","fire","clinic","library","park","transport"],Ih=i=>i.budget.approved-i.budget.spent-i.budget.reserved;function Hn(i,e){let t=(i^Math.imul(e+1,2654435761))>>>0;return t^=t>>>16,t=Math.imul(t,2146121005),t^=t>>>15,(t>>>0)/4294967296}var Cr=()=>({school:0,fire:0,clinic:0,library:0,park:0,transport:0});function pl(i=Date.now()>>>0){let e={saveVersion:2,seed:i>>>0,day:1,dayLimit:14,ended:!1,budget:{approved:13e3,spent:0,reserved:0},satisfaction:50,trust:60,facilityLevel:Cr(),services:{education:20,safety:20,health:20,life:20,environment:20},offers:[],boardOffset:0,activeContracts:[],completedIds:[],receipts:[],cancelled:0,onTime:0,eventDeck:si.map(t=>t.id).sort((t,n)=>Hn(i,si.findIndex(s=>s.id===t))-Hn(i,si.findIndex(s=>s.id===n))),eventLog:[],pendingEvent:null,bonusGranted:!1,priority:null,trialResult:null,before:Cr()};return Co(e),e}function R0(i,e){let t=Wt.find(n=>n.id===i);return!!t&&!e.ended&&!e.completedIds.includes(i)&&t.releaseDay<=e.day&&t.unlockAfter<=e.completedIds.length&&!e.activeContracts.some(n=>n.requestId===i)}function Co(i){let e=Wt.filter(t=>R0(t.id,i)).sort((t,n)=>+(n.facility===i.priority)-+(t.facility===i.priority)||Hn(i.seed+i.boardOffset,Wt.indexOf(t))-Hn(i.seed+i.boardOffset,Wt.indexOf(n)));i.offers=e.slice(0,3).map(t=>t.id)}function Ro(i){return Hn(i,77)<.5?[98,97,99,96,98,97,98]:[98,91,99,92,98,90,98]}var ml=i=>Ro(i).every(e=>e>=95)?"verified":"inconclusive";function gl(i){if(!Number.isFinite(Ih(i))||Ih(i)<0||i.budget.spent<0||i.budget.reserved<0)throw Error("\uC608\uC0B0 \uBD88\uBCC0\uC2DD \uC704\uBC18");if(i.activeContracts.length>2)throw Error("\uACC4\uC57D \uC2AC\uB86F \uCD08\uACFC");if(i.activeContracts.reduce((t,n)=>t+n.price,0)!==i.budget.reserved)throw Error("\uC608\uC57D \uC7A5\uBD80 \uBD88\uC77C\uCE58");if(i.receipts.reduce((t,n)=>t+n.price,0)!==i.budget.spent)throw Error("\uC9D1\uD589 \uC7A5\uBD80 \uBD88\uC77C\uCE58");let e=[...i.activeContracts,...i.receipts].map(t=>t.key);if(new Set(e).size!==e.length)throw Error("\uC911\uBCF5 \uACC4\uC57D")}var Mt=(i,e,t,n,s,r,a,o)=>({id:i,major:e,target:t,title:n,message:s,actions:r,event:a,next:o,why:["","\uACF5\uACF5\uC2DC\uC124\uC758 \uD544\uC694\uC5D0\uC11C \uAD6C\uB9E4\uAC00 \uC2DC\uC791\uB3FC\uC694.","\uC694\uCCAD\uC5D0 \uB9DE\uB294 \uBB3C\uD488\uC744 \uC900\uBE44\uD574\uC57C \uD574\uC694.","\uAC00\uACA9\uBCF4\uB2E4 \uBA3C\uC800 \uD544\uC218 \uADDC\uACA9\uC744 \uD655\uC778\uD574\uC694.","\uAC01 \uC694\uCCAD\uC5D0 \uD5C8\uC6A9\uB41C \uC808\uCC28\uAC00 \uB2EC\uB77C\uC694.","\uBAA8\uB4E0 \uD6C4\uBCF4\uC5D0\uAC8C \uBBF8\uB9AC \uACF5\uAC1C\uD55C \uAC19\uC740 \uAE30\uC900\uC744 \uC801\uC6A9\uD574\uC694.","\uACC4\uC57D \uB0B4\uC6A9\uACFC \uC2E4\uC81C \uB0A9\uD488\uD488\uC774 \uAC19\uC544\uC57C \uD574\uC694.","\uC218\uB7C9\xB7\uC190\uC0C1\uAE4C\uC9C0 \uD655\uC778\uD55C \uB4A4\uC5D0\uB9CC \uB300\uAE08\uC744 \uC9C0\uAE09\uD574\uC694.","\uC815\uC0C1 \uC6B4\uC601\uB41C \uC11C\uBE44\uC2A4\uAC00 \uC5F0\uB9D0 \uC778\uAD6C \uBCC0\uD654\uB85C \uC774\uC5B4\uC838\uC694."][e]}),Ns=[Mt("school",1,"school","\uBC18\uAC00\uC6CC\uC694!","\uD559\uAD50\uC758 \uCEF4\uD4E8\uD130\uAC00 \uBD80\uC871\uD574\uC694. \uBC1D\uAC8C \uD45C\uC2DC\uB41C \uD559\uAD50\uB97C \uB20C\uB7EC \uCCAB \uAD6C\uB9E4\uB97C \uD568\uAED8 \uC2DC\uC791\uD574\uC694.",["school"],"SCHOOL_SELECTED","request"),Mt("request",2,"start","\uD559\uAD50\uC5D0\uC11C \uC628 \uBD80\uD0C1","\uD559\uAD50 \uC758\uB8B0\uB97C \uC5F4\uC5B4 \uD544\uC694\uD55C \uBB3C\uD488\uC744 \uD655\uC778\uD574\uC694.",["start"],"REQUEST_OPENED","requirements"),{...Mt("requirements",3,"requirements","\uD544\uC218 \uC870\uAC74 \uC77D\uAE30","30\uB300, RAM 16GB\xB7SSD 512GB\xB7\uBCF4\uC99D 3\uB144 \uC774\uC0C1\uC774\uC5D0\uC694. \uC870\uAC74\uC744 \uC77D\uC740 \uB4A4 \uC774 \uC548\uB0B4 \uCE74\uB4DC\uC758 \u2018\uC694\uAD6C\uC870\uAC74 \uD655\uC778\uD588\uC5B4\uC694\u2019\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694.",["ackrequirements"],"REQUIREMENTS_ACKNOWLEDGED","route"),guideAction:{action:"ackrequirements",label:"\uC694\uAD6C\uC870\uAC74 \uD655\uC778\uD588\uC5B4\uC694"}},Mt("route",4,"review","\uB098\uB77C\uC7A5\uD130\uB85C \uC774\uB3D9","\uC774 \uC694\uCCAD\uC740 \uACBD\uC7C1\uC785\uCC30\uC774\uC5D0\uC694. \uACF5\uAC1C\uB41C \uC870\uAC74\uC73C\uB85C \uC5C5\uCCB4\uB97C \uBE44\uAD50\uD574\uC694.",["review"],"PROCUREMENT_OPENED","vendorA"),Mt("vendorA",5,"vendor-A","A\uC758 \uADDC\uACA9\uC744 \uB300\uC870\uD574\uC694","RAM\uC744 \uC694\uCCAD \uC870\uAC74\uACFC \uBE44\uAD50\uD558\uACE0 \uC801\uACA9 \uB610\uB294 \uBD80\uC801\uACA9\uC744 \uC120\uD0DD\uD574\uC694.",["classify"],"CLASSIFIED_A","vendorB"),Mt("vendorB",5,"vendor-B","B\uC758 \uC870\uAC74\uC744 \uD655\uC778\uD574\uC694","RAM\xB7SSD\xB7\uBCF4\uC99D \uC870\uAC74\uC744 \uBAA8\uB450 \uB9CC\uC871\uD558\uB294\uC9C0 \uD655\uC778\uD574\uC694.",["classify"],"CLASSIFIED_B","vendorC"),Mt("vendorC",5,"vendor-C","C\uB3C4 \uAC19\uC740 \uAE30\uC900\uC73C\uB85C","C\uB3C4 \uAC00\uACA9\uC744 \uBCF4\uAE30 \uC804\uC5D0 \uD544\uC218 \uC870\uAC74\uBD80\uD130 \uBE44\uAD50\uD574\uC694.",["classify"],"CLASSIFIED_C","choose"),Mt("choose",5,"bids","\uACF5\uAC1C \uAE30\uC900\uC73C\uB85C \uD6C4\uBCF4 \uC120\uD0DD","\uC870\uAC74\uC744 \uB9CC\uC871\uD55C \uD6C4\uBCF4\uB07C\uB9AC \uC774\uBC88 \uC694\uCCAD\uC758 \uAC00\uACA9 \uAE30\uC900\uC744 \uBE44\uAD50\uD574 \uACC4\uC57D \uD6C4\uBCF4\uB97C \uACE8\uB77C\uC694.",["choose"],"VALID_VENDOR_SELECTED","submit"),Mt("submit",5,"submitbid","\uC120\uC815 \uADFC\uAC70 \uD655\uC778","\uC120\uD0DD \uAE30\uC900\uC744 \uC801\uC6A9\uD574 \uACB0\uC815\uC744 \uD655\uC778\uD574\uC694.",["submitbid"],"AWARD_READY","contract"),Mt("contract",5,"delivery","\uACC4\uC57D \uB300\uAE08\uC740 \uBA3C\uC800 \uC608\uC57D","\uC608\uC57D \uD6C4 \uB0A8\uB294 \uC608\uC0B0\uC744 \uD655\uC778\uD558\uC138\uC694. \uC544\uC9C1 \uB3C8\uC744 \uC9C0\uAE09\uD558\uC9C0\uB294 \uC54A\uC544\uC694.",["delivery"],"CONTRACT_CONFIRMED","open"),Mt("open",6,"openall","\uB3C4\uCC29\uD55C \uBB3C\uD488 \uC0B4\uD3B4\uBCF4\uAE30","\uC0C1\uC790\uB97C \uD3BC\uCCD0 \uACC4\uC57D\uACFC \uC2E4\uC81C \uADDC\uACA9\uC744 \uBE44\uAD50\uD574\uC694. \uC804\uCCB4 \uAC1C\uBD09\uC740 \uBC18\uBCF5 \uD074\uB9AD\uC744 \uC904\uC774\uB294 \uBCF4\uC870\uC608\uC694.",["openall","open"],"GOODS_OPENED","spec"),Mt("spec",6,"inspection","\uADDC\uACA9\uC774 \uB2E4\uB978 \uBB3C\uD488 \uCC3E\uAE30","RAM\uC774 \uAE30\uC900\uBCF4\uB2E4 \uC801\uC740 \uBB3C\uD488\uB9CC \uBB38\uC81C\uB85C \uD45C\uC2DC\uD558\uC138\uC694. \uC544\uB798 \u2018\uADDC\uACA9\xB7\uAE30\uB85D \uBE44\uAD50\uB97C \uB9C8\uCCE4\uC2B5\uB2C8\uB2E4\u2019\uB97C \uCCB4\uD06C\uD574\uC694.",["mark","open","openall","compareitem","tab-confirm"],"SPEC_RECORDED","counttab"),Mt("counttab",7,"counttab","\uC774\uC81C \uC218\uB7C9\uACFC \uC190\uC0C1","02 \uAC80\uC218 \uD0ED\uC73C\uB85C \uC774\uB3D9\uD574 \uC218\uB7C9\xB7\uC190\uC0C1\uB3C4 \uD655\uC778\uD574\uC694.",["tab"],"COUNT_TAB","count"),Mt("count",7,"inspection","\uC9C1\uC811 \uC218\uB7C9 \uD655\uC778","\uC2E4\uC81C \uBB3C\uD488 \uC218\uB97C \uC785\uB825\uD558\uACE0 \uC190\uC0C1\uC744 \uD655\uC778\uD55C \uB4A4 \uC644\uB8CC \uCCB4\uD06C\uB97C \uB0A8\uACA8\uC694.",["open","openall","mark","count-input","count-mismatch","tab-confirm","compareitem"],"COUNT_RECORDED","repair"),Mt("repair",7,"repair","\uD558\uC790\uB294 \uBC14\uB85C\uC7A1\uC544\uC57C \uD574\uC694","\uADDC\uACA9\uC774 \uB2E4\uB978 PC\uAC00 \uC788\uC5B4\uC694. \uBCF4\uC644 \uC694\uCCAD\uC744 \uB20C\uB7EC \uC62C\uBC14\uB978 \uBB3C\uD488\uC73C\uB85C \uBC14\uAFD4\uC694. \uC815\uB2F9\uD55C \uC694\uCCAD\uC5D0\uB294 \uBC8C\uC810\uC774 \uC5C6\uC5B4\uC694.",["repair"],"REPAIRED","reopen"),Mt("reopen",6,"openall","\uBCF4\uC644\uD488\uB3C4 \uB2E4\uC2DC \uD655\uC778","\uC0C8\uB85C \uB3C4\uCC29\uD55C \uBB3C\uD488\uC774 \uACC4\uC57D\uACFC \uB9DE\uB294\uC9C0 \uD655\uC778\uD574\uC694.",["openall","open"],"GOODS_OPENED","respec"),Mt("respec",6,"inspection","\uC218\uC815\uB41C \uADDC\uACA9 \uB300\uC870","\uC774\uC81C \uBAA8\uB450 \uACC4\uC57D \uADDC\uACA9\uACFC \uAC19\uB2E4\uBA74 \uBB38\uC81C \uD45C\uC2DC \uC5C6\uC774 \uBE44\uAD50 \uC644\uB8CC\uB97C \uCCB4\uD06C\uD574\uC694. \uC9C1\uC811 \uD655\uC778\uC740 \uCE74\uB4DC \uD074\uB9AD\uC774\uB098 \u2018\uBB3C\uD488 1\uAC1C \uBE44\uAD50\u2019\uB85C \uD560 \uC218 \uC788\uC5B4\uC694.",["mark","open","openall","compareitem","tab-confirm"],"SPEC_RECORDED","recounttab"),Mt("recounttab",7,"counttab","\uBCF4\uC644\uD488 \uC218\uB7C9 \uD655\uC778","02 \uAC80\uC218\uC5D0\uC11C \uC218\uB7C9\uACFC \uC190\uC0C1\uC744 \uB2E4\uC2DC \uD655\uC778\uD574\uC694.",["tab"],"COUNT_TAB","recount"),Mt("recount",7,"inspection","\uB9C8\uC9C0\uB9C9 \uC218\uB7C9\xB7\uC190\uC0C1 \uD655\uC778","\uC2E4\uC81C \uC218\uB7C9\uC744 \uC801\uACE0 \uC190\uC0C1\uC774 \uC5C6\uB294\uC9C0 \uD655\uC778\uD55C \uB4A4 \uC644\uB8CC \uCCB4\uD06C\uB97C \uB0A8\uACA8\uC694.",["open","openall","mark","count-input","count-mismatch","tab-confirm","compareitem"],"COUNT_RECORDED","accept"),Mt("accept",7,"accept","\uC815\uC0C1 \uBB3C\uD488 \uC778\uC218","\uAC80\uC0AC\xB7\uAC80\uC218\uB97C \uD1B5\uACFC\uD55C \uBB3C\uD488\uC744 \uC778\uC218\uD574\uC694. \uC774\uB54C \uC608\uC57D\uC561\uC774 \uC9D1\uD589\uC561\uC73C\uB85C \uBC14\uB00C\uC5B4\uC694.",["accept"],"DELIVERY_ACCEPTED","growth"),Mt("growth",8,"next","\uD559\uAD50\uAC00 \uB2EC\uB77C\uC84C\uC5B4\uC694","\uD559\uAD50 \uC11C\uBE44\uC2A4\uAC00 \uAC1C\uC120\uB410\uC5B4\uC694. \uB3C4\uC2DC\uB85C \uB3CC\uC544\uAC00 \uC5F0\uB9D0 \uC778\uAD6C \uBCC0\uD654\uB97C \uD655\uC778\uD574\uC694.",["next"],"RETURNED_TOWN","settle"),Mt("settle",8,"settle","\uCCAB\uD574 \uACB0\uC0B0","\uC62C\uD574 \uC9D1\uD589\uC561\uACFC \uD559\uAD50 \uC11C\uBE44\uC2A4\uAC00 \uC778\uAD6C\uC5D0 \uBBF8\uCE5C \uC601\uD5A5\uC744 \uD655\uC778\uD574\uC694. \uB2E4\uC74C \uD574\uBD80\uD130 \uB2E4\uB978 \uAE30\uAD00\uC758 \uC758\uB8B0\uAC00 \uC5F4\uB824\uC694.",["settle"],"YEAR_1_SETTLED","done")];function Us(i){return i.tutorial.finished?void 0:Ns.find(e=>e.id===i.tutorial.stepId)}function Ph(i,e,t={}){let n=Us(i);if(!n||n.event!==e)return!1;let s=i.activeContracts.find(o=>o.requestId==="M01"),r=Lt("M01").contracts[0],a=!0;if(e==="SCHOOL_SELECTED"&&(a=t.facility==="school"),e==="REQUEST_OPENED"&&(a=t.id==="M01"),e.startsWith("CLASSIFIED_")){let o=e.slice(-1),c=r.bids.find(l=>l.id===o);a=t.id===o&&t.value===Ls(r,c,i,"BID").eligible}return(e==="VALID_VENDOR_SELECTED"||e==="AWARD_READY")&&(a=typeof t.bidId=="string"&&Mi(r,t.bidId,i,"BID").ok),e==="CONTRACT_CONFIRMED"&&(a=!!s),e==="GOODS_OPENED"&&(a=!!s&&s.opened.length>0),e==="SPEC_RECORDED"&&(a=!!s&&Ds(r,s.observations,s.repaired).inspectionOK),e==="COUNT_RECORDED"&&(a=!!s&&Ds(r,s.observations,s.repaired).acceptanceOK),e==="COUNT_TAB"&&(a=!!s&&s.tab==="count"),e==="REPAIRED"&&(a=!!s?.repaired),(e==="DELIVERY_ACCEPTED"||e==="RETURNED_TOWN")&&(a=i.completedIds.includes("M01")),e==="YEAR_1_SETTLED"&&(a=i.annualHistory.some(o=>o.year===1)&&i.completedIds.includes("M01")),a?(i.tutorial.stepId=n.next,n.next==="done"&&(i.tutorial.finished=!0,i.tutorial.onboardingComplete=!0),!0):!1}var I0=Object.keys(wr),Rr=i=>i.budget.approved-i.budget.spent-i.budget.reserved-(i.accounts.find(e=>e.year===i.year)?.expired||0),Lh=()=>({phase:"town",selected:"M01",requestId:"M01",contractIndex:0,route:"BID",chosen:"",classifications:{}});function Io(i=Date.now()>>>0){return{saveVersion:3,seed:i>>>0,year:1,yearLimit:10,yearClosed:!1,ended:!1,population:500,lastPopulationDelta:0,serviceScore:45,qualityDebt:0,trust:60,budget:{approved:4e3,spent:0,reserved:0,outstandingCommitments:0},accounts:[{year:1,approved:4e3,subsidy:0,spent:0,reserved:0,expired:0,closed:!1}],facilityLevel:Cr(),unlocked:["school"],services:{education:20,safety:20,health:20,life:20,environment:20},offers:["M01"],boardOffset:0,activeContracts:[],completedIds:[],receipts:[],cancelled:0,onTime:0,eventDeck:Vn.map(t=>t.id).sort((t,n)=>Hn(i,Vn.findIndex(s=>s.id===t))-Hn(i,Vn.findIndex(s=>s.id===n))),eventLog:[],pendingEvent:null,priority:null,trialResult:null,before:Cr(),vendorHistory:Object.fromEntries(Object.keys(vn).map(t=>[t,{deliveries:0,onTime:0,repairs:0,contracts:[]}])),newsHistory:[],tutorial:{finished:!1,stepId:"school",skipUsed:!1,onboardingComplete:!1,seenContextHints:[]},annualHistory:[],ui:Lh()}}function Dh(i,e=i.year){return I0.filter(t=>{let n=wr[t];return e>=n.year&&(i.population>=n.population||i.completedIds.length>=n.projects)})}function ri(i,e){let t=_t.find(n=>n.id===i);return!!t&&!e.ended&&!e.yearClosed&&(e.year!==1||i==="M01")&&e.unlocked.includes(t.facility)&&!e.completedIds.includes(i)&&t.availableFromYear<=e.year&&!e.activeContracts.some(n=>n.requestId===i)}function yl(i){i.unlocked=Dh(i,i.yearClosed?Math.min(10,i.year+1):i.year),i.offers=_t.filter(e=>ri(e.id,i)).sort((e,t)=>+(t.facility===i.priority)-+(e.facility===i.priority)||Hn(i.seed+i.boardOffset,_t.indexOf(e))-Hn(i.seed+i.boardOffset,_t.indexOf(t))).slice(0,3).map(e=>e.id)}var Os=(i,e)=>i.receipts.filter(t=>t.requestId===e).length;function Fs(i,e,t,n,s){let r=_t.find(l=>l.id===e);if(!r||!ri(e,i)||Os(i,e)!==t)return"\uD604\uC7AC \uC2DC\uC791\uD560 \uC218 \uC5C6\uB294 \uC758\uB8B0\uC785\uB2C8\uB2E4.";if(!r.allowedRoutes.includes(n))return"\uC694\uCCAD\uC5D0 \uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC740 \uAD6C\uB9E4 \uACBD\uB85C\uC785\uB2C8\uB2E4.";if(i.activeContracts.length>=dn.slots)return"\uC9C4\uD589 \uC911 \uACC4\uC57D\uC740 \uCD5C\uB300 2\uAC74\uC785\uB2C8\uB2E4.";let a=r.contracts[t];if(!a)return"\uACC4\uC57D \uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";let o=Mi(a,s,i,n);if(!o.ok)return o.reason;let c=a.bids.find(l=>l.id===s);return c.price>Rr(i)?`\uAC00\uC6A9 \uC608\uC0B0\uC774 ${c.price-Rr(i)}\uB9CC \uBD80\uC871\uD569\uB2C8\uB2E4. \uB2E4\uC74C \uD574 \uC0C8 \uC2B9\uC778 \uC608\uC0B0\uC73C\uB85C \uC0AC\uC5C5\uC744 \uB2E4\uC2DC \uACC4\uD68D\uD558\uC138\uC694.`:i.year+r.durationYears>i.yearLimit?"\uC2DC\uC98C \uC885\uB8CC \uC774\uD6C4 \uB0A9\uD488\uB418\uB294 \uC2E0\uADDC \uACC4\uC57D\uC740 \uCCB4\uACB0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.":""}function P0(i){let e=i.accounts.find(t=>t.year===i.year);i.budget={approved:e.approved,spent:e.spent,reserved:e.reserved,outstandingCommitments:i.activeContracts.filter(t=>t.fundingYear<i.year).reduce((t,n)=>t+n.price,0)}}function Po(i){if(!Number.isInteger(i.year)||i.year<1||i.year>10||i.activeContracts.length>2)throw Error("\uC5F0\uB3C4/\uACC4\uC57D \uC2AC\uB86F \uC624\uB958");let e=i.accounts.find(n=>n.year===i.year);if(!e||i.accounts.length!==i.year||new Set(i.accounts.map(n=>n.year)).size!==i.year)throw Error("\uC5F0\uAC04 \uC7A5\uBD80 \uB204\uB77D");for(let n of i.accounts){if(![n.approved,n.spent,n.reserved,n.expired].every(s=>Number.isSafeInteger(s)&&s>=0)||n.spent+n.reserved+n.expired>n.approved)throw Error("\uC608\uC0B0 \uBD88\uBCC0\uC2DD \uC704\uBC18");if(n.reserved!==i.activeContracts.filter(s=>s.fundingYear===n.year).reduce((s,r)=>s+r.price,0))throw Error("\uC608\uC57D \uC6D0\uC7A5 \uBD88\uC77C\uCE58");if(n.spent!==i.receipts.filter(s=>s.fundingYear===n.year).reduce((s,r)=>s+r.price,0))throw Error("\uC9D1\uD589 \uC6D0\uC7A5 \uBD88\uC77C\uCE58");if(n.closed&&n.approved!==n.spent+n.reserved+n.expired)throw Error("\uB9C8\uAC10 \uC7A5\uBD80 \uBD88\uC77C\uCE58")}if(i.budget.approved!==e.approved||i.budget.reserved!==e.reserved||i.budget.spent!==e.spent||i.budget.outstandingCommitments!==i.activeContracts.filter(n=>n.fundingYear<i.year).reduce((n,s)=>n+s.price,0))throw Error("\uD604\uC7AC \uC5F0\uB3C4 \uC608\uC0B0 \uBD88\uC77C\uCE58");let t=[...i.activeContracts,...i.receipts].map(n=>n.key);if(new Set(t).size!==t.length)throw Error("\uACC4\uC57D \uC911\uBCF5");if(new Set(i.annualHistory.map(n=>n.year)).size!==i.annualHistory.length)throw Error("\uACB0\uC0B0 \uC911\uBCF5");if(!Number.isInteger(i.population)||i.population<100||!Number.isFinite(i.trust)||i.trust<0||i.trust>100)throw Error("\uB3C4\uC2DC \uC218\uCE58 \uC624\uB958")}var L0={M01:18,M02:5,M03:5,M04:4,M05:3,M06:5,M07:5,M08:4,M09:5,M10:4,M11:3,M12:4};function Ir(i){let e=i.activeContracts.filter(p=>p.dueYear<=i.year&&!p.repaired),t=e.length,n=i.year>=3?["fire","clinic"].filter(p=>!i.facilityLevel[p]).length:0,s=Math.floor(i.receipts.reduce((p,y)=>p+y.runningCost,0)/300),r=Math.min(100,Math.max(0,dn.serviceBase+i.completedIds.reduce((p,y)=>p+L0[y]*(y==="M05"&&i.trialResult==="inconclusive"?.5:1),0)-s)),a=Math.max(dn.minGrowth,Math.min(dn.maxGrowth,.01+.001*(r-50))),o=Math.round(i.population*.01),c=Math.round(i.population*a)-o,l=[{label:"\uAE30\uBCF8 \uC815\uCC29",value:o},{label:`\uC6B4\uC601 \uC11C\uBE44\uC2A4 ${Math.round(r)}\uC810 \xB7 \uC720\uC9C0\uBE44 \uC601\uD5A5 \uD3EC\uD568`,value:c},{label:"\uBBF8\uC778\uC218\xB7\uBBF8\uD574\uACB0 \uD488\uC9C8 \uBB38\uC81C",value:t?-t*dn.unresolvedPenalty:0},{label:"\uD544\uC218 \uC18C\uBC29\xB7\uC758\uB8CC \uC11C\uBE44\uC2A4 \uBD80\uC871",value:n?-n*dn.essentialPenalty:0}],u=l.reduce((p,y)=>p+y.value,0),h=Math.max(-Math.round(i.population*dn.populationClamp),Math.min(Math.round(i.population*dn.populationClamp),u)),f=Math.max(dn.minPopulation,i.population+h);return f-i.population!==u&&l.push({label:"\uBCC0\uB3D9 \uD3ED\xB7\uCD5C\uC18C \uC778\uAD6C \uBCF4\uD638",value:f-i.population-u}),{population:f,delta:f-i.population,reasons:l,serviceScore:Math.round(r),qualityDebt:t}}var Lo=class{constructor(){this.state=Io();this.listeners=[]}getState(){return structuredClone(this.state)}subscribe(e){this.listeners.push(e)}dispatch(e){let t=this.getState(),n="",s=r=>({ok:!1,reason:r});if(e.type==="RESET")return this.state=Io(e.seed),this.emit(),{ok:!0,reason:"\uC0C8 10\uB144 \uC2DC\uC98C\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4."};if(e.type==="RESTORE")return Po(e.state),this.state=structuredClone(e.state),this.emit(),{ok:!0,reason:"\uC5F0\uB3C4\uBCC4 \uB3C4\uC2DC \uAE30\uB85D\uC744 \uBCF5\uC6D0\uD588\uC2B5\uB2C8\uB2E4."};if(e.type==="UI")t.ui=structuredClone(e.ui);else if(e.type==="HINT_SEEN")t.tutorial.seenContextHints.includes(e.id)||t.tutorial.seenContextHints.push(e.id);else if(e.type==="TUTORIAL_EVENT"){if(!Ph(t,e.event,e.data))return s("\uD604\uC7AC \uC548\uB0B4 \uB2E8\uACC4\uC758 \uC644\uB8CC \uC870\uAC74\uC774 \uC544\uC9C1 \uCDA9\uC871\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.")}else if(e.type==="SKIP_TUTORIAL")t.tutorial.finished=!0,t.tutorial.skipUsed=!0,t.tutorial.stepId="skipped",n="\uC548\uB0B4\uB9CC \uB2EB\uC558\uC2B5\uB2C8\uB2E4. \uD559\uAD50 \uC758\uB8B0\uC640 \uC608\uC0B0\uC740 \uADF8\uB300\uB85C\uC785\uB2C8\uB2E4.";else{if(t.ended)return s("10\uB144 \uACB0\uC0B0\uC774 \uB05D\uB0AC\uC2B5\uB2C8\uB2E4.");if(t.yearClosed&&e.type!=="BEGIN_YEAR")return s("\uC5F0\uB9D0 \uACB0\uC0B0\uC744 \uD655\uC778\uD558\uACE0 \uB2E4\uC74C \uD574\uB97C \uC2DC\uC791\uD558\uC138\uC694.");if(e.type==="MISTAKE"&&t.year!==1&&(t.trust=Math.max(0,t.trust-1)),e.type==="ROTATE"&&t.boardOffset++,e.type==="PRIORITY"&&(t.priority=e.facility),e.type==="RESERVE"){let r=Fs(t,e.id,e.index,e.route,e.bidId);if(r)return s(r);let a=Lt(e.id),o=a.contracts[e.index],c=o.bids.find(l=>l.id===e.bidId);t.activeContracts.push({key:`${e.id}:${e.index}`,requestId:e.id,index:e.index,bidId:c.id,vendorId:zn(o,c.id),route:e.route,price:c.price,reservedYear:t.year,dueYear:t.year+a.durationYears,fundingYear:t.year,paymentPlan:[{year:t.year+a.durationYears,amount:c.price}],repaired:!1,cancellationAllowed:!1,observations:Ao(),opened:[],tab:"spec",directChecked:!1,trialAnswer:""}),t.accounts[t.year-1].reserved+=c.price,n=`${c.price.toLocaleString()}\uB9CC \uC608\uC57D. ${a.durationYears?"\uB2E4\uC74C \uD574 \uCD08":"\uC62C\uD574 \uC548"} \uB0A9\uD488\xB7\uC778\uC218 \uD6C4 \uC9C0\uAE09\uD569\uB2C8\uB2E4.`,t.eventLog.push({year:t.year,id:"contract",message:`${a.title} \xB7 \uC7AC\uC6D0 YEAR ${t.year} \xB7 \uC57D\uC815 ${c.price}\uB9CC`})}if(e.type==="DRAFT"){let r=t.activeContracts.find(a=>a.key===e.key);if(!r)return s("\uC9C4\uD589 \uC911 \uACC4\uC57D\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");if(e.patch.observations){let a=e.patch.observations.count;if(a!==null&&(!Number.isInteger(a)||a<0||a>100))return s("\uC218\uB7C9\uC740 0\u2013100 \uC0AC\uC774\uC758 \uC815\uC218\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.")}Object.assign(r,structuredClone(e.patch))}if(e.type==="INSPECT"){let r=t.activeContracts.find(l=>l.key===e.key);if(!r)return s("\uC774\uBBF8 \uC778\uC218\uD588\uAC70\uB098 \uCDE8\uC18C\uD55C \uACC4\uC57D\uC785\uB2C8\uB2E4.");if(r.dueYear>t.year)return s("\uB2E4\uC74C \uD574 \uB0A9\uD488\xB7\uC2DC\uBC94\uC0AC\uC6A9 \uACB0\uACFC\uAC00 \uB3C4\uCC29\uD569\uB2C8\uB2E4.");let a=Lt(r.requestId),o=a.contracts[r.index];if(!r.directChecked)return s("\uBB3C\uD488 \uCE74\uB4DC\uB97C \uD655\uC778\uD558\uAC70\uB098 \uBB3C\uD488 1\uAC1C \uBE44\uAD50\uB97C \uC774\uC6A9\uD558\uC138\uC694.");let c=Ds(o,r.observations,r.repaired);if(!c.ok)return s(c.inspectionOK?"\uC2E4\uC81C \uC218\uB7C9\xB7\uC190\uC0C1\uACFC \uAC80\uC218 \uC644\uB8CC\uB97C \uB2E4\uC2DC \uD655\uC778\uD574\uC8FC\uC138\uC694.":"\uADDC\uACA9\xB7\uAE30\uB85D\uC774 \uB2E4\uB978 \uBB3C\uD488\uB9CC \uD45C\uC2DC\uD558\uACE0 \uAC80\uC0AC \uC644\uB8CC\uB97C \uCCB4\uD06C\uD574\uC8FC\uC138\uC694.");if(e.action==="repair"){if(!c.hasIssues)return s("\uBCF4\uC644\uD560 \uBB38\uC81C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uC778\uC218\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");r.repaired=!0,r.observations=Ao(),r.opened=[],r.tab="spec",r.directChecked=!1,r.trialAnswer="",n="\uBCF4\uC644\uD488 \uB3C4\uCC29. \uBC8C\uC810 \uC5C6\uC774 \uB2E4\uC2DC \uD655\uC778\uD569\uB2C8\uB2E4.",t.eventLog.push({year:t.year,id:"repair",message:`${a.title} \xB7 \uC815\uB2F9\uD55C \uBCF4\uC644 \uC694\uCCAD`})}else{if(c.hasIssues)return s("\uD558\uC790\uAC00 \uB0A8\uC544 \uC788\uC2B5\uB2C8\uB2E4. \uBCF4\uC644 \uC694\uCCAD \uD6C4 \uC778\uC218\uD574\uC8FC\uC138\uC694.");if(a.id==="M05"&&r.trialAnswer!==ml(t.seed))return s("\uC2E4\uC99D \uD45C\uC758 95% \uACF5\uAC1C \uAE30\uC900\uACFC \uBCF4\uACE0 \uACB0\uB860\uC744 \uB2E4\uC2DC \uBE44\uAD50\uD558\uC138\uC694.");let l=t.accounts[r.fundingYear-1];l.reserved-=r.price,l.spent+=r.price,t.activeContracts=t.activeContracts.filter(f=>f.key!==r.key);let u=t.year<=a.deadlineYear;t.receipts.push({key:r.key,requestId:a.id,index:r.index,bidId:r.bidId,vendorId:r.vendorId,price:r.price,year:t.year,fundingYear:r.fundingYear,onTime:u,repaired:r.repaired,runningCost:o.bids.find(f=>f.id===r.bidId)?.runningCost||0}),u&&t.onTime++;let h=t.vendorHistory[r.vendorId];if(h.deliveries++,h.onTime+=Number(u),h.repairs+=Number(r.repaired),h.contracts.push(r.key),Os(t,a.id)===a.contracts.length){t.completedIds.push(a.id),t.facilityLevel[a.facility]=Math.min(2,t.facilityLevel[a.facility]+1),a.id==="M06"&&(t.facilityLevel.fire=2),t.trust=Math.min(100,t.trust+a.trust);for(let[f,p]of Object.entries(a.impact))t.services[f]=Math.min(100,t.services[f]+p);a.id==="M05"&&(t.trialResult=ml(t.seed)),n=a.reward}else n="\uCCAB \uBCF5\uAD6C \uACC4\uC57D \uC778\uC218 \uC644\uB8CC. \uB450 \uBC88\uC9F8 \uACC4\uC57D\uC744 \uC9C4\uD589\uD558\uC138\uC694.";t.eventLog.push({year:t.year,id:"accepted",message:`${a.title} \xB7 ${r.price}\uB9CC \uC9C0\uAE09 (\uC7AC\uC6D0 YEAR ${r.fundingYear}) \xB7 ${u?"\uAE30\uD55C \uC900\uC218":"\uAE30\uD55C \uACBD\uACFC"}`})}}if(e.type==="CANCEL"){let r=t.activeContracts.find(o=>o.key===e.key);if(!r?.cancellationAllowed)return s("\uACF5\uAE09 \uCC28\uC9C8\uB85C \uD569\uC758\uD574\uC81C\uAC00 \uC2B9\uC778\uB41C \uACC4\uC57D\uB9CC \uCDE8\uC18C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");let a=t.accounts[r.fundingYear-1];a.reserved-=r.price,a.closed&&(a.expired+=r.price),t.activeContracts=t.activeContracts.filter(o=>o.key!==r.key),t.cancelled++,n=a.closed?"\uC9C0\uB09C \uC5F0\uB3C4 \uC57D\uC815\uC744 \uD574\uC81C\uD588\uC2B5\uB2C8\uB2E4. \uC62C\uD574 \uC608\uC0B0\uC73C\uB85C \uC804\uD658\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":"\uC608\uC57D\uC561\uC744 \uC62C\uD574 \uAC00\uC6A9 \uC608\uC0B0\uC73C\uB85C \uBC18\uD658\uD588\uC2B5\uB2C8\uB2E4.",t.eventLog.push({year:t.year,id:"cancel",message:`${r.key} \uD569\uC758\uD574\uC81C \xB7 \uC7AC\uC6D0 YEAR ${r.fundingYear} \xB7 ${r.price}\uB9CC`})}if(e.type==="EVENT"){let r=Vn.find(a=>a.id===t.pendingEvent);if(!r||![0,1].includes(e.choice))return s("\uC120\uD0DD\uD560 \uC0AC\uAC74\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");if(r.effect==="delay"){let a=t.activeContracts.find(o=>o.dueYear>t.year&&o.dueYear<10);a?(a.dueYear++,a.paymentPlan[0].year=a.dueYear,a.cancellationAllowed=!0,n=`\uB0A9\uD488 \uC608\uC815 \uC5F0\uB3C4\uB97C YEAR ${a.dueYear}\uB85C 1\uB144 \uC5F0\uC7A5\uD558\uBA70 \uD569\uC758\uD574\uC81C\uAC00 \uC2B9\uC778\uB429\uB2C8\uB2E4.`):n="\uC9C0\uC5F0 \uB300\uC0C1 \uACC4\uC57D\uC774 \uC5C6\uC5B4 \uAE30\uC874 \uC77C\uC815\uB300\uB85C \uC9C4\uD589\uD569\uB2C8\uB2E4."}else r.effect==="trust"?t.trust=Math.min(100,t.trust+1):e.choice===0&&(t.priority=r.effect);t.eventLog.push({year:t.year,id:r.id,message:r.title+" \xB7 "+r.choices[e.choice]}),t.pendingEvent=null}if(e.type==="SETTLE"){if(e.year!==t.year||t.yearClosed)return s("\uC774\uBBF8 \uCC98\uB9AC\uD55C \uC5F0\uB3C4 \uACB0\uC0B0\uC785\uB2C8\uB2E4.");if(t.year===1&&!t.completedIds.includes("M01"))return s("\uCCAB \uD559\uAD50 \uC758\uB8B0\uB97C \uC778\uC218\uD55C \uB4A4 \uACB0\uC0B0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC548\uB0B4 \uAC74\uB108\uB6F0\uAE30\uB294 \uC758\uB8B0\uB97C \uC790\uB3D9 \uC644\uB8CC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");if(t.pendingEvent)return s("\uC62C\uD574 \uC0AC\uAC74\uC744 \uBA3C\uC800 \uD655\uC778\uD574\uC8FC\uC138\uC694.");let r=Ir(t),a=t.population,o=[...t.unlocked],c=t.accounts[t.year-1],l=c.approved-c.spent-c.reserved;c.expired=l,c.closed=!0,t.yearClosed=!0,t.population=r.population,t.lastPopulationDelta=r.delta,t.serviceScore=r.serviceScore,t.qualityDebt=r.qualityDebt,t.unlocked=Dh(t,Math.min(10,t.year+1));let u={year:t.year,populationBefore:a,populationAfter:t.population,reasons:r.reasons,serviceScore:r.serviceScore,qualityDebt:r.qualityDebt,approved:c.approved,paid:t.receipts.filter(h=>h.year===t.year).reduce((h,f)=>h+f.price,0),reserved:t.activeContracts.reduce((h,f)=>h+f.price,0),unused:l,completed:t.receipts.filter(h=>h.year===t.year).map(h=>h.key),ongoing:t.activeContracts.map(h=>h.key),delayed:t.activeContracts.filter(h=>h.dueYear<t.year).map(h=>h.key),unlocked:t.unlocked.filter(h=>!o.includes(h)),commitments:t.activeContracts.map(h=>({key:h.key,amount:h.price,fundingYear:h.fundingYear,dueYear:h.dueYear})),newsIds:t.newsHistory.filter(h=>h.year===t.year).map(h=>h.id)};t.annualHistory.push(u),t.eventLog.push({year:t.year,id:"settled",message:`\uC5F0\uB9D0 \uC778\uAD6C ${a} \u2192 ${t.population} \xB7 \uBBF8\uC0AC\uC6A9 ${l}\uB9CC \uB9CC\uB8CC`}),t.year===1&&(t.tutorial.onboardingComplete=!0),t.year===10&&(t.ended=!0),n="\uC62C\uD574 \uACB0\uC0B0\uC744 \uD655\uC815\uD588\uC2B5\uB2C8\uB2E4. \uB0A8\uC740 \uC57D\uC815\uC740 \uC6D0\uB798 \uC7AC\uC6D0\uC744 \uC720\uC9C0\uD569\uB2C8\uB2E4."}if(e.type==="BEGIN_YEAR"){if(e.year!==t.year||!t.yearClosed||t.year>=10)return s("\uB2E4\uC74C \uD574\uB85C \uB118\uC5B4\uAC08 \uC218 \uC5C6\uB294 \uC0C1\uD0DC\uC785\uB2C8\uB2E4.");t.year++,t.yearClosed=!1;let r=Math.min(dn.maxSubsidy,t.completedIds.length*dn.subsidyPerProject+Math.max(0,Math.floor((t.population-500)/100))*100);t.accounts.push({year:t.year,approved:dn.annualBase+r,subsidy:r,spent:0,reserved:0,expired:0,closed:!1}),t.newsHistory.push(...Ch(t.year,t.receipts)),t.pendingEvent=t.eventDeck[t.year-2]||null,t.ui=Lh(),n=`YEAR ${t.year}: \uC0C8 \uC608\uC0B0 ${4e3+r}\uB9CC \uC2B9\uC778. \uBBF8\uC0AC\uC6A9 \uC608\uC0B0\uC740 \uC774\uC6D4\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`}}return P0(t),yl(t),Po(t),this.state=t,this.emit(),{ok:!0,reason:n}}emit(){this.listeners.forEach(e=>e(this.getState()))}};function Nh(i){let e=Ir(i).serviceScore,t=i.receipts.length?Math.round(i.onTime/i.receipts.length*100):0,n=Math.round(e*.35+t*.2+i.trust*.25+Math.min(100,i.population/10)*.2);return{service:e,timely:t,budget:100,total:n,grade:n>=85?"S":n>=70?"A":n>=55?"B":"C"}}var Do=class{constructor(e){this.store=e;this.phase="title";this.mission=_t[0];this.contractIndex=0;this.route="BID";this.chosen=""}get key(){return`${this.mission.id}:${this.contractIndex}`}get active(){return this.store.getState().activeContracts.find(e=>e.key===this.key)}get repaired(){return this.active?.repaired||!1}get contract(){return this.mission.contracts[this.contractIndex]}event(e,t={}){this.mission.id==="M01"&&this.store.dispatch({type:"TUTORIAL_EVENT",event:e,data:t})}startMission(e){return ri(e,this.store.getState())?(this.mission=Lt(e),this.contractIndex=Os(this.store.getState(),e),this.route=this.mission.allowedRoutes[0],this.chosen="",this.phase="request",this.event("REQUEST_OPENED",{id:e}),!0):!1}resume(e){let t=this.store.getState().activeContracts.find(n=>n.key===e);return t?(this.mission=Lt(t.requestId),this.contractIndex=t.index,this.route=t.route,this.chosen=t.bidId,this.phase=t.dueYear<=this.store.getState().year?"inspection":"town",!0):!1}review(){return this.phase!=="request"?!1:(this.phase="bidReview",this.event("PROCUREMENT_OPENED"),!0)}submitBid(e){if(this.phase!=="bidReview")return{ok:!1,reason:"\uC5C5\uCCB4 \uAC80\uD1A0 \uB2E8\uACC4\uAC00 \uC544\uB2D9\uB2C8\uB2E4."};let t=Mi(this.contract,e,this.store.getState(),this.route);if(!t.ok)return this.store.dispatch({type:"MISTAKE"}),t;let n=Fs(this.store.getState(),this.mission.id,this.contractIndex,this.route,e);return n?{ok:!1,reason:n}:(this.chosen=e,this.phase="awardResult",this.event("AWARD_READY",{bidId:e}),t)}confirmAward(){if(this.phase!=="awardResult")return{ok:!1,reason:"\uACC4\uC57D \uD655\uC778 \uB2E8\uACC4\uAC00 \uC544\uB2D9\uB2C8\uB2E4."};let e=this.store.dispatch({type:"RESERVE",id:this.mission.id,index:this.contractIndex,route:this.route,bidId:this.chosen});return e.ok&&(this.phase=this.active.dueYear<=this.store.getState().year?"inspection":"town",this.event("CONTRACT_CONFIRMED")),e}submitInspection(e,t){if(this.phase!=="inspection")return{ok:!1,reason:"\uAC80\uC0AC \uB2E8\uACC4\uAC00 \uC544\uB2D9\uB2C8\uB2E4."};let n=this.store.dispatch({type:"DRAFT",key:this.key,patch:{observations:e}});if(!n.ok)return n;let s=this.store.dispatch({type:"INSPECT",key:this.key,action:t});return s.ok&&(t==="accept"&&(this.phase=this.store.getState().completedIds.includes(this.mission.id)?"missionResult":"town"),this.event(t==="repair"?"REPAIRED":"DELIVERY_ACCEPTED")),s}next(){return this.phase="town",this.event("RETURNED_TOWN"),!0}town(){this.phase="town"}reset(){this.store.dispatch({type:"RESET"}),this.phase="town",this.chosen="",this.contractIndex=0,this.mission=_t[0],this.route="BID"}restore(){let e=this.store.getState().ui;this.mission=Lt(e.requestId),this.contractIndex=e.contractIndex,this.route=e.route,this.chosen=e.chosen,this.phase=e.phase==="title"?"town":e.phase,this.phase==="inspection"&&!this.active&&(this.phase="town")}};var Uh=()=>({completedIds:[],budget:1e4,trust:60,satisfaction:50,facilityLevel:{school:0,fire:0,clinic:0}});function Oh(i,e){if(e.completedIds.includes(i))return!1;let t=Number(i.slice(1));return t===1?!0:t<=3?e.completedIds.includes(`M0${t-1}`):t<=5?e.completedIds.includes("M03"):["M04","M05"].every(n=>e.completedIds.includes(n))}var _l=(i,e)=>Object.keys(i).every(t=>e.includes(t))&&e.every(t=>Object.prototype.hasOwnProperty.call(i,t));function No(i){if(new TextEncoder().encode(i).length>=128*1024)throw Error("\uC800\uC7A5 \uD30C\uC77C\uC740 128KB \uBBF8\uB9CC\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.");let e=JSON.parse(i);if(!e||typeof e!="object"||!_l(e,["version","gameVersion","exportedAt","state"])||e.version!==1||e.gameVersion!=="0.1.0"||typeof e.exportedAt!="string"||!Number.isFinite(Date.parse(e.exportedAt)))throw Error("\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uC800\uC7A5 \uD30C\uC77C \uD615\uC2DD\uC785\uB2C8\uB2E4.");let t=e.state;if(!t||typeof t!="object"||!_l(t,["completedIds","budget","trust","satisfaction","facilityLevel"]))throw Error("\uC800\uC7A5 \uC0C1\uD0DC \uD615\uC2DD\uC774 \uC798\uBABB\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");if(!Array.isArray(t.completedIds)||t.completedIds.length>6)throw Error("\uBBF8\uC158 \uAE30\uB85D\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");let n=Uh();for(let o of t.completedIds){if(typeof o!="string"||!/^M0[1-6]$/.test(o)||!Oh(o,n))throw Error("\uBBF8\uC158 \uC21C\uC11C \uB610\uB294 ID\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");n.completedIds.push(o)}for(let[o,c]of[["budget",1e4],["trust",100],["satisfaction",100]])if(typeof t[o]!="number"||!Number.isFinite(t[o])||t[o]<0||t[o]>c)throw Error("\uC800\uC7A5 \uC218\uCE58\uAC00 \uD5C8\uC6A9 \uBC94\uC704\uB97C \uBC97\uC5B4\uB0AC\uC2B5\uB2C8\uB2E4.");let s=t.facilityLevel;if(!s||typeof s!="object"||!_l(s,["school","fire","clinic"]))throw Error("\uC2DC\uC124 \uC815\uBCF4\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");let r=o=>t.completedIds.includes(o),a=r("M06")?{school:2,fire:2,clinic:2}:{school:Number(r("M01"))+Number(r("M04")),fire:Number(r("M02")),clinic:Number(r("M03"))+Number(r("M05"))};for(let o of["school","fire","clinic"])if(![0,1,2].includes(s[o])||s[o]!==a[o])throw Error("\uC2DC\uC124 \uB2E8\uACC4\uC640 \uC644\uB8CC \uAE30\uB85D\uC774 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");return structuredClone(t)}var tt=(i,e="\uC800\uC7A5 \uC0C1\uD0DC \uD615\uC2DD\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")=>{if(!i)throw Error(e)},$t=(i,e=100,t=0)=>typeof i=="number"&&Number.isInteger(i)&&i>=t&&i<=e,Bs=i=>Array.isArray(i)&&i.every(e=>typeof e=="string")&&new Set(i).size===i.length;function Fh(i){tt(new TextEncoder().encode(i).length<128*1024,"\uC800\uC7A5 \uD30C\uC77C\uC740 128KB \uBBF8\uB9CC\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.");let e=JSON.parse(i);if(e?.version===1){let s=No(i),r=pl(20261027);r.completedIds=s.completedIds,r.trust=s.trust,r.satisfaction=s.satisfaction,Object.assign(r.facilityLevel,s.facilityLevel);for(let a of s.completedIds){let o=Ps(a);o.contracts.forEach((c,l)=>{let u=Ar(c);r.receipts.push({key:`${a}:${l}`,requestId:a,index:l,bidId:u.id,price:u.price,day:1,onTime:!0})});for(let[c,l]of Object.entries(o.impact))r.services[c]=Math.min(100,r.services[c]+l)}return r.budget.spent=r.receipts.reduce((a,o)=>a+o.price,0),r.budget.approved=r.budget.spent+s.budget+3e3,r.onTime=r.receipts.length,r.eventLog.push({day:1,id:"migration",message:"v0.1 \uC644\uB8CC \uAE30\uB85D \uC774\uC804 \xB7 \uAE30\uC874 \uAC00\uC6A9 \uC608\uC0B0\uC5D0 \uD655\uC7A5 \uC9C0\uC6D0\uAE08 3,000\uB9CC \uCD94\uAC00"}),Co(r),gl(r),r}tt(e?.version===2&&["0.2.0","0.2.1"].includes(e.gameVersion)&&typeof e.exportedAt=="string"&&Number.isFinite(Date.parse(e.exportedAt)),"\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uC800\uC7A5 \uD30C\uC77C\uC785\uB2C8\uB2E4.");let t=e.state,n=pl(1);tt(t&&Object.keys(t).length===Object.keys(n).length&&Object.keys(n).every(s=>Object.prototype.hasOwnProperty.call(t,s))),tt(t.saveVersion===2&&t.dayLimit===14&&$t(t.seed,4294967295)&&$t(t.day,14,1)&&typeof t.ended=="boolean"),tt($t(t.trust)&&$t(t.satisfaction)&&$t(t.boardOffset,1e5)&&$t(t.cancelled,1e4)&&$t(t.onTime,13)),tt(t.budget&&["approved","spent","reserved"].every(s=>$t(t.budget[s],1e5)));for(let s of["facilityLevel","before"])tt(t[s]&&Object.keys(t[s]).length===6&&fl.every(r=>$t(t[s][r],2)));tt(t.services&&Object.keys(t.services).length===5&&Object.keys(n.services).every(s=>$t(t.services[s]))),tt(Bs(t.completedIds)&&t.completedIds.every(s=>Wt.some(r=>r.id===s))),tt(Bs(t.offers)&&t.offers.length<=3&&t.offers.every(s=>Wt.some(r=>r.id===s))),tt(Bs(t.eventDeck)&&t.eventDeck.length===si.length&&t.eventDeck.every(s=>si.some(r=>r.id===s))),tt(t.pendingEvent===null||t.eventDeck.includes(t.pendingEvent)),tt(typeof t.bonusGranted=="boolean"&&(t.priority===null||fl.includes(t.priority))&&[null,"verified","inconclusive"].includes(t.trialResult)),tt(Array.isArray(t.eventLog)&&t.eventLog.length<=500&&t.eventLog.every(s=>$t(s.day,t.day,1)&&typeof s.id=="string"&&s.id.length<80&&typeof s.message=="string"&&s.message.length<500)),tt(Array.isArray(t.activeContracts)&&t.activeContracts.length<=2&&Array.isArray(t.receipts)&&t.receipts.length<=13);for(let s of[...t.activeContracts,...t.receipts]){tt(Wt.some(o=>o.id===s.requestId));let r=Ps(s.requestId);tt($t(s.index,r.contracts.length-1));let a=Ar(r.contracts[s.index]);tt(s.key===`${r.id}:${s.index}`&&s.bidId===a.id&&s.price===a.price)}for(let s of t.receipts)tt($t(s.day,t.day,1)&&typeof s.onTime=="boolean"&&s.onTime===s.day<=Ps(s.requestId).deadlineDay);tt(t.onTime===t.receipts.filter(s=>s.onTime).length);for(let s of Wt){let r=t.receipts.filter(a=>a.requestId===s.id).sort((a,o)=>a.index-o.index);tt(r.every((a,o)=>a.index===o)),tt(t.completedIds.includes(s.id)===(r.length===s.contracts.length))}for(let s of t.activeContracts){let r=Ps(s.requestId),a=r.contracts[s.index],o=[...a.items.map(l=>l.id),...Array.from({length:Math.max(0,a.quantity-a.actualCount)},(l,u)=>`\uCD94\uAC00-${u+1}`)];tt(!t.completedIds.includes(s.requestId)&&s.index===t.receipts.filter(l=>l.requestId===r.id).length&&r.allowedRoutes.includes(s.route)),tt($t(s.reservedDay,t.day,1)&&$t(s.dueDay,14,s.reservedDay)),tt(typeof s.repaired=="boolean"&&typeof s.directChecked=="boolean"&&typeof s.cancellationAllowed=="boolean"&&["spec","count"].includes(s.tab)&&["","verified","inconclusive"].includes(s.trialAnswer)),tt(Bs(s.opened)&&s.opened.every(l=>o.includes(l)));let c=s.observations;tt(c&&Bs(c.spec)&&Bs(c.damage)&&[...c.spec,...c.damage].every(l=>o.includes(l))&&(c.count===null||$t(c.count,100))&&typeof c.specChecked=="boolean"&&typeof c.countChecked=="boolean"&&typeof c.countMismatch=="boolean")}return tt(new Set(t.activeContracts.map(s=>s.requestId)).size===t.activeContracts.length),gl(t),Co(t),structuredClone(t)}var Bh="jodaltown-save-v3",Uo=i=>JSON.stringify({version:3,gameVersion:"0.3.2",exportedAt:new Date().toISOString(),state:i},null,2),$e=(i,e="\uC5F0\uB3C4\uC81C \uC800\uC7A5 \uD30C\uC77C \uD615\uC2DD\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")=>{if(!i)throw Error(e)},Ke=(i,e=100,t=0)=>typeof i=="number"&&Number.isInteger(i)&&i>=t&&i<=e,Jt=i=>Array.isArray(i)&&i.every(e=>typeof e=="string")&&new Set(i).size===i.length;function vl(i){$e(new TextEncoder().encode(i).length<512*1024,"512KB \uBBF8\uB9CC\uC758 \uC800\uC7A5 \uD30C\uC77C\uB9CC \uC9C0\uC6D0\uD569\uB2C8\uB2E4.");let e=JSON.parse(i);$e(e?.version===3&&["0.3.0","0.3.1","0.3.2"].includes(e.gameVersion)&&typeof e.exportedAt=="string");let t=e.state,n=Io(1);$e(t&&Object.keys(t).length===Object.keys(n).length&&Object.keys(n).every(a=>Object.prototype.hasOwnProperty.call(t,a))),$e(t.saveVersion===3&&t.yearLimit===10&&Ke(t.seed,4294967295)&&Ke(t.year,10,1)&&Ke(t.population,1e5,100)&&Ke(t.lastPopulationDelta,1e5,-1e5)&&Ke(t.trust)&&Ke(t.serviceScore)&&Ke(t.qualityDebt,2)&&typeof t.yearClosed=="boolean"&&typeof t.ended=="boolean"),$e(t.ended===(t.year===10&&t.yearClosed)),$e(Jt(t.completedIds)&&t.completedIds.every(a=>_t.some(o=>o.id===a))&&Jt(t.offers)&&t.offers.length<=3),$e(Ke(t.boardOffset,1e6)&&Ke(t.cancelled,1e5)&&Ke(t.onTime,13)),$e(Jt(t.unlocked)&&t.unlocked.every(a=>Object.keys(n.facilityLevel).includes(a)));for(let a of["before","facilityLevel"])$e(t[a]&&Object.keys(t[a]).length===6&&Object.keys(n[a]).every(o=>Ke(t[a][o],2)));$e(t.services&&Object.keys(t.services).length===5&&Object.keys(n.services).every(a=>Ke(t.services[a]))),$e(t.priority===null||Object.keys(n.facilityLevel).includes(t.priority)),$e([null,"verified","inconclusive"].includes(t.trialResult)),$e(Array.isArray(t.accounts)&&t.accounts.length===t.year&&t.accounts.every((a,o)=>a.year===o+1&&typeof a.closed=="boolean"&&a.closed===(a.year<t.year||t.yearClosed)&&Ke(a.subsidy,1e3)&&a.approved===4e3+a.subsidy)),$e(t.budget&&Object.keys(n.budget).every(a=>Ke(t.budget[a],1e5))),$e(Array.isArray(t.activeContracts)&&t.activeContracts.length<=2&&Array.isArray(t.receipts)&&t.receipts.length<=13);for(let a of[...t.activeContracts,...t.receipts]){$e(_t.some(l=>l.id===a.requestId));let o=Lt(a.requestId);$e(Ke(a.index,o.contracts.length-1));let c=o.contracts[a.index].bids.find(l=>l.id===a.bidId);$e(c&&a.key===`${o.id}:${a.index}`&&a.vendorId===zn(o.contracts[a.index],a.bidId)&&a.price===c.price&&Ke(a.fundingYear,t.year,1))}for(let a of t.activeContracts){let o=Lt(a.requestId),c=o.contracts[a.index],l=[...c.items.map(h=>h.id),...Array.from({length:Math.max(0,c.quantity-c.actualCount)},(h,f)=>`\uCD94\uAC00-${f+1}`)];$e(!t.completedIds.includes(o.id)&&a.index===t.receipts.filter(h=>h.requestId===o.id).length&&o.allowedRoutes.includes(a.route)),$e(a.fundingYear===a.reservedYear&&Ke(a.reservedYear,t.year,1)&&Ke(a.dueYear,10,a.reservedYear)&&Array.isArray(a.paymentPlan)&&a.paymentPlan.length===1&&a.paymentPlan[0].year===a.dueYear&&a.paymentPlan[0].amount===a.price),$e(typeof a.repaired=="boolean"&&typeof a.directChecked=="boolean"&&typeof a.cancellationAllowed=="boolean"&&["spec","count"].includes(a.tab)&&["","verified","inconclusive"].includes(a.trialAnswer)&&Jt(a.opened)&&a.opened.every(h=>l.includes(h)));let u=a.observations;$e(u&&Jt(u.spec)&&Jt(u.damage)&&[...u.spec,...u.damage].every(h=>l.includes(h))&&(u.count===null||Ke(u.count,100))&&typeof u.countMismatch=="boolean"&&typeof u.specChecked=="boolean"&&typeof u.countChecked=="boolean")}for(let a of t.receipts)$e(Ke(a.year,t.year,a.fundingYear)&&typeof a.onTime=="boolean"&&a.onTime===a.year<=Lt(a.requestId).deadlineYear&&typeof a.repaired=="boolean"&&Ke(a.runningCost,1e4));$e(t.onTime===t.receipts.filter(a=>a.onTime).length);for(let a of _t){let o=t.receipts.filter(c=>c.requestId===a.id).sort((c,l)=>c.index-l.index);$e(o.every((c,l)=>c.index===l)&&t.completedIds.includes(a.id)===(o.length===a.contracts.length))}$e(t.vendorHistory&&Object.keys(t.vendorHistory).length===Object.keys(vn).length);for(let a of Object.keys(vn)){let o=t.vendorHistory[a],c=t.receipts.filter(l=>l.vendorId===a);$e(o&&o.deliveries===c.length&&o.onTime===c.filter(l=>l.onTime).length&&o.repairs===c.filter(l=>l.repaired).length&&Jt(o.contracts)&&o.contracts.length===c.length&&o.contracts.every(l=>c.some(u=>u.key===l)))}$e(Array.isArray(t.newsHistory)&&t.newsHistory.length<=20&&t.newsHistory.every(a=>typeof a.id=="string"&&a.id.length<80&&Ke(a.year,t.year,3)&&!!vn[a.vendorId]&&["RUMOR","VERIFIED_PERFORMANCE","CONFIRMED_DEFECT","OFFICIAL_RESTRICTION"].includes(a.status)&&typeof a.title=="string"&&a.title.length<200&&typeof a.text=="string"&&a.text.length<1e3&&typeof a.source=="string"&&a.source.length<200&&Jt(a.contractKeys)&&a.contractKeys.every(o=>t.receipts.some(c=>c.key===o))&&(a.status!=="OFFICIAL_RESTRICTION"||Ke(a.fromYear,10,1)&&Ke(a.throughYear,10,a.fromYear)&&Array.isArray(a.routes)&&a.routes.every(o=>["BID","SHOPPING","INNOVATION_TRIAL"].includes(o))))),$e(Jt(t.eventDeck)&&t.eventDeck.length===Vn.length&&t.eventDeck.every(a=>Vn.some(o=>o.id===a))&&(t.pendingEvent===null||t.eventDeck.includes(t.pendingEvent))),$e(Array.isArray(t.eventLog)&&t.eventLog.length<=1e3&&t.eventLog.every(a=>Ke(a.year,t.year,1)&&typeof a.id=="string"&&a.id.length<100&&typeof a.message=="string"&&a.message.length<1e3)),$e(Array.isArray(t.annualHistory)&&t.annualHistory.length===(t.yearClosed?t.year:t.year-1)&&t.annualHistory.every((a,o)=>a.year===o+1&&Ke(a.populationBefore,1e5,100)&&Ke(a.populationAfter,1e5,100)&&Array.isArray(a.reasons)&&a.reasons.every(c=>typeof c.label=="string"&&c.label.length<200&&Ke(c.value,1e5,-1e5))&&a.populationAfter-a.populationBefore===a.reasons.reduce((c,l)=>c+l.value,0)&&["approved","paid","reserved","unused"].every(c=>Ke(a[c],1e5))&&Jt(a.completed)&&Jt(a.ongoing)&&Jt(a.delayed)&&Jt(a.unlocked)&&Jt(a.newsIds)&&Array.isArray(a.commitments)));let s=t.tutorial;$e(s&&typeof s.finished=="boolean"&&typeof s.skipUsed=="boolean"&&typeof s.onboardingComplete=="boolean"&&Jt(s.seenContextHints)&&s.seenContextHints.length<100&&s.seenContextHints.every(a=>a.length<100)&&[...Ns.map(a=>a.id),"done","skipped"].includes(s.stepId)),$e(s.onboardingComplete===t.annualHistory.some(a=>a.year===1));let r=t.ui;return $e(r&&["title","town","request","bidReview","awardResult","inspection","missionResult","ending"].includes(r.phase)&&_t.some(a=>a.id===r.requestId)&&Ke(r.contractIndex,Lt(r.requestId).contracts.length-1)&&Lt(r.requestId).allowedRoutes.includes(r.route)&&typeof r.selected=="string"&&typeof r.chosen=="string"&&r.classifications&&Object.entries(r.classifications).every(([a,o])=>["A","B","C"].includes(a)&&typeof o=="boolean")),Po(t),yl(t),structuredClone(t)}function xl(i){let e=JSON.parse(i);if($e(e?.version===1||e?.version===2,"\uC774\uC804 \uC2DC\uC98C \uC800\uC7A5 \uD30C\uC77C\uC774 \uC544\uB2D9\uB2C8\uB2E4."),e.version===1){let n=No(i);return{version:1,raw:i,state:{completedIds:n.completedIds,activeContracts:[],budget:{approved:1e4,spent:1e4-n.budget,reserved:0}}}}let t=Fh(i);return{version:e.version,raw:i,state:t}}function kh(i){try{return localStorage.setItem(Bh,Uo(i)),!0}catch{return!1}}function zh(){try{let i=localStorage.getItem(Bh);return i?vl(i):null}catch{return null}}function Vh(){try{return localStorage.getItem("jodaltown-save-v2")||localStorage.getItem("jodaltown-save-v1")}catch{return null}}var ks,Si=.35;function bl(i){Si=Math.max(0,Math.min(1,i))}function Gn(i="click"){try{if(!Si)return;ks??(ks=new AudioContext),ks.resume(),(i==="success"?[523,659,784,1047]:i==="error"?[220,165]:i==="stamp"?[130,75]:i==="box"?[440,600]:[680]).forEach((t,n)=>{let s=ks.createOscillator(),r=ks.createGain(),a=ks.currentTime+n*.09;s.type=i==="stamp"?"triangle":"sine",s.frequency.value=t,r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(Si*.16,a+.01),r.gain.exponentialRampToValueAtTime(.001,a+.15),s.connect(r),r.connect(ks.destination),s.start(a),s.stop(a+.17)})}catch{}}var Oo=class{constructor(e){this.pause=e;this.root=document.createElement("div");this.frame=0;this.target=null;this.key="";this.oldMessage="";this.destroyed=!1;this.guard=e=>{if(!this.step)return;let t=e.target;this.permitted(t)||e.type==="pointerdown"&&this.target?.contains(t)&&!this.action(t)||(e.preventDefault(),e.stopImmediatePropagation())};this.keyboard=e=>{if(this.step&&!this.utilityOpen()){if(e.key==="Escape"){e.preventDefault(),e.stopImmediatePropagation(),this.pause();return}if(e.key==="Tab"){let t=this.focusables();if(!t.length)return;let n=t.indexOf(document.activeElement),s=(n+(e.shiftKey?-1:1)+t.length)%t.length;t[s].focus(),e.preventDefault(),e.stopImmediatePropagation()}else["Enter"," "].includes(e.key)&&!this.permitted(e.target)&&(e.preventDefault(),e.stopImmediatePropagation())}};this.focusGuard=e=>{this.step&&!this.utilityOpen()&&!this.permitted(e.target)&&this.focusables()[0]?.focus()};this.tick=()=>{this.frame=0,!(!this.step||this.destroyed)&&(this.measure(!1),this.frame=requestAnimationFrame(this.tick))};this.root.id="tutorial-overlay",document.body.append(this.root),document.addEventListener("click",this.guard,!0),document.addEventListener("pointerdown",this.guard,!0),document.addEventListener("change",this.guard,!0),document.addEventListener("input",this.guard,!0),document.addEventListener("keydown",this.keyboard,!0),document.addEventListener("focusin",this.focusGuard,!0)}update(e){if(this.step=e,document.documentElement.classList.toggle("tutorial-mode",!!e),!e){this.root.innerHTML="",this.key="",this.target=null,cancelAnimationFrame(this.frame),this.frame=0;return}this.key!==e.id&&(this.key=e.id,this.target=null,this.root.innerHTML=`<div class="spot-mask top"></div><div class="spot-mask left"></div><div class="spot-mask right"></div><div class="spot-mask bottom"></div><div class="spot-border" aria-hidden="true"></div><section class="tutorial-guide" aria-label="\uD50C\uB808\uC774 \uC548\uB0B4"><span class="tutorial-progress">${e.id.startsWith("hint:")?"\uC0C8 \uAE30\uB2A5 \uC548\uB0B4":`${e.major}/8 \xB7 \uD559\uAD50 \uCCAB \uAD6C\uB9E4`}</span><h2></h2><p class="guide-message" aria-live="polite"></p>${e.guideAction?`<button class="guide-primary" data-action="${e.guideAction.action}">${e.guideAction.label}</button>`:""}<details><summary>\uC65C \uC911\uC694\uD574\uC694?</summary><p class="guide-why"></p></details><nav><button data-action="tutprevious">\uC774\uC804 \uC124\uBA85</button><button data-action="tuthelp">\uB3C4\uC6C0\uB9D0</button><button data-action="tutsettings">\uC124\uC815</button><button data-action="tutsave">\uC800\uC7A5</button><button data-action="${e.id.startsWith("hint:")?"hintdone":"tutskip"}">${e.id.startsWith("hint:")?"\uC54C\uACA0\uC5B4\uC694":"\uAC74\uB108\uB6F0\uAE30"}</button></nav><p class="guide-missing" hidden>\uB300\uC0C1\uC744 \uCC3E\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uCC3D\uC744 \uB113\uD788\uAC70\uB098 \u2018\uC124\uC815\u2019\uC5D0\uC11C \uC548\uB0B4\uB97C \uC7A0\uC2DC \uB2EB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></section>`,this.root.querySelector("h2").textContent=e.title,this.root.querySelector(".guide-message").textContent=e.message,this.root.querySelector(".guide-why").textContent=e.why,this.oldMessage=e.message,this.measure(!0)),this.frame||(this.frame=requestAnimationFrame(this.tick))}utilityOpen(){return!!document.querySelector("#utility")?.children.length}action(e){let t=e.closest("[data-action]"),n=e.closest("label");return t?.dataset.action||(e.closest('[data-facility="school"]')?"school":e.id||n?.control?.id||"")}permitted(e){return this.step?this.utilityOpen()?!!e.closest("#utility")||e.id==="save-file":e.closest("#tutorial-overlay .tutorial-guide")||this.step.target==="school"&&e.closest('[data-facility="school"]')?!0:!!this.target?.contains(e)&&this.step.actions.includes(this.action(e)):!0}focusables(){return this.utilityOpen()?Array.from(document.querySelectorAll("#utility button:not([disabled]),#utility input,#utility select,#utility a[href]")).filter(e=>e.getClientRects().length):Array.from(document.querySelectorAll("button:not([disabled]),input,select,a[href],summary")).filter(e=>e.getClientRects().length&&this.permitted(e))}measure(e){if(!this.step||(this.root.style.zoom=String(1/(Number(getComputedStyle(document.documentElement).zoom)||1)),this.root.hidden=this.utilityOpen(),this.root.hidden))return;let t=document.querySelector(`[data-tutorial-target="${this.step.target}"]`);t!==this.target&&(this.target=t,e=!0);let n=this.root.querySelector(".guide-missing");n.hidden=!!t;let s=this.root.querySelector(".spot-border");s.hidden=!t;let r=innerWidth,a=innerHeight,o=0,c=0,l=0,u=0;if(t){e&&t.scrollIntoView({block:"nearest",inline:"nearest"});let d=t.getBoundingClientRect();o=Math.max(0,d.left-7),c=Math.max(0,d.top-7),l=Math.min(r,d.right+7),u=Math.min(a,d.bottom+7);let S=t.parentElement;for(;S;){let E=getComputedStyle(S);if(/auto|scroll|hidden/.test(E.overflow+E.overflowY+E.overflowX)){let x=S.getBoundingClientRect();o=Math.max(o,x.left),c=Math.max(c,x.top),l=Math.min(l,x.right),u=Math.min(u,x.bottom)}S=S.parentElement}l=Math.max(o,l),u=Math.max(c,u),Object.assign(s.style,{left:o+"px",top:c+"px",width:l-o+"px",height:u-c+"px"})}let h=[[0,0,r,c],[0,c,o,u-c],[l,c,r-l,u-c],[0,u,r,a-u]];this.root.querySelectorAll(".spot-mask").forEach((d,S)=>{let[E,x,A,w]=h[S];Object.assign(d.style,{left:E+"px",top:x+"px",width:Math.max(0,A)+"px",height:Math.max(0,w)+"px"})});let f=this.root.querySelector(".tutorial-guide"),p=Math.min(340,r-24);f.style.width=p+"px";let y=f.offsetHeight,M=[[Math.max(12,(r-p)/2),a-y-12],[12,12],[r-p-12,12],[12,a-y-12],[r-p-12,a-y-12]],m=M.find(([d,S])=>d>=0&&S>=0&&d+p<=r&&S+y<=a&&(d+p+8<=o||d>=l+8||S+y+8<=c||S>=u+8))||M[0];f.style.left=Math.max(8,m[0])+"px",f.style.top=Math.max(8,m[1])+"px"}repeat(e){let t=this.root.querySelector(".guide-message");t&&(t.textContent=e||this.oldMessage)}destroy(){this.destroyed=!0,cancelAnimationFrame(this.frame),document.removeEventListener("click",this.guard,!0),document.removeEventListener("pointerdown",this.guard,!0),document.removeEventListener("change",this.guard,!0),document.removeEventListener("input",this.guard,!0),document.removeEventListener("keydown",this.keyboard,!0),document.removeEventListener("focusin",this.focusGuard,!0),this.root.remove(),document.documentElement.classList.remove("tutorial-mode")}};var he=new Lo,O=new Do(he),Ft,jt="M01",At="",Kt={},pt="spec",Ei=new Set,at=Kh(),nn=zh(),Zh=!0,Ml=!1,Bo=!1,zo=!1,Sl=null,Ti=0,Vo=!1,bn=null,Bt,Hh=0,Hs=Vh(),Gs=new Oo(()=>td()),ko=(i,e)=>Ls(i,e,he.getState(),O.route,O.active?.reservedYear),Jh=i=>wo(i,he.getState(),O.route,O.active?.reservedYear),je=i=>i.toLocaleString("ko-KR"),pe=i=>document.querySelector(i);function Kh(){return{spec:[],damage:[],countMismatch:!1,count:null,specChecked:!1,countChecked:!1}}var El={town:"M3 21V10l6-4 6 4v11M15 21V3h6v18M7 14h4M7 18h4M18 7h1M18 11h1M18 15h1",school:"M3 10h18v11H3zM2 10l10-7 10 7M9 21v-6h6v6M6 13h1M17 13h1",fire:"M13 3c2 6-3 7 0 10 2-1 3-3 3-5 6 6 4 13-4 13C3 21 2 13 8 7c0 4 1 5 2 6 2-3 1-7 3-10z",clinic:"M5 3h14v18H5zM9 8h6M12 5v6M9 16h6M12 13v6",check:"M5 12l4 4L20 5",arrow:"M5 12h14M13 6l6 6-6 6",box:"M3 7l9-4 9 4v11l-9 4-9-4zM3 7l9 4 9-4M12 11v11M7 5l9 4",pc:"M3 4h18v12H3zM12 16v4M7 21h10",led:"M8 15a7 7 0 1 1 8 0v3H8zM9 21h6M12 3v3",kit:"M3 7h18v14H3zM8 7V3h8v4M8 14h8M12 10v8",sensor:"M7 3h10v18H7zM10 7h4M10 11h4M10 16h4",helmet:"M3 15a9 9 0 0 1 18 0M2 15h20v4H2zM12 6v7",save:"M12 3v12M7 10l5 5 5-5M4 17v4h16v-4",settings:"M4 7h16M4 17h16M8 3v8M16 13v8",help:"M9 8a3 3 0 1 1 5 2c-2 1-2 2-2 4M12 18h.01",star:"M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z",close:"M6 6l12 12M6 18L18 6",power:"M13 2L5 14h6l-1 8 9-13h-7z",blanket:"M5 3h14v18H5zM5 8h14M5 15h14M10 3v18",lock:"M6 10h12v11H6zM8 10V6a4 4 0 0 1 8 0v4"};Object.assign(El,{year:"M4 5h16v16H4zM8 3v4M16 3v4M4 10h16",people:"M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M2 21v-3a7 7 0 0 1 14 0v3M17 4a4 4 0 0 1 0 7M19 14a6 6 0 0 1 3 7",coin:"M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0M12 6v12M15 8H10a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H9",receipt:"M5 3h14v19l-3-2-4 2-4-2-3 2zM8 8h8M8 12h8M8 16h4",scale:"M12 3v18M6 21h12M4 7h16M6 7l-4 8h8zM18 7l-4 8h8z"});function vt(i){return`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${El[i]||El.box}"/></svg>`}function Tl(){return O.mission.id==="M06"&&O.contractIndex?"blanket":O.mission.icon}function xn(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function se(i,e,t="secondary",n=""){return`<button class="${t}" data-action="${i}" data-tutorial-target="${i}" ${n}>${e}</button>`}pe("#app").innerHTML=`<header class="topbar"><button class="brand" data-action="home" aria-label="\uD0C0\uC774\uD2C0">${vt("town")}<span>\uC870\uB2EC\uD0C0\uC6B4<small>JODAL TOWN</small></span></button><div id="stats" class="stats"></div><nav class="tools" aria-label="\uAC8C\uC784 \uBA54\uB274">${se("save",vt("save")+"<span>\uC800\uC7A5</span>","tool",'title="\uD604\uC7AC \uC2DC\uC98C \uAE30\uB85D \uB0B4\uBCF4\uB0B4\uAE30"')}${se("import","\uBD88\uB7EC\uC624\uAE30","tool")}${se("help",vt("help"),"tool square",'aria-label="\uB3C4\uC6C0\uB9D0"')}${se("settings",vt("settings"),"tool square",'aria-label="\uC124\uC815"')}</nav></header><main class="world"><div class="world-heading"><span class="chapter">A LITTLE TOWN. A BETTER TOMORROW.</span><h1 id="world-title">\uC791\uC740 \uACC4\uC57D, \uB354 \uB098\uC740 \uC77C\uC0C1.</h1><p>\uB2F9\uC2E0\uC758 \uAF3C\uAF3C\uD55C \uC120\uD0DD\uC73C\uB85C \uB3C4\uC2DC\uAC00 \uB2EC\uB77C\uC9D1\uB2C8\uB2E4.</p></div><div id="town" aria-label="\uC5EC\uC12F \uACF5\uACF5\uC2DC\uC124\uC774 \uC788\uB294 3D \uB3C4\uC2DC"></div><aside id="board" class="season-board"></aside><aside id="side" class="side"></aside><div class="map-controls">${se("zoomout","\u2212","map-tool",'aria-label="\uCD95\uC18C"')}${se("zoomin","+","map-tool",'aria-label="\uD655\uB300"')}${se("panleft","\u2190","map-tool accessible-pan",'aria-label="\uB3C4\uC2DC \uC67C\uCABD \uC774\uB3D9"')}${se("panright","\u2192","map-tool accessible-pan",'aria-label="\uB3C4\uC2DC \uC624\uB978\uCABD \uC774\uB3D9"')}<span>\uC88C\uD074\uB9AD \uC120\uD0DD \xB7 \uC6B0\uD074\uB9AD \uB04C\uAE30 \xB7 \uD720 \uD655\uB300</span></div><div class="town-caption"><i></i>\uC870\uB2EC\uD0C0\uC6B4 \uACF5\uACF5\uC870\uB2EC \uC9C0\uC6D0\uC13C\uD130 \xB7 \uAD50\uC721\uC6A9 \uAC00\uC0C1 \uB3C4\uC2DC</div></main><footer class="bottom"><span id="status-text">OFFLINE EDITION \xB7 v0.3.2</span><div id="progress" class="progress"></div><nav class="season-nav">${se("center","\uC870\uB2EC\uC13C\uD130","text-button")}${se("market","\uB098\uB77C\uC7A5\uD130","text-button")}${se("innovation","\uD601\uC2E0\uC7A5\uD130","text-button")}${se("ledger","\uB3C4\uC2DC\uAE30\uB85D","text-button")}${se("news","\uAE30\uC5C5 \uB274\uC2A4","text-button")}${se("services","\uB3C4\uC2DC \uC11C\uBE44\uC2A4","text-button")}${se("help","\uB3C4\uC6C0\uB9D0","text-button")}</nav></footer><div id="overlay"></div><div id="utility"></div><div id="toast" role="status" aria-live="polite"></div><input type="file" id="save-file" accept=".json,application/json" hidden>`;try{Ft=new So(pe("#town"),i=>{if(O.phase!=="town")return;let e=_t.find(t=>t.facility===i&&ri(t.id,he.getState()));e?(he.dispatch({type:"PRIORITY",facility:i}),jt=e.id,Ft?.highlightFacility(i),he.dispatch({type:"TUTORIAL_EVENT",event:"SCHOOL_SELECTED",data:{facility:i}}),nt(),wi()):ft("\uC55E\uC120 \uC758\uB8B0\uB97C \uC644\uB8CC\uD558\uAC70\uB098 \uC624\uB978\uCABD\uC5D0\uC11C \uB2E4\uB978 \uC758\uB8B0\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.")}),Ft.render(he.getState())}catch{pe("#town").innerHTML='<div class="webgl-error"><h2>3D \uB3C4\uC2DC\uB97C \uD45C\uC2DC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4</h2><p>WebGL2\uAC00 \uAC00\uB2A5\uD55C Chrome\xB7Edge\uC5D0\uC11C \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.</p><p>\uC544\uB798 \uD559\uAD50 \uBC84\uD2BC\uC73C\uB85C \uCCAB \uC758\uB8B0\uB97C \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><button data-action="school" data-facility="school" data-tutorial-target="school" class="primary">\uD559\uAD50 \uC758\uB8B0 \uC120\uD0DD</button></div>'}he.subscribe(i=>{bn||(Zh=kh(i),nn=i),jh(),Il(i)});function jh(){let i=he.getState(),e=[["year",`YEAR ${i.year}/10`,i.yearClosed?"\uACB0\uC0B0 \uD655\uC815":"\uC5F0\uAC04 \uC0AC\uC5C5 \uC9C4\uD589","\uC5F0\uB3C4\uB9C8\uB2E4 \uC0C8 \uC608\uC0B0\uC744 \uC2B9\uC778\uD558\uACE0 \uC5F0\uB9D0\uC5D0 \uC778\uAD6C\uB97C \uACC4\uC0B0\uD569\uB2C8\uB2E4."],["people",`${je(i.population)}\uBA85`,`${i.lastPopulationDelta>=0?"+":""}${i.lastPopulationDelta} \xB7 \uCD5C\uADFC \uACB0\uC0B0`,"\uC778\uAD6C: \uB3C4\uC2DC \uC11C\uBE44\uC2A4\uC640 \uBBF8\uD574\uACB0 \uBB38\uC81C\uC5D0 \uB530\uB77C \uC5F0\uB9D0\uC5D0 \uBC14\uB01D\uB2C8\uB2E4."],["coin",`${je(Rr(i))}\uB9CC`,"\uAC00\uC6A9 \uC608\uC0B0","\uC62C\uD574 \uC2B9\uC778\uC561\uC5D0\uC11C \uC9D1\uD589\xB7\uC608\uC57D\xB7\uB9CC\uB8CC\uC561\uC744 \uBE80 \uAE08\uC561\uC785\uB2C8\uB2E4."],["receipt",`${je(i.budget.reserved)}\uB9CC`,"\uC62C\uD574 \uC9D1\uD589 \uC608\uC57D",`\uC9C0\uB09C \uC5F0\uB3C4 \uC57D\uC815 ${je(i.budget.outstandingCommitments)}\uB9CC\uC740 \uBCC4\uB3C4 \uC7AC\uC6D0\uC73C\uB85C \uC720\uC9C0\uB429\uB2C8\uB2E4.`],["scale",`${i.trust}`,"\uACF5\uC815 \uC2E0\uB8B0","\uACF5\uAC1C \uAE30\uC900 \uC900\uC218 \uC9C0\uD45C. \uD655\uC778\uB418\uC9C0 \uC54A\uC740 \uC758\uD639\uC73C\uB85C \uAC10\uC18C\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."],["town",`${i.activeContracts.length}/2`,"\uC9C4\uD589 \uACC4\uC57D","\uB3D9\uC2DC\uC5D0 \uB450 \uACC4\uC57D\uAE4C\uC9C0 \uC9C4\uD589\uD569\uB2C8\uB2E4."]];pe("#stats").dataset.tutorialTarget="budget",pe("#stats").innerHTML=e.map(([t,n,s,r])=>`<div title="${r}" aria-label="${s}: ${n}. ${r}">${vt(t)}<span>${s}</span><strong>${n}</strong></div>`).join(""),pe("#progress").innerHTML=`<b>\uC0AC\uC5C5 ${i.completedIds.length}/12</b>`,pe("#status-text").textContent=bn?"\uC5F0\uC2B5 \uBAA8\uB4DC \xB7 \uC2E4\uC81C \uAE30\uB85D \uBCF4\uC874":Zh?"OFFLINE \xB7 v0.3.2 \xB7 \uC790\uB3D9\uC800\uC7A5":"OFFLINE \xB7 \uD30C\uC77C\uB85C \uC800\uC7A5\uD558\uC138\uC694"}function ft(i,e=!1){if(pe("#toast").textContent=i,document.querySelector(".tutorial-guide")&&!pe("#utility").children.length){pe("#toast").className="",clearTimeout(Ti),Gs.repeat(i),Ti=window.setTimeout(()=>Gs.repeat(),6500);return}pe("#toast").className="show"+(e?" error":""),clearTimeout(Ti),Ti=window.setTimeout(()=>pe("#toast").className="",6500)}function nt(){Gs.repeat(),D0(),Ho()}function D0(){clearTimeout(Ti),pe("#toast").className="",jh(),pe("#app").dataset.phase=O.phase;let i=he.getState();if(pe("#overlay").innerHTML="",pe("#board").innerHTML="",Il(i),pe("#world-title").textContent=O.phase==="ending"?"\uC6B0\uB9AC \uB3C4\uC2DC\uAC00 \uB2EC\uB77C\uC84C\uC5B4\uC694.":"\uC791\uC740 \uACC4\uC57D, \uB354 \uB098\uC740 \uC77C\uC0C1.",O.phase==="title"){pe("#side").innerHTML=`<section class="welcome"><span class="chapter">10 YEARS IN JODAL TOWN</span><div class="welcome-mark">${vt("town")}</div><h2>\uC5B4\uB5A4 \uB3C4\uC2DC\uB97C<br>\uB9CC\uB4E4\uACE0<br><em>\uC2F6\uC73C\uC138\uC694?</em></h2><p>\uC608\uC0B0\uC744 \uACC4\uD68D\uD558\uACE0, \uB450 \uC0AC\uC5C5\uC744 \uD568\uAED8 \uC9C4\uD589\uD558\uBA70<br>\uC5EC\uC12F \uACF5\uACF5\uC2DC\uC124\uC758 \uC77C\uC0C1\uC744 \uBC14\uAFD4\uBCF4\uC138\uC694.</p><div class="session-meta"><span>12\uAC1C \uC758\uB8B0 \xB7 10\uB144</span><span>\uC778\uAD6C 500\uBA85\uBD80\uD130</span></div>${se("new","\uC0C8 \uC2DC\uC98C \uC2DC\uC791 "+vt("arrow"),"primary wide")}${nn?se("continue",`\uC774\uC5B4\uD558\uAE30 \xB7 YEAR ${nn.year} \xB7 ${nn.completedIds.length}/12`,"secondary wide"):""}${se("import","\uC800\uC7A5 \uD30C\uC77C \uC5F4\uAE30","text-button wide")}${Hs?se("legacy","\uC9C0\uB09C \uC2DC\uC98C \uAE30\uB85D","text-button wide"):""}<p class="micro">\uC778\uD130\uB137 \uC5C6\uC774 \uD50C\uB808\uC774 \xB7 \uD074\uB9AD\uC73C\uB85C \uC870\uC791<br>\uC774\uC804 \uC800\uC7A5\uC740 \uC9C0\uB09C \uC2DC\uC98C \uAE30\uB85D\uC73C\uB85C \uC5F4\uB78C\uD569\uB2C8\uB2E4.</p></section>`;return}if(O.phase==="ending"){ed();return}if(ri(jt,i)||(jt=i.offers[0]||""),pe("#board").innerHTML=`<section class="request-board"><div class="board-top"><span class="chapter">YEAR ${i.year} \xB7 REQUESTS</span>${se("rotate","\uB2E4\uB978 \uC694\uCCAD","text-button")}</div><h2>\uC62C\uD574\uC758 \uC870\uB2EC \uC758\uB8B0</h2><p class="micro">${i.year===1?"\uD559\uAD50\uC758 \uCCAB \uAD6C\uB9E4\uB97C \uD568\uAED8 \uC2DC\uC791\uD574\uC694.":"\uC608\uC0B0\uACFC \uAE30\uD55C\uC744 \uBE44\uAD50\uD574 \uC0AC\uC5C5\uC744 \uC120\uD0DD\uD558\uC138\uC694."}</p>${i.offers.map(n=>{let s=Lt(n),r=Os(i,n),a=wo(s.contracts[r],i,s.allowedRoutes[0])?.price||0;return`<button class="offer ${jt===n?"active":""}" data-action="select" data-id="${n}"><span class="tag">${i.year>s.deadlineYear?"\uAE30\uD55C \uACBD\uACFC":"\uC0AC\uC5C5 \uAE30\uD55C"} \xB7 YEAR ${s.deadlineYear}</span><b>${s.title}</b><small>${Zt[s.facility]} \xB7 ${je(a)}\uB9CC<br>${s.durationYears?"\uB2E4\uC74C \uD574 \uB0A9\uD488":"\uC62C\uD574 \uB0A9\uD488"} \xB7 ${bi[s.allowedRoutes[0]]}</small></button>`}).join("")||'<p class="muted">\uB2E4\uC74C \uD574 \uC2E0\uADDC \uC758\uB8B0\uC640 \uC2DC\uC124 \uAC1C\uBC29\uC744 \uD655\uC778\uD558\uC138\uC694.</p>'}${jt?se("start","\uC120\uD0DD\uD55C \uC758\uB8B0 \uD655\uC778 "+vt("arrow"),"primary wide"):""}${se("center","\uC804\uCCB4 \uC758\uB8B0\xB7\uAC1C\uBC29 \uC870\uAC74","text-button wide")}</section>`,pe("#side").innerHTML=`<section class="request-board"><div class="board-top"><span class="chapter">ACTIVE CONTRACTS</span><b>${i.activeContracts.length}/2</b></div><h2>\uC9C4\uD589 \uC911 \uACC4\uC57D</h2>${i.activeContracts.map(n=>`<article class="active-contract"><span class="tag">${n.dueYear<=i.year?"\uAC80\uC0AC\xB7\uAC80\uC218 \uB300\uAE30":`YEAR ${n.dueYear} \uB0A9\uD488`}</span><h3>${Lt(n.requestId).title}</h3><p>${n.index+1}\uBC88 \uACC4\uC57D \xB7 \uC57D\uC815 ${je(n.price)}\uB9CC<br>\uC7AC\uC6D0 YEAR ${n.fundingYear} \xB7 \uC778\uC218 \uD6C4 \uC9C0\uAE09<br>\uC0AC\uC5C5 \uAE30\uD55C YEAR ${Lt(n.requestId).deadlineYear}</p>${n.dueYear<=i.year&&!i.yearClosed?se("resume","\uBB3C\uD488\xB7\uAE30\uB85D \uD655\uC778","primary wide",`data-key="${n.key}"`):'<p class="micro">\uC6D0\uB798 \uC7AC\uC6D0\uC758 \uC57D\uC815\uC744 \uC720\uC9C0\uD569\uB2C8\uB2E4.</p>'}${n.cancellationAllowed&&!i.yearClosed?se("cancel","\uC2B9\uC778\uB41C \uD569\uC758\uD574\uC81C","text-button wide",`data-key="${n.key}"`):""}</article>`).join("")||'<div class="empty-slot">\uC67C\uCABD \uC758\uB8B0\uB97C \uC120\uD0DD\uD574 \uC0AC\uC5C5\uC744 \uC2DC\uC791\uD558\uC138\uC694.</div>'}<div class="day-actions">${i.pendingEvent?se("event","\uC62C\uD574 \uC0AC\uAC74 \uD655\uC778","secondary wide"):""}${i.yearClosed?se("report","YEAR "+i.year+" \uACB0\uC0B0 \uBCF4\uAE30","primary wide"):se("settle","YEAR "+i.year+" \uC5F0\uB9D0 \uACB0\uC0B0","primary wide",`data-year="${i.year}" ${i.pendingEvent?"disabled":""}`)}<p class="micro">\uC62C\uD574 \uC2B9\uC778 ${je(i.budget.approved)} \xB7 \uC9D1\uD589 ${je(i.budget.spent)}\uB9CC<br>\uBBF8\uC0AC\uC6A9 \uC794\uC561\uC740 \uB2E4\uC74C \uD574\uC5D0 \uC790\uB3D9 \uC774\uC6D4\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p></div></section>`,O.phase==="town")return;if(O.phase==="missionResult"){U0();return}let e={request:"\uB3C4\uC2DC\uC5D0\uC11C \uC628 \uAD6C\uB9E4 \uC694\uCCAD",bidReview:O.route==="SHOPPING"?"\uB4F1\uB85D \uACC4\uC57D\uC0C1\uD488 \uBE44\uAD50\xB7\uC8FC\uBB38":O.route==="INNOVATION_TRIAL"?"\uC2DC\uBC94\uC0AC\uC6A9 \uCC38\uC5EC \uC870\uAC74 \uD655\uC778":"\uAC19\uC740 \uAE30\uC900\uC73C\uB85C, \uACF5\uC815\uD558\uAC8C",awardResult:"\uACC4\uC57D \uB300\uC0C1 \uD655\uC778 \uC644\uB8CC",inspection:O.repaired?"\uBCF4\uC644\uD488\uC774 \uB3C4\uCC29\uD588\uC5B4\uC694":"\uB3C4\uCC29\uD55C \uBB3C\uD488\uC744 \uD655\uC778\uD574\uC694"},t=O.phase==="request"?"\uC218\uC694\uAE30\uAD00":O.phase==="inspection"?"\uC218\uC694\uAE30\uAD00 \uAC80\uC0AC\xB7\uAC80\uC218\uD300":"\uACC4\uC57D \uC9C0\uC6D0 \xB7 \uC870\uB2EC \uC9C0\uC6D0\uC13C\uD130";pe("#overlay").innerHTML=`<div class="modal-backdrop"><section class="workspace modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><header class="modal-header"><div><span class="chapter">${O.mission.id} ${O.mission.contracts.length>1?`\xB7 \uACC4\uC57D ${O.contractIndex+1}/2`:""}<span class="actor">${t}</span></span><h2 id="modal-title">${e[O.phase]}</h2></div><div class="dialog-tools">${se("save",vt("save"),"tool square",'aria-label="\uC9C4\uD589 \uAE30\uB85D \uC800\uC7A5"')}${se("help",vt("help"),"tool square",'aria-label="\uD50C\uB808\uC774 \uB3C4\uC6C0\uB9D0"')}${se("settings",vt("settings"),"tool square",'aria-label="\uC18C\uB9AC\uC640 \uD654\uBA74 \uC124\uC815"')}${se("exit",vt("close"),"tool square",'aria-label="\uB3C4\uC2DC\uB85C \uB3CC\uC544\uAC00\uAE30"')}</div></header><nav class="steps">${["\uC694\uCCAD\xB7\uACBD\uB85C",O.route==="SHOPPING"?"\uB4F1\uB85D\uC0C1\uD488 \uBE44\uAD50":"\uC5C5\uCCB4 \uAC80\uD1A0","\uC608\uC0B0 \uC608\uC57D","\uAC80\uC0AC\xB7\uAC80\uC218"].map((n,s)=>`<span class="${s===["request","bidReview","awardResult","inspection"].indexOf(O.phase)?"active":""}"><b>${s+1}</b>${n}</span>`).join("")}</nav><div id="modal-body" class="modal-body"></div><footer id="modal-actions" class="modal-actions"></footer></section></div>`,O.phase==="request"&&wl(),O.phase==="bidReview"&&Al(),O.phase==="awardResult"&&N0(),O.phase==="inspection"&&Rl()}function Qh(){let i=O.contract;return`<aside class="brief" data-tutorial-target="requirements"><span class="chapter">PURCHASE BRIEF</span><h3>${i.product}</h3><div class="brief-meta"><span>\uC694\uCCAD \uC218\uB7C9 <b>${i.quantity}\uAC1C</b></span><span>\uC608\uC0B0 \uD55C\uB3C4 <b>${je(i.budget)}\uB9CC</b></span><span>\uB0A9\uAE30 / \uC2DC\uD5D8 <b>${i.days}\uC77C</b></span></div><div class="req-table">${i.requirements.map(e=>`<div><span>${e.label}</span><strong>${e.op==="min"?"\u2265 ":e.op==="max"?"\u2264 ":""}${e.value}${e.unit||""}</strong></div>`).join("")}</div><div class="rule"><b>\uBBF8\uB9AC \uACF5\uAC1C\uD55C \uC120\uD0DD \uAE30\uC900</b><p>${i.ruleText}</p></div><p class="micro">\uAE08\uC561\xB7\uADDC\uCE59\uC740 \uAC8C\uC784\uC6A9 \uAC00\uC0C1 \uC124\uC815. \uC81C\uC548\uC11C\uC758 \uBE44\uAD50\uC6A9 \uB0A9\uAE30\uC640 \uBCC4\uB3C4\uB85C \uC5F0\uAC04 \uC0AC\uC5C5 \uC77C\uC815\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.</p></aside>`}function wl(){pe("#modal-body").innerHTML=`<div class="request-layout"><div class="request-story"><div class="product-hero ${O.mission.facility}">${vt(Tl())}<span class="seal">\uC870\uB2EC\uD0C0\uC6B4<br>\uAD6C\uB9E4 \uC694\uCCAD</span></div><span class="tag">${O.mission.subtitle}</span><h3>${O.contract.title}</h3><p class="quote">\u201C${O.mission.request}\u201D</p><div class="npc">${vt(O.mission.facility)}<span><b>${O.mission.npc}</b><small>\uC218\uC694\uAE30\uAD00 \xB7 \uC694\uCCAD \uB2F4\uB2F9\uC790</small></span></div></div>${Qh()}</div><div class="route-choices" data-tutorial-target="routeinfo"><h3>\uC774 \uC694\uCCAD\uC758 \uAD6C\uB9E4 \uACBD\uB85C</h3>${Object.keys(bi).map(i=>se("route",bi[i]+(O.mission.allowedRoutes.includes(i)?"":" \xB7 \uC694\uCCAD \uC870\uAC74\uC0C1 \uBD88\uAC00"),O.route===i?"primary":"secondary",`data-route="${i}" ${O.mission.allowedRoutes.includes(i)?"":"disabled"}`)).join("")}<p>${Tr[O.route]}</p><p class="micro">\uC608\uC0C1 \uB0A9\uD488 YEAR ${he.getState().year+O.mission.durationYears} \xB7 \uC0AC\uC5C5 \uAE30\uD55C YEAR ${O.mission.deadlineYear}</p></div>`,pe("#modal-actions").innerHTML=`<span>\uC694\uAD6C\uC870\uAC74 \uC77D\uAE30 \u2192 \uC81C\uC548\uC11C \uBE44\uAD50 \u2192 \uB0A9\uD488\uD488 \uD655\uC778</span>${Us(he.getState())?.id==="requirements"?'<span class="micro">\uC548\uB0B4 \uCE74\uB4DC\uC5D0\uC11C \u2018\uC694\uAD6C\uC870\uAC74 \uD655\uC778\uD588\uC5B4\uC694\u2019\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694.</span>':se("review",(O.route==="SHOPPING"?"\uB4F1\uB85D\uC0C1\uD488 \uBCF4\uAE30":O.route==="INNOVATION_TRIAL"?"\uC9C0\uC815\xB7\uCC38\uC5EC \uC870\uAC74 \uD655\uC778":"\uC870\uAC74 \uD655\uC778 \xB7 \uACF5\uACE0 \uBCF4\uAE30")+vt("arrow"),"primary")}`}function Al(){clearTimeout(Ti),pe("#toast").className="";let i=O.contract;pe("#modal-body").innerHTML=`<div class="bid-layout">${Qh()}<section class="bids" data-tutorial-target="bids"><div class="section-line"><h3>${O.route==="SHOPPING"?"\uB4F1\uB85D \uACC4\uC57D\uC0C1\uD488":O.route==="INNOVATION_TRIAL"?"\uC2DC\uBC94\uC0AC\uC6A9 \uD6C4\uBCF4":"\uB3C4\uCC29\uD55C \uC81C\uC548\uC11C"} <span>${i.bids.length}\uAC74</span></h3><p>\uC801\uACA9 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD55C \uB4A4 \uACC4\uC57D \uD6C4\uBCF4\uB97C \uACE0\uB974\uC138\uC694.</p></div><div class="bid-grid">${i.bids.map(n=>`<article class="bid-card ${At===n.id?"chosen":""}" data-tutorial-target="vendor-${n.id}"><header><span class="bid-id">${n.id}</span><div><h4>${n.name}</h4><small>${O.route==="SHOPPING"?"\uAE30\uC874 \uACC4\uC57D\uC0C1\uD488 \xB7 \uC8FC\uBB38 \uAC00\uB2A5":"\uAC00\uC0C1\uC758 \uACF5\uAE09\uC5C5\uCCB4"}</small></div></header><div class="bid-price">${je(n.price)}<small>\uB9CC \uAC8C\uC784\uC6D0</small></div><div class="bid-spec">${i.requirements.map(s=>`<div><span>${s.label}</span><strong>${n.specs[s.key]}${s.unit||""}</strong></div>`).join("")}</div>${i.rule==="TOTAL_COST_AMONG_ELIGIBLE"?`<div class="cost-total">\uC804\uAE30\uBE44\uC6A9 ${je(n.runningCost||0)}\uB9CC<br><b>\uCD1D\uBE44\uC6A9 ${je(n.price+(n.runningCost||0))}\uB9CC</b></div>`:""}<p class="bid-note">${n.note}</p>${G0(i,n.id)}<div class="eligibility" role="group" aria-label="${n.id} \uC5C5\uCCB4 \uC801\uACA9 \uD310\uBCC4"><button data-action="classify" data-id="${n.id}" data-value="yes" class="${Kt[n.id]===!0?"on":""}" aria-pressed="${Kt[n.id]===!0}">\u2713 \uC801\uACA9</button><button data-action="classify" data-id="${n.id}" data-value="no" class="${Kt[n.id]===!1?"on":""}" aria-pressed="${Kt[n.id]===!1}">\xD7 \uBD80\uC801\uACA9</button></div><button class="select-bid ${At===n.id?"selected":""}" data-action="choose" data-id="${n.id}" aria-pressed="${At===n.id}">${At===n.id?"\u2713 \uACC4\uC57D \uD6C4\uBCF4 \uC120\uD0DD\uB428":"\uACC4\uC57D \uD6C4\uBCF4\uB85C \uC120\uD0DD"}</button></article>`).join("")}</div><div class="hint-line">${vt("help")} \uAC00\uACA9\uC744 \uBCF4\uAE30 \uC804\uC5D0 \uD544\uC218\uC870\uAC74\uBD80\uD130. \uC801\uACA9\uC778 \uC5C5\uCCB4\uB07C\uB9AC \uACF5\uAC1C \uAE30\uC900\uC744 \uBE44\uAD50\uD558\uC138\uC694.</div></section></div>`;let e=At?Fs(he.getState(),O.mission.id,O.contractIndex,O.route,At):"",t=e.includes("\uC608\uC0B0")||e.includes("2\uAC74")||e.includes("\uC2DC\uC98C");pe("#modal-actions").innerHTML=`<span>${t?e:Tr[O.route]}</span>${se("submitbid",O.route==="SHOPPING"?"\uC870\uAC74 \uD655\uC778 \xB7 \uC8FC\uBB38 \uAC80\uD1A0":"\uC120\uC815 \uAE30\uC900 \uC801\uC6A9 \xB7 \uACB0\uC815","primary",t?"disabled":"")}`}function N0(){let i=O.contract,e=Jh(i);pe("#modal-body").innerHTML=`<div class="award-layout"><div class="stamp">\uC120\uC815 \uD655\uC778<span>JODAL TOWN</span></div><span class="chapter">AWARD REVIEW</span><h3>${e.name} \xB7 ${i.product}</h3><p class="award-price">${je(e.price)}<small>\uB9CC \uAC8C\uC784\uC6D0</small></p><p class="reason">${e.id} \xB7 ${e.name}: \uD544\uC218 \uC870\uAC74\uACFC \uD604\uC7AC \uACBD\uB85C\uC758 \uCC38\uAC00 \uC870\uAC74\uC744 \uCDA9\uC871\uD558\uBA70, ${i.rule==="TOTAL_COST_AMONG_ELIGIBLE"?"\uAD6C\uB9E4\uAC00\uC640 \uC6B4\uC601\uBE44\uB97C \uD569\uD55C \uCD1D\uBE44\uC6A9\uC774 \uAC00\uC7A5 \uB0AE\uC2B5\uB2C8\uB2E4.":i.rule==="TRIAL_CONDITION_CHECK"?"\uC0AC\uC804\uC5D0 \uACF5\uAC1C\uD55C \uC2DC\uBC94\uC0AC\uC6A9 \uC870\uAC74\uC5D0 \uB9DE\uB294 \uD6C4\uBCF4\uC785\uB2C8\uB2E4.":"\uC801\uACA9 \uD6C4\uBCF4 \uC911 \uC81C\uC548\uAC00\uACA9\uC774 \uAC00\uC7A5 \uB0AE\uC2B5\uB2C8\uB2E4."}</p><div class="eligible-results">${i.bids.map(t=>{let n=ko(i,t);return`<div><b>${t.id} ${t.name}</b><span class="${n.eligible?"good":"warn"}">${n.eligible?"\u2713 \uC801\uACA9":"\xD7 \uBD80\uC801\uACA9"}</span><small>${n.eligible?"\uD544\uC218\uC870\uAC74 \uCDA9\uC871":n.failures.join(" \xB7 ")}</small></div>`}).join("")}</div><p class="muted">\uACC4\uC57D\uC740 \uCCAB\uAC78\uC74C\uC785\uB2C8\uB2E4. \uBB3C\uD488\uC774 \uB3C4\uCC29\uD558\uBA74 \uADDC\uACA9\xB7\uC218\uB7C9\xB7\uC190\uC0C1\uC744 \uD655\uC778\uD574\uC57C \uD574\uC694.</p></div>`,pe("#modal-actions").innerHTML=`<span>${je(e.price)}\uB9CC \uC608\uC57D \u2192 YEAR ${he.getState().year+O.mission.durationYears} \uB0A9\uD488 \u2192 \uC778\uC218 \uD6C4 \uC9C0\uAE09</span>${se("delivery","\uACC4\uC57D \uD655\uC815 \xB7 \uC608\uC0B0 \uC608\uC57D "+vt("box"),"primary")}`}function Rl(){let i=O.contract,e=O.repaired&&i.actualCount<i.quantity?[...i.items,...Array.from({length:i.quantity-i.actualCount},(t,n)=>({...i.items[0],id:`\uCD94\uAC00-${n+1}`,label:`\uBCF4\uC644 ${n+1}`,actual:i.items[0].expected,issue:void 0}))]:i.items;pe("#modal-body").innerHTML=`<div class="inspection-layout"><aside class="brief"><span class="chapter">DELIVERY NOTE</span><h3>${i.product}</h3><div class="delivery-icon">${vt(Tl())}</div><div class="brief-meta"><span>\uACC4\uC57D \uC218\uB7C9 <b>${i.quantity}\uAC1C</b></span><span>\uB0A9\uD488\uC11C \uD45C\uAE30 <b>${i.quantity}\uAC1C</b></span><span>\uC785\uACE0 \uC0C1\uD0DC <b>${O.repaired?"\uBCF4\uC644 \uD6C4 \uC7AC\uD655\uC778":"\uCCAB \uC785\uACE0"}</b></span></div><div class="rule"><b>\uC120\uC815\uB41C \uACC4\uC57D \uADDC\uACA9</b><p>${Jh(i).name}<br>${i.items[0].expected}</p></div><p class="micro">\uB0A9\uD488\uC11C \uD45C\uAE30\uC640 \uC2E4\uC81C \uC218\uB7C9\uC740 \uB2E4\uB97C \uC218 \uC788\uC5B4\uC694. \uAC01 \uD0ED\uC758 \uD655\uC778 \uAE30\uB85D\uC744 \uB0A8\uACA8\uC8FC\uC138\uC694.</p>${O.repaired?'<p class="repair-notice">\u2713 \uBCF4\uC644 \uC644\uB8CC<br>\uC218\uC815\uB41C \uBB3C\uD488\uACFC \uAE30\uB85D\uC744 \uB2E4\uC2DC \uAC80\uC0AC\xB7\uAC80\uC218\uD558\uC138\uC694.</p>':""}</aside><section class="inspection-work" data-tutorial-target="inspection"><div class="inspection-tabs" role="tablist"><button role="tab" aria-selected="${pt==="spec"}" data-action="tab" data-tab="spec" class="${pt==="spec"?"active":""}">01 \uAC80\uC0AC <small>\uADDC\uACA9\xB7\uAE30\uB85D</small> ${at.specChecked?"\u2713":""}</button><button role="tab" aria-selected="${pt==="count"}" data-action="tab" data-tutorial-target="counttab" data-tab="count" class="${pt==="count"?"active":""}">02 \uAC80\uC218 <small>\uC218\uB7C9\xB7\uC190\uC0C1</small> ${at.countChecked?"\u2713":""}</button></div><div class="inspection-intro"><div><h3>${pt==="spec"?O.mission.id==="M05"?"\uC2DC\uD5D8 \uAE30\uB85D\uC744 \uB300\uC870\uD574 \uC8FC\uC138\uC694":"\uACC4\uC57D \uADDC\uACA9\uACFC \uB2E4\uB978 \uBB3C\uD488\uC774 \uC788\uB098\uC694?":"\uC218\uB7C9\uACFC \uC190\uC0C1\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694"}</h3><p>${pt==="spec"?"\uADDC\uACA9\uC774 \uBAA8\uB450 \uAC19\uC73C\uBA74 \uBB38\uC81C \uD45C\uC2DC \uC5C6\uC774 \uD655\uC778\uD558\uC138\uC694. \uC218\uB7C9\xB7\uD30C\uC190\uC740 02 \uAC80\uC218 \uD0ED\uC5D0\uC11C \uB530\uB85C \uD655\uC778\uD569\uB2C8\uB2E4.":"\uB3C4\uCC29\uD55C \uCE74\uB4DC \uC218\uB97C \uC9C1\uC811 \uD655\uC778\uD558\uACE0, \uD30C\uC190\uB41C \uBB3C\uD488\uB9CC \uD45C\uC2DC\uD569\uB2C8\uB2E4."}</p></div>${se("openall","\uC804\uCCB4 "+(O.mission.id==="M05"?"\uAE30\uB85D \uC5F4\uAE30":"\uC0C1\uC790 \uAC1C\uBD09"),"small-button")}</div><p class="inspection-guidance">${O.active?.directChecked?"\u2713 \uBB3C\uD488 \uC9C1\uC811 \uD655\uC778 \uC644\uB8CC":"\uC804\uCCB4 \uAC1C\uBD09 \uD6C4\uC5D0\uB294 \uBB3C\uD488 \uCE74\uB4DC\uB97C \uC9C1\uC811 \uD655\uC778\uD558\uAC70\uB098 \uBB38\uC81C\uB97C \uD45C\uC2DC\uD558\uC138\uC694. \uC544\uB798 \u2018\uBB3C\uD488 1\uAC1C \uBE44\uAD50\u2019\uB85C\uB3C4 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}</p>${O.active?.directChecked?"":se("compareitem","\uBB3C\uD488 1\uAC1C \uBE44\uAD50","secondary")}<div class="items ${e.length>20?"dense":""} ${O.mission.id==="M05"?"records":""}">${e.map(t=>{let n=Ei.has(t.id),s=pt==="spec"?at.spec:at.damage,r=s.includes(t.id),a=O.repaired?t.expected:t.actual,o=pt==="spec"&&t.kind==="damage"?"\uADDC\uACA9: "+t.expected.replace("\uC190\uC0C1 \uC5C6\uC74C","").replace("\uD3EC\uC7A5 \uC815\uC0C1",""):pt==="count"&&t.kind!=="damage"?"\uC678\uAD00 \uC190\uC0C1 \uC5C6\uC74C":a;return`<article class="item ${n?"opened":""} ${r?"marked":""}"><button class="item-open" data-action="open" data-id="${t.id}" aria-label="${t.label} ${n?"\uC0C1\uC790 \uD655\uC778":"\uAC1C\uBD09"}"><span class="item-top"><b>${t.label}</b>${vt(n?Tl():"box")}</span><span class="item-spec">${n?o:"\uD074\uB9AD\uD574\uC11C \uAC1C\uBD09"}</span>${n&&t.kind==="record"?`<span class="expected">\uAE30\uC900: ${t.expected}</span>`:""}</button>${n?`<button class="mark-item" data-action="mark" data-id="${t.id}" aria-pressed="${r}">${r?"\u2713 \uBB38\uC81C \uD45C\uC2DC\uB428":pt==="spec"?"\uADDC\uACA9\xB7\uAE30\uB85D \uBB38\uC81C \uD45C\uC2DC":"\uC190\uC0C1 \uD45C\uC2DC"}</button>`:""}</article>`}).join("")}</div>${pt==="count"?`<div class="count-check"><label for="count-input">\uC9C1\uC811 \uD655\uC778\uD55C \uC2E4\uC81C \uC218\uB7C9</label><input id="count-input" type="number" min="0" max="100" value="${at.count??""}" inputmode="numeric"><span>\uAC1C</span><label class="check-label"><input id="count-mismatch" type="checkbox" ${at.countMismatch?"checked":""}> \uACC4\uC57D \uC218\uB7C9\uACFC \uB2E4\uB984</label></div>`:""}${O.mission.id==="M05"?O0():""}<label class="inspection-confirm check-label"><input id="tab-confirm" type="checkbox" ${(pt==="spec"?at.specChecked:at.countChecked)?"checked":""}> ${pt==="spec"?"\uADDC\uACA9\xB7\uAE30\uB85D \uBE44\uAD50\uB97C \uB9C8\uCCE4\uC2B5\uB2C8\uB2E4":"\uC218\uB7C9\xB7\uC190\uC0C1 \uD655\uC778\uC744 \uB9C8\uCCE4\uC2B5\uB2C8\uB2E4"}</label><p class="micro">${pt==="spec"?"\uAC80\uC0AC: \uACC4\uC57D \uADDC\uACA9\uACFC \uB9DE\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4.":"\uAC80\uC218: \uC2E4\uC81C \uC218\uB7C9\uACFC \uD6FC\uC190 \uC5EC\uBD80\uB97C \uD655\uC778\uD569\uB2C8\uB2E4."} \xB7 \uAD50\uC721\uC6A9 \uAD6C\uBD84 [S5]</p></section></div>`,pe("#modal-actions").innerHTML=`<span>\uAC80\uC0AC ${at.specChecked?"\u2713":"\u25CB"} \xB7 \uAC80\uC218 ${at.countChecked?"\u2713":"\u25CB"} ${O.repaired?"\xB7 \uBCF4\uC644\uD488 \uC7AC\uD655\uC778":""} \xB7 ${O.active?.directChecked?"\uC9C1\uC811 \uD655\uC778 \u2713":"\uC9C1\uC811 \uD655\uC778 \u25CB"}</span><div>${O.repaired?"":se("repair","\uBCF4\uC644 \uC694\uCCAD","secondary")}${se("accept","\uAC80\uC0AC\xB7\uAC80\uC218 \uC644\uB8CC \xB7 \uC778\uC218 "+vt("check"),"primary")}</div>`}function U0(){let i=O.mission;pe("#overlay").innerHTML=`<div class="modal-backdrop soft"><section class="result modal" role="dialog" aria-modal="true" aria-labelledby="result-title"><span class="chapter">A LITTLE CHANGE, A BETTER TOWN</span><div class="medal">${vt("star")}</div><span class="tag">\uC815\uCC45 \uBC30\uC9C0 \uD68D\uB4DD \xB7 ${i.badge}</span><h2 id="result-title">${i.title}</h2><p>${i.reward}</p><div class="reward-stats"><span>\uB3C4\uC2DC \uC11C\uBE44\uC2A4 <b>${Ir(he.getState()).serviceScore}\uC810</b></span><span>\uD604\uC7AC \uACF5\uC815 \uC2E0\uB8B0 <b>${he.getState().trust}/100</b></span><span>\uC2DC\uC124 \uB2E8\uACC4 <b>${he.getState().facilityLevel[i.facility]} / 2</b></span></div><p class="facility-stage">${Xi[i.facility][he.getState().facilityLevel[i.facility]]} \xB7 \uAC1C\uC120\uB41C \uC678\uD615\uC774 \uB3C4\uC2DC\uC5D0 \uBC18\uC601\uB410\uC5B4\uC694.</p><div class="policy-card"><b>\uC624\uB298\uC758 \uC870\uB2EC \uD55C \uBB38\uC7A5 <span>[${i.policySourceId}]</span></b><p>${i.policyFact}</p><small>\uCD9C\uCC98: ${ws[i.policySourceId].title} \xB7 \uB3C4\uC6C0\uB9D0\uC5D0\uC11C \uC790\uB8CC \uD655\uC778</small></div><p class="micro">${As}</p>${se("next","\uB3C4\uC2DC\uB85C \uB3CC\uC544\uAC00\uAE30 "+vt("arrow"),"primary wide")}</section></div>`}var Ws=!1;function ed(){let i=he.getState(),e=Nh(i);pe("#side").innerHTML=`<section class="ending-card"><span class="chapter">SEASON ${i.seed}</span><h2>\uC6B0\uB9AC \uB3C4\uC2DC\uC758 \uC131\uC801\uD45C<br><em>${e.grade} \xB7 ${e.total}\uC810</em></h2><p>${i.completedIds.length}/12 \uC0AC\uC5C5 \xB7 ${i.receipts.length}/13 \uACC4\uC57D \uC778\uC218<br>\uC11C\uBE44\uC2A4 ${e.service} \xB7 \uAE30\uD55C \uC900\uC218 ${e.timely}%<br>\uACF5\uC815 \uC2E0\uB8B0 ${i.trust} \xB7 \uC608\uC0B0 \uC900\uC218 ${e.budget}</p><div class="service-bars">${Object.entries(i.services).map(([t,n])=>`<label>${{education:"\uAD50\uC721",safety:"\uC548\uC804",health:"\uAC74\uAC15",life:"\uC0DD\uD65C",environment:"\uD658\uACBD"}[t]} <b>${n}</b><meter min="0" max="100" value="${n}"></meter></label>`).join("")}</div><p>10\uB144 \uB204\uC801 \uC9D1\uD589 ${je(i.accounts.reduce((t,n)=>t+n.spent,0))}\uB9CC<br>\uBBF8\uC9D1\uD589 \uC57D\uC815 ${je(i.accounts.reduce((t,n)=>t+n.reserved,0))}\uB9CC<br>\uBBF8\uC0AC\uC6A9 \uB9CC\uB8CC ${je(i.accounts.reduce((t,n)=>t+n.expired,0))}\uB9CC</p>${i.trialResult?`<p class="tag">\uD601\uC2E0 \uC2E4\uC99D \uBCF4\uACE0 \xB7 ${i.trialResult==="verified"?"\uBAA9\uD45C \uD655\uC778":"\uD6A8\uACFC \uBD88\uCDA9\uBD84\uC744 \uC815\uC9C1\uD558\uAC8C \uBCF4\uACE0"}</p>`:""}<p class="micro">\uAC8C\uC784\uC6A9 \uB3C4\uC2DC \uC6B4\uC601 \uC810\uC218\uC774\uBA70 \uBC95\uC815 \uD3C9\uAC00\uC810\uC218\uAC00 \uC544\uB2D9\uB2C8\uB2E4.</p>${se("beforeafter",Ws?"\uC131\uC7A5\uD55C \uB3C4\uC2DC \uBCF4\uAE30":"\uC2DC\uC791 \uC804 \uB3C4\uC2DC \uBCF4\uAE30","secondary wide")}${se("ledger","\uC0AC\uC5C5\xB7\uC608\uC0B0 \uAE30\uB85D","secondary wide")}${se("save","\uC2DC\uC98C \uAE30\uB85D \uC800\uC7A5","primary wide")}${se("new","\uB2E4\uB978 \uC2DC\uC98C \uC2DC\uC791","text-button wide")}</section>`,pe("#board").innerHTML=`<section class="request-board"><span class="chapter">PUBLIC SERVICES</span><h2>\uB3C4\uC2DC\uC758 \uBCC0\uD654</h2>${Object.entries(i.facilityLevel).map(([t,n])=>`<p>${Zt[t]} <b>LV.${i.before[t]} \u2192 ${n}</b><small class="facility-stage">${Xi[t][n]}</small></p>`).join("")}<p class="micro">\uCCAB \uD559\uAD50 \uC758\uB8B0\uB294 \uD29C\uD1A0\uB9AC\uC5BC\uC785\uB2C8\uB2E4.<br>\uB2E4\uC74C \uC2DC\uC98C\uC5D0\uB294 \uC0AC\uAC74\uACFC \uC694\uCCAD\uC758 \uAC8C\uC2DC \uC21C\uC11C,<br>\uD601\uC2E0 \uC2E4\uC99D \uACB0\uACFC\uAC00 \uBC14\uB01D\uB2C8\uB2E4.</p></section>`}function O0(){let i=Ro(he.getState().seed);return`<section class="trial-table"><h3>7\uD68C \uC2E4\uC99D \uCE21\uC815 \uACB0\uACFC</h3><p>\uACF5\uAC1C \uAE30\uC900: \uBAA8\uB4E0 \uCE21\uC815\uC77C\uC758 \uC815\uC0C1 \uC751\uB2F5\uB960\uC774 95% \uC774\uC0C1\uC774\uBA74 \uBAA9\uD45C \uD655\uC778. \uD55C \uBC88\uC774\uB77C\uB3C4 \uBBF8\uB2EC\uD558\uBA74 \uD6A8\uACFC \uBD88\uCDA9\uBD84\uC73C\uB85C \uBCF4\uACE0\uD569\uB2C8\uB2E4. \uAC8C\uC784\uC6A9 \uAC00\uC0C1 \uCE21\uC815\uC785\uB2C8\uB2E4.</p><table><tr>${i.map((e,t)=>`<th>${t+1}\uD68C</th>`).join("")}</tr><tr>${i.map(e=>`<td>${e}%</td>`).join("")}</tr></table><label>\uACB0\uACFC \uBCF4\uACE0 <select id="trial-answer"><option value="">\uACB0\uB860 \uC120\uD0DD</option><option value="verified" ${O.active?.trialAnswer==="verified"?"selected":""}>\uBAA9\uD45C \uD655\uC778</option><option value="inconclusive" ${O.active?.trialAnswer==="inconclusive"?"selected":""}>\uD6A8\uACFC \uBD88\uCDA9\uBD84 \xB7 \uCD94\uAC00 \uC2E4\uC99D \uD544\uC694</option></select></label></section>`}function Gh(){if(O.phase!=="inspection"||!O.active)return;clearTimeout(Ti),pe("#toast").className="",Wn();let i=O.contract.items[0],e=O.repaired?i.expected:i.actual;Ct("\uBB3C\uD488 \uD55C \uAC1C\uB97C \uD568\uAED8 \uBE44\uAD50\uD574\uC694",`<p>\uC804\uCCB4 \uAC1C\uBD09\uC73C\uB85C \uB0B4\uC6A9\uC740 \uD3BC\uCCD0\uC84C\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uBB3C\uD488\uC758 \uACC4\uC57D \uB0B4\uC6A9\uACFC \uC2E4\uC81C \uB0B4\uC6A9\uC744 \uBE44\uAD50\uD574 \uD310\uB2E8\uC744 \uB0A8\uACA8\uC8FC\uC138\uC694.</p><h3>${xn(i.label)}</h3><div class="comparison-detail"><p><b>\uACC4\uC57D \uB0B4\uC6A9</b><br>${xn(i.expected)}</p><p><b>\uC2E4\uC81C \uB0B4\uC6A9${O.repaired?" \xB7 \uBCF4\uC644 \uD6C4":""}</b><br>${xn(e)}</p></div>${se("compareanswer","\uB0B4\uC6A9\uC774 \uC77C\uCE58\uD569\uB2C8\uB2E4","primary wide",'data-match="yes"')}${se("compareanswer","\uB0B4\uC6A9\uC774 \uB2E4\uB985\uB2C8\uB2E4","secondary wide",'data-match="no"')}<p class="micro">\uC774 \uBB3C\uD488\uC758 \uBE44\uAD50\uB9CC \uAE30\uB85D\uD569\uB2C8\uB2E4. \uC804\uCCB4 \uADDC\uACA9\xB7\uC218\uB7C9\xB7\uC190\uC0C1 \uD655\uC778\uC740 \uACC4\uC18D \uD544\uC694\uD569\uB2C8\uB2E4.</p>`)}function Wn(){O.phase==="inspection"&&O.active&&he.dispatch({type:"DRAFT",key:O.key,patch:{observations:at,opened:[...Ei],tab:pt}})}function Cl(){let i=O.active;i?(at=structuredClone(i.observations),Ei=new Set(i.opened),pt=i.tab):Vs()}function Fo(i){let e=he.getState();Ct(i?bi[i]:"\uC870\uB2EC\uC13C\uD130 \xB7 \uC804\uCCB4 \uC0AC\uC5C5",`<p>\uC2DC\uC124\uC740 \uC5F0\uB3C4\xB7\uC778\uAD6C \uB610\uB294 \uC644\uB8CC \uC0AC\uC5C5 \uC218\uC5D0 \uB530\uB77C \uC5F4\uB9BD\uB2C8\uB2E4.</p><div class="center-list">${_t.filter(t=>!i||t.allowedRoutes.includes(i)).map(t=>{let n=wr[t.facility];return`<article><b>${t.id} \xB7 ${t.title}</b><p>YEAR ${t.availableFromYear}\uBD80\uD130 \xB7 \uAE30\uD55C YEAR ${t.deadlineYear}<br>${Zt[t.facility]}: YEAR ${n.year} \uC774\uD6C4 ${n.projects?`\uC778\uAD6C ${n.population}\uBA85 \uB610\uB294 \uC0AC\uC5C5 ${n.projects}\uAC74`:"\uAC1C\uBC29"}<br>${bi[t.allowedRoutes[0]]}</p>${se("centerselect",e.completedIds.includes(t.id)?"\uC644\uB8CC":e.activeContracts.some(s=>s.requestId===t.id)?"\uACC4\uC57D \uC9C4\uD589 \uC911":ri(t.id,e)?"\uC758\uB8B0 \uD655\uC778":"\uC544\uC9C1 \uC5F4\uB9AC\uC9C0 \uC54A\uC74C","secondary",`data-id="${t.id}" ${ri(t.id,e)?"":"disabled"}`)}</article>`}).join("")}</div>`)}function F0(){let i=he.getState();Ct("\uB3C4\uC2DC\uAE30\uB85D \xB7 \uC5F0\uB3C4\uBCC4 \uC608\uC0B0 \uC7A5\uBD80",`<p>\uC62C\uD574 \uAC00\uC6A9 <b>${je(Rr(i))}\uB9CC</b> \xB7 \uC9C0\uB09C \uC5F0\uB3C4 \uBBF8\uC9D1\uD589 \uC57D\uC815 ${je(i.budget.outstandingCommitments)}\uB9CC</p><p>\uC57D\uC815\uC740 \uCD5C\uCD08 \uC2B9\uC778\uB41C \uC5F0\uB3C4\uC758 \uC7AC\uC6D0\uC5D0\uC11C \uC778\uC218 \uD6C4 \uC9C0\uAE09\uD569\uB2C8\uB2E4. \uC62C\uD574 \uC608\uC0B0\uC5D0\uC11C \uB2E4\uC2DC \uCC28\uAC10\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p><div class="table-scroll"><table><tr><th>\uC5F0\uB3C4</th><th>\uC2B9\uC778</th><th>\uC9D1\uD589</th><th>\uC608\uC57D</th><th>\uB9CC\uB8CC</th></tr>${i.accounts.map(e=>`<tr><td>${e.year}</td><td>${e.approved}</td><td>${e.spent}</td><td>${e.reserved}</td><td>${e.expired}</td></tr>`).join("")}</table></div>${i.annualHistory.map(e=>se("pastreport",`YEAR ${e.year} \uACB0\uC0B0 \xB7 ${e.populationAfter}\uBA85`,"secondary",`data-year="${e.year}"`)).join("")}${[...i.eventLog].reverse().map(e=>`<p><b>YEAR ${e.year}</b> \xB7 ${xn(e.message)}</p>`).join("")}`)}function B0(){let i=he.getState(),e=Vn.find(t=>t.id===i.pendingEvent);e&&Ct(`YEAR ${i.year} \xB7 ${e.title}`,`<p>${e.text}</p>${e.effect==="delay"?'<p class="micro">\uC544\uC9C1 \uB3C4\uCC29\uD558\uC9C0 \uC54A\uC740 \uACC4\uC57D\uC774 \uC5C6\uB2E4\uBA74 \uC9C0\uC5F0\uC740 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uACF5\uAE09 \uCC28\uC9C8\uC774 \uD655\uC778\uB41C \uACC4\uC57D\uC5D0\uB294 \uD569\uC758\uD574\uC81C \uBC84\uD2BC\uC774 \uC0DD\uAE41\uB2C8\uB2E4.</p>':""}${e.choices.map((t,n)=>se("eventchoice",t,"secondary wide",`data-choice="${n}"`)).join("")}`)}function Vs(){at=Kh(),Ei.clear(),pt="spec"}function zs(){Wn(),Gs.repeat(),clearTimeout(Ti),pe("#toast").className="";let i=pe("#modal-body").scrollTop;Rl(),pe("#modal-body").scrollTop=i}function Ct(i,e){Sl=document.activeElement,pe("#utility").innerHTML=`<div class="modal-backdrop utility-backdrop"><section class="utility modal" role="dialog" aria-modal="true" aria-labelledby="utility-title"><header class="modal-header"><h2 id="utility-title">${i}</h2>${se("closeutility",vt("close"),"tool square",'aria-label="\uB2EB\uAE30"')}</header><div class="utility-body">${e}</div></section></div>`,pe("#utility button").focus(),pe(".world").inert=!0,pe(".topbar").inert=!0,pe("#overlay").inert=!0}function Dt(){pe("#utility").innerHTML="",pe(".world").inert=!1,pe(".topbar").inert=!1,pe("#overlay").inert=!1,Sl?.isConnected?Sl.focus():pe(".brand").focus()}function Wh(){Ct("\uAF3C\uAF3C\uD55C \uC120\uD0DD\uC744 \uC704\uD55C \uC791\uC740 \uC548\uB0B4",`<div class="help-steps"><p><b>01 \uC694\uCCAD \uC77D\uAE30</b> \uADDC\uACA9\xB7\uC218\uB7C9\xB7\uB0A9\uAE30\uC640 \uBBF8\uB9AC \uACF5\uAC1C\uB41C \uBE44\uAD50 \uAE30\uC900\uC744 \uD655\uC778\uD558\uC138\uC694.</p><p><b>02 \uC81C\uC548\uC11C \uBE44\uAD50</b> \uC801\uACA9 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD558\uACE0 \uACF5\uAC1C \uAE30\uC900\uC5D0 \uB9DE\uB294 \uD6C4\uBCF4\uB97C \uACE0\uB974\uC138\uC694.</p><p><b>03 \uAC80\uC0AC\uC640 \uAC80\uC218</b> \uC0C1\uC790\uB97C \uC5F4\uACE0 \uADDC\uACA9\uC744 \uB300\uC870\uD569\uB2C8\uB2E4. \uAC80\uC218 \uD0ED\uC5D0\uC11C \uC2E4\uC81C \uC218\uB7C9\xB7\uC190\uC0C1\uB3C4 \uD655\uC778\uD558\uC138\uC694.</p><p><b>04 \uBCF4\uC644 \uD6C4 \uC778\uC218</b> \uBB38\uC81C\uAC00 \uC788\uC73C\uBA74 \uBCF4\uC644 \uC694\uCCAD \u2192 \uB450 \uD0ED \uC7AC\uD655\uC778 \u2192 \uC778\uC218 \uC21C\uC11C\uC785\uB2C8\uB2E4.</p></div><p>\uC2E4\uC218\uD574\uB3C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCCAB\uD574\uC5D0\uB294 \uC624\uB958\uB97C \uB2E4\uC2DC \uD655\uC778\uD574\uB3C4 \uBC8C\uC810\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774\uD6C4 \uC798\uBABB\uB41C \uC120\uC815 \uD655\uC815 \uC2DC \uC2E0\uB8B0\uB3C4 1\uC774 \uAC10\uC18C\uD569\uB2C8\uB2E4. \uD558\uC790 \uBC1C\uACAC\xB7\uBCF4\uC644 \uC694\uCCAD\uACFC \uD655\uC778 \uC7AC\uC2DC\uB3C4\uC5D0\uB294 \uBD88\uC774\uC775\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC778\uC218 \uC804\uC5D0\uB294 \uC2DC\uC124\uC774 \uC131\uC7A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p><h3>\uC800\uC7A5 \uC548\uB0B4</h3><p>\uC5F0\uB3C4\xB7\uC778\uAD6C\xB7\uC608\uC0B0\xB7\uD29C\uD1A0\uB9AC\uC5BC \uB2E8\uACC4\xB7\uB3D9\uC2DC \uACC4\uC57D 2\uAC74\xB7\uAC80\uC218 \uAE30\uB85D\uC744 JSON \uD30C\uC77C\uB85C \uB0B4\uBCF4\uB0B4 \uC774\uC5B4\uC11C \uC9C4\uD589\uD569\uB2C8\uB2E4. \uC5F0\uAC04 \uAE30\uBCF8 \uC608\uC0B0\uC740 4,000\uB9CC, \uC131\uACFC \uBCF4\uC870\uAE08\uC740 \uCD5C\uB300 1,000\uB9CC\uC785\uB2C8\uB2E4. \uBBF8\uC0AC\uC6A9 \uC608\uC0B0\uC740 \uC774\uC6D4\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC790\uB3D9\uC800\uC7A5\uC740 \uD658\uACBD\uC5D0 \uB530\uB77C \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h3>\uC5ED\uD560\uACFC \uAD50\uC721\uC6A9 \uB2E8\uC21C\uD654</h3><p>${As} \uC218\uC694\uAE30\uAD00\uC740 \uBB3C\uD488\uC744 \uC694\uCCAD\uD558\uACE0, \uC9C0\uC6D0\uC13C\uD130\uB294 \uACC4\uC57D\uC744 \uC9C0\uC6D0\uD558\uBA70, \uC218\uC694\uAE30\uAD00 \uAC80\uC0AC\xB7\uAC80\uC218\uD300\uC740 \uB0A9\uD488\uD488\uC744 \uD655\uC778\uD558\uB294 \uC5ED\uD560\uB85C \uD45C\uD604\uD588\uC2B5\uB2C8\uB2E4.</p><h3>\uAE30\uD68D\uC11C\uC758 \uC815\uCC45 \uCC38\uACE0\uC790\uB8CC</h3>${Object.entries(ws).map(([i,e])=>`<p><a href="${e.url}" target="_blank" rel="noopener">[${i}] ${e.title} \u2197</a></p>`).join("")}<p class="micro">\uC678\uBD80 \uC790\uB8CC \uB9C1\uD06C\uB294 \uC778\uD130\uB137 \uC5F0\uACB0 \uC2DC \uC5F4\uB9BD\uB2C8\uB2E4. \uD50C\uB808\uC774\uC5D0\uB294 \uC778\uD130\uB137\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p>`)}function $h(){Ct("\uC18C\uB9AC\uC640 \uD654\uBA74",`<label class="setting-row">\uD6A8\uACFC\uC74C \uC74C\uB7C9<input id="volume" type="range" min="0" max="100" value="${Math.round(Si*100)}"></label><label class="setting-row">\uBB34\uC74C<input id="mute" type="checkbox" ${Si===0?"checked":""}></label><label class="setting-row">\uC800\uC0AC\uC591 \uBAA8\uB4DC <small>\uADF8\uB9BC\uC790\xB7\uD574\uC0C1\uB3C4 \uC904\uC774\uAE30</small><input id="low" type="checkbox" ${Ml?"checked":""}></label><label class="setting-row">\uC57C\uAC04 \uB3C4\uC2DC \uBCF4\uAE30<input id="night" type="checkbox" ${zo?"checked":""}></label><label class="setting-row">\uC6C0\uC9C1\uC784 \uC904\uC774\uAE30<input id="reduced" type="checkbox" ${Bo?"checked":""}></label><p class="micro">\uC124\uC815\uC740 \uC774 \uC2E4\uD589 \uC138\uC158\uC5D0 \uC801\uC6A9\uB429\uB2C8\uB2E4. \uC6B0\uD074\uB9AD \uB4DC\uB798\uADF8\uB85C \uB3C4\uC2DC\uB97C \uC774\uB3D9\uD569\uB2C8\uB2E4.</p><label class="setting-row">\uC9C0\uB3C4 \uC774\uB3D9 \uBC84\uD2BC \uD45C\uC2DC<input id="panbuttons" type="checkbox" ${document.documentElement.classList.contains("show-pan")?"checked":""}></label>${se("replay","\uD29C\uD1A0\uB9AC\uC5BC \uB2E4\uC2DC \uBCF4\uAE30 \xB7 \uBCC4\uB3C4 \uC5F0\uC2B5","secondary wide")}${se("replayhints","\uC0C8 \uAE30\uB2A5 \uC548\uB0B4 \uB2E4\uC2DC \uBCF4\uAE30","secondary wide",O.phase==="title"?'disabled title="\uC774\uC5B4\uD558\uAE30 \uD6C4 \uC548\uB0B4\uB97C \uB2E4\uC2DC \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4"':"")}${se("import","\uC800\uC7A5 \uD30C\uC77C \uBD88\uB7EC\uC624\uAE30","secondary wide")}${se("closeutility","\uAC8C\uC784\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30","primary wide")}`)}document.addEventListener("click",i=>{let e=i.target.closest("[data-action]");if(!e||e.hasAttribute("disabled"))return;let t=e.dataset.action;switch(Gn(),t){case"home":Wn(),Bt=void 0,O.phase="title",nt();break;case"new":k0(O.phase==="title"?nn:he.getState())?Ct("\uC0C8\uB85C\uC6B4 \uB3C4\uC2DC\uB97C \uC2DC\uC791\uD560\uAE4C\uC694?",`<p>\uD604\uC7AC \uC9C4\uD589\uC740 \uCD08\uAE30\uD654\uB429\uB2C8\uB2E4. \uBCF4\uAD00\uD558\uB824\uBA74 \uBA3C\uC800 \uD30C\uC77C\uB85C \uB0B4\uBCF4\uB0B4\uC138\uC694.</p>${se("save","\uD604\uC7AC \uAE30\uB85D \uB0B4\uBCF4\uB0B4\uAE30","secondary wide")}${se("confirmnew","\uCD08\uAE30\uD654\uD558\uACE0 \uC0C8 \uAC8C\uC784 \uC2DC\uC791","primary wide")}`):(pe("#utility").children.length&&Dt(),qh());break;case"confirmnew":Dt(),qh();break;case"continue":nn&&(he.dispatch({type:"RESTORE",state:nn}),Pl(),nt(),nn.yearClosed&&!nn.ended&&Lr(nn.year));break;case"school":jt="M01",he.dispatch({type:"TUTORIAL_EVENT",event:"SCHOOL_SELECTED",data:{facility:"school"}}),nt();break;case"select":if(he.getState().completedIds.includes(e.dataset.id)){ft("\uC774\uBBF8 \uC644\uB8CC\uD55C \uC758\uB8B0\uC785\uB2C8\uB2E4. \uC0C8 \uAC8C\uC784\uC5D0\uC11C \uB2E4\uC2DC \uB3C4\uC804\uD560 \uC218 \uC788\uC5B4\uC694.");break}jt=e.dataset.id,Ft?.highlightFacility(_t.find(n=>n.id===jt).facility),nt();break;case"start":O.startMission(jt)&&(At="",Kt={},Vs(),nt());break;case"review":O.review(),At="",Kt={},nt();break;case"classify":{let n=e.dataset.id,s=e.dataset.value==="yes";Kt[n]=s;let r=ko(O.contract,O.contract.bids.find(a=>a.id===n));O.event("CLASSIFIED_"+n,{id:n,value:s}),Al(),s!==r.eligible&&ft(r.eligible?"\uD544\uC218 \uC870\uAC74\uC744 \uBAA8\uB450 \uB9CC\uC871\uD574\uC694. \uAC01 \uADDC\uACA9\uC744 \uB2E4\uC2DC \uBE44\uAD50\uD558\uC138\uC694.":r.failures.join(" \xB7 "),!0);break}case"choose":{At=e.dataset.id;let n=Mi(O.contract,At,he.getState(),O.route);O.event("VALID_VENDOR_SELECTED",{bidId:At}),Al(),n.ok||ft(n.reason,!0);break}case"submitbid":{let n=O.contract;if(n.bids.some(a=>Kt[a.id]===void 0)){ft("\uC138 \uC5C5\uCCB4\uC758 \uC801\uACA9\xB7\uBD80\uC801\uACA9 \uD310\uB2E8\uC744 \uBA3C\uC800 \uD45C\uC2DC\uD574\uC8FC\uC138\uC694.",!0);break}let s=n.bids.find(a=>Kt[a.id]!==ko(n,a).eligible);if(s){he.dispatch({type:"MISTAKE"});let a=ko(n,s);ft(`${s.name}\uC758 \uD310\uBCC4\uC744 \uB2E4\uC2DC \uD655\uC778\uD558\uC138\uC694. ${a.eligible?"\uD544\uC218\uC870\uAC74\uC744 \uBAA8\uB450 \uCDA9\uC871\uD569\uB2C8\uB2E4.":a.failures.join(" \xB7 ")}`,!0),Gn("error");break}let r=O.submitBid(At);r.ok?(Gn("stamp"),nt()):(Gn("error"),ft(r.reason,!0));break}case"delivery":{let n=O.confirmAward();if(!n.ok){ft(n.reason,!0);break}Cl(),Gn("box"),nt(),ft(n.reason);break}case"tab":pt=e.dataset.tab,Wn(),pt==="count"&&O.event("COUNT_TAB"),Rl();break;case"open":he.dispatch({type:"DRAFT",key:O.key,patch:{directChecked:!0}}),Ei.add(e.dataset.id),Gn("box"),zs(),O.event("GOODS_OPENED");break;case"compareitem":Gh();break;case"compareanswer":{if(O.phase!=="inspection"||!O.active)break;let n=O.contract.items[0],s=(O.repaired?n.expected:n.actual)===n.expected;if(e.dataset.match==="yes"!==s){ft("\uACC4\uC57D \uB0B4\uC6A9\uACFC \uC2E4\uC81C \uB0B4\uC6A9\uC744 \uB2E4\uC2DC \uB300\uC870\uD574\uC8FC\uC138\uC694.",!0);break}Ei.add(n.id),he.dispatch({type:"DRAFT",key:O.key,patch:{directChecked:!0}}),Dt(),zs(),ft("\uC9C1\uC811 \uBE44\uAD50\uB97C \uAE30\uB85D\uD588\uC2B5\uB2C8\uB2E4. \uAC80\uC0AC\xB7\uAC80\uC218\uB97C \uB9C8\uCE5C \uB4A4 \uC778\uC218\uD574\uC8FC\uC138\uC694.");break}case"openall":if(O.contract.items.forEach(n=>Ei.add(n.id)),O.repaired)for(let n=1;n<=O.contract.quantity-O.contract.actualCount;n++)Ei.add(`\uCD94\uAC00-${n}`);Gn("box"),zs(),O.event("GOODS_OPENED");break;case"mark":{he.dispatch({type:"DRAFT",key:O.key,patch:{directChecked:!0}});let n=pt==="spec"?at.spec:at.damage,s=e.dataset.id,r=n.indexOf(s);r===-1?n.push(s):n.splice(r,1),pt==="spec"?at.specChecked=!1:at.countChecked=!1,zs();break}case"repair":case"accept":{if(!O.active?.directChecked){Gh();break}let n=O.submitInspection(at,t==="repair"?"repair":"accept");n.ok?(Gn(t==="repair"?"box":"success"),O.phase==="missionResult"&&(Ft?.playUpgrade(O.mission.facility),O.mission.id==="M04"&&Ft?.setNight(!0)),Vs(),O.phase==="request"&&(At="",Kt={}),nt(),ft(n.reason)):(Gn("error"),ft(n.reason,!0));break}case"next":O.next(),Ft?.setNight(zo),nt();break;case"ending":he.getState().ended&&(O.phase="ending",nt());break;case"exit":Ct("\uC758\uB8B0\uB97C \uC7A0\uC2DC \uB2EB\uC744\uAE4C\uC694?",`<p>\uACC4\uC57D\uD55C \uC758\uB8B0\uC758 \uAC1C\uBD09\xB7\uAC80\uC218 \uAE30\uB85D\uACFC \uC608\uC57D\uC561\uC740 \uC720\uC9C0\uB429\uB2C8\uB2E4. \uACC4\uC57D \uD655\uC815 \uC804\uC758 \uC81C\uC548\uC11C \uC120\uD0DD\uC740 \uB2E4\uC2DC \uC9C4\uD589\uD569\uB2C8\uB2E4.</p>${se("closeutility","\uACC4\uC18D \uD655\uC778\uD558\uAE30","primary wide")}${se("confirmexit","\uB3C4\uC2DC\uB85C \uB3CC\uC544\uAC00\uAE30","secondary wide")}`);break;case"confirmexit":Wn(),Dt(),O.town(),nt();break;case"save":{Wn(),wi();let n=new Blob([Uo(O.phase==="title"&&nn?nn:he.getState())],{type:"application/json;charset=utf-8"}),s=URL.createObjectURL(n),r=document.createElement("a");r.href=s,r.download="JodalTown_Save.json",r.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3),ft("\uC2DC\uC98C\uACFC \uC9C4\uD589 \uC911 \uACC4\uC57D \uAE30\uB85D\uC744 \uD30C\uC77C\uB85C \uB0B4\uBCF4\uB0C8\uC2B5\uB2C8\uB2E4.");break}case"import":pe("#save-file").click();break;case"help":Wh();break;case"settings":$h();break;case"closeutility":Dt();break;case"credits":Ct("\uC870\uB2EC\uD0C0\uC6B4 \xB7 \uC81C\uC791 \uC815\uBCF4",`<h3>\uC791\uC740 \uACC4\uC57D, \uB354 \uB098\uC740 \uC77C\uC0C1.</h3><p>\uC0AC\uC6A9\uC790 \uC81C\uACF5 \u300C\uC870\uB2EC\uD0C0\uC6B4 \uAC1C\uBC1C \uBA85\uC138\uC11C v2.0\u300D\uC744 \uBC14\uD0D5\uC73C\uB85C \uC81C\uC791\uD55C \uC624\uD504\uB77C\uC778 \uAD50\uC721\uC6A9 \uAC8C\uC784\uC785\uB2C8\uB2E4. \uC5EC\uC12F \uC2DC\uC124\uACFC \uC5F4\uB450 \uBBF8\uC158, \uC5F4\uC138 \uACC4\uC57D\uC744 \uB2F4\uC558\uC2B5\uB2C8\uB2E4.</p><p>\uCF54\uB4DC\xB7\uC808\uCC28\uC801 3D \uBAA8\uB378\xB7\uD569\uC131 \uD6A8\uACFC\uC74C: OpenAI Codex\uB97C \uD65C\uC6A9\uD574 \uC791\uC131.<br>3D: Three.js (MIT). \uAE00\uAF34: \uAE30\uAE30\uC758 \uC2DC\uC2A4\uD15C \uAE00\uAF34.</p><p>\uC2E4\uC81C \uAE30\uAD00 \uB85C\uACE0\xB7\uC2E4\uC81C \uC5C5\uCCB4\xB7\uC678\uBD80 \uC74C\uC6D0\xB7\uC774\uBBF8\uC9C0\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB77C\uC774\uC120\uC2A4\uB294 \uC2E4\uD589 \uD3F4\uB354\uC758 THIRD_PARTY_LICENSES.txt\uC5D0 \uC218\uB85D\uD588\uC2B5\uB2C8\uB2E4.</p><p>${As}</p><p class="micro">\uBC84\uC804 0.3.2 \xB7 \uBCC4\uB3C4 PC \uAC80\uC99D\uACFC \uC0AC\uC6A9\uC790 \uAD00\uCC30 \uD14C\uC2A4\uD2B8\uB294 \uCD94\uAC00 \uD655\uC778 \uB300\uC0C1\uC785\uB2C8\uB2E4.</p>${se("help","\uD50C\uB808\uC774 \uBC29\uBC95\uACFC \uC815\uCC45 \uCD9C\uCC98","secondary wide")}`);break;case"route":O.route=e.dataset.route,wl();break;case"rotate":he.dispatch({type:"ROTATE"}),nt();break;case"center":Wn(),Fo();break;case"market":Ct("\uB098\uB77C\uC7A5\uD130 \xB7 \uAD6C\uB9E4 \uACBD\uB85C",`<p>\uC694\uCCAD\uC5D0 \uD5C8\uC6A9\uB41C \uACBD\uB85C\uB97C \uD655\uC778\uD558\uC138\uC694.</p>${se("bidcenter","\uACBD\uC7C1\uC785\uCC30 \uACF5\uACE0 \uBCF4\uAE30","primary wide")}${se("shopcenter","\uC885\uD569\uC1FC\uD551\uBAB0 \uB4F1\uB85D\uC0C1\uD488 \uBCF4\uAE30","secondary wide")}`);break;case"bidcenter":Dt(),Fo("BID");break;case"shopcenter":Dt(),Fo("SHOPPING");break;case"innovation":Fo("INNOVATION_TRIAL");break;case"ledger":Wn(),F0();break;case"centerselect":Dt(),jt=e.dataset.id,O.startMission(jt)&&(At="",Kt={},Vs(),nt());break;case"resume":O.resume(e.dataset.key)&&(Cl(),nt());break;case"cancel":{let n=he.dispatch({type:"CANCEL",key:e.dataset.key});nt(),ft(n.reason,!n.ok);break}case"settle":{let n=he.dispatch({type:"SETTLE",year:Number(e.dataset.year)});n.ok?(O.event("YEAR_1_SETTLED"),O.town(),nt(),Lr(he.getState().year)):ft(n.reason,!0);break}case"report":Lr(he.getState().year);break;case"pastreport":Lr(Number(e.dataset.year));break;case"beginyear":{let n=he.dispatch({type:"BEGIN_YEAR",year:Number(e.dataset.year)});n.ok?(Dt(),O.town(),nt(),V0()):ft(n.reason,!0);break}case"finishseason":Dt(),O.phase="ending",nt();break;case"news":Yh();break;case"newsquery":Yh(pe("#news-search").value);break;case"vendorhistory":W0(e.dataset.vendor);break;case"verifynews":$0(e.dataset.vendor);break;case"services":H0();break;case"legacy":sd();break;case"legacydownload":Hs&&Xh(Hs,"JodalTown_Previous_Season.json");break;case"ackrequirements":O.event("REQUIREMENTS_ACKNOWLEDGED"),wl();break;case"tuthelp":Wh();break;case"tutsettings":$h();break;case"tutsave":wi(),Xh(Uo(he.getState()),bn?"JodalTown_Practice.json":"JodalTown_Save.json");break;case"tutprevious":{let n=Ns.findIndex(s=>s.id===he.getState().tutorial.stepId);Hh=Math.max(0,n-1),Ct("\uC774\uC804 \uC124\uBA85 \xB7 \uC9C4\uD589\uC740 \uADF8\uB300\uB85C \uC720\uC9C0",`<p>${Ns[Hh]?.message||"\uC0C8 \uAE30\uB2A5\uC744 \uCC28\uB840\uB85C \uC54C\uC544\uBCF4\uC138\uC694."}</p>${se("closeutility","\uD604\uC7AC \uB2E8\uACC4\uB85C \uB3CC\uC544\uAC00\uAE30","primary wide")}`);break}case"tutskip":td();break;case"confirmskip":he.dispatch({type:"SKIP_TUTORIAL"}),Dt(),nt();break;case"hintdone":Bt&&he.dispatch({type:"HINT_SEEN",id:Bt.id.slice(5)}),Bt=void 0,pe("#utility").children.length&&Dt(),Ho();break;case"replay":z0();break;case"exitreplay":nd();break;case"replayhints":{if(O.phase==="title")break;let n=he.getState();n.tutorial.seenContextHints=[],he.dispatch({type:"RESTORE",state:n}),Dt(),nt();break}case"event":B0();break;case"eventchoice":{let n=he.dispatch({type:"EVENT",choice:Number(e.dataset.choice)});Dt(),nt(),ft(n.reason,!n.ok);break}case"beforeafter":Ws=!Ws,Il(he.getState()),ed();break;case"zoomin":Ft?.setZoom((Ft?.zoom||1)+.1);break;case"zoomout":Ft?.setZoom((Ft?.zoom||1)-.1);break;case"panleft":Ft?.pan(-1,0);break;case"panright":Ft?.pan(1,0);break}wi(),Ho()});document.addEventListener("input",i=>{let e=i.target;if(e.id==="count-input"){at.count=e.value===""?null:Math.max(0,Math.min(100,Math.trunc(Number(e.value)||0))),e.value!==""&&String(at.count)!==e.value&&(e.value=String(at.count)),at.countChecked=!1;let t=document.querySelector("#tab-confirm");t&&(t.checked=!1),Wn()}e.id==="volume"&&(bl(Number(e.value)/100),pe("#mute").checked=Si===0)});document.addEventListener("change",i=>{let e=i.target;e.id==="trial-answer"&&he.dispatch({type:"DRAFT",key:O.key,patch:{trialAnswer:e.value}}),e.id==="count-mismatch"&&(at.countMismatch=e.checked,at.countChecked=!1,zs()),e.id==="tab-confirm"&&(pt==="spec"?at.specChecked=e.checked:at.countChecked=e.checked,zs(),e.checked&&!he.dispatch({type:"TUTORIAL_EVENT",event:pt==="spec"?"SPEC_RECORDED":"COUNT_RECORDED"}).ok&&Us(he.getState())?.target==="inspection"&&ft(pt==="spec"?"\uD2C0\uB9B0 \uADDC\uACA9\uC758 \uBB3C\uD488\uB9CC \uD45C\uC2DC\uD588\uB294\uC9C0 \uB2E4\uC2DC \uD655\uC778\uD574\uC694.":"\uC2E4\uC81C \uC218\uB7C9\uACFC \uC190\uC0C1 \uD45C\uC2DC\uB97C \uB2E4\uC2DC \uD655\uC778\uD574\uC694.",!0),Ho(),wi()),e.id==="mute"&&(bl(e.checked?0:.35),pe("#volume").value=String(Si*100)),e.id==="panbuttons"&&document.documentElement.classList.toggle("show-pan",e.checked),e.id==="night"&&(zo=e.checked,Ft?.setNight(zo)),(e.id==="low"||e.id==="reduced")&&(Ml=pe("#low").checked,Bo=pe("#reduced").checked,document.documentElement.classList.toggle("reduced",Bo),Ft?.setQuality(Ml,Bo))});pe("#save-file").addEventListener("change",async i=>{let e=i.target,t=e.files?.[0];if(t)try{if(t.size>=512*1024)throw Error("512KB \uBBF8\uB9CC\uC758 \uC800\uC7A5 \uD30C\uC77C\uB9CC \uBD88\uB7EC\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4.");let n=await t.text();if([1,2].includes(JSON.parse(n).version)){xl(n),Hs=n,sd();return}let s=vl(n);bn&&nd(),he.dispatch({type:"RESTORE",state:s}),Pl(),pe("#utility").children.length&&Dt(),nt(),s.yearClosed&&!s.ended&&Lr(s.year),ft("\uC800\uC7A5\uD55C \uB3C4\uC2DC \uAE30\uB85D\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4.")}catch(n){ft("\uBD88\uB7EC\uC624\uAE30 \uC2E4\uD328: "+(n instanceof Error?n.message:"\uC62C\uBC14\uB974\uC9C0 \uC54A\uC740 \uD30C\uC77C\uC785\uB2C8\uB2E4."),!0)}finally{e.value=""}});document.addEventListener("keydown",i=>{let e=pe("#utility").children.length>0;if((Us(he.getState())||Bt)&&!e&&O.phase!=="title")return;if(i.key==="Escape"&&e){Dt();return}if(i.key==="Escape"&&!e&&pe("#overlay").children.length){pe("#overlay").querySelector("button[data-action=exit]")?.dispatchEvent(new MouseEvent("click",{bubbles:!0}));return}let t=e?pe("#utility"):pe("#overlay").children.length?pe("#overlay"):null;if(i.key==="Tab"&&t){let n=Array.from(t.querySelectorAll("button:not([disabled]),input,select,a[href]")).filter(a=>a.offsetParent!==null),s=n[0],r=n[n.length-1];i.shiftKey&&(document.activeElement===s||!t.contains(document.activeElement))?(r?.focus(),i.preventDefault()):!i.shiftKey&&(document.activeElement===r||!t.contains(document.activeElement))&&(s?.focus(),i.preventDefault())}});function Il(i){let e=O.phase==="ending"&&Ws?{...i,facilityLevel:i.before,unlocked:["school"],offers:[],activeContracts:[]}:i;Ft?.render(e),Ft?.setStatus(e)}function k0(i){return!!i&&(i.year>1||i.completedIds.length>0||i.activeContracts.length>0||i.tutorial.stepId!=="school")}function qh(){Bt=void 0,O.reset(),Ws=!1,jt="M01",At="",Kt={},Vs(),nt()}function wi(){O.phase!=="title"&&he.dispatch({type:"UI",ui:{phase:O.phase,selected:jt,requestId:O.mission.id,contractIndex:O.contractIndex,route:O.route,chosen:At,classifications:{...Kt}}})}function Pl(){Ws=!1,Bt=void 0,O.restore();let i=he.getState().ui;jt=i.selected,At=i.chosen,Kt={...i.classifications},Cl(),he.getState().ended&&(O.phase="ending")}function Xh(i,e){let t=URL.createObjectURL(new Blob([i],{type:"application/json;charset=utf-8"})),n=document.createElement("a");n.href=t,n.download=e,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}function td(){if(Bt){Ct("\uC0C8 \uAE30\uB2A5 \uC548\uB0B4\uB97C \uBA48\uCDC4\uC5B4\uC694",se("closeutility","\uC548\uB0B4 \uACC4\uC18D \uBCF4\uAE30","primary wide")+se("hintdone","\uC774 \uC548\uB0B4 \uB2EB\uAE30","secondary wide"));return}Ct("\uC548\uB0B4\uB97C \uC7A0\uC2DC \uBA48\uCDC4\uC5B4\uC694",`<p>\uD604\uC7AC \uB2E8\uACC4\uC640 \uAD6C\uB9E4 \uAE30\uB85D\uC744 \uC720\uC9C0\uD569\uB2C8\uB2E4. \uAC74\uB108\uB6F0\uAE30\uB294 \uC548\uB0B4\uB9CC \uB2EB\uACE0 \uD559\uAD50 \uC758\uB8B0\uB294 \uC9C1\uC811 \uC644\uB8CC\uD574\uC57C \uD569\uB2C8\uB2E4.</p>${se("closeutility","\uC774\uC5B4\uC11C \uC548\uB0B4 \uBC1B\uAE30","primary wide")}${se("confirmskip","\uC548\uB0B4 \uAC74\uB108\uB6F0\uAE30 \uD655\uC778","secondary wide")}${bn?se("exitreplay","\uC5F0\uC2B5 \uC885\uB8CC \xB7 \uB0B4 \uB3C4\uC2DC\uB85C","secondary wide"):""}`)}function z0(){if(bn){Dt();return}Wn(),wi(),Vo=O.phase==="title",bn=Vo&&nn?structuredClone(nn):he.getState(),Bt=void 0,Dt(),O.reset(),jt="M01",At="",Kt={},Vs(),nt(),wi()}function nd(){if(!bn)return;let i=bn;Gs.update(),Bt=void 0,pe("#utility").children.length&&Dt(),he.dispatch({type:"RESTORE",state:i}),Pl(),Vo&&(O.phase="title"),Vo=!1,bn=null,nt(),wi(),ft("\uC5F0\uC2B5\uC744 \uC885\uB8CC\uD588\uC2B5\uB2C8\uB2E4. \uC6D0\uB798 \uB3C4\uC2DC \uAE30\uB85D\uC73C\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4.")}function Pr(i,e,t,n){return{id:"hint:"+i,target:e,title:t,message:n,why:"\uC0C8 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uAE30 \uC804\uC5D0 \uD604\uC7AC \uC0C1\uD0DC\uC640 \uACF5\uAC1C\uB41C \uC870\uAC74\uC744 \uD655\uC778\uD558\uC138\uC694.",major:0,actions:[],event:"",next:""}}function Ho(){let i=he.getState(),e=O.phase==="title"||O.phase==="ending"?void 0:Us(i);if(!e&&O.phase!=="title"&&O.phase!=="ending"&&!i.yearClosed&&!pe("#utility").children.length){let t=i.tutorial.seenContextHints;if(!Bt)if(i.year>=2&&!t.includes("annual-budget"))Bt=Pr("annual-budget","budget","\uC0C8\uD574 \uC608\uC0B0\uACFC \uB3D9\uC2DC \uC0AC\uC5C5","\uC5F0\uAC04 \uAE30\uBCF8 \uC608\uC0B0 4,000\uB9CC\uACFC \uC131\uACFC \uBCF4\uC870\uAE08\uC774 \uC0C8\uB85C \uC2B9\uC778\uB410\uC5B4\uC694. \uB3D9\uC2DC\uC5D0 \uB450 \uACC4\uC57D\uC744 \uC9C4\uD589\uD560 \uC218 \uC788\uC5B4\uC694. \uC9C0\uB09C \uD574 \uC794\uC561\uC740 \uC774\uC6D4\uB418\uC9C0 \uC54A\uC544\uC694.");else if(O.phase==="town"&&i.unlocked.some(n=>n!=="school"&&!t.includes("facility-"+n))){let n=i.unlocked.find(s=>s!=="school"&&!t.includes("facility-"+s));Bt=Pr("facility-"+n,n,Zt[n]+" \uAC1C\uBC29","\uC5F0\uB3C4\xB7\uC778\uAD6C \uB610\uB294 \uC644\uB8CC \uC0AC\uC5C5 \uC870\uAC74\uC744 \uCDA9\uC871\uD588\uC5B4\uC694. \uC774 \uC2DC\uC124\uC758 \uC758\uB8B0\uB97C \uD1B5\uD574 \uACF5\uACF5\uC11C\uBE44\uC2A4\uB97C \uAC1C\uC120\uD560 \uC218 \uC788\uC5B4\uC694.")}else i.year>=3&&O.phase==="town"&&!t.includes("news")?Bt=Pr("news","news","\uAE30\uC5C5 \uB274\uC2A4\uAC00 \uB3C4\uCC29\uD588\uC5B4\uC694","\uBAA8\uB450 \uAC00\uC0C1 \uAE30\uC0AC\uC608\uC694. \uC758\uD639\uC740 \uC790\uB3D9 \uD0C8\uB77D \uC0AC\uC720\uAC00 \uC544\uB2C8\uC5D0\uC694. \uACF5\uC2DD \uCC38\uAC00 \uC81C\uD55C\uB3C4 \uC720\uD6A8\uAE30\uAC04\uACFC \uD574\uB2F9 \uAD6C\uB9E4 \uACBD\uB85C\uB97C \uD655\uC778\uD574\uC57C \uD574\uC694."):O.phase==="request"&&O.route!=="BID"&&!t.includes("route-"+O.route)?Bt=Pr("route-"+O.route,"routeinfo",O.route==="SHOPPING"?"\uB4F1\uB85D\uC0C1\uD488 \uC8FC\uBB38":"\uD601\uC2E0\uC81C\uD488 \uC2DC\uBC94\uC0AC\uC6A9",Tr[O.route]):O.phase==="bidReview"&&At&&Fs(i,O.mission.id,O.contractIndex,O.route,At).includes("\uC608\uC0B0")&&!t.includes("budget-short")&&(Bt=Pr("budget-short","submitbid","\uC62C\uD574 \uAC00\uC6A9 \uC608\uC0B0\uC774 \uBD80\uC871\uD574\uC694","\uACC4\uC57D\uC744 \uD655\uC815\uD560 \uC218 \uC5C6\uC5B4\uC694. \uB2E4\uC74C \uD574\uC758 \uC0C8 \uC2B9\uC778 \uC608\uC0B0\uC73C\uB85C \uACC4\uD68D\uD558\uAC70\uB098 \uC2B9\uC778\uB41C \uD569\uC758\uD574\uC81C \uB300\uC0C1\uC774 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694."));e=Bt}if(document.documentElement.classList.toggle("tutorial-school",e?.id==="school"),Gs.update(e),Ft?.setInputMode(!!e),bn&&document.querySelector(".tutorial-guide nav")&&!document.querySelector('[data-action="exitreplay"]')&&document.querySelector(".tutorial-guide nav").insertAdjacentHTML("beforeend",se("exitreplay","\uC5F0\uC2B5 \uC885\uB8CC","text-button")),document.querySelector("#practice-banner")?.remove(),bn&&!e){let t=document.createElement("div");t.id="practice-banner",t.innerHTML="\uD29C\uD1A0\uB9AC\uC5BC \uC5F0\uC2B5 \xB7 \uC2E4\uC81C \uAE30\uB85D\uC740 \uBCF4\uC874\uB429\uB2C8\uB2E4. "+se("exitreplay","\uC5F0\uC2B5 \uC885\uB8CC"),document.body.append(t)}}function Lr(i){let e=he.getState(),t=e.annualHistory.find(n=>n.year===i);t&&Ct(`YEAR ${i} \uC5F0\uB9D0 \uACB0\uC0B0`,`<div class="annual-hero"><span>\uB3C4\uC2DC \uC778\uAD6C</span><h3>${t.populationBefore} \u2192 ${t.populationAfter}\uBA85</h3><strong>${t.populationAfter-t.populationBefore>=0?"+":""}${t.populationAfter-t.populationBefore}\uBA85</strong></div><h3>\uC778\uAD6C \uBCC0\uD654\uC758 \uC774\uC720</h3>${t.reasons.map(n=>`<p class="report-row"><span>${xn(n.label)}</span><b>${n.value>=0?"+":""}${n.value}\uBA85</b></p>`).join("")}<p class="micro">\uAC8C\uC784\uC6A9 \uC0B0\uC2DD: \uAE30\uBCF8 \uC815\uCC29 1% + \uC11C\uBE44\uC2A4 \uD6A8\uACFC, \uC131\uC7A5\uB960 \xB16% \uC81C\uD55C, \uBBF8\uD574\uACB0 \uD488\uC9C8\xB7\uD544\uC218 \uC11C\uBE44\uC2A4 \uBD80\uC871 \uCC28\uAC10. \uCD5C\uC885 \uBCC0\uD654 \xB18%, \uCD5C\uC18C 100\uBA85.</p><h3>\uC608\uC0B0\uACFC \uC0AC\uC5C5</h3><p>\uC2B9\uC778 ${je(t.approved)}\uB9CC \xB7 \uC62C\uD574 \uC9C0\uAE09 ${je(t.paid)}\uB9CC<br>\uBBF8\uC9D1\uD589 \uC57D\uC815 ${je(t.reserved)}\uB9CC \xB7 \uBBF8\uC0AC\uC6A9 \uB9CC\uB8CC ${je(t.unused)}\uB9CC</p><p>\uC778\uC218 ${t.completed.length}\uAC74 \xB7 \uC9C4\uD589 ${t.ongoing.length}\uAC74 \xB7 \uC9C0\uC5F0 ${t.delayed.length}\uAC74</p>${t.commitments.map(n=>`<p>${xn(n.key)}: ${je(n.amount)}\uB9CC \xB7 \uC7AC\uC6D0 YEAR ${n.fundingYear} \xB7 \uB0A9\uD488 YEAR ${n.dueYear}</p>`).join("")}<p><b>\uC0C8 \uC2DC\uC124</b> ${t.unlocked.map(n=>Zt[n]).join(" \xB7 ")||"\uC774\uBC88 \uACB0\uC0B0\uC758 \uCD94\uAC00 \uAC1C\uBC29 \uC5C6\uC74C"}</p>${t.year===e.year&&e.yearClosed?e.ended?se("finishseason","10\uB144 \uB3C4\uC2DC \uC131\uC801\uD45C","primary wide"):se("beginyear",`YEAR ${e.year+1} \uC2DC\uC791`,"primary wide",`data-year="${e.year}"`):se("closeutility","\uB2EB\uAE30","primary wide")}`)}function V0(){let i=he.getState(),e=i.accounts[i.year-1];Ct(`YEAR ${i.year} \xB7 \uC62C\uD574\uC758 \uC0AC\uC5C5 \uACC4\uD68D`,`<h3>\uC0C8 \uC2B9\uC778 \uC608\uC0B0 ${je(e.approved)}\uB9CC</h3><p>\uAE30\uBCF8 4,000\uB9CC + \uC131\uACFC \uBCF4\uC870\uAE08 ${je(e.subsidy)}\uB9CC<br>\uBCF4\uC870\uAE08: \uC644\uB8CC \uC0AC\uC5C5\uB2F9 100\uB9CC + \uC778\uAD6C 500\uBA85 \uCD08\uACFC 100\uBA85\uB2F9 100\uB9CC, \uCD5C\uB300 1,000\uB9CC.</p><p>\uC9C0\uB09C \uC5F0\uB3C4 \uC57D\uC815 ${je(i.budget.outstandingCommitments)}\uB9CC\uC740 \uC6D0\uB798 \uC7AC\uC6D0\uC5D0\uC11C \uC9C0\uAE09\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC740 \uC794\uC561\uC740 \uC774\uC6D4\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p><p>\uD604\uC7AC \uC778\uAD6C ${i.population}\uBA85 \xB7 \uAC1C\uBC29 \uC2DC\uC124 ${i.unlocked.length}/6</p>${i.pendingEvent?se("event","\uC62C\uD574 \uC0AC\uAC74 \uD655\uC778","primary wide"):se("closeutility","\uB3C4\uC2DC\uB85C","primary wide")}`)}function H0(){let i=he.getState(),e=i.annualHistory[i.annualHistory.length-1],t=i.yearClosed&&e?{population:i.population,serviceScore:e.serviceScore,qualityDebt:e.qualityDebt,reasons:e.reasons}:Ir(i);Ct("\uB3C4\uC2DC \uC11C\uBE44\uC2A4 \xB7 \uC778\uAD6C \uC804\uB9DD",`<h3>\uC11C\uBE44\uC2A4 ${t.serviceScore}\uC810 \xB7 ${i.yearClosed?"\uD655\uC815":"\uC608\uC0C1"} \uC5F0\uB9D0 \uC778\uAD6C ${t.population}\uBA85</h3><p>${i.yearClosed?"\uC774\uBBF8 \uD655\uC815\uB41C \uC62C\uD574 \uACB0\uC0B0\uC785\uB2C8\uB2E4.":"\uD604\uC7AC \uC0C1\uD0DC\uB97C \uC720\uC9C0\uD588\uC744 \uB54C\uC758 \uAC8C\uC784\uC6A9 \uC804\uB9DD\uC785\uB2C8\uB2E4. \uC778\uC218\xB7\uBCF4\uC644 \uACB0\uACFC\uC5D0 \uB530\uB77C \uBC14\uB01D\uB2C8\uB2E4."}</p>${t.reasons.map(n=>`<p>${n.label}: ${n.value>=0?"+":""}${n.value}\uBA85</p>`).join("")}<p>\uBBF8\uD574\uACB0 \uD488\uC9C8 ${t.qualityDebt}\uAC74 \xB7 \uACF5\uC815 \uC2E0\uB8B0 ${i.trust}</p>${Object.entries(i.services).map(([n,s])=>`<p>${{education:"\uAD50\uC721",safety:"\uC548\uC804",health:"\uAC74\uAC15",life:"\uC0DD\uD65C",environment:"\uD658\uACBD"}[n]} ${s}/100</p>`).join("")}`)}function G0(i,e){let t=he.getState(),n=zn(i,e),s=t.vendorHistory[n],r=To(t,n,O.route);return`<p class="vendor-facts">\uC774\uC804 \uB0A9\uD488 ${s.deliveries}\uAC74 / \uC815\uC2DC ${s.onTime}\uAC74 / \uBCF4\uC644 ${s.repairs}\uAC74<br>${r?"\uD574\uB2F9 \uACBD\uB85C \uACF5\uC2DD \uC81C\uD55C: YEAR "+r.fromYear+"\u2013"+r.throughYear:"\uD604\uC7AC \uACBD\uB85C \uACF5\uC2DD \uCC38\uAC00 \uC81C\uD55C \uC5C6\uC74C"}</p>${se("vendorhistory","\uC774\uB825\xB7\uADFC\uAC70 \uC5F4\uAE30","text-button",`data-vendor="${n}"`)}`}var id={RUMOR:"\uC758\uD639 \xB7 \uD655\uC778 \uC911",VERIFIED_PERFORMANCE:"\uD655\uC778\uB41C \uC2E4\uC801",CONFIRMED_DEFECT:"\uD655\uC778\uB41C \uD558\uC790",OFFICIAL_RESTRICTION:"\uACF5\uC2DD \uCC38\uAC00 \uC81C\uD55C"};function Yh(i=""){let e=he.getState(),t=e.newsHistory.filter(n=>(n.title+" "+vn[n.vendorId].name+" "+n.year).includes(i));Ct("\uC870\uB2EC\uD0C0\uC6B4 \uB274\uC2A4 \xB7 \uBAA8\uB450 \uAC00\uC0C1 \uAE30\uC0AC",`<p>YEAR 3\uBD80\uD130 \uC5F0\uAC04 1\u20132\uAC74. \uAE30\uC0AC\uB098 \uB0A9\uD488 \uC774\uB825\uC740 \uACF5\uACE0 \uBC16\uC758 \uC784\uC758 \uAC00\uC810\xB7\uAC10\uC810\uC73C\uB85C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p><label for="news-search">\uD68C\uC0AC\xB7\uC81C\uBAA9\xB7\uC5F0\uB3C4 \uAC80\uC0C9</label><div class="news-search"><input id="news-search" value="${xn(i)}">${se("newsquery","\uAC80\uC0C9")}</div>${[...t].reverse().map(n=>`<article class="news-card"><span class="tag">YEAR ${n.year} \xB7 ${id[n.status]}</span><h3>${xn(n.title)}</h3><p>${xn(n.text)}</p><p>\uAE30\uC5C5 ${vn[n.vendorId].name} \xB7 ${n.vendorId}<br>\uCD9C\uCC98: ${xn(n.source)}<br>\uAD00\uB828 \uACC4\uC57D ${n.contractKeys.join(", ")||"\uC774 \uB3C4\uC2DC\uC758 \uC5F0\uACB0 \uACC4\uC57D \uC5C6\uC74C"}</p>${n.status==="OFFICIAL_RESTRICTION"?`<p>\uC720\uD6A8 YEAR ${n.fromYear}\u2013${n.throughYear} \xB7 ${(n.routes||[]).join(", ")}</p>`:""}${se("vendorhistory","\uAE30\uC5C5 \uC774\uB825\xB7\uADFC\uAC70","secondary",`data-vendor="${n.vendorId}"`)}${n.status==="RUMOR"?se("verifynews","\uACF5\uC2DD \uADFC\uAC70 \uC870\uD68C","secondary",`data-vendor="${n.vendorId}"`):""}</article>`).join("")||"<p>\uD45C\uC2DC\uD560 \uAE30\uC0AC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</p>"}`)}function W0(i){let e=he.getState(),t=vn[i];if(!t)return;let n=e.vendorHistory[i];Ct(t.name+" \xB7 \uAC00\uC0C1 \uACF5\uAE09\uC5C5\uCCB4",`<p>${i} \xB7 \uB0A9\uD488 ${n.deliveries}\uAC74 / \uC815\uC2DC ${n.onTime}\uAC74 / \uD558\uC790 \uBCF4\uC644 ${n.repairs}\uAC74</p><p>\uACC4\uC57D ${n.contracts.join(", ")||"\uC5C6\uC74C"}</p><p>\uD655\uC778\uB41C \uC774\uB825\uC740 \uCC38\uACE0 \uC815\uBCF4\uC774\uBA70, \uACF5\uAC1C\uB41C \uC120\uC815 \uAE30\uC900 \uBC16\uC5D0\uC11C \uAC00\uC810\xB7\uAC10\uC810\uC744 \uBD80\uC5EC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p>${e.newsHistory.filter(s=>s.vendorId===i).map(s=>`<p><b>YEAR ${s.year} \xB7 ${id[s.status]}</b><br>${xn(s.text)}<br>\uCD9C\uCC98: ${xn(s.source)}</p>`).join("")||"<p>\uAD00\uB828 \uAE30\uC0AC \uC5C6\uC74C</p>"}${se("verifynews","\uD604\uC7AC \uACF5\uC2DD \uC81C\uD55C \uC870\uD68C","secondary wide",`data-vendor="${i}"`)}`)}function $0(i){let e=he.getState(),t=To(e,i,O.route);Ct("\uACF5\uC2DD \uADFC\uAC70 \uB300\uC870 \xB7 \uAC00\uC0C1 \uC790\uB8CC",`<p>\uC870\uD68C \uC5F0\uB3C4 YEAR ${e.year} \xB7 \uACBD\uB85C ${bi[O.route]}</p><p><b>${t?`\uD574\uB2F9 \uACBD\uB85C\uC5D0 YEAR ${t.fromYear}\u2013${t.throughYear} \uACF5\uC2DD \uCC38\uAC00 \uC81C\uD55C \uC801\uC6A9`:"\uD604\uC7AC \uC774 \uACBD\uB85C\uC5D0 \uC801\uC6A9\uB418\uB294 \uACF5\uC2DD \uCC38\uAC00 \uC81C\uD55C \uC5C6\uC74C"}</b></p><p>\uBBF8\uD655\uC778 \uC758\uD639\uC740 \uC801\uACA9\uC131 \uD310\uC815\uC774\uB098 \uACF5\uC815 \uC2E0\uB8B0\uB97C \uBC14\uAFB8\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD544\uC218 \uADDC\uACA9\uACFC \uACF5\uACE0\uB41C \uCC38\uAC00 \uC870\uAC74\uC744 \uBCC4\uB3C4\uB85C \uAC80\uC99D\uD558\uC138\uC694.</p>${se("news","\uC804\uCCB4 \uAE30\uC0AC\uB85C \uB3CC\uC544\uAC00\uAE30","primary wide")}`)}function sd(){if(!Hs){ft("\uC9C0\uB09C \uC2DC\uC98C \uAE30\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");return}try{let i=xl(Hs),e=i.state;Ct("\uC9C0\uB09C \uC2DC\uC98C \uAE30\uB85D \xB7 \uC77D\uAE30 \uC804\uC6A9",`<p>\uC800\uC7A5 \uBC84\uC804 ${i.version} \xB7 \uC644\uB8CC \uC0AC\uC5C5 ${e.completedIds.length}\uAC74 \xB7 \uC9C4\uD589 \uACC4\uC57D ${e.activeContracts.length}\uAC74</p><p>\uAE30\uC874 \uC608\uC0B0 \uC2B9\uC778 ${je(e.budget.approved)}\uB9CC / \uC9D1\uD589 ${je(e.budget.spent)}\uB9CC / \uC608\uC57D ${je(e.budget.reserved)}\uB9CC</p><p>\uC77C \uB2E8\uC704 \uACC4\uC57D\uC744 \uC5F0\uB3C4 \uB2E8\uC704\uB85C \uC784\uC758 \uBCC0\uD658\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC6D0\uB798 \uC790\uB3D9\uC800\uC7A5 \uD0A4\uB294 \uBCF4\uC874\uB429\uB2C8\uB2E4.</p>${se("legacydownload","\uC6D0\uBCF8 \uAE30\uB85D \uB2E4\uC6B4\uB85C\uB4DC","secondary wide")}${se("new","\uC0C8 \uC5F0\uAC04 \uC2DC\uC98C \uC2DC\uC791","primary wide")}`)}catch{ft("\uC774\uC804 \uAE30\uB85D\uC744 \uC77D\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC6D0\uBCF8 \uD30C\uC77C\uC740 \uADF8\uB300\uB85C \uBCF4\uC874\uB429\uB2C8\uB2E4.",!0)}}nt();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

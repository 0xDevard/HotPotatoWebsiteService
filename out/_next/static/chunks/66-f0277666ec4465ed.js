(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66],{66033:function(e,t){"use strict";t.byteLength=function(e){var t=l(e),r=t[0],i=t[1];return(r+i)*3/4-i},t.toByteArray=function(e){var t,r,o=l(e),a=o[0],s=o[1],c=new n((a+s)*3/4-s),u=0,d=s>0?a-4:a;for(r=0;r<d;r+=4)t=i[e.charCodeAt(r)]<<18|i[e.charCodeAt(r+1)]<<12|i[e.charCodeAt(r+2)]<<6|i[e.charCodeAt(r+3)],c[u++]=t>>16&255,c[u++]=t>>8&255,c[u++]=255&t;return 2===s&&(t=i[e.charCodeAt(r)]<<2|i[e.charCodeAt(r+1)]>>4,c[u++]=255&t),1===s&&(t=i[e.charCodeAt(r)]<<10|i[e.charCodeAt(r+1)]<<4|i[e.charCodeAt(r+2)]>>2,c[u++]=t>>8&255,c[u++]=255&t),c},t.fromByteArray=function(e){for(var t,i=e.length,n=i%3,o=[],a=0,s=i-n;a<s;a+=16383)o.push(function(e,t,i){for(var n,o=[],a=t;a<i;a+=3)o.push(r[(n=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]))>>18&63]+r[n>>12&63]+r[n>>6&63]+r[63&n]);return o.join("")}(e,a,a+16383>s?s:a+16383));return 1===n?o.push(r[(t=e[i-1])>>2]+r[t<<4&63]+"=="):2===n&&o.push(r[(t=(e[i-2]<<8)+e[i-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),o.join("")};for(var r=[],i=[],n="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,s=o.length;a<s;++a)r[a]=o[a],i[o.charCodeAt(a)]=a;function l(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var i=r===t?0:4-r%4;return[r,i]}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},23663:function(e,t,r){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */let i=r(66033),n=r(61531),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function a(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,s.prototype),t}function s(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return u(e)}return l(e,t,r)}function l(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!s.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|f(e,t),i=a(r),n=i.write(e,t);return n!==r&&(i=i.slice(0,n)),i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(D(e,Uint8Array)){let t=new Uint8Array(e);return h(t.buffer,t.byteOffset,t.byteLength)}return d(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(D(e,ArrayBuffer)||e&&D(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(D(e,SharedArrayBuffer)||e&&D(e.buffer,SharedArrayBuffer)))return h(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return s.from(i,t,r);let n=function(e){var t;if(s.isBuffer(e)){let t=0|p(e.length),r=a(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?a(0):d(e):"Buffer"===e.type&&Array.isArray(e.data)?d(e.data):void 0}(e);if(n)return n;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return s.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function c(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function u(e){return c(e),a(e<0?0:0|p(e))}function d(e){let t=e.length<0?0:0|p(e.length),r=a(t);for(let i=0;i<t;i+=1)r[i]=255&e[i];return r}function h(e,t,r){let i;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(i=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),s.prototype),i}function p(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function f(e,t){if(s.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||D(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===r)return 0;let n=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return N(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return j(e).length;default:if(n)return i?-1:N(e).length;t=(""+t).toLowerCase(),n=!0}}function g(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let i=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>i)&&(r=i);let n="";for(let i=t;i<r;++i)n+=B[e[i]];return n}(this,t,r);case"utf8":case"utf-8":return v(this,t,r);case"ascii":return function(e,t,r){let i="";r=Math.min(e.length,r);for(let n=t;n<r;++n)i+=String.fromCharCode(127&e[n]);return i}(this,t,r);case"latin1":case"binary":return function(e,t,r){let i="";r=Math.min(e.length,r);for(let n=t;n<r;++n)i+=String.fromCharCode(e[n]);return i}(this,t,r);case"base64":var o,a;return o=t,a=r,0===o&&a===this.length?i.fromByteArray(this):i.fromByteArray(this.slice(o,a));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let i=e.slice(t,r),n="";for(let e=0;e<i.length-1;e+=2)n+=String.fromCharCode(i[e]+256*i[e+1]);return n}(this,t,r);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function w(e,t,r){let i=e[t];e[t]=e[r],e[r]=i}function m(e,t,r,i,n){var o;if(0===e.length)return -1;if("string"==typeof r?(i=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(o=r=+r)!=o&&(r=n?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(n)return -1;r=e.length-1}else if(r<0){if(!n)return -1;r=0}if("string"==typeof t&&(t=s.from(t,i)),s.isBuffer(t))return 0===t.length?-1:b(e,t,r,i,n);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?n?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):b(e,[t],r,i,n);throw TypeError("val must be string, number or Buffer")}function b(e,t,r,i,n){let o,a=1,s=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return -1;a=2,s/=2,l/=2,r/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(n){let i=-1;for(o=r;o<s;o++)if(c(e,o)===c(t,-1===i?0:o-i)){if(-1===i&&(i=o),o-i+1===l)return i*a}else -1!==i&&(o-=o-i),i=-1}else for(r+l>s&&(r=s-l),o=r;o>=0;o--){let r=!0;for(let i=0;i<l;i++)if(c(e,o+i)!==c(t,i)){r=!1;break}if(r)return o}return -1}function v(e,t,r){r=Math.min(e.length,r);let i=[],n=t;for(;n<r;){let t=e[n],o=null,a=t>239?4:t>223?3:t>191?2:1;if(n+a<=r){let r,i,s,l;switch(a){case 1:t<128&&(o=t);break;case 2:(192&(r=e[n+1]))==128&&(l=(31&t)<<6|63&r)>127&&(o=l);break;case 3:r=e[n+1],i=e[n+2],(192&r)==128&&(192&i)==128&&(l=(15&t)<<12|(63&r)<<6|63&i)>2047&&(l<55296||l>57343)&&(o=l);break;case 4:r=e[n+1],i=e[n+2],s=e[n+3],(192&r)==128&&(192&i)==128&&(192&s)==128&&(l=(15&t)<<18|(63&r)<<12|(63&i)<<6|63&s)>65535&&l<1114112&&(o=l)}}null===o?(o=65533,a=1):o>65535&&(o-=65536,i.push(o>>>10&1023|55296),o=56320|1023&o),i.push(o),n+=a}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let r="",i=0;for(;i<t;)r+=String.fromCharCode.apply(String,e.slice(i,i+=4096));return r}(i)}function y(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function C(e,t,r,i,n,o){if(!s.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>n||t<o)throw RangeError('"value" argument is out of bounds');if(r+i>e.length)throw RangeError("Index out of range")}function x(e,t,r,i,n){T(t,i,n,e,r,7);let o=Number(t&BigInt(4294967295));e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,r}function E(e,t,r,i,n){T(t,i,n,e,r,7);let o=Number(t&BigInt(4294967295));e[r+7]=o,o>>=8,e[r+6]=o,o>>=8,e[r+5]=o,o>>=8,e[r+4]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=a,a>>=8,e[r+2]=a,a>>=8,e[r+1]=a,a>>=8,e[r]=a,r+8}function k(e,t,r,i,n,o){if(r+i>e.length||r<0)throw RangeError("Index out of range")}function _(e,t,r,i,o){return t=+t,r>>>=0,o||k(e,t,r,4,34028234663852886e22,-34028234663852886e22),n.write(e,t,r,i,23,4),r+4}function A(e,t,r,i,o){return t=+t,r>>>=0,o||k(e,t,r,8,17976931348623157e292,-17976931348623157e292),n.write(e,t,r,i,52,8),r+8}t.Buffer=s,t.SlowBuffer=function(e){return+e!=e&&(e=0),s.alloc(+e)},t.INSPECT_MAX_BYTES=50,t.kMaxLength=2147483647,s.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),s.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}}),s.poolSize=8192,s.from=function(e,t,r){return l(e,t,r)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array),s.alloc=function(e,t,r){return(c(e),e<=0)?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)},s.allocUnsafe=function(e){return u(e)},s.allocUnsafeSlow=function(e){return u(e)},s.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==s.prototype},s.compare=function(e,t){if(D(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),D(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(e)||!s.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,i=t.length;for(let n=0,o=Math.min(r,i);n<o;++n)if(e[n]!==t[n]){r=e[n],i=t[n];break}return r<i?-1:i<r?1:0},s.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return s.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let i=s.allocUnsafe(t),n=0;for(r=0;r<e.length;++r){let t=e[r];if(D(t,Uint8Array))n+t.length>i.length?(s.isBuffer(t)||(t=s.from(t)),t.copy(i,n)):Uint8Array.prototype.set.call(i,t,n);else if(s.isBuffer(t))t.copy(i,n);else throw TypeError('"list" argument must be an Array of Buffers');n+=t.length}return i},s.byteLength=f,s.prototype._isBuffer=!0,s.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)w(this,t,t+1);return this},s.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)w(this,t,t+3),w(this,t+1,t+2);return this},s.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)w(this,t,t+7),w(this,t+1,t+6),w(this,t+2,t+5),w(this,t+3,t+4);return this},s.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?v(this,0,e):g.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(e){if(!s.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===s.compare(this,e)},s.prototype.inspect=function(){let e="",r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},o&&(s.prototype[o]=s.prototype.inspect),s.prototype.compare=function(e,t,r,i,n){if(D(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===i&&(i=0),void 0===n&&(n=this.length),t<0||r>e.length||i<0||n>this.length)throw RangeError("out of range index");if(i>=n&&t>=r)return 0;if(i>=n)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,i>>>=0,n>>>=0,this===e)return 0;let o=n-i,a=r-t,l=Math.min(o,a),c=this.slice(i,n),u=e.slice(t,r);for(let e=0;e<l;++e)if(c[e]!==u[e]){o=c[e],a=u[e];break}return o<a?-1:a<o?1:0},s.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},s.prototype.indexOf=function(e,t,r){return m(this,e,t,r,!0)},s.prototype.lastIndexOf=function(e,t,r){return m(this,e,t,r,!1)},s.prototype.write=function(e,t,r,i){var n,o,a,s,l,c,u,d;if(void 0===t)i="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)i=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===i&&(i="utf8")):(i=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let h=this.length-t;if((void 0===r||r>h)&&(r=h),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let p=!1;for(;;)switch(i){case"hex":return function(e,t,r,i){let n;r=Number(r)||0;let o=e.length-r;i?(i=Number(i))>o&&(i=o):i=o;let a=t.length;for(i>a/2&&(i=a/2),n=0;n<i;++n){let i=parseInt(t.substr(2*n,2),16);if(i!=i)break;e[r+n]=i}return n}(this,e,t,r);case"utf8":case"utf-8":return n=t,o=r,M(N(e,this.length-n),this,n,o);case"ascii":case"latin1":case"binary":return a=t,s=r,M(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,a,s);case"base64":return l=t,c=r,M(j(e),this,l,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,d=r,M(function(e,t){let r,i;let n=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)i=(r=e.charCodeAt(o))>>8,n.push(r%256),n.push(i);return n}(e,this.length-u),this,u,d);default:if(p)throw TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),p=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},s.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let i=this.subarray(e,t);return Object.setPrototypeOf(i,s.prototype),i},s.prototype.readUintLE=s.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||y(e,t,this.length);let i=this[e],n=1,o=0;for(;++o<t&&(n*=256);)i+=this[e+o]*n;return i},s.prototype.readUintBE=s.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||y(e,t,this.length);let i=this[e+--t],n=1;for(;t>0&&(n*=256);)i+=this[e+--t]*n;return i},s.prototype.readUint8=s.prototype.readUInt8=function(e,t){return e>>>=0,t||y(e,1,this.length),this[e]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(e,t){return e>>>=0,t||y(e,2,this.length),this[e]|this[e+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(e,t){return e>>>=0,t||y(e,2,this.length),this[e]<<8|this[e+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(e,t){return e>>>=0,t||y(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(e,t){return e>>>=0,t||y(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},s.prototype.readBigUInt64LE=L(function(e){P(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&O(e,this.length-8);let i=t+256*this[++e]+65536*this[++e]+16777216*this[++e],n=this[++e]+256*this[++e]+65536*this[++e]+16777216*r;return BigInt(i)+(BigInt(n)<<BigInt(32))}),s.prototype.readBigUInt64BE=L(function(e){P(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&O(e,this.length-8);let i=16777216*t+65536*this[++e]+256*this[++e]+this[++e],n=16777216*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(i)<<BigInt(32))+BigInt(n)}),s.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||y(e,t,this.length);let i=this[e],n=1,o=0;for(;++o<t&&(n*=256);)i+=this[e+o]*n;return i>=(n*=128)&&(i-=Math.pow(2,8*t)),i},s.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||y(e,t,this.length);let i=t,n=1,o=this[e+--i];for(;i>0&&(n*=256);)o+=this[e+--i]*n;return o>=(n*=128)&&(o-=Math.pow(2,8*t)),o},s.prototype.readInt8=function(e,t){return(e>>>=0,t||y(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},s.prototype.readInt16LE=function(e,t){e>>>=0,t||y(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(e,t){e>>>=0,t||y(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(e,t){return e>>>=0,t||y(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},s.prototype.readInt32BE=function(e,t){return e>>>=0,t||y(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},s.prototype.readBigInt64LE=L(function(e){P(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&O(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),s.prototype.readBigInt64BE=L(function(e){P(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&O(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+r)}),s.prototype.readFloatLE=function(e,t){return e>>>=0,t||y(e,4,this.length),n.read(this,e,!0,23,4)},s.prototype.readFloatBE=function(e,t){return e>>>=0,t||y(e,4,this.length),n.read(this,e,!1,23,4)},s.prototype.readDoubleLE=function(e,t){return e>>>=0,t||y(e,8,this.length),n.read(this,e,!0,52,8)},s.prototype.readDoubleBE=function(e,t){return e>>>=0,t||y(e,8,this.length),n.read(this,e,!1,52,8)},s.prototype.writeUintLE=s.prototype.writeUIntLE=function(e,t,r,i){if(e=+e,t>>>=0,r>>>=0,!i){let i=Math.pow(2,8*r)-1;C(this,e,t,r,i,0)}let n=1,o=0;for(this[t]=255&e;++o<r&&(n*=256);)this[t+o]=e/n&255;return t+r},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(e,t,r,i){if(e=+e,t>>>=0,r>>>=0,!i){let i=Math.pow(2,8*r)-1;C(this,e,t,r,i,0)}let n=r-1,o=1;for(this[t+n]=255&e;--n>=0&&(o*=256);)this[t+n]=e/o&255;return t+r},s.prototype.writeUint8=s.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,1,255,0),this[t]=255&e,t+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeBigUInt64LE=L(function(e,t=0){return x(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeBigUInt64BE=L(function(e,t=0){return E(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeIntLE=function(e,t,r,i){if(e=+e,t>>>=0,!i){let i=Math.pow(2,8*r-1);C(this,e,t,r,i-1,-i)}let n=0,o=1,a=0;for(this[t]=255&e;++n<r&&(o*=256);)e<0&&0===a&&0!==this[t+n-1]&&(a=1),this[t+n]=(e/o>>0)-a&255;return t+r},s.prototype.writeIntBE=function(e,t,r,i){if(e=+e,t>>>=0,!i){let i=Math.pow(2,8*r-1);C(this,e,t,r,i-1,-i)}let n=r-1,o=1,a=0;for(this[t+n]=255&e;--n>=0&&(o*=256);)e<0&&0===a&&0!==this[t+n+1]&&(a=1),this[t+n]=(e/o>>0)-a&255;return t+r},s.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},s.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},s.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeBigInt64LE=L(function(e,t=0){return x(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeBigInt64BE=L(function(e,t=0){return E(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeFloatLE=function(e,t,r){return _(this,e,t,!0,r)},s.prototype.writeFloatBE=function(e,t,r){return _(this,e,t,!1,r)},s.prototype.writeDoubleLE=function(e,t,r){return A(this,e,t,!0,r)},s.prototype.writeDoubleBE=function(e,t,r){return A(this,e,t,!1,r)},s.prototype.copy=function(e,t,r,i){if(!s.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<r&&(i=r),i===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(i<0)throw RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-r&&(i=e.length-t+r);let n=i-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,i):Uint8Array.prototype.set.call(e,this.subarray(r,i),t),n},s.prototype.fill=function(e,t,r,i){let n;if("string"==typeof e){if("string"==typeof t?(i=t,t=0,r=this.length):"string"==typeof r&&(i=r,r=this.length),void 0!==i&&"string"!=typeof i)throw TypeError("encoding must be a string");if("string"==typeof i&&!s.isEncoding(i))throw TypeError("Unknown encoding: "+i);if(1===e.length){let t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(n=t;n<r;++n)this[n]=e;else{let o=s.isBuffer(e)?e:s.from(e,i),a=o.length;if(0===a)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(n=0;n<r-t;++n)this[n+t]=o[n%a]}return this};let S={};function R(e,t,r){S[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function $(e){let t="",r=e.length,i="-"===e[0]?1:0;for(;r>=i+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function T(e,t,r,i,n,o){if(e>r||e<t){let i;let n="bigint"==typeof t?"n":"";throw i=o>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${(o+1)*8}${n}`:`>= -(2${n} ** ${(o+1)*8-1}${n}) and < 2 ** ${(o+1)*8-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new S.ERR_OUT_OF_RANGE("value",i,e)}P(n,"offset"),(void 0===i[n]||void 0===i[n+o])&&O(n,i.length-(o+1))}function P(e,t){if("number"!=typeof e)throw new S.ERR_INVALID_ARG_TYPE(t,"number",e)}function O(e,t,r){if(Math.floor(e)!==e)throw P(e,r),new S.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new S.ERR_BUFFER_OUT_OF_BOUNDS;throw new S.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}R("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),R("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),R("ERR_OUT_OF_RANGE",function(e,t,r){let i=`The value of "${e}" is out of range.`,n=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?n=$(String(r)):"bigint"==typeof r&&(n=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(n=$(n)),n+="n"),i+=` It must be ${t}. Received ${n}`},RangeError);let I=/[^+/0-9A-Za-z-_]/g;function N(e,t){let r;t=t||1/0;let i=e.length,n=null,o=[];for(let a=0;a<i;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!n){if(r>56319||a+1===i){(t-=3)>-1&&o.push(239,191,189);continue}n=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),n=r;continue}r=(n-55296<<10|r-56320)+65536}else n&&(t-=3)>-1&&o.push(239,191,189);if(n=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function j(e){return i.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(I,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function M(e,t,r,i){let n;for(n=0;n<i&&!(n+r>=t.length)&&!(n>=e.length);++n)t[n+r]=e[n];return n}function D(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}let B=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let i=16*r;for(let n=0;n<16;++n)t[i+n]=e[r]+e[n]}return t}();function L(e){return"undefined"==typeof BigInt?U:e}function U(){throw Error("BigInt not supported")}},89539:function(e){var t,r,i,n,o,a,s,l,c,u,d,h,p,f,g,w,m,b,v,y,C,x;e.exports=(t="millisecond",r="second",i="minute",n="hour",o="week",a="month",s="quarter",l="year",c="date",u="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p=function(e,t,r){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(r)+e},(g={})[f="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}},w="$isDayjsObject",m=function(e){return e instanceof C||!(!e||!e[w])},b=function e(t,r,i){var n;if(!t)return f;if("string"==typeof t){var o=t.toLowerCase();g[o]&&(n=o),r&&(g[o]=r,n=o);var a=t.split("-");if(!n&&a.length>1)return e(a[0])}else{var s=t.name;g[s]=t,n=s}return!i&&n&&(f=n),n||!i&&f},v=function(e,t){if(m(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new C(r)},(y={s:p,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+p(Math.floor(r/60),2,"0")+":"+p(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var i=12*(r.year()-t.year())+(r.month()-t.month()),n=t.clone().add(i,a),o=r-n<0,s=t.clone().add(i+(o?-1:1),a);return+(-(i+(r-n)/(o?n-s:s-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:a,y:l,w:o,d:"day",D:c,h:n,m:i,s:r,ms:t,Q:s})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=b,y.i=m,y.w=function(e,t){return v(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},x=(C=function(){function e(e){this.$L=b(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var p=e.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(d);if(i){var n=i[2]-1||0,o=(i[7]||"0").substring(0,3);return r?new Date(Date.UTC(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)):new Date(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)}}return new Date(t)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return y},p.isValid=function(){return this.$d.toString()!==u},p.isSame=function(e,t){var r=v(e);return this.startOf(t)<=r&&r<=this.endOf(t)},p.isAfter=function(e,t){return v(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<v(e)},p.$g=function(e,t,r){return y.u(e)?this[t]:this.set(r,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,t){var s=this,u=!!y.u(t)||t,d=y.p(e),h=function(e,t){var r=y.w(s.$u?Date.UTC(s.$y,t,e):new Date(s.$y,t,e),s);return u?r:r.endOf("day")},p=function(e,t){return y.w(s.toDate()[e].apply(s.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),s)},f=this.$W,g=this.$M,w=this.$D,m="set"+(this.$u?"UTC":"");switch(d){case l:return u?h(1,0):h(31,11);case a:return u?h(1,g):h(0,g+1);case o:var b=this.$locale().weekStart||0,v=(f<b?f+7:f)-b;return h(u?w-v:w+(6-v),g);case"day":case c:return p(m+"Hours",0);case n:return p(m+"Minutes",1);case i:return p(m+"Seconds",2);case r:return p(m+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,o){var s,u=y.p(e),d="set"+(this.$u?"UTC":""),h=((s={}).day=d+"Date",s[c]=d+"Date",s[a]=d+"Month",s[l]=d+"FullYear",s[n]=d+"Hours",s[i]=d+"Minutes",s[r]=d+"Seconds",s[t]=d+"Milliseconds",s)[u],p="day"===u?this.$D+(o-this.$W):o;if(u===a||u===l){var f=this.clone().set(c,1);f.$d[h](p),f.init(),this.$d=f.set(c,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[y.p(e)]()},p.add=function(e,t){var s,c=this;e=Number(e);var u=y.p(t),d=function(t){var r=v(c);return y.w(r.date(r.date()+Math.round(t*e)),c)};if(u===a)return this.set(a,this.$M+e);if(u===l)return this.set(l,this.$y+e);if("day"===u)return d(1);if(u===o)return d(7);var h=((s={})[i]=6e4,s[n]=36e5,s[r]=1e3,s)[u]||1,p=this.$d.getTime()+e*h;return y.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||u;var i=e||"YYYY-MM-DDTHH:mm:ssZ",n=y.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,p=function(e,r,n,o){return e&&(e[r]||e(t,i))||n[r].slice(0,o)},f=function(e){return y.s(o%12||12,e,"0")},g=d||function(e,t,r){var i=e<12?"AM":"PM";return r?i.toLowerCase():i};return i.replace(h,function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return y.s(t.$y,4,"0");case"M":return s+1;case"MM":return y.s(s+1,2,"0");case"MMM":return p(r.monthsShort,s,c,3);case"MMMM":return p(c,s);case"D":return t.$D;case"DD":return y.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return p(r.weekdaysMin,t.$W,l,2);case"ddd":return p(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return y.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(o,a,!0);case"A":return g(o,a,!1);case"m":return String(a);case"mm":return y.s(a,2,"0");case"s":return String(t.$s);case"ss":return y.s(t.$s,2,"0");case"SSS":return y.s(t.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")})},p.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},p.diff=function(e,t,c){var u,d=this,h=y.p(t),p=v(e),f=(p.utcOffset()-this.utcOffset())*6e4,g=this-p,w=function(){return y.m(d,p)};switch(h){case l:u=w()/12;break;case a:u=w();break;case s:u=w()/3;break;case o:u=(g-f)/6048e5;break;case"day":u=(g-f)/864e5;break;case n:u=g/36e5;break;case i:u=g/6e4;break;case r:u=g/1e3;break;default:u=g}return c?u:y.a(u)},p.daysInMonth=function(){return this.endOf(a).$D},p.$locale=function(){return g[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),i=b(e,t,!0);return i&&(r.$L=i),r},p.clone=function(){return y.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},e}()).prototype,v.prototype=x,[["$ms",t],["$s",r],["$m",i],["$H",n],["$W","day"],["$M",a],["$y",l],["$D",c]].forEach(function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),v.extend=function(e,t){return e.$i||(e(t,C,v),e.$i=!0),v},v.locale=b,v.isDayjs=m,v.unix=function(e){return v(1e3*e)},v.en=g[f],v.Ls=g,v.p={},v)},65058:function(e){e.exports=function(e,t,r){e=e||{};var i=t.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(e,t,r,n){return i.fromToBase(e,t,r,n)}r.en.relativeTime=n,i.fromToBase=function(t,i,o,a,s){for(var l,c,u,d=o.$locale().relativeTime||n,h=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=h.length,f=0;f<p;f+=1){var g=h[f];g.d&&(l=a?r(t).diff(o,g.d,!0):o.diff(t,g.d,!0));var w=(e.rounding||Math.round)(Math.abs(l));if(u=l>0,w<=g.r||!g.r){w<=1&&f>0&&(g=h[f-1]);var m=d[g.l];s&&(w=s(""+w)),c="string"==typeof m?m.replace("%d",w):m(w,i,g.l,u);break}}if(i)return c;var b=u?d.future:d.past;return"function"==typeof b?b(c):b.replace("%s",c)},i.to=function(e,t){return o(e,t,this,!0)},i.from=function(e,t){return o(e,t,this)};var a=function(e){return e.$u?r.utc():r()};i.toNow=function(e){return this.to(a(this),e)},i.fromNow=function(e){return this.from(a(this),e)}}},16856:function(e){e.exports=function(e,t,r){r.updateLocale=function(e,t){var i=r.Ls[e];if(i)return(t?Object.keys(t):[]).forEach(function(e){i[e]=t[e]}),i}}},43369:function(e){"use strict";var t={single_source_shortest_paths:function(e,r,i){var n,o,a,s,l,c,u,d={},h={};h[r]=0;var p=t.PriorityQueue.make();for(p.push(r,0);!p.empty();)for(a in o=(n=p.pop()).value,s=n.cost,l=e[o]||{})l.hasOwnProperty(a)&&(c=s+l[a],u=h[a],(void 0===h[a]||u>c)&&(h[a]=c,p.push(a,c),d[a]=o));if(void 0!==i&&void 0===h[i])throw Error(["Could not find a path from ",r," to ",i,"."].join(""));return d},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],i=t;i;)r.push(i),e[i],i=e[i];return r.reverse(),r},find_path:function(e,r,i){var n=t.single_source_shortest_paths(e,r,i);return t.extract_shortest_path_from_predecessor_list(n,i)},PriorityQueue:{make:function(e){var r,i=t.PriorityQueue,n={};for(r in e=e||{},i)i.hasOwnProperty(r)&&(n[r]=i[r]);return n.queue=[],n.sorter=e.sorter||i.default_sorter,n},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},66056:function(e){"use strict";e.exports=function(e){for(var t=[],r=e.length,i=0;i<r;i++){var n=e.charCodeAt(i);if(n>=55296&&n<=56319&&r>i+1){var o=e.charCodeAt(i+1);o>=56320&&o<=57343&&(n=(n-55296)*1024+o-56320+65536,i+=1)}if(n<128){t.push(n);continue}if(n<2048){t.push(n>>6|192),t.push(63&n|128);continue}if(n<55296||n>=57344&&n<65536){t.push(n>>12|224),t.push(n>>6&63|128),t.push(63&n|128);continue}if(n>=65536&&n<=1114111){t.push(n>>18|240),t.push(n>>12&63|128),t.push(n>>6&63|128),t.push(63&n|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer}},32614:function(e){"use strict";var t=Object.prototype.hasOwnProperty,r="~";function i(){}function n(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function o(e,t,i,o,a){if("function"!=typeof i)throw TypeError("The listener must be a function");var s=new n(i,o||e,a),l=r?r+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],s]:e._events[l].push(s):(e._events[l]=s,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new i:delete e._events[t]}function s(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(r=!1)),s.prototype.eventNames=function(){var e,i,n=[];if(0===this._eventsCount)return n;for(i in e=this._events)t.call(e,i)&&n.push(r?i.slice(1):i);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},s.prototype.listeners=function(e){var t=r?r+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var n=0,o=i.length,a=Array(o);n<o;n++)a[n]=i[n].fn;return a},s.prototype.listenerCount=function(e){var t=r?r+e:e,i=this._events[t];return i?i.fn?1:i.length:0},s.prototype.emit=function(e,t,i,n,o,a){var s=r?r+e:e;if(!this._events[s])return!1;var l,c,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,i),!0;case 4:return u.fn.call(u.context,t,i,n),!0;case 5:return u.fn.call(u.context,t,i,n,o),!0;case 6:return u.fn.call(u.context,t,i,n,o,a),!0}for(c=1,l=Array(d-1);c<d;c++)l[c-1]=arguments[c];u.fn.apply(u.context,l)}else{var h,p=u.length;for(c=0;c<p;c++)switch(u[c].once&&this.removeListener(e,u[c].fn,void 0,!0),d){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,t);break;case 3:u[c].fn.call(u[c].context,t,i);break;case 4:u[c].fn.call(u[c].context,t,i,n);break;default:if(!l)for(h=1,l=Array(d-1);h<d;h++)l[h-1]=arguments[h];u[c].fn.apply(u[c].context,l)}}return!0},s.prototype.on=function(e,t,r){return o(this,e,t,r,!1)},s.prototype.once=function(e,t,r){return o(this,e,t,r,!0)},s.prototype.removeListener=function(e,t,i,n){var o=r?r+e:e;if(!this._events[o])return this;if(!t)return a(this,o),this;var s=this._events[o];if(s.fn)s.fn!==t||n&&!s.once||i&&s.context!==i||a(this,o);else{for(var l=0,c=[],u=s.length;l<u;l++)(s[l].fn!==t||n&&!s[l].once||i&&s[l].context!==i)&&c.push(s[l]);c.length?this._events[o]=1===c.length?c[0]:c:a(this,o)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&a(this,t)):(this._events=new i,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=r,s.EventEmitter=s,e.exports=s},61531:function(e,t){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */t.read=function(e,t,r,i,n){var o,a,s=8*n-i-1,l=(1<<s)-1,c=l>>1,u=-7,d=r?n-1:0,h=r?-1:1,p=e[t+d];for(d+=h,o=p&(1<<-u)-1,p>>=-u,u+=s;u>0;o=256*o+e[t+d],d+=h,u-=8);for(a=o&(1<<-u)-1,o>>=-u,u+=i;u>0;a=256*a+e[t+d],d+=h,u-=8);if(0===o)o=1-c;else{if(o===l)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,i),o-=c}return(p?-1:1)*a*Math.pow(2,o-i)},t.write=function(e,t,r,i,n,o){var a,s,l,c=8*o-n-1,u=(1<<c)-1,d=u>>1,h=23===n?5960464477539062e-23:0,p=i?0:o-1,f=i?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(s=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+d>=1?t+=h/l:t+=h*Math.pow(2,1-d),t*l>=2&&(a++,l/=2),a+d>=u?(s=0,a=u):a+d>=1?(s=(t*l-1)*Math.pow(2,n),a+=d):(s=t*Math.pow(2,d-1)*Math.pow(2,n),a=0));n>=8;e[r+p]=255&s,p+=f,s/=256,n-=8);for(a=a<<n|s,c+=n;c>0;e[r+p]=255&a,p+=f,a/=256,c-=8);e[r+p-f]|=128*g}},49079:function(e,t,r){"use strict";var i,n;e.exports=(null==(i=r.g.process)?void 0:i.env)&&"object"==typeof(null==(n=r.g.process)?void 0:n.env)?r.g.process:r(13127)},13127:function(e){!function(){var t={229:function(e){var t,r,i,n=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l=[],c=!1,u=-1;function d(){c&&i&&(c=!1,i.length?l=i.concat(l):u=-1,l.length&&h())}function h(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(i=l,l=[];++u<t;)i&&i[u].run();u=-1,t=l.length}i=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}n.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||c||s(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=f,n.addListener=f,n.once=f,n.off=f,n.removeListener=f,n.removeAllListeners=f,n.emit=f,n.prependListener=f,n.prependOnceListener=f,n.listeners=function(e){return[]},n.binding=function(e){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function i(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}},a=!0;try{t[e](o,o.exports,i),a=!1}finally{a&&delete r[e]}return o.exports}i.ab="//";var n=i(229);e.exports=n}()},52644:function(e,t,r){let i=r(74613),n=r(34185),o=r(95059),a=r(13782);function s(e,t,r,o,a){let s=[].slice.call(arguments,1),l=s.length,c="function"==typeof s[l-1];if(!c&&!i())throw Error("Callback required as last argument");if(c){if(l<2)throw Error("Too few arguments provided");2===l?(a=r,r=t,t=o=void 0):3===l&&(t.getContext&&void 0===a?(a=o,o=void 0):(a=o,o=r,r=t,t=void 0))}else{if(l<1)throw Error("Too few arguments provided");return 1===l?(r=t,t=o=void 0):2!==l||t.getContext||(o=r,r=t,t=void 0),new Promise(function(i,a){try{let a=n.create(r,o);i(e(a,t,o))}catch(e){a(e)}})}try{let i=n.create(r,o);a(null,e(i,t,o))}catch(e){a(e)}}t.create=n.create,t.toCanvas=s.bind(null,o.render),t.toDataURL=s.bind(null,o.renderToDataURL),t.toString=s.bind(null,function(e,t,r){return a.render(e,r)})},74613:function(e){e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},78466:function(e,t,r){let i=r(20236).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,r=i(e),n=145===r?26:2*Math.ceil((r-13)/(2*t-2)),o=[r-7];for(let e=1;e<t-1;e++)o[e]=o[e-1]-n;return o.push(6),o.reverse()},t.getPositions=function(e){let r=[],i=t.getRowColCoords(e),n=i.length;for(let e=0;e<n;e++)for(let t=0;t<n;t++)(0!==e||0!==t)&&(0!==e||t!==n-1)&&(e!==n-1||0!==t)&&r.push([i[e],i[t]]);return r}},67215:function(e,t,r){let i=r(68891),n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(e){this.mode=i.ALPHANUMERIC,this.data=e}o.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*n.indexOf(this.data[t]);r+=n.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(n.indexOf(this.data[t]),6)},e.exports=o},8886:function(e){function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){return(this.buffer[Math.floor(e/8)]>>>7-e%8&1)==1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},54113:function(e){function t(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,r,i){let n=e*this.size+t;this.data[n]=r,i&&(this.reservedBit[n]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},85678:function(e,t,r){let i=r(66056),n=r(68891);function o(e){this.mode=n.BYTE,"string"==typeof e&&(e=i(e)),this.data=new Uint8Array(e)}o.getBitsLength=function(e){return 8*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},e.exports=o},52257:function(e,t,r){let i=r(97883),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case i.L:return n[(e-1)*4+0];case i.M:return n[(e-1)*4+1];case i.Q:return n[(e-1)*4+2];case i.H:return n[(e-1)*4+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case i.L:return o[(e-1)*4+0];case i.M:return o[(e-1)*4+1];case i.Q:return o[(e-1)*4+2];case i.H:return o[(e-1)*4+3];default:return}}},97883:function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}(e)}catch(e){return r}}},64449:function(e,t,r){let i=r(20236).getSymbolSize;t.getPositions=function(e){let t=i(e);return[[0,0],[t-7,0],[0,t-7]]}},24103:function(e,t,r){let i=r(20236),n=i.getBCHDigit(1335);t.getEncodedBits=function(e,t){let r=e.bit<<3|t,o=r<<10;for(;i.getBCHDigit(o)-n>=0;)o^=1335<<i.getBCHDigit(o)-n;return(r<<10|o)^21522}},10120:function(e,t){let r=new Uint8Array(512),i=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)r[t]=e,i[e]=t,256&(e<<=1)&&(e^=285);for(let e=255;e<512;e++)r[e]=r[e-255]}(),t.log=function(e){if(e<1)throw Error("log("+e+")");return i[e]},t.exp=function(e){return r[e]},t.mul=function(e,t){return 0===e||0===t?0:r[i[e]+i[t]]}},68522:function(e,t,r){let i=r(68891),n=r(20236);function o(e){this.mode=i.KANJI,this.data=e}o.getBitsLength=function(e){return 13*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=n.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r=(r>>>8&255)*192+(255&r),e.put(r,13)}},e.exports=o},47684:function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let r={N1:3,N2:3,N3:40,N4:10};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){let t=e.size,i=0,n=0,o=0,a=null,s=null;for(let l=0;l<t;l++){n=o=0,a=s=null;for(let c=0;c<t;c++){let t=e.get(l,c);t===a?n++:(n>=5&&(i+=r.N1+(n-5)),a=t,n=1),(t=e.get(c,l))===s?o++:(o>=5&&(i+=r.N1+(o-5)),s=t,o=1)}n>=5&&(i+=r.N1+(n-5)),o>=5&&(i+=r.N1+(o-5))}return i},t.getPenaltyN2=function(e){let t=e.size,i=0;for(let r=0;r<t-1;r++)for(let n=0;n<t-1;n++){let t=e.get(r,n)+e.get(r,n+1)+e.get(r+1,n)+e.get(r+1,n+1);(4===t||0===t)&&i++}return i*r.N2},t.getPenaltyN3=function(e){let t=e.size,i=0,n=0,o=0;for(let r=0;r<t;r++){n=o=0;for(let a=0;a<t;a++)n=n<<1&2047|e.get(r,a),a>=10&&(1488===n||93===n)&&i++,o=o<<1&2047|e.get(a,r),a>=10&&(1488===o||93===o)&&i++}return i*r.N3},t.getPenaltyN4=function(e){let t=0,i=e.data.length;for(let r=0;r<i;r++)t+=e.data[r];return Math.abs(Math.ceil(100*t/i/5)-10)*r.N4},t.applyMask=function(e,r){let i=r.size;for(let n=0;n<i;n++)for(let o=0;o<i;o++)r.isReserved(o,n)||r.xor(o,n,function(e,r,i){switch(e){case t.Patterns.PATTERN000:return(r+i)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return i%3==0;case t.Patterns.PATTERN011:return(r+i)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(i/3))%2==0;case t.Patterns.PATTERN101:return r*i%2+r*i%3==0;case t.Patterns.PATTERN110:return(r*i%2+r*i%3)%2==0;case t.Patterns.PATTERN111:return(r*i%3+(r+i)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,o,n))},t.getBestMask=function(e,r){let i=Object.keys(t.Patterns).length,n=0,o=1/0;for(let a=0;a<i;a++){r(a),t.applyMask(a,e);let i=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),i<o&&(o=i,n=a)}return n}},68891:function(e,t,r){let i=r(57858),n=r(72118);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!i.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return n.testNumeric(e)?t.NUMERIC:n.testAlphanumeric(e)?t.ALPHANUMERIC:n.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}(e)}catch(e){return r}}},57249:function(e,t,r){let i=r(68891);function n(e){this.mode=i.NUMERIC,this.data=e.toString()}n.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t,r;for(t=0;t+3<=this.data.length;t+=3)r=parseInt(this.data.substr(t,3),10),e.put(r,10);let i=this.data.length-t;i>0&&(r=parseInt(this.data.substr(t),10),e.put(r,3*i+1))},e.exports=n},35043:function(e,t,r){let i=r(10120);t.mul=function(e,t){let r=new Uint8Array(e.length+t.length-1);for(let n=0;n<e.length;n++)for(let o=0;o<t.length;o++)r[n+o]^=i.mul(e[n],t[o]);return r},t.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){let e=r[0];for(let n=0;n<t.length;n++)r[n]^=i.mul(t[n],e);let n=0;for(;n<r.length&&0===r[n];)n++;r=r.slice(n)}return r},t.generateECPolynomial=function(e){let r=new Uint8Array([1]);for(let n=0;n<e;n++)r=t.mul(r,new Uint8Array([1,i.exp(n)]));return r}},34185:function(e,t,r){let i=r(20236),n=r(97883),o=r(8886),a=r(54113),s=r(78466),l=r(64449),c=r(47684),u=r(52257),d=r(74598),h=r(87579),p=r(24103),f=r(68891),g=r(75896);function w(e,t,r){let i,n;let o=e.size,a=p.getEncodedBits(t,r);for(i=0;i<15;i++)n=(a>>i&1)==1,i<6?e.set(i,8,n,!0):i<8?e.set(i+1,8,n,!0):e.set(o-15+i,8,n,!0),i<8?e.set(8,o-i-1,n,!0):i<9?e.set(8,15-i-1+1,n,!0):e.set(8,15-i-1,n,!0);e.set(o-8,8,1,!0)}t.create=function(e,t){let r,p;if(void 0===e||""===e)throw Error("No input text");let m=n.M;return void 0!==t&&(m=n.from(t.errorCorrectionLevel,n.M),r=h.from(t.version),p=c.from(t.maskPattern),t.toSJISFunc&&i.setToSJISFunction(t.toSJISFunc)),function(e,t,r,n){let p;if(Array.isArray(e))p=g.fromArray(e);else if("string"==typeof e){let i=t;if(!i){let t=g.rawSplit(e);i=h.getBestVersionForData(t,r)}p=g.fromString(e,i||40)}else throw Error("Invalid data");let m=h.getBestVersionForData(p,r);if(!m)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<m)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+m+".\n")}else t=m;let b=function(e,t,r){let n=new o;r.forEach(function(t){n.put(t.mode.bit,4),n.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(n)});let a=(i.getSymbolTotalCodewords(e)-u.getTotalCodewordsCount(e,t))*8;for(n.getLengthInBits()+4<=a&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);let s=(a-n.getLengthInBits())/8;for(let e=0;e<s;e++)n.put(e%2?17:236,8);return function(e,t,r){let n,o;let a=i.getSymbolTotalCodewords(t),s=a-u.getTotalCodewordsCount(t,r),l=u.getBlocksCount(t,r),c=a%l,h=l-c,p=Math.floor(a/l),f=Math.floor(s/l),g=f+1,w=p-f,m=new d(w),b=0,v=Array(l),y=Array(l),C=0,x=new Uint8Array(e.buffer);for(let e=0;e<l;e++){let t=e<h?f:g;v[e]=x.slice(b,b+t),y[e]=m.encode(v[e]),b+=t,C=Math.max(C,t)}let E=new Uint8Array(a),k=0;for(n=0;n<C;n++)for(o=0;o<l;o++)n<v[o].length&&(E[k++]=v[o][n]);for(n=0;n<w;n++)for(o=0;o<l;o++)E[k++]=y[o][n];return E}(n,e,t)}(t,r,p),v=new a(i.getSymbolSize(t));return function(e,t){let r=e.size,i=l.getPositions(t);for(let t=0;t<i.length;t++){let n=i[t][0],o=i[t][1];for(let t=-1;t<=7;t++)if(!(n+t<=-1)&&!(r<=n+t))for(let i=-1;i<=7;i++)o+i<=-1||r<=o+i||(t>=0&&t<=6&&(0===i||6===i)||i>=0&&i<=6&&(0===t||6===t)||t>=2&&t<=4&&i>=2&&i<=4?e.set(n+t,o+i,!0,!0):e.set(n+t,o+i,!1,!0))}}(v,t),function(e){let t=e.size;for(let r=8;r<t-8;r++){let t=r%2==0;e.set(r,6,t,!0),e.set(6,r,t,!0)}}(v),function(e,t){let r=s.getPositions(t);for(let t=0;t<r.length;t++){let i=r[t][0],n=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(i+t,n+r,!0,!0):e.set(i+t,n+r,!1,!0)}}(v,t),w(v,r,0),t>=7&&function(e,t){let r,i,n;let o=e.size,a=h.getEncodedBits(t);for(let t=0;t<18;t++)r=Math.floor(t/3),i=t%3+o-8-3,n=(a>>t&1)==1,e.set(r,i,n,!0),e.set(i,r,n,!0)}(v,t),function(e,t){let r=e.size,i=-1,n=r-1,o=7,a=0;for(let s=r-1;s>0;s-=2)for(6===s&&s--;;){for(let r=0;r<2;r++)if(!e.isReserved(n,s-r)){let i=!1;a<t.length&&(i=(t[a]>>>o&1)==1),e.set(n,s-r,i),-1==--o&&(a++,o=7)}if((n+=i)<0||r<=n){n-=i,i=-i;break}}}(v,b),isNaN(n)&&(n=c.getBestMask(v,w.bind(null,v,r))),c.applyMask(n,v),w(v,r,n),{modules:v,version:t,errorCorrectionLevel:r,maskPattern:n,segments:p}}(e,r,m,p)}},74598:function(e,t,r){let i=r(35043);function n(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}n.prototype.initialize=function(e){this.degree=e,this.genPoly=i.generateECPolynomial(this.degree)},n.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let r=i.mod(t,this.genPoly),n=this.degree-r.length;if(n>0){let e=new Uint8Array(this.degree);return e.set(r,n),e}return r},e.exports=n},72118:function(e,t){let r="[0-9]+",i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",n="(?:(?![A-Z0-9 $%*+\\-./:]|"+(i=i.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";t.KANJI=RegExp(i,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(n,"g"),t.NUMERIC=RegExp(r,"g"),t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let o=RegExp("^"+i+"$"),a=RegExp("^"+r+"$"),s=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return o.test(e)},t.testNumeric=function(e){return a.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},75896:function(e,t,r){let i=r(68891),n=r(57249),o=r(67215),a=r(85678),s=r(68522),l=r(72118),c=r(20236),u=r(43369);function d(e){return unescape(encodeURIComponent(e)).length}function h(e,t,r){let i;let n=[];for(;null!==(i=e.exec(r));)n.push({data:i[0],index:i.index,mode:t,length:i[0].length});return n}function p(e){let t,r;let n=h(l.NUMERIC,i.NUMERIC,e),o=h(l.ALPHANUMERIC,i.ALPHANUMERIC,e);return c.isKanjiModeEnabled()?(t=h(l.BYTE,i.BYTE,e),r=h(l.KANJI,i.KANJI,e)):(t=h(l.BYTE_KANJI,i.BYTE,e),r=[]),n.concat(o,t,r).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function f(e,t){switch(t){case i.NUMERIC:return n.getBitsLength(e);case i.ALPHANUMERIC:return o.getBitsLength(e);case i.KANJI:return s.getBitsLength(e);case i.BYTE:return a.getBitsLength(e)}}function g(e,t){let r;let l=i.getBestModeForData(e);if((r=i.from(t,l))!==i.BYTE&&r.bit<l.bit)throw Error('"'+e+'" cannot be encoded with mode '+i.toString(r)+".\n Suggested mode is: "+i.toString(l));switch(r!==i.KANJI||c.isKanjiModeEnabled()||(r=i.BYTE),r){case i.NUMERIC:return new n(e);case i.ALPHANUMERIC:return new o(e);case i.KANJI:return new s(e);case i.BYTE:return new a(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},t.fromString=function(e,r){let n=function(e,t){let r={},n={start:{}},o=["start"];for(let a=0;a<e.length;a++){let s=e[a],l=[];for(let e=0;e<s.length;e++){let c=s[e],u=""+a+e;l.push(u),r[u]={node:c,lastCount:0},n[u]={};for(let e=0;e<o.length;e++){let a=o[e];r[a]&&r[a].node.mode===c.mode?(n[a][u]=f(r[a].lastCount+c.length,c.mode)-f(r[a].lastCount,c.mode),r[a].lastCount+=c.length):(r[a]&&(r[a].lastCount=c.length),n[a][u]=f(c.length,c.mode)+4+i.getCharCountIndicator(c.mode,t))}}o=l}for(let e=0;e<o.length;e++)n[o[e]].end=0;return{map:n,table:r}}(function(e){let t=[];for(let r=0;r<e.length;r++){let n=e[r];switch(n.mode){case i.NUMERIC:t.push([n,{data:n.data,mode:i.ALPHANUMERIC,length:n.length},{data:n.data,mode:i.BYTE,length:n.length}]);break;case i.ALPHANUMERIC:t.push([n,{data:n.data,mode:i.BYTE,length:n.length}]);break;case i.KANJI:t.push([n,{data:n.data,mode:i.BYTE,length:d(n.data)}]);break;case i.BYTE:t.push([{data:n.data,mode:i.BYTE,length:d(n.data)}])}}return t}(p(e,c.isKanjiModeEnabled())),r),o=u.find_path(n.map,"start","end"),a=[];for(let e=1;e<o.length-1;e++)a.push(n.table[o[e]].node);return t.fromArray(a.reduce(function(e,t){let r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},t.rawSplit=function(e){return t.fromArray(p(e,c.isKanjiModeEnabled()))}},20236:function(e,t){let r;let i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return i[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');r=e},t.isKanjiModeEnabled=function(){return void 0!==r},t.toSJIS=function(e){return r(e)}},57858:function(e,t){t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},87579:function(e,t,r){let i=r(20236),n=r(52257),o=r(97883),a=r(68891),s=r(57858),l=i.getBCHDigit(7973);function c(e,t){return a.getCharCountIndicator(e,t)+4}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!s.isValid(e))throw Error("Invalid QR Code version");void 0===r&&(r=a.BYTE);let o=(i.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,t))*8;if(r===a.MIXED)return o;let l=o-c(r,e);switch(r){case a.NUMERIC:return Math.floor(l/10*3);case a.ALPHANUMERIC:return Math.floor(l/11*2);case a.KANJI:return Math.floor(l/13);case a.BYTE:default:return Math.floor(l/8)}},t.getBestVersionForData=function(e,r){let i;let n=o.from(r,o.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(let i=1;i<=40;i++)if(function(e,t){let r=0;return e.forEach(function(e){let i=c(e.mode,t);r+=i+e.getBitsLength()}),r}(e,i)<=t.getCapacity(i,r,a.MIXED))return i}(e,n);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,r,i){for(let n=1;n<=40;n++)if(r<=t.getCapacity(n,i,e))return n}(i.mode,i.getLength(),n)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;i.getBCHDigit(t)-l>=0;)t^=7973<<i.getBCHDigit(t)-l;return e<<12|t}},95059:function(e,t,r){let i=r(82007);t.render=function(e,t,r){var n;let o=r,a=t;void 0!==o||t&&t.getContext||(o=t,t=void 0),t||(a=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),o=i.getOptions(o);let s=i.getImageWidth(e.modules.size,o),l=a.getContext("2d"),c=l.createImageData(s,s);return i.qrToImageData(c.data,e,o),n=a,l.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px",l.putImageData(c,0,0),a},t.renderToDataURL=function(e,r,i){let n=i;void 0!==n||r&&r.getContext||(n=r,r=void 0),n||(n={});let o=t.render(e,r,n),a=n.type||"image/png",s=n.rendererOpts||{};return o.toDataURL(a,s.quality)}},13782:function(e,t,r){let i=r(82007);function n(e,t){let r=e.a/255,i=t+'="'+e.hex+'"';return r<1?i+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':i}function o(e,t,r){let i=e+t;return void 0!==r&&(i+=" "+r),i}t.render=function(e,t,r){let a=i.getOptions(t),s=e.modules.size,l=e.modules.data,c=s+2*a.margin,u=a.color.light.a?"<path "+n(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",d="<path "+n(a.color.dark,"stroke")+' d="'+function(e,t,r){let i="",n=0,a=!1,s=0;for(let l=0;l<e.length;l++){let c=Math.floor(l%t),u=Math.floor(l/t);c||a||(a=!0),e[l]?(s++,l>0&&c>0&&e[l-1]||(i+=a?o("M",c+r,.5+u+r):o("m",n,0),n=0,a=!1),c+1<t&&e[l+1]||(i+=o("h",s),s=0)):n++}return i}(l,s,a.margin)+'"/>',h='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+('viewBox="0 0 '+c)+" "+c+'" shape-rendering="crispEdges">'+u+d+"</svg>\n";return"function"==typeof r&&r(null,h),h}},82007:function(e,t){function r(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,i=e.width&&e.width>=21?e.width:void 0,n=e.scale||4;return{width:i,scale:i?4:n,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,r){let i=t.getScale(e,r);return Math.floor((e+2*r.margin)*i)},t.qrToImageData=function(e,r,i){let n=r.modules.size,o=r.modules.data,a=t.getScale(n,i),s=Math.floor((n+2*i.margin)*a),l=i.margin*a,c=[i.color.light,i.color.dark];for(let t=0;t<s;t++)for(let r=0;r<s;r++){let u=(t*s+r)*4,d=i.color.light;t>=l&&r>=l&&t<s-l&&r<s-l&&(d=c[o[Math.floor((t-l)/a)*n+Math.floor((r-l)/a)]?1:0]),e[u++]=d.r,e[u++]=d.g,e[u++]=d.b,e[u]=d.a}}},79555:function(e,t,r){"use strict";r.d(t,{j:function(){return o}});var i=r(44614),n=r(46063),o=new class extends i.l{#e;#t;#r;constructor(){super(),this.#r=e=>{if(!n.sk&&window.addEventListener){let t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}}}onSubscribe(){this.#t||this.setEventListener(this.#r)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#r=e,this.#t?.(),this.#t=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){this.#e!==e&&(this.#e=e,this.onFocus())}onFocus(){let e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){return"boolean"==typeof this.#e?this.#e:globalThis.document?.visibilityState!=="hidden"}}},45139:function(e,t,r){"use strict";r.d(t,{V:function(){return i}});var i=function(){let e=[],t=0,r=e=>{e()},i=e=>{e()},n=e=>setTimeout(e,0),o=i=>{t?e.push(i):n(()=>{r(i)})},a=()=>{let t=e;e=[],t.length&&n(()=>{i(()=>{t.forEach(e=>{r(e)})})})};return{batch:e=>{let r;t++;try{r=e()}finally{--t||a()}return r},batchCalls:e=>(...t)=>{o(()=>{e(...t)})},schedule:o,setNotifyFunction:e=>{r=e},setBatchNotifyFunction:e=>{i=e},setScheduler:e=>{n=e}}}()},17211:function(e,t,r){"use strict";r.d(t,{N:function(){return o}});var i=r(44614),n=r(46063),o=new class extends i.l{#i=!0;#t;#r;constructor(){super(),this.#r=e=>{if(!n.sk&&window.addEventListener){let t=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",r)}}}}onSubscribe(){this.#t||this.setEventListener(this.#r)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#r=e,this.#t?.(),this.#t=e(this.setOnline.bind(this))}setOnline(e){this.#i!==e&&(this.#i=e,this.listeners.forEach(t=>{t(e)}))}isOnline(){return this.#i}}},4668:function(e,t,r){"use strict";r.d(t,{A:function(){return s},z:function(){return l}});var i=r(46063),n=r(45139),o=r(90326),a=r(2041),s=class extends a.F{#n;#o;#a;#s;#l;#c;#u;constructor(e){super(),this.#u=!1,this.#c=e.defaultOptions,this.setOptions(e.options),this.#l=[],this.#a=e.cache,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#n=e.state||function(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,r=void 0!==t,i=r?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=this.#n,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.#c,...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.#l.length||"idle"!==this.state.fetchStatus||this.#a.remove(this)}setData(e,t){let r=(0,i.oE)(this.state.data,e,this.options);return this.#d({data:r,type:"success",dataUpdatedAt:t?.updatedAt,manual:t?.manual}),r}setState(e,t){this.#d({type:"setState",state:e,setStateOptions:t})}cancel(e){let t=this.#s?.promise;return this.#s?.cancel(e),t?t.then(i.ZT).catch(i.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#n)}isActive(){return this.#l.some(e=>!1!==e.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.#l.some(e=>e.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(e=0){return this.state.isInvalidated||void 0===this.state.data||!(0,i.Kp)(this.state.dataUpdatedAt,e)}onFocus(){let e=this.#l.find(e=>e.shouldFetchOnWindowFocus());e?.refetch({cancelRefetch:!1}),this.#s?.continue()}onOnline(){let e=this.#l.find(e=>e.shouldFetchOnReconnect());e?.refetch({cancelRefetch:!1}),this.#s?.continue()}addObserver(e){this.#l.includes(e)||(this.#l.push(e),this.clearGcTimeout(),this.#a.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.#l.includes(e)&&(this.#l=this.#l.filter(t=>t!==e),this.#l.length||(this.#s&&(this.#u?this.#s.cancel({revert:!0}):this.#s.cancelRetry()),this.scheduleGc()),this.#a.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.#l.length}invalidate(){this.state.isInvalidated||this.#d({type:"invalidate"})}fetch(e,t){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#s)return this.#s.continueRetry(),this.#s.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.#l.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let r=new AbortController,n={queryKey:this.queryKey,meta:this.meta},a=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(this.#u=!0,r.signal)})};a(n);let s={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn&&this.options.queryFn!==i.CN?(this.#u=!1,this.options.persister)?this.options.persister(this.options.queryFn,n,this):this.options.queryFn(n):Promise.reject(Error(`Missing queryFn: '${this.options.queryHash}'`))};a(s),this.options.behavior?.onFetch(s,this),this.#o=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==s.fetchOptions?.meta)&&this.#d({type:"fetch",meta:s.fetchOptions?.meta});let l=e=>{(0,o.DV)(e)&&e.silent||this.#d({type:"error",error:e}),(0,o.DV)(e)||(this.#a.config.onError?.(e,this),this.#a.config.onSettled?.(this.state.data,e,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#s=(0,o.Mz)({fn:s.fetchFn,abort:r.abort.bind(r),onSuccess:e=>{if(void 0===e){l(Error(`${this.queryHash} data is undefined`));return}this.setData(e),this.#a.config.onSuccess?.(e,this),this.#a.config.onSettled?.(e,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:l,onFail:(e,t)=>{this.#d({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#d({type:"pause"})},onContinue:()=>{this.#d({type:"continue"})},retry:s.options.retry,retryDelay:s.options.retryDelay,networkMode:s.options.networkMode}),this.#s.promise}#d(e){this.state=(t=>{switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,...l(t.data,this.options),fetchMeta:e.meta??null};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let r=e.error;if((0,o.DV)(r)&&r.revert&&this.#o)return{...this.#o,fetchStatus:"idle"};return{...t,error:r,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),n.V.batch(()=>{this.#l.forEach(e=>{e.onQueryUpdate()}),this.#a.notify({query:this,type:"updated",action:e})})}};function l(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,o.Kw)(t.networkMode)?"fetching":"paused",...void 0===e&&{error:null,status:"pending"}}}},2041:function(e,t,r){"use strict";r.d(t,{F:function(){return n}});var i=r(46063),n=class{#h;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,i.PN)(this.gcTime)&&(this.#h=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(i.sk?1/0:3e5))}clearGcTimeout(){this.#h&&(clearTimeout(this.#h),this.#h=void 0)}}},90326:function(e,t,r){"use strict";r.d(t,{DV:function(){return c},Kw:function(){return s},Mz:function(){return u}});var i=r(79555),n=r(17211),o=r(46063);function a(e){return Math.min(1e3*2**e,3e4)}function s(e){return(e??"online")!=="online"||n.N.isOnline()}var l=class{constructor(e){this.revert=e?.revert,this.silent=e?.silent}};function c(e){return e instanceof l}function u(e){let t,r,c,u=!1,d=0,h=!1,p=new Promise((e,t)=>{r=e,c=t}),f=()=>!i.j.isFocused()||"always"!==e.networkMode&&!n.N.isOnline(),g=i=>{h||(h=!0,e.onSuccess?.(i),t?.(),r(i))},w=r=>{h||(h=!0,e.onError?.(r),t?.(),c(r))},m=()=>new Promise(r=>{t=e=>{let t=h||!f();return t&&r(e),t},e.onPause?.()}).then(()=>{t=void 0,h||e.onContinue?.()}),b=()=>{let t;if(!h){try{t=e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(g).catch(t=>{if(h)return;let r=e.retry??(o.sk?0:3),i=e.retryDelay??a,n="function"==typeof i?i(d,t):i,s=!0===r||"number"==typeof r&&d<r||"function"==typeof r&&r(d,t);if(u||!s){w(t);return}d++,e.onFail?.(d,t),(0,o._v)(n).then(()=>{if(f())return m()}).then(()=>{u?w(t):b()})})}};return s(e.networkMode)?b():m().then(b),{promise:p,cancel:t=>{h||(w(new l(t)),e.abort?.())},continue:()=>t?.()?p:Promise.resolve(),cancelRetry:()=>{u=!0},continueRetry:()=>{u=!1}}}},44614:function(e,t,r){"use strict";r.d(t,{l:function(){return i}});var i=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},46063:function(e,t,r){"use strict";r.d(t,{CN:function(){return x},Ht:function(){return C},Kp:function(){return s},PN:function(){return a},Q$:function(){return p},Rm:function(){return u},SE:function(){return o},VS:function(){return f},VX:function(){return y},X7:function(){return c},Ym:function(){return d},ZT:function(){return n},_v:function(){return b},_x:function(){return l},oE:function(){return v},sk:function(){return i},to:function(){return h}});var i="undefined"==typeof window||"Deno"in globalThis;function n(){}function o(e,t){return"function"==typeof e?e(t):e}function a(e){return"number"==typeof e&&e>=0&&e!==1/0}function s(e,t){return Math.max(e+(t||0)-Date.now(),0)}function l(e,t){let{type:r="all",exact:i,fetchStatus:n,predicate:o,queryKey:a,stale:s}=e;if(a){if(i){if(t.queryHash!==u(a,t.options))return!1}else if(!h(t.queryKey,a))return!1}if("all"!==r){let e=t.isActive();if("active"===r&&!e||"inactive"===r&&e)return!1}return("boolean"!=typeof s||t.isStale()===s)&&(!n||n===t.state.fetchStatus)&&(!o||!!o(t))}function c(e,t){let{exact:r,status:i,predicate:n,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(r){if(d(t.options.mutationKey)!==d(o))return!1}else if(!h(t.options.mutationKey,o))return!1}return(!i||t.state.status===i)&&(!n||!!n(t))}function u(e,t){return(t?.queryKeyHashFn||d)(e)}function d(e){return JSON.stringify(e,(e,t)=>w(t)?Object.keys(t).sort().reduce((e,r)=>(e[r]=t[r],e),{}):t)}function h(e,t){return e===t||typeof e==typeof t&&!!e&&!!t&&"object"==typeof e&&"object"==typeof t&&!Object.keys(t).some(r=>!h(e[r],t[r]))}function p(e,t){if(e===t)return e;let r=g(e)&&g(t);if(r||w(e)&&w(t)){let i=r?e:Object.keys(e),n=i.length,o=r?t:Object.keys(t),a=o.length,s=r?[]:{},l=0;for(let n=0;n<a;n++){let a=r?n:o[n];!r&&void 0===e[a]&&void 0===t[a]&&i.includes(a)?(s[a]=void 0,l++):(s[a]=p(e[a],t[a]),s[a]===e[a]&&void 0!==e[a]&&l++)}return n===a&&l===n?e:s}return t}function f(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e)if(e[r]!==t[r])return!1;return!0}function g(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function w(e){if(!m(e))return!1;let t=e.constructor;if(void 0===t)return!0;let r=t.prototype;return!!(m(r)&&r.hasOwnProperty("isPrototypeOf"))}function m(e){return"[object Object]"===Object.prototype.toString.call(e)}function b(e){return new Promise(t=>{setTimeout(t,e)})}function v(e,t,r){return"function"==typeof r.structuralSharing?r.structuralSharing(e,t):!1!==r.structuralSharing?p(e,t):t}function y(e,t,r=0){let i=[...e,t];return r&&i.length>r?i.slice(1):i}function C(e,t,r=0){let i=[t,...e];return r&&i.length>r?i.slice(0,-1):i}var x=Symbol()},47082:function(e,t,r){"use strict";r.d(t,{NL:function(){return a},aH:function(){return s}});var i=r(2265),n=r(57437),o=i.createContext(void 0),a=e=>{let t=i.useContext(o);if(e)return e;if(!t)throw Error("No QueryClient set, use QueryClientProvider to set one");return t},s=e=>{let{client:t,children:r}=e;return i.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),(0,n.jsx)(o.Provider,{value:t,children:r})}},40204:function(e,t,r){"use strict";function i(e){let t=e.state.current,r=e.state.connections.get(t),i=r?.accounts,n=i?.[0],o=e.chains.find(e=>e.id===r?.chainId),a=e.state.status;switch(a){case"connected":return{address:n,addresses:i,chain:o,chainId:r?.chainId,connector:r?.connector,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:a};case"reconnecting":return{address:n,addresses:i,chain:o,chainId:r?.chainId,connector:r?.connector,isConnected:!!n,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:a};case"connecting":return{address:n,addresses:i,chain:o,chainId:r?.chainId,connector:r?.connector,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:a};case"disconnected":return{address:void 0,addresses:void 0,chain:void 0,chainId:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:a}}}r.d(t,{D:function(){return i}})},5706:function(e,t,r){"use strict";r.d(t,{s:function(){return g}});var i=r(47115),n=r(55936),o=r(71264),a=r(60989),s=r(82756),l=r(37225),c=r(4817);function u(e){return"number"==typeof e?e:"wei"===e?0:Math.abs(c.Bd[e])}var d=r(4481);async function h(e,t){let{allowFailure:r=!0,chainId:i,contracts:n,...o}=t,a=e.getClient({chainId:i});return(0,l.s)(a,d.A,"multicall")({allowFailure:r,contracts:n,...o})}var p=r(31723);async function f(e,t){let{allowFailure:r=!0,blockNumber:n,blockTag:o,...a}=t,s=t.contracts;try{let t=s.reduce((t,r,i)=>{let n=r.chainId??e.state.chainId;return{...t,[n]:[...t[n]||[],{contract:r,index:i}]}},{}),i=(await Promise.all(Object.entries(t).map(([t,i])=>h(e,{...a,allowFailure:r,blockNumber:n,blockTag:o,chainId:parseInt(t),contracts:i.map(({contract:e})=>e)})))).flat(),l=Object.values(t).flatMap(e=>e.map(({index:e})=>e));return i.reduce((e,t,r)=>(e&&(e[l[r]]=t),e),[])}catch(a){if(a instanceof i.uq)throw a;let t=()=>s.map(t=>(0,p.L)(e,{...t,blockNumber:n,blockTag:o}));if(r)return(await Promise.allSettled(t())).map(e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"});return await Promise.all(t())}}async function g(e,t){let{address:r,blockNumber:c,blockTag:d,chainId:h,token:p,unit:f="ether"}=t;if(p)try{return w(e,{balanceAddress:r,chainId:h,symbolType:"string",tokenAddress:p})}catch(t){if(t instanceof i.uq){let t=await w(e,{balanceAddress:r,chainId:h,symbolType:"bytes32",tokenAddress:p}),i=(0,n.rR)((0,o.f)(t.symbol,{dir:"right"}));return{...t,symbol:i}}throw t}let g=e.getClient({chainId:h}),m=(0,l.s)(g,s.s,"getBalance"),b=await m(c?{address:r,blockNumber:c}:{address:r,blockTag:d}),v=e.chains.find(e=>e.id===h)??g.chain;return{decimals:v.nativeCurrency.decimals,formatted:(0,a.b)(b,u(f)),symbol:v.nativeCurrency.symbol,value:b}}async function w(e,t){let{balanceAddress:r,chainId:i,symbolType:n,tokenAddress:o,unit:s}=t,l={abi:[{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:n}]}],address:o},[c,d,h]=await f(e,{allowFailure:!1,contracts:[{...l,functionName:"balanceOf",args:[r],chainId:i},{...l,functionName:"decimals",chainId:i},{...l,functionName:"symbol",chainId:i}]}),p=(0,a.b)(c??"0",u(s??d));return{decimals:d,formatted:p,symbol:h,value:c}}},38507:function(e,t,r){"use strict";r.d(t,{e:function(){return l}});var i=r(82690),n=r(27530),o=r(79561),a=r(75036),s=r(2731);async function l(e,t={}){let r;if(t.connector){let{connector:e}=t,[i,n]=await Promise.all([e.getAccounts(),e.getChainId()]);r={accounts:i,chainId:n,connector:e}}else r=e.state.connections.get(e.state.current);if(!r)throw new s.aH;let l=t.chainId??r.chainId,c=r.connector;if(c.getClient)return c.getClient({chainId:l});let u=(0,o.T)(t.account??r.accounts[0]);u.address=(0,a.K)(u.address);let d=e.chains.find(e=>e.id===l),h=await r.connector.getProvider({chainId:l});if(t.account&&!r.accounts.includes(u.address))throw new s.JK({address:u.address,connector:c});return(0,i.e)({account:u,chain:d,name:"Connector Client",transport:e=>(function(e,t={}){let{key:r="custom",name:i="Custom Provider",retryDelay:o}=t;return({retryCount:a})=>(0,n.q)({key:r,name:i,request:e.request.bind(e),retryCount:t.retryCount??a,retryDelay:o,type:"custom"})})(h)({...e,retryCount:0})})}},31723:function(e,t,r){"use strict";r.d(t,{L:function(){return o}});var i=r(96130),n=r(37225);function o(e,t){let{chainId:r,...o}=t,a=e.getClient({chainId:r});return(0,n.s)(a,i.L,"readContract")(o)}},53350:function(e,t,r){"use strict";r.d(t,{u:function(){return o}});var i=r(69022),n=r(40204);function o(e,t){let{onChange:r}=t;return e.subscribe(()=>(0,n.D)(e),r,{equalityFn(e,t){let{connector:r,...n}=e,{connector:o,...a}=t;return(0,i.v)(n,a)&&r?.id===o?.id&&r?.uid===o?.uid}})}},37538:function(e,t,r){"use strict";function i(e,t){return JSON.parse(e,(e,r)=>{let i=r;return i?.__type==="bigint"&&(i=BigInt(i.value)),i?.__type==="Map"&&(i=new Map(i.value)),t?.(e,i)??i})}function n(e,t){return e.slice(0,t).join(".")||"."}function o(e,t){let{length:r}=e;for(let i=0;i<r;++i)if(e[i]===t)return i+1;return 0}function a(e,t,r,i){return JSON.stringify(e,function(e,t){let r="function"==typeof e,i="function"==typeof t,a=[],s=[];return function(l,c){if("object"==typeof c){if(a.length){let e=o(a,this);0===e?a[a.length]=this:(a.splice(e),s.splice(e)),s[s.length]=l;let r=o(a,c);if(0!==r)return i?t.call(this,l,c,n(s,r)):`[ref=${n(s,r)}]`}else a[0]=c,s[0]=l}return r?e.call(this,l,c):c}}((e,r)=>{let i=r;return"bigint"==typeof i&&(i={__type:"bigint",value:r.toString()}),i instanceof Map&&(i={__type:"Map",value:Array.from(r.entries())}),t?.(e,i)??i},i),r??void 0)}function s(e){let{deserialize:t=i,key:r="wagmi",serialize:n=a,storage:o=l}=e;function s(e){return e instanceof Promise?e.then(e=>e).catch(()=>null):e}return{...o,key:r,async getItem(e,i){let n=o.getItem(`${r}.${e}`),a=await s(n);return a?t(a)??null:i??null},async setItem(e,t){let i=`${r}.${e}`;null===t?await s(o.removeItem(i)):await s(o.setItem(i,n(t)))},async removeItem(e){await s(o.removeItem(`${r}.${e}`))}}}r.d(t,{o:function(){return s},w:function(){return l}});let l={getItem:()=>null,setItem:()=>{},removeItem:()=>{}}},1257:function(e,t,r){"use strict";r.d(t,{G:function(){return l}});var i,n,o=r(33816);let a=()=>`@wagmi/core@${o.i}`;var s=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};class l extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return a()}constructor(e,t={}){super(),i.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});let r=t.cause instanceof l?t.cause.details:t.cause?.message?t.cause.message:t.details,n=t.cause instanceof l&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...n?[`Docs: ${this.docsBaseUrl}${n}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=n,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return s(this,i,"m",n).call(this,this,e)}}i=new WeakSet,n=function e(t,r){return r?.(t)?t:t.cause?s(this,i,"m",e).call(this,t.cause,r):t}},2731:function(e,t,r){"use strict";r.d(t,{JK:function(){return s},X4:function(){return n},aH:function(){return a},wi:function(){return o}});var i=r(1257);class n extends i.G{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class o extends i.G{constructor(){super("Connector already connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAlreadyConnectedError"})}}class a extends i.G{constructor(){super("Connector not connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorNotConnectedError"})}}class s extends i.G{constructor({address:e,connector:t}){super(`Account "${e}" not found for connector "${t.name}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAccountNotFoundError"})}}},34497:function(e,t,r){"use strict";r.d(t,{M:function(){return n},O:function(){return o}});var i=r(1257);class n extends i.G{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}class o extends i.G{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}},10154:function(e,t,r){"use strict";r.d(t,{Dr:function(){return i}});let i={getItem:e=>"undefined"==typeof window?null:function(e,t){let r=e.split("; ").find(e=>e.startsWith(`${t}=`));if(r)return r.substring(t.length+1)}(document.cookie,e)??null,setItem(e,t){"undefined"!=typeof window&&(document.cookie=`${e}=${t}`)},removeItem(e){"undefined"!=typeof window&&(document.cookie=`${e}=;max-age=-1`)}}},69022:function(e,t,r){"use strict";r.d(t,{v:function(){return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){let i,n;if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)&&Array.isArray(r)){if((i=t.length)!==r.length)return!1;for(n=i;0!=n--;)if(!e(t[n],r[n]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();let o=Object.keys(t);if((i=o.length)!==Object.keys(r).length)return!1;for(n=i;0!=n--;)if(!Object.prototype.hasOwnProperty.call(r,o[n]))return!1;for(n=i;0!=n--;){let i=o[n];if(i&&!e(t[i],r[i]))return!1}return!0}return t!=t&&r!=r}}})},37225:function(e,t,r){"use strict";function i(e,t,r){let i=e[t.name];if("function"==typeof i)return i;let n=e[r];return"function"==typeof n?n:r=>t(e,r)}r.d(t,{s:function(){return i}})},33816:function(e,t,r){"use strict";r.d(t,{i:function(){return i}});let i="2.6.15"},79268:function(e,t,r){"use strict";r.d(t,{E:function(){return a},p:function(){return s}});var i=r(89539),n=r(16856),o=r(65058);i.extend(o),i.extend(n),i.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});let a={getYear:(e=new Date().toISOString())=>i(e).year(),getRelativeDateFromNow:e=>i(e).fromNow(!0),formatDate:(e,t="DD MMM")=>i(e).format(t)},s={caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0}},87180:function(e,t,r){"use strict";r.d(t,{AccountController:function(){return b},ApiController:function(){return z},WM:function(){return _},fz:function(){return er},Lr:function(){return f},ConnectionController:function(){return Q},ConnectorController:function(){return $},bq:function(){return s},j1:function(){return l},Xs:function(){return j},IN:function(){return Z},NetworkController:function(){return B},ph:function(){return Y},OptionsController:function(){return d},Ie:function(){return P},RouterController:function(){return W},_4:function(){return ei},Si:function(){return et},SnackController:function(){return w},MO:function(){return E},ThemeController:function(){return S},sl:function(){return X}});var i=r(37967),n=r(4776);let o="https://secure.walletconnect.com",a=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:""}],s={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:o,SECURE_SITE_DASHBOARD:`${o}/dashboard`,SECURE_SITE_FAVICON:`${o}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e"},l={isMobile:()=>"undefined"!=typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),checkCaipNetwork:(e,t="")=>e?.id.toLocaleLowerCase().includes(t.toLowerCase()),isAndroid(){let e=window.navigator.userAgent.toLowerCase();return l.isMobile()&&e.includes("android")},isIos(){let e=window.navigator.userAgent.toLowerCase();return l.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:e=>!e||e-Date.now()<=s.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=s.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+s.FOUR_MINUTES_MS,getPlainAddress:e=>e.split(":")[2],wait:async e=>new Promise(t=>{setTimeout(t,e)}),debounce(e,t=500){let r;return(...i)=>{r&&clearTimeout(r),r=setTimeout(function(){e(...i)},t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(l.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);let i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,href:r}},formatUniversalUrl(e,t){if(!l.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);let i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,href:r}},openHref(e,t,r){window.open(e,t,r||"noreferrer noopener")},preloadImage:async e=>Promise.race([new Promise((t,r)=>{let i=new Image;i.onload=t,i.onerror=r,i.crossOrigin="anonymous",i.src=e}),l.wait(2e3)]),formatBalance(e,t){let r;if("0"===e)r="0.000";else if("string"==typeof e){let t=Number(e);t&&(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return r?`${r} ${t??""}`:`0.000 ${t??""}`},formatBalance2(e,t){let r;if("0"===e)r="0";else if("string"==typeof e){let t=Number(e);t&&(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return{value:r??"0",rest:"0"===r?"000":"",symbol:t}},isRestrictedRegion(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return s.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl:()=>l.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>l.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>l.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),parseError:e=>"string"==typeof e?e:"string"==typeof e?.issues?.[0]?.message?e.issues[0].message:e instanceof Error?e.message:"Unknown error",sortRequestedNetworks(e,t=[]){let r={};return t&&e&&(e.forEach((e,t)=>{r[e]=t}),t.sort((e,t)=>{let i=r[e.id],n=r[t.id];return void 0!==i&&void 0!==n?i-n:void 0!==i?-1:void 0!==n?1:0})),t},calculateBalance(e){let t=0;for(let r of e)t+=r.value;return t},formatTokenBalance(e){let[t,r]=e.toFixed(2).split(".");return{dollars:t,pennies:r}},isAddress:e=>!!(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)&&(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)||/^(?:0x)?[0-9A-F]{40}$/iu.test(e)))};class c{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,signal:t,...r}){let i=this.createUrl(r);return(await fetch(i,{method:"GET",headers:e,signal:t,cache:"no-cache"})).json()}async getBlob({headers:e,signal:t,...r}){let i=this.createUrl(r);return(await fetch(i,{method:"GET",headers:e,signal:t})).blob()}async post({body:e,headers:t,signal:r,...i}){let n=this.createUrl(i);return(await fetch(n,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}async put({body:e,headers:t,signal:r,...i}){let n=this.createUrl(i);return(await fetch(n,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}async delete({body:e,headers:t,signal:r,...i}){let n=this.createUrl(i);return(await fetch(n,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}createUrl({path:e,params:t}){let r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([e,t])=>{t&&r.searchParams.append(e,t)}),r}}let u=(0,n.sj)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),d={state:u,subscribeKey:(e,t)=>(0,i.VW)(u,e,t),setProjectId(e){u.projectId=e},setAllWallets(e){u.allWallets=e},setIncludeWalletIds(e){u.includeWalletIds=e},setExcludeWalletIds(e){u.excludeWalletIds=e},setFeaturedWalletIds(e){u.featuredWalletIds=e},setTokens(e){u.tokens=e},setTermsConditionsUrl(e){u.termsConditionsUrl=e},setPrivacyPolicyUrl(e){u.privacyPolicyUrl=e},setCustomWallets(e){u.customWallets=e},setIsSiweEnabled(e){u.isSiweEnabled=e},setEnableAnalytics(e){u.enableAnalytics=e},setSdkVersion(e){u.sdkVersion=e},setMetadata(e){u.metadata=e},setOnrampEnabled(e){u.enableOnramp=e},setWalletFeaturesEnabled(e){u.enableWalletFeatures=e}},h={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},p=new c({baseUrl:l.getBlockchainApiUrl()}),f={fetchIdentity:({caipChainId:e,address:t})=>p.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:d.state.projectId}}),fetchTransactions:({account:e,projectId:t,cursor:r,onramp:i,signal:n})=>p.get({path:`/v1/account/${e}/history?projectId=${t}${i?`&onramp=${i}`:""}`,params:r?{cursor:r}:{},signal:n}),getBalance:async e=>p.get({path:`/v1/account/${e}/balance`,params:{currency:"usd",projectId:d.state.projectId}}),generateOnRampURL:async({destinationWallets:e,partnerUserId:t,defaultNetwork:r,purchaseAmount:i,paymentAmount:n})=>(await p.post({path:`/v1/generators/onrampurl?projectId=${d.state.projectId}`,body:{destinationWallets:e,defaultNetwork:r,partnerUserId:t,defaultExperience:"buy",presetCryptoAmount:i,presetFiatAmount:n}})).url,async getOnrampOptions(){try{return await p.get({path:`/v1/onramp/options?projectId=${d.state.projectId}`})}catch(e){return h}},async getOnrampQuote({purchaseCurrency:e,paymentCurrency:t,amount:r,network:i}){try{return await p.post({path:`/v1/onramp/quote?projectId=${d.state.projectId}`,body:{purchaseCurrency:e,paymentCurrency:t,amount:r,network:i}})}catch(e){return{coinbaseFee:{amount:r,currency:t.id},networkFee:{amount:r,currency:t.id},paymentSubtotal:{amount:r,currency:t.id},paymentTotal:{amount:r,currency:t.id},purchaseAmount:{amount:r,currency:t.id},quoteId:"mocked-quote-id"}}}},g=(0,n.sj)({message:"",variant:"success",open:!1}),w={state:g,subscribeKey:(e,t)=>(0,i.VW)(g,e,t),showSuccess(e){g.message=e,g.variant="success",g.open=!0},showError(e){let t=l.parseError(e);g.message=t,g.variant="error",g.open=!0},hide(){g.open=!1}},m=(0,n.sj)({isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1}),b={state:m,subscribe:e=>(0,n.Ld)(m,()=>e(m)),subscribeKey:(e,t)=>(0,i.VW)(m,e,t),setIsConnected(e){m.isConnected=e},setCaipAddress(e){m.caipAddress=e,m.address=e?l.getPlainAddress(e):void 0},setBalance(e,t){m.balance=e,m.balanceSymbol=t},setProfileName(e){m.profileName=e},setProfileImage(e){m.profileImage=e},setAddressExplorerUrl(e){m.addressExplorerUrl=e},setSmartAccountDeployed(e){m.smartAccountDeployed=e},setCurrentTab(e){m.currentTab=e},setTokenBalance(e){e&&(m.tokenBalance=(0,n.iH)(e))},setConnectedWalletInfo(e){m.connectedWalletInfo=e},async fetchTokenBalance(){try{if(m.address){let e=await f.getBalance(m.address);this.setTokenBalance(e.balances)}}catch(e){w.showError("Failed to fetch token balance")}},resetAccount(){m.isConnected=!1,m.smartAccountDeployed=!1,m.currentTab=0,m.caipAddress=void 0,m.address=void 0,m.balance=void 0,m.balanceSymbol=void 0,m.profileName=void 0,m.profileImage=void 0,m.addressExplorerUrl=void 0,m.tokenBalance=[],m.connectedWalletInfo=void 0}},v="WALLETCONNECT_DEEPLINK_CHOICE",y="@w3m/recent",C="@w3m/connected_wallet_image_url",x="@w3m/connected_connector",E={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(v,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=localStorage.getItem(v);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(v)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{let t=E.getRecentWallets();t.find(t=>t.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(y,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let e=localStorage.getItem(y);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(C,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(C)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(e){try{localStorage.setItem(x,e)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(x)}catch{console.info("Unable to get Connected Connector")}}},k=(0,n.sj)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),_={state:k,subscribeNetworkImages:e=>(0,n.Ld)(k.networkImages,()=>e(k.networkImages)),subscribeKey:(e,t)=>(0,i.VW)(k,e,t),subscribe:e=>(0,n.Ld)(k,()=>e(k)),setWalletImage(e,t){k.walletImages[e]=t},setNetworkImage(e,t){k.networkImages[e]=t},setConnectorImage(e,t){k.connectorImages[e]=t},setTokenImage(e,t){k.tokenImages[e]=t},setCurrencyImage(e,t){k.currencyImages[e]=t}},A=(0,n.sj)({themeMode:"dark",themeVariables:{}}),S={state:A,subscribe:e=>(0,n.Ld)(A,()=>e(A)),setThemeMode(e){A.themeMode=e;try{let e=$.getEmailConnector();e&&e.provider.syncTheme({themeMode:S.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}},setThemeVariables(e){A.themeVariables={...A.themeVariables,...e};try{let e=$.getEmailConnector();e&&e.provider.syncTheme({themeVariables:S.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}},getSnapshot:()=>(0,n.CO)(A)},R=(0,n.sj)({connectors:[]}),$={state:R,subscribeKey:(e,t)=>(0,i.VW)(R,e,t),setConnectors(e){R.connectors=e.map(e=>(0,n.iH)(e))},addConnector(e){if(R.connectors.push((0,n.iH)(e)),"w3mEmail"===e.id){let t=(0,n.CO)(d.state);e?.provider?.syncDappData?.({metadata:t.metadata,sdkVersion:t.sdkVersion,projectId:t.projectId}),e.provider.syncTheme({themeMode:S.getSnapshot().themeMode,themeVariables:S.getSnapshot().themeVariables})}},getEmailConnector:()=>R.connectors.find(e=>"EMAIL"===e.type),getAnnouncedConnectorRdns:()=>R.connectors.filter(e=>"ANNOUNCED"===e.type).map(e=>e.info?.rdns),getConnectors:()=>R.connectors,getConnector:(e,t)=>R.connectors.find(r=>r.explorerId===e||r.info?.rdns===t)},T=(0,n.sj)({open:!1,selectedNetworkId:void 0}),P={state:T,subscribe:e=>(0,n.Ld)(T,()=>e(T)),set(e){Object.assign(T,{...T,...e})}},O=new c({baseUrl:l.getAnalyticsUrl()}),I=["MODAL_CREATED"],N=(0,n.sj)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),j={state:N,subscribe:e=>(0,n.Ld)(N,()=>e(N)),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=d.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _sendAnalyticsEvent(e){try{if(I.includes(e.data.event)||"undefined"==typeof window)return;await O.post({path:"/e",headers:j._getApiHeaders(),body:{eventId:l.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){N.timestamp=Date.now(),N.data=e,d.state.enableAnalytics&&j._sendAnalyticsEvent(N)}};var M=r(79268);let D=(0,n.sj)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]}),B={state:D,subscribe:e=>(0,n.Ld)(D,()=>e(D)),subscribeKey:(e,t)=>(0,i.VW)(D,e,t),_getClient(){if(!D._client)throw Error("NetworkController client not set");return D._client},setClient(e){D._client=(0,n.iH)(e)},setCaipNetwork(e){D.caipNetwork=e,P.set({selectedNetworkId:e?.id}),this.state.allowUnsupportedChain||this.checkIfSupportedNetwork()},setDefaultCaipNetwork(e){D.caipNetwork=e,P.set({selectedNetworkId:e?.id}),D.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){D.requestedCaipNetworks=e},setAllowUnsupportedChain(e){D.allowUnsupportedChain=e},setSmartAccountEnabledNetworks(e){D.smartAccountEnabledNetworks=e},getRequestedCaipNetworks(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t}=D;return l.sortRequestedNetworks(e,t)},async getApprovedCaipNetworksData(){let e=await this._getClient().getApprovedCaipNetworksData();D.supportsAllNetworks=e.supportsAllNetworks,D.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),D.caipNetwork=e,e&&j.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.id}})},checkIfSupportedNetwork(){D.isUnsupportedChain=!D.requestedCaipNetworks?.some(e=>e.id===D.caipNetwork?.id),D.isUnsupportedChain&&this.showUnsupportedChainUI()},checkIfSmartAccountEnabled(){let e=M.p.caipNetworkIdToNumber(D.caipNetwork?.id);return!!e&&!!D.smartAccountEnabledNetworks?.includes(e)},resetNetwork(){D.isDefaultCaipNetwork||(D.caipNetwork=void 0),D.approvedCaipNetworkIds=void 0,D.supportsAllNetworks=!0,D.smartAccountEnabledNetworks=[]},showUnsupportedChainUI(){setTimeout(()=>{Z.open({view:"UnsupportedChain"})},300)}},L=new c({baseUrl:l.getApiUrl()}),U=(0,n.sj)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1}),z={state:U,subscribeKey:(e,t)=>(0,i.VW)(U,e,t),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=d.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _fetchWalletImage(e){let t=`${L.baseUrl}/getWalletImage/${e}`,r=await L.getBlob({path:t,headers:z._getApiHeaders()});_.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){let t=`${L.baseUrl}/public/getAssetImage/${e}`,r=await L.getBlob({path:t,headers:z._getApiHeaders()});_.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){let t=`${L.baseUrl}/public/getAssetImage/${e}`,r=await L.getBlob({path:t,headers:z._getApiHeaders()});_.setConnectorImage(e,URL.createObjectURL(r))},async _fetchCurrencyImage(e){let t=`${L.baseUrl}/public/getCurrencyImage/${e}`,r=await L.getBlob({path:t,headers:z._getApiHeaders()});_.setCurrencyImage(e,URL.createObjectURL(r))},async _fetchTokenImage(e){let t=`${L.baseUrl}/public/getTokenImage/${e}`,r=await L.getBlob({path:t,headers:z._getApiHeaders()});_.setTokenImage(e,URL.createObjectURL(r))},async fetchNetworkImages(){let{requestedCaipNetworks:e}=B.state,t=e?.map(({imageId:e})=>e).filter(Boolean);t&&await Promise.allSettled(t.map(e=>z._fetchNetworkImage(e)))},async fetchConnectorImages(){let{connectors:e}=$.state,t=e.map(({imageId:e})=>e).filter(Boolean);await Promise.allSettled(t.map(e=>z._fetchConnectorImage(e)))},async fetchCurrencyImages(e=[]){await Promise.allSettled(e.map(e=>z._fetchCurrencyImage(e)))},async fetchTokenImages(e=[]){await Promise.allSettled(e.map(e=>z._fetchTokenImage(e)))},async fetchFeaturedWallets(){let{featuredWalletIds:e}=d.state;if(e?.length){let{data:t}=await L.get({path:"/getWallets",headers:z._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id));let r=t.map(e=>e.image_id).filter(Boolean);await Promise.allSettled(r.map(e=>z._fetchWalletImage(e))),U.featured=t}},async fetchRecommendedWallets(){let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=d.state,i=[...t??[],...r??[]].filter(Boolean),{data:n,count:o}=await L.get({path:"/getWallets",headers:z._getApiHeaders(),params:{page:"1",chains:B.state.caipNetwork?.id,entries:"4",include:e?.join(","),exclude:i?.join(",")}}),a=E.getRecentWallets(),s=n.map(e=>e.image_id).filter(Boolean),l=a.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s,...l].map(e=>z._fetchWalletImage(e))),U.recommended=n,U.count=o??0},async fetchWallets({page:e}){let{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:i}=d.state,n=[...U.recommended.map(({id:e})=>e),...r??[],...i??[]].filter(Boolean),{data:o,count:a}=await L.get({path:"/getWallets",headers:z._getApiHeaders(),params:{page:String(e),entries:"40",chains:B.state.caipNetwork?.id,include:t?.join(","),exclude:n.join(",")}}),s=o.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s.map(e=>z._fetchWalletImage(e)),l.wait(300)]),U.wallets=[...U.wallets,...o],U.count=a>U.count?a:U.count,U.page=e},async searchWallet({search:e}){let{includeWalletIds:t,excludeWalletIds:r}=d.state;U.search=[];let{data:i}=await L.get({path:"/getWallets",headers:z._getApiHeaders(),params:{page:"1",entries:"100",search:e,chains:B.state.caipNetwork?.id,include:t?.join(","),exclude:r?.join(",")}}),n=i.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...n.map(e=>z._fetchWalletImage(e)),l.wait(300)]),U.search=i},async reFetchWallets(){U.page=1,U.wallets=[],await z.fetchFeaturedWallets(),await z.fetchRecommendedWallets()},prefetch(){let e=[z.fetchFeaturedWallets(),z.fetchRecommendedWallets(),z.fetchNetworkImages(),z.fetchConnectorImages()];void 0===d.state.enableAnalytics&&e.push(z.fetchAnalyticsConfig()),U.prefetchPromise=Promise.race([Promise.allSettled(e),l.wait(3e3)])},async fetchAnalyticsConfig(){let{isAnalyticsEnabled:e}=await L.get({path:"/getAnalyticsConfig",headers:z._getApiHeaders()});d.setEnableAnalytics(e)}},F=(0,n.sj)({view:"Connect",history:["Connect"]}),W={state:F,subscribeKey:(e,t)=>(0,i.VW)(F,e,t),push(e,t){e!==F.view&&(F.view=e,F.history.push(e),F.data=t)},reset(e){F.view=e,F.history=[e]},replace(e,t){F.history.length>1&&F.history.at(-1)!==e&&(F.view=e,F.history[F.history.length-1]=e,F.data=t)},goBack(){if(F.history.length>1){F.history.pop();let[e]=F.history.slice(-1);e&&(F.view=e)}},goBackToIndex(e){if(F.history.length>1){F.history=F.history.slice(0,e+1);let[t]=F.history.slice(-1);t&&(F.view=t)}}},H=(0,n.sj)({loading:!1,open:!1}),Z={state:H,subscribe:e=>(0,n.Ld)(H,()=>e(H)),subscribeKey:(e,t)=>(0,i.VW)(H,e,t),async open(e){await z.state.prefetchPromise;let t=b.state.isConnected;e?.view?W.reset(e.view):t?W.reset("Account"):W.reset("Connect"),H.open=!0,P.set({open:!0}),j.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:t}})},close(){let e=b.state.isConnected;H.open=!1,P.set({open:!1}),j.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:e}})},setLoading(e){H.loading=e}},V={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},q={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},G=(0,n.sj)({providers:a,selectedProvider:null,error:null,purchaseCurrency:V,paymentCurrency:q,purchaseCurrencies:[V],paymentCurrencies:[],quotesLoading:!1}),Y={state:G,subscribe:e=>(0,n.Ld)(G,()=>e(G)),subscribeKey:(e,t)=>(0,i.VW)(G,e,t),setSelectedProvider(e){G.selectedProvider=e},setPurchaseCurrency(e){G.purchaseCurrency=e},setPaymentCurrency(e){G.paymentCurrency=e},setPurchaseAmount(e){this.state.purchaseAmount=e},setPaymentAmount(e){this.state.paymentAmount=e},async getAvailableCurrencies(){let e=await f.getOnrampOptions();G.purchaseCurrencies=e.purchaseCurrencies,G.paymentCurrencies=e.paymentCurrencies,G.paymentCurrency=e.paymentCurrencies[0]||q,G.purchaseCurrency=e.purchaseCurrencies[0]||V,await z.fetchCurrencyImages(e.paymentCurrencies.map(e=>e.id)),await z.fetchTokenImages(e.purchaseCurrencies.map(e=>e.symbol))},async getQuote(){G.quotesLoading=!0;try{let e=await f.getOnrampQuote({purchaseCurrency:G.purchaseCurrency,paymentCurrency:G.paymentCurrency,amount:G.paymentAmount?.toString()||"0",network:G.purchaseCurrency?.symbol});return G.quotesLoading=!1,G.purchaseAmount=Number(e.purchaseAmount.amount),e}catch(e){return G.error=e.message,G.quotesLoading=!1,null}finally{G.quotesLoading=!1}},resetState(){G.providers=a,G.selectedProvider=null,G.error=null,G.purchaseCurrency=V,G.paymentCurrency=q,G.purchaseCurrencies=[V],G.paymentCurrencies=[],G.paymentAmount=void 0,G.purchaseAmount=void 0,G.quotesLoading=!1}},K=(0,n.sj)({transactions:[],coinbaseTransactions:{},transactionsByYear:{},loading:!1,empty:!1,next:void 0}),X={state:K,subscribe:e=>(0,n.Ld)(K,()=>e(K)),async fetchTransactions(e,t){let{projectId:r}=d.state;if(!r||!e)throw Error("Transactions can't be fetched without a projectId and an accountAddress");K.loading=!0;try{let i=await f.fetchTransactions({account:e,projectId:r,cursor:K.next,onramp:t}),n=this.filterSpamTransactions(i.data),o=[...K.transactions,...n];K.loading=!1,"coinbase"===t?K.coinbaseTransactions=this.groupTransactionsByYearAndMonth(K.coinbaseTransactions,i.data):(K.transactions=o,K.transactionsByYear=this.groupTransactionsByYearAndMonth(K.transactionsByYear,n)),K.empty=0===o.length,K.next=i.next?i.next:void 0}catch(t){j.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:r,cursor:K.next}}),w.showError("Failed to fetch transactions"),K.loading=!1,K.empty=!0,K.next=void 0}},groupTransactionsByYearAndMonth:(e={},t=[])=>(t.forEach(t=>{let r=new Date(t.metadata.minedAt).getFullYear(),i=new Date(t.metadata.minedAt).getMonth(),n=e[r]??{},o=(n[i]??[]).filter(e=>e.id!==t.id);e[r]={...n,[i]:[...o,t].sort((e,t)=>new Date(t.metadata.minedAt).getTime()-new Date(e.metadata.minedAt).getTime())}}),e),filterSpamTransactions:e=>e.filter(e=>!e.transfers.every(e=>e.nft_info?.flags.is_spam===!0)),clearCursor(){K.next=void 0},resetTransactions(){K.transactions=[],K.transactionsByYear={},K.loading=!1,K.empty=!1,K.next=void 0}},J=(0,n.sj)({wcError:!1,buffering:!1}),Q={state:J,subscribeKey:(e,t)=>(0,i.VW)(J,e,t),_getClient(){if(!J._client)throw Error("ConnectionController client not set");return J._client},setClient(e){J._client=(0,n.iH)(e)},connectWalletConnect(){J.wcPromise=this._getClient().connectWalletConnect(e=>{J.wcUri=e,J.wcPairingExpiry=l.getPairingExpiry()}),E.setConnectedConnector("WALLET_CONNECT")},async connectExternal(e){await this._getClient().connectExternal?.(e),E.setConnectedConnector(e.type)},async signMessage(e){return this._getClient().signMessage(e)},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){J.wcUri=void 0,J.wcPairingExpiry=void 0,J.wcPromise=void 0,J.wcLinking=void 0,J.recentWallet=void 0,X.resetTransactions(),E.deleteWalletConnectDeepLink()},setWcLinking(e){J.wcLinking=e},setWcError(e){J.wcError=e,J.buffering=!1},setRecentWallet(e){J.recentWallet=e},setBuffering(e){J.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},ee=(0,n.sj)({}),et={state:ee,subscribe:e=>(0,n.Ld)(ee,()=>e(ee)),subscribeKey:(e,t)=>(0,i.VW)(ee,e,t),setToken(e){e&&(ee.token=(0,n.iH)(e))},setTokenAmount(e){ee.sendTokenAmount=e},setReceiverAddress(e){ee.receiverAddress=e},setReceiverProfileImageUrl(e){ee.receiverProfileImageUrl=e},setReceiverProfileName(e){ee.receiverProfileName=e},resetSend(){ee.token=void 0,ee.sendTokenAmount=void 0,ee.receiverAddress=void 0,ee.receiverProfileImageUrl=void 0,ee.receiverProfileName=void 0}},er={getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?_.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.imageUrl?e?.imageUrl:e?.imageId?_.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?_.state.connectorImages[e.imageId]:void 0},ei={goBackOrCloseModal(){W.state.history.length>1?W.goBack():Z.close()},navigateAfterNetworkSwitch(){let{history:e}=W.state,t=e.findIndex(e=>"Networks"===e);t>=1?W.goBackToIndex(t-1):Z.close()}}},6279:function(e,t,r){"use strict";r.d(t,{bq:function(){return i},gk:function(){return o},CK:function(){return n}});let i={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"},VERSION:"4.1.4"},n={ConnectorExplorerIds:{[i.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[i.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[i.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700"},ConnectorImageIds:{[i.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[i.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[i.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[i.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[i.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[i.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[i.INJECTED_CONNECTOR_ID]:"Browser Wallet",[i.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[i.COINBASE_CONNECTOR_ID]:"Coinbase",[i.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[i.LEDGER_CONNECTOR_ID]:"Ledger",[i.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[i.INJECTED_CONNECTOR_ID]:"INJECTED",[i.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[i.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[i.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},o={getCaipTokens(e){if(!e)return;let t={};return Object.entries(e).forEach(([e,r])=>{t[`${i.EIP155}:${e}`]=r}),t}}},68191:function(e,t,r){"use strict";r.d(t,{j1:function(){return i.j1},D4:function(){return t6}});var i=r(87180),n=r(97637),o=r(66848),a=r(9845),s=r(62870),l=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let c=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=i.AccountController.state.address,this.balanceVal=i.AccountController.state.balance,this.balanceSymbol=i.AccountController.state.balanceSymbol,this.profileName=i.AccountController.state.profileName,this.profileImage=i.AccountController.state.profileImage,this.network=i.NetworkController.state.caipNetwork,this.isUnsupportedChain=i.NetworkController.state.isUnsupportedChain,this.unsubscribe.push(...[i.AccountController.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),i.NetworkController.subscribeKey("caipNetwork",e=>this.network=e),i.NetworkController.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=i.fz.getNetworkImage(this.network),t="show"===this.balance;return o.dy`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${(0,s.o)(this.address)}
        profileName=${(0,s.o)(this.profileName)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${(0,s.o)(e)}
        avatarSrc=${(0,s.o)(this.profileImage)}
        balance=${t?i.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?i.IN.open({view:"UnsupportedChain"}):i.IN.open()}};l([(0,a.Cb)({type:Boolean})],c.prototype,"disabled",void 0),l([(0,a.Cb)()],c.prototype,"balance",void 0),l([(0,a.Cb)()],c.prototype,"charsStart",void 0),l([(0,a.Cb)()],c.prototype,"charsEnd",void 0),l([(0,a.SB)()],c.prototype,"address",void 0),l([(0,a.SB)()],c.prototype,"balanceVal",void 0),l([(0,a.SB)()],c.prototype,"balanceSymbol",void 0),l([(0,a.SB)()],c.prototype,"profileName",void 0),l([(0,a.SB)()],c.prototype,"profileImage",void 0),l([(0,a.SB)()],c.prototype,"network",void 0),l([(0,a.SB)()],c.prototype,"isUnsupportedChain",void 0),c=l([(0,n.customElement)("w3m-account-button")],c);var u=o.iv`
  :host {
    display: block;
    width: max-content;
  }
`,d=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let h=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=i.AccountController.state.isConnected,this.unsubscribe.push(i.AccountController.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?o.dy`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${(0,s.o)(this.balance)}
            .charsStart=${(0,s.o)(this.charsStart)}
            .charsEnd=${(0,s.o)(this.charsEnd)}
          >
          </w3m-account-button>
        `:o.dy`
          <w3m-connect-button
            size=${(0,s.o)(this.size)}
            label=${(0,s.o)(this.label)}
            loadingLabel=${(0,s.o)(this.loadingLabel)}
          ></w3m-connect-button>
        `}};h.styles=u,d([(0,a.Cb)({type:Boolean})],h.prototype,"disabled",void 0),d([(0,a.Cb)()],h.prototype,"balance",void 0),d([(0,a.Cb)()],h.prototype,"size",void 0),d([(0,a.Cb)()],h.prototype,"label",void 0),d([(0,a.Cb)()],h.prototype,"loadingLabel",void 0),d([(0,a.Cb)()],h.prototype,"charsStart",void 0),d([(0,a.Cb)()],h.prototype,"charsEnd",void 0),d([(0,a.SB)()],h.prototype,"isAccount",void 0),h=d([(0,n.customElement)("w3m-button")],h);var p=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let f=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=i.IN.state.open,this.loading=i.IN.state.loading,this.unsubscribe.push(i.IN.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.loading||this.open;return o.dy`
      <wui-connect-button
        size=${(0,s.o)(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?i.IN.close():this.loading||i.IN.open()}};p([(0,a.Cb)()],f.prototype,"size",void 0),p([(0,a.Cb)()],f.prototype,"label",void 0),p([(0,a.Cb)()],f.prototype,"loadingLabel",void 0),p([(0,a.SB)()],f.prototype,"open",void 0),p([(0,a.SB)()],f.prototype,"loading",void 0),f=p([(0,n.customElement)("w3m-connect-button")],f),r(94059);var g=o.iv`
  :host {
    display: block;
    width: max-content;
  }
`,w=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let m=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=i.NetworkController.state.caipNetwork,this.connected=i.AccountController.state.isConnected,this.loading=i.IN.state.loading,this.isUnsupportedChain=i.NetworkController.state.isUnsupportedChain,this.unsubscribe.push(...[i.NetworkController.subscribeKey("caipNetwork",e=>this.network=e),i.AccountController.subscribeKey("isConnected",e=>this.connected=e),i.IN.subscribeKey("loading",e=>this.loading=e),i.NetworkController.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.dy`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${(0,s.o)(i.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.isUnsupportedChain?"Switch Network":this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||(i.Xs.sendEvent({type:"track",event:"CLICK_NETWORKS"}),i.IN.open({view:"Networks"}))}};m.styles=g,w([(0,a.Cb)({type:Boolean})],m.prototype,"disabled",void 0),w([(0,a.SB)()],m.prototype,"network",void 0),w([(0,a.SB)()],m.prototype,"connected",void 0),w([(0,a.SB)()],m.prototype,"loading",void 0),w([(0,a.SB)()],m.prototype,"isUnsupportedChain",void 0),m=w([(0,n.customElement)("w3m-network-button")],m);var b=o.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`,v=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let y=class extends o.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=i.RouterController.state.view,this.unsubscribe.push(i.RouterController.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{let t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return o.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return o.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return o.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return o.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return o.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return o.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return o.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return o.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return o.dy`<w3m-account-view></w3m-account-view>`;case"AccountSettings":return o.dy`<w3m-account-settings-view></w3m-account-settings-view>`;case"WhatIsAWallet":return o.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return o.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return o.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return o.dy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return o.dy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return o.dy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return o.dy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return o.dy`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return o.dy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpgradeToSmartAccount":return o.dy`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case"UpdateEmailWallet":return o.dy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return o.dy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return o.dy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return o.dy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"OnRampProviders":return o.dy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return o.dy`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return o.dy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return o.dy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"WhatIsABuy":return o.dy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"BuyInProgress":return o.dy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"WalletReceive":return o.dy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return o.dy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WalletSend":return o.dy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return o.dy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return o.dy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`}}async onViewChange(e){let{history:t}=i.RouterController.state,r=-10,n=10;t.length<this.prevHistoryLength&&(r=10,n=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${n}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};y.styles=b,v([(0,a.SB)()],y.prototype,"view",void 0),y=v([(0,n.customElement)("w3m-router")],y);var C=o.iv`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`,x=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let E={USD:"$",EUR:"€",GBP:"\xa3"},k=[100,250,500,1e3],_=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.connected=i.AccountController.state.isConnected,this.loading=i.IN.state.loading,this.paymentCurrency=i.ph.state.paymentCurrency,this.paymentAmount=i.ph.state.paymentAmount,this.purchaseAmount=i.ph.state.purchaseAmount,this.quoteLoading=i.ph.state.quotesLoading,this.unsubscribe.push(...[i.AccountController.subscribeKey("isConnected",e=>{this.connected=e}),i.IN.subscribeKey("loading",e=>{this.loading=e}),i.ph.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading})])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.dy`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-swap-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-swap-input>
          <w3m-swap-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-swap-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${k.map(e=>o.dy`<wui-button
                  variant=${this.paymentAmount===e?"accentBg":"shade"}
                  size="xs"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${E[this.paymentCurrency?.id||"USD"]} ${e}`}</wui-button
                >`)}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.connected?o.dy`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="fill"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:o.dy`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accentBg"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||i.IN.open({view:"OnRampProviders"})}openModal(){i.IN.open({view:"Connect"})}async onPaymentAmountChange(e){i.ph.setPaymentAmount(Number(e.detail)),await i.ph.getQuote()}async selectPresetAmount(e){i.ph.setPaymentAmount(e),await i.ph.getQuote()}};_.styles=C,x([(0,a.Cb)({type:Boolean})],_.prototype,"disabled",void 0),x([(0,a.SB)()],_.prototype,"connected",void 0),x([(0,a.SB)()],_.prototype,"loading",void 0),x([(0,a.SB)()],_.prototype,"paymentCurrency",void 0),x([(0,a.SB)()],_.prototype,"paymentAmount",void 0),x([(0,a.SB)()],_.prototype,"purchaseAmount",void 0),x([(0,a.SB)()],_.prototype,"quoteLoading",void 0),_=x([(0,n.customElement)("w3m-onramp-widget")],_);var A=o.iv`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`,S=r(43801),R=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let $=class extends o.oi{constructor(){super(),this.usubscribe=[],this.networkImages=i.WM.state.networkImages,this.address=i.AccountController.state.address,this.profileImage=i.AccountController.state.profileImage,this.profileName=i.AccountController.state.profileName,this.network=i.NetworkController.state.caipNetwork,this.disconnecting=!1,this.loading=!1,this.usubscribe.push(...[i.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName):i.IN.close()})],i.NetworkController.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-settings-view: No account provided");let e=this.networkImages[this.network?.imageId??""];return o.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,s.o)(this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100" data-testid="account-settings-address">
              ${this.profileName?n.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):n.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","xl","m","xl"]}>
          ${this.emailBtnTemplate()}
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${(0,s.o)(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}isAllowedNetworkSwitch(){let{requestedCaipNetworks:e}=i.NetworkController.state,t=!!e&&e.length>1,r=e?.find(({id:e})=>e===this.network?.id);return t||!r}onCopyAddress(){try{this.address&&(i.j1.copyToClopboard(this.address),i.SnackController.showSuccess("Address copied"))}catch{i.SnackController.showError("Failed to copy")}}emailBtnTemplate(){let e=i.MO.getConnectedConnector(),t=i.ConnectorController.getEmailConnector();if(!t||"EMAIL"!==e)return null;let r=t.provider.getEmail()??"";return o.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}togglePreferredAccountBtnTemplate(){let e=i.NetworkController.checkIfSmartAccountEnabled(),t=i.MO.getConnectedConnector();if(!i.ConnectorController.getEmailConnector()||"EMAIL"!==t||!e)return null;let r=S.$D.getPreferredAccountType()===S.y_.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account";return o.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}async changePreferredAccountType(){let e=i.NetworkController.checkIfSmartAccountEnabled(),t=S.$D.getPreferredAccountType()!==S.y_.ACCOUNT_TYPES.SMART_ACCOUNT&&e?S.y_.ACCOUNT_TYPES.SMART_ACCOUNT:S.y_.ACCOUNT_TYPES.EOA,r=i.ConnectorController.getEmailConnector();r&&(this.loading=!0,await r?.provider.setPreferredAccount(t),this.loading=!1,this.requestUpdate())}onGoToUpdateEmail(e){i.RouterController.push("UpdateEmailWallet",{email:e})}onNetworks(){this.isAllowedNetworkSwitch()&&i.RouterController.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await i.ConnectionController.disconnect(),i.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),i.IN.close()}catch{i.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),i.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}};$.styles=A,R([(0,a.SB)()],$.prototype,"address",void 0),R([(0,a.SB)()],$.prototype,"profileImage",void 0),R([(0,a.SB)()],$.prototype,"profileName",void 0),R([(0,a.SB)()],$.prototype,"network",void 0),R([(0,a.SB)()],$.prototype,"disconnecting",void 0),R([(0,a.SB)()],$.prototype,"loading",void 0),$=R([(0,n.customElement)("w3m-account-settings-view")],$);let T=class extends o.oi{render(){let e=i.MO.getConnectedConnector();return o.dy`
      ${i.OptionsController.state.enableWalletFeatures&&"EMAIL"===e?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return o.dy`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return o.dy`<w3m-account-default-widget></w3m-account-default-widget>`}};T=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-account-view")],T);var P=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let O=class extends o.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=i.j1.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return o.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?o.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:o.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return i.j1.isMobile()?o.dy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){i.RouterController.push("ConnectingWalletConnect")}};P([(0,a.SB)()],O.prototype,"search",void 0),O=P([(0,n.customElement)("w3m-all-wallets-view")],O);var I=o.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`,N=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let j=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=i.ph.state.selectedProvider,this.uri=i.ConnectionController.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[i.ph.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})]),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${this.selectedOnRampProvider?.label}`);let t=this.error?"Buy can be declined from your side or due to and error on the provider app":`We’ll notify you once your Buy is processed`;return o.dy`
      <wui-flex
        data-error=${(0,s.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${(0,s.o)(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){this.selectedOnRampProvider&&"coinbase"===this.selectedOnRampProvider.name&&(this.startTime=Date.now(),this.initializeCoinbaseTransactions())}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),4e3)}async watchCoinbaseTransactions(){try{let e=i.AccountController.state.address,t=i.OptionsController.state.projectId;if(!e)throw Error("No address found");(await i.Lr.fetchTransactions({account:e,onramp:"coinbase",projectId:t})).data.filter(e=>new Date(e.metadata.minedAt)>new Date(this.startTime)||"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status).length?(clearInterval(this.intervalId),i.RouterController.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){i.SnackController.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,i.j1.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?o.dy`<wui-button variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){let e=i.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return o.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url){i.SnackController.showError("No link found"),i.RouterController.goBack();return}try{i.j1.copyToClopboard(this.selectedOnRampProvider.url),i.SnackController.showSuccess("Link copied")}catch{i.SnackController.showError("Failed to copy")}}};j.styles=I,N([(0,a.SB)()],j.prototype,"selectedOnRampProvider",void 0),N([(0,a.SB)()],j.prototype,"uri",void 0),N([(0,a.SB)()],j.prototype,"ready",void 0),N([(0,a.SB)()],j.prototype,"showRetry",void 0),N([(0,a.SB)()],j.prototype,"buffering",void 0),N([(0,a.SB)()],j.prototype,"error",void 0),N([(0,a.SB)()],j.prototype,"intervalId",void 0),N([(0,a.SB)()],j.prototype,"startTime",void 0),N([(0,a.Cb)({type:Boolean})],j.prototype,"isMobile",void 0),N([(0,a.Cb)()],j.prototype,"onRetry",void 0),j=N([(0,n.customElement)("w3m-buy-in-progress-view")],j);var M=o.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,D=r(6279),B=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let L=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.connectors=i.ConnectorController.state.connectors,this.count=i.ApiController.state.count,this.unsubscribe.push(i.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),i.ApiController.subscribeKey("count",e=>this.count=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.externalTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(i.j1.isMobile())return null;let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);return e?o.dy`
      <wui-list-wallet
        imageSrc=${(0,s.o)(i.fz.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){let{customWallets:e}=i.OptionsController.state;return e?.length?this.filterOutDuplicateWallets(e).map(e=>o.dy`
        <wui-list-wallet
          imageSrc=${(0,s.o)(i.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          data-testid=${`wallet-selector-${e.id}`}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(e=>"WALLET_CONNECT"===e.type))return null;let{featured:e}=i.ApiController.state;return e.length?this.filterOutDuplicateWallets(e).map(e=>o.dy`
        <wui-list-wallet
          imageSrc=${(0,s.o)(i.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return i.MO.getRecentWallets().map(e=>o.dy`
        <wui-list-wallet
          imageSrc=${(0,s.o)(i.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>"ANNOUNCED"!==e.type?null:o.dy`
        <wui-list-wallet
          imageSrc=${(0,s.o)(i.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){return this.connectors.map(e=>"INJECTED"===e.type&&i.ConnectionController.checkInstalled()?o.dy`
        <wui-list-wallet
          imageSrc=${(0,s.o)(i.fz.getConnectorImage(e))}
          .installed=${!0}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `:null)}externalTemplate(){let e=i.ConnectorController.getAnnouncedConnectorRdns();return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(t.type)||e.includes(D.bq.CONNECTOR_RDNS_MAP[t.id])?null:o.dy`
        <wui-list-wallet
          imageSrc=${(0,s.o)(i.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type),{allWallets:t}=i.OptionsController.state;if(!e||"HIDE"===t||"ONLY_MOBILE"===t&&!i.j1.isMobile())return null;let r=i.ApiController.state.featured.length,n=this.count+r,a=n<10?n:10*Math.floor(n/10),s=a<n?`${a}+`:`${a}`;return o.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(e=>"WALLET_CONNECT"===e.type))return null;let{recommended:e}=i.ApiController.state,{customWallets:t,featuredWalletIds:r}=i.OptionsController.state,{connectors:n}=i.ConnectorController.state,a=i.MO.getRecentWallets(),l=n.filter(e=>"INJECTED"===e.type).filter(e=>"Browser Wallet"!==e.name);if(r||t||!e.length)return null;let c=l.length+a.length;return this.filterOutDuplicateWallets(e).slice(0,Math.max(0,2-c)).map(e=>o.dy`
        <wui-list-wallet
          imageSrc=${(0,s.o)(i.fz.getWalletImage(e))}
          name=${e?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}onConnector(e){"WALLET_CONNECT"===e.type?i.j1.isMobile()?i.RouterController.push("AllWallets"):i.RouterController.push("ConnectingWalletConnect"):i.RouterController.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){let t=i.MO.getRecentWallets(),r=this.connectors.map(e=>e.info?.rdns).filter(Boolean),n=t.map(e=>e.rdns).filter(Boolean),o=r.concat(n);return e.filter(e=>!o.includes(String(e?.rdns)))}onAllWallets(){i.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),i.RouterController.push("AllWallets")}onConnectWallet(e){i.RouterController.push("ConnectingWalletConnect",{wallet:e})}};L.styles=M,B([(0,a.SB)()],L.prototype,"connectors",void 0),B([(0,a.SB)()],L.prototype,"count",void 0),L=B([(0,n.customElement)("w3m-connect-view")],L);var U=o.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,z=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};class F extends o.oi{constructor(){super(),this.wallet=i.RouterController.state.data?.wallet,this.connector=i.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=i.fz.getWalletImage(this.wallet)??i.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=i.ConnectionController.state.wcUri,this.error=i.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[i.ConnectionController.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),i.ConnectionController.subscribeKey("wcError",e=>this.error=e),i.ConnectionController.subscribeKey("buffering",e=>this.buffering=e)])}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),o.dy`
      <wui-flex
        data-error=${(0,s.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,s.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?o.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(i.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let e=i.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return o.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(i.j1.copyToClopboard(this.uri),i.SnackController.showSuccess("Link copied"))}catch{i.SnackController.showError("Failed to copy")}}}F.styles=U,z([(0,a.SB)()],F.prototype,"uri",void 0),z([(0,a.SB)()],F.prototype,"error",void 0),z([(0,a.SB)()],F.prototype,"ready",void 0),z([(0,a.SB)()],F.prototype,"showRetry",void 0),z([(0,a.SB)()],F.prototype,"buffering",void 0),z([(0,a.Cb)({type:Boolean})],F.prototype,"isMobile",void 0),z([(0,a.Cb)()],F.prototype,"onRetry",void 0);let W=class extends F{constructor(){if(super(),!this.connector)throw Error("w3m-connecting-view: No connector provided");i.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&i.MO.setConnectedWalletImageUrl(this.connector.imageUrl),await i.ConnectionController.connectExternal(this.connector),i.OptionsController.state.isSiweEnabled?i.RouterController.push("ConnectingSiwe"):i.IN.close(),i.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}catch(e){i.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};W=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-connecting-external-view")],W);var H=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Z=class extends o.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=i.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),i.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),o.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):o.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{let{wcPairingExpiry:t}=i.ConnectionController.state;if(e||i.j1.isPairingExpired(t)){if(i.ConnectionController.connectWalletConnect(),this.wallet){let e=i.fz.getWalletImage(this.wallet);e&&i.MO.setConnectedWalletImageUrl(e)}else{let e=i.ConnectorController.state.connectors.find(e=>"WALLET_CONNECT"===e.type),t=i.fz.getConnectorImage(e);t&&i.MO.setConnectedWalletImageUrl(t)}await i.ConnectionController.state.wcPromise,this.finalizeConnection(),i.OptionsController.state.isSiweEnabled?i.RouterController.push("ConnectingSiwe"):i.IN.close()}}catch(e){i.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),i.ConnectionController.setWcError(!0),i.j1.isAllowedRetry(this.lastRetry)&&(i.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){let{wcLinking:e,recentWallet:t}=i.ConnectionController.state;e&&i.MO.setWalletConnectDeepLink(e),t&&i.MO.setWeb3ModalRecent(t),i.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:this.wallet?.name||"Unknown"}})}determinePlatforms(){if(!this.wallet)throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:r,injected:n,rdns:o}=this.wallet,a=n?.map(({injected_id:e})=>e).filter(Boolean),s=o?[o]:a??[],l=s.length,c=i.ConnectionController.checkInstalled(s),u=l&&c,d=t&&!i.j1.isMobile();u&&this.platforms.push("browser"),e&&this.platforms.push(i.j1.isMobile()?"mobile":"qrcode"),r&&this.platforms.push("web"),d&&this.platforms.push("desktop"),!u&&l&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return o.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return o.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return o.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return o.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return o.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return o.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?o.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};H([(0,a.SB)()],Z.prototype,"platform",void 0),H([(0,a.SB)()],Z.prototype,"platforms",void 0),Z=H([(0,n.customElement)("w3m-connecting-wc-view")],Z);let V=class extends o.oi{constructor(){super(...arguments),this.wallet=i.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return o.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?o.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?o.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?o.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?o.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&i.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&i.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&i.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&i.j1.openHref(this.wallet.homepage,"_blank")}};V=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-downloads-view")],V);let q=class extends o.oi{render(){return o.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{i.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=i.ApiController.state,{customWallets:r}=i.OptionsController.state;return[...t,...r??[],...e].slice(0,4).map(e=>o.dy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,s.o)(i.fz.getWalletImage(e))}
          @click=${()=>{i.j1.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};q=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-get-wallet-view")],q);var G=o.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,Y=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let K=class extends o.oi{constructor(){super(),this.network=i.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return o.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,s.o)(i.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:o.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await i.NetworkController.switchActiveNetwork(this.network),i.OptionsController.state.isSiweEnabled||i._4.navigateAfterNetworkSwitch())}catch{this.error=!0}}};K.styles=G,Y([(0,a.SB)()],K.prototype,"showRetry",void 0),Y([(0,a.SB)()],K.prototype,"error",void 0),K=Y([(0,n.customElement)("w3m-network-switch-view")],K);var X=o.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,J=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Q=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=i.NetworkController.state.caipNetwork,this.unsubscribe.push(i.NetworkController.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){i.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),i.RouterController.push("WhatIsANetwork")}networksTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=i.NetworkController.state,n=i.j1.sortRequestedNetworks(e,t);return n?.map(t=>o.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===t.id}
          imageSrc=${s.o(i.fz.getNetworkImage(t))}
          type="network"
          name=${t.name??t.id}
          @click=${()=>this.onSwitchNetwork(t)}
          .disabled=${!r&&!e?.includes(t.id)}
          data-testid=${`w3m-network-switch-${t.name??t.id}`}
        ></wui-card-select>
      `)}async onSwitchNetwork(e){let{isConnected:t}=i.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:n,caipNetwork:o}=i.NetworkController.state,{data:a}=i.RouterController.state;t&&o?.id!==e.id?r?.includes(e.id)?(await i.NetworkController.switchActiveNetwork(e),i._4.navigateAfterNetworkSwitch()):n&&i.RouterController.push("SwitchNetwork",{...a,network:e}):t||(i.NetworkController.setCaipNetwork(e),i.RouterController.push("Connect"))}};Q.styles=X,J([(0,a.SB)()],Q.prototype,"caipNetwork",void 0),Q=J([(0,n.customElement)("w3m-networks-view")],Q);var ee=r(79268),et=o.iv`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`,er=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ei=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.refetchTimeout=void 0,this.selectedOnRampProvider=i.ph.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=i.sl.state.coinbaseTransactions,this.tokenImages=i.WM.state.tokenImages,this.unsubscribe.push(...[i.ph.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),i.WM.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},i.sl.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})]),i.sl.clearCursor(),this.fetchTransactions()}render(){return o.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e?.map(e=>{let t=ee.E.formatDate(e?.metadata?.minedAt),r=e.transfers[0],i=r?.fungible_info;if(!i)return null;let n=i?.icon?.url||this.tokenImages?.[i.symbol||""];return o.dy`
        <wui-onramp-activity-item
          label="Bought"
          .completed=${"ONRAMP_TRANSACTION_STATUS_SUCCESS"===e.metadata.status}
          .inProgress=${"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status}
          .failed=${"ONRAMP_TRANSACTION_STATUS_FAILED"===e.metadata.status}
          purchaseCurrency=${s.o(i.symbol)}
          purchaseValue=${r.quantity.numeric}
          date=${t}
          icon=${s.o(n)}
          symbol=${s.o(i.symbol)}
        ></wui-onramp-activity-item>
      `})}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map(e=>{let t=parseInt(e,10);return Array(12).fill(null).map((e,t)=>t).reverse().map(e=>{let r=n.TransactionUtil.getTransactionGroupTitle(t,e),i=this.coinbaseTransactions[t]?.[e];return i?o.dy`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${r}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(i)}
            </wui-flex>
          </wui-flex>
        `:null})})}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){let e=i.AccountController.state.address,t=i.OptionsController.state.projectId;if(!e)throw Error("No address found");if(!t)throw Error("No projectId found");this.loading=!0,await i.sl.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){let e=new Date;if(0===(this.coinbaseTransactions[e.getFullYear()]?.[e.getMonth()]||[]).filter(e=>"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status).length){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(async()=>{let e=i.AccountController.state.address;await i.sl.fetchTransactions(e,"coinbase"),this.refetchLoadingTransactions()},3e3)}templateLoading(){return Array(7).fill(o.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};ei.styles=et,er([(0,a.SB)()],ei.prototype,"selectedOnRampProvider",void 0),er([(0,a.SB)()],ei.prototype,"loading",void 0),er([(0,a.SB)()],ei.prototype,"coinbaseTransactions",void 0),er([(0,a.SB)()],ei.prototype,"tokenImages",void 0),ei=er([(0,n.customElement)("w3m-onramp-activity-view")],ei);var en=o.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,eo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ea=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=i.ph.state.paymentCurrency,this.currencies=i.ph.state.paymentCurrencies,this.currencyImages=i.WM.state.currencyImages,this.unsubscribe.push(...[i.ph.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),i.WM.subscribeKey("currencyImages",e=>this.currencyImages=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.currencies.map(e=>o.dy`
        <wui-list-item
          imageSrc=${(0,s.o)(this.currencyImages?.[e.id])}
          @click=${()=>this.selectCurrency(e)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${e.id}</wui-text>
        </wui-list-item>
      `)}selectCurrency(e){e&&(i.ph.setPaymentCurrency(e),i.IN.close())}};ea.styles=en,eo([(0,a.SB)()],ea.prototype,"selectedCurrency",void 0),eo([(0,a.SB)()],ea.prototype,"currencies",void 0),eo([(0,a.SB)()],ea.prototype,"currencyImages",void 0),ea=eo([(0,n.customElement)("w3m-onramp-fiat-select-view")],ea);var es=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let el=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.providers=i.ph.state.providers,this.unsubscribe.push(...[i.ph.subscribeKey("providers",e=>{this.providers=e})])}firstUpdated(){Promise.all(this.providers.map(async e=>"coinbase"===e.name?await this.getCoinbaseOnRampURL():Promise.resolve(e?.url))).then(e=>{this.providers=this.providers.map((t,r)=>({...t,url:e[r]||""}))})}render(){return o.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.map(e=>o.dy`
        <wui-onramp-provider-item
          label=${e.label}
          name=${e.name}
          feeRange=${e.feeRange}
          @click=${()=>{this.onClickProvider(e)}}
          ?disabled=${!e.url}
        ></wui-onramp-provider-item>
      `)}onClickProvider(e){i.ph.setSelectedProvider(e),i.RouterController.push("BuyInProgress"),i.j1.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes")}async getCoinbaseOnRampURL(){let e=i.AccountController.state.address,t=i.NetworkController.state.caipNetwork;if(!e)throw Error("No address found");if(!t?.name)throw Error("No network found");let r=i.bq.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??i.bq.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,n=i.ph.state.purchaseCurrency,o=n?[n.symbol]:i.ph.state.purchaseCurrencies.map(e=>e.symbol);return await i.Lr.generateOnRampURL({defaultNetwork:r,destinationWallets:[{address:e,blockchains:i.bq.WC_COINBASE_PAY_SDK_CHAINS,assets:o}],partnerUserId:e,purchaseAmount:i.ph.state.purchaseAmount})}};es([(0,a.SB)()],el.prototype,"providers",void 0),el=es([(0,n.customElement)("w3m-onramp-providers-view")],el);var ec=o.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,eu=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ed=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=i.ph.state.purchaseCurrencies,this.tokens=i.ph.state.purchaseCurrencies,this.tokenImages=i.WM.state.tokenImages,this.unsubscribe.push(...[i.ph.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),i.WM.subscribeKey("tokenImages",e=>this.tokenImages=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.tokens.map(e=>o.dy`
        <wui-list-item
          imageSrc=${(0,s.o)(this.tokenImages?.[e.symbol])}
          @click=${()=>this.selectToken(e)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${e.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${e.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `)}selectToken(e){e&&(i.ph.setPurchaseCurrency(e),i.IN.close())}};ed.styles=ec,eu([(0,a.SB)()],ed.prototype,"selectedCurrency",void 0),eu([(0,a.SB)()],ed.prototype,"tokens",void 0),eu([(0,a.SB)()],ed.prototype,"tokenImages",void 0),ed=eu([(0,n.customElement)("w3m-onramp-token-select-view")],ed);var eh=o.iv`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let ep=class extends o.oi{render(){return o.dy`
      <wui-flex flexDirection="column" gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};ep.styles=eh,ep=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-transactions-view")],ep);let ef=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],eg=class extends o.oi{render(){return o.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ef}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{i.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};eg=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-what-is-a-network-view")],eg);let ew=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],em=class extends o.oi{render(){return o.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ew}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){i.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),i.RouterController.push("GetWallet")}};em=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-what-is-a-wallet-view")],em);let eb=class extends o.oi{render(){return o.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${i.RouterController.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};eb=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-what-is-a-buy-view")],eb);var ev=o.iv`
  wui-loading-spinner {
    margin: 9px auto;
  }
`,ey=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eC=class extends o.oi{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=S.$D.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=i.RouterController.state.data?.email,this.emailConnector=i.ConnectorController.getEmailConnector()}render(){if(!this.email)throw Error("w3m-email-otp-widget: No email provided");let e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return o.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">Enter the code we sent to</wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?o.dy`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:o.dy` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?o.dy`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=S.$D.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=S.$D.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){try{!this.loading&&(this.otp=e.detail,this.emailConnector&&6===this.otp.length&&(this.loading=!0,await this.onOtpSubmit?.(this.otp)))}catch(e){this.error=i.j1.parseError(e),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!i.ConnectorController.getEmailConnector()||!this.email)throw Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),i.SnackController.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){i.SnackController.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};eC.styles=ev,ey([(0,a.SB)()],eC.prototype,"loading",void 0),ey([(0,a.SB)()],eC.prototype,"timeoutTimeLeft",void 0),ey([(0,a.SB)()],eC.prototype,"error",void 0),eC=ey([(0,n.customElement)("w3m-email-otp-widget")],eC);var ex=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eE=class extends eC{constructor(){super(),this.unsubscribe=[],this.smartAccountDeployed=i.AccountController.state.smartAccountDeployed,this.onOtpSubmit=async e=>{try{if(this.emailConnector){let t=i.NetworkController.checkIfSmartAccountEnabled();await this.emailConnector.provider.connectOtp({otp:e}),i.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await i.ConnectionController.connectExternal(this.emailConnector),i.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.emailConnector.name||"Unknown"}}),t&&!this.smartAccountDeployed?i.RouterController.push("UpgradeToSmartAccount"):i.IN.close()}}catch(e){throw i.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onOtpResend=async e=>{this.emailConnector&&(await this.emailConnector.provider.connectEmail({email:e}),i.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))},this.unsubscribe.push(i.AccountController.subscribeKey("smartAccountDeployed",e=>{this.smartAccountDeployed=e}))}};ex([(0,a.SB)()],eE.prototype,"smartAccountDeployed",void 0),eE=ex([(0,n.customElement)("w3m-email-verify-otp-view")],eE);var ek=o.iv`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`,e_=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eA=class extends o.oi{constructor(){super(),this.email=i.RouterController.state.data?.email,this.emailConnector=i.ConnectorController.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw Error("w3m-email-verify-device-view: No email connector provided");return o.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.emailConnector)try{await this.emailConnector.provider.connectDevice(),i.Xs.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),i.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),i.RouterController.replace("EmailVerifyOtp",{email:this.email})}catch(e){i.RouterController.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),i.SnackController.showSuccess("Code email resent")}}catch(e){i.SnackController.showError(e)}finally{this.loading=!1}}};eA.styles=ek,e_([(0,a.SB)()],eA.prototype,"loading",void 0),eA=e_([(0,n.customElement)("w3m-email-verify-device-view")],eA);var eS=o.iv`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`,eR=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e$=class extends o.oi{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(i.IN.subscribeKey("open",e=>{e||this.onHideIframe()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block";let e=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver(()=>{let t=e?.getBoundingClientRect()??{left:0,top:0,width:0,height:0};this.iframe.style.width="360px",this.iframe.style.height=`${t.height-10}px`,this.iframe.style.left="calc(50% - 180px)",this.iframe.style.top=`${t.top+5}px`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),o.dy`<div data-ready=${this.ready}></div>`}onShowIframe(){let e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards"})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}async syncTheme(){let e=i.ConnectorController.getEmailConnector();e&&await e.provider.syncTheme({themeVariables:i.ThemeController.getSnapshot().themeVariables})}};e$.styles=eS,eR([(0,a.SB)()],e$.prototype,"ready",void 0),e$=eR([(0,n.customElement)("w3m-approve-transaction-view")],e$);let eT=class extends o.oi{render(){return o.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${i.bq.SECURE_SITE_DASHBOARD}
          imageSrc=${i.bq.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};eT=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-upgrade-wallet-view")],eT);var eP=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eO=class extends o.oi{constructor(){super(...arguments),this.emailConnector=i.ConnectorController.getEmailConnector(),this.loading=!1,this.setPreferSmartAccount=async()=>{if(this.emailConnector)try{this.loading=!0,await this.emailConnector.provider.setPreferredAccount(S.y_.ACCOUNT_TYPES.SMART_ACCOUNT),await this.emailConnector.provider.connect({preferredAccountType:S.y_.ACCOUNT_TYPES.SMART_ACCOUNT}),this.loading=!1,i.RouterController.push("Account")}catch(e){i.SnackController.showError("Error upgrading to smart account")}}}render(){return o.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link>
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return o.dy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="google"></wui-visual>
        <wui-visual name="pencil"></wui-visual>
        <wui-visual name="lightbulb"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return o.dy`<wui-flex .padding=${["0","2l","0","2l"]} gap="s">
      <wui-button
        variant="accentBg"
        @click=${this.redirectToAccount.bind(this)}
        size="lg"
        borderRadius="xs"
      >
        Do it later
      </wui-button>
      <wui-button
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.setPreferSmartAccount.bind(this)}
        >Continue
      </wui-button>
    </wui-flex>`}redirectToAccount(){i.RouterController.push("Account")}};eP([(0,a.SB)()],eO.prototype,"emailConnector",void 0),eP([(0,a.SB)()],eO.prototype,"loading",void 0),eO=eP([(0,n.customElement)("w3m-upgrade-to-smart-account-view")],eO);var eI=r(92513),eN=o.iv`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`,ej=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eM=class extends o.oi{constructor(){super(...arguments),this.formRef=(0,eI.V)(),this.initialEmail=i.RouterController.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return o.dy`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${(0,eI.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${i.RouterController.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=i.ConnectorController.getEmailConnector();if(!t)throw Error("w3m-update-email-wallet: Email connector not found");await t.provider.updateEmail({email:this.email}),i.Xs.sendEvent({type:"track",event:"EMAIL_EDIT"}),i.RouterController.replace("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(e){i.SnackController.showError(e),this.loading=!1}}};eM.styles=eN,ej([(0,a.SB)()],eM.prototype,"email",void 0),ej([(0,a.SB)()],eM.prototype,"loading",void 0),eM=ej([(0,n.customElement)("w3m-update-email-wallet-view")],eM);let eD=class extends eC{constructor(){super(),this.email=i.RouterController.state.data?.email,this.onOtpSubmit=async e=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailPrimaryOtp({otp:e}),i.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),i.RouterController.replace("UpdateEmailSecondaryOtp",i.RouterController.state.data))}catch(e){throw i.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onStartOver=()=>{i.RouterController.replace("UpdateEmailWallet",i.RouterController.state.data)}}};eD=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-update-email-primary-otp-view")],eD);let eB=class extends eC{constructor(){super(),this.email=i.RouterController.state.data?.newEmail,this.onOtpSubmit=async e=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailSecondaryOtp({otp:e}),i.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),i.RouterController.reset("Account"))}catch(e){throw i.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onStartOver=()=>{i.RouterController.replace("UpdateEmailWallet",i.RouterController.state.data)}}};eB=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-update-email-secondary-otp-view")],eB);var eL=o.iv`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,eU=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ez=class extends o.oi{constructor(){super(...arguments),this.disconecting=!1}render(){return o.dy`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            This app doesn’t support your current network. Switch to an available option following
            to continue.
          </wui-text>
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t}=i.NetworkController.state;return i.j1.sortRequestedNetworks(e,t).map(e=>o.dy`
        <wui-list-network
          imageSrc=${(0,s.o)(i.fz.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await i.ConnectionController.disconnect(),i.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),i.IN.close()}catch{i.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),i.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){let{isConnected:t}=i.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:n,caipNetwork:o}=i.NetworkController.state,{data:a}=i.RouterController.state;t&&o?.id!==e.id?r?.includes(e.id)?(await i.NetworkController.switchActiveNetwork(e),i._4.navigateAfterNetworkSwitch()):n&&i.RouterController.push("SwitchNetwork",{...a,network:e}):t||(i.NetworkController.setCaipNetwork(e),i.RouterController.push("Connect"))}};ez.styles=eL,eU([(0,a.SB)()],ez.prototype,"disconecting",void 0),ez=eU([(0,n.customElement)("w3m-unsupported-chain-view")],ez);var eF=o.iv`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`,eW=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eH=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.address=i.AccountController.state.address,this.profileName=i.AccountController.state.profileName,this.network=i.NetworkController.state.caipNetwork,this.unsubscribe.push(...[i.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName):i.SnackController.showError("Account not found")})],i.NetworkController.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-wallet-receive-view: No account provided");let e=i.fz.getNetworkImage(this.network);return o.dy` <wui-flex
      flexDirection="column"
      .padding=${["xl","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        @click=${this.onCopyClick.bind(this)}
        text=${n.UiHelperUtil.getTruncateString({string:this.address??"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        imageSrc=${e||""}
        variant="shadeSmall"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${i.ThemeController.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let e=i.NetworkController.getRequestedCaipNetworks(),t=i.NetworkController.checkIfSmartAccountEnabled(),r=i.NetworkController.state.caipNetwork;if(S.$D.getPreferredAccountType()===S.y_.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return r?o.dy`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[i.fz.getNetworkImage(r)??""]}
      ></wui-compatible-network>`:null;let n=(e?.filter(e=>e?.imageId)?.slice(0,5)).map(i.fz.getNetworkImage).filter(Boolean);return o.dy`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${n}
    ></wui-compatible-network>`}onReceiveClick(){i.RouterController.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(i.j1.copyToClopboard(this.address),i.SnackController.showSuccess("Address copied"))}catch{i.SnackController.showError("Failed to copy")}}};eH.styles=eF,eW([(0,a.SB)()],eH.prototype,"address",void 0),eW([(0,a.SB)()],eH.prototype,"profileName",void 0),eW([(0,a.SB)()],eH.prototype,"network",void 0),eH=eW([(0,n.customElement)("w3m-wallet-receive-view")],eH);var eZ=o.iv`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;let eV=class extends o.oi{render(){return o.dy` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t,caipNetwork:r}=i.NetworkController.state,n=i.NetworkController.checkIfSmartAccountEnabled(),a=S.$D.getPreferredAccountType(),l=i.j1.sortRequestedNetworks(e,t);if(n&&a===S.y_.ACCOUNT_TYPES.SMART_ACCOUNT){if(!r)return null;l=[r]}return l.map(e=>o.dy`
        <wui-list-network
          imageSrc=${(0,s.o)(i.fz.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};eV.styles=eZ,eV=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-wallet-compatible-networks-view")],eV);var eq=o.iv`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`,eG=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eY=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.token=i.Si.state.token,this.sendTokenAmount=i.Si.state.sendTokenAmount,this.receiverAddress=i.Si.state.receiverAddress,this.message="Preview Send",this.unsubscribe.push(...[i.Si.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress})])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.getMessage(),o.dy` <wui-flex flexDirection="column" .padding=${["s","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address .receiverAddress=${this.receiverAddress}></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="fill"
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}onButtonClick(){i.RouterController.push("WalletSendPreview")}getMessage(){this.message="Preview Send",this.receiverAddress&&!i.j1.isAddress(this.receiverAddress)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.token||(this.message="Select Token")}};eY.styles=eq,eG([(0,a.SB)()],eY.prototype,"token",void 0),eG([(0,a.SB)()],eY.prototype,"sendTokenAmount",void 0),eG([(0,a.SB)()],eY.prototype,"receiverAddress",void 0),eG([(0,a.SB)()],eY.prototype,"message",void 0),eY=eG([(0,n.customElement)("w3m-wallet-send-view")],eY);var eK=o.iv`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`,eX=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eJ=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tokenBalance=i.AccountController.state.tokenBalance,this.search="",this.onDebouncedSearch=i.j1.debounce(e=>{this.search=e}),this.unsubscribe.push(...[i.AccountController.subscribe(e=>{this.tokenBalance=e.tokenBalance})])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.dy`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return o.dy`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){return this.search?this.tokens=this.tokenBalance?.filter(e=>e.name.toLowerCase().includes(this.search.toLowerCase())):this.tokens=this.tokenBalance,o.dy`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.tokens&&this.tokens.length>0?this.tokens.map(e=>o.dy`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,e)}
                    ?clickable=${!0}
                    tokenName=${e.name}
                    tokenImageUrl=${e.iconUrl}
                    tokenAmount=${e.quantity.numeric}
                    tokenValue=${e.value}
                    tokenCurrency=${e.symbol}
                  ></wui-list-token>`):o.dy`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){i.RouterController.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){i.Si.setToken(e),i.Si.setTokenAmount(void 0),i.RouterController.goBack()}};eJ.styles=eK,eX([(0,a.SB)()],eJ.prototype,"tokenBalance",void 0),eX([(0,a.SB)()],eJ.prototype,"tokens",void 0),eX([(0,a.SB)()],eJ.prototype,"search",void 0),eJ=eX([(0,n.customElement)("w3m-wallet-send-select-token-view")],eJ);var eQ=o.iv`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`,e0=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e1=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.token=i.Si.state.token,this.sendTokenAmount=i.Si.state.sendTokenAmount,this.receiverAddress=i.Si.state.receiverAddress,this.caipNetwork=i.NetworkController.state.caipNetwork,this.unsubscribe.push(...[i.Si.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress}),i.NetworkController.subscribeKey("caipNetwork",e=>this.caipNetwork=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.dy` <wui-flex flexDirection="column" .padding=${["s","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${Number(this.token?.quantity.numeric).toFixed(2)} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text=${n.UiHelperUtil.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
            address=${this.receiverAddress??""}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="shade"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="fill"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){let e=this.token.price*this.sendTokenAmount;return o.dy`<wui-text variant="paragraph-400" color="fg-100"
        >$${e.toFixed(2)}</wui-text
      >`}return null}onSendClick(){i.RouterController.reset("Account"),setTimeout(()=>{i.Si.resetSend()},200)}onCancelClick(){i.RouterController.goBack()}};e1.styles=eQ,e0([(0,a.SB)()],e1.prototype,"token",void 0),e0([(0,a.SB)()],e1.prototype,"sendTokenAmount",void 0),e0([(0,a.SB)()],e1.prototype,"receiverAddress",void 0),e0([(0,a.SB)()],e1.prototype,"caipNetwork",void 0),e1=e0([(0,n.customElement)("w3m-wallet-send-preview-view")],e1);var e2=o.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function e3(e){let{connectors:t}=i.ConnectorController.state,r=t.filter(e=>"ANNOUNCED"===e.type).reduce((e,t)=>(t.info?.rdns&&(e[t.info.rdns]=!0),e),{});return e.map(e=>({...e,installed:!!e.rdns&&!!r[e.rdns??""]})).sort((e,t)=>Number(t.installed)-Number(e.installed))}var e5=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e4="local-paginator",e6=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!i.ApiController.state.wallets.length,this.wallets=i.ApiController.state.wallets,this.recommended=i.ApiController.state.recommended,this.featured=i.ApiController.state.featured,this.unsubscribe.push(...[i.ApiController.subscribeKey("wallets",e=>this.wallets=e),i.ApiController.subscribeKey("recommended",e=>this.recommended=e),i.ApiController.subscribeKey("featured",e=>this.featured=e)])}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return o.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){let e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await i.ApiController.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>o.dy`
        <wui-card-select-loader type="wallet" id=${(0,s.o)(t)}></wui-card-select-loader>
      `)}walletsTemplate(){return e3([...this.featured,...this.recommended,...this.wallets]).map(e=>o.dy`
        <wui-card-select
          imageSrc=${(0,s.o)(i.fz.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
          .installed=${e.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:r,count:n}=i.ApiController.state,o=window.innerWidth<352?3:4,a=e.length+t.length,s=Math.ceil(a/o)*o-a+o;return(s-=e.length?r.length%o:0,0===n&&r.length>0)?null:0===n||[...r,...e,...t].length<n?this.shimmerTemplate(s,e4):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${e4}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.initial){let{page:e,count:t,wallets:r}=i.ApiController.state;r.length<t&&i.ApiController.fetchWallets({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){let t=i.ConnectorController.getConnector(e.id,e.rdns);t?i.RouterController.push("ConnectingExternal",{connector:t}):i.RouterController.push("ConnectingWalletConnect",{wallet:e})}};e6.styles=e2,e5([(0,a.SB)()],e6.prototype,"initial",void 0),e5([(0,a.SB)()],e6.prototype,"wallets",void 0),e5([(0,a.SB)()],e6.prototype,"recommended",void 0),e5([(0,a.SB)()],e6.prototype,"featured",void 0),e6=e5([(0,n.customElement)("w3m-all-wallets-list")],e6);var e8=o.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`,e9=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e7=class extends o.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?o.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await i.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:e}=i.ApiController.state,t=e3(e);return e.length?o.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(e=>o.dy`
            <wui-card-select
              imageSrc=${(0,s.o)(i.fz.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
              .installed=${e.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:o.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){let t=i.ConnectorController.getConnector(e.id,e.rdns);t?i.RouterController.push("ConnectingExternal",{connector:t}):i.RouterController.push("ConnectingWalletConnect",{wallet:e})}};e7.styles=e8,e9([(0,a.SB)()],e7.prototype,"loading",void 0),e9([(0,a.Cb)()],e7.prototype,"query",void 0),e7=e9([(0,n.customElement)("w3m-all-wallets-search")],e7);var te=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tt=class extends o.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(i.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return o.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};te([(0,a.Cb)({type:Array})],tt.prototype,"platforms",void 0),te([(0,a.Cb)()],tt.prototype,"onSelectPlatfrom",void 0),te([(0,a.SB)()],tt.prototype,"buffering",void 0),tt=te([(0,n.customElement)("w3m-connecting-header")],tt);let tr=class extends F{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),i.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=i.ConnectorController.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns),r=e.find(e=>"INJECTED"===e.type);t?await i.ConnectionController.connectExternal(t):r&&await i.ConnectionController.connectExternal(r),i.IN.close(),i.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(e){i.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};tr=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-connecting-wc-browser")],tr);let ti=class extends F{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),i.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:r,href:n}=i.j1.formatNativeUrl(e,this.uri);i.ConnectionController.setWcLinking({name:t,href:n}),i.ConnectionController.setRecentWallet(this.wallet),i.j1.openHref(r,"_blank")}catch{this.error=!0}}};ti=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-connecting-wc-desktop")],ti);let tn=class extends F{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),i.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,name:t}=this.wallet,{redirect:r,href:n}=i.j1.formatNativeUrl(e,this.uri);i.ConnectionController.setWcLinking({name:t,href:n}),i.ConnectionController.setRecentWallet(this.wallet),i.j1.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){let e=i.j1.isIos();document?.visibilityState==="visible"&&!this.error&&e&&(i.ConnectionController.setBuffering(!0),setTimeout(()=>{i.ConnectionController.setBuffering(!1)},5e3))}};tn=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-connecting-wc-mobile")],tn);var to=o.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let ta=class extends F{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),i.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),o.dy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return i.ConnectionController.setWcLinking(void 0),i.ConnectionController.setRecentWallet(this.wallet),o.dy` <wui-qr-code
      size=${e}
      theme=${i.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,s.o)(i.fz.getWalletImage(this.wallet))}
      alt=${(0,s.o)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return o.dy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};ta.styles=to,ta=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-connecting-wc-qrcode")],ta);let ts=class extends o.oi{constructor(){if(super(),this.wallet=i.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");i.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return o.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,s.o)(i.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};ts=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-connecting-wc-unsupported")],ts);let tl=class extends F{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",i.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:r,href:n}=i.j1.formatUniversalUrl(e,this.uri);i.ConnectionController.setWcLinking({name:t,href:n}),i.ConnectionController.setRecentWallet(this.wallet),i.j1.openHref(r,"_blank")}catch{this.error=!0}}};tl=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-connecting-wc-web")],tl);var tc=o.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`,tu=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};function td(){let e=i.RouterController.state.data?.connector?.name,t=i.RouterController.state.data?.wallet?.name,r=i.RouterController.state.data?.network?.name,n=t??e,o=i.ConnectorController.getConnectors(),a=1===o.length&&o[0]?.id==="w3m-email";return{Connect:`Connect ${a?"Email":""} Wallet`,Account:void 0,AccountSettings:void 0,ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:n?`Get ${n}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpgradeToSmartAccount:void 0,UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",UnsupportedChain:"Switch Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",WhatIsABuy:"What is Buy?",BuyInProgress:"Buy",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token"}}let th=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.heading=td()[i.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(i.RouterController.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),i.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){i.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),i.RouterController.push("WhatIsAWallet")}async onClose(){if(i.OptionsController.state.isSiweEnabled){let{SIWEController:e}=await r.e(291).then(r.bind(r,61291));"success"!==e.state.status&&await i.ConnectionController.disconnect()}i.IN.close()}titleTemplate(){return o.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){let{view:e}=i.RouterController.state;return this.showBack&&!("ApproveTransaction"===e||"UpgradeToSmartAccount"===e)?o.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:o.dy`<wui-icon-link
      data-hidden=${"Connect"!==e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?o.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){let t=this.shadowRoot?.querySelector("wui-text");if(t){let r=td()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=r,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){let{history:e}=i.RouterController.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){"ConnectingSiwe"===i.RouterController.state.view?i.RouterController.push("Connect"):i.RouterController.goBack()}};th.styles=[tc],tu([(0,a.SB)()],th.prototype,"heading",void 0),tu([(0,a.SB)()],th.prototype,"buffering",void 0),tu([(0,a.SB)()],th.prototype,"showBack",void 0),th=tu([(0,n.customElement)("w3m-header")],th);var tp=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tf=class extends o.oi{constructor(){super(...arguments),this.data=[]}render(){return o.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>o.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>o.dy`<wui-visual name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};tp([(0,a.Cb)({type:Array})],tf.prototype,"data",void 0),tf=tp([(0,n.customElement)("w3m-help-widget")],tf);var tg=o.iv`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-gray-glass-002);
    background: var(--wui-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`,tw=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tm=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=i.WM.state.currencyImages,this.tokenImages=i.WM.state.tokenImages,this.unsubscribe.push(i.ph.subscribeKey("purchaseCurrency",e=>{e&&"Fiat"!==this.type&&(this.selectedCurrency=this.formatPurchaseCurrency(e))}),i.ph.subscribeKey("paymentCurrency",e=>{e&&"Token"!==this.type&&(this.selectedCurrency=this.formatPaymentCurrency(e))}),i.ph.subscribe(e=>{"Fiat"===this.type?this.currencies=e.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=e.paymentCurrencies.map(this.formatPaymentCurrency)}),i.WM.subscribe(e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}}))}firstUpdated(){i.ph.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.selectedCurrency?.symbol||"",t=this.currencyImages[e]||this.tokenImages[e];return o.dy` <wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?o.dy` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>i.IN.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${(0,s.o)(t)}></wui-image>
            <wui-text color="fg-100"> ${this.selectedCurrency.symbol} </wui-text>
          </wui-flex>`:o.dy`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};tm.styles=tg,tw([(0,a.Cb)({type:String})],tm.prototype,"type",void 0),tw([(0,a.Cb)({type:Number})],tm.prototype,"value",void 0),tw([(0,a.SB)()],tm.prototype,"currencies",void 0),tw([(0,a.SB)()],tm.prototype,"selectedCurrency",void 0),tw([(0,a.SB)()],tm.prototype,"currencyImages",void 0),tw([(0,a.SB)()],tm.prototype,"tokenImages",void 0),tm=tw([(0,n.customElement)("w3m-swap-input")],tm);var tb=o.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;let tv=class extends o.oi{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=i.OptionsController.state;return e||t?o.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=i.OptionsController.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=i.OptionsController.state;return e?o.dy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=i.OptionsController.state;return e?o.dy`<a href=${e}>Privacy Policy</a>`:null}};tv.styles=[tb],tv=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-legal-footer")],tv);var ty=o.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,tC=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tx=class extends o.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:r,chrome_store:a,homepage:s}=this.wallet,l=i.j1.isMobile(),c=i.j1.isIos(),u=i.j1.isAndroid(),d=[t,r,s,a].filter(Boolean).length>1,h=n.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return d&&!l?o.dy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${()=>i.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!d&&s?o.dy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&c?o.dy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&u?o.dy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&i.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&i.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&i.j1.openHref(this.wallet.homepage,"_blank")}};tx.styles=[ty],tC([(0,a.Cb)({type:Object})],tx.prototype,"wallet",void 0),tx=tC([(0,n.customElement)("w3m-mobile-download-links")],tx);var tE=o.iv`
  wui-flex {
    border-top: 1px solid var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;let tk=class extends o.oi{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=i.OptionsController.state;return e||t?o.dy`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return o.dy` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){i.RouterController.push("WhatIsABuy")}};tk.styles=[tE],tk=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-onramp-providers-footer")],tk);var t_=o.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,tA=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tS={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},tR=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=i.SnackController.state.open,this.unsubscribe.push(i.SnackController.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=i.SnackController.state,r=tS[t];return o.dy`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>i.SnackController.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};tR.styles=t_,tA([(0,a.SB)()],tR.prototype,"open",void 0),tR=tA([(0,n.customElement)("w3m-snackbar")],tR);var t$=o.iv`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`,tT=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tP=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.formRef=(0,eI.V)(),this.connectors=i.ConnectorController.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(i.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=this.connectors.length>1;return this.connectors.find(e=>"EMAIL"===e.type)?o.dy`
      <form ${(0,eI.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?o.dy`<wui-separator text="or"></wui-separator>`:null}
    `:null}submitButtonTemplate(){return!this.loading&&this.email.length>3?o.dy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?o.dy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail,this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=i.ConnectorController.getEmailConnector();if(!t)throw Error("w3m-email-login-widget: Email connector not found");let{action:r}=await t.provider.connectEmail({email:this.email});i.Xs.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===r?(i.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),i.RouterController.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===r&&i.RouterController.push("EmailVerifyDevice",{email:this.email})}catch(t){let e=i.j1.parseError(t);e?.includes("Invalid email")?this.error="Invalid email. Try again.":i.SnackController.showError(t)}finally{this.loading=!1}}onFocusEvent(){i.Xs.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};tP.styles=t$,tT([(0,a.SB)()],tP.prototype,"connectors",void 0),tT([(0,a.SB)()],tP.prototype,"email",void 0),tT([(0,a.SB)()],tP.prototype,"loading",void 0),tT([(0,a.SB)()],tP.prototype,"error",void 0),tP=tT([(0,n.customElement)("w3m-email-login-widget")],tP);var tO=o.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    border-radius: 24px;
    transaction: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`,tI=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tN=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.address=i.AccountController.state.address,this.profileImage=i.AccountController.state.profileImage,this.profileName=i.AccountController.state.profileName,this.network=i.NetworkController.state.caipNetwork,this.disconnecting=!1,this.balance=i.AccountController.state.balance,this.balanceSymbol=i.AccountController.state.balanceSymbol,this.unsubscribe.push(...[i.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):this.disconnecting||i.SnackController.showError("Account not found")})],i.NetworkController.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=i.fz.getNetworkImage(this.network);return o.dy`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${(0,s.o)(this.address)}
          address=${(0,s.o)(this.address)}
          imageSrc=${(0,s.o)(null===this.profileImage?void 0:this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="medium-title-600" color="fg-100">
              ${this.profileName?n.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):n.UiHelperUtil.getTruncateString({string:this.address?this.address:"",charsStart:4,charsEnd:4,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-text variant="paragraph-500" color="fg-200"
            >${i.j1.formatBalance(this.balance,this.balanceSymbol)}</wui-text
          >
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${(0,s.o)(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        ${this.onrampTemplate()}
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalMedium"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){let{enableOnramp:e}=i.OptionsController.state;return e?o.dy`
      <wui-list-item
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}emailCardTemplate(){let e=i.MO.getConnectedConnector(),t=i.ConnectorController.getEmailConnector(),{origin:r}=location;return!t||"EMAIL"!==e||r.includes(i.bq.SECURE_SITE)?null:o.dy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickPay(){i.RouterController.push("OnRampProviders")}explorerBtnTemplate(){let{addressExplorerUrl:e}=i.AccountController.state;return e?o.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}emailBtnTemplate(){let e=i.MO.getConnectedConnector(),t=i.ConnectorController.getEmailConnector();if(!t||"EMAIL"!==e)return null;let r=t.provider.getEmail()??"";return o.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}isAllowedNetworkSwitch(){let{requestedCaipNetworks:e}=i.NetworkController.state,t=!!e&&e.length>1,r=e?.find(({id:e})=>e===this.network?.id);return t||!r}onCopyAddress(){try{this.address&&(i.j1.copyToClopboard(this.address),i.SnackController.showSuccess("Address copied"))}catch{i.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&(i.Xs.sendEvent({type:"track",event:"CLICK_NETWORKS"}),i.RouterController.push("Networks"))}onTransactions(){i.Xs.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),i.RouterController.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await i.ConnectionController.disconnect(),i.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),i.IN.close()}catch{i.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),i.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){let{addressExplorerUrl:e}=i.AccountController.state;e&&i.j1.openHref(e,"_blank")}onGoToUpgradeView(){i.Xs.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),i.RouterController.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){i.RouterController.push("UpdateEmailWallet",{email:e})}};tN.styles=tO,tI([(0,a.SB)()],tN.prototype,"address",void 0),tI([(0,a.SB)()],tN.prototype,"profileImage",void 0),tI([(0,a.SB)()],tN.prototype,"profileName",void 0),tI([(0,a.SB)()],tN.prototype,"network",void 0),tI([(0,a.SB)()],tN.prototype,"disconnecting",void 0),tI([(0,a.SB)()],tN.prototype,"balance",void 0),tI([(0,a.SB)()],tN.prototype,"balanceSymbol",void 0),tN=tI([(0,n.customElement)("w3m-account-default-widget")],tN);var tj=o.iv`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tooltip-select {
    width: 100%;
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;let tM={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}]};var tD=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tB=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.address=i.AccountController.state.address,this.profileImage=i.AccountController.state.profileImage,this.profileName=i.AccountController.state.profileName,this.smartAccountDeployed=i.AccountController.state.smartAccountDeployed,this.network=i.NetworkController.state.caipNetwork,this.currentTab=i.AccountController.state.currentTab,this.tokenBalance=i.AccountController.state.tokenBalance,this.unsubscribe.push(...[i.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance,this.smartAccountDeployed=e.smartAccountDeployed):i.IN.close()})],i.NetworkController.subscribe(e=>{this.network=e.caipNetwork}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=i.fz.getNetworkImage(this.network);return o.dy`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${(0,s.o)(this.address)}
        networkSrc=${(0,s.o)(e)}
        icon="chevronBottom"
        avatarSrc=${(0,s.o)(this.profileImage?this.profileImage:void 0)}
        ?isprofilename=${!!this.profileName}
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <wui-tooltip-select
          @click=${this.onBuyClick.bind(this)}
          text="Buy"
          icon="card"
        ></wui-tooltip-select>
        <wui-tooltip-select text="Convert" icon="recycleHorizontal"></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onReceiveClick.bind(this)}
          text="Receive"
          icon="arrowBottomCircle"
        ></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onSendClick.bind(this)}
          text="Send"
          icon="send"
        ></wui-tooltip-select>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth="104px"
        .tabs=${tM.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}listContentTemplate(){return 0===this.currentTab?o.dy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?o.dy`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?o.dy`<w3m-account-activity-widget></w3m-account-activity-widget>`:o.dy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){let e=i.j1.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:r="00"}=i.j1.formatTokenBalance(e);return o.dy`<wui-balance dollars=${t} pennies=${r}></wui-balance>`}return o.dy`<wui-balance dollars="0" pennies="00"></wui-balance>`}activateAccountTemplate(){let e=i.NetworkController.checkIfSmartAccountEnabled(),t=S.$D.getPreferredAccountType();return!e||t===S.y_.ACCOUNT_TYPES.SMART_ACCOUNT||this.smartAccountDeployed?null:o.dy` <wui-promo
      text=${"Activate your account"}
      @click=${this.onUpdateToSmartAccount.bind(this)}
      data-testid="activate-smart-account-promo"
    ></wui-promo>`}onTabChange(e){i.AccountController.setCurrentTab(e)}onProfileButtonClick(){i.RouterController.push("AccountSettings")}onBuyClick(){i.RouterController.push("OnRampProviders")}onReceiveClick(){i.RouterController.push("WalletReceive")}onSendClick(){i.RouterController.push("WalletSend")}onUpdateToSmartAccount(){i.RouterController.push("UpgradeToSmartAccount")}};tB.styles=tj,tD([(0,a.SB)()],tB.prototype,"address",void 0),tD([(0,a.SB)()],tB.prototype,"profileImage",void 0),tD([(0,a.SB)()],tB.prototype,"profileName",void 0),tD([(0,a.SB)()],tB.prototype,"smartAccountDeployed",void 0),tD([(0,a.SB)()],tB.prototype,"network",void 0),tD([(0,a.SB)()],tB.prototype,"currentTab",void 0),tD([(0,a.SB)()],tB.prototype,"tokenBalance",void 0),tB=tD([(0,n.customElement)("w3m-account-wallet-features-widget")],tB);var tL=o.iv`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }
`;let tU=class extends o.oi{render(){return o.dy`<w3m-activity-list page="account"></w3m-activity-list>`}};tU.styles=tL,tU=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-account-activity-widget")],tU);var tz=o.iv`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;let tF=class extends o.oi{render(){return o.dy`${this.nftTemplate()}`}nftTemplate(){return o.dy` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No NFTs yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Transfer from another wallets to get started</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive NFTs</wui-link>
    </wui-flex>`}onReceiveClick(){i.RouterController.push("WalletReceive")}};tF.styles=tz,tF=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-account-nfts-widget")],tF);var tW=o.iv`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }
`,tH=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tZ=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tokenBalance=i.AccountController.state.tokenBalance,this.unsubscribe.push(...[i.AccountController.subscribe(e=>{this.tokenBalance=e.tokenBalance})])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){i.AccountController.fetchTokenBalance()}render(){return o.dy`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?o.dy`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:o.dy` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){return this.tokenBalance?.map(e=>o.dy`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){i.RouterController.push("WalletReceive")}onBuyClick(){i.RouterController.push("OnRampProviders")}};tZ.styles=tW,tH([(0,a.SB)()],tZ.prototype,"tokenBalance",void 0),tZ=tH([(0,n.customElement)("w3m-account-tokens-widget")],tZ);var tV=o.iv`
  :host {
    height: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,tq=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tG="last-transaction",tY=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.address=i.AccountController.state.address,this.transactionsByYear=i.sl.state.transactionsByYear,this.loading=i.sl.state.loading,this.empty=i.sl.state.empty,this.next=i.sl.state.next,i.sl.clearCursor(),this.unsubscribe.push(...[i.AccountController.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,i.sl.resetTransactions(),i.sl.fetchTransactions(e.address))}),i.sl.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next})])}firstUpdated(){i.sl.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.dy` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}templateTransactionsByYear(){let e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((t,r)=>{let i=r===e.length-1,a=parseInt(t,10);return Array(12).fill(null).map((e,t)=>t).reverse().map(e=>{let t=n.TransactionUtil.getTransactionGroupTitle(a,e),r=this.transactionsByYear[a]?.[e];return r?o.dy`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${t}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(r,i)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){let{date:r,descriptions:i,direction:a,isAllNFT:s,images:l,status:c,transfers:u,type:d}=this.getTransactionListItemProps(e),h=u?.length>1;return u?.length!==2||s?h?u.map((e,i)=>{let a=n.TransactionUtil.getTransferDescription(e),s=t&&i===u.length-1;return o.dy` <wui-transaction-list-item
          date=${r}
          direction=${e.direction}
          id=${s&&this.next?tG:""}
          status=${c}
          type=${d}
          .onlyDirectionIcon=${!0}
          .images=${[l[i]]}
          .descriptions=${[a]}
        ></wui-transaction-list-item>`}):o.dy`
      <wui-transaction-list-item
        date=${r}
        .direction=${a}
        id=${t&&this.next?tG:""}
        status=${c}
        type=${d}
        .images=${l}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `:o.dy`
        <wui-transaction-list-item
          date=${r}
          .direction=${a}
          id=${t&&this.next?tG:""}
          status=${c}
          type=${d}
          .images=${l}
          .descriptions=${i}
        ></wui-transaction-list-item>
      `}templateTransactions(e,t){return e.map((r,i)=>{let n=t&&i===e.length-1;return o.dy`${this.templateRenderTransaction(r,n)}`})}emptyStateActivity(){return o.dy`<wui-flex
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return o.dy`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?o.dy`${this.emptyStateAccount()}`:o.dy`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill(o.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){i.RouterController.push("WalletReceive")}createPaginationObserver(){let{projectId:e}=i.OptionsController.state;this.paginationObserver=new IntersectionObserver(([t])=>{t?.isIntersecting&&!this.loading&&(i.sl.fetchTransactions(this.address),i.Xs.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let e=this.shadowRoot?.querySelector(`#${tG}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){let t=ee.E.formatDate(e?.metadata?.minedAt),r=n.TransactionUtil.getTransactionDescriptions(e),i=e?.transfers,o=e?.transfers?.[0],a=!!o&&e?.transfers?.every(e=>!!e.nft_info),s=n.TransactionUtil.getTransactionImages(i);return{date:t,direction:o?.direction,descriptions:r,isAllNFT:a,images:s,status:e.metadata?.status,transfers:i,type:e.metadata?.operationType}}};tY.styles=tV,tq([(0,a.Cb)()],tY.prototype,"page",void 0),tq([(0,a.SB)()],tY.prototype,"address",void 0),tq([(0,a.SB)()],tY.prototype,"transactionsByYear",void 0),tq([(0,a.SB)()],tY.prototype,"loading",void 0),tq([(0,a.SB)()],tY.prototype,"empty",void 0),tq([(0,a.SB)()],tY.prototype,"next",void 0),tY=tq([(0,n.customElement)("w3m-activity-list")],tY);var tK=o.iv`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`,tX=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tJ=class extends o.oi{render(){return o.dy` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?o.dy`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
        >Select token</wui-token-button
      >`:o.dy`<wui-button
      size="md"
      variant="accentBg"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){i.RouterController.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){let e=this.token.price*this.sendTokenAmount;return o.dy`<wui-text variant="small-400" color="fg-200">$${e.toFixed(2)}</wui-text>`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?o.dy` <wui-text variant="small-400" color="error-100">
          ${n.UiHelperUtil.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:o.dy` <wui-text variant="small-400" color="fg-200">
        ${n.UiHelperUtil.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?o.dy`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:o.dy`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){i.Si.setTokenAmount(e.detail)}onMaxClick(){this.token&&i.Si.setTokenAmount(Number(this.token?.quantity.numeric))}onBuyClick(){i.RouterController.push("OnRampProviders")}};tJ.styles=tK,tX([(0,a.Cb)({type:Object})],tJ.prototype,"token",void 0),tX([(0,a.Cb)({type:Number})],tJ.prototype,"sendTokenAmount",void 0),tJ=tX([(0,n.customElement)("w3m-input-token")],tJ);var tQ=o.iv`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`,t0=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t1=class extends o.oi{constructor(){super(...arguments),this.inputElementRef=(0,eI.V)(),this.instructionElementRef=(0,eI.V)(),this.instructionHidden=!!this.receiverAddress}firstUpdated(){this.receiverAddress&&(this.instructionHidden=!0),this.checkHidden()}render(){return o.dy` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${(0,eI.i)(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          size="sm"
          variant="shade"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        ?disabled=${!this.instructionHidden}
        ${(0,eI.i)(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.receiverAddress??""}
        autocomplete="off"
      >
${this.receiverAddress??""}</textarea
      >
    </wui-flex>`}async focusInput(){this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",this.inputElementRef.value?.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",this.inputElementRef.value?.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){this.receiverAddress||this.instructionHidden||this.focusInput()}onBlur(){!this.receiverAddress&&this.instructionHidden&&this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){let e=await navigator.clipboard.readText();i.Si.setReceiverAddress(e)}onInputChange(e){let t=e.target;t.value&&!this.instructionHidden&&this.focusInput(),i.Si.setReceiverAddress(t.value)}};t1.styles=tQ,t0([(0,a.Cb)()],t1.prototype,"receiverAddress",void 0),t0([(0,a.SB)()],t1.prototype,"instructionHidden",void 0),t1=t0([(0,n.customElement)("w3m-input-address")],t1);var t2=o.iv`
  :host {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-gray-glass-010);
  }
`,t3=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t5=class extends o.oi{render(){return o.dy` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$3.20"></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${n.UiHelperUtil.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){return this.caipNetwork?.name?o.dy` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${(0,s.o)(i.fz.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&i.RouterController.push("Networks",{network:e})}};t5.styles=t2,t3([(0,a.Cb)()],t5.prototype,"receiverAddress",void 0),t3([(0,a.Cb)({type:Object})],t5.prototype,"caipNetwork",void 0),t5=t3([(0,n.customElement)("w3m-wallet-send-details")],t5);let t4=!1;class t6{constructor(e){this.initPromise=void 0,this.setIsConnected=e=>{i.AccountController.setIsConnected(e)},this.setCaipAddress=e=>{i.AccountController.setCaipAddress(e)},this.setBalance=(e,t)=>{i.AccountController.setBalance(e,t)},this.fetchTokenBalance=()=>{i.AccountController.fetchTokenBalance()},this.setProfileName=e=>{i.AccountController.setProfileName(e)},this.setProfileImage=e=>{i.AccountController.setProfileImage(e)},this.resetAccount=()=>{i.AccountController.resetAccount()},this.setCaipNetwork=e=>{i.NetworkController.setCaipNetwork(e)},this.getCaipNetwork=()=>i.NetworkController.state.caipNetwork,this.setRequestedCaipNetworks=e=>{i.NetworkController.setRequestedCaipNetworks(e)},this.getApprovedCaipNetworksData=()=>i.NetworkController.getApprovedCaipNetworksData(),this.resetNetwork=()=>{i.NetworkController.resetNetwork()},this.setConnectors=e=>{i.ConnectorController.setConnectors(e)},this.addConnector=e=>{i.ConnectorController.addConnector(e)},this.getConnectors=()=>i.ConnectorController.getConnectors(),this.resetWcConnection=()=>{i.ConnectionController.resetWcConnection()},this.fetchIdentity=e=>i.Lr.fetchIdentity(e),this.setAddressExplorerUrl=e=>{i.AccountController.setAddressExplorerUrl(e)},this.setSmartAccountDeployed=e=>{i.AccountController.setSmartAccountDeployed(e)},this.setConnectedWalletInfo=e=>{i.AccountController.setConnectedWalletInfo(e)},this.setSmartAccountEnabledNetworks=e=>{i.NetworkController.setSmartAccountEnabledNetworks(e)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),i.IN.open(e)}async close(){await this.initOrContinue(),i.IN.close()}setLoading(e){i.IN.setLoading(e)}getThemeMode(){return i.ThemeController.state.themeMode}getThemeVariables(){return i.ThemeController.state.themeVariables}setThemeMode(e){i.ThemeController.setThemeMode(e),(0,n.setColorTheme)(i.ThemeController.state.themeMode)}setThemeVariables(e){i.ThemeController.setThemeVariables(e),(0,n.setThemeVariables)(i.ThemeController.state.themeVariables)}subscribeTheme(e){return i.ThemeController.subscribe(e)}getWalletInfo(){return i.AccountController.state.connectedWalletInfo}subscribeWalletInfo(e){return i.AccountController.subscribeKey("connectedWalletInfo",e)}getState(){return{...i.Ie.state}}subscribeState(e){return i.Ie.subscribe(e)}showErrorMessage(e){i.SnackController.showError(e)}showSuccessMessage(e){i.SnackController.showSuccess(e)}getEvent(){return{...i.Xs.state}}subscribeEvents(e){return i.Xs.subscribe(e)}async initControllers(e){if(i.NetworkController.setClient(e.networkControllerClient),i.NetworkController.setDefaultCaipNetwork(e.defaultChain),i.OptionsController.setProjectId(e.projectId),i.OptionsController.setAllWallets(e.allWallets),i.OptionsController.setIncludeWalletIds(e.includeWalletIds),i.OptionsController.setExcludeWalletIds(e.excludeWalletIds),i.OptionsController.setFeaturedWalletIds(e.featuredWalletIds),i.OptionsController.setTokens(e.tokens),i.OptionsController.setTermsConditionsUrl(e.termsConditionsUrl),i.OptionsController.setPrivacyPolicyUrl(e.privacyPolicyUrl),i.OptionsController.setCustomWallets(e.customWallets),i.OptionsController.setEnableAnalytics(e.enableAnalytics),i.OptionsController.setSdkVersion(e._sdkVersion),i.ConnectionController.setClient(e.connectionControllerClient),e.siweControllerClient){let{SIWEController:t}=await r.e(291).then(r.bind(r,61291));t.setSIWEClient(e.siweControllerClient)}e.metadata&&i.OptionsController.setMetadata(e.metadata),e.themeMode&&i.ThemeController.setThemeMode(e.themeMode),e.themeVariables&&i.ThemeController.setThemeVariables(e.themeVariables),e.enableOnramp&&i.OptionsController.setOnrampEnabled(!!e.enableOnramp),e.enableWalletFeatures&&i.OptionsController.setWalletFeaturesEnabled(!!e.enableWalletFeatures),e.allowUnsupportedChain&&i.NetworkController.setAllowUnsupportedChain(e.allowUnsupportedChain)}async initOrContinue(){return!this.initPromise&&!t4&&i.j1.isClient()&&(t4=!0,this.initPromise=new Promise(async e=>{await Promise.all([Promise.resolve().then(r.bind(r,97637)),Promise.resolve().then(r.bind(r,94059))]);let t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}},94059:function(e,t,r){"use strict";r.r(t),r.d(t,{W3mModal:function(){return u}});var i=r(87180),n=r(97637),o=r(66848),a=r(9845),s=o.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`,l=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let c="scroll-lock",u=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=i.IN.state.open,this.caipAddress=i.AccountController.state.caipAddress,this.isSiweEnabled=i.OptionsController.state.isSiweEnabled,this.initializeTheming(),i.ApiController.prefetch(),this.unsubscribe.push(i.IN.subscribeKey("open",e=>e?this.onOpen():this.onClose()),i.AccountController.subscribe(e=>this.onNewAccountState(e))),i.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?o.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){if(this.isSiweEnabled){let{SIWEController:e}=await r.e(291).then(r.bind(r,61291));"success"!==e.state.status&&await i.ConnectionController.disconnect()}i.IN.close()}initializeTheming(){let{themeVariables:e,themeMode:t}=i.ThemeController.state,r=n.UiHelperUtil.getColorTheme(t);(0,n.initializeTheming)(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,i.SnackController.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=c,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${c}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){let{tagName:r}=t.target;!r||r.includes("W3M-")||r.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAccountState(e){let{isConnected:t,caipAddress:i}=e;if(this.isSiweEnabled){let{SIWEController:e}=await r.e(291).then(r.bind(r,61291));t&&!this.caipAddress&&(this.caipAddress=i),t&&i&&this.caipAddress!==i&&(await e.signOut(),this.onSiweNavigation(),this.caipAddress=i);try{let r=await e.getSession();r&&!t?await e.signOut():t&&!r&&this.onSiweNavigation()}catch(e){t&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?i.RouterController.push("ConnectingSiwe"):i.IN.open({view:"ConnectingSiwe"})}};u.styles=s,l([(0,a.SB)()],u.prototype,"open",void 0),l([(0,a.SB)()],u.prototype,"caipAddress",void 0),l([(0,a.SB)()],u.prototype,"isSiweEnabled",void 0),u=l([(0,n.customElement)("w3m-modal")],u)},97637:function(e,t,r){"use strict";let i,n,o;r.r(t),r.d(t,{TransactionUtil:function(){return na},UiHelperUtil:function(){return tg},WuiAccountButton:function(){return tS},WuiAllWalletsImage:function(){return tI},WuiAvatar:function(){return tC},WuiBalance:function(){return iP},WuiBanner:function(){return iW},WuiButton:function(){return tD},WuiCard:function(){return b},WuiCardSelect:function(){return tY},WuiCardSelectLoader:function(){return tz},WuiChip:function(){return tJ},WuiChipButton:function(){return iD},WuiCompatibleNetwork:function(){return iU},WuiConnectButton:function(){return t1},WuiCtaButton:function(){return t5},WuiEmailInput:function(){return rt},WuiFlex:function(){return tb},WuiGrid:function(){return i7},WuiIcon:function(){return eO},WuiIconBox:function(){return tk},WuiIconLink:function(){return rn},WuiImage:function(){return ej},WuiInputAmount:function(){return i0},WuiInputElement:function(){return rs},WuiInputNumeric:function(){return ru},WuiInputText:function(){return t9},WuiLink:function(){return rp},WuiListAccordion:function(){return io},WuiListContent:function(){return il},WuiListDescription:function(){return iY},WuiListItem:function(){return rw},WuiListNetwork:function(){return id},WuiListToken:function(){return iV},WuiListWallet:function(){return rT},WuiListWalletTransaction:function(){return ig},WuiLoadingHexagon:function(){return eD},WuiLoadingSpinner:function(){return eU},WuiLoadingThumbnail:function(){return eW},WuiLogo:function(){return rI},WuiLogoSelect:function(){return rM},WuiNetworkButton:function(){return rL},WuiNetworkImage:function(){return tV},WuiNoticeCard:function(){return it},WuiOnRampActivityItem:function(){return iv},WuiOnRampProviderItem:function(){return ix},WuiOtp:function(){return rF},WuiPreviewItem:function(){return i6},WuiProfileButton:function(){return iN},WuiPromo:function(){return i_},WuiQrCode:function(){return rG},WuiSearchBar:function(){return rK},WuiSeparator:function(){return nr},WuiShimmer:function(){return eV},WuiSnackbar:function(){return rQ},WuiTabs:function(){return r2},WuiTag:function(){return rS},WuiText:function(){return eJ},WuiTokenButton:function(){return i3},WuiTooltip:function(){return r4},WuiTooltipSelect:function(){return iR},WuiTransactionListItem:function(){return rx},WuiTransactionListItemLoader:function(){return rk},WuiTransactionVisual:function(){return rv},WuiVisual:function(){return tp},WuiVisualThumbnail:function(){return r9},WuiWalletImage:function(){return tT},customElement:function(){return w},initializeTheming:function(){return c},setColorTheme:function(){return u},setThemeVariables:function(){return d}});var a,s,l=r(66848);function c(e,t){i=document.createElement("style"),n=document.createElement("style"),o=document.createElement("style"),i.textContent=h(e).core.cssText,n.textContent=h(e).dark.cssText,o.textContent=h(e).light.cssText,document.head.appendChild(i),document.head.appendChild(n),document.head.appendChild(o),u(t)}function u(e){n&&o&&("light"===e?(n.removeAttribute("media"),o.media="enabled"):(o.removeAttribute("media"),n.media="enabled"))}function d(e){i&&n&&o&&(i.textContent=h(e).core.cssText,n.textContent=h(e).dark.cssText,o.textContent=h(e).light.cssText)}function h(e){return{core:l.iv`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${(0,l.$m)(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,l.$m)(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${(0,l.$m)(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,l.$m)(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,l.$m)(e?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:l.iv`
      :root {
        --w3m-color-mix: ${(0,l.$m)(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,l.$m)(e?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-gray-glass-090: rgba(255, 255, 255, 0.9);
      }
    `,dark:l.iv`
      :root {
        --w3m-color-mix: ${(0,l.$m)(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,l.$m)(e?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-gray-glass-090: rgba(0, 0, 0, 0.9);
      }
    `}}let p=l.iv`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,f=l.iv`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, color;
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,g=l.iv`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function w(e){return function(t){return"function"==typeof t?(customElements.get(e)||customElements.define(e,t),t):function(e,t){let{kind:r,elements:i}=t;return{kind:r,elements:i,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}var m=l.iv`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let b=class extends l.oi{render(){return l.dy`<slot></slot>`}};b.styles=[p,m],b=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([w("wui-card")],b);var v=r(9845),y=l.iv`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;let C=l.YP`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,x=l.YP`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,E=l.YP`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,k=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,_=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,A=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,S=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,R=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,$=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,T=l.YP`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10.537 2.34245C10.8997 2.64654 10.9471 3.187 10.6429 3.54959L5.61072 9.54757C5.45645 9.73144 5.23212 9.84222 4.99229 9.85295C4.75247 9.86368 4.51914 9.77337 4.34906 9.60401L1.40881 6.6761C1.07343 6.34213 1.07238 5.7996 1.40647 5.46433C1.74055 5.12906 2.28326 5.12801 2.61865 5.46198L4.89731 7.73108L9.32942 2.44834C9.63362 2.08576 10.1743 2.03835 10.537 2.34245Z"
    fill="currentColor"
  /></svg
>`,P=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,O=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,I=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,N=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,j=l.YP`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,M=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,D=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,B=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,L=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,U=l.YP`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,z=l.YP`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#47A1FF"
  /></svg
>`,F=l.YP` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,W=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,H=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Z=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,V=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,q=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,G=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Y=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,K=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,X=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,J=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Q=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,ee=l.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,et=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,er=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,ei=l.YP`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,en=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,eo=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,ea=l.YP` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,es=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,el=l.YP`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,ec=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,eu=l.YP`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,ed=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,eh=l.YP`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,ep=l.YP`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,ef=l.YP`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eg=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,ew=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,em=l.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,eb=l.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,ev=l.YP`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,ey=l.YP`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,eC=l.YP`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,ex=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,eE=l.YP`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,ek=l.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,e_=l.YP`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,eA=l.YP`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,eS=l.YP`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,eR=l.YP`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,e$=l.YP`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `;var eT=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eP={add:z,allWallets:C,arrowBottomCircle:x,appStore:E,apple:k,arrowBottom:_,arrowLeft:A,arrowRight:S,arrowTop:R,bank:eA,browser:$,card:eS,checkmark:T,chevronBottom:P,chevronLeft:O,chevronRight:I,chevronTop:N,chromeStore:j,clock:M,close:D,compass:L,coinPlaceholder:B,copy:U,cursor:F,cursorTransparent:e$,desktop:W,disconnect:H,discord:Z,etherscan:V,extension:q,externalLink:G,facebook:Y,filters:K,github:X,google:J,helpCircle:Q,infoCircle:ee,mail:et,mobile:er,networkPlaceholder:ei,nftPlaceholder:en,off:eo,playStore:ea,plus:eR,qrCode:es,recycleHorizontal:e_,refresh:el,search:ec,send:eu,swapHorizontal:ed,swapHorizontalMedium:ep,swapHorizontalBold:eh,swapVertical:ef,telegram:eg,twitch:ew,twitter:em,twitterIcon:eb,verify:ev,verifyFilled:ey,wallet:ex,walletConnect:eE,walletPlaceholder:eC,warningCircle:ek},eO=class extends l.oi{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,l.dy`${eP[this.name]}`}};eO.styles=[p,g,y],eT([(0,v.Cb)()],eO.prototype,"size",void 0),eT([(0,v.Cb)()],eO.prototype,"name",void 0),eT([(0,v.Cb)()],eO.prototype,"color",void 0),eO=eT([w("wui-icon")],eO);var eI=l.iv`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,eN=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ej=class extends l.oi{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return l.dy`<img src=${this.src} alt=${this.alt} />`}};ej.styles=[p,g,eI],eN([(0,v.Cb)()],ej.prototype,"src",void 0),eN([(0,v.Cb)()],ej.prototype,"alt",void 0),ej=eN([w("wui-image")],ej);var eM=l.iv`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let eD=class extends l.oi{render(){return l.dy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};eD.styles=[p,eM],eD=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([w("wui-loading-hexagon")],eD);var eB=l.iv`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,eL=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eU=class extends l.oi{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,l.dy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};eU.styles=[p,eB],eL([(0,v.Cb)()],eU.prototype,"color",void 0),eL([(0,v.Cb)()],eU.prototype,"size",void 0),eU=eL([w("wui-loading-spinner")],eU);var ez=l.iv`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,eF=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eW=class extends l.oi{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return l.dy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};eW.styles=[p,ez],eF([(0,v.Cb)({type:Number})],eW.prototype,"radius",void 0),eW=eF([w("wui-loading-thumbnail")],eW);var eH=l.iv`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,eZ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eV=class extends l.oi{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,l.dy`<slot></slot>`}};eV.styles=[eH],eZ([(0,v.Cb)()],eV.prototype,"width",void 0),eZ([(0,v.Cb)()],eV.prototype,"height",void 0),eZ([(0,v.Cb)()],eV.prototype,"borderRadius",void 0),eV=eZ([w("wui-shimmer")],eV);var eq=r(6176),eG=r(66366);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let eY=(0,eG.XM)(class extends eG.Xe{constructor(e){if(super(e),e.type!==eG.pX.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let r in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.st)e in t||(r.remove(e),this.st.delete(e));for(let e in t){let i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return eq.Jb}});var eK=l.iv`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-title-600 {
    font-size: var(--wui-font-size-medium-title);
    letter-spacing: var(--wui-letter-spacing-medium-title);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`,eX=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eJ=class extends l.oi{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){let e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,l.dy`<slot class=${eY(e)}></slot>`}};eJ.styles=[p,eK],eX([(0,v.Cb)()],eJ.prototype,"variant",void 0),eX([(0,v.Cb)()],eJ.prototype,"color",void 0),eX([(0,v.Cb)()],eJ.prototype,"align",void 0),eJ=eX([w("wui-text")],eJ);let eQ=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,e0=l.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,e1=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,e2=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,e3=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,e5=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,e4=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,e6=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,e8=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,e9=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,e7=l.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,te=l.YP`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,tt=l.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,tr=l.YP`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,ti=l.YP`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,tn=l.YP`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,to=l.YP`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,ta=l.YP`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,ts=l.YP`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,tl=l.YP`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,tc=l.YP`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`;var tu=l.iv`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`,td=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let th={browser:eQ,dao:e0,defi:e1,defiAlt:e2,eth:e3,layers:e5,lock:e4,login:e6,network:e8,nft:e9,noun:e7,profile:te,system:tt,coinbase:tr,onrampCard:ta,moonpay:ti,stripe:tn,paypal:to,google:ts,pencil:tl,lightbulb:tc},tp=class extends l.oi{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,l.dy`${th[this.name]}`}};tp.styles=[p,tu],td([(0,v.Cb)()],tp.prototype,"name",void 0),td([(0,v.Cb)()],tp.prototype,"size",void 0),tp=td([w("wui-visual")],tp);var tf=r(62870);let tg={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName:e=>new URL(e).hostname,getTruncateString:({string:e,charsStart:t,charsEnd:r,truncate:i})=>e.length<=t+r?e:"end"===i?`${e.substring(0,t)}...`:"start"===i?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`,generateAvatarColors(e){let t=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(t),i=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),n=100-3*Number(i?.replace("px","")),o=`${n}% ${n}% at 65% 40%`,a=[];for(let e=0;e<5;e+=1){let t=this.tintColor(r,.15*e);a.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`
    --local-color-1: ${a[0]};
    --local-color-2: ${a[1]};
    --local-color-3: ${a[2]};
    --local-color-4: ${a[3]};
    --local-color-5: ${a[4]};
    --local-radial-circle: ${o}
   `},hexToRgb(e){let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){let[r,i,n]=e;return[Math.round(r+(255-r)*t),Math.round(i+(255-i)*t),Math.round(n+(255-n)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark"),splitBalance(e){let t=e.split(".");return 2===t.length?[t[0],t[1]]:["0","00"]},roundNumber:(e,t,r)=>Math.abs(e)>=t?Number(e.toFixed(r)):e};var tw=l.iv`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,tm=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tb=class extends l.oi{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&tg.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&tg.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&tg.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&tg.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&tg.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&tg.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&tg.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&tg.getSpacingStyles(this.margin,3)};
    `,l.dy`<slot></slot>`}};tb.styles=[p,tw],tm([(0,v.Cb)()],tb.prototype,"flexDirection",void 0),tm([(0,v.Cb)()],tb.prototype,"flexWrap",void 0),tm([(0,v.Cb)()],tb.prototype,"flexBasis",void 0),tm([(0,v.Cb)()],tb.prototype,"flexGrow",void 0),tm([(0,v.Cb)()],tb.prototype,"flexShrink",void 0),tm([(0,v.Cb)()],tb.prototype,"alignItems",void 0),tm([(0,v.Cb)()],tb.prototype,"justifyContent",void 0),tm([(0,v.Cb)()],tb.prototype,"columnGap",void 0),tm([(0,v.Cb)()],tb.prototype,"rowGap",void 0),tm([(0,v.Cb)()],tb.prototype,"gap",void 0),tm([(0,v.Cb)()],tb.prototype,"padding",void 0),tm([(0,v.Cb)()],tb.prototype,"margin",void 0),tb=tm([w("wui-flex")],tb);var tv=l.iv`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,ty=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tC=class extends l.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return l.dy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",l.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=tg.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};tC.styles=[p,tv],ty([(0,v.Cb)()],tC.prototype,"imageSrc",void 0),ty([(0,v.Cb)()],tC.prototype,"alt",void 0),ty([(0,v.Cb)()],tC.prototype,"address",void 0),tC=ty([w("wui-avatar")],tC);var tx=l.iv`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,tE=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tk=class extends l.oi{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e=this.iconSize||this.size,t="lg"===this.size,r="xl"===this.size,i="gray"===this.background,n="opaque"===this.background,o="accent-100"===this.backgroundColor&&n||"success-100"===this.backgroundColor&&n||"error-100"===this.backgroundColor&&n||"inverse-100"===this.backgroundColor&&n,a=`var(--wui-color-${this.backgroundColor})`;return o?a=`var(--wui-icon-box-bg-${this.backgroundColor})`:i&&(a=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${a};
       --local-bg-mix: ${o||i?"100%":t?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${t?"xxs":r?"s":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,l.dy` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};tk.styles=[p,f,tx],tE([(0,v.Cb)()],tk.prototype,"size",void 0),tE([(0,v.Cb)()],tk.prototype,"backgroundColor",void 0),tE([(0,v.Cb)()],tk.prototype,"iconColor",void 0),tE([(0,v.Cb)()],tk.prototype,"iconSize",void 0),tE([(0,v.Cb)()],tk.prototype,"background",void 0),tE([(0,v.Cb)({type:Boolean})],tk.prototype,"border",void 0),tE([(0,v.Cb)()],tk.prototype,"borderColor",void 0),tE([(0,v.Cb)()],tk.prototype,"icon",void 0),tk=tE([w("wui-icon-box")],tk);var t_=l.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,tA=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tS=class extends l.oi{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return l.dy`
      <button
        ?disabled=${this.disabled}
        class=${(0,tf.o)(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?tg.getTruncateString({string:this.isProfileName?this.profileName:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return l.dy` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){let e=this.networkSrc?l.dy`<wui-image src=${this.networkSrc}></wui-image>`:l.dy`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return l.dy`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};tS.styles=[p,f,t_],tA([(0,v.Cb)()],tS.prototype,"networkSrc",void 0),tA([(0,v.Cb)()],tS.prototype,"avatarSrc",void 0),tA([(0,v.Cb)()],tS.prototype,"balance",void 0),tA([(0,v.Cb)({type:Boolean})],tS.prototype,"isUnsupportedChain",void 0),tA([(0,v.Cb)({type:Boolean})],tS.prototype,"disabled",void 0),tA([(0,v.Cb)({type:Boolean})],tS.prototype,"isProfileName",void 0),tA([(0,v.Cb)()],tS.prototype,"address",void 0),tA([(0,v.Cb)()],tS.prototype,"profileName",void 0),tA([(0,v.Cb)()],tS.prototype,"charsStart",void 0),tA([(0,v.Cb)()],tS.prototype,"charsEnd",void 0),tS=tA([w("wui-account-button")],tS);var tR=l.iv`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`,t$=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tT=class extends l.oi{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),l.dy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?l.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?l.dy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:l.dy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};tT.styles=[p,tR],t$([(0,v.Cb)()],tT.prototype,"size",void 0),t$([(0,v.Cb)()],tT.prototype,"name",void 0),t$([(0,v.Cb)()],tT.prototype,"imageSrc",void 0),t$([(0,v.Cb)()],tT.prototype,"walletIcon",void 0),t$([(0,v.Cb)({type:Boolean})],tT.prototype,"installed",void 0),t$([(0,v.Cb)()],tT.prototype,"badgeSize",void 0),tT=t$([w("wui-wallet-image")],tT);var tP=l.iv`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`,tO=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tI=class extends l.oi{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return l.dy`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>l.dy`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${(0,tf.o)(t)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(4-this.walletImages.length)].map(()=>l.dy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};tI.styles=[p,tP],tO([(0,v.Cb)({type:Array})],tI.prototype,"walletImages",void 0),tI=tO([w("wui-all-wallets-image")],tI);var tN=l.iv`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--local-border-radius);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  /* xs settings */
  button[data-size='xs'] {
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs);
  }

  button[data-size='xs'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-xxs);
  }

  button[data-size='xs'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-xxs);
  }

  /* sm settings */
  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'][data-icon-right='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'][data-icon-left='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  /* md settings */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  /* lg settings */
  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
  }

  button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-m);
  }

  button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-m);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,tj=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tM={xs:"small-600",sm:"paragraph-600",md:"small-600",mdl:"small-600",lg:"paragraph-600"},tD=class extends l.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;let e=this.textVariant??tM[this.size];return l.dy`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?l.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:l.dy``}};tD.styles=[p,f,tN],tj([(0,v.Cb)()],tD.prototype,"size",void 0),tj([(0,v.Cb)({type:Boolean})],tD.prototype,"disabled",void 0),tj([(0,v.Cb)({type:Boolean})],tD.prototype,"fullWidth",void 0),tj([(0,v.Cb)({type:Boolean})],tD.prototype,"loading",void 0),tj([(0,v.Cb)()],tD.prototype,"variant",void 0),tj([(0,v.Cb)({type:Boolean})],tD.prototype,"hasIconLeft",void 0),tj([(0,v.Cb)({type:Boolean})],tD.prototype,"hasIconRight",void 0),tj([(0,v.Cb)()],tD.prototype,"borderRadius",void 0),tj([(0,v.Cb)()],tD.prototype,"textVariant",void 0),tD=tj([w("wui-button")],tD);let tB=l.YP`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var tL=l.iv`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`,tU=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tz=class extends l.oi{constructor(){super(...arguments),this.type="wallet"}render(){return l.dy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?l.dy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${tB}`:l.dy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};tz.styles=[p,f,tL],tU([(0,v.Cb)()],tz.prototype,"type",void 0),tz=tU([w("wui-card-select-loader")],tz);let tF=l.YP`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,tW=l.YP`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var tH=l.iv`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,tZ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tV=class extends l.oi{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,l.dy`${this.templateVisual()} ${({sm:tF,md:tB,lg:tW})[this.size]}`}templateVisual(){return this.imageSrc?l.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:l.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};tV.styles=[p,tH],tZ([(0,v.Cb)()],tV.prototype,"size",void 0),tZ([(0,v.Cb)()],tV.prototype,"name",void 0),tZ([(0,v.Cb)()],tV.prototype,"imageSrc",void 0),tZ([(0,v.Cb)({type:Boolean})],tV.prototype,"selected",void 0),tV=tZ([w("wui-network-image")],tV);var tq=l.iv`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`,tG=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tY=class extends l.oi{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return l.dy`
      <button data-selected=${(0,tf.o)(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?l.dy`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${(0,tf.o)(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:l.dy`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,tf.o)(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};tY.styles=[p,f,tq],tG([(0,v.Cb)()],tY.prototype,"name",void 0),tG([(0,v.Cb)()],tY.prototype,"type",void 0),tG([(0,v.Cb)()],tY.prototype,"imageSrc",void 0),tG([(0,v.Cb)({type:Boolean})],tY.prototype,"disabled",void 0),tG([(0,v.Cb)({type:Boolean})],tY.prototype,"selected",void 0),tG([(0,v.Cb)({type:Boolean})],tY.prototype,"installed",void 0),tY=tG([w("wui-card-select")],tY);var tK=l.iv`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-error-glass-010);
    background-color: var(--wui-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon,
  a[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-error-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-error-glass-020);
  }
`,tX=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tJ=class extends l.oi{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){let e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant;return l.dy`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e?"small-600":"paragraph-600"} color="inherit">
          ${this.title?this.title:tg.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?l.dy`<wui-image src=${this.imageSrc}></wui-image>`:null}};tJ.styles=[p,f,tK],tX([(0,v.Cb)()],tJ.prototype,"variant",void 0),tX([(0,v.Cb)()],tJ.prototype,"imageSrc",void 0),tX([(0,v.Cb)({type:Boolean})],tJ.prototype,"disabled",void 0),tX([(0,v.Cb)()],tJ.prototype,"icon",void 0),tX([(0,v.Cb)()],tJ.prototype,"href",void 0),tX([(0,v.Cb)()],tJ.prototype,"text",void 0),tJ=tX([w("wui-chip")],tJ);var tQ=l.iv`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,t0=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t1=class extends l.oi{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e="md"===this.size?"paragraph-600":"small-600";return l.dy`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?l.dy`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};t1.styles=[p,f,tQ],t0([(0,v.Cb)()],t1.prototype,"size",void 0),t0([(0,v.Cb)({type:Boolean})],t1.prototype,"loading",void 0),t1=t0([w("wui-connect-button")],t1);var t2=l.iv`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,t3=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t5=class extends l.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return l.dy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};t5.styles=[p,f,t2],t3([(0,v.Cb)({type:Boolean})],t5.prototype,"disabled",void 0),t3([(0,v.Cb)()],t5.prototype,"label",void 0),t3([(0,v.Cb)()],t5.prototype,"buttonLabel",void 0),t5=t3([w("wui-cta-button")],t5);var t4=r(92513),t6=l.iv`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px 40px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,t8=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t9=class extends l.oi{constructor(){super(...arguments),this.inputElementRef=(0,t4.V)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){let e=`wui-size-${this.size}`;return l.dy` ${this.templateIcon()}
      <input
        ${(0,t4.i)(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${(0,tf.o)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${(0,tf.o)(this.value)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?l.dy`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};t9.styles=[p,f,t6],t8([(0,v.Cb)()],t9.prototype,"size",void 0),t8([(0,v.Cb)()],t9.prototype,"icon",void 0),t8([(0,v.Cb)({type:Boolean})],t9.prototype,"disabled",void 0),t8([(0,v.Cb)()],t9.prototype,"placeholder",void 0),t8([(0,v.Cb)()],t9.prototype,"type",void 0),t8([(0,v.Cb)()],t9.prototype,"keyHint",void 0),t8([(0,v.Cb)()],t9.prototype,"value",void 0),t9=t8([w("wui-input-text")],t9);var t7=l.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,re=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rt=class extends l.oi{constructor(){super(...arguments),this.disabled=!1}render(){return l.dy`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?l.dy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};rt.styles=[p,t7],re([(0,v.Cb)()],rt.prototype,"errorMessage",void 0),re([(0,v.Cb)({type:Boolean})],rt.prototype,"disabled",void 0),re([(0,v.Cb)()],rt.prototype,"value",void 0),rt=re([w("wui-email-input")],rt);var rr=l.iv`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,ri=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rn=class extends l.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){let e="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",t="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${t});
`,l.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};rn.styles=[p,f,g,rr],ri([(0,v.Cb)()],rn.prototype,"size",void 0),ri([(0,v.Cb)({type:Boolean})],rn.prototype,"disabled",void 0),ri([(0,v.Cb)()],rn.prototype,"icon",void 0),ri([(0,v.Cb)()],rn.prototype,"iconColor",void 0),rn=ri([w("wui-icon-link")],rn);var ro=l.iv`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`,ra=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rs=class extends l.oi{constructor(){super(...arguments),this.icon="copy"}render(){return l.dy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};rs.styles=[p,f,ro],ra([(0,v.Cb)()],rs.prototype,"icon",void 0),rs=ra([w("wui-input-element")],rs);var rl=l.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }
`,rc=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ru=class extends l.oi{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return l.dy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};ru.styles=[p,f,rl],rc([(0,v.Cb)({type:Boolean})],ru.prototype,"disabled",void 0),rc([(0,v.Cb)({type:String})],ru.prototype,"value",void 0),ru=rc([w("wui-input-numeric")],ru);var rd=l.iv`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`,rh=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rp=class extends l.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return l.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};rp.styles=[p,f,rd],rh([(0,v.Cb)({type:Boolean})],rp.prototype,"disabled",void 0),rh([(0,v.Cb)()],rp.prototype,"color",void 0),rp=rh([w("wui-link")],rp);var rf=l.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,rg=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rw=class extends l.oi{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return l.dy`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${(0,tf.o)(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return l.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return l.dy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",r=this.iconSize?this.iconSize:t;return l.dy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?l.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:l.dy``}chevronTemplate(){return this.chevron?l.dy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};rw.styles=[p,f,rf],rg([(0,v.Cb)()],rw.prototype,"icon",void 0),rg([(0,v.Cb)()],rw.prototype,"iconSize",void 0),rg([(0,v.Cb)()],rw.prototype,"variant",void 0),rg([(0,v.Cb)()],rw.prototype,"iconVariant",void 0),rg([(0,v.Cb)({type:Boolean})],rw.prototype,"disabled",void 0),rg([(0,v.Cb)()],rw.prototype,"imageSrc",void 0),rg([(0,v.Cb)()],rw.prototype,"alt",void 0),rg([(0,v.Cb)({type:Boolean})],rw.prototype,"chevron",void 0),rg([(0,v.Cb)({type:Boolean})],rw.prototype,"loading",void 0),rw=rg([w("wui-list-item")],rw),(a=s||(s={})).approve="approved",a.bought="bought",a.borrow="borrowed",a.burn="burnt",a.cancel="canceled",a.claim="claimed",a.deploy="deployed",a.deposit="deposited",a.execute="executed",a.mint="minted",a.receive="received",a.repay="repaid",a.send="sent",a.sell="sold",a.stake="staked",a.trade="swapped",a.unstake="unstaked",a.withdraw="withdrawn";var rm=l.iv`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`,rb=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rv=class extends l.oi{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){let[e,t]=this.images,r=e?.type==="NFT",i=t?.url?"NFT"===t.type:r;return this.style.cssText=`
    --local-left-border-radius: ${r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    --local-right-border-radius: ${i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    `,l.dy`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[e,t]=this.images,r=e?.type;return 2===this.images.length&&(e?.url||t?.url)?l.dy`<div class="swap-images-container">
        ${e?.url?l.dy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?l.dy`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?l.dy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===r?l.dy`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:l.dy`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-100";return(e=this.getIcon(),this.status&&(t=this.getStatusColor()),e)?l.dy`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};rv.styles=[rm],rb([(0,v.Cb)()],rv.prototype,"type",void 0),rb([(0,v.Cb)()],rv.prototype,"status",void 0),rb([(0,v.Cb)()],rv.prototype,"direction",void 0),rb([(0,v.Cb)({type:Boolean})],rv.prototype,"onlyDirectionIcon",void 0),rb([(0,v.Cb)({type:Array})],rv.prototype,"images",void 0),rb([(0,v.Cb)({type:Object})],rv.prototype,"secondImage",void 0),rv=rb([w("wui-transaction-visual")],rv);var ry=l.iv`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`,rC=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rx=class extends l.oi{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return l.dy`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,tf.o)(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${(0,tf.o)(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${s[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let e=this.descriptions?.[0];return e?l.dy`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){let e=this.descriptions?.[1];return e?l.dy`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};rx.styles=[p,ry],rC([(0,v.Cb)()],rx.prototype,"type",void 0),rC([(0,v.Cb)({type:Array})],rx.prototype,"descriptions",void 0),rC([(0,v.Cb)()],rx.prototype,"date",void 0),rC([(0,v.Cb)({type:Boolean})],rx.prototype,"onlyDirectionIcon",void 0),rC([(0,v.Cb)()],rx.prototype,"status",void 0),rC([(0,v.Cb)()],rx.prototype,"direction",void 0),rC([(0,v.Cb)({type:Array})],rx.prototype,"images",void 0),rC([(0,v.Cb)({type:Array})],rx.prototype,"price",void 0),rC([(0,v.Cb)({type:Array})],rx.prototype,"amount",void 0),rC([(0,v.Cb)({type:Array})],rx.prototype,"symbol",void 0),rx=rC([w("wui-transaction-list-item")],rx);var rE=l.iv`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let rk=class extends l.oi{render(){return l.dy`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};rk.styles=[p,rE],rk=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([w("wui-transaction-list-item-loader")],rk);var r_=l.iv`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 9px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`,rA=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rS=class extends l.oi{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;let e="md"===this.size?"mini-700":"micro-700";return l.dy`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};rS.styles=[p,r_],rA([(0,v.Cb)()],rS.prototype,"variant",void 0),rA([(0,v.Cb)()],rS.prototype,"size",void 0),rS=rA([w("wui-tag")],rS);var rR=l.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,r$=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rT=class extends l.oi{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return l.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?l.dy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?l.dy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?l.dy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:l.dy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?l.dy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?l.dy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};rT.styles=[p,f,rR],r$([(0,v.Cb)({type:Array})],rT.prototype,"walletImages",void 0),r$([(0,v.Cb)()],rT.prototype,"imageSrc",void 0),r$([(0,v.Cb)()],rT.prototype,"name",void 0),r$([(0,v.Cb)()],rT.prototype,"tagLabel",void 0),r$([(0,v.Cb)()],rT.prototype,"tagVariant",void 0),r$([(0,v.Cb)()],rT.prototype,"icon",void 0),r$([(0,v.Cb)()],rT.prototype,"walletIcon",void 0),r$([(0,v.Cb)({type:Boolean})],rT.prototype,"installed",void 0),r$([(0,v.Cb)({type:Boolean})],rT.prototype,"disabled",void 0),r$([(0,v.Cb)({type:Boolean})],rT.prototype,"showAllWallets",void 0),rT=r$([w("wui-list-wallet")],rT);var rP=l.iv`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,rO=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rI=class extends l.oi{constructor(){super(...arguments),this.logo="google"}render(){return l.dy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};rI.styles=[p,rP],rO([(0,v.Cb)()],rI.prototype,"logo",void 0),rI=rO([w("wui-logo")],rI);var rN=l.iv`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,rj=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rM=class extends l.oi{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return l.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};rM.styles=[p,f,rN],rj([(0,v.Cb)()],rM.prototype,"logo",void 0),rj([(0,v.Cb)({type:Boolean})],rM.prototype,"disabled",void 0),rM=rj([w("wui-logo-select")],rM);var rD=l.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`,rB=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rL=class extends l.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return l.dy`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?l.dy`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?l.dy`<wui-image src=${this.imageSrc}></wui-image>`:l.dy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};rL.styles=[p,f,rD],rB([(0,v.Cb)()],rL.prototype,"imageSrc",void 0),rB([(0,v.Cb)({type:Boolean})],rL.prototype,"isUnsupportedChain",void 0),rB([(0,v.Cb)({type:Boolean})],rL.prototype,"disabled",void 0),rL=rB([w("wui-network-button")],rL);var rU=l.iv`
  :host {
    position: relative;
    display: block;
  }
`,rz=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rF=class extends l.oi{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(e=>""!==e),this.handleKeyDown=(e,t)=>{let r=e.target,i=this.getInputElement(r);if(!i)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();let n=i.selectionStart;switch(e.key){case"ArrowLeft":n&&i.setSelectionRange(n+1,n+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===i.value?this.focusInputField("prev",t):this.updateInput(i,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){let e=t+1;if(!this.shouldInputBeEnabled(e))return;let r=this.numerics[e<this.length?e:t],i=r?this.getInputElement(r):void 0;i&&(i.disabled=!1,i.focus())}if("prev"===e){let e=t-1,r=this.numerics[e>-1?e:t],i=r?this.getInputElement(r):void 0;i&&i.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return l.dy`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>l.dy`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @click=${e=>this.selectInput(e)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,r){let i=this.numerics[t],n=e||(i?this.getInputElement(i):void 0);n&&(n.value=r,this.values=this.values.map((e,i)=>i===t?r:e))}selectInput(e){let t=e.target;if(t){let e=this.getInputElement(t);e?.select()}}handleInput(e,t){let r=e.target,i=this.getInputElement(r);if(i){let r=i.value;"insertFromPaste"===e.inputType?this.handlePaste(i,r,t):tg.isNumber(r)&&e.data?(this.updateInput(i,t,e.data),this.focusInputField("next",t)):this.updateInput(i,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,r){let i=t[0];if(i&&tg.isNumber(i)){this.updateInput(e,r,i);let n=t.substring(1);if(r+1<this.length&&n.length){let e=this.numerics[r+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,n,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){let e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};rF.styles=[p,rU],rz([(0,v.Cb)({type:Number})],rF.prototype,"length",void 0),rz([(0,v.Cb)({type:String})],rF.prototype,"otp",void 0),rz([(0,v.SB)()],rF.prototype,"values",void 0),rF=rz([w("wui-otp")],rF);var rW=r(52644);function rH(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+.1}let rZ={generate(e,t,r){let i="#141414",n=[],o=function(e,t){let r=Array.prototype.slice.call(rW.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),i=Math.sqrt(r.length);return r.reduce((e,t,r)=>(r%i==0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,0),a=t/o.length,s=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];s.forEach(({x:e,y:t})=>{let r=(o.length-7)*a*e,c=(o.length-7)*a*t;for(let e=0;e<s.length;e+=1){let t=a*(7-2*e);n.push(l.YP`
            <rect
              fill=${2===e?i:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*.45:.45*t}
              ry= ${0===e?(t-5)*.45:.45*t}
              stroke=${i}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?c+a*e+2.5:c+a*e}
              y= ${0===e?r+a*e+2.5:r+a*e}
            />
          `)}});let c=Math.floor((r+25)/a),u=o.length/2-c/2,d=o.length/2+c/2-1,h=[];o.forEach((e,t)=>{e.forEach((e,r)=>{!o[t][r]||t<7&&r<7||t>o.length-8&&r<7||t<7&&r>o.length-8||t>u&&t<d&&r>u&&r<d||h.push([t*a+a/2,r*a+a/2])})});let p={};return h.forEach(([e,t])=>{p[e]?p[e]?.push(t):p[e]=[t]}),Object.entries(p).map(([e,t])=>{let r=t.filter(e=>t.every(t=>!rH(e,t,a)));return[Number(e),r]}).forEach(([e,t])=>{t.forEach(t=>{n.push(l.YP`<circle cx=${e} cy=${t} fill=${i} r=${a/2.5} />`)})}),Object.entries(p).filter(([e,t])=>t.length>1).map(([e,t])=>{let r=t.filter(e=>t.some(t=>rH(e,t,a)));return[Number(e),r]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let r=[];for(let e of t){let t=r.find(t=>t.some(t=>rH(e,t,a)));t?t.push(e):r.push([e])}return[e,r.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,r])=>{n.push(l.YP`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${i}
                stroke-width=${a/1.25}
                stroke-linecap="round"
              />
            `)})}),n}};var rV=l.iv`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,rq=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rG=class extends l.oi{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,l.dy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e="light"===this.theme?this.size:this.size-32;return l.YP`
      <svg height=${e} width=${e}>
        ${rZ.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?l.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:l.dy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};rG.styles=[p,rV],rq([(0,v.Cb)()],rG.prototype,"uri",void 0),rq([(0,v.Cb)({type:Number})],rG.prototype,"size",void 0),rq([(0,v.Cb)()],rG.prototype,"theme",void 0),rq([(0,v.Cb)()],rG.prototype,"imageSrc",void 0),rq([(0,v.Cb)()],rG.prototype,"alt",void 0),rq([(0,v.Cb)({type:Boolean})],rG.prototype,"arenaClear",void 0),rG=rq([w("wui-qr-code")],rG);var rY=l.iv`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let rK=class extends l.oi{constructor(){super(...arguments),this.inputComponentRef=(0,t4.V)()}render(){return l.dy`
      <wui-input-text
        ${(0,t4.i)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};rK.styles=[p,rY],rK=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([w("wui-search-bar")],rK);var rX=l.iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`,rJ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rQ=class extends l.oi{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return l.dy`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};rQ.styles=[p,rX],rJ([(0,v.Cb)()],rQ.prototype,"backgroundColor",void 0),rJ([(0,v.Cb)()],rQ.prototype,"iconColor",void 0),rJ([(0,v.Cb)()],rQ.prototype,"icon",void 0),rJ([(0,v.Cb)()],rQ.prototype,"message",void 0),rQ=rJ([w("wui-snackbar")],rQ);var r0=l.iv`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,r1=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r2=class extends l.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{let r=t===this.activeTab;return l.dy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?l.dy`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let r=this.buttons[this.activeTab],i=this.buttons[e],n=r?.querySelector("wui-text"),o=i?.querySelector("wui-text"),a=i?.getBoundingClientRect(),s=o?.getBoundingClientRect();r&&n&&!t&&e!==this.activeTab&&(n.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&s&&o&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+s.width)+6}px`,i.animate([{width:`${a.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};r2.styles=[p,f,r0],r1([(0,v.Cb)({type:Array})],r2.prototype,"tabs",void 0),r1([(0,v.Cb)()],r2.prototype,"onTabChange",void 0),r1([(0,v.Cb)({type:Array})],r2.prototype,"buttons",void 0),r1([(0,v.Cb)({type:Boolean})],r2.prototype,"disabled",void 0),r1([(0,v.Cb)()],r2.prototype,"localTabWidth",void 0),r1([(0,v.SB)()],r2.prototype,"activeTab",void 0),r1([(0,v.SB)()],r2.prototype,"isDense",void 0),r2=r1([w("wui-tabs")],r2);var r3=l.iv`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,r5=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r4=class extends l.oi{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,l.dy`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill"===this.variant?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};r4.styles=[p,f,r3],r5([(0,v.Cb)()],r4.prototype,"placement",void 0),r5([(0,v.Cb)()],r4.prototype,"variant",void 0),r5([(0,v.Cb)()],r4.prototype,"message",void 0),r4=r5([w("wui-tooltip")],r4);var r6=l.iv`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`,r8=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r9=class extends l.oi{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,l.dy`${this.templateVisual()}`}templateVisual(){return this.imageSrc?l.dy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:l.dy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};r9.styles=[p,r6],r8([(0,v.Cb)()],r9.prototype,"imageSrc",void 0),r8([(0,v.Cb)()],r9.prototype,"alt",void 0),r8([(0,v.Cb)({type:Boolean})],r9.prototype,"borderRadiusFull",void 0),r9=r8([w("wui-visual-thumbnail")],r9);var r7=l.iv`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`,ie=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let it=class extends l.oi{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return l.dy`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};it.styles=[p,f,r7],ie([(0,v.Cb)()],it.prototype,"label",void 0),ie([(0,v.Cb)()],it.prototype,"description",void 0),ie([(0,v.Cb)()],it.prototype,"icon",void 0),it=ie([w("wui-notice-card")],it);var ir=l.iv`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`,ii=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let io=class extends l.oi{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has("textTitle")||e.has("overflowedContent"))&&setTimeout(()=>{this.checkHeight()},1)}checkHeight(){this.updateComplete.then(()=>{let e=this.shadowRoot?.querySelector(".heightContent"),t=this.shadowRoot?.querySelector(".textContent");if(e&&t){this.scrollElement=e;let r=t?.scrollHeight;r&&r>100&&(this.enableAccordion=!0,this.scrollHeightElement=r,this.requestUpdate())}})}render(){return l.dy`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${!this.enableAccordion||!!this.toggled}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){let e=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?"100px":`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:"100px"}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?l.dy` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};io.styles=[p,f,ir],ii([(0,v.Cb)()],io.prototype,"textTitle",void 0),ii([(0,v.Cb)()],io.prototype,"overflowedContent",void 0),io=ii([w("wui-list-accordion")],io);var ia=l.iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,is=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let il=class extends l.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return l.dy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?l.dy`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?l.dy` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:l.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};il.styles=[p,f,ia],is([(0,v.Cb)()],il.prototype,"imageSrc",void 0),is([(0,v.Cb)()],il.prototype,"textTitle",void 0),is([(0,v.Cb)()],il.prototype,"textValue",void 0),il=is([w("wui-list-content")],il);var ic=l.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,iu=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let id=class extends l.oi{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.transparent=!1}render(){return l.dy`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        ${this.templateNetworkImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
      </button>
    `}templateNetworkImage(){return this.imageSrc?l.dy`<wui-network-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-network-image>`:this.imageSrc?null:l.dy`<wui-network-image size="sm" name=${this.name}></wui-network-image>`}};id.styles=[p,f,ic],iu([(0,v.Cb)()],id.prototype,"imageSrc",void 0),iu([(0,v.Cb)()],id.prototype,"name",void 0),iu([(0,v.Cb)({type:Boolean})],id.prototype,"disabled",void 0),iu([(0,v.Cb)({type:Boolean})],id.prototype,"transparent",void 0),id=iu([w("wui-list-network")],id);var ih=l.iv`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,ip=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ig=class extends l.oi{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return l.dy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?l.dy`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:l.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};ig.styles=[p,f,ih],ip([(0,v.Cb)()],ig.prototype,"amount",void 0),ip([(0,v.Cb)()],ig.prototype,"networkCurreny",void 0),ip([(0,v.Cb)()],ig.prototype,"networkImageUrl",void 0),ip([(0,v.Cb)()],ig.prototype,"receiverAddress",void 0),ip([(0,v.Cb)()],ig.prototype,"addressExplorerUrl",void 0),ig=ip([w("wui-list-wallet-transaction")],ig);var iw=l.iv`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`,im=r(87180),ib=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iv=class extends l.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return l.dy`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?l.dy`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:l.dy`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await im.ApiController._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return l.dy`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){let e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return l.dy`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return l.dy`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};iv.styles=[p,f,iw],ib([(0,v.Cb)({type:Boolean})],iv.prototype,"disabled",void 0),ib([(0,v.Cb)()],iv.prototype,"color",void 0),ib([(0,v.Cb)()],iv.prototype,"label",void 0),ib([(0,v.Cb)()],iv.prototype,"purchaseValue",void 0),ib([(0,v.Cb)()],iv.prototype,"purchaseCurrency",void 0),ib([(0,v.Cb)()],iv.prototype,"date",void 0),ib([(0,v.Cb)({type:Boolean})],iv.prototype,"completed",void 0),ib([(0,v.Cb)({type:Boolean})],iv.prototype,"inProgress",void 0),ib([(0,v.Cb)({type:Boolean})],iv.prototype,"failed",void 0),ib([(0,v.Cb)()],iv.prototype,"onClick",void 0),ib([(0,v.Cb)()],iv.prototype,"symbol",void 0),ib([(0,v.Cb)()],iv.prototype,"icon",void 0),iv=ib([w("wui-onramp-activity-item")],iv);var iy=l.iv`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`,iC=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ix=class extends l.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return l.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${(0,tf.o)(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?l.dy`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:l.dy`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){let e=im.NetworkController.getRequestedCaipNetworks(),t=e?.filter(e=>e?.imageId)?.slice(0,5);return l.dy`
      <wui-flex class="networks">
        ${t?.map(e=>l.dy`
            <wui-flex class="network-icon">
              <wui-image src=${tf.o(im.fz.getNetworkImage(e))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};ix.styles=[p,f,iy],iC([(0,v.Cb)({type:Boolean})],ix.prototype,"disabled",void 0),iC([(0,v.Cb)()],ix.prototype,"color",void 0),iC([(0,v.Cb)()],ix.prototype,"name",void 0),iC([(0,v.Cb)()],ix.prototype,"label",void 0),iC([(0,v.Cb)()],ix.prototype,"feeRange",void 0),iC([(0,v.Cb)({type:Boolean})],ix.prototype,"loading",void 0),iC([(0,v.Cb)()],ix.prototype,"onClick",void 0),ix=iC([w("wui-onramp-provider-item")],ix);var iE=l.iv`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-060);
    }
  }
`,ik=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i_=class extends l.oi{constructor(){super(...arguments),this.text=""}render(){return l.dy`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};i_.styles=[p,f,iE],ik([(0,v.Cb)()],i_.prototype,"text",void 0),i_=ik([w("wui-promo")],i_);var iA=l.iv`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-accent-glass-020);
    }
  }
`,iS=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iR=class extends l.oi{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return l.dy`<button
        @mouseenter=${this.onMouseEnter.bind(this)}
        @mouseleave=${this.onMouseLeave.bind(this)}
        ontouchstart
      >
        <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
      </button>
      <wui-tooltip variant="shade" message=${this.text} placement="top"></wui-tooltip>`}onMouseEnter(){let e=this.shadowRoot?.querySelector("wui-tooltip");e&&e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease",duration:250})}onMouseLeave(){let e=this.shadowRoot?.querySelector("wui-tooltip");e&&e?.animate([{opacity:1},{opacity:0}],{fill:"forwards",easing:"ease",duration:200})}};iR.styles=[p,f,iA],iS([(0,v.Cb)()],iR.prototype,"text",void 0),iS([(0,v.Cb)()],iR.prototype,"icon",void 0),iR=iS([w("wui-tooltip-select")],iR);var i$=l.iv`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`,iT=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iP=class extends l.oi{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return l.dy`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};iP.styles=[p,i$],iT([(0,v.Cb)()],iP.prototype,"dollars",void 0),iT([(0,v.Cb)()],iP.prototype,"pennies",void 0),iP=iT([w("wui-balance")],iP);var iO=l.iv`
  button {
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`,iI=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iN=class extends l.oi{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.isProfileName=!1,this.address="",this.icon="chevronBottom"}render(){return l.dy`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${tg.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:4,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?l.dy`<wui-image src=${this.networkSrc}></wui-image>`:l.dy`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};iN.styles=[p,f,iO],iI([(0,v.Cb)()],iN.prototype,"networkSrc",void 0),iI([(0,v.Cb)()],iN.prototype,"avatarSrc",void 0),iI([(0,v.Cb)({type:Boolean})],iN.prototype,"isProfileName",void 0),iI([(0,v.Cb)()],iN.prototype,"address",void 0),iI([(0,v.Cb)()],iN.prototype,"icon",void 0),iN=iI([w("wui-profile-button")],iN);var ij=l.iv`
  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='shade'],
  button[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  button[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  button[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-error-glass-010);
    background-color: var(--wui-error-glass-010);
    color: var(--wui-color-error-100);
  }

  button[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  button[data-variant='transparent'],
  button[data-variant='success'],
  button[data-variant='shadeSmall'],
  button[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 8px;
  }

  button[data-variant='transparent']:has(wui-text:first-child),
  button[data-variant='success']:has(wui-text:first-child),
  button[data-variant='shadeSmall']:has(wui-text:first-child),
  button[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  button[data-variant='fill'],
  button[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-variant='fill']:has(wui-text:first-child),
  button[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  button[data-variant='fill'] > wui-image,
  button[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  button[data-variant='fill'] > wui-icon,
  button[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  button[data-variant='transparent'] > wui-image,
  button[data-variant='success'] > wui-image,
  button[data-variant='shadeSmall'] > wui-image,
  button[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  button[data-variant='transparent'] > wui-icon,
  button[data-variant='success'] > wui-icon,
  button[data-variant='shadeSmall'] > wui-icon,
  button[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='shade']:focus-visible,
  button[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  button[data-variant='error']:focus-visible {
    background-color: var(--wui-error-glass-015);
  }

  button.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='shade']:hover,
    button[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    button[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    button[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }

    button[data-variant='error']:hover {
      background-color: var(--wui-error-glass-015);
    }
  }

  button[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  button[data-variant='shade']:active,
  button[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  button[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }

  button[data-variant='error']:active {
    background-color: var(--wui-error-glass-020);
  }
`,iM=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iD=class extends l.oi{constructor(){super(...arguments),this.variant="fill",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.text=""}render(){let e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant;return l.dy`
      <button class=${this.disabled?"disabled":""} data-variant=${this.variant}>
        <wui-image src=${this.imageSrc}></wui-image>
        <wui-text variant=${e?"small-600":"paragraph-600"} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};iD.styles=[p,f,ij],iM([(0,v.Cb)()],iD.prototype,"variant",void 0),iM([(0,v.Cb)()],iD.prototype,"imageSrc",void 0),iM([(0,v.Cb)({type:Boolean})],iD.prototype,"disabled",void 0),iM([(0,v.Cb)()],iD.prototype,"icon",void 0),iM([(0,v.Cb)()],iD.prototype,"text",void 0),iD=iM([w("wui-chip-button")],iD);var iB=l.iv`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`,iL=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iU=class extends l.oi{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return l.dy`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){let e=this.networkImages.slice(0,5);return l.dy` <wui-flex class="networks">
      ${e?.map(e=>l.dy` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`)}
    </wui-flex>`}};iU.styles=[p,f,iB],iL([(0,v.Cb)({type:Array})],iU.prototype,"networkImages",void 0),iL([(0,v.Cb)()],iU.prototype,"text",void 0),iU=iL([w("wui-compatible-network")],iU);var iz=l.iv`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`,iF=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iW=class extends l.oi{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return l.dy`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};iW.styles=[p,f,iz],iF([(0,v.Cb)()],iW.prototype,"icon",void 0),iF([(0,v.Cb)()],iW.prototype,"text",void 0),iW=iF([w("wui-banner")],iW);var iH=l.iv`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }
`,iZ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iV=class extends l.oi{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return l.dy`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          <wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200"
              >${tg.roundNumber(Number(this.tokenAmount),6,5)}
              ${this.tokenCurrency}</wui-text
            ></wui-flex
          >
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}};iV.styles=[p,f,iH],iZ([(0,v.Cb)()],iV.prototype,"tokenName",void 0),iZ([(0,v.Cb)()],iV.prototype,"tokenImageUrl",void 0),iZ([(0,v.Cb)({type:Number})],iV.prototype,"tokenValue",void 0),iZ([(0,v.Cb)()],iV.prototype,"tokenAmount",void 0),iZ([(0,v.Cb)()],iV.prototype,"tokenCurrency",void 0),iZ([(0,v.Cb)({type:Boolean})],iV.prototype,"clickable",void 0),iV=iZ([w("wui-list-token")],iV);var iq=l.iv`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`,iG=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iY=class extends l.oi{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return l.dy`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?l.dy` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:l.dy`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};iY.styles=[p,f,iq],iG([(0,v.Cb)()],iY.prototype,"icon",void 0),iG([(0,v.Cb)()],iY.prototype,"text",void 0),iG([(0,v.Cb)()],iY.prototype,"description",void 0),iG([(0,v.Cb)()],iY.prototype,"tag",void 0),iG([(0,v.Cb)()],iY.prototype,"iconBackgroundColor",void 0),iG([(0,v.Cb)()],iY.prototype,"iconColor",void 0),iG([(0,v.Cb)({type:Boolean})],iY.prototype,"disabled",void 0),iY=iG([w("wui-list-description")],iY);var iK=l.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`;let iX=/[.*+?^${}()|[\]\\]/gu,iJ=/[0-9,.]/u;var iQ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i0=class extends l.oi{constructor(){super(...arguments),this.inputElementRef=(0,t4.V)(),this.disabled=!1,this.value="",this.placeholder="0"}render(){return this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),l.dy`<input
      ${(0,t4.i)(this.inputElementRef)}
      type="text"
      inputmode="numeric"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){let t=e.data;t&&!iJ.test(t)&&this.inputElementRef?.value&&(this.inputElementRef.value.value=this.value.replace(RegExp(t.replace(iX,"\\$&"),"gu"),"")),this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};i0.styles=[p,f,iK],iQ([(0,v.Cb)({type:Boolean})],i0.prototype,"disabled",void 0),iQ([(0,v.Cb)({type:String})],i0.prototype,"value",void 0),iQ([(0,v.Cb)({type:String})],i0.prototype,"placeholder",void 0),i0=iQ([w("wui-input-amount")],i0);var i1=l.iv`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }
`,i2=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i3=class extends l.oi{constructor(){super(...arguments),this.text=""}render(){return l.dy`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?l.dy`<wui-image src=${this.imageSrc}></wui-image>`:l.dy`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};i3.styles=[p,f,i1],i2([(0,v.Cb)()],i3.prototype,"imageSrc",void 0),i2([(0,v.Cb)()],i3.prototype,"text",void 0),i3=i2([w("wui-token-button")],i3);var i5=l.iv`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-002);
    background: var(--wui-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-gray-glass-002);
  }
`,i4=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i6=class extends l.oi{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return l.dy`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?l.dy`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?l.dy`<wui-image src=${this.imageSrc}></wui-image>`:l.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};i6.styles=[p,f,i5],i4([(0,v.Cb)()],i6.prototype,"text",void 0),i4([(0,v.Cb)()],i6.prototype,"address",void 0),i4([(0,v.Cb)()],i6.prototype,"imageSrc",void 0),i4([(0,v.Cb)({type:Boolean})],i6.prototype,"isAddress",void 0),i6=i4([w("wui-preview-item")],i6);var i8=l.iv`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,i9=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i7=class extends l.oi{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&tg.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&tg.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&tg.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&tg.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&tg.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&tg.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&tg.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&tg.getSpacingStyles(this.margin,3)};
    `,l.dy`<slot></slot>`}};i7.styles=[p,i8],i9([(0,v.Cb)()],i7.prototype,"gridTemplateRows",void 0),i9([(0,v.Cb)()],i7.prototype,"gridTemplateColumns",void 0),i9([(0,v.Cb)()],i7.prototype,"justifyItems",void 0),i9([(0,v.Cb)()],i7.prototype,"alignItems",void 0),i9([(0,v.Cb)()],i7.prototype,"justifyContent",void 0),i9([(0,v.Cb)()],i7.prototype,"alignContent",void 0),i9([(0,v.Cb)()],i7.prototype,"columnGap",void 0),i9([(0,v.Cb)()],i7.prototype,"rowGap",void 0),i9([(0,v.Cb)()],i7.prototype,"gap",void 0),i9([(0,v.Cb)()],i7.prototype,"padding",void 0),i9([(0,v.Cb)()],i7.prototype,"margin",void 0),i7=i9([w("wui-grid")],i7);var ne=l.iv`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`,nt=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nr=class extends l.oi{constructor(){super(...arguments),this.text=""}render(){return l.dy`${this.template()}`}template(){return this.text?l.dy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};nr.styles=[p,ne],nt([(0,v.Cb)()],nr.prototype,"text",void 0),nr=nt([w("wui-separator")],nr);var ni=r(79268);let nn=["receive","deposit","borrow","claim"],no=["withdraw","repay","burn"],na={getMonthName(e){let t=new Date;return t.setMonth(e),t.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(e,t){let r=ni.E.getYear(),i=this.getMonthName(t);return e===r?i:`${i} ${e}`},getTransactionImages(e){let[t,r]=e,i=!!t&&e?.every(e=>!!e.nft_info),n=e?.length>1;return e?.length!==2||i?n?e.map(e=>this.getTransactionImage(e)):[this.getTransactionImage(t)]:[this.getTransactionImage(t),this.getTransactionImage(r)]},getTransactionImage:e=>({type:na.getTransactionTransferTokenType(e),url:na.getTransactionImageURL(e)}),getTransactionImageURL(e){let t;let r=!!e?.nft_info,i=!!e?.fungible_info;return e&&r?t=e?.nft_info?.content?.preview?.url:e&&i&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType:e=>e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":void 0,getTransactionDescriptions(e){let t=e?.metadata?.operationType,r=e?.transfers,i=e?.transfers?.length>0,n=e?.transfers?.length>1,o=i&&r?.every(e=>!!e?.fungible_info),[a,s]=r,l=this.getTransferDescription(a);if(this.getTransferDescription(s),!i)return("send"===t||"receive"===t)&&o?[l=tg.getTruncateString({string:e?.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),tg.getTruncateString({string:e?.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"})]:[e.metadata.status];if(n)return r.map(e=>this.getTransferDescription(e));let c="";return nn.includes(t)?c="+":no.includes(t)&&(c="-"),[l=c.concat(l)]},getTransferDescription(e){let t="";return e&&(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){return e?[this.getQuantityFixedValue(e?.quantity.numeric),e?.fungible_info?.symbol].join(" ").trim():null},getQuantityFixedValue:e=>e?parseFloat(e).toFixed(3):null}},96448:function(e,t,r){"use strict";let i;r.d(t,{o:function(){return M}});var n,o=r(23663);"undefined"==typeof window||(window.Buffer||(window.Buffer=o.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));var a=r(82690);let s=e=>(t,r,i)=>{let n=i.subscribe;return i.subscribe=(e,t,r)=>{let o=e;if(t){let n=(null==r?void 0:r.equalityFn)||Object.is,a=e(i.getState());o=r=>{let i=e(r);if(!n(a,i)){let e=a;t(a=i,e)}},(null==r?void 0:r.fireImmediately)&&t(a,a)}return n(o)},e(t,r,i)},l=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>l(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>l(t)(e)}}},c=(e,t)=>(r,i,n)=>{let o,a,s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},c=!1,u=new Set,d=new Set;try{o=s.getStorage()}catch(e){}if(!o)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),r(...e)},i,n);let h=l(s.serialize),p=()=>{let e;let t=h({state:s.partialize({...i()}),version:s.version}).then(e=>o.setItem(s.name,e)).catch(t=>{e=t});if(e)throw e;return t},f=n.setState;n.setState=(e,t)=>{f(e,t),p()};let g=e((...e)=>{r(...e),p()},i,n),w=()=>{var e;if(!o)return;c=!1,u.forEach(e=>e(i()));let t=(null==(e=s.onRehydrateStorage)?void 0:e.call(s,i()))||void 0;return l(o.getItem.bind(o))(s.name).then(e=>{if(e)return s.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===s.version)return e.state;if(s.migrate)return s.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(a=s.merge(e,null!=(t=i())?t:g),!0),p()}).then(()=>{null==t||t(a,void 0),c=!0,d.forEach(e=>e(a))}).catch(e=>{null==t||t(void 0,e)})};return n.persist={setOptions:e=>{s={...s,...e},e.getStorage&&(o=e.getStorage())},clearStorage:()=>{null==o||o.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>w(),hasHydrated:()=>c,onHydrate:e=>(u.add(e),()=>{u.delete(e)}),onFinishHydration:e=>(d.add(e),()=>{d.delete(e)})},w(),a||g},u=(e,t)=>(r,i,n)=>{let o,a={storage:function(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var i;let n=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),o=null!=(i=r.getItem(e))?i:null;return o instanceof Promise?o.then(n):n(o)},setItem:(e,i)=>r.setItem(e,JSON.stringify(i,null==t?void 0:t.replacer)),removeItem:e=>r.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},s=!1,c=new Set,u=new Set,d=a.storage;if(!d)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),r(...e)},i,n);let h=()=>{let e=a.partialize({...i()});return d.setItem(a.name,{state:e,version:a.version})},p=n.setState;n.setState=(e,t)=>{p(e,t),h()};let f=e((...e)=>{r(...e),h()},i,n),g=()=>{var e,t;if(!d)return;s=!1,c.forEach(e=>{var t;return e(null!=(t=i())?t:f)});let n=(null==(t=a.onRehydrateStorage)?void 0:t.call(a,null!=(e=i())?e:f))||void 0;return l(d.getItem.bind(d))(a.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===a.version)return e.state;if(a.migrate)return a.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(o=a.merge(e,null!=(t=i())?t:f),!0),h()}).then(()=>{null==n||n(o,void 0),o=i(),s=!0,u.forEach(e=>e(o))}).catch(e=>{null==n||n(void 0,e)})};return n.persist={setOptions:e=>{a={...a,...e},e.storage&&(d=e.storage)},clearStorage:()=>{null==d||d.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>g(),hasHydrated:()=>s,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(u.add(e),()=>{u.delete(e)})},a.skipHydration||g(),o||f},d=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),c(e,t)):u(e,t),h=e=>{let t;let r=new Set,i=(e,i)=>{let n="function"==typeof e?e(t):e;if(!Object.is(n,t)){let e=t;t=(null!=i?i:"object"!=typeof n)?n:Object.assign({},t,n),r.forEach(r=>r(t,e))}},n=()=>t,o={setState:i,getState:n,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(i,n,o),o},p=e=>e?h(e):h;var f=r(75036),g=r(24473),w=r(42179),m=r(9416),b=r(15578),v=r(2731),y=r(34497);let C={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider:e=>e?.coinbaseWalletExtension?e.coinbaseWalletExtension:E(e,"isCoinbaseWallet")},metaMask:{id:"metaMask",name:"MetaMask",provider:e=>E(e,e=>{if(!e.isMetaMask||e.isBraveWallet&&!e._events&&!e._state)return!1;for(let t of["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPortal","isRabby","isTokenPocket","isTokenary","isZerion"])if(e[t])return!1;return!0})},phantom:{id:"phantom",name:"Phantom",provider:e=>e?.phantom?.ethereum?e.phantom?.ethereum:E(e,"isPhantom")}};function x(e={}){let{shimDisconnect:t=!0,unstable_shimAsyncInject:r}=e;function i(){let t=e.target;if("function"==typeof t){let e=t();if(e)return e}return"object"==typeof t?t:"string"==typeof t?{...C[t]??{id:t,name:`${t[0].toUpperCase()}${t.slice(1)}`,provider:`is${t[0].toUpperCase()}${t.slice(1)}`}}:{id:"injected",name:"Injected",provider:e=>e?.ethereum}}return n=>({get icon(){return i().icon},get id(){return i().id},get name(){return i().name},type:x.type,async setup(){let t=await this.getProvider();t&&e.target&&t.on("connect",this.onConnect.bind(this))},async connect({chainId:r,isReconnecting:i}={}){let o=await this.getProvider();if(!o)throw new y.M;let a=[];if(i)a=await this.getAccounts().catch(()=>[]);else if(t)try{let e=await o.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]});a=e[0]?.caveats?.[0]?.value?.map(e=>f.K(e))}catch(e){if(e.code===g.ab.code)throw new g.ab(e);if(e.code===g.pT.code)throw e}try{a?.length||i||(a=(await o.request({method:"eth_requestAccounts"})).map(e=>(0,f.K)(e))),o.removeListener("connect",this.onConnect.bind(this)),o.on("accountsChanged",this.onAccountsChanged.bind(this)),o.on("chainChanged",this.onChainChanged),o.on("disconnect",this.onDisconnect.bind(this));let s=await this.getChainId();if(r&&s!==r){let e=await this.switchChain({chainId:r}).catch(e=>{if(e.code===g.ab.code)throw e;return{id:s}});s=e?.id??s}return t&&(await n.storage?.removeItem(`${this.id}.disconnected`),e.target||await n.storage?.setItem("injected.connected",!0)),{accounts:a,chainId:s}}catch(e){if(e.code===g.ab.code)throw new g.ab(e);if(e.code===g.pT.code)throw new g.pT(e);throw e}},async disconnect(){let r=await this.getProvider();if(!r)throw new y.M;r.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),r.removeListener("chainChanged",this.onChainChanged),r.removeListener("disconnect",this.onDisconnect.bind(this)),r.on("connect",this.onConnect.bind(this)),t&&(await n.storage?.setItem(`${this.id}.disconnected`,!0),e.target||await n.storage?.removeItem("injected.connected"))},async getAccounts(){let e=await this.getProvider();if(!e)throw new y.M;return(await e.request({method:"eth_accounts"})).map(e=>(0,f.K)(e))},async getChainId(){let e=await this.getProvider();if(!e)throw new y.M;return Number(await e.request({method:"eth_chainId"}))},async getProvider(){let e;if("undefined"==typeof window)return;let t=i();return(e="function"==typeof t.provider?t.provider(window):"string"==typeof t.provider?E(window,t.provider):t.provider)&&!e.removeListener&&("off"in e&&"function"==typeof e.off?e.removeListener=e.off:e.removeListener=()=>{}),e},async isAuthorized(){try{if(t&&await n.storage?.getItem(`${this.id}.disconnected`)||!e.target&&!await n.storage?.getItem("injected.connected"))return!1;if(!await this.getProvider()){if(void 0!==r&&!1!==r){let e=async()=>("undefined"!=typeof window&&window.removeEventListener("ethereum#initialized",e),!!await this.getProvider()),t="number"==typeof r?r:1e3;if(await Promise.race([..."undefined"!=typeof window?[new Promise(t=>window.addEventListener("ethereum#initialized",()=>t(e()),{once:!0}))]:[],new Promise(r=>setTimeout(()=>r(e()),t))]))return!0}throw new y.M}return!!(await (0,w.J)(()=>(0,m.F)(()=>this.getAccounts(),{timeout:100}))).length}catch{return!1}},async switchChain({chainId:e}){let t=await this.getProvider();if(!t)throw new y.M;let r=n.chains.find(t=>t.id===e);if(!r)throw new g.x3(new v.X4);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,b.eC)(e)}]}),new Promise(t=>n.emitter.once("change",({chainId:r})=>{r===e&&t()}))]),r}catch(i){if(4902===i.code||i?.data?.originalError?.code===4902)try{let i;let{default:n,...o}=r.blockExplorers??{};if(n&&(i=[n.url,...Object.values(o).map(e=>e.url)]),await t.request({method:"wallet_addEthereumChain",params:[{chainId:(0,b.eC)(e),chainName:r.name,nativeCurrency:r.nativeCurrency,rpcUrls:[r.rpcUrls.default?.http[0]??""],blockExplorerUrls:i}]}),await this.getChainId()!==e)throw new g.ab(Error("User rejected switch after adding network."));return r}catch(e){throw new g.ab(e)}if(i.code===g.ab.code)throw new g.ab(i);throw new g.x3(i)}},async onAccountsChanged(e){if(0===e.length)this.onDisconnect();else if(n.emitter.listenerCount("connect")){let e=(await this.getChainId()).toString();this.onConnect({chainId:e}),t&&await n.storage?.removeItem(`${this.id}.disconnected`)}else n.emitter.emit("change",{accounts:e.map(e=>(0,f.K)(e))})},onChainChanged(e){let t=Number(e);n.emitter.emit("change",{chainId:t})},async onConnect(e){let t=await this.getAccounts();if(0===t.length)return;let r=Number(e.chainId);n.emitter.emit("connect",{accounts:t,chainId:r});let i=await this.getProvider();i&&(i.removeListener("connect",this.onConnect.bind(this)),i.on("accountsChanged",this.onAccountsChanged.bind(this)),i.on("chainChanged",this.onChainChanged),i.on("disconnect",this.onDisconnect.bind(this)))},async onDisconnect(e){let t=await this.getProvider();e&&1013===e.code&&t&&(await this.getAccounts()).length||(n.emitter.emit("disconnect"),t&&(t.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect.bind(this)),t.on("connect",this.onConnect.bind(this))))}})}function E(e,t){function r(e){return"function"==typeof t?t(e):"string"!=typeof t||e[t]}let i=e.ethereum;return i?.providers?i.providers.find(e=>r(e)):i&&r(i)?i:void 0}x.type="injected";var k=r(32614),_=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};class A{constructor(e){Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:e}),n.set(this,new k)}on(e,t){_(this,n,"f").on(e,t)}once(e,t){_(this,n,"f").once(e,t)}off(e,t){_(this,n,"f").off(e,t)}emit(e,...t){let r=t[0];_(this,n,"f").emit(e,{uid:this.uid,...r})}listenerCount(e){return _(this,n,"f").listenerCount(e)}}n=new WeakMap;var S=r(37538);let R=256;var $=r(33816);function T(e){let t,i;let n=e.isNewChainsStale??!0,o="eip155";return a=>({id:"walletConnect",name:"WalletConnect",type:T.type,async setup(){let e=await this.getProvider().catch(()=>null);e&&(e.on("connect",this.onConnect.bind(this)),e.on("session_delete",this.onSessionDelete.bind(this)))},async connect({chainId:e,...t}={}){try{let r=await this.getProvider();if(!r)throw new y.M;r.on("display_uri",this.onDisplayUri);let i=e;if(!i){let e=await a.storage?.getItem("state")??{};i=a.chains.some(t=>t.id===e.chainId)?e.chainId:a.chains[0]?.id}if(!i)throw Error("No chains found on connector.");let n=await this.isChainsStale();if(r.session&&n&&await r.disconnect(),!r.session||n){let e=a.chains.filter(e=>e.id!==i).map(e=>e.id);await r.connect({optionalChains:[i,...e],..."pairingTopic"in t?{pairingTopic:t.pairingTopic}:{}}),this.setRequestedChainsIds(a.chains.map(e=>e.id))}let o=(await r.enable()).map(e=>(0,f.K)(e)),s=await this.getChainId();return r.removeListener("display_uri",this.onDisplayUri),r.removeListener("connect",this.onConnect.bind(this)),r.on("accountsChanged",this.onAccountsChanged.bind(this)),r.on("chainChanged",this.onChainChanged),r.on("disconnect",this.onDisconnect.bind(this)),r.on("session_delete",this.onSessionDelete.bind(this)),{accounts:o,chainId:s}}catch(e){if(/(user rejected|connection request reset)/i.test(e?.message))throw new g.ab(e);throw e}},async disconnect(){let e=await this.getProvider();try{await e?.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{e?.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),e?.removeListener("chainChanged",this.onChainChanged),e?.removeListener("disconnect",this.onDisconnect.bind(this)),e?.removeListener("session_delete",this.onSessionDelete.bind(this)),e?.on("connect",this.onConnect.bind(this)),this.setRequestedChainsIds([])}},async getAccounts(){return(await this.getProvider()).accounts.map(e=>(0,f.K)(e))},async getProvider({chainId:n}={}){async function o(){let t=a.chains.map(e=>e.id);if(!t.length)return;let{EthereumProvider:i}=await Promise.all([r.e(308),r.e(883)]).then(r.bind(r,58308));return await i.init({...e,disableProviderPing:!0,optionalChains:t,projectId:e.projectId,rpcMap:Object.fromEntries(a.chains.map(e=>[e.id,e.rpcUrls.default.http[0]])),showQrModal:e.showQrModal??!0})}return t||(i||(i=o()),t=await i,t?.events.setMaxListeners(1/0)),n&&await this.switchChain?.({chainId:n}),t},async getChainId(){return(await this.getProvider()).chainId},async isAuthorized(){try{let[e,t]=await Promise.all([this.getAccounts(),this.getProvider()]);if(!e.length)return!1;if(await this.isChainsStale()&&t.session)return await t.disconnect().catch(()=>{}),!1;return!0}catch{return!1}},async switchChain({chainId:e}){let t=a.chains.find(t=>t.id===e);if(!t)throw new g.x3(new v.X4);try{let r=await this.getProvider(),i=this.getNamespaceChainsIds(),n=this.getNamespaceMethods();if(!i.includes(e)&&n.includes("wallet_addEthereumChain")){await r.request({method:"wallet_addEthereumChain",params:[{chainId:(0,b.eC)(t.id),blockExplorerUrls:[t.blockExplorers?.default.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});let i=await this.getRequestedChainsIds();this.setRequestedChainsIds([...i,e])}return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,b.eC)(e)}]}),t}catch(t){let e="string"==typeof t?t:t?.message;if(/user rejected request/i.test(e))throw new g.ab(t);throw new g.x3(t)}},onAccountsChanged(e){0===e.length?this.onDisconnect():a.emitter.emit("change",{accounts:e.map(e=>(0,f.K)(e))})},onChainChanged(e){let t=Number(e);a.emitter.emit("change",{chainId:t})},async onConnect(e){let t=Number(e.chainId),r=await this.getAccounts();a.emitter.emit("connect",{accounts:r,chainId:t})},async onDisconnect(e){this.setRequestedChainsIds([]),a.emitter.emit("disconnect");let t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect.bind(this)),t.removeListener("session_delete",this.onSessionDelete.bind(this)),t.on("connect",this.onConnect.bind(this))},onDisplayUri(e){a.emitter.emit("message",{type:"display_uri",data:e})},onSessionDelete(){this.onDisconnect()},getNamespaceChainsIds:()=>t?t.session?.namespaces[o]?.chains?.map(e=>parseInt(e.split(":")[1]||""))??[]:[],getNamespaceMethods:()=>t?t.session?.namespaces[o]?.methods??[]:[],async getRequestedChainsIds(){return await a.storage?.getItem(this.requestedChainsStorageKey)??[]},async isChainsStale(){if(this.getNamespaceMethods().includes("wallet_addEthereumChain")||!n)return!1;let e=a.chains.map(e=>e.id),t=this.getNamespaceChainsIds();if(t.length&&!t.some(t=>e.includes(t)))return!1;let r=await this.getRequestedChainsIds();return!e.every(e=>r.includes(e))},async setRequestedChainsIds(e){await a.storage?.setItem(this.requestedChainsStorageKey,e)},get requestedChainsStorageKey(){return`${this.id}.requestedChains`}})}function P(e){let t,i;return n=>({id:"coinbaseWalletSDK",name:"Coinbase Wallet",type:P.type,async connect({chainId:e}={}){try{let t=await this.getProvider(),r=(await t.request({method:"eth_requestAccounts"})).map(e=>(0,f.K)(e));t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect.bind(this));let i=await this.getChainId();if(e&&i!==e){let t=await this.switchChain({chainId:e}).catch(e=>{if(e.code===g.ab.code)throw e;return{id:i}});i=t?.id??i}return{accounts:r,chainId:i}}catch(e){if(/(user closed modal|accounts received is empty|user denied account)/i.test(e.message))throw new g.ab(e);throw e}},async disconnect(){let e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect.bind(this)),e.disconnect(),e.close()},async getAccounts(){let e=await this.getProvider();return(await e.request({method:"eth_accounts"})).map(e=>(0,f.K)(e))},async getChainId(){let e=await this.getProvider();return Number(await e.request({method:"eth_chainId"}))},async getProvider(){if(!i){let{default:o}=await Promise.all([r.e(223),r.e(878)]).then(r.t.bind(r,20223,19));t=new("function"!=typeof o&&"function"==typeof o.default?o.default:o)({reloadOnDisconnect:!1,...e});let a=t.walletExtension?.getChainId(),s=n.chains.find(t=>e.chainId?t.id===e.chainId:t.id===a)||n.chains[0],l=e.chainId||s?.id,c=e.jsonRpcUrl||s?.rpcUrls.default.http[0];i=t.makeWeb3Provider(c,l)}return i},async isAuthorized(){try{return!!(await this.getAccounts()).length}catch{return!1}},async switchChain({chainId:e}){let t=n.chains.find(t=>t.id===e);if(!t)throw new g.x3(new v.X4);let r=await this.getProvider(),i=(0,b.eC)(t.id);try{return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:i}]}),t}catch(e){if(4902===e.code)try{return await r.request({method:"wallet_addEthereumChain",params:[{chainId:i,chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[t.rpcUrls.default?.http[0]??""],blockExplorerUrls:[t.blockExplorers?.default.url]}]}),t}catch(e){throw new g.ab(e)}throw new g.x3(e)}},onAccountsChanged(e){0===e.length?n.emitter.emit("disconnect"):n.emitter.emit("change",{accounts:e.map(e=>(0,f.K)(e))})},onChainChanged(e){let t=Number(e);n.emitter.emit("change",{chainId:t})},async onDisconnect(e){n.emitter.emit("disconnect");let t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect.bind(this))}})}function O(e){if("string"==typeof e)return Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10);if("bigint"==typeof e)return Number(e);if("number"==typeof e)return e;throw Error(`Cannot normalize chainId "${e}" of type "${typeof e}"`)}T.type="walletConnect",P.type="coinbaseWallet";var I=r(43801),N=r(6279),j=r(31531);function M({projectId:e,chains:t,metadata:r,enableInjected:n,enableCoinbase:o,enableEmail:l,enableWalletConnect:c,enableEIP6963:u,...h}){var w;let m=[],b=Object.fromEntries(t.map(t=>[t.id,(0,j.h4)({chainId:t.id,projectId:e})]));return!1!==c&&m.push(T({projectId:e,metadata:r,showQrModal:!1})),!1!==n&&m.push(x({shimDisconnect:!0})),!1!==o&&m.push(P({appName:r?.name??"Unknown",appLogoUrl:r?.icons[0]??"Unknown",enableMobileWalletLink:!0})),!0===l&&m.push((w={chains:[...t],options:{projectId:e}},e=>({id:N.bq.EMAIL_CONNECTOR_ID,name:"Web3Modal Email",type:"w3mEmail",async connect(e={}){let t=await this.getProvider(),r=I.$D.getPreferredAccountType(),[{address:i,chainId:n}]=await Promise.all([t.connect({chainId:e.chainId,preferredAccountType:r}),t.getSmartAccountEnabledNetworks()]);return{accounts:[i],account:i,chainId:n,chain:{id:n,unsuported:!1}}},async disconnect(){let e=await this.getProvider();await e.disconnect()},async getAccounts(){let t=await this.getProvider(),r=I.$D.getPreferredAccountType(),{address:i}=await t.connect({preferredAccountType:r});return e.emitter.emit("change",{accounts:[i]}),[i]},async getProvider(){return this.provider||(this.provider=new I.Sd(w.options.projectId)),Promise.resolve(this.provider)},async getChainId(){let e=await this.getProvider(),{chainId:t}=await e.getChainId();return t},async isAuthorized(){let e=await this.getProvider(),{isConnected:t}=await e.isConnected();return t},async switchChain({chainId:t}){try{let r=e.chains.find(e=>e.id===t);if(!r)throw new g.x3(Error("chain not found on connector."));let i=await this.getProvider();return await i.switchNetwork(t),e.emitter.emit("change",{chainId:O(t)}),r}catch(e){if(e instanceof Error)throw new g.x3(e);throw e}},onAccountsChanged(t){0===t.length?this.onDisconnect():e.emitter.emit("change",{accounts:t.map(f.K)})},onChainChanged(t){let r=O(t);e.emitter.emit("change",{chainId:r})},async onConnect(t){let r=O(t.chainId),i=await this.getAccounts();e.emitter.emit("connect",{accounts:i,chainId:r})},async onDisconnect(e){let t=await this.getProvider();await t.disconnect()}}))),function(e){let t;let{multiInjectedProviderDiscovery:r=!0,storage:n=(0,S.o)({storage:"undefined"!=typeof window&&window.localStorage?window.localStorage:S.w}),syncConnectedChain:o=!0,ssr:l,...c}=e,u="undefined"!=typeof window&&r?function(){let e=new Set,t=[],r=()=>(function(e){let t=t=>e(t.detail);return window.addEventListener("eip6963:announceProvider",t),window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),()=>window.removeEventListener("eip6963:announceProvider",t)})(r=>{t.some(({info:e})=>e.uuid===r.info.uuid)||(t=[...t,r],e.forEach(e=>e(t,{added:[r]})))}),i=r();return{_listeners:()=>e,clear(){e.forEach(e=>e([],{removed:[...t]})),t=[]},destroy(){this.clear(),e.clear(),i()},findProvider:({rdns:e})=>t.find(t=>t.info.rdns===e),getProviders:()=>t,reset(){this.clear(),i(),i=r()},subscribe:(r,{emitImmediately:i}={})=>(e.add(r),i&&r(t,{added:t}),()=>e.delete(r))}}():void 0,h=p(()=>c.chains),f=p(()=>[...c.connectors??[],...l?[]:u?.getProviders().map(w)??[]].map(g));function g(e){let t=new A(function(e=11){if(!i||R+e>512){i="",R=0;for(let e=0;e<256;e++)i+=(256+256*Math.random()|0).toString(16).substring(1)}return i.substring(R,R+++e)}()),r={...e({emitter:t,chains:h.getState(),storage:n}),emitter:t,uid:t.uid};return t.on("connect",k),r.setup?.(),r}function w(e){let{info:t}=e,r=e.provider;return x({target:{...t,id:t.rdns,provider:r}})}let m=new Map;function b(){return{chainId:h.getState()[0].id,connections:new Map,current:void 0,status:"disconnected"}}let y="0.0.0-canary-";t=$.i.startsWith(y)?parseInt($.i.replace(y,"")):parseInt($.i.split(".")[0]??"0");let C=p(s(n?d(b,{migrate(e,r){if(r===t)return e;let i=b(),n=e&&"object"==typeof e&&"chainId"in e&&"number"==typeof e.chainId?e.chainId:i.chainId;return{...i,chainId:n}},name:"store",partialize:e=>({connections:{__type:"Map",value:Array.from(e.connections.entries()).map(([e,t])=>{let{id:r,name:i,type:n,uid:o}=t.connector;return[e,{...t,connector:{id:r,name:i,type:n,uid:o}}]})},chainId:e.chainId,current:e.current}),skipHydration:l,storage:n,version:t}):b));function E(e){C.setState(t=>{let r=t.connections.get(e.uid);return r?{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts??r.accounts,chainId:e.chainId??r.chainId,connector:r.connector})}:t})}function k(e){"connecting"!==C.getState().status&&"reconnecting"!==C.getState().status&&C.setState(t=>{let r=f.getState().find(t=>t.uid===e.uid);return r?{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts,chainId:e.chainId,connector:r}),current:e.uid,status:"connected"}:t})}return o&&C.subscribe(({connections:e,current:t})=>t?e.get(t)?.chainId:void 0,e=>{if(h.getState().some(t=>t.id===e))return C.setState(t=>({...t,chainId:e??t.chainId}))}),u?.subscribe(e=>{let t=new Map;for(let e of f.getState())t.set(e.id,!0);let r=[];for(let i of e){let e=g(w(i));t.has(e.id)||r.push(e)}(!n||C.persist.hasHydrated())&&f.setState(e=>[...e,...r],!0)}),{get chains(){return h.getState()},get connectors(){return f.getState()},storage:n,getClient:function(e={}){let t;let r=e.chainId??C.getState().chainId,i=h.getState().find(e=>e.id===r);if(e.chainId&&!i)throw new v.X4;{let e=m.get(C.getState().chainId);if(e&&!i)return e;if(!i)throw new v.X4}{let e=m.get(r);if(e)return e}if(c.client)t=c.client({chain:i});else{let e=i.id,r=h.getState().map(e=>e.id),n={};for(let[t,i]of Object.entries(c))if("chains"!==t&&"client"!==t&&"connectors"!==t&&"transports"!==t){if("object"==typeof i){if(e in i)n[t]=i[e];else{if(r.some(e=>e in i))continue;n[t]=i}}else n[t]=i}t=(0,a.e)({...n,chain:i,batch:n.batch??{multicall:!0},transport:t=>c.transports[e]({...t,connectors:f})})}return m.set(r,t),t},get state(){return C.getState()},setState(e){let t;t="function"==typeof e?e(C.getState()):e;let r=b();"object"!=typeof t&&(t=r),Object.keys(r).some(e=>!(e in t))&&(t=r),C.setState(t,!0)},subscribe:(e,t,r)=>C.subscribe(e,t,r?{...r,fireImmediately:r.emitImmediately}:void 0),_internal:{mipd:u,store:C,ssr:!!l,syncConnectedChain:o,transports:c.transports,chains:{setState(e){let t="function"==typeof e?e(h.getState()):e;if(0!==t.length)return h.setState(t,!0)},subscribe:e=>h.subscribe(e)},connectors:{providerDetailToConnector:w,setup:g,setState:e=>f.setState("function"==typeof e?e(f.getState()):e,!0),subscribe:e=>f.subscribe(e)},events:{change:E,connect:k,disconnect:function e(t){C.setState(r=>{let i=r.connections.get(t.uid);if(i&&(i.connector.emitter.off("change",E),i.connector.emitter.off("disconnect",e),i.connector.emitter.on("connect",k)),r.connections.delete(t.uid),0===r.connections.size)return{...r,connections:new Map,current:void 0,status:"disconnected"};let n=r.connections.values().next().value;return{...r,connections:new Map(r.connections),current:n.connector.uid}})}}}}}({chains:t,multiInjectedProviderDiscovery:!1!==u,transports:b,...h,connectors:m})}},72065:function(e,t,r){"use strict";let i,n;function o(){if(!i)throw Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');return{open:async function(e){await i?.open(e)},close:async function(){await i?.close()}}}r.d(t,{OY:function(){return $},k_:function(){return o}}),r(2265);var a=r(2731),s=r(34497);async function l(e,t){let{chainId:r}=t,i=e.state.connections.get(t.connector?.uid??e.state.current);if(i){let e=i.connector;if(!e.switchChain)throw new s.O({connector:e});return await e.switchChain({chainId:r})}let n=e.chains.find(e=>e.id===r);if(!n)throw new a.X4;return e.setState(e=>({...e,chainId:r})),n}async function c(e,t){let r;if((r="function"==typeof t.connector?e._internal.connectors.setup(t.connector):t.connector).uid===e.state.current)throw new a.wi;try{e.setState(e=>({...e,status:"connecting"})),r.emitter.emit("message",{type:"connecting"});let i=await r.connect({chainId:t.chainId}),n=i.accounts;return r.emitter.off("connect",e._internal.events.connect),r.emitter.on("change",e._internal.events.change),r.emitter.on("disconnect",e._internal.events.disconnect),await e.storage?.setItem("recentConnectorId",r.id),e.setState(e=>({...e,connections:new Map(e.connections).set(r.uid,{accounts:n,chainId:i.chainId,connector:r}),current:r.uid,status:"connected"})),{accounts:n,chainId:i.chainId}}catch(t){throw e.setState(e=>({...e,status:e.current?"connected":"disconnected"})),t}}async function u(e,t={}){let r;if(t.connector)r=t.connector;else{let{connections:t,current:i}=e.state,n=t.get(i);r=n?.connector}let i=e.state.connections;r&&(await r.disconnect(),r.emitter.off("change",e._internal.events.change),r.emitter.off("disconnect",e._internal.events.disconnect),r.emitter.on("connect",e._internal.events.connect),i.delete(r.uid)),e.setState(e=>{if(0===i.size)return{...e,connections:new Map,current:void 0,status:"disconnected"};let t=i.values().next().value;return{...e,connections:new Map(i),current:t.connector.uid}});{let t=e.state.current;if(!t)return;let r=e.state.connections.get(t)?.connector;if(!r)return;await e.storage?.setItem("recentConnectorId",r.id)}}var d=r(79561),h=r(90444),p=r(15578);async function f(e,{account:t=e.account,message:r}){if(!t)throw new h.o({docsPath:"/docs/actions/wallet/signMessage"});let i=(0,d.T)(t);if("local"===i.type)return i.signMessage({message:r});let n="string"==typeof r?(0,p.$G)(r):r.raw instanceof Uint8Array?(0,p.NC)(r.raw):r.raw;return e.request({method:"personal_sign",params:[n,i.address]},{retryCount:0})}var g=r(37225),w=r(38507);async function m(e,t){let r;let{account:i,connector:n,...o}=t;return r="object"==typeof i&&"local"===i.type?e.getClient():await (0,w.e)(e,{account:i,connector:n}),(0,g.s)(r,f,"signMessage")({...o,...i?{account:i}:{}})}var b=r(53350),v=r(9577),y=r(49134),C=r(5706),x=r(21254),E=r(68191),k=r(6279),_=r(31531),A=r(43801),S=r(79268);class R extends E.D4{constructor(e){let{wagmiConfig:t,siweConfig:r,defaultChain:i,tokens:n,_sdkVersion:o,...a}=e;if(!t)throw Error("web3modal:constructor - wagmiConfig is undefined");if(!a.projectId)throw Error("web3modal:constructor - projectId is undefined");super({networkControllerClient:{switchCaipNetwork:async e=>{let t=S.p.caipNetworkIdToNumber(e?.id);t&&await l(this.wagmiConfig,{chainId:t})},getApprovedCaipNetworksData:async()=>new Promise(e=>{let r=new Map(t.state.connections).get(t.state.current||"");if(r?.connector?.id===k.bq.EMAIL_CONNECTOR_ID)e((0,_.xv)());else if(r?.connector?.id===k.bq.WALLET_CONNECT_CONNECTOR_ID){let r=t.connectors.find(e=>e.id===k.bq.WALLET_CONNECT_CONNECTOR_ID);e((0,_.Pl)(r))}e({approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})})},connectionControllerClient:{connectWalletConnect:async e=>{let r=t.connectors.find(e=>e.id===k.bq.WALLET_CONNECT_CONNECTOR_ID);if(!r)throw Error("connectionControllerClient:getWalletConnectUri - connector is undefined");(await r.getProvider()).on("display_uri",t=>{e(t)});let i=S.p.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await c(this.wagmiConfig,{connector:r,chainId:i})},connectExternal:async({id:e,provider:r,info:i})=>{let n=t.connectors.find(t=>t.id===e);if(!n)throw Error("connectionControllerClient:connectExternal - connector is undefined");r&&i&&n.id===k.bq.EIP6963_CONNECTOR_ID&&n.setEip6963Wallet?.({provider:r,info:i});let o=S.p.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await c(this.wagmiConfig,{connector:n,chainId:o})},checkInstalled:e=>{let t=this.getConnectors().find(e=>"INJECTED"===e.type);return e?!!t&&!!window?.ethereum&&e.some(e=>!!window.ethereum?.[String(e)]):!!window.ethereum},disconnect:async()=>{await u(this.wagmiConfig),r?.options?.signOutOnDisconnect&&await r.signOut()},signMessage:async e=>m(this.wagmiConfig,{message:e})},siweControllerClient:r,defaultChain:(0,_.I2)(i),tokens:k.gk.getCaipTokens(n),_sdkVersion:o??`html-wagmi-${k.bq.VERSION}`,...a}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.wagmiConfig=t,this.syncRequestedNetworks([...t.chains]),this.syncConnectors([...t.connectors]),function(e,t){let{onChange:r}=t;e._internal.connectors.subscribe((e,t)=>{r(Object.values(e),t)})}(this.wagmiConfig,{onChange:e=>this.syncConnectors(e)}),(0,b.u)(this.wagmiConfig,{onChange:e=>this.syncAccount({...e})})}getState(){let e=super.getState();return{...e,selectedNetworkId:S.p.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(t=>e({...t,selectedNetworkId:S.p.caipNetworkIdToNumber(t.selectedNetworkId)}))}syncRequestedNetworks(e){let t=e?.map(e=>({id:`${k.bq.EIP155}:${e.id}`,name:e.name,imageId:k.CK.EIP155NetworkImageIds[e.id],imageUrl:this.options?.chainImages?.[e.id]}));this.setRequestedCaipNetworks(t??[])}async syncAccount({address:e,isConnected:t,chainId:r,connector:i}){if(this.resetAccount(),this.syncNetwork(e,r,t),t&&e&&r){let n=`${k.bq.EIP155}:${r}:${e}`;this.setIsConnected(t),this.setCaipAddress(n),await Promise.all([this.syncProfile(e,r),this.syncBalance(e,r),this.syncConnectedWalletInfo(i),this.fetchTokenBalance(),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(e,t,r){let i=this.wagmiConfig.chains.find(e=>e.id===t);if(i||t){let n=i?.name??t?.toString(),o=Number(i?.id??t),a=`${k.bq.EIP155}:${o}`;if(this.setCaipNetwork({id:a,name:n,imageId:k.CK.EIP155NetworkImageIds[o],imageUrl:this.options?.chainImages?.[o]}),r&&e&&t){let r=`${k.bq.EIP155}:${o}:${e}`;if(this.setCaipAddress(r),i?.blockExplorers?.default?.url){let t=`${i.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(t)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,t),await this.syncBalance(e,t))}}}async syncProfile(e,t){if(t!==x.R.id){this.setProfileName(null),this.setProfileImage(null);return}try{let{name:r,avatar:i}=await this.fetchIdentity({caipChainId:`${k.bq.EIP155}:${t}`,address:e});this.setProfileName(r),this.setProfileImage(i)}catch{let r=await function(e,t){let{chainId:r,...i}=t,n=e.getClient({chainId:r});return(0,g.s)(n,v.w,"getEnsName")(i)}(this.wagmiConfig,{address:e,chainId:t});if(r){this.setProfileName(r);let e=await function(e,t){let{chainId:r,...i}=t,n=e.getClient({chainId:r});return(0,g.s)(n,y.r,"getEnsAvatar")(i)}(this.wagmiConfig,{name:r,chainId:t});e&&this.setProfileImage(e)}}}async syncBalance(e,t){let r=this.wagmiConfig.chains.find(e=>e.id===t);if(r){let t=await (0,C.s)(this.wagmiConfig,{address:e,chainId:r.id,token:this.options?.tokens?.[r.id]?.address});this.setBalance(t.formatted,t.symbol);return}this.setBalance(void 0,void 0)}async syncConnectedWalletInfo(e){if(!e)throw Error("syncConnectedWalletInfo - connector is undefined");if(e.id===k.bq.WALLET_CONNECT_CONNECTOR_ID&&e.getProvider){let t=await e.getProvider();t.session&&this.setConnectedWalletInfo({...t.session.peer.metadata,name:t.session.peer.metadata.name,icon:t.session.peer.metadata.icons?.[0]})}else this.setConnectedWalletInfo({name:e.name,icon:e.icon})}syncConnectors(e){let t=new Set,r=e.filter(e=>!t.has(e.id)&&t.add(e.id)),i=[],n=k.bq.COINBASE_SDK_CONNECTOR_ID,o=r.find(e=>e.id===k.bq.CONNECTOR_RDNS_MAP[k.bq.COINBASE_CONNECTOR_ID]);r.forEach(({id:e,name:t,type:r,icon:a})=>{o&&e===n||k.bq.EMAIL_CONNECTOR_ID===e||i.push({id:e,explorerId:k.CK.ConnectorExplorerIds[e],imageUrl:this.options?.connectorImages?.[e]??a,name:k.CK.ConnectorNamesMap[e]??t,imageId:k.CK.ConnectorImageIds[e],type:k.CK.ConnectorTypesMap[r]??"EXTERNAL",info:{rdns:e}})}),this.setConnectors(i),this.syncEmailConnector(r)}async syncEmailConnector(e){let t=e.find(({id:e})=>e===k.bq.EMAIL_CONNECTOR_ID);if(t){let e=await t.getProvider();this.addConnector({id:k.bq.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:e}),this.listenEmailConnector(t),this.listenModal(t)}}async listenEmailConnector(e){if("undefined"!=typeof window&&e){super.setLoading(!0);let t=await e.getProvider(),r=t.getLoginEmailUsed();super.setLoading(r),r&&this.setIsConnected(!1),t.onRpcRequest(e=>{if(A.$D.checkIfRequestExists(e))A.$D.checkIfRequestIsAllowed(e)||super.open({view:"ApproveTransaction"});else{super.open();let r=A.$D.getRequestMethod(e);console.error(A.y_.RPC_METHOD_NOT_ALLOWED_MESSAGE,{method:r}),setTimeout(()=>{this.showErrorMessage(A.y_.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE)},300),t.rejectRpcRequest()}}),t.onRpcResponse(()=>{super.close()}),t.onNotConnected(()=>{this.setIsConnected(!1),super.setLoading(!1)}),t.onIsConnected(e=>{this.setIsConnected(!0),this.setSmartAccountDeployed(!!e.smartAccountDeployed),super.setLoading(!1)}),t.onGetSmartAccountEnabledNetworks(e=>{this.setSmartAccountEnabledNetworks(e)}),t.onSetPreferredAccount(({address:t})=>{if(!t)return;let r=S.p.caipNetworkIdToNumber(this.getCaipNetwork()?.id);this.syncAccount({address:t,chainId:r,isConnected:!0,connector:e})})}}async listenModal(e){let t=await e.getProvider();this.subscribeState(e=>{e.open||t.rejectRpcRequest()})}}function $(e){return!n&&(i=n=new R({...e,_sdkVersion:`react-wagmi-${k.bq.VERSION}`})),n}},31531:function(e,t,r){"use strict";r.d(t,{I2:function(){return a},Pl:function(){return s},h4:function(){return c},xv:function(){return l}});var i=r(68191),n=r(6279),o=r(945);function a(e){if(e)return{id:`${n.bq.EIP155}:${e.id}`,name:e.name,imageId:n.CK.EIP155NetworkImageIds[e.id]}}async function s(e){if(!e)throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");let t=await e?.getProvider(),r=t?.signer?.session?.namespaces,i=r?.[n.bq.EIP155]?.methods,o=r?.[n.bq.EIP155]?.chains;return{supportsAllNetworks:!!i?.includes(n.bq.ADD_CHAIN_METHOD),approvedCaipNetworkIds:o}}function l(){return{supportsAllNetworks:!1,approvedCaipNetworkIds:n.CK.WalletConnectRpcChainIds.map(e=>`${n.bq.EIP155}:${e}`)}}function c({chainId:e,projectId:t}){let r=i.j1.getBlockchainApiUrl();return n.CK.WalletConnectRpcChainIds.includes(e)?(0,o.d)(`${r}/v1/?chainId=${n.bq.EIP155}:${e}&projectId=${t}`):(0,o.d)()}},43801:function(e,t,r){"use strict";let i;r.d(t,{$D:function(){return t9},Sd:function(){return re},y_:function(){return o}});let n={SECURE_SITE_SDK:r(49079).env.NEXT_PUBLIC_SECURE_SITE_SDK_URL||"https://secure.walletconnect.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR"},o={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}};(e6=e2||(e2={})).assertEqual=e=>e,e6.assertIs=function(e){},e6.assertNever=function(e){throw Error()},e6.arrayToEnum=e=>{let t={};for(let r of e)t[r]=r;return t},e6.getValidEnumValues=e=>{let t=e6.objectKeys(e).filter(t=>"number"!=typeof e[e[t]]),r={};for(let i of t)r[i]=e[i];return e6.objectValues(r)},e6.objectValues=e=>e6.objectKeys(e).map(function(t){return e[t]}),e6.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{let t=[];for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t},e6.find=(e,t)=>{for(let r of e)if(t(r))return r},e6.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,e6.joinValues=function(e,t=" | "){return e.map(e=>"string"==typeof e?`'${e}'`:e).join(t)},e6.jsonStringifyReplacer=(e,t)=>"bigint"==typeof t?t.toString():t,(e3||(e3={})).mergeShapes=(e,t)=>({...e,...t});let a=e2.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),s=e=>{switch(typeof e){case"undefined":return a.undefined;case"string":return a.string;case"number":return isNaN(e)?a.nan:a.number;case"boolean":return a.boolean;case"function":return a.function;case"bigint":return a.bigint;case"symbol":return a.symbol;case"object":if(Array.isArray(e))return a.array;if(null===e)return a.null;if(e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch)return a.promise;if("undefined"!=typeof Map&&e instanceof Map)return a.map;if("undefined"!=typeof Set&&e instanceof Set)return a.set;if("undefined"!=typeof Date&&e instanceof Date)return a.date;return a.object;default:return a.unknown}},l=e2.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class c extends Error{constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){let t=e||function(e){return e.message},r={_errors:[]},i=e=>{for(let n of e.issues)if("invalid_union"===n.code)n.unionErrors.map(i);else if("invalid_return_type"===n.code)i(n.returnTypeError);else if("invalid_arguments"===n.code)i(n.argumentsError);else if(0===n.path.length)r._errors.push(t(n));else{let e=r,i=0;for(;i<n.path.length;){let r=n.path[i];i===n.path.length-1?(e[r]=e[r]||{_errors:[]},e[r]._errors.push(t(n))):e[r]=e[r]||{_errors:[]},e=e[r],i++}}};return i(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,e2.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(e=e=>e.message){let t={},r=[];for(let i of this.issues)i.path.length>0?(t[i.path[0]]=t[i.path[0]]||[],t[i.path[0]].push(e(i))):r.push(e(i));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}c.create=e=>new c(e);let u=(e,t)=>{let r;switch(e.code){case l.invalid_type:r=e.received===a.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case l.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,e2.jsonStringifyReplacer)}`;break;case l.unrecognized_keys:r=`Unrecognized key(s) in object: ${e2.joinValues(e.keys,", ")}`;break;case l.invalid_union:r="Invalid input";break;case l.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${e2.joinValues(e.options)}`;break;case l.invalid_enum_value:r=`Invalid enum value. Expected ${e2.joinValues(e.options)}, received '${e.received}'`;break;case l.invalid_arguments:r="Invalid function arguments";break;case l.invalid_return_type:r="Invalid function return type";break;case l.invalid_date:r="Invalid date";break;case l.invalid_string:"object"==typeof e.validation?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,"number"==typeof e.validation.position&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:e2.assertNever(e.validation):r="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case l.too_small:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case l.too_big:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case l.custom:r="Invalid input";break;case l.invalid_intersection_types:r="Intersection results could not be merged";break;case l.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case l.not_finite:r="Number must be finite";break;default:r=t.defaultError,e2.assertNever(e)}return{message:r}},d=u;function h(){return d}let p=e=>{let{data:t,path:r,errorMaps:i,issueData:n}=e,o=[...r,...n.path||[]],a={...n,path:o},s="";for(let e of i.filter(e=>!!e).slice().reverse())s=e(a,{data:t,defaultError:s}).message;return{...n,path:o,message:n.message||s}};function f(e,t){let r=p({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,h(),u].filter(e=>!!e)});e.common.issues.push(r)}class g{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){let r=[];for(let i of t){if("aborted"===i.status)return w;"dirty"===i.status&&e.dirty(),r.push(i.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){let r=[];for(let e of t)r.push({key:await e.key,value:await e.value});return g.mergeObjectSync(e,r)}static mergeObjectSync(e,t){let r={};for(let i of t){let{key:t,value:n}=i;if("aborted"===t.status||"aborted"===n.status)return w;"dirty"===t.status&&e.dirty(),"dirty"===n.status&&e.dirty(),"__proto__"!==t.value&&(void 0!==n.value||i.alwaysSet)&&(r[t.value]=n.value)}return{status:e.value,value:r}}}let w=Object.freeze({status:"aborted"}),m=e=>({status:"dirty",value:e}),b=e=>({status:"valid",value:e}),v=e=>"aborted"===e.status,y=e=>"dirty"===e.status,C=e=>"valid"===e.status,x=e=>"undefined"!=typeof Promise&&e instanceof Promise;(e8=e5||(e5={})).errToObj=e=>"string"==typeof e?{message:e}:e||{},e8.toString=e=>"string"==typeof e?e:null==e?void 0:e.message;class E{constructor(e,t,r,i){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}let k=(e,t)=>{if(C(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let t=new c(e.common.issues);return this._error=t,this._error}}};function _(e){if(!e)return{};let{errorMap:t,invalid_type_error:r,required_error:i,description:n}=e;if(t&&(r||i))throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');return t?{errorMap:t,description:n}:{errorMap:(e,t)=>"invalid_type"!==e.code?{message:t.defaultError}:void 0===t.data?{message:null!=i?i:t.defaultError}:{message:null!=r?r:t.defaultError},description:n}}class A{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return s(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:s(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new g,ctx:{common:e.parent.common,data:e.data,parsedType:s(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(x(t))throw Error("Synchronous parse encountered promise.");return t}_parseAsync(e){return Promise.resolve(this._parse(e))}parse(e,t){let r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;let i={common:{issues:[],async:null!==(r=null==t?void 0:t.async)&&void 0!==r&&r,contextualErrorMap:null==t?void 0:t.errorMap},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:s(e)},n=this._parseSync({data:e,path:i.path,parent:i});return k(i,n)}async parseAsync(e,t){let r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){let r={common:{issues:[],contextualErrorMap:null==t?void 0:t.errorMap,async:!0},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:s(e)},i=this._parse({data:e,path:r.path,parent:r});return k(r,await (x(i)?i:Promise.resolve(i)))}refine(e,t){let r=e=>"string"==typeof t||void 0===t?{message:t}:"function"==typeof t?t(e):t;return this._refinement((t,i)=>{let n=e(t),o=()=>i.addIssue({code:l.custom,...r(t)});return"undefined"!=typeof Promise&&n instanceof Promise?n.then(e=>!!e||(o(),!1)):!!n||(o(),!1)})}refinement(e,t){return this._refinement((r,i)=>!!e(r)||(i.addIssue("function"==typeof t?t(r,i):t),!1))}_refinement(e){return new eu({schema:this,typeName:e4.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return ed.create(this,this._def)}nullable(){return eh.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return q.create(this,this._def)}promise(){return ec.create(this,this._def)}or(e){return Y.create([this,e],this._def)}and(e){return J.create(this,e,this._def)}transform(e){return new eu({..._(this._def),schema:this,typeName:e4.ZodEffects,effect:{type:"transform",transform:e}})}default(e){return new ep({..._(this._def),innerType:this,defaultValue:"function"==typeof e?e:()=>e,typeName:e4.ZodDefault})}brand(){return new em({typeName:e4.ZodBranded,type:this,..._(this._def)})}catch(e){return new ef({..._(this._def),innerType:this,catchValue:"function"==typeof e?e:()=>e,typeName:e4.ZodCatch})}describe(e){return new this.constructor({...this._def,description:e})}pipe(e){return eb.create(this,e)}readonly(){return ev.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}let S=/^c[^\s-]{8,}$/i,R=/^[a-z][a-z0-9]*$/,$=/^[0-9A-HJKMNP-TV-Z]{26}$/,T=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,P=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,O=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,I=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,N=e=>e.precision?e.offset?RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):0===e.precision?e.offset?RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");class j extends A{_parse(e){let t;if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==a.string){let t=this._getOrReturnCtx(e);return f(t,{code:l.invalid_type,expected:a.string,received:t.parsedType}),w}let r=new g;for(let a of this._def.checks)if("min"===a.kind)e.data.length<a.value&&(f(t=this._getOrReturnCtx(e,t),{code:l.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),r.dirty());else if("max"===a.kind)e.data.length>a.value&&(f(t=this._getOrReturnCtx(e,t),{code:l.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),r.dirty());else if("length"===a.kind){let i=e.data.length>a.value,n=e.data.length<a.value;(i||n)&&(t=this._getOrReturnCtx(e,t),i?f(t,{code:l.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):n&&f(t,{code:l.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),r.dirty())}else if("email"===a.kind)P.test(e.data)||(f(t=this._getOrReturnCtx(e,t),{validation:"email",code:l.invalid_string,message:a.message}),r.dirty());else if("emoji"===a.kind)i||(i=RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),i.test(e.data)||(f(t=this._getOrReturnCtx(e,t),{validation:"emoji",code:l.invalid_string,message:a.message}),r.dirty());else if("uuid"===a.kind)T.test(e.data)||(f(t=this._getOrReturnCtx(e,t),{validation:"uuid",code:l.invalid_string,message:a.message}),r.dirty());else if("cuid"===a.kind)S.test(e.data)||(f(t=this._getOrReturnCtx(e,t),{validation:"cuid",code:l.invalid_string,message:a.message}),r.dirty());else if("cuid2"===a.kind)R.test(e.data)||(f(t=this._getOrReturnCtx(e,t),{validation:"cuid2",code:l.invalid_string,message:a.message}),r.dirty());else if("ulid"===a.kind)$.test(e.data)||(f(t=this._getOrReturnCtx(e,t),{validation:"ulid",code:l.invalid_string,message:a.message}),r.dirty());else if("url"===a.kind)try{new URL(e.data)}catch(i){f(t=this._getOrReturnCtx(e,t),{validation:"url",code:l.invalid_string,message:a.message}),r.dirty()}else if("regex"===a.kind)a.regex.lastIndex=0,a.regex.test(e.data)||(f(t=this._getOrReturnCtx(e,t),{validation:"regex",code:l.invalid_string,message:a.message}),r.dirty());else if("trim"===a.kind)e.data=e.data.trim();else if("includes"===a.kind)e.data.includes(a.value,a.position)||(f(t=this._getOrReturnCtx(e,t),{code:l.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),r.dirty());else if("toLowerCase"===a.kind)e.data=e.data.toLowerCase();else if("toUpperCase"===a.kind)e.data=e.data.toUpperCase();else if("startsWith"===a.kind)e.data.startsWith(a.value)||(f(t=this._getOrReturnCtx(e,t),{code:l.invalid_string,validation:{startsWith:a.value},message:a.message}),r.dirty());else if("endsWith"===a.kind)e.data.endsWith(a.value)||(f(t=this._getOrReturnCtx(e,t),{code:l.invalid_string,validation:{endsWith:a.value},message:a.message}),r.dirty());else if("datetime"===a.kind)N(a).test(e.data)||(f(t=this._getOrReturnCtx(e,t),{code:l.invalid_string,validation:"datetime",message:a.message}),r.dirty());else if("ip"===a.kind){var n,o;n=e.data,("v4"===(o=a.version)||!o)&&O.test(n)||("v6"===o||!o)&&I.test(n)||(f(t=this._getOrReturnCtx(e,t),{validation:"ip",code:l.invalid_string,message:a.message}),r.dirty())}else e2.assertNever(a);return{status:r.value,value:e.data}}_regex(e,t,r){return this.refinement(t=>e.test(t),{validation:t,code:l.invalid_string,...e5.errToObj(r)})}_addCheck(e){return new j({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...e5.errToObj(e)})}url(e){return this._addCheck({kind:"url",...e5.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...e5.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...e5.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...e5.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...e5.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...e5.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...e5.errToObj(e)})}datetime(e){var t;return"string"==typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,offset:null!==(t=null==e?void 0:e.offset)&&void 0!==t&&t,...e5.errToObj(null==e?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...e5.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:null==t?void 0:t.position,...e5.errToObj(null==t?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...e5.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...e5.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...e5.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...e5.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...e5.errToObj(t)})}nonempty(e){return this.min(1,e5.errToObj(e))}trim(){return new j({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new j({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new j({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>"datetime"===e.kind)}get isEmail(){return!!this._def.checks.find(e=>"email"===e.kind)}get isURL(){return!!this._def.checks.find(e=>"url"===e.kind)}get isEmoji(){return!!this._def.checks.find(e=>"emoji"===e.kind)}get isUUID(){return!!this._def.checks.find(e=>"uuid"===e.kind)}get isCUID(){return!!this._def.checks.find(e=>"cuid"===e.kind)}get isCUID2(){return!!this._def.checks.find(e=>"cuid2"===e.kind)}get isULID(){return!!this._def.checks.find(e=>"ulid"===e.kind)}get isIP(){return!!this._def.checks.find(e=>"ip"===e.kind)}get minLength(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}j.create=e=>{var t;return new j({checks:[],typeName:e4.ZodString,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,..._(e)})};class M extends A{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){let t;if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==a.number){let t=this._getOrReturnCtx(e);return f(t,{code:l.invalid_type,expected:a.number,received:t.parsedType}),w}let r=new g;for(let i of this._def.checks)"int"===i.kind?e2.isInteger(e.data)||(f(t=this._getOrReturnCtx(e,t),{code:l.invalid_type,expected:"integer",received:"float",message:i.message}),r.dirty()):"min"===i.kind?(i.inclusive?e.data<i.value:e.data<=i.value)&&(f(t=this._getOrReturnCtx(e,t),{code:l.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):"max"===i.kind?(i.inclusive?e.data>i.value:e.data>=i.value)&&(f(t=this._getOrReturnCtx(e,t),{code:l.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):"multipleOf"===i.kind?0!==function(e,t){let r=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,n=r>i?r:i;return parseInt(e.toFixed(n).replace(".",""))%parseInt(t.toFixed(n).replace(".",""))/Math.pow(10,n)}(e.data,i.value)&&(f(t=this._getOrReturnCtx(e,t),{code:l.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):"finite"===i.kind?Number.isFinite(e.data)||(f(t=this._getOrReturnCtx(e,t),{code:l.not_finite,message:i.message}),r.dirty()):e2.assertNever(i);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,e5.toString(t))}gt(e,t){return this.setLimit("min",e,!1,e5.toString(t))}lte(e,t){return this.setLimit("max",e,!0,e5.toString(t))}lt(e,t){return this.setLimit("max",e,!1,e5.toString(t))}setLimit(e,t,r,i){return new M({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:e5.toString(i)}]})}_addCheck(e){return new M({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:e5.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:e5.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:e5.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:e5.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:e5.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:e5.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:e5.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:e5.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:e5.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>"int"===e.kind||"multipleOf"===e.kind&&e2.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let r of this._def.checks){if("finite"===r.kind||"int"===r.kind||"multipleOf"===r.kind)return!0;"min"===r.kind?(null===t||r.value>t)&&(t=r.value):"max"===r.kind&&(null===e||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}M.create=e=>new M({checks:[],typeName:e4.ZodNumber,coerce:(null==e?void 0:e.coerce)||!1,..._(e)});class D extends A{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){let t;if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==a.bigint){let t=this._getOrReturnCtx(e);return f(t,{code:l.invalid_type,expected:a.bigint,received:t.parsedType}),w}let r=new g;for(let i of this._def.checks)"min"===i.kind?(i.inclusive?e.data<i.value:e.data<=i.value)&&(f(t=this._getOrReturnCtx(e,t),{code:l.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):"max"===i.kind?(i.inclusive?e.data>i.value:e.data>=i.value)&&(f(t=this._getOrReturnCtx(e,t),{code:l.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):"multipleOf"===i.kind?e.data%i.value!==BigInt(0)&&(f(t=this._getOrReturnCtx(e,t),{code:l.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):e2.assertNever(i);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,e5.toString(t))}gt(e,t){return this.setLimit("min",e,!1,e5.toString(t))}lte(e,t){return this.setLimit("max",e,!0,e5.toString(t))}lt(e,t){return this.setLimit("max",e,!1,e5.toString(t))}setLimit(e,t,r,i){return new D({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:e5.toString(i)}]})}_addCheck(e){return new D({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:e5.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:e5.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:e5.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:e5.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:e5.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}D.create=e=>{var t;return new D({checks:[],typeName:e4.ZodBigInt,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,..._(e)})};class B extends A{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==a.boolean){let t=this._getOrReturnCtx(e);return f(t,{code:l.invalid_type,expected:a.boolean,received:t.parsedType}),w}return b(e.data)}}B.create=e=>new B({typeName:e4.ZodBoolean,coerce:(null==e?void 0:e.coerce)||!1,..._(e)});class L extends A{_parse(e){let t;if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==a.date){let t=this._getOrReturnCtx(e);return f(t,{code:l.invalid_type,expected:a.date,received:t.parsedType}),w}if(isNaN(e.data.getTime()))return f(this._getOrReturnCtx(e),{code:l.invalid_date}),w;let r=new g;for(let i of this._def.checks)"min"===i.kind?e.data.getTime()<i.value&&(f(t=this._getOrReturnCtx(e,t),{code:l.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):"max"===i.kind?e.data.getTime()>i.value&&(f(t=this._getOrReturnCtx(e,t),{code:l.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):e2.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new L({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:e5.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:e5.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return null!=e?new Date(e):null}}L.create=e=>new L({checks:[],coerce:(null==e?void 0:e.coerce)||!1,typeName:e4.ZodDate,..._(e)});class U extends A{_parse(e){if(this._getType(e)!==a.symbol){let t=this._getOrReturnCtx(e);return f(t,{code:l.invalid_type,expected:a.symbol,received:t.parsedType}),w}return b(e.data)}}U.create=e=>new U({typeName:e4.ZodSymbol,..._(e)});class z extends A{_parse(e){if(this._getType(e)!==a.undefined){let t=this._getOrReturnCtx(e);return f(t,{code:l.invalid_type,expected:a.undefined,received:t.parsedType}),w}return b(e.data)}}z.create=e=>new z({typeName:e4.ZodUndefined,..._(e)});class F extends A{_parse(e){if(this._getType(e)!==a.null){let t=this._getOrReturnCtx(e);return f(t,{code:l.invalid_type,expected:a.null,received:t.parsedType}),w}return b(e.data)}}F.create=e=>new F({typeName:e4.ZodNull,..._(e)});class W extends A{constructor(){super(...arguments),this._any=!0}_parse(e){return b(e.data)}}W.create=e=>new W({typeName:e4.ZodAny,..._(e)});class H extends A{constructor(){super(...arguments),this._unknown=!0}_parse(e){return b(e.data)}}H.create=e=>new H({typeName:e4.ZodUnknown,..._(e)});class Z extends A{_parse(e){let t=this._getOrReturnCtx(e);return f(t,{code:l.invalid_type,expected:a.never,received:t.parsedType}),w}}Z.create=e=>new Z({typeName:e4.ZodNever,..._(e)});class V extends A{_parse(e){if(this._getType(e)!==a.undefined){let t=this._getOrReturnCtx(e);return f(t,{code:l.invalid_type,expected:a.void,received:t.parsedType}),w}return b(e.data)}}V.create=e=>new V({typeName:e4.ZodVoid,..._(e)});class q extends A{_parse(e){let{ctx:t,status:r}=this._processInputParams(e),i=this._def;if(t.parsedType!==a.array)return f(t,{code:l.invalid_type,expected:a.array,received:t.parsedType}),w;if(null!==i.exactLength){let e=t.data.length>i.exactLength.value,n=t.data.length<i.exactLength.value;(e||n)&&(f(t,{code:e?l.too_big:l.too_small,minimum:n?i.exactLength.value:void 0,maximum:e?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(null!==i.minLength&&t.data.length<i.minLength.value&&(f(t,{code:l.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),null!==i.maxLength&&t.data.length>i.maxLength.value&&(f(t,{code:l.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((e,r)=>i.type._parseAsync(new E(t,e,t.path,r)))).then(e=>g.mergeArray(r,e));let n=[...t.data].map((e,r)=>i.type._parseSync(new E(t,e,t.path,r)));return g.mergeArray(r,n)}get element(){return this._def.type}min(e,t){return new q({...this._def,minLength:{value:e,message:e5.toString(t)}})}max(e,t){return new q({...this._def,maxLength:{value:e,message:e5.toString(t)}})}length(e,t){return new q({...this._def,exactLength:{value:e,message:e5.toString(t)}})}nonempty(e){return this.min(1,e)}}q.create=(e,t)=>new q({type:e,minLength:null,maxLength:null,exactLength:null,typeName:e4.ZodArray,..._(t)});class G extends A{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;let e=this._def.shape(),t=e2.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==a.object){let t=this._getOrReturnCtx(e);return f(t,{code:l.invalid_type,expected:a.object,received:t.parsedType}),w}let{status:t,ctx:r}=this._processInputParams(e),{shape:i,keys:n}=this._getCached(),o=[];if(!(this._def.catchall instanceof Z&&"strip"===this._def.unknownKeys))for(let e in r.data)n.includes(e)||o.push(e);let s=[];for(let e of n){let t=i[e],n=r.data[e];s.push({key:{status:"valid",value:e},value:t._parse(new E(r,n,r.path,e)),alwaysSet:e in r.data})}if(this._def.catchall instanceof Z){let e=this._def.unknownKeys;if("passthrough"===e)for(let e of o)s.push({key:{status:"valid",value:e},value:{status:"valid",value:r.data[e]}});else if("strict"===e)o.length>0&&(f(r,{code:l.unrecognized_keys,keys:o}),t.dirty());else if("strip"===e);else throw Error("Internal ZodObject error: invalid unknownKeys value.")}else{let e=this._def.catchall;for(let t of o){let i=r.data[t];s.push({key:{status:"valid",value:t},value:e._parse(new E(r,i,r.path,t)),alwaysSet:t in r.data})}}return r.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of s){let r=await t.key;e.push({key:r,value:await t.value,alwaysSet:t.alwaysSet})}return e}).then(e=>g.mergeObjectSync(t,e)):g.mergeObjectSync(t,s)}get shape(){return this._def.shape()}strict(e){return e5.errToObj,new G({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(t,r)=>{var i,n,o,a;let s=null!==(o=null===(n=(i=this._def).errorMap)||void 0===n?void 0:n.call(i,t,r).message)&&void 0!==o?o:r.defaultError;return"unrecognized_keys"===t.code?{message:null!==(a=e5.errToObj(e).message)&&void 0!==a?a:s}:{message:s}}}:{}})}strip(){return new G({...this._def,unknownKeys:"strip"})}passthrough(){return new G({...this._def,unknownKeys:"passthrough"})}extend(e){return new G({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new G({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:e4.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new G({...this._def,catchall:e})}pick(e){let t={};return e2.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])}),new G({...this._def,shape:()=>t})}omit(e){let t={};return e2.objectKeys(this.shape).forEach(r=>{e[r]||(t[r]=this.shape[r])}),new G({...this._def,shape:()=>t})}deepPartial(){return function e(t){if(t instanceof G){let r={};for(let i in t.shape){let n=t.shape[i];r[i]=ed.create(e(n))}return new G({...t._def,shape:()=>r})}return t instanceof q?new q({...t._def,type:e(t.element)}):t instanceof ed?ed.create(e(t.unwrap())):t instanceof eh?eh.create(e(t.unwrap())):t instanceof Q?Q.create(t.items.map(t=>e(t))):t}(this)}partial(e){let t={};return e2.objectKeys(this.shape).forEach(r=>{let i=this.shape[r];e&&!e[r]?t[r]=i:t[r]=i.optional()}),new G({...this._def,shape:()=>t})}required(e){let t={};return e2.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])t[r]=this.shape[r];else{let e=this.shape[r];for(;e instanceof ed;)e=e._def.innerType;t[r]=e}}),new G({...this._def,shape:()=>t})}keyof(){return ea(e2.objectKeys(this.shape))}}G.create=(e,t)=>new G({shape:()=>e,unknownKeys:"strip",catchall:Z.create(),typeName:e4.ZodObject,..._(t)}),G.strictCreate=(e,t)=>new G({shape:()=>e,unknownKeys:"strict",catchall:Z.create(),typeName:e4.ZodObject,..._(t)}),G.lazycreate=(e,t)=>new G({shape:e,unknownKeys:"strip",catchall:Z.create(),typeName:e4.ZodObject,..._(t)});class Y extends A{_parse(e){let{ctx:t}=this._processInputParams(e),r=this._def.options;if(t.common.async)return Promise.all(r.map(async e=>{let r={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:r}),ctx:r}})).then(function(e){for(let t of e)if("valid"===t.result.status)return t.result;for(let r of e)if("dirty"===r.result.status)return t.common.issues.push(...r.ctx.common.issues),r.result;let r=e.map(e=>new c(e.ctx.common.issues));return f(t,{code:l.invalid_union,unionErrors:r}),w});{let e;let i=[];for(let n of r){let r={...t,common:{...t.common,issues:[]},parent:null},o=n._parseSync({data:t.data,path:t.path,parent:r});if("valid"===o.status)return o;"dirty"!==o.status||e||(e={result:o,ctx:r}),r.common.issues.length&&i.push(r.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let n=i.map(e=>new c(e));return f(t,{code:l.invalid_union,unionErrors:n}),w}}get options(){return this._def.options}}Y.create=(e,t)=>new Y({options:e,typeName:e4.ZodUnion,..._(t)});let K=e=>{if(e instanceof en)return K(e.schema);if(e instanceof eu)return K(e.innerType());if(e instanceof eo)return[e.value];if(e instanceof es)return e.options;if(e instanceof el)return Object.keys(e.enum);if(e instanceof ep)return K(e._def.innerType);if(e instanceof z)return[void 0];else if(e instanceof F)return[null];else return null};class X extends A{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==a.object)return f(t,{code:l.invalid_type,expected:a.object,received:t.parsedType}),w;let r=this.discriminator,i=t.data[r],n=this.optionsMap.get(i);return n?t.common.async?n._parseAsync({data:t.data,path:t.path,parent:t}):n._parseSync({data:t.data,path:t.path,parent:t}):(f(t,{code:l.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),w)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){let i=new Map;for(let r of t){let t=K(r.shape[e]);if(!t)throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let n of t){if(i.has(n))throw Error(`Discriminator property ${String(e)} has duplicate value ${String(n)}`);i.set(n,r)}}return new X({typeName:e4.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:i,..._(r)})}}class J extends A{_parse(e){let{status:t,ctx:r}=this._processInputParams(e),i=(e,i)=>{if(v(e)||v(i))return w;let n=function e(t,r){let i=s(t),n=s(r);if(t===r)return{valid:!0,data:t};if(i===a.object&&n===a.object){let i=e2.objectKeys(r),n=e2.objectKeys(t).filter(e=>-1!==i.indexOf(e)),o={...t,...r};for(let i of n){let n=e(t[i],r[i]);if(!n.valid)return{valid:!1};o[i]=n.data}return{valid:!0,data:o}}if(i===a.array&&n===a.array){if(t.length!==r.length)return{valid:!1};let i=[];for(let n=0;n<t.length;n++){let o=e(t[n],r[n]);if(!o.valid)return{valid:!1};i.push(o.data)}return{valid:!0,data:i}}return i===a.date&&n===a.date&&+t==+r?{valid:!0,data:t}:{valid:!1}}(e.value,i.value);return n.valid?((y(e)||y(i))&&t.dirty(),{status:t.value,value:n.data}):(f(r,{code:l.invalid_intersection_types}),w)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([e,t])=>i(e,t)):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}J.create=(e,t,r)=>new J({left:e,right:t,typeName:e4.ZodIntersection,..._(r)});class Q extends A{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==a.array)return f(r,{code:l.invalid_type,expected:a.array,received:r.parsedType}),w;if(r.data.length<this._def.items.length)return f(r,{code:l.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),w;!this._def.rest&&r.data.length>this._def.items.length&&(f(r,{code:l.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());let i=[...r.data].map((e,t)=>{let i=this._def.items[t]||this._def.rest;return i?i._parse(new E(r,e,r.path,t)):null}).filter(e=>!!e);return r.common.async?Promise.all(i).then(e=>g.mergeArray(t,e)):g.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new Q({...this._def,rest:e})}}Q.create=(e,t)=>{if(!Array.isArray(e))throw Error("You must pass an array of schemas to z.tuple([ ... ])");return new Q({items:e,typeName:e4.ZodTuple,rest:null,..._(t)})};class ee extends A{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==a.object)return f(r,{code:l.invalid_type,expected:a.object,received:r.parsedType}),w;let i=[],n=this._def.keyType,o=this._def.valueType;for(let e in r.data)i.push({key:n._parse(new E(r,e,r.path,e)),value:o._parse(new E(r,r.data[e],r.path,e))});return r.common.async?g.mergeObjectAsync(t,i):g.mergeObjectSync(t,i)}get element(){return this._def.valueType}static create(e,t,r){return new ee(t instanceof A?{keyType:e,valueType:t,typeName:e4.ZodRecord,..._(r)}:{keyType:j.create(),valueType:e,typeName:e4.ZodRecord,..._(t)})}}class et extends A{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==a.map)return f(r,{code:l.invalid_type,expected:a.map,received:r.parsedType}),w;let i=this._def.keyType,n=this._def.valueType,o=[...r.data.entries()].map(([e,t],o)=>({key:i._parse(new E(r,e,r.path,[o,"key"])),value:n._parse(new E(r,t,r.path,[o,"value"]))}));if(r.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let r of o){let i=await r.key,n=await r.value;if("aborted"===i.status||"aborted"===n.status)return w;("dirty"===i.status||"dirty"===n.status)&&t.dirty(),e.set(i.value,n.value)}return{status:t.value,value:e}})}{let e=new Map;for(let r of o){let i=r.key,n=r.value;if("aborted"===i.status||"aborted"===n.status)return w;("dirty"===i.status||"dirty"===n.status)&&t.dirty(),e.set(i.value,n.value)}return{status:t.value,value:e}}}}et.create=(e,t,r)=>new et({valueType:t,keyType:e,typeName:e4.ZodMap,..._(r)});class er extends A{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==a.set)return f(r,{code:l.invalid_type,expected:a.set,received:r.parsedType}),w;let i=this._def;null!==i.minSize&&r.data.size<i.minSize.value&&(f(r,{code:l.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),t.dirty()),null!==i.maxSize&&r.data.size>i.maxSize.value&&(f(r,{code:l.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),t.dirty());let n=this._def.valueType;function o(e){let r=new Set;for(let i of e){if("aborted"===i.status)return w;"dirty"===i.status&&t.dirty(),r.add(i.value)}return{status:t.value,value:r}}let s=[...r.data.values()].map((e,t)=>n._parse(new E(r,e,r.path,t)));return r.common.async?Promise.all(s).then(e=>o(e)):o(s)}min(e,t){return new er({...this._def,minSize:{value:e,message:e5.toString(t)}})}max(e,t){return new er({...this._def,maxSize:{value:e,message:e5.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}er.create=(e,t)=>new er({valueType:e,minSize:null,maxSize:null,typeName:e4.ZodSet,..._(t)});class ei extends A{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==a.function)return f(t,{code:l.invalid_type,expected:a.function,received:t.parsedType}),w;function r(e,r){return p({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,h(),u].filter(e=>!!e),issueData:{code:l.invalid_arguments,argumentsError:r}})}function i(e,r){return p({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,h(),u].filter(e=>!!e),issueData:{code:l.invalid_return_type,returnTypeError:r}})}let n={errorMap:t.common.contextualErrorMap},o=t.data;if(this._def.returns instanceof ec){let e=this;return b(async function(...t){let a=new c([]),s=await e._def.args.parseAsync(t,n).catch(e=>{throw a.addIssue(r(t,e)),a}),l=await Reflect.apply(o,this,s);return await e._def.returns._def.type.parseAsync(l,n).catch(e=>{throw a.addIssue(i(l,e)),a})})}{let e=this;return b(function(...t){let a=e._def.args.safeParse(t,n);if(!a.success)throw new c([r(t,a.error)]);let s=Reflect.apply(o,this,a.data),l=e._def.returns.safeParse(s,n);if(!l.success)throw new c([i(s,l.error)]);return l.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new ei({...this._def,args:Q.create(e).rest(H.create())})}returns(e){return new ei({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new ei({args:e||Q.create([]).rest(H.create()),returns:t||H.create(),typeName:e4.ZodFunction,..._(r)})}}class en extends A{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}en.create=(e,t)=>new en({getter:e,typeName:e4.ZodLazy,..._(t)});class eo extends A{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return f(t,{received:t.data,code:l.invalid_literal,expected:this._def.value}),w}return{status:"valid",value:e.data}}get value(){return this._def.value}}function ea(e,t){return new es({values:e,typeName:e4.ZodEnum,..._(t)})}eo.create=(e,t)=>new eo({value:e,typeName:e4.ZodLiteral,..._(t)});class es extends A{_parse(e){if("string"!=typeof e.data){let t=this._getOrReturnCtx(e),r=this._def.values;return f(t,{expected:e2.joinValues(r),received:t.parsedType,code:l.invalid_type}),w}if(-1===this._def.values.indexOf(e.data)){let t=this._getOrReturnCtx(e),r=this._def.values;return f(t,{received:t.data,code:l.invalid_enum_value,options:r}),w}return b(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(e){return es.create(e)}exclude(e){return es.create(this.options.filter(t=>!e.includes(t)))}}es.create=ea;class el extends A{_parse(e){let t=e2.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==a.string&&r.parsedType!==a.number){let e=e2.objectValues(t);return f(r,{expected:e2.joinValues(e),received:r.parsedType,code:l.invalid_type}),w}if(-1===t.indexOf(e.data)){let e=e2.objectValues(t);return f(r,{received:r.data,code:l.invalid_enum_value,options:e}),w}return b(e.data)}get enum(){return this._def.values}}el.create=(e,t)=>new el({values:e,typeName:e4.ZodNativeEnum,..._(t)});class ec extends A{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);return t.parsedType!==a.promise&&!1===t.common.async?(f(t,{code:l.invalid_type,expected:a.promise,received:t.parsedType}),w):b((t.parsedType===a.promise?t.data:Promise.resolve(t.data)).then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}}ec.create=(e,t)=>new ec({type:e,typeName:e4.ZodPromise,..._(t)});class eu extends A{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===e4.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:r}=this._processInputParams(e),i=this._def.effect||null,n={addIssue:e=>{f(r,e),e.fatal?t.abort():t.dirty()},get path(){return r.path}};if(n.addIssue=n.addIssue.bind(n),"preprocess"===i.type){let e=i.transform(r.data,n);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(e).then(e=>this._def.schema._parseAsync({data:e,path:r.path,parent:r})):this._def.schema._parseSync({data:e,path:r.path,parent:r})}if("refinement"===i.type){let e=e=>{let t=i.refinement(e,n);if(r.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(r=>"aborted"===r.status?w:("dirty"===r.status&&t.dirty(),e(r.value).then(()=>({status:t.value,value:r.value}))));{let i=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===i.status?w:("dirty"===i.status&&t.dirty(),e(i.value),{status:t.value,value:i.value})}}if("transform"===i.type){if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(e=>C(e)?Promise.resolve(i.transform(e.value,n)).then(e=>({status:t.value,value:e})):e);{let e=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!C(e))return e;let o=i.transform(e.value,n);if(o instanceof Promise)throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}}e2.assertNever(i)}}eu.create=(e,t,r)=>new eu({schema:e,typeName:e4.ZodEffects,effect:t,..._(r)}),eu.createWithPreprocess=(e,t,r)=>new eu({schema:t,effect:{type:"preprocess",transform:e},typeName:e4.ZodEffects,..._(r)});class ed extends A{_parse(e){return this._getType(e)===a.undefined?b(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ed.create=(e,t)=>new ed({innerType:e,typeName:e4.ZodOptional,..._(t)});class eh extends A{_parse(e){return this._getType(e)===a.null?b(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}eh.create=(e,t)=>new eh({innerType:e,typeName:e4.ZodNullable,..._(t)});class ep extends A{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return t.parsedType===a.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}ep.create=(e,t)=>new ep({innerType:e,typeName:e4.ZodDefault,defaultValue:"function"==typeof t.default?t.default:()=>t.default,..._(t)});class ef extends A{_parse(e){let{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return x(i)?i.then(e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new c(r.common.issues)},input:r.data})})):{status:"valid",value:"valid"===i.status?i.value:this._def.catchValue({get error(){return new c(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}ef.create=(e,t)=>new ef({innerType:e,typeName:e4.ZodCatch,catchValue:"function"==typeof t.catch?t.catch:()=>t.catch,..._(t)});class eg extends A{_parse(e){if(this._getType(e)!==a.nan){let t=this._getOrReturnCtx(e);return f(t,{code:l.invalid_type,expected:a.nan,received:t.parsedType}),w}return{status:"valid",value:e.data}}}eg.create=e=>new eg({typeName:e4.ZodNaN,..._(e)});let ew=Symbol("zod_brand");class em extends A{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class eb extends A{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?w:"dirty"===e.status?(t.dirty(),m(e.value)):this._def.out._parseAsync({data:e.value,path:r.path,parent:r})})();{let e=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?w:"dirty"===e.status?(t.dirty(),{status:"dirty",value:e.value}):this._def.out._parseSync({data:e.value,path:r.path,parent:r})}}static create(e,t){return new eb({in:e,out:t,typeName:e4.ZodPipeline})}}class ev extends A{_parse(e){let t=this._def.innerType._parse(e);return C(t)&&(t.value=Object.freeze(t.value)),t}}ev.create=(e,t)=>new ev({innerType:e,typeName:e4.ZodReadonly,..._(t)});let ey=(e,t={},r)=>e?W.create().superRefine((i,n)=>{var o,a;if(!e(i)){let e="function"==typeof t?t(i):"string"==typeof t?{message:t}:t,s=null===(a=null!==(o=e.fatal)&&void 0!==o?o:r)||void 0===a||a;n.addIssue({code:"custom",..."string"==typeof e?{message:e}:e,fatal:s})}}):W.create(),eC={object:G.lazycreate};(e9=e4||(e4={})).ZodString="ZodString",e9.ZodNumber="ZodNumber",e9.ZodNaN="ZodNaN",e9.ZodBigInt="ZodBigInt",e9.ZodBoolean="ZodBoolean",e9.ZodDate="ZodDate",e9.ZodSymbol="ZodSymbol",e9.ZodUndefined="ZodUndefined",e9.ZodNull="ZodNull",e9.ZodAny="ZodAny",e9.ZodUnknown="ZodUnknown",e9.ZodNever="ZodNever",e9.ZodVoid="ZodVoid",e9.ZodArray="ZodArray",e9.ZodObject="ZodObject",e9.ZodUnion="ZodUnion",e9.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e9.ZodIntersection="ZodIntersection",e9.ZodTuple="ZodTuple",e9.ZodRecord="ZodRecord",e9.ZodMap="ZodMap",e9.ZodSet="ZodSet",e9.ZodFunction="ZodFunction",e9.ZodLazy="ZodLazy",e9.ZodLiteral="ZodLiteral",e9.ZodEnum="ZodEnum",e9.ZodEffects="ZodEffects",e9.ZodNativeEnum="ZodNativeEnum",e9.ZodOptional="ZodOptional",e9.ZodNullable="ZodNullable",e9.ZodDefault="ZodDefault",e9.ZodCatch="ZodCatch",e9.ZodPromise="ZodPromise",e9.ZodBranded="ZodBranded",e9.ZodPipeline="ZodPipeline",e9.ZodReadonly="ZodReadonly";let ex=j.create,eE=M.create,ek=eg.create,e_=D.create,eA=B.create,eS=L.create,eR=U.create,e$=z.create,eT=F.create,eP=W.create,eO=H.create,eI=Z.create,eN=V.create,ej=q.create,eM=G.create,eD=G.strictCreate,eB=Y.create,eL=X.create,eU=J.create,ez=Q.create,eF=ee.create,eW=et.create,eH=er.create,eZ=ei.create,eV=en.create,eq=eo.create,eG=es.create,eY=el.create,eK=ec.create,eX=eu.create,eJ=ed.create,eQ=eh.create,e0=eu.createWithPreprocess,e1=eb.create;var e2,e3,e5,e4,e6,e8,e9,e7=Object.freeze({__proto__:null,defaultErrorMap:u,setErrorMap:function(e){d=e},getErrorMap:h,makeIssue:p,EMPTY_PATH:[],addIssueToContext:f,ParseStatus:g,INVALID:w,DIRTY:m,OK:b,isAborted:v,isDirty:y,isValid:C,isAsync:x,get util(){return e2},get objectUtil(){return e3},ZodParsedType:a,getParsedType:s,ZodType:A,ZodString:j,ZodNumber:M,ZodBigInt:D,ZodBoolean:B,ZodDate:L,ZodSymbol:U,ZodUndefined:z,ZodNull:F,ZodAny:W,ZodUnknown:H,ZodNever:Z,ZodVoid:V,ZodArray:q,ZodObject:G,ZodUnion:Y,ZodDiscriminatedUnion:X,ZodIntersection:J,ZodTuple:Q,ZodRecord:ee,ZodMap:et,ZodSet:er,ZodFunction:ei,ZodLazy:en,ZodLiteral:eo,ZodEnum:es,ZodNativeEnum:el,ZodPromise:ec,ZodEffects:eu,ZodTransformer:eu,ZodOptional:ed,ZodNullable:eh,ZodDefault:ep,ZodCatch:ef,ZodNaN:eg,BRAND:ew,ZodBranded:em,ZodPipeline:eb,ZodReadonly:ev,custom:ey,Schema:A,ZodSchema:A,late:eC,get ZodFirstPartyTypeKind(){return e4},coerce:{string:e=>j.create({...e,coerce:!0}),number:e=>M.create({...e,coerce:!0}),boolean:e=>B.create({...e,coerce:!0}),bigint:e=>D.create({...e,coerce:!0}),date:e=>L.create({...e,coerce:!0})},any:eP,array:ej,bigint:e_,boolean:eA,date:eS,discriminatedUnion:eL,effect:eX,enum:eG,function:eZ,instanceof:(e,t={message:`Input not instance of ${e.name}`})=>ey(t=>t instanceof e,t),intersection:eU,lazy:eV,literal:eq,map:eW,nan:ek,nativeEnum:eY,never:eI,null:eT,nullable:eQ,number:eE,object:eM,oboolean:()=>eA().optional(),onumber:()=>eE().optional(),optional:eJ,ostring:()=>ex().optional(),pipeline:e1,preprocess:e0,promise:eK,record:eF,set:eH,strictObject:eD,string:ex,symbol:eR,transformer:eX,tuple:ez,undefined:e$,union:eB,unknown:eO,void:eN,NEVER:w,ZodIssueCode:l,quotelessJson:e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),ZodError:c});let te=e7.object({message:e7.string()});function tt(e){return e7.literal(n[e])}e7.object({accessList:e7.array(e7.string()),blockHash:e7.string().nullable(),blockNumber:e7.string().nullable(),chainId:e7.string(),from:e7.string(),gas:e7.string(),hash:e7.string(),input:e7.string().nullable(),maxFeePerGas:e7.string(),maxPriorityFeePerGas:e7.string(),nonce:e7.string(),r:e7.string(),s:e7.string(),to:e7.string(),transactionIndex:e7.string().nullable(),type:e7.string(),v:e7.string(),value:e7.string()});let tr=e7.object({chainId:e7.number()}),ti=e7.object({email:e7.string().email()}),tn=e7.object({otp:e7.string()}),to=e7.object({chainId:e7.optional(e7.number()),preferredAccountType:e7.optional(e7.string())}),ta=e7.object({email:e7.string().email()}),ts=e7.object({otp:e7.string()}),tl=e7.object({otp:e7.string()}),tc=e7.object({themeMode:e7.optional(e7.enum(["light","dark"])),themeVariables:e7.optional(e7.record(e7.string(),e7.string().or(e7.number())))}),tu=e7.object({metadata:e7.object({name:e7.string(),description:e7.string(),url:e7.string(),icons:e7.array(e7.string())}).optional(),sdkVersion:e7.string(),projectId:e7.string()}),td=e7.object({type:e7.string()}),th=e7.object({action:e7.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),tp=e7.object({email:e7.string().email(),address:e7.string(),chainId:e7.number(),smartAccountDeployed:e7.optional(e7.boolean())}),tf=e7.object({isConnected:e7.boolean()}),tg=e7.object({chainId:e7.number()}),tw=e7.object({chainId:e7.number()}),tm=e7.object({newEmail:e7.string().email()}),tb=e7.object({smartAccountEnabledNetworks:e7.array(e7.number())});e7.object({address:e7.string(),isDeployed:e7.boolean()});let tv=e7.object({type:e7.string(),address:e7.string()}),ty=e7.any(),tC=e7.object({method:e7.literal("eth_accounts")}),tx=e7.object({method:e7.literal("eth_blockNumber")}),tE=e7.object({method:e7.literal("eth_call"),params:e7.array(e7.any())}),tk=e7.object({method:e7.literal("eth_chainId")}),t_=e7.object({method:e7.literal("eth_estimateGas"),params:e7.array(e7.any())}),tA=e7.object({method:e7.literal("eth_feeHistory"),params:e7.array(e7.any())}),tS=e7.object({method:e7.literal("eth_gasPrice")}),tR=e7.object({method:e7.literal("eth_getAccount"),params:e7.array(e7.any())}),t$=e7.object({method:e7.literal("eth_getBalance"),params:e7.array(e7.any())}),tT=e7.object({method:e7.literal("eth_getBlockByHash"),params:e7.array(e7.any())}),tP=e7.object({method:e7.literal("eth_getBlockByNumber"),params:e7.array(e7.any())}),tO=e7.object({method:e7.literal("eth_getBlockReceipts"),params:e7.array(e7.any())}),tI=e7.object({method:e7.literal("eth_getBlockTransactionCountByHash"),params:e7.array(e7.any())}),tN=e7.object({method:e7.literal("eth_getBlockTransactionCountByNumber"),params:e7.array(e7.any())}),tj=e7.object({method:e7.literal("eth_getCode"),params:e7.array(e7.any())}),tM=e7.object({method:e7.literal("eth_getFilterChanges"),params:e7.array(e7.any())}),tD=e7.object({method:e7.literal("eth_getFilterLogs"),params:e7.array(e7.any())}),tB=e7.object({method:e7.literal("eth_getLogs"),params:e7.array(e7.any())}),tL=e7.object({method:e7.literal("eth_getProof"),params:e7.array(e7.any())}),tU=e7.object({method:e7.literal("eth_getStorageAt"),params:e7.array(e7.any())}),tz=e7.object({method:e7.literal("eth_getTransactionByBlockHashAndIndex"),params:e7.array(e7.any())}),tF=e7.object({method:e7.literal("eth_getTransactionByBlockNumberAndIndex"),params:e7.array(e7.any())}),tW=e7.object({method:e7.literal("eth_getTransactionByHash"),params:e7.array(e7.any())}),tH=e7.object({method:e7.literal("eth_getTransactionCount"),params:e7.array(e7.any())}),tZ=e7.object({method:e7.literal("eth_getTransactionReceipt"),params:e7.array(e7.any())}),tV=e7.object({method:e7.literal("eth_getUncleCountByBlockHash"),params:e7.array(e7.any())}),tq=e7.object({method:e7.literal("eth_getUncleCountByBlockNumber"),params:e7.array(e7.any())}),tG=e7.object({method:e7.literal("eth_maxPriorityFeePerGas")}),tY=e7.object({method:e7.literal("eth_newBlockFilter")}),tK=e7.object({method:e7.literal("eth_newFilter"),params:e7.array(e7.any())}),tX=e7.object({method:e7.literal("eth_newPendingTransactionFilter")}),tJ=e7.object({method:e7.literal("eth_sendRawTransaction"),params:e7.array(e7.any())}),tQ=e7.object({method:e7.literal("eth_syncing"),params:e7.array(e7.any())}),t0=e7.object({method:e7.literal("eth_uninstallFilter"),params:e7.array(e7.any())}),t1=e7.object({method:e7.literal("personal_sign"),params:e7.array(e7.any())}),t2=e7.object({method:e7.literal("eth_signTypedData_v4"),params:e7.array(e7.any())}),t3=e7.object({method:e7.literal("eth_sendTransaction"),params:e7.array(e7.any())}),t5=e7.object({token:e7.string()}),t4={appEvent:e7.object({type:tt("APP_SWITCH_NETWORK"),payload:tr}).or(e7.object({type:tt("APP_CONNECT_EMAIL"),payload:ti})).or(e7.object({type:tt("APP_CONNECT_DEVICE")})).or(e7.object({type:tt("APP_CONNECT_OTP"),payload:tn})).or(e7.object({type:tt("APP_GET_USER"),payload:e7.optional(to)})).or(e7.object({type:tt("APP_SIGN_OUT")})).or(e7.object({type:tt("APP_IS_CONNECTED"),payload:e7.optional(t5)})).or(e7.object({type:tt("APP_GET_CHAIN_ID")})).or(e7.object({type:tt("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(e7.object({type:tt("APP_INIT_SMART_ACCOUNT")})).or(e7.object({type:tt("APP_SET_PREFERRED_ACCOUNT"),payload:td})).or(e7.object({type:tt("APP_RPC_REQUEST"),payload:t1.or(t3).or(tC).or(tx).or(tE).or(tk).or(t_).or(tA).or(tS).or(tR).or(t$).or(tT).or(tP).or(tO).or(tI).or(tN).or(tj).or(tM).or(tD).or(tB).or(tL).or(tU).or(tz).or(tF).or(tW).or(tH).or(tZ).or(tV).or(tq).or(tG).or(tY).or(tK).or(tX).or(tJ).or(tQ).or(t0).or(t1).or(t2).or(t3)})).or(e7.object({type:tt("APP_UPDATE_EMAIL"),payload:ta})).or(e7.object({type:tt("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:ts})).or(e7.object({type:tt("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:tl})).or(e7.object({type:tt("APP_SYNC_THEME"),payload:tc})).or(e7.object({type:tt("APP_SYNC_DAPP_DATA"),payload:tu})),frameEvent:e7.object({type:tt("FRAME_SWITCH_NETWORK_ERROR"),payload:te}).or(e7.object({type:tt("FRAME_SWITCH_NETWORK_SUCCESS"),payload:tw})).or(e7.object({type:tt("FRAME_CONNECT_EMAIL_ERROR"),payload:te})).or(e7.object({type:tt("FRAME_CONNECT_EMAIL_SUCCESS"),payload:th})).or(e7.object({type:tt("FRAME_CONNECT_OTP_ERROR"),payload:te})).or(e7.object({type:tt("FRAME_CONNECT_OTP_SUCCESS")})).or(e7.object({type:tt("FRAME_CONNECT_DEVICE_ERROR"),payload:te})).or(e7.object({type:tt("FRAME_CONNECT_DEVICE_SUCCESS")})).or(e7.object({type:tt("FRAME_GET_USER_ERROR"),payload:te})).or(e7.object({type:tt("FRAME_GET_USER_SUCCESS"),payload:tp})).or(e7.object({type:tt("FRAME_SIGN_OUT_ERROR"),payload:te})).or(e7.object({type:tt("FRAME_SIGN_OUT_SUCCESS")})).or(e7.object({type:tt("FRAME_IS_CONNECTED_ERROR"),payload:te})).or(e7.object({type:tt("FRAME_IS_CONNECTED_SUCCESS"),payload:tf})).or(e7.object({type:tt("FRAME_GET_CHAIN_ID_ERROR"),payload:te})).or(e7.object({type:tt("FRAME_GET_CHAIN_ID_SUCCESS"),payload:tg})).or(e7.object({type:tt("FRAME_RPC_REQUEST_ERROR"),payload:te})).or(e7.object({type:tt("FRAME_RPC_REQUEST_SUCCESS"),payload:ty})).or(e7.object({type:tt("FRAME_SESSION_UPDATE"),payload:t5})).or(e7.object({type:tt("FRAME_UPDATE_EMAIL_ERROR"),payload:te})).or(e7.object({type:tt("FRAME_UPDATE_EMAIL_SUCCESS")})).or(e7.object({type:tt("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:te})).or(e7.object({type:tt("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(e7.object({type:tt("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:te})).or(e7.object({type:tt("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:tm})).or(e7.object({type:tt("FRAME_SYNC_THEME_ERROR"),payload:te})).or(e7.object({type:tt("FRAME_SYNC_THEME_SUCCESS")})).or(e7.object({type:tt("FRAME_SYNC_DAPP_DATA_ERROR"),payload:te})).or(e7.object({type:tt("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(e7.object({type:tt("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:tb})).or(e7.object({type:tt("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:te})).or(e7.object({type:tt("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:te})).or(e7.object({type:tt("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:tv})).or(e7.object({type:tt("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:te}))},t6={set(e,t){t9.isClient&&localStorage.setItem(`${n.STORAGE_KEY}${e}`,t)},get:e=>t9.isClient?localStorage.getItem(`${n.STORAGE_KEY}${e}`):null,delete(e){t9.isClient&&localStorage.removeItem(`${n.STORAGE_KEY}${e}`)}},t8=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],t9={getBlockchainApiUrl(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return t8.includes(t)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){let e=t6.get(n.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<3e4)throw Error(`Please try again after ${Math.ceil((3e4-t)/1e3)} seconds`)}},getTimeToNextEmailLogin(){let e=t6.get(n.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<3e4)return Math.ceil((3e4-t)/1e3)}return 0},checkIfRequestExists(e){let t=this.getRequestMethod(e);return o.NOT_SAFE_RPC_METHODS.includes(t)||o.SAFE_RPC_METHODS.includes(t)},getRequestMethod:e=>e?.payload?.method,checkIfRequestIsAllowed(e){let t=this.getRequestMethod(e);return o.SAFE_RPC_METHODS.includes(t)},getPreferredAccountType:()=>t6.get(n.PREFERRED_ACCOUNT_TYPE)||o.ACCOUNT_TYPES.EOA,isClient:"undefined"!=typeof window};class t7{constructor(e,t=!1){if(this.iframe=null,this.rpcUrl=t9.getBlockchainApiUrl(),this.events={onFrameEvent:e=>{t9.isClient&&window.addEventListener("message",({data:t})=>{t.type?.includes(n.FRAME_EVENT_KEY)&&e(t4.frameEvent.parse(t))})},onAppEvent:e=>{t9.isClient&&window.addEventListener("message",({data:t})=>{t.type?.includes(n.APP_EVENT_KEY)&&e(t4.appEvent.parse(t))})},postAppEvent:e=>{if(t9.isClient){if(!this.iframe?.contentWindow)throw Error("W3mFrame: iframe is not set");t4.appEvent.parse(e),window.postMessage(e),this.iframe.contentWindow.postMessage(e,"*")}},postFrameEvent:e=>{if(t9.isClient){if(!parent)throw Error("W3mFrame: parent is not set");t4.frameEvent.parse(e),parent.postMessage(e,"*")}}},this.projectId=e,this.frameLoadPromise=new Promise((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}}),t&&(this.frameLoadPromise=new Promise((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}}),t9.isClient)){let t=document.createElement("iframe");t.id="w3m-iframe",t.src=`${n.SECURE_SITE_SDK}?projectId=${e}`,t.style.position="fixed",t.style.zIndex="999999",t.style.display="none",t.style.opacity="0",t.style.borderBottomLeftRadius="clamp(0px, var(--wui-border-radius-l), 44px)",t.style.borderBottomRightRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(t),this.iframe=t,this.iframe.onload=()=>{this.frameLoadPromiseResolver?.resolve(void 0)},this.iframe.onerror=()=>{this.frameLoadPromiseResolver?.reject("Unable to load email login dependency")}}}get networks(){return Object.assign({},...[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map(e=>({[e]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${e}&projectId=${this.projectId}`,chainId:e}})))}}class re{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.updateEmailPrimaryOtpResolver=void 0,this.updateEmailSecondaryOtpResolver=void 0,this.syncThemeResolver=void 0,this.syncDappDataResolver=void 0,this.smartAccountEnabledNetworksResolver=void 0,this.setPreferredAccountResolver=void 0,this.w3mFrame=new t7(e,!0),this.w3mFrame.events.onFrameEvent(e=>{switch(console.log("\uD83D\uDCBB received",e),e.type){case n.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(e);case n.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(e);case n.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case n.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(e);case n.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case n.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(e);case n.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(e);case n.FRAME_GET_USER_ERROR:return this.onConnectError(e);case n.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(e);case n.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(e);case n.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(e);case n.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(e);case n.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case n.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(e);case n.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(e);case n.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(e);case n.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(e);case n.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(e);case n.FRAME_SESSION_UPDATE:return this.onSessionUpdate(e);case n.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess();case n.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(e);case n.FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:return this.onUpdateEmailPrimaryOtpSuccess();case n.FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:return this.onUpdateEmailPrimaryOtpError(e);case n.FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:return this.onUpdateEmailSecondaryOtpSuccess(e);case n.FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:return this.onUpdateEmailSecondaryOtpError(e);case n.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case n.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(e);case n.FRAME_SYNC_DAPP_DATA_SUCCESS:return this.onSyncDappDataSuccess();case n.FRAME_SYNC_DAPP_DATA_ERROR:return this.onSyncDappDataError(e);case n.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:return this.onSmartAccountEnabledNetworksSuccess(e);case n.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:return this.onSmartAccountEnabledNetworksError(e);case n.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:return this.onPreferSmartAccountSuccess(e);case n.FRAME_SET_PREFERRED_ACCOUNT_ERROR:return this.onPreferSmartAccountError();default:return null}})}getLoginEmailUsed(){return!!t6.get(n.EMAIL_LOGIN_USED_KEY)}getEmail(){return t6.get(n.EMAIL)}rejectRpcRequest(){this.rpcRequestResolver?.reject()}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,t9.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:n.APP_CONNECT_EMAIL,payload:e}),new Promise((e,t)=>{this.connectEmailResolver={resolve:e,reject:t}})}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_CONNECT_DEVICE}),new Promise((e,t)=>{this.connectDeviceResolver={resolve:e,reject:t}})}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_CONNECT_OTP,payload:e}),new Promise((e,t)=>{this.connectOtpResolver={resolve:e,reject:t}})}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_IS_CONNECTED,payload:void 0}),new Promise((e,t)=>{this.isConnectedResolver={resolve:e,reject:t}})}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_GET_CHAIN_ID}),new Promise((e,t)=>{this.getChainIdResolver={resolve:e,reject:t}})}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,t9.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:n.APP_UPDATE_EMAIL,payload:e}),new Promise((e,t)=>{this.updateEmailResolver={resolve:e,reject:t}})}async updateEmailPrimaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_UPDATE_EMAIL_PRIMARY_OTP,payload:e}),new Promise((e,t)=>{this.updateEmailPrimaryOtpResolver={resolve:e,reject:t}})}async updateEmailSecondaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_UPDATE_EMAIL_SECONDARY_OTP,payload:e}),new Promise((e,t)=>{this.updateEmailSecondaryOtpResolver={resolve:e,reject:t}})}async syncTheme(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_SYNC_THEME,payload:e}),new Promise((e,t)=>{this.syncThemeResolver={resolve:e,reject:t}})}async syncDappData(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_SYNC_DAPP_DATA,payload:e}),new Promise((e,t)=>{this.syncDappDataResolver={resolve:e,reject:t}})}async getSmartAccountEnabledNetworks(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS}),new Promise((e,t)=>{this.smartAccountEnabledNetworksResolver={resolve:e,reject:t}})}async setPreferredAccount(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_SET_PREFERRED_ACCOUNT,payload:{type:e}}),new Promise((e,t)=>{this.setPreferredAccountResolver={resolve:e,reject:t}})}async connect(e){let t=e?.chainId??this.getLastUsedChainId()??1;return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_GET_USER,payload:{chainId:t,preferredAccountType:e?.preferredAccountType}}),new Promise((e,t)=>{this.connectResolver={resolve:e,reject:t}})}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise((e,t)=>{this.switchChainResolver={resolve:e,reject:t}})}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:n.APP_SIGN_OUT}),new Promise((e,t)=>{this.disconnectResolver={resolve:e,reject:t}})}async request(e){return(await this.w3mFrame.frameLoadPromise,o.GET_CHAIN_ID===e.method)?this.getLastUsedChainId():(this.w3mFrame.events.postAppEvent({type:n.APP_RPC_REQUEST,payload:e}),new Promise((e,t)=>{this.rpcRequestResolver={resolve:e,reject:t}}))}onRpcRequest(e){this.w3mFrame.events.onAppEvent(t=>{t.type.includes(n.RPC_METHOD_KEY)&&e(t)})}onRpcResponse(e){this.w3mFrame.events.onFrameEvent(t=>{t.type.includes(n.RPC_METHOD_KEY)&&e(t)})}onIsConnected(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===n.FRAME_GET_USER_SUCCESS&&e(t.payload)})}onNotConnected(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===n.FRAME_IS_CONNECTED_ERROR&&e(),t.type!==n.FRAME_IS_CONNECTED_SUCCESS||t.payload.isConnected||e()})}onSetPreferredAccount(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===n.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS?e(t.payload):t.type===n.FRAME_SET_PREFERRED_ACCOUNT_ERROR&&e({type:o.ACCOUNT_TYPES.EOA})})}onGetSmartAccountEnabledNetworks(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===n.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS?e(t.payload.smartAccountEnabledNetworks):t.type===n.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR&&e([])})}onConnectEmailSuccess(e){this.connectEmailResolver?.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){this.connectEmailResolver?.reject(e.payload.message)}onConnectDeviceSuccess(){this.connectDeviceResolver?.resolve(void 0)}onConnectDeviceError(e){this.connectDeviceResolver?.reject(e.payload.message)}onConnectOtpSuccess(){this.connectOtpResolver?.resolve(void 0)}onConnectOtpError(e){this.connectOtpResolver?.reject(e.payload.message)}onConnectSuccess(e){this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),this.connectResolver?.resolve(e.payload)}onConnectError(e){this.connectResolver?.reject(e.payload.message)}onIsConnectedSuccess(e){e.payload.isConnected||this.deleteEmailLoginCache(),this.isConnectedResolver?.resolve(e.payload)}onIsConnectedError(e){this.isConnectedResolver?.reject(e.payload.message)}onGetChainIdSuccess(e){this.setLastUsedChainId(e.payload.chainId),this.getChainIdResolver?.resolve(e.payload)}onGetChainIdError(e){this.getChainIdResolver?.reject(e.payload.message)}onSignOutSuccess(){this.disconnectResolver?.resolve(void 0),this.deleteEmailLoginCache()}onSignOutError(e){this.disconnectResolver?.reject(e.payload.message)}onSwitchChainSuccess(e){this.setLastUsedChainId(e.payload.chainId),this.switchChainResolver?.resolve(e.payload)}onSwitchChainError(e){this.switchChainResolver?.reject(e.payload.message)}onRpcRequestSuccess(e){this.rpcRequestResolver?.resolve(e.payload)}onRpcRequestError(e){this.rpcRequestResolver?.reject(e.payload.message)}onSessionUpdate(e){let{payload:t}=e}onUpdateEmailSuccess(){this.updateEmailResolver?.resolve(void 0),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){this.updateEmailResolver?.reject(e.payload.message)}onUpdateEmailPrimaryOtpSuccess(){this.updateEmailPrimaryOtpResolver?.resolve(void 0)}onUpdateEmailPrimaryOtpError(e){this.updateEmailPrimaryOtpResolver?.reject(e.payload.message)}onUpdateEmailSecondaryOtpSuccess(e){let{newEmail:t}=e.payload;this.setEmailLoginSuccess(t),this.updateEmailSecondaryOtpResolver?.resolve({newEmail:t})}onUpdateEmailSecondaryOtpError(e){this.updateEmailSecondaryOtpResolver?.reject(e.payload.message)}onSyncThemeSuccess(){this.syncThemeResolver?.resolve(void 0)}onSyncThemeError(e){this.syncThemeResolver?.reject(e.payload.message)}onSyncDappDataSuccess(){this.syncDappDataResolver?.resolve(void 0)}onSyncDappDataError(e){this.syncDappDataResolver?.reject(e.payload.message)}onSmartAccountEnabledNetworksSuccess(e){this.persistSmartAccountEnabledNetworks(e.payload.smartAccountEnabledNetworks),this.smartAccountEnabledNetworksResolver?.resolve(e.payload)}onSmartAccountEnabledNetworksError(e){this.persistSmartAccountEnabledNetworks([]),this.smartAccountEnabledNetworksResolver?.reject(e.payload.message)}onPreferSmartAccountSuccess(e){this.persistPreferredAccount(e.payload.type),this.setPreferredAccountResolver?.resolve(void 0)}onPreferSmartAccountError(){this.setPreferredAccountResolver?.reject()}setNewLastEmailLoginTime(){t6.set(n.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){t6.set(n.EMAIL,e),t6.set(n.EMAIL_LOGIN_USED_KEY,"true"),t6.delete(n.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){t6.delete(n.EMAIL_LOGIN_USED_KEY),t6.delete(n.EMAIL),t6.delete(n.LAST_USED_CHAIN_KEY)}setLastUsedChainId(e){t6.set(n.LAST_USED_CHAIN_KEY,String(e))}getLastUsedChainId(){return Number(t6.get(n.LAST_USED_CHAIN_KEY))}persistPreferredAccount(e){t6.set(n.PREFERRED_ACCOUNT_TYPE,e)}persistSmartAccountEnabledNetworks(e){t6.set(n.SMART_ACCOUNT_ENABLED_NETWORKS,e.join(","))}}},9845:function(e,t,r){"use strict";r.d(t,{Cb:function(){return a},SB:function(){return s}});var i=r(30755);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n={attribute:!0,type:String,converter:i.Ts,reflect:!1,hasChanged:i.Qu},o=(e=n,t,r)=>{let{kind:i,metadata:o}=r,a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(r.name,e),"accessor"===i){let{name:i}=r;return{set(r){let n=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){let{name:i}=r;return function(r){let n=this[i];t.call(this,r),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function a(e){return(t,r)=>"object"==typeof r?o(e,t,r):((e,t,r)=>{let i=t.hasOwnProperty(r);return t.constructor.createProperty(r,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function s(e){return a({...e,state:!0,attribute:!1})}},62870:function(e,t,r){"use strict";r.d(t,{o:function(){return n}});var i=r(6176);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=e=>e??i.Ld},92513:function(e,t,r){"use strict";r.d(t,{V:function(){return f},i:function(){return m}});var i=r(6176);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{I:n}=i._$LH,o=e=>void 0===e.strings;var a=r(66366);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),s(e,t);return!0},l=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},c=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),h(t)}};function u(e){void 0!==this._$AN?(l(this),this._$AM=e,c(this)):this._$AM=e}function d(e,t=!1,r=0){let i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size){if(t){if(Array.isArray(i))for(let e=r;e<i.length;e++)s(i[e],!1),l(i[e]);else null!=i&&(s(i,!1),l(i))}else s(this,e)}}let h=e=>{e.type==a.pX.CHILD&&(e._$AP??=d,e._$AQ??=u)};class p extends a.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),c(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(s(this,e),l(this))}setValue(e){if(o(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let f=()=>new g;class g{}let w=new WeakMap,m=(0,a.XM)(class extends p{render(e){return i.Ld}update(e,[t]){let r=t!==this.Y;return r&&void 0!==this.Y&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),i.Ld}rt(e){if("function"==typeof this.Y){let t=this.ht??globalThis,r=w.get(t);void 0===r&&(r=new WeakMap,w.set(t,r)),void 0!==r.get(this.Y)&&this.Y.call(this.ht,void 0),r.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?w.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},66848:function(e,t,r){"use strict";r.d(t,{oi:function(){return ep},iv:function(){return c},dy:function(){return G},YP:function(){return Y},$m:function(){return l}}),r(30755),r(6176);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=globalThis,n=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(n&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(t,e))}return e}toString(){return this.cssText}}let l=e=>new s("string"==typeof e?e:e+"",void 0,o),c=(e,...t)=>new s(1===e.length?e[0]:t.reduce((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]),e,o),u=(e,t)=>{if(n)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),n=i.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=r.cssText,e.appendChild(t)}},d=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return l(t)})(e):e,{is:h,defineProperty:p,getOwnPropertyDescriptor:f,getOwnPropertyNames:g,getOwnPropertySymbols:w,getPrototypeOf:m}=Object,b=globalThis,v=b.trustedTypes,y=v?v.emptyScript:"",C=b.reactiveElementPolyfillSupport,x=(e,t)=>e,E={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},k=(e,t)=>!h(e,t),_={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&p(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:n}=f(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let o=i?.call(this);n.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;let e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){let e=this.properties;for(let t of[...g(e),...w(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(d(r));else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){let n=(void 0!==r.converter?.toAttribute?r.converter:E).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=r.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:E;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??k)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[x("elementProperties")]=new Map,A[x("finalized")]=new Map,C?.({ReactiveElement:A}),(b.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let S=globalThis,R=S.trustedTypes,$=R?R.createPolicy("lit-html",{createHTML:e=>e}):void 0,T="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,O="?"+P,I=`<${O}>`,N=document,j=()=>N.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,B=e=>D(e)||"function"==typeof e?.[Symbol.iterator],L="[ 	\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,F=/>/g,W=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,Z=/"/g,V=/^(?:script|style|textarea|title)$/i,q=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),G=q(1),Y=q(2),K=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),J=new WeakMap,Q=N.createTreeWalker(N,129);function ee(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(t):t}let et=(e,t)=>{let r=e.length-1,i=[],n,o=2===t?"<svg>":"",a=U;for(let t=0;t<r;t++){let r=e[t],s,l,c=-1,u=0;for(;u<r.length&&(a.lastIndex=u,null!==(l=a.exec(r)));)u=a.lastIndex,a===U?"!--"===l[1]?a=z:void 0!==l[1]?a=F:void 0!==l[2]?(V.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=W):void 0!==l[3]&&(a=W):a===W?">"===l[0]?(a=n??U,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?W:'"'===l[3]?Z:H):a===Z||a===H?a=W:a===z||a===F?a=U:(a=W,n=void 0);let d=a===W&&e[t+1].startsWith("/>")?" ":"";o+=a===U?r+I:c>=0?(i.push(s),r.slice(0,c)+T+r.slice(c)+P+d):r+P+(-2===c?t:d)}return[ee(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),i]};class er{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,o=0,a=e.length-1,s=this.parts,[l,c]=et(e,t);if(this.el=er.createElement(l,r),Q.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Q.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(T)){let t=c[o++],r=i.getAttribute(e).split(P),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:a[2],strings:r,ctor:"."===a[1]?es:"?"===a[1]?el:"@"===a[1]?ec:ea}),i.removeAttribute(e)}else e.startsWith(P)&&(s.push({type:6,index:n}),i.removeAttribute(e));if(V.test(i.tagName)){let e=i.textContent.split(P),t=e.length-1;if(t>0){i.textContent=R?R.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],j()),Q.nextNode(),s.push({type:2,index:++n});i.append(e[t],j())}}}else if(8===i.nodeType){if(i.data===O)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(P,e+1));)s.push({type:7,index:n}),e+=P.length-1}}n++}}static createElement(e,t){let r=N.createElement("template");return r.innerHTML=e,r}}function ei(e,t,r=e,i){if(t===K)return t;let n=void 0!==i?r._$Co?.[i]:r._$Cl,o=M(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e))._$AT(e,r,i),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(t=ei(e,n._$AS(e,t.values),n,i)),t}class en{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??N).importNode(t,!0);Q.currentNode=i;let n=Q.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new eo(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new eu(n,this,e)),this._$AV.push(t),s=r[++a]}o!==s?.index&&(n=Q.nextNode(),o++)}return Q.currentNode=N,i}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class eo{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){M(e=ei(this,e,t))?e===X||null==e||""===e?(this._$AH!==X&&this._$AR(),this._$AH=X):e!==this._$AH&&e!==K&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):B(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==X&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(N.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=er.createElement(ee(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new en(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=J.get(e.strings);return void 0===t&&J.set(e.strings,t=new er(e)),t}k(e){D(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let n of e)i===t.length?t.push(r=new eo(this.S(j()),this.S(j()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ea{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=X,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=X}_$AI(e,t=this,r,i){let n=this.strings,o=!1;if(void 0===n)(o=!M(e=ei(this,e,t,0))||e!==this._$AH&&e!==K)&&(this._$AH=e);else{let i,a;let s=e;for(e=n[0],i=0;i<n.length-1;i++)(a=ei(this,s[r+i],t,i))===K&&(a=this._$AH[i]),o||=!M(a)||a!==this._$AH[i],a===X?e=X:e!==X&&(e+=(a??"")+n[i+1]),this._$AH[i]=a}o&&!i&&this.j(e)}j(e){e===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class es extends ea{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===X?void 0:e}}class el extends ea{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==X)}}class ec extends ea{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=ei(this,e,t,0)??X)===K)return;let r=this._$AH,i=e===X&&r!==X||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==X&&(r===X||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class eu{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ei(this,e)}}let ed=S.litHtmlPolyfillSupport;ed?.(er,eo),(S.litHtmlVersions??=[]).push("3.1.2");let eh=(e,t,r)=>{let i=r?.renderBefore??t,n=i._$litPart$;if(void 0===n){let e=r?.renderBefore??null;i._$litPart$=n=new eo(t.insertBefore(j(),e),e,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ep extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=eh(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}}ep._$litElement$=!0,ep.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ep});let ef=globalThis.litElementPolyfillSupport;ef?.({LitElement:ep}),(globalThis.litElementVersions??=[]).push("4.0.4")},30755:function(e,t,r){"use strict";r.d(t,{Ts:function(){return x},Qu:function(){return E}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=globalThis,n=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(n&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(t,e))}return e}toString(){return this.cssText}}let l=e=>new s("string"==typeof e?e:e+"",void 0,o),c=(e,t)=>{if(n)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),n=i.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=r.cssText,e.appendChild(t)}},u=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return l(t)})(e):e,{is:d,defineProperty:h,getOwnPropertyDescriptor:p,getOwnPropertyNames:f,getOwnPropertySymbols:g,getPrototypeOf:w}=Object,m=globalThis,b=m.trustedTypes,v=b?b.emptyScript:"",y=m.reactiveElementPolyfillSupport,C=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},E=(e,t)=>!d(e,t),k={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=k){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&h(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:n}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let o=i?.call(this);n.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??k}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;let e=w(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){let e=this.properties;for(let t of[...f(e),...g(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(u(r));else void 0!==e&&t.push(u(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){let n=(void 0!==r.converter?.toAttribute?r.converter:x).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=r.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:x;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??E)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[C("elementProperties")]=new Map,_[C("finalized")]=new Map,y?.({ReactiveElement:_}),(m.reactiveElementVersions??=[]).push("2.0.4")},66366:function(e,t,r){"use strict";r.d(t,{XM:function(){return n},Xe:function(){return o},pX:function(){return i}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=e=>(...t)=>({_$litDirective$:e,values:t});class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},6176:function(e,t,r){"use strict";r.d(t,{Jb:function(){return k},Ld:function(){return _},_$LH:function(){return L}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=globalThis,n=i.trustedTypes,o=n?n.createPolicy("lit-html",{createHTML:e=>e}):void 0,a="$lit$",s=`lit$${(Math.random()+"").slice(9)}$`,l="?"+s,c=`<${l}>`,u=document,d=()=>u.createComment(""),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,p=Array.isArray,f=e=>p(e)||"function"==typeof e?.[Symbol.iterator],g="[ 	\n\f\r]",w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,b=/>/g,v=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),y=/'/g,C=/"/g,x=/^(?:script|style|textarea|title)$/i,E=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),k=(E(1),E(2),Symbol.for("lit-noChange")),_=Symbol.for("lit-nothing"),A=new WeakMap,S=u.createTreeWalker(u,129);function R(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(t):t}let $=(e,t)=>{let r=e.length-1,i=[],n,o=2===t?"<svg>":"",l=w;for(let t=0;t<r;t++){let r=e[t],u,d,h=-1,p=0;for(;p<r.length&&(l.lastIndex=p,null!==(d=l.exec(r)));)p=l.lastIndex,l===w?"!--"===d[1]?l=m:void 0!==d[1]?l=b:void 0!==d[2]?(x.test(d[2])&&(n=RegExp("</"+d[2],"g")),l=v):void 0!==d[3]&&(l=v):l===v?">"===d[0]?(l=n??w,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,u=d[1],l=void 0===d[3]?v:'"'===d[3]?C:y):l===C||l===y?l=v:l===m||l===b?l=w:(l=v,n=void 0);let f=l===v&&e[t+1].startsWith("/>")?" ":"";o+=l===w?r+c:h>=0?(i.push(u),r.slice(0,h)+a+r.slice(h)+s+f):r+s+(-2===h?t:f)}return[R(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),i]};class T{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,c=0,u=e.length-1,h=this.parts,[p,f]=$(e,t);if(this.el=T.createElement(p,r),S.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=S.nextNode())&&h.length<u;){if(1===i.nodeType){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(a)){let t=f[c++],r=i.getAttribute(e).split(s),n=/([.?@])?(.*)/.exec(t);h.push({type:1,index:o,name:n[2],strings:r,ctor:"."===n[1]?j:"?"===n[1]?M:"@"===n[1]?D:N}),i.removeAttribute(e)}else e.startsWith(s)&&(h.push({type:6,index:o}),i.removeAttribute(e));if(x.test(i.tagName)){let e=i.textContent.split(s),t=e.length-1;if(t>0){i.textContent=n?n.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],d()),S.nextNode(),h.push({type:2,index:++o});i.append(e[t],d())}}}else if(8===i.nodeType){if(i.data===l)h.push({type:2,index:o});else{let e=-1;for(;-1!==(e=i.data.indexOf(s,e+1));)h.push({type:7,index:o}),e+=s.length-1}}o++}}static createElement(e,t){let r=u.createElement("template");return r.innerHTML=e,r}}function P(e,t,r=e,i){if(t===k)return t;let n=void 0!==i?r._$Co?.[i]:r._$Cl,o=h(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e))._$AT(e,r,i),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(t=P(e,n._$AS(e,t.values),n,i)),t}class O{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??u).importNode(t,!0);S.currentNode=i;let n=S.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new I(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new B(n,this,e)),this._$AV.push(t),s=r[++a]}o!==s?.index&&(n=S.nextNode(),o++)}return S.currentNode=u,i}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class I{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){h(e=P(this,e,t))?e===_||null==e||""===e?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==k&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):f(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==_&&h(this._$AH)?this._$AA.nextSibling.data=e:this.T(u.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=T.createElement(R(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new O(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=A.get(e.strings);return void 0===t&&A.set(e.strings,t=new T(e)),t}k(e){p(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let n of e)i===t.length?t.push(r=new I(this.S(d()),this.S(d()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=_}_$AI(e,t=this,r,i){let n=this.strings,o=!1;if(void 0===n)(o=!h(e=P(this,e,t,0))||e!==this._$AH&&e!==k)&&(this._$AH=e);else{let i,a;let s=e;for(e=n[0],i=0;i<n.length-1;i++)(a=P(this,s[r+i],t,i))===k&&(a=this._$AH[i]),o||=!h(a)||a!==this._$AH[i],a===_?e=_:e!==_&&(e+=(a??"")+n[i+1]),this._$AH[i]=a}o&&!i&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class j extends N{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}class M extends N{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}}class D extends N{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=P(this,e,t,0)??_)===k)return;let r=this._$AH,i=e===_&&r!==_||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==_&&(r===_||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class B{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}}let L={P:a,A:s,C:l,M:1,L:$,R:O,D:f,V:P,I:I,H:N,N:M,U:D,B:j,F:B},U=i.litHtmlPolyfillSupport;U?.(T,I),(i.litHtmlVersions??=[]).push("3.1.2")},4776:function(e,t,r){"use strict";r.d(t,{sj:function(){return p},iH:function(){return w},CO:function(){return g},Ld:function(){return f}}),Symbol();let i=Symbol(),n=Object.getPrototypeOf,o=new WeakMap,a=e=>e&&(o.has(e)?o.get(e):n(e)===Object.prototype||n(e)===Array.prototype),s=e=>a(e)&&e[i]||null,l=(e,t=!0)=>{o.set(e,t)},c=e=>"object"==typeof e&&null!==e,u=new WeakMap,d=new WeakSet,[h]=((e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>c(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),i=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},n=new WeakMap,o=(e,t,r=i)=>{let a=n.get(e);if((null==a?void 0:a[0])===t)return a[1];let s=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return l(s,!0),n.set(e,[t,s]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(s,t))return;let i=Reflect.get(e,t),n={value:i,enumerable:!0,configurable:!0};if(d.has(i))l(i,!1);else if(i instanceof Promise)delete n.value,n.get=()=>r(i);else if(u.has(i)){let[e,t]=u.get(i);n.value=o(e,t(),r)}Object.defineProperty(s,t,n)}),Object.preventExtensions(s)},a=new WeakMap,h=[1,1],p=i=>{if(!c(i))throw Error("object required");let n=a.get(i);if(n)return n;let l=h[0],f=new Set,g=(e,t=++h[0])=>{l!==t&&(l=t,f.forEach(r=>r(e,t)))},w=h[1],m=(e=++h[1])=>(w===e||f.size||(w=e,v.forEach(([t])=>{let r=t[1](e);r>l&&(l=r)})),l),b=e=>(t,r)=>{let i=[...t];i[1]=[e,...i[1]],g(i,r)},v=new Map,y=(e,t)=>{if(v.has(e))throw Error("prop listener already exists");if(f.size){let r=t[3](b(e));v.set(e,[t,r])}else v.set(e,[t])},C=e=>{var t;let r=v.get(e);r&&(v.delete(e),null==(t=r[1])||t.call(r))},x=e=>{f.add(e),1===f.size&&v.forEach(([e,t],r)=>{if(t)throw Error("remove already exists");let i=e[3](b(r));v.set(r,[e,i])});let t=()=>{f.delete(e),0===f.size&&v.forEach(([e,t],r)=>{t&&(t(),v.set(r,[e]))})};return t},E=Array.isArray(i)?[]:Object.create(Object.getPrototypeOf(i)),k={deleteProperty(e,t){let r=Reflect.get(e,t);C(t);let i=Reflect.deleteProperty(e,t);return i&&g(["delete",[t],r]),i},set(t,i,n,o){let l=Reflect.has(t,i),h=Reflect.get(t,i,o);if(l&&(e(h,n)||a.has(n)&&e(h,a.get(n))))return!0;C(i),c(n)&&(n=s(n)||n);let f=n;if(n instanceof Promise)n.then(e=>{n.status="fulfilled",n.value=e,g(["resolve",[i],e])}).catch(e=>{n.status="rejected",n.reason=e,g(["reject",[i],e])});else{!u.has(n)&&r(n)&&(f=p(n));let e=!d.has(f)&&u.get(f);e&&y(i,e)}return Reflect.set(t,i,f,o),g(["set",[i],n,h]),!0}},_=t(E,k);a.set(i,_);let A=[E,m,o,x];return u.set(_,A),Reflect.ownKeys(i).forEach(e=>{let t=Object.getOwnPropertyDescriptor(i,e);"value"in t&&(_[e]=i[e],delete t.value,delete t.writable),Object.defineProperty(E,e,t)}),_})=>[p,u,d,e,t,r,i,n,o,a,h])();function p(e={}){return h(e)}function f(e,t,r){let i;let n=u.get(e);n||console.warn("Please use proxy object");let o=[],a=n[3],s=!1,l=a(e=>{if(o.push(e),r){t(o.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,s&&t(o.splice(0))}))});return s=!0,()=>{s=!1,l()}}function g(e,t){let r=u.get(e);r||console.warn("Please use proxy object");let[i,n,o]=r;return o(i,n(),t)}function w(e){return d.add(e),e}},37967:function(e,t,r){"use strict";r.d(t,{VW:function(){return n}});var i=r(4776);function n(e,t,r,n){let o=e[t];return(0,i.Ld)(e,()=>{let i=e[t];Object.is(o,i)||r(o=i)},n)}Symbol()},79561:function(e,t,r){"use strict";function i(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}r.d(t,{T:function(){return i}})},49134:function(e,t,r){"use strict";r.d(t,{r:function(){return k}});var i=r(96130),n=r(80230);class o extends n.G{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class a extends n.G{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class s extends n.G{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class l extends n.G{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}let c=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,u=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,d=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,h=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function p(e){try{let t=await fetch(e,{method:"HEAD"});if(200===t.status){let e=t.headers.get("content-type");return e?.startsWith("image/")}return!1}catch(t){if("object"==typeof t&&void 0!==t.response||!globalThis.hasOwnProperty("Image"))return!1;return new Promise(t=>{let r=new Image;r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)},r.src=e})}}function f(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function g({uri:e,gatewayUrls:t}){let r=d.test(e);if(r)return{uri:e,isOnChain:!0,isEncoded:r};let i=f(t?.ipfs,"https://ipfs.io"),n=f(t?.arweave,"https://arweave.net"),o=e.match(c),{protocol:a,subpath:l,target:p,subtarget:g=""}=o?.groups||{},w="ipns:/"===a||"ipns/"===l,m="ipfs:/"===a||"ipfs/"===l||u.test(e);if(e.startsWith("http")&&!w&&!m){let r=e;return t?.arweave&&(r=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:r,isOnChain:!1,isEncoded:!1}}if((w||m)&&p)return{uri:`${i}/${w?"ipns":"ipfs"}/${p}${g}`,isOnChain:!1,isEncoded:!1};if("ar:/"===a&&p)return{uri:`${n}/${p}${g||""}`,isOnChain:!1,isEncoded:!1};let b=e.replace(h,"");if(b.startsWith("<svg")&&(b=`data:image/svg+xml;base64,${btoa(b)}`),b.startsWith("data:")||b.startsWith("{"))return{uri:b,isOnChain:!0,isEncoded:!1};throw new s({uri:e})}function w(e){if("object"!=typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new o({data:e});return e.image||e.image_url||e.image_data}async function m({gatewayUrls:e,uri:t}){try{let r=await fetch(t).then(e=>e.json());return await b({gatewayUrls:e,uri:w(r)})}catch{throw new s({uri:t})}}async function b({gatewayUrls:e,uri:t}){let{uri:r,isOnChain:i}=g({uri:t,gatewayUrls:e});if(i||await p(r))return r;throw new s({uri:t})}async function v(e,{nft:t}){if("erc721"===t.namespace)return(0,i.L)(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if("erc1155"===t.namespace)return(0,i.L)(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new l({namespace:t.namespace})}async function y(e,{gatewayUrls:t,record:r}){return/eip155:/i.test(r)?C(e,{gatewayUrls:t,record:r}):b({uri:r,gatewayUrls:t})}async function C(e,{gatewayUrls:t,record:r}){let i=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));let[r,i,n]=t.split("/"),[o,s]=r.split(":"),[l,c]=i.split(":");if(!o||"eip155"!==o.toLowerCase())throw new a({reason:"Only EIP-155 supported"});if(!s)throw new a({reason:"Chain ID not found"});if(!c)throw new a({reason:"Contract address not found"});if(!n)throw new a({reason:"Token ID not found"});if(!l)throw new a({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:l.toLowerCase(),contractAddress:c,tokenID:n}}(r),{uri:n,isOnChain:o,isEncoded:s}=g({uri:await v(e,{nft:i}),gatewayUrls:t});if(o&&(n.includes("data:application/json;base64,")||n.startsWith("{")))return b({uri:w(JSON.parse(s?atob(n.replace("data:application/json;base64,","")):n)),gatewayUrls:t});let l=i.tokenID;return"erc1155"===i.namespace&&(l=l.replace("0x","").padStart(64,"0")),m({gatewayUrls:t,uri:n.replace(/(?:0x)?{id}/,l)})}var x=r(31935),E=r(84825);async function k(e,{blockNumber:t,blockTag:r,assetGatewayUrls:i,name:n,gatewayUrls:o,strict:a,universalResolverAddress:s}){let l=await (0,x.s)(e,E.g,"getEnsText")({blockNumber:t,blockTag:r,key:"avatar",name:n,universalResolverAddress:s,gatewayUrls:o,strict:a});if(!l)return null;try{return await y(e,{record:l,gatewayUrls:i})}catch{return null}}},9577:function(e,t,r){"use strict";r.d(t,{w:function(){return u}});var i=r(10035),n=r(73621),o=r(15578),a=r(96316),s=r(24761),l=r(31935),c=r(96130);async function u(e,{address:t,blockNumber:r,blockTag:u,gatewayUrls:d,strict:h,universalResolverAddress:p}){let f=p;if(!f){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");f=(0,n.L)({blockNumber:r,chain:e.chain,contract:"ensUniversalResolver"})}let g=`${t.toLowerCase().substring(2)}.addr.reverse`;try{let n={address:f,abi:i.du,functionName:"reverse",args:[(0,o.NC)((0,s.T)(g))],blockNumber:r,blockTag:u},a=(0,l.s)(e,c.L,"readContract"),[h,p]=d?await a({...n,args:[...n.args,d]}):await a(n);if(t.toLowerCase()!==p.toLowerCase())return null;return h}catch(e){if(h)throw e;if((0,a.c)(e,"reverse"))return null;throw e}}},84825:function(e,t,r){"use strict";r.d(t,{g:function(){return p}});var i=r(10035),n=r(27470),o=r(87210),a=r(73621),s=r(15578),l=r(96316),c=r(8291),u=r(24761),d=r(31935),h=r(96130);async function p(e,{blockNumber:t,blockTag:r,name:p,key:f,gatewayUrls:g,strict:w,universalResolverAddress:m}){let b=m;if(!b){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");b=(0,a.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let a={address:b,abi:i.k3,functionName:"resolve",args:[(0,s.NC)((0,u.T)(p)),(0,o.R)({abi:i.nZ,functionName:"text",args:[(0,c.V)(p),f]})],blockNumber:t,blockTag:r},l=(0,d.s)(e,h.L,"readContract"),w=g?await l({...a,args:[...a.args,g]}):await l(a);if("0x"===w[0])return null;let m=(0,n.k)({abi:i.nZ,functionName:"text",data:w[0]});return""===m?null:m}catch(e){if(w)throw e;if((0,l.c)(e,"resolve"))return null;throw e}}},8302:function(e,t,r){"use strict";r.d(t,{RE:function(){return x}});var i=r(79561),n=r(10035),o=r(44898),a=r(80230),s=r(55774),l=r(47115),c=r(11758),u=r(94655),d=r(27470),h=r(87210),p=r(39361),f=r(73621),g=r(15578),w=r(26463),m=r(85069),b=r(67306),v=r(20662),y=r(5493),C=r(15337);async function x(e,t){let{account:n=e.account,batch:c=!!e.batch?.multicall,blockNumber:d,blockTag:h="latest",accessList:f,blobs:y,data:x,gas:_,gasPrice:A,maxFeePerBlobGas:S,maxFeePerGas:R,maxPriorityFeePerGas:$,nonce:T,to:P,value:O,stateOverride:I,...N}=t,j=n?(0,i.T)(n):void 0;try{(0,C.F)(t);let r=(d?(0,g.eC)(d):void 0)||h,i=function(e){if(!e)return;let t={};for(let{address:r,...i}of e){if(!(0,p.U)(r,{strict:!1}))throw new o.b({address:r});if(t[r])throw new u.Nc({address:r});t[r]=function(e){let{balance:t,nonce:r,state:i,stateDiff:n,code:o}=e,a={};if(void 0!==o&&(a.code=o),void 0!==t&&(a.balance=(0,g.eC)(t,{size:32})),void 0!==r&&(a.nonce=(0,g.eC)(r,{size:8})),void 0!==i&&(a.state=k(i)),void 0!==n){if(a.state)throw new u.Z8;a.stateDiff=k(n)}return a}(i)}return t}(I),n=e.chain?.formatters?.transactionRequest?.format,a=(n||v.tG)({...(0,b.K)(N,{format:n}),from:j?.address,accessList:f,blobs:y,data:x,gas:_,gasPrice:A,maxFeePerBlobGas:S,maxFeePerGas:R,maxPriorityFeePerGas:$,nonce:T,to:P,value:O});if(c&&function({request:e}){let{data:t,to:r,...i}=e;return!(!t||t.startsWith("0x82ad56cb"))&&!!r&&!(Object.values(i).filter(e=>void 0!==e).length>0)}({request:a})&&!i)try{return await E(e,{...a,blockNumber:d,blockTag:h})}catch(e){if(!(e instanceof s.pZ)&&!(e instanceof s.mm))throw e}let l=await e.request({method:"eth_call",params:i?[a,r,i]:[a,r]});if("0x"===l)return{data:void 0};return{data:l}}catch(s){let i=function(e){if(!(e instanceof a.G))return;let t=e.walk();return"object"==typeof t?.data?t.data?.data:t.data}(s),{offchainLookup:n,offchainLookupSignature:o}=await r.e(696).then(r.bind(r,44696));if(!1!==e.ccipRead&&i?.slice(0,10)===o&&P)return{data:await n(e,{data:i,to:P})};throw function(e,{docsPath:t,...r}){let i=(()=>{let t=(0,m.k)(e,r);return t instanceof w.cj?e:t})();return new l.cg(i,{docsPath:t,...r})}(s,{...t,account:j,chain:e.chain})}}async function E(e,t){let{batchSize:r=1024,wait:i=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:o,blockTag:a="latest",data:c,multicallAddress:u,to:p}=t,w=u;if(!w){if(!e.chain)throw new s.pZ;w=(0,f.L)({blockNumber:o,chain:e.chain,contract:"multicall3"})}let m=(o?(0,g.eC)(o):void 0)||a,{schedule:b}=(0,y.S)({id:`${e.uid}.${m}`,wait:i,shouldSplitBatch:e=>e.reduce((e,{data:t})=>e+(t.length-2),0)>2*r,fn:async t=>{let r=t.map(e=>({allowFailure:!0,callData:e.data,target:e.to})),i=(0,h.R)({abi:n.F8,args:[r],functionName:"aggregate3"}),o=await e.request({method:"eth_call",params:[{data:i,to:w},m]});return(0,d.k)({abi:n.F8,args:[r],functionName:"aggregate3",data:o||"0x"})}}),[{returnData:v,success:C}]=await b({data:c,to:p});if(!C)throw new l.VQ({data:v});return"0x"===v?{data:void 0}:{data:v}}function k(e){if(e&&0!==e.length)return e.reduce((e,{slot:t,value:r})=>{if(66!==t.length)throw new c.W_({size:t.length,targetSize:66,type:"hex"});if(66!==r.length)throw new c.W_({size:r.length,targetSize:66,type:"hex"});return e[t]=r,e},{})}},82756:function(e,t,r){"use strict";r.d(t,{s:function(){return n}});var i=r(15578);async function n(e,{address:t,blockNumber:r,blockTag:n="latest"}){let o=r?(0,i.eC)(r):void 0;return BigInt(await e.request({method:"eth_getBalance",params:[t,o||n]}))}},4481:function(e,t,r){"use strict";r.d(t,{A:function(){return p}});var i=r(10035),n=r(45581),o=r(80230),a=r(47115),s=r(27470),l=r(87210),c=r(73621),u=r(95094),d=r(31935),h=r(96130);async function p(e,t){let{allowFailure:r=!0,batchSize:p,blockNumber:f,blockTag:g,multicallAddress:w,stateOverride:m}=t,b=t.contracts,v=p??("object"==typeof e.batch?.multicall&&e.batch.multicall.batchSize||1024),y=w;if(!y){if(!e.chain)throw Error("client chain not configured. multicallAddress is required.");y=(0,c.L)({blockNumber:f,chain:e.chain,contract:"multicall3"})}let C=[[]],x=0,E=0;for(let e=0;e<b.length;e++){let{abi:t,address:i,args:n,functionName:o}=b[e];try{let e=(0,l.R)({abi:t,args:n,functionName:o});E+=(e.length-2)/2,v>0&&E>v&&C[x].length>0&&(x++,E=(e.length-2)/2,C[x]=[]),C[x]=[...C[x],{allowFailure:!0,callData:e,target:i}]}catch(a){let e=(0,u.S)(a,{abi:t,address:i,args:n,docsPath:"/docs/contract/multicall",functionName:o});if(!r)throw e;C[x]=[...C[x],{allowFailure:!0,callData:"0x",target:i}]}}let k=await Promise.allSettled(C.map(t=>(0,d.s)(e,h.L,"readContract")({abi:i.F8,address:y,args:[t],blockNumber:f,blockTag:g,functionName:"aggregate3",stateOverride:m}))),_=[];for(let e=0;e<k.length;e++){let t=k[e];if("rejected"===t.status){if(!r)throw t.reason;for(let r=0;r<C[e].length;r++)_.push({status:"failure",error:t.reason,result:void 0});continue}let i=t.value;for(let t=0;t<i.length;t++){let{returnData:o,success:l}=i[t],{callData:c}=C[e][t],{abi:d,address:h,functionName:p,args:f}=b[_.length];try{if("0x"===c)throw new n.wb;if(!l)throw new a.VQ({data:o});let e=(0,s.k)({abi:d,args:f,data:o,functionName:p});_.push(r?{result:e,status:"success"}:e)}catch(t){let e=(0,u.S)(t,{abi:d,address:h,args:f,docsPath:"/docs/contract/multicall",functionName:p});if(!r)throw e;_.push({error:e,result:void 0,status:"failure"})}}}if(_.length!==b.length)throw new o.G("multicall results mismatch");return _}},96130:function(e,t,r){"use strict";r.d(t,{L:function(){return l}});var i=r(27470),n=r(87210),o=r(95094),a=r(31935),s=r(8302);async function l(e,t){let{abi:r,address:l,args:c,functionName:u,...d}=t,h=(0,n.R)({abi:r,args:c,functionName:u});try{let{data:t}=await (0,a.s)(e,s.RE,"call")({...d,data:h,to:l});return(0,i.k)({abi:r,args:c,functionName:u,data:t||"0x"})}catch(e){throw(0,o.S)(e,{abi:r,address:l,args:c,docsPath:"/docs/contract/readContract",functionName:u})}}},22423:function(e,t,r){"use strict";r.d(t,{O:function(){return i}});let i=(0,r(55597).a)({id:31337,name:"Anvil",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["http://127.0.0.1:8545"],webSocket:["ws://127.0.0.1:8545"]}}})},21254:function(e,t,r){"use strict";r.d(t,{R:function(){return i}});let i=(0,r(55597).a)({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}})},17364:function(e,t,r){"use strict";r.d(t,{F:function(){return i}});let i=(0,r(55597).a)({id:11155111,name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.sepolia.org"]}},blockExplorers:{default:{name:"Etherscan",url:"https://sepolia.etherscan.io",apiUrl:"https://api-sepolia.etherscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:751532},ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",blockCreated:5317080}},testnet:!0})},82690:function(e,t,r){"use strict";let i;r.d(t,{e:function(){return a}});var n=r(79561);let o=256;function a(e){let{batch:t,cacheTime:r=e.pollingInterval??4e3,ccipRead:a,key:s="base",name:l="Base Client",pollingInterval:c=4e3,type:u="base"}=e,d=e.chain,h=e.account?(0,n.T)(e.account):void 0,{config:p,request:f,value:g}=e.transport({chain:d,pollingInterval:c}),w={account:h,batch:t,cacheTime:r,ccipRead:a,chain:d,key:s,name:l,pollingInterval:c,request:f,transport:{...p,...g},type:u,uid:function(e=11){if(!i||o+e>512){i="",o=0;for(let e=0;e<256;e++)i+=(256+256*Math.random()|0).toString(16).substring(1)}return i.substring(o,o+++e)}()};return Object.assign(w,{extend:function e(t){return r=>{let i=r(t);for(let e in w)delete i[e];let n={...t,...i};return Object.assign(n,{extend:e(n)})}}(w)})}},27530:function(e,t,r){"use strict";r.d(t,{q:function(){return s}});var i=r(80230),n=r(37825),o=r(24473),a=r(42179);function s({key:e,name:t,request:r,retryCount:s=3,retryDelay:l=150,timeout:c,type:u},d){return{config:{key:e,name:t,request:r,retryCount:s,retryDelay:l,timeout:c,type:u},request:function(e,t={}){return async(r,s={})=>{let{retryDelay:l=150,retryCount:c=3}={...t,...s};return(0,a.J)(async()=>{try{return await e(r)}catch(e){switch(e.code){case o.s7.code:throw new o.s7(e);case o.B.code:throw new o.B(e);case o.LX.code:throw new o.LX(e);case o.nY.code:throw new o.nY(e);case o.XS.code:throw new o.XS(e);case o.yR.code:throw new o.yR(e);case o.Og.code:throw new o.Og(e);case o.pT.code:throw new o.pT(e);case o.KB.code:throw new o.KB(e);case o.gS.code:throw new o.gS(e);case o.Pv.code:throw new o.Pv(e);case o.GD.code:throw new o.GD(e);case o.ab.code:throw new o.ab(e);case o.PE.code:throw new o.PE(e);case o.Ts.code:throw new o.Ts(e);case o.u5.code:throw new o.u5(e);case o.I0.code:throw new o.I0(e);case o.x3.code:throw new o.x3(e);case 5e3:throw new o.ab(e);default:if(e instanceof i.G)throw e;throw new o.ir(e)}}},{delay:({count:e,error:t})=>{if(t&&t instanceof n.Gg){let e=t?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*parseInt(e)}return~~(1<<e)*l},retryCount:c,shouldRetry:({error:e})=>"code"in e&&"number"==typeof e.code?-1===e.code||e.code===o.Pv.code||e.code===o.XS.code:!(e instanceof n.Gg)||!e.status||403===e.status||408===e.status||413===e.status||429===e.status||500===e.status||502===e.status||503===e.status||504===e.status})}}(r,{retryCount:s,retryDelay:l}),value:d}}},945:function(e,t,r){"use strict";r.d(t,{d:function(){return d}});var i=r(37825),n=r(80230);class o extends n.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var a=r(5493),s=r(9416),l=r(92791);let c={current:0,take(){return this.current++},reset(){this.current=0}};var u=r(27530);function d(e,t={}){let{batch:r,fetchOptions:n,key:d="http",name:h="HTTP JSON-RPC",onFetchRequest:p,onFetchResponse:f,retryDelay:g}=t;return({chain:w,retryCount:m,timeout:b})=>{let{batchSize:v=1e3,wait:y=0}="object"==typeof r?r:{},C=t.retryCount??m,x=b??t.timeout??1e4,E=e||w?.rpcUrls.default.http[0];if(!E)throw new o;let k=function(e,t={}){return{async request(r){let{body:n,fetchOptions:o={},onRequest:a=t.onRequest,onResponse:u=t.onResponse,timeout:d=t.timeout??1e4}=r,{headers:h,method:p,signal:f}={...t.fetchOptions,...o};try{let t;let r=await (0,s.F)(async({signal:t})=>{let r=new Request(e,{...o,body:Array.isArray(n)?(0,l.P)(n.map(e=>({jsonrpc:"2.0",id:e.id??c.take(),...e}))):(0,l.P)({jsonrpc:"2.0",id:n.id??c.take(),...n}),headers:{...h,"Content-Type":"application/json"},method:p||"POST",signal:f||(d>0?t:null)});return a&&await a(r),await fetch(r)},{errorInstance:new i.W5({body:n,url:e}),timeout:d,signal:!0});if(u&&await u(r),t=r.headers.get("Content-Type")?.startsWith("application/json")?await r.json():await r.text(),!r.ok)throw new i.Gg({body:n,details:(0,l.P)(t.error)||r.statusText,headers:r.headers,status:r.status,url:e});return t}catch(t){if(t instanceof i.Gg||t instanceof i.W5)throw t;throw new i.Gg({body:n,details:t.message,url:e})}}}}(E,{fetchOptions:n,onRequest:p,onResponse:f,timeout:x});return(0,u.q)({key:d,name:h,async request({method:t,params:n}){let o={method:t,params:n},{schedule:s}=(0,a.S)({id:`${e}`,wait:y,shouldSplitBatch:e=>e.length>v,fn:e=>k.request({body:e}),sort:(e,t)=>e.id-t.id}),l=async e=>r?s(e):[await k.request({body:e})],[{error:c,result:u}]=await l(o);if(c)throw new i.bs({body:o,error:c,url:E});return u},retryCount:C,retryDelay:g,timeout:x,type:"http"},{fetchOptions:n,url:E})}}},10035:function(e,t,r){"use strict";r.d(t,{$o:function(){return c},F8:function(){return i},X$:function(){return l},du:function(){return a},k3:function(){return o},nZ:function(){return s}});let i=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],n=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"},{inputs:[],name:"ResolverNotContract",type:"error"},{inputs:[{name:"returnData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{components:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"errors",type:"tuple[]"}],name:"HttpError",type:"error"}],o=[...n,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]},{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],a=[...n,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]},{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],s=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],l=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],c=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]},26390:function(e,t,r){"use strict";r.d(t,{$:function(){return i},Up:function(){return n},hZ:function(){return o}});let i={1:"An `assert` condition failed.",17:"Arithmetic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},n={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},o={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},4817:function(e,t,r){"use strict";r.d(t,{Bd:function(){return o},Zn:function(){return n},ez:function(){return i}});let i={gwei:9,wei:18},n={ether:-9,wei:9},o={ether:-18,gwei:-9}},45581:function(e,t,r){"use strict";r.d(t,{CI:function(){return k},FM:function(){return f},Gy:function(){return x},KY:function(){return y},M4:function(){return d},MX:function(){return b},S4:function(){return v},SM:function(){return C},cO:function(){return s},dh:function(){return E},fM:function(){return a},fs:function(){return h},gr:function(){return u},hn:function(){return _},lC:function(){return g},mv:function(){return w},wM:function(){return A},wb:function(){return c},xB:function(){return l},xL:function(){return m},yP:function(){return p}});var i=r(67705),n=r(95305),o=r(80230);class a extends o.G{constructor({docsPath:e}){super("A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class s extends o.G{constructor({docsPath:e}){super("Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class l extends o.G{constructor({data:e,params:t,size:r}){super(`Data size of ${r} bytes is too small for given parameters.`,{metaMessages:[`Params: (${(0,i.h)(t,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=r}}class c extends o.G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class u extends o.G{constructor({expectedLength:e,givenLength:t,type:r}){super(`ABI encoding array length mismatch for type ${r}.
Expected length: ${e}
Given length: ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class d extends o.G{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${(0,n.d)(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class h extends o.G{constructor({expectedLength:e,givenLength:t}){super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class p extends o.G{constructor(e,{docsPath:t}){super(`Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class f extends o.G{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class g extends o.G{constructor(e,{docsPath:t}){super(`Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class w extends o.G{constructor(e,{docsPath:t}={}){super(`Event ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class m extends o.G{constructor(e,{docsPath:t}={}){super(`Function ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class b extends o.G{constructor(e,{docsPath:t}){super(`Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class v extends o.G{constructor(e,t){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${(0,i.t)(e.abiItem)}\`, and`,`\`${t.type}\` in \`${(0,i.t)(t.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class y extends o.G{constructor({expectedSize:e,givenSize:t}){super(`Expected bytes${e}, got bytes${t}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class C extends o.G{constructor({abiItem:e,data:t,params:r,size:n}){super(`Data size of ${n} bytes is too small for non-indexed event parameters.`,{metaMessages:[`Params: (${(0,i.h)(r,{includeName:!0})})`,`Data:   ${t} (${n} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=t,this.params=r,this.size=n}}class x extends o.G{constructor({abiItem:e,param:t}){super(`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${(0,i.t)(e,{includeName:!0})}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class E extends o.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class k extends o.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class _ extends o.G{constructor(e){super(`Value "${e}" is not a valid array.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class A extends o.G{constructor(e){super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}},90444:function(e,t,r){"use strict";r.d(t,{o:function(){return n}});var i=r(80230);class n extends i.G{constructor({docsPath:e}={}){super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}},44898:function(e,t,r){"use strict";r.d(t,{b:function(){return n}});var i=r(80230);class n extends i.G{constructor({address:e}){super(`Address "${e}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},80230:function(e,t,r){"use strict";r.d(t,{G:function(){return n}});var i=r(48036);class n extends Error{constructor(e,t={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,i.bo)()});let r=t.cause instanceof n?t.cause.details:t.cause?.message?t.cause.message:t.details,o=t.cause instanceof n&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return function e(t,r){return r?.(t)?t:t&&"object"==typeof t&&"cause"in t?e(t.cause,r):r?null:t}(this,e)}}},55774:function(e,t,r){"use strict";r.d(t,{Bk:function(){return a},Yl:function(){return o},mm:function(){return n},pZ:function(){return s}});var i=r(80230);class n extends i.G{constructor({blockNumber:e,chain:t,contract:r}){super(`Chain "${t.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class o extends i.G{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class a extends i.G{constructor(){super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class s extends i.G{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}},47115:function(e,t,r){"use strict";r.d(t,{cg:function(){return m},uq:function(){return b},Lu:function(){return v},Dk:function(){return y},VQ:function(){return C}});var i=r(79561),n=r(26390),o=r(68890),a=r(67705),s=r(92791);function l({abiItem:e,args:t,includeFunctionName:r=!0,includeName:i=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${r?e.name:""}(${e.inputs.map((e,r)=>`${i&&e.name?`${e.name}: `:""}${"object"==typeof t[r]?(0,s.P)(t[r]):t[r]}`).join(", ")})`}var c=r(52753),u=r(52926),d=r(98206),h=r(45581),p=r(80230),f=r(94655),g=r(10289),w=r(48036);class m extends p.G{constructor(e,{account:t,docsPath:r,chain:n,data:o,gas:a,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:h,to:p,value:w,stateOverride:m}){let b=t?(0,i.T)(t):void 0,v=(0,g.xr)({from:b?.address,to:p,value:void 0!==w&&`${(0,u.d)(w)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:o,gas:a,gasPrice:void 0!==s&&`${(0,d.o)(s)} gwei`,maxFeePerGas:void 0!==l&&`${(0,d.o)(l)} gwei`,maxPriorityFeePerGas:void 0!==c&&`${(0,d.o)(c)} gwei`,nonce:h});m&&(v+=`
${(0,f.Bj)(m)}`),super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",v].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class b extends p.G{constructor(e,{abi:t,args:r,contractAddress:i,docsPath:n,functionName:o,sender:s}){let u=(0,c.mE)({abi:t,args:r,name:o}),d=u?l({abiItem:u,args:r,includeFunctionName:!1,includeName:!1}):void 0;super(e.shortMessage||`An unknown error occurred while executing the contract function "${o}".`,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",(0,g.xr)({address:i&&(0,w.CR)(i),function:u?(0,a.t)(u,{includeName:!0}):void 0,args:d&&"()"!==d&&`${[...Array(o?.length??0).keys()].map(()=>" ").join("")}${d}`,sender:s})].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=r,this.cause=e,this.contractAddress=i,this.functionName=o,this.sender=s}}class v extends p.G{constructor({abi:e,data:t,functionName:r,message:i}){let s,c,u,d,p;if(t&&"0x"!==t)try{let{abiItem:r,errorName:i,args:s}=p=(0,o.p)({abi:e,data:t});if("Error"===i)u=s[0];else if("Panic"===i){let[e]=s;u=n.$[e]}else{let e=r?(0,a.t)(r,{includeName:!0}):void 0,t=r&&s?l({abiItem:r,args:s,includeFunctionName:!1,includeName:!1}):void 0;c=[e?`Error: ${e}`:"",t&&"()"!==t?`       ${[...Array(i?.length??0).keys()].map(()=>" ").join("")}${t}`:""]}}catch(e){s=e}else i&&(u=i);s instanceof h.yP&&(d=s.signature,c=[`Unable to decode signature "${d}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`]),super(u&&"execution reverted"!==u||d?[`The contract function "${r}" reverted with the following ${d?"signature":"reason"}:`,u||d].join("\n"):`The contract function "${r}" reverted.`,{cause:s,metaMessages:c}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=p,this.reason=u,this.signature=d}}class y extends p.G{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class C extends p.G{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}},92155:function(e,t,r){"use strict";r.d(t,{KD:function(){return a},T_:function(){return n},lQ:function(){return o}});var i=r(80230);class n extends i.G{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}}class o extends i.G{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}}class a extends i.G{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}},11758:function(e,t,r){"use strict";r.d(t,{$s:function(){return o},W_:function(){return a},mV:function(){return n}});var i=r(80230);class n extends i.G{constructor({offset:e,position:t,size:r}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class o extends i.G{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}class a extends i.G{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${t} ${r} long, but is ${e} ${r} long.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesLengthError"})}}},75851:function(e,t,r){"use strict";r.d(t,{J5:function(){return n},M6:function(){return a},yr:function(){return o}});var i=r(80230);class n extends i.G{constructor({max:e,min:t,signed:r,size:i,value:n}){super(`Number "${n}" is not in safe ${i?`${8*i}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class o extends i.G{constructor(e){super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}}class a extends i.G{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},26463:function(e,t,r){"use strict";r.d(t,{C_:function(){return d},G$:function(){return s},Hh:function(){return a},M_:function(){return o},WF:function(){return h},ZI:function(){return l},cj:function(){return w},cs:function(){return g},dR:function(){return p},pZ:function(){return f},se:function(){return u},vU:function(){return c}});var i=r(98206),n=r(80230);class o extends n.G{constructor({cause:e,message:t}={}){let r=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(o,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class a extends n.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,i.o)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class s extends n.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,i.o)(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class l extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class c extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class u extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class d extends n.G{constructor({cause:e}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class h extends n.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class p extends n.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class f extends n.G{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(f,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class g extends n.G{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:r}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,i.o)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${(0,i.o)(r)} gwei`:""}).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(g,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class w extends n.G{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},37825:function(e,t,r){"use strict";r.d(t,{Gg:function(){return a},W5:function(){return l},bs:function(){return s}});var i=r(92791),n=r(80230),o=r(48036);class a extends n.G{constructor({body:e,details:t,headers:r,status:n,url:a}){super("HTTP request failed.",{details:t,metaMessages:[n&&`Status: ${n}`,`URL: ${(0,o.Gr)(a)}`,e&&`Request body: ${(0,i.P)(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=n,this.url=a}}class s extends n.G{constructor({body:e,error:t,url:r}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,o.Gr)(r)}`,`Request body: ${(0,i.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class l extends n.G{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,o.Gr)(t)}`,`Request body: ${(0,i.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},24473:function(e,t,r){"use strict";r.d(t,{B:function(){return l},GD:function(){return b},I0:function(){return E},KB:function(){return g},LX:function(){return c},Og:function(){return p},PE:function(){return y},Pv:function(){return m},Ts:function(){return C},XS:function(){return d},ab:function(){return v},gS:function(){return w},ir:function(){return _},nY:function(){return u},pT:function(){return f},s7:function(){return s},u5:function(){return x},x3:function(){return k},yR:function(){return h}});var i=r(80230),n=r(37825);class o extends i.G{constructor(e,{code:t,docsPath:r,metaMessages:i,shortMessage:o}){super(o,{cause:e,docsPath:r,metaMessages:i||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof n.bs?e.code:t??-1}}class a extends o{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class s extends o{constructor(e){super(e,{code:s.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(s,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class l extends o{constructor(e){super(e,{code:l.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(l,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class c extends o{constructor(e){super(e,{code:c.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(c,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class u extends o{constructor(e){super(e,{code:u.code,shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(u,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class d extends o{constructor(e){super(e,{code:d.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(d,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class h extends o{constructor(e){super(e,{code:h.code,shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(h,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class p extends o{constructor(e){super(e,{code:p.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(p,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class f extends o{constructor(e){super(e,{code:f.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class g extends o{constructor(e){super(e,{code:g.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class w extends o{constructor(e){super(e,{code:w.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class m extends o{constructor(e){super(e,{code:m.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class b extends o{constructor(e){super(e,{code:b.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class v extends a{constructor(e){super(e,{code:v.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class y extends a{constructor(e){super(e,{code:y.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class C extends a{constructor(e){super(e,{code:C.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class x extends a{constructor(e){super(e,{code:x.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class E extends a{constructor(e){super(e,{code:E.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class k extends a{constructor(e){super(e,{code:k.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(k,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class _ extends o{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}},94655:function(e,t,r){"use strict";r.d(t,{Bj:function(){return s},Nc:function(){return n},Z8:function(){return o}});var i=r(80230);class n extends i.G{constructor({address:e}){super(`State for account "${e}" is set multiple times.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountStateConflictError"})}}class o extends i.G{constructor(){super("state and stateDiff are set on the same account."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"StateAssignmentConflictError"})}}function a(e){return e.reduce((e,{slot:t,value:r})=>`${e}        ${t}: ${r}
`,"")}function s(e){return e.reduce((e,{address:t,...r})=>{let i=`${e}    ${t}:
`;return r.nonce&&(i+=`      nonce: ${r.nonce}
`),r.balance&&(i+=`      balance: ${r.balance}
`),r.code&&(i+=`      code: ${r.code}
`),r.state&&(i+="      state:\n"+a(r.state)),r.stateDiff&&(i+="      stateDiff:\n"+a(r.stateDiff)),i},"  State Override:\n").slice(0,-1)}},10289:function(e,t,r){"use strict";r.d(t,{Bh:function(){return u},Yb:function(){return d},j3:function(){return l},mc:function(){return h},mk:function(){return c},xY:function(){return s},xr:function(){return a}});var i=r(52926),n=r(98206),o=r(80230);function a(e){let t=Object.entries(e).map(([e,t])=>void 0===t||!1===t?null:[e,t]).filter(Boolean),r=t.reduce((e,[t])=>Math.max(e,t.length),0);return t.map(([e,t])=>`  ${`${e}:`.padEnd(r+1)}  ${t}`).join("\n")}class s extends o.G{constructor(){super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class l extends o.G{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",a(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class c extends o.G{constructor(e,{account:t,docsPath:r,chain:o,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:p,value:f}){super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",a({chain:o&&`${o?.name} (id: ${o?.id})`,from:t?.address,to:p,value:void 0!==f&&`${(0,i.d)(f)} ${o?.nativeCurrency?.symbol||"ETH"}`,data:s,gas:l,gasPrice:void 0!==c&&`${(0,n.o)(c)} gwei`,maxFeePerGas:void 0!==u&&`${(0,n.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==d&&`${(0,n.o)(d)} gwei`,nonce:h})].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class u extends o.G{constructor({blockHash:e,blockNumber:t,blockTag:r,hash:i,index:n}){let o="Transaction";r&&void 0!==n&&(o=`Transaction at block time "${r}" at index "${n}"`),e&&void 0!==n&&(o=`Transaction at block hash "${e}" at index "${n}"`),t&&void 0!==n&&(o=`Transaction at block number "${t}" at index "${n}"`),i&&(o=`Transaction with hash "${i}"`),super(`${o} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class d extends o.G{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class h extends o.G{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}},48036:function(e,t,r){"use strict";r.d(t,{CR:function(){return i},Gr:function(){return n},bo:function(){return o}});let i=e=>e,n=e=>e,o=()=>"viem@2.9.7"},94403:function(e,t,r){"use strict";r.d(t,{r:function(){return w}});var i=r(45581),n=r(75036),o=r(92155);let a={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new o.KD({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(e){if(e<0||e>this.bytes.length-1)throw new o.lQ({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new o.T_({offset:e});let t=this.position-e;this.assertPosition(t),this.position=t},getReadCount(e){return this.positionReadCount.get(e||this.position)||0},incrementPosition(e){if(e<0)throw new o.T_({offset:e});let t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){let r=t??this.position;return this.assertPosition(r+e-1),this.bytes.subarray(r,r+e)},inspectUint8(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){let t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){let t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){let t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,255&e),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){this.assertReadLimit(),this._touch();let e=this.inspectByte();return this.position++,e},readBytes(e,t){this.assertReadLimit(),this._touch();let r=this.inspectBytes(e);return this.position+=t??e,r},readUint8(){this.assertReadLimit(),this._touch();let e=this.inspectUint8();return this.position+=1,e},readUint16(){this.assertReadLimit(),this._touch();let e=this.inspectUint16();return this.position+=2,e},readUint24(){this.assertReadLimit(),this._touch();let e=this.inspectUint24();return this.position+=3,e},readUint32(){this.assertReadLimit(),this._touch();let e=this.inspectUint32();return this.position+=4,e},get remaining(){return this.bytes.length-this.position},setPosition(e){let t=this.position;return this.assertPosition(e),this.position=e,()=>this.position=t},_touch(){if(this.recursiveReadLimit===1/0)return;let e=this.getReadCount();this.positionReadCount.set(this.position,e+1),e>0&&this.recursiveReadCount++}};var s=r(95305),l=r(23090),c=r(71264),u=r(75851),d=r(55936),h=r(15578);function p(e,t={}){void 0!==t.size&&(0,d.Yf)(e,{size:t.size});let r=(0,h.ci)(e,t);return(0,d.ly)(r,t)}var f=r(73596),g=r(8580);function w(e,t){let r="string"==typeof t?(0,f.nr)(t):t,o=function(e,{recursiveReadLimit:t=8192}={}){let r=Object.create(a);return r.bytes=e,r.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),r.positionReadCount=new Map,r.recursiveReadLimit=t,r}(r);if(0===(0,s.d)(r)&&e.length>0)throw new i.wb;if((0,s.d)(t)&&32>(0,s.d)(t))throw new i.xB({data:"string"==typeof t?t:(0,h.ci)(t),params:e,size:(0,s.d)(t)});let w=0,b=[];for(let t=0;t<e.length;++t){let r=e[t];o.setPosition(w);let[a,s]=function e(t,r,{staticPosition:o}){let a=(0,g.S)(r.type);if(a){let[i,n]=a;return function(t,r,{length:i,staticPosition:n}){if(!i){let i=n+p(t.readBytes(32)),o=i+32;t.setPosition(i);let a=p(t.readBytes(32)),s=m(r),l=0,c=[];for(let i=0;i<a;++i){t.setPosition(o+(s?32*i:l));let[n,a]=e(t,r,{staticPosition:o});l+=a,c.push(n)}return t.setPosition(n+32),[c,32]}if(m(r)){let o=n+p(t.readBytes(32)),a=[];for(let n=0;n<i;++n){t.setPosition(o+32*n);let[i]=e(t,r,{staticPosition:o});a.push(i)}return t.setPosition(n+32),[a,32]}let o=0,a=[];for(let s=0;s<i;++s){let[i,s]=e(t,r,{staticPosition:n+o});o+=s,a.push(i)}return[a,o]}(t,{...r,type:n},{length:i,staticPosition:o})}if("tuple"===r.type)return function(t,r,{staticPosition:i}){let n=0===r.components.length||r.components.some(({name:e})=>!e),o=n?[]:{},a=0;if(m(r)){let s=i+p(t.readBytes(32));for(let i=0;i<r.components.length;++i){let l=r.components[i];t.setPosition(s+a);let[c,u]=e(t,l,{staticPosition:s});a+=u,o[n?i:l?.name]=c}return t.setPosition(i+32),[o,32]}for(let s=0;s<r.components.length;++s){let l=r.components[s],[c,u]=e(t,l,{staticPosition:i});o[n?s:l?.name]=c,a+=u}return[o,a]}(t,r,{staticPosition:o});if("address"===r.type)return function(e){let t=e.readBytes(32);return[(0,n.x)((0,h.ci)((0,l.T4)(t,-20))),32]}(t);if("bool"===r.type)return[function(e,t={}){let r=e;if(void 0!==t.size&&((0,d.Yf)(r,{size:t.size}),r=(0,c.f)(r)),r.length>1||r[0]>1)throw new u.yr(r);return!!r[0]}(t.readBytes(32),{size:32}),32];if(r.type.startsWith("bytes"))return function(e,t,{staticPosition:r}){let[i,n]=t.type.split("bytes");if(!n){let t=p(e.readBytes(32));e.setPosition(r+t);let i=p(e.readBytes(32));if(0===i)return e.setPosition(r+32),["0x",32];let n=e.readBytes(i);return e.setPosition(r+32),[(0,h.ci)(n),32]}return[(0,h.ci)(e.readBytes(parseInt(n),32)),32]}(t,r,{staticPosition:o});if(r.type.startsWith("uint")||r.type.startsWith("int"))return function(e,t){let r=t.type.startsWith("int"),i=parseInt(t.type.split("int")[1]||"256"),n=e.readBytes(32);return[i>48?function(e,t={}){void 0!==t.size&&(0,d.Yf)(e,{size:t.size});let r=(0,h.ci)(e,t);return(0,d.y_)(r,t)}(n,{signed:r}):p(n,{signed:r}),32]}(t,r);if("string"===r.type)return function(e,{staticPosition:t}){let r=p(e.readBytes(32));e.setPosition(t+r);let i=p(e.readBytes(32));if(0===i)return e.setPosition(t+32),["",32];let n=e.readBytes(i,32),o=function(e,t={}){let r=e;return void 0!==t.size&&((0,d.Yf)(r,{size:t.size}),r=(0,c.f)(r,{dir:"right"})),new TextDecoder().decode(r)}((0,c.f)(n));return e.setPosition(t+32),[o,32]}(t,{staticPosition:o});throw new i.CI(r.type,{docsPath:"/docs/contract/decodeAbiParameters"})}(o,r,{staticPosition:0});w+=s,b.push(a)}return b}function m(e){let{type:t}=e;if("string"===t||"bytes"===t||t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(m);let r=(0,g.S)(e.type);return!!(r&&m({...e,type:r[1]}))}},68890:function(e,t,r){"use strict";r.d(t,{p:function(){return c}});var i=r(26390),n=r(45581),o=r(23090),a=r(9226),s=r(94403),l=r(67705);function c(e){let{abi:t,data:r}=e,c=(0,o.tP)(r,0,4);if("0x"===c)throw new n.wb;let u=[...t||[],i.Up,i.hZ].find(e=>"error"===e.type&&c===(0,a.C)((0,l.t)(e)));if(!u)throw new n.yP(c,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:u,args:"inputs"in u&&u.inputs&&u.inputs.length>0?(0,s.r)(u.inputs,(0,o.tP)(r,4)):void 0,errorName:u.name}}},27470:function(e,t,r){"use strict";r.d(t,{k:function(){return s}});var i=r(45581),n=r(94403),o=r(52753);let a="/docs/contract/decodeFunctionResult";function s(e){let{abi:t,args:r,functionName:s,data:l}=e,c=t[0];if(s){let e=(0,o.mE)({abi:t,args:r,name:s});if(!e)throw new i.xL(s,{docsPath:a});c=e}if("function"!==c.type)throw new i.xL(void 0,{docsPath:a});if(!c.outputs)throw new i.MX(c.name,{docsPath:a});let u=(0,n.r)(c.outputs,l);return u&&u.length>1?u:u&&1===u.length?u[0]:void 0}},8580:function(e,t,r){"use strict";r.d(t,{E:function(){return h},S:function(){return f}});var i=r(45581),n=r(44898),o=r(80230),a=r(39361),s=r(3556),l=r(89507),c=r(95305),u=r(23090),d=r(15578);function h(e,t){if(e.length!==t.length)throw new i.fs({expectedLength:e.length,givenLength:t.length});let r=p(function({params:e,values:t}){let r=[];for(let h=0;h<e.length;h++)r.push(function e({param:t,value:r}){let h=f(t.type);if(h){let[n,o]=h;return function(t,{length:r,param:n}){let o=null===r;if(!Array.isArray(t))throw new i.hn(t);if(!o&&t.length!==r)throw new i.gr({expectedLength:r,givenLength:t.length,type:`${n.type}[${r}]`});let a=!1,l=[];for(let r=0;r<t.length;r++){let i=e({param:n,value:t[r]});i.dynamic&&(a=!0),l.push(i)}if(o||a){let e=p(l);if(o){let t=(0,d.eC)(l.length,{size:32});return{dynamic:!0,encoded:l.length>0?(0,s.zo)([t,e]):t}}if(a)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:(0,s.zo)(l.map(({encoded:e})=>e))}}(r,{length:n,param:{...t,type:o}})}if("tuple"===t.type)return function(t,{param:r}){let i=!1,n=[];for(let o=0;o<r.components.length;o++){let a=r.components[o],s=Array.isArray(t)?o:a.name,l=e({param:a,value:t[s]});n.push(l),l.dynamic&&(i=!0)}return{dynamic:i,encoded:i?p(n):(0,s.zo)(n.map(({encoded:e})=>e))}}(r,{param:t});if("address"===t.type)return function(e){if(!(0,a.U)(e))throw new n.b({address:e});return{dynamic:!1,encoded:(0,l.gc)(e.toLowerCase())}}(r);if("bool"===t.type)return function(e){if("boolean"!=typeof e)throw new o.G(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:(0,l.gc)((0,d.C4)(e))}}(r);if(t.type.startsWith("uint")||t.type.startsWith("int"))return function(e,{signed:t}){return{dynamic:!1,encoded:(0,d.eC)(e,{size:32,signed:t})}}(r,{signed:t.type.startsWith("int")});if(t.type.startsWith("bytes"))return function(e,{param:t}){let[,r]=t.type.split("bytes"),n=(0,c.d)(e);if(!r){let t=e;return n%32!=0&&(t=(0,l.gc)(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:(0,s.zo)([(0,l.gc)((0,d.eC)(n,{size:32})),t])}}if(n!==parseInt(r))throw new i.M4({expectedSize:parseInt(r),value:e});return{dynamic:!1,encoded:(0,l.gc)(e,{dir:"right"})}}(r,{param:t});if("string"===t.type)return function(e){let t=(0,d.$G)(e),r=Math.ceil((0,c.d)(t)/32),i=[];for(let e=0;e<r;e++)i.push((0,l.gc)((0,u.tP)(t,32*e,(e+1)*32),{dir:"right"}));return{dynamic:!0,encoded:(0,s.zo)([(0,l.gc)((0,d.eC)((0,c.d)(t),{size:32})),...i])}}(r);throw new i.dh(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}({param:e[h],value:t[h]}));return r}({params:e,values:t}));return 0===r.length?"0x":r}function p(e){let t=0;for(let r=0;r<e.length;r++){let{dynamic:i,encoded:n}=e[r];i?t+=32:t+=(0,c.d)(n)}let r=[],i=[],n=0;for(let o=0;o<e.length;o++){let{dynamic:a,encoded:s}=e[o];a?(r.push((0,d.eC)(t+n,{size:32})),i.push(s),n+=(0,c.d)(s)):r.push(s)}return(0,s.zo)([...r,...i])}function f(e){let t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}},87210:function(e,t,r){"use strict";r.d(t,{R:function(){return u}});var i=r(3556),n=r(8580),o=r(45581),a=r(9226),s=r(67705),l=r(52753);let c="/docs/contract/encodeFunctionData";function u(e){let{args:t}=e,{abi:r,functionName:u}=1===e.abi.length&&e.functionName?.startsWith("0x")?e:function(e){let{abi:t,args:r,functionName:i}=e,n=t[0];if(i){let e=(0,l.mE)({abi:t,args:r,name:i});if(!e)throw new o.xL(i,{docsPath:c});n=e}if("function"!==n.type)throw new o.xL(void 0,{docsPath:c});return{abi:[n],functionName:(0,a.C)((0,s.t)(n))}}(e),d=r[0],h="inputs"in d&&d.inputs?(0,n.E)(d.inputs,t??[]):void 0;return(0,i.SM)([u,h??"0x"])}},67705:function(e,t,r){"use strict";r.d(t,{h:function(){return o},t:function(){return n}});var i=r(45581);function n(e,{includeName:t=!1}={}){if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new i.wM(e.type);return`${e.name}(${o(e.inputs,{includeName:t})})`}function o(e,{includeName:t=!1}={}){return e?e.map(e=>(function(e,{includeName:t}){return e.type.startsWith("tuple")?`(${o(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")})(e,{includeName:t})).join(t?", ":","):""}},52753:function(e,t,r){"use strict";r.d(t,{mE:function(){return l}});var i=r(45581),n=r(21230),o=r(39361),a=r(58113),s=r(9226);function l(e){let t;let{abi:r,args:l=[],name:c}=e,u=(0,n.v)(c,{strict:!1}),d=r.filter(e=>u?"function"===e.type?(0,s.C)(e)===c:"event"===e.type&&(0,a.n)(e)===c:"name"in e&&e.name===c);if(0!==d.length){if(1===d.length)return d[0];for(let e of d)if("inputs"in e){if(!l||0===l.length){if(!e.inputs||0===e.inputs.length)return e;continue}if(e.inputs&&0!==e.inputs.length&&e.inputs.length===l.length&&l.every((t,r)=>{let i="inputs"in e&&e.inputs[r];return!!i&&function e(t,r){let i=typeof t,n=r.type;switch(n){case"address":return(0,o.U)(t,{strict:!1});case"bool":return"boolean"===i;case"function":case"string":return"string"===i;default:if("tuple"===n&&"components"in r)return Object.values(r.components).every((r,i)=>e(Object.values(t)[i],r));if(/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n))return"number"===i||"bigint"===i;if(/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n))return"string"===i||t instanceof Uint8Array;if(/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n))return Array.isArray(t)&&t.every(t=>e(t,{...r,type:n.replace(/(\[[0-9]{0,}\])$/,"")}));return!1}}(t,i)})){if(t&&"inputs"in t&&t.inputs){let r=function e(t,r,i){for(let n in t){let a=t[n],s=r[n];if("tuple"===a.type&&"tuple"===s.type&&"components"in a&&"components"in s)return e(a.components,s.components,i[n]);let l=[a.type,s.type];if(l.includes("address")&&l.includes("bytes20")||(l.includes("address")&&l.includes("string")||l.includes("address")&&l.includes("bytes"))&&(0,o.U)(i[n],{strict:!1}))return l}}(e.inputs,t.inputs,l);if(r)throw new i.S4({abiItem:e,type:r[0]},{abiItem:t,type:r[1]})}t=e}}return t||d[0]}}},75036:function(e,t,r){"use strict";r.d(t,{K:function(){return l},x:function(){return s}});var i=r(44898),n=r(73596),o=r(95839),a=r(39361);function s(e,t){let r=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),i=(0,o.w)((0,n.qX)(r),"bytes"),a=(t?r.substring(`${t}0x`.length):r).split("");for(let e=0;e<40;e+=2)i[e>>1]>>4>=8&&a[e]&&(a[e]=a[e].toUpperCase()),(15&i[e>>1])>=8&&a[e+1]&&(a[e+1]=a[e+1].toUpperCase());return`0x${a.join("")}`}function l(e,t){if(!(0,a.U)(e,{strict:!1}))throw new i.b({address:e});return s(e,t)}},39361:function(e,t,r){"use strict";r.d(t,{U:function(){return s}});class i extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}set(e,t){return super.set(e,t),this.maxSize&&this.size>this.maxSize&&this.delete(this.keys().next().value),this}}var n=r(75036);let o=/^0x[a-fA-F0-9]{40}$/,a=new i(8192);function s(e,t){let{strict:r=!0}=t??{};if(a.has(e))return a.get(e);let i=!!o.test(e)&&(e.toLowerCase()===e||!r||(0,n.x)(e)===e);return a.set(e,i),i}},55597:function(e,t,r){"use strict";function i(e){return{formatters:void 0,fees:void 0,serializers:void 0,...e}}r.d(t,{a:function(){return i}})},73621:function(e,t,r){"use strict";r.d(t,{L:function(){return n}});var i=r(55774);function n({blockNumber:e,chain:t,contract:r}){let n=t?.contracts?.[r];if(!n)throw new i.mm({chain:t,contract:{name:r}});if(e&&n.blockCreated&&n.blockCreated>e)throw new i.mm({blockNumber:e,chain:t,contract:{name:r,blockCreated:n.blockCreated}});return n.address}},3556:function(e,t,r){"use strict";function i(e){return"string"==typeof e[0]?n(e):function(e){let t=0;for(let r of e)t+=r.length;let r=new Uint8Array(t),i=0;for(let t of e)r.set(t,i),i+=t.length;return r}(e)}function n(e){return`0x${e.reduce((e,t)=>e+t.replace("0x",""),"")}`}r.d(t,{SM:function(){return n},zo:function(){return i}})},21230:function(e,t,r){"use strict";function i(e,{strict:t=!0}={}){return!!e&&"string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x"))}r.d(t,{v:function(){return i}})},89507:function(e,t,r){"use strict";r.d(t,{gc:function(){return o},vk:function(){return n}});var i=r(11758);function n(e,{dir:t,size:r=32}={}){return"string"==typeof e?o(e,{dir:t,size:r}):function(e,{dir:t,size:r=32}={}){if(null===r)return e;if(e.length>r)throw new i.$s({size:e.length,targetSize:r,type:"bytes"});let n=new Uint8Array(r);for(let i=0;i<r;i++){let o="right"===t;n[o?i:r-i-1]=e[o?i:e.length-i-1]}return n}(e,{dir:t,size:r})}function o(e,{dir:t,size:r=32}={}){if(null===r)return e;let n=e.replace("0x","");if(n.length>2*r)throw new i.$s({size:Math.ceil(n.length/2),targetSize:r,type:"hex"});return`0x${n["right"===t?"padEnd":"padStart"](2*r,"0")}`}},95305:function(e,t,r){"use strict";r.d(t,{d:function(){return n}});var i=r(21230);function n(e){return(0,i.v)(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}},23090:function(e,t,r){"use strict";r.d(t,{T4:function(){return c},tP:function(){return a}});var i=r(11758),n=r(21230),o=r(95305);function a(e,t,r,{strict:i}={}){return(0,n.v)(e,{strict:!1})?function(e,t,r,{strict:i}={}){s(e,t);let n=`0x${e.replace("0x","").slice((t??0)*2,(r??e.length)*2)}`;return i&&l(n,t,r),n}(e,t,r,{strict:i}):c(e,t,r,{strict:i})}function s(e,t){if("number"==typeof t&&t>0&&t>(0,o.d)(e)-1)throw new i.mV({offset:t,position:"start",size:(0,o.d)(e)})}function l(e,t,r){if("number"==typeof t&&"number"==typeof r&&(0,o.d)(e)!==r-t)throw new i.mV({offset:r,position:"end",size:(0,o.d)(e)})}function c(e,t,r,{strict:i}={}){s(e,t);let n=e.slice(t,r);return i&&l(n,t,r),n}},71264:function(e,t,r){"use strict";function i(e,{dir:t="left"}={}){let r="string"==typeof e?e.replace("0x",""):e,i=0;for(let e=0;e<r.length-1&&"0"===r["left"===t?e:r.length-e-1].toString();e++)i++;return(r="left"===t?r.slice(i):r.slice(0,r.length-i),"string"==typeof e)?(1===r.length&&"right"===t&&(r=`${r}0`),`0x${r.length%2==1?`0${r}`:r}`):r}r.d(t,{f:function(){return i}})},55936:function(e,t,r){"use strict";r.d(t,{Yf:function(){return s},ly:function(){return c},rR:function(){return u},y_:function(){return l}});var i=r(75851),n=r(95305),o=r(71264),a=r(73596);function s(e,{size:t}){if((0,n.d)(e)>t)throw new i.M6({givenSize:(0,n.d)(e),maxSize:t})}function l(e,t={}){let{signed:r}=t;t.size&&s(e,{size:t.size});let i=BigInt(e);if(!r)return i;let n=(e.length-2)/2;return i<=(1n<<8n*BigInt(n)-1n)-1n?i:i-BigInt(`0x${"f".padStart(2*n,"f")}`)-1n}function c(e,t={}){return Number(l(e,t))}function u(e,t={}){let r=(0,a.nr)(e);return t.size&&(s(r,{size:t.size}),r=(0,o.f)(r,{dir:"right"})),new TextDecoder().decode(r)}},73596:function(e,t,r){"use strict";r.d(t,{O0:function(){return c},nr:function(){return h},qX:function(){return p}});var i=r(80230),n=r(21230),o=r(89507),a=r(55936),s=r(15578);let l=new TextEncoder;function c(e,t={}){return"number"==typeof e||"bigint"==typeof e?h((0,s.eC)(e,t)):"boolean"==typeof e?function(e,t={}){let r=new Uint8Array(1);return(r[0]=Number(e),"number"==typeof t.size)?((0,a.Yf)(r,{size:t.size}),(0,o.vk)(r,{size:t.size})):r}(e,t):(0,n.v)(e)?h(e,t):p(e,t)}let u={zero:48,nine:57,A:65,F:70,a:97,f:102};function d(e){return e>=u.zero&&e<=u.nine?e-u.zero:e>=u.A&&e<=u.F?e-(u.A-10):e>=u.a&&e<=u.f?e-(u.a-10):void 0}function h(e,t={}){let r=e;t.size&&((0,a.Yf)(r,{size:t.size}),r=(0,o.vk)(r,{dir:"right",size:t.size}));let n=r.slice(2);n.length%2&&(n=`0${n}`);let s=n.length/2,l=new Uint8Array(s);for(let e=0,t=0;e<s;e++){let r=d(n.charCodeAt(t++)),o=d(n.charCodeAt(t++));if(void 0===r||void 0===o)throw new i.G(`Invalid byte sequence ("${n[t-2]}${n[t-1]}" in "${n}").`);l[e]=16*r+o}return l}function p(e,t={}){let r=l.encode(e);return"number"==typeof t.size?((0,a.Yf)(r,{size:t.size}),(0,o.vk)(r,{dir:"right",size:t.size})):r}},15578:function(e,t,r){"use strict";r.d(t,{$G:function(){return h},C4:function(){return l},NC:function(){return s},ci:function(){return c},eC:function(){return u}});var i=r(75851),n=r(89507),o=r(55936);let a=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function s(e,t={}){return"number"==typeof e||"bigint"==typeof e?u(e,t):"string"==typeof e?h(e,t):"boolean"==typeof e?l(e,t):c(e,t)}function l(e,t={}){let r=`0x${Number(e)}`;return"number"==typeof t.size?((0,o.Yf)(r,{size:t.size}),(0,n.vk)(r,{size:t.size})):r}function c(e,t={}){let r="";for(let t=0;t<e.length;t++)r+=a[e[t]];let i=`0x${r}`;return"number"==typeof t.size?((0,o.Yf)(i,{size:t.size}),(0,n.vk)(i,{dir:"right",size:t.size})):i}function u(e,t={}){let r;let{signed:o,size:a}=t,s=BigInt(e);a?r=o?(1n<<8n*BigInt(a)-1n)-1n:2n**(8n*BigInt(a))-1n:"number"==typeof e&&(r=BigInt(Number.MAX_SAFE_INTEGER));let l="bigint"==typeof r&&o?-r-1n:0;if(r&&s>r||s<l){let t="bigint"==typeof e?"n":"";throw new i.J5({max:r?`${r}${t}`:void 0,min:`${l}${t}`,signed:o,size:a,value:`${e}${t}`})}let c=`0x${(o&&s<0?(1n<<BigInt(8*a))+BigInt(s):s).toString(16)}`;return a?(0,n.vk)(c,{size:a}):c}let d=new TextEncoder;function h(e,t={}){return c(d.encode(e),t)}},72364:function(e,t,r){"use strict";r.d(t,{i:function(){return n}});var i=r(21230);function n(e){if(66!==e.length||0!==e.indexOf("[")||65!==e.indexOf("]"))return null;let t=`0x${e.slice(1,65)}`;return(0,i.v)(t)?t:null}},96316:function(e,t,r){"use strict";r.d(t,{c:function(){return a}});var i=r(26390),n=r(80230),o=r(47115);function a(e,t){if(!(e instanceof n.G))return!1;let r=e.walk(e=>e instanceof o.Lu);return r instanceof o.Lu&&(!!(r.data?.errorName==="ResolverNotFound"||r.data?.errorName==="ResolverWildcardNotSupported"||r.data?.errorName==="ResolverNotContract"||r.data?.errorName==="ResolverError"||r.data?.errorName==="HttpError"||r.reason?.includes("Wildcard on non-extended resolvers is not supported"))||"reverse"===t&&r.reason===i.$[50])}},8291:function(e,t,r){"use strict";r.d(t,{V:function(){return l}});var i=r(3556),n=r(73596),o=r(15578),a=r(95839),s=r(72364);function l(e){let t=new Uint8Array(32).fill(0);if(!e)return(0,o.ci)(t);let r=e.split(".");for(let e=r.length-1;e>=0;e-=1){let o=(0,s.i)(r[e]),l=o?(0,n.O0)(o):(0,a.w)((0,n.qX)(r[e]),"bytes");t=(0,a.w)((0,i.zo)([t,l]),"bytes")}return(0,o.ci)(t)}},24761:function(e,t,r){"use strict";r.d(t,{T:function(){return s}});var i=r(73596),n=r(15578),o=r(95839),a=r(72364);function s(e){let t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);let r=new Uint8Array((0,i.qX)(t).byteLength+2),s=0,l=t.split(".");for(let e=0;e<l.length;e++){let t=(0,i.qX)(l[e]);if(t.byteLength>255){var c;t=(0,i.qX)((c=function(e){let t=new Uint8Array(32).fill(0);return e?(0,a.i)(e)||(0,o.w)((0,i.qX)(e)):(0,n.ci)(t)}(l[e]),`[${c.slice(2)}]`))}r[s]=t.length,r.set(t,s+1),s+=t.length+1}return r.byteLength!==s+1?r.slice(0,s+1):r}},95094:function(e,t,r){"use strict";r.d(t,{S:function(){return s}});var i=r(45581),n=r(80230),o=r(47115),a=r(24473);function s(e,{abi:t,address:r,args:s,docsPath:l,functionName:c,sender:u}){let{code:d,data:h,message:p,shortMessage:f}=e instanceof o.VQ?e:e instanceof n.G?e.walk(e=>"data"in e)||e.walk():{},g=e instanceof i.wb?new o.Dk({functionName:c}):[3,a.XS.code].includes(d)&&(h||p||f)?new o.Lu({abi:t,data:"object"==typeof h?h.data:h,functionName:c,message:f??p}):e;return new o.uq(g,{abi:t,args:s,contractAddress:r,docsPath:l,functionName:c,sender:u})}},85069:function(e,t,r){"use strict";r.d(t,{k:function(){return o}});var i=r(80230),n=r(26463);function o(e,t){let r=(e.details||"").toLowerCase(),o=e instanceof i.G?e.walk(e=>e.code===n.M_.code):e;return o instanceof i.G?new n.M_({cause:e,message:o.details}):n.M_.nodeMessage.test(r)?new n.M_({cause:e,message:e.details}):n.Hh.nodeMessage.test(r)?new n.Hh({cause:e,maxFeePerGas:t?.maxFeePerGas}):n.G$.nodeMessage.test(r)?new n.G$({cause:e,maxFeePerGas:t?.maxFeePerGas}):n.ZI.nodeMessage.test(r)?new n.ZI({cause:e,nonce:t?.nonce}):n.vU.nodeMessage.test(r)?new n.vU({cause:e,nonce:t?.nonce}):n.se.nodeMessage.test(r)?new n.se({cause:e,nonce:t?.nonce}):n.C_.nodeMessage.test(r)?new n.C_({cause:e}):n.WF.nodeMessage.test(r)?new n.WF({cause:e,gas:t?.gas}):n.dR.nodeMessage.test(r)?new n.dR({cause:e,gas:t?.gas}):n.pZ.nodeMessage.test(r)?new n.pZ({cause:e}):n.cs.nodeMessage.test(r)?new n.cs({cause:e,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas}):new n.cj({cause:e})}},67306:function(e,t,r){"use strict";function i(e,{format:t}){if(!t)return{};let r={};return!function t(i){for(let n of Object.keys(i))n in e&&(r[n]=e[n]),i[n]&&"object"==typeof i[n]&&!Array.isArray(i[n])&&t(i[n])}(t(e||{})),r}r.d(t,{K:function(){return i}})},20662:function(e,t,r){"use strict";r.d(t,{tG:function(){return o}});var i=r(15578);let n={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3"};function o(e){let t={...e};return void 0!==e.blobs&&"string"!=typeof e.blobs[0]&&(t.blobs=e.blobs.map(e=>(0,i.ci)(e))),void 0!==e.gas&&(t.gas=(0,i.eC)(e.gas)),void 0!==e.gasPrice&&(t.gasPrice=(0,i.eC)(e.gasPrice)),void 0!==e.maxFeePerBlobGas&&(t.maxFeePerBlobGas=(0,i.eC)(e.maxFeePerBlobGas)),void 0!==e.maxFeePerGas&&(t.maxFeePerGas=(0,i.eC)(e.maxFeePerGas)),void 0!==e.maxPriorityFeePerGas&&(t.maxPriorityFeePerGas=(0,i.eC)(e.maxPriorityFeePerGas)),void 0!==e.nonce&&(t.nonce=(0,i.eC)(e.nonce)),void 0!==e.type&&(t.type=n[e.type]),void 0!==e.value&&(t.value=(0,i.eC)(e.value)),t}},31935:function(e,t,r){"use strict";function i(e,t,r){return i=>e[t.name||r]?.(i)??t(e,i)}r.d(t,{s:function(){return i}})},95839:function(e,t,r){"use strict";function i(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Wrong positive integer: ${e}`)}function n(e,...t){if(!(e instanceof Uint8Array))throw Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function o(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")}r.d(t,{w:function(){return N}});let a=BigInt(4294967296-1),s=BigInt(32),l=(e,t,r)=>e<<r|t>>>32-r,c=(e,t,r)=>t<<r|e>>>32-r,u=(e,t,r)=>t<<r-32|e>>>64-r,d=(e,t,r)=>e<<r-32|t>>>64-r,h=e=>e instanceof Uint8Array,p=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4));if(68!==new Uint8Array(new Uint32Array([287454020]).buffer)[0])throw Error("Non little-endian hardware is not supported");function f(e){if("string"==typeof e&&(e=function(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}(e)),!h(e))throw Error(`expected Uint8Array, got ${typeof e}`);return e}class g{clone(){return this._cloneInto()}}let[w,m,b]=[[],[],[]],v=BigInt(0),y=BigInt(1),C=BigInt(2),x=BigInt(7),E=BigInt(256),k=BigInt(113);for(let e=0,t=y,r=1,i=0;e<24;e++){[r,i]=[i,(2*r+3*i)%5],w.push(2*(5*i+r)),m.push((e+1)*(e+2)/2%64);let n=v;for(let e=0;e<7;e++)(t=(t<<y^(t>>x)*k)%E)&C&&(n^=y<<(y<<BigInt(e))-y);b.push(n)}let[_,A]=function(e,t=!1){let r=new Uint32Array(e.length),i=new Uint32Array(e.length);for(let n=0;n<e.length;n++){let{h:o,l}=function(e,t=!1){return t?{h:Number(e&a),l:Number(e>>s&a)}:{h:0|Number(e>>s&a),l:0|Number(e&a)}}(e[n],t);[r[n],i[n]]=[o,l]}return[r,i]}(b,!0),S=(e,t,r)=>r>32?u(e,t,r):l(e,t,r),R=(e,t,r)=>r>32?d(e,t,r):c(e,t,r);class $ extends g{constructor(e,t,r,n=!1,o=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=r,this.enableXOF=n,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,i(r),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=p(this.state)}keccak(){!function(e,t=24){let r=new Uint32Array(10);for(let i=24-t;i<24;i++){for(let t=0;t<10;t++)r[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){let i=(t+8)%10,n=(t+2)%10,o=r[n],a=r[n+1],s=S(o,a,1)^r[i],l=R(o,a,1)^r[i+1];for(let r=0;r<50;r+=10)e[t+r]^=s,e[t+r+1]^=l}let t=e[2],n=e[3];for(let r=0;r<24;r++){let i=m[r],o=S(t,n,i),a=R(t,n,i),s=w[r];t=e[s],n=e[s+1],e[s]=o,e[s+1]=a}for(let t=0;t<50;t+=10){for(let i=0;i<10;i++)r[i]=e[t+i];for(let i=0;i<10;i++)e[t+i]^=~r[(i+2)%10]&r[(i+4)%10]}e[0]^=_[i],e[1]^=A[i]}r.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){o(this);let{blockLen:t,state:r}=this,i=(e=f(e)).length;for(let n=0;n<i;){let o=Math.min(t-this.pos,i-n);for(let t=0;t<o;t++)r[this.pos++]^=e[n++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:r,blockLen:i}=this;e[r]^=t,(128&t)!=0&&r===i-1&&this.keccak(),e[i-1]^=128,this.keccak()}writeInto(e){o(this,!1),n(e),this.finish();let t=this.state,{blockLen:r}=this;for(let i=0,n=e.length;i<n;){this.posOut>=r&&this.keccak();let o=Math.min(r-this.posOut,n-i);e.set(t.subarray(this.posOut,this.posOut+o),i),this.posOut+=o,i+=o}return e}xofInto(e){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return i(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(!function(e,t){n(e);let r=t.outputLen;if(e.length<r)throw Error(`digestInto() expects output buffer of length at least ${r}`)}(e,this),this.finished)throw Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){let{blockLen:t,suffix:r,outputLen:i,rounds:n,enableXOF:o}=this;return e||(e=new $(t,r,i,o,n)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=n,e.suffix=r,e.outputLen=i,e.enableXOF=o,e.destroyed=this.destroyed,e}}let T=function(e){let t=t=>e().update(f(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}(()=>new $(136,1,32));var P=r(21230),O=r(73596),I=r(15578);function N(e,t){let r=T((0,P.v)(e,{strict:!1})?(0,O.O0)(e):e);return"bytes"===(t||"hex")?r:(0,I.NC)(r)}},58113:function(e,t,r){"use strict";r.d(t,{n:function(){return i}});let i=r(84869).r},9226:function(e,t,r){"use strict";r.d(t,{C:function(){return o}});var i=r(23090),n=r(84869);let o=e=>(0,i.tP)((0,n.r)(e),0,4)},84869:function(e,t,r){"use strict";r.d(t,{r:function(){return u}});var i=r(73596),n=r(95839);let o=e=>(0,n.w)((0,i.O0)(e)),a=/^tuple(?<array>(\[(\d*)\])*)$/;function s(e){let t="",r=e.length;for(let i=0;i<r;i++)t+=function e(t){let r=t.type;if(a.test(t.type)&&"components"in t){r="(";let i=t.components.length;for(let n=0;n<i;n++)r+=e(t.components[n]),n<i-1&&(r+=", ");let n=function(e,t){let r=e.exec(t);return r?.groups}(a,t.type);return r+=`)${n?.array??""}`,e({...t,type:r})}return("indexed"in t&&t.indexed&&(r=`${r} indexed`),t.name)?`${r} ${t.name}`:r}(e[i]),i!==r-1&&(t+=", ");return t}var l=r(80230);let c=e=>{var t;return function(e){let t=!0,r="",i=0,n="",o=!1;for(let a=0;a<e.length;a++){let s=e[a];if(["(",")",","].includes(s)&&(t=!0),"("===s&&i++,")"===s&&i--,t){if(0===i){if(" "===s&&["event","function",""].includes(n))n="";else if(n+=s,")"===s){o=!0;break}continue}if(" "===s){","!==e[a-1]&&","!==r&&",("!==r&&(r="",t=!1);continue}n+=s,r+=s}}if(!o)throw new l.G("Unable to normalize signature.");return n}("string"==typeof e?e:"function"===(t=e).type?`function ${t.name}(${s(t.inputs)})${t.stateMutability&&"nonpayable"!==t.stateMutability?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${s(t.outputs)})`:""}`:"event"===t.type?`event ${t.name}(${s(t.inputs)})`:"error"===t.type?`error ${t.name}(${s(t.inputs)})`:"constructor"===t.type?`constructor(${s(t.inputs)})${"payable"===t.stateMutability?" payable":""}`:"fallback"===t.type?"fallback()":"receive() external payable")};function u(e){return o(c(e))}},5493:function(e,t,r){"use strict";r.d(t,{S:function(){return n}});let i=new Map;function n({fn:e,id:t,shouldSplitBatch:r,wait:n=0,sort:o}){let a=async()=>{let t=c();s();let r=t.map(({args:e})=>e);0!==r.length&&e(r).then(e=>{o&&Array.isArray(e)&&e.sort(o);for(let r=0;r<t.length;r++){let{pendingPromise:i}=t[r];i.resolve?.([e[r],e])}}).catch(e=>{for(let r=0;r<t.length;r++){let{pendingPromise:i}=t[r];i.reject?.(e)}})},s=()=>i.delete(t),l=()=>c().map(({args:e})=>e),c=()=>i.get(t)||[],u=e=>i.set(t,[...c(),e]);return{flush:s,async schedule(e){let t={},i=new Promise((e,r)=>{t.resolve=e,t.reject=r});return(r?.([...l(),e])&&a(),c().length>0)?u({args:e,pendingPromise:t}):(u({args:e,pendingPromise:t}),setTimeout(a,n)),i}}}},42179:function(e,t,r){"use strict";r.d(t,{J:function(){return n}});var i=r(83440);function n(e,{delay:t=100,retryCount:r=2,shouldRetry:n=()=>!0}={}){return new Promise((o,a)=>{let s=async({count:l=0}={})=>{let c=async({error:e})=>{let r="function"==typeof t?t({count:l,error:e}):t;r&&await (0,i.D)(r),s({count:l+1})};try{let t=await e();o(t)}catch(e){if(l<r&&await n({count:l,error:e}))return c({error:e});a(e)}};s()})}},9416:function(e,t,r){"use strict";function i(e,{errorInstance:t=Error("timed out"),timeout:r,signal:i}){return new Promise((n,o)=>{(async()=>{let a;try{let s=new AbortController;r>0&&(a=setTimeout(()=>{i?s.abort():o(t)},r)),n(await e({signal:s?.signal||null}))}catch(e){"AbortError"===e.name&&o(t),o(e)}finally{clearTimeout(a)}})()})}r.d(t,{F:function(){return i}})},92791:function(e,t,r){"use strict";r.d(t,{P:function(){return i}});let i=(e,t,r)=>JSON.stringify(e,(e,r)=>{let i="bigint"==typeof r?r.toString():r;return"function"==typeof t?t(e,i):i},r)},15337:function(e,t,r){"use strict";r.d(t,{F:function(){return l}});var i=r(79561),n=r(44898),o=r(26463),a=r(10289),s=r(39361);function l(e){let{account:t,gasPrice:r,maxFeePerGas:l,maxPriorityFeePerGas:c,to:u}=e,d=t?(0,i.T)(t):void 0;if(d&&!(0,s.U)(d.address))throw new n.b({address:d.address});if(u&&!(0,s.U)(u))throw new n.b({address:u});if(void 0!==r&&(void 0!==l||void 0!==c))throw new a.xY;if(l&&l>2n**256n-1n)throw new o.Hh({maxFeePerGas:l});if(c&&l&&c>l)throw new o.cs({maxFeePerGas:l,maxPriorityFeePerGas:c})}},52926:function(e,t,r){"use strict";r.d(t,{d:function(){return o}});var i=r(4817),n=r(60989);function o(e,t="wei"){return(0,n.b)(e,i.ez[t])}},98206:function(e,t,r){"use strict";r.d(t,{o:function(){return o}});var i=r(4817),n=r(60989);function o(e,t="wei"){return(0,n.b)(e,i.Zn[t])}},60989:function(e,t,r){"use strict";function i(e,t){let r=e.toString(),i=r.startsWith("-");i&&(r=r.slice(1));let[n,o]=[(r=r.padStart(t,"0")).slice(0,r.length-t),r.slice(r.length-t)];return o=o.replace(/(0+)$/,""),`${i?"-":""}${n||"0"}${o?`.${o}`:""}`}r.d(t,{b:function(){return i}})},83440:function(e,t,r){"use strict";async function i(e){return new Promise(t=>setTimeout(t,e))}r.d(t,{D:function(){return i}})},60604:function(e,t,r){"use strict";r.d(t,{V:function(){return s},F:function(){return l}});var i=r(2265);let n=!1;async function o(e,t={}){let r;if(n)return[];n=!0,e.setState(e=>({...e,status:e.current?"reconnecting":"connecting"}));let i=[];if(t.connectors?.length)for(let r of t.connectors){let t;t="function"==typeof r?e._internal.connectors.setup(r):r,i.push(t)}else i.push(...e.connectors);try{r=await e.storage?.getItem("recentConnectorId")}catch{}let o={};for(let[,t]of e.state.connections)o[t.connector.id]=1;r&&(o[r]=0);let a=Object.keys(o).length>0?[...i].sort((e,t)=>(o[e.id]??10)-(o[t.id]??10)):i,s=!1,l=[],c=[];for(let t of a){let r=await t.getProvider();if(!r||c.some(e=>e===r)||!await t.isAuthorized())continue;let i=await t.connect({isReconnecting:!0}).catch(()=>null);i&&(t.emitter.off("connect",e._internal.events.connect),t.emitter.on("change",e._internal.events.change),t.emitter.on("disconnect",e._internal.events.disconnect),e.setState(e=>{let r=new Map(s?e.connections:new Map).set(t.uid,{accounts:i.accounts,chainId:i.chainId,connector:t});return{...e,current:s?e.current:t.uid,connections:r}}),l.push({accounts:i.accounts,chainId:i.chainId,connector:t}),c.push(r),s=!0)}return("reconnecting"===e.state.status||"connecting"===e.state.status)&&(s?e.setState(e=>({...e,status:"connected"})):e.setState(e=>({...e,connections:new Map,current:void 0,status:"disconnected"}))),n=!1,l}function a(e){let{children:t,config:r,initialState:n,reconnectOnMount:a=!0}=e,{onMount:s}=function(e,t){let{initialState:r,reconnectOnMount:i}=t;return r&&!e._internal.store.persist.hasHydrated()&&e.setState({...r,connections:i?r.connections:new Map,status:i?"reconnecting":"disconnected"}),{async onMount(){if(e._internal.ssr){await e._internal.store.persist.rehydrate();let t=e._internal.mipd?.getProviders().map(e._internal.connectors.providerDetailToConnector).map(e._internal.connectors.setup);e._internal.connectors.setState(e=>[...e,...t??[]])}i?o(e):e.storage&&e.setState(e=>({...e,connections:new Map}))}}}(r,{initialState:n,reconnectOnMount:a});r._internal.ssr||s();let l=(0,i.useRef)(!0);return(0,i.useEffect)(()=>{if(l.current&&r._internal.ssr)return s(),()=>{l.current=!1}},[]),t}let s=(0,i.createContext)(void 0);function l(e){let{children:t,config:r}=e;return(0,i.createElement)(a,e,(0,i.createElement)(s.Provider,{value:r},t))}}}]);
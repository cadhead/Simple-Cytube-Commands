parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"c1on":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){return e.replace(/&#39;/g,"'").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#40;/g,"(").replace(/&#41;/g,")").replace(/(<([^>]+)>)/gi,"").replace(/^[ \t]+/g,"").trim()};exports.default=e;
},{}],"gy9D":[function(require,module,exports) {
"use strict";function r(r,n){return c(r)||o(r,n)||e(r,n)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(r,t){if(r){if("string"==typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}}function n(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function o(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],n=!0,o=!1,c=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(a){o=!0,c=a}finally{try{n||null==u.return||u.return()}finally{if(o)throw c}}return e}}function c(r){if(Array.isArray(r))return r}function i(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})),e.push.apply(e,n)}return e}function u(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach(function(t){a(r,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))})}return r}function a(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var f=function(t){var e=u({},t);return Object.entries(e).reduce(function(t,e){var n=r(e,2),o=n[0],c=n[1];return"".concat(t).concat(o,":").concat(c,";")},"")};exports.default=f;
},{}],"yXEK":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(){function t(n){e(this,t),Object.assign(this,{text:"",handler:function(){}},n)}return n(t,[{key:"recieve",value:function(e,t){this.handler(e,t)}}]),t}(),o=r;exports.default=o;
},{}],"p2ir":[function(require,module,exports) {
"use strict";function e(e){return!e||!Number.isInteger(e[0])||!Number.isInteger(e[1])||e[0]>e[1]}function r(e,r){var t=e+Math.random()*(r+1-e);return Math.floor(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={text:"dice",handler:function(t,n){var a=t.map(function(e){var r=parseInt(e);return isNaN(r)?e:r});if(e(a))return n.bot.sendMessage("Использование: !dice <min> <max>");var o=r(a[0],a[1]);n.bot.sendMessage("".concat(n.username," бросает кости... Выпало ").concat(o))}};exports.default=t;
},{}],"UlEn":[function(require,module,exports) {
"use strict";function t(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=e(t))){var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,u=!0,i=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return u=t.done,t},e:function(t){i=!0,a=t},f:function(){try{u||null==o.return||o.return()}finally{if(i)throw a}}}}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r="https://yacdn.org/serve/",o=6,a=10,u=[o,a];function i(t){var e=t.user,n=t.video;window.CLIENT.name===e&&window.socket.emit("queue",{id:"https://2ch.hk".concat(n.path),title:n.fullname,pos:"end",type:"fi",temp:!0})}function c(t){return f(t).then(function(t){return t[l(0,t.length-1)]})}function f(e){var n=[];return fetch("".concat(r).concat(e)).then(function(t){return t.json()}).then(function(e){var r,o=t(e.threads[0].posts);try{for(o.s();!(r=o.n()).done;){var a,i=t(r.value.files);try{for(i.s();!(a=i.n()).done;){var c=a.value;u.includes(c.type)&&n.push(c)}}catch(f){i.e(f)}finally{i.f()}}}catch(f){o.e(f)}finally{o.f()}return n})}function l(t,e){var n=t+Math.random()*(e+1-t);return Math.floor(n)}var s={text:"webm",handler:function(t,e){if(!t[0])return e.bot.sendMessage("Использование: !webm <thread> [all].");var n=t[0].slice(0,t[0].search(".html"));n+=".json","all"===t[1]?f(n).then(function(t){var n=1e3,r=0,o=setTimeout(function a(){i({user:e.username,video:t[r]}),n=++r%10==0?3e3:1e3,clearTimeout(o),r<t.length&&(o=setTimeout(a,n))},n)}):c(n).then(function(t){i({user:e.username,video:t})}).catch(function(){e.bot.sendMessage("Ссылка всратая. Исправляй.")})}},d=s;exports.default=d;
},{}],"PaNo":[function(require,module,exports) {
"use strict";var e=a(require("./util/message-filter")),t=a(require("./util/stringifyStyles")),n=a(require("./Command")),s=a(require("./commands/dice")),i=a(require("./commands/webm"));function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function m(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var c=function(){function a(e){o(this,a),Object.assign(this,{name:"Bot",cmdFilterPrefix:"!",commands:[],messageStyles:{message:{display:"inline"},name:{color:"pink"}}},e),this.botSendMessage=!1,this.registerListeners(e.socket),this.registerDefaultCommnds(),this.applyBotMessageStyles(),console.log("Simple Cytube Bot successfuly initialzed!")}return m(a,[{key:"registerListeners",value:function(e){var t=this;e.on("chatMsg",function(e){t.botSendMessage&&(window.LASTCHAT.name="",t.botSendMessage=!1),e.msg[0]===t.cmdFilterPrefix&&t.commandDispatch(e)})}},{key:"registerDefaultCommnds",value:function(){this.commandRegister(s.default),this.commandRegister(i.default)}},{key:"applyBotMessageStyles",value:function(){var e=document.createElement("style"),n=(0,t.default)(this.messageStyles.message),s=(0,t.default)(this.messageStyles.name);e.innerHTML="/* Simple Cytube Bot Styles */ ",e.innerHTML+=".chat-msg-bot { ".concat(n," }"),e.innerHTML+=".bot-name { ".concat(s," }"),document.head.appendChild(e)}},{key:"commandRegister",value:function(e){this.commands.push(new n.default(e))}},{key:"commandDispatch",value:function(t){var n=this,s=(0,e.default)(t.msg).split(" "),i=s.shift().slice(1),a=s;this.commands.find(function(e){e.text===i&&(t.bot=n,e.recieve(a,t))})}},{key:"sendMessage",value:function(e){if(window.CLIENT.name===window.LASTCHAT.name){var t="[botmsg][botname]".concat(this.name,": [/botname]").concat(e,"[/botmsg]");this.socket.emit("chatMsg",{msg:t})}this.botSendMessage=!0}}]),a}();window.SimpleCytubeBot=c;
},{"./util/message-filter":"c1on","./util/stringifyStyles":"gy9D","./Command":"yXEK","./commands/dice":"p2ir","./commands/webm":"UlEn"}]},{},["PaNo"], null)
//# sourceMappingURL=simple-cytube-bot.js.map
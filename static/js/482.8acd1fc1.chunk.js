"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[482],{482:function(e,t,n){n.r(t),n.d(t,{default:function(){return fe}});var o=n(52),a=n(434),r=n(791),s=function(e){return e.contacts.contacts},i=function(e){return e.contacts.filter},c=function(e){return e.contacts.isLoading},u=n(413),l=n(885),d=n(942);function f(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=n(982);function p(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=p(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var v=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=p(e))&&(o&&(o+=" "),o+=t);return o},h=["theme","type"],g=["delay","staleId"],y=function(e){return"number"==typeof e&&!isNaN(e)},T=function(e){return"string"==typeof e},E=function(e){return"function"==typeof e},_=function(e){return T(e)||E(e)?e:null},b=function(e){return(0,r.isValidElement)(e)||T(e)||E(e)||y(e)};function C(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,s=e.collapse,i=void 0===s||s,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var o=e.children,s=e.position,c=e.preventExitTransition,l=e.done,d=e.nodeRef,f=e.isIn,p=a?"".concat(t,"--").concat(s):t,v=a?"".concat(n,"--").concat(s):n,h=(0,r.useRef)(0);return(0,r.useLayoutEffect)((function(){var e,t=d.current,n=p.split(" "),o=function e(o){var a;o.target===d.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==o.type&&(a=t.classList).remove.apply(a,(0,m.Z)(n)))};(e=t.classList).add.apply(e,(0,m.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,r.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,a=e.style;requestAnimationFrame((function(){a.minHeight="initial",a.height=o+"px",a.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};f||(c?t():(h.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[f]),r.createElement(r.Fragment,null,o)}}function x(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var I={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,m.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(a)}))}},N=function(e){var t=e.theme,n=e.type,o=f(e,h);return r.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},Z={info:function(e){return r.createElement(N,(0,u.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(N,(0,u.Z)({},e),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(N,(0,u.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(N,(0,u.Z)({},e),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function L(e){var t=(0,r.useReducer)((function(e){return e+1}),0),n=(0,l.Z)(t,2)[1],o=(0,r.useState)([]),a=(0,l.Z)(o,2),s=a[0],i=a[1],c=(0,r.useRef)(null),d=(0,r.useRef)(new Map).current,p=function(e){return-1!==s.indexOf(e)},v=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:p,getToast:function(e){return d.get(e)}}).current;function h(e){var t=e.containerId;!v.props.limit||t&&v.containerId!==t||(v.count-=v.queue.length,v.queue=[])}function C(e){i((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function N(){var e=v.queue.shift();O(e.toastContent,e.toastProps,e.staleId)}function L(e,t){var o=t.delay,a=t.staleId,s=f(t,g);if(b(e)&&!function(e){return!c.current||v.props.enableMultiContainer&&e.containerId!==v.props.containerId||d.has(e.toastId)&&null==e.updateId}(s)){var i=s.toastId,l=s.updateId,m=s.data,p=v.props,h=function(){return C(i)},L=null==l;L&&v.count++;var w,R,k=(0,u.Z)((0,u.Z)((0,u.Z)({},p),{},{style:p.toastStyle,key:v.toastKey++},s),{},{toastId:i,updateId:l,data:m,closeToast:h,isIn:!1,className:_(s.className||p.toastClassName),bodyClassName:_(s.bodyClassName||p.bodyClassName),progressClassName:_(s.progressClassName||p.progressClassName),autoClose:!s.isLoading&&(w=s.autoClose,R=p.autoClose,!1===w||y(w)&&w>0?w:R),deleteToast:function(){var e=x(d.get(i),"removed");d.delete(i),I.emit(4,e);var t=v.queue.length;if(v.count=null==i?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),t>0){var o=null==i?v.props.limit:1;if(1===t||1===o)v.displayedToast++,N();else{var a=o>t?t:o;v.displayedToast=a;for(var r=0;r<a;r++)N()}}else n()}});k.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,a=e.icon,s=null,i={theme:t,type:n};return!1===a||(E(a)?s=a(i):(0,r.isValidElement)(a)?s=(0,r.cloneElement)(a,i):T(a)||y(a)?s=a:o?s=Z.spinner():function(e){return e in Z}(n)&&(s=Z[n](i))),s}(k),E(s.onOpen)&&(k.onOpen=s.onOpen),E(s.onClose)&&(k.onClose=s.onClose),k.closeButton=p.closeButton,!1===s.closeButton||b(s.closeButton)?k.closeButton=s.closeButton:!0===s.closeButton&&(k.closeButton=!b(p.closeButton)||p.closeButton);var j=e;(0,r.isValidElement)(e)&&!T(e.type)?j=(0,r.cloneElement)(e,{closeToast:h,toastProps:k,data:m}):E(e)&&(j=e({closeToast:h,toastProps:k,data:m})),p.limit&&p.limit>0&&v.count>p.limit&&L?v.queue.push({toastContent:j,toastProps:k,staleId:a}):y(o)?setTimeout((function(){O(j,k,a)}),o):O(j,k,a)}}function O(e,t,n){var o=t.toastId;n&&d.delete(n);var a={content:e,props:t};d.set(o,a),i((function(e){return[].concat((0,m.Z)(e),[o]).filter((function(e){return e!==n}))})),I.emit(4,x(a,null==a.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return v.containerId=e.containerId,I.cancelEmit(3).on(0,L).on(1,(function(e){return c.current&&C(e)})).on(5,h).emit(2,v),function(){d.clear(),I.emit(3,v)}}),[]),(0,r.useEffect)((function(){v.props=e,v.isToastActive=p,v.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(d.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:c,isToastActive:p}}function O(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function w(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function R(e){var t=(0,r.useState)(!1),n=(0,l.Z)(t,2),o=n[0],a=n[1],s=(0,r.useState)(!1),i=(0,l.Z)(s,2),c=i[0],u=i[1],d=(0,r.useRef)(null),f=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,m=(0,r.useRef)(e),p=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function T(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",x),document.addEventListener("mouseup",I),document.addEventListener("touchmove",x),document.addEventListener("touchend",I);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=O(t.nativeEvent),f.y=w(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function _(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,a=n.bottom,r=n.left,s=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=r&&f.x<=s&&f.y>=o&&f.y<=a?C():b()}}function b(){a(!0)}function C(){a(!1)}function x(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&C(),f.x=O(t),f.y=w(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function I(){document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",I);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,r.useEffect)((function(){m.current=e})),(0,r.useEffect)((function(){return d.current&&d.current.addEventListener("d",b,{once:!0}),E(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),function(){var e=m.current;E(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}}),[]),(0,r.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",b),window.addEventListener("blur",C)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",C))}}),[e.pauseOnFocusLoss]);var N={onMouseDown:T,onTouchStart:T,onMouseUp:_,onTouchEnd:_};return p&&v&&(N.onMouseEnter=C,N.onMouseLeave=b),y&&(N.onClick=function(e){g&&g(e),f.canCloseOnClick&&h()}),{playToast:b,pauseToast:C,isRunning:o,preventExitTransition:c,toastRef:d,eventHandlers:N}}function k(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,a=void 0===o?"close":o;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function j(e){var t=e.delay,n=e.isRunning,o=e.closeToast,a=e.type,s=void 0===a?"default":a,i=e.hide,c=e.className,l=e.style,f=e.controlledProgress,m=e.progress,p=e.rtl,h=e.isIn,g=e.theme,y=i||f&&0===m,T=(0,u.Z)((0,u.Z)({},l),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});f&&(T.transform="scaleX(".concat(m,")"));var _=v("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(s),{"Toastify__progress-bar--rtl":p}),b=E(c)?c({rtl:p,type:s,defaultClassName:_}):v(_,c);return r.createElement("div",(0,d.Z)({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:b,style:T},f&&m>=1?"onTransitionEnd":"onAnimationEnd",f&&m<1?null:function(){h&&o()}))}var A=function(e){var t=R(e),n=t.isRunning,o=t.preventExitTransition,a=t.toastRef,s=t.eventHandlers,i=e.closeButton,c=e.children,l=e.autoClose,d=e.onClick,f=e.type,m=e.hideProgressBar,p=e.closeToast,h=e.transition,g=e.position,y=e.className,T=e.style,_=e.bodyClassName,b=e.bodyStyle,C=e.progressClassName,x=e.progressStyle,I=e.updateId,N=e.role,Z=e.progress,L=e.rtl,O=e.toastId,w=e.deleteToast,A=e.isIn,F=e.isLoading,M=e.iconOut,P=e.closeOnClick,B=e.theme,D=v("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(f),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":P}),z=E(y)?y({rtl:L,position:g,type:f,defaultClassName:D}):v(D,y),S=!!Z||!l,H={closeToast:p,type:f,theme:B},q=null;return!1===i||(q=E(i)?i(H):(0,r.isValidElement)(i)?(0,r.cloneElement)(i,H):k(H)),r.createElement(h,{isIn:A,done:w,position:g,preventExitTransition:o,nodeRef:a},r.createElement("div",(0,u.Z)((0,u.Z)({id:O,onClick:d,className:z},s),{},{style:T,ref:a}),r.createElement("div",(0,u.Z)((0,u.Z)({},A&&{role:N}),{},{className:E(_)?_({type:f}):v("Toastify__toast-body",_),style:b}),null!=M&&r.createElement("div",{className:v("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!F})},M),r.createElement("div",null,c)),q,r.createElement(j,(0,u.Z)((0,u.Z)({},I&&!S?{key:"pb-".concat(I)}:{}),{},{rtl:L,theme:B,delay:l,isRunning:n,isIn:A,closeToast:p,hide:m,type:f,style:x,className:C,controlledProgress:S,progress:Z||0}))))},F=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},M=C(F("bounce",!0)),P=(C(F("slide",!0)),C(F("zoom")),C(F("flip")),(0,r.forwardRef)((function(e,t){var n=L(e),o=n.getToastToRender,a=n.containerRef,s=n.isToastActive,i=e.className,c=e.style,l=e.rtl,d=e.containerId;function f(e){var t=v("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":l});return E(i)?i({position:e,rtl:l,defaultClassName:t}):v(t,_(i))}return(0,r.useEffect)((function(){t&&(t.current=a.current)}),[]),r.createElement("div",{ref:a,className:"Toastify",id:d},o((function(e,t){var n=t.length?(0,u.Z)({},c):(0,u.Z)((0,u.Z)({},c),{},{pointerEvents:"none"});return r.createElement("div",{className:f(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,a=e.props;return r.createElement(A,(0,u.Z)((0,u.Z)({},a),{},{isIn:s(a.toastId),style:(0,u.Z)((0,u.Z)({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(a.key)}),o)})))})))})));P.displayName="ToastContainer",P.defaultProps={position:"top-right",transition:M,autoClose:5e3,closeButton:k,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var B,D=new Map,z=[],S=1;function H(){return""+S++}function q(e){return e&&(T(e.toastId)||y(e.toastId))?e.toastId:H()}function Q(e,t){return D.size>0?I.emit(0,e,t):z.push({content:e,options:t}),t.toastId}function V(e,t){return(0,u.Z)((0,u.Z)({},t),{},{type:t&&t.type||e,toastId:q(t)})}function W(e){return function(t,n){return Q(t,V(e,n))}}function K(e,t){return Q(e,V("default",t))}K.loading=function(e,t){return Q(e,V("default",(0,u.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},K.promise=function(e,t,n){var o,a=t.pending,r=t.error,s=t.success;a&&(o=T(a)?K.loading(a,n):K.loading(a.render,(0,u.Z)((0,u.Z)({},n),a)));var i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,a){if(null!=t){var r=(0,u.Z)((0,u.Z)((0,u.Z)({type:e},i),n),{},{data:a}),s=T(t)?{render:t}:t;return o?K.update(o,(0,u.Z)((0,u.Z)({},r),s)):K(s.render,(0,u.Z)((0,u.Z)({},r),s)),a}K.dismiss(o)},l=E(e)?e():e;return l.then((function(e){return c("success",s,e)})).catch((function(e){return c("error",r,e)})),l},K.success=W("success"),K.info=W("info"),K.error=W("error"),K.warning=W("warning"),K.warn=K.warning,K.dark=function(e,t){return Q(e,V("default",(0,u.Z)({theme:"dark"},t)))},K.dismiss=function(e){D.size>0?I.emit(1,e):z=z.filter((function(t){return null!=e&&t.options.toastId!==e}))},K.clearWaitingQueue=function(e){return void 0===e&&(e={}),I.emit(5,e)},K.isActive=function(e){var t=!1;return D.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},K.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=D.get(n||B);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,a=n.content,r=(0,u.Z)((0,u.Z)((0,u.Z)({},o),t),{},{toastId:t.toastId||e,updateId:H()});r.toastId!==e&&(r.staleId=e);var s=r.render||a;delete r.render,Q(s,r)}}),0)},K.done=function(e){K.update(e,{progress:1})},K.onChange=function(e){return I.on(4,e),function(){I.off(4,e)}},K.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},K.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},I.on(2,(function(e){B=e.containerId||e,D.set(B,e),z.forEach((function(e){I.emit(0,e.content,e.options)})),z=[]})).on(3,(function(e){D.delete(e.containerId||e),0===D.size&&I.off(0).off(1).off(5)}));var Y="ContactForm_formFlex__Yl25J",G="ContactForm_labelText__9evFA",J="ContactForm_inputStyles__Dt7cJ",U="ContactForm_submitButton__KmKm9",X=n(184);function $(){var e=(0,r.useState)(""),t=(0,l.Z)(e,2),n=t[0],i=t[1],c=(0,r.useState)(""),d=(0,l.Z)(c,2),f=d[0],m=d[1],p=(0,a.v9)(s),v=(0,a.I0)(),h=function(e){if(function(e){var t=e.name;return p.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))}(e))return K.warn("".concat(e.name," is already in contacts."));K.success("Contact added"),v((0,o.uK)((0,u.Z)({},e)))&&i(""),m("")},g=function(e){var t=e.target,n=t.name,o=t.value;switch(n){case"name":i(o);break;case"number":m(o);break;default:return}};return(0,X.jsxs)("form",{className:Y,onSubmit:function(e){e.preventDefault(),h({name:n,number:f})},children:[(0,X.jsx)("label",{className:G,children:"Name"}),(0,X.jsx)("input",{className:J,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:g}),(0,X.jsxs)("div",{className:Y,children:[(0,X.jsx)("label",{className:G,children:"Number"}),(0,X.jsx)("input",{className:J,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:f,onChange:g})]}),(0,X.jsx)("button",{type:"submit",className:U,children:"Add contact"}),(0,X.jsx)(P,{autoClose:1e3,theme:"colored"})]})}var ee="ContactList_contactList__lfyFV",te="ContactList_labelText__xoa7V",ne="ContactList_deleteButton__rx7WF";function oe(){var e=(0,a.v9)(s),t=(0,a.v9)(i),n=(0,a.I0)(),r=function(){if(!t)return e;var n=t.toLowerCase(),o=e.filter((function(e){return e.name.toLowerCase().includes(n)}));return o}(),c=r.map((function(e){return(0,X.jsxs)("li",{className:ee,children:[e.name,": ",e.phone,(0,X.jsx)("button",{className:ne,onClick:function(){return t=e.id,n((0,o.zY)(t)),void K.info("Contact deleted");var t},children:"Delete"})]},e.id)}));return(0,X.jsx)("div",{children:(0,X.jsx)("ul",{className:te,children:0===c.length?"":c})})}var ae="Filter_filterFlex__34AHw",re="Filter_inputStyles__NDQTe",se=n(538);function ie(){var e=(0,a.v9)(i),t=(0,a.I0)();return(0,X.jsx)("div",{children:(0,X.jsxs)("label",{className:ae,children:["Find contacts by name:",(0,X.jsx)("input",{className:re,type:"text",name:"filter",value:e,onChange:function(e){var n=e.target.value;t((0,se.xO)(n))}})]})})}var ce="Wrapper_title__jaBrr";function ue(e){var t=e.title,n=e.children;return(0,X.jsxs)("div",{children:[(0,X.jsx)("h1",{className:ce,children:t}),n]})}var le="Phonebook_mainWrapper__D-Fap",de="Phonebook_title__mhwvS";function fe(){var e=(0,a.I0)(),t=(0,a.v9)(c);return(0,r.useEffect)((function(){e((0,o.yF)())}),[e]),(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(ue,{children:[(0,X.jsx)("div",{className:le,children:(0,X.jsx)($,{})}),(0,X.jsxs)("div",{children:[(0,X.jsx)("h2",{className:de,children:"Contacts"}),(0,X.jsx)(ie,{}),t&&(0,X.jsx)("h1",{children:"Loading..."}),(0,X.jsx)(oe,{})]})]})})}}}]);
//# sourceMappingURL=482.8acd1fc1.chunk.js.map
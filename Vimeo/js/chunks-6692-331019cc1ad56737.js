(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6692],{98780:function(e){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"recentPosts"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"3"},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"posts"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"Variable",name:{kind:"Name",value:"first"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeaturedPost"},directives:[]}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"FeaturedPost"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"excerpt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"featuredImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"node"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sourceUrl"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:282}};t.loc.source={body:"query recentPosts($first: Int = 3) {\n  posts(first: $first) {\n    nodes {\n      ...FeaturedPost\n    }\n  }\n}\n\nfragment FeaturedPost on Post {\n  title\n  slug\n  excerpt\n  featuredImage {\n    node {\n      sourceUrl\n    }\n  }\n  categories {\n    nodes {\n      name\n      slug\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var n={};function r(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}function a(e,t){var a={kind:e.kind,definitions:[r(e,t)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var i=n[t]||new Set,o=new Set,s=new Set;for(i.forEach(function(e){s.add(e)});s.size>0;){var l=s;s=new Set,l.forEach(function(e){o.has(e)||(o.add(e),(n[e]||new Set).forEach(function(e){s.add(e)}))})}return o.forEach(function(t){var n=r(e,t);n&&a.definitions.push(n)}),a}t.definitions.forEach(function(e){if(e.name){var t=new Set;(function e(t,n){if("FragmentSpread"===t.kind)n.add(t.name.value);else if("VariableDefinition"===t.kind){var r=t.type;"NamedType"===r.kind&&n.add(r.name.value)}t.selectionSet&&t.selectionSet.selections.forEach(function(t){e(t,n)}),t.variableDefinitions&&t.variableDefinitions.forEach(function(t){e(t,n)}),t.definitions&&t.definitions.forEach(function(t){e(t,n)})})(e,t),n[e.name.value]=t}}),e.exports=t,e.exports.recentPosts=a(t,"recentPosts"),e.exports.FeaturedPost=a(t,"FeaturedPost")},95039:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(45520),a=n(77644),i=n(82187),o=n.n(i);n(50959);var s=n(64890),l=n(50098),c=n(99176),d=n(89832),u=n(51852),m=n(11527),f=["title","semanticLevel","imageAsset","videoAsset","altText","tags","showPlayButton","sizeVariant","theme","cta","transparent","noProgressiveSrc","showSkeleton"];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function p(e){var t=e.title,n=e.semanticLevel,r=e.imageAsset,i=e.videoAsset,v=e.altText,p=e.tags,b=e.showPlayButton,h=e.sizeVariant,x=void 0===h?"Large":h,y=e.theme,w=void 0===y?"white":y,k=e.cta,j=e.transparent,S=e.noProgressiveSrc,O=e.showSkeleton,P=(0,a.Z)(e,f),L=(0,l.n)(r,i,v),N=o()("overflow-hidden rounded-standard w-full h-auto max-h-[12.063rem] aspect-16/9 relative shrink-0",{"md:max-h-[24.5rem] md:rounded-standard":"Large"===x,"md:w-[18rem] md:max-h-[10.125rem]":"Medium"===x,"md:w-[10.813rem] md:max-h-[6.125rem]":"Small"===x});return(0,m.jsxs)(d.Z,g(g({},P),{},{className:o()("text-card-content gap-3 flex flex-col relative ".concat(w),{"md:gap-8 md:flex-row md:rounded-l-3.5xl":"Large"!==x,"rounded-t-3.5xl md:rounded-t-3.5xl md:gap-6 ":"Large"===x,"bg-card-background":!j}),cta:k,children:[(r||i||O)&&(0,m.jsx)(s.Z,g(g({wrapperClasses:N,assetClasses:o()("w-full h-full object-cover object-center"),noProgressiveSrc:S,showSkeleton:O},L),{},{children:b&&(0,m.jsx)(u.Z,{additionalClasses:o()("absolute bottom-4 left-4 z-[2]",{"md:bottom-12 md:left-12":"Large"===x})})})),(0,m.jsx)(c.Z,g({cta:k,wrapperClasses:o()("flex flex-col gap-3 flex-grow"),titleClasses:o()("text-display-mobile-8 leading-[110%]",{"md:text-display-6":"Large"===x,"md:text-display-8 md:max-w-[23.5625rem]":"Medium"===x,"md:text-display-8 md:line-clamp-1 md:text-ellipsis md-max-w-[30.375rem]":"Small"===x,"md:text-ellipsis md:line-clamp-3":"Small"!==x}),tagsClasses:"black"===w?"dark-gray":void 0,titleSkeletonLines:"Small"===x?1:3,titleSkeletonClasses:"h-6",showSkeleton:O},{title:t,semanticLevel:n,tags:p}))]}))}},51852:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(45520),a=n(82187),i=n.n(a);n(50959);var o=n(7803),s=n(11527);function l(e){var t=e.additionalClasses;return(0,s.jsx)("div",{className:i()("button-icon-container overflow-hidden flex justify-start gap-8 px-7 py-2.5 rounded-xl w-20 bg-vimeo-blue [&>svg]:fill-black",(0,r.Z)({},t,t)),children:(0,s.jsx)(o.Z,{index:1,variant:"play",variantDisplay:"tertiary"})})}},44810:function(e,t,n){"use strict";n.d(t,{w:function(){return r}});var r=function(e){var t;return"string"!=typeof(null==e?void 0:e[0])&&e?null!=e&&null!==(t=e[0])&&void 0!==t&&t.__typename?null==e?void 0:e.reduce(function(e,t){return t.name&&e.push(t.name),e},[]):null==e?void 0:e.reduce(function(e,t){return Object.values(t).forEach(function(t){e.push(t)}),e},[]):e}},86628:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(82187),a=n.n(r),i=n(93698),o=n(56917),s=n(50959),l=n(85032),c=n(11527),d=function(e){var t=e.activeCardIdx,n=(0,s.useRef)(null);return(0,s.useEffect)(function(){if(n.current){var e=parseFloat(n.current.style.left)/1.75;n.current.style.width="".concat(Math.abs((t-e)*1.75)+1.5,"rem"),n.current.style.left="".concat(1.75*Math.min(t,e),"rem"),setTimeout(function(){n.current&&(n.current.style.left="".concat(1.75*t,"rem"),n.current.style.width="1.5rem")},l.J5)}},[t]),(0,c.jsx)("span",{className:"button-status-slider absolute bg-carousel-nav-button-active h-1 transition-all ease-in-out duration-1000",ref:n,style:{width:"1.5rem",left:"0"}})},u=function(e){var t=e.carouselId,n=e.cards,r=e.activeCardIdx,s=e.setActiveCardIdx,l=e.navSRPrefix,u=e.breakpoint,m=void 0===u?0:u,f=(0,o.Z)(),v=(0,i.Z)(),g=function(e){var t=e.target.getAttribute("data-index");t&&s(parseInt(t))};return(0,c.jsx)("div",{className:a()("carousel-nav flex w-auto justify-center mt-5 motion-reduce:hidden",{hidden:f||v,"md:hidden":768===m,"lg:hidden":1024===m}),children:(0,c.jsxs)("div",{className:"inline-flex gap-1 relative",children:[null==n?void 0:n.map(function(e,n){return(0,c.jsx)("button",{id:"".concat(t,"-nav-").concat(n),"aria-controls":"".concat(t,"-card-").concat(n),"data-index":n,onClick:g,className:a()("relative w-6 h-5 -my-2 bg-transparent border-none cursor-pointer",'after:bg-carousel-nav-button after:block after:content-[""] after:absolute after:top-2 after:left-0 after:w-full after:h-1'),children:(0,c.jsx)("span",{className:"sr-only",children:"".concat(l?l+" ":"").concat(n+1,": ").concat(e.cardTitle)})},"carousel-nav-".concat(n))}),(0,c.jsx)(d,{activeCardIdx:r})]})})}},36692:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(45520),a=n(77644),i=n(50959),o=n(95039),s=n(44810),l=n(88885);function c(e){return/\.(jpg|jpeg|png|webp|avif|gif)$/.test(e)}var d=n(35597),u=n(98780),m=n(82187),f=n.n(m),v=n(39619),g=n(81846),p=n(67088),b=n(5307),h=n(20106),x=n(11527);function y(e){var t=e.errorMessage;return(0,x.jsxs)("div",{className:"text-generic-card-error mt-6 px-[calc((1/25)*100%)] gap-4 flex max-w-130 md:flex-grow items-center md:justify-center md:h-full md:px-0",children:[(0,x.jsx)(h.default,{className:"w-12 h-12"}),t&&(0,x.jsx)("span",{children:t})]})}var w=n(43756),k=function(e,t){return"medium-with-feature"===t?0===e?"Large":"Medium":"medium"===t?"Medium":"small"==t?"Small":"video-carousel"===t?"Large":void 0};function j(e){var t=e.hasTabList,n=e.ariaTab,r=e.ariaTabPanel,a=e.selectedIndex,o=e.cardLimit,s=e.resourceCards,l=e.variant;return(0,x.jsx)("div",{className:"focus:outline focus:outline-card-focus-outline mt-5 w-[92%] md:w-[52%] md:mt-0",id:t?"".concat(r).concat(a):void 0,role:t?"tabpanel":void 0,"aria-labelledby":t?"".concat(n).concat(a):void 0,tabIndex:t?0:void 0,children:(0,x.jsx)("ul",{className:"flex flex-col gap-y-12",children:null==s?void 0:s.slice(0,o).map(function(e,t){var n=(0,i.useRef)(null),r=(0,w.Z)({ref:n,index:t}),a=(0,i.cloneElement)(e,{sizeVariant:k(t,l)});return(0,x.jsx)("li",{ref:n,className:f()("focus:outline focus:outline-card-focus-outline",{"md:animate-card md:motion-reduce:animate-none":!0===r,"md:opacity-0 md:motion-reduce:opacity-100":!1===r}),children:a},t)})})})}var S=n(54591),O=n.n(S),P=n(68269),L=n(86628),N=n(44050),C=n(46424),M=n.n(C);function I(e){var t,n,r=e.cards,a=e.carouselId,o=e.theme,s=e.cta,l=e.navSRPrefix,c=(0,i.useState)(0),d=c[0],u=c[1],m=(0,i.useRef)(null),v=null==r?void 0:r.map(function(e){return{cardTitle:e.props.title}}),g=a||"carousel-id-".concat(Math.random()),p=(0,N.Z)({carouselId:g,cardContainerRef:m,cards:v,activeCardIdx:d,setActiveCardIdx:u,mobileBreakpoint:1920}),b=p.handleMouseDown,h=p.handleMouseUp,y=p.handleMouseMove,j=p.handleMouseLeave,S=p.handleCardMouseEnter,C=p.handleTouchStart,I=p.handleTouchEnd,D=p.handleTouchMove,E=p.isDragging,Z=p.isCarouselActive,R=(null===(t=O()(M()))||void 0===t||null===(t=t.theme)||void 0===t||null===(t=t.screens)||void 0===t?void 0:t["2xl"])||"1440px",T=(null===(n=O()(M()))||void 0===n||null===(n=n.theme)||void 0===n||null===(n=n.screens)||void 0===n?void 0:n.xs)||"375px",F=function(e,t){Z&&(E?e.preventDefault():d!==t&&(e.preventDefault(),u(t)))};return(0,x.jsxs)("div",{className:"w-[100%] grid grid-cols-25 gap-y-10 md:gap-y-16",children:[(0,x.jsx)("ul",{className:"col-start-3 col-end-[26] flex gap-4 md:col-start-4 md:pl-4 [&>*:first-child]:ml-2 md:[&>*:first-child]:ml-0",ref:m,onMouseDown:b,onMouseUp:h,onMouseMove:y,onMouseLeave:j,onTouchStart:C,onTouchEnd:I,onTouchMove:D,children:null==r?void 0:r.map(function(e,t){var n=(0,i.cloneElement)(e,{sizeVariant:k(t,"video-carousel"),onClick:function(e){return F(e,t)},onDragStart:function(e){return e.preventDefault()},onMouseEnter:S}),r=(0,i.useRef)(null),a=(0,w.Z)({ref:r,index:t});return(0,x.jsx)("li",{ref:r,id:"".concat(g,"-card-").concat(t),style:{"--mobileWidth":T,"--desktopWidth":R},className:f()("focus:outline focus:outline-card-focus-outline grow-0 shrink-0 basis-[calc(clamp(var(--mobileWidth),_100vw,_var(--desktopWidth))*0.84)] md:basis-[calc(clamp(var(--mobileWidth),_100vw,_var(--desktopWidth))*0.44)] transition-all motion-reduce:transition-none ease-in-out [&_img]:scale-[1.04]",{"md:animate-card md:motion-reduce:animate-none":!0===a,"md:opacity-0 md:motion-reduce:opacity-100":!1===a}),"data-index":t,children:n},t)})}),(0,x.jsxs)("div",{className:"col-start-4 col-end-[-4] flex flex-col items-center justify-center [&>*]:mb-0 ".concat("black"===(void 0===o?"light-gray":o)?"white":"black"," md:flex-row md:justify-between"),children:[!!(r&&(null==r?void 0:r.length)>1)&&(0,x.jsx)(L.Z,{carouselId:g,cards:v,activeCardIdx:d,setActiveCardIdx:u,navSRPrefix:l}),s&&(0,x.jsx)(P.default,{label:s.label,href:s.url,theme:"light-gray",variant:"primary",bp:s.bp,bpWithContext:s.bpWithContext})]})]})}var D=function(e,t){return"video-carousel"===e?(null==t?void 0:t.length)||6:"medium-with-feature"===e?5:6},E=n(42055),Z=n(58488);function R(e){var t=e.theme,n=void 0===t?"white":t,r=e.variant,a=e.eyebrow,o=e.title,s=e.titleLink,l=e.semanticLevel,c=e.resourceCards,d=e.tabList,u=e.tabListAriaLabel,m=e.carouselId,h=e.cta,w=e.navSRPrefix,k=e.hideBottomPadding,S=e.loadingMessage,O=e.errorMessage,P=(0,i.useState)(0),L=P[0],N=P[1],C=(0,i.useRef)(null);(0,g.Z)({ref:C});var M="tabPanel-",R="tab-",T="black"===n?"black":"light-gray",F=d?(0,E.U)(d,M,R):void 0,A=D(r,c),W="video-carousel"!==r&&!!F&&!!(null==F?void 0:F.length);return(0,x.jsx)(p.Z,{additionalClasses:f()("pt-component",{"overflow-hidden":"video-carousel"===r,"pb-component":!(void 0!==k&&k)}),theme:n,element:"section",children:(0,x.jsxs)("div",{className:f()("flex flex-col items-center col-start-1 col-end-[-1]",{"md:flex-row md:items-start md:gap-[8%]":"video-carousel"!==r,"gap-12 md:gap-18":"video-carousel"===r}),children:[(0,x.jsxs)("div",{className:f()("grid grid-cols-25 h-min w-full gap-y-6",{"md:w-[35%] md:grid-cols-8 md:sticky md:top-24":"video-carousel"!==r}),children:[a&&"video-carousel"!==r&&(0,x.jsx)("span",{className:"text-card-content text-eyebrow flex col-start-2 col-end-[23] md:col-end-8",children:a}),o&&(0,x.jsx)(Z.Z,{className:f()("text-card-content flex col-start-2 col-end-[23]",{"md:col-end-[-1]":"video-carousel"!==r,"text-center md:col-start-6 md:col-end-[21]":"video-carousel"===r}),headerVariant:"video-carousel"===r?"display-4":"display-5",titleLink:s,semanticLevel:void 0===l?"h2":l,children:(0,v.Z)(o)}),W&&(0,x.jsx)(b.Z,{"aria-label":u||o,tabList:F,selectedIndex:L,setSelectedIndex:N,theme:T,additionalClasses:"col-start-2 col-end-[-2] md:col-end-9 mt-2 md:mt-10"})]}),!O&&S&&(0,x.jsx)("div",{role:"status","aria-live":"polite",className:"sr-only",children:S}),O?(0,x.jsx)(y,{errorMessage:O}):"video-carousel"===r&&c?(0,x.jsx)(I,{cta:h,carouselId:m,cards:c,navSRPrefix:w,theme:n}):(0,x.jsx)(j,{ariaTab:R,ariaTabPanel:M,cardLimit:A,resourceCards:c,variant:r,hasTabList:W,selectedIndex:L})]})})}var T=["theme","semanticLevel","numberOfRecentPosts","showLoadState","showErrorState","loadingInProgressMessage","loadingDoneMessage","errorMessage"];function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function A(e){var t,n=e.theme,i=e.semanticLevel,m=e.numberOfRecentPosts,f=void 0===m?3:m,v=e.showLoadState,g=e.showErrorState,p=e.loadingInProgressMessage,b=e.loadingDoneMessage,h=e.errorMessage,y=(0,a.Z)(e,T),w=(0,l.a)(u.recentPosts,{variables:{first:f}}),k=w.data,j=w.loading,S=w.error,O=(null==k||null===(t=k.posts)||void 0===t?void 0:t.nodes)||Array(f).fill(!0),P=j||void 0!==v&&v,L=S&&Object.keys(S).length>0||void 0!==g&&g,N=null==O?void 0:O.map(function(e,t){var r,a,l=null===(r=e.featuredImage)||void 0===r||null===(r=r.node)||void 0===r?void 0:r.sourceUrl,u="string"==typeof l&&c(l||""),m="string"==typeof l&&!c(l||"");return(0,x.jsx)(o.Z,{title:e.title,semanticLevel:(0,d.R)(i),imageAsset:u?l:void 0,videoAsset:m?l:void 0,noProgressiveSrc:!0,cta:{url:"/blog/post/".concat(e.slug),label:"",target:"_self"},theme:n,tags:(0,s.w)(null===(a=e.categories)||void 0===a?void 0:a.nodes),showSkeleton:P},t)});return(0,x.jsx)(R,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({resourceCards:N,theme:n,semanticLevel:i,errorMessage:L?h:void 0,loadingMessage:P?p:L?void 0:b},y))}var W=["cardTitle"];function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _(e){var t,n=e.tabList,r=e.tabListAriaLabel,i=e.eyebrow,l=e.title,c=e.titleLink,d=e.semanticLevel,u=e.resourceCards,m=e.resourceCardV3List,f=e.theme,v=e.hideBottomPadding,g=e.variant,p=e.builderBlock,b=e.carouselId,h=e.cta,y=e.navSRPrefix,w=e.showRecentPosts,k=void 0!==w&&w,j=e.numberOfRecentPosts,S=e.showLoadState,O=e.showErrorState,P=e.errorMessage,L=e.loadingInProgressMessage,N=e.loadingDoneMessage,C=(null==p?void 0:p.id)||b,M=D(g,u),I=(0,s.w)(n),E=m||(null==u||null===(t=u.slice(0,M))||void 0===t?void 0:t.map(function(e,t){var n=e.cardTitle,r=(0,a.Z)(e,W);return(0,x.jsx)(o.Z,V(V({},r),{},{cta:{url:e.cta.cardUrl,label:e.cta.cardLabel,target:e.cta.target,bp:e.cta.bp,bpWithContext:e.cta.bpWithContext},title:n,theme:f,tags:(0,s.w)(e.tags)}),t)})),Z={theme:f,hideBottomPadding:void 0!==v&&v,eyebrow:i,title:l,titleLink:c,semanticLevel:void 0===d?"h2":d,tabList:k?void 0:I,tabListAriaLabel:r,variant:g,carouselId:C,cta:h,navSRPrefix:y};return(0,x.jsx)(x.Fragment,{children:k?(0,x.jsx)(A,V(V({},Z),{},{numberOfRecentPosts:void 0===j?3:j,showErrorState:O,showLoadState:S,errorMessage:P,loadingInProgressMessage:L,loadingDoneMessage:N})):(0,x.jsx)(R,V(V({},Z),{},{resourceCards:E}))})}},42055:function(e,t,n){"use strict";n.d(t,{U:function(){return r}});var r=function(e,t,n){return null==e?void 0:e.map(function(e,r){return{label:e,"aria-controls":"".concat(t).concat(r),id:"".concat(n).concat(r)}})}},5307:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(45520),a=n(82187),i=n.n(a),o=n(50959),s=n(58159),l=n(13862),c=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,o.useState)(e),n=t[0],r=t[1],a=(0,o.useRef)(null),i=(0,l.w)().width;return(0,o.useEffect)(function(){if(a.current){var e=a.current;r((null==e?void 0:e.clientWidth)<(null==e?void 0:e.scrollWidth))}},[i]),{elementRef:a,isOverflowed:n,setIsOverflowed:r}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(0,o.useRef)(null),r=(0,o.useRef)([]);return(0,o.useEffect)(function(){var a=r.current;if(r.current&&n.current){var i=a[e],o=null==i?void 0:i.clientWidth,s=null==i?void 0:i.clientHeight,l=((null==i?void 0:i.offsetLeft)||0)-t;n.current.style.width="".concat(o,"px"),n.current.style.height="".concat(s,"px"),n.current.style.transform="translateX(".concat(l,"px)")}},[t,e]),{sliderRef:n,itemsRef:r}},u=n(77644),m=n(11527),f=["aria-selected","aria-controls","label","id","theme","onClick"];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var p=(0,o.forwardRef)(function(e,t){var n=e["aria-selected"],r=e["aria-controls"],a=e.label,o=e.id,s=e.theme,l=e.onClick,c=(0,u.Z)(e,f);return(0,m.jsx)("button",g(g({},c),{},{ref:t,id:o,className:i()("bg-transparent z-[2] border-none text-tab-content focus:outline-tab-focus-outline disabled:text-tab-disabled-content disabled:bg-tab-disabled-background text-body-3 font-medium hover:text-tab-hover-content p-3 rounded-md whitespace-nowrap ".concat(s),{"cursor-pointer":l}),role:"tab","aria-selected":n,"aria-controls":r,onClick:l,children:(0,m.jsx)("span",{children:a})}))}),b=n(40201),h=n(81846);function x(e){var t=e["aria-label"],n=e.theme,a=e.tabList,l=e.selectedIndex,u=e.setSelectedIndex,f=e.additionalClasses,v=(0,o.useState)(!1),g=v[0],x=v[1],y=d(l,12),w=y.sliderRef,k=y.itemsRef,j=c(),S=j.elementRef,O=j.isOverflowed,P=(0,h.Z)({ref:S}),L=(0,o.useRef)(null),N=(0,s.Z)(L,{threshold:0}),C=(null==N?void 0:N.isIntersecting)===void 0||(null==N?void 0:N.isIntersecting),M=function(e){x(!0),u(e)},I=function(e){x(!0),(0,b.J)({key:e.key,left:function(){return u(Math.max(l-1,0))},right:function(){return u(Math.min(l+1,a.length-1))},home:function(){return u(0)},end:function(){return u(a.length-1)},enter:function(){return M(parseInt(e.currentTarget.dataset.index))}})};return(0,o.useEffect)(function(){if(k.current&&g){var e=setTimeout(function(){var e;null===(e=k.current[l])||void 0===e||e.focus()},350);return function(){return clearTimeout(e)}}},[k,l,g]),(0,m.jsxs)("div",{className:i()("translate-z-0 flex gap-1 h-auto bg-tab-background md:bg-transparent md:bg-gradient-to-r md:from-tab-background md:from-90% rounded-xl py-[0.625rem] relative z-0 w-fit max-w-full overflow-x-auto overflow-y-hidden ".concat(n),(0,r.Z)({'md:to-transparent md:after:content-[""] md:after:block md:after:absolute md:after:right-0 md:after:top-0 md:after:w-12 md:after:h-full md:after:rounded-xl md:after:bg-transparent md:after:bg-gradient-to-r md:after:from-transparent md:after:from-[9%] md:after:z-30':O&&!C,"md:animate-card md:motion-reduce:animate-none":!0===P,"md:opacity-0 md:motion-reduce:opacity-100":!1===P,"md:after:to-white":O&&!C&&"light-gray"===n,"md:after:to-black":O&&!C&&"black"===n,"md:after:to-pearl-black":O&&!C&&"dark-gray"===n,"md:to-tab-background":!O||C},f,f)),style:{paddingLeft:"".concat(12,"px"),paddingRight:"".concat(12,"px")},role:"tablist","aria-label":t,ref:S,children:[O&&!C&&(0,m.jsx)("span",{className:"fixed z-[3] bg-gradient-to-r from-transparent from-80% to-tab-background w-full h-full rounded-xl pointer-events-none md:hidden"}),(0,m.jsx)("span",{ref:w,className:i()("bg-tab-selected-background z-[1] absolute h-full delay-30 duration-350 ease-in-out rounded-md",{"duration-350":!0})}),null==a?void 0:a.map(function(e,t){return(0,m.jsx)(p,{ref:function(e){return k.current[t]=e},theme:n,label:e.label,id:e.id,"aria-controls":e["aria-controls"],"aria-selected":l===t?"true":"false",tabIndex:l===t?0:-1,onClick:function(){return M(t)},onKeyDown:I,"data-index":t},t)}),(0,m.jsx)("div",{ref:L,className:"w-[1px]"})]})}},40201:function(e,t,n){"use strict";n.d(t,{J:function(){return r}});var r=function(e){var t=e.key,n=e.left,r=e.right,a=e.home,i=e.end,o=e.enter;switch(t){case"ArrowLeft":case"Left":n&&n();break;case"ArrowRight":case"Right":r&&r();break;case"Home":a&&a();break;case"End":i&&i();break;case"Enter":case" ":case"Spacebar":o&&o()}}}}]);
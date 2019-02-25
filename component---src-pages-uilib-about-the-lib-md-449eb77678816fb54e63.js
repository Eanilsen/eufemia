(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1008:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h}),n.d(t,"_frontmatter",function(){return d});n(13),n(14),n(19),n(20),n(23),n(12);var o=n(0),a=n(2),s=n.n(a),r=n(1),c=(n(76),n(203));function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=l(this,u(t).call(this,e))).layout=null,n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,s.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components;p(e,["components"]);return Object(o.c)(r.MDXTag,{name:"wrapper",components:t},Object(o.c)(r.MDXTag,{name:"h1",components:t},"About the Library"),Object(o.c)(r.MDXTag,{name:"p",components:t},Object(o.c)(r.MDXTag,{name:"strong",components:t,parentName:"p"},"Why does this UI Library exist?")),Object(o.c)(r.MDXTag,{name:"p",components:t},"Simply to unify and to maintain consistency of the most commonly used HTML Elements, custom components and patterns at DNB and to provide a platform for collaborative constant improvement. It's a part of the whole Design System."),Object(o.c)(r.MDXTag,{name:"p",components:t},"This part of the Design System is dedicated to ",Object(o.c)(r.MDXTag,{name:"strong",components:t,parentName:"p"},"application development"),"."),Object(o.c)(r.MDXTag,{name:"h2",components:t},"License"),Object(o.c)(r.MDXTag,{name:"p",components:t},"The ",Object(o.c)(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"dnb-ui-lib")," is for internal DNB development only. Also, make sure You act within the ",Object(o.c)(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/license"}},"license"),"."),Object(o.c)(r.MDXTag,{name:"hr",components:t}),Object(o.c)(c.default,null),Object(o.c)(r.MDXTag,{name:"hr",components:t}),Object(o.c)(r.MDXTag,{name:"h2",components:t},"Only HTML Elements? No."),Object(o.c)(r.MDXTag,{name:"p",components:t},"Designers and developers tend to think differently regarding the structure, layout and sizing of web interface elements. It is common for designers to design grids, fixed font sizes, widths etc."),Object(o.c)(r.MDXTag,{name:"p",components:t},"Developers tend to think more in terms of re-usability, modularity, flexibility and scaleability of their elements.\nThis library aims to bridge and merge these two ways of thinking by applying naming conventions, spatial rules and single sources of truth for the most common resources. Design resources are designed based on how they behave in the browser. This means that coded designs will more likely resemble the handovers from designers."),Object(o.c)(r.MDXTag,{name:"h2",components:t},"The Library ..."),Object(o.c)(r.MDXTag,{name:"ul",components:t},Object(o.c)(r.MDXTag,{name:"li",components:t,parentName:"ul"},"contains ready to use HTML elements"),Object(o.c)(r.MDXTag,{name:"li",components:t,parentName:"ul"},"is built on top of the DNB Eufemia Design System principles"),Object(o.c)(r.MDXTag,{name:"li",components:t,parentName:"ul"},"includes DNB brand styles, fonts and icons"),Object(o.c)(r.MDXTag,{name:"li",components:t,parentName:"ul"},"incorporates accessibility compliancy (",Object(o.c)(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.w3.org/TR/WCAG20-TECHS/aria"}},"ARIA Techniques"),")")),Object(o.c)(r.MDXTag,{name:"h3",components:t},"Developers - what to expect :"),Object(o.c)(r.MDXTag,{name:"ol",components:t},Object(o.c)(r.MDXTag,{name:"li",components:t,parentName:"ol"},"a theme-able resource of HTML elements to use in existing and new applications"),Object(o.c)(r.MDXTag,{name:"li",components:t,parentName:"ol"},"an independent layer in applications, where a build in versioning system takes care of future changes"),Object(o.c)(r.MDXTag,{name:"li",components:t,parentName:"ol"},"HTML elements are made WCAG 2.1 compliant and a checklist of values DNB wish to embrace in future application development"),Object(o.c)(r.MDXTag,{name:"li",components:t,parentName:"ol"},"the most commonly used Icons as a part of the bundle"),Object(o.c)(r.MDXTag,{name:"li",components:t,parentName:"ol"},"tested and widely compatible HTML elements where the code is automatically verified, formatted and tested using the latest tools such as Axe, StyleLint, ESLint and Prettier. All the HTML elements are build upon integration tests for internal states, static tests and snapshot tests to make future changes more obvious to the stakeholders")),Object(o.c)(r.MDXTag,{name:"h3",components:t},"Collaboration"),Object(o.c)(r.MDXTag,{name:"p",components:t},"Collaboration between design and development is easy through use of NPM and Github. Figma's API integration opens the possibilities for collaboration between cross disciplinary teams (developer-developer, developer-designer)."),Object(o.c)(r.MDXTag,{name:"h2",components:t},"Technical aspects"),Object(o.c)(r.MDXTag,{name:"p",components:t},"The HTML Elements are built based on ",Object(o.c)(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://reactjs.org/"}},"React"),".\nThe reason for this is that React offers a robust library of tools to build deep, well tested and reusable elements."),Object(o.c)(r.MDXTag,{name:"h3",components:t},"What about other Frontend Frameworks?"),Object(o.c)(r.MDXTag,{name:"p",components:t},"To make the HTML Elements work in other environments like Vue or Angular, You can use the built-in Web Components support. ",Object(o.c)(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://vuejs.org/"}},"VueJS")," has also integrated direct binding by using ",Object(o.c)(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/akxcv/vuera"}},"vuera"),"."),Object(o.c)(r.MDXTag,{name:"p",components:t},"The Library is hosted on ",Object(o.c)(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"npmjs.com"}},"NPM"),", so versioning and openness is secure."),Object(o.c)(r.MDXTag,{name:"h3",components:t},"Production ready"),Object(o.c)(r.MDXTag,{name:"p",components:t},"All code examples are shown as ES6 (",Object(o.c)(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/ECMAScript"}},"ECMAScript 2015"),"). But the production ",Object(o.c)(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"dnb-ui-lib")," is actually compiled down to ES5 (5th Edition). So your product is using production ready code."),Object(o.c)(r.MDXTag,{name:"h3",components:t},"Components & Patterns"),Object(o.c)(r.MDXTag,{name:"p",components:t},"The HTML Elements UI Library comes with two different parts. The first and most common is the ",Object(o.c)(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/uilib/components/"}},"Components Library"),".\nThese are standard, out-of-the box, ready to use components."),Object(o.c)(r.MDXTag,{name:"p",components:t},"However, there are many cases whereby the standard component needs to be customised or adjusted to suit the needs of the user. This results in a new component. We call these ",Object(o.c)(r.MDXTag,{name:"em",components:t,parentName:"p"},"patterns"),". Patterns are helpful guides as to how a component ",Object(o.c)(r.MDXTag,{name:"em",components:t,parentName:"p"},"might")," be or behave. A typical example is a footer on a web page. Eufemia will not describe how every type of footer should be designed. Instead, it describes the function of a footer ",Object(o.c)(r.MDXTag,{name:"em",components:t,parentName:"p"},"in general")," with some aesthetic and content guidelines."),Object(o.c)(r.MDXTag,{name:"p",components:t},"Patterns can be used as a start point for both developer and designer."),Object(o.c)(r.MDXTag,{name:"p",components:t},"Check out the ",Object(o.c)(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/uilib/patterns/"}},"available Patterns Library"),"."),Object(o.c)(r.MDXTag,{name:"h2",components:t},"Where do I go next?"),Object(o.c)(r.MDXTag,{name:"p",components:t},"Check out ",Object(o.c)(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/uilib/getting-started/"}},"Getting Started")))}}])&&m(n.prototype,a),i&&m(n,i),t}();h.isMDXComponent=!0;var d={title:"About the Library",icon:"about_the_lib",draft:!1,order:1}}}]);
//# sourceMappingURL=component---src-pages-uilib-about-the-lib-md-449eb77678816fb54e63.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(109)),o={id:"interpreter",title:"Interpreter"},c={unversionedId:"interpreter",id:"interpreter",isDocsHomePage:!1,title:"Interpreter",description:"The Joern shell can be used as a script interpreter, that is, in non-interactive mode.",source:"@site/docs/interpreter.mdx",slug:"/interpreter",permalink:"/interpreter",editUrl:"https://github.com/joernio/website/edit/master/docs.joern.io/docs/interpreter.mdx",version:"current",sidebar:"docs",previous:{title:"Interactive Shell",permalink:"/shell"},next:{title:"Joern Scan",permalink:"/scan"}},p=[{value:"Basic Usage",id:"basic-usage",children:[]},{value:"Importing Additional Scripts",id:"importing-additional-scripts",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Joern shell can be used as a script interpreter, that is, in non-interactive mode."),Object(i.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(i.b)("p",null,"Joern can be used in non-interactive mode. You would execute commands and operations via a script that you specify as an argument instead of manually typing them after the Joern prompt. Joern runs the commands in your script and exits when done."),Object(i.b)("p",null,"For example, let's say you have a file named ",Object(i.b)("inlineCode",{parentName:"p"},"test.sc")," with the following contents:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@main def exec(cpgFile: String, outFile: String) = {\n   loadCpg(cpgFile)\n   cpg.method.name.l |> outFile\n}\n")),Object(i.b)("p",null,"You can include Scala code in ",Object(i.b)("inlineCode",{parentName:"p"},"test.sc")," and use the ",Object(i.b)("inlineCode",{parentName:"p"},"|>")," operator to pipe output into files. The script is then run as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"./joern --script test.sc --params cpgFile=/src.path.zip,outFile=output.log\n")),Object(i.b)("h2",{id:"importing-additional-scripts"},"Importing Additional Scripts"),Object(i.b)("p",null,"If your script depends on code from one or more additional scripts, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"--import")," parameter, which accepts a comma-separated list of input scripts:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"./joern --script test.sc --params cpgFile=/src.path.zip,outFile=output.log --import scripts/hello.sc\n")))}l.isMDXComponent=!0},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
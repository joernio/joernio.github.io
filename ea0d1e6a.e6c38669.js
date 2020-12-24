(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{170:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(10),a=(r(0),r(179)),c={id:"help-directive",title:"Help Directive"},i={id:"cpgql/help-directive",title:"Help Directive",description:"The Help Directive is a CPGQL Directive which returns textual descriptions of other directives.",source:"@site/docs/cpgql/help-directive.mdx",permalink:"/cpgql/help-directive",sidebar:"docs",previous:{title:"Augmentation Directives",permalink:"/cpgql/augmentation-directives"},next:{title:"Calls",permalink:"/cpgql/calls"}},p=[],l={rightToc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Help Directive is a CPGQL Directive which returns textual descriptions of other directives."),Object(a.b)("p",null,"If it is executed by itself, it shows an overview of ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/joern/top-level-commands"}),"Top-Level Commands"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'joern> help \nres0: Helper = Welcome to the interactive help system. Below you find a table of all available\ntop-level commands. To get more detailed help on a specific command, just type\n\n`help.<command>`.\n\nTry `help.importCode` to begin with.\n_______________________________________________________________________________\n command     | description                         | example                  |\n==============================================================================|\n close       | Close project by name               | close(projectName)       |\n cpg         | CPG of the active project           | cpg.method.l             |\n delete      | Close and remove project from disk  | delete(projectName)      |\n importCode  | Create new project from code        | importCode("example.jar")|\n importCpg   | Create new project from existing CPG| importCpg("cpg.bin.zip") |\n open        | Open project                        | open("projectName")      |\n project     | Currently active project            | project                  |\n reloadPolicy| reload policy                       | reloadPolicy             |\n run         | Run analyzer on active CPG          | run.securityprofile      |\n save        | Write all changes to disk           | save                     |\n undo        | undo effects of analyzer            | undo                     |\n workspace   | Access to the workspace directory   | workspace                |\n')),Object(a.b)("p",null,"If executed with a ",Object(a.b)("em",{parentName:"p"},"Top-Level Command")," ",Object(a.b)("em",{parentName:"p"},"CPGQL Component")," prefix, it describe that ",Object(a.b)("em",{parentName:"p"},"Top-Level Command"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'joern> help.save \nres0: String = """\nClose and reopen all loaded CPGs. This ensures that changes have been flushed to\ndisk.\n\nReturns list of affected projects"""\n')))}s.isMDXComponent=!0},179:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return _}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,_=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?o.a.createElement(_,i({ref:t},l,{components:r})):o.a.createElement(_,i({ref:t},l))}));function _(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
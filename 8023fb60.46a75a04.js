(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),l=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var b=l.a.createContext({}),s=function(e){var t=l.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,u=p["".concat(r,".").concat(m)]||p[m]||d[m]||i;return a?l.a.createElement(u,c(c({ref:t},b),{},{components:a})):l.a.createElement(u,c({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var b=2;b<i;b++)r[b]=a[b];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(3),l=a(7),i=(a(0),a(103)),r={id:"calls",title:"Calls"},c={unversionedId:"cpgql/calls",id:"cpgql/calls",isDocsHomePage:!1,title:"Calls",description:"This is a collection of traversal steps that are associated with call-sites in a graph and the relationships with methods. These allow us to identify and list all the call-sites, their incoming and outgoing edges, methods linked to those call sites, methods that call those call-sites etc. The call traversals can be combined with other steps such as filters to pinpoint specific cases during analysis. For example, it is possible to quickly identify how many times a given method has been called or if it is called recursively. We can also use it to find locations of vulnerable functions in the complete codebase and understand if they are called under certain conditions (if/else blocks) and are called from within certain functions. For example, we can answer the follwing question with a combination of Method and Call traversals:",source:"@site/docs/cpgql/calls.mdx",slug:"/cpgql/calls",permalink:"/cpgql/calls",editUrl:"https://github.com/joernio/website/docs.joern.io/edit/master/website/docs/cpgql/calls.mdx",version:"current",sidebar:"docs",previous:{title:"Help Directive",permalink:"/cpgql/help-directive"},next:{title:"Upgrade guides",permalink:"/upgrade-guides"}},o=[{value:"Traversal Steps",id:"traversal-steps",children:[]},{value:"Common Usage Patterns",id:"common-usage-patterns",children:[]},{value:"Sample Queries",id:"sample-queries",children:[]}],b={toc:o};function s(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This is a collection of traversal steps that are associated with call-sites in a graph and the relationships with methods. These allow us to identify and list all the call-sites, their incoming and outgoing edges, methods linked to those call sites, methods that call those call-sites etc. The call traversals can be combined with other steps such as filters to pinpoint specific cases during analysis. For example, it is possible to quickly identify how many times a given method has been called or if it is called recursively. We can also use it to find locations of vulnerable functions in the complete codebase and understand if they are called under certain conditions (if/else blocks) and are called from within certain functions. For example, we can answer the follwing question with a combination of Method and Call traversals:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"Identify if a sanitization function is called inside a HTTP route handler which has the HTTP request as one of its arguments"))),Object(i.b)("p",null,"It is important to note that arithmetic and logic operations (",Object(i.b)("inlineCode",{parentName:"p"},"+"),", ",Object(i.b)("inlineCode",{parentName:"p"},"-"),", ",Object(i.b)("inlineCode",{parentName:"p"},"*"),", ",Object(i.b)("inlineCode",{parentName:"p"},"/"),", ",Object(i.b)("inlineCode",{parentName:"p"},">"),", ",Object(i.b)("inlineCode",{parentName:"p"},"<"),", ",Object(i.b)("inlineCode",{parentName:"p"},"="),", ",Object(i.b)("inlineCode",{parentName:"p"},"!="),") are also call-sites themselves and are named as ",Object(i.b)("inlineCode",{parentName:"p"},"<operator>")," since these operators are identified as methods in the graph. For example, the following statement has 3 call-sites:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"x = a + foo(b);\n")),Object(i.b)("p",null,"Here the callsites are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<operator>.addition")," with arguments as ",Object(i.b)("inlineCode",{parentName:"li"},"a")," and ",Object(i.b)("inlineCode",{parentName:"li"},"foo(b)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<operator>.assignment")," with arguments as ",Object(i.b)("inlineCode",{parentName:"li"},"x")," and return of ",Object(i.b)("inlineCode",{parentName:"li"},"a + foo(b)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"foo")," with argument ",Object(i.b)("inlineCode",{parentName:"li"},"b"))),Object(i.b)("p",null,"In a similar manner, functional programming constructs such as closures, arrow functions (in Javascript) and lambdas also have their own call-site representations. For example, in Javascript, an arrow function called within a function is appended with a ",Object(i.b)("inlineCode",{parentName:"p"},":=>")," in its name and hence can be searched similarly. Here is a CPGQL query that finds a 2nd level arrow function within in a Javascript function having ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," in its name and then lists it call-sites:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'joern> cpg.method.name(".*foo.*::=>:=>").callOut.code.l\n')),Object(i.b)("h3",{id:"traversal-steps"},"Traversal Steps"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Traversals"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},".call")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"All call-sites in the code"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"cpg.call.name.l"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},".callOut")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Return the outgoing call-sites for a given method"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},'cpg.method.name("main").callOut.name.l'))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},".callIn")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Return the call-sites of a given method"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},'cpg.method.name("exit").callIn.code.l'))))),Object(i.b)("h3",{id:"common-usage-patterns"},"Common Usage Patterns"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Use ",Object(i.b)("inlineCode",{parentName:"p"},"cpg.call.<TAB>")," to explore more available options"))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Usage"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Code string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"cpg.call.code.l"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Call name"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"cpg.call.name.l"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Location"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},'cpg.call.name("foo").location.l'))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Calling method"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},'cpg.call.name("foo").method.l'))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Argument"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},'cpg.call.name("foo").argument.code.l'))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Filter"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},'cpg.call.filter(_.argument.code("42")).name.l'))))),Object(i.b)("h3",{id:"sample-queries"},"Sample Queries"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"List exact code strings of all the call-sites in the graph:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'joern> cpg.call.code.l\n\nres45: List[String] = List(\n  "exit(0)",\n  "printf(\\"What is the meaning of life?\\\\n\\")",\n  "exit(42)",\n  "fprintf(stderr, \\"It depends!\\\\n\\")",\n...\n)\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Identify if an ",Object(i.b)("inlineCode",{parentName:"li"},"exit()")," call-site is called from within a conditional block (",Object(i.b)("inlineCode",{parentName:"li"},"if { }"),") with a given condition. This can be done via first identifying a call named ",Object(i.b)("inlineCode",{parentName:"li"},"exit")," and then traversing the AST upwards (via ",Object(i.b)("inlineCode",{parentName:"li"},"astParent"),") until a ",Object(i.b)("inlineCode",{parentName:"li"},"if")," control structure is encountered. This only yields the specific ",Object(i.b)("inlineCode",{parentName:"li"},"exit")," which is withing the ",Object(i.b)("inlineCode",{parentName:"li"},"if")," block :")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'joern> cpg.call.name("exit").where(_.repeat(_.astParent)(_.until(_.isControlStructure.parserTypeName("If.*")))).code.l \n\nres69: List[String] = List("exit(42)")\n\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Identify all the call-sites of ",Object(i.b)("inlineCode",{parentName:"li"},"exit()")," function in code, along with line-number and filename:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'joern> cpg.call.name("exit").map( c=> (c.name, c.location.lineNumber.get, c.location.filename)).l \n\nres56: List[(String, Integer, String)] = List(\n  ("exit", 11, "/tmp/x42/c/X42.c"),\n  ("exit", 8, "/tmp/x42/c/X42.c")\n)\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"List the arguments of all the ",Object(i.b)("inlineCode",{parentName:"li"},"exit()")," functions called in the code:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'joern> cpg.call.name("exit").map( c=> (c.name, c.start.argument.code.l, c.location.lineNumber.get)).l \n\nres59: List[(String, List[String], Integer)] = List(\n  ("exit", List("0"), 11),\n  ("exit", List("42"), 8)\n)\n')))}s.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,u=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return a?r.a.createElement(u,o(o({ref:t},b),{},{components:a})):r.a.createElement(u,o({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<i;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(103)),l={id:"upgrade-guides",title:"Upgrade guides",joern_shared:!0},o={unversionedId:"upgrade-guides",id:"upgrade-guides",isDocsHomePage:!1,title:"Upgrade guides",description:"1.1.1: OverflowDb Traversals",source:"@site/docs/upgrade-guides.mdx",slug:"/upgrade-guides",permalink:"/upgrade-guides",editUrl:"https://github.com/joernio/website/docs.joern.io/edit/master/website/docs/upgrade-guides.mdx",version:"current",sidebar:"docs",previous:{title:"Calls",permalink:"/cpgql/calls"}},c=[{value:"1.1.1: OverflowDb Traversals",id:"111-overflowdb-traversals",children:[{value:"Bleeding edge / power users only:",id:"bleeding-edge--power-users-only",children:[]}]}],b={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"111-overflowdb-traversals"},"1.1.1: OverflowDb Traversals"),Object(i.b)("p",null,"This release introduces a major rearchitecture of the cpg query language (CPGQL). Most changes happened under the hood, however there are a few changes that are user facing. The migration should be straightforward, and in any case we're here to help."),Object(i.b)("p",null,"Background: CPGQL was previously based on the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://tinkerpop.apache.org/gremlin.html"}),"Gremlin graph traversal language")," (accessible via ",Object(i.b)("inlineCode",{parentName:"p"},".raw"),"), and is now based on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ShiftLeftSecurity/overflowdb/blob/master/traversal/src/main/scala/overflowdb/traversal/Traversal.scala"}),"OverflowDb Traversal"),". The main drivers behind this change are: better performance, less complexity and fewer dependencies. OverflowDb Traversal is a Scala collection with additional graph steps, which means we now inherit many useful steps from the rich Scala standard collection library, where previously convertions between Traversal and Scala collections were needed.\nAt the same time, Traversal offers largely the same steps and semantics as its TinkerPop predecessor. "),Object(i.b)("p",null,"Here are the most important new parts - from our experience the swap of ",Object(i.b)("inlineCode",{parentName:"p"},"filter")," and ",Object(i.b)("inlineCode",{parentName:"p"},"where")," accounts for 90% of user-facing changes:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"filter(A => Boolean)"),": just like any other Scala collection, filter now simply takes a predicate (it used to take a Traversal). ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"where(trav: Traversal[A] => Traversal[_])"),": preserves elements if the provided traversal has at least one result. This is what filter used to be.\n",Object(i.b)("em",{parentName:"p"},"Effectively, ",Object(i.b)("inlineCode",{parentName:"em"},"filter")," and ",Object(i.b)("inlineCode",{parentName:"em"},"where")," are swapped"),". ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"RIP ",Object(i.b)("inlineCode",{parentName:"p"},"filterOnEnd")," - this is now simply ",Object(i.b)("inlineCode",{parentName:"p"},"filter"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"repeat")," now has a builder DSL to configure it's behaviour, which is more specific and easier to understand than tinkerpop's api, which relied on the order of modulators in the traversal.\nFor example, in tinkerpop ",Object(i.b)("inlineCode",{parentName:"p"},".emit.repeat(Traversal)"),' means "emit everything", while ',Object(i.b)("inlineCode",{parentName:"p"},".repeat(Traversal).emit"),' means "emit all but the first element".\nIn OverflowDb Traversal this behaviour is more explicit: ',Object(i.b)("inlineCode",{parentName:"p"},".repeat(Traversal)(_.emit)")," and ",Object(i.b)("inlineCode",{parentName:"p"},".repeat(Traversal)(_.emitAllButFirst)"),"."))),Object(i.b)("p",null,"Some more examples for the migration: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".repeat(x).until(y)")," -> ",Object(i.b)("inlineCode",{parentName:"li"},".repeat(x)(_.until(y))")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".emit.repeat(x)")," -> ",Object(i.b)("inlineCode",{parentName:"li"},".repeat(x)(_.emit)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".repeat(x).emit")," -> ",Object(i.b)("inlineCode",{parentName:"li"},".repeat(x)(_.emitAllButFirst)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".emit.repeat(x).times(2)")," -> ",Object(i.b)("inlineCode",{parentName:"li"},".repeat(x)(_.emit.times(2))"))),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"repeat")," uses depth first search (DFS) by default and can be configured to use breadth first search (BFS) instead.\nTinkerpop has a long standing ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apache/tinkerpop/pull/838"}),"issue")," that it claims to use DFS but actually uses BFS, and also cannot be configured to use one or the other. ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},".start")," step only exists for ",Object(i.b)("inlineCode",{parentName:"p"},"Node")," and ",Object(i.b)("inlineCode",{parentName:"p"},"NewNode"),", not for other collections any more. Instead, use the standard scala collection mechanism ",Object(i.b)("inlineCode",{parentName:"p"},".to(Traversal)"),":"))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// still works - nothing changed:\nval someMethod = cpg.method.head\nsomeMethod.start.parameter //Traversal[MethodParameterIn]\n\n// using `.to(Traversal)` - standard scala collection mechanism\nval methodList: cpg.method.l\nmethodList.to(Traversal) //Traversal[Method]\n")),Object(i.b)("ol",{start:7},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},".clone")," doesn't exist any more - note that Traversals typically have Iterator semantics, i.e. they are consumed during iteration:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'val source = cpg.identifier.name("foo")\nval sink = cpg.call.name("bar")\nsink.reachableByFlows(source).l  //contains flows (if any)\nsink.reachableByFlows(source).l  //always empty - both source and sink Traversals have been consumed!\n')),Object(i.b)("p",null,"If you want to execute your traversals multiple times, simply define them as a function (",Object(i.b)("inlineCode",{parentName:"p"},"def"),") rather than a value (",Object(i.b)("inlineCode",{parentName:"p"},"val"),"):"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'def source = cpg.identifier.name("foo")\ndef sink = cpg.call.name("bar")\nsink.reachableByFlows(source).l  //contains flows (if any)\nsink.reachableByFlows(source).l  //same result: also contains flows (if any)\n')),Object(i.b)("p",null,"Please let us know if you need help with your migration, either by opening an issue or asking on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://gitter.im/joern-code-analyzer/community"}),"gitter"),"."),Object(i.b)("h3",{id:"bleeding-edge--power-users-only"},"Bleeding edge / power users only:"),Object(i.b)("p",null,"8) If you used the underlying tinkerpop api and OverflowDb types (e.g. via ",Object(i.b)("inlineCode",{parentName:"p"},".raw"),"), your scripts may be subject to additional changes, due to the removal of the Tinkerpop dependency and renames in OverflowDb types:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Steps")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"Traversal")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NodeSteps")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"Traversal")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NewNodeSteps")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"Traversal")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"OdbGraph")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"Graph")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"OdbNode")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"NodeDb")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"OdbEdge")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"Edge")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"id2")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"id")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"graph2")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"graph")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"addEdge2")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"addEdge")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"setProperty2")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"setProperty")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NodeKeysOdb")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"NodeKeys")),Object(i.b)("li",{parentName:"ul"},"all Tinkerpop types are gone: ",Object(i.b)("inlineCode",{parentName:"li"},"Vertex"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Edge"),", ",Object(i.b)("inlineCode",{parentName:"li"},"VertexProperty"),", ",Object(i.b)("inlineCode",{parentName:"li"},"ScalaGraph"),", ",Object(i.b)("inlineCode",{parentName:"li"},"GremlinScala"),", ...")))}p.isMDXComponent=!0}}]);
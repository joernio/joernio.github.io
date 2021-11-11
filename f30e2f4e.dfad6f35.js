(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{101:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return p}));var a=t(3),o=t(7),n=(t(0),t(110)),i={id:"glossary",title:"Glossary"},l={unversionedId:"glossary",id:"glossary",isDocsHomePage:!1,title:"Glossary",description:"Writing is nature's way of telling us how lousy our thinking is.Leslie Lamport",source:"@site/docs/glossary.mdx",slug:"/glossary",permalink:"/glossary",editUrl:"https://github.com/joernio/website/edit/master/docs.joern.io/docs/glossary.mdx",version:"current",sidebar:"docs",previous:{title:"Common Issues",permalink:"/common-issues"},next:{title:"Hello, LLVM World",permalink:"/llvm2cpg/hello-llvm"}},c=[{value:"Augmentation",id:"augmentation",children:[]},{value:"Augmentation Directive",id:"augmentation-directive",children:[]},{value:"Call Site",id:"call-site",children:[]},{value:"Code Property Graph",id:"code-property-graph",children:[]},{value:"Code Property Graph Overlay",id:"code-property-graph-overlay",children:[]},{value:"Code Property Graph Query Language",id:"code-property-graph-query-language",children:[]},{value:"Complex Step",id:"complex-step",children:[]},{value:"Core Step",id:"core-step",children:[]},{value:"Dataflow",id:"dataflow",children:[]},{value:"Dataflow Sink",id:"dataflow-sink",children:[]},{value:"Dataflow Source",id:"dataflow-source",children:[]},{value:"Dataflow Step",id:"dataflow-step",children:[]},{value:"Dataflow Overlay",id:"dataflow-overlay",children:[]},{value:"Dependency",id:"dependency",children:[]},{value:"Directive",id:"directive",children:[]},{value:"Entry Directive",id:"entry-directive",children:[]},{value:"Execution Directive",id:"execution-directive",children:[]},{value:"Filter Step",id:"filter-step",children:[]},{value:"Help Directive",id:"help-directive",children:[]},{value:"Language Frontend",id:"language-frontend",children:[]},{value:"Node, Edge, Graph",id:"node-edge-graph",children:[]},{value:"Node Property",id:"node-property",children:[]},{value:"Node Type",id:"node-type",children:[]},{value:"Node-Type Step",id:"node-type-step",children:[]},{value:"Query",id:"query",children:[]},{value:"Program Code",id:"program-code",children:[]},{value:"Program Structure",id:"program-structure",children:[]},{value:"Repeat Step",id:"repeat-step",children:[]},{value:"Script",id:"script",children:[]},{value:"Semantic Overlay",id:"semantic-overlay",children:[]},{value:"Step",id:"step",children:[]},{value:"Tagging Overlay",id:"tagging-overlay",children:[]},{value:"Transformation",id:"transformation",children:[]},{value:"Traversal",id:"traversal",children:[]}],d={toc:c};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},d,t,{components:r,mdxType:"MDXLayout"}),Object(n.b)("blockquote",null,Object(n.b)("i",null,"Writing is nature's way of telling us how lousy our thinking is."),Object(n.b)("br",null),"Leslie Lamport"),Object(n.b)("h3",{id:"augmentation"},"Augmentation"),Object(n.b)("p",null,"An Augmentation is an operation by which a Code Property Graph is extended with nodes, properties and edges."),Object(n.b)("h3",{id:"augmentation-directive"},"Augmentation Directive"),Object(n.b)("p",null,"CPGQL Augmentation Directives are Directives which extend a Code Property Graph with nodes, properties and edges."),Object(n.b)("h3",{id:"call-site"},"Call Site"),Object(n.b)("p",null,"Location in a Program Structure where a function or subroutine is called."),Object(n.b)("h3",{id:"code-property-graph"},"Code Property Graph"),Object(n.b)("p",null,"Data structure designed for vulnerability discovery. A directed, edge-labeled, attributed multigraph, or ",Object(n.b)("em",{parentName:"p"},"property graph")," for short."),Object(n.b)("h3",{id:"code-property-graph-overlay"},"Code Property Graph Overlay"),Object(n.b)("p",null,"A set of Nodes, Node Properties and Edges grouped together based on certain criteria. For example, the Dataflow Overlay is the set of Nodes, Node Properties and Edges that are grouped together to represent Dataflows in a Code Property Graph."),Object(n.b)("h3",{id:"code-property-graph-query-language"},"Code Property Graph Query Language"),Object(n.b)("p",null,"A domain-specific language designed for querying Code Property Graphs."),Object(n.b)("h3",{id:"complex-step"},"Complex Step"),Object(n.b)("p",null,"CPGQL Complex Steps are Step which combine the functionality of one or more Node-Type Steps, Repeat Steps, Filter Steps, Core Steps or Execution Directives. They are represented by one or more Directives."),Object(n.b)("h3",{id:"core-step"},"Core Step"),Object(n.b)("p",null,"CPGQL Core Steps are Steps which can be combined with any other Step. They are represented by one or more Directives."),Object(n.b)("h3",{id:"dataflow"},"Dataflow"),Object(n.b)("p",null,"A dataflow represents paths information can take from an external input of a program to an internal procedure."),Object(n.b)("h3",{id:"dataflow-sink"},"Dataflow Sink"),Object(n.b)("p",null,"The information consumer in a Dataflow, i.e. an internal procedure of a program."),Object(n.b)("h3",{id:"dataflow-source"},"Dataflow Source"),Object(n.b)("p",null,"The information generator in a Dataflow, i.e. the input of a program."),Object(n.b)("h3",{id:"dataflow-step"},"Dataflow Step"),Object(n.b)("p",null,"An atomic traversal on Nodes and Edges that are part of the Dataflow Overlay."),Object(n.b)("h3",{id:"dataflow-overlay"},"Dataflow Overlay"),Object(n.b)("p",null,"The set of Nodes, Node Properties and Edges that represent Dataflows in a Code Property Graph."),Object(n.b)("h3",{id:"dependency"},"Dependency"),Object(n.b)("p",null,"External program code that is used in another program."),Object(n.b)("h3",{id:"directive"},"Directive"),Object(n.b)("p",null,"CPGQL Directives are keywords of the Code Property Graph Query Language."),Object(n.b)("h3",{id:"entry-directive"},"Entry Directive"),Object(n.b)("p",null,"A CPGQL Entry Directive is a Directive which references the entry node of a Code Property Graph."),Object(n.b)("h3",{id:"execution-directive"},"Execution Directive"),Object(n.b)("p",null,"CPGQL Execution Directives are Directives which execute the traversals they suffix and return the result in a specific format."),Object(n.b)("h3",{id:"filter-step"},"Filter Step"),Object(n.b)("p",null,"CPGQL Filter Steps are Steps which filter nodes in a traversal according to a criterion. They are represented by one or more Directives."),Object(n.b)("h3",{id:"help-directive"},"Help Directive"),Object(n.b)("p",null,"The CPGQL Help Directive is a Directive which returns textual descriptions of other directives."),Object(n.b)("h3",{id:"language-frontend"},"Language Frontend"),Object(n.b)("p",null,"Joern component that generates Code Property Graphs from a program's source."),Object(n.b)("h3",{id:"node-edge-graph"},"Node, Edge, Graph"),Object(n.b)("p",null,"A Code Property Graph is a graph, that is, all objects are represented as nodes and their relationships are represented by edges. Objects represented by nodes are, e.g., files, methods, expressions, and even dataflows."),Object(n.b)("h3",{id:"node-property"},"Node Property"),Object(n.b)("p",null,"A key-value pair attached to a Node."),Object(n.b)("h3",{id:"node-type"},"Node Type"),Object(n.b)("p",null,"A label that defines the set of mandatory and optional Node Properties and Edges for a specific Node."),Object(n.b)("h3",{id:"node-type-step"},"Node-Type Step"),Object(n.b)("p",null,"CPGQL Node-Type Steps are Steps that traverse nodes based on their type. They are represented by a single Directive."),Object(n.b)("h3",{id:"query"},"Query"),Object(n.b)("p",null,"A CPGQL Query is a combination of more than two Directives."),Object(n.b)("h3",{id:"program-code"},"Program Code"),Object(n.b)("p",null,"Source representation of a program. Can be a directory with multiple source files, a jar file containing Java Bytecode, an LLVM IR binary or anything similar."),Object(n.b)("h3",{id:"program-structure"},"Program Structure"),Object(n.b)("p",null,"The overall form of a computer program which represents its control flow and data structures."),Object(n.b)("h3",{id:"repeat-step"},"Repeat Step"),Object(n.b)("p",null,"CPGQL Repeat Steps are Steps which repeat another traversal multiple times. They are represented by one or more Directives."),Object(n.b)("h3",{id:"script"},"Script"),Object(n.b)("p",null,"A file containing instructions for Joern to execute."),Object(n.b)("h3",{id:"semantic-overlay"},"Semantic Overlay"),Object(n.b)("p",null,"The set of Nodes, Node Properties and Edges that represent Program Structure in a Code Property Graph."),Object(n.b)("h3",{id:"step"},"Step"),Object(n.b)("p",null,"CPGQL Steps are combinations of one or more Directives that describe graph traversals in the Code Property Graph Query Language. They are represented by one or more Directives."),Object(n.b)("h3",{id:"tagging-overlay"},"Tagging Overlay"),Object(n.b)("p",null,"The set of Nodes, Node Properties and Edges of a Code Property Graph that make up for a higher-level abstract representation of Program Structure."),Object(n.b)("h3",{id:"transformation"},"Transformation"),Object(n.b)("p",null,"A Transformation is an operation by which a Code Property Graph is generated from Program Code."),Object(n.b)("h3",{id:"traversal"},"Traversal"),Object(n.b)("p",null,"A recipe which, given a set of start nodes, describes a walk in the graph to reach a set of end nodes."))}p.isMDXComponent=!0},110:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return h}));var a=t(0),o=t.n(a);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),p=function(e){var r=o.a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=p(e.components);return o.a.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(t),b=a,h=s["".concat(i,".").concat(b)]||s[b]||u[b]||n;return t?o.a.createElement(h,l(l({ref:r},d),{},{components:t})):o.a.createElement(h,l({ref:r},d))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=b;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<n;d++)i[d]=t[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
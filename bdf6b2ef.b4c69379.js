(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(10),p=(n(0),n(179)),l={id:"complex-steps",title:"Complex Steps"},i={id:"cpgql/complex-steps",title:"Complex Steps",description:"Complex Steps are CPGQL Steps which combine the functionality of one or more Node-Type Steps, Repeat Steps, Filter Steps, Core Steps or Execution Directives. They are represented by one or more Directives and can be of three types: Generic Complex Steps, Call Graph Steps or Dataflow Complex Steps.",source:"@site/docs/cpgql/complex-steps.mdx",permalink:"/cpgql/complex-steps",sidebar:"docs",previous:{title:"Repeat Steps",permalink:"/cpgql/repeat-steps"},next:{title:"Execution Directives",permalink:"/cpgql/execution-directives"}},c=[{value:"Generic Complex Steps",id:"generic-complex-steps",children:[{value:"dump",id:"dump",children:[]},{value:"dumpRaw",id:"dumpraw",children:[]},{value:"tagList",id:"taglist",children:[]}]},{value:"Call Graph Steps",id:"call-graph-steps",children:[{value:"callee",id:"callee",children:[]},{value:"caller",id:"caller",children:[]},{value:"callIn",id:"callin",children:[]},{value:"inCall",id:"incall",children:[]}]},{value:"Dataflow Steps",id:"dataflow-steps",children:[]}],o={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"Complex Steps are CPGQL Steps which combine the functionality of one or more Node-Type Steps, Repeat Steps, Filter Steps, Core Steps or Execution Directives. They are represented by one or more Directives and can be of three types: ",Object(p.b)("em",{parentName:"p"},"Generic Complex Steps"),", ",Object(p.b)("em",{parentName:"p"},"Call Graph Steps")," or ",Object(p.b)("em",{parentName:"p"},"Dataflow Complex Steps"),"."),Object(p.b)("h2",{id:"generic-complex-steps"},"Generic Complex Steps"),Object(p.b)("h3",{id:"dump"},"dump"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"dump")," is a ",Object(p.b)("em",{parentName:"p"},"Complex Step")," which executes the traversal and returns the value of the CODE property of the nodes it suffixes with syntax-highlighting."),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.method.name("main").dump\nres0: List[String] = List(\n  """int main(int argc, char *argv[]) { /* <=== */\n  if (argc > 1 && strcmp(argv[1], "42") == 0) {\n    fprintf(stderr, "It depends!\\n");\n    exit(42);\n  }\n  printf("What is the meaning of life?\\n");\n  exit(0);\n}"""\n)\n')),Object(p.b)("h3",{id:"dumpraw"},"dumpRaw"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"dumpRaw")," is a ",Object(p.b)("em",{parentName:"p"},"Complex Step")," which executes the traversal and returns the value of the CODE property of the nodes it suffixes."),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.method.name("main").dumpRaw\nres0: List[String] = List(\n  """int main(int argc, char *argv[]) { /* <=== */\n  if (argc > 1 && strcmp(argv[1], "42") == 0) {\n    fprintf(stderr, "It depends!\\n");\n    exit(42);\n  }\n  printf("What is the meaning of life?\\n");\n  exit(0);\n}"""\n)\n')),Object(p.b)("h3",{id:"taglist"},"tagList"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"tagList")," is a ",Object(p.b)("em",{parentName:"p"},"Complex Step")," which executes the traversal and returns the list of all TAG nodes found at each node visited by the traversal it suffixes."),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.method.tagList \nres0: List[List[TagBase]] = List(List(NewTag("MY_TAG", "")))\n')),Object(p.b)("h2",{id:"call-graph-steps"},"Call Graph Steps"),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"Call Graph Steps")," are ",Object(p.b)("em",{parentName:"p"},"Complex Steps")," which traverse the nodes of a ",Object(p.b)("em",{parentName:"p"},"Code Property Graph")," which represent a program's Call Graph."),Object(p.b)("p",null,"The following examples are run on the simple program named ",Object(p.b)("inlineCode",{parentName:"p"},"X42"),":"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class X42 {\n  public static void main(String[] args) {\n    if (args.length > 0 && args[0].equals("42")) {\n      System.err.println("It depends!");\n      System.exit(42);\n    }\n    System.out.println("What is the meaning of life?");\n    System.exit(0);\n  }\n}\n')),Object(p.b)("h3",{id:"callee"},"callee"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"callee")," is a ",Object(p.b)("em",{parentName:"p"},"Call Graph Step")," which lists all nodes representing Call Graph callees of the traversed nodes."),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.method.name("main").callee.name.l \nres0: List[String] = List(\n  "printf",\n  "exit",\n  "exit",\n  "<operator>.logicalAnd",\n  "<operator>.greaterThan",\n  "<operator>.equals",\n  "fprintf",\n  "strcmp",\n  "<operator>.indirectIndexAccess"\n)\n')),Object(p.b)("h3",{id:"caller"},"caller"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"caller")," is a ",Object(p.b)("em",{parentName:"p"},"Call Graph Step")," which lists all nodes representing Call Graph callers of the traversed nodes."),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.method.name("exit").caller.code.l \nres0: List[String] = List("main (int argc,char *argv[])", "main (int argc,char *argv[])")\n')),Object(p.b)("h3",{id:"callin"},"callIn"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"callIn")," is a ",Object(p.b)("em",{parentName:"p"},"Call Graph Step")," which lists all nodes representing Call Graph parent call-sites of the traversed nodes."),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.method.name("exit").callIn.code.l \nres0: List[String] = List("exit(0)", "exit(42)")\n')),Object(p.b)("h3",{id:"incall"},"inCall"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"inCall")," is a ",Object(p.b)("em",{parentName:"p"},"Call Graph Step")," which lists all nodes representing surrounding Call Graph call-sites of the traversed nodes."),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'joern> cpg.call.name("<operator>.indirectIndexAccess").inCall.code.l \nres0: List[String] = List("strcmp(argv[1], \\"42\\")")\n')),Object(p.b)("h2",{id:"dataflow-steps"},"Dataflow Steps"),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"Dataflow Steps")," are ",Object(p.b)("em",{parentName:"p"},"Complex Steps")," which traverse the nodes of a ",Object(p.b)("em",{parentName:"p"},"Code Property Graph")," which represent a program's data-flow. ",Object(p.b)("inlineCode",{parentName:"p"},"controlledBy"),", ",Object(p.b)("inlineCode",{parentName:"p"},"flows"),",",Object(p.b)("inlineCode",{parentName:"p"},"passes"),", ",Object(p.b)("inlineCode",{parentName:"p"},"passesNot"),", ",Object(p.b)("inlineCode",{parentName:"p"},"source"),", ",Object(p.b)("inlineCode",{parentName:"p"},"sink"),", ",Object(p.b)("inlineCode",{parentName:"p"},"reachableBy")," are all CPGQL Components that are combined to construct ",Object(p.b)("em",{parentName:"p"},"Dataflow Steps"),"."))}s.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,u=b["".concat(l,".").concat(d)]||b[d]||m[d]||p;return n?r.a.createElement(u,i({ref:t},o,{components:n})):r.a.createElement(u,i({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var o=2;o<p;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
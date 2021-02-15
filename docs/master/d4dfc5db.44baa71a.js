(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{130:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(142)),i={title:"Integration"},l={unversionedId:"getting-started/integration",id:"getting-started/integration",isDocsHomePage:!1,title:"Integration",description:"Chart.js can be integrated with plain JavaScript or with different module loaders. The examples below show how to load Chart.js in different systems.",source:"@site/docs/getting-started/integration.md",slug:"/getting-started/integration",permalink:"/docs/master/getting-started/integration",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/getting-started/integration.md",version:"current",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/master/getting-started/installation"},next:{title:"Usage",permalink:"/docs/master/getting-started/usage"}},c=[{value:"Script Tag",id:"script-tag",children:[]},{value:"Common JS",id:"common-js",children:[]},{value:"Bundlers (Webpack, Rollup, etc.)",id:"bundlers-webpack-rollup-etc",children:[]},{value:"Require JS",id:"require-js",children:[]}],s={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Chart.js can be integrated with plain JavaScript or with different module loaders. The examples below show how to load Chart.js in different systems."),Object(o.b)("h2",{id:"script-tag"},"Script Tag"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<script src="path/to/chartjs/dist/chart.js"><\/script>\n<script>\n    var myChart = new Chart(ctx, {...});\n<\/script>\n')),Object(o.b)("h2",{id:"common-js"},"Common JS"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var Chart = require('chart.js');\nvar myChart = new Chart(ctx, {...});\n")),Object(o.b)("h2",{id:"bundlers-webpack-rollup-etc"},"Bundlers (Webpack, Rollup, etc.)"),Object(o.b)("p",null,"Chart.js 3 is tree-shakeable, so it is necessary to import and register the controllers, elements, scales and plugins you are going to use."),Object(o.b)("p",null,"For all available imports see the example below."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import {\n  Chart,\n  ArcElement,\n  LineElement,\n  BarElement,\n  PointElement,\n  BarController,\n  BubbleController,\n  DoughnutController,\n  LineController,\n  PieController,\n  PolarAreaController,\n  RadarController,\n  ScatterController,\n  CategoryScale,\n  LinearScale,\n  LogarithmicScale,\n  RadialLinearScale,\n  TimeScale,\n  TimeSeriesScale,\n  Decimation,\n  Filler,\n  Legend,\n  Title,\n  Tooltip\n} from 'chart.js';\n\nChart.register(\n  ArcElement,\n  LineElement,\n  BarElement,\n  PointElement,\n  BarController,\n  BubbleController,\n  DoughnutController,\n  LineController,\n  PieController,\n  PolarAreaController,\n  RadarController,\n  ScatterController,\n  CategoryScale,\n  LinearScale,\n  LogarithmicScale,\n  RadialLinearScale,\n  TimeScale,\n  TimeSeriesScale,\n  Decimation,\n  Filler,\n  Legend,\n  Title,\n  Tooltip\n);\n\nvar myChart = new Chart(ctx, {...});\n")),Object(o.b)("p",null,"A short registration format is also available to quickly register everything."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { Chart, registerables } from 'chart.js';\nChart.register(...registerables);\n")),Object(o.b)("h2",{id:"require-js"},"Require JS"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Important:")," RequireJS ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://requirejs.org/docs/commonjs.html#intro"}),"can ",Object(o.b)("strong",{parentName:"a"},"not")," load CommonJS module as is"),", so be sure to require one of the UMD builds instead (i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"dist/chart.js"),", ",Object(o.b)("inlineCode",{parentName:"p"},"dist/chart.min.js"),", etc.)."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"require(['path/to/chartjs/dist/chart.min.js'], function(Chart){\n    var myChart = new Chart(ctx, {...});\n});\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," in order to use the time scale, you need to make sure ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chartjs/awesome#adapters"}),"one of the available date adapters")," and corresponding date library are fully loaded ",Object(o.b)("strong",{parentName:"p"},"after")," requiring Chart.js. For this you can use nested requires:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"require(['chartjs'], function(Chart) {\n    require(['moment'], function() {\n        require(['chartjs-adapter-moment'], function() {\n            new Chart(ctx, {...});\n        });\n    });\n});\n")))}p.isMDXComponent=!0},142:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,l(l({ref:t},s),{},{components:r})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
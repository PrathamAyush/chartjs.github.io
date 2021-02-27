(window.webpackJsonp=window.webpackJsonp||[]).push([[37,6,13,27,33],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return m})),a.d(t,"toc",(function(){return j})),a.d(t,"default",(function(){return p}));var n=a(3),b=a(7),r=(a(0),a(143)),c=a(56),i=a(58),l=a(59),o=a(57),d={title:"Linear Axis"},m={unversionedId:"axes/cartesian/linear",id:"axes/cartesian/linear",isDocsHomePage:!1,title:"Linear Axis",description:"The linear scale is used to chart numerical data. It can be placed on either the x or y-axis. The scatter chart type automatically configures a line chart to use one of these scales for the x-axis. As the name suggests, linear interpolation is used to determine where a value lies on the axis.",source:"@site/docs/axes/cartesian/linear.mdx",slug:"/axes/cartesian/linear",permalink:"/docs/next/axes/cartesian/linear",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/cartesian/linear.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Category Axis",permalink:"/docs/next/axes/cartesian/category"},next:{title:"Logarithmic Axis",permalink:"/docs/next/axes/cartesian/logarithmic"}},j=[{value:"Configuration Options",id:"configuration-options",children:[{value:"Linear Axis specific options",id:"linear-axis-specific-options",children:[]}]},{value:"Tick Configuration",id:"tick-configuration",children:[{value:"Linear Axis specific tick options",id:"linear-axis-specific-tick-options",children:[]}]},{value:"Step Size",id:"step-size",children:[]},{value:"Internal data format",id:"internal-data-format",children:[]}],O={toc:j};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The linear scale is used to chart numerical data. It can be placed on either the x or y-axis. The scatter chart type automatically configures a line chart to use one of these scales for the x-axis. As the name suggests, linear interpolation is used to determine where a value lies on the axis."),Object(r.b)("h2",{id:"configuration-options"},"Configuration Options"),Object(r.b)("h3",{id:"linear-axis-specific-options"},"Linear Axis specific options"),Object(r.b)("p",null,"Namespace: ",Object(r.b)("inlineCode",{parentName:"p"},"options.scales[scaleId]")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"beginAtZero")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if true, scale will include 0 if it is not already included.")))),Object(r.b)(i.default,{mdxType:"CommonCartesian"}),Object(r.b)(c.default,{mdxType:"CommonAll"}),Object(r.b)("h2",{id:"tick-configuration"},"Tick Configuration"),Object(r.b)("h3",{id:"linear-axis-specific-tick-options"},"Linear Axis specific tick options"),Object(r.b)("p",null,"Namespace: ",Object(r.b)("inlineCode",{parentName:"p"},"options.scales[scaleId].ticks")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"format")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat"}),Object(r.b)("inlineCode",{parentName:"a"},"Intl.NumberFormat"))," options used by the default label formatter")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"maxTicksLimit")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"11")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum number of ticks and gridlines to show.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"precision")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if defined and ",Object(r.b)("inlineCode",{parentName:"td"},"stepSize")," is not specified, the step size will be rounded to this many decimal places.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"stepSize")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User-defined fixed step size for the scale. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#step-size"}),"more..."))))),Object(r.b)(l.default,{mdxType:"CommonTicks"}),Object(r.b)(o.default,{mdxType:"CommonTicksAll"}),Object(r.b)("h2",{id:"step-size"},"Step Size"),Object(r.b)("p",null,"If set, the scale ticks will be enumerated by multiple of ",Object(r.b)("inlineCode",{parentName:"p"},"stepSize"),", having one tick per increment. If not set, the ticks are labeled automatically using the nice numbers algorithm."),Object(r.b)("p",null,"This example sets up a chart with a y axis that creates ticks at ",Object(r.b)("inlineCode",{parentName:"p"},"0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"let options = {\n    scales: {\n        y: {\n            max: 5,\n            min: 0,\n            ticks: {\n                stepSize: 0.5\n            }\n        }\n    }\n};\n")),Object(r.b)("h2",{id:"internal-data-format"},"Internal data format"),Object(r.b)("p",null,"Internally, the linear scale uses numeric data"))}p.isMDXComponent=!0},143:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return p}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),d=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=d(a),O=n,p=m["".concat(c,".").concat(O)]||m[O]||j[O]||r;return a?b.a.createElement(p,i(i({ref:t},o),{},{components:a})):b.a.createElement(p,i({ref:t},o))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<r;o++)c[o]=a[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},56:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),b=a(7),r=(a(0),a(143)),c={},i={unversionedId:"axes/_common",id:"axes/_common",isDocsHomePage:!1,title:"_common",description:"Common options to all axes",source:"@site/docs/axes/_common.md",slug:"/axes/_common",permalink:"/docs/next/axes/_common",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/_common.md",version:"current"},l=[{value:"Common options to all axes",id:"common-options-to-all-axes",children:[]}],o={toc:l};function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"common-options-to-all-axes"},"Common options to all axes"),Object(r.b)("p",null,"Namespace: ",Object(r.b)("inlineCode",{parentName:"p"},"options.scales[scaleId]")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"type")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"display")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean"),"|",Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Controls the axis global visibility (visible when ",Object(r.b)("inlineCode",{parentName:"td"},"true"),", hidden when ",Object(r.b)("inlineCode",{parentName:"td"},"false"),"). When ",Object(r.b)("inlineCode",{parentName:"td"},"display: 'auto'"),", the axis is visible only if at least one associated dataset is visible.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"gridLines")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Grid line configuration. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/styling#grid-line-configuration"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"min")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User defined minimum number for the scale, overrides minimum value from data. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/index#axis-range-settings"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"max")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User defined maximum number for the scale, overrides maximum value from data. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/index#axis-range-settings"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"reverse")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reverse the scale.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"suggestedMax")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjustment used when calculating the maximum data value. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/index#axis-range-settings"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"suggestedMin")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjustment used when calculating the minimum data value. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/index#axis-range-settings"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ticks")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tick configuration. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#tick-configuration"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"weight")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The weight used to sort the axis. Higher weights are further away from the chart area.")))))}d.isMDXComponent=!0},57:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),b=a(7),r=(a(0),a(143)),c={},i={unversionedId:"axes/_common_ticks",id:"axes/_common_ticks",isDocsHomePage:!1,title:"_common_ticks",description:"Common tick options to all axes",source:"@site/docs/axes/_common_ticks.md",slug:"/axes/_common_ticks",permalink:"/docs/next/axes/_common_ticks",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/_common_ticks.md",version:"current"},l=[{value:"Common tick options to all axes",id:"common-tick-options-to-all-axes",children:[]}],o={toc:l};function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"common-tick-options-to-all-axes"},"Common tick options to all axes"),Object(r.b)("p",null,"Namespace: ",Object(r.b)("inlineCode",{parentName:"p"},"options.scales[scaleId].ticks")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Scriptable"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"callback")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"function")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns the string representation of the tick value as it should be displayed on the chart. See ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/labelling#creating-custom-tick-formats"}),"callback"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"display")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, show tick labels.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"color")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(r.b)("inlineCode",{parentName:"a"},"Color"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Chart.defaults.color")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Color of ticks.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"font")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Font")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Chart.defaults.font")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/fonts"}),"Fonts"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"major")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"{}")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/styling#major-tick-configuration"}),"Major ticks configuration"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"padding")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the offset of the tick labels from the axis")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"textStrokeColor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(r.b)("inlineCode",{parentName:"a"},"Color"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"``"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The color of the stroke around the text.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"textStrokeWidth")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stroke width around the text.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"z")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"z-index of tick layer. Useful when ticks are drawn on chart area. Values ","<","= 0 are drawn under datasets, ",">"," 0 on top.")))))}d.isMDXComponent=!0},58:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),b=a(7),r=(a(0),a(143)),c={},i={unversionedId:"axes/cartesian/_common",id:"axes/cartesian/_common",isDocsHomePage:!1,title:"_common",description:"Common options to all cartesian axes",source:"@site/docs/axes/cartesian/_common.md",slug:"/axes/cartesian/_common",permalink:"/docs/next/axes/cartesian/_common",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/cartesian/_common.md",version:"current"},l=[{value:"Common options to all cartesian axes",id:"common-options-to-all-cartesian-axes",children:[]}],o={toc:l};function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"common-options-to-all-cartesian-axes"},"Common options to all cartesian axes"),Object(r.b)("p",null,"Namespace: ",Object(r.b)("inlineCode",{parentName:"p"},"options.scales[scaleId]")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bounds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'ticks'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Determines the scale bounds. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/cartesian/index#scale-bounds"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"position")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Position of the axis. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/cartesian/index#axis-position"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"axis")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Which type of axis this is. Possible values are: ",Object(r.b)("inlineCode",{parentName:"td"},"'x'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'y'"),". If not set, this is inferred from the first character of the ID which should be ",Object(r.b)("inlineCode",{parentName:"td"},"'x'")," or ",Object(r.b)("inlineCode",{parentName:"td"},"'y'"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"offset")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to ",Object(r.b)("inlineCode",{parentName:"td"},"true")," for a bar chart by default.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"scaleLabel")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Scale title configuration. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/labelling#scale-title-configuration"}),"more..."))))))}d.isMDXComponent=!0},59:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),b=a(7),r=(a(0),a(143)),c={},i={unversionedId:"axes/cartesian/_common_ticks",id:"axes/cartesian/_common_ticks",isDocsHomePage:!1,title:"_common_ticks",description:"Common tick options to all cartesian axes",source:"@site/docs/axes/cartesian/_common_ticks.md",slug:"/axes/cartesian/_common_ticks",permalink:"/docs/next/axes/cartesian/_common_ticks",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/cartesian/_common_ticks.md",version:"current"},l=[{value:"Common tick options to all cartesian axes",id:"common-tick-options-to-all-cartesian-axes",children:[]}],o={toc:l};function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"common-tick-options-to-all-cartesian-axes"},"Common tick options to all cartesian axes"),Object(r.b)("p",null,"Namespace: ",Object(r.b)("inlineCode",{parentName:"p"},"options.scales[scaleId].ticks")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"align")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'center'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The tick alignment along the axis. Can be ",Object(r.b)("inlineCode",{parentName:"td"},"'start'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'center'"),", or ",Object(r.b)("inlineCode",{parentName:"td"},"'end'"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"crossAlign")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'near'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The tick alignment perpendicular to the axis. Can be ",Object(r.b)("inlineCode",{parentName:"td"},"'near'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'center'"),", or ",Object(r.b)("inlineCode",{parentName:"td"},"'far'"),". See ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"./index#tick-alignment"}),"Tick Alignment"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"sampleSize")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ticks.length")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"autoSkip")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, automatically calculates how many labels can be shown and hides labels accordingly. Labels will be rotated up to ",Object(r.b)("inlineCode",{parentName:"td"},"maxRotation")," before skipping any. Turn ",Object(r.b)("inlineCode",{parentName:"td"},"autoSkip")," off to show all labels no matter what.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"autoSkipPadding")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Padding between the ticks on the horizontal axis when ",Object(r.b)("inlineCode",{parentName:"td"},"autoSkip")," is enabled.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"labelOffset")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis). ",Object(r.b)("em",{parentName:"td"},"Note: this can cause labels at the edges to be cropped by the edge of the canvas"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"maxRotation")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"50")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum rotation for tick labels when rotating to condense labels. Note: Rotation doesn't occur until necessary. ",Object(r.b)("em",{parentName:"td"},"Note: Only applicable to horizontal scales."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"minRotation")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Minimum rotation for tick labels. ",Object(r.b)("em",{parentName:"td"},"Note: Only applicable to horizontal scales."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"mirror")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flips tick labels around axis, displaying the labels inside the chart instead of outside. ",Object(r.b)("em",{parentName:"td"},"Note: Only applicable to vertical scales."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"padding")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Padding between the tick label and the axis. When set on a vertical axis, this applies in the horizontal (X) direction. When set on a horizontal axis, this applies in the vertical (Y) direction.")))))}d.isMDXComponent=!0}}]);
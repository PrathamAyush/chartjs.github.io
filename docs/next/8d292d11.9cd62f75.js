(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{178:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return d})),a.d(t,"ExampleChart",(function(){return O})),a.d(t,"default",(function(){return j}));var n=a(2),r=a(9),b=a(0),l=a(207),c={title:"Radar Chart"},i={id:"charts/radar",title:"Radar Chart",description:"A radar chart is a way of showing multiple data points and the variation between them.",source:"@site/docs/charts/radar.mdx",permalink:"/docs/next/charts/radar",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/charts/radar.mdx",sidebar:"someSidebar",previous:{title:"Bar Chart",permalink:"/docs/next/charts/bar"},next:{title:"Doughnut and Pie Charts",permalink:"/docs/next/charts/doughnut"}},d=[{value:"Example Usage",id:"example-usage",children:[]},{value:"Dataset Properties",id:"dataset-properties",children:[{value:"General",id:"general",children:[]},{value:"Point Styling",id:"point-styling",children:[]},{value:"Line Styling",id:"line-styling",children:[]},{value:"Interactions",id:"interactions",children:[]}]},{value:"Configuration Options",id:"configuration-options",children:[]},{value:"Scale Options",id:"scale-options",children:[]},{value:"Default Options",id:"default-options",children:[]},{value:"Data Structure",id:"data-structure",children:[]},{value:"Internal data format",id:"internal-data-format",children:[]}],O=function(){return Object(b.useEffect)((function(){var e=new Chart(document.getElementById("chartjs-0").getContext("2d"),{type:"radar",data:{labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First Dataset",data:[65,59,90,81,56,55,40],fill:!0,backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgb(255, 99, 132)",pointBackgroundColor:"rgb(255, 99, 132)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(255, 99, 132)"},{label:"My Second Dataset",data:[28,48,40,19,96,27,100],fill:!0,backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgb(54, 162, 235)",pointBackgroundColor:"rgb(54, 162, 235)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(54, 162, 235)"}]},options:{elements:{line:{tension:0,borderWidth:3}}}});return function(){return e.destroy()}})),Object(l.b)("div",{className:"chartjs-wrapper"},Object(l.b)("canvas",{id:"chartjs-0",className:"chartjs"}))},o={rightToc:d,ExampleChart:O};function j(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A radar chart is a way of showing multiple data points and the variation between them."),Object(l.b)("p",null,"They are often useful for comparing the points of two or more different data sets."),Object(l.b)(O,{mdxType:"ExampleChart"}),Object(l.b)("h2",{id:"example-usage"},"Example Usage"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var myRadarChart = new Chart(ctx, {\n    type: 'radar',\n    data: data,\n    options: options\n});\n")),Object(l.b)("h2",{id:"dataset-properties"},"Dataset Properties"),Object(l.b)("p",null,"The radar chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the colour of a line is generally set this way."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("a",Object(n.a)({parentName:"th"},{href:"/docs/next/general/options#scriptable-options"}),"Scriptable")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("a",Object(n.a)({parentName:"th"},{href:"/docs/next/general/options#indexable-options"}),"Indexable")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#line-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"backgroundColor"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(l.b)("inlineCode",{parentName:"a"},"Color"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'rgba(0, 0, 0, 0.1)'"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#line-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"borderCapStyle"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'butt'"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#line-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"borderColor"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(l.b)("inlineCode",{parentName:"a"},"Color"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'rgba(0, 0, 0, 0.1)'"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#line-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"borderDash"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number[]")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"[]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#line-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"borderDashOffset"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0.0"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#line-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"borderJoinStyle"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'miter'"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#line-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"borderWidth"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"3"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#line-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"hoverBackgroundColor"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(l.b)("inlineCode",{parentName:"a"},"Color"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#line-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"hoverBorderCapStyle"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#line-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"hoverBorderColor"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(l.b)("inlineCode",{parentName:"a"},"Color"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#line-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"hoverBorderDash"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number[]")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#line-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"hoverBorderDashOffset"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#line-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"hoverBorderJoinStyle"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#line-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"hoverBorderWidth"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#general"}),Object(l.b)("inlineCode",{parentName:"a"},"clip"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"number","|","object")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#line-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"fill"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"boolean","|","string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#general"}),Object(l.b)("inlineCode",{parentName:"a"},"label"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"''"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#general"}),Object(l.b)("inlineCode",{parentName:"a"},"order"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#line-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"tension"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#point-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"pointBackgroundColor"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Color")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'rgba(0, 0, 0, 0.1)'"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#point-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"pointBorderColor"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Color")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'rgba(0, 0, 0, 0.1)'"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#point-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"pointBorderWidth"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"1"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#point-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"pointHitRadius"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"1"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#interactions"}),Object(l.b)("inlineCode",{parentName:"a"},"pointHoverBackgroundColor"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Color")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#interactions"}),Object(l.b)("inlineCode",{parentName:"a"},"pointHoverBorderColor"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Color")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#interactions"}),Object(l.b)("inlineCode",{parentName:"a"},"pointHoverBorderWidth"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"1"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#interactions"}),Object(l.b)("inlineCode",{parentName:"a"},"pointHoverRadius"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"4"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#point-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"pointRadius"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"3"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#point-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"pointRotation"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#point-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"pointStyle"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"string","|","Image")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'circle'"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#line-styling"}),Object(l.b)("inlineCode",{parentName:"a"},"spanGaps"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined"))))),Object(l.b)("h3",{id:"general"},"General"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"clip")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. ",Object(l.b)("inlineCode",{parentName:"td"},"0")," = clip at chartArea. Clipping can also be configured per side: ",Object(l.b)("inlineCode",{parentName:"td"},"clip: {left: 5, top: false, right: -2, bottom: 0}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"label")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The label for the dataset which appears in the legend and tooltips.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"order")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The drawing order of dataset.")))),Object(l.b)("h3",{id:"point-styling"},"Point Styling"),Object(l.b)("p",null,"The style of each point can be controlled with the following properties:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pointBackgroundColor")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The fill color for points.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pointBorderColor")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The border color for points.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pointBorderWidth")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The width of the point border in pixels.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pointHitRadius")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The pixel size of the non-displayed point that reacts to mouse events.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pointRadius")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The radius of the point shape. If set to 0, the point is not rendered.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pointRotation")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The rotation of the point in degrees.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pointStyle")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Style of the point. ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"../configuration/elements#point-styles"}),"more..."))))),Object(l.b)("p",null,"All these values, if ",Object(l.b)("inlineCode",{parentName:"p"},"undefined"),", fallback first to the dataset options then to the associated ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/configuration/elements#point-configuration"}),Object(l.b)("inlineCode",{parentName:"a"},"elements.point.*"))," options."),Object(l.b)("h3",{id:"line-styling"},"Line Styling"),Object(l.b)("p",null,"The style of the line can be controlled with the following properties:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"backgroundColor")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The line fill color.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"borderCapStyle")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cap style of the line. See ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap"}),"MDN"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"borderColor")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The line color.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"borderDash")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Length and spacing of dashes. See ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash"}),"MDN"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"borderDashOffset")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Offset for line dashes. See ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset"}),"MDN"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"borderJoinStyle")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Line joint style. See ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin"}),"MDN"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"borderWidth")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The line width (in pixels).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"fill")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How to fill the area under the line. See ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/charts/area"}),"area charts"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"tension")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Bezier curve tension of the line. Set to 0 to draw straight lines.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"spanGaps")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, lines will be drawn between points with no or null data. If false, points with ",Object(l.b)("inlineCode",{parentName:"td"},"NaN")," data will create a break in the line.")))),Object(l.b)("p",null,"If the value is ",Object(l.b)("inlineCode",{parentName:"p"},"undefined"),", ",Object(l.b)("inlineCode",{parentName:"p"},"spanGaps")," fallback to the associated ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#configuration-options"}),"chart configuration options"),". The rest of the values fallback to the associated ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/configuration/elements#line-configuration"}),Object(l.b)("inlineCode",{parentName:"a"},"elements.line.*"))," options."),Object(l.b)("h3",{id:"interactions"},"Interactions"),Object(l.b)("p",null,"The interaction with each point can be controlled with the following properties:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pointHoverBackgroundColor")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Point background color when hovered.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pointHoverBorderColor")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Point border color when hovered.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pointHoverBorderWidth")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Border width of point when hovered.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pointHoverRadius")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The radius of the point when hovered.")))),Object(l.b)("h2",{id:"configuration-options"},"Configuration Options"),Object(l.b)("p",null,"The radar chart defines the following configuration options. These options are merged with the global chart configuration options, ",Object(l.b)("inlineCode",{parentName:"p"},"Chart.defaults"),", to form the options passed to the chart."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"spanGaps")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If false, NaN data causes a break in the line.")))),Object(l.b)("h2",{id:"scale-options"},"Scale Options"),Object(l.b)("p",null,"The radar chart supports only a single scale. The options for this scale are defined in the ",Object(l.b)("inlineCode",{parentName:"p"},"scale")," property.\nThe options for this scale are defined in the ",Object(l.b)("inlineCode",{parentName:"p"},"scale")," property, which can be referenced from the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"../axes/radial/linear"}),"Linear Radial Axis page"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"options = {\n    scale: {\n        angleLines: {\n            display: false\n        },\n        suggestedMin: 50,\n        suggestedMax: 100\n    }\n};\n")),Object(l.b)("h2",{id:"default-options"},"Default Options"),Object(l.b)("p",null,"It is common to want to apply a configuration setting to all created radar charts. The global radar chart settings are stored in ",Object(l.b)("inlineCode",{parentName:"p"},"Chart.defaults.controllers.radar"),". Changing the global options only affects charts created after the change. Existing charts are not changed."),Object(l.b)("h2",{id:"data-structure"},"Data Structure"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"data")," property of a dataset for a radar chart is specified as an array of numbers. Each point in the data array corresponds to the label at the same index."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"data: [20, 10]\n")),Object(l.b)("p",null,"For a radar chart, to provide context of what each point means, we include an array of strings that show around each point in the chart."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"data: {\n    labels: ['Running', 'Swimming', 'Eating', 'Cycling'],\n    datasets: [{\n        data: [20, 10, 4, 2]\n    }]\n}\n")),Object(l.b)("h2",{id:"internal-data-format"},"Internal data format"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"{x, y}")))}j.isMDXComponent=!0},207:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),O=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},o=function(e){var t=O(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),o=O(a),p=n,m=o["".concat(l,".").concat(p)]||o[p]||j[p]||b;return a?r.a.createElement(m,c(c({ref:t},d),{},{components:a})):r.a.createElement(m,c({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var d=2;d<b;d++)l[d]=a[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);
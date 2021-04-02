(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{333:function(t,e,a){"use strict";a.r(e);var r=a(27),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"class-domplatform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-domplatform"}},[t._v("#")]),t._v(" Class: DomPlatform")]),t._v(" "),a("h2",{attrs:{id:"hierarchy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hierarchy"}},[t._v("#")]),t._v(" Hierarchy")]),t._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/api/classes/baseplatform.html"}},[a("em",[t._v("BasePlatform")])])],1),t._v(" "),a("p",[t._v("↳ "),a("strong",[t._v("DomPlatform")])])])]),t._v(" "),a("h2",{attrs:{id:"constructors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructors"}},[t._v("#")]),t._v(" Constructors")]),t._v(" "),a("h3",{attrs:{id:"constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),a("p",[t._v("+ "),a("strong",[t._v("new DomPlatform")]),t._v("(): "),a("RouterLink",{attrs:{to:"/api/classes/domplatform.html"}},[a("em",[t._v("DomPlatform")])])],1),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("RouterLink",{attrs:{to:"/api/classes/domplatform.html"}},[a("em",[t._v("DomPlatform")])])],1),t._v(" "),a("p",[t._v("Inherited from: "),a("RouterLink",{attrs:{to:"/api/classes/baseplatform.html"}},[t._v("BasePlatform")])],1),t._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("h3",{attrs:{id:"acquirecontext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acquirecontext"}},[t._v("#")]),t._v(" acquireContext")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("acquireContext")]),t._v("("),a("code",[t._v("canvas")]),t._v(": HTMLCanvasElement, "),a("code",[t._v("options?")]),t._v(": CanvasRenderingContext2DSettings): CanvasRenderingContext2D")]),t._v(" "),a("p",[t._v("Called at chart construction time, returns a context2d instance implementing\nthe "),a("a",{attrs:{href:"https://www.w3.org/TR/2dcontext/",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3C Canvas 2D Context API standard"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("canvas")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("HTMLCanvasElement")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The canvas from which to acquire context (platform specific)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("options?")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("CanvasRenderingContext2DSettings")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The chart options")])])])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" CanvasRenderingContext2D")]),t._v(" "),a("p",[t._v("Inherited from: "),a("RouterLink",{attrs:{to:"/api/classes/baseplatform.html"}},[t._v("BasePlatform")])],1),t._v(" "),a("p",[t._v("Defined in: "),a("a",{attrs:{href:"https://github.com/chartjs/Chart.js/blob/8780e15/types/index.esm.d.ts#L1878",target:"_blank",rel:"noopener noreferrer"}},[t._v("index.esm.d.ts:1878"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"addeventlistener"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addeventlistener"}},[t._v("#")]),t._v(" addEventListener")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("addEventListener")]),t._v("("),a("code",[t._v("chart")]),t._v(": "),a("RouterLink",{attrs:{to:"/api/classes/chart.html"}},[a("em",[t._v("Chart")])]),t._v("<"),a("em",[t._v("bar")]),t._v(" | "),a("em",[t._v("line")]),t._v(" | "),a("em",[t._v("scatter")]),t._v(" | "),a("em",[t._v("bubble")]),t._v(" | "),a("em",[t._v("pie")]),t._v(" | "),a("em",[t._v("doughnut")]),t._v(" | "),a("em",[t._v("polarArea")]),t._v(" | "),a("em",[t._v("radar")]),t._v(", (number | "),a("RouterLink",{attrs:{to:"/api/interfaces/scatterdatapoint.html"}},[a("em",[t._v("ScatterDataPoint")])]),t._v(" | "),a("RouterLink",{attrs:{to:"/api/interfaces/bubbledatapoint.html"}},[a("em",[t._v("BubbleDataPoint")])]),t._v(")[], unknown>, "),a("code",[t._v("type")]),t._v(": "),a("em",[t._v("string")]),t._v(", "),a("code",[t._v("listener")]),t._v(": ("),a("code",[t._v("e")]),t._v(": "),a("RouterLink",{attrs:{to:"/api/interfaces/chartevent.html"}},[a("em",[t._v("ChartEvent")])]),t._v(") => "),a("em",[t._v("void")]),t._v("): "),a("em",[t._v("void")])],1),t._v(" "),a("p",[t._v("Registers the specified listener on the given chart.")]),t._v(" "),a("h4",{attrs:{id:"parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("chart")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/api/classes/chart.html"}},[a("em",[t._v("Chart")])]),t._v("<"),a("em",[t._v("bar")]),t._v(" | "),a("em",[t._v("line")]),t._v(" | "),a("em",[t._v("scatter")]),t._v(" | "),a("em",[t._v("bubble")]),t._v(" | "),a("em",[t._v("pie")]),t._v(" | "),a("em",[t._v("doughnut")]),t._v(" | "),a("em",[t._v("polarArea")]),t._v(" | "),a("em",[t._v("radar")]),t._v(", (number | "),a("RouterLink",{attrs:{to:"/api/interfaces/scatterdatapoint.html"}},[a("em",[t._v("ScatterDataPoint")])]),t._v(" | "),a("RouterLink",{attrs:{to:"/api/interfaces/bubbledatapoint.html"}},[a("em",[t._v("BubbleDataPoint")])]),t._v(")[], unknown>")],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Chart from which to listen for event")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("type")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("em",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The ("),a("RouterLink",{attrs:{to:"/api/interfaces/chartevent.html"}},[t._v("ChartEvent")]),t._v(") type to listen for")],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("listener")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("("),a("code",[t._v("e")]),t._v(": "),a("RouterLink",{attrs:{to:"/api/interfaces/chartevent.html"}},[a("em",[t._v("ChartEvent")])]),t._v(") => "),a("em",[t._v("void")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Receives a notification (an object that implements the "),a("RouterLink",{attrs:{to:"/api/interfaces/chartevent.html"}},[t._v("ChartEvent")]),t._v(" interface) when an event of the specified type occurs.")],1)])])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("em",[t._v("void")])]),t._v(" "),a("p",[t._v("Inherited from: "),a("RouterLink",{attrs:{to:"/api/classes/baseplatform.html"}},[t._v("BasePlatform")])],1),t._v(" "),a("p",[t._v("Defined in: "),a("a",{attrs:{href:"https://github.com/chartjs/Chart.js/blob/8780e15/types/index.esm.d.ts#L1896",target:"_blank",rel:"noopener noreferrer"}},[t._v("index.esm.d.ts:1896"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"getdevicepixelratio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getdevicepixelratio"}},[t._v("#")]),t._v(" getDevicePixelRatio")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("getDevicePixelRatio")]),t._v("(): "),a("em",[t._v("number")])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("em",[t._v("number")])]),t._v(" "),a("p",[t._v("the current devicePixelRatio of the device this platform is connected to.")]),t._v(" "),a("p",[t._v("Inherited from: "),a("RouterLink",{attrs:{to:"/api/classes/baseplatform.html"}},[t._v("BasePlatform")])],1),t._v(" "),a("p",[t._v("Defined in: "),a("a",{attrs:{href:"https://github.com/chartjs/Chart.js/blob/8780e15/types/index.esm.d.ts#L1907",target:"_blank",rel:"noopener noreferrer"}},[t._v("index.esm.d.ts:1907"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"getmaximumsize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getmaximumsize"}},[t._v("#")]),t._v(" getMaximumSize")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("getMaximumSize")]),t._v("("),a("code",[t._v("canvas")]),t._v(": HTMLCanvasElement, "),a("code",[t._v("width?")]),t._v(": "),a("em",[t._v("number")]),t._v(", "),a("code",[t._v("height?")]),t._v(": "),a("em",[t._v("number")]),t._v(", "),a("code",[t._v("aspectRatio?")]),t._v(": "),a("em",[t._v("number")]),t._v("): "),a("em",[t._v("object")])]),t._v(" "),a("h4",{attrs:{id:"parameters-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[t._v("#")]),t._v(" Parameters:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("canvas")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("HTMLCanvasElement")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The canvas for which to calculate the maximum size")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("width?")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("em",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("height?")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("em",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("aspectRatio?")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("em",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("em",[t._v("object")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("height")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("em",[t._v("number")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("width")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("em",[t._v("number")])])])])]),t._v(" "),a("p",[t._v("the maximum size available.")]),t._v(" "),a("p",[t._v("Inherited from: "),a("RouterLink",{attrs:{to:"/api/classes/baseplatform.html"}},[t._v("BasePlatform")])],1),t._v(" "),a("p",[t._v("Defined in: "),a("a",{attrs:{href:"https://github.com/chartjs/Chart.js/blob/8780e15/types/index.esm.d.ts#L1915",target:"_blank",rel:"noopener noreferrer"}},[t._v("index.esm.d.ts:1915"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"isattached"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isattached"}},[t._v("#")]),t._v(" isAttached")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("isAttached")]),t._v("("),a("code",[t._v("canvas")]),t._v(": HTMLCanvasElement): "),a("em",[t._v("boolean")])]),t._v(" "),a("h4",{attrs:{id:"parameters-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4"}},[t._v("#")]),t._v(" Parameters:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("canvas")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("HTMLCanvasElement")])])])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("em",[t._v("boolean")])]),t._v(" "),a("p",[t._v("true if the canvas is attached to the platform, false if not.")]),t._v(" "),a("p",[t._v("Inherited from: "),a("RouterLink",{attrs:{to:"/api/classes/baseplatform.html"}},[t._v("BasePlatform")])],1),t._v(" "),a("p",[t._v("Defined in: "),a("a",{attrs:{href:"https://github.com/chartjs/Chart.js/blob/8780e15/types/index.esm.d.ts#L1920",target:"_blank",rel:"noopener noreferrer"}},[t._v("index.esm.d.ts:1920"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"releasecontext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#releasecontext"}},[t._v("#")]),t._v(" releaseContext")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("releaseContext")]),t._v("("),a("code",[t._v("context")]),t._v(": CanvasRenderingContext2D): "),a("em",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Called at chart destruction time, releases any resources associated to the context\npreviously returned by the acquireContext() method.")]),t._v(" "),a("h4",{attrs:{id:"parameters-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-5"}},[t._v("#")]),t._v(" Parameters:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("context")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("CanvasRenderingContext2D")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The context2d instance")])])])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("em",[t._v("boolean")])]),t._v(" "),a("p",[t._v("true if the method succeeded, else false")]),t._v(" "),a("p",[t._v("Inherited from: "),a("RouterLink",{attrs:{to:"/api/classes/baseplatform.html"}},[t._v("BasePlatform")])],1),t._v(" "),a("p",[t._v("Defined in: "),a("a",{attrs:{href:"https://github.com/chartjs/Chart.js/blob/8780e15/types/index.esm.d.ts#L1888",target:"_blank",rel:"noopener noreferrer"}},[t._v("index.esm.d.ts:1888"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"removeeventlistener"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removeeventlistener"}},[t._v("#")]),t._v(" removeEventListener")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("removeEventListener")]),t._v("("),a("code",[t._v("chart")]),t._v(": "),a("RouterLink",{attrs:{to:"/api/classes/chart.html"}},[a("em",[t._v("Chart")])]),t._v("<"),a("em",[t._v("bar")]),t._v(" | "),a("em",[t._v("line")]),t._v(" | "),a("em",[t._v("scatter")]),t._v(" | "),a("em",[t._v("bubble")]),t._v(" | "),a("em",[t._v("pie")]),t._v(" | "),a("em",[t._v("doughnut")]),t._v(" | "),a("em",[t._v("polarArea")]),t._v(" | "),a("em",[t._v("radar")]),t._v(", (number | "),a("RouterLink",{attrs:{to:"/api/interfaces/scatterdatapoint.html"}},[a("em",[t._v("ScatterDataPoint")])]),t._v(" | "),a("RouterLink",{attrs:{to:"/api/interfaces/bubbledatapoint.html"}},[a("em",[t._v("BubbleDataPoint")])]),t._v(")[], unknown>, "),a("code",[t._v("type")]),t._v(": "),a("em",[t._v("string")]),t._v(", "),a("code",[t._v("listener")]),t._v(": ("),a("code",[t._v("e")]),t._v(": "),a("RouterLink",{attrs:{to:"/api/interfaces/chartevent.html"}},[a("em",[t._v("ChartEvent")])]),t._v(") => "),a("em",[t._v("void")]),t._v("): "),a("em",[t._v("void")])],1),t._v(" "),a("p",[t._v("Removes the specified listener previously registered with addEventListener.")]),t._v(" "),a("h4",{attrs:{id:"parameters-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-6"}},[t._v("#")]),t._v(" Parameters:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("chart")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/api/classes/chart.html"}},[a("em",[t._v("Chart")])]),t._v("<"),a("em",[t._v("bar")]),t._v(" | "),a("em",[t._v("line")]),t._v(" | "),a("em",[t._v("scatter")]),t._v(" | "),a("em",[t._v("bubble")]),t._v(" | "),a("em",[t._v("pie")]),t._v(" | "),a("em",[t._v("doughnut")]),t._v(" | "),a("em",[t._v("polarArea")]),t._v(" | "),a("em",[t._v("radar")]),t._v(", (number | "),a("RouterLink",{attrs:{to:"/api/interfaces/scatterdatapoint.html"}},[a("em",[t._v("ScatterDataPoint")])]),t._v(" | "),a("RouterLink",{attrs:{to:"/api/interfaces/bubbledatapoint.html"}},[a("em",[t._v("BubbleDataPoint")])]),t._v(")[], unknown>")],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Chart from which to remove the listener")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("type")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("em",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The ("),a("RouterLink",{attrs:{to:"/api/interfaces/chartevent.html"}},[t._v("ChartEvent")]),t._v(") type to remove")],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("listener")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("("),a("code",[t._v("e")]),t._v(": "),a("RouterLink",{attrs:{to:"/api/interfaces/chartevent.html"}},[a("em",[t._v("ChartEvent")])]),t._v(") => "),a("em",[t._v("void")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The listener function to remove from the event target.")])])])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("em",[t._v("void")])]),t._v(" "),a("p",[t._v("Inherited from: "),a("RouterLink",{attrs:{to:"/api/classes/baseplatform.html"}},[t._v("BasePlatform")])],1),t._v(" "),a("p",[t._v("Defined in: "),a("a",{attrs:{href:"https://github.com/chartjs/Chart.js/blob/8780e15/types/index.esm.d.ts#L1903",target:"_blank",rel:"noopener noreferrer"}},[t._v("index.esm.d.ts:1903"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=v.exports}}]);
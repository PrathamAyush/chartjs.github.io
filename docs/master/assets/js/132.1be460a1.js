(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{441:function(t,a,s){"use strict";s.r(a);var e=s(24),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"area-chart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#area-chart"}},[t._v("#")]),t._v(" Area Chart")]),t._v(" "),s("p",[t._v("Both "),s("a",{attrs:{href:"./line.mdx"}},[t._v("line")]),t._v(" and "),s("a",{attrs:{href:"./radar.mdx"}},[t._v("radar")]),t._v(" charts support a "),s("code",[t._v("fill")]),t._v(" option on the dataset object which can be used to create space between two datasets or a dataset and a boundary, i.e. the scale "),s("code",[t._v("origin")]),t._v(", "),s("code",[t._v("start,")]),t._v(" or "),s("code",[t._v("end")]),t._v(" (see "),s("a",{attrs:{href:"#filling-modes"}},[t._v("filling modes")]),t._v(").")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("This feature is implemented by the "),s("a",{attrs:{href:"https://github.com/chartjs/Chart.js/blob/master/src/plugins/plugin.filler.js",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("filler")]),t._v(" plugin"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"filling-modes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filling-modes"}},[t._v("#")]),t._v(" Filling modes")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Mode")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Values")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Absolute dataset index")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("number")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("1")]),t._v(", "),s("code",[t._v("2")]),t._v(", "),s("code",[t._v("3")]),t._v(", ...")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Relative dataset index")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("string")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("'-1'")]),t._v(", "),s("code",[t._v("'-2'")]),t._v(", "),s("code",[t._v("'+1'")]),t._v(", ...")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Boundary")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("string")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("'start'")]),t._v(", "),s("code",[t._v("'end'")]),t._v(", "),s("code",[t._v("'origin'")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Disabled "),s("sup",[t._v("1")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("boolean")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("false")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Stacked value below")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("string")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("'stack'")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Axis value")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("object")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("{ value: number; }")])])])])]),t._v(" "),s("blockquote",[s("p",[s("sup",[t._v("1")]),t._v(" for backward compatibility, "),s("code",[t._v("fill: true")]),t._v(" is equivalent to "),s("code",[t._v("fill: 'origin'")]),s("br")])]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        datasets"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0: fill to 'origin'")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'+2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1: fill to dataset 3")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2: fill to dataset 1")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3: no fill")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4: fill to dataset 2")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5: fill to axis value 25")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("If you need to support multiple colors when filling from one dataset to another, you may specify an object with the following option :")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Param")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("target")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("number")]),t._v(", "),s("code",[t._v("string")]),t._v(", "),s("code",[t._v("boolean")]),t._v(", "),s("code",[t._v("object")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("The accepted values are the same as the filling mode values, so you may use absolute and relative dataset indexes and/or boundaries.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("above")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Color")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("If no color is set, the default color will be the background color of the chart.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("below")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Color")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Same as the above.")])])])]),t._v(" "),s("h3",{attrs:{id:"example-with-multiple-colors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-with-multiple-colors"}},[t._v("#")]),t._v(" Example with multiple colors")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        datasets"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              fill"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                above"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgb(255, 0, 0)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Area will be red above the origin")]),t._v("\n                below"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgb(0, 0, 255)'")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// And blue below the origin")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Option")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Default")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"#propagate"}},[s("code",[t._v("plugins.filler.propagate")])])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("boolean")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("true")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Fill propagation when target is hidden.")])])])]),t._v(" "),s("h3",{attrs:{id:"propagate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#propagate"}},[t._v("#")]),t._v(" propagate")]),t._v(" "),s("p",[s("code",[t._v("propagate")]),t._v(" takes a "),s("code",[t._v("boolean")]),t._v(" value (default: "),s("code",[t._v("true")]),t._v(").")]),t._v(" "),s("p",[t._v("If "),s("code",[t._v("true")]),t._v(", the fill area will be recursively extended to the visible target defined by the "),s("code",[t._v("fill")]),t._v(" value of hidden dataset targets:")]),t._v(" "),s("h4",{attrs:{id:"example-using-propagate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-using-propagate"}},[t._v("#")]),t._v(" Example using propagate")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        datasets"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0: fill to 'origin'")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1: fill to dataset 0")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2: fill to dataset 1")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3: no fill")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4: fill to dataset 2")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            filler"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                propagate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("code",[t._v("propagate: true")]),t._v(":\n-if dataset 2 is hidden, dataset 4 will fill to dataset 1\n-if dataset 2 and 1 are hidden, dataset 4 will fill to "),s("code",[t._v("'origin'")])]),t._v(" "),s("p",[s("code",[t._v("propagate: false")]),t._v(":\n-if dataset 2 and/or 4 are hidden, dataset 4 will not be filled")])])}),[],!1,null,null,null);a.default=n.exports}}]);
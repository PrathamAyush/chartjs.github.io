(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{469:function(t,a,e){"use strict";e.r(a);var s=e(6),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"area-chart"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#area-chart"}},[t._v("#")]),t._v(" Area Chart")]),t._v(" "),e("p",[t._v("Both "),e("RouterLink",{attrs:{to:"/charts/line.html"}},[t._v("line")]),t._v(" and "),e("RouterLink",{attrs:{to:"/charts/radar.html"}},[t._v("radar")]),t._v(" charts support a "),e("code",[t._v("fill")]),t._v(" option on the dataset object which can be used to create space between two datasets or a dataset and a boundary, i.e. the scale "),e("code",[t._v("origin")]),t._v(", "),e("code",[t._v("start,")]),t._v(" or "),e("code",[t._v("end")]),t._v(" (see "),e("a",{attrs:{href:"#filling-modes"}},[t._v("filling modes")]),t._v(").")],1),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("This feature is implemented by the "),e("a",{attrs:{href:"https://github.com/chartjs/Chart.js/blob/master/src/plugins/plugin.filler/index.js",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("filler")]),t._v(" plugin"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"filling-modes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filling-modes"}},[t._v("#")]),t._v(" Filling modes")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Mode")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Values")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Absolute dataset index")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("1")]),t._v(", "),e("code",[t._v("2")]),t._v(", "),e("code",[t._v("3")]),t._v(", ...")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Relative dataset index")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("'-1'")]),t._v(", "),e("code",[t._v("'-2'")]),t._v(", "),e("code",[t._v("'+1'")]),t._v(", ...")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Boundary")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("'start'")]),t._v(", "),e("code",[t._v("'end'")]),t._v(", "),e("code",[t._v("'origin'")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Disabled "),e("sup",[t._v("1")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("boolean")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Stacked value below")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("'stack'")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Axis value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("object")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("{ value: number; }")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Shape (fill inside line)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("'shape'")])])])])]),t._v(" "),e("blockquote",[e("p",[e("sup",[t._v("1")]),t._v(" for backward compatibility, "),e("code",[t._v("fill: true")]),t._v(" is equivalent to "),e("code",[t._v("fill: 'origin'")]),e("br")])]),t._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("datasets")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0: fill to 'origin'")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'+2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1: fill to dataset 3")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("             "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2: fill to dataset 1")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("         "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3: no fill")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4: fill to dataset 2")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5: fill to axis value 25")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("If you need to support multiple colors when filling from one dataset to another, you may specify an object with the following option :")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Param")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("target")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("number")]),t._v(", "),e("code",[t._v("string")]),t._v(", "),e("code",[t._v("boolean")]),t._v(", "),e("code",[t._v("object")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The accepted values are the same as the filling mode values, so you may use absolute and relative dataset indexes and/or boundaries.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("above")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("Color")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("If no color is set, the default color will be the background color of the chart.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("below")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("Color")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Same as the above.")])])])]),t._v(" "),e("h3",{attrs:{id:"example-with-multiple-colors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-with-multiple-colors"}},[t._v("#")]),t._v(" Example with multiple colors")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("datasets")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("target")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("above")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgb(255, 0, 0)'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Area will be red above the origin")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("below")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgb(0, 0, 255)'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// And blue below the origin")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("p",[t._v("Namespace: "),e("code",[t._v("options.plugins.filler")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Option")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Default")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("drawTime")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("beforeDatasetDraw")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Filler draw time. Supported values: "),e("code",[t._v("'beforeDraw'")]),t._v(", "),e("code",[t._v("'beforeDatasetDraw'")]),t._v(", "),e("code",[t._v("'beforeDatasetsDraw'")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"#propagate"}},[e("code",[t._v("propagate")])])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("boolean")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("true")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Fill propagation when target is hidden.")])])])]),t._v(" "),e("h3",{attrs:{id:"propagate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#propagate"}},[t._v("#")]),t._v(" propagate")]),t._v(" "),e("p",[e("code",[t._v("propagate")]),t._v(" takes a "),e("code",[t._v("boolean")]),t._v(" value (default: "),e("code",[t._v("true")]),t._v(").")]),t._v(" "),e("p",[t._v("If "),e("code",[t._v("true")]),t._v(", the fill area will be recursively extended to the visible target defined by the "),e("code",[t._v("fill")]),t._v(" value of hidden dataset targets:")]),t._v(" "),e("h4",{attrs:{id:"example-using-propagate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-using-propagate"}},[t._v("#")]),t._v(" Example using propagate")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("datasets")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0: fill to 'origin'")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1: fill to dataset 0")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2: fill to dataset 1")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3: no fill")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4: fill to dataset 2")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filler")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("propagate")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[e("code",[t._v("propagate: true")]),t._v(":\n-if dataset 2 is hidden, dataset 4 will fill to dataset 1\n-if dataset 2 and 1 are hidden, dataset 4 will fill to "),e("code",[t._v("'origin'")])]),t._v(" "),e("p",[e("code",[t._v("propagate: false")]),t._v(":\n-if dataset 2 and/or 4 are hidden, dataset 4 will not be filled")])])}),[],!1,null,null,null);a.default=r.exports}}]);
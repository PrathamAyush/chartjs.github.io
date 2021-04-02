(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{441:function(t,a,e){"use strict";e.r(a);var s=e(27),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"labeling-axes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#labeling-axes"}},[t._v("#")]),t._v(" Labeling Axes")]),t._v(" "),e("p",[t._v("When creating a chart, you want to tell the viewer what data they are viewing. To do this, you need to label the axis.")]),t._v(" "),e("h2",{attrs:{id:"scale-title-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scale-title-configuration"}},[t._v("#")]),t._v(" Scale Title Configuration")]),t._v(" "),e("p",[t._v("Namespace: "),e("code",[t._v("options.scales[scaleId].title")]),t._v(", it defines options for the scale title. Note that this only applies to cartesian axes.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("display")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("If true, display the axis title.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("align")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[e("code",[t._v("'center'")])]),t._v(" "),e("td",[t._v("Alignment of the axis title. Possible options are "),e("code",[t._v("'start'")]),t._v(", "),e("code",[t._v("'center'")]),t._v(" and "),e("code",[t._v("'end'")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("text")])]),t._v(" "),e("td",[e("code",[t._v("string")]),t._v("|"),e("code",[t._v("string[]")])]),t._v(" "),e("td",[e("code",[t._v("''")])]),t._v(" "),e("td",[t._v('The text for the title. (i.e. "# of People" or "Response Choices").')])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("color")])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/colors.html"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",[e("code",[t._v("Chart.defaults.color")])]),t._v(" "),e("td",[t._v("Color of label.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("font")])]),t._v(" "),e("td",[e("code",[t._v("Font")])]),t._v(" "),e("td",[e("code",[t._v("Chart.defaults.font")])]),t._v(" "),e("td",[t._v("See "),e("RouterLink",{attrs:{to:"/general/fonts.html"}},[t._v("Fonts")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("padding")])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/padding.html"}},[e("code",[t._v("Padding")])])],1),t._v(" "),e("td",[e("code",[t._v("4")])]),t._v(" "),e("td",[t._v("Padding to apply around scale labels. Only "),e("code",[t._v("top")]),t._v(" and "),e("code",[t._v("bottom")]),t._v(" are implemented.")])])])]),t._v(" "),e("h2",{attrs:{id:"creating-custom-tick-formats"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-custom-tick-formats"}},[t._v("#")]),t._v(" Creating Custom Tick Formats")]),t._v(" "),e("p",[t._v("It is also common to want to change the tick marks to include information about the data type. For example, adding a dollar sign ('$'). To do this, you need to override the "),e("code",[t._v("ticks.callback")]),t._v(" method in the axis configuration.\nIn the following example, every label of the Y-axis would be displayed with a dollar sign at the front.")]),t._v(" "),e("p",[t._v("If the callback returns "),e("code",[t._v("null")]),t._v(" or "),e("code",[t._v("undefined")]),t._v(" the associated grid line will be hidden.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" chart "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        scales"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            y"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                ticks"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Include a dollar sign in the ticks")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("callback")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" values")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("The third parameter passed to the callback function is an array of labels, but in the time scale, it is an array of "),e("code",[t._v("{label: string, major: boolean}")]),t._v(" objects.")])])}),[],!1,null,null,null);a.default=n.exports}}]);
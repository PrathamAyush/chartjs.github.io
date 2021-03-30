(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{432:function(t,e,a){"use strict";a.r(e);var o=a(24),v=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"logarithmic-axis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logarithmic-axis"}},[t._v("#")]),t._v(" Logarithmic Axis")]),t._v(" "),a("p",[t._v("The logarithmic scale is used to chart numerical data. It can be placed on either the x or y-axis. As the name suggests, logarithmic interpolation is used to determine where a value lies on the axis.")]),t._v(" "),a("h2",{attrs:{id:"configuration-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[t._v("#")]),t._v(" Configuration Options")]),t._v(" "),a("h3",{attrs:{id:"common-options-to-all-cartesian-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-options-to-all-cartesian-axes"}},[t._v("#")]),t._v(" Common options to all cartesian axes")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId]")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("bounds")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("'ticks'")])]),t._v(" "),a("td",[t._v("Determines the scale bounds. "),a("a",{attrs:{href:"./index.mdx#scale-bounds"}},[t._v("more...")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("position")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Position of the axis. "),a("a",{attrs:{href:"./index.mdx#axis-position"}},[t._v("more...")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("axis")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Which type of axis this is. Possible values are: "),a("code",[t._v("'x'")]),t._v(", "),a("code",[t._v("'y'")]),t._v(". If not set, this is inferred from the first character of the ID which should be "),a("code",[t._v("'x'")]),t._v(" or "),a("code",[t._v("'y'")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("offset")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to "),a("code",[t._v("true")]),t._v(" for a bar chart by default.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("title")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Scale title configuration. "),a("RouterLink",{attrs:{to:"/axes/labelling.html#scale-title-configuration"}},[t._v("more...")])],1)])])]),t._v(" "),a("h3",{attrs:{id:"common-options-to-all-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-options-to-all-axes"}},[t._v("#")]),t._v(" Common options to all axes")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId]")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("type")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("alignToPixels")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Align pixel values to device pixels.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("backgroundColor")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/axes/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Background color of the scale area.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("display")])]),t._v(" "),a("td",[a("code",[t._v("boolean")]),t._v("|"),a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("Controls the axis global visibility (visible when "),a("code",[t._v("true")]),t._v(", hidden when "),a("code",[t._v("false")]),t._v("). When "),a("code",[t._v("display: 'auto'")]),t._v(", the axis is visible only if at least one associated dataset is visible.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("grid")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Grid line configuration. "),a("a",{attrs:{href:"./styling.mdx#grid-line-configuration"}},[t._v("more...")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("min")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("User defined minimum number for the scale, overrides minimum value from data. "),a("a",{attrs:{href:"./index.mdx#axis-range-settings"}},[t._v("more...")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("max")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("User defined maximum number for the scale, overrides maximum value from data. "),a("a",{attrs:{href:"./index.mdx#axis-range-settings"}},[t._v("more...")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("reverse")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Reverse the scale.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("stacked")])]),t._v(" "),a("td",[a("code",[t._v("boolean")]),t._v("|"),a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Should the data be stacked. "),a("a",{attrs:{href:"./index.mdx#stacking"}},[t._v("more...")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("suggestedMax")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Adjustment used when calculating the maximum data value. "),a("a",{attrs:{href:"./index.mdx#axis-range-settings"}},[t._v("more...")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("suggestedMin")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Adjustment used when calculating the minimum data value. "),a("a",{attrs:{href:"./index.mdx#axis-range-settings"}},[t._v("more...")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ticks")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Tick configuration. "),a("a",{attrs:{href:"#tick-configuration"}},[t._v("more...")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("weight")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("The weight used to sort the axis. Higher weights are further away from the chart area.")])])])]),t._v(" "),a("h2",{attrs:{id:"tick-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tick-configuration"}},[t._v("#")]),t._v(" Tick Configuration")]),t._v(" "),a("h3",{attrs:{id:"logarithmic-axis-specific-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logarithmic-axis-specific-options"}},[t._v("#")]),t._v(" Logarithmic Axis specific options")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId]")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("format")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Intl.NumberFormat")]),a("OutboundLink")],1),t._v(" options used by the default label formatter")])])])]),t._v(" "),a("h3",{attrs:{id:"common-tick-options-to-all-cartesian-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-tick-options-to-all-cartesian-axes"}},[t._v("#")]),t._v(" Common tick options to all cartesian axes")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId].ticks")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("align")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("'center'")])]),t._v(" "),a("td",[t._v("The tick alignment along the axis. Can be "),a("code",[t._v("'start'")]),t._v(", "),a("code",[t._v("'center'")]),t._v(", or "),a("code",[t._v("'end'")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("crossAlign")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("'near'")])]),t._v(" "),a("td",[t._v("The tick alignment perpendicular to the axis. Can be "),a("code",[t._v("'near'")]),t._v(", "),a("code",[t._v("'center'")]),t._v(", or "),a("code",[t._v("'far'")]),t._v(". See "),a("a",{attrs:{href:"./index#tick-alignment"}},[t._v("Tick Alignment")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("sampleSize")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("ticks.length")])]),t._v(" "),a("td",[t._v("The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("autoSkip")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("If true, automatically calculates how many labels can be shown and hides labels accordingly. Labels will be rotated up to "),a("code",[t._v("maxRotation")]),t._v(" before skipping any. Turn "),a("code",[t._v("autoSkip")]),t._v(" off to show all labels no matter what.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("autoSkipPadding")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("3")])]),t._v(" "),a("td",[t._v("Padding between the ticks on the horizontal axis when "),a("code",[t._v("autoSkip")]),t._v(" is enabled.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("labelOffset")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis). "),a("em",[t._v("Note: this can cause labels at the edges to be cropped by the edge of the canvas")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("maxRotation")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("50")])]),t._v(" "),a("td",[t._v("Maximum rotation for tick labels when rotating to condense labels. Note: Rotation doesn't occur until necessary. "),a("em",[t._v("Note: Only applicable to horizontal scales.")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("minRotation")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("Minimum rotation for tick labels. "),a("em",[t._v("Note: Only applicable to horizontal scales.")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("mirror")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Flips tick labels around axis, displaying the labels inside the chart instead of outside. "),a("em",[t._v("Note: Only applicable to vertical scales.")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("padding")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("Padding between the tick label and the axis. When set on a vertical axis, this applies in the horizontal (X) direction. When set on a horizontal axis, this applies in the vertical (Y) direction.")])])])]),t._v(" "),a("h3",{attrs:{id:"common-tick-options-to-all-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-tick-options-to-all-axes"}},[t._v("#")]),t._v(" Common tick options to all axes")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId].ticks")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Scriptable")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("callback")])]),t._v(" "),a("td",[a("code",[t._v("function")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Returns the string representation of the tick value as it should be displayed on the chart. See "),a("RouterLink",{attrs:{to:"/axes/axes/labelling.html#creating-custom-tick-formats"}},[t._v("callback")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("display")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("If true, show tick labels.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("color")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/axes/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("Chart.defaults.color")])]),t._v(" "),a("td",[t._v("Color of ticks.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("font")])]),t._v(" "),a("td",[a("code",[t._v("Font")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("Chart.defaults.font")])]),t._v(" "),a("td",[t._v("See "),a("RouterLink",{attrs:{to:"/axes/general/fonts.html"}},[t._v("Fonts")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("major")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("{}")])]),t._v(" "),a("td",[a("a",{attrs:{href:"./styling.mdx#major-tick-configuration"}},[t._v("Major ticks configuration")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("padding")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("3")])]),t._v(" "),a("td",[t._v("Sets the offset of the tick labels from the axis")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("textStrokeColor")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/axes/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("``")]),t._v(" "),a("td",[t._v("The color of the stroke around the text.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("textStrokeWidth")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("Stroke width around the text.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("z")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("z-index of tick layer. Useful when ticks are drawn on chart area. Values <= 0 are drawn under datasets, > 0 on top.")])])])]),t._v(" "),a("h2",{attrs:{id:"internal-data-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#internal-data-format"}},[t._v("#")]),t._v(" Internal data format")]),t._v(" "),a("p",[t._v("Internally, the logarithmic scale uses numeric data.")])])}),[],!1,null,null,null);e.default=v.exports}}]);
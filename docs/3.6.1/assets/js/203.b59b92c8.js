(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{493:function(n,t,o){"use strict";o.r(t);var s=o(3),i=Object(s.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"position"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#position"}},[this._v("#")]),this._v(" Position")]),this._v(" "),t("p",[this._v("This sample show how to change the position of the chart legend.")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:actions:2>\nconst actions = [\n  {\n    name: 'Position: top',\n    handler(chart) {\n      chart.options.plugins.legend.position = 'top';\n      chart.update();\n    }\n  },\n  {\n    name: 'Position: right',\n    handler(chart) {\n      chart.options.plugins.legend.position = 'right';\n      chart.update();\n    }\n  },\n  {\n    name: 'Position: bottom',\n    handler(chart) {\n      chart.options.plugins.legend.position = 'bottom';\n      chart.update();\n    }\n  },\n  {\n    name: 'Position: left',\n    handler(chart) {\n      chart.options.plugins.legend.position = 'left';\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=i.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{526:function(n,t,s){"use strict";s.r(t);var o=s(27),e=Object(o.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"center-positioning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#center-positioning"}},[this._v("#")]),this._v(" Center Positioning")]),this._v(" "),t("p",[this._v("This sample show how to place the axis in the center of the chart area, instead of at the edges.")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:actions:2>\nconst actions = [\n  {\n    name: 'Default Positions',\n    handler(chart) {\n      chart.options.scales.x.position = 'bottom';\n      chart.options.scales.y.position = 'left';\n      chart.update();\n    }\n  },\n  {\n    name: 'Position: center',\n    handler(chart) {\n      chart.options.scales.x.position = 'center';\n      chart.options.scales.y.position = 'center';\n      chart.update();\n    }\n  },\n  {\n    name: 'Position: Vertical: x=-60, Horizontal: y=30',\n    handler(chart) {\n      chart.options.scales.x.position = {y: 30};\n      chart.options.scales.y.position = {x: -60};\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n\n// <block:setup:1>\nconst DATA_COUNT = 6;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\nconst data = {\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.points(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.points(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'scatter',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      title: {\n        display: true,\n        text: 'Axis Center Positioning'\n      }\n    },\n    scales: {\n      x: {\n        min: -100,\n        max: 100,\n      },\n      y: {\n        min: -100,\n        max: 100,\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);
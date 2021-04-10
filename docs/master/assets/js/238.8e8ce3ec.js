(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{563:function(t,n,o){"use strict";o.r(n);var s=o(7),e=Object(s.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"custom-tooltip-content"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#custom-tooltip-content"}},[this._v("#")]),this._v(" Custom Tooltip Content")]),this._v(" "),n("p",[this._v("This sample shows how to use the tooltip callbacks to add additional content to the tooltip.")]),this._v(" "),n("chart-editor",{attrs:{code:"// <block:footer:2>\nconst footer = (tooltipItems) => {\n  let sum = 0;\n\n  tooltipItems.forEach(function(tooltipItem) {\n    sum += tooltipItem.parsed.y;\n  });\n  return 'Sum: ' + sum;\n};\n\n// </block:footer>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100, decimals: 0};\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n    },\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    interaction: {\n      intersect: false,\n      mode: 'index',\n    },\n    plugins: {\n      tooltip: {\n        callbacks: {\n          footer: footer,\n        }\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);n.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{471:function(n,t,a){"use strict";a.r(t);var e=a(3),s=Object(e.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"delay"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delay"}},[this._v("#")]),this._v(" Delay")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:actions:2>\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});\n      });\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\n\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      backgroundColor: Utils.CHART_COLORS.red,\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      backgroundColor: Utils.CHART_COLORS.blue,\n    },\n    {\n      label: 'Dataset 3',\n      data: Utils.numbers(NUMBER_CFG),\n      backgroundColor: Utils.CHART_COLORS.green,\n    },\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nvar delayed;\nconst config = {\n  type: 'bar',\n  data: data,\n  options: {\n    animation: {\n      onComplete: () => {\n        delayed = true;\n      },\n      delay: (context) => {\n        let delay = 0;\n        if (context.type === 'data' && context.mode === 'default' && !delayed) {\n          delay = context.dataIndex * 300 + context.datasetIndex * 100;\n        }\n        return delay;\n      },\n    },\n    scales: {\n      x: {\n        stacked: true,\n      },\n      y: {\n        stacked: true\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);
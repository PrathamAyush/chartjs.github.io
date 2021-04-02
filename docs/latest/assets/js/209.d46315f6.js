(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{524:function(n,t,a){"use strict";a.r(t);var e=a(27),s=Object(e.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"scatter-multi-axis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scatter-multi-axis"}},[this._v("#")]),this._v(" Scatter - Multi axis")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:actions:2>\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = Utils.bubbles({count: chart.data.labels.length, rmin: 1, rmax: 1, min: -100, max: 100});\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Add Dataset',\n    handler(chart) {\n      const data = chart.data;\n      const dsColor = Utils.namedColor(chart.data.datasets.length);\n      const newDataset = {\n        label: 'Dataset ' + (data.datasets.length + 1),\n        backgroundColor: Utils.transparentize(dsColor, 0.5),\n        borderColor: dsColor,\n        data: Utils.bubbles({count: data.labels.length, rmin: 1, rmax: 1, min: -100, max: 100}),\n      };\n      chart.data.datasets.push(newDataset);\n      chart.update();\n    }\n  },\n  {\n    name: 'Add Data',\n    handler(chart) {\n      const data = chart.data;\n      if (data.datasets.length > 0) {\n\n        for (var index = 0; index < data.datasets.length; ++index) {\n          data.datasets[index].data.push(Utils.bubbles({count: 1, rmin: 1, rmax: 1, min: -100, max: 100})[0]);\n        }\n\n        chart.update();\n      }\n    }\n  },\n  {\n    name: 'Remove Dataset',\n    handler(chart) {\n      chart.data.datasets.pop();\n      chart.update();\n    }\n  },\n  {\n    name: 'Remove Data',\n    handler(chart) {\n      chart.data.labels.splice(-1, 1); // remove the label first\n\n      chart.data.datasets.forEach(dataset => {\n        dataset.data.pop();\n      });\n\n      chart.update();\n    }\n  }\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, rmin: 1, rmax: 1, min: -100, max: 100};\n\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.bubbles(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n      yAxisID: 'y',\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.bubbles(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.orange,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.orange, 0.5),\n      yAxisID: 'y2',\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'scatter',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      legend: {\n        position: 'top',\n      },\n      title: {\n        display: true,\n        text: 'Chart.js Scatter Multi Axis Chart'\n      }\n    },\n    scales: {\n      y: {\n        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance\n        position: 'left',\n        ticks: {\n          color: Utils.CHART_COLORS.red\n        }\n      },\n      y2: {\n        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance\n        position: 'right',\n        reverse: true,\n        ticks: {\n          color: Utils.CHART_COLORS.blue\n        },\n        grid: {\n          drawOnChartArea: false // only want the grid lines for one axis to show up\n        }\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);
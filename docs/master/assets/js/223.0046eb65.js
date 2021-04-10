(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{549:function(n,t,e){"use strict";e.r(t);var o=e(7),i=Object(o.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"title-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#title-configuration"}},[this._v("#")]),this._v(" Title Configuration")]),this._v(" "),t("p",[this._v("This sample shows how to configure the title of an axis including alignment, font, and color.")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    responsive: true,\n    scales: {\n      x: {\n        display: true,\n        title: {\n          display: true,\n          text: 'Month',\n          color: '#911',\n          font: {\n            family: 'Comic Sans MS',\n            size: 20,\n            weight: 'bold',\n            lineHeight: 1.2,\n          },\n          padding: {top: 20, left: 0, right: 0, bottom: 0}\n        }\n      },\n      y: {\n        display: true,\n        title: {\n          display: true,\n          text: 'Value',\n          color: '#191',\n          font: {\n            family: 'Times',\n            size: 20,\n            style: 'normal',\n            lineHeight: 1.2\n          },\n          padding: {top: 30, left: 0, right: 0, bottom: 0}\n        }\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=i.exports}}]);
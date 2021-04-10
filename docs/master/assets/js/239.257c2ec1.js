(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{565:function(t,n,e){"use strict";e.r(n);var o=e(7),l=Object(o.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"external-html-tooltip"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#external-html-tooltip"}},[this._v("#")]),this._v(" External HTML Tooltip")]),this._v(" "),n("p",[this._v("This sample shows how to use the external tooltip functionality to generate an HTML tooltip.")]),this._v(" "),n("chart-editor",{attrs:{code:"// <block:external:2>\nconst getOrCreateTooltip = (chart) => {\n  let tooltipEl = chart.canvas.parentNode.querySelector('div');\n\n  if (!tooltipEl) {\n    tooltipEl = document.createElement('div');\n    tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';\n    tooltipEl.style.borderRadius = '3px';\n    tooltipEl.style.color = 'white';\n    tooltipEl.style.opacity = 1;\n    tooltipEl.style.pointerEvents = 'none';\n    tooltipEl.style.position = 'absolute';\n    tooltipEl.style.transform = 'translate(-50%, 0)';\n    tooltipEl.style.transition = 'all .1s ease';\n\n    const table = document.createElement('table');\n    table.style.margin = '0px';\n\n    tooltipEl.appendChild(table);\n    chart.canvas.parentNode.appendChild(tooltipEl);\n  }\n\n  return tooltipEl;\n};\n\nconst externalTooltipHandler = (context) => {\n  // Tooltip Element\n  const {chart, tooltip} = context;\n  const tooltipEl = getOrCreateTooltip(chart);\n\n  // Hide if no tooltip\n  if (tooltip.opacity === 0) {\n    tooltipEl.style.opacity = 0;\n    return;\n  }\n\n  // Set Text\n  if (tooltip.body) {\n    const titleLines = tooltip.title || [];\n    const bodyLines = tooltip.body.map(b => b.lines);\n\n    const tableHead = document.createElement('thead');\n\n    titleLines.forEach(title => {\n      const tr = document.createElement('tr');\n      tr.style.borderWidth = 0;\n\n      const th = document.createElement('th');\n      th.style.borderWidth = 0;\n      const text = document.createTextNode(title);\n\n      th.appendChild(text);\n      tr.appendChild(th);\n      tableHead.appendChild(tr);\n    });\n\n    const tableBody = document.createElement('tbody');\n    bodyLines.forEach((body, i) => {\n      const colors = tooltip.labelColors[i];\n\n      const span = document.createElement('span');\n      span.style.background = colors.backgroundColor;\n      span.style.borderColor = colors.borderColor;\n      span.style.borderWidth = '2px';\n      span.style.marginRight = '10px';\n      span.style.height = '10px';\n      span.style.width = '10px';\n      span.style.display = 'inline-block';\n\n      const tr = document.createElement('tr');\n      tr.style.backgroundColor = 'inherit';\n      tr.style.borderWidth = 0;\n\n      const td = document.createElement('td');\n      td.style.borderWidth = 0;\n\n      const text = document.createTextNode(body);\n\n      td.appendChild(span);\n      td.appendChild(text);\n      tr.appendChild(td);\n      tableBody.appendChild(tr);\n    });\n\n    const tableRoot = tooltipEl.querySelector('table');\n\n    // Remove old children\n    while (tableRoot.firstChild) {\n      tableRoot.firstChild.remove();\n    }\n\n    // Add new children\n    tableRoot.appendChild(tableHead);\n    tableRoot.appendChild(tableBody);\n  }\n\n  const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;\n\n  // Display, position, and set styles for font\n  tooltipEl.style.opacity = 1;\n  tooltipEl.style.left = positionX + tooltip.caretX + 'px';\n  tooltipEl.style.top = positionY + tooltip.caretY + 'px';\n  tooltipEl.style.font = tooltip.options.bodyFont.string;\n  tooltipEl.style.padding = tooltip.padding + 'px ' + tooltip.padding + 'px';\n};\n// </block:external>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100, decimals: 0};\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n    },\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    interaction: {\n      mode: 'index',\n      intersect: false,\n    },\n    plugins: {\n      title: {\n        display: true,\n        text: 'Chart.js Line Chart - External Tooltips'\n      },\n      tooltip: {\n        enabled: false,\n        position: 'nearest',\n        external: externalTooltipHandler\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);n.default=l.exports}}]);
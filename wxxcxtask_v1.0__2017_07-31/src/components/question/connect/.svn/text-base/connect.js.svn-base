import HtmlToJson from '../../../wxParse/html2json.js'

function getContentRows(options = []) {
  const rowLength = options.length / 2
  let contentRows = []
  let index = 0
  while (index < rowLength) {
    contentRows.push({
      left: HtmlToJson.html2json(options[index], 'left'),
      right: HtmlToJson.html2json(options[index + rowLength], 'right')
    })
    index++
  }
  return contentRows
}

function getTopByRowLength(rowLength) {
  const rowHeight = 148 / 2
  const rowMarginTop = 30 / 2
  return rowLength * (rowHeight + rowMarginTop) + (rowHeight / 2) + rowMarginTop
}

function getCoordinates(answers = [], rowLength = 0) {
  let coordinates = []
  const screenWidth = 577 / 2
  const rowWidth = 208 / 2
  const rowMarginTop = 30 / 2
  answers.forEach(function (answer) {
    answer = answer.answer.split(',')
    const begin = answer[0] * 1
    const end = answer[1] * 1
    coordinates.push({
      begin: [
        rowWidth,
        getTopByRowLength(begin)
      ],
      end: [
        screenWidth - rowWidth,
        getTopByRowLength(end - rowLength)
      ]
    });
  })
  return coordinates
}

function drawLines(questionId = 0, answers = [], rowLength = 0, color = 'black') {
  let context = wx.createCanvasContext('connect_screen_' + questionId)
  const coordinates = getCoordinates(answers, rowLength)
  coordinates.forEach(function (coordinate) {
    context.moveTo(...coordinate.begin)
    context.lineTo(...coordinate.end)
  })
  context.setStrokeStyle(color)
  context.stroke()
  context.draw()
}

function getParsedData(question = {}) {
  return Object.assign(question, {
    contentRows: getContentRows(question.content.choices)
  })
}

module.exports = {
  getParsedData: getParsedData,
  drawLines: drawLines,
}

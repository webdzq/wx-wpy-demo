import HtmlToJson from '../../../wxParse/html2json.js'

function getParsedAnswer(answer = []) {
  if (answer.length) {
    return HtmlToJson.html2json(answer.join(','), 'answer')
  } else {
    return answer
  }
}

function getParsedData(question = {}) {
  return Object.assign(question, {
    answer: getParsedAnswer(question.answer)
  })
}

module.exports = {
  getParsedData: getParsedData
}

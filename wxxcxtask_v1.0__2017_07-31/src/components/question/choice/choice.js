import HtmlToJson from '../../../wxParse/html2json.js'

function getParsedOptionsByTemplate(options = [], template = 'choice') {
  let newOptions = []
  if (template === 'alter') {
    options = ['错', '对']
  }
  options.forEach(function (value, index) {
    newOptions.push({
      letter: String.fromCharCode(index + 65),
      content: HtmlToJson.html2json(value, 'option')
    })
  })
  return newOptions
}

function getParsedAnswer(answer = []) {
  let newAnswer = []
  // console.log('answer=', answer)
  if (typeof answer.forEach === 'function') {
    answer.forEach(function (value) {
      newAnswer.push(String.fromCharCode(value * 1 + 65))
    })
    return newAnswer.join('')
  } else {
    return answer
  }
}

function getParsedData(question = {}) {
  let choices = question.content ? question.content.choices : []
  // console.log('answer=', question.answer)
  return Object.assign(question, {
    options: getParsedOptionsByTemplate(choices, question.template),
    answer: getParsedAnswer(question.answer)
  })
}

module.exports = {
  getParsedData: getParsedData
}

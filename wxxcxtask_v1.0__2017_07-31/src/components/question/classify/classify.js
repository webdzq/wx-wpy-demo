import HtmlToJson from '../../../wxParse/html2json.js'

function getParsedOptions(options = []) {
  let newOptions = []
  options.forEach(function (value, index) {
    newOptions.push(HtmlToJson.html2json(value, 'option'))
  })
  return newOptions
}

function getParsedAnswerWithOptions(answer = [], options = []) {
  let newAnswer = []
  answer.forEach(function (group, gIndex) {
    const groupAnswers = group.answer.split(',')
    newAnswer.push({
      name: group.name,
      answer: []
    })
    groupAnswers.forEach(function (gAnswer) {
      newAnswer[gIndex].answer.push(options[gAnswer])
    })
  })
  return newAnswer
}

function getParsedData(question = {}) {
  const parsedOptions = getParsedOptions(question.content.choices)
  return Object.assign(question, {
    classifyOptions: parsedOptions,
    answer: getParsedAnswerWithOptions(question.answer, parsedOptions)
  })
}

module.exports = {
  getParsedData: getParsedData
}

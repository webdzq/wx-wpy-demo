import HtmlToJson from '../../../wxParse/html2json.js'

function getParsedData(question = '') {
  let stem = question.stem
  if (question.template === 'cloze') {
    question.children.forEach(function (child, cIndex) {
      const childIndex = child.index.toString()
      stem = stem.replace(/\(_\)/, '<span class="fill_blank">' + childIndex.substring(0, childIndex.length - 1) + '</span>')
    })
    return HtmlToJson.html2json(stem, 'stem')
  } else {
    if (stem) {
      stem = stem.replace(/\(_\)/g, '<span class="fill_blank"></span>')
      return HtmlToJson.html2json(stem, 'stem')
    } else {
      return stem
    }
  }
}

module.exports = {
  getParsedData: getParsedData
}

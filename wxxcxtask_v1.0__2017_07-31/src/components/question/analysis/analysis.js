import HtmlToJson from '../../../wxParse/html2json.js'

function getParsedData(analysis = '') {
  if (analysis) {
    return HtmlToJson.html2json(analysis, 'analysis')
  } else {
    return analysis
  }
}

module.exports = {
  getParsedData: getParsedData
}

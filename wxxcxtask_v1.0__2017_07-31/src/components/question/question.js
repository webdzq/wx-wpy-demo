import Stem from './stem/stem.js'
import Point from './point/point.js'
import Analysis from './analysis/analysis.js'
import Choice from './choice/choice.js'
import Fill from './fill/fill.js'
import Answer from './answer/answer.js'
import Multi from './multi/multi.js'
import Classify from './classify/classify.js'
import Connect from './connect/connect.js'
import WxParse from '../../wxParse/wxParse.js'

function getParsedData(question = {}, callback) {
  let point = Point.getParsedData(question.point || [])
  let analysis = Analysis.getParsedData(question.analysis)
  let index = question.index
  if (index && index.toString().indexOf('.') < 0) {
    index = index.toString().length === 1 ? '0' + index + '.' : index + '.'
  }
  question = Object.assign(question, {
    index: index,
    point: point,
    analysis: analysis
  })
  if (question.template === 'choice') {
    question = Choice.getParsedData(question)
  } else if (question.template === 'multi-choice') {
    question = Choice.getParsedData(question)
  } else if (question.template === 'alter') {
    question = Choice.getParsedData(question)
  } else if (question.template === 'fill' || question.type_id === '3') {
    question = Fill.getParsedData(question)
  } else if (question.template === 'answer') {
    question = Answer.getParsedData(question)
  } else if (question.template === 'multi') {
    question = Multi.getParsedData(question)
  } else if (question.template === 'listen') {
    question = Multi.getParsedData(question)
  } else if (question.template === 'cloze') {
    question = Multi.getParsedData(question)
  } else if (question.template === 'classify') {
    question = Classify.getParsedData(question)
  } else if (question.template === 'connect') {
    question = Connect.getParsedData(question)
  }
  return Object.assign(question, {
    stem: Stem.getParsedData(question),
  })
}

function wxAutoImageCal(originalWidth, originalHeight, that, bindName, shortage) {
  //获取图片的原始长宽
  var windowWidth = 0,
    windowHeight = 0;
  var autoWidth = 0,
    autoHeight = 0;
  var results = {};
  wx.getSystemInfo({
    success: function (res) {
      // var padding = that.data[bindName].view.imagePadding;
      //   var padding = 60;
      windowWidth = (res.windowWidth - shortage) * 2;
      windowHeight = res.windowHeight;
      // 判断按照那种方式进行缩放
      console.log("windowWidth=", originalWidth, originalHeight, windowWidth, windowHeight);
      if (originalWidth > windowWidth) { //在图片width大于手机屏幕width时候
        autoWidth = windowWidth;
        // console.log("autoWidth" + autoWidth);
        autoHeight = (autoWidth * originalHeight) / originalWidth;
        // console.log("autoHeight" + autoHeight);
        results.imageWidth = autoWidth;
        results.imageheight = autoHeight;
      } else { //否则展示原来的数据
        results.imageWidth = originalWidth;
        results.imageheight = originalHeight;
      }
    }
  })
  return results;
}

function circleNodesToFixImageSize(nodes, imageSrc, imageWidth, imageHeight) {
  nodes.forEach(function (node, iIndex) {
    if (node.nodes && node.nodes.length) {
      circleNodesToFixImageSize(node.nodes, imageSrc, imageWidth, imageHeight)
    } else {
      if (node.node === 'element' && node.tag === 'img') {
        if (node.attr.src === imageSrc) {
          node.height = imageHeight
          node.width = imageWidth
        }
      }
    }

  })
}

function resizeContentImage(tagFrom, questions, imageSrc, imageWidth, imageHeight) {
  if (tagFrom === 'options') {
    let options = questions.options || []
    options.forEach(function (option, oIndex) {
      circleNodesToFixImageSize(option.content.nodes, imageSrc, imageWidth, imageHeight)
    })
  } else if (tagFrom === 'classifyOptions') {
    let options = questions.classifyOptions || []
    options.forEach(function (option, oIndex) {
      circleNodesToFixImageSize(option.nodes, imageSrc, imageWidth, imageHeight)
    })
  } else {
    let nodes = questions[tagFrom] && questions[tagFrom].nodes ? questions[tagFrom].nodes : []
    circleNodesToFixImageSize(nodes, imageSrc, imageWidth, imageHeight)
  }
  if (questions.template === 'multi' || questions.template === 'cloze' || questions.template === 'listen') {
    let children = questions.children
    children.forEach(function (child, cIndex) {
      let childQuestions = child.questions ? child.questions : child
      if (tagFrom === 'option') {
        let options = childQuestions.options || []
        options.forEach(function (option, oIndex) {
          circleNodesToFixImageSize(option.content.nodes, imageSrc, imageWidth, imageHeight)
        })
      } else {
        let nodes = childQuestions[tagFrom] && childQuestions[tagFrom].nodes ? childQuestions[tagFrom].nodes : []
        circleNodesToFixImageSize(nodes, imageSrc, imageWidth, imageHeight)
      }
    })
  }
  return questions
}

module.exports = {
  getParsedData: getParsedData,
  wxAutoImageCal: wxAutoImageCal,
  resizeContentImage: resizeContentImage
}

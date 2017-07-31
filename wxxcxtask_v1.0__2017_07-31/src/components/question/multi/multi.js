import Stem from '../stem/stem.js';
import Point from '../point/point.js';
import Analysis from '../analysis/analysis.js';
import Choice from '../choice/choice.js';
import Fill from '../fill/fill.js';
import Answer from '../answer/answer.js';
import Connect from '../connect/connect.js';

function getParsedChildren(parentTypeid = '', children = [], parentIndex = '') {
  let parsedChildren = []
  children.forEach(function (child, cIndex) {
    let childIndex = child.index || ''
    if (parentIndex) {
      if (parentTypeid === '8' || parentTypeid === '22') {
        if (childIndex && childIndex.toString().indexOf('-') > 0) {
          childIndex = childIndex.substring(childIndex.indexOf('-') + 1)
        } else {
          childIndex = cIndex + 1
        }
      } else {
        if (childIndex) {
          if ((childIndex + '').length === 1) {
            childIndex = '0' + childIndex + '.'
          } else {
            childIndex = childIndex + '.'
          }
        }
      }
    } else if (children[0].index) {
      if ((children[0].index * 1 + cIndex + '').length === 1) {
        childIndex = '0' + (children[0].index * 1 + cIndex) + '.'
      } else {
        childIndex = children[0].index * 1 + cIndex + '.'
      }
    }
    Object.assign(child, {
      stem: Stem.getParsedData(child),
      point: Point.getParsedData(child.point || []),
      analysis: Analysis.getParsedData(child.analysis),
      index: childIndex + ''
    })
    if (child.template === 'choice') {
      parsedChildren.push(Choice.getParsedData(child))
    } else if (child.template === 'multi-choice') {
      parsedChildren.push(Choice.getParsedData(child))
    } else if (child.template === 'alter') {
      parsedChildren.push(Choice.getParsedData(child))
    } else if (child.template === 'fill' || child.type_id === '3') {
      parsedChildren.push(Fill.getParsedData(child))
    } else if (child.template === 'answer') {
      parsedChildren.push(Answer.getParsedData(child))
    } else if (child.template === 'connect') {
      parsedChildren.push(Connect.getParsedData(child))
    }
  })
  return parsedChildren
}

function getParsedData(question = {}) {
  return Object.assign(question, {
    children: getParsedChildren(question.type_id, question.children, question.index)
  })
}

module.exports = {
  getParsedData: getParsedData
}

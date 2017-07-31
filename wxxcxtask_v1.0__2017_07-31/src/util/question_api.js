function getTypenameByTypeid(type_id) {
  const names = {
    1: '单选题',
    2: '多选题',
    3: '填空题',
    4: '判断题',
    5: '材料阅读',
    6: '问答题',
    7: '连线题',
    8: '计算题',
    9: '听音选择',
    10: '听音判断',
    11: '听音连线',
    12: '听音填空',
    13: '归类题',
    14: '阅读理解',
    15: '完形填空',
    16: '翻译题',
    17: '改错题',
    18: '听力选择',
    19: '听力填空',
    20: '排序题',
    21: '听音排序',
    22: '解答题'
  }
  return names[type_id]
}

function getDifficultyName(code) {
  const names = {
    0: '不限',
    1: '容易',
    2: '较易',
    3: '一般',
    4: '较难',
    5: '困难'
  }
  return names[code]
}

module.exports = {
  getTypenameByTypeid,
  getDifficultyName
}

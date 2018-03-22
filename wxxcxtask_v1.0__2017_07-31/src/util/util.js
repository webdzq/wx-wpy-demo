/**
 * date:2017.05.23
 * @param {any} vtime :输入毫秒
 * @returns 输出格式：2017.05.23 22:00
 */

function formatDate(vtime) {   
  const time = vtime || 0
  const date = new Date(time)
  const year = date.getFullYear()
  const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
  const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
  const hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours()
  const minute = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()
  // const Second = date.getSeconds()
  return year + '.' + month + '.' + day + ' ' + hour + ':' + minute
}

function resolveDate(vtime) {
  const datetime = vtime || '2000.1.1 00:00'
  // console.log('resolveDate=', datetime)
  let dateTimeArr = datetime.split(' ')
  const date = dateTimeArr[0]
  const time = dateTimeArr[1]
  // console.log('resolveDate=', date, time)
  const dateArr = date.split('.')
  const timeArr = time.split(':')
  const year = dateArr[0]
  const month = dateArr[1] - 1
  const day = dateArr[2]
  const hour = timeArr[0]
  const minute = timeArr[1]
  const standardtime = new Date(year, month, day, hour, minute).getTime()
  return {
    year: year,
    month: month,
    day: day,
    hour: hour,
    minute: minute,
    standardtime: standardtime
  }
}

export {
  formatDate,
  resolveDate
}

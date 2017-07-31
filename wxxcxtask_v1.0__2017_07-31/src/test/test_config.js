/**
 * @bref：测试配置文件
 * @说明：
 * 第一步：导入json文件
 * 第二步：调用 setTestUrlObjItem设置拦截url和配置数据
 * 第三步：在要拦截的的文件(使用文件)中，导入这个文件：import  setProxy from '../test.config.js'
 * 第三步：调用setProxy传入参数
 * setProxy(param, function (listData) {
      callback(listData)
    })。参数说明参照test.util.js。
 * @ps：也可以直接使用test.util.js进行测试。但是作为统一的项目，最好使用这个文件配置。
 * 上线时候，只需注释setProxy这个方法就ok，实现了松耦合
 */


import rquestproxy, { setTestUrlObjItem } from '../test/test_util.js'

// import { host } from '../config'
import workList from '../test/worklist_json'
import workSetion from '../test/workSetion_json'
import reviewWork from '../test/reviewWork_json'
import login from '../test/login_json'
import updateHwkTime from '../test/updateHwkTime_json'
import workView from '../test/workView_json'
import userInfo from '../test/userInfo_json'
import submitSubjectiveCheck from '../test/submitSubjectiveCheck_json'
import getQuestion from '../test/getQuestion_json'
import checkDetailData from '../test/checkDetailData_json'
import getAnswerOriImgData from '../test/getAnswerOriImgData_json'
const HOST = 'https://www.xxxxxxx.com'
setTestUrlObjItem(HOST + '/wx/historyHwk/getHistoryMore.do', workList)
setTestUrlObjItem(HOST + '/wx/q/deletePaper.do', workSetion)
setTestUrlObjItem(HOST + '/wx/historyHwk/getCheckIndex.do', reviewWork)
setTestUrlObjItem(HOST + '/wx/q/adjustQ.do', workSetion)
setTestUrlObjItem(HOST + '/wx/q/addAudioComment.do', workSetion)
setTestUrlObjItem(HOST + '/wx/q/delAudioComment.do', workSetion)
setTestUrlObjItem(HOST + '/wx/user/loginByPassport.do', login)
setTestUrlObjItem(HOST + '/wx/user/login.do', login)
setTestUrlObjItem(HOST + '/wx/historyHwk/updateHwkTime.do', workSetion)
setTestUrlObjItem(HOST + '/wx/historyHwk/deleteHwk.do', workSetion)
setTestUrlObjItem(HOST + '/wx/historyHwk/getPaper.do', workView)
setTestUrlObjItem(HOST + '/wx/my/getUserInfo.do', userInfo)
setTestUrlObjItem(HOST + '/wx/user/logout.do', workSetion)
setTestUrlObjItem(HOST + '/wx/my/setSubject.do', workSetion)
setTestUrlObjItem(HOST + '/wx/q/submitSubjectiveCheck.do', submitSubjectiveCheck)
setTestUrlObjItem(HOST + '/wx/historyHwk/getQuestion.do', getQuestion)
setTestUrlObjItem(HOST + '/wx/historyHwk/getTypeAnswerCheckDetail.do', checkDetailData)
setTestUrlObjItem(HOST + ' /wx/q/getAnswerOriImg.do', getAnswerOriImgData)



export default function setProxy(params, callback) {
    rquestproxy(params, callback)
}
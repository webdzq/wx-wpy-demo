import setProxy from '../test/test_config'
module.exports = {
  'version': '1.0',
  'HOST_URI': 'https://www.xxxxxxx.com/wx',
  'login': '/user/login.do',
  'loginByPassport': '/user/loginByPassport.do',
  'logout': '/user/logout.do',
  'sendMsgCode': '/user/xxxsendMsgCode.do',
  'validMsgCode': '/user/xxxvalidMsgCode.do',
  'resetPassword': '/user/xxxresetPassword.do',
  'getUserInfo': '/my/getUserInfo.do',
  'setSubject': '/my/setSubject.do',
  'getPaper': '/historyHwk/getPaper.do',
  'getQuestion': '/historyHwk/getQuestion.do',
  'getCheckIndex': '/historyHwk/getCheckIndex.do',
  'getAnswerInfo': '/historyHwk/getTypeAnswerCheckDetail.do',
  'submitSubjectiveCheck': '/q/submitSubjectiveCheck.do',
  'finishSubjectiveCheck': '/q/finishSubjectiveCheck.do',
  'addAudioComment': '/q/addAudioComment.do',
  'delAudioComment': '/q/delAudioComment.do',
  'submitAnswerImg': '/q/submitAnswerImg.do',
  'getHistoryMore': '/historyHwk/getHistoryMore.do',
  'updateHwkTime': '/historyHwk/updateHwkTime.do',
  'deleteHwk': '/historyHwk/deleteHwk.do',
  'getAnswerOriImg': '/q/getAnswerOriImg.do',
  validateLogIn: function (vcode, callback, otherback) {
    const code = vcode || 0
    if (code === 99) {
      wx.showToast({
        title: '您的账号已在其他地方登录了，请重新登录',
        icon: 'fail',
        duration: 3000
      })
      wx.redirectTo({
        url: '../login/login'
      })
      return false
    } else if (code === 0) {
      callback && callback()
    } else {
      // flag =true，不检查Storage，否则可能跳转登录页
      const flag = otherback && otherback(code)
      if (flag) {
        return false
      }
      wx.getStorage({
        key: 'xcx_yixueyilian_privacy',
        success(res) {
          // console.log('res=', res.data)
          if (!res.data) {
            wx.redirectTo({
              url: '../login/login'
            })
          } else {
            otherback && otherback(code)
          }
        },
        fail() {
          // 登录态过期
          wx.redirectTo({
            url: '../login/login'
          })
        }
      })
    }
  },
  requestWrap: function (params) {
    // 对wx.request做包装处理
    const deflt = {
      url: '',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success(res) {
        // success
      },
      fail() {
        // fail
      },
      timedout() {

      },
      complete() {
        // complete
      }
    }

    const param = Object.assign(deflt, params)
    wx.request({
      url: param.url,
      data: param.data,
      method: param.method,
      success: function (res) {
        // success
        param.success && param.success(res)
      },
      fail: function (res) {
        // fail
        const str = res && res.errMsg
        if (str.indexOf('timeout') !== -1) {
          wx.showToast({
            title: '请求超时',
            duration: 3000
          })
          param.timedout && param.timedout(res)
        } else {
          param.fail && param.fail(res)
        }
      },
      complete: function (res) {
        // complete
        param.complete && param.complete(res)
      }
    })
  },
  isNetWork: function (callbackSuc, callbackFail, callbackCompl) {
    // 是否有网络
    wx.getNetworkType({
      success(res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        let networkType = res.networkType
        if (networkType === 'none') {
          wx.showToast({
            title: '网络未连接，请检查后重试',
            duration: 3000
          })
          callbackFail && callbackFail(res)
        } else {
          callbackSuc && callbackSuc(res)
        }
      },
      fail(res) {
        wx.showToast({
          title: '未检测到网络情况',
          duration: 3000
        })
        callbackFail && callbackFail(res)
      },
      complete(res) {
        callbackCompl && callbackCompl(res)
      }
    })
  },
  testRquestproxy: function (params, callback) {
    setProxy(params, callback)
  }
}

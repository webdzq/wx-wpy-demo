/**
 * date:2017.5.22
 * @bref:使用es的proxy对函数或对象进行拦截,实现接口数据模拟测试
 * @使用说明：
 *  第一步：import rquestproxy,{setTestUrlObjItem} from '../test.config.js'
 *  第二步：将拦截的url配置到testUrlObj中。调用setTestUrlObjItem
 *  第三步：rquestproxy(param,callback)。参数说明：
 *   param 是wx.request的对象参数，如：const param = {
      url: host + '/wx/historyHwk/getHistoryMore.do',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(workListData)
        callback(workListData)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    }
    callback是回调函数。用了把测试数据返回
 * 
 * 
 */

const testUrlObj = {

}
let handler = {
    get: function(target, name) {
        console.log('get..', name)
        testUrlObj[name]
        return testUrlObj[name]
    },
    apply: function(target, context, args) {
        console.log('apply..', args)
        const url = args[0].url
        const datas = {}
        datas.data = testUrlObj[url]
        if (datas.data) {
            args[0] && args[0].success(datas)
        }
    },
    construct: function(target, args) {
        console.log('construct..', args)
        return args
    }
}
const setTestUrlObjItem = function(key, value) {
    testUrlObj[key] = value
}
const delTestUrlObjItem = function(key) {
    if (!!testUrlObj[key]) {
        delete testUrlObj[key]
    }
}
const getTestUrlObjItem = function(key) {
    if (testUrlObj[key]) {
        return testUrlObj[key]
    } else {
        return testUrlObj
    }

}
let proxyItem = wx.request
const setProxyItem = function(item, handler) {
    proxyItem = item
    handler = handler
}
const rquestproxy = new Proxy(proxyItem, handler)



export { setProxyItem, setTestUrlObjItem, getTestUrlObjItem, delTestUrlObjItem }
export default rquestproxy
# 微信小程序 wepyjs 第三方datePicker组件

![datePicker](https://github.com/webdzq/wx-wpy-demo/tree/master/wpy-wx-datepicker/datepicker.gif)


## 说明
官方的datPicker只有time和date两种模式。没有组合形式。所有开发了一个格式YYYY-MM-DD HH:MM的日期组件。
此组件依赖于[wepyjs v1.5.2+](https://github.com/wepyjs/wepy)。


## 使用
 有隐藏，有赋值，有事件触发，比较复杂。请看示例吧

### 安装组件
```
npm install wpy-wx-confirmaction --save-dev
```

### 引入组件
```javascript
// index.wpy
<template>
    <CofirmAction :cofirmhidden.sync="cofirmhidden" :actionTitle.sync="actionTitle" />
</template>
<script>
    import wepy from 'wepy';
    import confirmAction from 'wpy-wx-confirmaction';

    export default class Index extends wepy.page {
        components = {
            CofirmAction: confirmAction
        }

    }
</script>
```


### 调用方法（初始化默认值）
```javascript
    this.cofirmhidden = true
    this.actionTitle = '确定要删除吗'
    CofirmAction.initAction({
        confirm() {
            console.log('confirm...')
            that.cofirmhidden = false
            wx.showToast({
            title: "删除成功",
            duration: 3000
            })
        },
        cancel() {
            console.log('cancel...')
            that.cofirmhidden = false
            wx.showToast({
            title: "取消删除",
            duration: 3000
            })
        }
    })
```

## 更多说明
参考[github源码地址](https://github.com/webdzq/wx-wpy-demo/tree/master/wpy-wx-confirmaction)。

// dist/navbar/index.js
// components/navbar/index.js
const App = getApp();

Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    pageName: String,
    showNav: {
      type: Boolean,
      value: true
    },
    showHome: {
      type: Boolean,
      value: false
    },
    /*用于控制是否显示弹窗的变量 */
    homehiden:{
      type: Number,
      value: 0
    } ,
    /*用于控制返回的页数 */
    propb:{
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    attached: function () {
      this.setData({
        navH: App.globalData.navHeight
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //回退
    navBack: function () {
      if(this.propa==1)
      {
        wx.showModal({
          title: '提示',
          content: '你要放弃此次答题么？',
          showCancel: 'true',
          cancelText: '返回首页',/*取消按钮 */
          cancelColor: '#b9c7cf',
          confirmText: '继续答题',/*确认按钮 */
          confirmColor: '#89ccf3',
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } 
            else if (res.cancel) {
              console.log('用户点击取消')
              wx.navigateBack({
                delta: this.Component.propb
              })
            }
          }

        })
      }
      
    },
    //回主页
    toIndex: function () {
      wx.navigateTo({
        url: '/pages/admin/home/index/index'
      })
    },
  }
})
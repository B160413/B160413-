// pages/course/webcourse_all.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teacher: [
      { item_id: "0", item_infor:"手机：13770692869"},
      { item_id: "1", item_infor:"邮箱：1843812352@qq.com"},
      { item_id: "2", item_infor: "答疑信息：周一9.00-12.00 教2-417" }
    ],
    time: [
      { item_id: "0", timeinfor: "周一 9:35 - 11:25(教2-303)  [1-18周]  "},
      { item_id: "1", timeinfor: "周三 8:00 - 9:35(教3-303)  [1-18周]  "}
    ],
    score: [
      { item_id: "0", scoreinfor: "6.0学分" }
    ],
    /*
    list03: [
      { item_id: 11 },
      { item_id: 11 }
    ],
    list04: [
      { item_id: 11 }, 
      { item_id: 11 }, 
      { item_id: 11 }
    ],*/

    // 展开折叠
    selectedFlag: [false, false, false, false,false]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },



  // 展开折叠选择  
  changeToggle: function (e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.selectedFlag[index]) {
      this.data.selectedFlag[index] = false;
    } else {
      this.data.selectedFlag[index] = true;
    }
    this.setData({
      selectedFlag: this.data.selectedFlag
    })
  },
  
  //资源与作业页面跳转
  onPostTap: function (event) {
    var postTarget = event.currentTarget.dataset.tar;
    
    wx.navigateTo({
      url: "webcourse" + postTarget
    })
  },
  WorkOnPostTap: function (event) {
    var postTarget = event.currentTarget.dataset.tar;

    wx.navigateTo({
      url:'/pages/course/work/index/index'
    })
  },
  //回退
  navBack: function () 
  {
    wx.navigateBack({
      delta: 1
    })
  }




})
// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      "/pages/image/cuSwiper1.png",
      "/pages/image/cuSwiper2.png", 
      "/pages/image/cuSwiper3.png"
      ],
    course_list: [
      { id: "1", images: "/pages/image/c1.png", name: 'WEB前端开发',teacher:'韩京宇',finish:'1'},
      { id: "2", images: "/pages/image/c2.png", name: '社会心理学', teacher: '李想', finish: '0'},
      { id: "3", images: "/pages/image/c3.png", name: '线性代数', teacher: '黄小龙', finish: '2'},
      { id: "4", images: "/pages/image/c4.png", name: '现代美术鉴赏', teacher: '陆凯', finish: '1'},
      { id: "5", images: "/pages/image/c5.png", name: '计算机通信与网络', teacher: '胡素君', finish: '0'}
    ],
    work_images:[//此中数据为本地数据，不需要路由获取
      "/pages/image/wenjuandiaocha.png ",//finish=0，有作业，已完成
      "/pages/image/zuoye.png ",//finish=1，有作业，未完成
      "/pages/image/wenjuandiaocha(2).png",//finish=0，无作业
    ]
    
    
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
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



  toast: function (event) {
    wx.navigateTo({
      url:"webcourse_all"
    })
  },
  //回退
  navBack: function () {

  }

})
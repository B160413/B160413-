//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    colorArrays: ["#85B8CF", "#90C652","#D8BFD8", "#FC9F9D", "#DA70D6", "#61BC69", "#87CEFA", "#E29AAD"],
    wlist: [//xqj:星期几    skjc:             skcd:上课长度       kcmc：课程
      { "xqj": 1, "skjc": 1, "skcd": 3, "kcmc": "高等数学@教A-301" },
      { "xqj": 1, "skjc": 5, "skcd": 3, "kcmc": "高等数学@教A-301" },
      { "xqj": 2, "skjc": 1, "skcd": 2, "kcmc": "高等数学@教A-301" },
      { "xqj": 2, "skjc": 8, "skcd": 2, "kcmc": "高等数学@教A-301" },
      { "xqj": 3, "skjc": 8, "skcd": 3, "kcmc": "高等数学@教A-301" },
      { "xqj": 3, "skjc": 5, "skcd": 2, "kcmc": "高等数学@教A-301" },
      { "xqj": 4, "skjc": 2, "skcd": 3, "kcmc": "高等数学@教A-301" },
      { "xqj": 4, "skjc": 8, "skcd": 2, "kcmc": "高等数学@教A-301" },
      { "xqj": 5, "skjc": 1, "skcd": 3, "kcmc": "高等数学@教A-301" },
      { "xqj": 6, "skjc": 3, "skcd": 2, "kcmc": "高等数学@教A-301" },
      { "xqj": 7, "skjc": 5, "skcd": 3, "kcmc": "高等数学@教A-301" },

    ]
  },
  onLoad: function () {
    console.log('onLoad')
  },
  //返回
  navBack: function () {
    wx.navigateBack({
      delta: 1
    })
  }
})

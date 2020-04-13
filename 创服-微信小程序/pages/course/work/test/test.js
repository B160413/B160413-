// pages/test/test.js
const app = getApp()
const App = getApp()
var W
var wrongLists
Page({
  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    realIndex: 0,    //当前题目在数据库中的编号？
    questionCount: 0,
    optionCount: 0,
    wrong: 0,
    right: 0,
    myoption: ["A", "B", "C", "D", "E", "F"],
    isSelected: false,//
    questionArrays: [],
    answerArrays1: ["A", "B", "C"],               /*三个选项题目乱序前的数组6*/
    answerArrays2: ["A", "B", "C", "D"],           /*四个选项题目乱序前的数组*/
    answerArrays3: ["A", "B", "C", "D", "E", "F"],  /*六个选项题目乱序前的数组*/
    setColor: "green",
    icon: ["circle", "circle", "circle", "circle", "circle", "circle"],  
    wrongList:[],//错题列表，存放的是错题的题号;正确答案；错误答案
    count:0, //显示多少道题目
    type:"单选题",
    showModal: false,//弹窗部分的显示情况
    questionIsSelected:[],//标记题目是否有答案被提交
    //unSelected :0,
    //maxtime: "",
    //isHiddenLoading: true,
    //isHiddenToast: true,
    //dataList: {},
    countDownDay: 0,
    countDownHour: 0,
    countDownMinute: 0,
    countDownSecond: 0,
    submitBtn:0,//用于记录提交作业的按钮是否被按了
    result:[],//用于记录做题结果，0：未做；1：正确；2：错误
    cancel:0,

  },
  //乱序算法
  randSort: function () {
    return Math.random() > 0.5 ? 1 : -1;
  },
  //对数组乱序
  /*setList: function () {
    var newList = this.data.questionArrays.sort(this.randSort);
    this.setData({
      list: newList,
    });
  },*/
  //对三个选项乱序
  setOption1: function () {
     var  newOption1 = this.data.answerArrays1.sort(this.randSort);  
    this.setData({
      answerArrays1: newOption1
    })
  },
  //对四个选项乱序
  setOption2: function () {
    var newOption2 = this.data.answerArrays2.sort(this.randSort);
    this.setData({
      answerArrays2: newOption2
    })
  },
  //对六个选项乱序
  setOption3: function () {
    var newOption3 = this.data.answerArrays3.sort(this.randSort);
    this.setData({
      answerArrays3: newOption3
    })
  },


  //点击选项触发函数
  select: function (event) {
    //this.data.questionIsSelected[this.data.index]="true";
    //console.log("题目选择情况"+this.data.questionIsSelected[this.data.index]);
    var str = "questionIsSelected[" + this.data.index + "]";//重点在这里，组合出一个字符串
    var resultStr = "result[" + this.data.index + "]";//重点在这里，组合出一个字符串
    this.setData({
      [str]: true//用中括号把str括起来即可
    })

    /*setTimeout(function () {    //setTimeout实现定时任务
      this.setData({
      icon: ["circle", "circle", "circle", "circle", "circle", "circle"]//选项前小圆圈的图标
      })
    }.bind(this), 200);*/  //bind为绑定函数。正常情况下，调用setTimeout的时候this会指向全局对象，但是使用类的方法时我们需要指向类的实例，所以要把this，绑定要回调函数，方便继续使用实例。
      //以下数据从WXML文件中
    var value = event.currentTarget.dataset.value;  //data-value="{{options[answerArrays2[index]]}}"，获取被选中的选项数组中的元素，即用户对当前题目做出的选择，是一个字符串
    var chooseOption = event.currentTarget.dataset.option; //data-option="{{index}}"，获取在该循环中各个选项的数组下标
    var trueOption = app.globalData.questions[this.data.realIndex].true1;//当前题目的正确选项，值为一个字符
    var trueVaule = app.globalData.questions[this.data.realIndex].option[trueOption];//当前题目的正确选项内容，值为一个字符串
      console.log("选择的选项是：" + chooseOption + " 选择的值：" + value);//在控制台输出当前的选项在循环中的数组下标与选项内容，eg:0;ghjghjgugu
      console.log("本题乱序前的选项是：" + trueOption + " 值是:" + trueVaule);//eg:C;tyughghjjhghjb

      if (value != trueVaule) //根据内容进行选项正确性的判断，而不是根据选项的代号；选错
      {
        var icons = ["circle", "circle", "circle", "circle", "circle", "circle"];
        var tmp = { "order": "", "trueOption": "", "wrongOption": "" };
        icons[chooseOption] = "success";//在此显示选择的对错
        tmp.order = this.data.realIndex;    //order可理解为题目的单号
        tmp.trueOption = trueOption;//eg:C
        tmp.wrongOption = this.data.myoption[chooseOption];//eg:A
        console.log(tmp);//在控制台输出
        //console.log(typeof wrongLists);
        wrongLists.push(tmp);     //wrongLists为一个全局变量，push向此全局变量中推送当前的选择情况*********
        console.log(wrongLists);  //在控制台输出当前的选择情况
        this.setData({//更新页面：选项前的小圆点；错题数目；错题详情
          icon: icons,
          wrong: this.data.wrong + 1,
          wrongList: wrongLists    //在错误清单中添加一条记录
        })
        this.setData({
          [resultStr]: 2//记录做题结果，2：做错
        })
        console.log("order---:" + this.data.wrongList[0].order);//显示当前的选项信息
        W = JSON.stringify(this.data.wrongList)//将wrongList数组转换为一条JSON数据
      } 
      else 
      {//选对
        var icons = ["circle", "circle", "circle", "circle", "circle", "circle"];
        icons[chooseOption] = "success";//在此显示选择的对错
        var tmp = { "order": "", "trueOption": "", "wrongOption": "" };
        tmp.order = this.data.realIndex;    //order可理解为题目的单号
        tmp.trueOption = trueOption;//eg:C
        tmp.wrongOption = this.data.myoption[chooseOption];//此处的wrongOption的含义为myopotion
        console.log(tmp);//在控制台输出
        wrongLists.push(tmp);     //wrongLists为一个全局变量，push向此全局变量中推送当前的选择情况*********
        console.log(wrongLists);  //在控制台输出当前的选择情况*/
        this.setData({//更新正确题数
          icon: icons,
          right: this.data.right + 1,
          wrongList: wrongLists    //在错误清单中添加一条记录
        })
        this.setData({
          [resultStr]: 1//记录做题结果，1：做对
        })
        console.log("order---:" + this.data.wrongList[0].order);//显示当前的选项信息
        W = JSON.stringify(this.data.wrongList)//将wrongList数组转换为一条JSON数据*/
      }
    
    /*if (this.data.index < this.data.questionCount - 1) {//如果题目还没做完
        this.setData({
          isSelected: false,
          index: this.data.index + 1,//index为当前已完成的题目的数目；完成题数+1
        })
        this.setData({
          realIndex: this.data.questionArrays[this.data.index]
        })
        this.setData({
          //questionDetail: app.globalData.questions[this.data.realIndex].question,
          options: app.globalData.questions[this.data.realIndex].option,
          questionImage: app.globalData.questions[this.data.realIndex].question,//问题数组
          optionnumber: app.globalData.questions[this.data.realIndex].number,//选项数目
          type: app.globalData.questions[this.data.realIndex].type,//题目类型
        })
        // console.log("选择后的index:" + this.data.index);
        // console.log("选择后的realIndex:" + this.data.realIndex);
        //console.log(type+"****************************");
      } */
      
    /*if (this.data.index == this.data.questionCount-1 )//只是一次愚蠢的尝试，源自对view组件的不熟悉
    {
      //题目做完了
      if (this.data.questionCount<=7)
      {
        for (var i = 0; i < this.data.questionCount; i++) {
        var str1 = "questionIsSelected1[" + i + "]";//重点在这里，组合出一个字符串
        console.log(this.data.questionIsSelected[i]);
        var temp1=this.data.questionIsSelected[i];
        this.setData({
          [str1]: temp1//用中括号把str括起来即可
        })
      }
      }
        console.log(this.data.questionIsSelected1[6]+"****************************************");

      if (this.data.questionCount > 7 && this.data.questionCount <=14) {
        for (var i = 0; i < this.data.questionCount; i++) {
          var str1 = "questionIsSelected1[" + i + "]";//重点在这里，组合出一个字符串
          console.log(this.data.questionIsSelected[i]);
          var temp1 = this.data.questionIsSelected[i];
          this.setData({
            [str1]: temp1//用中括号把str括起来即可
          })
        }
      }
      console.log(this.data.questionIsSelected1[6] + "****************************************");

      if (this.data.questionCount>14)//默认题目的数量小于21
      {
        for (var i = 14; i < 21; i++) {
        var str3 = "questionIsSelected3[" + i + "]";//重点在这里，组合出一个字符串
        var temp3 = this.data.questionIsSelected[i];
        this.setData({
          [str3]: temp3//用中括号把str括起来即可
        })
      }
      }
        console.log(this.data.questionIsSelected3[1]);

        /*var aw1 = JSON.stringify(this.data.answerArrays1),
          aw2 = JSON.stringify(this.data.answerArrays2),
          aw3 = JSON.stringify(this.data.answerArrays3);//将答案结果转化为JSON数据
          wx.navigateTo({//在题目全部完成后根据选择结果进行页面跳转，同时传送JSON数据
            url: '/pages/course/work/result/result?wrong=' + this.data.wrong + '&wrongList=' + W + '&answerArrays1=' + aw1 + '&answerArrays2=' + aw2 + '&answerArrays3=' + aw3 
          })*/
 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置标题
    /*wx.setNavigationBarTitle({
      title: "答题区"
    })*/
    let _this = this;
    _this.setData({
      navH: App.globalData.navHeight
    })

    wrongLists = [];//为全局变量赋值为数组型
    //在js中初始化一个数组，数组里存储正序的题号。这里题号从1开始
    this.setData({//更新此次作业的题目数量
      questionCount: app.globalData.questions.length,
    })
    console.log(this.data.questionCount);
    var questionArray = [];
    for (var i = 0; i < this.data.questionCount; i++) 
    {
      var str1 = "questionIsSelected[" + i + "]";
      var str2 = "result[" + i + "]";
      this.setData({
        [str1]: false,//用中括号把str括起来即可
        [str2]: 0,
      }) //为questionIsSelected赋值
    }
    //console.log("输出题目的被选择情况"+this.data.questionIsSelected[this.data.questionCount-1]);
    for (var i = 0; i < this.data.questionCount; i++) 
    {
      questionArray.push(i); //为questionArray完成赋值，其中存放的是题号
    }
    console.log(questionArray[0]);
    this.setData({
      questionArrays: questionArray,//为questionArrays完成赋值
    })
    this.setData({
      type: app.globalData.questions[this.data.realIndex].type,//题目类型
    })
    this.setData({
      score: app.globalData.questions[this.data.realIndex].score,//题目类型
    })
    //乱序题号数组、选项数组
    //this.setList();
    //console.log("乱序后的题号数组：" + this.data.questionArrays)
    this.setOption1();
    this.setOption2();
    this.setOption3();
    console.log("乱序后的选项数组：" + this.data.answerArrays1 + "\n" + this.data.answerArrays2 + "\n" + this.data.answerArrays3)
    //初始化第一个题目
    this.setData({
      realIndex: this.data.questionArrays[this.data.index]
    })
    console.log("onLoad时的index:" + this.data.index);
    console.log("onLoad时的realIndex:" + this.data.realIndex);
    this.setData({
      //questionDetail: app.globalData.questions[this.data.realIndex].question,
      options: app.globalData.questions[this.data.realIndex].option,
      questionImage: app.globalData.questions[this.data.realIndex].question,
      optionnumber: app.globalData.questions[this.data.realIndex].number
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //var totalSecond = 1505540080 - Date.parse(new Date()) / 1000; 
    var totalSecond = 15;
    var interval = setInterval(function () {      // 秒数      
      var second = totalSecond;       
      // 天数位      
      var day = Math.floor(second / 3600 / 24);
      var dayStr = day.toString();
      if (dayStr.length == 1)
        dayStr = '0' + dayStr;       
      // 小时位      
      var hr = Math.floor((second - day * 3600 * 24) / 3600);
      var hrStr = hr.toString();
      if (hrStr.length == 1)
        hrStr = '0' + hrStr;       
      // 分钟位      
      var min = Math.floor((second - day * 3600 * 24 - hr * 3600) / 60);
      var minStr = min.toString();
      if (minStr.length == 1)
        minStr = '0' + minStr;       
      // 秒位      
      var sec = second - day * 3600 * 24 - hr * 3600 - min * 60;
      var secStr = sec.toString();
      if (secStr.length == 1) 
        secStr = '0' + secStr;

      this.setData({
        countDownDay: dayStr,
        countDownHour: hrStr,
        countDownMinute: minStr,
        countDownSecond: secStr,
      });
      totalSecond--;
      if (totalSecond < 0) 
      {
        clearInterval(interval);
        /*wx.showToast({
          title: '活动已结束',
        });*/
        this.setData({
          countDownDay: '00',
          countDownHour: '00',
          countDownMinute: '00',
          countDownSecond: '00',
        });
        if(this.data.submitBtn==0&&this.data.cancel==0)//如果提交按钮没有按，且此次做作业活动没有取消
        {
          var that=this;
          that.SubmitWork();
        }
      }
    }.bind(this), 1000);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    /*if(wx.navigateBack({
    }))
    {
      wx.showToast({
        title: '165153132',
      })
    }*/
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
    /*wx.showModal({
      title: '提示', 
      content: '这是一个模态窗口', 
      success: function (res) { 
        if (res.confirm) 
        { console.log('弹框后点取消') } 
        else { console.log('弹框后点取消') } }

    })*/
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



  nextQuestion:function(event)
  {
    /*var tempindex = event.currentTarget.dataset.index;  //data-value="{{options[answerArrays2[index]]}}"，获取被选中的选项数组中的元素，即用户对当前题目做出的选择，是一个字符串
    console.log("当前的题目序号(从0开始)" + event.currentTarget.dataset.index);*/
    this.data.index = this.data.index + 1;
    var tempwrongoption = "0";
    console.log(this.data.wrongList.length);
    for (var i = 0; i < this.data.wrongList.length; i++) {
      if (this.data.wrongList[i].order == this.data.index ) {
        console.log(this.data.wrongList[i].order);
        tempwrongoption = this.data.wrongList[i].wrongOption;
      }
    }
    console.log(tempwrongoption);
    var icons = ["circle", "circle", "circle", "circle", "circle", "circle"];
    if (this.data.questionIsSelected[this.data.index] == true) {
      if (tempwrongoption == "A")
        icons = ["success", "circle", "circle", "circle"];
      else if (tempwrongoption == "B")
        icons = ["circle", "success", "circle", "circle"];
      else if (tempwrongoption == "C")
        icons = ["circle", "circle", "success", "circle"];
      else if (tempwrongoption == "D")
        icons = ["circle", "circle", "circle", "success"];
      /*else
        icons = ["circle", "circle", "circle", "circle"];*/
    }
    /*this.setData({
      icon: ["circle", "circle", "circle", "circle", "circle", "circle"]//选项前小圆圈的图标
    })*/
    if (this.data.index <= this.data.questionCount - 1) {//如果题目还没做完
      this.setData({
        icon: icons,
        //isSelected: false,
        index: this.data.index ,//index为当前已完成的题目的数目；完成题数+1
      })
      this.setData({
        realIndex: this.data.questionArrays[this.data.index]
      })
      this.setData({
        //questionDetail: app.globalData.questions[this.data.realIndex].question,
        options: app.globalData.questions[this.data.realIndex].option,
        questionImage: app.globalData.questions[this.data.realIndex].question,//问题数组
        optionnumber: app.globalData.questions[this.data.realIndex].number,//选项数目
        type: app.globalData.questions[this.data.realIndex].type,//题目类型

      })
      // console.log("选择后的index:" + this.data.index);
      // console.log("选择后的realIndex:" + this.data.realIndex);
    } 
    /*else {//题目做完了
      var aw1 = JSON.stringify(this.data.answerArrays1),
        aw2 = JSON.stringify(this.data.answerArrays2),
        aw3 = JSON.stringify(this.data.answerArrays3);//将答案结果转化为JSON数据
      wx.navigateTo({//在题目全部完成后根据选择结果进行页面跳转，同时传送JSON数据
        url: '/pages/course/work/result/result?wrong=' + this.data.wrong + '&wrongList=' + W + '&answerArrays1=' + aw1 + '&answerArrays2=' + aw2 + '&answerArrays3=' + aw3
      })
    }*/
  },





  lastQuestion: function (event) {
    /*var tempindex = event.currentTarget.dataset.index;  //data-value="{{options[answerArrays2[index]]}}"，获取被选中的选项数组中的元素，即用户对当前题目做出的选择，是一个字符串
    console.log("当前的题目序号(从0开始)" + event.currentTarget.dataset.index);*/
    this.data.index = this.data.index - 1;
    var tempwrongoption = "0";
    console.log(this.data.wrongList.length);
    for (var i = 0; i < this.data.wrongList.length; i++) {
      if (this.data.wrongList[i].order == this.data.index ) {
        console.log(this.data.wrongList[i].order);
        tempwrongoption = this.data.wrongList[i].wrongOption;
      }
    }
    console.log(tempwrongoption);
    var icons = ["circle", "circle", "circle", "circle", "circle", "circle"];
    if (this.data.questionIsSelected[this.data.index] == true) {
      if (tempwrongoption == "A")
        icons = ["success", "circle", "circle", "circle"];
      else if (tempwrongoption == "B")
        icons = ["circle", "success", "circle", "circle"];
      else if (tempwrongoption == "C")
        icons = ["circle", "circle", "success", "circle"];
      else if (tempwrongoption == "D")
        icons = ["circle", "circle", "circle", "success"];
      /*else 
        icons = ["circle", "circle", "circle", "circle"];*/
    }
    if (this.data.index <= this.data.questionCount - 1) {//如果题目还没做完

      this.setData({
        //isSelected: false,
        icon: icons,
        index: this.data.index ,//index为当前已完成的题目的数目；完成题数+1
      })
      this.setData({
        realIndex: this.data.questionArrays[this.data.index]
      })
      this.setData({
        //questionDetail: app.globalData.questions[this.data.realIndex].question,
        options: app.globalData.questions[this.data.realIndex].option,
        questionImage: app.globalData.questions[this.data.realIndex].question,//问题数组
        optionnumber: app.globalData.questions[this.data.realIndex].number//选项数目
      })
      // console.log("选择后的index:" + this.data.index);
      // console.log("选择后的realIndex:" + this.data.realIndex);
    }
    /*else {//题目做完了
      var aw1 = JSON.stringify(this.data.answerArrays1),
        aw2 = JSON.stringify(this.data.answerArrays2),
        aw3 = JSON.stringify(this.data.answerArrays3);//将答案结果转化为JSON数据
      wx.navigateTo({//在题目全部完成后根据选择结果进行页面跳转，同时传送JSON数据
        url: '/pages/course/work/result/result?wrong=' + this.data.wrong + '&wrongList=' + W + '&answerArrays1=' + aw1 + '&answerArrays2=' + aw2 + '&answerArrays3=' + aw3
      })
    }*/
  },

  /*提交作业 */
  SubmitWork:function(){
    this.setData({
      submitBtn: 1//用中括号把str括起来即可
    })
    var aw1 = JSON.stringify(this.data.answerArrays1),
        aw2 = JSON.stringify(this.data.answerArrays2),
        aw3 = JSON.stringify(this.data.answerArrays3),//将答案结果转化为JSON数据
        aw4 = JSON.stringify(this.data.result);
    //var temp=0;
    //遍历题目数组，为未选择的题目标记
    for(var i=0;i<this.data.questionCount;i++)
    {
      console.log(this.data.questionIsSelected[i]);
      if(this.data.questionIsSelected[i]==false)
      {
          
        var tmp = { "order": "", "trueOption": "", "wrongOption": "" };
        tmp.order = i;    //order可理解为题目的单号
        tmp.trueOption = app.globalData.questions[i].true1;//eg:C
        tmp.wrongOption = "未选";//eg:A
        //console.log(tmp);//在控制台输出
        wrongLists.push(tmp);     //wrongLists为一个全局变量，push向此全局变量中推送当前的选择情况*********
        //console.log(wrongLists);  //在控制台输出当前的选择情况
        this.setData({//更新页面：选项前的小圆点；错题数目；错题详情
          wrong: this.data.wrong + 1,
          wrongList: wrongLists    //在错误清单中添加一条记录
        })
      }
    }
    console.log(this.data.wrongList);
    var W2 = JSON.stringify(this.data.wrongList);
    console.log(this.data.wrong+"--------------------------------------");
    wx.navigateTo({//在题目全部完成后根据选择结果进行页面跳转，同时传送JSON数据
      url: '/pages/course/work/result/result?wrong=' + this.data.wrong + '&wrongList=' + W2 + '&answerArrays1=' + aw1 + '&answerArrays2=' + aw2 + '&answerArrays3=' + aw3 +'&result=' + aw4 + '&right=' + this.data.right
    })
  },




/*弹窗部分函数*/ 
  submit: function () {
    this.setData({
      showModal: true
    })
  },











  //回退
  navBack: function () {
    /*if (this.propa == 1) {*/
    var that = this;//这是搭桥，没有它的话将无法再下面的success(res)这么深层的函数中调用到data中的数据
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
          else if (res.cancel) 
          {
            console.log('用户点击取消');
            that.data.cancel=1;//此次作业活动取消
            /*this.setData({
              cancel:1,
            })*/
            wx.navigateBack({
              delta: 2
            })
          }
        }

      })
    

  },




  preventTouchMove: function () {

  },
  go: function () {
    this.setData({
      showModal: false
    })
  },
  huanhang:function(){
    for (var i = 0; i < 7; i++) 
    {
      var str = "questionIsSelected1[" + i + "]"//重点在这里，组合出一个字符串
      this.setData({
        [str]: this.data.questionIsSelected[i]//用中括号把str括起来即可
      })
    }
    console.log(this.data.questionIsSelected1[6]);
    for (var i = 7; i < 14; i++) {
      var str = "questionIsSelected2[" + i + "]"//重点在这里，组合出一个字符串
      this.setData({
        [str]: this.data.questionIsSelected[i]//用中括号把str括起来即可
      })
    }
    console.log(this.data.questionIsSelected1[7]);
    for (var i = 14; i < 21; i++) {
      var str = "questionIsSelected3[" + i + "]"//重点在这里，组合出一个字符串
      this.setData({
        [str]: this.data.questionIsSelected[i]//用中括号把str括起来即可
      })
    }
    console.log(this.data.questionIsSelected1[16]);
    
  }
})
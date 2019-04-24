var app = getApp();
Component({
  properties: {
    parameter:{
      type: Object,
      value:{},
    },
    logoUrl:{
      type:String,
      value:'',
    }
  },
  data: {
    navH: ""
  },
  ready: function(){
    this.setClass();
  },
  attached: function () {
    this.setData({
      navH: app.globalData.navHeight
    });
  },
  methods: {
    return:function(){
      wx.navigateBack();
    },
    setGoodsSearch:function(){
       wx.navigateTo({
         url: '/pages/goods_search/index',
       })
    },
    setClass:function(){
      var color = '';
      switch (this.data.parameter.class) {
        case "0": case 'on':
          color = 'on'
          break;
        case '1': case 'black':
          color = 'black'
          break;
        case '2': case 'gray':
          color = 'gray'
          break;
        default:
          break;
      }
      this.setData({
        'parameter.class': color
      })
    }
  }
})
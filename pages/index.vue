<template>
   <div class="home">
     <div class="homeBox">
       <div class="header">
         <div class="logo">
           <img src="~/static/images/logo.png" alt="不同科技" titel="不同科技">
         </div>
         <ul class="headerList">
           <li v-for="(item,index) in  objList" @click="objListClick(item,index)"><span :class="{objListActive:objListIndex == index}">{{item}}</span></li>
         </ul>
         <ul class="headerArr">
           <li v-for="(item,index) in  objArr"   @mouseenter="enter(item)" @mouseleave="leave(item)">
             <span>{{item.name}}</span>
             <img :src="item.img" alt="" v-show="item.isShow==true">
           </li>
         </ul>
       </div>
       <div class="content">
         <div class="headerItem1">
           <img src="~/static/images/大球3.png?imageMogr2/auto-orient/thumbnail/750x/blur/1x0/quality/60/imageslim" alt="">
           <div class="fontSize"></div>
         </div>
         <div class="headerItem2">
           <div>
             <img src="~/static/images/直线.png" alt="">
             　与　不　同　共　筑　设　计　生　态　
             <img src="~/static/images/直线.png" alt="">
           </div>

         </div>
         <div class="headerItem3" @click="telButong">
           <img src="~/static/images/联系我们.png" alt="">
         </div>
       </div>
     </div>

     <div class="homefoot">
       <div class="homefootItem">
         <ul>
           <li class="li1">
             <img src="~/static/images/桌面图标.png" alt="">

             <span>设计新生，和而不同</span>
           </li>
           <li class="li2">
             <p>邮箱：service@butongtech.com</p>
             <p>地址：深圳市保税区福年广场B4 113</p>
             <p>Copyright © 2018-2018 不同（深圳）科技有限公司, All Rights Reserved </p>
             <p>粤ICP备18127403号</p>
           </li>
           <li class="li3">
             <p>关注我们</p>
             <p>关于不同</p>
             <p>人才招募</p>
             <p>服务规则</p>

           </li>
           <li class="li5">
             <p><img src="~/static/images/官方公众号二维码.png"></p>
             <p>官方公众号</p>
           </li>
           <li class="li4">
             <p>友情链接</p>
             <p class="p one-txt-cut">深圳市工业设计行业协会主页</p>
             <p class="p one-txt-cut">2018深圳国际工业设计大展</p>
             <p class="p one-txt-cut">2017深圳国际工业设计大展</p>
           </li>
         </ul>
       </div>
     </div>
     <el-dialog :append-to-body="true" title="联系不同" class="dialog" :visible.sync="telShow"  width="800px" top="15%">
       <TelButong @GotelShow="GotelShow"></TelButong>
     </el-dialog>
   </div>
</template>

<script>
import TelButong from '~/components/telButong.vue'

export default {
  components: {
    TelButong
  },
  data(){
    return{
      telShow:false,
      objList:["智能设计社区","智能活动平台"],
      objListIndex:0,
      objArr:[{name:"小程序",isShow:false,img:require("~/static/images/小程序二维码.png")},{name:"IOS",isShow:false,img:require("~/static/images/ios.png")},{name:"Andriod",isShow:false,img:require("~/static/images/android.png")}],
      objArrIndex:0,
      networkShow:false
    }
  },
  fetch ({ app }) {
//    console.log(app.$axios)
  },
  asyncData ({ app }) {
//    console.log(app.$axios)
      // 这里data等同于上面的res.data
//     app.$axios.get('https://dcloud.butongtech.com:20020/apis/system/v1.0/init/loadDicTree').then( res => {
//       console.log(res,'22222222222222')
//     });

  },
  created () {
//  this.$axios.get('https://dcloud.butongtech.com:20020/apis/system/v1.0/init/loadDicTree').then(res=>{
//    console.log(res,'998')
//  })
  },
  methods:{
    GotelShow(v){
      this.telShow = v;
    },

    telButong(){ //联系不同
      this.telShow = true;
    },
    enterP(){//移入
      this.networkShow = true;
    },
    leaveP(){//移出
      this.networkShow = false;
    },
    objListClick(v,i){ //
      this.objListIndex =i;
    },
    enter(item){//移入
      console.log(item,"asjkdkla")
      item.isShow = true;
      console.log(this.objArr)
    },
    leave(item){//移出
      item.isShow = false;
    }
  },
  mounted(){
 }
}
</script>

<style scoped lang="less">
.home{
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top:0;
  overflow: hidden;
  overflow-y:auto ;
  .homeBox{
    background: url('https://pub.qinius.butongtech.com/bg.png?imageMogr2/auto-orient/thumbnail/750x/blur/1x0/quality/60/imageslim');
    background-size:100% 100% ;
    padding-bottom: 50px;
    .header{
      min-width: 1280px;
      margin: 0 auto;
      height: 68px;
      display: flex;
      .logo{
        width:30%;
        padding-top:25px;
        padding-left: 100px;
        img{
          display: block;
          width:112px;
          height: 26px;
        }
        img:hover{
          cursor: pointer;
        }
      }
      .headerList{
        width:40%;
        display: flex;
        li{
          flex: 1;
          display: inline-block;
          color: #ffffff;
          line-height:68px;
          font-size: 14px;
          text-align: center;
          span{
            display: inline-block;
            height: 68px;
          }
          .objListActive{
            border-bottom: 1px solid #3DFFFB;
            color: #3DFFFB;
          }
        }
        li:first-child:hover,li:last-child:hover{
          color:#3DFFFB ;
          cursor: pointer;
        }
      }
      .headerArr{
        flex: 1;
        padding-right: 100px;
        li{
          float: right;
          width: 50px;
          display: inline-block;
          line-height: 67px;
          color: #ffffff;
          font-size: 14px;
          text-align: center;
          margin-right: 5%;
          position: relative;
          span{
            display: inline-block;
            height: 67px;
          }
          img{
            position: absolute;
            top:45px;
            left: -20px;
            display: block;
            width: 94px;
            height:102px;
          }

        }
        li:first-child:hover,li:last-child:hover,li:nth-child(2):hover{
          color:#3DFFFB ;
          cursor: pointer;
        }
      }
    }
    .content{
      min-width: 1280px;
      margin: 0 auto;
      .headerItem1{
        min-width: 1280px;
        margin: 100px 0;
        height: 453px;
        position: relative;
        img{
          display: block;
          width: 452px;
          height: 453px;
          margin: 0 auto;
          animation:circleRoate 25s infinite linear ;
        }
        .fontSize{
          width: 563px;
          height: 343px;
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -281px;
          margin-top: -170px;
          background: url('../static/images/fontSize.png');
          background-size: 100% 100%;
        }
        .fontSize:hover{
          background: url('../static/images/fontSzieHover.png');
          background-size: 100% 100%;
        }
        @keyframes circleRoate{
          from{transform: rotate(0deg);}
          to{transform: rotate(360deg);}
        }
      }

      .headerItem2{
        min-width: 1280px;
        height:38px;
        margin-bottom: 21px;
        div{
          width: 563px;
          height: 100%;
          margin: 0 auto;
          font-size:16px;
          font-family:"微软雅黑";
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:38px;
          padding-left: 35px;
          /*letter-spacing:13px;*/
          img{
            display: inline-block;
            width: 104px;
            height: 2px;
            transform: translateY(-5px);
          }
        }
      }
      .headerItem3{
        min-width: 1280px;
        height: 38px;
        img{
          display: block;
          width:140px;
          height:38px;
          margin: 0 auto;
          cursor: pointer;
        }
      }
    }
  }

  .homefoot{
    min-width: 1280px;
    margin: 0 auto;
    .homefootItem{
      width: 100%;
      margin: 0 auto;
      height:220px;
      margin: 0 auto;
      overflow: hidden;
      ul{
        max-width:1280px;
        height: 100%;
        padding: 29px 0 52px 0;
        box-sizing:border-box;
        -moz-box-sizing:border-box; /* Firefox */
        -webkit-box-sizing:border-box; /* Safari */
        margin: 0 auto;
        li{
          float: left;
        }
        .li1{
          width: 157px;
          text-align: center;
          margin-right: 60px;
          margin-left:60px;
          img{
            display: block;
            margin: 0 auto;
            width: 68px;
            height:68px;
          }
          span{
            display: block;
            height:20px;
            font-size:14px;
            font-family:"微软雅黑";
            font-weight:400;
            color:#333;
            line-height:20px;
            letter-spacing:2px;
            margin-top:30px;;
          }
        }
        .li2{
          width: 257px;
          margin-right: 70px;
          p:first-child,p:nth-child(2){
            height:20px;
            font-size: 14px;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(51,51,51,1);
            line-height:25px;
          }
          p:nth-child(3){
            height:20px;
            font-size:14px;
            font-family:"微软雅黑";
            font-weight:400;
            color:rgba(153,153,153,1);
            line-height:25px;
            height: 50px;
            margin-top: 10px;
          }
          p:last-child{
            height:20px;
            font-size:14px;
            font-family:"微软雅黑";
            font-weight:400;
            color:rgba(153,153,153,1);
            /*line-height:25px*/
          }
        }
        .li3{
          width: 94px;
          margin-right: 40px;
          p{
            height:20px;
            font-size:14px;
            font-family:"微软雅黑";
            font-weight:400;
            color:rgba(153,153,153,1);
            line-height:25px;
          }
          p:nth-of-type(2){
            margin-top:14px;
          }
          p:first-child{
            height:20px;
            font-size:14px;
            font-family:PingFangSC-Semibold;
            font-weight:600;
            color:rgba(51,51,51,1);
            line-height:25px;
          }
        }
        .li4{
          width: 240px;
          p:first-child{
            height:20px;
            font-size:14px;
            font-family:PingFangSC-Semibold;
            font-weight:600;
            color:rgba(51,51,51,1);
            line-height:25px;
            margin-bottom: 14px
          }
          .p{
            height:20px;
            font-size:14px;
            font-family:"微软雅黑";
            font-weight:400;
            color:rgba(153,153,153,1);
            line-height:25px;
          }
          .p:hover{
            color: #0BD5D1;
            text-decoration:underline;
            cursor: pointer;
          }
        }
        .li5{
          width: 110px;
          margin-right: 50px;
          p{
            width: 100%;
            font-size:14px;
            font-family:PingFangSC-Semibold;
            font-weight:600;
            color:rgba(51,51,51,1);
            line-height:20px;
            letter-spacing:6px;
            text-align: center;
            text-indent: 5px;
            img{
              width: 94px;
              height: 94px;
              display: block;
              margin: 0 auto;
            }
          }
        }
      }
    }
  }
}
</style>

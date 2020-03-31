<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" router background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <template v-for="item in sideTitle"   v-if="item.sonTitle">
            <el-submenu  :index="String(item.index)" >
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span @click="tip">{{item.title}}</span>
                </template>
                <el-menu-item-group >                
                  <el-menu-item   v-for="(item,index) in item.sonTitle" :index="String(item.indexSon)" :key="item.indexSon">{{item.titleS}}</el-menu-item>
                </el-menu-item-group>  
              </el-submenu>
        </template>
        <template v-else>
            <el-menu-item :index='String(item.index)'>
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </el-menu-item>
        </template>
    </el-menu>
  </div>
</template>

<script>
   import Bus from './bus.js'
    export default {
        name: "leftNav",
        props:['nav'],
        data(){
            return{
              leftsort:[],
              activeIndex:'operation',
              shuzu:this.nav,
              sideTitle:[
                {
                  index:1,
                  title:'系统设置',
                  icon:'el-icon-location',
                  sonTitle:[
                    {
                      indexSon:"operation",
                      titleS:'操作说明'
                    },
                    {
                      indexSon:"toConfigure",
                      titleS:'网站配置'
                    },
                  ]
                },
                {
                  index:2,
                  title:'会员管理',
                  icon:'el-icon-menu',
                  sonTitle:[
                    {
                      indexSon:'usersList',
                      titleS:'会员列表'
                    },
                    {
                      indexSon:'registerUsers',
                      titleS:'用户注册'
                    }
                  ]
                },
                {
                  index:3,
                  title:'商品管理',
                  icon:'el-icon-document',
                  sonTitle:[
                    {
                      indexSon:"sort",
                      titleS:'商品分类'
                    },
                    {
                      indexSon:3-2,
                      titleS:'品牌分类'
                    },
                    {
                      indexSon:3-3,
                      titleS:'添加商品'
                    }
                  ]
                },
                {
                  index:4,
                  title:'订单管理',
                  icon:'el-icon-document',
                  sonTitle:[
                    {
                      indexSon:4-1,
                      titleS:'订单类表'
                    },
                    {
                      indexSon:4-2,
                      titleS:'订单处理'
                    },
                    {
                      indexSon:4-3,
                      titleS:'物流管理'
                    }
                  ]
                },
              ]
            }
        },
        mounted(){
            console.log(this.shuzu)
            Bus.$on("getdatas",(data)=>{
              console.log(data)
            })
        },
        methods: {
          getIndex(index, indexPath){
            this.activeIndex=indexPath[1];
            // console.log(indexPath)
            console.log(indexPath[1])
          },
          getleftmenu(){
            this.$http.get(this.HOST+"/manage/ce/rule").then((res)=>{
              this.leftsort=res.data.data;
              console.log(res)
            })
          },
          tip(){//子传父
            this.$emit("getData",this.shuzu)
          }
        },
        computed:{
          onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
  .el-submenu .el-menu-item{
    min-width: auto;
  }
  .sidebar{
    width: 150px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    top: 61px;
  }
  .sidebar ul{
    height: 100%;
  }
</style>

<template>
        <div class="wrapper">
            <leftNav :nav="navList" v-on:getData="getData"></leftNav>
            <topNav></topNav>
            <div class="content">
                <crumbs></crumbs>  
                <transition name="move" mode="out-in"><router-view></router-view></transition>
            </div>        
        </div>
</template>
<script>
    import leftNav from './leftNav';
    import topNav from './topNav';
    import crumbs from './Crumbs'
    export default{
        components:{
            leftNav,
            topNav,
            crumbs
        },
        data(){
            return{
                // 父传子
                navList:{
                    name:'kamdad',
                    age:'18'
                }
            }
        },
        mounted(res){
            this.getData();
            console.log(this.vuex)
        },
        methods:{
            // 子传父
            getData(res){
                if(res!=undefined){
                    console.log(res)
                }
            }
        }
    }
</script>
<style scoped>
    .content{
        position: absolute;
        left: 170px;
        top: 80px;
        bottom: 0;
        width: 87%;
        overflow: scroll;
    }
</style>
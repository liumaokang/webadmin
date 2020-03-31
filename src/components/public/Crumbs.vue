<template>
    <el-breadcrumb  separator-class>
        <el-breadcrumb-item>当前位置：</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item,index) in navList" :key='index' :to="item.path">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
    export default{
        name:'crumbs',
        data(){
            return{
                navList:[]
            }
        },
        watch: {
            '$route':'getPath'
        },
        mounted(){
            this.getPath();
        },
        methods:{
            getPath(){
                this.navList=this.$route.matched
            }
        },
        computed:{
            
        }
    }
</script>    
<style scoped>

</style>
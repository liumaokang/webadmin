<template>
  <div class="userlist">
      <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
        <el-table-column label="Id" prop="id">
        </el-table-column>
        <el-table-column label="日期" prop="date">
        </el-table-column>
        <el-table-column  label="姓名" prop="name">
        </el-table-column>
        <el-table-column  label="电话" prop="phone">
        </el-table-column>
        <el-table-column  label="地址" prop="address">
        </el-table-column>
        <el-table-column  align="right">
        <template slot="header" slot-scope="scope">
            <el-input v-model="search"  size="mini"  placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
            <el-button size="mini"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini"  type="danger"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
        </el-table-column>
  </el-table>
  </div>
</template>
<script>
    export default {
     data(){
         return{
            tableData: [{
                id:'1',
                date: '2016-05-02',
                name: '王小虎1',
                phone:'15529251016',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                id:'2',
                date: '2016-05-04',
                name: '王小虎',
                phone:'15529251016',
                address: '上海市普陀区金沙江路 1517 弄'
                }, {
                id:'3',
                date: '2016-05-01',
                name: '王小虎',
                phone:'15529251016',
                address: '上海市普陀区金沙江路 1519 弄'
                }, {
                id:'4',
                date: '2016-05-03',
                name: '王小虎',
                phone:'15529251016',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            search: ''
         }
     },
     mounted(){

     },
     methods:{
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
     },
     computed:{

     }   
    }
</script>
<style scoped>

</style>
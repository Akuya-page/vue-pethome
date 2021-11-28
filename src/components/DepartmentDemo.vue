<template>
  <div>
    <el-table :data="tableData" style="width: 100%" align="center">
      <el-table-column fixed prop="id" label="Id" width="150" />
      <el-table-column prop="sn" label="sn" width="120" />
      <el-table-column prop="name" label="name" width="120" />
      <el-table-column prop="dirPath" label="dirPath" width="120" />
      <el-table-column prop="state" label="state" width="120" />
      <el-table-column prop="manager" label="manager" width="80" />
      <el-table-column prop="manager_id" label="manager_id" width="120" />
      <el-table-column prop="parent" label="parent" width="120" />
      <el-table-column prop="parent_id" label="parent_id" width="120" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default>
          <el-button type="text" size="small" @click="">Detail</el-button>
          <el-button type="text" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="total" :current-page="currentPage" :page-size="pageSize" @current-change="f1">
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DepartmentDemo",
  data() {
    return {
      tableData: [],
      total : 0,
      currentPage : 1,
      pageSize  : 5,
    }
  },
  mounted() {
    this.getData()
  },
  methods : {
    getData() {
      axios({
        method : "POST",
        url : 'api/department',
        data :{
          "currentPage":this.currentPage,
          "pageSize":this.pageSize
        }
      }).then((result)=>{
        this.tableData = result.data.data
        this.total = result.data.totals
      }).catch(msg=>console.log(msg))
    },
    f1(a){
      console.log(a);
      this.currentPage = a
      this.getData()
    }
  }

}
</script>

<style scoped>

</style>
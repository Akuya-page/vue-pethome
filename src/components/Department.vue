<template>
<div>
  <el-table :data="tableData" style="width: 100%" align="center">
    <el-table-column fixed prop="id" label="Id" width="150" />
    <el-table-column prop="name" label="Name" width="120" />
    <el-table-column prop="phone" label="Phone" width="120" />
    <el-table-column prop="email" label="Email" width="240" />
    <el-table-column prop="address" label="Address" width="150" />
    <el-table-column prop="createTime" label="CreateTime" width="120" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <el-button type="text" size="small" @click=""
        >Detail</el-button
        >
        <el-button type="text" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination background layout="prev, pager, next" :total="total" :current-page="currentPage" :page-size="pageSize" @current-change="f1">
  </el-pagination>
</div>
</template>

<script>
export default {
  name: "Department",
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
      this.$http({
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
      this.currentPage = a
      this.getData()
    }
  }

}
</script>

<style scoped>

</style>
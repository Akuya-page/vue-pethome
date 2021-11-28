<template>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="id"
        label="id"
        width="180">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="phone"
        label="电话"
        width="180">
    </el-table-column>
    <el-table-column
        prop="email"
        label="邮件"
        width="180">
    </el-table-column>
    <el-table-column
        prop="address"
        label="地址"
        width="180">
    </el-table-column>
    <el-table-column
        prop="createTime"
        label="创建时间"
        width="180">
    </el-table-column>
  </el-table>
</template>

<script>

export default {
  name: "User",
  data(){
    return {
      tableData: []
    }
  },
  mounted() {
    this.$http({
      method : "POST",
      url : '/user/list',
      data  :{
        "currentPage":1,
        "pageSize":5
      }
    }).then((result)=>{
      this.tableData = result.data.data
      console.log(result.data.data);
    }).catch((msg)=>{
      console.log(msg);
    })
  }
}
</script>

<style scoped>

</style>
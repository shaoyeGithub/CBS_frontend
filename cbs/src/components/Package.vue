<template>
  <el-table
    :data="tableData.filter(data => !search || data.money.toLowerCase().includes(search.toLowerCase()))"
    border
    style="width: 100%">
    <el-table-column
      label="套餐名字"
      prop="name">
    </el-table-column>
    <el-table-column
      label="金额"
      prop="money">
    </el-table-column>
    <el-table-column
      label="套餐信息"
      prop="info">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '2016-05-02',
          money: '王小虎',
          info: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '2016-05-04',
          money: '王小虎',
          info: '上海市普陀区金沙江路 1517 弄'
        }, {
          name: '2016-05-01',
          money: '张小虎',
          info: '上海市普陀区金沙江路 1519 弄'
        }, {
          name: '2016-05-03',
          money: '王小虎',
          info: '上海市普陀区金沙江路 1516 弄'
        }],
        search: ''
      }
    },
    methods: {
    },
  }
</script>
<template>
  <el-table
    :data="tableData.filter(data => !search || data.phoneCalled.toLowerCase().includes(search.toLowerCase()))"
    border
    style="width: 100%">
    <el-table-column
      label="通话时间"
      prop="date">
    </el-table-column>
    <el-table-column
      label="主叫"
      prop="phoneCall">
    </el-table-column>
    <el-table-column
      label="被叫"
      prop="phoneCalled">
    </el-table-column>
    <el-table-column
      label="通话时长"
      prop="phoneTime">
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
          date: '王小虎',
          phoneCall: '2016-05-02',
          phoneCalled: '王小虎',
          phoneTime: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '王小虎',
          phoneCall: '2016-05-04',
          phoneCalled: '王小虎',
          phoneTime: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '王小虎',
          phoneCall: '2016-05-01',
          phoneCalled: '张小虎',
          phoneTime: '上海市普陀区金沙江路 1519 弄'
        }, {
          date:'王小虎',
          phoneCall: '2016-05-03',
          phoneCalled: '王小虎',
          phoneTime: '上海市普陀区金沙江路 1516 弄'
        }],
        search: ''
      }
    },
    methods: {
    },
  }
</script>
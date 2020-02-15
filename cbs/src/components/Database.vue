<template>
<div>
<el-input v-model="input" placeholder="请输入话单数量" @keyup.enter.native="doPhone"></el-input>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="通话时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="phoneCall"
      label="主叫"
      width="180">
    </el-table-column>
    <el-table-column
      prop="phoneCalled"
      label="被叫">
    </el-table-column>
  <el-table-column
      prop="phoneTime"
      label="通话时长">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  export default {
    data() {
      return {
        input: '',
        tableData: [{
          date: '2016-05-02',
          phoneCall: '王小虎',
          phoneCalled: '上海市普陀区金沙江路 1518 弄',
          phoneTime: 1
        }]
      }
    },
    methods: {
      doPhone(){
        console.log('生成话单')
        var that = this
        console.log(that.input)
        if (isNaN(that.input)){
          this.$message.error('请输入数字');
          return;
        }
      }
    }

  }
</script>
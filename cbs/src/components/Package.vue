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
          name: '神州行',
          money: '38元/月',
          info: '一个月38元，包含免费通话60分钟，超过60分钟，收费0.1/分钟'
        }, {
          name: '校园行',
          money: '18元/月',
          info: '一个月18元，包含免费通话60分钟，超过60分钟，收费0.1/分钟'
        }, {
          name: '大魔王套餐',
          money: '58元/月',
          info: '一个月58元，包含免费通话120分钟，超过60分钟，收费0.1/分钟'
        }, {
          name: '超级套餐',
          money: '108元/月',
          info: '一个月108元，包含免费通话180分钟，超过60分钟，收费0.1/分钟'
        }],
        search: ''
      }
    },
    methods: {
    },
  }
</script>
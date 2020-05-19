<template>
    <section>
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <el-date-picker
                        v-model="beginTime"
                        type="date"
                        placeholder="选择日期时间"
                        align="right"
                        format="yyyy-MM-dd 0:0:0"
                        :picker-options="pickerOptions2">
                    </el-date-picker>
                    -
                    <el-date-picker
                        v-model="endTime"
                        type="date"
                        placeholder="选择日期时间"
                        align="right"
                        format="yyyy-MM-dd 0:0:0"
                        :picker-options="pickerOptions2">
                    </el-date-picker>
                    |
                    <el-input v-model="userId" placeholder="tel/userId/SeqId"
                              style="width: 20%;"></el-input>
                    <el-button type="primary" v-on:click="getUserList">查询</el-button>
                    <el-button style='margin-bottom:20px;float:right' type="primary" icon="document"
                               @click="handleDownload">导出excel
                    </el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180"
      column-key="date"
      :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler"
    >
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      prop="tel"
      sortable
      label="电话号码">
    </el-table-column>
    <el-table-column
      prop="level"
      sortable
      label="信用等级">
    </el-table-column>
    <el-table-column
      prop="address"
      sortable
      label="地址">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
     

    </section>
</template>
<script>
export default {
        data() {
            return {
                beginTime : '2020-02-02 10:20:10',
                endTime :'2020-02-02 10:20:10',
                userId: '123',

                tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          tel: '1823030300',
          level: '1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '张小虎',
          tel: '1823030300',
          level: '2',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王虎',
          tel: '1823030300',
          level: '3',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '小虎',
          tel: '1823030300',
          level: '4',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
            }
        
        },
        methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
}

</script>



<style scoped>

</style>
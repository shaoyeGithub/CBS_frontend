<template>
    <!-- Your Page Content Here -->
    <div>
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true">
                <el-form-item>
                    <el-date-picker
                        v-model="beginTime"
                        type="date"
                        placeholder="选择日期时间"
                        align="right"
                        format="yyyy-MM-dd 0:0:0"
                        :picker-options="pickerOptions3">
                    </el-date-picker>
                    -
                    <el-date-picker
                        v-model="endTime"
                        type="date"
                        placeholder="选择日期时间"
                        align="right"
                        format="yyyy-MM-dd 0:0:0"
                        :picker-options="pickerOptions3">
                    </el-date-picker>
                    <el-button type="primary" v-on:click="cycleMsgNumStat">查询</el-button>
                </el-form-item>
            </el-form>
        </el-col>

        <div>
            <el-dropdown @command="handleCommand" style="width:200px">
                <el-button type="primary" v-model="input">
                    {{input}}<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown" >
                    <el-dropdown-item command="option1">套餐使用情况</el-dropdown-item>
                    <el-dropdown-item command="option2">通话时间</el-dropdown-item>
                    <el-dropdown-item command="option3">通话用户</el-dropdown-item>
                    <el-dropdown-item command="option4">通话地点</el-dropdown-item>
                    <el-dropdown-item command="option5">月消费</el-dropdown-item>
                    
                </el-dropdown-menu>
                
                </el-dropdown>

                <div id="id1" style="width:1000px; height:500px"></div>
        </div>

        </div>
</template>

<script>
    
    var echarts = require('echarts')
    
    export default {
        option:'option',
        data(){
            return {
                input: '选择数据项'
            }
        },
        name: "Role",
        methods:{

      picture1(){
        this.input="套餐使用情况";
        var option = {
        backgroundColor: '#2c343c',
        visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
      },
    series : [
        {
            name: '流量',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:'神州行'},
                {value:274, name:'校园行'},
                {value:310, name:'大魔王'},
                {value:335, name:'畅聊'},
                {value:400, name:'办公'}
            ],
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
    }; 
        var myChart = echarts.init(document.getElementById('id1'));
        myChart.setOption(option,true)
      },

      handleCommand(command) {
        
        this.option = command;
        console.log(this.option);
        if(this.option === 'option1'){
            this.picture1();
            return;
        }
      }
    }
    }
</script>

<style scoped>
 .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>

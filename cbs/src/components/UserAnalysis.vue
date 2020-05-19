<template>
<div >

<el-dropdown @command="handleCommand" style="width:200px">
  <el-button type="primary" v-model="input">
    {{input}}<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown" >
    <el-dropdown-item command="option1">通话时长</el-dropdown-item>
    <el-dropdown-item command="option2">通话时间</el-dropdown-item>
    <el-dropdown-item command="option3">通话用户</el-dropdown-item>
    <el-dropdown-item command="option4">通话地点</el-dropdown-item>
    <el-dropdown-item command="option5">月消费</el-dropdown-item>
    
  </el-dropdown-menu>
  
</el-dropdown>

<div id="id1" style="width:1000px; height:500px"></div>
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
    methods: {
      
      picture1(){
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
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
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
        picture2(){
var data1 = [];
var data2 = [];
var data3 = [];

var random = function (max) {
    return (Math.random() * max).toFixed(3);
};

for (var i = 0; i < 500; i++) {
    data1.push([random(15), random(10), random(1)]);
    data2.push([random(10), random(10), random(1)]);
    data3.push([random(15), random(10), random(1)]);
}

var option = {
    animation: false,
    legend: {
        data: ['scatter', 'scatter2', 'scatter3']
    },
    tooltip: {
    },
    xAxis: {
        type: 'value',
        min: 'dataMin',
        max: 'dataMax',
        splitLine: {
            show: true
        }
    },
    yAxis: {
        type: 'value',
        min: 'dataMin',
        max: 'dataMax',
        splitLine: {
            show: true
        }
    },
    dataZoom: [
        {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 1,
            end: 35
        },
        {
            type: 'slider',
            show: true,
            yAxisIndex: [0],
            left: '93%',
            start: 29,
            end: 36
        },
        {
            type: 'inside',
            xAxisIndex: [0],
            start: 1,
            end: 35
        },
        {
            type: 'inside',
            yAxisIndex: [0],
            start: 29,
            end: 36
        }
    ],
    series: [
        {
            name: 'scatter',
            type: 'scatter',
            itemStyle: {
                normal: {
                    opacity: 0.8
                }
            },
            symbolSize: function (val) {
                return val[2] * 40;
            },
            data: data1
        },
        {
            name: 'scatter2',
            type: 'scatter',
            itemStyle: {
                normal: {
                    opacity: 0.8
                }
            },
            symbolSize: function (val) {
                return val[2] * 40;
            },
            data: data2
        },
        {
            name: 'scatter3',
            type: 'scatter',
            itemStyle: {
                normal: {
                    opacity: 0.8,
                }
            },
            symbolSize: function (val) {
                return val[2] * 40;
            },
            data: data3
        }
    ]
}
        var myChart = echarts.init(document.getElementById('id1'));
        myChart.setOption(option,true);
        },
        picture3(){
                var item1 = {
    color: '#F54F4A'
};
var item2 = {
    color: '#FF8C75'
};
var item3 = {
    color: '#FFB499'
};

var data = [{
    children: [{
        value: 5,
        children: [{
            value: 1,
            itemStyle: item1
        }, {
            value: 2,
            children: [{
                value: 1,
                itemStyle: item2
            }]
        }, {
            children: [{
                value: 1
            }]
        }],
        itemStyle: item1
    }, {
        value: 10,
        children: [{
            value: 6,
            children: [{
                value: 1,
                itemStyle: item1
            }, {
                value: 1
            }, {
                value: 1,
                itemStyle: item2
            }, {
                value: 1
            }],
            itemStyle: item3
        }, {
            value: 2,
            children: [{
                value: 1
            }],
            itemStyle: item3
        }, {
            children: [{
                value: 1,
                itemStyle: item2
            }]
        }],
        itemStyle: item1
    }],
    itemStyle: item1
}, {
    value: 9,
    children: [{
        value: 4,
        children: [{
            value: 2,
            itemStyle: item2
        }, {
            children: [{
                value: 1,
                itemStyle: item1
            }]
        }],
        itemStyle: item1
    }, {
        children: [{
            value: 3,
            children: [{
                value: 1
            }, {
                value: 1,
                itemStyle: item2
            }]
        }],
        itemStyle: item3
    }],
    itemStyle: item2
}, {
    value: 7,
    children: [{
        children: [{
            value: 1,
            itemStyle: item3
        }, {
            value: 3,
            children: [{
                value: 1,
                itemStyle: item2
            }, {
                value: 1
            }],
            itemStyle: item2
        }, {
            value: 2,
            children: [{
                value: 1
            }, {
                value: 1,
                itemStyle: item1
            }],
            itemStyle: item1
        }],
        itemStyle: item3
    }],
    itemStyle: item1
}, {
    children: [{
        value: 6,
        children: [{
            value: 1,
            itemStyle: item2
        }, {
            value: 2,
            children: [{
                value: 2,
                itemStyle: item2
            }],
            itemStyle: item1
        }, {
            value: 1,
            itemStyle: item3
        }],
        itemStyle: item3
    }, {
        value: 3,
        children: [{
            value: 1,
        }, {
            children: [{
                value: 1,
                itemStyle: item2
            }]
        }, {
            value: 1
        }],
        itemStyle: item3
    }],
    itemStyle: item1
}];

var option = {
    series: {
        radius: ['15%', '80%'],
        type: 'sunburst',
        sort: null,
        highlightPolicy: 'ancestor',
        data: data,
        label: {
            rotate: 'radial'
        },
        levels: [],
        itemStyle: {
            color: '#ddd',
            borderWidth: 2
        }
    }
};


        var myChart = echarts.init(document.getElementById('id1'));
        myChart.setOption(option,true);
        },

        picture4(){

           var option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
};

var myChart = echarts.init(document.getElementById('id1'));
        myChart.setOption(option,true);
        },

        picture5(){
            this.input ="月消费";
            var option = {
                        
                        backgroundColor: '#FBFBFB',
                        tooltip : {
                            trigger: 'axis'
                        },
                        legend: {
                            data:['查询','插入']
                        },

                        calculable : true,


                        xAxis : [
                            {
                                axisLabel:{
                                    rotate: 30,
                                    interval:0
                                },
                                axisLine:{
                                  lineStyle :{
                                      color: '#000000'
                                  }
                                },
                                type : 'category',
                                boundaryGap : false,
                                data : function (){
                                    var list = [];
                                    list.push('1000')
                                    list.push('5000')
                                    list.push('10000')
                                    
                                    return list;
                                }()
                            }
                        ],
                        yAxis : [
                            {

                                type : 'value',
                                axisLine:{
                                    lineStyle :{
                                        color: '#000000'
                                    }
                                }
                            }
                        ],
                        series : [
                            {
                                name:'查询',
                                type:'line',
                                symbol:'none',
                                smooth: 0.2,
                                color:['#66AEDE'],
                                data:[830, 2747,2109]
                            },
                            {
                                name:'插入',
                                type:'line',
                                symbol:'none',
                                smooth: 0.2,
                                color:['#90EC7D'],
                                data:[23,72,82]
                            }
                        ]
                    };
        var myChart = echarts.init(document.getElementById('id1'));
        myChart.setOption(option,true);
        },

      handleCommand(command) {
        
        this.option = command;
        console.log(this.option);
        if(this.option === 'option1'){
            this.picture1();
            return;
        }
        if(this.option === 'option2'){
            this.picture2();
            return;
        }if(this.option === 'option3'){
            this.picture3();
            return;
        }if(this.option === 'option4'){
            this.picture4();
            return;
        }if(this.option === 'option5'){
            this.picture5();
            return;
        }
            
        
        
      },
    },

}
</script>

<style>
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

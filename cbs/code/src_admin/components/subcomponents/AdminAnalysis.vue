<template>
  <div>  
  <div class="col-xs-12">
      <div class="box">
        <div class="box-header with-border">
          <div class="box-body">
            <div class="col-sm-6 col-xs-12">
              <p class="text-center">
                <strong>年用户增长</strong>
              </p>
              <canvas id="trafficBar" ></canvas>
            </div>
            <hr class="visible-xs-block">
            
            <div class="col-sm-6 col-xs-12">
              <p class="text-center">
                <strong>月用户增长</strong>
              </p>
              <canvas id="trafficBar1" ></canvas>
            </div>
            <hr class="visible-xs-block">
            
          </div>
        </div>
      </div>
    </div>

    <div class="col-xs-12">
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title"></h3>
          <div class="box-body">
            <div class="col-sm-6 col-xs-12">
              <p class="text-center">
                <strong>年活跃用户</strong>
              </p>
              <canvas id="trafficBar2" ></canvas>
            </div>
            <hr class="visible-xs-block">
            <div class="col-sm-6 col-xs-12">
              <p class="text-center">
                <strong>月活跃用户</strong>
              </p>
              <canvas id="trafficBar3" ></canvas>
            </div>
            <hr class="visible-xs-block">
          </div>
        </div>
      </div>
    </div>

  </div>

</template>
<script>
var echarts = require('echarts')

export default {
    name: '用户趋势',
    option:'option',
    data(){
        return {
            input: '选择数据项',
            generateRandomNumbers (numbers, max, min) {
              var a = []
              for (var i = 0; i < numbers; i++) {
                a.push(Math.floor(Math.random() * (max - min + 1)) + max)
              }
              return a
            }
        }
    },
    computed: {
    coPilotNumbers () {
      return this.generateRandomNumbers(12, 10000, 1000)
    },
    personalNumbers () {
      return this.generateRandomNumbers(12, 10000, 1000)
    },

    coPilotNumbers2 () {
      return this.generateRandomNumbers(12, 10000, 1000)
    },
    personalNumbers2 () {
      return this.generateRandomNumbers(12, 10000, 1000)
    },

    coPilotNumbers3 () {
      return this.generateRandomNumbers(6, 10000, 1000)
    },
    personalNumbers3 () {
      return this.generateRandomNumbers(6, 10000, 1000)
    },

    coPilotNumbers1 () {
      return this.generateRandomNumbers(6, 10000, 1000)
    },
    personalNumbers1 () {
      return this.generateRandomNumbers(6, 10000, 1000)
    }
  },
    mounted () {
    this.$nextTick(() => {
      var ctx = document.getElementById('trafficBar').getContext('2d')
      var config = {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
            label: '用户数量',
            fill: false,
            borderColor: '#284184',
            pointBackgroundColor: '#284184',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            data: this.coPilotNumbers
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: !this.isMobile,
          legend: {
            position: 'bottom',
            display: true
          },
          tooltips: {
            mode: 'label',
            xPadding: 10,
            yPadding: 10,
            bodySpacing: 10
          }
        }
      }
      new Chart(ctx, config) // eslint-disable-line no-new
      
      var ctx = document.getElementById('trafficBar1').getContext('2d')
      var config = {
        type: 'line',
        data: {
          labels: ['1-5', '5-10', '10-15', '15-20', '20-25', '25-31'],
          datasets: [{
            label: '用户数量',
            fill: false,
            borderColor: '#D1C620',
            pointBackgroundColor: '#D1C620',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            data: this.coPilotNumbers1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: !this.isMobile,
          legend: {
            position: 'bottom',
            display: true
          },
          tooltips: {
            mode: 'label',
            xPadding: 10,
            yPadding: 10,
            bodySpacing: 10
          }
        }
      }
      new Chart(ctx, config) // eslint-disable-line no-new
     
     var ctx = document.getElementById('trafficBar2').getContext('2d')
      var config = {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
            label: '用户数量',
            fill: false,
            borderColor: '#6B1F1F',
            pointBackgroundColor: '#6B1F1F',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            data: this.coPilotNumbers2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: !this.isMobile,
          legend: {
            position: 'bottom',
            display: true
          },
          tooltips: {
            mode: 'label',
            xPadding: 10,
            yPadding: 10,
            bodySpacing: 10
          }
        }
      }
      new Chart(ctx, config) // eslint-disable-line no-new

      var ctx = document.getElementById('trafficBar3').getContext('2d')
      var config = {
        type: 'line',
        data: {
          labels:  ['1-5', '5-10', '10-15', '15-20', '20-25', '25-31'],
          datasets: [{
            label: '用户数量',
            fill: false,
            borderColor: '#76D120',
            pointBackgroundColor: '#76D120',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            data: this.coPilotNumbers3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: !this.isMobile,
          legend: {
            position: 'bottom',
            display: true
          },
          tooltips: {
            mode: 'label',
            xPadding: 10,
            yPadding: 10,
            bodySpacing: 10
          }
        }
      }
      new Chart(ctx, config) // eslint-disable-line no-new

    })
  },
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
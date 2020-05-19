<template>
    <section class='content'>
    <!-- Small boxes (Stat box) -->
    <div class="row">
        <div class="col-lg-3 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-aqua">
                <div class="inner">
                    <h3>35089</h3>

                    <p>总用户数</p>
                </div>
                <div class="icon">
                    <i  class="ion ion-ios-people-outline"></i>
                </div>
                <a href="javascript:void(0)" class="small-box-footer">更多 <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <div class="col-lg-3 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-green">
                <div class="inner">
                    <h3>2003</h3>

                    <p>昨日新增用户</p>
                </div>
                <div class="icon">
                    <i class="ion ion-android-person-add"></i>
                </div>
                <a href="javascript:void(0)" class="small-box-footer">更多 <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-red">
                <div class="inner">
                    <h3>25996</h3>

                    <p>日活跃用户</p>
                </div>
                <div class="icon">
                    <i class="fa fa-building-o"></i>
                </div>
                <a href="javascript:void(0)" class="small-box-footer">更多 <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <div class="col-lg-3 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-blue">
                <div class="inner">
                    <h3>74730</h3>

                    <p>最近七天新增</p>
                </div>
                <div class="icon">
                   <i class="ion ion-arrow-graph-up-right"></i>
                </div>
                <a href="javascript:void(0)" class="small-box-footer">更多 <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-green">
                <div class="inner">
                    <h3>123.5<sup style="font-size: 20px">K</sup></h3>

                    <p>昨日充值总额</p>
                </div>
                <div class="icon">
                    <i class="fa fa-hdd-o"></i>
                </div>
                <a href="javascript:void(0)" class="small-box-footer">更多 <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-yellow">
                <div class="inner">
                    <h3>13068</h3>

                    <p>昨日活跃用户</p>
                </div>
                <div class="icon">
                    <i class="fa fa-file"></i>
                </div>
                <a href="javascript:void(0)" class="small-box-footer">更多 <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-aqua">
                <div class="inner">
                    <h3>20020</h3>

                    <p>最近七天活跃</p>
                </div>
                <div class="icon">
                    <i class="fa fa-user"></i>
                </div>
                <a href="javascript:void(0)" class="small-box-footer">更多 <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <div class="col-lg-3 col-xs-6">
            <!-- small box -->
            <div class="small-box bg-teal">
                <div class="inner">
                    <h3>5</h3>

                    <p>套餐总数</p>
                </div>
                <div class="icon">
                    <i class="fa fa-industry"></i>
                </div>
                <a href="javascript:void(0)" class="small-box-footer">更多 <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
    </div>
    <div class='box'>
      <div class='box-body'>
        <div class='row'>
          <div class='col-md-4'>
            <p class='text-center'>
              <strong>套餐使用</strong>
            </p>
            <va-chart
              :chart-config='chartConfig'></va-chart>
          </div>
          <div class='col-md-4'>
            <p class='text-center'>
              <strong>通话时间</strong>
            </p>
            <va-chart
              :chart-config='lineChartConfig'
            >
            </va-chart>
          </div>
          <div class='col-md-4'>
            <p class='text-center'>
              <strong>各地用户分布图</strong>
            </p>
            <va-chart
              :chart-config='barChartConfig'
            >
            </va-chart>
          </div>
        </div>
      </div>
    </div>
    <div class='box'>
      <div class='box-body'>
        <div class='row'>
          <div class='col-md-4'>
            <p class='text-center'>
              <strong>各地消费图</strong>
            </p>
            <va-chart
              :chart-config='radarChartConfig'
            >
            </va-chart>
          </div>
          <div class='col-md-4'>
            <p class='text-center'>
              <strong>充值金额</strong>
            </p>
            <va-chart
              :chart-config='polarAreaChartConfig'
            >
            </va-chart>
          </div>
          <div class='col-md-4'>
            <p class='text-center'>
              <strong></strong>
            </p>
            <va-chart
              :chart-config='doughnutChartConfig'
            >
            </va-chart>
          </div>
        </div>
      </div>
    
    </div>
    
    
    </section>
    
</template>

<script>
import VAChart from '@/components/VAcomponents/VAChart'
    export default {
        name: '系统统计',
        components: {
            'va-chart': VAChart
        },
        data: function () {
            return {
                chartConfig: {
                    type: 'pie',
                    data: {
                    labels: ['神州行', '校园行', '畅聊','大魔王','办公'],
                    datasets: [{
                        data: [20,8.6,28, 37.7, 4.1],
                        backgroundColor: ['#00a65a', '#f39c12', '#A72828','#0A6D63','#00c0ef'],
                        hoverBackgroundColor: ['#00a65a', '#f39c12', '#A72828','#0A6D63','#00c0ef']
                    }]
                    },
                    options: {
                    responsive: true,
                    maintainAspectRatio: !this.isMobile,
                    legend: {
                        position: 'bottom',
                        display: true
                    }
                    }
                },
                lineChartConfig: {
                    type: 'line',
                    data: {
                    datasets: [{
                        label: '活跃用户',
                        data: [{
                        x: '0',
                        y: 0
                        }, {
                        x: '4',
                        y: 3
                        }, {
                        x: '8',
                        y: 5
                        }, {
                        x: '12',
                        y: 8
                        }, {
                        x: '16',
                        y: 9
                        }, {
                        x: '20',
                        y: 9
                        }, {
                        x: '24',
                        y: 7
                        }
                        ]
                    }]
                    },
                    options: {
                    scales: {
                        xAxes: [{
                        type: 'linear',
                        position: 'bottom'
                        }]
                    }
                    }
                },
                barChartConfig: {
                    type: 'bar',
                    data: {
                    labels: ['南京', '常州', '苏州', '无锡', '徐州', '镇江', '安徽'],
                    datasets: [
                        {
                        label: '各地用户量',
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1,
                        data: [65, 59, 80, 81, 56, 55, 40]
                        }
                    ]
                    },
                    options: {
                    scales: {
                        xAxes: [{
                        stacked: true
                        }],
                        yAxes: [{
                        stacked: true
                        }]
                    }
                    }
                },
                radarChartConfig: {
                    type: 'radar',
                    data: {
                    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                    datasets: [
                        {
                        label: '电话套餐',
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: 'rgba(179,181,198,1)',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: [65, 59, 90, 81, 56, 55, 40]
                        },
                        {
                        label: '流量套餐',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        pointBackgroundColor: 'rgba(255,99,132,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255,99,132,1)',
                        data: [28, 48, 40, 19, 96, 27, 100]
                        }
                    ]
                    },
                    options: {
                    scale: {
                        reverse: true,
                        ticks: {
                        beginAtZero: true
                        }
                    }
                    }
                },
                polarAreaChartConfig: {
                    type: 'polarArea',
                    data: {
                    datasets: [{
                        data: [
                        11,
                        16,
                        7,
                        3,
                        14
                        ],
                        backgroundColor: [
                        '#FF6384',
                        '#4BC0C0',
                        '#FFCE56',
                        '#E7E9ED',
                        '#36A2EB'
                        ],
                        label: 'My dataset' // for legend
                    }],
                    labels: [
                        '10-50',
                        '50-100',
                        '100-200',
                        '200-500',
                        '500+'
                    ]
                    },
                    options: {
                    elements: {
                        arc: {
                        borderColor: '#000000'
                        }
                    }
                    }
                },
                
            }
        },
        methods: {}
    }
</script>

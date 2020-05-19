module.exports = [{
    name: '用户',
    id: 'User',
    icon: 'el-icon-user',
    pre:'/User',
    sub: [{
      name: '信息查询',
      componentName: 'UserInfo',
      path:'/UserInfo'
    }, {
      name: '通话记录',
      componentName: 'CallRecords',
      path:'/CallRecords'
    },{
      name: '套餐查询',
      componentName: 'Package',
      path:'/Package'
    },{
      name: '模拟电话',
      componentName: 'Call',
      path:'/Call'
    },{
      name: '数据分析',
      componentName: 'UserAnalysis',
      path:'/UserAnalysis',
      subName:[{
        name: '通话时长',
        component:'CallTime',
        path:'/UserAnalysis/CallTime'
      },{name: '通话用户',
      component:'CallTime',
      path:'/UserAnalysis/CallTime'
      }
    
    ]

      
    }
  ]
  }, {
    name: '系统',
    id: 'Admin',
    icon: 'el-icon-s-help',
    pre:'/Admin',
    sub: [{
      name: '生成话单',
      componentName: 'GenerateCallRecords',
      path:'/GenerateCallRecords'
    }, {
      name: '话单分析',
      componentName: 'AdminAnalysis',
      path:'/AdminAnalysis'
    },{
      name: '集群管理',
      componentName: 'Database',
      path:'/Database'
    },{
      name: '添加套餐',
      componentName: 'AddPackage',
      path:'/UserInfo'
    }
  ]
  }]
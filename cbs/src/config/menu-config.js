module.exports = [{
    name: '用户',
    id: 'basic',
    icon: 'el-icon-user',
    sub: [{
      name: '信息查询',
      componentName: 'UserInfo'
    }, {
      name: '通话记录',
      componentName: 'CallRecords'
    },{
      name: '套餐查询',
      componentName: 'Package'
    },{
      name: '模拟电话',
      componentName: 'Call'
    },{
      name: '数据分析',
      componentName: 'UserAnalysis',
      subName:[{
        name: '通话时长',
        component:'CallTime'
      }]

      
    }
  ]
  }, {
    name: '系统',
    id: 'form',
    icon: 'el-icon-s-help',
    sub: [{
      name: '生成话单',
      componentName: 'GenerateCallRecords'
    }, {
      name: '话单分析',
      componentName: 'AdminAnalysis'
    },{
      name: '数据库管理',
      componentName: 'Database'
    }
  ]
  }]
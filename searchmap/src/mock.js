import Mock from 'mockjs' // 获取mock对象

const vehicle = Mock.mock(
  '/api/vehicle', 'post', (req, res) => {
    return {
      code: 200,
      data: [{
        id: 1,
        name: 'Alabama',
        color: 1,
        buyTime: '2017-04-01'

      }, {
        id: 2,
        name: 'Alaska',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 3,
        name: 'Arizona',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Arkansas',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'California',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Connecticut',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Florida',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Georgia',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Illinois',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Indiana',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Iowa',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Illinois',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Kansas',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Kentucky',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Maine',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Maryland',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Massachusetts',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Michigan',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Minnesota',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Mississippi',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Missouri',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Montana',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Nebraska',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Nevada',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'New hampshire',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'New jersey',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'New York',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'North Carolina',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'North Dakota',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Ohio',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Oregon',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Pennsylvania',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Rhode island',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'South carolina',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'South dakota',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Tennessee',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Texas',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Utah',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Vermont',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Virginia',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Washington',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'West Virginia',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Wisconsin',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: 'Wyoming',
        color: 1,
        buyTime: '2017-04-01'
      }],
      message: '查询成功'
    }
  })
const user = Mock.mock(
  '/api/user', 'get', (req, res) => {
    return {
      code: 200,
      data: {
        id: 1,
        sex: 1,
        age: 25,
        createTime: '2017-04-01'
      },
      message: '查询成功'
    }
  })
export default { vehicle, user }

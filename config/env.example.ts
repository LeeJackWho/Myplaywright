/**
 * 环境配置文件，把.example去掉
 */

// 当前环境，可以通过环境变量设置，默认为 prod
const currentEnv = process.env.TEST_ENV || 'prod';

export const config = {
  // 基础URL配置
  get baseUrl() {
    return this.environment[currentEnv].url;
  },
  
  // 测试账号配置
  testUser: {
    username: 'username',
    password: 'password'
  },
  
  // 测试环境配置
  environment: {
    dev: {
      url: 'https://dev.com/',
      apiBase: 'https://dev.com/api'
    },
    staging: {
      url: 'https://staging.example.com',
      apiBase: 'https://staging-api.example.com'
    },
    prod: {
      url: 'https://prod.com/',
      apiBase: 'https://prod.com/'
    }
  }
};
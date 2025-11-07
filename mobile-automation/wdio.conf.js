import AppiumService from '@wdio/appium-service'

export const config = {
  runner: 'local',
  port: 4723,
  specs: [
    './test/specs/**/*.js'
  ],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Android Emulator',
    'appium:platformVersion': '13.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': './apps/native-demo-app.apk',
    'appium:autoGrantPermissions': true
  }],
  services: [
    [AppiumService, {}]
  ],
  framework: 'mocha',
  reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: './tsconfig.json',
    }
  }
}

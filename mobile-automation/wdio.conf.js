const path = require('path')
exports.config = {
  runner: 'local',
  specs: [
    './test/specs/**/*.spec.js'
  ],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      platformName: 'Android',
      'appium:platformVersion': process.env.ANDROID_PLATFORM_VERSION || '12.0',
      'appium:deviceName': process.env.ANDROID_DEVICE_NAME || 'Android Emulator',
      'appium:automationName': 'UiAutomator2',
      'appium:app': process.env.ANDROID_APP_PATH || path.join(process.cwd(), 'apps', 'native-demo-app.apk'),
      name: 'android'
    },
    {
      platformName: 'iOS',
      'appium:platformVersion': process.env.IOS_PLATFORM_VERSION || '16.0',
      'appium:deviceName': process.env.IOS_DEVICE_NAME || 'iPhone Simulator',
      'appium:automationName': 'XCUITest',
      'appium:app': process.env.IOS_APP_PATH || path.join(process.cwd(), 'apps', 'native-demo-app.app'),
      name: 'ios'
    }
  ],
  logLevel: 'info',
  bail: 0,
  baseUrl: '',
  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 1,
  services: ['appium'],
  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false
    }]
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 600000
  },
  beforeSession: function (config, capabilities, specs) {
  },
  before: function (capabilities, specs) {
    const chai = require('chai')
    global.expect = chai.expect
  },
  afterTest: async function(test, context, { error, result, duration, passed, retries }) {
    if (!passed) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
      const filename = `ERROR-${test.title.replace(/\s+/g, '_')}-${timestamp}.png`
      await driver.saveScreenshot(`./allure-results/${filename}`)
    }
  }
}

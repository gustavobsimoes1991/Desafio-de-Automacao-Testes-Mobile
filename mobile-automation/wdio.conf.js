import AppiumService from '@wdio/appium-service'

export const config = {

  port: 4723,
  // ...
  services: [
    [AppiumService, {
   
      appiumArgs: ['--base-path', '/wd/hub'],
      command: 'appium',
      logPath: './appium-logs',
      args: {
        basePath: '/wd/hub',
        port: 4723,
  
        timeout: 60000 
      }
    }]
  ],

}

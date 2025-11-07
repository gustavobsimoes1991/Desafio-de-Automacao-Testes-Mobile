const HomePage = require('../../src/pageobjects/home.page')
const SettingsPage = require('../../src/pageobjects/settings.page')
describe('Persistência', () => {
  it('As configurações devem permanecer após navegação', async () => {
    await HomePage.openSettings()
    await SettingsPage.setNotification(true)
    await SettingsPage.saveProfile('Persistencia Test')
    await HomePage.openForms()
    await HomePage.openSettings()
    const attr = await SettingsPage.toggleNotifications.getAttribute('checked')
    expect(attr).to.be.ok
  })
})

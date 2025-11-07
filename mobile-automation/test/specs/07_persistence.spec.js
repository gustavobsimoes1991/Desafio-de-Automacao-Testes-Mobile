const HomePage = import('../../src/pageobjects/home.page.js')
const SettingsPage = import('../../src/pageobjects/settings.page.js')
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

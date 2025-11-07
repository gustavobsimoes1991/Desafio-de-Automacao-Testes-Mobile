const HomePage = import('../../src/pageobjects/home.page.js')
const SettingsPage = import('../../src/pageobjects/settings.page.js')
describe('Settings', () => {
  it('Deve alterar notificação e salvar perfil', async () => {
    await HomePage.openSettings()
    await SettingsPage.setNotification(true)
    await SettingsPage.saveProfile('Profile atualizado')
    const toast = await $('~toast').getText()
    expect(toast.toLowerCase()).to.include('saved')
  })
})

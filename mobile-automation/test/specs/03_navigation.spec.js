const HomePage = require('../../src/pageobjects/home.page')
describe('Navegação entre telas', () => {
  it('Deve navegar para Forms e Settings', async () => {
    await HomePage.openForms()
    expect(await $('~forms-title').isDisplayed()).to.be.true
    await HomePage.openSettings()
    expect(await $('~settings-title').isDisplayed()).to.be.true
  })
})

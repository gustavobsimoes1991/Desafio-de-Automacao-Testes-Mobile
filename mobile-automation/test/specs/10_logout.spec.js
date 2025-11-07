const HomePage = import('../../src/pageobjects/home.page')
describe('Logout', () => {
  it('Deve efetuar logout com sucesso', async () => {
    await HomePage.logout()
    expect(await $('~login-title').isDisplayed()).to.be.true
  })
})

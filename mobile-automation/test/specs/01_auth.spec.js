const LoginPage = require('../../src/pageobjects/login.page')
const HomePage = require('../../src/pageobjects/home.page')
const users = require('../../data/users.json')
describe('Auth - Login', () => {
  it('Deve logar com usuário válido', async () => {
    await LoginPage.login(users[0].email, users[0].password)
    const title = await HomePage.header.getText()
    expect(title).to.be.a('string')
  })
  it('Não deve logar com usuário inválido', async () => {
    await LoginPage.login(users[1].email, users[1].password)
    const toastText = await HomePage.toast.getText()
    expect(toastText.toLowerCase()).to.include('invalid')
  })
})

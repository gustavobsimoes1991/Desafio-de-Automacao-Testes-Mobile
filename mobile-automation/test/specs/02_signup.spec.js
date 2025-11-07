const LoginPage = require('../../src/pageobjects/login.page')
const SignupPage = require('../../src/pageobjects/signup.page')
const HomePage = require('../../src/pageobjects/home.page')
const users = require('../../data/users.json')
describe('Signup', () => {
  it('Deve abrir tela de cadastro e criar usuário', async () => {
    await LoginPage.openSignup()
    await SignupPage.signup(users[2].name, users[2].email, users[2].password)
    const title = await HomePage.header.getText()
    expect(title).to.be.a('string')
  })
})

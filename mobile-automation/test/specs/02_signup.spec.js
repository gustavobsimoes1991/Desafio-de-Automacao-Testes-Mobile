const LoginPage = import('../../src/pageobjects/login.page.js')
const SignupPage = import('../../src/pageobjects/signup.page.js')
const HomePage = import('../../src/pageobjects/home.page')
const users = import('../../data/users.json')
describe('Signup', () => {
  it('Deve abrir tela de cadastro e criar usuário', async () => {
    await LoginPage.openSignup()
    await SignupPage.signup(users[2].name, users[2].email, users[2].password)
    const title = await HomePage.header.getText()
    expect(title).to.be.a('string')
  })
})

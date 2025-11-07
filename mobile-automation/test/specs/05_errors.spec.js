const HomePage = require('../../src/pageobjects/home.page')
const FormsPage = require('../../src/pageobjects/forms.page')
describe('Mensagens de erro e validação', () => {
  it('Deve mostrar mensagem de validação quando campo obrigatório vazio', async () => {
    await HomePage.openForms()
    await FormsPage.fillForm('', '', false)
    const msg = await FormsPage.validationMessage.getText()
    expect(msg.length).to.be.greaterThan(0)
  })
})

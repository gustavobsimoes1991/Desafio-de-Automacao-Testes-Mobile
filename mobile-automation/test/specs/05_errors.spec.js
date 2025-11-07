const HomePage = import('../../src/pageobjects/home.page.js')
const FormsPage = import('../../src/pageobjects/forms.page.js')
describe('Mensagens de erro e validação', () => {
  it('Deve mostrar mensagem de validação quando campo obrigatório vazio', async () => {
    await HomePage.openForms()
    await FormsPage.fillForm('', '', false)
    const msg = await FormsPage.validationMessage.getText()
    expect(msg.length).to.be.greaterThan(0)
  })
})

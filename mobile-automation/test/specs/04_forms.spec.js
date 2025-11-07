const HomePage = require('../../src/pageobjects/home.page')
const FormsPage = require('../../src/pageobjects/forms.page')
describe('Forms', () => {
  it('Deve preencher e submeter formulário com sucesso', async () => {
    await HomePage.openForms()
    await FormsPage.fillForm('texto de teste', '42', true)
    const toast = await $('~toast').getText()
    expect(toast.toLowerCase()).to.include('success')
  })
})

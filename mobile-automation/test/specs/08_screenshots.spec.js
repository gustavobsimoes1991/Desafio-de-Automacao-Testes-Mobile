const HomePage = import('../../src/pageobjects/home.page')
const { save } = import('../../src/utils/screenshotHelper')
describe('Evidencias - Screenshots', () => {
  it('Deve capturar screenshot da home', async () => {
    const filename = await save('home-screen')
    expect(filename).to.match(/home-screen/)
  })
})

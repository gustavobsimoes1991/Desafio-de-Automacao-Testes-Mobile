const HomePage = require('../../src/pageobjects/home.page')
const { save } = require('../../src/utils/screenshotHelper')
describe('Evidencias - Screenshots', () => {
  it('Deve capturar screenshot da home', async () => {
    const filename = await save('home-screen')
    expect(filename).to.match(/home-screen/)
  })
})

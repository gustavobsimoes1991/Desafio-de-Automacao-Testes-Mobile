const fs = require('fs')
const path = require('path')
async function save(name) {
  const dir = path.join(process.cwd(), 'allure-results')
  if (!fs.existsSync(dir)) fs.mkdirSync(dir)
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  const filename = path.join(dir, `${name}-${timestamp}.png`)
  await driver.saveScreenshot(filename)
  return filename
}
module.exports = { save }

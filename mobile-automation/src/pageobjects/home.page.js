class HomePage {
  get header() { return $('~header-title') }
  get menuForms() { return $('~menu-FORMS') }
  get menuSettings() { return $('~menu-SETTINGS') }
  get btnLogout() { return $('~button-LOGOUT') }
  get toast() { return $('~toast') }
  async openForms() { await this.menuForms.click() }
  async openSettings() { await this.menuSettings.click() }
  async logout() { await this.btnLogout.click() }
}
module.exports = new HomePage()

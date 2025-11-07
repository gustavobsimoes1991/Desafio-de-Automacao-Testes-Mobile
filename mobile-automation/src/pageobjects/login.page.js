class LoginPage {
  get inputEmail() { return $('~input-email') }
  get inputPassword() { return $('~input-password') }
  get btnLogin() { return $('~button-LOGIN') }
  get linkSignup() { return $('~link-SIGNUP') }
  async open() { return }
  async login(email, password) {
    await this.inputEmail.setValue(email)
    await this.inputPassword.setValue(password)
    await this.btnLogin.click()
  }
  async openSignup() {
    await this.linkSignup.click()
  }
}
module.exports = new LoginPage()

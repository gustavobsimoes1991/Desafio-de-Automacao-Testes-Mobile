class SignupPage {
  get inputName() { return $('~input-name') }
  get inputEmail() { return $('~input-email') }
  get inputPassword() { return $('~input-password') }
  get btnSignup() { return $('~button-SIGNUP') }
  async signup(name, email, password) {
    await this.inputName.setValue(name)
    await this.inputEmail.setValue(email)
    await this.inputPassword.setValue(password)
    await this.btnSignup.click()
  }
}
module.exports = new SignupPage()

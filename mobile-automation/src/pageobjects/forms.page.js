class FormsPage {
  get inputText() { return $('~input-text') }
  get inputNumber() { return $('~input-number') }
  get switchToggle() { return $('~switch') }
  get btnSubmit() { return $('~button-SUBMIT') }
  get validationMessage() { return $('~validation-message') }
  async fillForm(text, number, toggle) {
    await this.inputText.setValue(text)
    await this.inputNumber.setValue(number)
    const isSelected = await this.switchToggle.getAttribute('checked')
    if ((toggle && !isSelected) || (!toggle && isSelected)) {
      await this.switchToggle.click()
    }
    await this.btnSubmit.click()
  }
}
module.exports = new FormsPage()

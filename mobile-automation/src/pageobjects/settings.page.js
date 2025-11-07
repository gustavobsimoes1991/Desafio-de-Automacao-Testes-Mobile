class SettingsPage {
  get toggleNotifications() { return $('~toggle-notifications') }
  get inputProfile() { return $('~input-profile') }
  get btnSave() { return $('~button-SAVE') }
  async setNotification(enabled) {
    const attr = await this.toggleNotifications.getAttribute('checked')
    if ((enabled && !attr) || (!enabled && attr)) {
      await this.toggleNotifications.click()
    }
  }
  async saveProfile(text) {
    await this.inputProfile.setValue(text)
    await this.btnSave.click()
  }
}
module.exports = new SettingsPage()

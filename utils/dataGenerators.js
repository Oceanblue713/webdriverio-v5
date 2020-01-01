module.exports = {
  generateRandomEmailAddress : function() {
    let emailAddress = "AutoFramework_" + Math.random().toString().replace('0.', '') + "@webdriveruni.com"
    return emailAddress;
  }
}
var config = require('../config/main-config');

describe('Test contact us page on webdriveruni', () => {
  beforeEach(function() {
    browser.setWindowSize(1800, 1200);
    browser.url('./');

    const pageDetails = browser.getUrlAndTitle();
    expect(pageDetails.url).to.contain('webdriveruniversity');
    expect(pageDetails.title).to.contain('WebDriverUniversity');
  });

  it('Submit all information via the contact us page', () => {
    browser.waitAndClick("//h1 [text()='CONTACT US'] /..");

    browser.switchWindow('WebDriver | Contact Us');
   
    browser.waitAndSendKeys('//*[@name="first_name"]', config.firstName);
    browser.waitAndSendKeys('//*[@name="last_name"]', config.lastName);
    browser.waitAndSendKeys('//*[@name="email"]','joe@mail.com');
    browser.waitAndSendKeys('//textarea', 'Hello world!')

    browser.waitAndClick('//*[@value="SUBMIT"]');
    
    const contactUsSubmissionDetails = browser.getUrlAndTitle();
    expect(contactUsSubmissionDetails.url).to.contain('contact-form-thank-you');
  });
})
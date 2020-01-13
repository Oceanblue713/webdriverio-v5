var config = require('../config/main-config');
var dataGenerators = require('../utils/dataGenerators');
import ContactUs_PO from '../page-objects/ContactUs_PO';

describe('Test contact us page on webdriveruni', () => {
  beforeEach(function() {
    ContactUs_PO.open();
    browser.setWindowSize(1800, 1200);
    // browser.url('./');

    const pageDetails = browser.getUrlAndTitle();
    expect(pageDetails.url).to.contain('webdriveruniversity');
    expect(pageDetails.title).to.contain('WebDriverUniversity');
  });

  it('Submit all information via the contact us page', () => {
    // browser.waitAndClick("//h1 [text()='CONTACT US'] /..");
    // browser.switchWindow('WebDriver | Contact Us');
   
    // browser.waitAndSendKeys('//*[@name="first_name"]', config.firstName);
    // browser.waitAndSendKeys('//*[@name="last_name"]', config.lastName);
    // browser.waitAndSendKeys('//*[@name="email"]', dataGenerators.generateRandomEmailAddress());
    // browser.waitAndSendKeys('//textarea', dataGenerators.generateRandomString());
    ContactUs_PO.firstName.setValue(config.firstName);
    ContactUs_PO.lastName.setValue(config.lastName);
    ContactUs_PO.emailAddress.setValue(dataGenerators.generateRandomEmailAddress());
    ContactUs_PO.comments.setValue(dataGenerators.generateRandomString());

    // browser.waitAndClick('//*[@value="SUBMIT"]');
    ContactUs_PO.submitButton();
    
    // const contactUsSubmissionDetails = browser.getUrlAndTitle();
    expect(ContactUs_PO.successfulContactHeader).to.contain('contact-form-thank-you');
  });
})
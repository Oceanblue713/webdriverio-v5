const assert = require('assert');

console.log(browser.config);

describe('Test webdriveruni homepage', () => {
  it('Validate whether the webdriver uni homepage title is correct', () => {
    browser.url('./');
    const title = browser.getTitle()
    assert.strictEqual(title, 'WebDriverUniversity.com');
  });
});
describe("Test the various WebdriverIO Wait Commands",() => {
  beforeEach(function() {
    browser.url("./");
  });

  it("Test waitForExist", () => {
    const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
    clickByXpathSelector.click();
    browser.switchWindow("WebDriver | Ajax-Loader");

    const clickMeButton = $('//*[text()="CLICK ME!"]/..');
    clickMeButton.waitForExist(10000);
  });

  it("Test waitForDisplayed", () => {
    const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
    clickByXpathSelector.click();
    browser.switchWindow("WebDriver | Ajax-Loader");

    const clickMeButton = $('//*[text()="CLICK ME!"]/..');
    clickMeButton.waitForDisplayed(10000);
    clickMeButton.click();
  });

  it("Test waitForEnabled", () => {
    const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
    clickByXpathSelector.click();
    browser.switchWindow("WebDriver | Ajax-Loader");

    const clickMeButton = $('//*[text()="CLICK ME!"]/..');
    // clickMeButton.waitForEnabled(10000, true);
    clickMeButton.waitForEnabled(10000, false);

    browser.pause(8000);
    clickMeButton.waitForEnabled(10000, true);
    clickMeButton.click();
  });

  it("Test Fixed Timeout",() => {
    const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
    clickByXpathSelector.click();
    browser.switchWindow("WebDriver | Ajax-Loader");

    const clickMeButton =  $('//*[text()="CLICK ME!"]/..');
    browser.pause(12000);
    clickMeButton.click();
  })
});
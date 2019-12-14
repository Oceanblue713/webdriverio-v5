describe("Test the various WebdriverIO Wait Commands",() => {
  beforeEach(function() {
    browser.url("./");
  })

  it("Test waitForExist", () => {
    const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
    clickByXpathSelector.click();
    browser.switchWindow("WebDriver | Ajax-Loader");

    const clickMeButton = $('//*[text()="CLICK ME!"]/..');
    clickMeButton.waitForExist(10000);
  });
});
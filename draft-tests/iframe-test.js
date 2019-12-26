describe('IFrame Test', () => {
  beforeEach(function() {
    browser.setWindowSize(1800, 1200);
    browser.url("/IFrame/index.html");
    browser.pause(5000);
  });

  it('Test the clicking of a given button housed within a IFrame', () => {
    const iFrame =$("#frame");
    browser.switchToFrame(iFrame);

    const findOutMore_Button = $("//*[text()='Our Products']");
    findOutMore_Button.waitForDisplayed();
    findOutMore_Button.click();
    browser.pause(5000);
  })
})
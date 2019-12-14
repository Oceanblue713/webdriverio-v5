describe("", () => {
  beforeEach(function() {
    browser.setWindowSize(1800, 1200);
    browser.url("./");
  });

  it("By Id", () => {
    const clickById = $("#contact-us");
    clickById.click();
    browser.pause(2000);

    browser.switchWindow('WebDriver | Contact Us')
    browser.closeWindow()
    browser.pause(2000);
  })
})
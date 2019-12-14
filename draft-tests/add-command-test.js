describe("Add Command", () => {
  beforeEach(function() {
    browser.setWindowSize(1800, 1200);
    browser.url("./");
  });

  it("Test webdriveruni login portal", () => {
    const clickById = $("#login-portal");
    clickById.click();

    const loginPageData = browser.getUrlAndTitle();

    expect(loginPageData.title).to.contains('Login Portal');
    expect(loginPageData.url).to.contains('Login-Portal');
  })
})
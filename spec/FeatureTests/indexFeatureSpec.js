const Browser = require('zombie');
var url = 'http://127.0.0.1:8080'
var browser = new Browser();


describe('User visits signup page', function() {

  // beforeEach(function() {
  //       originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  //       jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
  //   });
  //
  //   it("takes a long time", function(done) {
  //       setTimeout(function() {
  //           done();
  //       }, 18000);
  //   });
  //
  //   afterEach(function() {
  //       jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  //   });

  it("should have defined headless browser", function(next){
    expect(typeof browser != "undefined").toBe(true);
    expect(browser instanceof Browser).toBe(true);
    next();
  });

  describe('header', function(){
    it("should visit the site and see the form", function(next) {
      browser.visit(url, function(err) {
        console.log(browser.success);
        expect(browser.success).toBe(true);
        expect(browser.html("body")).toContain("CHARACTER NAME:");
        next();
      })
    })
  })
  describe('submits form', function() {
    it("should visit the site and see the form", function(next) {
      browser.visit(url, function(err) {
        expect(browser.success).toBe(true);
        expect(browser.query("form[value='startGame']")).toBeDefined();
        next();
      })
    })

    it("should be able insert to the players name ", function(next) {
      browser.visit(url, function(err) {
        expect(browser.success).toBe(true);
        expect(browser.query("input[value='playerName']")).toBeDefined();
        next();
      })
    })

    it("should be able to see the button enter", function(next) {
      browser.visit(url, function(err) {
        expect(browser.success).toBe(true);
        expect(browser.query("input[value='start']")).toBeDefined();
        next();
      })
    });
  })
})

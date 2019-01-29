const Browser = require('zombie');
var url = 'http://127.0.0.1:8080/game'
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

  describe('GAME page form', function() {
    it("should visit the site and see the form", function(next) {
      browser.visit(url, function(err) {
        expect(browser.success).toBe(true);
        expect(browser.html("body")).toContain("NAME:")
        expect(browser.html("body")).toContain("HEALTH:")
        expect(browser.html("body")).toContain("ARMOUR:");
        expect(browser.html("body")).toContain("STRENGTH:");
        expect(browser.html("body")).toContain("DEXTERITY:");
        expect(browser.html("body")).toContain("WEAPON:");
        expect(browser.html("body")).toContain("NAME:");
        expect(browser.html("body")).toContain("ARMOUR:");
        next();
      })
    })
    it("should be able insert to the players name ", function(next) {
      browser.visit(url, function(err) {
        expect(browser.query("input[value='playerAttack']")).toBeDefined();
        expect(browser.query("input[value='insaneAttack']")).toBeDefined();
        expect(browser.query("input[value='parryAttack']")).toBeDefined();
        expect(browser.query("input[value='healthPotion']")).toBeDefined();
        expect(browser.query("input[value='strengthPotion']")).toBeDefined();
        expect(browser.query("input[value='dexterityPotion']")).toBeDefined();
        next();
      })
    })
  })
})

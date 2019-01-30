describe('FlavourText', function(){

  var FlavourText = require('../src/FlavourText');
  var sinon = require('sinon');

  var flavourText;
  var stub

  beforeEach(function() {
    stub = sinon.stub(Math, 'floor')
    flavourText = new FlavourText();
  });

  afterEach(function () {
    stub.restore()
  });

  describe('#messageFinder', function() {
    it('returns a random result from an array', function(){
      stub.returns(1)
      expect(flavourText.messageFinder([1, 2, 3])).toEqual(2)
    });
  });
  describe('#startSentences', function() {
    it('returns a random result from an array', function(){
      stub.returns(1)
      expect(flavourText.startSentences()).toEqual('You rush into the foggy cave')
    });
  });
  describe('#noiseSentences', function() {
    it('returns a random result from an array', function(){
      stub.returns(1)
      expect(flavourText.noiseSentences()).toEqual(' and you can faintly make out a quiet bellowing')
    });
  });
  describe('#airCurrentSentences', function() {
    it('returns a random result from an array', function(){
      stub.returns(1)
      expect(flavourText.airCurrentSentences()).toEqual('. You suddenly become startled by a damp breeze that almost knocks you off your feet')
    });
  });
  describe('#smellSentences', function() {
    it('returns a random result from an array', function(){
      stub.returns(1)
      expect(flavourText.smellSentences()).toEqual('. You remember this sulphurous smell as a child and you become fearful')
    });
  });
  describe('#furnishingsSentences', function() {
    it('returns a random result from an array', function(){
      stub.returns(1)
      expect(flavourText.furnishingsSentences()).toEqual('. You become transfixed by a bunch of strangely placed armchairs with a broken armchair')
    });
  });
  describe('#combined', function() {
    it('returns a random result from an array', function(){
      stub.returns(1)
      expect(flavourText.combined()).toEqual('You rush into the foggy cave and you can faintly make out a quiet bellowing. You suddenly become startled by a damp breeze that almost knocks you off your feet. You remember this sulphurous smell as a child and you become fearful. You become transfixed by a bunch of strangely placed armchairs with a broken armchair')
    });
  });
});

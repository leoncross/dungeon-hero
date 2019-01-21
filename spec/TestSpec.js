describe('HelloWorld',function(){
  var HelloWorld = require('../src/HelloWorld');

  it('retuns hello World', function(){
    test = new HelloWorld();
    expect(test.hello()).toEqual('Hello World!')
  });
});

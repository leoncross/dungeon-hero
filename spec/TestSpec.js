describe('HelloWorld',function(){
  var HelloWorld = require('../src/HelloWorld');
  test = new HelloWorld();

  it('retuns hello World', function(){
    expect(test.hello()).toEqual('Hello World!')
  });
});

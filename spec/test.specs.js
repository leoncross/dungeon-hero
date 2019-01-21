describe('Hello World',function(){
  it('retuns hello World', function(){
    var greeting = new HelloWorld();
    expect(greeting.hello()).toEqual('Hello World!')
  });
});

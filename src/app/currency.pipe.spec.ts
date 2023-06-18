import { CurrencyPipe } from './currency.pipe';

describe('CurrencyPipe', () => {
  let pipe:CurrencyPipe;
  beforeEach(function(){
    pipe = new CurrencyPipe();
  })
  it('create an instance', () => {
    //
    expect(pipe).toBeTruthy();
  });
  it('test if passing number ,return number*2', () => {
    expect(pipe.transform(3)).toBe(6)
  });
  it('test if passing not number ,return Not a number ', () => {
    expect(pipe.transform('amira')).toBe('Not a number')
  });
});

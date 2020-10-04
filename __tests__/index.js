import idx, {Got} from '../src/index';

const resp = idx();

describe('test', () => {
  it('should export Got function', () => {
    expect(Got).toBeInstanceOf(Function);
  });

  it('should return hello world', () => {
    expect(resp).toEqual('Hello World');
  });
});

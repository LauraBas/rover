import ourProgram from '../src/index';

describe('our program', () => {
  it('should return starting position if no movement is provided', () => {
    const input = '3 3\n0 0 N\n';

    const output = ourProgram(input);

    expect(output).toEqual('0 0 N');
  });

  it('should return new position from input provided', () => {
    expect(ourProgram('3 3\n0 0 N\nM')).toEqual('0 1 N');
    expect(ourProgram('3 3\n0 0 N\nMM')).toEqual('0 2 N');
    expect(ourProgram('5 5\n0 0 N\nMMMMM')).toEqual('0 5 N');
  });

  it('should return new orientation from input provided', () => {
    expect(ourProgram('3 3\n0 0 N\nL')).toEqual('0 0 W');
    expect(ourProgram('3 3\n0 0 N\nLL')).toEqual('0 0 S');
    expect(ourProgram('3 3\n0 0 N\nLLL')).toEqual('0 0 E');
    expect(ourProgram('3 3\n0 0 N\nLLLL')).toEqual('0 0 N');
    expect(ourProgram('3 3\n0 0 N\nR')).toEqual('0 0 E');
    expect(ourProgram('3 3\n0 0 N\nRR')).toEqual('0 0 S');
  });
  it('should return "Fall off" if exceed the plateau dimensions', () => {
    expect(ourProgram('1 1\n0 0 N\nMM')).toEqual('Fall off');
    expect(ourProgram('1 1\n0 0 S\nM')).toEqual('Fall off');
    expect(ourProgram('1 3\n0 0 N\nMMRMMRMRRM')).toEqual('Fall off');
  });

  it('should work for happy path', () => {
    expect(ourProgram('3 3\n0 0 N\nMMRMLML')).toEqual('1 3 W');
    expect(ourProgram('5 5\n1 2 N\nLMLMLMLMM')).toEqual('1 3 N');
    expect(ourProgram('5 5\n3 3 E\nMMRMMRMRRM')).toEqual('5 1 E');
  });

  it('should calculate multiple rovers', () => {
    expect(ourProgram('3 3\n0 0 N\nMM\n0 0 E\nMM')).toEqual('0 2 N\n2 0 E');
  });
});

import OLogger from '../src/OLogger';

describe('OLogger', () => {
  beforeEach(() => {
    OLogger.enable();
  });

  test('logs messages when enabled', () => {
    console.log = jest.fn();
    OLogger.log('test message');
    expect(console.log).toHaveBeenCalledWith('test message');
  });

  test('does not log messages when disabled', () => {
    console.log = jest.fn();
    OLogger.disable();
    OLogger.log('test message');
    expect(console.log).not.toHaveBeenCalled();
  });
});

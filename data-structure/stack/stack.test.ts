import Stack from './stack';

describe('test Stack', () => {
  let testStack: Stack;
  beforeEach(() => {
    testStack = new Stack();
  });
  test('stack isEmpty', () => {
    expect(testStack.isEmpty()).toBeTruthy();
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    expect(testStack.isEmpty()).toBeFalsy();
  });
  test('stack size', () => {
    expect(testStack.size()).toBe(0);
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    expect(testStack.size()).toBe(3);
  });
  test('push element', () => {
    expect(testStack.size()).toBe(0);
    expect(testStack.isEmpty()).toBeTruthy();
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    testStack.push(4);
    expect(testStack.size()).toBe(4);
    expect(testStack.isEmpty()).toBeFalsy();
  });
  test('pop element', () => {
    expect(testStack.pop()).toBeUndefined();
    expect(testStack.size()).toBe(0);
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    expect(testStack.pop()).toBe(3);
    expect(testStack.size()).toBe(2);
  });
  test('peek stack', () => {
    expect(testStack.peek()).toBeUndefined();
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    expect(testStack.peek()).toBe(3);
  });

  test('stack toString', () => {
    expect(testStack.toString()).toBe('');
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    expect(testStack.toString()).toBe('123');
  });
});

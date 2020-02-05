import Queue from './queue';


describe('test Queue', () => {
  let testQueue: Queue<number>;
  beforeEach(() => {
    testQueue = new Queue();
  });
  test('queue size', () => {
    expect(testQueue.size()).toBe(0);
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.size()).toBe(3);
  });
  test('queue isEmpty', () => {
    expect(testQueue.isEmpty()).toBeTruthy();
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.isEmpty()).toBeFalsy();
  });
  test('element enqueue', () => {
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.isEmpty()).toBeFalsy();
    expect(testQueue.size()).toBe(3);
  });
  test('element dequeue', () => {
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.dequeue()).toBe(1);
    expect(testQueue.isEmpty);
  });
  test('queue front', () => {
    expect(testQueue.front()).toBeUndefined()
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.front()).toBe(1)
  });
  test('queue toString', () => {
    expect(testQueue.toString()).toBe('')
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.toString()).toBe('123')
  });
});

import PriorityQueue from './PriorityQueue';


describe('test PriorityQueue', () => {
  let testPriorityQueue: PriorityQueue<number>;
  beforeEach(() => {
    testPriorityQueue = new PriorityQueue();
  });
  test('priorityQueue size', () => {
    expect(testPriorityQueue.size()).toBe(0);
    testPriorityQueue.enqueue(3, 3);
    testPriorityQueue.enqueue(2, 2);
    testPriorityQueue.enqueue(1, 1);
    expect(testPriorityQueue.size()).toBe(3);
  });
  test('priorityQueue isEmpty', () => {
    expect(testPriorityQueue.isEmpty()).toBeTruthy();
    testPriorityQueue.enqueue(3, 3);
    testPriorityQueue.enqueue(2, 2);
    testPriorityQueue.enqueue(1, 1);
    expect(testPriorityQueue.isEmpty()).toBeFalsy();
  });
  test('element enqueue', () => {
    testPriorityQueue.enqueue(3, 3);
    testPriorityQueue.enqueue(2, 2);
    testPriorityQueue.enqueue(1, 1);
    expect(testPriorityQueue.isEmpty()).toBeFalsy();
    expect(testPriorityQueue.size()).toBe(3);
  });
  test('element dequeue', () => {
    testPriorityQueue.enqueue(3, 3);
    testPriorityQueue.enqueue(2, 2);
    testPriorityQueue.enqueue(1, 1);
    expect(testPriorityQueue.dequeue()).toEqual({element:1,priority:1});
    expect(testPriorityQueue.isEmpty()).toBeFalsy()
  });
  test('queue front', () => {
    expect(testPriorityQueue.front()).toBeUndefined();
    testPriorityQueue.enqueue(3, 3);
    testPriorityQueue.enqueue(2, 2);
    testPriorityQueue.enqueue(1, 1);
    expect(testPriorityQueue.front()).toEqual({element:1,priority:1});
  });
  test('queue toString', () => {
    expect(testPriorityQueue.toString()).toBe('');
    testPriorityQueue.enqueue(3, 3);
    testPriorityQueue.enqueue(2, 2);
    testPriorityQueue.enqueue(1, 1);
    expect(testPriorityQueue.toString()).toBe('1[1]2[2]3[3]');
  });
});

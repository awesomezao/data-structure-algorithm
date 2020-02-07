import CircularLinkedList from './CircularLinkedList';

describe('test CircularLinkedList', () => {
  let testCircularLinkedList: CircularLinkedList<number>;
  beforeEach(() => {
    testCircularLinkedList = new CircularLinkedList();
  });
  test('append element', () => {
    testCircularLinkedList.append(10);
    testCircularLinkedList.append(11);
    testCircularLinkedList.append(9);
    expect(testCircularLinkedList.size()).toBe(3);
    expect(testCircularLinkedList.isEmpty()).toBeFalsy();
  });
  test('insert element', () => {
    testCircularLinkedList.append(10);
    testCircularLinkedList.append(11);
    testCircularLinkedList.append(9);
    expect(testCircularLinkedList.toString()).toBe('10,11,9');
    expect(testCircularLinkedList.size()).toBe(3);
    testCircularLinkedList.insert(0, 123);
    expect(testCircularLinkedList.toString()).toBe('123,10,11,9');
    expect(testCircularLinkedList.size()).toBe(4);
    expect(testCircularLinkedList.insert(10, 12)).toBeFalsy();
    testCircularLinkedList.insert(4, 13);
    expect(testCircularLinkedList.toString()).toBe('123,10,11,9,13');
    expect(testCircularLinkedList.size()).toBe(5);
  });
  test('remove element at index', () => {
    testCircularLinkedList.append(10);
    testCircularLinkedList.append(11);
    testCircularLinkedList.append(9);
    expect(testCircularLinkedList.removeAt(2)).toBe(9);
    expect(testCircularLinkedList.size()).toBe(2);
    expect(testCircularLinkedList.toString()).toBe('10,11');
    expect(testCircularLinkedList.removeAt(10)).toBeUndefined();
    expect(testCircularLinkedList.removeAt(0)).toBe(10);
  });
});

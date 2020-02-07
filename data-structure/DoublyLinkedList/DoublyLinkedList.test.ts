import DoublyLinkedList from './DoublyLinkedList';

describe('test DoublyLinkedList', () => {
  let testDoublyLinkedList: DoublyLinkedList<number>;
  beforeEach(() => {
    testDoublyLinkedList = new DoublyLinkedList();
  });
  test('linkedList size', () => {
    expect(testDoublyLinkedList.size()).toBe(0);
    testDoublyLinkedList.append(10);
    testDoublyLinkedList.append(11);
    testDoublyLinkedList.append(9);
    expect(testDoublyLinkedList.size()).toBe(3);
  });
  test('linkedList isEmpty', () => {
    expect(testDoublyLinkedList.isEmpty()).toBeTruthy();
    testDoublyLinkedList.append(10);
    testDoublyLinkedList.append(11);
    testDoublyLinkedList.append(9);
    expect(testDoublyLinkedList.isEmpty()).toBeFalsy();
  });
  test('linkedList toString', () => {
    expect(testDoublyLinkedList.toString()).toBe('');
    testDoublyLinkedList.append(10);
    testDoublyLinkedList.append(11);
    testDoublyLinkedList.append(9);
    expect(testDoublyLinkedList.toString()).toBe('10,11,9');
    expect(testDoublyLinkedList.toString(true)).toBe('9,11,10');
  });
  test('append elelment', () => {
    testDoublyLinkedList.append(10);
    testDoublyLinkedList.append(11);
    testDoublyLinkedList.append(9);
    expect(testDoublyLinkedList.size()).toBe(3);
    expect(testDoublyLinkedList.isEmpty()).toBeFalsy();
  });
  test('insert element', () => {
    testDoublyLinkedList.insert(0, 10);
    expect(testDoublyLinkedList.toString()).toBe('10')
    testDoublyLinkedList.append(11);
    testDoublyLinkedList.append(9);
    expect(testDoublyLinkedList.toString()).toBe('10,11,9');
    expect(testDoublyLinkedList.size()).toBe(3);
    testDoublyLinkedList.insert(0, 123);
    expect(testDoublyLinkedList.toString()).toBe('123,10,11,9');
    expect(testDoublyLinkedList.size()).toBe(4);
    expect(testDoublyLinkedList.insert(10, 12)).toBeFalsy();
    testDoublyLinkedList.insert(4, 13);
    expect(testDoublyLinkedList.toString()).toBe('123,10,11,9,13');
    expect(testDoublyLinkedList.size()).toBe(5);
    testDoublyLinkedList.insert(3, 1234)
    expect(testDoublyLinkedList.toString()).toBe('123,10,11,1234,9,13')
    expect(testDoublyLinkedList.size()).toBe(6)
  });
  test('update node', () => {
    testDoublyLinkedList.append(10);
    testDoublyLinkedList.append(11);
    testDoublyLinkedList.append(9);
    expect(testDoublyLinkedList.getElementAt(2).element).toBe(9);
    expect(testDoublyLinkedList.update(2, 12)).toBe(12);
    expect(testDoublyLinkedList.getElementAt(2).element).toBe(12);
  });
  test('remove element', () => {
    testDoublyLinkedList.append(10);
    testDoublyLinkedList.append(11);
    testDoublyLinkedList.append(9);
    expect(testDoublyLinkedList.remove(11)).toBe(11);
    expect(testDoublyLinkedList.size()).toBe(2);
    expect(testDoublyLinkedList.toString()).toBe('10,9');
    expect(testDoublyLinkedList.remove(12)).toBeUndefined();
  });

  test('remove element at index', () => {
    testDoublyLinkedList.append(10);
    testDoublyLinkedList.append(11);
    testDoublyLinkedList.append(9);
    expect(testDoublyLinkedList.removeAt(2)).toBe(9);
    expect(testDoublyLinkedList.size()).toBe(2);
    expect(testDoublyLinkedList.toString()).toBe('10,11');
    expect(testDoublyLinkedList.removeAt(10)).toBeUndefined();
    expect(testDoublyLinkedList.removeAt(0)).toBe(10);
    testDoublyLinkedList.remove(10)
    expect(testDoublyLinkedList.removeAt(0)).toBe(11)
  });
  test('indexOf element', () => {
    testDoublyLinkedList.append(10);
    testDoublyLinkedList.append(11);
    testDoublyLinkedList.append(9);
    expect(testDoublyLinkedList.indexOf(9)).toBe(2);
    expect(testDoublyLinkedList.indexOf(12)).toBe(-1);
  });
  test('getElementAt', () => {
    testDoublyLinkedList.append(10);
    testDoublyLinkedList.append(11);
    testDoublyLinkedList.append(9);
    expect(testDoublyLinkedList.getElementAt(0).element).toBe(10);
    expect(testDoublyLinkedList.getElementAt(12)).toBeUndefined();
  });
  test('getHead', () => {
    expect(testDoublyLinkedList.getHead()).toBeUndefined();
    testDoublyLinkedList.append(10);
    testDoublyLinkedList.append(11);
    testDoublyLinkedList.append(9);
    expect(testDoublyLinkedList.getHead()).toBe(10);
  });
  test('getTail', () => {
    expect(testDoublyLinkedList.getTail()).toBeUndefined();
    testDoublyLinkedList.append(10);
    testDoublyLinkedList.append(11);
    testDoublyLinkedList.append(9);
    expect(testDoublyLinkedList.getTail()).toBe(9);
  });
  test('clear linkedList', () => {
    expect(testDoublyLinkedList.size()).toBe(0);
    testDoublyLinkedList.append(10);
    testDoublyLinkedList.append(11);
    testDoublyLinkedList.append(9);
    testDoublyLinkedList.clear();
    expect(testDoublyLinkedList.size()).toBe(0);
    expect(testDoublyLinkedList.toString()).toBe('');
  });
});

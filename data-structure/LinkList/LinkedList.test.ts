import LinkedList from './LinkedList';

describe('test LinkedList', () => {
  let testLinkedList: LinkedList<number>;
  beforeEach(() => {
    testLinkedList = new LinkedList();
  });
  test('linkedList size', () => {
    expect(testLinkedList.size()).toBe(0);
    testLinkedList.append(10);
    testLinkedList.append(11);
    testLinkedList.append(9);
    expect(testLinkedList.size()).toBe(3);
  });
  test('linkedList isEmpty', () => {
    expect(testLinkedList.isEmpty()).toBeTruthy();
    testLinkedList.append(10);
    testLinkedList.append(11);
    testLinkedList.append(9);
    expect(testLinkedList.isEmpty()).toBeFalsy();
  });
  test('linkedList toString', () => {
    expect(testLinkedList.toString()).toBe('')
    testLinkedList.append(10);
    testLinkedList.append(11);
    testLinkedList.append(9);
    expect(testLinkedList.toString()).toBe('10,11,9')
  });
  test('append elelment', () => {
    testLinkedList.append(10);
    testLinkedList.append(11);
    testLinkedList.append(9);
    expect(testLinkedList.size()).toBe(3);
    expect(testLinkedList.isEmpty()).toBeFalsy();
  });
  test('insert element', () => {
    testLinkedList.append(10);
    testLinkedList.append(11);
    testLinkedList.append(9);
    expect(testLinkedList.toString()).toBe('10,11,9');
    expect(testLinkedList.size()).toBe(3);
    testLinkedList.insert(0, 123)
    expect(testLinkedList.toString()).toBe('123,10,11,9')
    expect(testLinkedList.size()).toBe(4)
    expect(testLinkedList.insert(10, 12)).toBeFalsy()
    testLinkedList.insert(4,13)
    expect(testLinkedList.toString()).toBe('123,10,11,9,13')
    expect(testLinkedList.size()).toBe(5)
  });
  test('update node', () => {
    testLinkedList.append(10);
    testLinkedList.append(11);
    testLinkedList.append(9);
    expect(testLinkedList.getElementAt(2).element).toBe(9)
    expect(testLinkedList.update(2, 12)).toBe(12)
    expect(testLinkedList.getElementAt(2).element).toBe(12)
  });
  test('remove element', () => {
    testLinkedList.append(10);
    testLinkedList.append(11);
    testLinkedList.append(9);
    expect(testLinkedList.remove(11)).toBe(11)
    expect(testLinkedList.size()).toBe(2)
    expect(testLinkedList.toString()).toBe('10,9')
    expect(testLinkedList.remove(12)).toBeUndefined()
  });
  
  test('remove element at index', () => {
    testLinkedList.append(10);
    testLinkedList.append(11);
    testLinkedList.append(9);
    expect(testLinkedList.removeAt(2)).toBe(9)
    expect(testLinkedList.size()).toBe(2)
    expect(testLinkedList.toString()).toBe('10,11')
    expect(testLinkedList.removeAt(10)).toBeUndefined()
  });
   test('indexOf element', () => {
     testLinkedList.append(10);
     testLinkedList.append(11);
     testLinkedList.append(9);
     expect(testLinkedList.indexOf(9)).toBe(2)
     expect(testLinkedList.indexOf(12)).toBe(-1)
   });
  test('getElementAt', () => {
    testLinkedList.append(10);
    testLinkedList.append(11);
    testLinkedList.append(9);
    expect(testLinkedList.getElementAt(0).element).toBe(10)
  });
  test('getHead', () => {
    expect(testLinkedList.getHead()).toBeUndefined()
    testLinkedList.append(10);
    testLinkedList.append(11);
    testLinkedList.append(9);
    expect(testLinkedList.getHead()).toBe(10);
  });
  test('clear linkedList', () => {
    expect(testLinkedList.size()).toBe(0)
     testLinkedList.append(10);
     testLinkedList.append(11);
    testLinkedList.append(9);
    testLinkedList.clear()
    expect(testLinkedList.size()).toBe(0)
    expect(testLinkedList.toString()).toBe('')
  });
});

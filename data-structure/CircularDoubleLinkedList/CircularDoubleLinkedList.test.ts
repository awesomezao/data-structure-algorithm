import CircularDoubleLinkedList from './CircularDoubleLinkedList';

describe('test CircularDoubleLinkedList', () => {

  let testCircularDoubleLinkedList: CircularDoubleLinkedList<number>;
  beforeEach(() => {
    testCircularDoubleLinkedList = new CircularDoubleLinkedList();
  });
  test('append elelment', () => {
    testCircularDoubleLinkedList.append(10);
    testCircularDoubleLinkedList.append(11);
    testCircularDoubleLinkedList.append(9);
    expect(testCircularDoubleLinkedList.size()).toBe(3);
    expect(testCircularDoubleLinkedList.isEmpty()).toBeFalsy();
  });
  // test('insert element', () => {
  //   testCircularDoubleLinkedList.insert(0, 10);
  //   expect(testCircularDoubleLinkedList.toString()).toBe('10');
  //   testCircularDoubleLinkedList.append(11);
  //   testCircularDoubleLinkedList.append(9);
  //   expect(testCircularDoubleLinkedList.toString()).toBe('10,11,9');
  //   expect(testCircularDoubleLinkedList.size()).toBe(3);
  //   testCircularDoubleLinkedList.insert(0, 123);
  //   expect(testCircularDoubleLinkedList.size()).toBe(4);
  //   expect(testCircularDoubleLinkedList.toString()).toBe('123,10,11,9');
  //   expect(testCircularDoubleLinkedList.insert(10, 12)).toBeFalsy();
  //   testCircularDoubleLinkedList.insert(4, 13);
  //   expect(testCircularDoubleLinkedList.toString()).toBe('123,10,11,9,13');
  //   expect(testCircularDoubleLinkedList.size()).toBe(5);
  //   testCircularDoubleLinkedList.insert(3, 1234);
  //   expect(testCircularDoubleLinkedList.toString()).toBe('123,10,11,1234,9,13');
  //   expect(testCircularDoubleLinkedList.size()).toBe(6);
  // });
  // test('remove element at index', () => {
    // testCircularDoubleLinkedList.append(10);
    // testCircularDoubleLinkedList.append(11);
    // testCircularDoubleLinkedList.append(9);
    // expect(testCircularDoubleLinkedList.removeAt(2)).toBe(9);
    // expect(testCircularDoubleLinkedList.size()).toBe(2);
    // expect(testCircularDoubleLinkedList.toString()).toBe('10,11');
    // expect(testCircularDoubleLinkedList.removeAt(10)).toBeUndefined();
    // expect(testCircularDoubleLinkedList.removeAt(0)).toBe(10);
    // testCircularDoubleLinkedList.remove(10);
    // expect(testCircularDoubleLinkedList.removeAt(0)).toBe(11);
  // });

});

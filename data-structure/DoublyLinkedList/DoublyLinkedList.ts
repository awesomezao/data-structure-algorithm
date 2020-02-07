/**
 * @class DoublyLinkedList
 */

export interface IdNode<T> {
  element: T;
  prev: IdNode<T> | null;
  next: IdNode<T> | null;
}

interface IdoublyLinkedList<T> {
  append: (element: T) => void;
  insert: (position: number, element: T) => boolean;
  update: (position: number, element: T) => T;
  remove: (element: T) => T|undefined;
  removeAt: (index: number) => T|undefined;
  indexOf: (element: T) => number;
  getElementAt: (index: number) => IdNode<T> | undefined;
  getHead: () => T | undefined;
  getTail: () => T | undefined;
  isEmpty: () => boolean;
  size: () => number;
  toString: (reverse:boolean) => string;
  clear: () => void;
}

export class DNode<T> implements IdNode<T> {
  element: T;
  prev: IdNode<T> | null;
  next: IdNode<T> | null;
  constructor(element: T) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
}

export default class DoublyLinkedList<T> implements IdoublyLinkedList<T> {
  protected length: number = 0;
  protected head: IdNode<T> = null;
  protected tail: IdNode<T> = null;
  // 1. 添加节点
  append(element: T) {
    const newNode = new DNode(element);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    // 更新链表长度
    this.length++;
  }
  // 2. 插入节点
  insert(position: number, element: T) {
    // 边界检查
    if (position >= 0 && position <= this.length) {
      const newNode = new DNode(element);
      // 若插入位置在0
      if (position === 0) {
        // 判断链表是否为空
        if (this.head === null) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          this.head.prev = newNode;
          newNode.next = this.head;
          this.head = newNode;
        }
      }
      // 若添加位置在末尾
      else if (position === this.length) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      // 在中间位置添加
      else {
        let current: IdNode<T> = this.head;
        let index: number = 0;
        let previous: IdNode<T> = null;
        while (index++<position) {
          previous = current
          current=current.next
        }
        newNode.next = current;
        newNode.prev = previous;
        current.prev = newNode;
        previous.next = newNode;
      }
      // 更新链表长度
      this.length++;
      return true;
    } else {
      return false;
    }
  }
  // 3. 修改节点元素
  update(position: number, element: T) {
    let target = this.getElementAt(position);
    target.element = element;
    return target.element;
  }
  // 4. 根据元素,移除节点
  remove(element: T) {
    console.log(element)
    
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  // 5. 根据元素位置,移除节点
  removeAt(position: number) {
    // 边界检查
    if (position >= 0 && position < this.length) {
      let current = this.head;
      // 若移除位置在0
      if (position === 0) {
        // 若只有一个节点
        if (this.length === 1) {
          this.head = null;
          this.tail = null;
        } else {
          this.head = this.head.next;
          this.head.prev=null
       }
      }
      // 若移除位置在尾
      else if (position === this.length - 1) {
        current = this.tail;
        this.tail = this.tail.prev;
        this.tail.next=null
      }
      // 若移除位置在中间
      else {
        let index: number = 0;
        let previous: IdNode<T> = null;
        while (index++<position) {
          previous = current;
          current=current.next
        }
        previous.next = current.next;
        // current=current.next
        current.next.prev=previous
      }
      this.length--;
      return current.element;
    } else {
      return undefined;
    }
  }
  // 6. 返回元素索引
  indexOf(element: T) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  // 7. 根据索引查询元素
  getElementAt(index: number) {
    if (index >= 0 && index <= this.length) {
      let current = this.head;
      for (let i = 0; i < index && current != null; i++) {
        current = current.next;
      }
      return current;
    } else {
      return undefined;
    }
  }
  // 8. 判断链表是否为空
  isEmpty() {
    return this.size() === 0;
  }
  // 9. 返回链表的size
  size() {
    return this.length;
  }
  // 10. 返回字符串形式的链表
  toString(reverse:boolean=false) {
    if (this.head === null) {
      return '';
    }
    let nodeString = `${!reverse ? this.head.element : this.tail.element}`;
    let current = !reverse ? this.head.next : this.tail.prev;
    
    for (let i = 0; i < this.size() && current != null; i++) {
      nodeString = `${nodeString},${current.element}`;
      current =!reverse?current.next:current.prev;
    }
    return nodeString;
  }
  // 11. 返回头部元素
  getHead() {
    return this.head === null ? undefined : this.head.element;
  }
  // 12. 返回尾部元素
  getTail() {
    return this.tail === null ? undefined : this.tail.element;
  }
  // 12. 清除所有元素
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

import DoubleLinkedList, {
  IdNode,
  DNode
} from '../DoublyLinkedList/DoublyLinkedList';

export default class CircularDoubleLinkedList<T> extends DoubleLinkedList<T> {
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
    this.head.prev = this.tail;
    this.tail.next = this.head;
    // 更新链表长度
    this.length++;
  }
  insert(position: number, element: T) {
    // 边界检查
    if (position >= 0 && position <= this.length) {
      const newNode = new DNode(element);
      // 若插入位置在0
      if (position === 0) {
        // 判断链表是否为空
        if (this.head === null) {
          newNode.prev = newNode;
          newNode.next = newNode;
          this.head = newNode;
          this.tail = newNode;
        } else {
          this.head.prev = newNode;
          newNode.next = this.head;
          newNode.prev = this.tail;
          this.head = newNode;
          this.tail.next = newNode;
        }
      }
      // 若添加位置在末尾
      else if (position === this.length) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        newNode.next = this.head;
        this.tail = newNode;
        this.head.prev = newNode;
      }
      // 在中间位置添加
      else {
        let current: IdNode<T> = this.head;
        let index: number = 0;
        let previous: IdNode<T> = null;
        while (index++ < position) {
          previous = current;
          current = current.next;
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
          this.head.prev = this.tail;
          this.tail.next = this.head;
        }
      }
      // 若移除位置在尾
      else if (position === this.length - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = this.head;
        this.head.prev = this.tail;
      }
      // 若移除位置在中间
      else {
        let index: number = 0;
        let previous: IdNode<T> = null;
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        // current=current.next
        current.next.prev = previous;
      }
      this.length--;
      return current.element;
    } else {
      return undefined;
    }
  }
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
  toString(reverse: boolean = false) {
    if (this.head === null) {
      return '';
    }
    let nodeString = `${this.head.element}`;
    let current = this.head.next;

    for (let i = 0; i < this.size(); i++) {
      if (current !== this.head) {
        nodeString = `${nodeString},${current.element}`;
        current = current.next;
      }
    }
    return nodeString;
  }
}

/**
 * @class LinkedList
 */

interface IlNode<T> {
  element: T;
  next: IlNode<T> | null;
}

interface IlinkedList<T> {
  append: (element: T) => void;
  insert: (position: number, element: T) => boolean;
  remove: (element: T) => T;
  removeAt: (index: number) => T;
  indexOf: (element: T) => number;
  isEmpty: () => boolean;
  size: () => number;
  toString: () => string;
}

class LNode<T> implements IlNode<T> {
  element: T;
  next: IlNode<T> | null;
  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList<T> implements IlinkedList<T> {
  constructor(protected length: number, protected head: IlNode<T>) {
    // 初始化链表长度和头部指针
    this.length = 0;
    this.head = null;
  }
  // 1. 添加节点
  append(element: T) {
    const _node= new LNode(element)
    let current: IlNode<T>;
    if (this.head === null) {
      this.head=_node
    } else {
      current = this.head;
      // 循环链表,将current指向最后一个节点
      while (current.next) {
        current=current.next
      }
      // 将节点添加到最后一个元素的next位置,完成后,最后一个元素的next为null
      current.next=_node
    }
    // 更新链表长度
    this.length++;
  }
  // 2. 插入节点
  insert(position: number, element: T) {
    // 边界检查
    if (position >= 0 && position <= this.length) {
      const _node = new LNode(element)
      let current: IlNode<T>=this.head
      let previous: IlNode<T>;
      let index: number=0
      // 若插入位置在0
      if (position === 0) {
        _node.next = current;
        this.head = _node;
      } else {
        // 循环链表,找到要插入的位置
        while (index++ < position) {
          // 断链
          previous = current;
          current = current.next;
        }
        // 链接
        _node.next = current;
        previous.next = _node;
      }
      this.length++
      return true
    } else {
      return false
    }    
   }
  // 3. 根据元素,移除节点
  remove() {}
  // 4. 根据元素位置,移除节点
  removeAt() {}
  // 5. 返回元素索引
  indexOf() {}
  // 6. 判断链表是否为空
  isEmpty() {}
  // 7. 返回链表的size
  size() {}
  // 8. 返回字符串形式的链表
  toString() {}
}

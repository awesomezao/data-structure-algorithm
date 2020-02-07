import LinkedList, { IlNode, LNode } from '../LinkedList/LinkedList';

export default class CircularLinkedList<T> extends LinkedList<T> {
  append(element: T) {
    const newNode = new LNode(element);
    let current: IlNode<T>;
    if (this.head === null) {
      this.head = newNode;
    } else {
      current = this.head;
      // 遍历链表,将current指向最后一个节点
      while (current.next) {
        current = current.next;
      }
      // 将节点添加到最后一个元素的next位置,完成后,最后一个元素的next为null
      current.next = newNode;
    }
    // 把新添加的节点指向头部节点
    newNode.next = this.head;
    // 更新链表长度
    this.length++;
  }
  insert(position: number, element: T) {
    // 边界检查
    if (position >= 0 && position <= this.length) {
      const newNode = new LNode(element);
      let current: IlNode<T> = this.head;
      // 若插入位置在0
      if (position === 0) {
        if (this.head === null) {
          this.head = newNode;
          newNode.next = this.head;
        } else {
          newNode.next = current;
          current = this.getElementAt(this.size());
          this.head = newNode;
          current.next = this.head;
        }
      } else {
        const previous = this.getElementAt(position - 1);
        newNode.next = previous.next;
        previous.next = newNode;
      }
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
      if (position === 0) {
        if (this.length === 1) {
          this.head=null
        } else {
          const removed = this.head
          current = this.getElementAt(this.size() - 1);
          this.head = this.head.next
          current.next = this.head;
          // current=removed
        }
      } else {
        const previous = this.getElementAt(position - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    } else {
      return undefined;
    }
  }
}

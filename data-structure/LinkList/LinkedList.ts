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
  update: (position:number,element:T) => T;
  remove: (element: T) => T;
  removeAt: (index: number) => T;
  indexOf: (element: T) => number;
  getElementAt: (index: number) => IlNode<T> | undefined
  getHead: () => T;
  isEmpty: () => boolean;
  size: () => number;
  toString: () => string;
  clear: () => void;
}

class LNode<T> implements IlNode<T> {
  element: T;
  next: IlNode<T> | null;
  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}

export default class LinkedList<T> implements IlinkedList<T> {
  protected length:number = 0
  protected head:IlNode<T>=null
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
  // 3. 修改节点元素
  update(position:number,element:T) {
    let target = this.getElementAt(position)
    target.element = element
    return target.element
  }
  // 4. 根据元素,移除节点
  remove(element: T) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }
  // 5. 根据元素位置,移除节点
  removeAt(position: number) {
    // 边界检查
    if (position >=0 && position < this.length) {
      let current = this.head
      if (position === 0) {
        // 将head节点移除,this.head=null
        this.head=current.next
      } else {
        const previous = this.getElementAt(position - 1)
        current = previous.next
        previous.next=current.next
      }
      this.length--
      return current.element
    } else {
      return undefined
    }
  }
  // 6. 返回元素索引
  indexOf(element:T) {
    let current = this.head
    let index=0
    while (current) {
      if (element === current.element) {
        return index
      }
      index++
      current=current.next
    }
    return -1
  }
  // 7. 根据索引查询元素
  getElementAt(index: number) {
    if (index >= 0 && index <= this.length) {
      let current = this.head;
      for (let i = 0; i < index&&current!=null; i++) {
        current=current.next
      }
      return current
    } else {
      return undefined
    }
  }
  // 8. 判断链表是否为空
  isEmpty() {
    return this.size()===0
  }
  // 9. 返回链表的size
  size() {
    return this.length
  }
  // 10. 返回字符串形式的链表
  toString() { 
    if (this.head === null) {
      return ''
    }
    let nodeString = `${this.head.element}`
    let current = this.head.next
    for (let i = 0; i < this.size()&&current!=null; i++) {
      nodeString=`${nodeString},${current.element}`
      current=current.next
    }
    return nodeString
  }
  // 11. 返回头部元素
  getHead(){
  return this.head===null?undefined:this.head.element
  }
  // 12. 清除所有元素
  clear() {
    this.head = null
    this.length=0
  }
}

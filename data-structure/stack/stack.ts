/**
 * @class Stack
 */

interface Istack<T> {
  push: (element: T) => void;
  pop: () => T;
  peek: () => T;
  isEmpty: () => boolean;
  size: () => number;
  toString: () => string;
}

export default class Stack<T> implements Istack<T> {
  // 当前栈
  protected _stack: T[];
  constructor() {
    this._stack = [];
  }
  // 1. 压栈
  push(element: T) {
    this._stack.push(element);
  }
  // 2. 返回出栈的元素
  pop() {
    return this._stack.pop();
  }
  // 3. 返回栈顶元素
  peek() {
    return this._stack[this._stack.length - 1];
  }
  // 4. 判断栈是否为空
  isEmpty() {
    return this._stack.length === 0;
  }
  // 5. 返回栈里的元素个数
  size() {
    return this._stack.length;
  }
  // 6.返回以字符串结构的栈元素
  toString() {
    let _result: string = '';
    this._stack.forEach((item: T) => (_result += item + ''));
    return _result;
  }
}

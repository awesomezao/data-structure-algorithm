/**
 * @class PriorityQueue
 */

// 优先级队列元素节点
interface IqueueElement <T>{
  element: T;
  priority: number;
}
class QueueElement<T> implements IqueueElement<T> {
  element: T;
  priority: number;
  constructor(element: T, priority: number) {
    this.element = element;
    this.priority = priority;
  }
}

interface IpriorityQueue <T>{
  enqueue: (element: T, priority: number) => void;
  dequeue: () => IqueueElement<T>;
  front: () => IqueueElement<T>;
  isEmpty: () => boolean;
  size: () => number;
  toString: () => string;
}

export default class Queue <T> implements IpriorityQueue<T> {
  private _queue: IqueueElement<T>[];
  constructor() {
    this._queue = [];
  }
  // 1. 将元素添加到队列尾部
  enqueue(element: T, priority: number) {
    // 创建QueueElement节点对象
    const _queueElement = new QueueElement(element, priority);
    if (this._queue.length === 0) {
      this._queue.push(_queueElement);
    } else {
      let added: boolean = false;
      for (let i = 0; i < this._queue.length; i++) {
        if (_queueElement.priority < this._queue[i].priority) {
          this._queue.splice(i, 0, _queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        this._queue.push(_queueElement)
      }
    }
  }
  // 2. 删除队列首部元素
  dequeue() {
    return this._queue.shift();
  }
  // 3. 返回队列首部元素
  front() {
    return this._queue[0];
  }
  // 4. 返回队列是否为空
  isEmpty() {
    return this._queue.length === 0;
  }
  // 5. 返回队列中元素的个数
  size() {
    return this._queue.length;
  }
  // 6. 返回字符串格式的队列
  toString() {
    let _result: string = '';
    this._queue.forEach((item:IqueueElement<T>) => (_result += `${item.element}[${item.priority}]`));
    return _result;
  }
}

/**
 * @class Queue
 */

interface Iqueue{
  enqueue: <T>(element: T) => void;
  dequeue: () => any;
  front: () => any;
  isEmpty: () => boolean;
  size: () => number;
  toString: () => string;
}
export default class Queue implements Iqueue{
  protected _queue: any[]
  constructor() {
    this._queue=[]
  }
  // 1. 将元素添加到队列尾部
  enqueue(element: any) {
    this._queue.push(element)
  }
  // 2. 删除队列首部元素
  dequeue() {
    return this._queue.shift()
  }
  // 3. 返回队列首部元素
  front() {
    return this._queue[0]
  }
  // 4. 返回队列是否为空
  isEmpty() {
    return this._queue.length===0
  }
  // 5. 返回队列中元素的个数
  size() {
    return this._queue.length
  }
  // 6. 返回字符串格式的队列
  toString() {
    let _result: string = ''
    this._queue.forEach((item: any) => _result += item + '')
    return _result
  }
 }
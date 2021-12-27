import { v4 as uuidv4 } from 'uuid'

export class Todo {
  constructor(title) {
    this._title = title
    // this._dueDate = dueDate
    // this._priority = priority
    // this._done = done
    this._id = uuidv4()
  }
  get title() {
    return this._title
  }
  
  details() {
    return {
      id: this._id,
      title: this._title,
      dueDate: this._dueDate,
      priority: this._priority,
      done: this._done
    }
  }
}
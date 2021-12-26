import {v4 as uuidv4} from 'uuid'

export class Project {
  constructor(name) {
    this._name = name
    this._id = uuidv4()
    this._todos = []
  }

  get name() {
    return this._name
  }

  get id() {
    return this._id
  }

  get todos() {
    return this._todos
  }

  addTodo(todo) {
    this._todos.push(todo)
  }
}
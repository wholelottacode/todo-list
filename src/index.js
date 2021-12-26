import { Project } from "./project"
import { Todo } from './todo'

const science = new Project('Biology 101')
console.log(typeof science.id, science.name)

const todo = new Todo('Laundry', '12/27/2021', 'high', false)
console.log(todo.details())
science.addTodo(todo)
console.log(science.todos)
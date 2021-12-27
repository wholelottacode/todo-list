export function createProjectComponent(project) {
  const article = document.createElement('article')
  const h2 = document.createElement('h2')
  h2.textContent = project.name
  const todos = document.createElement('div')
  project.todos.forEach(todo => {
    const todoTitle = document.createElement('p')
    todoTitle.textContent = todo.title
    todos.appendChild(todoTitle)
  })
  article.append(h2, todos)
  return article
}

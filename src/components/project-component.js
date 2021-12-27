export function createProjectComponent(project) {
  const article = document.createElement('article')
  const h2 = document.createElement('h2')
  h2.textContent = project.name
  article.appendChild(h2)
  return article
}

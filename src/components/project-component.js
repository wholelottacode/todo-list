export function createProjectComponent(project) {
  const section = document.createElement('section')
  const h2 = document.createElement('h2')
  h2.textContent = project.name
  section.appendChild(h2)
  return section
}

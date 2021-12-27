import { ProjectManager } from './project-manager'
import { Project } from './project'
import { createProjectComponent, createProjectFormComponent } from './components'
import { Todo } from './todo'

export class DisplayController {
  constructor() {
    const projects = []
    for(let i = 1; i <= 3; i++) {
      projects.push(new Project(`Project ${i}`))
    }
    for(let i = 1; i <= 5; i++) {
      projects[0].addTodo(new Todo(`Todo ${i}`))
    }
    this._projectManager = new ProjectManager()
    projects.forEach(project => this._projectManager.addProject(project))
    console.log(this._projectManager)
    this.setup()
  }

  setup() {
    const body = document.querySelector('body')
    const h1 = document.createElement('h1')
    h1.textContent = 'The display controller made this element'
    body.appendChild(h1)
    this.displayProjectForm()
    this.displayProjects()
  }

  displayProjects() {
    const body = document.querySelector('body')
    const container = document.createElement('section')
    container.setAttribute('id', 'projects')
    this._projectManager.projects.forEach(project => {
      let newProjectComponent = createProjectComponent(project)
      container.appendChild(newProjectComponent)
    })
    body.appendChild(container)
  }

  displayProjectForm() {
    const body = document.querySelector('body')
    const form = createProjectFormComponent()

    const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target
      const input = form.querySelector('input[type=string]')
      const newProject = new Project(input.value)
      input.value = ''
      this.projectManager.addProject(newProject)
      const projects = document.querySelector('#projects')
      projects.appendChild(createProjectComponent(newProject))
    }

    form.addEventListener('submit', handleSubmit)
    body.appendChild(form)
  }

  get projectManager() {
    return this._projectManager
  }
}
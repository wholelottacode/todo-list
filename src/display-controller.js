import { ProjectManager } from './project-manager'
import { Project } from './project'
import { createProjectComponent, createProjectFormComponent } from './components' 

export class DisplayController {
  constructor() {
    const projects = []
    for(let i = 1; i <= 5; i++) {
      projects.push(new Project(`Project ${i}`))
    }
    this._projectManager = new ProjectManager()
    projects.forEach(project => this._projectManager.addProject(project))
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
    this._projectManager.projects.forEach(project => {
      let newProjectComponent = createProjectComponent(project)
      body.appendChild(newProjectComponent)
    })
  }

  displayProjectForm() {
    const body = document.querySelector('body')
    const form = createProjectFormComponent()
    body.appendChild(form)
  }

  get projectManager() {
    return this._projectManager
  }
}
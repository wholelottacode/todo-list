import { ProjectManager } from './project-manager'
import { Project } from './project'
import { projectComponentFactory } from './components' 

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
    this.displayProjects()
  }

  displayProjects() {
    const body = document.querySelector('body')
    // const project = projectComponentFactory()
    // body.appendChild(project)
    this._projectManager.projects.forEach(project => {
      let newProjectComponent = projectComponentFactory(project)
      body.appendChild(newProjectComponent)
    })
    // TODO: create a project component for all projects
    /*
      for each project managed by the project manager
      make a component that renders the content of the project
    */
  }

  get projectManager() {
    return this._projectManager
  }
}
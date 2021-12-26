import { ProjectManager } from './project-manager'

export class DisplayController {
  constructor() {
    this.setup()
    this._projectManager = new ProjectManager()
  }

  setup() {
    const body = document.querySelector('body')
    const h1 = document.createElement('h1')
    h1.textContent = 'The display controller made this element'
    body.appendChild(h1)
  }

  displayProjects() {
    // TODO: create a project component for all projects
  }

  get projectManager() {
    return this._projectManager
  }
}
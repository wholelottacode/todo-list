export class ProjectManager {
  constructor() {
    this._projects = []
  }

  addProject(project) {
    this._projects.push(project)
  }

  get projects() {
    return this._projects
  }
}
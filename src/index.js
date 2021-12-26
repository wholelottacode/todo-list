import { Project } from "./project"
import { Todo } from './todo'
import { DisplayController } from './display-controller'

const projects = []
for(let i = 1; i <= 5; i++) {
  projects.push(new Project(`Project ${i}`))
}

const dc = new DisplayController()
projects.forEach(project => dc.projectManager.addProject(project))
console.log(dc)
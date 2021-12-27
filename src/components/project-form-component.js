export function createProjectFormComponent() {
  const form = document.createElement('form')
  const div = document.createElement('div')
  const nameLabel = document.createElement('label')
  nameLabel.textContent = 'Project Name'
  const nameInput = document.createElement('input')
  nameInput.setAttribute('type', 'string')
  div.append(nameLabel, nameInput)
  const submit = document.createElement('input')
  submit.setAttribute('type', 'submit')
  submit.setAttribute('value', 'Add New Project')
  form.append(div, submit)
  return form
}
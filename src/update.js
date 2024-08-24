import todos from '../tasks.json' assert { type: 'json' }

const task = process.argv.slice(2)
const [idValue, message] = task
const id = Number(idValue)

if (id === undefined || message === undefined) {
  console.log('Please provide the task ID and the new message')
  process.exit(0)
}

if (task.length > 2) {
  console.log('Please provide just the task ID and the new message in quotes')
  process.exit(0)
}

if ( todos.every((todo) => todo.id !== Number(id)) ) {
  console.log(`Task with Id: ${id} not found. Try put the ID first and then the message`)
  process.exit(0)
}

if (message.length === 0) {
  console.log('Please provide a message to update the task')
  process.exit(0)
}

if (!id ?? !message) {
  console.log('Please provide the task ID and the new message. One of the are missing')
  process.exit(0)

}

if (typeof id !== "number") {
  console.log('The task ID must be a number')
  process.exit(0)
}

if ( todos.length === 0 ) {
  console.log('No tasks to update')
  process.exit(0)
}

const taskToUpdate = todos.find((todo) => todo.id === Number(id))
taskToUpdate.task = message
taskToUpdate.updatedAt = new Date().toISOString()

console.log(`Task updated successfully!, Id: ${id}`)
console.table(todos)
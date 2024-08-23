import fs from 'node:fs'
import todos from './tasks.json' assert { type: 'json' }

const task = process.argv.slice(2)
const [status, id] = task

if ( todos.length === 0 ) {
  console.log(`No tasks to mark in ${status}`)
  process.exit(0)
}

const taskToUpdate = todos.find((todo) => todo.id === Number(id))
taskToUpdate.status = status

todos[todos.indexOf(taskToUpdate)] = taskToUpdate

fs.writeFile('tasks.json', JSON.stringify(todos), (err) => {
  if (err) {
    console.log('Error:', err)
  }
})

console.log(`Task marked as done successfully!, Id: ${id}`)
console.table(todos)


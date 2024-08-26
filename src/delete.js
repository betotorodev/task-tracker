import fs from 'node:fs'
import todos from '../tasks.json' with { type: 'json' }


const task = process.argv.slice(2)
const [id] = task

if (task.length > 1) {
  console.log('Please provide only the Id of the task to delete')
  process.exit(0)
}

if ( todos.length === 0 ) {
  console.log('No tasks to delete')
  process.exit(0)
}

const taskToDelete = todos.find((todo) => todo.id === Number(id))

if ( !taskToDelete ) {
  console.log(`Task with Id: ${id} not found`)
  process.exit(0)
}

todos.splice(todos.indexOf(taskToDelete), 1)

fs.writeFile('tasks.json', JSON.stringify(todos), (err) => {
  if (err) {
    console.log('Error:', err)
  }
})

console.log(`Task deleted successfully!, Id: ${id}`)
console.table(todos)
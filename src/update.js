import todos from '../tasks.json' assert { type: 'json' }

const task = process.argv.slice(2)
const [id, message] = task

if ( todos.length === 0 ) {
  console.log('No tasks to update')
  process.exit(0)
}

const taskToUpdate = todos.find((todo) => todo.id === Number(id))
taskToUpdate.task = message

console.log(`Task updated successfully!, Id: ${id}`)
console.table(todos)
import { tasksStatus } from '../const.js'
import todos from '../tasks.json' with { type: 'json' }

const task = process.argv.slice(2)
const [type] = task

if (task.length > 1) {
  console.log('You don\'t need to provide anything else. Just run the command')
  process.exit(0)
}

const todosListed= {
  'all': todos,
  'to-do': todos.filter(todo => todo.status === tasksStatus.TODO),
  'in-progress': todos.filter(todo => todo.status === tasksStatus.IN_PROGRESS),
  'done': todos.filter(todo => todo.status === tasksStatus.DONE)
}
console.table(todosListed[type])
import { tasksStatus } from '../const'
import todos from '../tasks.json' assert { type: 'json' }

const task = process.argv.slice(2)
const [type] = task

const todosListed= {
  'all': todos,
  'to-do': todos.filter(todo => todo.status === tasksStatus.TODO),
  'in-progress': todos.filter(todo => todo.status === tasksStatus.IN_PROGRESS),
  'done': todos.filter(todo => todo.status === tasksStatus.DONE)
}
console.table(todosListed[type])
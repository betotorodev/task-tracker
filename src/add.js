import fs from 'node:fs'
import { tasksStatus } from '../const.js'

const task = process.argv.slice(2)
const [taskName] = task

let tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf-8'))

if (task.length > 1) {
  console.log('Please provide only one task to add or add your task in quotes')
  process.exit(0)
}

if (taskName === undefined) {
  console.log('Please provide a task to add')
  process.exit(0)
}

if (tasks.some((task) => task.task === taskName)) {
  console.log('Task already exists')
  process.exit(0)
}

const currentId = Number(fs.readFileSync('counter-id.txt', 'utf-8'))

const newId = tasks.length === 0 ? currentId : currentId + 1
const newTask = { id: newId, task: taskName, status: tasksStatus.TODO }

tasks = [...tasks, newTask]

fs.writeFile('tasks.json', JSON.stringify(tasks), (err) => {
  if (err) {
    console.log('Error:', err)
  } else {
    console.log(`Task added successfully!, Id: ${newId}`)
    console.table(newTask)
  }
})

fs.writeFile('counter-id.txt', String(newId), (err) => {
  if (err) {
    console.log('Error:', err)
  }
})

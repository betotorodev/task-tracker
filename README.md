# Task Tracker Command Line Application

## Overview
The Task Tracker Command Line Application is a simple and efficient tool designed to help you manage your tasks directly from the command line. It allows you to add, view, update, and delete tasks with ease, making it an ideal solution for developers and command-line enthusiasts who prefer managing their tasks without leaving the terminal.

## Project
This project was given by [roadmap.sh](https://roadmap.sh/) and this is the project url: [Task Tracker](https://roadmap.sh/projects/task-tracker)

## Features
- **Add Tasks**: Quickly add new tasks with a description and due date.
- **View Tasks**: List all tasks or filter them by status (e.g., to do, done and in progress).
- **Update Tasks**: Mark tasks as done or update their descriptions.
- **Delete Tasks**: Remove tasks that are no longer needed.

## Installation
To install the Task Tracker Command Line Application, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone git@github.com:betotorodev/task-tracker.git
    cd task-tracker
    ```

2. **Add a task**:
    ```sh
    npm run add "My first task"
    ```

And that's It.

## Usage
Once cloned, you can start using the Task Tracker Command Line Application with the following commands:

### Adding a Task
To add a new task, use the `add` command followed by the task description:
```sh
npm run add "Finish the report"
```

### Viewing Tasks
To view all tasks, use the `list` command:

```sh
## list all task created
npm run list:all
```
To view tasks filtered by status, use the list command with the status option:
```sh
npm run list:to-to
## or
npm run list:in-progress
## or 
npm run list:done
```

### Updating a Task
To change a description, use the `update` command with the task ID and the new description:

```sh
npm run update 1 "new description"
```

### Deleting a Task
To delete a task, use the `delete` command with the task ID:

```sh
npm run delete 1 
```

## Contributing
Contributions are welcome to the Task Tracker Command Line Application! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions or support, please contact me by Twitter: [@betotorodev](https://twitter.com/betotorodev).

---
Thank you for using the Task Tracker Command Line Application! We hope it helps you stay organized and productive.

`Created with love by Beto Toro ♥️`
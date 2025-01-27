# Task Manager

A simple and intuitive task management application to help you organize and track your daily activities.

## Features

- Create, read, update, and delete tasks
- Mark tasks as complete or incomplete
- Set priority levels (High, Medium, Low)
- Add due dates to tasks
- Categorize tasks with labels
- Filter tasks by status, priority, and category
- Search functionality to quickly find specific tasks
- Data persistence using local storage

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/task-manager.git
```

2. Navigate to the project directory:
```bash
cd task-manager
```

3. Install dependencies:
```bash
npm install
```

4. Start the application:
```bash
npm start
```

## Usage

### Creating a Task
1. Click the "Add Task" button
2. Enter task details:
   - Title (required)
   - Description (optional)
   - Due Date (optional)
   - Priority Level (optional)
   - Category (optional)
3. Click "Save" to create the task

### Managing Tasks
- Click the checkbox next to a task to mark it as complete
- Use the edit icon to modify task details
- Click the delete icon to remove a task
- Use the filter options in the sidebar to sort and filter tasks
- Use the search bar to find specific tasks

## File Structure

```
task-manager/
├── src/
│   ├── components/
│   ├── styles/
│   ├── utils/
│   └── App.js
├── public/
├── package.json
└── README.md
```

## Technologies Used

- React.js
- CSS3
- Local Storage API
- Date-fns for date manipulation
- React Icons

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## Bug Reporting

If you find a bug, please create an issue with:
- Detailed description of the bug
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact:
- Email: support@taskmanager.com
- GitHub: [Your GitHub Profile]
- Twitter: [@taskmanager]

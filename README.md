# 📝 React Todo App

A simple and responsive Todo application built with React.  
This project allows users to create, delete, and manage their daily tasks with form validation and toast notifications.

## 🚀 Features

- Create a new Todo
- Form validation
- Minimum 5 characters validation
- Delete individual Todos
- Delete all Todos
- Success and error toast notifications
- Unique Todo IDs using Nanoid
- Responsive user interface

## 🛠️ Technologies Used

- React
- Vite
- JavaScript
- Tailwind CSS
- React Hook Form
- React Toastify
- Nanoid

## 🔗 Live Demo

[View Live Demo](https://react-todo-app-gray-theta.vercel.app)

## 📸 Preview

### Todo App

![Todo App](./screenshots/todo-home.png)

### Required Field Validation

![Required Validation](./screenshots/validation-required.png)

### Minimum Length Validation

![Minimum Length Validation](./screenshots/validation-min-length.png)

## 📂 Project Structure

src/
├── components/
│ ├── Create.jsx
│ └── Read.jsx
├── App.jsx
├── main.jsx
└── index.css

## 🧠 What I Learned

While building this project, I learned and practiced:

- Creating and structuring React components
- Passing data between components using props
- Managing Todo state with `useState`
- Handling form data with React Hook Form
- Adding form validation and displaying validation errors
- Rendering Todo items dynamically using `.map()`
- Deleting individual Todos using `.filter()`
- Deleting all Todos
- Generating unique Todo IDs using Nanoid
- Showing success and error notifications with React Toastify
- Styling the application using Tailwind CSS

## 🔮 Future Improvements

- Add Edit Todo functionality
- Add a Complete/Incomplete Todo feature
- Store Todos in LocalStorage
- Add Todo search functionality
- Add filters for Pending and Completed Todos
- Add Todo persistence after page refresh

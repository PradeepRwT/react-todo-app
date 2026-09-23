# 📝 React Todo App

A simple and responsive Todo application built with React.

This project allows users to create, delete, and manage their daily tasks with form validation, toast notifications, and global state management using React Context API.

## 🚀 Features

- Create a new Todo
- Form validation
- Required field validation
- Minimum 5 characters validation
- Delete individual Todos
- Delete all Todos
- Success and error toast notifications
- Unique Todo IDs using Nanoid
- Global Todo state management using React Context API
- Responsive user interface
- Deployed with Vercel

## 🛠️ Technologies Used

- React
- Vite
- JavaScript
- Tailwind CSS
- React Hook Form
- React Toastify
- Nanoid
- React Context API
- Vercel

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
│   ├── Create.jsx
│   └── Read.jsx
├── App.jsx
├── Wrapper.jsx
├── main.jsx
└── index.css

## 🧠 What I Learned

While building this project, I learned and practiced:

- Creating and structuring React components
- Managing Todo state with `useState`
- Creating global state using React Context API
- Using `createContext` and `useContext`
- Sharing Todo state between multiple components
- Handling form data with React Hook Form
- Adding required field and minimum length validation
- Handling form submission and validation errors
- Displaying success and error notifications using React Toastify
- Rendering Todo items dynamically using `.map()`
- Deleting individual Todos using `.filter()`
- Deleting all Todos
- Generating unique Todo IDs using Nanoid
- Styling the application using Tailwind CSS
- Organizing a React project into reusable components
- Deploying a React application using Vercel
- Connecting GitHub with Vercel for deployment

## 🔮 Future Improvements

- Add Edit Todo functionality
- Add a Complete/Incomplete Todo feature
- Store Todos in LocalStorage
- Add Todo search functionality
- Add filters for Pending and Completed Todos
- Add Todo persistence after page refresh

# React Redux App with Vite (JavaScript)

This is a simple **React** application created with **Vite** and **Redux Toolkit**. It provides a modern frontend setup with state management using Redux.

## Steps to Set Up the Project

### 1. **Create a Vite + React App (JavaScript Template)**

Run the following command to create a new React app with Vite using the JavaScript template:

```bash
npm create vite@latest my-app --template react

cd my-app
npm install
npm install @reduxjs/toolkit react-redux
```

# create store

```bash
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // You can add reducers here as needed
  },
});
```

#import in main.jsx

```bash
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

run project

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigation } from './components';
import './index.css';
import { App, CreateTodo, Dashboard, Todo } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/create-todo',
    element: <CreateTodo />,
  },
  {
    path: '/dashboard/:id',
    element: <Todo />,
  },
  {
    path: '/dashboard/new',
    element: <Todo />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

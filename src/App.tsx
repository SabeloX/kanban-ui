import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/login/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

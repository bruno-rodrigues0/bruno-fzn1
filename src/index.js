import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter, 
  RouterProvider
} from 'react-router-dom'

import ProjectsPage from './routes/projects/ProjectsPage';
import ContactPage from './routes/contact/ContactPage';
import Error from './routes/error';
import HomePage from './routes/home/HomePage';

// sistema de rotas padraão

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />
//   },
//   {
//     path: "/Projetos",
//     element: <ProjectsPage />
//   },
//   {
//     path: "/Contato",
//     element: <ContactPage />
//   }
// ])



// sistema de rotas utilizando a App page como main (possibilita a utilização do outlet e errorElement)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/Projetos",
        element: <ProjectsPage />
      },
      {
        path: "/Contato",
        element: <ContactPage />
      }
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>
);


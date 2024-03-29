import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import {
  createBrowserRouter, 
  RouterProvider
} from 'react-router-dom'

import ProjectsPage from './routes/projects/ProjectsPage';
import ContactPage from './routes/contact/ContactPage';
import Error from './routes/error';
import HomePage from './routes/home/HomePage';
import AbouteMePage from './routes/about/AboutMePage';

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
      },
      {
        path: "/SobreMim",
        element: <AbouteMePage />
      }
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>
);





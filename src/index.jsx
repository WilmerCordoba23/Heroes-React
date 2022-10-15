import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import './index.css';
import DcPages from './pages/DcPages';
import Detail from './pages/Detail';
import HomePage from './pages/HomePage';
import MarvelPages from './pages/MarvelPages';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children:[
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "publisher/marvel",
        element: <MarvelPages />,
      },
      {
        path: "publisher/dc",
        element: <DcPages />,
      },
      {
        path: "hero-detail/:slug",
        element: <Detail />, 
      }

    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
);


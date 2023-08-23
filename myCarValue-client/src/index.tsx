import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

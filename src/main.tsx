import React from 'react'
import ReactDOM from 'react-dom/client'
import router from "@/router";
import '@fontsource-variable/inter';
import 'normalize.css';
import '@/styles/main.scss';
import {RouterProvider} from 'react-router-dom';

ReactDOM.createRoot(document.querySelector('#root')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
)

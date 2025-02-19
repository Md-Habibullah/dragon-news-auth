import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthContextAll from './pages/Provider/AuthContext/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextAll>
      <RouterProvider router={router}></RouterProvider>
    </AuthContextAll>
  </React.StrictMode>,
)

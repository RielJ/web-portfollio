import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { Home, Resume } from './pages'
import { MainLayout } from './components'

const router = createBrowserRouter([
  ...createRoutesFromElements(
    <Route path="/">
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Route>
    </Route>
  ),

  // <Route path="/" element={<Home />} />),
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

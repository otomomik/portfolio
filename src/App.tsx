import type { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages'
import { NotFound } from './pages/404'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export const App: FC = () => {
  return <RouterProvider router={router} />
}

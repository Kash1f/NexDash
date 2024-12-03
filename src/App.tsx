import Home from "./pages/Home/Home"
import Users from "./pages/Users/Users"
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom"

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/users",
      element: <Users/>,
    }
  ])

  return (
  <RouterProvider router={router} />
  )
}

export default App

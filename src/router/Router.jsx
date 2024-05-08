import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import HomePage from "../pages/HomePage"


const router = createBrowserRouter([
    { path: "/", element: <LoginPage /> },
    { path: '/home', element: <HomePage /> },
    { path: '*', element: <h1>404 not found</h1> }
])

function Router() {
    return (
        <RouterProvider router={router} />
    )
}

export default Router

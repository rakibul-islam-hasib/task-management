import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TaskPage from "../pages/TaskPage";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },

            {
                path: "/task",
                element: <TaskPage />
            }
        ]
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    }
])
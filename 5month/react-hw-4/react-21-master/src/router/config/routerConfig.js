import { createBrowserRouter } from "react-router-dom"
import App from "../../App"
import NewsPage from "../../pages/NewsPage"

export const route = [
    {
        path: '/',
        element: <div>Hello world</div>
    }
]

export const studentsRoute = [
    {
        path: '/student',
        element: <div>Hello student</div>
    },
]

export const teachersRoute = [
    {
        path: '/teacher',
        element: <div>Hello teacher</div>
    },
]


export const newRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        loader: () => {
            return null
        },
        children: [
            {
                path: '/news',
                element: <NewsPage/>
            },
            {
                path: '/news/:id',
                element: <NewsPage/>
            }
        ]
    }
])
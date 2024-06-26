import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import Post from "../pages/Home/Post";
import News from "../pages/News/News";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() =>fetch('/news.json')
            },
            {
                path:'/Login',
                element:<Login></Login>
            },
            {
                path:'/Register',
                element:<Register></Register>
            },
            {
                path:'/Post',
                element:<Post></Post>
            },
            {
                path:'/news/:id',
                element:<PrivateRoute><News></News></PrivateRoute>
            }
        ]
    }
]);

export default router;
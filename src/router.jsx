import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Body from "./components/Body";
import Detail from "./components/home/Detail";


export const router= createBrowserRouter([

{
    path:"/",
    element: <App/>,
    children: [
        {
            index:true,
            element: <Body/>
        },
        {
            path:"/detalle",
            element: <Detail/>
        }
    ]
},



])
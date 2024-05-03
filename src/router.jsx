import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Body from "./components/Body";
import Services from "./components/data/Services";
import Detail from "./components/Detail";


const routes = [
    {
        path:"/",
        element: <App/>,
        children: [
            {
                index:true,
                element: <Body/>
            }, 
        ]
    },
    
];
Services.forEach((s)=> {
    routes[0].children.push({
        path: `detalle/${s.id}`,
        element: <Detail s={s}/>
    })
})

export const router= createBrowserRouter(routes)
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Body from "./components/Body";
import Services from "./components/data/Services";
import Detail from "./components/Detail";
import Diary from "./components/home/Diary";


const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Body />
            },
          

        ]
    },

];
Services.forEach((s) => {
    routes[0].children.push({
        path: `detalle/${s.id}`,
        element: <Detail s={s} />,

    })
})
Services.forEach((s) => {
    routes[0].children.push({
        path: `agenda/${s.id}`,
        element:  <Diary s={s} />,

    })
})

export const router = createBrowserRouter(routes)
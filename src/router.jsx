import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Body from "./components/Body";
import Detail from "./components/Detail";
import Dashboard from "./components/admin/view/Dashboard";
import Admin from "./components/admin/view/Admin";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Body />
            },
            {
                path: "detalle/:serviceId", // Ruta dinámica
                element: <Detail />, // Ajusta el componente Detail para que reciba el ID
            }
        ]
    },
    {
        path: "/admin",
        element: <Admin/>
    },
    {
        path: "/admin/dashboard",
        element: <Dashboard/>
    }
];

export const router = createBrowserRouter(routes);
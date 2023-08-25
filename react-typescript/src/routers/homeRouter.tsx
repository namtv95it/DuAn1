import Layout from "../components/layout/Layout";
import NavBar from "../components/layout/NavBar";
import Home from "../page/home/Home";

export const homeRouter: any = {
    path: "/",
    element: <Layout />,
    children: [
        {path: "", element: <Home />},
        {path: "nav", element: <NavBar />},
    ]
}
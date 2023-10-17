import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";


const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>
    }
])

export default myCreatedRoute;
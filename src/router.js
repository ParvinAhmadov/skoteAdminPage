import { createBrowserRouter} from "react-router-dom";
import ErrorBoundry from "./featured/ErrorBoundry";
import Layout from "./featured/layout";
import Home from "./pages/home";
import Jobcard from "./pages/jobcard";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/joblist",
        element: <Home />,
      },
      {
        path: "/jobgrid",
        element: <Jobcard/>,
      },
      
    ],
  },
  {
    path: "*",
    element: <ErrorBoundry />,
  },
]);

export default routers;

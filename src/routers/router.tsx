import ErdGenerate from "@/components/canvas/ErdGenerate";
import Home from "@/components/Home";
import Layout from "@/components/Layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/erd",
        element: <ErdGenerate />,
      },
    ],
  },
]);

export default router;

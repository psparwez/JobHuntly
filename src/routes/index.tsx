import NotFound from "@/components/NotFound";
import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;

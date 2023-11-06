// router.jsx
import { createBrowserRouter, } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import About from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import ChracterPage from "./pages/CharacterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "about/", element: <About /> },
      { path: "characterpage/", element: <ChracterPage/> },

      
    ],
    errorElement: <ErrorPage/>
  },
]);

export default router;

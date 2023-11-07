// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";

import About from "./pages/AboutPage";
import CharacterPage from "./pages/CharacterPage";
import PlacesPage from "./pages/PlacesPage";
import FavoritesPage from "./pages/FavoritesPage";
import ProfilePage from "./pages/ProfilePage";
import LocationProfile from "./pages/LocationProfile";

import ErrorPage from "./pages/ErrorPage";

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
      { path: "characterpage/", element: <CharacterPage /> },
      { path: "places/", element: <PlacesPage /> },
      { path: "favorites/", element: <FavoritesPage /> },
      { path: "charprofile/", element: <ProfilePage /> },
      { path: "placeprofile/", element: <LocationProfile /> },
      { path: "profile/:id", element: <ProfilePage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom"
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import { MainPage } from "../pages/MainPage/MainPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
            <MainPage />
          <Footer />
        </>
        ),
    },
    {
      path: "/about",
      element: <div>About</div>,
    },
  ]);
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import OurMisson from "../components/OurMisson/OurMisson";
import OurCapability from "../components/OurCapability/OurCapability";
import WorkPolicy from "../components/WorkPolicy/WorkPolicy";
import OurExpertise from "../components/OurExpertise/OurExpertise";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/aboutUs",
                element: <AboutUs />,
            },
            {
                path: "/outMisson",
                element: <OurMisson />,
            },
            {
                path: "/OurCapability",
                element: <OurCapability />,
            },
            {
                path: "/WorkPolicy",
                element: <WorkPolicy />,
            },
            {
                path: "/ourExpertise",
                element: <OurExpertise />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ]
    },
]);

export default router;
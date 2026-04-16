import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router";
import Login from "./Components/Authentication/Login";
import Home from "./Components/Landing/Home";
import ErrorPage from "./Components/Error";
import ForgotPassword from "./Components/Authentication/ForgotPassword";
import OTPPage from "./Components/Authentication/Otp";
import Auth from "./Components/Authentication/Auth";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/auth",
        element: <Auth />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "forgot-password",
            element: <ForgotPassword />,
          },
          {
            path: "verify-otp",
            element: <OTPPage />,
          },
        ],
      },
      {
        path: "/restaurants",
        element: <Body />,
      },
      {
        path: "*", // ✅ catches all invalid routes
        element: <ErrorPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

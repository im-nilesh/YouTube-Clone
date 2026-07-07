import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Watch from "../pages/Watch/Watch";
import Channel from "../pages/Channel/Channel";
import UploadVideo from "../pages/UploadVideo/UploadVideo";
import CreateChannel from "../pages/CreateChannel/CreateChannel";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import EditVideo from "../pages/EditVideo/EditVideo";
import ProtectedRoute from "../components/ProtectedRoutes/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "watch/:id",
        element: <Watch />,
      },
      {
        path: "channel/:id",
        element: <Channel />,
      },
      {
        path: "edit-video/:id",
        element: (
          <ProtectedRoute>
            <EditVideo />
          </ProtectedRoute>
        ),
      },
      {
        path: "upload",
        element: (
          <ProtectedRoute>
            <UploadVideo />
          </ProtectedRoute>
        ),
      },
      {
        path: "create-channel",
        element: (
          <ProtectedRoute>
            <CreateChannel />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;

import React from "react";
import ReactDOM from "react-dom/client";
// import { App } from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { FileUploader } from "./components/draft/file-uploader.tsx";
// import { JobDescription } from "./components/draft/job-description.tsx";
import { Response } from "./components/draft/response.tsx";
// import { Login } from "./components/auth/login.tsx";
// import PublicIndex from "./routes/public/index.tsx";
import PrivateIndex from "./routes/private/index.tsx";
import DrafterRoot from "./routes/drafter/root.tsx";
import PrivateRoot from "./routes/private/root.tsx";
import { Login, action as loginAction } from "./components/auth/login.tsx";
import AuthProvider from "./apis/auth-provider.tsx";
import { FirebaseSignUp, action as signupAction } from "./components/auth/register.tsx";
import Drafter from "./routes/drafter/index.tsx";
import QRCodeGenerator, { action as qrAction } from "./routes/qr_code/index.tsx";
import { PublicRoot } from "./routes/public/root.tsx";

const router = createBrowserRouter([

  {
    path: "/",
    element: <DrafterRoot />,
    errorElement: <h1> Oops</h1>,
    children: [

      {
        index: true,
        element: <Drafter />,
      },
      {
        path: "response",
        element: <Response />,
      },
      {
        path: "resume",
        element: <Response />,
      },

    ],
  },
]);

/**
 *  The Utility Apps I am working on.
 */
const newRouter = createBrowserRouter([
  {
    path: "login",
    action: loginAction,
    element: <Login />,
  },
  {
    path: "register",
    action: signupAction,
    element: <FirebaseSignUp />
  },
  {
    path: "/",
    element: <PublicRoot />,
    errorElement: <h1> Oops</h1>
  },
  {
    path: "/qr",
    element: <QRCodeGenerator />,
    errorElement: <h1> Oops</h1>,
    action: qrAction,

  },
  {

    // public route
    path: "/drafter",
    element: <DrafterRoot />,
    errorElement: <h1> Oops</h1>,
    children: [

      {
        index: true,
        element: <Drafter />,
      },
      {
        path: "response",
        element: <Response />,
      },
      {
        path: "resume",
        element: <Response />,
      },

    ],
  },
  {
    path: "/private",
    element: <PrivateRoot />,
    children: [
      {
        index: true,
        element: <PrivateIndex />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

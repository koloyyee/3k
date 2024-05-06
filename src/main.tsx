import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FileUploader } from "./components/draft/file-uploader.tsx";
import { JobDescription } from "./components/draft/job-description.tsx";
import { Response } from "./components/draft/response.tsx";
import { Login } from "./components/auth/login.tsx";
import PublicIndex from "./routes/public/index.tsx";
import PrivateIndex from "./routes/private/index.tsx";
import PublicRoot from "./routes/public/root.tsx";
import PrivateRoot from "./routes/private/root.tsx";

const router = createBrowserRouter([
  { // public route
    path: "/",
    element: <PublicRoot />,
    children: [
      {
        index: true,
        element: <PublicIndex />
      },
    ]
  },
  { // public route
    path: "/private",
    element: <PrivateRoot />,
    children: [
      {
        index: true,
        element: <PrivateIndex />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/*<App />*/}
  </React.StrictMode>
);

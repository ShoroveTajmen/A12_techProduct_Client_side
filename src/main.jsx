import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myCreateRoutes from "./Routes/Router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
          <div className="max-w-[1600px] mx-auto">
            <RouterProvider router={myCreateRoutes} />
          </div>
    </AuthProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myCreateRoutes from "./Routes/Router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-[1600px] mx-auto">
          <RouterProvider router={myCreateRoutes} />
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);

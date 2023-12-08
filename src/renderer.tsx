import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <GlobalStyle />
                    <App />
                </>
            ),
        },
        {
            path: "*",
            element: (
                <>
                    <GlobalStyle />
                    <h1>404</h1>
                </>
            ),
        },
    ]);

    const root = createRoot(rootElement);
    root.render(<RouterProvider router={router} />);
} else {
    console.error("Root element not found.");
}

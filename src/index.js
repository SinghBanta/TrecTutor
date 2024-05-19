// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// ReactDOM.render(<App/>, document.getElementById('root'));

import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY  //Clerk key.
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>

    <App />
    </ClerkProvider>
  </BrowserRouter>
);

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import MainPage from "./routes/Mainpage";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/main",
//     element: <MainPage />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

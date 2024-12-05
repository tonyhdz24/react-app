import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
// Array of objects containing all our valid page info
//      path: The path of the page
//      element: What will be rendered when we access the path above
const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "/articles/individual",
    element: <Article />,
  },
];
// Handles accessing the routes we created above
const router = createBrowserRouter(routes);

// On initial load app will return the RouteProvider Element
function App() {
  return <RouterProvider router={router} />;
}

export default App;

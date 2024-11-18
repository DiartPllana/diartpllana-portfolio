import "./App.css";
  import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import HomePage from "./pages/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/product/:id",
  },

  {path : "/checkOut",
  },

  {path : "/AboutUs",
  }, 
  {path : "/Shop",
  }, 
  {
    path: "/Contact",
  },
  {
    path: "/Login",
  }, 
  {
    path: "/Payment",
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
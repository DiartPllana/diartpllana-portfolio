import "./App.css";
  import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
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
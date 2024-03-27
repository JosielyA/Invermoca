import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import IndexPage from "./pages/IndexPage";
import Servicios from "./pages/Servicios";
import Vehiculos from "./pages/Vehiculos";
import Ubicacion from "./pages/Ubicacion";

const router = createBrowserRouter([
  {
    element: <Navbar />,
    errorElement: (
      <div>
        <Navbar />
        <h2>Error 404, pagina no encontrada.</h2>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <IndexPage />,
      },
      {
        path: "/vehiculos",
        element: <Vehiculos />,
      },
      {
        path: "/servicios",
        element: <Servicios />,
      },
      {
        path: "/ubicacion",
        element: <Ubicacion />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

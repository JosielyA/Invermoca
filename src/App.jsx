import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import IndexPage from "./pages/IndexPage";

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
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

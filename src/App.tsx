import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import "./App.css";
import { TanStackRouterDevtools } from "./components/TanStackRouterDevtools";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} />
    </>
  );
}

export default App;

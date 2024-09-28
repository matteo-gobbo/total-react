import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/">Home</Link>
        <Link to="/about" style={{ marginLeft: ".2rem" }}>
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

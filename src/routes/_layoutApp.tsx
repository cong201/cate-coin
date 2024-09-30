import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react/jsx-runtime";
import { ToastContainer } from "react-toastify";
import HeaderApp from "../components/layout/HeaderApp";
import FooterApp from "../components/layout/FooterApp";

export const Route = createFileRoute("/_layoutApp")({
  component: MainLayoutComponent,
});

function MainLayoutComponent() {
  return (
    <Fragment>
      <HeaderApp />
      <main>
        <Outlet />
      </main>
      <FooterApp />
      <ToastContainer position="top-right" newestOnTop />
    </Fragment>
  );
}

import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import HeaderApp from "../components/layout/HeaderApp";
import FooterApp from "../components/layout/FooterApp";
import { ActiveProvider } from "../context/ActiveContext";

export const Route = createFileRoute("/_layoutApp")({
  component: MainLayoutComponent,
});

function MainLayoutComponent() {
  return (
    <ActiveProvider>
      <Fragment>
        <HeaderApp />
        <main>
          <Outlet />
        </main>
        <FooterApp />
        <ToastContainer position="top-right" newestOnTop />
      </Fragment>
    </ActiveProvider>
  );
}

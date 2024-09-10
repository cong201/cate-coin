import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react/jsx-runtime";
import Header from "../components/layout/Header";
import { ToastContainer } from "react-toastify";
import Footer from "../components/layout/Footer";

export const Route = createFileRoute("/_layout")({
  component: MainLayoutComponent,
});

function MainLayoutComponent() {
  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer position="top-right" newestOnTop />
    </Fragment>
  );
}

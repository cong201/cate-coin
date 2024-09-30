import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layoutApp/app")({
  component: () => <div>Hello /_layout/app!</div>,
});

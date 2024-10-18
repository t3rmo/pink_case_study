import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PatientListView from "./assets/components/PatientListView";
import PatientDetailView from "./assets/components/PatientDetailView";
import NotFoundView from "./assets/components/NotFoundView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PatientListView />,
    errorElement: <NotFoundView />,
  },
  {
    path: "/details/:patientId",
    element: <PatientDetailView />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

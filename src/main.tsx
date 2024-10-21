import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PatientDetailView from "./assets/components/PatientDetailView";
import NotFoundView from "./assets/components/NotFoundView";
import PatientListView from "./assets/components/PatientListView";

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
  <RouterProvider router={router} />
);

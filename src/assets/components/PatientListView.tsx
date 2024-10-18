/* 
Fetch and display a list of patients from the mock FHIR
server.
*/

import { Link } from "react-router-dom";

export default function PatientListView() {
  return (
    <>
      <div>PatientListView</div>
      <button type="button">
        <Link to="/details">Go to Patient Details View</Link>
      </button>
    </>
  );
}

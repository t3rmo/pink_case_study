/* 
When a patient from the list is clicked, display
detailed information about that patient
*/

import { Link } from "react-router-dom";

export default function PatientDetailView() {
  return (
    <>
      <div>PatientDetailView</div>
      <button type="button">
        <Link to="/">Go to Patient List View</Link>
      </button>
    </>
  );
}

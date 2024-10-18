/* 
When a patient from the list is clicked, display
detailed information about that patient
*/

import { Link, useParams } from "react-router-dom";

export default function PatientDetailView() {
  const params = useParams<{ patientId: string }>();
  return (
    <>
      <div>{params.patientId} - Patient Detail</div>
      <button type="button">
        <Link to="/">Go to Patient List View</Link>
      </button>
    </>
  );
}

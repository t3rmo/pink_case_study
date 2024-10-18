/* 
Fetch and display a list of patients from the mock FHIR
server.
*/

import { Link } from "react-router-dom";
import { MOCKPATIENT_LIST } from "../mock/MockData";

export default function PatientListView() {
  return (
    <>
      <div>Patient List View</div>

      <ol>
        {MOCKPATIENT_LIST.map((patient) => {
          const detailsRouter: string = "/details/" + patient.id;
          return (
            <li key={patient.id}>
              <Link to={detailsRouter}>{patient.name[0]?.given}</Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}

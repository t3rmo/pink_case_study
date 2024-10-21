import { PatientListViewData } from "../../models/PatientListViewData";
import PatientListHeader from "./PatientListHeader";
import PatientListItem from "./PatientListItem";

export default function PatientList({ headers, patients }: PatientListViewData) {
  return (
    <table className="table">
      <PatientListHeader headers={headers} />
      {patients.map((patient) => (
        <PatientListItem patient={patient} key={patient.id} />
      ))}
    </table>
  );
}

import { Patient } from "../../models/Patient";
import PatientListHeader from "./PatientListHeader";
import PatientListItem from "./PatientListItem";

interface Props {
  headers: string[];
  patients: Patient[];
}

export default function PatientList({ headers, patients }: Props) {
  const renderPatientList = (patient: Patient) => {
    let fullName: string = "Name Missing";

    if (patient && patient.name)
      fullName = patient.name[0].given.join() + " " + patient.name[0].family;

    return (
      <PatientListItem
        patientId={patient.id}
        fullName={fullName}
        key={patient.id}
      />
    );
  };

  return (
    <table className="table">
      <PatientListHeader headers={headers} />
      {patients.map((patient) => renderPatientList(patient))}
    </table>
  );
}

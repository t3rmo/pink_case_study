import { PatientListViewData } from "../../models/PatientListViewData";
import ListViewHeader from "./ListViewHeader";
import ListViewItem from "./ListViewItem";

export default function ListView({ headers, patients }: PatientListViewData) {
  return (
    <table className="table">
      <ListViewHeader headers={headers} />
      {patients.map((patient) => (
        <ListViewItem patient={patient} key={patient.id} />
      ))}
    </table>
  );
}

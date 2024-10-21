import { Link } from "react-router-dom";
import { Patient } from "../../models/Patient";

interface Props {
  patient: Patient;
}

export default function PatientListItem({ patient }: Props) {
  const detailsRouter: string = "/details/" + patient.id;

  const createFullName = () => {
    const firstName = patient.name[0]?.given.join("");
    const lastName = patient.name[0]?.family;
    const fullName = firstName + " " + lastName;
    return fullName;
  };

  return (
    <tbody>
      <tr>
        <th scope="row">{createFullName()}</th>
        <td>
          <Link to={detailsRouter}>Details</Link>
        </td>
      </tr>
    </tbody>
  );
}

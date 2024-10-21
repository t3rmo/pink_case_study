import { Link } from "react-router-dom";

interface Props {
  patientId: string;
  fullName: string;
}

export default function PatientListItem({ patientId, fullName }: Props) {
  const detailsRouter: string = "/details/" + patientId;

  return (
    <tbody>
      <tr>
        <th scope="row">{fullName}</th>
        <td>
          <Link to={detailsRouter}>Details</Link>
        </td>
      </tr>
    </tbody>
  );
}

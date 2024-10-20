import { Link } from "react-router-dom";
import { Patient } from "../../models/Patient";

interface Props {
  patient: Patient;
}

export default function ListViewItem({ patient }: Props) {
  const detailsRouter: string = "/details/" + patient.id;

  return (
    <tbody>
      <tr>
        <th scope="row">{patient.id}</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>
          <Link to={detailsRouter}>Details</Link>
        </td>
      </tr>
    </tbody>
  );
}

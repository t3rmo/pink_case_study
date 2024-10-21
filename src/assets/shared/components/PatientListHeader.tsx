interface Props {
  headers: string[];
}

export default function PatientListHeader({ headers }: Props) {
  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th scope="col" key={header}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

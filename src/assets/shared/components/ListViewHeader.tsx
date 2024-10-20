interface Props {
  headers: string[];
}

export default function ListViewHeader({ headers }: Props) {
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

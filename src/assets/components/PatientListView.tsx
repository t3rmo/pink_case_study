/* 
Fetch and display a list of patients from the mock FHIR
server.
*/

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { PatientService } from "../services/PatientService";
import { Patient } from "../models/Patient";
import { AxiosResponse } from "axios";

export default function PatientListView() {
  const patientService: PatientService = new PatientService();
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const getMockPatient = async () => {
      const request = patientService.getPatientById("patient-1");

      await request
        .then((response: AxiosResponse) => {
          const patient = response.data as Patient;
          setPatients((p) => [...p, patient]);
        })
        .catch((err) => {
          console.log(err.message);
          console.log("There was an error");
        })
        .finally(() => {
          console.log("DONE!");
        });
    };

    getMockPatient();
  }, []);

  return (
    <>
      <div>Patient List View</div>
      <ol>
        {patients.map((patient) => {
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

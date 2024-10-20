/* 
Fetch and display a list of patients from the mock FHIR
server.
*/

import { useEffect, useState } from "react";
import { PatientService } from "../shared/services/PatientService";
import { Patient } from "../models/Patient";
import { AxiosResponse } from "axios";
import ListView from "../shared/components/ListView";

export default function PatientListView() {
  const patientService: PatientService = new PatientService();
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const getMockPatient = async () => {
      const request = patientService.getPatientById("patient-1");

      await request
        .then((response: AxiosResponse) => {
          const _patient = response.data as Patient;
          setPatients((p) => [...p, _patient]);
        })
        .catch((_err) => {
          console.log(_err.message);
          console.log("There was an error");
        });
    };

    getMockPatient();
  }, []);

  return (
    <div className="container">
      <h1>Patient List View</h1>
      <ListView
        headers={["test1", "test2", "test3", "test4", ""]}
        patients={patients}
      />
    </div>
  );
}

/* 
Fetch and display a list of patients from the mock FHIR
server.
*/

import { useEffect, useState } from "react";
import { PatientService } from "../shared/services/PatientService";
import { AxiosResponse } from "axios";
import PatientList from "../shared/components/PatientList";

import { Patient } from "../models/Patient";
import { Bundle } from "../models/Bundle";

export default function PatientListView() {
  const patientService: PatientService = new PatientService();
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const getMockPatient = async () => {
      const request = patientService.getAllPatients();

      await request
        .then((response: AxiosResponse) => {
          const bundle: Bundle = response.data;
          bundle.entry.map((entry) => {
            if (entry.resource.resourceType == "Patient") {
              setPatients((p) => [...p, entry.resource as Patient]);
            }
          });
        })
        .catch((_err) => {
          console.log(_err);
          alert("There was an error, check the consol for more informations");
        });
    };

    getMockPatient();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Patient List View</h1>
      <PatientList
        headers={["Name des Patienten", "Zu den Details"]}
        patients={patients}
      />
    </div>
  );
}

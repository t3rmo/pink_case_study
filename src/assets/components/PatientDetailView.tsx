/* 
When a patient from the list is clicked, display
detailed information about that patient
*/

import { Link, useParams } from "react-router-dom";
import { PatientService } from "../shared/services/PatientService";
import { useEffect, useState } from "react";
import { Patient } from "../models/Patient";
import { AxiosResponse } from "axios";

export default function PatientDetailView() {
  const routeParams = useParams<{ patientId: string }>();
  const patientService: PatientService = new PatientService();
  const [patient, setPatient] = useState<Patient>();

  useEffect(() => {
    const getPatientDetailsById = async () => {
      if (routeParams.patientId) {
        await patientService
          .getPatientById(routeParams.patientId)
          .then((response: AxiosResponse) => {
            const _patient = response.data as Patient;
            setPatient(_patient);
            console.log(patient);
          })
          .catch((err) => {
            alert(err.message);
          });
      }
    };

    getPatientDetailsById();
  }, []);

  return (
    <>
      <div>{routeParams.patientId} - Patient Detail</div>
      <button type="button">
        <Link to="/">Go to Patient List View</Link>
      </button>
    </>
  );
}

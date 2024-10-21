/* 
When a patient from the list is clicked, display
detailed information about that patient
*/

import { Link, useParams } from "react-router-dom";
import { PatientService } from "../shared/services/PatientService";
import { useEffect, useState } from "react";
import { Patient } from "../models/Patient";
import { AxiosResponse } from "axios";
import Card from "../shared/components/Card";

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
    <div className="d-flex flex-column h-100 w-100 justify-content-center text-center">
      <h1>{routeParams.patientId} - Patient Detail</h1>
      <button type="button" className="btn btn-link align-self-center">
        <Link to="/">Go to Patient List View</Link>
      </button>
    </div>
  );
}

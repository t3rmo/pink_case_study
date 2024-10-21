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

  type NameProps = "firstName" | "secondName" | "lastName" | "fullName";

  useEffect(() => {
    const getPatientDetailsById = async () => {
      if (routeParams.patientId) {
        await patientService
          .getPatientById(routeParams.patientId)
          .then((response: AxiosResponse) => {
            setPatient(response.data as Patient);
          })
          .catch((err) => {
            alert(err.message);
          });
      }
    };

    getPatientDetailsById();
  }, []);

  const getNameDetails = (nameProp: NameProps) => {
    let name = "";

    if (patient && patient.name) {
      switch (nameProp) {
        case "firstName":
          name = patient.name[0].given[0];
          break;
        case "secondName":
          name = patient.name[0].given[1] ?? "-";
          break;
        case "lastName":
          name = patient.name[0].family;
          break;
        case "fullName":
          name = createFullName();
          break;
        default:
          break;
      }
    }

    return name;
  };

  const createFullName = (): string => {
    let firstAndSecondName: string = "";
    let lastName: string = "";
    let fullName: string = "";

    if (patient && patient.name) {
      firstAndSecondName = patient?.name[0].given.join("");
      lastName = patient?.name[0].family;
      fullName = firstAndSecondName + " " + lastName;
    }

    return fullName;
  };

  const renderPatientDetailsAsCardBody = () => {
    return (
      <div className="container">
        {/* Name, Gender and Birth Date */}
        <div className="shadow m-3 p-3 mb-5 bg-white rounded">
          <span className="h5">Name Details</span>
          <div className="row p-3">
            <div className="col-sm">First Name</div>
            <div className="col-sm">Second Name</div>
            <div className="col-sm">Last Name</div>
            <div className="col-sm">Gender</div>
            <div className="col-sm">Birth Date</div>
          </div>
          <div className="row ">
            <div className="col-sm h5">{getNameDetails("firstName")}</div>
            <div className="col-sm h5">{getNameDetails("secondName")}</div>
            <div className="col-sm h5">{getNameDetails("lastName")}</div>
            <div className="col-sm h5">{patient?.gender}</div>
            <div className="col-sm h5">{patient?.birthDate}</div>
          </div>
        </div>

        {/* Address */}
        {patient?.address && (
          <div className="shadow p-3 mb-5 bg-white rounded">
            <span className="h5">Adress Details</span>
            <div className="row p-3">
              <div className="col-sm">Postal Code</div>
              <div className="col-sm">Street</div>
              <div className="col-sm">City</div>
              <div className="col-sm">State</div>
            </div>
            <div className="row">
              <div className="col-sm h5">{patient?.address[0]?.postalCode}</div>
              <div className="col-sm h5">{patient?.address[0]?.line[0]}</div>
              <div className="col-sm h5">{patient?.address[0]?.city}</div>
              <div className="col-sm h5">{patient?.address[0]?.state}</div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <h1 className="text-center m-2">Patient Detail</h1>
      {patient ? (
        <div className="d-flex m-2 p-2 flex-column h-100 w-100 justify-content-center text-center">
          <Card
            header={<span className="h3">{getNameDetails("fullName")}</span>}
            body={renderPatientDetailsAsCardBody()}
          ></Card>

          <button type="button" className="btn btn-link align-self-center">
            <Link to="/">Return to List View</Link>
          </button>
        </div>
      ) : (
        <div>Loading Data..</div>
      )}
    </>
  );
}

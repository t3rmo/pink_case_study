import { PatientAddress } from "./PatientAddress";
import { PatientMeta } from "./PatientMeta";
import { PatientName } from "./PatientName";
import { PatientText } from "./PatientText";

export interface Patient {
  resourceType: string;
  id: string;
  meta: PatientMeta;
  address?: PatientAddress[];
  name: PatientName[];
  gender: string;
  text: PatientText;
  birthDate: string;
}

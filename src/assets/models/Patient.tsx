import { PatientMeta } from "./PatientMeta";
import { PatientName } from "./PatientName";
import { PatientText } from "./PatientText";

export interface Patient {
  resourceType: string;
  id: string;
  meta: PatientMeta;
  text: PatientText;
  name: PatientName[];
  gender: string;
  birthDate: string;
}

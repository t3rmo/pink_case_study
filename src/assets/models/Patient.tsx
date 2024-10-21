export interface Patient {
  resourceType: string
  id: string
  meta: PatientMeta
  text: PatientText
  identifier?: PatientIdentifier[]
  name?: PatientName[]
  telecom?: PatientTelecom[]
  gender?: string
  birthDate?: string
  address?: PatientAddress[]
}

export interface PatientMeta {
  versionId: string
  lastUpdated: string
  source: string
}

export interface PatientText {
  status: string
  div: string
}

export interface PatientIdentifier {
  use?: string
  system?: string
  value: string
  type?: PatientType
}

export interface PatientType {
  coding: PatientCoding[]
}

export interface PatientCoding {
  system: string
  code: string
}

export interface PatientName {
  text?: string
  family: string
  given: string[]
}

export interface PatientTelecom {
  system: string
  value: string
  use: string
}

export interface PatientAddress {
  use?: string
  type?: string
  text?: string
  line: string[]
  city: string
  state: string
  postalCode: string
  country: string
}
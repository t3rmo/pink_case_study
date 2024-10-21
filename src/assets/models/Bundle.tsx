export interface Bundle {
  resourceType: string;
  id: string;
  meta: BundleMeta;
  type: string;
  link: BundleLink[];
  entry: BundleEntry[];
}

export interface BundleMeta {
  lastUpdated: string;
}

export interface BundleLink {
  relation: string;
  url: string;
}

export interface BundleEntry {
  fullUrl: string;
  resource: BundleEntryResource;
  search: BundleEntrySearch;
}

export interface BundleEntryResource {
  resourceType: string;
  id: string;
  meta: BundleEntryResourceMeta;
  text: BundleEntryResourceText;
  identifier?: BundleEntryResourceIdentifier[];
  name?: BundleEntryResourceName[];
  telecom?: BundleEntryResourceTelecom[];
  gender?: string;
  birthDate?: string;
  address?: BundleEntryResourceAddress[];
}

export interface BundleEntryResourceMeta {
  versionId: string;
  lastUpdated: string;
  source: string;
}

export interface BundleEntryResourceText {
  status: string;
  div: string;
}

export interface BundleEntryResourceIdentifier {
  use?: string;
  system?: string;
  value: string;
  type?: BundleEntryResourceIdentifierType;
}

export interface BundleEntryResourceIdentifierType {
  coding: BundleEntryResourceIdentifierTypeCoding[];
}

export interface BundleEntryResourceIdentifierTypeCoding {
  system: string;
  code: string;
}

export interface BundleEntryResourceName {
  text?: string;
  family: string;
  given: string[];
}

export interface BundleEntryResourceTelecom {
  system: string;
  value: string;
  use: string;
}

export interface BundleEntryResourceAddress {
  use?: string;
  type?: string;
  text?: string;
  line: string[];
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface BundleEntrySearch {
  mode: string;
}

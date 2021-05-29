export interface Individual {
  href?: string;
  id?: string;
  aristocraticTitle?: string;
  birthDate?: Date;
  countryOfBirth?: string;
  deathDate?: Date;
  disability?: Disability[];
  familyName: string;
  familyNamePrefix?: string;
  formattedName?: string;
  fullName?: string;
  gender?: string;
  generation?: string;
  givenName: string;
  individualIdentification?: IndividualIdentification[];
  languageAbility?: LanguageAbility[];
  legalName?: string;
  location?: string;
  maritalStatus?: string;
  middleName?: string;
  nationality?: string;
  otherName?: OtherNameIndividual[];
  placeOfBirth?: string;
  preferredGivenName?: string;
  skill?: Skill[];
  status?: IndividualStateType;
  title?: string;
  contactMedium?: ContactMedium[];
  creditRating?: PartyCreditProfile[];
  externalReference?: ExternalReference[];
  partyCharacteristic?: Characteristic[];
  relatedParty?: RelatedParty[];
  taxExemptionCertificate?: TaxExemptionCertificate[];

}


export interface Disability {
  disabilityCode: string;
  disabilityName: string;
  validFor: Date;

}

export interface IndividualIdentification {
  attachment: AttachmentRefOrValue;
  identificationId: string;
  identificationType: 'passport'|'national identity card'|'drivers license'|'social security number'|'birth certificate';
  issuingAuthority: string;
  issuingDate: Date;
  validfor: Date;

}

export interface LanguageAbility {
  isFavouriteLanguage: boolean;
  languageCode: string;
  languageName: string;
  listeningProficiency: string;
  readingProficiency: string;
  speakingProficiency: string;
  validFor: Date;
  writingProficiency: string;
  givenName: string;
  legalName: string;
  middleName: string;
  preferredGivenName: string;
  title: string;


}

export interface OtherNameIndividual {
  aristocraticTitle: string;
  familyName: string;
  familyNamePrefix: string;
  formattedName: string;
  fullName: string;
  generation: string;
  givenName: string;
  legalName: string;
  middleName: string;
  preferredGivenName: string;
  title: string;
  validFor: Date;

}

export interface Skill {
  comment: string;
  evaluatedLevel: string;
  skillCode: string;
  skillName: string;
  validFor: Date;

}

// tslint:disable-next-line:no-empty-interface
export interface IndividualStateType {

}

export interface ContactMedium {
  characteristic: MediumCharacteristic;
  mediumType: string;
  preferred: boolean;
  validFor: Date;

}

export interface  MediumCharacteristic {
  city: string;
  contactType: string;
  country: string;
  emailAddress: string;
  faxNumber: string;
  phoneNumber: string;
  postCode: string;
  socialNetworkId: string;
  stateOrProvince: string;
  street1: string;
  street2: string;


}

export interface PartyCreditProfile {
  creditAgencyName: string;
  creditAgencyType: string;
  ratingReference: string;
  ratingScore: number;
  validFor: Date;

}

export interface ExternalReference {
  externalReferenceType: string;
  name: string;

}

export interface Characteristic {
  name: string;
  value: any;
  valueType: string;

}

export interface RelatedParty {
  '@referredType': string;
  href: string;
  id: string;
  name: string;
  role: string;

}

export interface  TaxExemptionCertificate {
  attachment: AttachmentRefOrValue;
  id: string;
  taxDefinition: TaxDefinition[];
  validFor: Date;

}

export interface AttachmentRefOrValue {
  '@referredType': string; // fixme ezt így kell miafasz?
  description: string;
  href: string;
  id: string;
  url: string;
  // todo ezt a vackot be kéne fejezni

}

export interface AttachmentRefOrValue {
  '@referredType': string;
  href: string;
  id: string;
  name: string;
  attachmentType: string;
  description: string;
}

export interface Quantity {
  amount: number;
  units: string;
}

export interface TaxDefinition {
  attachment: AttachmentRefOrValue;
  id: string;
  taxDefinition: TaxDefinition[];
  validFor: Date;
}



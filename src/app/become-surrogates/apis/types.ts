export interface FinancialLegal {
  criminalDescription: string
  governmentAssistance: string[]
  hasCPSHistory: boolean
  hasCriminalRecord: boolean
  hasLegalProceedings: boolean
  otherAssistanceDetail: string
  proceedingDetails: string
  [property: string]: any
}

export interface HealthHistory {
  isTakingMeds: boolean
  medicalConditions: string[]
  medicationsList: string
  [property: string]: any
}

export interface PregnancyHistory {
  birthDetails: string
  hasGivenBirth: boolean
  hasStillbirth: boolean
  height: number
  isBreastfeeding: boolean
  isPregnant: boolean
  weightPounds: number
  [property: string]: any
}

export interface Request {
  // avatarFile: string
  birthDate: string
  citizenshipStatus: string
  contactSource: string
  contactSourceOther: string
  email: string
  financialLegal: FinancialLegal
  firstName: string
  hasHighSchoolDiploma: boolean
  healthHistory: HealthHistory
  householdIncome: string
  isFormerSurrogate: boolean
  lastName: string
  maritalStatus: string
  mobileWithCountryCode: string
  occupation: string
  partnerSupport: string
  pregnancyHistory: PregnancyHistory
  smsConsent: boolean
  state: string
  surrogateExperience: string
  zipCode: string
  [property: string]: any
}

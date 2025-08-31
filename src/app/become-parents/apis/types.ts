export interface Request {
  accountId: number
  city: string
  consentAgreement: boolean
  consentSMS: boolean
  country: string
  countryCode: string
  dateOfBirth: string
  desiredChildrenCount: string
  email: string
  ethnicities: string[]
  ethnicitySelfDescribe: string
  fullLegalName: string
  genderIdentity: string
  genderSelfDescribe: string
  initialQuestions: string
  journeyStartTiming: string
  languages: string[]
  otherLanguage: string
  phoneNumber: string
  programInterests: string[]
  pronouns: string
  pronounsSelfDescribe: string
  referralSource: string
  sexualOrientation: string
  sexualOrientationSelfDescribe: string
  stateProvince: string
  [property: string]: any
}

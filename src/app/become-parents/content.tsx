'use client'

import './page.scss'
import {
  Ethnicity,
  ChildPlanEnum,
  JourneyStartTimingEnum,
  GenderIdentity,
  PrimaryLanguage,
  ProgramInterest,
  SexualOrientation,
  Pronouns,
} from './constants'
import React, { useMemo, useState } from 'react'
import Sections from '@/components/common/sections'
import {
  Form,
  Input,
  Radio,
  DatePicker,
  Select,
  Checkbox,
  Button,
  Row,
  Col,
  Space,
  message,
} from 'antd'
import { postParentApplication } from './apis'
import type { Request } from './apis/types'
import IndexHeader from '@/components/common/IndexHeader'
import Footer from '@/components/common/footer'
import { useTranslation } from 'react-i18next'
import { I18N_KEYS } from '@/i18n/keys'
import i18n from '@/i18n'
import { Country, State } from 'country-state-city'
import countryList from 'react-select-country-list'

const { Item } = Form

export default function BecomeParentsPageContent() {
  const [form] = Form.useForm()
  const { t } = useTranslation('common')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [stateOptions, setStateOptions] = useState<any[]>([])

  const countryOptions = useMemo(() => countryList().getData(), [])
  const citizenshipOptions = useMemo(
    () =>
      countryList()
        .getData()
        .map((opt: { value: string; label: string }) => ({
          value: opt.value,
          label: `${opt.label}${t('citizenship.suffix')}`,
        })),
    [t]
  )

  const countryCallingCodes = React.useMemo(
    () =>
      Country.getAllCountries()
        .map((c: { phonecode?: string; name: string }) => ({
          value: c.phonecode ? `+${c.phonecode}` : '',
          label: c.phonecode ? `${c.name} (+${c.phonecode})` : c.name,
        }))
        .filter((opt: { value: string; label: string }) => !!opt.value),
    []
  )

  // 联动：国家变化时加载对应州/省
  const handleCountryChange = (value: string) => {
    setSelectedCountry(value)
    const states = State.getStatesOfCountry(value)
    setStateOptions(states)
    // 清空已选 state
    form.setFieldsValue({ state: undefined })
  }

  // 表单提交处理
  const handleFinish = async (values: any) => {
    // 这里需要将表单字段映射为Request类型
    const req: Request = {
      accountId: 0, // 这里请根据实际业务补充
      city: values.city,
      consentAgreement: !!values.agreeToTerms,
      consentSMS: !!values.agreeToSMS,
      country: values.country,
      countryCode: values.countryCode,
      dateOfBirth: values.dateofbirth?.format?.('YYYY-MM-DD') || '',
      desiredChildrenCount: values.childrenCount,
      email: values.email,
      ethnicities: values.race || [],
      ethnicitySelfDescribe: '', // 可从自定义输入补充
      fullLegalName: `${values.firstname || ''} ${values.lastname || ''}`.trim(),
      genderIdentity: values.gender, // 可从gender映射
      genderSelfDescribe: '', // 可从自定义输入补充
      initialQuestions: values.questions || '',
      journeyStartTiming: values.timeline,
      languages: values.languages || [],
      otherLanguage: '', // 可从自定义输入补充
      phoneNumber: values.phone,
      programInterests: values.services || [],
      pronouns: values.pronouns,
      pronounsSelfDescribe: '', // 可从自定义输入补充
      referralSource: values.channel,
      sexualOrientation: values.sexualOrientation,
      sexualOrientationSelfDescribe: '', // 可从自定义输入补充
      stateProvince: values.state,
    }
    try {
      await postParentApplication(req)
      message.success('Submit successful!')
      form.resetFields()
    } catch (e: any) {
      if (e.data) {
        message.error(e.data.message || 'Submit failed, please try again')
      } else {
        message.error('Submit failed, please try again')
      }
      // message.error('Submit failed, please try again')
    }
  }

  return (
    <div className="become-parents min-h-screen relative">
      <IndexHeader />
      <Sections color="#D8D9CA" className="h-[439px] p-4 text-white">
        <div className="font-64 w-full flex justify-center items-center text-[#271F18] content-appear">
          {t('intendedParentApplication')}
        </div>
      </Sections>
      <Sections>
        <div className="flex flex-col justify-center items-center py-[70px] max-w-[966px] mx-auto content-appear">
          <div className="font-32 pb-[37px] text-center">
            {t('welcomingAChildIntoYourLifeStartsWithAConversation')}
          </div>
          <div className="font-18 pb-[37px] text-center">
            {t(
              'weDloveToLearnMoreAboutYouYourHopesYourQuestionsAndTheKindOfSupportYoureLookingFor'
            )}
          </div>
          <div className="font-18 pb-[37px] text-center">
            {t(
              'onceSubmittedOurTeamWillFollowUpWithAPersonalizedInformationPackageNoPressureNoCommitmentJustGuidanceMadeForYou'
            )}
          </div>
        </div>
      </Sections>
      <Sections>
        <div className="flex flex-col justify-center items-center pt-[61px] pb-[82px] content-appear">
          <div className="font-32 pb-[16px]">
            {t('weProudlySupportIntendedParentsFromAroundTheWorld')}
          </div>
          <div className="font-16-Regular pb-[30px]">{t('justScrollDownToBegin')}</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M24 10V38M24 38L38 24M24 38L10 24"
                stroke="#1E1E1E"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </Sections>
      <div className="m-auto w-[1280px] px-[30px] pt-[60px] pb-[110px] glass-container relative content-appear">
        <div className="flex w-full font-32 pb-[50px]">{t('basicInformation')}</div>
        <Form
          form={form}
          layout="vertical"
          labelCol={{ offset: 12 }}
          onFinish={handleFinish}
          autoComplete="off"
        >
          <Row gutter={24}>
            <Col span={12}>
              <Item
                label={t('firstNameOnlyFirstNameWillBeShownInPublicProfile')}
                name="firstname"
                rules={[{ required: true, message: t('pleaseEnterYourFirstName') }]}
              >
                <Input autoComplete="off" />
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('lastName')}
                name="lastname"
                rules={[{ required: true, message: t('pleaseEnterYourLastName') }]}
              >
                <Input autoComplete="off" />
              </Item>
            </Col>
            <Col span={12}>
              <Item label={t('pronouns')} name="pronouns">
                <Radio.Group>
                  <Row gutter={16} align="middle">
                    <Col span={16}>
                      <Radio value={Pronouns.HE_HIM}>{t('pronouns.he')}</Radio>
                    </Col>
                    <Col span={16}>
                      <Radio value={Pronouns.SHE_HER}>{t('pronouns.she')}</Radio>
                    </Col>
                    <Col span={16}>
                      <Radio value={Pronouns.THEY_THEM}>{t('pronouns.they')}</Radio>
                    </Col>
                    <Col span={16}>
                      <Space>
                        <Radio value={Pronouns.OTHER}>{t('pronouns.custom')}</Radio>
                        <Input variant="underlined" autoComplete="off" />
                      </Space>
                    </Col>
                  </Row>
                </Radio.Group>
              </Item>
            </Col>
            <Col span={12}>
              <Item label={t('genderIdentity')} name="gender">
                <Radio.Group>
                  <Row gutter={16} align="middle">
                    <Col span={24}>
                      <Radio value={GenderIdentity.MALE}>{t('gender.male')}</Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={GenderIdentity.FEMALE}>{t('gender.female')}</Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={GenderIdentity.TRANSGENDER_MALE}>{t('gender.transMale')}</Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={GenderIdentity.TRANSGENDER_FEMALE}>
                        {t('gender.transFemale')}
                      </Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={GenderIdentity.NON_BINARY}>{t('gender.nonBinary')}</Radio>
                    </Col>
                    <Col span={24}>
                      <Space>
                        <Radio value={GenderIdentity.OTHER}>{t('gender.other')}</Radio>
                        <Input variant="underlined" autoComplete="off" />
                      </Space>
                    </Col>
                  </Row>
                </Radio.Group>
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('dateOfBirth')}
                name="dateofbirth"
                rules={[{ required: true, message: t('pleaseSelectYourDateOfBirth') }]}
              >
                <DatePicker
                  className="w-full"
                  suffixIcon={<img src="/images/calendar.svg" />}
                  autoComplete="off"
                />
              </Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Item label={t('ethnicityMultipleChoice')} name="race">
                <Checkbox.Group>
                  <Row gutter={16} align="middle">
                    <Col span={24}>
                      <Checkbox value={Ethnicity.ASIAN}>{t('ethnicity.asian')}</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={Ethnicity.WHITE}>{t('ethnicity.white')}</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={Ethnicity.BLACK}>{t('ethnicity.black')}</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={Ethnicity.HISPANIC}>{t('ethnicity.hispanic')}</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={Ethnicity.MIDDLE_EASTERN}>
                        {t('ethnicity.middleEastern')}
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={Ethnicity.NATIVE_AMERICAN}>
                        {t('ethnicity.nativeAmerican')}
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={Ethnicity.PACIFIC_ISLANDER}>
                        {t('ethnicity.pacificIslander')}
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={Ethnicity.MIXED_RACE}>{t('ethnicity.mixedRace')}</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={Ethnicity.PREFER_NOT_TO_SAY}>
                        {t('ethnicity.preferNotToSay')}
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Space>
                        <Checkbox value={Ethnicity.OTHER}>{t('ethnicity.other')}</Checkbox>
                        <Input variant="underlined" autoComplete="off" />
                      </Space>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Item>
            </Col>
          </Row>
          <div className="flex w-full font-32 pt-[72px] pb-[50px]">{t('contactInformation')}</div>
          <Row gutter={24}>
            <Col span={12}>
              <Item label={t('phoneNumber')} required>
                <Input.Group compact>
                  <Item
                    name="countryCode"
                    noStyle
                    rules={[{ required: true, message: t('pleaseSelectYourCountryCode') }]}
                  >
                    <Select
                      showSearch
                      style={{ width: 140 }}
                      options={countryCallingCodes}
                      placeholder={t('countryCode')}
                    />
                  </Item>
                  <Item
                    name="phone"
                    noStyle
                    rules={[{ required: true, message: t('pleaseEnterYourPhoneNumber') }]}
                  >
                    <Input
                      style={{ width: 'calc(100% - 140px)' }}
                      placeholder={t('phoneNumber')}
                      autoComplete="off"
                    />
                  </Item>
                </Input.Group>
              </Item>
              <div className="mt-4">
                <div className="text-lg font-medium mb-2">
                  <Item name="agreeToSMS" valuePropName="checked">
                    <Checkbox>
                      {t('iAgreeToReceiveSMSNotificationsRelatedToTheApplicationAndServices')}
                    </Checkbox>
                  </Item>
                </div>
                <div className="text-sm mb-4">
                  {t('byCheckingThisBoxYouAgreeToReceiveSMSMessagesRelatedToTheApplicationProcess')}
                </div>
              </div>
            </Col>
            <Col span={12}>
              <Item
                label={t('email')}
                name="email"
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: t('pleaseEnterAValidEmailAddress'),
                  },
                ]}
              >
                <Input autoComplete="off" />
              </Item>
            </Col>
          </Row>
          <Row gutter={24} className="mb-0">
            <Col span={24}>
              <Item
                label={t('primaryLanguages')}
                name="languages"
                rules={[{ required: true, message: t('pleaseSelectYourPrimaryLanguage') }]}
                className="mb-0"
              >
                <Checkbox.Group>
                  <Row gutter={48}>
                    <Col span={12}>
                      <Row>
                        <Col span={24}>
                          <Checkbox value={PrimaryLanguage.ENGLISH}>
                            {t('language.english')}
                          </Checkbox>
                        </Col>
                        <Col span={24}>
                          <Checkbox value={PrimaryLanguage.MANDARIN}>
                            {t('language.mandarin')}
                          </Checkbox>
                        </Col>
                        <Col span={24}>
                          <Checkbox value={PrimaryLanguage.CANTONESE}>
                            {t('language.cantonese')}
                          </Checkbox>
                        </Col>
                        <Col span={24}>
                          <Checkbox value={PrimaryLanguage.SPANISH}>
                            {t('language.spanish')}
                          </Checkbox>
                        </Col>
                        <Col span={24}>
                          <Checkbox value={PrimaryLanguage.FRENCH}>{t('language.french')}</Checkbox>
                        </Col>
                        <Col span={24}>
                          <Checkbox value={PrimaryLanguage.KOREAN}>{t('language.korean')}</Checkbox>
                        </Col>
                        <Col span={24}>
                          <Checkbox value={PrimaryLanguage.JAPANESE}>
                            {t('language.japanese')}
                          </Checkbox>
                        </Col>
                        <Col span={24}>
                          <Checkbox value={PrimaryLanguage.HINDI}>{t('language.hindi')}</Checkbox>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row>
                        <Col span={24}>
                          <Checkbox value={PrimaryLanguage.VIETNAMESE}>
                            {t('language.vietnamese')}
                          </Checkbox>
                        </Col>
                        <Col span={24}>
                          <Checkbox value={PrimaryLanguage.RUSSIAN}>
                            {t('language.russian')}
                          </Checkbox>
                        </Col>
                        <Col span={24}>
                          <Checkbox value={PrimaryLanguage.ARABIC}>{t('language.arabic')}</Checkbox>
                        </Col>
                        <Col span={24}>
                          <Checkbox value={PrimaryLanguage.PORTUGUESE}>
                            {t('language.portuguese')}
                          </Checkbox>
                        </Col>
                        <Col span={24}>
                          <Checkbox value={PrimaryLanguage.TAGALOG}>
                            {t('language.tagalog')}
                          </Checkbox>
                        </Col>
                        <Col span={24}>
                          <Checkbox value={PrimaryLanguage.GERMAN}>{t('language.german')}</Checkbox>
                        </Col>
                        <Col span={24}>
                          <Checkbox value={PrimaryLanguage.ITALIAN}>
                            {t('language.italian')}
                          </Checkbox>
                        </Col>
                        <Col span={24}>
                          <Space>
                            <Checkbox value={PrimaryLanguage.OTHER}>{t('language.other')}</Checkbox>
                            <Input variant="underlined" autoComplete="off" />
                          </Space>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Item>
            </Col>
            <Col span={12}>
              <div className="pt-10 ">{t('yundaMainlyProvidesServicesInEnglish')}</div>
            </Col>
          </Row>
          <div className="flex w-full font-32 pt-[72px] pb-[50px]">{t('familyInformation')}</div>
          <Row gutter={24}>
            <Col span={12}>
              <Item
                label={t('sexualOrientation')}
                name="sexualOrientation"
                rules={[{ required: true, message: t('pleaseSelectYourSexualOrientation') }]}
              >
                <Radio.Group>
                  <Row>
                    <Col span={24}>
                      <Radio value={SexualOrientation.HETEROSEXUAL}>
                        {t('sexualOrientation.heterosexual')}
                      </Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={SexualOrientation.LGBTQIA}>
                        {t('sexualOrientation.lgbtqia')}
                      </Radio>
                    </Col>
                    <Col span={24}>
                      <Space>
                        <Radio value={SexualOrientation.OTHER}>
                          {t('sexualOrientation.other')}
                        </Radio>
                        <Input variant="underlined" autoComplete="off" />
                      </Space>
                    </Col>
                  </Row>
                </Radio.Group>
              </Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
            {/* Country */}
            <Item
              label={t('country')}
              name="country"
              rules={[{ required: true, message: t('countryRequired') }]}
            >
              <Select
                options={countryOptions}
                showSearch
                optionFilterProp="label"
                onChange={handleCountryChange}
              />
            </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('state')}
                name="state"
                rules={[{ required: true, message: t('stateRequired') }]}
              >
                <Select
                  options={stateOptions.map(s => ({ value: s.isoCode, label: s.name }))}
                  showSearch
                  optionFilterProp="label"
                  disabled={!selectedCountry}
                />
              </Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
              <Item label={t('city')} name="city" rules={[{ required: true }]}>
                <Input autoComplete="off" />
              </Item>
            </Col>
          </Row>

          <div className="flex w-full font-32 pt-[72px] pb-[50px]">{t('projectIntentions')}</div>
          <Row gutter={24}>
            <Col span={12}>
              <Item
                label={t('whichServicesMightYouNeed')}
                name="services"
                rules={[{ required: true, message: t('pleaseSelectTheServices') }]}
              >
                <Checkbox.Group>
                  <Row>
                    <Col span={24}>
                      <Checkbox value={ProgramInterest.SURROGACY_EGG_DONOR}>
                        {t('surrogacyAndEggDonationServices')}
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={ProgramInterest.SURROGACY_ONLY}>
                        {t('surrogacyOnly')}
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={ProgramInterest.EGG_DONOR_ONLY}>
                        {t('eggDonationOnlyNoSurrogacyProvidedByPartnerAgencyEverieEggDonation')}
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={ProgramInterest.THIRD_PARTY_SURROGATE}>
                        {t('eggDonationOnlyInCooperationWithThirdPartySurrogacyAgencies')}
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={ProgramInterest.BRING_YOUR_OWN_SURROGATE}>
                        {t('ownSurrogate')}
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={ProgramInterest.BRING_YOUR_OWN_SURROGATE_EGG}>
                        {t('ownSurrogateEggDonationServices')}
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={ProgramInterest.NOT_SURE}>
                        {t('notSureYetNeedAdvice')}
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('whenDoYouHopeToStartYourFamilyBuildingJourney')}
                name="timeline"
                rules={[{ required: true, message: t('pleaseSelectAtime') }]}
              >
                <Radio.Group>
                  <Row>
                    <Col span={24}>
                      <Radio value={JourneyStartTimingEnum.ASAP}>{t('asSoonAsPossible')}</Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={JourneyStartTimingEnum.NEXT_6_MONTHS}>
                        {t('withinTheNext6Months')}
                      </Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={JourneyStartTimingEnum.NEXT_YEAR}>
                        {t('withinTheNextYear')}
                      </Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={JourneyStartTimingEnum.NOT_SURE}>
                        {t('notSureYetWantToLearnMore')}
                      </Radio>
                    </Col>
                  </Row>
                </Radio.Group>
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('howManyChildrenDoYouHopeToWelcomeThroughThisPlan')}
                name="childrenCount"
                rules={[{ required: true, message: t('pleaseSelectTheNumberOfChildren') }]}
              >
                <Radio.Group>
                  <Row>
                    <Col span={24}>
                      <Radio value={ChildPlanEnum.ONE_CHILD}>{t('oneChild')}</Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={ChildPlanEnum.TWINS}>{t('twins')}</Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={ChildPlanEnum.MORE_THAN_TWO}>{t('moreThanTwo')}</Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={ChildPlanEnum.NOT_SURE}>{t('notSureYet')}</Radio>
                    </Col>
                  </Row>
                </Radio.Group>
              </Item>
            </Col>
          </Row>
          <div className="flex w-full font-32 pt-[72px] pb-[50px]">
            {t('channelInitialCommunication')}
          </div>
          <Row gutter={24}>
            <Col span={12}>
              <Item
                label={t('howDidYouHearAboutYunda')}
                name="channel"
                rules={[{ required: true, message: t('pleaseSelectAChannel') }]}
              >
                <Select>
                  <Select.Option value="Search Engine">Search Engine</Select.Option>
                  <Select.Option value="Social Media">Social Media</Select.Option>
                  <Select.Option value="Friend Referral">Friend Referral</Select.Option>
                  <Select.Option value="Advertisement">Advertisement</Select.Option>
                  <Select.Option value="Other">Other</Select.Option>
                </Select>
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t(
                  'doYouHaveAnyQuestionsOrTopicsYouWouldLikeToKnowMoreAboutRegardingTheProcess'
                )}
                name="questions"
              >
                <Input autoComplete="off" />
              </Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={24}>
              <Item
                name="agreeToTerms"
                valuePropName="checked"
                rules={[{ required: true, message: t('pleaseAgreeToThePrivacyPolicy') }]}
              >
                <Checkbox>
                  {t(
                    'iAgreeToSubmitMyPersonalInformationAndAcceptToReceiveServiceUpdatesAndInformationFromYundaViaEmailSMSPhoneOrMail'
                  )}
                </Checkbox>
              </Item>
              <div className="text-sm mt-2">
                {t(
                  'yourInformationWillBeKeptStrictlyConfidentialAndWillNotBeSoldOrProvidedToAnyThirdParty'
                )}
              </div>
            </Col>
          </Row>
          <Form.Item>
            <div className="flex pt-[50px]">
              <Button type="primary" htmlType="submit" size="large" className="w-[200px]">
                {t('submit')}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
      <Footer className="mt-[102px] relative z-1" />
    </div>
  )
}

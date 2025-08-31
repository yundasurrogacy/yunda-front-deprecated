'use client'

import './page.scss'
import {
  ContactMethod,
  GovernmentAssistance,
  IncomeRange,
  MaritalStatus,
  PartnerSupportStatus,
} from './constants'
import dayjs from 'dayjs'
import React from 'react'
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
import type { RadioChangeEvent } from 'antd'
import { postSurrogateApplication } from './apis'
import type { Request } from './apis/types'
import IndexHeader from '@/components/common/IndexHeader'
import Footer from '@/components/common/footer'
import { useTranslation } from 'react-i18next'
import { I18N_KEYS } from '@/i18n/keys'
import i18n from '@/i18n'
import countryList from 'react-select-country-list'
import { useMemo, useState } from 'react'
import { Country, State } from 'country-state-city'

const { Item } = Form

export default function BecomeSurrogatesPageContent() {
  const [form] = Form.useForm()
  const { t } = useTranslation('common')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [stateOptions, setStateOptions] = useState<any[]>([])

  // TODO: 前端填写电话时 country code 逻辑优化
  const formatPhoneNumber = (val: string) => {
    if (!val.startsWith('+')) {
      return `+${val}`
    }
    return val
  }

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

  const countryCallingCodes = useMemo(
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
    if (values.dateofbirth?.isAfter(dayjs())) {
      message.error('出生日期不能是未来时间')
      return
    }

    // 字段映射，部分字段需根据实际表单补充
    const req: Request = {
      // avatarFile: '', // 头像上传功能可后续补充
      birthDate: values.dateofbirth?.format?.('YYYY-MM-DD') || '',
      citizenshipStatus: values.citizenship,
      contactSource: values.channel,
      contactSourceOther: '', // 其他渠道补充
      email: values.email,
      financialLegal: {
        criminalDescription: '',
        governmentAssistance: values.governmentAssistance || [],
        hasCPSHistory: values.hasCPSInvolvement === 'yes',
        hasCriminalRecord: values.hasCriminalRecord === 'yes',
        hasLegalProceedings: values.hasLegalObligations === 'yes',
        otherAssistanceDetail: '',
        proceedingDetails: '',
      },
      firstName: values.firstname,
      hasHighSchoolDiploma: values.hasEducation === 'yes',
      healthHistory: {
        isTakingMeds: values.takingMedication === 'yes',
        medicalConditions: values.healthHistory || [],
        medicationsList: '',
      },
      householdIncome: values.annualIncome,
      isFormerSurrogate: values.hasBeenSurrogate === 'yes',
      lastName: values.lastname,
      maritalStatus: values.maritalStatus,
      mobileWithCountryCode: formatPhoneNumber(values.phone),
      occupation: values.occupation,
      partnerSupport: values.partnerSupport,
      pregnancyHistory: {
        birthDetails: values.pregnancyDetails || '',
        hasGivenBirth: values.hasGivenBirth === 'yes',
        hasStillbirth: values.hasStillbirth === 'yes',
        height: Number(values.height) || 0,
        isBreastfeeding: values.isBreastfeeding === 'yes',
        isPregnant: values.isPregnant === 'yes',
        weightPounds: Number(values.weight) || 0,
      },
      smsConsent: !!values.agreeToSMS,
      state: values.state,
      surrogateExperience: values.surrogateExperience || '',
      zipCode: values.zipcode,
    }
    try {
      await postSurrogateApplication(req)
      message.success(t('submitSuccess'))
      form.resetFields()
    } catch (e: any) {
      if (typeof e.data && e.data.message.includes('Duplicate entry')) {
        message.error('该邮箱已提交过申请，请勿重复提交')
      } else {
        message.error(e.data.message || 'Submit failed, please try again')
      }
    }
  }

  return (
    <div className="become-surrogates min-h-screen relative">
      <IndexHeader />
      <Sections color="#D8D9CA" className="h-[439px] p-4 text-white">
        <div className="font-64 w-full flex justify-center items-center text-[#271F18] content-appear">
          {t('surrogateApplicationTitle')}
        </div>
      </Sections>
      <Sections className="content-appear">
        <div className="flex flex-col justify-center items-center pt-[80px] pb-[150px] max-w-[966px] mx-auto">
          <div className="font-32 pb-[40px] text-center">{t('congratulationsMessage')}</div>
          <div className="font-20 pb-[40px] text-center">{t('congratulationsText')}</div>
          <div className="font-16-Regular pb-[80px] text-center">{t('nextStepsText')}</div>
          <div className="font-32 pb-[16px]">{t('thankYouMessage')}</div>
        </div>
      </Sections>
      <div className="m-auto w-[1280px] px-[30px] pt-[66px] pb-[110px] glass-container relative content-appear">
        <div className="flex w-full font-32 pb-[50px]">{t('contactInformation')}</div>
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
                label={t('firstName')}
                name="firstname"
                rules={[{ required: true, message: t('firstNameRequired') }]}
              >
                <Input autoComplete="off" />
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('lastName')}
                name="lastname"
                rules={[{ required: true, message: t('lastNameRequired') }]}
              >
                <Input autoComplete="off" />
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('birthDate')}
                name="dateofbirth"
                rules={[{ required: true, message: t('birthDateRequired') }]}
              >
                <DatePicker className="w-full" suffixIcon={<img src="/images/calendar.svg" />} />
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('emailAddress')}
                name="email"
                rules={[{ required: true, type: 'email', message: t('validEmailRequired') }]}
              >
                <Input autoComplete="off" />
              </Item>
            </Col>
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
                    <Checkbox>{t('agreeToSMS')}</Checkbox>
                  </Item>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <Item
                label={t('city')}
                name="city"
                rules={[{ required: true, message: t('cityRequired') }]}
              >
                <Input autoComplete="off" />
              </Item>
            </Col>
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
            <Col span={12}>
              <Item
                label={t('zipcode')}
                name="zipcode"
                rules={[{ required: true, message: t('zipcodeRequired') }]}
              >
                <Input autoComplete="off" />
              </Item>
            </Col>
            <Col span={12}>
              {/* Citizenship */}
              <Item
                label={t('citizenship')}
                name="citizenship"
                rules={[{ required: true, message: t('citizenshipRequired') }]}
              >
                <Select options={citizenshipOptions} showSearch optionFilterProp="label" />
              </Item>
            </Col>
          </Row>

          <div className="flex w-full font-32 pt-[72px] pb-[50px]">{t('aboutYou')}</div>
          <Row gutter={24}>
            <Col span={12}>
              <Item
                label={t('howDidYouHearAboutUs')}
                name="channel"
                rules={[{ required: true, message: t('channelRequired') }]}
              >
                <Radio.Group>
                  <Row>
                    <Col span={24}>
                      <Radio value={ContactMethod.FRIEND_REFERRAL}>
                        {t('channel.friendReferral')}
                      </Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={ContactMethod.SOCIAL_MEDIA}>{t('channel.socialMedia')}</Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={ContactMethod.GOOGLE_SEARCH}>{t('channel.google')}</Radio>
                    </Col>
                    <Col span={24}>
                      <Space>
                        <Radio value={ContactMethod.OTHER}>{t('channel.other')}</Radio>
                        <Input variant="underlined" autoComplete="off" />
                      </Space>
                    </Col>
                  </Row>
                </Radio.Group>
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('occupation')}
                name="occupation"
                rules={[{ required: true, message: t('occupationRequired') }]}
              >
                <Input autoComplete="off" />
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('beenSurrogate')}
                name="hasBeenSurrogate"
                rules={[{ required: true, message: t('beenSurrogateRequired') }]}
              >
                <Radio.Group>
                  <Radio value="yes">{t('yes')}</Radio>
                  <Radio value="no">{t('no')}</Radio>
                </Radio.Group>
              </Item>
            </Col>
            <Col span={12}>
              <Item label={t('surrogateExperience')} name="surrogateExperience">
                <Input autoComplete="off" />
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('maritalStatus')}
                name="maritalStatus"
                rules={[{ required: true, message: t('maritalStatusRequired') }]}
              >
                <Radio.Group>
                  <Row>
                    <Col span={24}>
                      <Radio value={MaritalStatus.MARRIED}>{t('maritalStatus.married')}</Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={MaritalStatus.ENGAGED}>{t('maritalStatus.engaged')}</Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={MaritalStatus.CO_HABITATING}>
                        {t('maritalStatus.cohabiting')}
                      </Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={MaritalStatus.LIVING_SEPARATELY}>
                        {t('maritalStatus.livingSeparately')}
                      </Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={MaritalStatus.SINGLE}>{t('maritalStatus.single')}</Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={MaritalStatus.DIVORCED_FINALIZED}>
                        {t('maritalStatus.divorced')}
                      </Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={MaritalStatus.DIVORCED_IN_PROGRESS}>
                        {t('maritalStatus.divorcing')}
                      </Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={MaritalStatus.LEGALLY_SEPARATED}>
                        {t('maritalStatus.legallySeparated')}
                      </Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={MaritalStatus.SEPARATED_INFORMALLY}>
                        {t('maritalStatus.separated')}
                      </Radio>
                    </Col>
                  </Row>
                </Radio.Group>
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('partnerSupport')}
                name="partnerSupport"
                rules={[{ required: true, message: t('partnerSupportRequired') }]}
              >
                <Radio.Group>
                  <Radio value={PartnerSupportStatus.YES}>{t('yes')}</Radio>
                  <Radio value={PartnerSupportStatus.NO}>{t('no')}</Radio>
                  <Radio value={PartnerSupportStatus.NOT_APPLICABLE}>{t('na')}</Radio>
                </Radio.Group>
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('hasEducation')}
                name="hasEducation"
                rules={[{ required: true, message: t('hasEducationRequired') }]}
              >
                <Radio.Group>
                  <Radio value="yes">{t('yes')}</Radio>
                  <Radio value="no">{t('no')}</Radio>
                </Radio.Group>
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('annualIncome')}
                name="annualIncome"
                rules={[{ required: true, message: t('annualIncomeRequired') }]}
              >
                <Radio.Group>
                  <Row>
                    <Col span={24}>
                      <Radio value={IncomeRange.UNDER_30K}>{t('annualIncome.under30k')}</Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={IncomeRange.BETWEEN_30K_50K}>{t('annualIncome.k30to50')}</Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={IncomeRange.BETWEEN_50K_75K}>{t('annualIncome.k50to75')}</Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={IncomeRange.BETWEEN_75K_100K}>
                        {t('annualIncome.k75to100')}
                      </Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={IncomeRange.OVER_100K}>{t('annualIncome.over100k')}</Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={IncomeRange.DECLINE_TO_STATE}>
                        {t('annualIncome.preferNotToSay')}
                      </Radio>
                    </Col>
                  </Row>
                </Radio.Group>
              </Item>
            </Col>
          </Row>

          <div className="flex w-full font-32 pt-[72px] pb-[50px]">
            {t('fertilityAndHealthExperience')}
          </div>
          <Row gutter={24}>
            <Col span={12}>
              <Item
                label={t('hasGivenBirth')}
                name="hasGivenBirth"
                rules={[{ required: true, message: t('hasGivenBirthRequired') }]}
              >
                <Radio.Group>
                  <Radio value="yes">{t('yes')}</Radio>
                  <Radio value="no">{t('no')}</Radio>
                </Radio.Group>
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('isPregnant')}
                name="isPregnant"
                rules={[{ required: true, message: t('isPregnantRequired') }]}
              >
                <Radio.Group>
                  <Radio value="yes">{t('yes')}</Radio>
                  <Radio value="no">{t('no')}</Radio>
                </Radio.Group>
              </Item>
            </Col>
            <Col span={12}>
              <Item label={t('pregnancyDetails')} name="pregnancyDetails">
                <Input autoComplete="off" />
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('isBreastfeeding')}
                name="isBreastfeeding"
                rules={[{ required: true, message: t('isBreastfeedingRequired') }]}
              >
                <Radio.Group>
                  <Radio value="yes">{t('yes')}</Radio>
                  <Radio value="no">{t('no')}</Radio>
                </Radio.Group>
              </Item>
            </Col>
            <Col span={24}>
              <Item
                label={t('hasStillbirth')}
                name="hasStillbirth"
                rules={[{ required: true, message: t('hasStillbirthRequired') }]}
              >
                <Radio.Group>
                  <Radio value="yes">{t('yes')}</Radio>
                  <Radio value="no">{t('no')}</Radio>
                </Radio.Group>
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('height')}
                name="height"
                rules={[{ required: true, message: t('heightRequired') }]}
              >
                <Input autoComplete="off" />
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('weight')}
                name="weight"
                rules={[{ required: true, message: t('weightRequired') }]}
              >
                <Input autoComplete="off" />
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('healthHistory')}
                name="healthHistory"
                rules={[{ required: true, message: t('healthHistoryRequired') }]}
              >
                <Checkbox.Group>
                  <Row>
                    <Col span={24}>
                      <Checkbox value="diabetes">{t('diabetes')}</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="hypertension">{t('hypertension')}</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="bipolar">{t('bipolar')}</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="miscarriage">{t('miscarriage')}</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="epilepsy">{t('epilepsy')}</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="none">{t('none')}</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('takingMedication')}
                name="takingMedication"
                rules={[{ required: true, message: t('takingMedicationRequired') }]}
              >
                <Radio.Group>
                  <Radio value="yes">{t('yes')}</Radio>
                  <Radio value="no">{t('no')}</Radio>
                </Radio.Group>
              </Item>
            </Col>
          </Row>
          <div className="flex w-full font-32 pt-[72px] pb-[50px]">{t('governmentAssistance')}</div>
          <Row gutter={24}>
            <Col span={12}>
              <Item
                label={t('governmentAssistance')}
                name="governmentAssistance"
                rules={[{ required: true, message: t('governmentAssistanceRequired') }]}
              >
                <Checkbox.Group>
                  <Row>
                    <Col span={24}>
                      <Checkbox value={GovernmentAssistance.FOOD_STAMPS}>
                        {t('governmentAssistance.foodStamps')}
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={GovernmentAssistance.MEDICAID}>
                        {t('governmentAssistance.medicaid')}
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={GovernmentAssistance.CASH_ASSISTANCE}>
                        {t('governmentAssistance.cashAssistance')}
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={GovernmentAssistance.FINANCIAL_AID}>
                        {t('governmentAssistance.financialAid')}
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={GovernmentAssistance.WIC}>
                        {t('governmentAssistance.wic')}
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={GovernmentAssistance.SSI}>
                        {t('governmentAssistance.ssi')}
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={GovernmentAssistance.PUBLIC_HOUSING}>
                        {t('governmentAssistance.publicHousing')}
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={GovernmentAssistance.SUBSIDIZED_CHILDCARE}>
                        {t('governmentAssistance.childcare')}
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={GovernmentAssistance.STUDENT_LOANS}>
                        {t('governmentAssistance.studentLoans')}
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Space>
                        <Checkbox value={GovernmentAssistance.OTHER_ASSISTANCE}>
                          {t('governmentAssistance.other')}
                        </Checkbox>
                        <Input variant="underlined" autoComplete="off" />
                      </Space>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={''}>{t('none')}</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label={t('hasCriminalRecord')}
                name="hasCriminalRecord"
                rules={[{ required: true, message: t('hasCriminalRecordRequired') }]}
              >
                <Radio.Group>
                  <Radio value="yes">{t('yes')}</Radio>
                  <Radio value="no">{t('no')}</Radio>
                </Radio.Group>
              </Item>
            </Col>
            <Col span={24}>
              <Item
                label={t('hasLegalObligations')}
                name="hasLegalObligations"
                rules={[{ required: true, message: t('hasLegalObligationsRequired') }]}
              >
                <Radio.Group>
                  <Radio value="yes">{t('yes')}</Radio>
                  <Radio value="no">{t('no')}</Radio>
                </Radio.Group>
              </Item>
            </Col>
            <Col span={24}>
              <Item
                label={t('hasCPSInvolvement')}
                name="hasCPSInvolvement"
                rules={[{ required: true, message: t('hasCPSInvolvementRequired') }]}
              >
                <Radio.Group>
                  <Radio value="yes">{t('yes')}</Radio>
                  <Radio value="no">{t('no')}</Radio>
                </Radio.Group>
              </Item>
            </Col>
          </Row>

          {/* <div className="flex w-full font-32 pt-[72px] pb-[50px]">{t('finalAgreement')}</div> */}
          <Row gutter={24}>
            <Col span={24}>
              <Item
                label={t('finalAgreement')}
                name="agreeToTerms"
                valuePropName="checked"
                rules={[{ required: true, message: t('agreeToTermsRequired') }]}
              >
                <Checkbox>{t('agreeToTerms')}</Checkbox>
              </Item>
              <div className="font-16-Regular text-[#000] mt-2">{t('privacyPolicy')}</div>
            </Col>
          </Row>
          <Form.Item>
            <div className="flex pt-[50px]">
              <Button type="primary" htmlType="submit" size="large" className="font-20 w-[200px]">
                {t('submit')}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
      <Footer className="mt-[102px] content-appear" />
    </div>
  )
}

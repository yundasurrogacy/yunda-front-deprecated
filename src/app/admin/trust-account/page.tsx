import Title from '@/components/admin/Title'
import { Button } from 'antd'

export default function TrustAccountPage() {
  return (
    <div className="flex flex-col gap-10">
      <Title
        title="Trust Account"
        desc="View your current account balance and financial transactions related to your trust account"
      />

      {/* 账户余额 */}
      <div className="admin-card flex justify-between h-[104px]">
        <div>
          <div className="title-2">Account Balance</div>
          <div className="text-small">Updated today</div>
        </div>
        <div className="title-2">$25,000.00</div>
      </div>

      {/* 支出摘要 */}
      <div className="admin-card relative" style={{ paddingBottom: '56px' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[3px] h-[90%] bg-[#BFC9BF]" />
        <div className="flex items-center justify-between mb-6">
          <div className="title-2">Expense Summary</div>
          <Button>Download</Button>
        </div>
        <div className="grid grid-cols-2 gap-8 relative">
          <div className="flex flex-col gap-[12px] pr-[130px]">
            <div className="flex justify-between text-[20px]">
              <span className="title-3">Service Fee</span>
              <span className="title-3">$12,500.00</span>
            </div>
            <div className="flex justify-between text-[20px]">
              <span className="title-3">Compensation</span>
              <span className="title-3">$12,500.00</span>
            </div>
            <div className="flex justify-between text-[20px]">
              <span className="title-3">Medical Expenses</span>
              <span className="title-3">$12,500.00</span>
            </div>
            <div className="flex justify-between text-[20px]">
              <span className="title-3">Medical Expenses</span>
              <span className="title-3">$12,500.00</span>
            </div>
          </div>
          <div className="flex flex-col gap-[12px] pl-[25px] pr-[130px]">
            <div className="flex justify-between text-[20px]">
              <span className="title-3">Service Fee</span>
              <span className="title-3">$12,500.00</span>
            </div>
            <div className="flex justify-between text-[20px]">
              <span className="title-3">Compensation</span>
              <span className="title-3">$12,500.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* 交易历史和说明 */}
      <div className="flex gap-8">
        <div className="admin-card flex-1" style={{ paddingBottom: '37px' }}>
          <div className="flex justify-between items-center mb-[10px]">
            <div className="title-2">Transaction History</div>
            <Button>Download</Button>
          </div>
          <div className="flex justify-between items-center mb-[10px]">
            <div>
              <span className="title-3 mr-[10px]">Service Fee</span>
              <span className="text-small">March 6, 2025</span>
            </div>
            <span className="title-3 pr-[92px]">$12,500.00</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="title-3 mr-[10px]">Service Fee</span>
              <span className="text-small">March 6, 2025</span>
            </div>
            <span className="title-3 pr-[92px]">$12,500.00</span>
          </div>
        </div>
        <div className="admin-card flex-1 flex items-center justify-center title-small">
          Your trust account uses careful and transparent financial practies
        </div>
      </div>
    </div>
  )
}

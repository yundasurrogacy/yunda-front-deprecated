import Title from '@/components/admin/Title'

export default function SupportPage() {
  return (
    <div className="flex flex-col gap-[10px]">
      <Title
        title="Support"
        desc="How can we assist you? Search our help articles, contact us for support, or submit a request!"
      />
      {/* FAQ 区块 */}
      <div className="admin-card mt-10 p-10 flex gap-8">
        {/* 左侧FAQ */}
        <div className="flex-1 pr-8 border-r border-[#D9D9D9]">
          <div className="title-2 mb-[20px]">FAQ</div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="title-small">What is the surrogacy process?</span>
              <button className="bg-[#D3D7CE] text-[#fff] rounded px-4 py-1 text-[16px]">
                See Detail
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-small">How long does the entire process take?</span>
              <button className="bg-[#D3D7CE] text-[#fff] rounded px-4 py-1 text-[16px]">
                See Detail
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-small">Will I need to travel to the US?</span>
              <button className="bg-[#D3D7CE] text-[#fff] rounded px-4 py-1 text-[16px]">
                See Detail
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-small">Can I choose my surrogate?</span>
              <button className="bg-[#D3D7CE] text-[#fff] rounded px-4 py-1 text-[16px]">
                See Detail
              </button>
            </div>
          </div>
        </div>
        {/* 右侧FAQ */}
        <div className="flex-1 pl-8">
          <div className="invisible mb-6">FAQ</div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="title-small">What is the surrogacy process?</span>
              <button className="bg-[#D3D7CE] text-[#fff] rounded px-4 py-1 text-[16px]">
                See Detail
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-small">How long does the entire process take?</span>
              <button className="bg-[#D3D7CE] text-[#fff] rounded px-4 py-1 text-[16px]">
                See Detail
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-small">Will I need to travel to the US?</span>
              <button className="bg-[#D3D7CE] text-[#fff] rounded px-4 py-1 text-[16px]">
                See Detail
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-small">Can I choose my surrogate?</span>
              <button className="bg-[#D3D7CE] text-[#fff] rounded px-4 py-1 text-[16px]">
                See Detail
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 下方 Contact Us 和 Submit Request */}
      <div className="flex gap-8 mt-10">
        {/* Contact Us */}
        <div className="admin-card flex-1 p-10 flex flex-col gap-6">
          <div className="title-2 mb-[20px]">Contact Us</div>
          <div className="flex items-center gap-4">
            <span className="inline-block w-8">
              <img src="/icons/message.svg" alt="msg" />
            </span>
            <span>yundainfo</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-block w-8">
              <img src="/icons/phone.svg" alt="phone" />
            </span>
            <span>(123) 456 - 7890</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-block w-8">
              <img src="/icons/mail.svg" alt="mail" />
            </span>
            <span>123456@gmail.com</span>
          </div>
        </div>
        {/* Submit Request */}
        <div className="admin-card flex-1 p-10 flex flex-col gap-6">
          <div className="flex items-center justify-between mb-4">
            <div className="title-2 mb-[20px]">Submit Request</div>
            <button className="bg-[#D3D7CE] text-[#fff] rounded px-6 py-1 text-[18px]">
              Submit
            </button>
          </div>
          <div className="mb-2">
            <label className="title-small mr-2">Subject</label>
            <span className="title-small">(Required)</span>
            <input className="w-full mt-2 p-2 rounded bg-[#F6F3EA] border-none outline-none text-[18px] font-source-serif" />
          </div>
          <div>
            <label className="title-small">Description</label>
            <textarea className="w-full mt-2 p-2 rounded bg-[#F6F3EA] border-none outline-none min-h-[100px] text-[18px] font-source-serif" />
          </div>
        </div>
      </div>
    </div>
  )
}

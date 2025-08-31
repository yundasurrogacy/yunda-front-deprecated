import { Button } from 'antd'

export const getItems = (activeKey: string[]) => [
  {
    key: '1',
    label: (
      <div className="flex items-center justify-between w-full title">
        Clinic Overview
        <img
          src="/icons/vector.svg"
          alt="clinic"
          className={`w-[10px] ${activeKey.includes('1') ? 'rotate-90' : ''} transition-all duration-300`}
        />
      </div>
    ),
    children: (
      <div className="flex flex-col gap-4 border-t-[2px] border-[#E6E6E6] py-[10px]">
        <div className="flex items-center gap-2 justify-between">
          <div className="title-3">Abc-ed Fertility Center</div>
          <div className="text">Los Angeles, CA</div>
        </div>
        <div className="flex gap-[28px]">
          <div className="flex gap-[10px] flex-1 ivf-clinic-card bg-[#ECEDE1] rounded-[12px] p-6">
            <div>
              <img src="/icons/avatar.svg" alt="avatar" className="w-[75px] h-[75px]" />
            </div>
            <div className="flex flex-col flex-1 gap-2 mr-[70px]">
              <div className="title-2">John Doe</div>
              <div className="title-small">REI</div>
              <div className="text-small mt-5">12345@gmail.com</div>
              <div className="text-small">(123) 456 - 7890</div>
            </div>
            <div className="text-small h-full flex items-center w-[300px]">
              View your IVF clinic team and review updates related to your embryo transfer process
              View your IVF clinic team and review updates related to your embryo transfer process
            </div>
          </div>
          <div className="flex gap-[10px] flex-1 ivf-clinic-card bg-[#ECEDE1] rounded-[12px] p-6">
            <div>
              <img src="/icons/avatar.svg" alt="avatar" className="w-[75px] h-[75px]" />
            </div>
            <div className="flex flex-col flex-1 gap-2 mr-[70px]">
              <div className="title-2">John Doe</div>
              <div className="title-small">REI</div>
              <div className="text-small mt-5">12345@gmail.com</div>
              <div className="text-small">(123) 456 - 7890</div>
            </div>
            <div className="text-small h-full flex items-center w-[300px]">
              View your IVF clinic team and review updates related to your embryo transfer process
              View your IVF clinic team and review updates related to your embryo transfer process
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: '2',
    label: (
      <div className="flex items-center justify-between w-full title">
        Embryo Journey
        <img
          src="/icons/vector.svg"
          alt="clinic"
          className={`w-[10px] ${activeKey.includes('2') ? 'rotate-90' : ''} transition-all duration-300`}
        />
      </div>
    ),
    children: (
      <div className="flex border-t-[2px] border-[#BFC9BF] py-[10px]">
        {/* Timeline */}
        <div className="flex flex-col w-[617px]">
          <div className="title-3 mb-6">Timeline</div>
          <div className="flex flex-col gap-8 relative">
            {/* 竖线 */}
            <div
              className="absolute left-[18px] top-[25px] bottom-0 w-[2px] bg-[#000] z-0"
              style={{ height: 'calc(100% - 80px)' }}
            ></div>
            {/* 节点 */}
            {[
              { label: 'Egg Retrieval', date: 'March 5 , 2025' },
              { label: 'Fertilization', date: 'March 5 , 2025' },
              { label: 'Day 5 Blastocyst', date: 'March 5 , 2025' },
              { label: 'PGT Testing', date: 'March 5 , 2025' },
            ].map((item, idx) => (
              <div key={item.label} className="flex items-start relative z-10">
                <div className="flex flex-col items-center mr-6 relative">
                  <div className="w-5 h-5 rounded-full border-[1px] border-[#271F18] flex-shrink-0 translate-x-2 translate-y-2 bg-[#f7f2e4]"></div>
                </div>
                <div className="flex flex-col">
                  <div className="title-3">{item.label}</div>
                  <div className="title-small mt-2">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Table */}
        <div className="flex-1 pl-12 border-l-[2px] border-[#BFC9BF]">
          <div className="title-3 mb-4">Embryos</div>
          <table className="w-full text-[22px] font-source-serif">
            <thead>
              <tr className="border-t-[2px] border-b-[2px] border-[#BFC9BF]">
                <th className="title-3 font-normal py-2 border-r-[2px] border-[#BFC9BF]">Grade</th>
                <th className="title-3 font-normal py-2 border-r-[2px] border-[#BFC9BF]">ID</th>
                <th className="title-3 font-normal py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { grade: 'A', id: '#123', status: 'Frozen' },
                { grade: 'AA', id: '#123', status: 'Transported' },
                { grade: 'AA', id: '#123', status: 'Frozen' },
                { grade: 'AA', id: '#123', status: 'Frozen' },
              ].map((row, idx) => (
                <tr key={idx} className="border-b-[2px] title-small border-[#BFC9BF]">
                  <td className="py-3 text-center border-r-[2px] border-[#BFC9BF]">{row.grade}</td>
                  <td className="py-3 text-center border-r-[2px] border-[#BFC9BF]">{row.id}</td>
                  <td className="py-3 text-center">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    key: '3',
    label: (
      <div className="flex items-center justify-between w-full title">
        Surrogate Appointments
        <img
          src="/icons/vector.svg"
          alt="clinic"
          className={`w-[10px] ${activeKey.includes('3') ? 'rotate-90' : ''} transition-all duration-300`}
        />
      </div>
    ),
    children: (
      <div>
        <table className="w-full">
          <thead>
            <tr className="border-b-[2px] border-t-[2px] border-[#BFC9BF] title-3">
              <th className="font-normal py-2 text-left">Date</th>
              <th className="font-normal py-2 text-left">Type</th>
              <th className="font-normal py-2 text-left">Doctor</th>
              <th className="font-normal py-2 text-left">Medication</th>
              <th className="font-normal py-2 text-left">Instructions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-[2px] border-[#BFC9BF] title-small py-2.5">
              <td className="py-4">May 10, 2025</td>
              <td>Ultrasound</td>
              <td>Dr. John Doe</td>
              <td>None</td>
              <td>
                <ul className="list-disc pl-4">
                  <li>Continue Medications</li>
                  <li>Ultrasound abcdef</li>
                </ul>
              </td>
              <td>
                <Button>View Details</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    key: '4',
    label: (
      <div className="flex items-center justify-between w-full title">
        Medication Tracker
        <img
          src="/icons/vector.svg"
          alt="clinic"
          className={`w-[10px] ${activeKey.includes('4') ? 'rotate-90' : ''} transition-all duration-300`}
        />
      </div>
    ),
    children: (
      <div>
        <table className="w-full">
          <thead>
            <tr className="border-b-[2px] border-t-[2px] border-[#BFC9BF] title-3">
              <th className="font-normal py-2 text-left">Medication</th>
              <th className="font-normal py-2 text-left">Dosage</th>
              <th className="font-normal py-2 text-left">Frequency</th>
              <th className="font-normal py-2 text-left">Start Date</th>
              <th className="font-normal py-2 text-left">Notes</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-[2px] border-[#BFC9BF] title-small py-2.5">
              <td className="py-4">
                <span>xxx Acid</span>
              </td>
              <td>50mg</td>
              <td>Once Daily</td>
              <td>March 7, 2025</td>
              <td>
                <ul className="list-disc pl-4 h-full flex flex-col justify-center m-0">
                  <li>Continue Medications</li>
                  <li>abds</li>
                </ul>
              </td>
              <td>
                <Button>View Details</Button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex gap-6 mt-8">
          <Button>Add Medications</Button>
          <Button>Custom Reminders</Button>
        </div>
      </div>
    ),
  },
  {
    key: '5',
    label: (
      <div className="flex items-center justify-between w-full title">
        Doctor's Notes
        <img
          src="/icons/vector.svg"
          alt="clinic"
          className={`w-[10px] ${activeKey.includes('5') ? 'rotate-90' : ''} transition-all duration-300`}
        />
      </div>
    ),
    children: (
      <div className="ivf-clinic-doctor-notes">
        <div className="flex flex-col gap-6">
          {[
            {
              date: 'March 16, 2025',
              doctor: 'Dr. John Doe',
              note: 'Advice appointment needed for ultrasound needs  medications result coming back for more',
            },
            {
              date: 'March 20, 2025',
              doctor: 'Dr. John Doe',
              note: 'Advice appointment needed for ultrasound needs  medications result coming back for more',
            },
            {
              date: 'March 23, 2025',
              doctor: 'Dr. John Doe',
              note: 'Advice appointment needed for ultrasound needs  medications result coming back for more',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center bg-[#EAEADC] rounded-[12px] px-8 py-6">
              <div className="flex flex-col flex-1">
                <div className="title-3">{item.date}</div>
                <div className="flex items-center gap-4">
                  <span className="title-small">{item.doctor}:</span>
                  <span className="title-small">{item.note}</span>
                </div>
              </div>
              <Button>View Details</Button>
            </div>
          ))}
        </div>
      </div>
    ),
  },
]

import { Button, Input } from 'antd'
import { messages } from './configs'

export default function MessagesPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="admin-card flex min-h-[766px]">
        {/* 左侧菜单 */}
        <div className="w-[270px] border-r-[2px] border-[#E6E6E6] flex flex-col py-8 px-[9px]">
          <div className="title mb-8">Messages</div>
          <nav className="flex-1 flex flex-col gap-2">
            <ul className="flex flex-col gap-2 title-2 mb-[40px]">
              <li className="flex items-center gap-2 px-3 py-2">
                <img src="/icons/arhive.svg" alt="inbox" />
                Inbox
              </li>
              <li className="flex items-center gap-2 px-3 py-2">
                <img src="/icons/arhive.svg" alt="inbox" />
                Replied
              </li>
              <li className="flex items-center gap-2 px-3 py-2">
                <img src="/icons/arhive.svg" alt="inbox" />
                Notifications
              </li>
              <li className="flex items-center gap-2 px-3 py-2">
                <img src="/icons/arhive.svg" alt="inbox" />
                Starred
              </li>
            </ul>
            <Button>Compose</Button>
          </nav>
        </div>
        {/* 右侧内容 */}
        <div className="flex-1 flex flex-col px-8 py-8">
          {/* 搜索框 */}
          <div className="flex justify-end mb-[30px] border-b-[2px] border-[#E6E6E6] pb-[10px]">
            <Input
              prefix={<img src="/icons/search.svg" alt="search" />}
              className="search-input"
              placeholder="Search"
            />
          </div>
          {/* 消息列表 */}
          <div className="flex flex-col gap-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className="flex items-start relative gap-4 bg-[#F6F3EA] rounded-lg px-4 py-3 hover:bg-[#F0ECE1] transition"
              >
                <img
                  className="block flex-shrink-0 w-6 h-6 mr-5"
                  src="/icons/bell.svg"
                  alt="inbox"
                />
                <div className="flex flex-col gap-2">
                  <div className="title-3">{msg.from}</div>
                  <div className="flex items-center gap-2">
                    <div className="title-small mr-10">{msg.date}</div>
                    <div className="title-small">{msg.preview}</div>
                  </div>
                </div>
                <div className="flex h-full items-center absolute right-[18px] top-0">
                  <Button>View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

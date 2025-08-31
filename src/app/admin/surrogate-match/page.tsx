import Title from '@/components/admin/Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import PhotoWall from './PhotoWall'

export default function SurrogateMatchPage() {
  return (
    <div className="flex flex-col gap-10">
      <Title title="Surrogate Match" desc="Your current surrogate match and their latest updates" />

      {/* 个人信息和更新 */}
      <div className="flex gap-8">
        {/* 个人卡片 */}
        <div
          className="admin-card flex-1 flex flex-col gap-[55px]"
          style={{ paddingBottom: '43px' }}
        >
          <div className="flex items-center gap-[10px]">
            <div className="w-[75px] h-[75px] rounded-full flex items-center justify-center">
              <img src="/icons/avatar.svg" alt="avatar" className="w-full h-full" />
            </div>
            <div className="title-2">John Doe</div>
            <div className="ml-auto text-small">#012345</div>
          </div>
          <div className="flex flex-col gap-[15px] text-[16px] mt-2 pl-[92px]">
            <div className="flex gap-4">
              <span className="title-small inline-block w-[100px] whitespace-nowrap">
                Date of Birth:
              </span>
              <span className="title-small">March 19, 1980</span>
            </div>
            <div className="flex gap-4">
              <span className="title-small inline-block w-[100px] whitespace-nowrap">Age:</span>{' '}
              <span className="title-small">35</span>
            </div>
            <div className="flex gap-4">
              <span className="title-small inline-block w-[100px] whitespace-nowrap">State:</span>
              <span className="title-small">New York</span>
            </div>
          </div>
        </div>
        {/* 最近更新 */}
        <div className="admin-card flex-1 p-8">
          <div className="title-2 mb-[20px]">Recent Updates</div>
          <div className="flex flex-col gap-[15px] title-small">
            <div className="flex justify-between">
              <span>Diary entry uploaded</span>
              <span>April 18, 2025</span>
            </div>
            <div className="flex justify-between">
              <span>Weight: 150lb</span>
              <span>April 18, 2025</span>
            </div>
            <div className="flex justify-between">
              <span>Ultrasound image uploaded</span>
              <span>April 18, 2025</span>
            </div>
            <div className="flex justify-between">
              <span>Feeling happy today</span>
              <span>April 18, 2025</span>
            </div>
            <div className="flex justify-between">
              <span>Feeling happy today</span>
              <span>April 18, 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* 照片墙 */}
      <div className="admin-card p-8">
        <div className="title-2 mb-[20px]">Photo Wall</div>
        <PhotoWall />
      </div>

      {/* 留言板 */}
      <div className="admin-card p-8">
        <div className="title-2 mb-[20px]">Message Board</div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center px-4 py-2">
            <div className="title-small bg-[#F6F3EA] rounded w-[803px] py-[9px] px-[18px]">
              “hi my name is John Doe”
            </div>
            <span className="title-small">April 18, 2025</span>
          </div>
          <div className="flex justify-between items-center px-4 py-2">
            <div className="title-small bg-[#F6F3EA] rounded w-[803px] py-[9px] px-[18px]">
              ““hi my name is John Doe hi my name is John Doe, hi my name is John Doe hi my name is
              John Doe hi my name is John Doe hi my name is John Doe hi my name is John Doe hi my
              name is John Doe hi my name is
            </div>
            <span className="title-small">April 18, 2025</span>
          </div>
        </div>
      </div>
    </div>
  )
}

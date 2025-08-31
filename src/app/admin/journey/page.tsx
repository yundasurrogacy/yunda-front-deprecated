import Title from '@/components/admin/Title'
import StatusTimeline from '@/components/admin/StatusTimeline'
import { stages } from './configs'

export default function JourneyPage() {
  return (
    <div className="flex flex-col gap-10">
      <Title title="Journey" desc="Follow each step of your journey with clarity and confidence" />
      <div className="py-[20px] px-[48px] admin-card mt-10 flex items-center justify-between">
        <div className="text">
          <div className="title-2">Current Status</div>
          Updated today
        </div>
        <div className="text text-[18px]">IN LEGAL AGREEMENT PHASE</div>
      </div>
      <StatusTimeline stages={stages} currentStage={1} />
    </div>
  )
}

import Title from '@/components/admin/Title'
import { Button } from 'antd'
import { fileGroups } from './configs'
import classNames from 'classnames'

export default function FilesPage() {
  return (
    <div className="flex flex-col gap-10">
      <Title title="My Files" />
      <div className="admin-card" style={{ padding: '30px 25px' }}>
        <div className="grid grid-cols-4 gap-8">
          {fileGroups.map((group, i) => (
            <div
              key={group.title}
              className="flex flex-col gap-2 border-r-[2px] last:border-r-0 border-[#BFC9BF]"
            >
              <div className="flex items-center justify-between mb-2 mr-[18px]">
                <div className="title-2">{group.title}</div>
                <Button>+ Upload</Button>
              </div>
              {group.files.map((file, j) => (
                <div
                  key={file.name + j}
                  className={classNames(
                    'flex flex-col gap-1 border-b-[2px] border-[#BFC9BF] pb-[23px] mb-2 mr-[18px]',
                    {
                      'border-b-0': j === group.files.length - 1,
                    }
                  )}
                >
                  <div className="flex items-center justify-between mb-[10px]">
                    <div className="title-small">{file.name}</div>
                    {file.status && file.statusType === 'link' ? (
                      <a href="javascript:void(0)" className="text-small underline">
                        {file.status}
                      </a>
                    ) : file.status ? (
                      <span className="text-[16px] text-[#6B655A]">{file.status}</span>
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-[10px] items-start">
                    <div className="text-small text-[#6B655A]">{file.date}</div>
                    {file.download && <Button>Download</Button>}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

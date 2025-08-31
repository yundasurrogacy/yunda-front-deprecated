import { Card, CardBody, CardHeader, Divider, Button } from '@nextui-org/react'

export const steps = [
  {
    key: 'basic',
    label: '基本信息',
    content: (
      <Card className="mb-8">
        <CardHeader className="px-6 py-4 z-0">
          <h2 className="text-lg font-semibold">基本信息</h2>
        </CardHeader>
        <Divider />
        <CardBody className="px-6 py-4">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">姓名</p>
                <p className="text-gray-900">张三</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">性别</p>
                <p className="text-gray-900">男</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">年龄</p>
                <p className="text-gray-900">28岁</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">出生日期</p>
                <p className="text-gray-900">1995-01-01</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">身份证号</p>
                <p className="text-gray-900">310************123</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">婚姻状况</p>
                <p className="text-gray-900">未婚</p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    ),
  },
  {
    key: 'contact',
    label: '联系方式',
    content: (
      <Card className="mb-8">
        <CardHeader className="px-6 py-4 z-0">
          <h2 className="text-lg font-semibold">联系方式</h2>
        </CardHeader>
        <Divider />
        <CardBody className="px-6 py-4">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">手机号码</p>
              <p className="text-gray-900">138****8888</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">电子邮箱</p>
              <p className="text-gray-900">zhangsan@example.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">现居地址</p>
              <p className="text-gray-900">上海市浦东新区张江高科技园区</p>
            </div>
          </div>
        </CardBody>
      </Card>
    ),
  },
  {
    key: 'level',
    label: '等级',
    content: (
      <Card className="mb-8">
        <CardHeader className="px-6 py-4 z-0">
          <h2 className="text-lg font-semibold">等级</h2>
        </CardHeader>
        <Divider />
        <CardBody className="px-6 py-4">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">等级</p>
              <p className="text-gray-900">Level 1</p>
            </div>
          </div>
        </CardBody>
      </Card>
    ),
  },
  {
    key: 'security',
    label: '账户安全',
    // disabled: true,
    content: (
      <Card className="mb-8">
        <CardHeader className="px-6 py-4 z-0">
          <h2 className="text-lg font-semibold">安全设置</h2>
        </CardHeader>
        <Divider />
        <CardBody className="px-6 py-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">登录密码</p>
                <p className="text-gray-900">已设置</p>
              </div>
              <Button size="sm" variant="flat">
                修改
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">手机绑定</p>
                <p className="text-gray-900">已绑定</p>
              </div>
              <Button size="sm" variant="flat">
                更换
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">邮箱绑定</p>
                <p className="text-gray-900">已绑定</p>
              </div>
              <Button size="sm" variant="flat">
                更换
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    ),
  },
]

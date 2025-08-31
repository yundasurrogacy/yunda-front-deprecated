import { NextResponse } from 'next/server'

export async function GET() {
  const shortTexts = [
    'Hello World!',
    'Welcome to our API',
    'This is a short text',
    'Quick response',
    'Simple message',
  ]

  // 随机返回一个短文本
  const randomText = shortTexts[Math.floor(Math.random() * shortTexts.length)]

  return NextResponse.json({
    text: randomText,
    length: randomText.length,
    timestamp: new Date().toISOString(),
  })
}

import { NextResponse } from 'next/server'
import Mock from 'mockjs'

export async function GET() {
  // 生成随机段落数量（3-8段）
  const paragraphCount = Mock.Random.integer(3, 8)

  // 生成随机长文本
  const longText = Mock.mock({
    [`paragraphs|${paragraphCount}`]: [
      {
        'text|1': ['@paragraph(1, 2)'],
      },
    ],
  })
    .paragraphs.map((p: { text: string }) => p.text)
    .join('\n\n')

  // 随机添加一些特殊格式
  const formattedText = longText
    .split('\n\n')
    .map((paragraph: string, index: number) => {
      // 随机添加一些格式
      if (Mock.Random.boolean()) {
        return `**${paragraph}**` // 加粗
      } else if (Mock.Random.boolean()) {
        return `*${paragraph}*` // 斜体
      }
      return paragraph
    })
    .join('\n\n')

  return NextResponse.json({
    text: formattedText,
    length: formattedText.length,
    paragraphs: paragraphCount,
    generatedAt: new Date().toISOString(),
    metadata: {
      hasBold: formattedText.includes('**'),
      hasItalic: formattedText.includes('*'),
      language: 'mixed', // 中英文混合
    },
  })
}

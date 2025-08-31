export const generateSpacing = (max: number = 200) => {
  const spacing: Record<string, string> = {}

  // 生成 0-200 的间距值
  for (let i = 0; i <= max; i++) {
    spacing[i] = `${i * 4}px`
  }

  return spacing
}

// 使用示例：
// const spacing = generateSpacing()
// 输出: { 0: '0px', 1: '1px', 2: '2px', ..., 200: '200px' }

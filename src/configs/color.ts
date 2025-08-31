// 暖色调主色系
export const warmColors = {
  // 红色系
  reds: [
    '#FF6B6B', // 珊瑚红
    '#FF8C8C', // 浅珊瑚红
    '#FF4D4D', // 亮红色
    '#FF3333', // 鲜艳红
    '#FF1A1A', // 深红色
  ],
  // 橙色系
  oranges: [
    '#FFA07A', // 浅鲑鱼色
    '#FFB366', // 浅橙色
    '#FF9933', // 橙色
    '#FF8000', // 深橙色
    '#FF6600', // 红橙色
  ],
  // 黄色系
  yellows: [
    '#FFD700', // 金色
    '#FFE066', // 浅黄色
    '#FFCC00', // 黄色
    '#FFB300', // 深黄色
    '#FFA000', // 琥珀色
  ],
  // 粉色系
  pinks: [
    '#FFB6C1', // 浅粉色
    '#FFC0CB', // 粉色
    '#FF69B4', // 热粉色
    '#FF1493', // 深粉色
    '#FF69B4', // 玫瑰粉
  ],
  // 棕色系
  browns: [
    '#D2B48C', // 棕褐色
    '#CD853F', // 秘鲁色
    '#DEB887', // 实木色
    '#D2691E', // 巧克力色
    '#8B4513', // 马鞍棕色
  ],
}

// 暖色调组合方案
export const warmColorSchemes = {
  // 日落主题
  sunset: ['#FF6B6B', '#FFB366', '#FFD700', '#FF8C8C', '#FFA07A'],
  // 沙漠主题
  desert: ['#D2B48C', '#DEB887', '#CD853F', '#FFB366', '#FFA07A'],
  // 玫瑰主题
  rose: ['#FFB6C1', '#FFC0CB', '#FF69B4', '#FF8C8C', '#FF6B6B'],
  // 秋季主题
  autumn: ['#FF9933', '#D2691E', '#8B4513', '#FFB366', '#FFA07A'],
  // 暖春主题
  spring: ['#FFE066', '#FFB6C1', '#FFA07A', '#FFB366', '#FFD700'],
}

// 获取随机颜色
export const getRandomColor = (scheme: keyof typeof warmColorSchemes = 'sunset') => {
  const colors = warmColorSchemes[scheme]
  return colors[Math.floor(Math.random() * colors.length)]
}

// 获取随机色系
export const getRandomColorScheme = () => {
  const schemes = Object.keys(warmColorSchemes) as Array<keyof typeof warmColorSchemes>
  return warmColorSchemes[schemes[Math.floor(Math.random() * schemes.length)]]
}

// 获取指定色系的颜色
export const getColorFromScheme = (scheme: keyof typeof warmColorSchemes, index: number) => {
  const colors = warmColorSchemes[scheme]
  return colors[index % colors.length]
}

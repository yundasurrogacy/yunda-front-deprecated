import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const nextI18NextConfig = require('./next-i18next.config.cjs')

export default {
  i18n: nextI18NextConfig.i18n,
  // ...其他配置
}

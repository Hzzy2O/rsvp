export interface GlobEnvConfig {
  VITE_GLOB_API_URL: string
  VITE_GLOB_APP_SHORT_NAME: string
  VITE_GLOB_APP_TITLE: string
}


export interface GlobConfig {
  // 标题
  title: string
  // 请求url
  apiUrl: string
  // Project abbreviation
  shortName?: string
}
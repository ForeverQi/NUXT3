import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/zhouqi/Documents/important/NUXT/Nuxt3/NUXT3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}
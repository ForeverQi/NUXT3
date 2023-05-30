import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/zhouqi/Documents/important/NUXT/Nuxt3/NUXT3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}
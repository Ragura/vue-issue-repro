/// <reference types="vite/client" />
import Dropdown from './src/components/DropdownDefineModel.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Dropdown: typeof Dropdown,
  }
}
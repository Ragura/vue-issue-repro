<script setup lang="ts" generic="T extends OptionItem">
export interface OptionItem {
  id: number
}
interface Props {
  options?: T[]
  title?: string
}
const {
  title = '',
  options = [],
} = defineProps<Props>()

const selected = defineModel<T>()
</script>

<template>
  <h2>{{ title }}</h2>
  <select v-model="selected">
    <option 
      v-for="option in options"
      :key="option.id" 
      :value="option"
    >
      {{ option }}
    </option>
  </select>
</template>
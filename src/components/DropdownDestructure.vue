<script setup lang="ts" generic="T extends OptionItem">
export interface OptionItem {
  id: number
}
interface Props {
  options?: T[]
  title?: string
  modelValue: T
}
const {
  title = '',
  options = [],
} = defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

function updateSelected(event: Event) {
  const target = event.target as HTMLSelectElement
  const id = target.value
  const option = options.find(option => option.id === +id)
  emit('update:modelValue', option)
}
</script>

<template>
  <h2>{{ title }}</h2>
  <select @change="updateSelected">
    <option 
      v-for="option in options"
      :key="option.id" 
      :value="option.id" 
      :selected="modelValue.id === option.id">
      {{ option }}
    </option>
  </select>
</template>
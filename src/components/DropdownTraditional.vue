<script setup lang="ts" generic="T extends { id: number }">
const props = withDefaults(defineProps<{
  options?: T[]
  title?: string
  modelValue: T
}>(), {
  title: '',
  options: () => [],
})

const emit = defineEmits(['update:modelValue'])

function updateSelected(event: Event) {
  const target = event.target as HTMLSelectElement
  const id = target.value
  const option = props.options.find(option => option.id === +id)
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
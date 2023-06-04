<script setup lang="ts">
import DropdownDefineModel from './components/DropdownDefineModel.vue'
import { ref, watch } from 'vue'
import DropdownDestructure from './components/DropdownDestructure.vue';
import DropdownTraditional from './components/DropdownTraditional.vue';

const options = [
  {
    id: 1,
    name: 'Option 1'
  },
  {
    id: 2,
    name: 'Option 2'
  }
]
const selectedItem = ref(options[1])
watch(selectedItem, (value) => {
  console.log('selectedItem', value)
})
</script>

<template>
  <div>
    <p>Selected Item: {{  selectedItem }}</p>
    <DropdownDefineModel 
      v-model="selectedItem"
      title="DefineModel" 
      :options="options"
    />
    <DropdownDestructure 
      v-model="selectedItem"
      title="Destructure" 
      :options="options"
    />
    <DropdownTraditional 
      v-model="selectedItem"
      title="Traditional" 
      :options="options"
    />
  </div>
</template>

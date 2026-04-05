<template>
  <div
    class="rounded-full overflow-hidden flex items-center justify-center text-white font-bold"
    :class="[sizeClass, backgroundClass]"
  >
    <img
      v-if="photo && photoLoaded"
      :src="photo"
      :alt="name"
      class="w-full h-full object-cover"
      @error="photoLoaded = false"
    />
    <div v-else class="w-full h-full flex items-center justify-center">
      {{ initials }}
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: null,
  },
  size: {
    type: String,
    default: 'md',
  },
})

const photoLoaded = ref(true)

const sizeClasses = {
  sm: 'w-16 h-16 text-lg',
  md: 'w-24 h-24 text-2xl',
  lg: 'w-32 h-32 text-4xl',
}

const backgroundClasses = {
  0: 'bg-gradient-to-br from-blue-400 to-blue-600',
  1: 'bg-gradient-to-br from-purple-400 to-purple-600',
  2: 'bg-gradient-to-br from-green-400 to-green-600',
  3: 'bg-gradient-to-br from-red-400 to-red-600',
}

const sizeClass = computed(() => sizeClasses[props.size] || sizeClasses.md)

const initials = computed(() => {
  return props.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})

const backgroundClass = computed(() => {
  if (!props.photo || !photoLoaded.value) {
    const colorIndex = props.name.charCodeAt(0) % 4
    return backgroundClasses[colorIndex]
  }
  return ''
})
</script>

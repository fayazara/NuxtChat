<template>
  <ul class="space-y-4">
    <li v-for="m in messages" :key="m.id">
      <AppMessageBubble :content="m.content" :role="m.role" :id="m.id" />
    </li>
  </ul>
</template>

<script setup>
defineProps({
  messages: {
    type: Array,
    required: true,
  },
});
</script>

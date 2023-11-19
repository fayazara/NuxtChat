<template>
  <div
    class="flex items-end gap-2"
    :class="role === 'user' ? 'flex-row-reverse' : 'flex-row'"
  >
    <UAvatar :src="avatarSrc" :alt="role" class="bg-gray-200" />
    <div
      class="md:max-w-[75%] w-full rounded-lg py-2 px-4"
      :class="role === 'user' ? 'bg-slate-100 ml-auto' : 'bg-gray-100 mr-auto'"
    >
      <ContentRenderer :value="parsedContent" class="prose" />
    </div>
  </div>
</template>

<script setup>
import { computedAsync } from "@vueuse/core";
import markdownParser from "@nuxt/content/transformers/markdown";

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  id: {
    type: String,
    required: true,
  },
});

const avatarSrc = computed(() => {
  return `https://api.dicebear.com/7.x/adventurer/svg?seed=${
    props.role === "user" ? "Coco" : "Abby"
  }`;
});

const parsedContent = computedAsync(async () => {
  return await markdownParser.parse(props.id, props.content);
}, null);
</script>

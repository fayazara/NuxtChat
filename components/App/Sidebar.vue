<template>
  <aside
    class="transition-transform fixed inset-0 w-[80%] md:w-80 border-r left-0 top-0 bottom-0 bg-gray-100 dark:bg-gray-900 flex flex-col z-50"
    :class="sideBarOpen ? 'translate-x-0' : '-translate-x-full md:w-0'"
  >
    <div class="h-12 px-4 border-b flex items-center justify-between">
      <div class="font-bold flex items-center gap-2">
        <span class="h-4 w-4 bg-black inline-block rounded-full"></span>
        Nuxt.Chat
      </div>
      <UTooltip text="New Chat">
        <UButton
          icon="i-heroicons-plus-20-solid"
          square
          size="xs"
          color="white"
          @click="sideBarOpen = false"
        />
      </UTooltip>
    </div>
  </aside>
</template>

<script setup>
const sideBarOpen = useState("sideBarOpen");
</script>

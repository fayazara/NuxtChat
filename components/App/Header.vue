<template>
  <header
    class="h-12 bg-white/80 backdrop-blur-lg flex px-3 items-center border-b justify-between shrink-0 gap-5 z-10 transition-all"
  >
    <UButton
      icon="i-heroicons-bars-3-solid"
      square
      variant="soft"
      size="xs"
      color="gray"
      @click="sideBarOpen = !sideBarOpen"
    />
    <UButton
      icon="i-heroicons-cog-6-tooth"
      square
      variant="soft"
      size="xs"
      color="gray"
      @click="settingsOpen = !settingsOpen"
    />
    <UModal v-model="settingsOpen">
      <AppSettings />
    </UModal>
  </header>
</template>

<script setup>
const sideBarOpen = useState("sideBarOpen");
const settingsOpen = useState("settingsOpen");
</script>

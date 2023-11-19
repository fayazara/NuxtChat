<template>
  <div>
    <AppSidebar />
    <main class="flex flex-col h-screen" :class="{ 'md:ml-80': sideBarOpen }">
      <AppHeader />
      <section class="flex-1 overflow-y-auto">
        <div class="max-w-2xl mx-auto w-full p-4">
          <AppMessages :messages="messages" />
        </div>
      </section>
      <div class="max-w-2xl mx-auto w-full">
        <form @submit="handleSubmit" class="p-4 pt-0">
          <UInput
            v-model="input"
            placeholder="Type a message or press / to select a prompt..."
            size="xl"
            autocomplete="off"
            :ui="{ icon: { trailing: { pointer: '' } } }"
          >
            <template #trailing>
              <UButton
                color="gray"
                variant="soft"
                icon="i-heroicons-paper-airplane"
              />
            </template>
          </UInput>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useStorage } from "@vueuse/core";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { useChat } from "ai/vue";

const breakpoints = useBreakpoints(breakpointsTailwind);

const sm = breakpoints.smallerOrEqual("md");
const sideBarOpen = useState("sideBarOpen", () => true);
const settingsOpen = useState("settingsOpen", () => false);

const apiKey = ref(undefined);
const prompt = ref(undefined);

const { messages, input, handleSubmit } = useChat({
  headers: { "Content-Type": "application/json" },
  body: {
    prompt: "You are an expert AI programmer",
  },
});

const settings = useStorage(
  "settings",
  () => (
    {
      apiKey: undefined,
      prompt: "You are an expert AI programmer",
    },
    { mergeDefaults: true }
  )
);

watchEffect(() => {
  if (sm.value) {
    sideBarOpen.value = false;
  } else {
    sideBarOpen.value = true;
  }
});
</script>

<template>
  <div>
    <AppSidebar />
    <main class="flex flex-col h-screen" :class="{ 'md:ml-80': sideBarOpen }">
      <AppHeader />
      <section class="flex-1 overflow-y-auto">
        <div class="max-w-4xl mx-auto w-full p-4">
          <AppMessages :messages="messages" />
        </div>
      </section>
      <div class="max-w-4xl mx-auto w-full">
        <form @submit="handleSubmit" class="p-4 pt-0">
          <UInput
            v-model="input"
            placeholder="Type a message"
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
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { useChat } from "ai/vue";

const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual("md");
const sideBarOpen = useState("sideBarOpen", () => false);

const { messages, input, handleSubmit } = useChat({
  headers: { "Content-Type": "application/json" },
  body: {
    prompt: "You are an expert AI programmer",
  },
});

watchEffect(() => {
  if (sm.value) {
    sideBarOpen.value = false;
  } else {
    sideBarOpen.value = true;
  }
});
</script>

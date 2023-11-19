<template>
  <div>
    <div class="p-4 flex items-center justify-between">
      <h2 class="font-medium">Settings</h2>
      <UButton
        icon="i-heroicons-x-mark"
        variant="soft"
        color="gray"
        size="xs"
        @click="settingsOpen = false"
      />
    </div>
    <UForm
      :schema="schema"
      :state="formData"
      @submit="onSubmit"
      class="p-4 space-y-3"
    >
      <UFormGroup label="OpenAI api key" name="apiKey">
        <UInput
          placeholder="Enter your OpenAI api key"
          icon="i-heroicons-key"
          v-model="formData.apiKey"
          type="password"
        />
      </UFormGroup>
      <UFormGroup label="Prompt" name="prompt">
        <UTextarea
          placeholder="Enter a prompt for the AI to work"
          v-model="formData.prompt"
        />
      </UFormGroup>
      <UButton type="submit"> Save </UButton>
    </UForm>
  </div>
</template>

<script setup>
import { useStorage } from "@vueuse/core";
const sideBarOpen = useState("sideBarOpen");
const settingsOpen = useState("settingsOpen");

const settings = useStorage("settings");

import { z } from "zod";
const schema = z.object({
  apiKey: z.string().nonempty("API Key required"),
  prompt: z.string().nonempty("Prompt required"),
});

const formData = ref({
  apiKey: undefined,
  prompt: undefined,
});

async function onSubmit(event) {
  settings.value = JSON.stringify(event.data);
}

onMounted(() => {
  if (settings.value) {
    formData.value = JSON.parse(settings.value);
  }
});
</script>

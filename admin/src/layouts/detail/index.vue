<template>
  <n-layout>
    <n-layout-header
      :inverted="inverted"
      bordered
    >
      <n-space
        justify="end"
        style="padding:16px"
      >
        更换主题
        <n-switch v-model:value="inverted">
          <template #checked>深色</template>
          <template #unchecked>浅色</template>
        </n-switch>
      </n-space>
    </n-layout-header>
    <content :inverted="inverted" />
  </n-layout>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { useOsTheme, darkTheme } from 'naive-ui'

import content from "./content/index.vue";

export default defineComponent({
  name: 'index',
  components: {
    content,
  },
  setup() {
    const osThemeRef = useOsTheme()
    return {
      inverted: ref(false),
      theme: computed(() => (osThemeRef.value === 'dark' ? darkTheme : null)),
      osTheme: osThemeRef
    }
  }
})
</script>
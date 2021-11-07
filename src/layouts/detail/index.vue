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
        <n-switch
          v-model:value="inverted"
          @update:value="handleChange"
        >
          <template #checked>深色</template>
          <template #unchecked>浅色</template>
        </n-switch>
      </n-space>
    </n-layout-header>
    <content :inverted="inverted" />
  </n-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

import content from "./content/index.vue";

export default defineComponent({
  name: 'index',
  components: {
    content,
  },
  props: {
    osThemeRef: {
      type: Object,
      default: () => { },
    },
    theme: null,
  },
  setup(props, context) {
    return {
      inverted: ref(false),
      handleChange(value) {
        context.emit('changeThemeEvent', value)
      }
    }
  }
})
</script>
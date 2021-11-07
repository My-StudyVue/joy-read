<template>
  <n-config-provider :theme="theme">
    <n-space vertical>
      <detail
        :theme="theme"
        :osTheme="osTheme"
        @changeThemeEvent="changeThemeEvent"
      />
    </n-space>
  </n-config-provider>
</template>

<script>
import { defineComponent, computed, ref } from 'vue'
import { useOsTheme, darkTheme } from 'naive-ui'
import detail from "./detail/index.vue";

export default defineComponent({
  name: 'index',
  components: {
    detail,
  },
  data() {
    return {
    }
  },
  setup() {
    const osThemeRef = useOsTheme()
    let isdarkTheme = ref(false)
    return {
      changeThemeEvent(val) {
        isdarkTheme.value = val
      },
      theme: computed(() => {
        return (osThemeRef.value === 'dark' || isdarkTheme.value ? darkTheme : null)
      }),
      osTheme: osThemeRef,
    }
  }
});
</script>
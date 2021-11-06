<template>
  <n-config-provider :theme="theme">
    <n-space vertical>
      <detail />
    </n-space>
  </n-config-provider>
</template>

<script>
import { defineComponent } from "vue";
import detail from "./detail/index.vue";

export default defineComponent({
  name: 'index',
  components: {
    detail,
  },
});
</script>
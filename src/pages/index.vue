<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <n-notification-provider>
        <n-dialog-provider>
          <layouts />
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-loading-bar-provider>
</template>

<script>
import { defineComponent } from "vue";
import layouts from "../layouts/index.vue";

export default defineComponent({
  name: 'index',
  components: {
    layouts,
  },
});
</script>
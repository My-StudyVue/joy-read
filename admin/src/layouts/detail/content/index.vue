<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      show-trigger
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :native-scrollbar="false"
      :inverted="inverted"
      style="max-height: 320px;"
    >
      <n-menu
        :inverted="inverted"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
      />
    </n-layout-sider>
    <n-layout
      content-style="padding: 24px;max-height: 320px;"
      :native-scrollbar="false"
    >
      <n-h2>平山道</n-h2>
      <n-h2>平山道</n-h2>
      <n-h2>平山道</n-h2>
      <n-h2>平山道</n-h2>
      <n-h2>平山道</n-h2>
      <n-h2>平山道</n-h2>
      <n-h2>平山道</n-h2>
      <n-h2>平山道</n-h2>
      <n-h2>平山道</n-h2>
      <n-h2>平山道</n-h2>
      <n-h2>平山道</n-h2>
      <n-h2>平山道</n-h2>
    </n-layout>
  </n-layout>
</template>

<script>
import domain from './domain/domain'
export default {
  name: 'index',
  data() {
    return {
      menuOptions: domain,
    };
  },
  props: {
    inverted: {
      type: Boolean,
      default: false,
    }
  },
}

</script>
<style scoped>
</style>
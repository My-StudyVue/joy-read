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
      :style="pageSty"
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
      <n-card
        :title="$route.name"
        hoverable
        embedded
        header-style="text-align:center"
        :segmented="{content: 'hard',}"
      >
        <router-view></router-view>
      </n-card>
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
      height: window.innerHeight
    };
  },
  props: {
    inverted: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    pageSty() {
      let sty = {};
      sty["height"] = this.height - 56 + 'px'
      return sty;
    },
  },
}
</script>

<style scoped>
</style>
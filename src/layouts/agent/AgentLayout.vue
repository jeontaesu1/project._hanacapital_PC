<script>
import AgentHeader from '@/layouts/agent/AgentHeader.vue';
import ShortFooter from '@/layouts/ShortFooter.vue';

export default {
  components: {
    AgentHeader,
    ShortFooter,
  },
};
</script>

<template>
  <div :class="$style['layout']">
    <div :class="$style['layout__head']">
      <AgentHeader />
    </div>
    <div :class="$style['layout__body']">
      <slot />
    </div>
    <div :class="$style['layout__foot']">
      <ShortFooter />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/agent/AgentLayout.scss';
</style>

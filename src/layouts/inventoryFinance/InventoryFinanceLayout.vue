<script>
import InventoryFinanceHeader from '@/layouts/inventoryFinance/InventoryFinanceHeader.vue';
import ShortFooter from '@/layouts/ShortFooter.vue';

export default {
  components: {
    InventoryFinanceHeader,
    ShortFooter,
  },
};
</script>

<template>
  <div :class="$style['layout']">
    <div :class="$style['layout__head']">
      <InventoryFinanceHeader />
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
@import '@/assets/scss/layouts/inventoryFinance/InventoryFinanceLayout.scss';
</style>

<script>
// Common_P00_l012
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';

import IconLogoMain from '@/assets/images/icon/logo-main.svg?component';

export default {
  components: {
    UiLayer,
    IllustObject,
    IconLogoMain,
  },
  setup() {
    const layer = ref(null);

    return {
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer">
    <section :class="$style['connection-over']">
      <IllustObject
        type="error"
        :classNames="{ wrap: $style['connection-over__illust'] }"
      />

      <h2 :class="$style['connection-over__title']">
        현재 접속량이 많아<br />
        서비스 이용이 어렵습니다
      </h2>

      <p :class="$style['connection-over__text']">
        잠시 후 다시 접속해 주세요.
      </p>

      <IconLogoMain :class="$style['connection-over__logo']" />
    </section>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/guide/Common_P00_l012.scss';
</style>

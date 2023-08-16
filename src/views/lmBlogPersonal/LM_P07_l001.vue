<script>
// LM_P07_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';

import PF_P01_p001_contents from '@/views/personalLoan/PF_P01_p001_contents.vue';
import PF_P02_p001_contents from '@/views/personalLoan/PF_P02_p001_contents.vue';
import PF_P03_p001_contents from '@/views/personalLoan/PF_P03_p001_contents.vue';
import PF_P04_p001_contents from '@/views/personalLoan/PF_P04_p001_contents.vue';
import PF_P05_p001_contents from '@/views/personalLoan/PF_P05_p001_contents.vue';
import PF_P07_p000_contents from '@/views/personalLoan/PF_P07_p000_contents.vue';
import PF_P09_p001_contents from '@/views/personalLoan/PF_P09_p001_contents.vue';
import PF_P10_p001_contents from '@/views/personalLoan/PF_P10_p001_contents.vue';
import PF_P06_p001_contents from '@/views/personalLoan/PF_P06_p001_contents.vue';
import BF_P05_p001_contents from '@/views/business/BF_P05_p001_contents.vue';
import BF_P06_p001_contents from '@/views/business/BF_P06_p001_contents.vue';
import AF_P01_p001_contents from '@/views/auto/AF_P01_p001_contents.vue';
import AF_P02_p001_contents from '@/views/auto/AF_P02_p001_contents.vue';
import AF_P03_p001_contents from '@/views/auto/AF_P03_p001_contents.vue';
import AF_P04_p001_contents from '@/views/auto/AF_P04_p001_contents.vue';
import AF_P05_p001_contents from '@/views/auto/AF_P05_p001_contents.vue';
import AF_P06_p001_contents from '@/views/auto/AF_P06_p001_contents.vue';
import AF_P07_p001_contents from '@/views/auto/AF_P07_p001_contents.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
  },
  props: {
    contentsName: {
      Type: String,
      default: null,
    },
  },
  setup() {
    const contents = {
      PF_P01_p001: {
        title: 'e하나신용대출',
        contents: PF_P01_p001_contents,
      },
      PF_P02_p001: {
        title: '행복아파트론',
        contents: PF_P02_p001_contents,
      },
      PF_P03_p001: {
        title: '아파트론',
        contents: PF_P03_p001_contents,
      },
      PF_P04_p001: {
        title: '원큐자동차담보대출',
        contents: PF_P04_p001_contents,
      },
      PF_P05_p001: {
        title: '우수고객추가대출',
        contents: PF_P05_p001_contents,
      },
      PF_P07_p000: {
        title: '스탁론',
        contents: PF_P07_p000_contents,
      },
      PF_P09_p001: {
        title: '사업자 주택담보대출',
        contents: PF_P09_p001_contents,
      },
      PF_P10_p001: {
        title: '내구재할부',
        contents: PF_P10_p001_contents,
      },
      PF_P06_p001: {
        title: 'e임대주택론(임대보증금 담보대출)',
        contents: PF_P06_p001_contents,
      },
      BF_P05_p001: {
        title: '일반리스',
        contents: BF_P05_p001_contents,
      },
      BF_P06_p001: {
        title: '일반할부',
        contents: BF_P06_p001_contents,
      },
      AF_P01_p001: {
        title: '장기렌터카',
        contents: AF_P01_p001_contents,
      },
      AF_P02_p001: {
        title: '다이렉트 오토리스',
        contents: AF_P02_p001_contents,
      },
      AF_P03_p001: {
        title: '오토할부',
        contents: AF_P03_p001_contents,
      },
      AF_P04_p001: {
        title: '오토론',
        contents: AF_P04_p001_contents,
      },
      AF_P05_p001: {
        title: '원큐다이렉트 오토론',
        contents: AF_P05_p001_contents,
      },
      AF_P06_p001: {
        title: '중고차오토론',
        contents: AF_P06_p001_contents,
      },
      AF_P07_p001: {
        title: '오토승계',
        contents: AF_P07_p001_contents,
      },
    };

    const layer = ref(null);

    return {
      contents,
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <ModalPopup size="wide">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>{{
            contents[contentsName] && contents[contentsName].title
          }}</PopupTitle>
        </ModalPopupHead>
      </template>

      <div :class="$style['contents']">
        <component
          :is="contents[contentsName] && contents[contentsName].contents"
        />
      </div>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lmBlogPersonal/LM_P07_l001.scss';
</style>

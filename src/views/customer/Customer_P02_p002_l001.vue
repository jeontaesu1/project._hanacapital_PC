<script>
// Customer_P02_p002_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import AlertPopup from '@/components/ui/layer/AlertPopup.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import IconLink from '@/assets/images/icon/link.svg?component';

export default {
  components: {
    UiLayer,
    AlertPopup,
    PopupTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IllustObject,
    TextButton,
    IconLink,
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
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <AlertPopup>
      <template v-slot:head>
        <IllustObject type="contract" />
        <PopupTitle>
          홈페이지 또는 앱을 통해<br />
          증명서 발급이 가능합니다
        </PopupTitle>
      </template>

      <div class="row-margin-container-medium">
        <PopupText
          >필요한 증명서를 직접 확인하고<br />
          이메일로 받아보세요
        </PopupText>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular" @click="layerSlotProps.close()"
              >증명서 발급 바로가기</BasicButton
            >
          </ButtonListItem>
        </ButtonList>
        <div class="row-margin-item-group">
          <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
            상담 신청 계속하기
            <template v-slot:rightIcon>
              <IconLink />
            </template>
          </TextButton>
        </div>
      </template>
    </AlertPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/crm/Crm_P01_p001.scss';
</style>

<script>
// AF_P06_p005
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    IllustInfo,
    IllustObject,
    IllustInfoTitle,
    IllustInfoText,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'auto');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    return {
      store,
    };
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '오토금융',
            to: '/',
          },
          {
            text: '중고차오토론',
          },
        ]"
      />
    </template>

    <IllustInfo>
      <IllustObject type="complete" />
      <IllustInfoTitle>대출신청이 접수 되었습니다</IllustInfoTitle>

      <!-- Case : 시스템심사 & Fraud인 경우 -->
      <IllustInfoTitle>전화상담신청이 완료되었습니다</IllustInfoTitle>
      <!-- // Case : 시스템심사 & Fraud인 경우 -->

      <IllustInfoText>
        고객님 감사합니다.<br />
        신청하신 사항에 대해서는 빠른 시일 내에 답변 드리겠습니다.<br />
        (상담가능시간 : 평일 09~18시)
      </IllustInfoText>
    </IllustInfo>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<script>
// My_p04_p003
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IllustObject,
    IllustInfo,
    IllustInfoTitle,
    IllustInfoText,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'onlineBranch');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });
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
            text: '온라인 지점',
            to: '/',
          },
          {
            text: '계약정보',
          },
          {
            text: '근저당설정 조회/해지신청',
            to: '/',
          },
        ]"
      />
    </template>

    <IllustInfo>
      <!-- Case : 해지 신청 완료 시 -->
      <IllustObject type="complete" />
      <IllustInfoTitle>근저당설정 해지 신청이 완료되었습니다</IllustInfoTitle>
      <!-- // Case : 해지 신청 완료 시 -->

      <!-- Case : 해지 신청 실패 시 -->
      <IllustObject type="fail" />
      <IllustInfoTitle>근저당설정 해지 신청이 불가합니다</IllustInfoTitle>
      <!-- // Case : 해지 신청 실패 시 -->

      <IllustInfoText>
        문의사항이 있으시면 고객센터(1800-1110)로 연락 바랍니다.<br />
        (상담가능시간: 평일 09시 ~ 18시)
      </IllustInfoText>
    </IllustInfo>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

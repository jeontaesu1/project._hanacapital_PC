<script>
// PF_P07_p010
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

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
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      // optional : html 태그에 클래스 추가
      store.ui.common.setRootClassName('page-optional-class');

      // optional : 헤더 내비게이션 Active 세팅
      store.ui.header.setActive(() => 'personalLoan');
    });

    onUnmounted(() => {
      // optional : html 태그에 클래스 제거
      store.ui.common.setRootClassName();

      // optional : 헤더 내비게이션 Active 리셋
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
            text: '개인금융',
            to: '/',
          },
          {
            text: '스탁론',
          },
        ]"
      />
    </template>

    <IllustInfo>
      <IllustObject type="complete" />
      <IllustInfoTitle>스탁론 대출신청이 완료되었습니다</IllustInfoTitle>
    </IllustInfo>

    <BasicBox className="row-margin-block-small row-margin-bottom-none">
      <KeyValue :wrap="true">
        <KeyValueItem>
          <KeyValueTitle>신청금액</KeyValueTitle>
          <KeyValueText>2,000,000 원</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>입금일</KeyValueTitle>
          <KeyValueText>매월 05일</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>금융사</KeyValueTitle>
          <KeyValueText>하나증권</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>실입금액</KeyValueTitle>
          <KeyValueText>1,960,000 원</KeyValueText>
        </KeyValueItem>
      </KeyValue>
    </BasicBox>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

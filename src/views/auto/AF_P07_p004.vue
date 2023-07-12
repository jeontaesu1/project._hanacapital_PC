<script>
// AF_P07_p004
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    IllustInfo,
    IllustObject,
    IllustInfoTitle,
    IllustInfoText,
    BoxCheck,
    BoxCheckObject,
    BoxCheckLabel,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BoxCheckList,
    BoxCheckListItem,
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
            text: '오토승계',
            to: '/',
          },
        ]"
      />
    </template>

    <IllustInfo>
      <IllustObject type="complete" />
      <IllustInfoTitle>승계 신청이 완료되었습니다</IllustInfoTitle>
      <IllustInfoText>
        승계 신청 URL을 발송하고 싶으시면, 아래 승계 동의 된 차량을 선택한 후<br />
        "승계 신청URL 전송" 버튼을 선택해주세요.
      </IllustInfoText>
    </IllustInfo>

    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">승계 동의 차량</h3>

      <BoxCheckList align="full">
        <BoxCheckListItem>
          <BoxCheck :contents="true" type="checkbox" id="AF_P07_p004_list001">
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>오토리스 111가 1111</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>

        <BoxCheckListItem>
          <BoxCheck :contents="true" type="checkbox" id="AF_P07_p004_list002">
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>오토리스 222나2222</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>

        <BoxCheckListItem>
          <BoxCheck :contents="true" type="checkbox" id="AF_P07_p004_list003">
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>오토리스 333다3333</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>

        <BoxCheckListItem>
          <BoxCheck :contents="true" type="checkbox" id="AF_P07_p004_list004">
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>오토리스 11라4444</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
    </section>

    <ButtonList>
      <ButtonListItem>
        <BasicButton theme="tertiary">승계 신청 URL 전송</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

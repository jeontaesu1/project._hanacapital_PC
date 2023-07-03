<script>
// Customer_P14_p003
// Customer_P14_p005
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageHeadRow,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    BasicButton,
    ButtonList,
    ButtonListItem,
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
      store.ui.header.setActive(() => 'customer');
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
            text: '고객센터',
            to: '/customer/Customer_P00_p001',
          },
          {
            text: '정보이용·제공 조회',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle>
          정보 이용·제공 현황을 조회시<br />
          본인 인증이 필요합니다
        </PageTitle>
      </PageHeadRow>
    </PageHead>

    <BoxCheckList>
      <BoxCheckListItem>
        <BoxCheck name="Customer_P14_p003_type" id="Customer_P14_p003_type_001">
          <BoxCheckLabel>마케팅 목적 동의 현황 조회</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
      <BoxCheckListItem>
        <BoxCheck
          name="Customer_P14_p003_type"
          id="Customer_P14_p003_type_002"
          :defaultChecked="true"
        >
          <BoxCheckLabel>신용정보 이용제공사실 조회</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
    </BoxCheckList>

    <div class="row-margin-block-small row-margin-bottom-none">
      // [공통 > 본인인증] 내용 노출
    </div>

    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">약관동의</h3>

      <div :class="$style['agree-list']">
        <ul :class="$style['agree-list__depth']">
          <li :class="$style['agree-list__depth-item']">
            <div :class="$style['agree-list__depth-head']">
              <CheckBox
                id="Customer_P14_p003_agree_001"
                :classNames="{
                  wrap: $style['agree-list__depth-checkbox'],
                }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>
                  서비스 이용약관 전체동의
                </CheckBoxLabelText>
              </CheckBox>
            </div>
            <div :class="$style['agree-list__depth-contents']">
              <ul :class="$style['agree-list__list']">
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="Customer_P14_p003_agree_001_001"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        개인(신용)정보 필수적 수집 · 이용동의
                      </CheckBoxLabelText>
                    </CheckBox>
                    <div :class="$style['agree-list__right']">
                      <button type="button" :class="$style['agree-list__link']">
                        <span :class="$style['agree-list__link-text']">
                          상세보기
                        </span>
                      </button>
                    </div>
                  </div>
                  <ul
                    :class="[
                      $style['agree-list__list'],
                      $style['agree-list__list--secondary'],
                    ]"
                  >
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="Customer_P14_p003_agree_001_001_001"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="quinary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            개인(신용)정보 필수적 수집·이용
                          </CheckBoxLabelText>
                        </CheckBox>
                      </div>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="Customer_P14_p003_agree_001_001_002"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="quinary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            고유식별번호 필수적 수집·이용
                          </CheckBoxLabelText>
                        </CheckBox>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P14_p003.scss';
</style>

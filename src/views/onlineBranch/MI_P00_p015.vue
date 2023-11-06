<script>
// MI_P00_p015
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    StepProgress,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicButton,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
  },

  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      relativeError: false,
      phoneError: false,
    });

    onMounted(() => {
      store.ui.header.setActive(() => 'onlineBranch');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    return {
      state,
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
            text: '온라인지점',
            to: '/',
          },
          {
            text: '계약정보',
          },
          {
            text: '지정운전자 등록',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">지정운전자 등록</PageTitle>
        <template v-slot:right>
          <StepProgress :total="4" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">지정운전자 정보를 입력해 주세요</PageMainText>
    </PageHead>

    <div>
      <BasicBox className="row-margin-block-small">
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-title-2 font-weight-medium">렌터카 159호5678</h3>
            <div :class="[$style['division-info'], 'row-margin-item-small']">
              <ul :class="$style['division-info__list']">
                <li :class="$style['division-info__item']">
                  <div class="text-body-3 color-gray-tertiary">
                    팰리세이드 디젤 2
                  </div>
                </li>
                <li :class="$style['division-info__item']">
                  <div class="text-body-3 color-gray-tertiary">
                    L99999999999999
                  </div>
                </li>
              </ul>
            </div>
          </BasicBoxHeadLeft>
        </BasicBoxHead>

        <KeyValue :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>보험사</KeyValueTitle>
            <KeyValueText>탄톤칙김기매니</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>가입연령</KeyValueTitle>
            <KeyValueText>만 26세 이상</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>임직원특약</KeyValueTitle>
            <KeyValueText>미가입</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">지정운전자 정보</h3>

        <FormList>
          <FormListItem titleText="계약자와의 관계" :forceFocus="true">
            <FormInvalid :error="state.relativeError">
              <BoxCheckList>
                <BoxCheckListItem>
                  <BoxCheck
                    name="MI_P00_p015_relative001"
                    id="MI_P00_p015_relative_001_001"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>친인척</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    name="MI_P00_p015_relative001"
                    id="MI_P00_p015_relative_001_002"
                  >
                    <BoxCheckLabel>기타</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="휴대폰번호" target="#MI_P00_p015_phone">
            <FormInvalid :error="state.phoneError">
              <InputBlock :error="state.phoneError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="휴대폰번호" id="MI_P00_p015_phone" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>지정운전자 등록요청</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_p015.scss';
</style>

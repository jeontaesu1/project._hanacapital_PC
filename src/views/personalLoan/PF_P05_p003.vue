<script>
// PF_P05_p003
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import BasicInput from '@/components/ui/form/BasicInput.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import PageContents from '@/components/ui/layout/PageContents.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import SecurityKeypadButton from '@/components/ui/button/SecurityKeypadButton.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    PageSubText,
    FormList,
    FormListItem,
    FormHelpText,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    SecurityInput,
    SecurityKeypadButton,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicDatepicker,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      typeError: false,
      workplaceNameError001: false,
      workplaceNameError002: false,
      dayError001: false,
      dayError002: false,
      incomeError: false,
      businessNumberError: false,
    });

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
            text: '개인금융',
            to: '/',
          },
          {
            text: '우수고객추가대출',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">우수고객추가대출</PageTitle>
        <template v-slot:right>
          <StepProgress :total="5" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">고객정보를 입력해 주세요</PageMainText>
      <PageSubText align="left">
        실제 정보와 상이할 경우 한도 및 금리가 달라질 수 있습니다.
      </PageSubText>
    </PageHead>

    <FormList :classNames="{ wrap: 'row-margin-contents' }">
      <FormListItem
        titleText="이름"
        :disabled="true"
        target="#PF_P05_p003_name"
      >
        <InputBlock :disabled="true">
          <InputBlockCell :flexible="true">
            <BasicInput
              title="이름"
              defaultValue="김하나"
              :disabled="true"
              id="PF_P05_p003_name"
            />
          </InputBlockCell>
        </InputBlock>
      </FormListItem>

      <FormListItem
        titleText="주민등록번호"
        target="#PF_P05_p003_id"
        :disabled="true"
      >
        <InputBlock :disabled="true">
          <InputBlockCell :flexible="true">
            <BasicInput
              type="number"
              pattern="\d*"
              title="주민등록번호 앞 6자리"
              id="PF_P05_p003_id"
              :disabled="true"
              defaultValue="951222"
            />
          </InputBlockCell>
          <InputBlockCell type="sub">-</InputBlockCell>
          <InputBlockCell :flexible="true">
            <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
            <SecurityInput
              title="주민등록번호 뒤 7자리"
              :dot="[true, true, true, true, true, true, true]"
              :disabled="true"
            />
          </InputBlockCell>
          <InputBlockCell>
            <SecurityKeypadButton :disabled="true" />
          </InputBlockCell>
        </InputBlock>
      </FormListItem>
    </FormList>

    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">소득구분</h3>

      <BoxCheckList>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="PF_P05_p003_checkBox001"
            id="PF_P05_p003_checkBox001_001"
            :defaultChecked="true"
          >
            <BoxCheckLabel>급여소득자</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="PF_P05_p003_checkBox001"
            id="PF_P05_p003_checkBox001_002"
          >
            <BoxCheckLabel>자영업자</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="PF_P05_p003_checkBox001"
            id="PF_P05_p003_checkBox001_003"
          >
            <BoxCheckLabel>기타</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>

      <FormList :classNames="{ wrap: 'row-margin-container-medium' }">
        <!-- Case : '급여소득자' 선택 시  -->
        <FormListItem
          titleText="직장명"
          target="#PF_P05_p003_WorkplaceName001SearchButton"
        >
          <FormInvalid :error="state.workplaceNameError001">
            <InputBlock :error="state.workplaceNameError001">
              <InputBlockCell :flexible="true">
                <BasicInput title="직장명" :disabled="true" />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton
                  size="small"
                  theme="tertiary"
                  id="PF_P05_p003_WorkplaceName001SearchButton"
                >
                  직장 검색
                </BasicButton>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="입사일" target="#PF_P05_p003_day_001_Button">
          <FormInvalid :error="state.dayError001">
            <InputBlock :error="state.dayError001">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="입사일"
                  id="PF_P05_p003_day_001"
                  buttonId="PF_P05_p003_day_001_Button"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="연소득" target="#PF_P05_p003_income">
          <FormInvalid :error="state.incomeError">
            <InputBlock :error="state.incomeError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  align="right"
                  :useDelete="false"
                  type="number"
                  pattern="\d*"
                  title="연소득"
                  id="PF_P05_p003_income"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-1">만원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : '급여소득자' 선택 시  -->

        <!-- Case : '자영업자' 선택 시  -->
        <FormListItem titleText="상호명" target="#PF_P05_p003_workplaceName002">
          <FormInvalid :error="state.workplaceNameError002">
            <InputBlock :error="state.workplaceNameError002">
              <InputBlockCell :flexible="true">
                <BasicInput title="상호명" id="PF_P05_p003_workplaceName002" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="사업자번호"
          target="#PF_P05_p003_businessNumber"
        >
          <FormInvalid :error="state.businessNumberError">
            <InputBlock :error="state.businessNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  title="사업자번호"
                  id="PF_P05_p003_businessNumber"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton size="small" theme="quaternary">
                  확인
                </BasicButton>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>‘-’를 제외하고 입력해주세요.</FormHelpText>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="사업개시일"
          target="#PF_P05_p003_day_002_Button"
        >
          <FormInvalid :error="state.dayError002">
            <InputBlock :error="state.dayError002">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="사업개시일"
                  id="PF_P05_p003_day_002"
                  buttonId="PF_P05_p003_day_002_Button"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : '자영업자' 선택 시  -->
      </FormList>
    </section>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

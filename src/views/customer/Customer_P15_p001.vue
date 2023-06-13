<script>
// Customer_P15_p001
import { reactive } from 'vue';

import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import SecurityKeypadButton from '@/components/ui/button/SecurityKeypadButton.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicTextarea from '@/components/ui/form/BasicTextarea.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    FormHelpText,
    SecurityKeypadButton,
    SecurityInput,
    BasicSelect,
    BasicTextarea,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },

  setup() {
    const state = reactive({
      nameError: false,
      birthNumberError: false,
      phoneError: false,
      mailError: false,
      counselingError: false,
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageTitle>전자민원접수</PageTitle>
    </PageHead>

    <div class="row-margin-block-small row-margin-top-none">
      <div class="text-big-3 font-weight-bold">민원신청·처리절차</div>
      <p
        class="text-title-2 color-gray-secondary font-weight-light row-margin-small"
      >
        하나캐피탈은 신속한 소비자피해 구제와 민원처리를 위한 민원시스템을
        운영하여 소비자보호에 앞장서겠습니다.<br />
        민원이란 회사에 대하여 이의신청, 진정, 건의, 질의 및 기타 특정한 행위를
        요하는 의사표시를 하는 것으로서 금융업무와 관련한<br />
        당사 귀책사유로 인한 피해가 발생했을 경우 소비자피해보상을 신청할 수
        있습니다.
      </p>
    </div>

    <div>
      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">
          민원 접수/처리 프로세스 안내
        </h3>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">약관동의</h3>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">민원 내용 입력</h3>

        <FormList>
          <FormListItem titleText="이름" target="#Customer_P15_p001_name">
            <FormInvalid :error="state.nameError">
              <InputBlock :error="state.nameError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이름" id="Customer_P15_p001_name" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="생년월일" target="#Customer_P15_p001_birth">
            <FormInvalid :error="state.birthNumberError">
              <InputBlock :error="state.birthNumberError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="생년월일"
                    id="Customer_P15_p001_birth"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>숫자만 입력해 주세요. (예:900123)</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="연락처" target="#Customer_P15_p001_phone">
            <FormInvalid :error="state.phoneError">
              <InputBlock :error="state.phoneError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    pattern="\d*"
                    title="연락처 첫번째 3자리"
                    id="Customer_P15_p001_phone1"
                    :useDelete="false"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <BasicInput
                    pattern="\d*"
                    title="연락처 두번째 4자리"
                    id="Customer_P15_p001_phone2"
                    :useDelete="false"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <SecurityInput
                    title="연락처 세번째 4자리"
                    :dot="[true, true, true, true]"
                  />
                </InputBlockCell>
                <InputBlockCell>
                  <SecurityKeypadButton />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="이메일" target="#Customer_P02_p002_EmailId">
            <FormInvalid :error="state.mailError">
              <InputBlock :error="state.mailError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="이메일 아이디"
                    id="Customer_P02_p002_EmailId"
                  />
                </InputBlockCell>
                <InputBlockCell margin="regular">@</InputBlockCell>
                <InputBlockCell margin="regular" :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: 'naver.com',
                      },
                      {
                        value: '2',
                        label: 'hanmail.net',
                      },
                      {
                        value: '3',
                        label: 'gmail.com',
                      },
                      {
                        value: '4',
                        label: 'nate.com',
                      },
                      {
                        value: '5',
                        label: 'paran.com',
                      },
                      {
                        value: '6',
                        label: 'dreamwiz.com',
                      },
                      {
                        value: '7',
                        label: 'yahoo.com',
                      },
                      {
                        value: '8',
                        label: 'freechal.com',
                      },
                      {
                        value: '9',
                        label: '직접입력',
                      },
                    ]"
                    title="이메일 도메인"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- Case : 직접입력 선택 시 노출 -->
              <InputBlock
                :error="state.mailError"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="이메일 도메인 직접입력"
                    id="Customer_P02_p002_EmailDomainSelf"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- //Case : 직접입력 선택 시 노출 -->
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <BasicTextarea
            :error="state.counselingError"
            titleText="상담신청내용"
            title="상담신청내용"
          />
        </FormList>
      </section>
    </div>

    <ButtonList align="full">
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

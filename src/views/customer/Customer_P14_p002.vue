<script>
// Customer_P14_p002
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SecurityKeypadButton from '@/components/ui/button/SecurityKeypadButton.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicInput,
    SecurityKeypadButton,
    SecurityInput,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicSelect,
  },

  setup() {
    const state = reactive({
      phoneError: false,
      mailError: false,
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
      <PageHeadRow>
        <PageTitle align="left">개인정보 열람 청구</PageTitle>
        <template v-slot:right>
          <StepProgress :total="2" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        열람 통지 방법을<br />
        선택해 주세요
      </PageMainText>
    </PageHead>

    <div>
      <BoxCheckList>
        <BoxCheckListItem>
          <BoxCheck
            name="Customer_P14_p002_type"
            id="Customer_P14_p002_type_001"
            :defaultChecked="true"
          >
            <BoxCheckLabel>SMS</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            name="Customer_P14_p002_type"
            id="Customer_P14_p002_type_002"
          >
            <BoxCheckLabel>이메일</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>

      <FormList
        :classNames="{
          wrap: 'row-margin-contents',
        }"
      >
        <!-- Case : SMS 선택 시 노출 -->
        <FormListItem
          titleText="휴대폰번호"
          target="#Customer_P14_p002_phone_telecom"
        >
          <FormInvalid :error="state.phoneError">
            <InputBlock :error="state.phoneError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="휴대폰번호 첫번째 3자리"
                  id="Customer_P14_p002_phone_telecom"
                  defaultValue="010"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="휴대폰번호 첫번째 4자리"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                <SecurityInput
                  title="휴대폰번호 세번째 4자리"
                  :dot="[true, true, false, false]"
                />
              </InputBlockCell>
              <InputBlockCell>
                <SecurityKeypadButton />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : SMS 선택 시 노출 -->

        <!-- Case : 이메일 선택 시 노출 -->
        <FormListItem titleText="이메일" target="#Customer_P14_p002_EmailId">
          <FormInvalid :error="state.mailError">
            <InputBlock :error="state.mailError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이메일 아이디"
                  id="Customer_P14_p002_EmailId"
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
                  id="Customer_P14_p002_EmailDomainSelf"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- //Case : 직접입력 선택 시 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : 이메일 선택 시 노출 -->
      </FormList>

      <section class="row-margin-block-small row-margin-bottom-none">
        <h3 class="text-title-1 row-margin-contents">유의사항</h3>

        <ul
          :class="[
            $style['basic-list'],
            $style['basic-list--medium'],
            $style['basic-list--regular-margin'],
          ]"
        >
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-body-1',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              개인정보항목·내용에 대한 열람 가능여부는 신청일로부터 10일 이내에
              통지됩니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-body-1',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              개인정보항목·내용에 대한 열람은 본인만 가능하며 당사가 지정한
              열람장소에 직접방문 하셔야 합니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-body-1',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              방문 시에는 본인확인을 위한 신분증(주민등록증, 운전면허증, 여권)
              및 열람 통지서를 반드시 지참하셔야 합니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-body-1',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              인정보항목·내용에 대한 열람은 당사가 보유한 아래의 항목에 대해서만
              가능하며, 구체적인 개인정보의 내용에 대해서는 열람이 불가합니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-body-1',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              대출취급이 부적정한 경우(연체금 보유, 개인신용평점 낮음) 대출이
              제한될 수 있습니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-body-1',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              금융소비자는 해당상품에 대하여 설명을 받을 권리가 있으며, 그
              설명을 듣고 내용을 충분히 이해한 후 거래하시기 바랍니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-body-1',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              금리인하요구권 및 대출계약 철회권에 대한 자세한 사항은 당사
              홈페이지에서 확인하시기 바랍니다.
            </div>
          </li>
        </ul>

        <section class="row-margin-container-medium">
          <h4 class="text-body-1 row-margin-item-group">-아래-</h4>

          <p class="text-body-1 font-weight-regular row-margin-item-medium">
            성명, 주민등록번호, 주민등록증 발급일, 연락처(휴대폰, 자택, 직장),
            주소(자택,직장), 이메일, 직장명, 부서, 직위, 성별, 국적,
            운전면허번호, 여권번호, 외국인등록번호 등
          </p>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                정보주체의 금융거래 정보, 신용도 판단 정보, 신용거래 능력 정보
                및 공공기관 정보 등은 열람 대상에서 제외 됩니다.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                개인정보 열람 청구 시 수수료가 부과됩니다.
              </div>
            </li>
          </ul>
        </section>
      </section>
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>신청하기</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P14_p002.scss';
</style>

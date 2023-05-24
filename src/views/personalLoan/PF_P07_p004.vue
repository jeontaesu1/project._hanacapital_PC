<script>
// PF_P07_p004
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import SecurityKeypadButton from '@/components/ui/button/SecurityKeypadButton.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    PageSubText,
    TextButton,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    SecurityInput,
    SecurityKeypadButton,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
  },

  setup() {
    const state = reactive({
      name001Error: false,
      idNumber001Error: false,
      phoneError001: false,
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
        <PageTitle align="left">스탁론</PageTitle>
        <template v-slot:right>
          <StepProgress :total="5" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        실명 및 본인 인증을 진행해 주세요
      </PageMainText>
      <PageSubText align="left">
        2006년 9월 24일부터 계정 된 주민등록법에 의해 타인의 주민등록번호를
        도용하여 온라인 회원 가입하는 등 다른 사람 주민등록번호를 부정사용 하는
        자는 3년 이하의 징역 또는 1천만원 이하의 벌금이 부과될 수 있습니다.
      </PageSubText>

      <div class="flex-box row-margin-contents-small">
        <div class="flex-box__cell flex-1">
          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-1',
                'color-red',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                관련 법률 : 주민등록법 제 21조(벌칙)제 2항 2호 (시행일:2006년
                9월 24일)
              </div>
            </li>
          </ul>
        </div>
        <TextButton :underline="true" class="text-body-4 color-gray-tertiary">
          상세내용보기
        </TextButton>
      </div>
    </PageHead>

    <FormList
      :classNames="{
        wrap: 'row-margin-block-small row-margin-top-none',
      }"
    >
      <FormListItem titleText="이름" target="#PF_P07_p004_name001">
        <FormInvalid :error="state.name001Error">
          <InputBlock :error="state.name001Error">
            <InputBlockCell :flexible="true">
              <BasicInput title="이름" id="PF_P07_p004_name001" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="주민등록번호" target="#PF_P07_p004_id001">
        <FormInvalid :error="state.idNumber001Error">
          <InputBlock :error="state.idNumber001Error">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="number"
                pattern="\d*"
                title="주민등록번호 앞 6자리"
                id="PF_P07_p004_id001"
              />
            </InputBlockCell>
            <InputBlockCell type="sub">-</InputBlockCell>
            <InputBlockCell :flexible="true">
              <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
              <SecurityInput
                title="주민등록번호 뒤 7자리"
                :dot="[true, true, true, false, false, false, false]"
              />
            </InputBlockCell>
            <InputBlockCell>
              <SecurityKeypadButton />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="연락처" target="#PF_P07_p004_phone001">
        <FormInvalid :error="state.phoneError001">
          <InputBlock :error="state.phoneError001">
            <InputBlockCell :flexible="true">
              <BasicInput title="연락처" id="PF_P07_p004_phone001" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <div>// [공통 > 본인인증] 내용 노출</div>

    <div class="row-margin-block-small">
      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">약관동의</h3>

        <div :class="$style['agree-list']">
          <ul :class="$style['agree-list__container']">
            <li :class="$style['agree-list__all']">
              <div :class="$style['agree-list__all-head']">
                <CheckBox
                  id="PF_P07_p004_agreeAll"
                  :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>전체동의</CheckBoxLabelText>
                </CheckBox>
              </div>

              <div :class="$style['agree-list__all-contents']">
                <ul :class="$style['agree-list__depth']">
                  <li :class="$style['agree-list__depth-item']">
                    <div :class="$style['agree-list__depth-head']">
                      <CheckBox
                        id="PF_P07_p004_agree001"
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
                              id="PF_P07_p004_agree_001_001"
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
                              <button
                                type="button"
                                :class="$style['agree-list__link']"
                              >
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
                                  id="PF_P07_p004_agree_001_001_001"
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
                                  id="PF_P07_p004_agree_001_001_002"
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
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="PF_P07_p004_agree_001_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText
                                >개인(신용)정보 필수적 조회
                                동의</CheckBoxLabelText
                              >
                            </CheckBox>
                            <div :class="$style['agree-list__right']">
                              <button
                                type="button"
                                :class="$style['agree-list__link']"
                              >
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
                                  id="PF_P07_p004_agree_001_002_001"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >개인(신용)정보 필수적
                                    조회</CheckBoxLabelText
                                  >
                                </CheckBox>
                              </div>
                            </li>
                            <li :class="$style['agree-list__item']">
                              <div :class="$style['agree-list__head']">
                                <CheckBox
                                  id="PF_P07_p004_agree_001_002_002"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >고유식별번호 필수적 조회</CheckBoxLabelText
                                  >
                                </CheckBox>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="PF_P07_p004_agree_001_003"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText
                                >개인(신용)정보 필수적 제공
                                동의</CheckBoxLabelText
                              >
                            </CheckBox>
                            <div :class="$style['agree-list__right']">
                              <button
                                type="button"
                                :class="$style['agree-list__link']"
                              >
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
                                  id="PF_P07_p004_agree_001_003_001"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >개인(신용)정보 필수적
                                    제공</CheckBoxLabelText
                                  >
                                </CheckBox>
                              </div>
                            </li>
                            <li :class="$style['agree-list__item']">
                              <div :class="$style['agree-list__head']">
                                <CheckBox
                                  id="PF_P07_p004_agree_001_003_002"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >고유식별번호 필수적 제공</CheckBoxLabelText
                                  >
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
            </li>
          </ul>
        </div>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">
          건강보험공단/국민연금공단 정보 이용 동의
        </h3>

        <ul
          :class="[
            $style['basic-list'],
            $style['basic-list--regular'],
            $style['basic-list--regular-margin'],
          ]"
        >
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              실제 사업영위, 담보주택 소유권 이전등기일로부터 3개월 경과부터
              신청 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              iSASService 모듈 설치가 필요합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              귀하는 동의를 거부할 권리가 있으나, 동의하지 않으실 경우
              거래관계의 설정 또는 유지가 불가능할 수 있음을 알려드립니다.
            </div>
          </li>
        </ul>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P07_p004.scss';
</style>

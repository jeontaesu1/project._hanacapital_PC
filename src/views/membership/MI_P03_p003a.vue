<script>
// MI_P03_p003a
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    StepProgress,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicInput,
    FormList,
    FormListItem,
    InputBlock,
    InputBlockCell,
    FormInvalid,
    BasicSelect,
    FormInvalidMessage,
    RoundStatus,
  },

  setup() {
    const state = reactive({
      mailError: false,
      recommenderNumberError: false,
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
        <PageTitle align="left">하나캐피탈 멤버십</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">고객정보를 입력해 주세요</PageMainText>
    </PageHead>

    <FormList>
      <FormListItem titleText="이메일" target="#MI_P03_p003a_EmailId">
        <FormInvalid :error="state.mailError">
          <InputBlock :error="state.mailError">
            <InputBlockCell :flexible="true">
              <BasicInput title="이메일 아이디" id="MI_P03_p003a_EmailId" />
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
              <BasicInput title="이메일 도메인 직접입력" />
            </InputBlockCell>
          </InputBlock>
          <!-- // Case : 직접입력 선택 시 노출 -->
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">
        추천인 입력
        <span :class="$style['sub']">(선택)</span>
      </h3>

      <FormList>
        <FormListItem
          titleText="사번입력"
          target="#MI_P03_p003a_RecommenderNumber"
        >
          <FormInvalid :error="state.recommenderNumberError">
            <InputBlock :error="state.recommenderNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="사번입력"
                  id="MI_P03_p003a_RecommenderNumber"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>
    </section>

    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">약관동의</h3>

      <div :class="$style['agree-list']">
        <ul :class="$style['agree-list__depth']">
          <li :class="$style['agree-list__depth-item']">
            <div :class="$style['agree-list__depth-head']">
              <CheckBox
                id="MI_P03_p003aAgree001"
                :classNames="{
                  wrap: $style['agree-list__depth-checkbox'],
                }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText
                  >하나캐피탈 멤버십 회원가입 동의(선택)</CheckBoxLabelText
                >
              </CheckBox>
            </div>
            <div :class="$style['agree-list__depth-contents']">
              <ul :class="$style['agree-list__list']">
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="MI_P03_p003aAgree001_001"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >하나캐피탈 멤버십 회원 약관</CheckBoxLabelText
                      >
                    </CheckBox>
                    <div :class="$style['agree-list__right']">
                      <button type="button" :class="$style['agree-list__link']">
                        <span :class="$style['agree-list__link-text']">
                          상세보기
                        </span>
                      </button>
                    </div>
                  </div>
                </li>
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="MI_P03_p003aAgree001_002"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >개인(신용)정보 필수적 수집 ·
                        이용동의</CheckBoxLabelText
                      >
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
                          id="MI_P03_p003aAgree001_002_001"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="quinary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >개인(신용)정보 필수적 수집·이용</CheckBoxLabelText
                          >
                        </CheckBox>
                      </div>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="MI_P03_p003aAgree001_002_002"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="quinary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >고유식별번호 필수적 수집·이용</CheckBoxLabelText
                          >
                        </CheckBox>
                      </div>
                    </li>
                  </ul>
                </li>
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="MI_P03_p003aAgree001_003"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >개인(신용)정보 필수적 조회 동의</CheckBoxLabelText
                      >
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
                          id="MI_P03_p003aAgree001_003_001"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="quinary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >개인(신용)정보 필수적 조회</CheckBoxLabelText
                          >
                        </CheckBox>
                      </div>
                    </li>
                  </ul>
                </li>
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="MI_P03_p003aAgree001_004"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >개인(신용)정보 필수적 제공 동의</CheckBoxLabelText
                      >
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
                          id="MI_P03_p003aAgree001_004_001"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="quinary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >개인(신용)정보 필수적 제공
                            (신용정보회사)</CheckBoxLabelText
                          >
                        </CheckBox>
                      </div>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="MI_P03_p003aAgree001_004_002"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="quinary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >개인(신용)정보 필수적 제공
                            (하나손해보험㈜)</CheckBoxLabelText
                          >
                        </CheckBox>
                      </div>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="MI_P03_p003aAgree001_004_003"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="quinary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >고유식별번호 필수적 수집·이용
                            (하나손해보험㈜)</CheckBoxLabelText
                          >
                        </CheckBox>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
          <li :class="$style['agree-list__depth-item']">
            <div :class="$style['agree-list__depth-head']">
              <CheckBox
                id="MI_P03_p003aAgree002"
                :classNames="{
                  wrap: $style['agree-list__depth-checkbox'],
                }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText
                  >개인(신용)정보 선택적 수집, 이용 전체 동의</CheckBoxLabelText
                >
              </CheckBox>
              <div :class="$style['agree-list__right']">
                <RoundStatus theme="quinary" :block="true">보통</RoundStatus>
              </div>
            </div>
            <div :class="$style['agree-list__depth-contents']">
              <ul :class="$style['agree-list__list']">
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="MI_P03_p003aAgree002_001"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >개인(신용)정보 선택적 수집·이용 동의</CheckBoxLabelText
                      >
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
                          id="MI_P03_p003aAgree002_001_001"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="quinary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >금융상품 안내 및 이용권유를 위한
                            수집·이용</CheckBoxLabelText
                          >
                        </CheckBox>
                      </div>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="MI_P03_p003aAgree002_001_002"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="quinary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >전자적 전송 매체를 통한 광고성정보
                            수신</CheckBoxLabelText
                          >
                        </CheckBox>
                      </div>
                      <ul
                        :class="[
                          $style['agree-list__list'],
                          $style['agree-list__list--tertiary'],
                        ]"
                      >
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="MI_P03_p003aAgree002_001_002_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>전체</CheckBoxLabelText>
                            </CheckBox>
                          </div>
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="MI_P03_p003aAgree002_001_002_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>전화</CheckBoxLabelText>
                            </CheckBox>
                          </div>
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="MI_P03_p003aAgree002_001_002_003"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>문자메시지</CheckBoxLabelText>
                            </CheckBox>
                          </div>
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="MI_P03_p003aAgree002_001_002_004"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>우편</CheckBoxLabelText>
                            </CheckBox>
                          </div>
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="MI_P03_p003aAgree002_001_002_005"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>이메일</CheckBoxLabelText>
                            </CheckBox>
                          </div>
                        </li>
                      </ul>
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
        <BasicButton>하나캐피탈 멤버십 가입하기</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/membership/MI_P03_p003a.scss';
</style>

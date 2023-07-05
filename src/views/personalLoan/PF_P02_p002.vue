<script>
// PF_P02_p002
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
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
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

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
    BasicButton,
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
      nameError: false,
      idNumberError: false,
      phoneError: false,
    });

    onMounted(() => {
      store.ui.header.setActive(() => 'personalLoan');
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
            text: '개인금융',
            to: '/',
          },
          {
            text: '행복아파트론',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">행복아파트론</PageTitle>
        <template v-slot:right>
          <StepProgress :total="5" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        실명 및 본인 인증을 진행해 주세요
      </PageMainText>
      <PageSubText align="left">
        대출상담 및 한도 조회를 위한 신용정보 조회는<br />
        개인신용평점에 영향을 주지 않습니다.
      </PageSubText>
    </PageHead>

    <FormList
      :classNames="{
        wrap: 'row-margin-block-small row-margin-top-none',
      }"
    >
      <FormListItem titleText="이름" target="#PF_P02_p002_name">
        <FormInvalid :error="state.nameError">
          <InputBlock :error="state.nameError">
            <InputBlockCell :flexible="true">
              <BasicInput title="이름" id="PF_P02_p002_name" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="주민등록번호" target="#PF_P02_p002_id">
        <FormInvalid :error="state.idNumberError">
          <InputBlock :error="state.idNumberError">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="number"
                pattern="\d*"
                title="주민등록번호 앞 6자리"
                id="PF_P02_p002_id"
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

      <FormListItem titleText="연락처" target="#PF_P02_p002_phone">
        <FormInvalid :error="state.phoneError">
          <InputBlock :error="state.phoneError">
            <InputBlockCell :flexible="true">
              <BasicInput title="연락처" id="PF_P02_p002_phone" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <div>// [공통 > 본인인증] 내용 노출</div>

    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">약관동의</h3>

      <div :class="$style['agree-list']">
        <ul :class="$style['agree-list__container']">
          <li :class="$style['agree-list__all']">
            <div :class="$style['agree-list__all-head']">
              <CheckBox
                id="PF_P02_p002_agreeAll"
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
                      id="PF_P02_p002_agree001"
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
                            id="PF_P02_p002_agree_001_001"
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
                                id="PF_P02_p002_agree_001_001_001"
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
                                id="PF_P02_p002_agree_001_001_002"
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
                            id="PF_P02_p002_agree_001_002"
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
                                id="PF_P02_p002_agree_001_002_001"
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
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="PF_P02_p002_agree_001_002_002"
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
                            id="PF_P02_p002_agree_001_003"
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
                                id="PF_P02_p002_agree_001_003_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >개인(신용)정보 필수적 제공</CheckBoxLabelText
                                >
                              </CheckBox>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="PF_P02_p002_agree_001_003_002"
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
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="PF_P02_p002_agree_001_004"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>금융상품안내</CheckBoxLabelText>
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
                                id="PF_P02_p002_agree_001_004_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >금융 상품 안내 동의</CheckBoxLabelText
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
                      id="PF_P02_p002_agree_002"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >행정안전부 공공마이데이터서비스 이용 동의(증빙서류 자동
                        제출)</CheckBoxLabelText
                      >
                    </CheckBox>
                  </div>
                  <div :class="$style['agree-list__depth-contents']">
                    <ul :class="$style['agree-list__list']">
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="PF_P02_p002_agree_002_001"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              개인(신용)정보 필수적 수집·이용 동의(공공
                              마이데이터)
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
                                id="PF_P02_p002_agree_002_001_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  개인(신용)정보 수집·이용 동의
                                </CheckBoxLabelText>
                              </CheckBox>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="PF_P02_p002_agree_002_001_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  고유식별정보 수집·이용 동의
                                </CheckBoxLabelText>
                              </CheckBox>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="PF_P02_p002_agree_002_002"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              개인(신용)정보 필수적 제공 동의(공공 마이데이터)
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
                                id="PF_P02_p002_agree_002_002_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  개인(신용)정보 제공 동의
                                </CheckBoxLabelText>
                              </CheckBox>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="PF_P02_p002_agree_002_002_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  고유식별정보 제공 동의
                                </CheckBoxLabelText>
                              </CheckBox>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="PF_P02_p002_agree_002_003"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              개인(신용)정보 필수적 제3자 제공 동의(공공
                              마이데이터)
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
                                id="PF_P02_p002_agree_002_003_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  개인(신용)정보 제공(조회) 동의
                                </CheckBoxLabelText>
                              </CheckBox>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="PF_P02_p002_agree_002_003_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  고유식별정보 제공(조회) 동의
                                </CheckBoxLabelText>
                              </CheckBox>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="PF_P02_p002_agree_002_004"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              본인 행정정보 제3자 제공 요구서(공공 마이데이터)
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
                                id="PF_P02_p002_agree_002_004_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  본인 행정정보 제3자 제공 요구
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
@import '@/assets/scss/views/personalLoan/PF_P02_p002.scss';
</style>

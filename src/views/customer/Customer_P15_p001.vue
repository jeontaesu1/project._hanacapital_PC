<script>
// Customer_P15_p001
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import LocationBar from '@/components/ui/layout/LocationBar.vue';
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
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicTextarea from '@/components/ui/form/BasicTextarea.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import UiScroller from '@/components/ui/common/UiScroller.vue';

export default {
  components: {
    PageContents,
    LocationBar,
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
    SecurityInput,
    BasicSelect,
    BasicTextarea,
    ButtonList,
    ButtonListItem,
    BasicButton,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    UiScroller,
  },

  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      nameError: false,
      birthNumberError: false,
      phoneError: false,
      mailError: false,
      counselingError: false,
    });

    onMounted(() => {
      store.ui.header.setActive(() => 'customer');
      store.ui.header.setDepthActive(() => 'customer007');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
      store.ui.header.setDepthActive();
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
            text: '고객센터',
            to: '/',
          },
          {
            text: '전자민원접수',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>전자민원접수</PageTitle>
    </PageHead>

    <div>
      <section class="row-margin-block-small">
        <h3 class="text-big-3 row-margin-small">민원신청·처리절차</h3>

        <p class="text-title-2 color-gray-secondary font-weight-light">
          하나캐피탈은 신속한 소비자피해 구제와 민원처리를 위한 민원시스템을
          운영하여 소비자보호에 앞장서겠습니다.<br />
          민원이란 회사에 대하여 이의신청, 진정, 건의, 질의 및 기타 특정한
          행위를 요하는 의사표시를 하는 것으로서 금융업무와 관련한 당사
          귀책사유로 인한 피해가 발생했을 경우 소비자피해보상을 신청할 수
          있습니다.
        </p>
      </section>

      <section class="row-margin-block-small">
        <h4 class="text-title-1 row-margin-contents">
          민원 접수/처리 프로세스 안내
        </h4>

        <div
          :class="[
            $style['contents-list'],
            $style['contents-list--wrap'],
            $style['contents-list--col-3'],
          ]"
        >
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--senary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">1</div>
                <div :class="$style['contents-list__title']">
                  고객(민원)접수
                </div>
              </div>

              <div
                :class="[
                  $style['contents-list__depth-3'],
                  'row-margin-item-medium',
                ]"
              >
                <ul
                  :class="[$style['basic-list'], $style['basic-list--regular']]"
                >
                  <li :class="[$style['basic-list__item'], 'text-body-4']">
                    <div :class="$style['basic-list__symbol']">-</div>
                    <div :class="$style['basic-list__content']">홈페이지</div>
                  </li>
                  <li :class="[$style['basic-list__item'], 'text-body-4']">
                    <div :class="$style['basic-list__symbol']">-</div>
                    <div :class="$style['basic-list__content']">내방접수</div>
                  </li>
                  <li :class="[$style['basic-list__item'], 'text-body-4']">
                    <div :class="$style['basic-list__symbol']">-</div>
                    <div :class="$style['basic-list__content']">
                      고객센터(유선)
                    </div>
                  </li>
                  <li :class="[$style['basic-list__item'], 'text-body-4']">
                    <div :class="$style['basic-list__symbol']">-</div>
                    <div :class="$style['basic-list__content']">
                      우편 접수 등
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">2</div>
                <div :class="$style['contents-list__title']">
                  민원처리 (전담부서)
                </div>
              </div>

              <div
                :class="[
                  $style['contents-list__depth-3'],
                  'row-margin-item-medium',
                ]"
              >
                <ul
                  :class="[$style['basic-list'], $style['basic-list--regular']]"
                >
                  <li :class="[$style['basic-list__item'], 'text-body-4']">
                    <div :class="$style['basic-list__symbol']">-</div>
                    <div :class="$style['basic-list__content']">
                      사실관계조사
                    </div>
                  </li>
                  <li :class="[$style['basic-list__item'], 'text-body-4']">
                    <div :class="$style['basic-list__symbol']">-</div>
                    <div :class="$style['basic-list__content']">원인규명</div>
                  </li>
                  <li :class="[$style['basic-list__item'], 'text-body-4']">
                    <div :class="$style['basic-list__symbol']">-</div>
                    <div :class="$style['basic-list__content']">결과통지</div>
                  </li>
                </ul>
              </div>
            </li>

            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">3</div>
                <div :class="$style['contents-list__title']">
                  민원처리 (발생부서)
                </div>
              </div>

              <div
                :class="[
                  $style['contents-list__depth-3'],
                  'row-margin-item-medium',
                ]"
              >
                <ul
                  :class="[$style['basic-list'], $style['basic-list--regular']]"
                >
                  <li :class="[$style['basic-list__item'], 'text-body-4']">
                    <div :class="$style['basic-list__symbol']">-</div>
                    <div :class="$style['basic-list__content']">사실확인</div>
                  </li>
                  <li :class="[$style['basic-list__item'], 'text-body-4']">
                    <div :class="$style['basic-list__symbol']">-</div>
                    <div :class="$style['basic-list__content']">
                      민원해결노력
                    </div>
                  </li>
                  <li :class="[$style['basic-list__item'], 'text-body-4']">
                    <div :class="$style['basic-list__symbol']">-</div>
                    <div :class="$style['basic-list__content']">
                      제도개선요청
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">4</div>
                <div :class="$style['contents-list__title']">민원회신</div>
              </div>

              <div
                :class="[
                  $style['contents-list__depth-3'],
                  'row-margin-item-medium',
                ]"
              >
                <ul
                  :class="[$style['basic-list'], $style['basic-list--regular']]"
                >
                  <li :class="[$style['basic-list__item'], 'text-body-4']">
                    <div :class="$style['basic-list__symbol']">-</div>
                    <div :class="$style['basic-list__content']">
                      전화, 메일 등 고객이 원하는 채널로 안내(접수 후 14영업일
                      내)
                    </div>
                  </li>
                  <li :class="[$style['basic-list__item'], 'text-body-4']">
                    <div :class="$style['basic-list__symbol']">-</div>
                    <div :class="$style['basic-list__content']">
                      관련 근거 제시
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">5</div>
                <div :class="$style['contents-list__title']">사후관리</div>
              </div>

              <div
                :class="[
                  $style['contents-list__depth-3'],
                  'row-margin-item-medium',
                ]"
              >
                <ul
                  :class="[$style['basic-list'], $style['basic-list--regular']]"
                >
                  <li :class="[$style['basic-list__item'], 'text-body-4']">
                    <div :class="$style['basic-list__symbol']">-</div>
                    <div :class="$style['basic-list__content']">직원교육</div>
                  </li>
                  <li :class="[$style['basic-list__item'], 'text-body-4']">
                    <div :class="$style['basic-list__symbol']">-</div>
                    <div :class="$style['basic-list__content']">원인분석</div>
                  </li>
                  <li :class="[$style['basic-list__item'], 'text-body-4']">
                    <div :class="$style['basic-list__symbol']">-</div>
                    <div :class="$style['basic-list__content']">제도개선</div>
                  </li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section class="row-margin-block-small">
        <h4 class="text-title-1 row-margin-contents">약관동의</h4>

        <div :class="$style['agree-box']">
          <div :class="$style['agree-box__block']">
            <div :class="$style['agree-box__head']">
              <CheckBox id="Customer_P15_p001_agree" theme="tertiary">
                <CheckBoxObject />
                <CheckBoxLabelText>개인정보 수집·이용 동의</CheckBoxLabelText>
              </CheckBox>
            </div>
            <div :class="$style['agree-box__contents']">
              <UiScroller :classNames="{ wrap: $style['agree-box__scroller'] }">
                <section :class="$style['agree-box__data']">
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                </section>
              </UiScroller>
            </div>
          </div>
        </div>
      </section>

      <!-- Case : 다음 누른 후 비노출 -->
      <ButtonList>
        <ButtonListItem>
          <BasicButton>다음</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 다음 누른 후 비노출 -->

      <!-- Case : 다음 누른 후 노출 -->
      <section class="row-margin-block-small">
        <h4 class="text-title-1 row-margin-contents">민원 내용 입력</h4>

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

          <FormListItem titleText="연락처" target="#Customer_P15_p001_phone1">
            <FormInvalid :error="state.phoneError">
              <InputBlock :error="state.phoneError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="연락처 국번"
                    id="Customer_P15_p001_phone1"
                    :useDelete="false"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="연락처 중간 번호"
                    id="Customer_P15_p001_phone2"
                    :useDelete="false"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                  <SecurityInput
                    title="연락처 뒷 번호"
                    :dot="[true, true, false, false]"
                  />
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
            titleText="민원접수내용"
            title="민원접수내용"
          >
            <template v-slot:bottom>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </template>
          </BasicTextarea>
        </FormList>
      </section>
      <!-- // Case : 다음 누른 후 노출 -->
    </div>

    <!-- Case : 다음 누른 후 노출 -->
    <ButtonList>
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
    <!-- // Case : 다음 누른 후 노출 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P15_p001.scss';
</style>

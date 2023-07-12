<script>
// AF_P02_p002
// AF_P02_p003
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
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
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import SecurityKeypadButton from '@/components/ui/button/SecurityKeypadButton.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import BasicBoxFoot from '@/components/ui/common/BasicBoxFoot.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import RadioButton from '@/components/ui/form/RadioButton.vue';
import RadioButtonLabelText from '@/components/ui/form/RadioButtonLabelText.vue';
import RadioButtonObject from '@/components/ui/form/RadioButtonObject.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import ColorChip from '@/components/ui/imageData/ColorChip.vue';

import iconInformation from '@/assets/images/icon/information.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageSubText,
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
    SecurityInput,
    SecurityKeypadButton,
    BasicInput,
    BasicSelect,
    BasicButton,
    ButtonList,
    ButtonListItem,
    NavTab,
    NavTabButton,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    BasicBoxFoot,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    RadioButton,
    RadioButtonLabelText,
    RadioButtonObject,
    UnitText,
    CarThumb,
    CarEmblem,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    TextButton,
    NoticeText,
    ColorChip,
    iconInformation,
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

    const state = reactive({
      companyError: false,
      carNameError: false,
      extraOptionError: false,
      extraOptionPriceError: false,
      extraExteriorColorError: false,
      extraExteriorPriceError: false,
      extraInteriorColorError: false,
      extraInteriorPriceError: false,
      nameError: false,
      idNumberError: false,
      phoneError: false,
      timeError: false,
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
            text: '오토금융',
            to: '/',
          },
          {
            text: '다이렉트 오토리스',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>견적 조회</PageTitle>
      <PageSubText :classNames="{ wrap: 'font-weight-regular' }">
        원하는 차와 옵션을 선택하셔서 월 예상 이용료를 알아보세요.
      </PageSubText>
    </PageHead>

    <div>
      <NavTab>
        <NavTabButton tagName="button" type="button" :active="true"
          >국산차</NavTabButton
        >
        <NavTabButton tagName="button" type="button">수입차</NavTabButton>
      </NavTab>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">차량선택</h3>

        <FormList>
          <FormListItem
            titleText="제조사"
            target="#AF_P02_p002_Company"
            :selectOnly="true"
          >
            <FormInvalid :error="state.companyError">
              <InputBlock :error="state.companyError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '현대',
                      },
                      {
                        value: '2',
                        label: '기아',
                      },
                      {
                        value: '3',
                        label: '르노삼성',
                      },
                      {
                        value: '4',
                        label: '쌍용',
                      },
                      {
                        value: '5',
                        label: '쉐보레',
                      },
                      {
                        value: '6',
                        label: '타타대우',
                      },
                      {
                        value: '7',
                        label: '제네시스',
                      },
                      {
                        value: '8',
                        label: '대창모터스',
                      },
                      {
                        value: '9',
                        label: '벤츠',
                      },
                      {
                        value: '10',
                        label: 'BMW',
                      },
                      {
                        value: '11',
                        label: '아우디',
                      },
                      {
                        value: '12',
                        label: '도요타',
                      },
                      {
                        value: '13',
                        label: '폭스바겐',
                      },
                      {
                        value: '14',
                        label: '혼다',
                      },
                      {
                        value: '15',
                        label: '포드',
                      },
                      {
                        value: '16',
                        label: '크라이슬러',
                      },
                      {
                        value: '17',
                        label: '볼보',
                      },
                      {
                        value: '18',
                        label: '푸조',
                      },
                      {
                        value: '19',
                        label: 'GM',
                      },
                      {
                        value: '20',
                        label: '재규어',
                      },
                      {
                        value: '21',
                        label: '랜드로버',
                      },
                      {
                        value: '22',
                        label: '포르쉐',
                      },
                      {
                        value: '23',
                        label: '마세라티',
                      },
                      {
                        value: '24',
                        label: '페라리',
                      },
                      {
                        value: '25',
                        label: '람보르기니',
                      },
                      {
                        value: '26',
                        label: '벤틀리',
                      },
                      {
                        value: '27',
                        label: '애스톤마틴',
                      },
                      {
                        value: '28',
                        label: '시트로엥',
                      },
                      {
                        value: '29',
                        label: '캐딜락',
                      },
                      {
                        value: '30',
                        label: '렉서스',
                      },
                      {
                        value: '31',
                        label: '롤스로이스',
                      },
                      {
                        value: '32',
                        label: '링컨',
                      },
                      {
                        value: '33',
                        label: '미니',
                      },
                      {
                        value: '34',
                        label: '인피니티',
                      },
                      {
                        value: '35',
                        label: '지프',
                      },
                      {
                        value: '36',
                        label: '맥라렌',
                      },
                      {
                        value: '37',
                        label: '닷지',
                      },
                      {
                        value: '38',
                        label: '애스턴마틴',
                      },
                      {
                        value: '39',
                        label: '토요타',
                      },
                      {
                        value: '40',
                        label: '테슬라',
                      },
                      {
                        value: '41',
                        label: '할리데이비슨',
                      },
                      {
                        value: '42',
                        label: '맥라렌',
                      },
                      {
                        value: '43',
                        label: '에스턴마틴',
                      },
                    ]"
                    title="제조사"
                    inputId="AF_P02_p002_Company"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <FormListItem
            titleText="차종"
            target="#AF_P02_p002_carNameError"
            :selectOnly="true"
          >
            <FormInvalid :error="state.carNameError">
              <InputBlock :error="state.carNameError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '캐스퍼',
                      },
                    ]"
                    title="차종"
                    inputId="AF_P02_p002_carNameError"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <div class="flex-box justify-conten-center row-margin-contents">
          <CarThumb size="regular" src="/images/_dummy/car-thumb.png" />
        </div>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">모델</h3>

        <UiAccordion :classNames="{ wrap: $style['select-list__list'] }">
          <UiAccordionItem :classNames="{ item: $style['select-list__item'] }">
            <div :class="$style['select-list__head']">
              <div :class="$style['select-list__title']">
                2022년형 가솔린 1.0
              </div>
              <div :class="$style['select-list__right']">
                <UiAccordionOpener
                  :classNames="{ button: $style['select-list__opener'] }"
                />
              </div>
            </div>
            <UiAccordionLayer>
              <div :class="$style['select-list__contents']">
                <div :class="$style['option-list']">
                  <ul :class="$style['option-list__list']">
                    <li :class="$style['option-list__item']">
                      <div :class="$style['option-list__block']">
                        <RadioButton
                          name="AF_P02_p002_model_001"
                          id="AF_P02_p002_model_001_001"
                          :full="true"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell flex-1">
                                <span class="text-title-2 font-weight-medium"
                                  >모던</span
                                >
                              </span>
                              <span class="flex-box__cell">
                                <UnitText
                                  size="regular"
                                  rightUnit="원"
                                  align="right"
                                >
                                  <strong>15,900,000</strong>
                                </UnitText>
                              </span>
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </li>
                    <li :class="$style['option-list__item']">
                      <div :class="$style['option-list__block']">
                        <RadioButton
                          name="AF_P02_p002_model_001"
                          id="AF_P02_p002_model_001_002"
                          :full="true"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell flex-1">
                                <span class="text-title-2 font-weight-medium"
                                  >스마트</span
                                >
                              </span>
                              <span class="flex-box__cell">
                                <UnitText
                                  size="regular"
                                  rightUnit="원"
                                  align="right"
                                >
                                  <strong>15,900,000</strong>
                                </UnitText>
                              </span>
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </li>
                    <li :class="$style['option-list__item']">
                      <div :class="$style['option-list__block']">
                        <RadioButton
                          name="AF_P02_p002_model_001"
                          id="AF_P02_p002_model_001_003"
                          :full="true"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell flex-1">
                                <span class="text-title-2 font-weight-medium"
                                  >인스퍼레이션</span
                                >
                              </span>
                              <span class="flex-box__cell">
                                <UnitText
                                  size="regular"
                                  rightUnit="원"
                                  align="right"
                                >
                                  <strong>15,900,000</strong>
                                </UnitText>
                              </span>
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem :classNames="{ item: $style['select-list__item'] }">
            <div :class="$style['select-list__head']">
              <div :class="$style['select-list__title']">
                2022년형 가솔린 1.0 터보
              </div>
              <div :class="$style['select-list__right']">
                <UiAccordionOpener
                  :classNames="{ button: $style['select-list__opener'] }"
                />
              </div>
            </div>
            <UiAccordionLayer>
              <div :class="$style['select-list__contents']">
                <div :class="$style['option-list']">
                  <ul :class="$style['option-list__list']">
                    <li :class="$style['option-list__item']">
                      <div :class="$style['option-list__block']">
                        <RadioButton
                          name="AF_P02_p002_model"
                          id="AF_P02_p002_model_002_001"
                          :full="true"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell flex-1">
                                <span class="text-title-2 font-weight-medium"
                                  >모던</span
                                >
                              </span>
                              <span class="flex-box__cell">
                                <UnitText
                                  size="regular"
                                  rightUnit="원"
                                  align="right"
                                >
                                  <strong>15,900,000</strong>
                                </UnitText>
                              </span>
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem :classNames="{ item: $style['select-list__item'] }">
            <div :class="$style['select-list__head']">
              <div :class="$style['select-list__title']">
                2022년형 가솔린 1.0 밴
              </div>
              <div :class="$style['select-list__right']">
                <UiAccordionOpener
                  :classNames="{ button: $style['select-list__opener'] }"
                />
              </div>
            </div>
            <UiAccordionLayer>
              <div :class="$style['select-list__contents']">
                <div :class="$style['option-list']">
                  <ul :class="$style['option-list__list']">
                    <li :class="$style['option-list__item']">
                      <div :class="$style['option-list__block']">
                        <RadioButton
                          name="AF_P02_p002_model_003"
                          id="AF_P02_p002_model_003_001"
                          :full="true"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell flex-1">
                                <span class="text-title-2 font-weight-medium"
                                  >스마트</span
                                >
                              </span>
                              <span class="flex-box__cell">
                                <UnitText
                                  size="regular"
                                  rightUnit="원"
                                  align="right"
                                >
                                  <strong>15,900,000</strong>
                                </UnitText>
                              </span>
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">옵션선택</h3>

        <UiAccordion :classNames="{ wrap: $style['select-list__list'] }">
          <UiAccordionItem :classNames="{ item: $style['select-list__item'] }">
            <div :class="$style['select-list__head']">
              <div :class="$style['select-list__title']">편의 기능 사항</div>
              <div :class="$style['select-list__right']">
                <UiAccordionOpener
                  :classNames="{ button: $style['select-list__opener'] }"
                />
              </div>
            </div>
            <UiAccordionLayer>
              <div :class="$style['select-list__contents']">
                <div :class="$style['option-list']">
                  <ul :class="$style['option-list__list']">
                    <li :class="$style['option-list__item']">
                      <div :class="$style['option-list__block']">
                        <CheckBox
                          id="AF_P02_p002_function001"
                          theme="secondary"
                          :full="true"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell flex-1">
                                <span class="text-title-2 font-weight-medium"
                                  >현대 스마트센스</span
                                >
                              </span>
                              <span class="flex-box__cell">
                                <UnitText
                                  size="regular"
                                  rightUnit="원"
                                  align="right"
                                >
                                  <strong>+ 700,000</strong>
                                </UnitText>
                              </span>
                            </span>
                          </CheckBoxLabelText>
                        </CheckBox>
                      </div>
                    </li>
                    <li :class="$style['option-list__item']">
                      <div :class="$style['option-list__block']">
                        <CheckBox
                          id="AF_P02_p002_function002"
                          theme="secondary"
                          :full="true"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell flex-1">
                                <span class="text-title-2 font-weight-medium"
                                  >액티비 플러스</span
                                >
                              </span>
                              <span class="flex-box__cell">
                                <UnitText
                                  size="regular"
                                  rightUnit="원"
                                  align="right"
                                >
                                  <strong>+ 500,000</strong>
                                </UnitText>
                              </span>
                            </span>
                          </CheckBoxLabelText>
                        </CheckBox>
                      </div>
                    </li>
                    <li :class="$style['option-list__item']">
                      <div :class="$style['option-list__block']">
                        <CheckBox
                          id="AF_P02_p002_function003"
                          theme="secondary"
                          :full="true"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell flex-1">
                                <span class="text-title-2 font-weight-medium"
                                  >직접입력</span
                                >
                              </span>
                              <span class="flex-box__cell">
                                <UnitText
                                  size="regular"
                                  rightUnit="원"
                                  align="right"
                                >
                                  <strong>+ 0</strong>
                                </UnitText>
                              </span>
                            </span>
                          </CheckBoxLabelText>
                        </CheckBox>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- Case : 직접 입력 선택시 노출 -->
                <BasicBox theme="tertiary" className="row-margin-contents">
                  <FormList>
                    <FormListItem
                      titleText="기타옵션"
                      target="#AF_P02_p002_extraOption"
                    >
                      <FormInvalid :error="state.extraOptionError">
                        <InputBlock :error="state.extraOptionError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="기타옵션"
                              id="AF_P02_p002_extraOption"
                            />
                          </InputBlockCell>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                    <FormListItem
                      titleText="금액"
                      target="#AF_P02_p002_extraOptionPrice"
                    >
                      <FormInvalid :error="state.extraOptionPriceError">
                        <InputBlock :error="state.extraOptionPriceError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              align="right"
                              :useDelete="false"
                              pattern="\d*"
                              title="금액"
                              id="AF_P02_p002_extraOptionPrice"
                            />
                          </InputBlockCell>
                          <template v-slot:innerRight>
                            <div class="text-body-1">원</div>
                          </template>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                  </FormList>
                </BasicBox>
                <!-- //Case : 직접 입력 선택시 노출 -->
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem :classNames="{ item: $style['select-list__item'] }">
            <div :class="$style['select-list__head']">
              <div :class="$style['select-list__title']">외장 색상</div>
              <div :class="$style['select-list__right']">
                <UiAccordionOpener
                  :classNames="{ button: $style['select-list__opener'] }"
                />
              </div>
            </div>
            <UiAccordionLayer>
              <div :class="$style['select-list__contents']">
                <div :class="$style['option-list']">
                  <ul :class="$style['option-list__list']">
                    <li :class="$style['option-list__item']">
                      <div :class="$style['option-list__block']">
                        <RadioButton
                          name="AF_P02_p002_exteriorColor"
                          id="AF_P02_p002_exteriorColor_001"
                          :full="true"
                          align="center"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell">
                                <ColorChip />
                              </span>
                              <span
                                class="flex-box__cell flex-box__cell--regular flex-1"
                              >
                                <span class="text-title-2 font-weight-medium"
                                  >선택 안함</span
                                >
                              </span>
                              <span class="flex-box__cell">
                                <UnitText
                                  size="regular"
                                  rightUnit="원"
                                  align="right"
                                >
                                  <strong>+ 0</strong>
                                </UnitText>
                              </span>
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </li>
                    <li :class="$style['option-list__item']">
                      <div :class="$style['option-list__block']">
                        <RadioButton
                          name="AF_P02_p002_exteriorColor"
                          id="AF_P02_p002_exteriorColor_002"
                          :full="true"
                          align="center"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell">
                                <ColorChip :colors="['66, 66, 66']" />
                              </span>
                              <span
                                class="flex-box__cell flex-box__cell--regular flex-1"
                              >
                                <span class="text-title-2 font-weight-medium"
                                  >티탄 그레이 메탈릭(R4G)</span
                                >
                              </span>
                              <span class="flex-box__cell">
                                <UnitText
                                  size="regular"
                                  rightUnit="원"
                                  align="right"
                                >
                                  <strong>+ 400,000</strong>
                                </UnitText>
                              </span>
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </li>
                    <li :class="$style['option-list__item']">
                      <div :class="$style['option-list__block']">
                        <RadioButton
                          name="AF_P02_p002_exteriorColor"
                          id="AF_P02_p002_exteriorColor_003"
                          :full="true"
                          align="center"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell">
                                <ColorChip :colors="['244, 241, 241']" />
                              </span>
                              <span
                                class="flex-box__cell flex-box__cell--regular flex-1"
                              >
                                <span class="text-title-2 font-weight-medium"
                                  >아틸라스 화이트</span
                                >
                              </span>
                              <span class="flex-box__cell">
                                <UnitText
                                  size="regular"
                                  rightUnit="원"
                                  align="right"
                                >
                                  <strong>+ 400,000</strong>
                                </UnitText>
                              </span>
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </li>
                    <li :class="$style['option-list__item']">
                      <div :class="$style['option-list__block']">
                        <RadioButton
                          name="AF_P02_p002_exteriorColor"
                          id="AF_P02_p002_exteriorColor_004"
                          :full="true"
                          align="center"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell">
                                <ColorChip :colors="['78, 105, 100']" />
                              </span>
                              <span
                                class="flex-box__cell flex-box__cell--regular flex-1"
                              >
                                <span class="text-title-2 font-weight-medium"
                                  >톰보이 카키</span
                                >
                              </span>
                              <span class="flex-box__cell">
                                <UnitText
                                  size="regular"
                                  rightUnit="원"
                                  align="right"
                                >
                                  <strong>+ 400,000</strong>
                                </UnitText>
                              </span>
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </li>
                    <li :class="$style['option-list__item']">
                      <div :class="$style['option-list__block']">
                        <RadioButton
                          name="AF_P02_p002_exteriorColor"
                          id="AF_P02_p002_exteriorColor_005"
                          :full="true"
                          align="center"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell flex-1">
                                <span class="text-title-2 font-weight-medium"
                                  >직접입력</span
                                >
                              </span>
                              <span class="flex-box__cell">
                                <UnitText
                                  size="regular"
                                  rightUnit="원"
                                  align="right"
                                >
                                  <strong>+ 0</strong>
                                </UnitText>
                              </span>
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- Case : 직접 입력 선택시 노출 -->
                <BasicBox theme="tertiary" className="row-margin-contents">
                  <FormList>
                    <FormListItem
                      titleText="기타외장색상"
                      target="#AF_P02_p002_extraExteriorColor"
                    >
                      <FormInvalid :error="state.extraExteriorColorError">
                        <InputBlock :error="state.extraExteriorColorError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="기타외장색상"
                              id="AF_P02_p002_extraExteriorColor"
                            />
                          </InputBlockCell>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                    <FormListItem
                      titleText="금액"
                      target="#AF_P02_p002_extraExteriorPrice"
                    >
                      <FormInvalid :error="state.extraExteriorPriceError">
                        <InputBlock :error="state.extraExteriorPriceError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              align="right"
                              :useDelete="false"
                              pattern="\d*"
                              title="금액"
                              id="AF_P02_p002_extraExteriorPrice"
                            />
                          </InputBlockCell>
                          <template v-slot:innerRight>
                            <div class="text-body-1">원</div>
                          </template>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                  </FormList>
                </BasicBox>
                <!-- //Case : 직접 입력 선택시 노출 -->
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem :classNames="{ item: $style['select-list__item'] }">
            <div :class="$style['select-list__head']">
              <div :class="$style['select-list__title']">내장 색상</div>
              <div :class="$style['select-list__right']">
                <UiAccordionOpener
                  :classNames="{ button: $style['select-list__opener'] }"
                />
              </div>
            </div>
            <UiAccordionLayer>
              <div :class="$style['select-list__contents']">
                <div :class="$style['option-list']">
                  <ul :class="$style['option-list__list']">
                    <li :class="$style['option-list__item']">
                      <div :class="$style['option-list__block']">
                        <RadioButton
                          name="AF_P02_p002_InteriorColor"
                          id="AF_P02_p002_InteriorColor_001"
                          :full="true"
                          align="center"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell">
                                <ColorChip />
                              </span>
                              <span
                                class="flex-box__cell flex-box__cell--regular flex-1"
                              >
                                <span class="text-title-2 font-weight-medium"
                                  >선택 안함</span
                                >
                              </span>
                              <span class="flex-box__cell">
                                <UnitText
                                  size="regular"
                                  rightUnit="원"
                                  align="right"
                                >
                                  <strong>+ 0</strong>
                                </UnitText>
                              </span>
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </li>
                    <li :class="$style['option-list__item']">
                      <div :class="$style['option-list__block']">
                        <RadioButton
                          name="AF_P02_p002_InteriorColor"
                          id="AF_P02_p002_InteriorColor_002"
                          :full="true"
                          align="center"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell">
                                <ColorChip
                                  :colors="['244, 238, 238', '225, 213, 213']"
                                />
                              </span>
                              <span
                                class="flex-box__cell flex-box__cell--regular flex-1"
                              >
                                <span class="text-title-2 font-weight-medium"
                                  >네츄럴 베이지 / 다크 베이지</span
                                >
                              </span>
                              <span class="flex-box__cell">
                                <UnitText
                                  size="regular"
                                  rightUnit="원"
                                  align="right"
                                >
                                  <strong>+ 400,000</strong>
                                </UnitText>
                              </span>
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </li>
                    <li :class="$style['option-list__item']">
                      <div :class="$style['option-list__block']">
                        <RadioButton
                          name="AF_P02_p002_InteriorColor"
                          id="AF_P02_p002_InteriorColor_003"
                          :full="true"
                          align="center"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell">
                                <ColorChip
                                  :colors="['66, 83, 82', '155, 171, 170']"
                                />
                              </span>
                              <span
                                class="flex-box__cell flex-box__cell--regular flex-1"
                              >
                                <span class="text-title-2 font-weight-medium"
                                  >톰보이 카키 / 포레스트 그린</span
                                >
                              </span>
                              <span class="flex-box__cell">
                                <UnitText
                                  size="regular"
                                  rightUnit="원"
                                  align="right"
                                >
                                  <strong>+ 400,000</strong>
                                </UnitText>
                              </span>
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </li>
                    <li :class="$style['option-list__item']">
                      <div :class="$style['option-list__block']">
                        <RadioButton
                          name="AF_P02_p002_InteriorColor"
                          id="AF_P02_p002_InteriorColor_004"
                          :full="true"
                          align="center"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell">
                                <ColorChip :colors="['0, 40, 86']" />
                              </span>
                              <span
                                class="flex-box__cell flex-box__cell--regular flex-1"
                              >
                                <span class="text-title-2 font-weight-medium"
                                  >네이비</span
                                >
                              </span>
                              <span class="flex-box__cell">
                                <UnitText
                                  size="regular"
                                  rightUnit="원"
                                  align="right"
                                >
                                  <strong>+ 400,000</strong>
                                </UnitText>
                              </span>
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </li>
                    <li :class="$style['option-list__item']">
                      <div :class="$style['option-list__block']">
                        <RadioButton
                          name="AF_P02_p002_InteriorColor"
                          id="AF_P02_p002_InteriorColor_005"
                          :full="true"
                          align="center"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell flex-1">
                                <span class="text-title-2 font-weight-medium"
                                  >직접입력</span
                                >
                              </span>
                              <span class="flex-box__cell">
                                <UnitText
                                  size="regular"
                                  rightUnit="원"
                                  align="right"
                                >
                                  <strong>+ 0</strong>
                                </UnitText>
                              </span>
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- Case : 직접 입력 선택시 노출 -->
                <BasicBox theme="tertiary" className="row-margin-contents">
                  <FormList>
                    <FormListItem
                      titleText="기타내장색상"
                      target="#AF_P02_p002_extraInteriorColor"
                    >
                      <FormInvalid :error="state.extraInteriorColorError">
                        <InputBlock :error="state.extraInteriorColorError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="기타내장색상"
                              id="AF_P02_p002_extraInteriorColor"
                            />
                          </InputBlockCell>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                    <FormListItem
                      titleText="금액"
                      target="#AF_P02_p002_extraInteriorPrice"
                    >
                      <FormInvalid :error="state.extraInteriorPriceError">
                        <InputBlock :error="state.extraInteriorPriceError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              align="right"
                              :useDelete="false"
                              pattern="\d*"
                              title="금액"
                              id="AF_P02_p002_extraInteriorPrice"
                            />
                          </InputBlockCell>
                          <template v-slot:innerRight>
                            <div class="text-body-1">원</div>
                          </template>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                  </FormList>
                </BasicBox>
                <!-- //Case : 직접 입력 선택시 노출 -->
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">신청정보선택</h3>

        <div>
          <section class="row-margin-container-medium">
            <h4 class="text-body-1 row-margin-item-group">이용기간</h4>

            <BoxCheckList :wrap="true" col="5">
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="AF_P02_p002_period"
                  id="AF_P02_p002_period001"
                >
                  <BoxCheckLabel>12개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="AF_P02_p002_period"
                  id="AF_P02_p002_period002"
                >
                  <BoxCheckLabel>24개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="AF_P02_p002_period"
                  id="AF_P02_p002_period003"
                >
                  <BoxCheckLabel>36개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="AF_P02_p002_period"
                  id="AF_P02_p002_period004"
                >
                  <BoxCheckLabel>48개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="AF_P02_p002_period"
                  id="AF_P02_p002_period005"
                >
                  <BoxCheckLabel>60개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </section>

          <section class="row-margin-container-medium">
            <div class="flex-box row-margin-item-group">
              <div class="flex-box__cell flex-1">
                <h4 class="text-body-1">보증금 비율</h4>
              </div>
              <div class="flex-box__cell">
                <div class="text-body-1 font-weight-medium">1,550,000 원</div>
              </div>
            </div>

            <BoxCheckList :wrap="true" col="4">
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="AF_P02_p002_deposit"
                  id="AF_P02_p002_deposit_001"
                >
                  <BoxCheckLabel>10%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="AF_P02_p002_deposit"
                  id="AF_P02_p002_deposit_002"
                >
                  <BoxCheckLabel>20%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="AF_P02_p002_deposit"
                  id="AF_P02_p002_deposit_003"
                >
                  <BoxCheckLabel>30%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="AF_P02_p002_deposit"
                  id="AF_P02_p002_deposit_004"
                >
                  <BoxCheckLabel>40%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </section>
        </div>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-1 row-margin-contents">차량가격</h3>

        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <div class="flex-box row-margin-mini">
                <div class="flex-box__cell">
                  <CarEmblem code="1001" name="현대" />
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <p class="text-body-4 font-weight-light">2020년식</p>
                </div>
              </div>
              <h4 class="text-title-2 font-weight-medium">캐스퍼</h4>
              <div class="row-margin-item">
                <p class="text-body-3 color-gray-tertiary">
                  쏘나타 뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
                </p>
              </div>
            </BasicBoxHeadLeft>
            <BasicBoxHeadRight>
              <CarThumb src="/images/_dummy/car-thumb.png" />
            </BasicBoxHeadRight>
          </BasicBoxHead>

          <KeyValue>
            <KeyValueItem>
              <KeyValueTitle>선택옵션 1</KeyValueTitle>
              <KeyValueText>현대 스마트 센서</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>선택옵션 2</KeyValueTitle>
              <KeyValueText>액티비 플러스</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <BasicBoxFoot>
            <KeyValue>
              <KeyValueItem>
                <KeyValueTitle>기본차량가격</KeyValueTitle>
                <KeyValueText> 15,500,000 원 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>옵션가격</KeyValueTitle>
                <KeyValueText> + 1,200,000 원 </KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <BasicHr theme="tertiary" className="row-margin-contents" />

            <KeyValue verticalAlign="center" margin="regular">
              <KeyValueItem>
                <KeyValueTitle
                  :classNames="{
                    title: 'text-title-2 color-black font-weight-medium',
                  }"
                  >총 차량가격</KeyValueTitle
                >
                <KeyValueText>
                  <UnitText rightUnit="원" align="right">
                    <strong>16,700,000</strong>
                  </UnitText>
                </KeyValueText>
              </KeyValueItem>
              <!-- Case : 월 납입금 계산 전 -->
              <KeyValueItem>
                <KeyValueTitle
                  :classNames="{
                    title: 'text-title-2 color-black font-weight-medium',
                  }"
                  >월 납입금액</KeyValueTitle
                >
                <KeyValueText>
                  <BasicButton inline="true" size="small">
                    계산하기
                  </BasicButton>

                  <!-- Case : 로딩중 -->
                  <BasicButton inline="true" size="small">
                    계산중
                    <template v-slot:rightIcon>
                      <div :class="$style['loading-icon']"></div>
                    </template>
                  </BasicButton>
                  <!-- //Case : 로딩중 -->
                </KeyValueText>
              </KeyValueItem>
              <!-- //Case : 월 납입금 계산 전 -->

              <!-- Case : 월 납입금 계산 후 -->
              <KeyValueItem>
                <KeyValueTitle
                  :classNames="{
                    title: 'text-title-2 color-black font-weight-medium',
                  }"
                  >월 납입금액</KeyValueTitle
                >
                <KeyValueText>
                  <UnitText
                    rightUnit="원~"
                    align="right"
                    :classNames="{ wrap: 'color-green' }"
                  >
                    <strong>167,000</strong>
                  </UnitText>
                </KeyValueText>
              </KeyValueItem>
              <!-- //Case : 월 납입금 계산 후 -->
            </KeyValue>
          </BasicBoxFoot>
        </BasicBox>

        <div class="inline-wrap align-right row-margin-contents-small">
          <TextButton textSize="regular" iconSize="regular" theme="quaternary">
            리스와 렌트 차이가 궁금하다면?
            <template v-slot:rightIcon>
              <iconInformation />
            </template>
          </TextButton>
        </div>
      </section>

      <ul class="reset-list">
        <li class="row-margin-item-medium">
          <NoticeText
            >본 이용료에는 자동차세, 보험료 등이 포함되어 있지
            않습니다.</NoticeText
          >
        </li>
        <li class="row-margin-item-medium">
          <NoticeText
            >실제상품 상담 시, 조건 변동에 따라 월 이용료가 변동 될 수
            있습니다.<br />
            (자동차세 포함, 보험료 포함, 주행거리 변경, 회계방식 등)</NoticeText
          >
        </li>
      </ul>

      <ButtonList>
        <ButtonListItem>
          <BasicButton>리스 신청</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </div>

    <!-- Case : 리스 신청 버튼 선택 시 노출 -->
    <BasicHr theme="tertiary" className="row-margin-block" />

    <div>
      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">연락처</h3>

        <FormList>
          <FormListItem titleText="이름" target="#AF_P02_p002_name">
            <FormInvalid :error="state.nameError">
              <InputBlock :error="state.nameError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이름" id="AF_P02_p002_name" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="주민등록번호" target="#AF_P02_p002_id">
            <FormInvalid :error="state.idNumberError">
              <InputBlock :error="state.idNumberError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="주민등록번호 앞 6자리"
                    id="AF_P02_p002_id"
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

          <FormListItem titleText="휴대폰번호" target="#AF_P02_p002_phone">
            <FormInvalid :error="state.phoneError">
              <InputBlock :error="state.phoneError">
                <InputBlockCell>
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '010',
                      },
                      {
                        value: '2',
                        label: '011',
                      },
                      {
                        value: '3',
                        label: '016',
                      },
                      {
                        value: '4',
                        label: '017',
                      },
                      {
                        value: '5',
                        label: '018',
                      },
                      {
                        value: '6',
                        label: '019',
                      },
                    ]"
                    title="휴대폰번호 첫번째 자리"
                    inputId="AF_P02_p002_phone"
                    :classNames="{
                      wrap: 'input-width-telecom',
                    }"
                  />
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicInput type="number" pattern="\d*" title="휴대폰번호" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="연락가능시간"
            target="#AF_P02_p002_startTime"
          >
            <FormInvalid :error="state.timeError">
              <InputBlock :error="state.timeError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '9',
                        label: '9',
                      },
                      {
                        value: '10',
                        label: '10',
                      },
                      {
                        value: '11',
                        label: '11',
                      },
                      {
                        value: '12',
                        label: '12',
                      },
                      {
                        value: '13',
                        label: '13',
                      },
                      {
                        value: '14',
                        label: '14',
                      },
                      {
                        value: '15',
                        label: '15',
                      },
                      {
                        value: '16',
                        label: '16',
                      },
                      {
                        value: '17',
                        label: '17',
                      },
                    ]"
                    title="시작시간"
                    inputId="AF_P02_p002_startTime"
                  />
                </InputBlockCell>
                <InputBlockCell margin="regular">
                  <div class="text-body-3">시</div>
                </InputBlockCell>
                <InputBlockCell margin="regular">
                  <div class="text-body-3">~</div>
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicSelect
                    :options="[
                      {
                        value: '10',
                        label: '10',
                      },
                      {
                        value: '11',
                        label: '11',
                      },
                      {
                        value: '12',
                        label: '12',
                      },
                      {
                        value: '13',
                        label: '13',
                      },
                      {
                        value: '14',
                        label: '14',
                      },
                      {
                        value: '15',
                        label: '15',
                      },
                      {
                        value: '16',
                        label: '16',
                      },
                      {
                        value: '17',
                        label: '17',
                      },
                    ]"
                    title="종료시간"
                    inputId="AF_P02_p002_endTime"
                  />
                </InputBlockCell>
                <InputBlockCell margin="regular">
                  <div class="text-body-3">시 사이</div>
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <section class="row-margin-block-small">
        <div>// [공통 > 본인인증] 내용 노출</div>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">약관동의</h3>

        <div :class="$style['agree-list']">
          <ul :class="$style['agree-list__depth']">
            <li :class="$style['agree-list__depth-item']">
              <div :class="$style['agree-list__depth-head']">
                <CheckBox
                  id="AF_P02_p002_agreeAll"
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
                        id="AF_P02_p002_agree_001"
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
                            id="AF_P02_p002_agree_001_001"
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
                            id="AF_P02_p002_agree_001_002"
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
                        id="AF_P02_p002_agree_002"
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
                            id="AF_P02_p002_agree_002_001"
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
                            id="AF_P02_p002_agree_002_002"
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
                        id="AF_P02_p002_agree_003"
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
                            id="AF_P02_p002_agree_003_001"
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
                            id="AF_P02_p002_agree_003_002"
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
      </section>

      <ButtonList>
        <ButtonListItem>
          <BasicButton>신청</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </div>
    <!-- //Case : 리스 신청 버튼 선택 시 노출 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P02_p002.scss';
</style>

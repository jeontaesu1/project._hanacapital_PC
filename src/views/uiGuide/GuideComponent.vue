<script>
import { ref, reactive } from 'vue';

import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import PopupText from '@/components/ui/layer/PopupText.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import AlertPopup from '@/components/ui/layer/AlertPopup.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import BasicTextarea from '@/components/ui/form/BasicTextarea.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import PartInput from '@/components/ui/form/PartInput.vue';
import SecurityKeypadButton from '@/components/ui/button/SecurityKeypadButton.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabList from '@/components/ui/tab/UiTabList.vue';
import UiTabButton from '@/components/ui/tab/UiTabButton.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ContentsButton from '@/components/ui/button/ContentsButton.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import BankLogo from '@/components/ui/imageData/BankLogo.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';

import IconAdd from '@/assets/images/icon/add.svg?component';
import IconPerson from '@/assets/images/icon/person.svg?component';
import IconBuilding from '@/assets/images/icon/building.svg?component';
import IconCustomer from '@/assets/images/icon/customer-center.svg?component';
import IconLogo from '@/assets/images/icon/hanacapital-small.svg?component';
import IconLink from '@/assets/images/icon/link.svg?component';
import IconSearchMoney from '@/assets/images/icon/search-money.svg?component';
import IconInterestRate from '@/assets/images/icon/interest-rate.svg?component';
import IconStar from '@/assets/images/icon/star-badge.svg?component';
import IconPhone from '@/assets/images/icon/phone.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconPersonalTerms from '@/assets/images/icon/personal-terms.svg?component';
import IconDeposit from '@/assets/images/icon/deposit.svg?component';
import IconCallMint from '@/assets/images/icon/call-mint.svg?component';
import IconCompleted from '@/assets/images/icon/completed.svg?component';
import IconContract from '@/assets/images/icon/contract.svg?component';
import IconCarCheck from '@/assets/images/icon/car-check.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';
import IconDocumentSearch from '@/assets/images/icon/document-search.svg?component';

export default {
  components: {
    BasicButton,
    ButtonList,
    ButtonListItem,
    TextButton,
    UiLayer,
    PopupTitle,
    PopupSubTitle,
    PopupText,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    AlertPopup,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BasicInput,
    BasicSelect,
    BasicDatepicker,
    BasicTextarea,
    SecurityInput,
    PartInput,
    SecurityKeypadButton,
    SearchButton,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
    BoxCheckList,
    BoxCheckListItem,
    StepProgress,
    RoundStatus,
    NoticeText,
    UiTab,
    UiTabList,
    UiTabButton,
    UiTabPanel,
    NavTab,
    NavTabButton,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    BasicHr,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ContentsButton,
    IllustObject,
    IllustInfo,
    IllustInfoTitle,
    IllustInfoText,
    UnitText,
    BankLogo,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    IconAdd,
    IconPerson,
    IconBuilding,
    IconCustomer,
    IconLogo,
    IconLink,
    IconSearchMoney,
    IconInterestRate,
    IconStar,
    IconPhone,
    IconSend,
    IconPersonalTerms,
    IconDeposit,
    IconCallMint,
    IconCompleted,
    IconContract,
    IconCarCheck,
    IconCar,
    IconDocumentSearch,
  },

  setup() {
    const state = reactive({
      testError001: false,
      testMinDate001: '',
      testMaxDate001: '',
      testMinDate002: '',
      testMaxDate002: '',
    });

    const layerTest001 = ref(null);
    const layerTest002 = ref(null);
    const layerTest003 = ref(null);
    const layerTest004 = ref(null);
    const layerTest005 = ref(null);
    const testAccordion = ref(null);

    const layerOpenTest001 = (e = {}) => {
      layerTest001.value.open(e.target);
    };
    const layerOpenTest002 = (e = {}) => {
      layerTest002.value.open(e.target);
    };
    const layerOpenTest003 = (e = {}) => {
      layerTest003.value.open(e.target);
    };
    const layerOpenTest004 = (e = {}) => {
      layerTest004.value.open(e.target);
    };
    const layerOpenTest005 = (e = {}) => {
      layerTest005.value.open(e.target);
    };

    const testErrorUpdate001 = (val) => {
      state.testError001 = val;
    };

    const testInputEvent = (e = {}) => {
      console.log(e.type, e.target);
    };

    const testAccordionAllOpen = () => {
      testAccordion.value.allOpen();
    };
    const testAccordionAllClose = () => {
      testAccordion.value.allClose();
    };

    return {
      state,
      layerTest001,
      layerTest002,
      layerTest003,
      layerTest004,
      layerTest005,
      testAccordion,
      layerOpenTest001,
      layerOpenTest002,
      layerOpenTest003,
      layerOpenTest004,
      layerOpenTest005,
      testErrorUpdate001,
      testInputEvent,
      testAccordionAllOpen,
      testAccordionAllClose,
    };
  },
};
</script>

<template>
  <div class="test-component-wrap">
    <h1 class="test-title">Components</h1>

    <section class="test-section">
      <h2 class="test-section-title">Layer</h2>
      <div class="test-section-sub">
        <UiLayer ref="layerTest001" v-slot="layerSlotProps">
          <ModalPopup>
            <template v-slot:head>
              <ModalPopupHead>
                <template v-slot:right>
                  <PopupButton @click="layerSlotProps.close()" />
                </template>
                <PopupTitle>타이틀</PopupTitle>
                <template v-slot:sub>
                  <PopupSubTitle>서브 타이틀</PopupSubTitle>
                </template>
              </ModalPopupHead>
            </template>

            <PopupText>// contents</PopupText>
            <PopupText>최대 높이 800px</PopupText>

            <BasicButton @click="layerOpenTest002">높이 고정 팝업</BasicButton>

            <div style="height: 1500px; border: 10px dotted #666">
              스크롤 생기게 하기 위한 더미
            </div>

            <template v-slot:foot>
              <ButtonList
                :wrap="true"
                align="center"
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton size="regular" :line="true" theme="quaternary"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton size="regular">Button 2</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </template>
          </ModalPopup>
        </UiLayer>

        <UiLayer ref="layerTest002" v-slot="layerSlotProps">
          <ModalPopup :fix="true">
            <template v-slot:head>
              <ModalPopupHead>
                <template v-slot:right>
                  <PopupButton @click="layerSlotProps.close()" />
                </template>
                <PopupTitle>타이틀</PopupTitle>
                <template v-slot:sub>
                  <PopupSubTitle>서브 타이틀</PopupSubTitle>
                </template>
              </ModalPopupHead>
            </template>

            <PopupText>// contents</PopupText>

            <BasicButton @click="layerOpenTest003">얼럿형 팝업</BasicButton>

            <template v-slot:foot>
              <ButtonList
                :wrap="true"
                align="center"
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton size="regular" :line="true" theme="quaternary"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton size="regular">Button 2</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </template>
          </ModalPopup>
        </UiLayer>

        <UiLayer ref="layerTest004" v-slot="layerSlotProps">
          <ModalPopup size="regular">
            <template v-slot:head>
              <ModalPopupHead>
                <template v-slot:right>
                  <PopupButton @click="layerSlotProps.close()" />
                </template>
                <PopupTitle>타이틀</PopupTitle>
                <template v-slot:sub>
                  <PopupSubTitle>서브 타이틀</PopupSubTitle>
                </template>
              </ModalPopupHead>
            </template>

            <PopupText>// contents</PopupText>
            <PopupText>너비 800px</PopupText>

            <div style="height: 1500px; border: 10px dotted #666">
              스크롤 생기게 하기 위한 더미
            </div>

            <template v-slot:foot>
              <ButtonList
                :wrap="true"
                align="center"
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton size="regular" :line="true" theme="quaternary"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton size="regular">Button 2</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </template>
          </ModalPopup>
        </UiLayer>

        <UiLayer ref="layerTest005" v-slot="layerSlotProps">
          <ModalPopup size="large">
            <template v-slot:head>
              <ModalPopupHead>
                <template v-slot:right>
                  <PopupButton @click="layerSlotProps.close()" />
                </template>
                <PopupTitle>타이틀</PopupTitle>
                <template v-slot:sub>
                  <PopupSubTitle>서브 타이틀</PopupSubTitle>
                </template>
              </ModalPopupHead>
            </template>

            <PopupText>// contents</PopupText>
            <PopupText>너비 1240px</PopupText>

            <div style="height: 1500px; border: 10px dotted #666">
              스크롤 생기게 하기 위한 더미
            </div>

            <template v-slot:foot>
              <ButtonList
                :wrap="true"
                align="center"
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton size="regular" :line="true" theme="quaternary"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton size="regular">Button 2</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </template>
          </ModalPopup>
        </UiLayer>

        <UiLayer ref="layerTest003" v-slot="layerSlotProps">
          <AlertPopup>
            <template v-slot:head>
              <PopupTitle>타이틀</PopupTitle>
            </template>

            <PopupText>// contents</PopupText>
            <PopupText>// contents</PopupText>

            <template v-slot:foot>
              <ButtonList
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton
                    size="regular"
                    :line="true"
                    theme="quaternary"
                    @click="layerSlotProps.close()"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton size="regular" @click="layerSlotProps.close()"
                    >Button 2</BasicButton
                  >
                </ButtonListItem>
              </ButtonList>
            </template>
          </AlertPopup>
        </UiLayer>

        <BasicButton @click="layerOpenTest001">모달 팝업</BasicButton>
        <BasicButton @click="layerOpenTest002"
          >모달 팝업 (높이 고정)</BasicButton
        >
        <BasicButton @click="layerOpenTest004"
          >모달 팝업 (너비 800)</BasicButton
        >
        <BasicButton @click="layerOpenTest005"
          >모달 팝업 (너비 1240)</BasicButton
        >
        <BasicButton @click="layerOpenTest003">얼럿형 팝업</BasicButton>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">BasicButton</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">button tag</h3>
        <BasicButton>Button</BasicButton>
        <BasicButton :disabled="true">Button</BasicButton>
        <BasicButton theme="secondary">Button</BasicButton>
        <BasicButton theme="secondary" :disabled="true">Button</BasicButton>
        <BasicButton theme="tertiary">Button</BasicButton>
        <BasicButton theme="tertiary" :disabled="true">Button</BasicButton>
        <BasicButton theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton theme="quaternary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>

        <BasicButton :line="true">Button</BasicButton>
        <BasicButton :line="true" :disabled="true">Button</BasicButton>
        <BasicButton :line="true" theme="secondary">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton :line="true" theme="secondary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton :line="true" theme="tertiary">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton :line="true" theme="tertiary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton :line="true" theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton :line="true" theme="quaternary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">a tag</h3>
        <BasicButton tagName="a">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="a" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton tagName="a" :line="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="a" :line="true" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Router Link</h3>
        <BasicButton tagName="RouterLink" to="/">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="RouterLink" to="/" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton tagName="RouterLink" to="/" :line="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton
          tagName="RouterLink"
          to="/"
          :line="true"
          disabledStyle="true"
        >
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">regular</h3>
        <BasicButton size="regular">Button</BasicButton>
        <BasicButton size="regular" :disabled="true">Button</BasicButton>
        <BasicButton tagName="a" size="regular">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="a" size="regular" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton size="regular" theme="secondary">Button</BasicButton>
        <BasicButton size="regular" theme="secondary" :disabled="true"
          >Button</BasicButton
        >
        <BasicButton size="regular" theme="tertiary">Button</BasicButton>
        <BasicButton size="regular" theme="tertiary" :disabled="true"
          >Button</BasicButton
        >
        <BasicButton size="regular" theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton size="regular" theme="quaternary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">small</h3>
        <BasicButton size="small">Button</BasicButton>
        <BasicButton size="small" :disabled="true">Button</BasicButton>
        <BasicButton tagName="a" size="small">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="a" size="small" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton size="small" theme="secondary">Button</BasicButton>
        <BasicButton size="small" theme="secondary" :disabled="true"
          >Button</BasicButton
        >
        <BasicButton size="small" theme="tertiary">Button</BasicButton>
        <BasicButton size="small" theme="tertiary" :disabled="true"
          >Button</BasicButton
        >
        <BasicButton size="small" theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton size="small" theme="quaternary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">inline style</h3>
        <BasicButton inline="true">Button</BasicButton>
        <BasicButton inline="true" :disabled="true">Button</BasicButton>
        <BasicButton tagName="a" inline="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton inline="true" size="mini">
          Button
          <template v-slot:rightIcon>
            <div :class="$style['loading-icon']"></div>
          </template>
        </BasicButton>
        <BasicButton tagName="a" inline="true" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" theme="secondary">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" theme="secondary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" theme="tertiary">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" theme="tertiary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton inline="true" theme="quaternary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">only icon</h3>
        <BasicButton inline="true" :line="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" :line="true" size="regular">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" :line="true" size="small">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" size="regular">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" size="small">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Button List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <ButtonList>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>

        <ButtonList>
          <ButtonListItem flex="none">
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Left</h3>
        <ButtonList align="left">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Center</h3>
        <ButtonList align="center">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Right</h3>
        <ButtonList align="right">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Full</h3>
        <ButtonList align="full">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 2</h3>
        <ButtonList :wrap="true">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 2</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 3</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 4</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 3</h3>
        <ButtonList :wrap="true" :col="3">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 2</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 3</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 4</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 5</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 4</h3>
        <ButtonList :wrap="true" :col="4">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 2</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 3</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 4</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Text Button</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <TextButton>Button</TextButton>
        <TextButton theme="secondary" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton theme="tertiary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
        <TextButton theme="quaternary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
        <TextButton theme="quinary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">a Tag</h3>
        <TextButton tagName="a" href="">Button</TextButton>
        <TextButton tagName="a" href="" theme="secondary" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton tagName="a" href="" theme="tertiary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Router Link</h3>
        <TextButton tagName="RouterLink" to="">Button</TextButton>
        <TextButton
          tagName="RouterLink"
          to=""
          theme="secondary"
          :iconFillAll="true"
        >
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton
          tagName="RouterLink"
          to=""
          theme="tertiary"
          :iconFillAll="true"
        >
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">underline</h3>
        <TextButton :underline="true">Button</TextButton>
        <TextButton theme="secondary" :underline="true" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton theme="tertiary" :underline="true" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">icon size regular</h3>
        <TextButton iconSize="regular" theme="secondary" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton iconSize="regular" theme="tertiary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">text size regular</h3>
        <TextButton textSize="regular" theme="secondary" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton textSize="regular" theme="tertiary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">block</h3>
        <TextButton :block="true">Button</TextButton>
        <TextButton theme="secondary" :block="true" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton theme="tertiary" :block="true" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Contents Button</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <ContentsButton>
          <h3 class="text-body-1 row-margin-small">타이틀</h3>
          <KeyValue align="left" margin="small" size="medium">
            <KeyValueItem :classNames="{ item: 'text-body-3 color-black' }">
              <KeyValueTitle>도로명</KeyValueTitle>
              <KeyValueText>인천 서구 에코로 181</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3 color-black' }">
              <KeyValueTitle>입력 주소</KeyValueTitle>
              <KeyValueText>하나금융그룹 로비</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </ContentsButton>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">CheckBox</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <CheckBox id="testCheckBox001" @change="testInputEvent">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox002"
          :defaultChecked="true"
          @change="testInputEvent"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox003" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox004" :disabled="true" :defaultChecked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Center</h3>
        <CheckBox id="testCheckBox005" align="center">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox006" align="center" :defaultChecked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox007" align="center" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox008"
          align="center"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Full</h3>
        <CheckBox id="testCheckBox009" :full="true">
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
          <CheckBoxObject />
        </CheckBox>
        <CheckBox id="testCheckBox010" :full="true" :defaultChecked="true">
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
          <CheckBoxObject />
        </CheckBox>
        <CheckBox id="testCheckBox011" :full="true" :disabled="true">
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
          <CheckBoxObject />
        </CheckBox>
        <CheckBox
          id="testCheckBox012"
          :full="true"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
          <CheckBoxObject />
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Only Object</h3>
        <CheckBox id="testCheckBox013" :onlyObject="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox014"
          :onlyObject="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox015" :onlyObject="true" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox016"
          :onlyObject="true"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">secondary</h3>
        <CheckBox id="testCheckBox017" theme="secondary">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox018" theme="secondary" :defaultChecked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox019" theme="secondary" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox020"
          theme="secondary"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">tertiary</h3>
        <CheckBox id="testCheckBox021" theme="tertiary">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox022" theme="tertiary" :defaultChecked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox023" theme="tertiary" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox024"
          theme="tertiary"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">quaternary</h3>
        <CheckBox id="testCheckBox025" theme="quaternary">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox026"
          theme="quaternary"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox027" theme="quaternary" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox028"
          theme="quaternary"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">quinary</h3>
        <CheckBox id="testCheckBox029" theme="quinary">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox030" theme="quinary" :defaultChecked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox031" theme="quinary" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox032"
          theme="quinary"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Form</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <button type="button" @click="testErrorUpdate001(true)">에러 On</button>
        <button type="button" @click="testErrorUpdate001(false)">
          에러 Off
        </button>

        <FormList>
          <FormListItem
            titleText="Label"
            titleOptionalText="Optional"
            :require="true"
            target="#testInput001"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <template v-slot:innerLeft>text</template>
                <InputBlockCell :flexible="true">
                  <BasicInput
                    id="testInput001"
                    @keyup="testInputEvent"
                    @focus="testInputEvent"
                    @blur="testInputEvent"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    :useDelete="false"
                    align="right"
                    @keyup="testInputEvent"
                    @focus="testInputEvent"
                    @blur="testInputEvent"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>text</template>
                <template v-slot:right>
                  <BasicButton size="small" theme="quaternary">
                    button
                  </BasicButton>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>Helper Text</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="Label"
            titleOptionalText="Optional"
            :require="true"
            target="#testInput002"
            :disabled="true"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    id="testInput002"
                    @keyup="testInputEvent"
                    @focus="testInputEvent"
                    @blur="testInputEvent"
                    value="value"
                    :disabled="true"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    :useDelete="false"
                    align="right"
                    @keyup="testInputEvent"
                    @focus="testInputEvent"
                    @blur="testInputEvent"
                    value="1234"
                    :readonly="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>Helper Text</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="인증번호"
            titleOptionalText="(6자리)"
            target="#testInput003"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="인증번호 (6자리)"
                    id="testInput003"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3 color-red">00:00</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="휴대폰번호" target="#testInput004">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell>
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: 'SKT',
                      },
                      {
                        value: '2',
                        label: 'KT',
                      },
                      {
                        value: '3',
                        label: 'LG U+',
                      },
                      {
                        value: '4',
                        label: '알뜰폰 SKT',
                      },
                      {
                        value: '5',
                        label: '알뜰폰 KT',
                      },
                      {
                        value: '6',
                        label: '알뜰폰 LG +',
                      },
                    ]"
                    title="통신사"
                    inputId="testInput004"
                    :classNames="{
                      wrap: 'input-width-telecom',
                    }"
                  />
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicInput type="number" pattern="\d*" title="휴대폰번호" />
                </InputBlockCell>
                <template v-slot:right>
                  <!-- Cass : 전송 전 -->
                  <BasicButton size="small" theme="quaternary">
                    인증번호 전송
                  </BasicButton>
                  <!-- Cass : 전송 전 -->

                  <!-- Cass : 전송 후
                  <BasicButton size="small" theme="quaternary">
                    인증번호 재전송
                  </BasicButton>
                  -->
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>본인명의의 휴대폰만 가능합니다.</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="생년월일"
            titleOptionalText="(6자리)"
            target="#testInput005"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="주민등록번호 앞 6자리"
                    id="testInput005"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <PartInput
                    type="number"
                    pattern="\d*"
                    title="주민등록번호 뒤 7자리 중 첫번째자리"
                    :afterDot="6"
                  />
                </InputBlockCell>
                <InputBlockCell>
                  <SecurityKeypadButton />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="주민등록번호" target="#testInput006">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="주민등록번호 앞 6자리"
                    id="testInput006"
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

          <FormListItem titleText="이름" target="#testInput007">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이름" id="testInput007" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대출기간"
            target="#testInput010"
            :selectOnly="true"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '3개월',
                      },
                      {
                        value: '2',
                        label: '6개월',
                      },
                      {
                        value: '3',
                        label: '12개월',
                      },
                      {
                        value: '4',
                        label: '24개월',
                      },
                      {
                        value: '5',
                        label: '36개월',
                      },
                      {
                        value: '6',
                        label: '48개월',
                      },
                      {
                        value: '7',
                        label: '60개월',
                      },
                      {
                        value: '8',
                        label: '72개월',
                      },
                      {
                        value: '9',
                        label: '84개월',
                      },
                      {
                        value: '10',
                        label: '96개월',
                      },
                      {
                        value: '11',
                        label: '108개월',
                      },
                      {
                        value: '12',
                        label: '120개월',
                      },
                    ]"
                    title="대출기간"
                    inputId="testInput010"
                    :selectable="
                      (option) => {
                        switch (option.value) {
                          case '3':
                          case '4':
                            return false;
                          default:
                            return true;
                        }
                      }
                    "
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대출기간"
            target="#testInput011"
            :selectOnly="true"
            :disabled="true"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '3개월',
                      },
                      {
                        value: '2',
                        label: '6개월',
                      },
                      {
                        value: '3',
                        label: '12개월',
                      },
                      {
                        value: '4',
                        label: '24개월',
                      },
                      {
                        value: '5',
                        label: '36개월',
                      },
                      {
                        value: '6',
                        label: '48개월',
                      },
                      {
                        value: '7',
                        label: '60개월',
                      },
                      {
                        value: '8',
                        label: '72개월',
                      },
                      {
                        value: '9',
                        label: '84개월',
                      },
                      {
                        value: '10',
                        label: '96개월',
                      },
                      {
                        value: '11',
                        label: '108개월',
                      },
                      {
                        value: '12',
                        label: '120개월',
                      },
                    ]"
                    title="대출기간"
                    inputId="testInput011"
                    defaultValue="4"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="인도 요청일" target="#testInput012Button">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="인도 요청일"
                    id="testInput012"
                    buttonId="testInput012Button"
                    :onChange="testInputEvent"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="조회기간" target="#testInput013StartButton">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="조회기간 시작 날짜"
                    id="testInput013Start"
                    buttonId="testInput013StartButton"
                    :max="state.testMaxDate001"
                    v-model="state.testMinDate001"
                    :onChange="testInputEvent"
                  />
                </InputBlockCell>
                <InputBlockCell margin="regular">~</InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicDatepicker
                    title="조회기간 종료 날짜"
                    id="testInput013End"
                    buttonId="testInput013EndButton"
                    :min="state.testMinDate001"
                    v-model="state.testMaxDate001"
                    :onChange="testInputEvent"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="조회기간" :forceFocus="true">
            <FormInvalid :error="state.testError001">
              <BoxCheckList :classNames="{ wrap: 'row-margin-contents-small' }">
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testInputCheck014"
                    id="testInputCheck014_001"
                  >
                    <BoxCheckLabel>1개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testInputCheck014"
                    id="testInputCheck014_002"
                  >
                    <BoxCheckLabel>3개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testInputCheck014"
                    id="testInputCheck014_003"
                  >
                    <BoxCheckLabel>6개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testInputCheck014"
                    id="testInputCheck014_004"
                  >
                    <BoxCheckLabel>1년</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="조회기간 시작 날짜"
                    id="testInput014Start"
                    buttonId="testInput014StartButton"
                    :max="state.testMaxDate002"
                    v-model="state.testMinDate002"
                    :onChange="testInputEvent"
                  />
                </InputBlockCell>
                <InputBlockCell margin="regular">~</InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicDatepicker
                    title="조회기간 종료 날짜"
                    id="testInput014End"
                    buttonId="testInput014EndButton"
                    :min="state.testMinDate002"
                    v-model="state.testMaxDate002"
                    :onChange="testInputEvent"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>조회기간은 최대 1년까지 가능해요.</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <BasicTextarea
            :error="state.testError001"
            titleText="Label"
            titleOptionalText="Optional"
            :require="true"
            :maxlength="150"
            :count="true"
            title="Label"
          >
            <template v-slot:bottom>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>Helper Text</FormHelpText>
            </template>
          </BasicTextarea>

          <BasicTextarea
            :error="state.testError001"
            titleText="Label"
            titleOptionalText="Optional"
            :require="true"
            :maxlength="150"
            :count="true"
            :disabled="true"
            title="Label"
          >
            <template v-slot:bottom>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>Helper Text</FormHelpText>
            </template>
          </BasicTextarea>
        </FormList>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Search</h3>

        <InputBlock>
          <InputBlockCell :flexible="true">
            <BasicInput
              type="search"
              title="아파트 검색어"
              placeholder="동(읍/면) 또는 아파트 이름 입력"
            />
          </InputBlockCell>
          <InputBlockCell type="search">
            <SearchButton />
          </InputBlockCell>
        </InputBlock>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">BoxCheck</h2>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">radio</h3>

        <BoxCheck name="testBoxCheck001" id="testBoxCheck001_001">
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
        <BoxCheck
          name="testBoxCheck001"
          id="testBoxCheck001_002"
          :defaultChecked="true"
        >
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
        <BoxCheck
          name="testBoxCheck002"
          id="testBoxCheck002_003"
          :disabled="true"
        >
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
        <BoxCheck
          name="testBoxCheck002"
          id="testBoxCheck002_004"
          :disabled="true"
          :defaultChecked="true"
        >
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">checkbox</h3>

        <BoxCheck type="checkbox" id="testBoxCheck003_001">
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
        <BoxCheck
          type="checkbox"
          id="testBoxCheck003_002"
          :defaultChecked="true"
        >
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
        <BoxCheck type="checkbox" id="testBoxCheck003_003" :disabled="true">
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
        <BoxCheck
          type="checkbox"
          id="testBoxCheck003_004"
          :disabled="true"
          :defaultChecked="true"
        >
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">contents - radio</h3>

        <BoxCheck
          :contents="true"
          name="testBoxCheck004"
          id="testBoxCheck004_001"
        >
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
        </BoxCheck>
        <BoxCheck
          :contents="true"
          name="testBoxCheck004"
          id="testBoxCheck004_002"
          :defaultChecked="true"
        >
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
        </BoxCheck>
        <BoxCheck
          :contents="true"
          name="testBoxCheck005"
          id="testBoxCheck005_003"
          :disabled="true"
        >
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
        </BoxCheck>
        <BoxCheck
          :contents="true"
          name="testBoxCheck005"
          id="testBoxCheck005_004"
          :disabled="true"
          :defaultChecked="true"
        >
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
          <template v-slot:right>
            <BoxCheckObject />
          </template>
        </BoxCheck>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">contents - checkbox</h3>

        <BoxCheck :contents="true" type="checkbox" id="testBoxCheck006_001">
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
        </BoxCheck>
        <BoxCheck
          :contents="true"
          type="checkbox"
          id="testBoxCheck006_002"
          :defaultChecked="true"
        >
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
        </BoxCheck>
        <BoxCheck
          :contents="true"
          type="checkbox"
          id="testBoxCheck006_003"
          :disabled="true"
        >
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
        </BoxCheck>
        <BoxCheck
          :contents="true"
          type="checkbox"
          id="testBoxCheck006_004"
          :disabled="true"
          :defaultChecked="true"
        >
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
          <template v-slot:right>
            <BoxCheckObject />
          </template>
        </BoxCheck>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">BoxCheckList</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <BoxCheckList>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList001"
              id="testBoxCheckList001_001"
            >
              <BoxCheckLabel>Label 1</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList001"
              id="testBoxCheckList001_002"
            >
              <BoxCheckLabel>Label 2</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList001"
              id="testBoxCheckList001_003"
            >
              <BoxCheckLabel>Label 3</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList001"
              id="testBoxCheckList001_004"
            >
              <BoxCheckLabel>Label 4</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Full</h3>

        <BoxCheckList align="full">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList002"
              id="testBoxCheckList002_001"
            >
              <BoxCheckLabel>Label 1</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList002"
              id="testBoxCheckList002_002"
            >
              <BoxCheckLabel>Label 2</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList002"
              id="testBoxCheckList002_003"
            >
              <BoxCheckLabel>Label 3</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList002"
              id="testBoxCheckList002_004"
            >
              <BoxCheckLabel>Label 4</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 2</h3>

        <BoxCheckList :wrap="true">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList003"
              id="testBoxCheckList003_001"
            >
              <BoxCheckLabel>Label 1</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList003"
              id="testBoxCheckList003_002"
            >
              <BoxCheckLabel>Label 2</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList003"
              id="testBoxCheckList003_003"
            >
              <BoxCheckLabel>Label 3</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList003"
              id="testBoxCheckList003_004"
            >
              <BoxCheckLabel>Label 4</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 3</h3>

        <BoxCheckList :wrap="true" :col="3">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList004"
              id="testBoxCheckList004_001"
            >
              <BoxCheckLabel>Label 1</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList004"
              id="testBoxCheckList004_002"
            >
              <BoxCheckLabel>Label 2</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList004"
              id="testBoxCheckList004_003"
            >
              <BoxCheckLabel>Label 3</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList004"
              id="testBoxCheckList004_004"
            >
              <BoxCheckLabel>Label 4</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 4</h3>

        <BoxCheckList :wrap="true" col="4">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList005"
              id="testBoxCheckList005_001"
            >
              <BoxCheckLabel>Label 1</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList005"
              id="testBoxCheckList005_002"
            >
              <BoxCheckLabel>Label 2</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList005"
              id="testBoxCheckList005_003"
            >
              <BoxCheckLabel>Label 3</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList005"
              id="testBoxCheckList005_004"
            >
              <BoxCheckLabel>Label 4</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList005"
              id="testBoxCheckList005_005"
            >
              <BoxCheckLabel>Label 4</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">StepProgress</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <StepProgress :total="4" :current="1" />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Agree List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['agree-list']">
          <ul :class="$style['agree-list__container']">
            <li :class="$style['agree-list__all']">
              <div :class="$style['agree-list__all-head']">
                <CheckBox
                  id="testagree001All"
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
                        id="testagree001_001"
                        :classNames="{
                          wrap: $style['agree-list__depth-checkbox'],
                        }"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText
                          >서비스 이용약관 전체동의</CheckBoxLabelText
                        >
                      </CheckBox>
                    </div>
                    <div :class="$style['agree-list__depth-contents']">
                      <ul :class="$style['agree-list__list']">
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="testagree001_001_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText
                                >온라인 서비스 이용약관</CheckBoxLabelText
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
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="testagree001_001_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText
                                >개인정보 필수적 수집 ·
                                이용동의</CheckBoxLabelText
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
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="testagree001_001_003"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText
                                >개인(신용)정보 제3자 제공 동의(SSO
                                서비스)</CheckBoxLabelText
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
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li :class="$style['agree-list__depth-item']">
                    <div :class="$style['agree-list__depth-head']">
                      <CheckBox
                        id="testagree001_002"
                        :classNames="{
                          wrap: $style['agree-list__depth-checkbox'],
                        }"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText
                          >하나캐피탈 멤버십 가입 필수 전체
                          동의(선택사항)</CheckBoxLabelText
                        >
                      </CheckBox>
                    </div>
                    <div :class="$style['agree-list__depth-contents']">
                      <ul :class="$style['agree-list__list']">
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="testagree001_002_001"
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
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="testagree001_002_002"
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
                                  id="testagree001_002_002_001"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >개인(신용)정보 필수적
                                    수집·이용</CheckBoxLabelText
                                  >
                                </CheckBox>
                                <div :class="$style['agree-list__right']">
                                  <button
                                    type="button"
                                    :class="$style['agree-list__link']"
                                  >
                                    <span
                                      :class="$style['agree-list__link-text']"
                                    >
                                      상세보기
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </li>
                            <li :class="$style['agree-list__item']">
                              <div :class="$style['agree-list__head']">
                                <CheckBox
                                  id="testagree001_002_002_002"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >고유식별번호 필수적
                                    수집·이용</CheckBoxLabelText
                                  >
                                </CheckBox>
                                <div :class="$style['agree-list__right']">
                                  <button
                                    type="button"
                                    :class="$style['agree-list__link']"
                                  >
                                    <span
                                      :class="$style['agree-list__link-text']"
                                    >
                                      상세보기
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="testagree001_002_003"
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
                                  id="testagree001_002_003_001"
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
                                <div :class="$style['agree-list__right']">
                                  <button
                                    type="button"
                                    :class="$style['agree-list__link']"
                                  >
                                    <span
                                      :class="$style['agree-list__link-text']"
                                    >
                                      상세보기
                                    </span>
                                  </button>
                                </div>
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
                        id="testagree001_003"
                        :classNames="{
                          wrap: $style['agree-list__depth-checkbox'],
                        }"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText
                          >하나캐피탈 멤버십 가입 선택 전체
                          동의(선택사항)</CheckBoxLabelText
                        >
                      </CheckBox>
                    </div>
                    <div :class="$style['agree-list__depth-contents']">
                      <ul :class="$style['agree-list__list']">
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="testagree001_003_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText
                                >개인(신용)정보 선택적 수집·이용
                                동의</CheckBoxLabelText
                              >
                            </CheckBox>
                            <div :class="$style['agree-list__right']">
                              <RoundStatus theme="quinary" :block="true">
                                보통
                              </RoundStatus>
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
                                  id="testagree001_003_002_001"
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
                                <div :class="$style['agree-list__right']">
                                  <button
                                    type="button"
                                    :class="$style['agree-list__link']"
                                  >
                                    <span
                                      :class="$style['agree-list__link-text']"
                                    >
                                      상세보기
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </li>
                            <li :class="$style['agree-list__item']">
                              <div :class="$style['agree-list__head']">
                                <CheckBox
                                  id="testagree001_003_002_002"
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
                                <div :class="$style['agree-list__right']">
                                  <button
                                    type="button"
                                    :class="$style['agree-list__link']"
                                  >
                                    <span
                                      :class="$style['agree-list__link-text']"
                                    >
                                      상세보기
                                    </span>
                                  </button>
                                </div>
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
                                      id="testagree001_003_002_002_001"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >전체</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                  </div>
                                </li>
                                <li :class="$style['agree-list__item']">
                                  <div :class="$style['agree-list__head']">
                                    <CheckBox
                                      id="testagree001_003_002_002_002"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >전화</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                  </div>
                                </li>
                                <li :class="$style['agree-list__item']">
                                  <div :class="$style['agree-list__head']">
                                    <CheckBox
                                      id="testagree001_003_002_002_003"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >문자메시지</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                  </div>
                                </li>
                                <li :class="$style['agree-list__item']">
                                  <div :class="$style['agree-list__head']">
                                    <CheckBox
                                      id="testagree001_003_002_002_004"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >우편</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                  </div>
                                </li>
                                <li :class="$style['agree-list__item']">
                                  <div :class="$style['agree-list__head']">
                                    <CheckBox
                                      id="testagree001_003_002_002_005"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >이메일</CheckBoxLabelText
                                      >
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
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Contents List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <UiAccordion
          tagName="ol"
          :classNames="{ wrap: $style['contents-list__list'] }"
        >
          <UiAccordionItem
            :classNames="{ item: $style['contents-list__item'] }"
          >
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">1</div>
              <div :class="$style['contents-list__title']">
                신규/추가대출 문의
              </div>
              <div :class="$style['contents-list__right']">
                <UiAccordionOpener
                  :classNames="{ button: $style['contents-list__opener'] }"
                />
              </div>
            </div>

            <UiAccordionLayer>
              <div :class="$style['contents-list__contents']">
                <ol
                  :class="[
                    $style['contents-list__list'],
                    $style['contents-list__list--secondary'],
                  ]"
                >
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">1</div>
                      <div :class="$style['contents-list__title']">
                        신용대출상담
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">2</div>
                      <div :class="$style['contents-list__title']">
                        자동차금융 상담
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">3</div>
                      <div :class="$style['contents-list__title']">
                        담보대출 상담
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">4</div>
                      <div :class="$style['contents-list__title']">
                        건설상용 상담
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">5</div>
                      <div :class="$style['contents-list__title']">
                        의료기 산업기계 상담
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">6</div>
                      <div :class="$style['contents-list__title']">
                        주식자금대출 상담
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">0</div>
                      <div :class="$style['contents-list__title']">
                        상담원 연결
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>
          <UiAccordionItem
            :classNames="{ item: $style['contents-list__item'] }"
          >
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">2</div>
              <div :class="$style['contents-list__title']">당사이용고객</div>
              <div :class="$style['contents-list__right']">
                <UiAccordionOpener
                  :classNames="{ button: $style['contents-list__opener'] }"
                />
              </div>
            </div>

            <UiAccordionLayer>
              <div :class="$style['contents-list__contents']">
                <UiAccordion
                  tagName="ol"
                  :classNames="{
                    wrap: [
                      $style['contents-list__list'],
                      $style['contents-list__list--secondary'],
                    ],
                  }"
                >
                  <UiAccordionItem
                    :classNames="{ item: $style['contents-list__item'] }"
                  >
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">1</div>
                      <div :class="$style['contents-list__title']">
                        기존 거래정보 확인
                      </div>
                      <div :class="$style['contents-list__right']">
                        <UiAccordionOpener
                          :classNames="{
                            button: $style['contents-list__opener'],
                          }"
                        />
                      </div>
                    </div>
                    <UiAccordionLayer>
                      <div :class="$style['contents-list__depth']">
                        <UiAccordion
                          tagName="ol"
                          :classNames="{
                            wrap: [
                              $style['contents-list__list'],
                              $style['contents-list__list--tertiary'],
                            ],
                          }"
                        >
                          <li :class="$style['contents-list__item']">
                            <div :class="$style['contents-list__head']">
                              <div :class="$style['contents-list__symbol']">
                                1
                              </div>
                              <div :class="$style['contents-list__title']">
                                당월결제금액
                              </div>
                            </div>
                          </li>
                          <li :class="$style['contents-list__item']">
                            <div :class="$style['contents-list__head']">
                              <div :class="$style['contents-list__symbol']">
                                2
                              </div>
                              <div :class="$style['contents-list__title']">
                                최근입금내역
                              </div>
                            </div>
                          </li>
                          <li :class="$style['contents-list__item']">
                            <div :class="$style['contents-list__head']">
                              <div :class="$style['contents-list__symbol']">
                                3
                              </div>
                              <div :class="$style['contents-list__title']">
                                중도상환안내
                              </div>
                            </div>
                          </li>
                          <li :class="$style['contents-list__item']">
                            <div :class="$style['contents-list__head']">
                              <div :class="$style['contents-list__symbol']">
                                4
                              </div>
                              <div :class="$style['contents-list__title']">
                                승계 및 연장문의
                              </div>
                            </div>
                          </li>
                          <UiAccordionItem
                            :classNames="{
                              item: $style['contents-list__item'],
                            }"
                          >
                            <div :class="$style['contents-list__head']">
                              <div :class="$style['contents-list__symbol']">
                                5
                              </div>
                              <div :class="$style['contents-list__title']">
                                하나멤버스 상담
                              </div>
                              <div :class="$style['contents-list__right']">
                                <UiAccordionOpener
                                  :classNames="{
                                    button: $style['contents-list__opener'],
                                  }"
                                />
                              </div>
                            </div>
                            <UiAccordionLayer>
                              <div :class="$style['contents-list__depth-2']">
                                <ol
                                  :class="[
                                    $style['contents-list__list'],
                                    $style['contents-list__list--quaternary'],
                                  ]"
                                >
                                  <li :class="$style['contents-list__item']">
                                    <div :class="$style['contents-list__head']">
                                      <div
                                        :class="$style['contents-list__symbol']"
                                      >
                                        1
                                      </div>
                                      <div
                                        :class="$style['contents-list__title']"
                                      >
                                        당사 하나멤버스 회원조회
                                      </div>
                                    </div>
                                  </li>
                                  <li :class="$style['contents-list__item']">
                                    <div :class="$style['contents-list__head']">
                                      <div
                                        :class="$style['contents-list__symbol']"
                                      >
                                        2
                                      </div>
                                      <div
                                        :class="$style['contents-list__title']"
                                      >
                                        하나멤버스 회원가입
                                      </div>
                                    </div>
                                  </li>
                                  <li :class="$style['contents-list__item']">
                                    <div :class="$style['contents-list__head']">
                                      <div
                                        :class="$style['contents-list__symbol']"
                                      >
                                        3
                                      </div>
                                      <div
                                        :class="$style['contents-list__title']"
                                      >
                                        관계사 연결
                                      </div>
                                    </div>
                                  </li>
                                  <li :class="$style['contents-list__item']">
                                    <div :class="$style['contents-list__head']">
                                      <div
                                        :class="$style['contents-list__symbol']"
                                      >
                                        0
                                      </div>
                                      <div
                                        :class="$style['contents-list__title']"
                                      >
                                        상담원 연결
                                      </div>
                                    </div>
                                  </li>
                                </ol>
                              </div>
                            </UiAccordionLayer>
                          </UiAccordionItem>
                        </UiAccordion>
                      </div>
                    </UiAccordionLayer>
                  </UiAccordionItem>
                  <UiAccordionItem
                    :classNames="{ item: $style['contents-list__item'] }"
                  >
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">0</div>
                      <div :class="$style['contents-list__title']">
                        상담원연결
                      </div>
                      <div :class="$style['contents-list__right']">
                        <UiAccordionOpener
                          :classNames="{
                            button: $style['contents-list__opener'],
                          }"
                        />
                      </div>
                    </div>
                    <UiAccordionLayer>
                      <div :class="$style['contents-list__depth']">
                        <ol
                          :class="[
                            $style['contents-list__list'],
                            $style['contents-list__list--tertiary'],
                          ]"
                        >
                          <li :class="$style['contents-list__item']">
                            <div :class="$style['contents-list__head']">
                              <div :class="$style['contents-list__symbol']">
                                1
                              </div>
                              <div :class="$style['contents-list__title']">
                                자동차금융 상담
                              </div>
                            </div>
                          </li>
                          <li :class="$style['contents-list__item']">
                            <div :class="$style['contents-list__head']">
                              <div :class="$style['contents-list__symbol']">
                                2
                              </div>
                              <div :class="$style['contents-list__title']">
                                개인금융 상담
                              </div>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </UiAccordionLayer>
                  </UiAccordionItem>
                </UiAccordion>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>
          <UiAccordionItem
            :classNames="{ item: $style['contents-list__item'] }"
          >
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">3</div>
              <div :class="$style['contents-list__title']">기타상담</div>
              <div :class="$style['contents-list__right']">
                <UiAccordionOpener
                  :classNames="{ button: $style['contents-list__opener'] }"
                />
              </div>
            </div>

            <UiAccordionLayer>
              <div :class="$style['contents-list__contents']">
                <ol
                  :class="[
                    $style['contents-list__list'],
                    $style['contents-list__list--secondary'],
                  ]"
                >
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">1</div>
                      <div :class="$style['contents-list__title']">
                        불법대출 및 보이스피싱
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">2</div>
                      <div :class="$style['contents-list__title']">
                        당사이용 고객이 아닌경우
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">3</div>
                      <div :class="$style['contents-list__title']">
                        상담원연결
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">0</div>
              <div :class="$style['contents-list__title']">상담원연결</div>
            </div>
          </li>
        </UiAccordion>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Contents</h3>
        <div :class="$style['contents-list']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--quinary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">1</div>
                <div :class="$style['contents-list__title']">
                  대출약정서 Set
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">2</div>
                <div :class="$style['contents-list__title']">인감증명서</div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">3</div>
                <div :class="$style['contents-list__title']">신분증 사본</div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">4</div>
                <div :class="$style['contents-list__title']">
                  자동이체결제 통장사본
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">5</div>
                <div :class="$style['contents-list__title']">
                  임대차계약서 사본
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  민영건설은 HUG(주택도시보증공사) 가입증 추가 첨부
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">6</div>
                <div :class="$style['contents-list__title']">
                  주민등록등/초본
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">7</div>
                <div :class="$style['contents-list__title']">
                  금융거래확인서
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  대환대출 시
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">8</div>
                <div :class="$style['contents-list__title']">
                  소득증빙서류 등
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Contents Square</h3>
        <div :class="$style['contents-list']">
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
                  PC에서 하나캐피탈 홈페이지<br />
                  <strong class="color-green font-weight-medium"
                    >‘인증센터 > 공동인증서 가져오기’</strong
                  >
                  에 접속해주세요.
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  (http://hanacapital.co.kr/cs/cert-center.hnc)
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">2</div>
                <div :class="$style['contents-list__title']">
                  ‘공동인증서 가져오기‘ 버튼을 선택하여 App에 표시된 인증번호
                  8자리를 입력해주세요.
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">3</div>
                <div :class="$style['contents-list__title']">
                  ‘공동인증서 가져오기’ 버튼을 선택하시면 PC로 인증서 내보내기가
                  완료됩니다.
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">RoundStatus</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <RoundStatus>텍스트</RoundStatus>
        <RoundStatus theme="secondary">텍스트</RoundStatus>
        <RoundStatus theme="tertiary">텍스트</RoundStatus>
        <RoundStatus theme="quaternary">텍스트</RoundStatus>
        <RoundStatus theme="quinary">텍스트</RoundStatus>
        <RoundStatus theme="senary">텍스트</RoundStatus>
        <RoundStatus theme="septenary">텍스트</RoundStatus>
        <RoundStatus theme="octonary">텍스트</RoundStatus>
        <RoundStatus theme="nonary">텍스트</RoundStatus>
        <RoundStatus theme="denary">텍스트</RoundStatus>
        <RoundStatus theme="undenary">텍스트</RoundStatus>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Size - Large</h3>
        <RoundStatus size="large">텍스트</RoundStatus>
        <RoundStatus theme="secondary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="tertiary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="quaternary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="quinary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="senary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="septenary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="octonary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="nonary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="denary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="undenary" size="large">텍스트</RoundStatus>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Block</h3>
        <RoundStatus :block="true">텍스트</RoundStatus>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Icon Box</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <BasicBox>
          <div :class="$style['icon-box']">
            <div :class="$style['icon-box__icon']">
              <IconStar />
            </div>
            <p
              :class="[
                $style['icon-box__content'],
                'text-title-1',
                'row-margin-item',
              ]"
            >
              <span class="color-green font-weight-bold">하나프라자</span>님은
              하나캐피탈에 등록된<br />
              <span class="font-weight-bold">정식 모집인</span>입니다
            </p>
          </div>
        </BasicBox>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Step Box</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['step']">
          <ul :class="$style['step__list']">
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 1</div>
                  <p :class="$style['step__text']">
                    홈페이지/모바일(웹)을 통하여
                    <strong>재리스 신청 및 견적</strong>을 요청합니다.
                    (신용조회동의)
                  </p>
                </div>
                <div :class="$style['step__icon']">
                  <IconPhone />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 2</div>
                  <p :class="$style['step__text']">
                    신청내역을 확인하여
                    <strong>심사결과를 안내</strong>드립니다.
                  </p>
                </div>
                <div :class="$style['step__icon']">
                  <IconSend />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 3</div>
                  <p :class="$style['step__text']">
                    <strong>서면약정 또는 온라인약정</strong>으로 계약이
                    진행됩니다.
                  </p>
                </div>
                <div :class="$style['step__icon']">
                  <IconPersonalTerms />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 4</div>
                  <p :class="$style['step__text']">
                    입금/지급 <strong>금액을 정산</strong>합니다.
                  </p>
                </div>
                <div :class="$style['step__icon']">
                  <IconDeposit />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 5</div>
                  <p :class="$style['step__text']">
                    계약사항에 대해
                    <strong>이해하였음을 유선상 확인</strong>합니다.
                  </p>
                </div>
                <div :class="$style['step__icon']">
                  <IconCallMint />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 6</div>
                  <p :class="$style['step__text']">
                    <strong>재렌트가 완료</strong>됩니다.
                  </p>
                </div>
                <div :class="$style['step__icon']">
                  <IconCompleted />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 1</div>
                  <p :class="$style['step__text']">
                    <strong>재렌트가 완료</strong>됩니다.
                  </p>
                </div>
                <div :class="$style['step__icon']">
                  <IconContract />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 1</div>
                  <p :class="$style['step__text']">
                    <strong>재렌트가 완료</strong>됩니다.
                  </p>
                </div>
                <div :class="$style['step__icon']">
                  <IconCarCheck />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 1</div>
                  <p :class="$style['step__text']">
                    <strong>재렌트가 완료</strong>됩니다.
                  </p>
                </div>
                <div :class="$style['step__icon']">
                  <IconCar />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 1</div>
                  <p :class="$style['step__text']">
                    <strong>재렌트가 완료</strong>됩니다.
                  </p>
                </div>
                <div :class="$style['step__icon']">
                  <IconDocumentSearch />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Basic List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <ul :class="$style['basic-list']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              법인카드, 가족카드, 선불카드는 본인확인이 불가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-black']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-green']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
        </ul>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Text Symbol</h3>

        <ol :class="$style['basic-list']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']">1.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']">2.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-black']">
            <div :class="$style['basic-list__symbol']">4.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-green']">
            <div :class="$style['basic-list__symbol']">5.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red']">
            <div :class="$style['basic-list__symbol']">6.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
        </ol>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Regular</h3>

        <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              법인카드, 가족카드, 선불카드는 본인확인이 불가능합니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-green', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red', 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
        </ul>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">regular margin (12px)</h3>
        <ul
          :class="[$style['basic-list'], $style['basic-list--regular-margin']]"
        >
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              법인카드, 가족카드, 선불카드는 본인확인이 불가능합니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-green', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red', 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Notice Text</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <NoticeText>Text Text Text Text Text</NoticeText>
        <NoticeText :classNames="{ wrap: 'color-black' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText :classNames="{ wrap: 'color-green' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText :classNames="{ wrap: 'color-red' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText :classNames="{ wrap: 'color-navy' }">
          Text Text Text Text Text
        </NoticeText>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">check</h3>
        <NoticeText type="check">Text Text Text Text Text</NoticeText>
        <NoticeText type="check" :classNames="{ wrap: 'color-black' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText type="check" :classNames="{ wrap: 'color-green' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText type="check" :classNames="{ wrap: 'color-red' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText type="check" :classNames="{ wrap: 'color-navy' }">
          Text Text Text Text Text
        </NoticeText>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Tab Base</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <UiTab v-slot="tabSlotProps" initialOpen="testTab001_003">
          <UiTabList>
            <UiTabButton link="testTab001_001">Tab 1</UiTabButton>
            <UiTabButton link="testTab001_002">Tab 2</UiTabButton>
            <UiTabButton link="testTab001_003">Tab 3</UiTabButton>
            <UiTabButton link="testTab001_004">Tab 4</UiTabButton>
          </UiTabList>

          <p>Active : {{ tabSlotProps.activeName }}</p>

          <UiTabPanel name="testTab001_001">// Tab 1 Contents</UiTabPanel>

          <UiTabPanel name="testTab001_002">// Tab 2 Contents</UiTabPanel>

          <UiTabPanel name="testTab001_003">// Tab 3 Contents</UiTabPanel>

          <UiTabPanel name="testTab001_004">// Tab 4 Contents</UiTabPanel>
        </UiTab>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Nav Tab</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Tab Base 이용시</h3>

        <UiTab v-slot="tabSlotProps">
          <NavTab :useUiTab="true">
            <NavTabButton link="testNavTab001_001">Tab 1</NavTabButton>
            <NavTabButton link="testNavTab001_002">Tab 2</NavTabButton>
            <NavTabButton link="testNavTab001_003">Tab 3</NavTabButton>
            <NavTabButton link="testNavTab001_004">Tab 4</NavTabButton>
          </NavTab>

          <p>Active : {{ tabSlotProps.activeName }}</p>

          <UiTabPanel name="testNavTab001_001">// Tab 1 Contents</UiTabPanel>

          <UiTabPanel name="testNavTab001_002">// Tab 2 Contents</UiTabPanel>

          <UiTabPanel name="testNavTab001_003">// Tab 3 Contents</UiTabPanel>

          <UiTabPanel name="testNavTab001_004">// Tab 4 Contents</UiTabPanel>
        </UiTab>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">
          탭 기능 없이 단순 링크이거나 버튼 일 때
        </h3>

        <NavTab>
          <NavTabButton tagName="RouterLink" to="" :active="true">
            Tab 1
          </NavTabButton>
          <NavTabButton tagName="RouterLink" to="">Tab 2</NavTabButton>

          <NavTabButton tagName="a" href="" :active="true">
            Tab 3
          </NavTabButton>
          <NavTabButton tagName="a" href="">Tab 4</NavTabButton>

          <NavTabButton tagName="button" type="button" :active="true">
            Tab 5
          </NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 6</NavTabButton>
        </NavTab>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">auto</h3>

        <NavTab :auto="true">
          <NavTabButton tagName="button" type="button">Tab 1</NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 2</NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 3</NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 4</NavTabButton>
          <NavTabButton tagName="button" type="button" :active="true">
            Tab 5
          </NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 6</NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 7</NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 8</NavTabButton>
        </NavTab>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Type Popup</h3>

        <NavTab type="popup">
          <NavTabButton tagName="button" type="button">Tab 1</NavTabButton>
          <NavTabButton tagName="button" type="button" :active="true">
            Tab 2
          </NavTabButton>
        </NavTab>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Type Popup Head</h3>

        <NavTab type="popup-head">
          <NavTabButton tagName="button" type="button">Tab 1</NavTabButton>
          <NavTabButton tagName="button" type="button" :active="true">
            Tab 2
          </NavTabButton>
        </NavTab>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Accordion Base</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <button type="button" @click="testAccordionAllOpen">모두 열기</button>
        <button type="button" @click="testAccordionAllClose">모두 닫기</button>

        <UiAccordion ref="testAccordion">
          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps" :initialOpen="true">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Once</h3>

        <UiAccordion :once="true">
          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">hr</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <BasicHr className="row-margin-contents" />
        <BasicHr theme="secondary" className="row-margin-contents" />
        <BasicHr theme="tertiary" className="row-margin-contents" />
        <BasicHr theme="quaternary" className="row-margin-contents" />
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Popup</h3>
        <BasicHr type="popup" className="row-margin-contents" />
        <BasicHr
          theme="secondary"
          type="popup"
          className="row-margin-contents"
        />
        <BasicHr
          theme="tertiary"
          type="popup"
          className="row-margin-contents"
        />
        <BasicHr
          theme="quaternary"
          type="popup"
          className="row-margin-contents"
        />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Box</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <BasicBox>// contnets</BasicBox>
        <BasicBox theme="secondary">// contnets</BasicBox>
        <BasicBox theme="tertiary">// contnets</BasicBox>
        <!--
        <BasicBox theme="quaternary">// contnets</BasicBox>
        <BasicBox theme="quinary">// contnets</BasicBox>
        <BasicBox theme="senary">// contnets</BasicBox>
        -->
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Box Head</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">오토리스 20고5678</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">BMW 435d</div>
                  </li>
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </BasicBoxHeadLeft>
            <BasicBoxHeadRight>
              <RoundStatus
                theme="secondary"
                size="large"
                :classNames="{ wrap: 'display-block' }"
              >
                정상
              </RoundStatus>
            </BasicBoxHeadRight>
          </BasicBoxHead>
          // contents
        </BasicBox>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Key Value Text</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <KeyValue>
          <KeyValueItem>
            <KeyValueTitle>차량명의</KeyValueTitle>
            <KeyValueText>
              본인명의(공동명의 제외)<br />
              소유기간 3개월 이상
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>소유차종</KeyValueTitle>
            <KeyValueText>국산/수입 승용, RV, 승합</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>차량연식</KeyValueTitle>
            <KeyValueText>
              출고 이후 10년 이내<br />
              차량가격 500만원 이상<br />
              (당사 차량 시세 가격 기준)
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">align left</h3>
        <KeyValue align="left">
          <KeyValueItem>
            <KeyValueTitle>제목</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>제목</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <h3 class="test-section-sub-title row-margin-item-group">
          align left (title width size: small)
        </h3>
        <KeyValue align="left" size="small">
          <KeyValueItem>
            <KeyValueTitle>제목</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>제목</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <h3 class="test-section-sub-title row-margin-item-group">
          align left (title width size: regular)
        </h3>
        <KeyValue align="left" size="regular">
          <KeyValueItem>
            <KeyValueTitle>타이틀</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>타이틀</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <h3 class="test-section-sub-title row-margin-item-group">
          align left (title width size: medium)
        </h3>
        <KeyValue align="left" size="medium">
          <KeyValueItem>
            <KeyValueTitle>타이틀</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>타이틀</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">vertical align : center</h3>
        <KeyValue verticalAlign="center">
          <KeyValueItem>
            <KeyValueTitle>차량연식</KeyValueTitle>
            <KeyValueText>
              출고 이후 10년 이내<br />
              차량가격 500만원 이상<br />
              (당사 차량 시세 가격 기준)
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Vertical</h3>
        <KeyValue direction="vertical">
          <KeyValueItem>
            <KeyValueTitle>차량명의</KeyValueTitle>
            <KeyValueText>
              본인명의(공동명의 제외)<br />
              소유기간 3개월 이상
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>소유차종</KeyValueTitle>
            <KeyValueText>국산/수입 승용, RV, 승합</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>차량연식</KeyValueTitle>
            <KeyValueText>
              출고 이후 10년 이내<br />
              차량가격 500만원 이상<br />
              (당사 차량 시세 가격 기준)
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">wrap - col 2</h3>
        <KeyValue :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>차량명의</KeyValueTitle>
            <KeyValueText>
              본인명의(공동명의 제외)<br />
              소유기간 3개월 이상
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>소유차종</KeyValueTitle>
            <KeyValueText>국산/수입 승용, RV, 승합</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>차량연식</KeyValueTitle>
            <KeyValueText>
              출고 이후 10년 이내<br />
              차량가격 500만원 이상<br />
              (당사 차량 시세 가격 기준)
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">margin small</h3>
        <KeyValue margin="small">
          <KeyValueItem>
            <KeyValueTitle>차량명의</KeyValueTitle>
            <KeyValueText>
              본인명의(공동명의 제외)<br />
              소유기간 3개월 이상
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>소유차종</KeyValueTitle>
            <KeyValueText>국산/수입 승용, RV, 승합</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>차량연식</KeyValueTitle>
            <KeyValueText>
              출고 이후 10년 이내<br />
              차량가격 500만원 이상<br />
              (당사 차량 시세 가격 기준)
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">margin regular</h3>
        <KeyValue margin="regular">
          <KeyValueItem>
            <KeyValueTitle>차량명의</KeyValueTitle>
            <KeyValueText>
              본인명의(공동명의 제외)<br />
              소유기간 3개월 이상
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>소유차종</KeyValueTitle>
            <KeyValueText>국산/수입 승용, RV, 승합</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>차량연식</KeyValueTitle>
            <KeyValueText>
              출고 이후 10년 이내<br />
              차량가격 500만원 이상<br />
              (당사 차량 시세 가격 기준)
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">division info</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['division-info']">
          <ul :class="$style['division-info__list']">
            <li :class="$style['division-info__item']">
              <div class="text-body-4 font-weight-light">2023.01.10</div>
            </li>
            <li :class="$style['division-info__item']">
              <div class="color-green text-body-4 font-weight-medium">
                신용동의
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Empty</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['empty']">
          <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Notice section</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <section :class="$style['notice-section']">
          <h3 :class="$style['notice-section__title']">공동인증서 등록</h3>
          <ul :class="$style['basic-list']">
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                개인/개인사업자 회원은 공동인증서 로그인을 위해 아이디에
                공동인증서를 등록해야 합니다. (법인 회원은 별도 등록이 필요하지
                않습니다.)
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                아이디에 등록했던 공동인증서를 삭제합니다. 공동인증서를 삭제할
                경우 로그인을 위해 공동인증서를 다시 등록해야 합니다.
              </div>
            </li>
          </ul>
        </section>
        <section :class="$style['notice-section']">
          <h3 :class="$style['notice-section__title']">공동인증서 삭제</h3>
          <ul :class="$style['basic-list']">
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                개인/개인사업자 회원은 공동인증서 로그인을 위해 아이디에
                공동인증서를 등록해야 합니다. (법인 회원은 별도 등록이 필요하지
                않습니다.)
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                아이디에 등록했던 공동인증서를 삭제합니다. 공동인증서를 삭제할
                경우 로그인을 위해 공동인증서를 다시 등록해야 합니다.
              </div>
            </li>
          </ul>
        </section>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Address List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <ul :class="$style['address-list']">
          <li v-for="i in 3" :key="i" :class="$style['address-list__item']">
            <div :class="$style['address-list__block']">
              <div :class="$style['address-list__title']">16997</div>
              <KeyValue align="left" margin="small" size="regular">
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>도로명</KeyValueTitle>
                  <KeyValueText
                    >인천 서구 에코로 181 하나금융그룹데이터센터</KeyValueText
                  >
                </KeyValueItem>

                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>지번</KeyValueTitle>
                  <KeyValueText>인천 서구 청라동 7-5</KeyValueText>
                </KeyValueItem>
              </KeyValue>
              <button type="button" :class="$style['address-list__button']">
                <span class="for-a11y">선택</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Contents Button</h3>
        <ul :class="[$style['address-list'], $style['address-list--select']]">
          <li :class="$style['address-list__item']">
            <ContentsButton>
              <div :class="$style['address-list__block']">
                <div :class="$style['address-list__title']">16997</div>
                <KeyValue align="left" margin="small" size="medium">
                  <KeyValueItem
                    :classNames="{ item: 'text-body-3 color-black' }"
                  >
                    <KeyValueTitle>도로명</KeyValueTitle>
                    <KeyValueText>인천 서구 에코로 181</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{ item: 'text-body-3 color-black' }"
                  >
                    <KeyValueTitle>입력 주소</KeyValueTitle>
                    <KeyValueText>하나금융그룹 로비</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </ContentsButton>
          </li>
          <li :class="$style['address-list__item']">
            <ContentsButton>
              <div :class="$style['address-list__block']">
                <div :class="$style['address-list__title']">16997</div>
                <KeyValue align="left" margin="small" size="medium">
                  <KeyValueItem
                    :classNames="{ item: 'text-body-3 color-black' }"
                  >
                    <KeyValueTitle>지번</KeyValueTitle>
                    <KeyValueText>인천 서구 청라동 7-5</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{ item: 'text-body-3 color-black' }"
                  >
                    <KeyValueTitle>입력 주소</KeyValueTitle>
                    <KeyValueText>하나금융그룹 로비</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </ContentsButton>
          </li>
        </ul>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Illust Object</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <IllustObject />
        <IllustObject type="complete" />
        <IllustObject type="error" />
        <IllustObject type="fail" />
        <IllustObject type="license" />
        <IllustObject type="certification" />
        <IllustObject type="appfree" />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Illust Info</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <IllustInfo>
          <IllustObject type="fail" />
          <IllustInfoTitle>
            만기연장 신청 대상이 아닙니다<br />
            잔여 회차를 확인해 주세요
          </IllustInfoTitle>
          <IllustInfoText>
            <strong>하나캐피탈 스탁론</strong>에<br />
            관심을 가져주셔서 감사합니다.
          </IllustInfoText>
        </IllustInfo>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Icon List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['icon-list']">
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <button type="button" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']"><IconPerson /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']"
                    >개인 (개인사업자)</span
                  >
                </span>
              </button>
            </li>
            <li :class="$style['icon-list__item']">
              <button type="button" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']"><IconBuilding /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']">법인</span>
                </span>
              </button>
            </li>
            <li :class="$style['icon-list__item']">
              <div :class="$style['icon-list__block']">
                <div :class="$style['icon-list__icon']"><IconCustomer /></div>
                <div :class="$style['icon-list__content']">
                  <div :class="$style['icon-list__title']">
                    고객센터 1800-1110
                  </div>
                  <div :class="$style['icon-list__text']">
                    평일 09:00 ~ 18:00
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Product Detail Icon List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['product-detail']">
          <ul :class="$style['product-detail__list']">
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconSearchMoney />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">대출가능금액</div>
                <div :class="$style['product-detail__desc']">
                  <UnitText size="regular" rightUnit="만원">20,000</UnitText>
                </div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconInterestRate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">대출금리</div>
                <div :class="$style['product-detail__desc']">
                  <UnitText size="regular" rightUnit="%">13.2</UnitText>
                  <div :class="$style['product-detail__desc-sub']">
                    (36개월 기준)
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Join</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['join']">
          <div :class="$style['join__inner']">
            <div :class="$style['join__icon']"><IconLogo /></div>
            <div :class="$style['join__title']">앱에서 가입하셨나요?</div>
            <TextButton
              :block="true"
              :classNames="{
                wrap: [$style['join__link'], 'color-gray-tertiary'],
              }"
            >
              앱회원 가입
              <template v-slot:rightIcon>
                <IconLink />
              </template>
            </TextButton>
          </div>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">PaginationNav</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <!-- Case : 첫번째 페이지일 때 -->
        <PaginationNav>
          <PaginationNavArrow type="prev" :disabled="true" />
          <PaginationNavNumber :active="true">1</PaginationNavNumber>
          <PaginationNavNumber>2</PaginationNavNumber>
          <PaginationNavNumber>3</PaginationNavNumber>
          <PaginationNavNumber>4</PaginationNavNumber>
          <PaginationNavNumber>5</PaginationNavNumber>
          <PaginationNavNumber>6</PaginationNavNumber>
          <PaginationNavNumber>7</PaginationNavNumber>
          <PaginationNavEllipsis />
          <PaginationNavNumber>999</PaginationNavNumber>
          <PaginationNavArrow type="next" />
        </PaginationNav>
        <!-- // Case : 첫번째 페이지일 때 -->

        <!-- Case : 중간 페이지일 때 -->
        <PaginationNav>
          <PaginationNavArrow type="prev" />
          <PaginationNavNumber>1</PaginationNavNumber>
          <PaginationNavEllipsis />
          <PaginationNavNumber>13</PaginationNavNumber>
          <PaginationNavNumber>14</PaginationNavNumber>
          <PaginationNavNumber :active="true">15</PaginationNavNumber>
          <PaginationNavNumber>16</PaginationNavNumber>
          <PaginationNavNumber>17</PaginationNavNumber>
          <PaginationNavEllipsis />
          <PaginationNavNumber>99</PaginationNavNumber>
          <PaginationNavArrow type="next" />
        </PaginationNav>
        <!-- // Case : 중간 페이지일 때 -->

        <!-- Case : 마지막 페이지일 때 -->
        <PaginationNav>
          <PaginationNavArrow type="prev" />
          <PaginationNavNumber>1</PaginationNavNumber>
          <PaginationNavEllipsis />
          <PaginationNavNumber>93</PaginationNavNumber>
          <PaginationNavNumber>94</PaginationNavNumber>
          <PaginationNavNumber>95</PaginationNavNumber>
          <PaginationNavNumber>96</PaginationNavNumber>
          <PaginationNavNumber>97</PaginationNavNumber>
          <PaginationNavNumber>98</PaginationNavNumber>
          <PaginationNavNumber :active="true">99</PaginationNavNumber>
          <PaginationNavArrow type="next" :disabled="true" />
        </PaginationNav>
        <!-- // Case : 마지막 페이지일 때 -->
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Popup</h3>

        <!-- Pagination -->
        <PaginationNav>
          <PaginationNavArrow type="prev" :disabled="true" />
          <PaginationNavNumber :active="true">1</PaginationNavNumber>
          <PaginationNavNumber>2</PaginationNavNumber>
          <PaginationNavNumber>3</PaginationNavNumber>
          <PaginationNavNumber>4</PaginationNavNumber>
          <PaginationNavNumber>5</PaginationNavNumber>
          <PaginationNavArrow type="next" />
        </PaginationNav>
        <!-- // Pagination -->
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">UnitText</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <UnitText leftUnit="$">333,389</UnitText>
        <UnitText rightUnit="원">333,389</UnitText>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">align right</h3>

        <UnitText leftUnit="$" align="right">333,389</UnitText>
        <UnitText rightUnit="원" align="right">333,389</UnitText>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">vertical align center</h3>

        <UnitText verticalAlign="center" leftUnit="$">333,389</UnitText>
        <UnitText verticalAlign="center" rightUnit="원">333,389</UnitText>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Regular</h3>

        <UnitText size="regular" leftUnit="$">333,389</UnitText>
        <UnitText size="regular" rightUnit="원">333,389</UnitText>
      </div>

      <!--
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Large</h3>

        <UnitText size="large" verticalAlign="center" leftUnit="$"
          >333,389</UnitText
        >
        <UnitText size="large" verticalAlign="center" rightUnit="원"
          >333,389</UnitText
        >
      </div>
      -->
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Table</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <!-- table -->
        <div :class="$style['basic-table']">
          <table>
            <colgroup>
              <col style="width: 120px" />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>월</th>
                <th>방문자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>합계</td>
                <td>1</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <!-- // table -->
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">image view</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['image-view']">
          <img src="@/assets/images/_dummy/box-detail.png" alt="샘플 이미지" />
        </div>
      </div>
    </section>

    <section class="test-section">
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Small</h3>

        <div :class="$style['image-view']">
          <img
            src="@/assets/images/_dummy/box-detail-small.png"
            alt="샘플 이미지"
          />
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Search List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <ul :class="$style['search-list']">
          <li :class="$style['search-list__item']">
            <button type="button" :class="$style['search-list__link']">
              <span :class="$style['search-list__text']">
                서울특별시 강남구 <mark>역삼동</mark> 자자<mark>자이</mark>
              </span>
            </button>
          </li>
          <li :class="$style['search-list__item']">
            <button type="button" :class="$style['search-list__link']">
              <span :class="$style['search-list__text']">
                서울특별시 강남구 <mark>역삼동</mark> 자자<mark>자이</mark>
              </span>
            </button>
          </li>
          <li :class="$style['search-list__item']">
            <button type="button" :class="$style['search-list__link']">
              <span :class="$style['search-list__text']">
                서울특별시 강남구 <mark>역삼동</mark> 자자<mark>자이</mark>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Bank Logo List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <KeyValue align="left" margin="regular">
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="004" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">국민</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="011" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">농협</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="020" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">우리</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="081" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">하나</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="088" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">신한</div>
              </div>
            </KeyValueTitle>
            <KeyValueText>123-456-78901234-1234567890-12345</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 2</h3>

        <KeyValue align="left" :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="004" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">국민</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="011" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">농협</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="020" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">우리</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="081" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">하나</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="088" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">신한</div>
              </div>
            </KeyValueTitle>
            <KeyValueText>123-456-78901234-1234567890-12345</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>
    </section>
    <section class="test-section">
      <h2 class="test-section-title">Term List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <UiAccordion :classNames="{ wrap: $style['term-list__list'] }">
          <li :class="$style['term-list__item']">
            <div :class="$style['term-list__head']">
              <div :class="$style['term-list__title']">
                온라인 서비스 이용약관
              </div>
              <div :class="$style['term-list__right']">
                <button type="button" :class="$style['term-list__link']">
                  <span :class="$style['term-list__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </li>

          <li :class="$style['term-list__item']">
            <div :class="$style['term-list__head']">
              <div :class="$style['term-list__title']">
                <CheckBox id="testCheckBox123321" theme="tertiary">
                  <CheckBoxObject />
                  <CheckBoxLabelText>재고금융 확약서</CheckBoxLabelText>
                </CheckBox>
              </div>
              <div :class="$style['term-list__right']">
                <button type="button" :class="$style['term-list__link']">
                  <span :class="$style['term-list__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </li>

          <UiAccordionItem
            :classNames="{ item: $style['term-list__item'] }"
            :initialOpen="true"
          >
            <div :class="$style['term-list__head']">
              <div :class="$style['term-list__title']">휴대폰 인증약관</div>
              <div :class="$style['term-list__right']">
                <UiAccordionOpener
                  :classNames="{ button: $style['term-list__opener'] }"
                />
              </div>
            </div>

            <UiAccordionLayer>
              <div :class="$style['term-list__contents']">
                <ul
                  :class="[
                    $style['term-list__list'],
                    $style['term-list__list--secondary'],
                  ]"
                >
                  <li :class="$style['term-list__item']">
                    <div :class="$style['term-list__head']">
                      <div :class="$style['term-list__title']">
                        본인확인 이용약관
                      </div>
                      <div :class="$style['term-list__right']">
                        <button
                          type="button"
                          :class="$style['term-list__link']"
                        >
                          <span :class="$style['term-list__link-text']">
                            상세보기
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li :class="$style['term-list__item']">
                    <div :class="$style['term-list__head']">
                      <div :class="$style['term-list__title']">
                        개인정보 수집·이용, 취급위탁 동의
                      </div>
                      <div :class="$style['term-list__right']">
                        <button
                          type="button"
                          :class="$style['term-list__link']"
                        >
                          <span :class="$style['term-list__link-text']">
                            상세보기
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li :class="$style['term-list__item']">
                    <div :class="$style['term-list__head']">
                      <div :class="$style['term-list__title']">
                        통신사 본인확인 이용약관 동의
                      </div>
                      <div :class="$style['term-list__right']">
                        <button
                          type="button"
                          :class="$style['term-list__link']"
                        >
                          <span :class="$style['term-list__link-text']">
                            상세보기
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li :class="$style['term-list__item']">
                    <div :class="$style['term-list__head']">
                      <div :class="$style['term-list__title']">
                        고유식별정보 처리 동의
                      </div>
                      <div :class="$style['term-list__right']">
                        <button
                          type="button"
                          :class="$style['term-list__link']"
                        >
                          <span :class="$style['term-list__link-text']">
                            상세보기
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">status-inquiry</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <!-- status-inquiry -->
        <ul :class="$style['status-inquiry']">
          <li :class="$style['status-inquiry__item']">
            <button
              type="button"
              :class="[
                $style['status-inquiry__category'],
                $style['status-inquiry__category--active'],
              ]"
            >
              <span :class="$style['status-inquiry__number']">10</span>
              <span :class="$style['status-inquiry__text']">전체</span>
            </button>
          </li>
          <li :class="$style['status-inquiry__item']">
            <button type="button" :class="$style['status-inquiry__category']">
              <span :class="$style['status-inquiry__number']">4</span>
              <span :class="$style['status-inquiry__text']">신용동의</span>
            </button>
          </li>
          <li :class="$style['status-inquiry__item']">
            <button type="button" :class="$style['status-inquiry__category']">
              <span :class="$style['status-inquiry__number']">3</span>
              <span :class="$style['status-inquiry__text']">상담</span>
            </button>
          </li>
          <li :class="$style['status-inquiry__item']">
            <button type="button" :class="$style['status-inquiry__category']">
              <span :class="$style['status-inquiry__number']">4</span>
              <span :class="$style['status-inquiry__text']">계약</span>
            </button>
          </li>
          <li :class="$style['status-inquiry__item']">
            <button type="button" :class="$style['status-inquiry__category']">
              <span :class="$style['status-inquiry__number']">4</span>
              <span :class="$style['status-inquiry__text']">심사</span>
            </button>
          </li>
          <li :class="$style['status-inquiry__item']">
            <button type="button" :class="$style['status-inquiry__category']">
              <span :class="$style['status-inquiry__number']">1</span>
              <span :class="$style['status-inquiry__text']">송금</span>
            </button>
          </li>
        </ul>
        <!-- status-inquiry -->
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Box Link (logs)</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <ul :class="$style['logs']">
          <li v-for="i in 2" :key="i" :class="$style['logs__item']">
            <div :class="$style['logs__block']">
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 :class="$style['logs__title']">정비</h3>
                </div>
                <div :class="$style['logs__right']">
                  <button
                    type="button"
                    :class="$style['logs__link']"
                    @click="layer001Open"
                  >
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Component Title</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        내용
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideComponent.scss';
</style>

<style lang="scss" module>
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>

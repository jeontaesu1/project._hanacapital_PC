<script>
import { ref, reactive } from 'vue';

import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import IconAdd from '@/assets/images/icon/add.svg?component';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import PopupText from '@/components/ui/layer/PopupText.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import AlertPopup from '@/components/ui/layer/AlertPopup.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicTextarea from '@/components/ui/form/BasicTextarea.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import PartInput from '@/components/ui/form/PartInput.vue';
import ExtendSelect from '@/components/ui/form/ExtendSelect.vue';
import ExtendSelectOption from '@/components/ui/form/ExtendSelectOption.vue';
import BankSelect from '@/components/ui/form/BankSelect.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabList from '@/components/ui/tab/UiTabList.vue';
import UiTabButton from '@/components/ui/tab/UiTabButton.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import RoundTab from '@/components/ui/tab/RoundTab.vue';
import RoundTabButton from '@/components/ui/tab/RoundTabButton.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import FilterTab from '@/components/ui/tab/FilterTab.vue';
import FilterTabButton from '@/components/ui/tab/FilterTabButton.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import ScrollSection from '@/components/ui/section/ScrollSection.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicProgress from '@/components/ui/progress/BasicProgress.vue';
import TextProgress from '@/components/ui/progress/TextProgress.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import SwitchCheckBox from '@/components/ui/form/SwitchCheckBox.vue';
import BasicTooltip from '@/components/ui/tooltip/BasicTooltip.vue';
import ContentsButton from '@/components/ui/button/ContentsButton.vue';
import BankLogo from '@/components/ui/imageData/BankLogo.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import ColorChip from '@/components/ui/imageData/ColorChip.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import MaskingText from '@/components/ui/text/MaskingText.vue';
import FilterButton from '@/components/ui/button/FilterButton.vue';
import DeleteButton from '@/components/ui/button/DeleteButton.vue';
import SelectTable from '@/components/ui/table/SelectTable.vue';
import SelectTableRow from '@/components/ui/table/SelectTableRow.vue';
import RoundButton from '@/components/ui/button/RoundButton.vue';
import ColorSelect from '@/components/ui/form/ColorSelect.vue';
import ColorSelectList from '@/components/ui/form/ColorSelectList.vue';
import ColorSelectListItem from '@/components/ui/form/ColorSelectListItem.vue';
import DownloadButton from '@/components/ui/button/DownloadButton.vue';

import BrandLogo001 from '@/assets/images/card-logo/hana.svg?component';
import BrandLogo002 from '@/assets/images/card-logo/lotte.svg?component';
import BrandLogo003 from '@/assets/images/card-logo/samsung.svg?component';
import BrandLogo004 from '@/assets/images/card-logo/shinhan.svg?component';
import BrandLogo005 from '@/assets/images/card-logo/kb.svg?component';
import BrandLogo006 from '@/assets/images/card-logo/hyundai.svg?component';
import BrandLogo007 from '@/assets/images/card-logo/bc.svg?component';
import IconCall from '@/assets/images/icon/call.svg?component';
import IconCamera from '@/assets/images/icon/camera.svg?component';
import IconFolder from '@/assets/images/icon/folder.svg?component';
import IconLocation from '@/assets/images/icon/location.svg?component';
import IconDocument from '@/assets/images/icon/document.svg?component';
import IconNotify from '@/assets/images/icon/notify.svg?component';
import IconSearchMoney from '@/assets/images/icon/search-money.svg?component';
import IconInterestRate from '@/assets/images/icon/interest-rate.svg?component';
import IconCommisionRate from '@/assets/images/icon/commission-rate.svg?component';
import IconMoney from '@/assets/images/icon/money.svg?component';
import IconRate from '@/assets/images/icon/rate.svg?component';
import IconDate from '@/assets/images/icon/date.svg?component';
import IconCommision from '@/assets/images/icon/commission.svg?component';
import IconPersonalTerms from '@/assets/images/icon/personal-terms.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconDeposit from '@/assets/images/icon/deposit.svg?component';
import ImgZeroCommission from '@/assets/images/illustration/img-zero-commission.svg';
import Img120Months from '@/assets/images/illustration/img-120months.svg?component';
import IconCarSecurity from '@/assets/images/icon/car-security.svg?component';
import IconArrow from '@/assets/images/icon/dropdown.svg?component';
import IconConsulting from '@/assets/images/icon/consulting.svg?component';
import IconService from '@/assets/images/icon/service.svg?component';
import IconCustomerVisit from '@/assets/images/icon/customer-visit.svg?component';
import IconInstallation from '@/assets/images/icon/installation.svg?component';
import IconCompany from '@/assets/images/icon/company.svg?component';
import IconDocumentComplete from '@/assets/images/icon/document-complete.svg?component';
import IconTooltip from '@/assets/images/icon/tooltip.svg?component';
import IconLink from '@/assets/images/icon/link.svg?component';
import IconStar from '@/assets/images/icon/star.svg?component';
import IconTell from '@/assets/images/icon/tell.svg?component';
import IconDropdown from '@/assets/images/icon/dropdown.svg?component';

export default {
  components: {
    BasicButton,
    TextButton,
    UiLayer,
    PopupTitle,
    PopupSubTitle,
    PopupText,
    PopupButton,
    FullPopup,
    FullPopupHead,
    ToastPopup,
    ToastPopupHead,
    AlertPopup,
    ButtonList,
    ButtonListItem,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
    BoxCheckList,
    BoxCheckListItem,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BasicSelect,
    BasicTextarea,
    SecurityInput,
    PartInput,
    ExtendSelect,
    ExtendSelectOption,
    BankSelect,
    BasicHr,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    IllustObject,
    UiTab,
    UiTabList,
    UiTabButton,
    UiTabPanel,
    RoundTab,
    RoundTabButton,
    NavTab,
    NavTabButton,
    FilterTab,
    FilterTabButton,
    StickyBar,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NoticeText,
    IllustInfo,
    IllustInfoTitle,
    IllustInfoText,
    UnitText,
    RoundStatus,
    StepProgress,
    BasicProgress,
    TextProgress,
    SearchButton,
    ScrollSection,
    SwitchCheckBox,
    BasicTooltip,
    ContentsButton,
    BankLogo,
    CarEmblem,
    CarThumb,
    ColorChip,
    BasicDatepicker,
    MaskingText,
    FilterButton,
    DeleteButton,
    SelectTable,
    SelectTableRow,
    RoundButton,
    ColorSelect,
    ColorSelectList,
    ColorSelectListItem,
    DownloadButton,
    IconAdd,
    BrandLogo001,
    BrandLogo002,
    BrandLogo003,
    BrandLogo004,
    BrandLogo005,
    BrandLogo006,
    BrandLogo007,
    IconCamera,
    IconFolder,
    IconLocation,
    IconCall,
    IconDocument,
    IconNotify,
    IconSearchMoney,
    IconInterestRate,
    IconCommisionRate,
    IconMoney,
    IconRate,
    IconDate,
    IconCommision,
    IconPersonalTerms,
    IconSend,
    IconDeposit,
    ImgZeroCommission,
    Img120Months,
    IconCarSecurity,
    IconArrow,
    IconConsulting,
    IconService,
    IconCustomerVisit,
    IconInstallation,
    IconCompany,
    IconDocumentComplete,
    IconTooltip,
    IconLink,
    IconStar,
    IconTell,
    IconDropdown,
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
    const testAccordion = ref(null);

    const preRef = ref(null);

    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(preRef.value.innerHTML);
        console.log('Text copied to clipboard');
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    };

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
      testAccordion,
      layerOpenTest001,
      layerOpenTest002,
      layerOpenTest003,
      layerOpenTest004,
      testErrorUpdate001,
      testInputEvent,
      testAccordionAllOpen,
      testAccordionAllClose,

      preRef,
      copyToClipboard,
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
        <UiLayer ref="layerTest001" type="full" v-slot="layerSlotProps">
          <FullPopup>
            <template v-slot:head>
              <FullPopupHead>
                <template v-slot:left>
                  <PopupButton type="back" />
                  <PopupButton type="back">커스텀 텍스트</PopupButton>
                </template>
                <PopupTitle>타이틀</PopupTitle>
                <template v-slot:right>
                  <PopupButton @click="layerSlotProps.close()" />
                </template>
              </FullPopupHead>
            </template>

            <PopupText>// contents</PopupText>

            <BasicButton @click="layerOpenTest002">
              하단 레이어 팝업
            </BasicButton>

            <template v-slot:foot>
              <ButtonList
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton :line="true" theme="quaternary"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton>Button 2</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </template>
          </FullPopup>
        </UiLayer>

        <UiLayer
          ref="layerTest002"
          type="toast"
          :backgroundClose="true"
          v-slot="layerSlotProps"
        >
          <ToastPopup>
            <template v-slot:outerTop>
              <div class="inline-wrap align-right">
                <TextButton
                  :classNames="{ wrap: 'text-body-4 color-white' }"
                  :underline="true"
                >
                  2주간 다시 보지 않기
                </TextButton>
              </div>
            </template>

            <template v-slot:head>
              <ToastPopupHead>
                <PopupTitle>타이틀</PopupTitle>
                <PopupSubTitle>서브 타이틀 및 텍스트</PopupSubTitle>
                <template v-slot:right>
                  <PopupButton @click="layerSlotProps.close()" />
                </template>
              </ToastPopupHead>
            </template>

            <PopupText>// contents</PopupText>
            <PopupText>// contents</PopupText>
            <PopupText>// contents</PopupText>
            <PopupText>// contents</PopupText>
            <PopupText>// contents</PopupText>
            <PopupText>// contents</PopupText>

            <BasicButton @click="layerOpenTest003">
              하단 레이어 팝업 (고정 높이값)
            </BasicButton>

            <template v-slot:foot>
              <ButtonList
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton :line="true" theme="quaternary"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton>Button 2</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </template>
          </ToastPopup>
        </UiLayer>

        <UiLayer ref="layerTest003" type="toast-fix" v-slot="layerSlotProps">
          <ToastPopup :fix="true">
            <template v-slot:head>
              <ToastPopupHead>
                <PopupTitle>타이틀</PopupTitle>
                <PopupSubTitle>서브 타이틀 및 텍스트</PopupSubTitle>
              </ToastPopupHead>
            </template>

            <PopupText>// contents</PopupText>
            <PopupText>// contents</PopupText>
            <PopupText>// contents</PopupText>
            <PopupText>// contents</PopupText>
            <PopupText>// contents</PopupText>
            <PopupText>// contents</PopupText>

            <BasicButton @click="layerOpenTest004">
              레이어 팝업 열기
            </BasicButton>

            <template v-slot:foot>
              <ButtonList
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton
                    :line="true"
                    theme="quaternary"
                    @click="layerSlotProps.close()"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton @click="layerSlotProps.close()"
                    >Button 2</BasicButton
                  >
                </ButtonListItem>
              </ButtonList>
            </template>
          </ToastPopup>
        </UiLayer>

        <UiLayer ref="layerTest004" v-slot="layerSlotProps">
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
                    :line="true"
                    theme="quaternary"
                    @click="layerSlotProps.close()"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton @click="layerSlotProps.close()"
                    >Button 2</BasicButton
                  >
                </ButtonListItem>
              </ButtonList>
            </template>
          </AlertPopup>
        </UiLayer>

        <BasicButton @click="layerOpenTest001">풀 팝업</BasicButton>
        <BasicButton @click="layerOpenTest002">하단 레이어 팝업</BasicButton>
        <BasicButton @click="layerOpenTest003">
          하단 레이어 팝업 (고정 높이값)
        </BasicButton>
        <BasicButton @click="layerOpenTest004">얼럿형 팝업</BasicButton>
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
        <h3 class="test-section-sub-title">mini</h3>
        <BasicButton size="mini">Button</BasicButton>
        <BasicButton size="mini" :disabled="true">Button</BasicButton>
        <BasicButton tagName="a" size="mini">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="a" size="mini" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton size="mini" theme="secondary">Button</BasicButton>
        <BasicButton size="mini" theme="secondary" :disabled="true"
          >Button</BasicButton
        >
        <BasicButton size="mini" theme="tertiary">Button</BasicButton>
        <BasicButton size="mini" theme="tertiary" :disabled="true"
          >Button</BasicButton
        >
        <BasicButton size="mini" theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton size="mini" theme="quaternary" :disabled="true">
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
        <BasicButton inline="true" :line="true" size="small">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" :line="true" size="mini">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" size="small">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" size="mini">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
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
      <h2 class="test-section-title">Delete Button</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <DeleteButton />
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Secondary</h3>
        <DeleteButton theme="secondary" />
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Tertiary</h3>
        <DeleteButton theme="tertiary" />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Round Button</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <RoundButton>Button</RoundButton>
        <RoundButton :disabled="true">Button</RoundButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Icon</h3>
        <RoundButton tagName="a" href="tel:1800-1110">
          <template v-slot:leftIcon>
            <IconTell />
          </template>
          Button
        </RoundButton>

        <RoundButton tagName="a" href="tel:1800-1110">
          Button
          <template v-slot:rightIcon>
            <IconTell />
          </template>
        </RoundButton>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Add Button</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <button
          type="button"
          :class="[$style['add-button'], 'row-margin-item']"
        >
          <span :class="$style['add-button__inner']">
            <span :class="$style['add-button__text']">지정운전자 추가등록</span>
            <span :class="$style['add-button__icon']">
              <IconAdd />
            </span>
          </span>
        </button>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Upload Button</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['upload-button']">
          <input
            type="file"
            id="testUpload001"
            :class="$style['upload-button__input']"
          />
          <label for="testUpload001" :class="$style['upload-button__label']">
            <span :class="$style['upload-button__text']">이미지 첨부</span>
          </label>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Download Button</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <DownloadButton />
        <DownloadButton tagName="a" href="/foo/bar.pdf" download />
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Secondary</h3>
        <DownloadButton theme="secondary" />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">inline wrap</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div class="inline-wrap">
          <TextButton :underline="true">Button</TextButton>
        </div>
        <div class="inline-wrap align-right">
          <TextButton :underline="true">Button</TextButton>
        </div>
        <div class="inline-wrap align-center">
          <TextButton :underline="true">Button</TextButton>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Contents Button</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <ContentsButton>
          <h3 class="text-body-1 row-margin-small">타이틀</h3>
          <KeyValue align="left" margin="mini" size="medium">
            <KeyValueItem :classNames="{ item: 'text-body-4 color-black' }">
              <KeyValueTitle>도로명</KeyValueTitle>
              <KeyValueText>인천 서구 에코로 181</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-4 color-black' }">
              <KeyValueTitle>입력 주소</KeyValueTitle>
              <KeyValueText>하나금융그룹 로비</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </ContentsButton>
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
      <h2 class="test-section-title">Check list</h2>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['check-list']">
          <ul :class="$style['check-list__list']">
            <li :class="$style['check-list__item']">
              <CheckBox id="testCheck001_001" theme="quinary">
                <CheckBoxObject />
                <CheckBoxLabelText>전화</CheckBoxLabelText>
              </CheckBox>
            </li>
            <li :class="$style['check-list__item']">
              <CheckBox id="testCheck001_002" theme="quinary">
                <CheckBoxObject />
                <CheckBoxLabelText>문자메시지</CheckBoxLabelText>
              </CheckBox>
            </li>
            <li :class="$style['check-list__item']">
              <CheckBox id="testCheck001_003" theme="quinary">
                <CheckBoxObject />
                <CheckBoxLabelText>우편</CheckBoxLabelText>
              </CheckBox>
            </li>
            <li :class="$style['check-list__item']">
              <CheckBox id="testCheck001_004" theme="quinary">
                <CheckBoxObject />
                <CheckBoxLabelText>이메일</CheckBoxLabelText>
              </CheckBox>
            </li>
          </ul>
        </div>
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
          <p class="text-body-5 color-gray-secondary row-margin-small">
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
          <p class="text-body-5 color-gray-secondary row-margin-small">
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
          <p class="text-body-5 color-gray-secondary row-margin-small">
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
          <p class="text-body-5 color-gray-secondary row-margin-small">
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
          <p class="text-body-5 color-gray-secondary row-margin-small">
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
          <p class="text-body-5 color-gray-secondary row-margin-small">
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
          <p class="text-body-5 color-gray-secondary row-margin-small">
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
          <p class="text-body-5 color-gray-secondary row-margin-small">
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
                    ref="testInput"
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
                  <BasicButton size="mini" theme="quaternary">
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
                  <div :class="$style['input-timer']">00:00</div>
                </template>
                <template v-slot:right>
                  <BasicButton size="mini" theme="quaternary">
                    재요청
                  </BasicButton>
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
                    :option="[
                      {
                        value: '1',
                        text: 'SKT',
                      },
                      {
                        value: '2',
                        text: 'KT',
                      },
                      {
                        value: '3',
                        text: 'LG U+',
                      },
                      {
                        value: '4',
                        text: '알뜰폰 SKT',
                      },
                      {
                        value: '5',
                        text: '알뜰폰 KT',
                      },
                      {
                        value: '6',
                        text: '알뜰폰 LG +',
                      },
                    ]"
                    buttonTitle="통신사 선택하기"
                    layerTitle="통신사를 선택해 주세요"
                    buttonId="testInput004"
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
            target="#testInput010Button"
            :selectOnly="true"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '3개월',
                      },
                      {
                        value: '2',
                        text: '6개월',
                      },
                      {
                        value: '3',
                        text: '12개월',
                      },
                      {
                        value: '4',
                        text: '24개월',
                      },
                      {
                        value: '5',
                        text: '36개월',
                      },
                      {
                        value: '6',
                        text: '48개월',
                      },
                      {
                        value: '7',
                        text: '60개월',
                      },
                      {
                        value: '8',
                        text: '72개월',
                      },
                      {
                        value: '9',
                        text: '84개월',
                      },
                      {
                        value: '10',
                        text: '96개월',
                      },
                      {
                        value: '11',
                        text: '108개월',
                      },
                      {
                        value: '12',
                        text: '120개월',
                      },
                    ]"
                    buttonTitle="대출기간 선택하기"
                    layerTitle="대출기간을 선택해 주세요"
                    id="testInput010"
                    buttonId="testInput010Button"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="확장 셀렉트"
            target="#testInput008"
            :selectOnly="true"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <ExtendSelect
                    buttonTitle="확장 셀렉트 선택하기"
                    layerTitle="확장 셀렉트를 선택해 주세요"
                    buttonId="testInput008"
                    :onChange="testInputEvent"
                  >
                    <ExtendSelectOption value="1" text="옵션 1">
                      옵션 1
                    </ExtendSelectOption>
                    <ExtendSelectOption value="2" text="옵션 2">
                      옵션 2
                    </ExtendSelectOption>
                    <ExtendSelectOption value="3" text="옵션 3">
                      옵션 3
                    </ExtendSelectOption>
                    <ExtendSelectOption value="4" text="옵션 4">
                      옵션 4
                    </ExtendSelectOption>
                    <ExtendSelectOption value="5" text="옵션 5">
                      옵션 5
                    </ExtendSelectOption>
                    <ExtendSelectOption value="6" text="옵션 6">
                      옵션 6
                    </ExtendSelectOption>
                    <ExtendSelectOption value="7" text="옵션 7">
                      옵션 7
                    </ExtendSelectOption>
                    <ExtendSelectOption value="8" text="옵션 8">
                      옵션 8
                    </ExtendSelectOption>
                  </ExtendSelect>
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="확장 셀렉트 2"
            target="#layerTestButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <ExtendSelect
                    buttonTitle="확장 셀렉트2 선택하기"
                    layerTitle="확장 셀렉트2를 선택해 주세요"
                    buttonId="layerTestButton"
                    :onChange="testInputEvent"
                  >
                    <div :class="$style['icon-buttons']">
                      <ul :class="$style['icon-buttons__list']">
                        <li :class="$style['icon-buttons__item']">
                          <ExtendSelectOption
                            value="1"
                            text="옵션명1"
                            :classNames="{
                              option: $style['icon-buttons__block'],
                            }"
                          >
                            <span :class="$style['icon-buttons__content']">
                              <span :class="$style['icon-buttons__title']">
                                옵션명1<br />
                                옵션명1 설명 텍스트 옵션명1 설명 텍스트
                              </span>
                            </span>
                          </ExtendSelectOption>
                        </li>
                        <li :class="$style['icon-buttons__item']">
                          <ExtendSelectOption
                            value="2"
                            text="옵션명2"
                            :classNames="{
                              option: $style['icon-buttons__block'],
                            }"
                          >
                            <span :class="$style['icon-buttons__content']">
                              <span :class="$style['icon-buttons__title']">
                                옵션명2<br />
                                옵션명2 설명 텍스트 옵션명2 설명 텍스트
                              </span>
                            </span>
                          </ExtendSelectOption>
                        </li>
                      </ul>
                    </div>
                  </ExtendSelect>
                </InputBlockCell>
              </InputBlock>
              <!-- Case : 옵션 선택 후 노출 -->
              <InputBlock
                :error="state.testError001"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="옵션"
                    id="layerTestOption"
                    disabled="disabled"
                    defaultValue="옵션 설명 텍스트 노출"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- //Case : 옵션 선택 후 노출 -->
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="카드사"
            target="#testInput009"
            :selectOnly="true"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <ExtendSelect
                    buttonTitle="카드사 선택하기"
                    layerTitle="카드사를 선택해 주세요"
                    buttonId="testInput009"
                    :onChange="testInputEvent"
                  >
                    <div :class="$style['bank-brand']">
                      <ul :class="$style['bank-brand__list']">
                        <li :class="$style['bank-brand__item']">
                          <ExtendSelectOption
                            value="1"
                            text="하나"
                            :classNames="{
                              option: $style['bank-brand__block'],
                            }"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <BrandLogo001 />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >하나</span
                            >
                          </ExtendSelectOption>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <ExtendSelectOption
                            value="2"
                            text="롯데"
                            :classNames="{
                              option: $style['bank-brand__block'],
                            }"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <BrandLogo002 />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >롯데</span
                            >
                          </ExtendSelectOption>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <ExtendSelectOption
                            value="3"
                            text="삼성"
                            :classNames="{
                              option: $style['bank-brand__block'],
                            }"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <BrandLogo003 />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >삼성</span
                            >
                          </ExtendSelectOption>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <ExtendSelectOption
                            value="4"
                            text="신한"
                            :classNames="{
                              option: $style['bank-brand__block'],
                            }"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <BrandLogo004 />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >신한</span
                            >
                          </ExtendSelectOption>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <ExtendSelectOption
                            value="5"
                            text="국민"
                            :classNames="{
                              option: $style['bank-brand__block'],
                            }"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <BrandLogo005 />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >국민</span
                            >
                          </ExtendSelectOption>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <ExtendSelectOption
                            value="6"
                            text="현대"
                            :classNames="{
                              option: $style['bank-brand__block'],
                            }"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <BrandLogo006 />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >현대</span
                            >
                          </ExtendSelectOption>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <ExtendSelectOption
                            value="7"
                            text="BC"
                            :classNames="{
                              option: $style['bank-brand__block'],
                            }"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <BrandLogo007 />
                            </span>
                            <span :class="$style['bank-brand__text']">BC</span>
                          </ExtendSelectOption>
                        </li>
                      </ul>
                    </div>

                    <ul :class="[$style['basic-list'], 'row-margin-contents']">
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          본인명의의 개인 신용카드 또는 체크카드로 본인확인이
                          가능합니다.
                        </div>
                      </li>
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          법인카드, 가족카드, 선불카드는 본인확인이
                          불가능합니다.
                        </div>
                      </li>
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          비씨카드는 비씨로고(
                          <span :class="$style['inline-logo']"
                            ><BrandLogo007
                          /></span>
                          )가 표시된 카드만 이용가능합니다.<br />
                          (예 : 농협BC, 우리카드, IBK카드 등)
                        </div>
                      </li>
                    </ul>
                  </ExtendSelect>
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="입금은행"
            target="#testInput011Button"
            :selectOnly="true"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BankSelect
                    id="testInput011"
                    buttonId="testInput011Button"
                    :onChange="testInputEvent"
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
                <InputBlockCell margin="regular">
                  <div class="text-body-3">~</div>
                </InputBlockCell>
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
              <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
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
                <InputBlockCell margin="regular">
                  <div class="text-body-3">~</div>
                </InputBlockCell>
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

        <InputBlock type="search">
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

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Sort select</h3>

        <div class="inline-wrap align-right">
          <BasicSelect
            theme="sort"
            :option="[
              {
                value: '1',
                text: '한도순',
              },
              {
                value: '2',
                text: '금리순',
              },
            ]"
            buttonTitle="정렬 기준 선택하기"
            layerTitle="정렬 기준을 선택해 주세요"
            defaultValue="1"
          />
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Agree List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['agree-list']">
          <UiAccordion :classNames="{ wrap: $style['agree-list__container'] }">
            <UiAccordionItem
              :classNames="{ item: $style['agree-list__all'] }"
              :initialOpen="true"
            >
              <div :class="$style['agree-list__all-head']">
                <CheckBox
                  id="testagree001All"
                  :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>전체동의</CheckBoxLabelText>
                </CheckBox>
                <div :class="$style['agree-list__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['agree-list__all-opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer>
                <div :class="$style['agree-list__all-contents']">
                  <UiAccordion
                    :classNames="{ wrap: $style['agree-list__depth'] }"
                  >
                    <UiAccordionItem
                      :classNames="{ item: $style['agree-list__depth-item'] }"
                      :initialOpen="true"
                    >
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
                        <div :class="$style['agree-list__right']">
                          <RoundStatus
                            :classNames="{ wrap: 'display-block' }"
                            size="small"
                            theme="tertiary"
                          >
                            안심
                          </RoundStatus>
                          <UiAccordionOpener
                            :classNames="{
                              button: $style['agree-list__depth-opener'],
                            }"
                          />
                        </div>
                      </div>

                      <UiAccordionLayer>
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
                                    >개인(신용)정보 필수적 수집·이용
                                    동의</CheckBoxLabelText
                                  >
                                </CheckBox>
                                <div :class="$style['agree-list__right']">
                                  <RoundStatus
                                    :classNames="{ wrap: 'display-block' }"
                                    size="small"
                                    theme="quaternary"
                                  >
                                    다소안심
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
                                      id="testagree001_001_001_001"
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
                                      <RoundStatus
                                        :classNames="{ wrap: 'display-block' }"
                                        size="small"
                                        theme="quinary"
                                      >
                                        보통
                                      </RoundStatus>
                                      <button
                                        type="button"
                                        :class="$style['agree-list__link']"
                                      >
                                        <span
                                          :class="
                                            $style['agree-list__link-text']
                                          "
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
                                      id="testagree001_001_001_002"
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
                                      <RoundStatus
                                        :classNames="{ wrap: 'display-block' }"
                                        size="small"
                                        theme="senary"
                                      >
                                        신중
                                      </RoundStatus>
                                      <button
                                        type="button"
                                        :class="$style['agree-list__link']"
                                      >
                                        <span
                                          :class="
                                            $style['agree-list__link-text']
                                          "
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
                                  id="testagree001_001_002"
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
                                      id="testagree001_001_002_001"
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
                                      <RoundStatus
                                        :classNames="{ wrap: 'display-block' }"
                                        size="small"
                                        theme="septenary"
                                      >
                                        주의
                                      </RoundStatus>
                                      <button
                                        type="button"
                                        :class="$style['agree-list__link']"
                                      >
                                        <span
                                          :class="
                                            $style['agree-list__link-text']
                                          "
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
                                      id="testagree001_001_002_002"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >고유식별번호 필수적
                                        조회</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                    <div :class="$style['agree-list__right']">
                                      <button
                                        type="button"
                                        :class="$style['agree-list__link']"
                                      >
                                        <span
                                          :class="
                                            $style['agree-list__link-text']
                                          "
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
                      </UiAccordionLayer>
                    </UiAccordionItem>

                    <UiAccordionItem
                      :classNames="{ item: $style['agree-list__depth-item'] }"
                      :initialOpen="true"
                    >
                      <div :class="$style['agree-list__depth-head']">
                        <CheckBox
                          id="testagree001_002"
                          :classNames="{
                            wrap: $style['agree-list__depth-checkbox'],
                          }"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            공공마이데이터 서비스 이용<br />
                            전체동의(증빙서류 자동제출)
                          </CheckBoxLabelText>
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <UiAccordionOpener
                            :classNames="{
                              button: $style['agree-list__depth-opener'],
                            }"
                          />
                        </div>
                      </div>

                      <UiAccordionLayer>
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
                                  <CheckBoxLabelText>
                                    개인(신용)정보 필수적 수집·이용 동의<br />
                                    (공공 마이데이터)
                                  </CheckBoxLabelText>
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
                                      id="testagree001_002_001_001"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >개인(신용)정보 수집·이용
                                        동의</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                    <div :class="$style['agree-list__right']">
                                      <button
                                        type="button"
                                        :class="$style['agree-list__link']"
                                      >
                                        <span
                                          :class="
                                            $style['agree-list__link-text']
                                          "
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
                                      id="testagree001_002_001_002"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >고유식별정보 수집·이용
                                        동의</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                    <div :class="$style['agree-list__right']">
                                      <button
                                        type="button"
                                        :class="$style['agree-list__link']"
                                      >
                                        <span
                                          :class="
                                            $style['agree-list__link-text']
                                          "
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
                                  id="testagree001_002_002"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="tertiary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText>
                                    개인(신용)정보 필수적 제공 동의<br />
                                    (공공 마이데이터)
                                  </CheckBoxLabelText>
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
                                        >개인(신용)정보 제공
                                        동의</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                    <div :class="$style['agree-list__right']">
                                      <button
                                        type="button"
                                        :class="$style['agree-list__link']"
                                      >
                                        <span
                                          :class="
                                            $style['agree-list__link-text']
                                          "
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
                                        >고유식별정보 제공
                                        동의</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                    <div :class="$style['agree-list__right']">
                                      <button
                                        type="button"
                                        :class="$style['agree-list__link']"
                                      >
                                        <span
                                          :class="
                                            $style['agree-list__link-text']
                                          "
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
                                      id="testagree001_002_002_003"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >전자적 매체를 통한 광고성 정보의
                                        수신</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                    <div :class="$style['agree-list__right']">
                                      <button
                                        type="button"
                                        :class="$style['agree-list__link']"
                                      >
                                        <span
                                          :class="
                                            $style['agree-list__link-text']
                                          "
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
                                          id="testagree001_002_002_003_001"
                                          :classNames="{
                                            wrap: $style[
                                              'agree-list__checkbox'
                                            ],
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
                                          id="testagree001_002_002_003_002"
                                          :classNames="{
                                            wrap: $style[
                                              'agree-list__checkbox'
                                            ],
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
                                          id="testagree001_002_002_003_003"
                                          :classNames="{
                                            wrap: $style[
                                              'agree-list__checkbox'
                                            ],
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
                                          id="testagree001_002_002_003_004"
                                          :classNames="{
                                            wrap: $style[
                                              'agree-list__checkbox'
                                            ],
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
                                          id="testagree001_002_002_003_005"
                                          :classNames="{
                                            wrap: $style[
                                              'agree-list__checkbox'
                                            ],
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
                      </UiAccordionLayer>
                    </UiAccordionItem>
                  </UiAccordion>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
          </UiAccordion>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">하위 아코디언 없을 때</h3>

        <div :class="$style['agree-list']">
          <UiAccordion :classNames="{ wrap: $style['agree-list__container'] }">
            <UiAccordionItem
              :classNames="{ item: $style['agree-list__all'] }"
              :initialOpen="true"
            >
              <div :class="$style['agree-list__all-head']">
                <CheckBox
                  id="testagree002All"
                  :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>전체동의</CheckBoxLabelText>
                </CheckBox>
                <div :class="$style['agree-list__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['agree-list__all-opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer>
                <div :class="$style['agree-list__all-contents']">
                  <ul :class="$style['agree-list__list']">
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="testagree002_001"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >개인(신용)정보 필수적 수집·이용
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
                              id="testagree002_001_001"
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
                              id="testagree002_001_002"
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
                                <span :class="$style['agree-list__link-text']">
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
                          id="testagree002_002"
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
                              id="testagree002_002_001"
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
                              id="testagree002_002_002"
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
                    </li>
                  </ul>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
          </UiAccordion>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">전체동의 아코디언 기능 없을 때</h3>

        <div :class="$style['agree-list']">
          <ul :class="$style['agree-list__container']">
            <li :class="$style['agree-list__all']">
              <div :class="$style['agree-list__all-head']">
                <CheckBox
                  id="testagree003All"
                  :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>전체동의</CheckBoxLabelText>
                </CheckBox>
              </div>

              <div :class="$style['agree-list__all-contents']">
                <UiAccordion
                  :classNames="{ wrap: $style['agree-list__depth'] }"
                >
                  <UiAccordionItem
                    :classNames="{ item: $style['agree-list__depth-item'] }"
                    :initialOpen="true"
                  >
                    <div :class="$style['agree-list__depth-head']">
                      <CheckBox
                        id="testagree003_001"
                        :classNames="{
                          wrap: $style['agree-list__depth-checkbox'],
                        }"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText
                          >서비스 이용약관 전체동의</CheckBoxLabelText
                        >
                      </CheckBox>
                      <div :class="$style['agree-list__right']">
                        <UiAccordionOpener
                          :classNames="{
                            button: $style['agree-list__depth-opener'],
                          }"
                        />
                      </div>
                    </div>

                    <UiAccordionLayer>
                      <div :class="$style['agree-list__depth-contents']">
                        <ul :class="$style['agree-list__list']">
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="testagree003_001_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >개인(신용)정보 필수적 수집·이용
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
                                    id="testagree003_001_001_001"
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
                                    id="testagree003_001_001_002"
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
                                id="testagree003_001_002"
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
                                    id="testagree003_001_002_001"
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
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="testagree003_001_002_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >고유식별번호 필수적
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
                    </UiAccordionLayer>
                  </UiAccordionItem>

                  <UiAccordionItem
                    :classNames="{ item: $style['agree-list__depth-item'] }"
                    :initialOpen="true"
                  >
                    <div :class="$style['agree-list__depth-head']">
                      <CheckBox
                        id="testagree003_002"
                        :classNames="{
                          wrap: $style['agree-list__depth-checkbox'],
                        }"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText>
                          공공마이데이터 서비스 이용<br />
                          전체동의(증빙서류 자동제출)
                        </CheckBoxLabelText>
                      </CheckBox>
                      <div :class="$style['agree-list__right']">
                        <UiAccordionOpener
                          :classNames="{
                            button: $style['agree-list__depth-opener'],
                          }"
                        />
                      </div>
                    </div>

                    <UiAccordionLayer>
                      <div :class="$style['agree-list__depth-contents']">
                        <ul :class="$style['agree-list__list']">
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="testagree003_002_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  개인(신용)정보 필수적 수집·이용 동의<br />
                                  (공공 마이데이터)
                                </CheckBoxLabelText>
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
                                    id="testagree003_002_001_001"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >개인(신용)정보 수집·이용
                                      동의</CheckBoxLabelText
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
                                    id="testagree003_002_001_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >고유식별정보 수집·이용
                                      동의</CheckBoxLabelText
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
                                id="testagree003_002_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  개인(신용)정보 필수적 제공 동의<br />
                                  (공공 마이데이터)
                                </CheckBoxLabelText>
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
                                    id="testagree003_002_002_001"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >개인(신용)정보 제공
                                      동의</CheckBoxLabelText
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
                                    id="testagree003_002_002_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >고유식별정보 제공 동의</CheckBoxLabelText
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
                    </UiAccordionLayer>
                  </UiAccordionItem>
                </UiAccordion>
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
                <p class="text-body-4 font-weight-light color-gray-tertiary">
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
                <p class="text-body-4 font-weight-light color-gray-tertiary">
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
                :class="[$style['contents-list__depth-4'], 'row-margin-mini']"
              >
                <p class="text-body-4 font-weight-light color-gray-tertiary">
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
      <h2 class="test-section-title">FAQ List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['faq']">
          <UiAccordion :classNames="{ wrap: $style['faq__list'] }">
            <UiAccordionItem
              v-for="i in 2"
              :key="i"
              :classNames="{ item: $style['faq__item'] }"
            >
              <div :class="$style['faq__head']">
                <div :class="$style['faq__block']">
                  <div :class="$style['faq__name']">신차할부 오토론</div>
                  <div :class="$style['faq__title']">신차할부 오토론이란?</div>
                </div>
                <div :class="$style['faq__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['faq__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer :classNames="{ layer: $style['faq__layer'] }">
                <section :class="$style['faq__contents']">
                  // 내용 노출<br />
                  차량을 구매할 목적으로 당사에서 대출 받고, 일정기간 동안
                  원금과 이자가 포함된 원리금을 매월 일정하게 납부하는 대출
                  상품입니다
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
          </UiAccordion>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Tab Base</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <UiTab v-slot="tabSlotProps">
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
      <h2 class="test-section-title">Round Tab</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Tab Base 이용시</h3>

        <UiTab v-slot="tabSlotProps">
          <RoundTab :useUiTab="true">
            <RoundTabButton link="testRoundTab001_001">Tab 1</RoundTabButton>
            <RoundTabButton link="testRoundTab001_002">Tab 2</RoundTabButton>
            <RoundTabButton link="testRoundTab001_003">Tab 3</RoundTabButton>
            <RoundTabButton link="testRoundTab001_004">Tab 4</RoundTabButton>
          </RoundTab>

          <p>Active : {{ tabSlotProps.activeName }}</p>

          <UiTabPanel name="testRoundTab001_001">// Tab 1 Contents</UiTabPanel>

          <UiTabPanel name="testRoundTab001_002">// Tab 2 Contents</UiTabPanel>

          <UiTabPanel name="testRoundTab001_003">// Tab 3 Contents</UiTabPanel>

          <UiTabPanel name="testRoundTab001_004">// Tab 4 Contents</UiTabPanel>
        </UiTab>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">
          탭 기능 없이 단순 링크이거나 버튼 일 때
        </h3>

        <RoundTab>
          <RoundTabButton tagName="RouterLink" to="" :active="true">
            Tab 1
          </RoundTabButton>
          <RoundTabButton tagName="RouterLink" to="">Tab 2</RoundTabButton>

          <RoundTabButton tagName="a" href="" :active="true">
            Tab 3
          </RoundTabButton>
          <RoundTabButton tagName="a" href="">Tab 4</RoundTabButton>

          <RoundTabButton tagName="button" type="button" :active="true">
            Tab 5
          </RoundTabButton>
          <RoundTabButton tagName="button" type="button">
            Tab 6
          </RoundTabButton>
        </RoundTab>
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
        <h3 class="test-section-sub-title">auto, scroll</h3>

        <NavTab :scroll="true" :auto="true">
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
        <h3 class="test-section-sub-title">page contents head 에 넣을 때</h3>

        <NavTab :head="true">
          <NavTabButton tagName="button" type="button">Tab 1</NavTabButton>
          <NavTabButton tagName="button" type="button" :active="true">
            Tab 2
          </NavTabButton>
        </NavTab>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Filter Tab</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Tab Base 이용시</h3>

        <UiTab v-slot="tabSlotProps">
          <FilterTab :useUiTab="true">
            <FilterTabButton link="testFilterTab001_001">Tab 1</FilterTabButton>
            <FilterTabButton link="testFilterTab001_002">Tab 2</FilterTabButton>
            <FilterTabButton link="testFilterTab001_003">Tab 3</FilterTabButton>
            <FilterTabButton link="testFilterTab001_004">Tab 4</FilterTabButton>
          </FilterTab>

          <p>Active : {{ tabSlotProps.activeName }}</p>

          <UiTabPanel name="testFilterTab001_001">// Tab 1 Contents</UiTabPanel>

          <UiTabPanel name="testFilterTab001_002">// Tab 2 Contents</UiTabPanel>

          <UiTabPanel name="testFilterTab001_003">// Tab 3 Contents</UiTabPanel>

          <UiTabPanel name="testFilterTab001_004">// Tab 4 Contents</UiTabPanel>
        </UiTab>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">
          탭 기능 없이 단순 링크이거나 버튼 일 때
        </h3>

        <FilterTab>
          <FilterTabButton tagName="RouterLink" to="" :active="true">
            Tab 1
          </FilterTabButton>
          <FilterTabButton tagName="RouterLink" to="">Tab 2</FilterTabButton>

          <FilterTabButton tagName="a" href="" :active="true">
            Tab 3
          </FilterTabButton>
          <FilterTabButton tagName="a" href="">Tab 4</FilterTabButton>

          <FilterTabButton tagName="button" type="button" :active="true">
            Tab 5
          </FilterTabButton>
          <FilterTabButton tagName="button" type="button">
            Tab 6
          </FilterTabButton>
        </FilterTab>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Sticky</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <StickyBar>
          <NavTab :scroll="true" :auto="true">
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
        </StickyBar>
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
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              비씨카드는 비씨로고(
              <span :class="$style['inline-logo']"><BrandLogo007 /></span>
              )가 표시된 카드만 이용가능합니다.<br />
              (예 : 농협BC, 우리카드, IBK카드 등)
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
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']">3.</div>
            <div :class="$style['basic-list__content']">
              비씨카드는 비씨로고(
              <span :class="$style['inline-logo']"><BrandLogo007 /></span>
              )가 표시된 카드만 이용가능합니다.<br />
              (예 : 농협BC, 우리카드, IBK카드 등)
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
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              비씨카드는 비씨로고(
              <span :class="$style['inline-logo']"><BrandLogo007 /></span>
              )가 표시된 카드만 이용가능합니다.<br />
              (예 : 농협BC, 우리카드, IBK카드 등)
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
        <h3 class="test-section-sub-title">fixed width</h3>
        <ul :class="[$style['basic-list'], $style['basic-list--fixed-width']]">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']">1-1.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']">1-2.</div>
            <div :class="$style['basic-list__content']">
              법인카드, 가족카드, 선불카드는 본인확인이 불가능합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']">2.</div>
            <div :class="$style['basic-list__content']">
              비씨카드는 비씨로고(
              <span :class="$style['inline-logo']"><BrandLogo007 /></span>
              )가 표시된 카드만 이용가능합니다.<br />
              (예 : 농협BC, 우리카드, IBK카드 등)
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-black']">
            <div :class="$style['basic-list__symbol']">3.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-green']">
            <div :class="$style['basic-list__symbol']">4.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red']">
            <div :class="$style['basic-list__symbol']">5.</div>
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
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              비씨카드는 비씨로고(
              <span :class="$style['inline-logo']"><BrandLogo007 /></span>
              )가 표시된 카드만 이용가능합니다.<br />
              (예 : 농협BC, 우리카드, IBK카드 등)
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
        <h3 class="test-section-sub-title">normal margin (10px)</h3>
        <ul
          :class="[$style['basic-list'], $style['basic-list--normal-margin']]"
        >
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
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              비씨카드는 비씨로고(
              <span :class="$style['inline-logo']"><BrandLogo007 /></span>
              )가 표시된 카드만 이용가능합니다.<br />
              (예 : 농협BC, 우리카드, IBK카드 등)
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
        <h3 class="test-section-sub-title">small margin (4px)</h3>
        <ul :class="[$style['basic-list'], $style['basic-list--small-margin']]">
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
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              비씨카드는 비씨로고(
              <span :class="$style['inline-logo']"><BrandLogo007 /></span>
              )가 표시된 카드만 이용가능합니다.<br />
              (예 : 농협BC, 우리카드, IBK카드 등)
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
        <h3 class="test-section-sub-title">mini margin (2px)</h3>
        <ul :class="[$style['basic-list'], $style['basic-list--mini-margin']]">
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
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              비씨카드는 비씨로고(
              <span :class="$style['inline-logo']"><BrandLogo007 /></span>
              )가 표시된 카드만 이용가능합니다.<br />
              (예 : 농협BC, 우리카드, IBK카드 등)
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
        <h3 class="test-section-sub-title">Contents</h3>
        <BasicHr type="contents" className="row-margin-contents" />
        <BasicHr
          theme="secondary"
          type="contents"
          className="row-margin-contents"
        />
        <BasicHr
          theme="tertiary"
          type="contents"
          className="row-margin-contents"
        />
        <BasicHr
          theme="quaternary"
          type="contents"
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
        <BasicBox theme="quaternary">// contnets</BasicBox>
        <BasicBox theme="quinary">// contnets</BasicBox>
        <BasicBox theme="senary">// contnets</BasicBox>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Box Head</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-body-1 font-weight-medium">
                NH투자증권(유캔그린)
              </h3>
            </BasicBoxHeadLeft>
            <BasicBoxHeadRight>
              <RoundStatus :classNames="{ wrap: 'display-block' }">
                미신청
              </RoundStatus>
            </BasicBoxHeadRight>
          </BasicBoxHead>
          // contnets
        </BasicBox>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">align top</h3>
        <BasicBox>
          <BasicBoxHead align="top">
            <BasicBoxHeadLeft>
              <h3 class="text-body-1 font-weight-medium">제네시스</h3>
              <p class="text-body-4 color-gray row-margin-small">더 뉴 G70</p>
            </BasicBoxHeadLeft>
            <BasicBoxHeadRight>
              <RoundStatus :classNames="{ wrap: 'display-block' }">
                미신청
              </RoundStatus>
            </BasicBoxHeadRight>
          </BasicBoxHead>
          // contnets
        </BasicBox>

        <h3 class="test-section-sub-title row-margin-item-group">
          align bottom
        </h3>
        <BasicBox>
          <BasicBoxHead align="bottom">
            <BasicBoxHeadLeft>
              <h3 class="text-body-1 font-weight-medium">제네시스</h3>
              <p class="text-body-4 color-gray row-margin-small">더 뉴 G70</p>
            </BasicBoxHeadLeft>
            <BasicBoxHeadRight>
              <RoundStatus :classNames="{ wrap: 'display-block' }">
                미신청
              </RoundStatus>
            </BasicBoxHeadRight>
          </BasicBoxHead>
          // contnets
        </BasicBox>
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
                  <KeyValue align="left" size="regular" margin="mini">
                    <KeyValueItem :classNames="{ item: 'text-body-4' }">
                      <KeyValueTitle>수리점</KeyValueTitle>
                      <KeyValueText>서울 하나카수리센터</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem :classNames="{ item: 'text-body-4' }">
                      <KeyValueTitle>입고일</KeyValueTitle>
                      <KeyValueText>2021.08.24</KeyValueText>
                    </KeyValueItem>
                  </KeyValue>
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

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Product</h3>
        <ul :class="$style['logs']">
          <li :class="$style['logs__item']">
            <div :class="$style['logs__block']">
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 class="text-body-1 font-weight-medium">스탁론</h3>
                  <div class="text-body-4 color-gray row-margin-mini">
                    하나증권 12-3456-7890123
                  </div>
                </div>
                <RoundStatus theme="secondary">D-7</RoundStatus>
                <div :class="$style['logs__right']">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>

              <BasicHr
                type="contents"
                theme="quaternary"
                className="row-margin-contents-small"
              />

              <KeyValue margin="regular">
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText :classNames="{ text: 'color-green' }"
                    >845,000 원</KeyValueText
                  >
                </KeyValueItem>

                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>결제일</KeyValueTitle>
                  <KeyValueText>2022.02.05 (매월 5일)</KeyValueText>
                </KeyValueItem>

                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText>16/60</KeyValueText>
                </KeyValueItem>
              </KeyValue>

              <div
                :class="[$style['logs__button'], 'row-margin-contents-small']"
              >
                <BasicButton size="small">연장</BasicButton>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">
          block secondary (border : gray-30 / #e0e0e0)
        </h3>
        <ul :class="[$style['logs'], $style['logs--margin-regular']]">
          <li :class="$style['logs__item']">
            <div
              :class="[
                $style['logs__block'],
                $style['logs__block--secondary'],
                $style['logs__block--regular'],
              ]"
            >
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 class="text-body-1 font-weight-medium">상환스케줄</h3>
                </div>
                <div :class="$style['logs__right']">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li :class="$style['logs__item']">
            <div
              :class="[
                $style['logs__block'],
                $style['logs__block--secondary'],
                $style['logs__block--regular'],
              ]"
            >
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 class="text-body-1 font-weight-medium">온라인청구서</h3>
                </div>
                <div :class="$style['logs__right']">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">padding small</h3>
        <ul :class="$style['logs']">
          <li :class="$style['logs__item']">
            <div :class="[$style['logs__block'], $style['logs__block--small']]">
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 class="text-body-3 font-weight-regular">
                    금리인하요구권 안내
                  </h3>
                </div>
                <div :class="$style['logs__right']">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li :class="$style['logs__item']">
            <div :class="[$style['logs__block'], $style['logs__block--small']]">
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 class="text-body-3 font-weight-regular">
                    청약철회권 안내
                  </h3>
                </div>
                <div :class="$style['logs__right']">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">padding regular</h3>
        <ul :class="$style['logs']">
          <li :class="$style['logs__item']">
            <div
              :class="[$style['logs__block'], $style['logs__block--regular']]"
            >
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 class="text-body-1 font-weight-medium">
                    금리인하요구권 안내
                  </h3>
                </div>
                <div :class="$style['logs__right']">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li :class="$style['logs__item']">
            <div
              :class="[$style['logs__block'], $style['logs__block--regular']]"
            >
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 class="text-body-1 font-weight-medium">
                    청약철회권 안내
                  </h3>
                </div>
                <div :class="$style['logs__right']">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">margin small (8px)</h3>
        <ul :class="[$style['logs'], $style['logs--margin-small']]">
          <li :class="$style['logs__item']">
            <div :class="[$style['logs__block'], $style['logs__block--small']]">
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 class="text-body-3 font-weight-regular">
                    금리인하요구권 안내
                  </h3>
                </div>
                <div :class="$style['logs__right']">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li :class="$style['logs__item']">
            <div :class="[$style['logs__block'], $style['logs__block--small']]">
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 class="text-body-3 font-weight-regular">
                    청약철회권 안내
                  </h3>
                </div>
                <div :class="$style['logs__right']">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">margin regular (16px)</h3>
        <ul :class="[$style['logs'], $style['logs--margin-regular']]">
          <li :class="$style['logs__item']">
            <div
              :class="[
                $style['logs__block'],
                $style['logs__block--secondary'],
                $style['logs__block--regular'],
              ]"
            >
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 class="text-body-3 font-weight-regular">
                    금리인하요구권 안내
                  </h3>
                </div>
                <div :class="$style['logs__right']">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li :class="$style['logs__item']">
            <div
              :class="[
                $style['logs__block'],
                $style['logs__block--secondary'],
                $style['logs__block--regular'],
              ]"
            >
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 class="text-body-3 font-weight-regular">
                    청약철회권 안내
                  </h3>
                </div>
                <div :class="$style['logs__right']">
                  <button type="button" :class="$style['logs__link']">
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
      <h2 class="test-section-title">division info</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['division-info']">
          <ul :class="$style['division-info__list']">
            <li :class="$style['division-info__item']">
              <div class="color-black text-body-4 font-weight-light">
                2023.01.10
              </div>
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
          align left (size: regular)
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
          align left (size: medium)
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
            <KeyValueTitle>총 가격</KeyValueTitle>
            <KeyValueText>
              <UnitText rightUnit="원" align="right"> 16,200,000 </UnitText>
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

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">margin regular-small</h3>
        <KeyValue margin="regular-small">
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
        <h3 class="test-section-sub-title">margin mini</h3>
        <KeyValue margin="mini">
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
      <h2 class="test-section-title">Illust Object</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <IllustObject />
        <IllustObject type="complete" />
        <IllustObject type="error" />
        <IllustObject type="fail" />
        <IllustObject type="license" />
        <IllustObject type="certification" />
        <IllustObject type="star" />
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
            <strong>잔여 회차를 확인해 주세요</strong>
          </IllustInfoTitle>
          <IllustInfoText>
            하나캐피탈 스탁론에<br />
            관심을 가져주셔서 감사합니다.
          </IllustInfoText>
        </IllustInfo>
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
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Large</h3>

        <UnitText size="large" verticalAlign="center" leftUnit="$"
          >333,389</UnitText
        >
        <UnitText size="large" verticalAlign="center" rightUnit="원"
          >333,389</UnitText
        >
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
        <h3 class="test-section-sub-title">Small</h3>
        <RoundStatus size="small">텍스트</RoundStatus>
        <RoundStatus size="small" theme="secondary">텍스트</RoundStatus>
        <RoundStatus size="small" theme="tertiary">텍스트</RoundStatus>
        <RoundStatus size="small" theme="quaternary">텍스트</RoundStatus>
        <RoundStatus size="small" theme="quinary">텍스트</RoundStatus>
        <RoundStatus size="small" theme="senary">텍스트</RoundStatus>
        <RoundStatus size="small" theme="septenary">텍스트</RoundStatus>
        <RoundStatus size="small" theme="octonary">텍스트</RoundStatus>
        <RoundStatus size="small" theme="nonary">텍스트</RoundStatus>
        <RoundStatus size="small" theme="denary">텍스트</RoundStatus>
        <RoundStatus size="small" theme="undenary">텍스트</RoundStatus>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Authority Icon List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['authority']">
          <ul :class="$style['authority__list']">
            <li :class="$style['authority__item']">
              <div :class="$style['authority__icon']">
                <IconCall />
              </div>
              <div :class="$style['authority__contents']">
                <div :class="$style['authority__head']">
                  <div :class="$style['authority__title']">전화</div>
                  <div :class="[$style['authority__sub'], 'color-green']">
                    (필수)
                  </div>
                </div>
                <div :class="$style['authority__text']">
                  고객센터 및 기타 상담을 위하여<br />
                  전화를 걸 때 사용합니다.
                </div>
              </div>
            </li>
            <li :class="$style['authority__item']">
              <div :class="$style['authority__icon']">
                <IconNotify />
              </div>
              <div :class="$style['authority__contents']">
                <div :class="$style['authority__head']">
                  <div :class="$style['authority__title']">알림</div>
                  <div :class="$style['authority__sub']">(선택)</div>
                </div>
                <div :class="$style['authority__text']">
                  알림 메시지를 수신할 수 있습니다.
                </div>
              </div>
            </li>
            <li :class="$style['authority__item']">
              <div :class="$style['authority__icon']">
                <IconCamera />
              </div>
              <div :class="$style['authority__contents']">
                <div :class="$style['authority__head']">
                  <div :class="$style['authority__title']">카메라</div>
                  <div :class="$style['authority__sub']">(선택)</div>
                </div>
                <div :class="$style['authority__text']">
                  카메라를 통한 사진 파일을<br />
                  전송할 때 사용합니다.
                </div>
              </div>
            </li>
            <li :class="$style['authority__item']">
              <div :class="$style['authority__icon']">
                <IconFolder />
              </div>
              <div :class="$style['authority__contents']">
                <div :class="$style['authority__head']">
                  <div :class="$style['authority__title']">저장공간</div>
                  <div :class="$style['authority__sub']">(선택)</div>
                </div>
                <div :class="$style['authority__text']">
                  외부 저장소 (메모리)에 저장되어 있는<br />
                  데이터를 전송할 때 사용합니다.
                </div>
              </div>
            </li>
            <li :class="$style['authority__item']">
              <div :class="$style['authority__icon']">
                <IconLocation />
              </div>
              <div :class="$style['authority__contents']">
                <div :class="$style['authority__head']">
                  <div :class="$style['authority__title']">위치</div>
                  <div :class="$style['authority__sub']">(선택)</div>
                </div>
                <div :class="$style['authority__text']">
                  재고금융 실사 촬영 등<br />
                  현재 위치정보 수집을 할 때 사용합니다.
                </div>
              </div>
            </li>
            <li :class="$style['authority__item']">
              <div :class="$style['authority__icon']">
                <IconDocument />
              </div>
              <div :class="$style['authority__contents']">
                <div :class="$style['authority__head']">
                  <div :class="$style['authority__title']">기기 및 앱 기록</div>
                  <div :class="$style['authority__sub']">(선택)</div>
                </div>
                <div :class="$style['authority__text']">
                  전자금융거래 사고 방지를 위해 기기에<br />
                  설치된 위협 정보를 수집할 수 있습니다.
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
                <div :class="$style['product-detail__title']">최대한도</div>
                <div :class="$style['product-detail__desc']">
                  <UnitText size="regular" rightUnit="만원">4,000</UnitText>
                </div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconInterestRate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">예상금리</div>
                <div :class="$style['product-detail__desc']">
                  <UnitText size="regular" rightUnit="%">10.9</UnitText>
                  <div :class="$style['product-detail__desc-sub']">
                    (36개월 기준)
                  </div>
                </div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconCommisionRate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">
                  중도상환수수료율
                </div>
                <div :class="$style['product-detail__desc']">
                  <UnitText size="regular" rightUnit="%">0</UnitText>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Small</h3>
        <div
          :class="[$style['product-detail'], $style['product-detail--small']]"
        >
          <ul :class="$style['product-detail__list']">
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconMoney />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">최대한도</div>
                <div :class="$style['product-detail__desc']">1억원</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconRate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">금리</div>
                <div :class="$style['product-detail__desc']">연 5.9~18.9%</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconDate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">기간</div>
                <div :class="$style['product-detail__desc']">12~120개월</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconCommision />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">
                  중도상환수수료
                </div>
                <div :class="$style['product-detail__desc']">0원</div>
              </div>
            </li>
          </ul>
        </div>
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
            <div :class="$style['icon-box__content']">
              <div class="text-body-2">
                <span class="color-green font-weight-medium">김하나</span>님은
                하나캐피탈에 등록된<br />
                정식 모집인입니다
              </div>
            </div>
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
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 1</div>
                  </div>
                  <div :class="$style['step__text']">
                    본인인증 및 손님의 정보로
                    <strong>대출한도를 조회</strong>합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconSearchMoney />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 1</div>
                  </div>
                  <div :class="$style['step__text']">
                    판매점에서 물품을 구입하여
                    <strong>할부상담을 신청</strong>합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconConsulting />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 2</div>
                  </div>
                  <div :class="$style['step__text']">
                    한도 확인 후, 신청정보를 입력하여
                    <strong>약정을 진행</strong>합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconPersonalTerms />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 2</div>
                  </div>
                  <div :class="$style['step__text']">
                    신청내용 확인하여 <strong>결과를 통보</strong>합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconService />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 2</div>
                  </div>
                  <div :class="$style['step__text']">
                    <strong>거주지, 직장주소, 전화번호</strong>등을 입력합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconCompany />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 3</div>
                  </div>
                  <div :class="$style['step__text']">
                    신청내용 확인하여 <strong>결과를 통보</strong>합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconDocumentComplete />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 3</div>
                  </div>
                  <div :class="$style['step__text']">
                    제출하신 정보로 최종심사 후 손님께
                    <strong>결과를 안내</strong>해드립니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconSend />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 3</div>
                  </div>
                  <div :class="$style['step__text']">
                    제출하신 정보를 바탕으로 최종심사 후 손님께 결과안내 및
                    온라인으로 <strong>차량 저당설정을 진행</strong>합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconCarSecurity />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 4</div>
                  </div>
                  <div :class="$style['step__text']">
                    할부 약정시 담당자 고객님께
                    <strong>직접 방문</strong>합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconCustomerVisit />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 4</div>
                  </div>
                  <div :class="$style['step__text']">
                    계좌로 <strong>대출금을 입금</strong>해드립니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconDeposit />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 5</div>
                  </div>
                  <div :class="$style['step__text']">
                    고객님께서 <strong>원하시는 기기를 설치</strong>해 드리고,
                    담당 직원이 실사를 합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconInstallation />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Illustration Img</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['illustration-img']">
          <ImgZeroCommission />
        </div>
        <div :class="$style['illustration-img']">
          <Img120Months />
        </div>
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
      <h2 class="test-section-title">BasicProgress</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <BasicProgress :total="4" :current="1" />
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Blue</h3>
        <BasicProgress :total="4" :current="1" color="blue" />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">TextProgress</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <TextProgress
          :steps="[
            '본인인증',
            '계약자정보',
            '금융조건',
            '면허정보',
            '약관동의',
            '본인인증',
            'ARS',
          ]"
          :current="1"
        />
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
      <h2 class="test-section-title">Time Out</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['timeout']">
          <div :class="$style['timeout__title']">
            본인인증 종료까지 남은 시간
          </div>
          <div :class="$style['timeout__time']">02:00</div>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Board</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['board']">
          <ul :class="$style['board__list']">
            <li :class="$style['board__item']">
              <button type="button" :class="$style['board__link']">
                <span :class="$style['board__title']">
                  <span :class="$style['board__title-text']">
                    전화권유 상담원 현황전화권유 상담원 현황전화권유 상담원 현황
                  </span>
                </span>
                <span :class="$style['board__text']">2022.10.25</span>
              </button>
            </li>
            <li :class="$style['board__item']">
              <a href="" :class="$style['board__link']">
                <span :class="$style['board__title']">
                  <span :class="$style['board__title-text']">
                    전화권유 상담원 현황
                  </span>
                </span>
                <span :class="$style['board__text']">2022.10.25</span>
              </a>
            </li>
            <li :class="$style['board__item']">
              <button type="button" :class="$style['board__link']">
                <span :class="$style['board__title']">
                  <span :class="$style['board__title-text']">본사</span>
                  <span :class="$style['board__sub']">1800-1110</span>
                </span>
                <span :class="$style['board__text']">
                  서울 강남구 테헤란로 127 하나금융그룹 (역삼동,강남사옥)
                </span>
              </button>
            </li>
          </ul>
        </div>

        <div class="inline-wrap align-center row-margin-contents">
          <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
            더보기
            <template v-slot:rightIcon>
              <IconArrow />
            </template>
          </TextButton>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Notice section</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <section :class="$style['notice-section']">
          <h3 :class="$style['notice-section__title']">공동인증서 등록</h3>
          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                개인/개인사업자 회원은 공동인증서 로그인을 위해 아이디에
                공동인증서를 등록해야 합니다. (법인 회원은 별도 등록이 필요하지
                않습니다.)
              </div>
            </li>
          </ul>
        </section>
        <section :class="$style['notice-section']">
          <h3 :class="$style['notice-section__title']">공동인증서 삭제</h3>
          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
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
          <li :class="$style['search-list__item']">
            <RouterLink to="" :class="$style['search-list__link']">
              <span :class="$style['search-list__text']">
                개인금융<span :class="$style['search-list__icon']"
                  ><IconLink /></span
                >e하나<mark>신용</mark>대출
              </span>
            </RouterLink>
          </li>
          <li :class="$style['search-list__item']">
            <RouterLink to="" :class="$style['search-list__link']">
              <span :class="$style['search-list__text']">
                2030을 위한 <mark>신용</mark>대출 혜택
              </span>
              <span :class="$style['search-list__date']">
                2023.01.01 ~ 2023.01.24
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">margin regular</h3>

        <ul
          :class="[
            $style['search-list'],
            $style['search-list--margin-regular'],
          ]"
        >
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
      <h2 class="test-section-title">colors</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div class="color-black">.color-black</div>
        <div class="color-gray">.color-gray</div>
        <div class="color-gray-secondary">.color-gray-secondary</div>
        <div class="color-green">.color-green</div>
        <div class="color-red">.color-red</div>
        <div class="color-navy">.color-navy</div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Text</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <p class="text-title-1">.text-title-1 (20)</p>
        <p class="text-title-2">.text-title-1 (18)</p>
        <p class="text-body-1">.text-body-1 (16)</p>
        <p class="text-body-2">.text-body-2 (15)</p>
        <p class="text-body-3">.text-body-3 (14)</p>
        <p class="text-body-4">.text-body-4 (13)</p>
        <p class="text-body-5">.text-body-5 (12)</p>
      </div>
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
      <h2 class="test-section-title">SelectTable</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <SelectTable>
          <template v-slot:colgroup>
            <col style="width: 83px" />
            <col />
            <col style="width: 90px" />
          </template>

          <template v-slot:head>
            <tr>
              <th>제조사</th>
              <th>모델명</th>
              <th>차량 금액</th>
            </tr>
          </template>

          <SelectTableRow>
            <td>기아</td>
            <td>2.2 디젤 11인승 노블레스</td>
            <td>5,500 만원</td>
          </SelectTableRow>
          <SelectTableRow :initialActive="true">
            <td>기아</td>
            <td>뉴 카니발(YP) 3.0 가솔린 9인승 노블레스</td>
            <td>5,300 만원</td>
          </SelectTableRow>
          <SelectTableRow>
            <td>기아</td>
            <td>2.2 디젤 11인승 노블레스</td>
            <td>5,500 만원</td>
          </SelectTableRow>
          <SelectTableRow>
            <td>기아</td>
            <td>2.2 디젤 11인승 노블레스</td>
            <td>5,500 만원</td>
          </SelectTableRow>
          <SelectTableRow>
            <td>기아</td>
            <td>뉴 카니발(YP) 3.0 가솔린 9인승 노블레스</td>
            <td>5,300 만원</td>
          </SelectTableRow>
          <SelectTableRow>
            <td>기아</td>
            <td>2.2 디젤 11인승 노블레스</td>
            <td>5,500 만원</td>
          </SelectTableRow>
        </SelectTable>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Scroll Section</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">스크롤 + 타이틀 + 아이콘</h3>
        <ScrollSection>
          <template v-slot:head>
            <h2 class="text-body-2">
              2. 소유지분을 제외한 소유권에 관한 사항(갑구)
            </h2>
          </template>

          <!-- table -->
          <div :class="$style['basic-table']">
            <table>
              <colgroup>
                <col style="width: 76px" />
                <col style="width: 83px" />
                <col style="width: 74px" />
                <col style="width: 226px" />
                <col style="width: 60px" />
              </colgroup>
              <thead>
                <tr>
                  <th>동거명의인</th>
                  <th>주민번호</th>
                  <th>최종지분</th>
                  <th>주소</th>
                  <th>순위번호</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>박지혜<br />(공유자)</td>
                  <td>920709-*******</td>
                  <td>2분의 1</td>
                  <td>
                    부산광역시 남구 진남로198번길 9-1, 101동 901호(현대아파트)
                  </td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- // table -->
        </ScrollSection>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">스크롤 + 아이콘</h3>
        <ScrollSection>
          <!-- table -->
          <div :class="$style['basic-table']">
            <table>
              <colgroup>
                <col style="width: 76px" />
                <col style="width: 83px" />
                <col style="width: 74px" />
                <col style="width: 226px" />
                <col style="width: 60px" />
              </colgroup>
              <thead>
                <tr>
                  <th>동거명의인</th>
                  <th>주민번호</th>
                  <th>최종지분</th>
                  <th>주소</th>
                  <th>순위번호</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>박지혜<br />(공유자)</td>
                  <td>920709-*******</td>
                  <td>2분의 1</td>
                  <td>
                    부산광역시 남구 진남로198번길 9-1, 101동 901호(현대아파트)
                  </td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- // table -->
        </ScrollSection>
        <!-- 소스 카피 기능용 소스(미구현) -->
        <div class="test-section-copy">
          <div><button class="test-section-copy-button">copy</button></div>
          <pre class="test-section-copy-code"></pre>
        </div>
        <!-- //소스 카피 기능용 소스 -->
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">테이블이 없을경우</h3>
        <ScrollSection>
          <template v-slot:head>
            <h2 class="text-body-2">
              2. 소유지분을 제외한 소유권에 관한 사항(갑구)
            </h2>
          </template>

          <p :class="$style['not-table']">기록사항 없음</p>
        </ScrollSection>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">SwitchCheckBox (스위치)</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <SwitchCheckBox id="testSwitchCheckBox001" />
        <SwitchCheckBox id="testSwitchCheckBox002" :defaultChecked="true" />
        <SwitchCheckBox id="testSwitchCheckBox003" :disabled="true" />
        <SwitchCheckBox
          id="testSwitchCheckBox004"
          :defaultChecked="true"
          :disabled="true"
        />

        <!-- 소스 카피 기능용 소스(미구현) -->
        <div class="test-section-copy">
          <div><button class="test-section-copy-button">copy</button></div>
          <pre class="test-section-copy-code">
            import SwitchCheckBox from '@/components/ui/form/SwitchCheckBox.vue';
            components: {
              SwitchCheckBox,
            }
            <SwitchCheckBox id="인풋과 매칭될 아이디 할당" />
            <SwitchCheckBox id="test" /> // 예시
          </pre>
        </div>
        <!-- //소스 카피 기능용 소스 -->
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">툴팁(tooltip)</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <BasicTooltip>
          <IconTooltip class="display-block" />
          <span class="for-a11y">(도움말)</span>

          <template v-slot:contents>
            <section :class="$style['tooltip-section']">
              <h3 :class="$style['tooltip-section__title']">자동로그인</h3>
              <ul
                :class="[
                  $style['basic-list'],
                  $style['basic-list--mini-margin'],
                ]"
              >
                <li :class="[$style['basic-list__item'], 'color-white']">
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    자동로그인 설정을 위해서는 간편비밀번호, 얼굴인증,
                    지문인증(Face ID)가 필요합니다.
                  </div>
                </li>
                <li :class="[$style['basic-list__item'], 'color-white']">
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    보안을 위해 기기의 화면잠금 설정이 되어 있는 경우에만 설정이
                    가능합니다.
                  </div>
                </li>
              </ul>
            </section>
          </template>
        </BasicTooltip>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Bottom</h3>
        <BasicTooltip placement="bottom">
          <IconTooltip class="display-block" />
          <span class="for-a11y">(도움말)</span>

          <template v-slot:contents>
            <section :class="$style['tooltip-section']">
              <h3 :class="$style['tooltip-section__title']">정보성 알림</h3>
              <p :class="$style['tooltip-section__text']">
                상품 이용, 상환정보 등 하나캐피탈 서비스에 필요한 정보를
                수신합니다.
              </p>
            </section>
          </template>
        </BasicTooltip>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Switch List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <ul :class="$style['switch-list']">
          <li :class="$style['switch-list__item']">
            <div :class="$style['switch-list__title']">
              앱 알림을 받아 보시겠어요?
            </div>
            <div :class="$style['switch-list__right']">
              <SwitchCheckBox
                id="testSwitchList001"
                :classNames="{ wrap: $style['switch-list__check'] }"
              />
            </div>
          </li>
          <li :class="$style['switch-list__item']">
            <div :class="$style['switch-list__title']">
              자동으로 로그인하시겠어요?
            </div>
            <BasicTooltip :classNames="{ wrap: $style['switch-list__tip'] }">
              <IconTooltip class="display-block" />
              <span class="for-a11y">(도움말)</span>

              <template v-slot:contents>
                <section :class="$style['tooltip-section']">
                  <h3 :class="$style['tooltip-section__title']">자동로그인</h3>
                  <ul
                    :class="[
                      $style['basic-list'],
                      $style['basic-list--mini-margin'],
                    ]"
                  >
                    <li :class="[$style['basic-list__item'], 'color-white']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        자동로그인 설정을 위해서는 간편비밀번호, 얼굴인증,
                        지문인증(Face ID)가 필요합니다.
                      </div>
                    </li>
                    <li :class="[$style['basic-list__item'], 'color-white']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        보안을 위해 기기의 화면잠금 설정이 되어 있는 경우에만
                        설정이 가능합니다.
                      </div>
                    </li>
                  </ul>
                </section>
              </template>
            </BasicTooltip>
            <div :class="$style['switch-list__right']">
              <SwitchCheckBox
                id="testSwitchList002"
                :classNames="{ wrap: $style['switch-list__check'] }"
              />
            </div>
          </li>
        </ul>

        <!-- 소스 카피 기능용 소스(미구현) -->
        <div class="test-section-copy">
          <div>
            <button class="test-section-copy-button" @click="copyToClipboard">
              copy
            </button>
          </div>
          <pre class="test-section-copy-code" ref="preRef">
            <ul :class="$style['switch-list']">
              <li :class="$style['switch-list__item']">
                <div :class="$style['switch-list__title']">
                  앱 알림을 받아 보시겠어요?
                </div>
                <div :class="$style['switch-list__right']">
                  <SwitchCheckBox
                    id="testSwitchList001"
                    :classNames="{ wrap: $style['switch-list__check'] }"
                  />
                </div>
              </li>
              <li :class="$style['switch-list__item']">
                <div :class="$style['switch-list__title']">
                  자동으로 로그인하시겠어요?
                </div>
                <div :class="$style['switch-list__right']">
                  <SwitchCheckBox
                    id="testSwitchList002"
                    :classNames="{ wrap: $style['switch-list__check'] }"
                  />
                </div>
              </li>
            </ul>
            import SwitchCheckBox from '@/components/ui/form/SwitchCheckBox.vue';
            components: {
              SwitchCheckBox,
            }
            <SwitchCheckBox id="인풋과 매칭될 아이디 할당" />
            <SwitchCheckBox id="test" /> // 예시
            @import '@/assets/scss/components/import/switch-list.scss';
          </pre>
        </div>
        <!-- //소스 카피 기능용 소스 -->
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Inline Alert</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['inline-alert']">
          <p :class="$style['inline-alert__text']">인증이 완료되었습니다.</p>
        </div>

        <div
          :class="[$style['inline-alert'], $style['inline-alert--complete']]"
        >
          <p :class="$style['inline-alert__text']">인증이 완료되었습니다.</p>
        </div>

        <div :class="[$style['inline-alert'], $style['inline-alert--error']]">
          <p :class="$style['inline-alert__text']">인증이 실패하였습니다.</p>
        </div>
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
              <KeyValue align="left" margin="mini" size="regular">
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>도로명</KeyValueTitle>
                  <KeyValueText
                    >인천 서구 에코로 181 하나금융그룹데이터센터</KeyValueText
                  >
                </KeyValueItem>

                <KeyValueItem :classNames="{ item: 'text-body-4' }">
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
                <KeyValue align="left" margin="mini" size="medium">
                  <KeyValueItem
                    :classNames="{ item: 'text-body-4 color-black' }"
                  >
                    <KeyValueTitle>도로명</KeyValueTitle>
                    <KeyValueText>인천 서구 에코로 181</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{ item: 'text-body-4 color-black' }"
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
                <KeyValue align="left" margin="mini" size="medium">
                  <KeyValueItem
                    :classNames="{ item: 'text-body-4 color-black' }"
                  >
                    <KeyValueTitle>지번</KeyValueTitle>
                    <KeyValueText>인천 서구 청라동 7-5</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{ item: 'text-body-4 color-black' }"
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
      <h2 class="test-section-title">Bill List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <ul :class="$style['bill-list']">
          <li :class="$style['bill-list__item']">
            <CheckBox id="testBillCheckBox001" theme="secondary" full="true">
              <CheckBoxObject />
              <CheckBoxLabelText>
                <span :class="$style['bill-list__block']">
                  <span :class="$style['bill-list__head']">
                    <span :class="$style['bill-list__detail']">
                      <span :class="$style['bill-list__detail-item']">
                        41/60
                      </span>
                      <span :class="$style['bill-list__detail-item']">
                        회차
                      </span>
                      <span :class="$style['bill-list__detail-item']">
                        <RoundStatus theme="nonary">연체</RoundStatus>
                      </span>
                    </span>
                    <span :class="$style['bill-list__amount']">
                      845,000 원
                    </span>
                  </span>
                  <span :class="$style['bill-list__date']">2022.02.02</span>
                </span>
              </CheckBoxLabelText>
            </CheckBox>
          </li>
          <li :class="$style['bill-list__item']">
            <CheckBox id="testBillCheckBox002" theme="secondary" full="true">
              <CheckBoxObject />
              <CheckBoxLabelText>
                <span :class="$style['bill-list__block']">
                  <span :class="$style['bill-list__head']">
                    <span :class="$style['bill-list__detail']">
                      <span :class="$style['bill-list__detail-item']">
                        41/60
                      </span>
                      <span :class="$style['bill-list__detail-item']">
                        회차
                      </span>
                    </span>
                    <span :class="$style['bill-list__amount']">
                      845,000 원
                    </span>
                  </span>
                  <span :class="$style['bill-list__date']">2022.02.02</span>
                </span>
              </CheckBoxLabelText>
            </CheckBox>
          </li>
          <li :class="$style['bill-list__item']">
            <CheckBox id="testBillCheckBox003" theme="secondary" full="true">
              <CheckBoxObject />
              <CheckBoxLabelText>
                <span :class="$style['bill-list__block']">
                  <span :class="$style['bill-list__head']">
                    <span :class="$style['bill-list__detail']">
                      <span :class="$style['bill-list__detail-item']">
                        41/60
                      </span>
                      <span :class="$style['bill-list__detail-item']">
                        회차
                      </span>
                    </span>
                    <span :class="$style['bill-list__amount']">
                      845,000 원
                    </span>
                  </span>
                  <span :class="$style['bill-list__date']">2022.02.02</span>
                </span>
              </CheckBoxLabelText>
            </CheckBox>
          </li>
        </ul>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Contents list</h3>
        <ul :class="$style['bill-list']">
          <li :class="$style['bill-list__item']">
            <div :class="$style['bill-list__block']">
              <div :class="$style['bill-list__head']">
                <div :class="$style['bill-list__detail']">
                  <span :class="$style['bill-list__detail-item']">1회차</span>
                </div>
                <div :class="$style['bill-list__amount']">1,232,456,345 원</div>
              </div>
              <div :class="$style['bill-list__contents']">
                <div :class="$style['bill-list__contents-left']">
                  <dl :class="$style['bill-list__sub']">
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">원금</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        912,232,321 원
                      </dd>
                    </div>
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">이자</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        902,123,223 원
                      </dd>
                    </div>
                  </dl>
                </div>
                <div :class="$style['bill-list__contents-right']">
                  <dl :class="$style['bill-list__sub']">
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">잔액</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        982,232,123 원
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </li>
          <li :class="$style['bill-list__item']">
            <div :class="$style['bill-list__block']">
              <div :class="$style['bill-list__head']">
                <div :class="$style['bill-list__detail']">
                  <span :class="$style['bill-list__detail-item']">2회차</span>
                </div>
                <div :class="$style['bill-list__amount']">1,232,456,345 원</div>
              </div>
              <div :class="$style['bill-list__contents']">
                <div :class="$style['bill-list__contents-left']">
                  <dl :class="$style['bill-list__sub']">
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">원금</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        912,232,321 원
                      </dd>
                    </div>
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">이자</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        902,123,223 원
                      </dd>
                    </div>
                  </dl>
                </div>
                <div :class="$style['bill-list__contents-right']">
                  <dl :class="$style['bill-list__sub']">
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">잔액</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        982,232,123 원
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </li>
          <li :class="$style['bill-list__item']">
            <div :class="$style['bill-list__block']">
              <div :class="$style['bill-list__head']">
                <div :class="$style['bill-list__detail']">
                  <span :class="$style['bill-list__detail-item']">3회차</span>
                </div>
                <div :class="$style['bill-list__amount']">1,232,456,345 원</div>
              </div>
              <div :class="$style['bill-list__contents']">
                <div :class="$style['bill-list__contents-left']">
                  <dl :class="$style['bill-list__sub']">
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">원금</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        912,232,321 원
                      </dd>
                    </div>
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">이자</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        902,123,223 원
                      </dd>
                    </div>
                  </dl>
                </div>
                <div :class="$style['bill-list__contents-right']">
                  <dl :class="$style['bill-list__sub']">
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">잔액</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        982,232,123 원
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Keyword Rank</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <ol :class="$style['keyword-rank']">
          <li v-for="i in 5" :key="i" :class="$style['keyword-rank__item']">
            <button type="button" :class="$style['keyword-rank__button']">
              <span :class="$style['keyword-rank__num']">{{ i }}</span>
              <span :class="$style['keyword-rank__text']">
                내 대출 내 대출 내 대출 내 대출
              </span>
            </button>
          </li>
        </ol>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Bank Logo</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <BankLogo code="081" name="하나은행" />
        <BankLogo type="securities" code="261" name="교보증권" />
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Small</h3>
        <BankLogo size="small" code="081" name="하나은행" />
        <BankLogo size="small" type="securities" code="261" name="교보증권" />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Car Emblem</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <CarEmblem code="1001" name="현대" />
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Size Medium</h3>
        <CarEmblem code="1001" name="현대" size="medium" />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Car Thumb</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <CarThumb src="/images/_dummy/car-thumb.png" />
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">size: medium</h3>
        <CarThumb size="medium" src="/images/_dummy/car-thumb.png" />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Color Chip</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <ColorChip />
        <ColorChip type="text" />
        <ColorChip :colors="['244, 238, 238']" />
        <ColorChip :colors="['244, 238, 238', '225, 213, 213', '66, 83, 82']" />
        <ColorChip
          :colors="[
            '244, 238, 238',
            '225, 213, 213',
            '66, 83, 82',
            '155, 171, 170',
          ]"
        />
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">small</h3>
        <ColorChip size="small" />
        <ColorChip size="small" :colors="['244, 238, 238']" />
        <ColorChip
          size="small"
          :colors="['244, 238, 238', '225, 213, 213', '66, 83, 82']"
        />
        <ColorChip
          size="small"
          :colors="[
            '244, 238, 238',
            '225, 213, 213',
            '66, 83, 82',
            '155, 171, 170',
          ]"
        />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">ColorSelect</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <ColorSelectList>
          <ColorSelectListItem>
            <ColorSelect
              name="testColorSelect001"
              id="testColorSelect001_000"
              label="선택 안함"
              :defaultChecked="true"
            >
              <ColorChip />
            </ColorSelect>
          </ColorSelectListItem>
          <ColorSelectListItem>
            <ColorSelect
              name="testColorSelect001"
              id="testColorSelect001_001"
              label="아틀라스 화이트"
            >
              <ColorChip :colors="['248, 245, 245']" />
            </ColorSelect>
          </ColorSelectListItem>
          <ColorSelectListItem>
            <ColorSelect
              name="testColorSelect001"
              id="testColorSelect001_002"
              label="톰보이 카키"
            >
              <ColorChip :colors="['66, 83, 82']" />
            </ColorSelect>
          </ColorSelectListItem>
          <ColorSelectListItem>
            <ColorSelect
              name="testColorSelect001"
              id="testColorSelect001_003"
              label="소울트로닉 오렌지 펄"
            >
              <ColorChip :colors="['120, 13, 32']" />
            </ColorSelect>
          </ColorSelectListItem>
          <ColorSelectListItem>
            <ColorSelect
              name="testColorSelect001"
              id="testColorSelect001_004"
              label="티탄 그레이 메탈릭"
            >
              <ColorChip :colors="['66, 66, 66']" />
            </ColorSelect>
          </ColorSelectListItem>
          <ColorSelectListItem>
            <ColorSelect
              name="testColorSelect001"
              id="testColorSelect001_005"
              label="비자림 카키 매트"
            >
              <ColorChip :colors="['0, 0, 0']" />
            </ColorSelect>
          </ColorSelectListItem>
          <ColorSelectListItem>
            <ColorSelect
              name="testColorSelect001"
              id="testColorSelect001_006"
              label="직접 입력"
            >
              <ColorChip type="text" />
            </ColorSelect>
          </ColorSelectListItem>
        </ColorSelectList>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Rectal</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['rectal']">
          <UiAccordion :classNames="{ wrap: $style['rectal__list'] }">
            <UiAccordionItem
              v-for="i in 3"
              :key="i"
              :classNames="{ item: $style['rectal__item'] }"
            >
              <div :class="$style['rectal__head']">
                <div :class="$style['rectal__block']">
                  <h2 :class="$style['rectal__name']">하나캐피탈</h2>
                  <div :class="$style['rectal__privacy']">
                    <span :class="$style['rectal__privacy-name']">홍길동</span>
                    <span :class="$style['rectal__privacy-number']"
                      >21-01-1234</span
                    >
                  </div>
                </div>
                <div :class="$style['rectal__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['rectal__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer>
                <BasicBox>
                  <KeyValue>
                    <KeyValueItem :classNames="{ item: 'text-body-4' }">
                      <KeyValueTitle>법인번호</KeyValueTitle>
                      <KeyValueText> 123-45-678910 </KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem :classNames="{ item: 'text-body-4' }">
                      <KeyValueTitle>대표번호</KeyValueTitle>
                      <KeyValueText>1599-1234</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem :classNames="{ item: 'text-body-4' }">
                      <KeyValueTitle>주소</KeyValueTitle>
                      <KeyValueText> 서울 중구 을지로 35 </KeyValueText>
                    </KeyValueItem>
                  </KeyValue>
                </BasicBox>
              </UiAccordionLayer>
            </UiAccordionItem>
          </UiAccordion>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Masking Text</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <p class="text-body-2">
          채무자인 고객은 본인의
          <MaskingText>[신용상태가 개선]</MaskingText> 되었다고 판단되는 경우(예
          : 취업, 승진, 재산증가, 개인신용평점 상승) 금융회사에
          <MaskingText>[금리인하를 요구]</MaskingText> 할 수 있어요.
        </p>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Filter Button</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <FilterButton />
        <FilterButton :active="true" />
        <FilterButton :active="true" theme="secondary" />
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
      <h2 class="test-section-title">Q&A</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['qna']">
          <UiAccordion :classNames="{ wrap: $style['qna__list'] }">
            <UiAccordionItem :classNames="{ item: $style['qna__item'] }">
              <div :class="$style['qna__head']">
                <div :class="$style['qna__symbol']">Q</div>
                <div :class="$style['qna__cell']">
                  <h3 :class="$style['qna__title']">
                    하나캐피탈 멤버십 가입은<br />
                    어떻게 하나요?
                  </h3>
                </div>
                <div :class="$style['qna__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['qna__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer :classNames="{ layer: $style['qna__layer'] }">
                <div :class="$style['qna__contents']">
                  <div
                    :class="[
                      $style['qna__symbol'],
                      $style['qna__symbol--answer'],
                    ]"
                  >
                    A
                  </div>
                  <div :class="$style['qna__cell']">
                    <p :class="$style['qna__text']">
                      하나캐피탈 회원가입은 성별 나이 특정제한 없이 하나캐피탈
                      이용 및 관심있으신 손님이시면 누구나 가입가능하며,
                      홈페이지 및 모바일에서 멤버십 가입하기를 통해 가입하실 수
                      있습니다.
                    </p>
                  </div>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
            <UiAccordionItem :classNames="{ item: $style['qna__item'] }">
              <div :class="$style['qna__head']">
                <div :class="$style['qna__symbol']">Q</div>
                <div :class="$style['qna__cell']">
                  <h3 :class="$style['qna__title']">
                    하나캐피탈 멤버십 가입 시<br />
                    연회비나 기타비용이 들어가나요?
                  </h3>
                </div>
                <div :class="$style['qna__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['qna__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer :classNames="{ layer: $style['qna__layer'] }">
                <div :class="$style['qna__contents']">
                  <div
                    :class="[
                      $style['qna__symbol'],
                      $style['qna__symbol--answer'],
                    ]"
                  >
                    A
                  </div>
                  <div :class="$style['qna__cell']">
                    <p :class="$style['qna__text']">
                      하나캐피탈 멤버십은 손님들께 전액 무료로 제공되는 서비스로
                      추가비용이 발생하지 않습니다.
                    </p>
                  </div>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
            <UiAccordionItem :classNames="{ item: $style['qna__item'] }">
              <div :class="$style['qna__head']">
                <div :class="$style['qna__symbol']">Q</div>
                <div :class="$style['qna__cell']">
                  <h3 :class="$style['qna__title']">
                    보험 서비스는<br />
                    직접 신청해야만 하나요?
                  </h3>
                </div>
                <div :class="$style['qna__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['qna__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer :classNames="{ layer: $style['qna__layer'] }">
                <div :class="$style['qna__contents']">
                  <div
                    :class="[
                      $style['qna__symbol'],
                      $style['qna__symbol--answer'],
                    ]"
                  >
                    A
                  </div>
                  <div :class="$style['qna__cell']">
                    <p :class="$style['qna__text']">
                      네. 사고 시 하나손해보험 고객센터로 직접 접수해주셔야
                      보상이 가능합니다.
                    </p>
                  </div>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
            <UiAccordionItem :classNames="{ item: $style['qna__item'] }">
              <div :class="$style['qna__head']">
                <div :class="$style['qna__symbol']">Q</div>
                <div :class="$style['qna__cell']">
                  <h3 :class="$style['qna__title']">
                    하나캐피탈 멤버십 탈회는<br />
                    어떻게 해야하나요?
                  </h3>
                </div>
                <div :class="$style['qna__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['qna__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer :classNames="{ layer: $style['qna__layer'] }">
                <div :class="$style['qna__contents']">
                  <div
                    :class="[
                      $style['qna__symbol'],
                      $style['qna__symbol--answer'],
                    ]"
                  >
                    A
                  </div>
                  <div :class="$style['qna__cell']">
                    <p :class="$style['qna__text']">
                      탈회를 원하실 경우, 고객센터(1800-1110) 또는 하나캐피탈
                      홈페이지 및 WEB/APP을 통해 편리하게 처리 가능합니다.<br />
                      단, 탈회 즉시 모든 멤버십 서비스를 이용할 수 없으니
                      신중하게 생각하시길 바랍니다.
                    </p>
                  </div>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
          </UiAccordion>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Files</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['files']">
          <ul :class="$style['files__list']">
            <!-- Case : 이미지 -->
            <li :class="$style['files__item']">
              <div :class="$style['files__block']">
                <div :class="$style['files__image']">
                  <img
                    src="@/assets/images/_dummy/file-sample.png"
                    alt="파일 이름 넣어주세요"
                    @error="
                      (e) => {
                        e.target.parentNode.classList.add('is-error');
                      }
                    "
                  />
                </div>
                <button type="button" :class="$style['files__link']">
                  <span class="for-a11y">미리보기</span>
                </button>
                <button type="button" :class="$style['files__delete']">
                  <span class="for-a11y">삭제</span>
                </button>
              </div>
            </li>
            <!-- // Case : 이미지 -->

            <!-- Case : 이미지 에러 -->
            <li :class="$style['files__item']">
              <div :class="$style['files__block']">
                <div :class="$style['files__image']">
                  <img
                    src=""
                    alt="파일 이름 넣어주세요"
                    @error="
                      (e) => {
                        e.target.parentNode.classList.add('is-error');
                      }
                    "
                  />
                </div>
                <button type="button" :class="$style['files__link']">
                  <span class="for-a11y">미리보기</span>
                </button>
                <button type="button" :class="$style['files__delete']">
                  <span class="for-a11y">삭제</span>
                </button>
              </div>
            </li>
            <!-- // Case : 이미지 에러 -->

            <!-- Case : PDF -->
            <li :class="$style['files__item']">
              <div :class="$style['files__block']">
                <div
                  :class="[$style['files__icon'], $style['files__icon--pdf']]"
                >
                  <span class="for-a11y">파일 이름 넣어주세요</span>
                </div>
                <button type="button" :class="$style['files__link']">
                  <span class="for-a11y">미리보기</span>
                </button>
                <button type="button" :class="$style['files__delete']">
                  <span class="for-a11y">삭제</span>
                </button>
              </div>
            </li>
            <!-- // Case : PDF -->

            <li :class="$style['files__item']">
              <div :class="$style['files__block']">
                <div :class="$style['files__image']">
                  <img
                    src="@/assets/images/_dummy/file-sample.png"
                    alt="파일 이름 넣어주세요"
                    @error="
                      (e) => {
                        e.target.parentNode.classList.add('is-error');
                      }
                    "
                  />
                </div>
                <button type="button" :class="$style['files__link']">
                  <span class="for-a11y">미리보기</span>
                </button>
                <button type="button" :class="$style['files__delete']">
                  <span class="for-a11y">삭제</span>
                </button>
              </div>
            </li>

            <li :class="$style['files__item']">
              <div :class="$style['files__block']">
                <div :class="$style['files__image']">
                  <img
                    src="@/assets/images/_dummy/file-sample.png"
                    alt="파일 이름 넣어주세요"
                    @error="
                      (e) => {
                        e.target.parentNode.classList.add('is-error');
                      }
                    "
                  />
                </div>
                <button type="button" :class="$style['files__link']">
                  <span class="for-a11y">미리보기</span>
                </button>
                <button type="button" :class="$style['files__delete']">
                  <span class="for-a11y">삭제</span>
                </button>
              </div>
            </li>

            <li :class="$style['files__item']">
              <div :class="$style['files__block']">
                <div :class="$style['files__image']">
                  <img
                    src="@/assets/images/_dummy/file-sample.png"
                    alt="파일 이름 넣어주세요"
                    @error="
                      (e) => {
                        e.target.parentNode.classList.add('is-error');
                      }
                    "
                  />
                </div>
                <button type="button" :class="$style['files__link']">
                  <span class="for-a11y">미리보기</span>
                </button>
                <button type="button" :class="$style['files__delete']">
                  <span class="for-a11y">삭제</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Car Info</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <UiAccordion tagName="div" :classNames="{ wrap: $style['car-info'] }">
          <UiAccordionItem
            tagName="div"
            :classNames="{
              item: $style['car-info__inner'],
            }"
            v-slot="accordionItemSlotProps"
          >
            <div>
              <div class="text-body-4 font-weight-light">현대</div>
              <h3 class="text-body-1 font-weight-medium row-margin-mini">
                캐스퍼
              </h3>
              <div class="text-body-4 color-gray row-margin-small">
                인스퍼레이션 + 캐스퍼 액티브Ⅱ
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <UnitText rightUnit="원"
                    ><strong>30,324,230</strong></UnitText
                  >
                </div>
                <div class="flex-box__cell">
                  <button
                    type="button"
                    :class="$style['car-info__opener']"
                    @click="accordionItemSlotProps.toggle"
                    :title="accordionItemSlotProps.opened ? '닫기' : '열기'"
                  >
                    <span :class="$style['car-info__opener-text']"
                      >내역보기</span
                    >
                    <IconDropdown :class="$style['car-info__opener-icon']" />
                  </button>
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{ layer: $style['car-info__layer'] }"
            >
              <div :class="$style['car-info__contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box">
                        <div class="flex-box__cell flex-1">아틸라스 화이트</div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box">
                        <div class="flex-box__cell flex-1">
                          네츄럴 베이지 / 다크 베이지
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="['244, 238, 238', '225, 213, 213']"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션 1</KeyValueTitle>
                    <KeyValueText>스토리지</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션 2</KeyValueTitle>
                    <KeyValueText>커버</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </div>
    </section>

    <!-- 작업중
    <section class="test-section">
      <h2 class="test-section-title">Component Title</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <InputRange />

        < !-- 소스 카피 기능용 소스(미구현) -- >
        <div class="test-section-copy">
          <div>
            <button class="test-section-copy-button" @click="copyToClipboard">
              copy
            </button>
          </div>
          <pre class="test-section-copy-code" ref="preRef"></pre>
        </div>
        < !-- //소스 카피 기능용 소스 -- >
      </div>
    </section>
    -->

    <section class="test-section">
      <h2 class="test-section-title">Component Title</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
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

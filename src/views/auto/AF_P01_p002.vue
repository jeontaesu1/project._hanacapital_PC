<script>
// AF_P01_p002
// AF_P01_p003
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
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
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

export default {
  components: {
    PageContents,
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
    BasicInput,
    BasicSelect,
    BasicButton,
    ButtonList,
    ButtonListItem,
    NavTab,
    NavTabButton,
    CarThumb,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    BasicBox,
  },

  setup() {
    const state = reactive({
      companyError: false,
      carNameError: false,
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
            target="#AF_P01_p002_Company"
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
                    inputId="AF_P01_p002_Company"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <FormListItem
            titleText="차종"
            target="#AF_P01_p002_carNameError"
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
                    inputId="AF_P01_p002_carNameError"
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

        <UiAccordion>
          <UiAccordionItem>
            <BasicBox>
              <UiAccordionOpener />
              <UiAccordionLayer> //Contents </UiAccordionLayer>
            </BasicBox>
          </UiAccordionItem>
        </UiAccordion>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">옵션선택</h3>

        // Contents
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">신청정보선택</h3>

        <div>
          <section class="row-margin-container-medium">
            <h4 class="text-body-1 row-margin-item-group">이용기간</h4>

            // Contents
          </section>

          <section class="row-margin-container-medium">
            <h4 class="text-body-1 row-margin-item-group">보증금 비율</h4>

            // Contents
          </section>

          <section class="row-margin-container-medium">
            <h4 class="text-body-1 row-margin-item-group">정비서비스</h4>

            // Contents
          </section>
        </div>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">차량가격</h3>

        // Contents
      </section>
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>렌터카 신청</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <!-- Case : 렌터카 신청 버튼 선택 시 노출 -->
    <ButtonList>
      <ButtonListItem>
        <BasicButton>신청</BasicButton>
      </ButtonListItem>
    </ButtonList>
    <!-- //Case : 렌터카 신청 버튼 선택 시 노출 -->
  </PageContents>
</template>

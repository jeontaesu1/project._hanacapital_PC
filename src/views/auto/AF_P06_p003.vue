<script>
// AF_P06_p003
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import SelectTable from '@/components/ui/table/SelectTable.vue';
import SelectTableRow from '@/components/ui/table/SelectTableRow.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    NavTab,
    NavTabButton,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicSelect,
    FormInvalidMessage,
    BasicInput,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    CarEmblem,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    SelectTable,
    SelectTableRow,
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
      brandError: false,
      modelError: false,
      yearError: false,
      engineTypeError: false,
      detailError: false,
      carNumberError: false,
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
            text: '중고차오토론',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">중고차오토론</PageTitle>
        <template v-slot:right>
          <StepProgress :total="4" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">차량을 선택해 주세요</PageMainText>
    </PageHead>

    <ul
      :class="[
        $style['basic-list'],
        $style['basic-list--regular'],
        $style['basic-list--regular-margin'],
      ]"
    >
      <li
        :class="[
          $style['basic-list__item'],
          'text-body-3',
          'font-weight-regular',
        ]"
      >
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          한도조회만 하는 경우, 고객님의 신용도에 전혀 영향이 없습니다.
        </div>
      </li>
      <li
        :class="[
          $style['basic-list__item'],
          'text-body-3',
          'font-weight-regular',
        ]"
      >
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          상품용 차량이 아닐 경우, 대출진행이 불가합니다.
        </div>
      </li>
    </ul>

    <div class="row-margin-block-small row-margin-bottom-none">
      <!-- Case : 조회 버튼 누른 후 :disabled="true" 로 변경 : start -->
      <NavTab>
        <NavTabButton
          tagName="button"
          type="button"
          :active="true"
          :disabled="false"
        >
          국산차
        </NavTabButton>
        <NavTabButton tagName="button" type="button" :disabled="false"
          >수입차</NavTabButton
        >
      </NavTab>

      <FormList>
        <FormListItem
          titleText="브랜드"
          target="#AF_P06_p003_brand"
          :selectOnly="true"
          :disabled="false"
        >
          <FormInvalid :error="state.brandError">
            <InputBlock :error="state.brandError" :disabled="false">
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
                      label: '제네시스',
                    },
                    {
                      value: '4',
                      label: '쉐보레',
                    },
                  ]"
                  title="브랜드 선택하기"
                  inputId="AF_P06_p003_brand"
                  :disabled="false"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="모델명"
          target="#AF_P06_p003_model"
          :selectOnly="true"
          :disabled="false"
        >
          <FormInvalid :error="state.modelError">
            <InputBlock :error="state.modelError" :disabled="false">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '쏘나타',
                    },
                    {
                      value: '2',
                      label: '그랜저',
                    },
                    {
                      value: '3',
                      label: '아반떼',
                    },
                  ]"
                  title="모델명 선택하기"
                  inputId="AF_P06_p003_model"
                  :disabled="false"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="연식"
          target="#AF_P06_p003_year"
          :selectOnly="true"
          :disabled="false"
        >
          <FormInvalid :error="state.yearError">
            <InputBlock :error="state.yearError" :disabled="false">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '2023년',
                    },
                    {
                      value: '2',
                      label: '2022년',
                    },
                    {
                      value: '3',
                      label: '2021년',
                    },
                    {
                      value: '4',
                      label: '2020년',
                    },
                    {
                      value: '5',
                      label: '2019년',
                    },
                    {
                      value: '6',
                      label: '2018년',
                    },
                    {
                      value: '7',
                      label: '2017년',
                    },
                    {
                      value: '8',
                      label: '2016년',
                    },
                    {
                      value: '9',
                      label: '2015년',
                    },
                    {
                      value: '10',
                      label: '2014년',
                    },
                    {
                      value: '11',
                      label: '2013년',
                    },
                    {
                      value: '12',
                      label: '2012년',
                    },
                    {
                      value: '13',
                      label: '2011년',
                    },
                    {
                      value: '14',
                      label: '2010년',
                    },
                    {
                      value: '15',
                      label: '2009년',
                    },
                    {
                      value: '16',
                      label: '2008년',
                    },
                    {
                      value: '17',
                      label: '2007년',
                    },
                    {
                      value: '18',
                      label: '2006년',
                    },
                    {
                      value: '19',
                      label: '2005년',
                    },
                  ]"
                  title="연식 선택하기"
                  inputId="AF_P06_p003_year"
                  :disabled="false"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="엔진타입"
          target="#AF_P06_p003_engineType"
          :selectOnly="true"
          :disabled="false"
        >
          <FormInvalid :error="state.engineTypeError">
            <InputBlock :error="state.engineTypeError" :disabled="false">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '2967cc',
                    },
                    {
                      value: '2',
                      label: '가솔린',
                    },
                    {
                      value: '3',
                      label: '디젤',
                    },
                    {
                      value: '4',
                      label: '전기',
                    },
                  ]"
                  title="엔진타입 선택하기"
                  inputId="AF_P06_p003_engineType"
                  :disabled="false"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="세부모델"
          target="#AF_P06_p003_detail"
          :selectOnly="true"
          :disabled="false"
        >
          <FormInvalid :error="state.detailError">
            <InputBlock :error="state.detailError" :disabled="false">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '쏘나타 뉴 라이즈 1.6T-Gdi 스마트',
                    },
                    {
                      value: '2',
                      label: '봉고3 트럭 다용도복합 냉동탑차 1톤',
                    },
                    {
                      value: '3',
                      label: '봉고3 EV 리스',
                    },
                    {
                      value: '4',
                      label: '봉고3 윙바디',
                    },
                  ]"
                  title="세부모델 선택하기"
                  inputId="AF_P06_p003_detail"
                  :disabled="false"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="차량번호"
          target="#AF_P06_p003_carNumber"
          :disabled="false"
        >
          <FormInvalid :error="state.carNumberError">
            <InputBlock :error="state.carNumberError" :disabled="false">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="차량번호"
                  id="AF_P06_p003_carNumber"
                  :disabled="false"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>
      <!-- // Case : 조회 버튼 누른 후 :disabled="true" 로 변경 : end -->

      <!-- Case : 조회 후 비노출 -->
      <ButtonList>
        <ButtonListItem>
          <BasicButton :line="true">조회</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 조회 후 비노출 -->

      <!-- Case : 조회 후 노출 -->
      <!-- Case : 차량 선택 후 :disabled="true" 로 변경 : start -->
      <SelectTable
        :classNames="{ wrap: 'row-margin-block-small' }"
        :disabled="false"
      >
        <template v-slot:colgroup>
          <col style="width: 142px" />
          <col />
          <col style="width: 180px" />
        </template>

        <template v-slot:head>
          <tr>
            <th>제조사</th>
            <th>모델명</th>
            <th>차량 금액</th>
          </tr>
        </template>

        <SelectTableRow :initialActive="true" :disabled="false">
          <td>푸조</td>
          <td>508(2세대) SW 1.5 블루 HDi</td>
          <td>43,100,000 원</td>
        </SelectTableRow>
        <SelectTableRow :disabled="false">
          <td>포르쉐</td>
          <td>718 박스터(3세대) GTS 40</td>
          <td>108,200,000 원</td>
        </SelectTableRow>
        <SelectTableRow :disabled="false">
          <td>포르쉐</td>
          <td>718 박스터(3세대)S 2.5</td>
          <td>88,400,000 원</td>
        </SelectTableRow>
        <SelectTableRow :disabled="false">
          <td>포르쉐</td>
          <td>718 박스터(3세대)S 2.5</td>
          <td>88,400,000 원</td>
        </SelectTableRow>
        <SelectTableRow :disabled="false">
          <td>포르쉐</td>
          <td>718 박스터(3세대)S 2.5</td>
          <td>88,400,000 원</td>
        </SelectTableRow>
      </SelectTable>
      <!-- // Case : 차량 선택 후 :disabled="true" 로 변경 : end -->
      <!-- // Case : 조회 후 노출 -->

      <!-- Case : 차량 선택 후 비노출 -->
      <ButtonList>
        <ButtonListItem>
          <BasicButton>다음</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 차량 선택 후 비노출 -->

      <!-- Case : 차량 선택 후 노출 -->
      <section class="row-margin-block-small">
        <div class="row-margin-contents">
          <h3 class="text-title-1 row-margin-small">차량번호 조회 결과</h3>
          <p class="text-body-1 color-gray-secondary font-weight-light">
            선택한 차량과 입력한 차량번호의 차량이 맞는지 확인해 주세요.
          </p>
        </div>

        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <div class="flex-box row-margin-small">
                <div class="flex-box__cell">
                  <CarEmblem src="/images/_dummy/car-emblem.png" name="현대" />
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <p class="text-body-4 font-weight-light">2020년식</p>
                </div>
              </div>
              <h4 class="text-title-2 font-weight-medium">16노2109</h4>
              <div
                class="text-body-3 color-gray-tertiary row-margin-item-small"
              >
                쏘나타 뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
              </div>
            </BasicBoxHeadLeft>
          </BasicBoxHead>
          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>배기량</KeyValueTitle>
              <KeyValueText>2967cc</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>사고이력(내차피해)</KeyValueTitle>
              <KeyValueText>0회 / 0회</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>전손/침수/도난</KeyValueTitle>
              <KeyValueText>X/X/X</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>사고이력(타차가해)</KeyValueTitle>
              <KeyValueText>0회 / 0회</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>
      <!-- // Case : 차량 선택 후 노출 -->
    </div>

    <!-- Case : 차량 선택 후 노출 -->
    <ButtonList>
      <ButtonListItem>
        <BasicButton :line="true" theme="quaternary">재선택</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
    <!-- // Case : 차량 선택 후 노출 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P06_p003.scss';
</style>

<script>
// IF_P08_p001

import { reactive } from 'vue';
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicButton,
    // BasicHr,
    ButtonList,
    ButtonListItem,
    BasicInput,
    BasicSelect,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    CarEmblem,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NavTab,
    NavTabButton,
    InputBlock,
    InputBlockCell,
    SearchButton,
  },
  setup() {
    const state = reactive({
      testError001: false,
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
    <PageHead>
      <PageTitle>약정 목록을 확인하고<br />약정을 진행하세요</PageTitle>
    </PageHead>
    <FormList>
      <NavTab>
        <NavTabButton tagName="button" type="button" :active="true">
          재고금융
        </NavTabButton>
        <NavTabButton tagName="button" type="button">재고금융Ⅱ</NavTabButton>
      </NavTab>
      <div>
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">
                주식회사알차이노베이션 (재고금융)
              </h3>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>약정기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>한도잔액</KeyValueTitle>
              <KeyValueText>2,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>한도금액</KeyValueTitle>
              <KeyValueText>2,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>실행금액</KeyValueTitle>
              <KeyValueText>2,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>실행건수</KeyValueTitle>
              <KeyValueText>N 건</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <div class="row-margin-block-small">
          <h3 class="text-title-1 row-margin-contents">한도조회</h3>

          <BoxCheckList :wrap="true">
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="testBoxCheckList003"
                id="testBoxCheckList003_001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>차량번호조회</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="testBoxCheckList003"
                id="testBoxCheckList003_002"
              >
                <BoxCheckLabel>모델/연식조회</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>

          <!--  case : 한도조회 - 모델/연식조회 선택시 -->
          <InputBlock class="row-margin-container-medium">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="search"
                title="차량번호 검색어"
                placeholder="차량번호 입력"
              />
            </InputBlockCell>
            <InputBlockCell type="search">
              <SearchButton />
            </InputBlockCell>
          </InputBlock>
          <!-- case : 한도조회 - 모델/연식조회 선택시 -> 차량번호 조회결과  -->
          <BasicBox>
            <div class="flex-box row-margin-small">
              <div class="flex-box__cell">
                <CarEmblem code="1001" name="현대" />
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <p class="text-body-4 font-weight-light">2020년식</p>
              </div>
            </div>
            <h4 class="text-title-2 font-weight-medium">
              쏘나타 뉴 라이즈 1.6T-Gdi 스마트<br />(마이 스마트 핏)
            </h4>
            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-contents',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular">한도조회</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
          <!-- //case : 한도조회 - 모델/연식조회 선택시 -> 차량번호 조회결과  -->
          <!-- case : 한도조회 - 모델/연식조회 선택시 -> 차량번호 조회결과 -> 한도조회 결과 -->
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="flex-box row-margin-small">
                  <div class="flex-box__cell">
                    <CarEmblem code="1001" name="현대" />
                  </div>
                  <div class="flex-box__cell flex-box__cell--small">
                    <p class="text-body-4 font-weight-light">2020년식</p>
                  </div>
                </div>
                <h4 class="text-title-2 font-weight-medium">
                  쏘나타 뉴 라이즈 1.6T-Gdi 스마트<br />(마이 스마트 핏)
                </h4>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>한도금액</KeyValueTitle>
                <KeyValueText>2,000,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>비고</KeyValueTitle>
                <KeyValueText>연평균 주행거리 5만km 초과</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
          <!-- //case : 한도조회 - 모델/연식조회 선택시 -> 차량번호 조회결과 -> 한도조회 결과 -->
          <!--  //case : 한도조회 - 모델/연식조회 선택시 -->
          <!--  case : 한도조회 - 모델/연식조회 -->
          <FormListItem
            titleText="분류"
            :forceFocus="true"
            class="row-margin-container-medium row-margin-bottom-none"
          >
            <FormInvalid :error="state.testError001">
              <BoxCheckList>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testInputCheck014"
                    id="testInputCheck014_001"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>국산차</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testInputCheck014"
                    id="testInputCheck014_003"
                  >
                    <BoxCheckLabel>수입차</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="브랜드"
            target="#layerAutoUsedLoanSearchModelBrand"
            :selectOnly="true"
          >
            <FormInvalid :error="state.brandError">
              <InputBlock :error="state.brandError">
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
                    title="브랜드 선택"
                    inputId="layerAutoUsedLoanSearchModelBrand"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="모델명"
            target="#SearchModel"
            :selectOnly="true"
          >
            <FormInvalid :error="state.modelError">
              <InputBlock :error="state.modelError">
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
                    title="모델 선택"
                    inputId="SearchModel"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="연식"
            target="#layerAutoUsedLoanSearchModelYearButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.yearError">
              <InputBlock :error="state.yearError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '2023년',
                      },
                      {
                        value: '2',
                        text: '2022년',
                      },
                      {
                        value: '3',
                        text: '2021년',
                      },
                      {
                        value: '4',
                        text: '2020년',
                      },
                      {
                        value: '5',
                        text: '2019년',
                      },
                      {
                        value: '6',
                        text: '2018년',
                      },
                      {
                        value: '7',
                        text: '2017년',
                      },
                      {
                        value: '8',
                        text: '2016년',
                      },
                      {
                        value: '9',
                        text: '2015년',
                      },
                      {
                        value: '10',
                        text: '2014년',
                      },
                      {
                        value: '11',
                        text: '2013년',
                      },
                      {
                        value: '12',
                        text: '2012년',
                      },
                      {
                        value: '13',
                        text: '2011년',
                      },
                      {
                        value: '14',
                        text: '2010년',
                      },
                      {
                        value: '15',
                        text: '2009년',
                      },
                      {
                        value: '16',
                        text: '2008년',
                      },
                      {
                        value: '17',
                        text: '2007년',
                      },
                      {
                        value: '18',
                        text: '2006년',
                      },
                      {
                        value: '19',
                        text: '2005년',
                      },
                    ]"
                    buttonTitle="연식 선택하기"
                    layerTitle="연식을 선택해 주세요"
                    id="layerAutoUsedLoanSearchModelYear"
                    buttonId="layerAutoUsedLoanSearchModelYearButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="엔진타입"
            target="#layerAutoUsedLoanSearchModelEngineTypeButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.engineTypeError">
              <InputBlock :error="state.engineTypeError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '2967cc',
                      },
                      {
                        value: '2',
                        text: '가솔린',
                      },
                      {
                        value: '3',
                        text: '디젤',
                      },
                      {
                        value: '4',
                        text: '전기',
                      },
                    ]"
                    buttonTitle="엔진타입 선택하기"
                    layerTitle="엔진타입을 선택해 주세요"
                    id="layerAutoUsedLoanSearchModelEngineType"
                    buttonId="layerAutoUsedLoanSearchModelEngineTypeButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="세부모델"
            target="#layerAutoUsedLoanSearchModelDetailButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.detailError">
              <InputBlock :error="state.detailError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '쏘나타 뉴 라이즈 1.6T-Gdi 스마트',
                      },
                      {
                        value: '2',
                        text: '봉고3 트럭 다용도복합 냉동탑차 1톤',
                      },
                      {
                        value: '3',
                        text: '봉고3 EV 리스',
                      },
                      {
                        value: '4',
                        text: '봉고3 윙바디',
                      },
                    ]"
                    buttonTitle="세부모델 선택하기"
                    layerTitle="세부모델을 선택해 주세요"
                    id="layerAutoUsedLoanSearchModelDetail"
                    buttonId="layerAutoUsedLoanSearchModelDetailButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="차량번호"
            target="#layerAutoUsedLoanSearchModelCarNumber"
          >
            <FormInvalid :error="state.carNumberError">
              <InputBlock :error="state.carNumberError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="차량번호"
                    id="layerAutoUsedLoanSearchModelCarNumber"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <!--  //case : 한도조회 - 모델/연식조회 -->
        </div>

        <div><BasicButton :line="true">조회</BasicButton></div>

        <!-- case : 모델/연식조회시 나오는 영역 -->
        <BasicHr theme="quaternary" className="row-margin-block" />

        <div>셀렉트 테이블</div>

        <!-- case : 한도조회 - 모델/연식조회 선택시 -> 차량번호 조회결과  -->
        <BasicBox>
          <div class="flex-box row-margin-small">
            <div class="flex-box__cell">
              <CarEmblem code="1001" name="현대" />
            </div>
            <div class="flex-box__cell flex-box__cell--small">
              <p class="text-body-4 font-weight-light">2020년식</p>
            </div>
          </div>
          <h4 class="text-title-2 font-weight-medium">
            쏘나타 뉴 라이즈 1.6T-Gdi 스마트<br />(마이 스마트 핏)
          </h4>
          <ButtonList
            :wrap="true"
            align="center"
            :classNames="{
              wrap: 'row-margin-contents',
            }"
          >
            <ButtonListItem>
              <BasicButton size="regular">한도조회</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </BasicBox>
        <!-- //case : 한도조회 - 모델/연식조회 선택시 -> 차량번호 조회결과  -->
        <!-- case : 한도조회 - 모델/연식조회 선택시 -> 차량번호 조회결과 -> 한도조회 결과 -->
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <div class="flex-box row-margin-small">
                <div class="flex-box__cell">
                  <CarEmblem code="1001" name="현대" />
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <p class="text-body-4 font-weight-light">2020년식</p>
                </div>
              </div>
              <h4 class="text-title-2 font-weight-medium">
                쏘나타 뉴 라이즈 1.6T-Gdi 스마트<br />(마이 스마트 핏)
              </h4>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>한도금액</KeyValueTitle>
              <KeyValueText>2,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>비고</KeyValueTitle>
              <KeyValueText>연평균 주행거리 5만km 초과</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
        <!-- //case : 한도조회 - 모델/연식조회 선택시 -> 차량번호 조회결과 -> 한도조회 결과 -->
        <!-- //case : 모델/연식조회시 나오는 영역 -->
      </div>
    </FormList>
  </PageContents>
</template>

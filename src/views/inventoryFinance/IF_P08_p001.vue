<script>
// IF_P08_p001
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
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
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import SelectTable from '@/components/ui/table/SelectTable.vue';
import SelectTableRow from '@/components/ui/table/SelectTableRow.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicButton,
    BasicHr,
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
    InputBlock,
    InputBlockCell,
    SearchButton,
    SelectTable,
    SelectTableRow,
  },
  setup() {
    const state = reactive({
      categoryError: false,
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

    <div>
      <!-- Case : 2개 이상일 경우 노출 -->
      <BoxCheckList
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <BoxCheckListItem>
          <BoxCheck
            name="IF_P08_p001_productType"
            id="IF_P08_p001_productType_001"
            :defaultChecked="true"
          >
            <BoxCheckLabel>재고금융</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            name="IF_P08_p001_productType"
            id="IF_P08_p001_productType_002"
          >
            <BoxCheckLabel>재고금융Ⅱ</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
      <!-- // Case : 2개 이상일 경우 -->

      <section>
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
              <KeyValueText> 2021.11.10 ~ 2022.03.10 </KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>한도잔액</KeyValueTitle>
              <KeyValueText>2,000,000 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>한도금액</KeyValueTitle>
              <KeyValueText>200,000,000 원</KeyValueText>
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
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">한도조회</h3>

        <BoxCheckList
          :classNames="{
            wrap: 'row-margin-container-medium row-margin-top-none',
          }"
        >
          <BoxCheckListItem>
            <BoxCheck
              name="IF_P08_p001_searchType"
              id="IF_P08_p001_searchType_001"
              :defaultChecked="true"
            >
              <BoxCheckLabel>차량번호조회</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              name="IF_P08_p001_searchType"
              id="IF_P08_p001_searchType_002"
            >
              <BoxCheckLabel>모델/연식조회</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

        <!-- Case : 차량번호조회 선택시 노출 -->
        <div>
          <InputBlock>
            <InputBlockCell :flexible="true">
              <BasicInput
                type="search"
                title="차량번호조회 검색어"
                placeholder="차량번호 입력"
              />
            </InputBlockCell>
            <InputBlockCell type="search">
              <SearchButton />
            </InputBlockCell>
          </InputBlock>

          <!-- Case : 조회 후 노출 -->
          <div class="row-margin-container-medium">
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

              <!-- Case : 한도 조회 전 노출 -->
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
              <!-- // Case : 한도 조회 전 노출 -->

              <!-- Case : 한도 조회 후 노출 -->
              <BasicHr theme="quaternary" className="row-margin-contents" />
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
              <!-- // Case : 한도 조회 후 노출 -->
            </BasicBox>
          </div>
          <!-- // Case : 조회 후 노출 -->
        </div>
        <!-- // Case : 차량번호조회 선택시 노출 -->

        <!-- Case : 모델/연식조회 선택시 노출 -->
        <div>
          <FormList>
            <FormListItem titleText="분류" :forceFocus="true">
              <FormInvalid :error="state.categoryError">
                <BoxCheckList>
                  <BoxCheckListItem>
                    <BoxCheck
                      name="IF_P08_p001_category"
                      id="IF_P08_p001_category001"
                      :defaultChecked="true"
                    >
                      <BoxCheckLabel>국산차</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                  <BoxCheckListItem>
                    <BoxCheck
                      name="IF_P08_p001_category"
                      id="IF_P08_p001_category002"
                    >
                      <BoxCheckLabel>수입차</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                </BoxCheckList>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="브랜드"
              target="#IF_P08_p001_brand"
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
                      inputId="IF_P08_p001_brand"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="모델명"
              target="#IF_P08_p001_model"
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
                      inputId="IF_P08_p001_model"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="연식"
              target="#IF_P08_p001_year"
              :selectOnly="true"
            >
              <FormInvalid :error="state.yearError">
                <InputBlock :error="state.yearError">
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
                      ]"
                      title="연식 선택"
                      inputId="IF_P08_p001_year"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="엔진타입"
              target="#IF_P08_p001_engineType"
              :selectOnly="true"
            >
              <FormInvalid :error="state.engineTypeError">
                <InputBlock :error="state.engineTypeError">
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
                      title="엔진타입 선택"
                      inputId="IF_P08_p001_engineType"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="세부모델"
              target="#IF_P08_p001_detail"
              :selectOnly="true"
            >
              <FormInvalid :error="state.detailError">
                <InputBlock :error="state.detailError">
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
                      title="세부모델 선택"
                      inputId="IF_P08_p001_detail"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem titleText="차량번호" target="#IF_P08_p001_carNumber">
              <FormInvalid :error="state.carNumberError">
                <InputBlock :error="state.carNumberError">
                  <InputBlockCell :flexible="true">
                    <BasicInput title="차량번호" id="IF_P08_p001_carNumber" />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>

          <ButtonList>
            <ButtonListItem>
              <BasicButton :line="true">조회</BasicButton>
            </ButtonListItem>
          </ButtonList>

          <!-- Case : 조회 후 노출 -->
          <BasicHr theme="quaternary" className="row-margin-block" />
          <div>
            <SelectTable>
              <template v-slot:colgroup>
                <col style="width: 140px" />
                <col />
                <col style="width: 160px" />
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

            <!-- Case : 차량 선택 후 노출 -->
            <div class="row-margin-block-small">
              <BasicBox>
                <div class="flex-box row-margin-small">
                  <div class="flex-box__cell">
                    <CarEmblem code="1001" name="현대" />
                  </div>
                  <div class="flex-box__cell flex-box__cell--small">
                    <p class="text-body-4 font-weight-light">2020년식</p>
                  </div>
                </div>
                <h4 class="text-title-2 font-weight-medium">16노2109</h4>
                <p
                  class="text-body-3 color-gray-tertiary row-margin-item-small"
                >
                  쏘나타 뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
                </p>

                <!-- Case : 한도 조회 전 노출 -->
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
                <!-- // Case : 한도 조회 전 노출 -->

                <!-- Case : 한도 조회 후 노출 -->
                <BasicHr theme="quaternary" className="row-margin-contents" />
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
                <!-- // Case : 한도 조회 후 노출 -->
              </BasicBox>
            </div>
            <!-- // Case : 차량 선택 후 노출 -->
          </div>
          <!-- // Case : 조회 후 노출 -->
        </div>
        <!-- // Case : 모델/연식조회 선택시 노출 -->
      </section>
    </div>
  </PageContents>
</template>

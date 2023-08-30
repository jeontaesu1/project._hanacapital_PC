<script>
// MI_P00_l003
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import BankLogo from '@/components/ui/imageData/BankLogo.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';

import IconNotice from '@/assets/images/icon/information.svg?component';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    BasicDatepicker,
    BankLogo,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    InputBlock,
    InputBlockCell,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    NoticeText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UnitText,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    TextButton,
    RoundStatus,

    IconNotice,
  },
  setup() {
    const state = reactive({
      tab005DateError: false,
      tab005MinDate: '2022.11.30',
      tab005MaxDate: '2022.11.30',
    });

    const layer = ref(null);

    return {
      layer,
      state,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <ModalPopup size="large">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>계약 상세정보</PopupTitle>
        </ModalPopupHead>
      </template>

      <!-- Case : 개인금융 -->
      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-title-2 font-weight-medium">신용대출</h3>
            <div :class="[$style['division-info'], 'row-margin-item-small']">
              <ul :class="$style['division-info__list']">
                <li :class="$style['division-info__item']">
                  <div class="text-body-3 color-gray-tertiary">
                    L99999999999999
                  </div>
                </li>
              </ul>
            </div>
          </BasicBoxHeadLeft>
        </BasicBoxHead>

        <KeyValue :wrap="true" :col="3">
          <KeyValueItem>
            <KeyValueTitle>결제예정금액</KeyValueTitle>
            <KeyValueText>
              <div class="color-green">6,265,200 원</div>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>대출기간</KeyValueTitle>
            <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>상환방법</KeyValueTitle>
            <KeyValueText>원금균등상환</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>결제회차</KeyValueTitle>
            <KeyValueText>12/36</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>대출금액</KeyValueTitle>
            <KeyValueText>999,999,999 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>대출잔액</KeyValueTitle>
            <KeyValueText>999,999,999 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>결제일자</KeyValueTitle>
            <KeyValueText>05일</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <!-- Case : 연체 -->
      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-title-2 font-weight-medium">신용대출</h3>
            <div :class="[$style['division-info'], 'row-margin-item-small']">
              <ul :class="$style['division-info__list']">
                <li :class="$style['division-info__item']">
                  <div class="text-body-3 color-gray-tertiary">
                    L99999999999999
                  </div>
                </li>
              </ul>
            </div>
          </BasicBoxHeadLeft>
          <BasicBoxHeadRight>
            <RoundStatus theme="nonary" size="large" :block="true">
              연체
            </RoundStatus>
          </BasicBoxHeadRight>
        </BasicBoxHead>

        <KeyValue :wrap="true" :col="3">
          <KeyValueItem>
            <KeyValueTitle>결제예정금액</KeyValueTitle>
            <KeyValueText>
              <div class="color-green">6,265,200 원</div>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>대출기간</KeyValueTitle>
            <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>상환방법</KeyValueTitle>
            <KeyValueText>원금균등상환</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>결제회차</KeyValueTitle>
            <KeyValueText>12/36</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>대출금액</KeyValueTitle>
            <KeyValueText>999,999,999 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>대출잔액</KeyValueTitle>
            <KeyValueText>999,999,999 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>결제일자</KeyValueTitle>
            <KeyValueText>05일</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>
      <!-- // Case : 연체 -->
      <!-- // Case : 개인금융 -->

      <!-- Case : 오토금융 -->
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
        </BasicBoxHead>

        <KeyValue :wrap="true" :col="3">
          <KeyValueItem>
            <KeyValueTitle>결제예정금액</KeyValueTitle>
            <KeyValueText>
              <div class="color-green">6,265,200 원</div>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>계약기간</KeyValueTitle>
            <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>결제회차</KeyValueTitle>
            <KeyValueText>12/36</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>결제일</KeyValueTitle>
            <KeyValueText>05일</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <!-- Case : 연체 -->
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
            <RoundStatus theme="nonary" size="large" :block="true">
              연체
            </RoundStatus>
          </BasicBoxHeadRight>
        </BasicBoxHead>

        <KeyValue :wrap="true" :col="3">
          <KeyValueItem>
            <KeyValueTitle>결제예정금액</KeyValueTitle>
            <KeyValueText>
              <div class="color-green">6,265,200 원</div>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>계약기간</KeyValueTitle>
            <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>결제회차</KeyValueTitle>
            <KeyValueText>12/36</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>결제일</KeyValueTitle>
            <KeyValueText>05일</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>
      <!-- // Case : 연체 -->
      <!-- // Case : 오토금융 -->

      <UiTab :classNames="{ wrap: 'row-margin-block-small' }">
        <NavTab :useUiTab="true" :auto="true">
          <NavTabButton link="MI_P00_l003_tab001">당월 결제금액</NavTabButton>
          <NavTabButton link="MI_P00_l003_tab002">상환스케줄</NavTabButton>
          <NavTabButton link="MI_P00_l003_tab003">결제/청구 정보</NavTabButton>
          <NavTabButton link="MI_P00_l003_tab004">정비이력</NavTabButton>
          <NavTabButton link="MI_P00_l003_tab005">범칙금 조회</NavTabButton>
        </NavTab>

        <!-- 당월 결제금액 -->
        <UiTabPanel name="MI_P00_l003_tab001">
          <!-- Case : 개인금융 -->
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <UnitText size="large" rightUnit="원">3,000,000</UnitText>
                <div class="text-body-1 color-gray-secondary">
                  당월 결제예정금액
                </div>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <UiAccordion tagName="div">
              <UiAccordionItem tagName="div">
                <KeyValue :wrap="true" :col="3">
                  <KeyValueItem>
                    <KeyValueTitle>이번회차금액</KeyValueTitle>
                    <KeyValueText>6,265,200 원</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>기타비용</KeyValueTitle>
                    <KeyValueText>0 원</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>총 연체 금액</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box">
                        <div class="flex-box__cell flex-1">500,000 원</div>
                        <div class="flex-box__cell">
                          <UiAccordionOpener />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <UiAccordionLayer>
                  <div :class="$style['accordion-contents']">
                    <BasicBox theme="tertiary">
                      <KeyValue :wrap="true" :col="3">
                        <KeyValueItem v-for="i in 4" :key="i">
                          <KeyValueTitle
                            >{{ i }}회차 (2023.{{ i < 10 ? '0' : ''
                            }}{{ i }}.21)</KeyValueTitle
                          >
                          <KeyValueText>
                            <strong class="color-green">100,000 원</strong>
                          </KeyValueText>
                        </KeyValueItem>
                      </KeyValue>
                      <div class="row-margin-item-group">
                        <NoticeText>지연 배상금 포함</NoticeText>
                      </div>
                    </BasicBox>
                  </div>
                </UiAccordionLayer>
              </UiAccordionItem>
            </UiAccordion>
          </BasicBox>
          <!-- // Case : 개인금융 -->

          <!-- Case : 오토금융 -->
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <UnitText size="large" rightUnit="원">3,000,000</UnitText>
                <div class="text-body-1 color-gray-secondary">
                  당월 결제예정금액
                </div>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <UiAccordion tagName="div">
              <UiAccordionItem tagName="div">
                <KeyValue :wrap="true" :col="3">
                  <KeyValueItem>
                    <KeyValueTitle>이번회차금액</KeyValueTitle>
                    <KeyValueText>6,265,200 원</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>기타비용</KeyValueTitle>
                    <KeyValueText>0 원</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>선수금</KeyValueTitle>
                    <KeyValueText>0 원</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>범칙금</KeyValueTitle>
                    <KeyValueText>0 원</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>자동차세</KeyValueTitle>
                    <KeyValueText>0 원</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>총 연체 금액</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box">
                        <div class="flex-box__cell flex-1">500,000 원</div>
                        <div class="flex-box__cell">
                          <UiAccordionOpener />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <UiAccordionLayer>
                  <div :class="$style['accordion-contents']">
                    <BasicBox theme="tertiary">
                      <KeyValue :wrap="true" :col="3">
                        <KeyValueItem v-for="i in 4" :key="i">
                          <KeyValueTitle
                            >{{ i }}회차 (2023.{{ i < 10 ? '0' : ''
                            }}{{ i }}.21)</KeyValueTitle
                          >
                          <KeyValueText>
                            <strong class="color-green">100,000 원</strong>
                          </KeyValueText>
                        </KeyValueItem>
                      </KeyValue>
                      <div class="row-margin-item-group">
                        <NoticeText>지연 배상금 포함</NoticeText>
                      </div>
                    </BasicBox>
                  </div>
                </UiAccordionLayer>
              </UiAccordionItem>
            </UiAccordion>
          </BasicBox>
          <!-- // Case : 오토금융 -->
        </UiTabPanel>
        <!-- // 당월 결제금액 -->

        <!-- 상환스케줄 -->
        <UiTabPanel name="MI_P00_l003_tab002">
          <!-- Case : 렌트 -->
          <div :class="$style['basic-table']">
            <table>
              <colgroup>
                <col style="width: 76px" />
                <col style="width: 114px" />
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>회차</th>
                  <th>납부계획일</th>
                  <th>공급가액</th>
                  <th>부가세액</th>
                  <th>매회렌트료</th>
                  <th>선납렌트료</th>
                  <th>납부렌트료</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>2022.03.04</td>
                  <td>0 원</td>
                  <td>0 원</td>
                  <td>0 원</td>
                  <td>0 원</td>
                  <td>0 원</td>
                </tr>
                <tr v-for="i in 12" :key="i">
                  <td>{{ i }}</td>
                  <td>2022.03.04</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2">합계</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <!-- // Case : 렌트 -->

          <!-- Case : 자동차 리스 -->
          <div :class="$style['basic-table']">
            <table>
              <colgroup>
                <col style="width: 76px" />
                <col style="width: 114px" />
                <col />
                <col />
                <col />
                <col style="width: 150px" />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>회차</th>
                  <th>납부계획일</th>
                  <th>①차량분</th>
                  <th>②차세분</th>
                  <th>③보험분</th>
                  <th>매회리스료(④=①~③)</th>
                  <th>⑤선납리스료</th>
                  <th>납부리스료(④-⑤)</th>
                  <th>미회수원금</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>2022.03.04</td>
                  <td>0 원</td>
                  <td>0 원</td>
                  <td>0 원</td>
                  <td>0 원</td>
                  <td>0 원</td>
                  <td>0 원</td>
                  <td>0 원</td>
                </tr>
                <tr v-for="i in 12" :key="i">
                  <td>{{ i }}</td>
                  <td>2022.03.04</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2">합계</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <!-- // Case : 자동차 리스 -->

          <!-- Case : 일반 리스 -->
          <div :class="$style['basic-table']">
            <table>
              <colgroup>
                <col style="width: 76px" />
                <col style="width: 114px" />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>회차</th>
                  <th>납부계획일</th>
                  <th>원금</th>
                  <th>이자</th>
                  <th>①매회리스료</th>
                  <th>②장기선수금</th>
                  <th>납부리스료(④-⑤)</th>
                  <th>미회수원금</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>2022.03.04</td>
                  <td>0 원</td>
                  <td>0 원</td>
                  <td>0 원</td>
                  <td>0 원</td>
                  <td>0 원</td>
                  <td>0 원</td>
                </tr>
                <tr v-for="i in 12" :key="i">
                  <td>{{ i }}</td>
                  <td>2022.03.04</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2">합계</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <!-- // Case : 일반 리스 -->

          <!-- Case : 그 외의 상품 -->
          <div :class="$style['basic-table']">
            <table>
              <colgroup>
                <col style="width: 76px" />
                <col style="width: 114px" />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>회차</th>
                  <th>납부계획일</th>
                  <th>원금</th>
                  <th>이자</th>
                  <th>취급수수료</th>
                  <th>①매회납부금</th>
                  <th>②기타금액</th>
                  <th>납부금액 (①+②)</th>
                  <th>미회수원금</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>2022.03.04</td>
                  <td>0 원</td>
                  <td>0 원</td>
                  <td>0 원</td>
                  <td>0 원</td>
                  <td>0 원</td>
                  <td>0 원</td>
                  <td>0 원</td>
                </tr>
                <tr v-for="i in 12" :key="i">
                  <td>{{ i }}</td>
                  <td>2022.03.04</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2">합계</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td>999,999,999 원</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <!-- // Case : 그 외의 상품 -->
        </UiTabPanel>
        <!-- // 상환스케줄 -->

        <!-- 결제/청구 정보 -->
        <UiTabPanel name="MI_P00_l003_tab003">
          <div :class="$style['section-layout']">
            <div :class="$style['section-layout__col']">
              <section :class="$style['section-layout__row']">
                <BasicBox :className="$style['section-layout__box']">
                  <BasicBoxHead>
                    <BasicBoxHeadLeft>
                      <h3 class="text-title-2 font-weight-medium">연락처</h3>
                    </BasicBoxHeadLeft>
                  </BasicBoxHead>

                  <KeyValue>
                    <KeyValueItem>
                      <KeyValueTitle>휴대전화</KeyValueTitle>
                      <KeyValueText>010-1234-5678</KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem>
                      <KeyValueTitle>자택전화</KeyValueTitle>
                      <KeyValueText>010-1234-5678</KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem>
                      <KeyValueTitle>직장전화</KeyValueTitle>
                      <KeyValueText>010-1234-5678</KeyValueText>
                    </KeyValueItem>
                  </KeyValue>
                </BasicBox>
              </section>
              <section :class="$style['section-layout__row']">
                <BasicBox :className="$style['section-layout__box']">
                  <BasicBoxHead>
                    <BasicBoxHeadLeft>
                      <h3 class="text-title-2 font-weight-medium">
                        청구방법 및 주소지
                      </h3>
                    </BasicBoxHeadLeft>
                  </BasicBoxHead>

                  <KeyValue>
                    <KeyValueItem>
                      <KeyValueTitle>청구방법/청구지</KeyValueTitle>
                      <KeyValueText>우편/등본지</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem>
                      <KeyValueTitle>청구지 주소</KeyValueTitle>
                      <KeyValueText
                        >서울시 강남구 서초동 강남대로 17길 50
                        17층</KeyValueText
                      >
                    </KeyValueItem>

                    <KeyValueItem>
                      <KeyValueTitle>선수금</KeyValueTitle>
                      <KeyValueText>0 원</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem>
                      <KeyValueTitle>이메일</KeyValueTitle>
                      <KeyValueText>test@test.com</KeyValueText>
                    </KeyValueItem>
                  </KeyValue>
                </BasicBox>
              </section>
            </div>
            <div :class="$style['section-layout__col']">
              <section :class="$style['section-layout__row']">
                <BasicBox :className="$style['section-layout__box']">
                  <BasicBoxHead>
                    <BasicBoxHeadLeft>
                      <h3 class="text-title-2 font-weight-medium">계좌정보</h3>
                    </BasicBoxHeadLeft>
                    <BasicBoxHeadRight>
                      <div class="flex-box">
                        <div class="flex-box__cell">
                          <TextButton
                            theme="quaternary"
                            textSize="regular"
                            iconSize="regular"
                            :block="true"
                          >
                            자동이체계좌 유의사항
                            <template v-slot:rightIcon>
                              <IconNotice />
                            </template>
                          </TextButton>
                        </div>
                        <div class="flex-box__cell flex-box__cell--medium">
                          <TextButton
                            theme="quaternary"
                            textSize="regular"
                            iconSize="regular"
                            :block="true"
                          >
                            가상계좌 유의사항
                            <template v-slot:rightIcon>
                              <IconNotice />
                            </template>
                          </TextButton>
                        </div>
                      </div>
                    </BasicBoxHeadRight>
                  </BasicBoxHead>

                  <KeyValue>
                    <KeyValueItem>
                      <KeyValueTitle>자동이체 계좌</KeyValueTitle>
                      <KeyValueText
                        >하나 123-123456-12345 (홍길동)</KeyValueText
                      >
                    </KeyValueItem>
                    <KeyValueItem>
                      <KeyValueTitle>가상계좌</KeyValueTitle>
                      <KeyValueText>
                        <KeyValue>
                          <KeyValueItem
                            :classNames="{ item: 'justify-conten-end' }"
                          >
                            <KeyValueTitle>
                              <div class="flex-box">
                                <div class="flex-box__cell">
                                  <BankLogo size="small" code="004" />
                                </div>
                                <div
                                  class="flex-box__cell flex-box__cell--mini"
                                >
                                  국민
                                </div>
                              </div>
                            </KeyValueTitle>
                            <KeyValueText :classNames="{ text: 'flex-none' }"
                              >123-456-78901234</KeyValueText
                            >
                          </KeyValueItem>
                          <KeyValueItem
                            :classNames="{ item: 'justify-conten-end' }"
                          >
                            <KeyValueTitle>
                              <div class="flex-box">
                                <div class="flex-box__cell">
                                  <BankLogo size="small" code="011" />
                                </div>
                                <div
                                  class="flex-box__cell flex-box__cell--mini"
                                >
                                  농협
                                </div>
                              </div>
                            </KeyValueTitle>
                            <KeyValueText :classNames="{ text: 'flex-none' }"
                              >123-456-78901234</KeyValueText
                            >
                          </KeyValueItem>
                          <KeyValueItem
                            :classNames="{ item: 'justify-conten-end' }"
                          >
                            <KeyValueTitle>
                              <div class="flex-box">
                                <div class="flex-box__cell">
                                  <BankLogo size="small" code="020" />
                                </div>
                                <div
                                  class="flex-box__cell flex-box__cell--mini"
                                >
                                  우리
                                </div>
                              </div>
                            </KeyValueTitle>
                            <KeyValueText :classNames="{ text: 'flex-none' }"
                              >123-456-78901234</KeyValueText
                            >
                          </KeyValueItem>
                          <KeyValueItem
                            :classNames="{ item: 'justify-conten-end' }"
                          >
                            <KeyValueTitle>
                              <div class="flex-box">
                                <div class="flex-box__cell">
                                  <BankLogo size="small" code="081" />
                                </div>
                                <div
                                  class="flex-box__cell flex-box__cell--mini"
                                >
                                  하나
                                </div>
                              </div>
                            </KeyValueTitle>
                            <KeyValueText :classNames="{ text: 'flex-none' }"
                              >123-456-78901234</KeyValueText
                            >
                          </KeyValueItem>
                          <KeyValueItem
                            :classNames="{ item: 'justify-conten-end' }"
                          >
                            <KeyValueTitle>
                              <div class="flex-box">
                                <div class="flex-box__cell">
                                  <BankLogo size="small" code="088" />
                                </div>
                                <div
                                  class="flex-box__cell flex-box__cell--mini"
                                >
                                  신한
                                </div>
                              </div>
                            </KeyValueTitle>
                            <KeyValueText :classNames="{ text: 'flex-none' }"
                              >123-456-78901234</KeyValueText
                            >
                          </KeyValueItem>
                        </KeyValue>
                      </KeyValueText>
                    </KeyValueItem>
                  </KeyValue>
                </BasicBox>
              </section>
            </div>
          </div>
        </UiTabPanel>
        <!-- // 결제/청구 정보 -->

        <!-- 정비이력 -->
        <UiTabPanel name="MI_P00_l003_tab004">
          <NoticeText>
            사고/고장접수, 정비관련 문의사항은 당사 24시간 콜센터(1688-2040)로
            연락바랍니다.
          </NoticeText>
          <div :class="[$style['basic-table'], 'row-margin-contents']">
            <table>
              <colgroup>
                <col style="width: 80px" />
                <col style="width: 115px" />
                <col />
                <col style="width: 114px" />
                <col style="width: 114px" />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>정비형태</th>
                  <th>주행거리</th>
                  <th>수리점</th>
                  <th>입고일</th>
                  <th>출고일</th>
                  <th>정비/수리내역</th>
                </tr>
              </thead>
              <tbody>
                <!-- Case : 이력 없을 때 -->
                <tr>
                  <td colspan="6">
                    <div :class="$style['empty']">
                      <p :class="$style['empty__text']">정비이력이 없습니다.</p>
                    </div>
                  </td>
                </tr>
                <!-- // Case : 이력 없을 때 -->

                <!-- Case : 이력 있을 때 -->
                <tr>
                  <td>정비</td>
                  <td>999,999km</td>
                  <td>서울 하나카수리센터</td>
                  <td>2022.04.04</td>
                  <td>2022.04.08</td>
                  <td>엔진오일/에어컨필터/타이어</td>
                </tr>
                <tr>
                  <td>사고</td>
                  <td>999,999km</td>
                  <td>서울 하나카수리센터 - 구로점</td>
                  <td>2022.04.04</td>
                  <td>2022.04.08</td>
                  <td>엔진오일/에어컨필터/타이어/유리긁힘</td>
                </tr>
                <!-- // Case : 이력 있을 때 -->
              </tbody>
            </table>
          </div>
        </UiTabPanel>
        <!-- // 정비이력 -->

        <!-- 범칙금 조회 -->
        <UiTabPanel name="MI_P00_l003_tab005">
          <div class="flex-box">
            <div class="flex-box__cell">
              <NoticeText>
                전체 차량에 대한 범칙금 내역이 필요하실 경우 [온라인지점 &gt;
                계약 현황 &gt; 범칙금/자동차세 내역 조회] 메뉴를 이용하세요.
              </NoticeText>
            </div>
            <div class="flex-box__cell">
              <TextButton
                theme="secondary"
                :underline="true"
                textSize="regular"
                :block="true"
                >바로가기</TextButton
              >
            </div>
          </div>

          <FormList :wrap="true" :classNames="{ wrap: 'row-margin-contents' }">
            <FormListItem titleText="조회기간">
              <FormInvalid :error="state.tab005DateError">
                <InputBlock :error="state.tab005DateError">
                  <InputBlockCell :flexible="true">
                    <BasicDatepicker
                      title="조회기간 시작 날짜"
                      id="MI_P00_l003_tab005MinDateStart"
                      :max="state.tab005MaxDate"
                      v-model="state.tab005MinDate"
                    />
                  </InputBlockCell>
                  <InputBlockCell margin="regular">~</InputBlockCell>
                  <InputBlockCell :flexible="true" margin="regular">
                    <BasicDatepicker
                      title="조회기간 종료 날짜"
                      id="MI_P00_l003_tab005MaxDateEnd"
                      :min="state.tab005MinDate"
                      v-model="state.tab005MaxDate"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
                <FormHelpText>조회기간은 최대 1년까지 가능해요.</FormHelpText>
              </FormInvalid>
            </FormListItem>
          </FormList>

          <div :class="$style['basic-table']">
            <table>
              <colgroup>
                <col />
                <col style="width: 160px" />
                <col style="width: 140px" />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>차량명</th>
                  <th>위반일자</th>
                  <th>과세금액</th>
                  <th>위반내용</th>
                  <th>발생장소</th>
                  <th>관할기관</th>
                </tr>
              </thead>
              <tbody>
                <!-- Case : 이력 없을 때 -->
                <tr>
                  <td colspan="6">
                    <div :class="$style['empty']">
                      <p :class="$style['empty__text']">범칙금이 없습니다.</p>
                    </div>
                  </td>
                </tr>
                <!-- // Case : 이력 없을 때 -->

                <!-- Case : 이력 있을 때 -->
                <tr>
                  <td>BMW 435d</td>
                  <td>2022.05.04 22:23</td>
                  <td>999,999,999 원</td>
                  <td>32km/h 초과</td>
                  <td>용산전자상가</td>
                  <td>서울 용산경찰서</td>
                </tr>
                <tr>
                  <td>BMW 435d</td>
                  <td>2022.05.04 22:23</td>
                  <td>999,999,999 원</td>
                  <td>32km/h 초과</td>
                  <td>용산전자상가</td>
                  <td>서울 용산경찰서</td>
                </tr>
                <!-- // Case : 이력 있을 때 -->
              </tbody>
            </table>
          </div>
        </UiTabPanel>
        <!-- // 범칙금 조회 -->
      </UiTab>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          :col="5"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_l003.scss';
</style>

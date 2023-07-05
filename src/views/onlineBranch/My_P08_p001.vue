<script>
// My_P08_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

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
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    NoticeText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
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
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'onlineBranch');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });
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
            text: '온라인 지점',
            to: '/',
          },
          {
            text: '계약정보',
          },
          {
            text: '만기후처리',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>
        렌터카 계약 만기 1개월 전까지<br />
        만기후처리를 반드시 선택해 주세요
      </PageTitle>
    </PageHead>

    <BasicBox>
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <h3 class="text-title-2 font-weight-medium">렌터카 07호3994</h3>
        </BasicBoxHeadLeft>
      </BasicBoxHead>

      <KeyValue :wrap="true">
        <KeyValueItem>
          <KeyValueTitle>계약기간</KeyValueTitle>
          <KeyValueText>2016.01.01-2021.01.01</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>실납렌트료(VAT포함)</KeyValueTitle>
          <KeyValueText>999,999원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>잔존가치(VAT포함)</KeyValueTitle>
          <KeyValueText>99,999,999원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>약정주행거리</KeyValueTitle>
          <KeyValueText>999,999km</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>보증금</KeyValueTitle>
          <KeyValueText>99,999,999원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>정비서비스</KeyValueTitle>
          <KeyValueText>프리미엄</KeyValueText>
        </KeyValueItem>
      </KeyValue>
    </BasicBox>

    <UiTab :classNames="{ wrap: 'row-margin-block' }">
      <NavTab :useUiTab="true">
        <NavTabButton link="My_P08_p001_tab001">연장</NavTabButton>
        <NavTabButton link="My_P08_p001_tab002">반환</NavTabButton>
        <NavTabButton link="My_P08_p001_tab003">구매</NavTabButton>
      </NavTab>

      <UiTabPanel name="My_P08_p001_tab001">
        <div>
          <section class="row-margin-block-small">
            <h3 class="text-title-1 row-margin-contents">
              만기후 연장(재렌트) 진행절차
            </h3>

            <div :class="$style['step']">
              <ul :class="$style['step__list']">
                <li :class="$style['step__item']">
                  <div :class="$style['step__inner']">
                    <div :class="$style['step__contents']">
                      <div :class="$style['step__badge']">STEP 1</div>
                      <p :class="$style['step__text']">
                        홈페이지/모바일(웹)을 통하여
                        <strong> 재렌트 신청 및 견적을 요청 </strong>합니다.
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
                        <strong>재렌트 견적 발송 및 재렌트 상담</strong>을
                        진행합니다.
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
              </ul>
            </div>
          </section>

          <section class="row-margin-block-small">
            <h3 class="text-title-1 row-margin-contents">상품안내</h3>

            <section class="row-margin-contents">
              <h4
                class="text-body-3 color-gray font-weight-medium row-margin-item"
              >
                취급조건
              </h4>

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
                    'color-black',
                    'text-title-2',
                    'font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="[$style['basic-list__content']]">
                    <div>계약기간: 12개월 ~ 48개월</div>
                    <div class="text-body-3 color-gray row-margin-small">
                      사용연한 5년 이내 (이전 계약기간 포함)
                    </div>
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'color-black',
                    'text-title-2',
                    'font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="[$style['basic-list__content']]">
                    <div>
                      렌트료 포함 내역 : 취득세, 보험료, 자동차세, 정비료
                    </div>
                    <div class="text-body-3 color-gray row-margin-small">
                      (계약상품에 따라 포함이 안될 수 있음)
                    </div>
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'color-black',
                    'text-title-2',
                    'font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="[$style['basic-list__content']]">
                    <div>정비상품 : Special, Self 상품</div>
                    <div class="text-body-3 color-gray row-margin-small">
                      (기존 정비상품 동일 적용)
                    </div>
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'color-black',
                    'text-title-2',
                    'font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="[$style['basic-list__content']]">
                    만기 시 처리: 계약 종료 후 고객의 의향에 따라 반환, 구매,
                    연장 가능
                  </div>
                </li>
              </ul>
            </section>

            <section class="row-margin-contents">
              <h4
                class="text-body-3 color-gray font-weight-medium row-margin-item"
              >
                연체이자율
              </h4>

              <p class="text-title-2">연20%</p>
            </section>

            <section class="row-margin-contents">
              <h4
                class="text-body-3 color-gray font-weight-medium row-margin-item"
              >
                중도해지수수료
              </h4>

              <p class="text-title-2">
                중도해지수수료율 = 잔여렌트료 X 해지위약금율
              </p>

              <ul
                :class="[
                  $style['basic-list'],
                  $style['basic-list--regular'],
                  'row-margin-item',
                ]"
              >
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-5',
                    'font-weight-regular',
                    'color-gray-secondary',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']">※</div>
                  <div :class="$style['basic-list__content']">
                    잔여렌트료 = 앞면표기 "월렌트료" X (미청구 잔여개월수 -
                    1개월) + 해지시점 당월 잔여렌트료
                  </div>
                </li>
              </ul>
            </section>

            <section class="row-margin-contents">
              <h4
                class="text-body-3 color-gray font-weight-medium row-margin-item"
              >
                위약금률
              </h4>

              <div :class="$style['basic-table']">
                <table>
                  <thead>
                    <tr>
                      <th>2년 이하</th>
                      <th>3년 이하</th>
                      <th>4년 이하</th>
                      <th>4년 초과</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>35%</td>
                      <td>30%</td>
                      <td>25%</td>
                      <td>20%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section class="row-margin-contents">
              <h4
                class="text-body-3 color-gray font-weight-medium row-margin-item"
              >
                승계수수료
              </h4>

              <p class="text-title-2">30만원 (VAT 별도)</p>
            </section>
          </section>

          <section class="row-margin-block-small">
            <h3 class="text-title-1 row-margin-contents">유의사항</h3>

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
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  계약을 체결하기 전에 자세한 내용은 상품설명서와 약관을
                  읽어보시기 바랍니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-medium',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  상환능력에 비해 대출금이 과도할 경우 귀하의 신용등급 또는
                  개인신용평점이 하락할 수 있습니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-medium',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  개인신용평점 하락 시 금융거래와 관련된 불이익 발생할 수
                  있습니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-medium',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  일정기간 원리금을 연체할 경우, 모든 원리금을 변제할 의무가
                  발생할 수 있습니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  대출취급이 부적정한 경우(연체금 보유, 개인신용평점 낮음)
                  대출이 제한될 수 있습니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  금융소비자는 해당상품에 대하여 설명을 받을 권리가 있으며, 그
                  설명을 듣고 내용을 충분히 이해한 후 거래하시기 바랍니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  금리인하요구권 및 대출계약 철회권에 대한 자세한 사항은 당사
                  홈페이지에서 확인하시기 바랍니다.
                </div>
              </li>
            </ul>
            <ul :class="[$style['basic-list'], 'row-margin-contents']">
              <li :class="$style['basic-list__item']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  준법심의필 xx-xxxx<br />
                  (2022.01.01~2022.12.31)
                </div>
              </li>
            </ul>
          </section>
        </div>

        <ButtonList>
          <ButtonListItem>
            <BasicButton>연장 신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </UiTabPanel>

      <UiTabPanel name="My_P08_p001_tab002">
        <div>
          <section class="row-margin-block-small">
            <h3 class="text-title-1 row-margin-contents">
              만기후 반환 진행절차
            </h3>

            <div :class="$style['step']">
              <ul :class="$style['step__list']">
                <li :class="$style['step__item']">
                  <div :class="$style['step__inner']">
                    <div :class="$style['step__contents']">
                      <div :class="$style['step__badge']">STEP 1</div>
                      <p :class="$style['step__text']">
                        반환 일시, 장소 등
                        <strong>반환정보를 등록</strong>합니다.
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
                      <div :class="$style['step__badge']">STEP 2</div>
                      <p :class="$style['step__text']">
                        지정 일시, 장소에서
                        <strong>자동차를 반환</strong>합니다.
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
                      <div :class="$style['step__badge']">STEP 3</div>
                      <div :class="$style['step__text']">
                        지정 평가기관에서
                        <strong>반환자동차의 상태 및 성능을 평가</strong>합니다.
                        <div class="row-margin-item">
                          <NoticeText
                            >평가결과에 따라 ‘차량평가정산금’이 발생될 수
                            있습니다.</NoticeText
                          >
                        </div>
                      </div>
                    </div>
                    <div :class="$style['step__icon']">
                      <IconDocumentSearch />
                    </div>
                  </div>
                </li>
                <li :class="$style['step__item']">
                  <div :class="$style['step__inner']">
                    <div :class="$style['step__contents']">
                      <div :class="$style['step__badge']">STEP 4</div>
                      <p :class="$style['step__text']">
                        반환등록 시
                        <strong>발생 비용을 정산</strong>(입금/지급)합니다.
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
                        <strong>반환처리가 완료</strong>됩니다.
                      </p>
                    </div>
                    <div :class="$style['step__icon']">
                      <IconCompleted />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <ButtonList>
          <ButtonListItem>
            <BasicButton>반환 신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </UiTabPanel>

      <UiTabPanel name="My_P08_p001_tab003">
        <div>
          <section class="row-margin-block-small">
            <h3 class="text-title-1 row-margin-contents">
              만기후 구매 진행절차
            </h3>

            <div :class="$style['step']">
              <ul :class="$style['step__list']">
                <li :class="$style['step__item']">
                  <div :class="$style['step__inner']">
                    <div :class="$style['step__contents']">
                      <div :class="$style['step__badge']">STEP 1</div>
                      <p :class="$style['step__text']">
                        <strong>구매방법</strong>(직접/이전대행)선택 및
                        <strong>구매정보</strong>(매도용 인감신청정보)를
                        입력합니다.
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
                      <div :class="$style['step__badge']">STEP 2</div>
                      <p :class="$style['step__text']">
                        구매 등록 시 발생
                        <strong>비용을 정산</strong> (입금/지급)합니다.
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
                      <div :class="$style['step__badge']">STEP 3</div>
                      <p :class="$style['step__text']">
                        차량 명의를 고객명의로
                        <strong>소유권 이전등록</strong> 합니다.
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
                        <strong>구매 처리가 완료</strong>됩니다.
                      </p>
                    </div>
                    <div :class="$style['step__icon']">
                      <IconCarCheck />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <ButtonList>
          <ButtonListItem>
            <BasicButton>구매 신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </UiTabPanel>
    </UiTab>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/My_P08_p001.scss';
</style>

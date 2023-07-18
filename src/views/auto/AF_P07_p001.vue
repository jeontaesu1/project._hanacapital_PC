<script>
// AF_P07_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import { RouterLink } from 'vue-router';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

import IconPerson from '@/assets/images/icon/person.svg?component';
import IconRate from '@/assets/images/icon/rate.svg?component';
import IconAssignment from '@/assets/images/icon/assignment.svg?component';
import IconTakingOver from '@/assets/images/icon/taking-over.svg?component';
import IconPhone from '@/assets/images/icon/phone.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconPersonalTerms from '@/assets/images/icon/personal-terms.svg?component';
import IconDeposit from '@/assets/images/icon/deposit.svg?component';
import IconCallMint from '@/assets/images/icon/call-mint.svg?component';
import IconCompleted from '@/assets/images/icon/completed.svg?component';
import IconCalculate from '@/assets/images/icon/calculate.svg?component';
import IconConsultation from '@/assets/images/icon/consultation.svg?component';
import Icon1QCapital from '@/assets/images/icon/1qcapital.svg?component';

export default {
  components: {
    RouterLink,
    PageContents,
    LocationBar,
    BasicButton,
    ButtonList,
    ButtonListItem,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    BasicHr,
    NoticeText,
    IconPerson,
    IconRate,
    IconAssignment,
    IconTakingOver,
    IconPhone,
    IconSend,
    IconPersonalTerms,
    IconDeposit,
    IconCallMint,
    IconCompleted,
    IconCalculate,
    IconConsultation,
    Icon1QCapital,
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
  },
};
</script>

<template>
  <PageContents size="full">
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
            text: '오토승계',
            to: '/',
          },
        ]"
      />
    </template>

    <div :class="$style['product-top']">
      <div :class="$style['product-top__contents']">
        <div :class="$style['product-top__head']">
          <h2 :class="$style['product-top__sub-text']">오토승계</h2>
          <p :class="$style['product-top__main-text']">
            원래 조건 그대로<br />
            모바일 전용 간편 승계 서비스
          </p>
        </div>

        <div :class="$style['product-top__image']">
          <img src="@/assets/images/contents/img-change-auto-loan.png" alt="" />
        </div>

        <div
          :class="[
            $style['product-detail'],
            $style['product-detail--main'],
            'row-margin-container',
          ]"
        >
          <ul :class="$style['product-detail__list']">
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconPerson />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">대상</div>
                <div :class="$style['product-detail__desc']">
                  양도인 · 양수인
                </div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconRate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">금리</div>
                <div :class="$style['product-detail__desc']">
                  양도인 적용금리<br />
                  동일 적용
                </div>
                <div class="text-body-3 font-weight-light row-margin-mini">
                  (동일조건승계)
                </div>
              </div>
            </li>
          </ul>
        </div>

        <ButtonList :wrap="true" :col="4" align="center">
          <ButtonListItem>
            <BasicButton theme="tertiary">양도인 신청</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>양수인 신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
    </div>

    <div class="wide-wrap row-margin-block-group">
      <UiTab>
        <NavTab
          :useUiTab="true"
          :classNames="{ wrap: 'row-margin-block-small' }"
        >
          <NavTabButton link="AF_P07_p001_tab001">리스승계</NavTabButton>
          <NavTabButton link="AF_P07_p001_tab002">렌트승계</NavTabButton>
        </NavTab>

        <!-- 리스승계 -->
        <UiTabPanel name="AF_P07_p001_tab001">
          <section class="row-margin-block">
            <h3 class="text-big-3 font-weight-medium row-margin-item-group">
              리스승계란?
            </h3>
            <p class="text-body-1 color-gray-secondary">
              계약상의 권리와 의무를 제3자에게 승계하고자 하는 경우 금융회사는
              신규로 리스계약을 체결하는 절차와 동일하게 금융회사가 정한
              심사기준에 따라 이를 승인합니다.
            </p>
            <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }"
              >주의 심사비용 등 승계 조건에 따라 소요되는 비용으로 승계수수료가
              부과됩니다.</NoticeText
            >
            <div :class="[$style['icon-info'], 'row-margin-container-medium']">
              <ul :class="$style['icon-info__list']">
                <li :class="$style['icon-info__item']">
                  <div :class="$style['icon-info__block']">
                    <div :class="$style['icon-info__icon']">
                      <IconAssignment />
                    </div>
                    <div :class="$style['icon-info__contents']">
                      <div :class="$style['icon-info__title']">양도인</div>
                      <div :class="$style['icon-info__text']">
                        리스 승계 시 위약금이 발생하지 않아 유리합니다.
                      </div>
                    </div>
                  </div>
                </li>
                <li :class="$style['icon-info__item']">
                  <div :class="$style['icon-info__block']">
                    <div :class="$style['icon-info__icon']">
                      <IconTakingOver />
                    </div>
                    <div :class="$style['icon-info__contents']">
                      <div :class="$style['icon-info__title']">양수인</div>
                      <div :class="$style['icon-info__text']">
                        초기비용이 상대적으로 저렴하고, 등록 비용이 별도로
                        발생하지 않아 유리합니다.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <UiTab>
            <NavTab
              :useUiTab="true"
              :classNames="{ wrap: 'row-margin-block-small' }"
            >
              <NavTabButton link="AF_P07_p001_tab001_001"
                >상품안내</NavTabButton
              >
              <NavTabButton link="AF_P07_p001_tab001_002"
                >진행절차</NavTabButton
              >
              <NavTabButton link="AF_P07_p001_tab001_003"
                >유의사항</NavTabButton
              >
            </NavTab>

            <!-- 상품안내 -->
            <UiTabPanel name="AF_P07_p001_tab001_001">
              <div :class="$style['product-info']">
                <ul :class="$style['product-info__list']">
                  <li :class="$style['product-info__item']">
                    <div :class="$style['product-info__block']">
                      <div :class="$style['product-info__head']">
                        <div :class="$style['product-info__icon']">
                          <IconPerson />
                        </div>
                        <div :class="$style['product-info__title']">대상</div>
                      </div>
                      <div :class="$style['product-info__contents']">
                        <div :class="$style['product-info__text']">
                          양도인 · 양수인
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="row-margin-block-small">
                <section class="row-margin-contents">
                  <h3
                    class="text-body-3 font-weight-medium color-gray row-margin-item"
                  >
                    상환방법
                  </h3>
                  <p class="text-title-2">원리금균등상환</p>
                  <p class="text-body-3 color-gray row-margin-small">
                    (월 리스트 자동이체(통장))
                  </p>
                </section>
                <section class="row-margin-contents">
                  <h3
                    class="text-body-3 font-weight-medium color-gray row-margin-item"
                  >
                    중도상환수수료
                  </h3>
                  <p class="text-title-2">없음</p>
                </section>
                <section class="row-margin-contents">
                  <h3
                    class="text-body-3 font-weight-medium color-gray row-margin-item"
                  >
                    금융리스 연체이자율
                  </h3>
                  <p class="text-title-2">약정이율+3%</p>
                  <p class="text-body-3 color-gray row-margin-small">
                    (법정최고금리 연 20% 이내)
                  </p>
                </section>
                <section class="row-margin-contents">
                  <h3
                    class="text-body-3 font-weight-medium color-gray row-margin-item"
                  >
                    운용리스 연체이자율
                  </h3>
                  <p class="text-title-2">연 20%</p>
                </section>
                <section class="row-margin-contents">
                  <h3
                    class="text-body-3 font-weight-medium color-gray row-margin-item"
                  >
                    이자부과시기
                  </h3>
                  <p class="text-title-2">매월 후취</p>
                </section>
                <section class="row-margin-contents">
                  <h3
                    class="text-body-3 font-weight-medium color-gray row-margin-item-medium"
                  >
                    수수료
                  </h3>
                  <div :class="$style['basic-table']">
                    <table>
                      <colgroup>
                        <col style="width: 76px" />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>
                            손해<br />
                            배상금
                          </th>
                          <td class="align-left">
                            <div :class="$style['contents-list']">
                              <ol
                                :class="[
                                  $style['contents-list__list'],
                                  $style['contents-list__list--quinary'],
                                ]"
                              >
                                <li :class="$style['contents-list__item']">
                                  <div :class="$style['contents-list__head']">
                                    <div
                                      :class="$style['contents-list__symbol']"
                                    >
                                      주1
                                    </div>
                                    <div
                                      :class="$style['contents-list__title']"
                                    >
                                      <div class="color-green">
                                        중도해지손해배상금
                                      </div>
                                      <div
                                        class="text-body-4 font-weight-light row-margin-small"
                                      >
                                        미회수원금 X 중도해지손해배상금률
                                      </div>
                                      <div
                                        class="text-body-4 font-weight-light row-margin-small"
                                      >
                                        미회수원금 X 최고요율(80)% X (잔여기간
                                        월수/리스기간 전체월수)
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li :class="$style['contents-list__item']">
                                  <div :class="$style['contents-list__head']">
                                    <div
                                      :class="$style['contents-list__symbol']"
                                    >
                                      주2
                                    </div>
                                    <div
                                      :class="$style['contents-list__title']"
                                    >
                                      <div class="color-green">
                                        규정손해배상금(차랑인수-운용리스)
                                      </div>
                                      <div
                                        class="text-body-4 font-weight-light row-margin-small"
                                      >
                                        미회수원금 X 규정손해배상금률
                                      </div>
                                      <div
                                        class="text-body-4 font-weight-light row-margin-small"
                                      >
                                        미회수원금 X 최고요율(20)% X (잔여기간
                                        월수/리스기간 전체월수)
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li :class="$style['contents-list__item']">
                                  <div :class="$style['contents-list__head']">
                                    <div
                                      :class="$style['contents-list__symbol']"
                                    >
                                      주3
                                    </div>
                                    <div
                                      :class="$style['contents-list__title']"
                                    >
                                      <div class="color-green">
                                        규정손해배상금(차량인수-금융리스)
                                      </div>
                                      <div
                                        class="text-body-4 font-weight-light row-margin-small"
                                      >
                                        미회수원금 X 규정손해배상금률
                                      </div>
                                      <div
                                        class="text-body-4 font-weight-light row-margin-small"
                                      >
                                        미회수원금 X 최고요율(3)% X (잔여기간
                                        월수/리스기간 전체월수)
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ol>
                            </div>
                            <ul
                              :class="[
                                $style['basic-list'],
                                $style['basic-list--regular'],
                                $style['basic-list--regular-margin'],
                                'row-margin-item-group',
                              ]"
                            >
                              <li
                                :class="[
                                  $style['basic-list__item'],
                                  'text-body-4',
                                  'font-weight-regular',
                                  'color-gray-secondary',
                                ]"
                              >
                                <div :class="$style['basic-list__symbol']">
                                  ※
                                </div>
                                <div :class="$style['basic-list__content']">
                                  단, 금융리스의 경우 대부업법에서 정하는
                                  최고이자율을 초과하지 않는 범위로 합니다.
                                </div>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            승계<br />
                            수수료
                          </th>
                          <td class="align-left">
                            <div>운용리스, 금융리스</div>
                            <div
                              class="text-body-4 font-weight-light row-margin-small"
                            >
                              미회수원금의 1%(승계수수료 최고 요율) X (잔여기간
                              월수/리스기간 전체 월수) (min: 500,000원, max:
                              900,000원)
                            </div>
                            <ul
                              :class="[
                                $style['basic-list'],
                                $style['basic-list--regular'],
                                $style['basic-list--regular-margin'],
                                'row-margin-item-group',
                              ]"
                            >
                              <li
                                :class="[
                                  $style['basic-list__item'],
                                  'text-body-4',
                                  'font-weight-regular',
                                  'color-gray-secondary',
                                ]"
                              >
                                <div :class="$style['basic-list__symbol']">
                                  ※
                                </div>
                                <div :class="$style['basic-list__content']">
                                  단, 금융리스의 경우 대부업법에서 정하는
                                  최고이자율을 초과하지 않는 범위로 합니다.
                                </div>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <ul
                    :class="[
                      $style['basic-list'],
                      $style['basic-list--regular'],
                      $style['basic-list--regular-margin'],
                      'row-margin-item-medium',
                    ]"
                  >
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'text-body-4',
                        'font-weight-regular',
                        'color-gray-secondary',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">※</div>
                      <div :class="$style['basic-list__content']">
                        주1) ‘중도해지손해배상금’은 고객이 계약의 중도해지를
                        이유로
                        <span class="color-green">자동차를 반환</span>하고자 할
                        때 ‘자동차리스 표준약관’ 제24조에 따라 금융회사에 발생한
                        손해를 배상하기 위하여 지급해야 하는 금액을 의미합니다.
                      </div>
                    </li>
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'text-body-4',
                        'font-weight-regular',
                        'color-gray-secondary',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">※</div>
                      <div :class="$style['basic-list__content']">
                        주2) 규정손해배상금은 고객이 계약의 중도해지를 이유로
                        <span class="color-green">자동차를 매입</span>하고자 할
                        때 ‘자동차리스 표준약관’ 제23조에 따라 금융회사에 발생한
                        손해를 배상하기 위하여 지급해야 하는 금액을 의미합니다.
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            </UiTabPanel>
            <!-- // 상품안내 -->

            <!-- 진행절차 -->
            <UiTabPanel name="AF_P07_p001_tab001_002">
              <div :class="[$style['step'], $style['step--horizontal']]">
                <ul :class="$style['step__list']">
                  <li :class="$style['step__item']">
                    <div :class="$style['step__inner']">
                      <div :class="$style['step__contents']">
                        <div :class="$style['step__badge']">STEP 1</div>
                        <p :class="$style['step__text']">
                          홈페이지/모바일<br />
                          (웹/앱)을 통하여<br />
                          <strong>승계를 접수</strong>합니다.<br />
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
                          신청내용을<br />
                          확인하여<br />
                          <strong>심사결과를 안내</strong><br />
                          드립니다.
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
                          양도인<br />
                          (승계전이용자)과<br />
                          양수인<br />
                          (승계후이용자)의<br />
                          <strong>승계 계약</strong>이<br />
                          진행됩니다.<br />
                          (전자약정 가능)
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
                          승계 수수료 등<br />
                          <strong>승계 비용을</strong><br />
                          <strong>입금</strong> 합니다.
                        </p>
                        <ul
                          :class="[
                            $style['basic-list'],
                            $style['basic-list--regular'],
                            'row-margin-item-group',
                          ]"
                        >
                          <li
                            :class="[
                              $style['basic-list__item'],
                              'text-body-4',
                              'font-weight-regular',
                              'color-gray-secondary',
                            ]"
                          >
                            <div :class="$style['basic-list__symbol']">※</div>
                            <div :class="$style['basic-list__content']">
                              오토리스 : 자동차보험가입 확인
                            </div>
                          </li>
                        </ul>
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
                          계약사항에 대해<br />
                          <strong>이해하였음을</strong><br />
                          <strong>유선상 확인</strong>합니다.
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
                          <strong>계약자 변경</strong>이<br />
                          완료됩니다.
                        </p>
                      </div>
                      <div :class="$style['step__icon']">
                        <IconCompleted />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </UiTabPanel>
            <!-- // 진행절차 -->

            <!-- 유의사항 -->
            <UiTabPanel name="AF_P07_p001_tab001_003">
              <ul
                :class="[
                  $style['basic-list'],
                  $style['basic-list--medium'],
                  $style['basic-list--regular-margin'],
                ]"
              >
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-1',
                    'font-weight-regular',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    계약을 체결하기 전에 자세한 내용은 상품설명서와 약관을
                    확인하시기 바랍니다.
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-1',
                    'font-weight-regular',
                    'color-black',
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
                    'text-body-1',
                    'font-weight-regular',
                    'color-black',
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
                    'text-body-1',
                    'font-weight-regular',
                    'color-black',
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
                    'text-body-1',
                    'font-weight-regular',
                    'color-black',
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
                    'text-body-1',
                    'font-weight-regular',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    담보물건, 담보종류 등에 따라 대출조건이 차등 적용되며
                    담보물이 부적합할 경우 대출이 제한될 수 있습니다.
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-1',
                    'font-weight-regular',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    금융소비자의 개인신용평점에 따라 대출한도 및 금리가 차등
                    적용됩니다.
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-1',
                    'font-weight-regular',
                    'color-black',
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
                    'text-body-1',
                    'font-weight-regular',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    금리인하요구권 및 대출계약 철회권에 대한 자세한 사항은 당사
                    홈페이지에서 확인하시기 바랍니다.
                  </div>
                </li>
              </ul>
            </UiTabPanel>
            <!-- // 유의사항 -->
          </UiTab>
        </UiTabPanel>
        <!-- // 리스승계 -->

        <!-- 렌트승계 -->
        <UiTabPanel name="AF_P07_p001_tab002">
          <section class="row-margin-block">
            <h3 class="text-big-3 font-weight-medium row-margin-item-group">
              렌트승계란?
            </h3>
            <p class="text-body-1 color-gray-secondary">
              계약상의 권리와 의무를 제3자에게 승계하고자 하는 경우 금융회사는
              신규로 렌트계약을 체결하는 절차와 동일하게 금융회사가 정한
              심사기준에 따라 이를 승인합니다.
            </p>
            <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }"
              >주의 심사비용 등 승계 조건에 따라 소요되는 비용으로 승계수수료가
              부과됩니다.</NoticeText
            >
            <div :class="[$style['icon-info'], 'row-margin-container-medium']">
              <ul :class="$style['icon-info__list']">
                <li :class="$style['icon-info__item']">
                  <div :class="$style['icon-info__block']">
                    <div :class="$style['icon-info__icon']">
                      <IconAssignment />
                    </div>
                    <div :class="$style['icon-info__contents']">
                      <div :class="$style['icon-info__title']">양도인</div>
                      <div :class="$style['icon-info__text']">
                        렌트 승계 시 위약금이 발생하지 않아 유리합니다.
                      </div>
                    </div>
                  </div>
                </li>
                <li :class="$style['icon-info__item']">
                  <div :class="$style['icon-info__block']">
                    <div :class="$style['icon-info__icon']">
                      <IconTakingOver />
                    </div>
                    <div :class="$style['icon-info__contents']">
                      <div :class="$style['icon-info__title']">양수인</div>
                      <div :class="$style['icon-info__text']">
                        초기비용이 상대적으로 저렴하고, 등록 비용이 별도로
                        발생하지 않아 유리합니다.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <UiTab>
            <NavTab
              :useUiTab="true"
              :classNames="{ wrap: 'row-margin-block-small' }"
            >
              <NavTabButton link="AF_P07_p001_tab002_001"
                >상품안내</NavTabButton
              >
              <NavTabButton link="AF_P07_p001_tab002_002"
                >진행절차</NavTabButton
              >
              <NavTabButton link="AF_P07_p001_tab002_003"
                >유의사항</NavTabButton
              >
            </NavTab>

            <!-- 상품안내 -->
            <UiTabPanel name="AF_P07_p001_tab002_001">
              <div :class="$style['product-info']">
                <ul :class="$style['product-info__list']">
                  <li :class="$style['product-info__item']">
                    <div :class="$style['product-info__block']">
                      <div :class="$style['product-info__head']">
                        <div :class="$style['product-info__icon']">
                          <IconPerson />
                        </div>
                        <div :class="$style['product-info__title']">대상</div>
                      </div>
                      <div :class="$style['product-info__contents']">
                        <div :class="$style['product-info__text']">
                          양도인 · 양수인
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="row-margin-block-small">
                <section class="row-margin-contents">
                  <h3
                    class="text-body-3 font-weight-medium color-gray row-margin-item"
                  >
                    연체이자율
                  </h3>
                  <p class="text-title-2">연 20%</p>
                </section>
                <section class="row-margin-contents">
                  <h3
                    class="text-body-3 font-weight-medium color-gray row-margin-item"
                  >
                    승계수수료
                  </h3>
                  <p class="text-title-2">33만원</p>
                  <p class="text-body-3 color-gray row-margin-small">
                    (VAT 포함)
                  </p>
                </section>
                <section class="row-margin-contents">
                  <h3
                    class="text-body-3 font-weight-medium color-gray row-margin-item"
                  >
                    취급조건
                  </h3>
                  <ul
                    :class="[
                      $style['basic-list'],
                      $style['basic-list--medium'],
                      $style['basic-list--regular-margin'],
                    ]"
                  >
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'text-title-2',
                        'font-weight-regular',
                        'color-black',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        <div>
                          렌트료 포함 내역 : 취득세, 보험료, 자동차세, 정비료
                        </div>
                        <p class="text-body-3 color-gray row-margin-small">
                          (계약상품에 따라 보험이 안될 수 있음)
                        </p>
                      </div>
                    </li>
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'text-title-2',
                        'font-weight-regular',
                        'color-black',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        <div>정비상품 : Special, Self 상품</div>
                        <p class="text-body-3 color-gray row-margin-small">
                          (양도인 통일 정비상품 적용)
                        </p>
                      </div>
                    </li>
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'text-title-2',
                        'font-weight-regular',
                        'color-black',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        만기 시 처리 : 계약 종료 후 고객의 의향에 따라 변환,
                        구매, 연장 가능
                      </div>
                    </li>
                  </ul>
                </section>
                <section class="row-margin-contents">
                  <h3
                    class="text-body-3 font-weight-medium color-gray row-margin-item"
                  >
                    중도해지 수수료
                  </h3>
                  <p class="text-title-2">
                    중도해지수수료율=잔여렌트료X해지위약금율
                  </p>
                  <ul
                    :class="[
                      $style['basic-list'],
                      $style['basic-list--regular'],
                      $style['basic-list--regular-margin'],
                      'row-margin-item',
                    ]"
                  >
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'text-body-4',
                        'font-weight-regular',
                        'color-gray-secondary',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">※</div>
                      <div :class="$style['basic-list__content']">
                        잔여렌트료=앞면표기‘월렌트료’X(미청구
                        잔여개월수-1개월)+해지시점 당월 잔여렌트료
                      </div>
                    </li>
                  </ul>
                </section>
                <section class="row-margin-contents">
                  <h3
                    class="text-body-3 font-weight-medium color-gray row-margin-item-medium"
                  >
                    위약금률
                  </h3>
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
                  <h3
                    class="text-body-3 font-weight-medium color-gray row-margin-item"
                  >
                    초과운행부담금
                  </h3>
                  <p class="text-title-2">
                    [초과운행km-유예주행거리]Xkm당<br />
                    초과운행부담금 부과
                  </p>
                  <p class="text-body-3 color-gray row-margin-small">
                    (국산차 100원/수입차 300원)
                  </p>
                </section>
                <section class="row-margin-contents">
                  <h3
                    class="text-body-3 font-weight-medium color-gray row-margin-item"
                  >
                    반환지연금
                  </h3>
                  <p class="text-title-2">일렌트료 X 경과일수 X 200%</p>
                  <p class="text-body-3 color-gray row-margin-small">
                    (일렌트료=“월렌트료”/30)
                  </p>
                  <ul
                    :class="[
                      $style['basic-list'],
                      $style['basic-list--regular'],
                      $style['basic-list--regular-margin'],
                      'row-margin-item',
                    ]"
                  >
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'text-body-4',
                        'font-weight-regular',
                        'color-gray-secondary',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">※</div>
                      <div :class="$style['basic-list__content']">
                        차량반환 시 차량원상복구가 원칙이며, 이에 따른 비용이
                        발생할 수 있습니다. 자세한 내용은 홈페이지를
                        참고바랍니다.
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            </UiTabPanel>
            <!-- // 상품안내 -->

            <!-- 진행절차 -->
            <UiTabPanel name="AF_P07_p001_tab002_002">
              <div :class="[$style['step'], $style['step--horizontal']]">
                <ul :class="$style['step__list']">
                  <li :class="$style['step__item']">
                    <div :class="$style['step__inner']">
                      <div :class="$style['step__contents']">
                        <div :class="$style['step__badge']">STEP 1</div>
                        <p :class="$style['step__text']">
                          홈페이지/모바일<br />
                          (웹/앱)을 통하여<br />
                          <strong>승계를 접수</strong>합니다.<br />
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
                          신청내용을<br />
                          확인하여<br />
                          <strong>심사결과를 안내</strong><br />
                          드립니다.
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
                          양도인<br />
                          (승계전이용자)과<br />
                          양수인<br />
                          (승계후이용자)의<br />
                          <strong>승계 계약</strong>이<br />
                          진행됩니다.<br />
                          (전자약정 가능)
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
                          승계 수수료 등<br />
                          <strong>승계 비용을</strong><br />
                          <strong>입금</strong> 합니다.
                        </p>
                        <ul
                          :class="[
                            $style['basic-list'],
                            $style['basic-list--regular'],
                            'row-margin-item-group',
                          ]"
                        >
                          <li
                            :class="[
                              $style['basic-list__item'],
                              'text-body-4',
                              'font-weight-regular',
                              'color-gray-secondary',
                            ]"
                          >
                            <div :class="$style['basic-list__symbol']">※</div>
                            <div :class="$style['basic-list__content']">
                              오토리스 : 자동차보험가입 확인
                            </div>
                          </li>
                        </ul>
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
                          계약사항에 대해<br />
                          <strong>이해하였음을</strong><br />
                          <strong>유선상 확인</strong>합니다.
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
                          <strong>계약자 변경</strong>이<br />
                          완료됩니다.
                        </p>
                      </div>
                      <div :class="$style['step__icon']">
                        <IconCompleted />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </UiTabPanel>
            <!-- // 진행절차 -->

            <!-- 유의사항 -->
            <UiTabPanel name="AF_P07_p001_tab002_003">
              <ul
                :class="[
                  $style['basic-list'],
                  $style['basic-list--medium'],
                  $style['basic-list--regular-margin'],
                ]"
              >
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-1',
                    'font-weight-regular',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    계약을 체결하기 전에 자세한 내용은 상품설명서와 약관을
                    확인하시기 바랍니다.
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-1',
                    'font-weight-regular',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    일정기간 렌탈료를 연체할 경우, 모든 렌탈료(원리금)을 변제할
                    의무가 발생할 수 있습니다.
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-1',
                    'font-weight-regular',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    렌터카 취급이 부적정한 경우(연체금 보유, 개인신용평점 낮음)
                    취급이 제한될 수 있습니다.
                  </div>
                </li>
              </ul>
            </UiTabPanel>
            <!-- // 유의사항 -->
          </UiTab>
        </UiTabPanel>
        <!-- // 렌트승계 -->

        <ul :class="[$style['basic-list'], 'row-margin-contents']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              준법심의필 22-1258 (2022.06.10~2023.06.09)
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              여신금융협회 심의필 제2022-C1h-04727호 (2022.06.10~2023.06.09)
            </div>
          </li>
        </ul>
      </UiTab>

      <BasicHr
        theme="tertiary"
        className="row-margin-block row-margin-bottom-none"
      />

      <div
        :class="[
          $style['icon-list'],
          $style['icon-list--wrap'],
          'row-margin-container-medium',
        ]"
      >
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']">
                <IconCalculate />
              </span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__text']">월 납입금 계산</span>
                <span :class="$style['icon-list__title']">대출계산기</span>
              </span>
            </button>
          </li>
          <li :class="$style['icon-list__item']">
            <RouterLink to="" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']">
                <IconConsultation />
              </span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__text']">상품 신청 안내</span>
                <span :class="$style['icon-list__title']">전화 상담 신청</span>
              </span>
            </RouterLink>
          </li>
          <li :class="$style['icon-list__item']">
            <div :class="$style['icon-list__block']">
              <div :class="$style['icon-list__icon']">
                <Icon1QCapital />
              </div>
              <div :class="$style['icon-list__content']">
                <div class="flex-box">
                  <div class="flex-box__cell flex-1">
                    <div :class="$style['icon-list__text']">
                      모바일 앱에서 편하게 이용해요
                    </div>
                    <div :class="$style['icon-list__title']">앱 설치하기</div>
                  </div>
                  <div class="flex-box__cell flex-box__cell--large">
                    <img
                      src="@/assets/images/contents/qr-install.png"
                      alt=""
                      class="display-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P07_p001.scss';
</style>

<script>
// BF_P05_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconRate from '@/assets/images/icon/rate.svg?component';
import IconDate from '@/assets/images/icon/date.svg?component';
import IconPerson from '@/assets/images/icon/person.svg?component';
import IconConsulting from '@/assets/images/icon/consulting.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconContract from '@/assets/images/icon/contract.svg?component';
import Icon1QCapital from '@/assets/images/icon/1qcapital.svg?component';
import IconCalculate from '@/assets/images/icon/calculate.svg?component';
import IconService from '@/assets/images/icon/service.svg?component';
import IconInstallation from '@/assets/images/icon/installation.svg?component';
import IconDeposit from '@/assets/images/icon/deposit.svg?component';

export default {
  components: {
    PageContents,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    BasicHr,
    IconRate,
    IconDate,
    IconPerson,
    IconConsulting,
    IconSend,
    IconContract,
    IconCalculate,
    Icon1QCapital,
    IconService,
    IconInstallation,
    IconDeposit,
  },
};
</script>

<template>
  <PageContents size="full">
    <div :class="$style['product-top']">
      <div :class="$style['product-top__contents']">
        <div :class="$style['product-top__head']">
          <h2 :class="$style['product-top__sub-text']">일반리스</h2>
          <p :class="$style['product-top__main-text']">
            리스이용자가 선정한 의료장비, 골프시뮬레이터,<br />
            설비 등을 하나캐피탈이 대신 구입하여 장기간 대여해주는 방식의
            금융상품
          </p>
        </div>

        <div :class="$style['product-top__image']">
          <img src="@/assets/images/contents/img-lease-loan.png" alt="" />
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
                <IconRate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">금리</div>
                <div :class="$style['product-detail__desc']">
                  연 0.0 ~ 19.9%
                </div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconDate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">기간</div>
                <div :class="$style['product-detail__desc']">12 ~ 60개월</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="wide-wrap row-margin-block-group">
      <UiTab>
        <NavTab
          :useUiTab="true"
          :classNames="{ wrap: 'row-margin-block-small' }"
        >
          <NavTabButton link="BF_P05_p001_tab001">상품안내</NavTabButton>
          <NavTabButton link="BF_P05_p001_tab002">진행절차</NavTabButton>
          <NavTabButton link="BF_P05_p001_tab003">유의사항</NavTabButton>
        </NavTab>

        <!-- 상품안내 -->
        <UiTabPanel name="BF_P05_p001_tab001">
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
                      개인사업자, 법인
                    </div>
                  </div>
                </div>
              </li>
              <li :class="$style['product-info__item']">
                <div :class="$style['product-info__block']">
                  <div :class="$style['product-info__head']">
                    <div :class="$style['product-info__icon']">
                      <IconRate />
                    </div>
                    <div :class="$style['product-info__title']">금리</div>
                  </div>
                  <div :class="$style['product-info__contents']">
                    <div :class="$style['product-info__text']">
                      연 최저 0.0% ~ 최고 19.9%
                    </div>
                    <div :class="$style['product-info__sub']">
                      (금융소비자의 업력, 보증금율, 유예원금, 거치유무에 따라
                      차등 적용됩니다.)
                    </div>
                  </div>
                </div>
              </li>
              <li :class="$style['product-info__item']">
                <div :class="$style['product-info__block']">
                  <div :class="$style['product-info__head']">
                    <div :class="$style['product-info__icon']">
                      <IconDate />
                    </div>
                    <div :class="$style['product-info__title']">기간</div>
                  </div>
                  <div :class="$style['product-info__contents']">
                    <div :class="$style['product-info__text']">
                      12개월 ~ 60개월
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
                할부금
              </h3>
              <p class="text-title-2">물건가격의 100%이내</p>
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
                    'font-weight-regular',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']">-</div>
                  <div :class="$style['basic-list__content']">
                    물건 가격 및 당사 심사기준에 따라 할부취급이 제한될 수
                    있습니다.
                  </div>
                </li>
              </ul>
            </section>
            <section class="row-margin-contents">
              <h3
                class="text-body-3 font-weight-medium color-gray row-margin-item"
              >
                보험조건
              </h3>
              <p class="text-title-2">
                하나캐피탈 책임부보 또는 이용자 책임부보
              </p>
            </section>
            <section class="row-margin-contents">
              <h3
                class="text-body-3 font-weight-medium color-gray row-margin-item"
              >
                상환방법
              </h3>
              <p class="text-title-2">원리금균등분할상환</p>
            </section>
            <section class="row-margin-contents">
              <h3
                class="text-body-3 font-weight-medium color-gray row-margin-item"
              >
                이자납부시기
              </h3>
              <p class="text-title-2">매월 후취 또는 선취</p>
            </section>
            <section class="row-margin-contents">
              <h3
                class="text-body-3 font-weight-medium color-gray row-margin-item"
              >
                연체이자율
              </h3>
              <p class="text-title-2">약정금리+3.00%</p>
              <p class="text-body-3 color-gray row-margin-small">
                (법정최고금리 연 20% 이내)
              </p>
              <ul
                :class="[
                  $style['basic-list'],
                  $style['basic-list--regular'],
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
                    <div>
                      단, 연체발생시점에 약정이율이 없는 경우 약정금리는 상법상
                      상사법정이율과 상호금융 가계자금대출금리*중 높은 금리 적용
                    </div>
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
                          'text-body-4',
                          'font-weight-regular',
                          'color-gray-secondary',
                        ]"
                      >
                        <div :class="$style['basic-list__symbol']">*</div>
                        <div :class="$style['basic-list__content']">
                          한국은행에서 매월 발표하는 가장 최근의 비은행금융기관
                          가중평균대출금리 (신규대출 기준)
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </section>

            <section class="row-margin-contents">
              <h3
                class="text-body-3 font-weight-medium color-gray row-margin-item"
              >
                규정손해배상금율
              </h3>
              <p class="text-title-2">미회수원금 X 102%</p>
            </section>
            <section class="row-margin-contents">
              <h3
                class="text-body-3 font-weight-medium color-gray row-margin-item"
              >
                종료후 처리
              </h3>
              <p class="text-title-2">무상양도</p>
            </section>
            <section class="row-margin-contents">
              <h3
                class="text-body-1 font-weight-regular color-gray row-margin-item-medium"
              >
                구비서류
              </h3>
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
                        공통서류
                      </div>
                    </div>
                    <div
                      :class="[
                        $style['contents-list__depth-3'],
                        'row-margin-item-medium',
                      ]"
                    >
                      <ul
                        :class="[
                          $style['basic-list'],
                          $style['basic-list--regular'],
                        ]"
                      >
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-3',
                            'font-weight-regular',
                            'color-black',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            리스신청서
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-3',
                            'font-weight-regular',
                            'color-black',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            리스물건견적서
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-3',
                            'font-weight-regular',
                            'color-black',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            사업자등록증 사본
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-3',
                            'font-weight-regular',
                            'color-black',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            재무제표증명원
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-3',
                            'font-weight-regular',
                            'color-black',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            주민등록등본
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-3',
                            'font-weight-regular',
                            'color-black',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            인감증명서
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-3',
                            'font-weight-regular',
                            'color-black',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            신분증 사본
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">2</div>
                      <div :class="$style['contents-list__title']">
                        법인추가서류
                      </div>
                    </div>
                    <div
                      :class="[
                        $style['contents-list__depth-3'],
                        'row-margin-item-medium',
                      ]"
                    >
                      <ul
                        :class="[
                          $style['basic-list'],
                          $style['basic-list--regular'],
                        ]"
                      >
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-3',
                            'font-weight-regular',
                            'color-black',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            대표이사 연대보증 필수
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-3',
                            'font-weight-regular',
                            'color-black',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            법인등기부등본
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-3',
                            'font-weight-regular',
                            'color-black',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            법인인감증명서
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-3',
                            'font-weight-regular',
                            'color-black',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            주주명부
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-3',
                            'font-weight-regular',
                            'color-black',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            정관사본
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-3',
                            'font-weight-regular',
                            'color-black',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            이사회결의서 사본
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-3',
                            'font-weight-regular',
                            'color-black',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            사업계획서
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-3',
                            'font-weight-regular',
                            'color-black',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            회사소개서
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ol>
              </div>
            </section>
            <section class="row-margin-contents">
              <h3
                class="text-body-3 font-weight-medium color-gray row-margin-item"
              >
                기타
              </h3>
              <p class="text-title-2">인지세 10,000원</p>
              <p class="text-body-3 color-gray row-margin-small">
                (전액 하나캐피탈 부담)
              </p>
            </section>
          </div>
        </UiTabPanel>
        <!-- // 상품안내 -->

        <!-- 진행절차 -->
        <UiTabPanel name="BF_P05_p001_tab002">
          <div :class="[$style['step'], $style['step--horizontal']]">
            <ul :class="$style['step__list']">
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 1</div>
                    <p :class="$style['step__text']">
                      하나캐피탈<br />
                      일반할부 <strong>상담을</strong><br />
                      <strong>신청</strong> 합니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconConsulting />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 2</div>
                    <p :class="$style['step__text']">
                      <strong>상담 또는 전화</strong>로<br />
                      대출가능 금액에<br />
                      대해 상담합니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconService />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 3</div>
                    <p :class="$style['step__text']">
                      신청내용을<br />
                      확인하여<br />
                      <strong>결과를 통보</strong>합니다.
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
                    <div :class="$style['step__badge']">STEP 4</div>
                    <p :class="$style['step__text']">
                      할부 약정 시<br />
                      <strong>온라인이나</strong><br />
                      <strong>오프라인 약정</strong>을<br />
                      진행합니다.
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
                    <div :class="$style['step__badge']">STEP 5</div>
                    <p :class="$style['step__text']">
                      고객님께서<br />
                      <strong>원하시는 기기를</strong><br />
                      <strong>설치</strong> 해드리고,<br />
                      담당직원이 실사를<br />
                      합니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconInstallation />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 6</div>
                    <p :class="$style['step__text']">
                      판매업체에<br />
                      <strong>기기금액을</strong><br />
                      <strong>입금</strong>해 드립니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconDeposit />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </UiTabPanel>
        <!-- // 진행절차 -->

        <!-- 유의사항 -->
        <UiTabPanel name="BF_P05_p001_tab003">
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
                계약을 체결하기 전에 상품 설명서와 약관을 확인하시기 바랍니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-1',
                'font-weight-medium',
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
                'font-weight-medium',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                개인신용평점 하락 시 금융거래와 관련된 불이익이 발생할 수
                있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-1',
                'font-weight-medium',
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
                리스취급이 부적정한 경우(연체금 보유, 개인신용평점 낮음) 대출이
                제한될 수 있습니다.
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
                금융소비자의 신용등급 또는 개인신용평점에 따라 대출한도 및
                금리가 차등 적용됩니다.
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
                설명을 듣고 내용을 충분히 이해한 후 거래하시기 바랍니다
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
                리스물건의 실제 소유권은 하나캐피탈에 있으며 리스종료 후
                무상양도하는 방식입니다.
              </div>
            </li>
          </ul>
        </UiTabPanel>
        <!-- // 유의사항 -->

        <ul :class="[$style['basic-list'], 'row-margin-contents']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              준법심의필 23-145 (2023.05.18~2024.05.17)
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              여신금융협회 심의필 제 2023-C1h-05525호 (2023.05.18~2024.05.17)
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
@import '@/assets/scss/views/business/BF_P05_p001.scss';
</style>

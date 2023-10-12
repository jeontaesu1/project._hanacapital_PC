<script>
// AF_P02_p001 컨텐츠
import { RouterLink } from 'vue-router';

import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconRate from '@/assets/images/icon/rate.svg?component';
import IconDate from '@/assets/images/icon/date.svg?component';
import IconCommision from '@/assets/images/icon/commission.svg?component';
import IconPerson from '@/assets/images/icon/person.svg?component';
import IconConsulting from '@/assets/images/icon/consulting.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconContract from '@/assets/images/icon/contract.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';
import IconConsultation from '@/assets/images/icon/consultation.svg?component';
import Icon1QCapital from '@/assets/images/icon/1qcapital.svg?component';

export default {
  components: {
    RouterLink,

    BasicButton,
    ButtonList,
    ButtonListItem,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    BasicHr,
    TextButton,
    IconRate,
    IconDate,
    IconCommision,
    IconPerson,
    IconConsulting,
    IconSend,
    IconContract,
    IconCar,
    IconConsultation,
    Icon1QCapital,
  },
};
</script>

<template>
  <div>
    <div :class="$style['product-top']">
      <div :class="$style['product-top__contents']">
        <div :class="$style['product-top__head']">
          <h2 :class="$style['product-top__sub-text']">다이렉트 오토리스</h2>
          <p :class="$style['product-top__main-text']">
            손님이 원하는 차량을 리스회사가 대신 구입하여<br />
            이를 일정기간 동안 대여해주는 서비스입니다
          </p>
        </div>

        <div :class="$style['product-top__image']">
          <img src="@/assets/images/contents/img-direct-autolease.png" alt="" />
        </div>

        <div
          :class="[
            $style['product-detail'],
            $style['product-detail--main'],
            'row-margin-contents-small',
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
                  개인(사업자) 및 법인<br />
                  사업자
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
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconCommision />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">상환방법</div>
                <div :class="$style['product-detail__desc']">매월 후취</div>
              </div>
            </li>
          </ul>
        </div>

        <ButtonList
          :wrap="true"
          :col="4"
          align="center"
          :classNames="{ wrap: 'row-margin-block-small' }"
        >
          <ButtonListItem>
            <BasicButton>모바일 진행</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
    </div>

    <div class="wide-wrap row-margin-block-group">
      <div :class="[$style['product-benefit'], 'row-margin-block-group']">
        <section :class="$style['product-benefit__section']">
          <div :class="$style['product-benefit__image']">
            <img
              src="@/assets/images/contents/img-zero-commission-p.png"
              alt=""
            />
          </div>
          <div :class="$style['product-benefit__info']">
            <h3 :class="$style['product-benefit__title']">
              리스 초기비용 0원!
            </h3>
            <p :class="$style['product-benefit__text']">
              취득세 공채 비용을 리스료에 포함 할 수 있어<br />
              차량구매 초기비용 절감!
            </p>
          </div>
        </section>
        <section :class="$style['product-benefit__section']">
          <div :class="$style['product-benefit__image']">
            <img src="@/assets/images/contents/img-simple-pay-p.png" alt="" />
          </div>
          <div :class="$style['product-benefit__info']">
            <h3 :class="$style['product-benefit__title']">
              간편하게 바로결제!
            </h3>
            <p :class="$style['product-benefit__text']">
              차량 출고일에 맞춘 차량대금결제!<br />
              차량금액만 알려주세요!
            </p>
          </div>
        </section>
      </div>

      <UiTab>
        <NavTab
          :useUiTab="true"
          :classNames="{ wrap: 'row-margin-block-small' }"
        >
          <NavTabButton link="AF_P02_p001_tab001">상품안내</NavTabButton>
          <NavTabButton link="AF_P02_p001_tab002">진행절차</NavTabButton>
          <NavTabButton link="AF_P02_p001_tab003">유의사항</NavTabButton>
        </NavTab>

        <!-- 상품안내 -->
        <UiTabPanel name="AF_P02_p001_tab001">
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
                      개인(사업자) 및 법인사업자
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
                      <span class="font-weight-bold underline">
                        금융리스 연 6.1% ~ 9.0%
                      </span>
                    </div>
                    <div :class="$style['product-info__sub']">
                      <span class="font-weight-medium underline">
                        (금융소비자의 개인신용평점에 따라 차등 적용)
                      </span>
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
                상환방법
              </h3>
              <p class="text-title-2">원리금균등상환</p>
            </section>
            <section class="row-margin-contents">
              <h3
                class="text-body-3 font-weight-medium color-gray row-margin-item"
              >
                이자납부시기
              </h3>
              <p class="text-title-2">매월 후취</p>
            </section>
            <section class="row-margin-contents">
              <h3
                class="text-body-3 font-weight-medium color-gray row-margin-item"
              >
                차량소유권
              </h3>
              <p class="text-title-2">하나캐피탈</p>
              <p class="text-body-3 color-gray row-margin-small">
                (단, 이용자명의 시 저당설정 추가)
              </p>
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
                        규정<br />
                        손해<br />
                        배상금<br />
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
                                <div :class="$style['contents-list__symbol']">
                                  주1
                                </div>
                                <div :class="$style['contents-list__title']">
                                  <div>중도해지손해배상금</div>
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
                                <div :class="$style['contents-list__symbol']">
                                  주2
                                </div>
                                <div :class="$style['contents-list__title']">
                                  <div>규정손해배상금(차랑인수-운용리스)</div>
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
                                <div :class="$style['contents-list__symbol']">
                                  주3
                                </div>
                                <div :class="$style['contents-list__title']">
                                  <div>규정손해배상금(차량인수-금융리스)</div>
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
                            <div :class="$style['basic-list__symbol']">※</div>
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
                            <div :class="$style['basic-list__symbol']">※</div>
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
                    주1) ‘중도해지손해배상금’은 고객이 계약의 중도해지를 이유로
                    자동차를 반환하고자 할 때 ‘자동차리스 표준약관’ 제24조에
                    따라 금융회사에 발생한 손해를 배상하기 위하여 지급해야 하는
                    금액을 의미합니다.
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
                    자동차를 매입하고자 할 때 ‘자동차리스 표준약관’ 제23조에
                    따라 금융회사에 발생한 손해를 배상하기 위하여 지급해야 하는
                    금액을 의미합니다.
                  </div>
                </li>
              </ul>
            </section>
            <section class="row-margin-contents">
              <h3
                class="text-body-3 font-weight-medium color-gray row-margin-item"
              >
                금융리스 연체이자율
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
                    <div>유이자 : 약정금리 + 3.00%</div>
                    <p class="text-body-3 color-gray row-margin-small">
                      (법정최고금리 연 20% 이내)
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
                    <div>무이자 : 상시약정금리 + 3%</div>
                    <p class="text-body-3 color-gray row-margin-small">
                      (법정최고금리 연 20% 이내)
                    </p>
                  </div>
                </li>
              </ul>

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
                      단, 연체 발생 시점에 약정금리가 없는 경우는 아래의 사항을
                      적용함
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
                          'color-black',
                        ]"
                      >
                        <div :class="$style['basic-list__symbol']">-</div>
                        <div :class="$style['basic-list__content']">
                          <div class="color-gray-tertiary font-weight-light">
                            약정 금리는 상법상 상사법정이율과 상호금융
                            가계대출금리*중 높은 금리 적용약정 금리는 상법상
                            상사법정이율과 상호금융 가계대출금리*중 높은 금리
                            적용
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
                                <div>
                                  한국은행에서 매월 발표하는 가장 최근의 비은행
                                  금융기관 가중평균대출금리(신규대출 기준)
                                </div>
                              </div>
                            </li>
                          </ul>
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
                운용리스 연체이자율
              </h3>
              <p class="text-title-2 underline">연 20%</p>
            </section>

            <section class="row-margin-contents">
              <h3
                class="text-body-3 font-weight-medium color-gray row-margin-item"
              >
                기타비용
              </h3>
              <p class="text-title-2">저당설정(이용자명의 시 저당설정 추가)</p>
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
                    설정금액: 대출원금의 0~100%
                  </div>
                </li>
              </ul>
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
                    'text-body-4',
                    'font-weight-regular',
                    'color-gray-secondary',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']">※</div>
                  <div :class="$style['basic-list__content']">
                    근저당설정은 개인신용평점에 따라 차등 적용
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
                    근저당설정비용 당사 부담 / 해지비용 금융소비자 부담
                  </div>
                </li>
              </ul>
            </section>
            <section class="row-margin-contents">
              <h3
                class="text-body-3 font-weight-medium color-gray row-margin-item"
              >
                인지세
              </h3>
              <p class="text-body-3 color-gray">
                (인지세는 하나캐피탈과 금융소비자가 50%씩 부담)
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
                    'font-weight-regular',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']">-</div>
                  <div :class="$style['basic-list__content']">인지세 1만원</div>
                </li>
              </ul>
            </section>
            <section class="row-margin-contents">
              <h3
                class="text-body-3 font-weight-medium color-gray row-margin-item"
              >
                기타
              </h3>
              <p class="text-title-2">
                만기 시 차량을 매입하실 경우 손님의 명의로 이전하는데 필요한
                취득세 등의 제세공과금이 발생할 수 있으며, 이는 손님이
                부담하셔야 합니다.
              </p>
              <p class="text-title-2 row-margin-item">
                운용리스의 경우, 만기 차량 반납시사고이력 또는 약정주행거리
                초과에 따라 별도의 감사비용이 추가로 발생 할 수 있습니다.<br />
                차량 반납시 유의사항을 꼭 확인하여 주시기 바랍니다.
              </p>
            </section>
            <div class="inline-wrap row-margin-contents">
              <TextButton
                theme="secondary"
                :underline="true"
                textSize="regular"
              >
                차량 반납 시 유의사항
              </TextButton>
            </div>
          </div>
        </UiTabPanel>
        <!-- // 상품안내 -->

        <!-- 진행절차 -->
        <UiTabPanel name="AF_P02_p001_tab002">
          <div :class="[$style['step'], $style['step--horizontal']]">
            <ul :class="$style['step__list']">
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 1</div>
                    <p :class="$style['step__text']">
                      홈페이지에서<br />
                      <strong>오토리스 상담</strong>을 신청합니다.
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
                      신청내용을 확인하여<br />
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
                    <div :class="$style['step__badge']">STEP 3</div>
                    <p :class="$style['step__text']">
                      계약 시 <strong>온라인이나</strong><br />
                      <strong>오프라인 약정</strong>을 진행합니다.
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
                    <div :class="$style['step__badge']">STEP 4</div>
                    <p :class="$style['step__text']">
                      차량을 구입 후
                      <strong>고객님께</strong><br />
                      <strong>인도</strong>합니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconCar />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </UiTabPanel>
        <!-- // 진행절차 -->

        <!-- 유의사항 -->
        <UiTabPanel name="AF_P02_p001_tab003">
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
                'font-weight-bold',
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
                'font-weight-bold',
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
                'font-weight-bold',
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
                리스 취급이 부적정한 경우(연체금 보유, 개인신용평점 낮음) 대출이
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
                담보물건, 담보종류 등에 따라 대출조건이 차등 적용되며 담보물이
                부적합할 경우 대출이 제한될 수 있습니다.
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

        <ul :class="[$style['basic-list'], 'row-margin-contents']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              준법심의필 23-151 (2023.05.22~2024.05.21)
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              여신금융협회 심의필 제 2023-C1h-05808호 (2023.05.22~2024.05.21)
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
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P02_p001_contents.scss';
</style>

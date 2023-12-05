<script>
// PF_P10_p001 컨텐츠
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconRate from '@/assets/images/icon/rate.svg?component';
import IconDate from '@/assets/images/icon/date.svg?component';
import IconPerson from '@/assets/images/icon/person.svg?component';
import IconInterestRate from '@/assets/images/icon/interest-rate.svg?component';
import IconConsulting from '@/assets/images/icon/consulting.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconCalculate from '@/assets/images/icon/calculate.svg?component';
import IconHanacapitalSmall from '@/assets/images/icon/hanacapital-small.svg?component';
import IconPersonalTerms from '@/assets/images/icon/personal-terms.svg?component';
import IconDeposit from '@/assets/images/icon/deposit.svg?component';

export default {
  components: {
    BasicHr,
    IconRate,
    IconDate,
    IconPerson,
    IconInterestRate,
    IconConsulting,
    IconSend,
    IconDeposit,
    IconCalculate,
    IconHanacapitalSmall,
    IconPersonalTerms,
  },
};
</script>

<template>
  <div>
    <div :class="$style['product-top']">
      <div :class="$style['product-top__contents']">
        <div :class="$style['product-top__head']">
          <h2 :class="$style['product-top__sub-text']">내구재할부</h2>
          <p :class="$style['product-top__main-text']">
            일반 내구소비재를 구입하는 분들께 물건대금을 지원하는 금융서비스
          </p>
        </div>

        <div :class="$style['product-top__image']">
          <img
            src="@/assets/images/contents/img-customer-goods-loan.png"
            alt=""
          />
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
                <IconRate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">금리</div>
                <div :class="$style['product-detail__desc']">0.0 ~ 16.0%</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconDate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">기간</div>
                <div :class="$style['product-detail__desc']">
                  <div>3개월 ~ 36개월</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="wide-wrap row-margin-block">
      <div class="flex-box row-margin-contents-group">
        <div class="flex-box__cell">
          <div :class="$style['product-box']"></div>
        </div>
        <div class="flex-box__cell flex-box__cell--regular">
          <h3 class="text-big-2">상품안내</h3>
        </div>
      </div>

      <div>
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
                    개인, 개인사업자 및 법인
                  </div>
                </div>
              </div>
            </li>
            <li :class="$style['product-info__item']">
              <div :class="$style['product-info__block']">
                <div :class="$style['product-info__head']">
                  <div :class="$style['product-info__icon']">
                    <IconInterestRate />
                  </div>
                  <div :class="$style['product-info__title']">한도</div>
                </div>
                <div :class="$style['product-info__contents']">
                  <div :class="$style['product-info__text']">
                    품목별 구매금액 범위 이내
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
                  <div :class="$style['product-info__text']">0.0 ~ 16.0%</div>
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
                    3개월 ~ 36개월
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <section class="row-margin-block-small">
          <div :class="[$style['step'], $style['step--horizontal']]">
            <ul :class="$style['step__list']">
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 1</div>
                    <p :class="$style['step__text']">
                      판매점에서 물품을 구입하여<br />
                      <strong>할부상담을 신청</strong>합니다.
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
                      신청내용 확인하여<br />
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
                      물품 구입대금에 대한 <strong>할부금융</strong><br />
                      <strong>약정서를 작성</strong>하고, 물품을<br />
                      인수받습니다.
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
                      물품 구입대금을 <strong>손님 대신</strong><br />
                      <strong>일시에 지급</strong>하고, 손님 명의로<br />
                      <strong>할부금융이 시작</strong>됩니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconDeposit />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section class="row-margin-contents">
          <h3 class="text-body-3 font-weight-bold color-gray row-margin-item">
            상환방법
          </h3>
          <p class="text-title-2 font-weight-bold">원리금균등분할상환</p>
        </section>
        <section class="row-margin-contents">
          <h3 class="text-body-3 font-weight-bold color-gray row-margin-item">
            중도상환수수료
          </h3>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--medium'],
              $style['basic-list--regular-margin'],
              'row-margin-item',
            ]"
          >
            <li
              :class="[
                $style['basic-list__item'],
                'text-title-2',
                'color-black',
                'font-weight-bold',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                만기 1년 이상 : 중도상환원금 X 1.00% + 중도상환원금 X
                (중도상환수수료율 - 1.00%) X 잔존기간/(대출기간 - 30일)
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-title-2',
                'color-black',
                'font-weight-bold',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                만기 1년 미만 : 중도상환원금 X (중도상환수수료율) X
                잔존기간/(대출기간 - 30일)
              </div>
            </li>
          </ul>
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
                'font-weight-bold',
                'color-gray-secondary',
              ]"
            >
              <div :class="$style['basic-list__symbol']">※</div>
              <div :class="$style['basic-list__content']">
                잔존기간 : 30일 미만 상환 시 '대출 사용기간'을 30일로 간주
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-4',
                'font-weight-bold',
                'color-gray-secondary',
              ]"
            >
              <div :class="$style['basic-list__symbol']">※</div>
              <div :class="$style['basic-list__content']">
                중도상환수수료율 : 2.00%
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-4',
                'font-weight-bold',
                'color-gray-secondary',
              ]"
            >
              <div :class="$style['basic-list__symbol']">※</div>
              <div :class="$style['basic-list__content']">
                무이자의 경우 중도상환수수료 없음
              </div>
            </li>
          </ul>
        </section>
        <section class="row-margin-contents">
          <h3
            class="text-body-3 font-weight-bold color-gray row-margin-item-medium"
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
                  <div :class="$style['contents-list__title']">개인</div>
                </div>
                <div
                  :class="[$style['contents-list__depth-3'], 'row-margin-item']"
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
                        <div>신분증사본</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">2</div>
                  <div :class="$style['contents-list__title']">개인사업자</div>
                </div>
                <div
                  :class="[$style['contents-list__depth-3'], 'row-margin-item']"
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
                        <div>신분증사본</div>
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
                        <div>사업자등록증</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">3</div>
                  <div :class="$style['contents-list__title']">법인</div>
                </div>
                <div
                  :class="[$style['contents-list__depth-3'], 'row-margin-item']"
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
                        <div>사업자등록증</div>
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
                        <div>법인등기부등본</div>
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
                        <div>법인인감증명서</div>
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
                        <div>법인주주명부</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">4</div>
                  <div :class="$style['contents-list__title']">
                    기타서류(필요 시)
                  </div>
                </div>
                <div
                  :class="[$style['contents-list__depth-3'], 'row-margin-item']"
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
                        <div>개인인감증명서</div>
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
                        <div>그 외 소득 및 재산 증빙서류</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section class="row-margin-contents">
          <h3 class="text-body-3 font-weight-bold color-gray row-margin-item">
            대출부대비용
          </h3>
          <p class="text-title-2 font-weight-bold">
            5천만원 초과 실행 시 인지세 발생
          </p>
          <p class="text-body-3 color-gray row-margin-small">
            (인지세는 하나캐피탈과 금융소비자가 50%씩 부담합니다.)
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
              <div :class="$style['basic-list__content']">
                5천만원 초과 1억원 이하 : 7만원
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'font-weight-regular',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']">-</div>
              <div :class="$style['basic-list__content']">
                1억원 초과 10억원 이하 : 15만원
              </div>
            </li>
          </ul>
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
              <div :class="$style['basic-list__symbol']">※</div>
              <div :class="$style['basic-list__content']">
                국민주택채권매입비(고객부담)
              </div>
            </li>
          </ul>
        </section>
        <section class="row-margin-contents">
          <h3 class="text-body-3 font-weight-bold color-gray row-margin-item">
            연체이자율
          </h3>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--medium'],
              $style['basic-list--regular-margin'],
              'row-margin-item',
            ]"
          >
            <li
              :class="[
                $style['basic-list__item'],
                'text-title-2',
                'color-black',
                'font-weight-bold',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                <div>약정이율+3.00%</div>
                <p
                  class="text-body-3 color-gray font-weight-bold row-margin-small"
                >
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
                'font-weight-bold',
                'color-gray-secondary',
              ]"
            >
              <div :class="$style['basic-list__symbol']">※</div>
              <div :class="$style['basic-list__content']">
                <div>
                  단, 연체 발생 시점에 약정이율이 없는 경우 약정금리는 상법상
                  상사법정이율과 상호금융 가계자금대출금리 *중 높은 금리 적용
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
                      'text-body-5',
                      'font-weight-bold',
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
          <h3 class="text-body-3 font-weight-bold color-gray row-margin-item">
            이자부과시기
          </h3>
          <p class="text-title-2">매월 후취</p>
        </section>
        <section class="row-margin-contents">
          <h3 class="text-body-3 font-weight-bold color-gray row-margin-item">
            유의사항
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
                대출취급이 부적정한 경우(연체금 보유, 개인신용평점 낮음) 대출이
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
                금리인하요구권 및 대출계약 철회권에 대한 자세한 사항은 당사
                홈페이지에서 확인하시기 바랍니다.
              </div>
            </li>
          </ul>
        </section>
      </div>

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            준법심의필 23-396 (2023.10.16 ~ 2024.10.15)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            여심금융협회 심의필 제2023-C1h-11442호 (2023.10.16 ~ 2024.10.15)
          </div>
        </li>
      </ul>

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
              <div
                :class="[
                  $style['icon-list__icon'],
                  $style['icon-list__icon-secondary'],
                ]"
              >
                <IconHanacapitalSmall />
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
@import '@/assets/scss/views/personalLoan/PF_P10_p001_contents.scss';
</style>

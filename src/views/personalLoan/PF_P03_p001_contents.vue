<script>
// PF_P03_p001 컨텐츠
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconMoney from '@/assets/images/icon/money.svg?component';
import IconRate from '@/assets/images/icon/rate.svg?component';
import IconDate from '@/assets/images/icon/date.svg?component';
import IconPerson from '@/assets/images/icon/person.svg?component';
import IconInterestRate from '@/assets/images/icon/interest-rate.svg?component';
import IconSearchMoney from '@/assets/images/icon/search-money.svg?component';
import IconPersonalTerms from '@/assets/images/icon/personal-terms.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconDeposit from '@/assets/images/icon/deposit.svg?component';
import IconCalculate from '@/assets/images/icon/calculate.svg?component';
import IconHanacapitalSmall from '@/assets/images/icon/hanacapital-small.svg?component';

export default {
  components: {
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicHr,
    IconMoney,
    IconRate,
    IconDate,
    IconPerson,
    IconInterestRate,
    IconSearchMoney,
    IconPersonalTerms,
    IconSend,
    IconDeposit,
    IconCalculate,
    IconHanacapitalSmall,
  },
};
</script>

<template>
  <div>
    <div :class="$style['product-top']">
      <div :class="$style['product-top__contents']">
        <div :class="$style['product-top__head']">
          <h2 :class="$style['product-top__sub-text']">아파트론</h2>
          <p :class="$style['product-top__main-text']">
            무담보 · 무설정 아파트 소유자 신용대출
          </p>
          <p :class="$style['product-top__main-sub-text']">
            행복아파트론 미진행 고객용
          </p>
        </div>

        <div :class="$style['product-top__image']">
          <img src="@/assets/images/contents/img-house-loan.png" alt="" />
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
                <IconMoney />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">최대한도</div>
                <div :class="$style['product-detail__desc']">5천만원</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconRate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">최저금리</div>
                <div :class="$style['product-detail__desc']">연 5.9%</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconDate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">기간</div>
                <div :class="$style['product-detail__desc']">최대 84개월</div>
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
            <BasicButton theme="tertiary">한도조회</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>대출신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
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
                    아파트를 소유한 손님(본인 또는 배우자 공동명의)
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
                    최대 5천만원 (최저 300만원)
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
                  <div
                    :class="[$style['product-info__text'], 'font-weight-bold']"
                  >
                    연 5.9% ~ 19.9%
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
                    12개월 ~ 84개월
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
                      본인인증 및 손님의 정보로<br />
                      <strong>대출한도를 조회</strong>합니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconSearchMoney />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 2</div>
                    <p :class="$style['step__text']">
                      손님이 원하는 조건으로<br />
                      <strong>대출을 신청</strong>합니다.
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
                    <div :class="$style['step__badge']">STEP 3</div>
                    <p :class="$style['step__text']">
                      신청하신 정보를 바탕으로<br />
                      최종심사 후 손님께<br />
                      <strong>결과를 안내</strong>해드립니다.
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
                      손님 계좌로<br />
                      <strong>대출금을 입금</strong>해드립니다.
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
          <h3 class="text-body-3 font-weight-medium color-gray row-margin-item">
            상환방법
          </h3>
          <p class="text-title-2">원리금균등분할상환</p>
        </section>
        <section class="row-margin-contents">
          <h3 class="text-body-3 font-weight-medium color-gray row-margin-item">
            중도상환수수료
          </h3>
          <p class="text-title-2">
            대출실행일 기준 경과기간에 따라 차등 적용되며, 3년 경과 시 면제
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
                'text-title-2',
                'font-weight-regular',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']">-</div>
              <div :class="$style['basic-list__content']">
                1년 이상 : 중도상환원금 X 1% + 중도상환원금 X (중도상환수수료율
                - 1%) X 잔존기간/(대출기간 - 30일)
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
              <div :class="$style['basic-list__symbol']">-</div>
              <div :class="$style['basic-list__content']">
                1년 미만 : 중도상환원금 X (중도상환수수료율) X
                잔존기간/(대출기간 - 30일)
              </div>
            </li>
          </ul>
          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
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
                잔존기간 : 30일 미만 상환 시 '대출 사용기간'을 30일로 간주
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
                중도상환수수료율 : 2%
              </div>
            </li>
          </ul>
        </section>
        <section class="row-margin-contents">
          <h3 class="text-body-3 font-weight-medium color-gray row-margin-item">
            연체이자율
          </h3>
          <p class="text-title-2 font-weight-bold">약정이율 + 3%</p>
          <p class="text-body-3 color-gray font-weight-bold row-margin-small">
            (법정최고금리 연 20% 이내)
          </p>
        </section>
        <section class="row-margin-contents">
          <h3 class="text-body-3 font-weight-medium color-gray row-margin-item">
            이자부과시기
          </h3>
          <p class="text-title-2">매월 후취</p>
        </section>
        <section class="row-margin-contents">
          <h3 class="text-body-3 font-weight-medium color-gray row-margin-item">
            기타
          </h3>
          <p class="text-title-2">
            내부 기준에 따라
            <span class="color-green font-weight-medium">행복아파트론</span>으로
            진행 불가 시, 아파트론 상품으로 자동전환되며 아파트론 상품에서
            행복아파트론 상품으로 재전환은 불가함
          </p>
        </section>
        <section class="row-margin-contents">
          <h3 class="text-body-3 font-weight-medium color-gray row-margin-item">
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
                금리인하요구권 및 대출계약 철회권에 대한 자세한 사항은 당사
                홈페이지에서 확인하시기 바랍니다.
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
          </ul>
        </section>
      </div>

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            준법심의필 23-380 (2023.10.16 ~ 2024.10.15)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            여신금융협회 심의필 제2023-C1h-11546호 (2023.10.16 ~ 2024.10.15)
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
@import '@/assets/scss/views/personalLoan/PF_P03_p001_contents.scss';
</style>

<script>
// PF_P01_p001 컨텐츠
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconMoney from '@/assets/images/icon/money.svg?component';
import IconRate from '@/assets/images/icon/rate.svg?component';
import IconDate from '@/assets/images/icon/date.svg?component';
import IconPage from '@/assets/images/icon/page.svg?component';
import IconPerson from '@/assets/images/icon/person.svg?component';
import IconInterestRate from '@/assets/images/icon/interest-rate.svg?component';
import IconSearchMoney from '@/assets/images/icon/search-money.svg?component';
import IconPersonalTerms from '@/assets/images/icon/personal-terms.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconDeposit from '@/assets/images/icon/deposit.svg?component';
import IconCalculate from '@/assets/images/icon/calculate.svg?component';
import IconHanacapitalSmall from '@/assets/images/icon/hanacapital-small.svg?component';
import IconContract from '@/assets/images/icon/contract.svg?component';

export default {
  components: {
    BasicButton,
    ButtonList,
    ButtonListItem,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    BasicHr,
    IconMoney,
    IconRate,
    IconDate,
    IconPage,
    IconPerson,
    IconInterestRate,
    IconSearchMoney,
    IconPersonalTerms,
    IconSend,
    IconDeposit,
    IconCalculate,
    IconHanacapitalSmall,
    IconContract,
  },
};
</script>

<template>
  <div>
    <div :class="$style['product-top']">
      <div :class="$style['product-top__contents']">
        <div :class="$style['product-top__head']">
          <h2 :class="$style['product-top__sub-text']">e하나신용대출</h2>
          <p :class="$style['product-top__main-text']">
            빠르고 간편하게 이용하는 신용대출
          </p>
        </div>

        <div :class="$style['product-top__image']">
          <img src="@/assets/images/contents/img-unsecured-loan.png" alt="" />
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
                <div :class="$style['product-detail__desc']">1억원</div>
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
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconPage />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">서류</div>
                <div :class="$style['product-detail__desc']">무서류</div>
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

    <div class="wide-wrap row-margin-block-group">
      <div :class="[$style['product-benefit'], 'row-margin-block-group']">
        <section :class="$style['product-benefit__section']">
          <div :class="$style['product-benefit__image']">
            <img src="@/assets/images/contents/img-scraping-p.png" alt="" />
          </div>
          <div :class="$style['product-benefit__info']">
            <h3 :class="$style['product-benefit__title']">서류 자동제출!</h3>
            <p :class="$style['product-benefit__text']">
              공공마이데이터, 스크래핑 서비스로<br />
              별도 서류제출이 필요없습니다.<br />
              (단, 일부 고객의 경우 추가 제출을 요청할 수 있습니다.)
            </p>
          </div>
        </section>
        <section :class="$style['product-benefit__section']">
          <div :class="$style['product-benefit__image']">
            <img src="@/assets/images/contents/img-120months-p.png" alt="" />
          </div>
          <div :class="$style['product-benefit__info']">
            <h3 :class="$style['product-benefit__title']">
              대출최대기간 84개월
            </h3>
            <p :class="$style['product-benefit__text']">
              내 마음대로 최대 84개월까지<br />
              대출기간을 설정하여<br />
              월 납입부담을 줄여보세요
            </p>
          </div>
        </section>
      </div>

      <UiTab>
        <NavTab
          :useUiTab="true"
          :classNames="{ wrap: 'row-margin-block-small' }"
        >
          <NavTabButton link="PF_P01_p001_tab001">상품안내</NavTabButton>
          <NavTabButton link="PF_P01_p001_tab002">진행절차</NavTabButton>
          <NavTabButton link="PF_P01_p001_tab003">유의사항</NavTabButton>
        </NavTab>

        <!-- 상품안내 -->
        <UiTabPanel name="PF_P01_p001_tab001">
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
                      재직기간 6개월 이상 직장인
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
                      최대 1억원 (최저 300만원)
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
                      :class="[
                        $style['product-info__text'],
                        'font-weight-bold',
                      ]"
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

          <div class="row-margin-block-small">
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
                    'font-weight-regular',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']">-</div>
                  <div :class="$style['basic-list__content']">
                    1년 이상 : 중도상환원금 X 1% + 중도상환원금 X
                    (중도상환수수료율 - 1%) X 잔존기간/(대출기간 - 30일)
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
                    1년 미만 : 중도상환원금 X (중도상환수수료율) X
                    잔존기간/(대출기간 - 30일)
                  </div>
                </li>
              </ul>
              <ul
                :class="[$style['basic-list'], $style['basic-list--regular']]"
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
              <h3
                class="text-body-3 font-weight-medium color-gray row-margin-item"
              >
                연체이자율
              </h3>
              <p class="text-title-2 font-weight-bold">약정이율 + 3%</p>
              <p
                class="text-body-3 color-gray font-weight-bold row-margin-small"
              >
                (법정최고금리 연 20% 이내)
              </p>
            </section>
            <section class="row-margin-contents">
              <h3
                class="text-body-3 font-weight-medium color-gray row-margin-item"
              >
                대출부대비용
              </h3>
              <p class="text-title-2">5천만원 초과 실행 시 인지세 발생</p>
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
                    대출금액 5천만원 초과 1억원 이하 : 7만원
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
                    대출금액 1억원 초과 10억원 이하 : 15만원
                  </div>
                </li>
              </ul>
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
                class="text-body-3 font-weight-medium color-gray row-margin-item"
              >
                필요서류
              </h3>
              <p class="text-title-2">
                재직/소득정보 확인은 공공마이데이터로 진행하며, 확인불가 시 관련
                서류 제출 필요
              </p>
            </section>
          </div>
        </UiTabPanel>
        <!-- // 상품안내 -->

        <!-- 진행절차 -->
        <UiTabPanel name="PF_P01_p001_tab002">
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
                      온라인으로<br />
                      <strong>약정을 진행</strong>합니다.
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
        </UiTabPanel>
        <!-- // 진행절차 -->

        <!-- 유의사항 -->
        <UiTabPanel name="PF_P01_p001_tab003">
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

        <ul :class="[$style['basic-list'], 'row-margin-contents']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              준법심의필 23-376 (2023.10.16 ~ 2024.10.15)
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              여신금융협회 심의필 제2023-C1h-11544호 (2023.10.16 ~ 2024.10.15)
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
@import '@/assets/scss/views/personalLoan/PF_P01_p001_contents.scss';
</style>

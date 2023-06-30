<script>
// AF_P01_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';

import IconPerson from '@/assets/images/icon/person.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';
import IconDate from '@/assets/images/icon/date.svg?component';
import IconCheckDocument from '@/assets/images/icon/check-document.svg?component';
import IconConsulting from '@/assets/images/icon/consulting.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconContract from '@/assets/images/icon/contract.svg?component';
import Icon1QCapital from '@/assets/images/icon/1qcapital.svg?component';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    BasicHr,
    CarThumb,
    IconPerson,
    IconCar,
    IconDate,
    IconCheckDocument,
    IconConsulting,
    IconSend,
    IconContract,
    Icon1QCapital,
  },
};
</script>

<template>
  <PageContents size="full">
    <div :class="$style['product-top']">
      <div :class="$style['product-top__contents']">
        <div :class="$style['product-top__head']">
          <h2 :class="$style['product-top__sub-text']">장기렌터카</h2>
          <p :class="$style['product-top__main-text']">
            로켓출고! 하나캐피탈 다이렉트 렌터카
          </p>
        </div>

        <div :class="$style['product-top__image']">
          <img
            src="@/assets/images/contents/img-long-term-car-rental-main.png"
            alt=""
          />
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
                  개인(사업자) 및<br />
                  법인 사업자
                </div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconCar />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">
                  진행가능 차종
                </div>
                <div :class="$style['product-detail__desc']">
                  승용차 전 모델<br />
                  (국산차, 수입차)
                </div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconDate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">
                  렌트료 납부시기
                </div>
                <div :class="$style['product-detail__desc']">매월 후취</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconCheckDocument />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">만기후처리</div>
                <div :class="$style['product-detail__desc']">
                  반납, 구매, 연장<br />선택가능
                </div>
              </div>
            </li>
          </ul>
        </div>

        <ButtonList :wrap="true" :col="4" align="center">
          <ButtonListItem>
            <BasicButton theme="tertiary">견적조회</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>렌터카 상담신청</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>모바일 진행</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
    </div>

    <div class="wide-wrap row-margin-block-group">
      <div :class="[$style['product-benefit'], 'row-margin-block-small']">
        <section :class="$style['product-benefit__section']">
          <div :class="$style['product-benefit__image']">
            <img
              src="@/assets/images/contents/img-long-term-car-rental01.png"
              alt=""
            />
          </div>
          <div :class="$style['product-benefit__info']">
            <h3 :class="$style['product-benefit__title']">
              세금보험료 걱정 NO!
            </h3>
            <p :class="$style['product-benefit__text']">
              계약기간동안 자동차세와<br />
              각종 보험료를 절약해보세요.
            </p>
          </div>
        </section>
        <section :class="$style['product-benefit__section']">
          <div :class="$style['product-benefit__image']">
            <img
              src="@/assets/images/contents/img-long-term-car-rental02.png"
              alt=""
            />
          </div>
          <div :class="$style['product-benefit__info']">
            <h3 :class="$style['product-benefit__title']">맞춤요금제 선택!</h3>
            <p :class="$style['product-benefit__text']">
              나에게 맞는 상품을 설정하여<br />
              월납입부담을 줄여보세요.
            </p>
          </div>
        </section>
        <section :class="$style['product-benefit__section']">
          <div :class="$style['product-benefit__image']">
            <img
              src="@/assets/images/contents/img-long-term-car-rental03.png"
              alt=""
            />
          </div>
          <div :class="$style['product-benefit__info']">
            <h3 :class="$style['product-benefit__title']">초기비용 ZERO!</h3>
            <p :class="$style['product-benefit__text']">
              초기비용 걱정없이<br />다이렉트 렌트카로<br />
              저렴하게 이용해보세요.
            </p>
          </div>
        </section>
      </div>

      <section class="row-margin-block-group row-margin-top-none">
        <h3 class="text-big-3 row-margin-contents">차량정보</h3>
        <div :class="$style['vehicle-information']">
          <ul :class="$style['vehicle-information__list']">
            <li :class="$style['vehicle-information__item']">
              <BasicBox theme="senary">
                <div class="flex-box">
                  <div class="flex-box__cell flex-1">
                    <h3 class="text-body-1 font-weight-light">카니발</h3>
                    <p class="text-title-1 font-weight-bold row-margin-small">
                      월 350,000 원~
                    </p>
                  </div>
                  <div class="flex-box__cell">
                    <CarThumb src="/images/_dummy/car-thumb.png" />
                  </div>
                </div>
              </BasicBox>
            </li>
            <li :class="$style['vehicle-information__item']">
              <BasicBox theme="senary">
                <div class="flex-box">
                  <div class="flex-box__cell flex-1">
                    <h3 class="text-body-1 font-weight-light">카니발</h3>
                    <p class="text-title-1 font-weight-bold row-margin-small">
                      월 350,000 원~
                    </p>
                  </div>
                  <div class="flex-box__cell">
                    <CarThumb src="/images/_dummy/car-thumb.png" />
                  </div>
                </div>
              </BasicBox>
            </li>
            <li :class="$style['vehicle-information__item']">
              <BasicBox theme="senary">
                <div class="flex-box">
                  <div class="flex-box__cell flex-1">
                    <h3 class="text-body-1 font-weight-light">카니발</h3>
                    <p class="text-title-1 font-weight-bold row-margin-small">
                      월 350,000 원~
                    </p>
                  </div>
                  <div class="flex-box__cell">
                    <CarThumb src="/images/_dummy/car-thumb.png" />
                  </div>
                </div>
              </BasicBox>
            </li>
            <li :class="$style['vehicle-information__item']">
              <BasicBox theme="senary">
                <div class="flex-box">
                  <div class="flex-box__cell flex-1">
                    <h3 class="text-body-1 font-weight-light">카니발</h3>
                    <p class="text-title-1 font-weight-bold row-margin-small">
                      월 350,000 원~
                    </p>
                  </div>
                  <div class="flex-box__cell">
                    <CarThumb src="/images/_dummy/car-thumb.png" />
                  </div>
                </div>
              </BasicBox>
            </li>
            <li :class="$style['vehicle-information__item']">
              <BasicBox theme="senary">
                <div class="flex-box">
                  <div class="flex-box__cell flex-1">
                    <h3 class="text-body-1 font-weight-light">카니발</h3>
                    <p class="text-title-1 font-weight-bold row-margin-small">
                      월 350,000 원~
                    </p>
                  </div>
                  <div class="flex-box__cell">
                    <CarThumb src="/images/_dummy/car-thumb.png" />
                  </div>
                </div>
              </BasicBox>
            </li>
          </ul>
        </div>
      </section>

      <UiTab>
        <NavTab
          :useUiTab="true"
          :classNames="{ wrap: 'row-margin-block-small' }"
        >
          <NavTabButton link="AF_P01_p001_tab001">상품안내</NavTabButton>
          <NavTabButton link="AF_P01_p001_tab002">진행절차</NavTabButton>
          <NavTabButton link="AF_P01_p001_tab003">유의사항</NavTabButton>
        </NavTab>

        <!-- 상품안내 -->
        <UiTabPanel name="AF_P01_p001_tab001">
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
                    계약기간 : 12개월 ~ 최대 60개월 까지
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
                    <div>계약가능차종 : 승용차 전 모델</div>
                    <p class="text-body-3 color-gray row-margin-small">
                      (국산차, 수입차 포함)
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
                    렌탈료 납부시기 : 매월 후취
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
                    <div>
                      렌트료 포함 내역 : 취득세, 보험료, 자동차세, 정비료
                    </div>
                    <p class="text-body-3 color-gray row-margin-small">
                      (계약상품에 따라 포함이 안될 수 있음)
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
                      (운행패턴에 따라 고객 선택)
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
                    <div>
                      만기 시 처리 : 계약 종료 후 고객의 의향에 따라 반환, 구매,
                      연장 가능
                    </div>
                  </div>
                </li>
              </ul>
            </section>

            <section class="row-margin-contents">
              <h3
                class="text-body-3 font-weight-medium color-gray row-margin-item"
              >
                중도해지수수료
              </h3>
              <p class="text-title-2">
                중도해지수수료율 = 잔여렌트료 X 해지위약금율
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
                    잔여렌트료 = 앞면표기 “월렌트료“ X (미청구 잔여개월 수 – 1
                    개월) + 해지시점 당월
                  </div>
                </li>
              </ul>
            </section>

            <section class="row-margin-contents">
              <h3
                class="text-body-3 font-weight-medium color-gray row-margin-item-medium"
              >
                잔여렌트료
              </h3>
              <div :class="$style['basic-table']">
                <table>
                  <colgroup>
                    <col style="width: 240px" />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>차량인도일로부터</th>
                      <th>위약금률</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>2년이하</th>
                      <td>35%</td>
                    </tr>
                    <tr>
                      <th>3년이하</th>
                      <td>30%</td>
                    </tr>
                    <tr>
                      <th>4년이하</th>
                      <td>25%</td>
                    </tr>
                    <tr>
                      <th>4년초과</th>
                      <td>20%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </UiTabPanel>
        <!-- // 상품안내 -->

        <!-- 진행절차 -->
        <UiTabPanel name="AF_P01_p001_tab002">
          <div :class="[$style['step'], $style['step--horizontal']]">
            <ul :class="$style['step__list']">
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 1</div>
                    <p :class="$style['step__text']">
                      <strong>장기렌터카 상담</strong>을 신청합니다.
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
                      신청정보 확인하여<br />
                      결과를 통보<strong>결과를 통보</strong>합니다.
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
                      계약 시 <strong>온라인이나 오프라인 약정</strong>을<br />
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
                    <div :class="$style['step__badge']">STEP 4</div>
                    <p :class="$style['step__text']">
                      고객님께 <strong>차량을 인도</strong>해 드립니다.
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
        <UiTabPanel name="AF_P01_p001_tab003">
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
                렌터카 계약을 체결하기 전에 상품 설명서와 약관을 확인하시기
                바랍니다.
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
                일정기간 렌탈료를 연체할 경우, 모든 렌탈료(원리금)를 변제할
                의무가 발생할 수 있습니다. (연체이자 : 년 20%)
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

        <ul :class="[$style['basic-list'], 'row-margin-contents']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              준법심의필 21-1123 (2021.10.01~2022.09.30)
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
            <a href="" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']">
                <Icon1QCapital />
              </span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__text']">
                  모바일 앱에서 편하게 이용해요
                </span>
                <span :class="$style['icon-list__title']">앱 설치하기</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P01_p001.scss';
</style>

<script>
// MI_P03_p001
import { RouterLink } from 'vue-router';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconMembershipDriver from '@/assets/images/icon/membership-driver.svg?component';
import IconMembershipCrown from '@/assets/images/icon/membership-crown.svg?component';
import IconMembershipRate from '@/assets/images/icon/membership-rate.svg?component';
import IconMembershipCar from '@/assets/images/icon/membership-car.svg?component';
import IconMembershipBuilding from '@/assets/images/icon/membership-building.svg?component';

export default {
  components: {
    RouterLink,
    PageContents,
    PageHead,
    PageTitle,
    PageSubText,
    BasicHr,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    BasicButton,
    ButtonList,
    ButtonListItem,
    TextButton,
    IconMembershipDriver,
    IconMembershipCrown,
    IconMembershipRate,
    IconMembershipCar,
    IconMembershipBuilding,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>하나캐피탈 멤버십</PageTitle>
      <PageSubText :classNames="{ wrap: 'font-weight-regular' }">
        하나캐피탈 멤버십 회원만을 위한 특별한 혜택을 만나보세요.
      </PageSubText>
    </PageHead>

    <div>
      <div :class="[$style['product-list'], $style['product-list--col-5']]">
        <ul :class="$style['product-list__list']">
          <li :class="$style['product-list__item']">
            <RouterLink
              to=""
              :class="[
                $style['product-list__block'],
                $style['product-list__block--secondary'],
                $style['product-list__block--flex-column'],
              ]"
            >
              <div :class="$style['product-list__icon']">
                <IconMembershipDriver />
              </div>
              <h3 :class="[$style['product-list__title'], 'color-white']">
                무료 보험 서비스
              </h3>
              <p :class="[$style['product-list__text'], 'color-white']">
                '교통상해사망/교통상해후유장해보험’ 서비스를 하나캐피탈 멤버십
                회원에게는 무료 제공하는 서비스
              </p>
            </RouterLink>
          </li>

          <li :class="$style['product-list__item']">
            <RouterLink
              to=""
              :class="[
                $style['product-list__block'],
                $style['product-list__block--tertiary'],
                $style['product-list__block--flex-column'],
              ]"
            >
              <div :class="$style['product-list__icon']">
                <IconMembershipCrown />
              </div>
              <h3 :class="[$style['product-list__title'], 'color-white']">
                금리우대 서비스
              </h3>
              <p :class="[$style['product-list__text'], 'color-white']">
                하나캐피탈 멤버십 회원이 신용대출 상품 이용 시 금리 우대를
                제공하는 혜택 서비스
              </p>
              <div :class="$style['product-list__etc']">모바일전용</div>
            </RouterLink>
          </li>

          <li :class="$style['product-list__item']">
            <RouterLink
              to=""
              :class="[
                $style['product-list__block'],
                $style['product-list__block--quaternary'],
                $style['product-list__block--flex-column'],
              ]"
            >
              <div :class="$style['product-list__icon']">
                <IconMembershipRate />
              </div>
              <h3 :class="[$style['product-list__title'], 'color-white']">
                생활가전 렌탈료<br />
                할인 서비스
              </h3>
              <p :class="[$style['product-list__text'], 'color-white']">
                하나캐피탈 제휴처 렌탈 시 렌탈료 할인을 제공하는 혜택 서비스
              </p>
            </RouterLink>
          </li>

          <li :class="$style['product-list__item']">
            <RouterLink
              to=""
              :class="[
                $style['product-list__block'],
                $style['product-list__block--quinary'],
                $style['product-list__block--flex-column'],
              ]"
            >
              <div :class="$style['product-list__icon']">
                <IconMembershipCar />
              </div>
              <h3 :class="[$style['product-list__title'], 'color-white']">
                자동차 시세조회
              </h3>
              <p :class="[$style['product-list__text'], 'color-white']">
                매월 업데이트되는 차량정보로 내 차 시세조회가 가능한 혜택 서비스
              </p>
              <div :class="$style['product-list__etc']">모바일전용</div>
            </RouterLink>
          </li>

          <li :class="$style['product-list__item']">
            <RouterLink
              to=""
              :class="[
                $style['product-list__block'],
                $style['product-list__block--senary'],
                $style['product-list__block--flex-column'],
              ]"
            >
              <div :class="$style['product-list__icon']">
                <IconMembershipBuilding />
              </div>
              <h3 :class="[$style['product-list__title'], 'color-white']">
                부동산 시세조회
              </h3>
              <p :class="[$style['product-list__text'], 'color-white']">
                매주 업데이트되는 부동산 시세조회를 무료로 이용할 수 있는 혜택
                서비스
              </p>
              <div :class="$style['product-list__etc']">모바일전용</div>
            </RouterLink>
          </li>
        </ul>
      </div>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">Q&A</h3>
        <BasicHr theme="quinary" />

        <div :class="$style['qna']">
          <UiAccordion :classNames="{ wrap: $style['qna__list'] }">
            <UiAccordionItem :classNames="{ item: $style['qna__item'] }">
              <div :class="$style['qna__head']">
                <div :class="$style['qna__symbol']">Q</div>
                <div :class="$style['qna__cell']">
                  <h4 :class="$style['qna__title']">
                    하나캐피탈 멤버십 가입은 어떻게 하나요?
                  </h4>
                </div>
                <div :class="$style['qna__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['qna__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer :classNames="{ layer: $style['qna__layer'] }">
                <div :class="$style['qna__contents']">
                  <div
                    :class="[
                      $style['qna__symbol'],
                      $style['qna__symbol--answer'],
                    ]"
                  >
                    A
                  </div>
                  <div :class="$style['qna__cell']">
                    <p :class="$style['qna__text']">
                      하나캐피탈 회원가입은 성별 나이 특정제한 없이 하나캐피탈
                      이용 및 관심있으신 손님이시면 누구나 가입가능하며,
                      홈페이지 및 모바일에서 멤버십 가입하기를 통해 가입하실 수
                      있습니다.
                    </p>
                  </div>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
            <UiAccordionItem :classNames="{ item: $style['qna__item'] }">
              <div :class="$style['qna__head']">
                <div :class="$style['qna__symbol']">Q</div>
                <div :class="$style['qna__cell']">
                  <h4 :class="$style['qna__title']">
                    하나캐피탈 멤버십 가입 시 연회비나 기타비용이 들어가나요?
                  </h4>
                </div>
                <div :class="$style['qna__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['qna__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer :classNames="{ layer: $style['qna__layer'] }">
                <div :class="$style['qna__contents']">
                  <div
                    :class="[
                      $style['qna__symbol'],
                      $style['qna__symbol--answer'],
                    ]"
                  >
                    A
                  </div>
                  <div :class="$style['qna__cell']">
                    <p :class="$style['qna__text']">
                      하나캐피탈 멤버십은 손님들께 전액 무료로 제공되는 서비스로
                      추가비용이 발생하지 않습니다.
                    </p>
                  </div>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
            <UiAccordionItem :classNames="{ item: $style['qna__item'] }">
              <div :class="$style['qna__head']">
                <div :class="$style['qna__symbol']">Q</div>
                <div :class="$style['qna__cell']">
                  <h4 :class="$style['qna__title']">
                    보험 서비스는 직접 신청해야만 하나요?
                  </h4>
                </div>
                <div :class="$style['qna__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['qna__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer :classNames="{ layer: $style['qna__layer'] }">
                <div :class="$style['qna__contents']">
                  <div
                    :class="[
                      $style['qna__symbol'],
                      $style['qna__symbol--answer'],
                    ]"
                  >
                    A
                  </div>
                  <div :class="$style['qna__cell']">
                    <p :class="$style['qna__text']">
                      네. 사고 시 하나손해보험 고객센터로 직접 접수해주셔야
                      보상이 가능합니다.
                    </p>
                  </div>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
            <UiAccordionItem :classNames="{ item: $style['qna__item'] }">
              <div :class="$style['qna__head']">
                <div :class="$style['qna__symbol']">Q</div>
                <div :class="$style['qna__cell']">
                  <h4 :class="$style['qna__title']">
                    하나캐피탈 멤버십 탈회는 어떻게 해야하나요?
                  </h4>
                </div>
                <div :class="$style['qna__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['qna__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer :classNames="{ layer: $style['qna__layer'] }">
                <div :class="$style['qna__contents']">
                  <div
                    :class="[
                      $style['qna__symbol'],
                      $style['qna__symbol--answer'],
                    ]"
                  >
                    A
                  </div>
                  <div :class="$style['qna__cell']">
                    <p :class="$style['qna__text']">
                      탈회를 원하실 경우, 고객센터(1800-1110) 또는 하나캐피탈
                      홈페이지 및 WEB/APP을 통해 편리하게 처리 가능합니다.<br />
                      단, 탈회 즉시 모든 멤버십 서비스를 이용할 수 없으니
                      신중하게 생각하시길 바랍니다.
                    </p>
                  </div>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
          </UiAccordion>
        </div>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">유의사항</h3>
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
              'text-body-1 color-black font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              계약을 체결하기 전에 상품 설명서와 약관을 확인 하시기 바랍니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-1 color-black font-weight-medium',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              상환능력에 비해 대출금이 과도할 경우 귀하의 개인신용평점이 하락할
              수 있습니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-1 color-black font-weight-medium',
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
              'text-body-1 color-black font-weight-medium',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              일정기간 원리금을 연체할 경우, 모든 원리금을 변제할 의무가 발생할
              수 있습니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-1 color-black font-weight-regular',
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
              'text-body-1 color-black font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              담보물건, 담보종류 등에 따라 대출조건이 차등적요외며 담보물이
              부적합할 경우 대출이 제한될 수 있습니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-1 color-black font-weight-regular',
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
              'text-body-1 color-black font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              금리인하요구권 및 대출계약 철회권에 대한 자세한 사항은
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

      <!-- Case : 미가입 회원일 경우 -->
      <ButtonList :wrap="true" align="center">
        <ButtonListItem>
          <BasicButton>하나캐피탈 멤버십 가입하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- //Case : 미가입 회원일 경우 -->

      <!-- Case : 기가입 회원일 경우 -->
      <div class="inline-wrap align-center row-margin-block">
        <TextButton
          :underline="true"
          :classNames="{
            wrap: ['color-gray-tertiary'],
          }"
        >
          탈퇴하기
        </TextButton>
      </div>
      <!-- //Case : 기가입 회원일 경우 -->
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/membership/MI_P03_p001.scss';
</style>

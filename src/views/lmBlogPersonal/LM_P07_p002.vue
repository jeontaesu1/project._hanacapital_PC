<script>
// LM_P07_p002
import PageContents from '@/components/ui/layout/PageContents.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconCustomer from '@/assets/images/icon/customer-center.svg?component';
import IconCall from '@/assets/images/icon/call.svg?component';
import IconSms from '@/assets/images/icon/sms.svg?component';
import IconConsultation from '@/assets/images/icon/consultation.svg?component';

export default {
  components: {
    PageContents,
    TextButton,
    BasicHr,
    IconCustomer,
    IconCall,
    IconSms,
    IconConsultation,
  },
};
</script>

<template>
  <PageContents size="wide">
    <div :class="$style['ars-layout']">
      <div
        :class="[
          $style['ars-layout__item'],
          $style['ars-layout__item--fixed-width'],
        ]"
      >
        <div :class="$style['ars-layout__box']">
          <div class="align-center">
            <div class="text-body-3 row-margin-item-group">
              하나캐피탈 대출상담사
            </div>

            <div :class="$style['ars-layout__icon']">
              <IconCustomer />
            </div>

            <div class="row-margin-contents row-margin-bottom-none">
              <h3 class="text-big-3 font-weight-medium">김하나</h3>
              <div class="text-body-1 color-gray-quaternary row-margin-mini">
                hanakim@capital
              </div>
            </div>

            <div class="row-margin-contents-small">
              <TextButton
                tagName="a"
                href="tel:010-1234-5678"
                theme="secondary"
                :iconFillAll="true"
              >
                <template v-slot:leftIcon>
                  <IconCall />
                </template>
                010-1234-5678
              </TextButton>

              <div
                class="flex-box justify-conten-center row-margin-item-medium"
              >
                <div class="flex-box__cell">
                  <span class="font-weight-light color-gray-secondary"
                    >여신금융협회 등록번호</span
                  >
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <span class="font-weight-light color-gray-secondary"
                    >1000024254</span
                  >
                </div>
              </div>
            </div>
          </div>

          <BasicHr theme="tertiary" className="row-margin-container-medium" />

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                김하나은(는) 하나캐피탈의 대출모집 업무(금융상품 판매업무)를
                대리하거나 중개합니다.(등록번호 1000024254)
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                위 사람은 금융 관계법률에 따라 하나캐피탈㈜와 위탁계약을
                체결하고 여신금융협회에 정식 등록된 대출상담사 입니다.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                (대출성 금융상품 판매대리 중개업체
                통합조회(www.loanconsultantor.kr))
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                위 사람은 하나캐피탈㈜만을 대리하거나 중개합니다.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                위 사람은 하나캐피탈㈜의 금융상품에 대한 계약체결 권한이
                없습니다.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                민원창구 연락처 1800-1110
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        :class="[
          $style['ars-layout__item'],
          $style['ars-layout__item--stretch'],
        ]"
      >
        <div :class="$style['menu-list']">
          <div :class="$style['menu-list__item']">
            <button type="button" :class="$style['menu-list__block']">
              <div :class="$style['menu-list__icon']">
                <IconConsultation />
              </div>
              <div :class="$style['menu-list__title']">빠른 대출 상담</div>
            </button>
          </div>
          <div :class="$style['menu-list__item']">
            <button type="button" :class="$style['menu-list__block']">
              <div :class="$style['menu-list__icon']">
                <IconSms />
              </div>
              <div :class="$style['menu-list__title']">SMS 상담</div>
            </button>
          </div>
        </div>

        <div :class="$style['ars-layout']">
          <div :class="$style['ars-layout__item']">
            <div
              :class="[
                $style['ars-layout__box'],
                $style['ars-layout__box--secondary'],
              ]"
            >
              <h3 class="text-title-1 row-margin-contents">지점안내</h3>
              <div :class="$style['map']">// 지도영역</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lmBlogPersonal/LM_P07_p002.scss';
</style>

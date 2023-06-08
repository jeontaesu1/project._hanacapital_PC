<script>
// Customer_P01_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import EventBanner from '@/components/ui/banner/EventBanner.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';

import IconCustomer from '@/assets/images/icon/customer-center.svg?component';
import IconLink from '@/assets/images/icon/link.svg?component';
import IconDown from '@/assets/images/icon/down.svg?component';

export default {
  components: {
    PageContents,
    BasicHr,
    BasicButton,
    EventBanner,
    TextButton,
    RoundStatus,

    IconCustomer,
    IconLink,
    IconDown,
  },
};
</script>

<template>
  <PageContents size="wide">
    <section>
      <h3 class="text-big-3 row-margin-contents">상담 · 문의</h3>

      <div :class="[$style['icon-list'], $style['icon-list__customer']]">
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <div :class="$style['icon-list__block']">
              <div :class="$style['icon-list__icon']"><IconCustomer /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">고객센터 ARS 안내</div>
                <div :class="$style['icon-list__text']">
                  빠른 연결을 위해 고객센터 상담 번호를<br />안내해드리겠습니다.
                </div>
              </div>
            </div>
          </li>
          <li :class="$style['icon-list__item']">
            <div :class="$style['icon-list__block']">
              <div :class="$style['icon-list__icon']"><IconCustomer /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">고객 상담</div>
                <div :class="$style['icon-list__text']">
                  문의 주신 내용에 대해<br />빠른 시간 내 답변 드리겠습니다
                </div>
              </div>
            </div>
          </li>
          <li :class="$style['icon-list__item']">
            <div :class="$style['icon-list__block']">
              <div :class="$style['icon-list__icon']"><IconCustomer /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">전자민원접수</div>
                <div :class="$style['icon-list__text']">
                  불편했던 점을 말씀해주세요.<br />신속히 개선하도록 하겠습니다.
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <BasicHr theme="quaternary" className="row-margin-block" />

    <section>
      <h3 class="text-big-3 row-margin-contents">자주 찾는 메뉴</h3>

      <div :class="[$style['icon-list'], $style['icon-list__customer']]">
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <div :class="$style['icon-list__block']">
              <div :class="$style['icon-list__icon']"><IconCustomer /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">FAQ</div>
                <div :class="$style['icon-list__text']">
                  찾고 싶은 단어나 문장을<br />검색해보세요.
                </div>
              </div>
            </div>
          </li>
          <li :class="$style['icon-list__item']">
            <div :class="$style['icon-list__block']">
              <div :class="$style['icon-list__icon']"><IconCustomer /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">지점 안내</div>
                <div :class="$style['icon-list__text']">
                  지점 방문이 필요하실 경우<br />하나캐피탈 지점을 확인하세요.
                </div>
              </div>
            </div>
          </li>
          <li :class="$style['icon-list__item']">
            <div :class="$style['icon-list__block']">
              <div :class="$style['icon-list__icon']"><IconCustomer /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">인증센터</div>
                <div :class="$style['icon-list__text']">
                  PC와 스마트폰에서<br />인증서를 사용해보세요.
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <BasicHr theme="quaternary" className="row-margin-block" />

    <div :class="$style['customer-layout']">
      <section :class="$style['customer-layout__section']">
        <div class="flex-box row-margin-container-medium">
          <h3 class="text-big-3 flex-1">홈페이지 이용 안내</h3>
          <div class="flex-box">
            <BasicButton
              inline="true"
              size="small"
              :line="true"
              theme="quaternary"
              class="flex-box__cell"
              >정책 및 약관</BasicButton
            >
            <BasicButton
              inline="true"
              size="small"
              :line="true"
              theme="quaternary"
              class="flex-box__cell"
              >이용 시 유의사항</BasicButton
            >
          </div>
        </div>
        <div :class="[$style['icon-list'], $style['homepage-user-guide']]">
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <div :class="$style['icon-list__block']">
                <div :class="$style['icon-list__icon']"><IconCustomer /></div>
                <div :class="$style['icon-list__content']">
                  <div :class="$style['icon-list__title']">보안센터</div>
                  <div class="row-margin-item-medium">
                    <TextButton
                      iconSize="medium"
                      textSize="medium"
                      :block="true"
                      class="color-gray-tertiary"
                    >
                      프로그램 설치 안내
                      <template v-slot:rightIcon>
                        <IconLink />
                      </template>
                    </TextButton>
                  </div>
                  <div>
                    <TextButton
                      iconSize="medium"
                      textSize="medium"
                      :block="true"
                      class="color-gray-tertiary"
                    >
                      프로그램 삭제 안내
                      <template v-slot:rightIcon>
                        <IconLink />
                      </template>
                    </TextButton>
                  </div>
                </div>
              </div>
            </li>
            <li :class="$style['icon-list__item']">
              <div :class="$style['icon-list__block']">
                <div :class="$style['icon-list__icon']"><IconCustomer /></div>
                <div :class="$style['icon-list__content']">
                  <div :class="$style['icon-list__title']">
                    개인정보이용 현황
                  </div>
                  <div class="row-margin-item-medium">
                    <TextButton
                      iconSize="medium"
                      textSize="medium"
                      :block="true"
                      class="color-gray-tertiary"
                    >
                      개인정보열람 청구
                      <template v-slot:rightIcon>
                        <IconLink />
                      </template>
                    </TextButton>
                  </div>
                  <div>
                    <TextButton
                      iconSize="medium"
                      textSize="medium"
                      :block="true"
                      class="color-gray-tertiary"
                    >
                      정보이용 · 제공 조회
                      <template v-slot:rightIcon>
                        <IconLink />
                      </template>
                    </TextButton>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section :class="$style['customer-layout__section']">
        <div class="flex-box row-margin-container-medium">
          <h3 class="text-big-3 flex-1">기타 안내</h3>
          <div class="flex-box">
            <BasicButton
              inline="true"
              size="small"
              :line="true"
              theme="quaternary"
              class="flex-box__cell"
            >
              서식 다운로드
              <template v-slot:rightIcon> <IconDown /> </template>
            </BasicButton>
          </div>
        </div>
        <div :class="$style['icon-list']">
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <div :class="$style['icon-list__block']">
                <div :class="$style['icon-list__icon']"><IconCustomer /></div>
                <div :class="$style['icon-list__content']">
                  <div :class="$style['icon-list__title']">금융소비자보호</div>
                  <div :class="$style['customer-link-list']">
                    <ul :class="$style['customer-link-list__list']">
                      <li :class="$style['customer-link-list__item']">
                        <TextButton
                          iconSize="medium"
                          textSize="medium"
                          :block="true"
                          class="color-gray-tertiary"
                        >
                          금융소비자보호헌장
                          <template v-slot:rightIcon>
                            <IconLink />
                          </template>
                        </TextButton>
                      </li>
                      <li :class="$style['customer-link-list__item']">
                        <TextButton
                          iconSize="medium"
                          textSize="medium"
                          :block="true"
                          class="color-gray-tertiary"
                        >
                          금융소비자보호조직
                          <template v-slot:rightIcon>
                            <IconLink />
                          </template>
                        </TextButton>
                      </li>
                      <li :class="$style['customer-link-list__item']">
                        <TextButton
                          iconSize="medium"
                          textSize="medium"
                          :block="true"
                          class="color-gray-tertiary"
                        >
                          금융소비자보호체계
                          <template v-slot:rightIcon>
                            <IconLink />
                          </template>
                        </TextButton>
                      </li>
                      <li :class="$style['customer-link-list__item']">
                        <TextButton
                          iconSize="medium"
                          textSize="medium"
                          :block="true"
                          class="color-gray-tertiary"
                        >
                          금융소비자보호웹진
                          <template v-slot:rightIcon>
                            <IconLink />
                          </template>
                        </TextButton>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>

    <BasicHr theme="quaternary" className="row-margin-block" />

    <div :class="$style['customer-layout']">
      <section :class="$style['customer-layout__section']">
        <div class="flex-box row-margin-contents">
          <h3 class="text-big-3 flex-1">공지사항</h3>
          <div class="flex-box">
            <TextButton
              iconSize="medium"
              textSize="medium"
              :block="true"
              class="color-gray-tertiary"
            >
              더보기
              <template v-slot:rightIcon>
                <IconLink />
              </template>
            </TextButton>
          </div>
        </div>

        <div :class="$style['notice-list']">
          <ul :class="$style['notice-list__list']">
            <li :class="$style['notice-list__item']">
              <router-link to="" :class="$style['notice-list__link']">
                <p :class="$style['notice-list__text']">
                  채권양도 관련 개인(신용)정보 제공사실 공지 채권양도 관련
                  개인(신용)정보 제공사실 공지
                </p>
                <div :class="$style['notice-list__date']">2202.08.30</div>
              </router-link>
            </li>
            <li :class="$style['notice-list__item']">
              <router-link to="" :class="$style['notice-list__link']">
                <p :class="$style['notice-list__text']">
                  채권양도 관련 개인(신용)정보 제공사실 공지 채권양도 관련
                  개인(신용)정보 제공사실 공지
                </p>
                <div :class="$style['notice-list__date']">2202.08.30</div>
              </router-link>
            </li>
            <li :class="$style['notice-list__item']">
              <router-link to="" :class="$style['notice-list__link']">
                <p :class="$style['notice-list__text']">
                  채권양도 관련 개인(신용)정보 제공사실 공지 채권양도 관련
                  개인(신용)정보 제공사실 공지
                </p>
                <div :class="$style['notice-list__date']">2202.08.30</div>
              </router-link>
            </li>
          </ul>
        </div>
      </section>
      <section :class="$style['customer-layout__section']">
        <div class="flex-box row-margin-contents">
          <h3 class="text-big-3 flex-1">이벤트</h3>
          <div class="flex-box">
            <TextButton
              iconSize="medium"
              textSize="medium"
              :block="true"
              class="color-gray-tertiary"
            >
              더보기
              <template v-slot:rightIcon>
                <IconLink />
              </template>
            </TextButton>
          </div>
        </div>
        <EventBanner
          thumb="/images/_dummy/banner-money-up.png"
          @click="() => {}"
        >
          <div class="inline-wrap row-margin-item-regular">
            <RoundStatus size="small" theme="duodenary">진행중</RoundStatus>
          </div>
          <h3 class="text-body-1 font-weight-medium ellipsis">
            에코플러스 자동차보험
          </h3>
          <p class="text-body-4 color-gray row-margin-small multi-ellipsis">
            보험 가입하면 주유권 3만원 제공<br />(신규 30만원)
          </p>
          <p
            class="text-body-5 color-gray font-weight-light row-margin-item-medium"
          >
            2022.12.01 ~ 2022.12.31
          </p>
        </EventBanner>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P00_p001.scss';
</style>

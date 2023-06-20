<script>
// Customer_P00_p001
import { RouterLink } from 'vue-router';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import EventBanner from '@/components/ui/banner/EventBanner.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';

import IconCustomer from '@/assets/images/icon/customer-center.svg?component';
import IconLink from '@/assets/images/icon/link.svg?component';
import IconDownload from '@/assets/images/common/download.svg?component';

export default {
  components: {
    RouterLink,
    PageContents,
    BasicHr,
    BasicButton,
    EventBanner,
    TextButton,
    RoundStatus,
    IconCustomer,
    IconLink,
    IconDownload,
  },
};
</script>

<template>
  <PageContents size="wide">
    <section>
      <h3 class="text-big-3 row-margin-container-medium">상담 · 문의</h3>
      <div
        :class="[
          $style['icon-list'],
          $style['icon-list--wrap'],
          $style['icon-list--col-3'],
        ]"
      >
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <RouterLink to="" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconCustomer /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__title']"
                  >고객센터 ARS 안내</span
                >
                <span :class="$style['icon-list__text']">
                  빠른 연결을 위해 고객센터 상담 번호를<br />안내해드리겠습니다.
                </span>
              </span>
            </RouterLink>
          </li>
          <li :class="$style['icon-list__item']">
            <RouterLink to="" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconCustomer /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__title']">고객 상담</span>
                <span :class="$style['icon-list__text']">
                  문의 주신 내용에 대해<br />빠른 시간 내 답변 드리겠습니다
                </span>
              </span>
            </RouterLink>
          </li>
          <li :class="$style['icon-list__item']">
            <RouterLink to="" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconCustomer /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__title']">전자민원접수</span>
                <span :class="$style['icon-list__text']">
                  불편했던 점을 말씀해주세요.<br />신속히 개선하도록 하겠습니다.
                </span>
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>

    <BasicHr theme="quaternary" className="row-margin-block" />

    <section>
      <h3 class="text-big-3 row-margin-container-medium">자주 찾는 메뉴</h3>
      <div
        :class="[
          $style['icon-list'],
          $style['icon-list--wrap'],
          $style['icon-list--col-3'],
        ]"
      >
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <RouterLink to="" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconCustomer /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__title']">FAQ</span>
                <span :class="$style['icon-list__text']">
                  찾고 싶은 단어나 문장을<br />검색해보세요.
                </span>
              </span>
            </RouterLink>
          </li>
          <li :class="$style['icon-list__item']">
            <RouterLink to="" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconCustomer /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__title']">지점 안내</span>
                <span :class="$style['icon-list__text']">
                  지점 방문이 필요하실 경우<br />하나캐피탈 지점을 확인하세요.
                </span>
              </span>
            </RouterLink>
          </li>
          <li :class="$style['icon-list__item']">
            <RouterLink to="" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconCustomer /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__title']">인증센터</span>
                <span :class="$style['icon-list__text']">
                  PC와 스마트폰에서<br />인증서를 사용해보세요.
                </span>
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>

    <BasicHr theme="quaternary" className="row-margin-block" />

    <div :class="$style['customer-layout']">
      <section :class="$style['customer-layout__section']">
        <div class="flex-box row-margin-container-medium">
          <div class="flex-box__cell flex-1">
            <h3 class="text-big-3">홈페이지 이용 안내</h3>
          </div>
          <div class="flex-box__cell flex-box__cell--small">
            <BasicButton
              size="small"
              :line="true"
              theme="quaternary"
              tagName="RouterLink"
              to=""
              >정책 및 약관</BasicButton
            >
          </div>
          <div class="flex-box__cell">
            <BasicButton
              size="small"
              :line="true"
              theme="quaternary"
              tagName="RouterLink"
              to=""
              >이용 시 유의사항</BasicButton
            >
          </div>
        </div>
        <div
          :class="[
            $style['icon-list'],
            $style['icon-list--wrap'],
            $style['homepage-guide-list'],
          ]"
        >
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <div :class="$style['icon-list__block']">
                <div :class="$style['icon-list__icon']"><IconCustomer /></div>
                <div :class="$style['icon-list__content']">
                  <div :class="$style['icon-list__title']">보안센터</div>
                  <ul class="reset-list row-margin-item-medium">
                    <li class="row-margin-item-medium">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        프로그램 설치 안내
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                    <li>
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        프로그램 삭제 안내
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                  </ul>
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
                  <ul class="reset-list row-margin-item-medium">
                    <li class="row-margin-item-medium">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        개인정보열람 청구
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                    <li>
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        정보이용 · 제공 조회
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section :class="$style['customer-layout__section']">
        <div class="flex-box row-margin-container-medium">
          <div class="flex-box__cell flex-1">
            <h3 class="text-big-3">기타 안내</h3>
          </div>
          <div class="flex-box__cell flex-box__cell--small">
            <BasicButton
              size="small"
              :line="true"
              theme="quaternary"
              tagName="RouterLink"
              to=""
            >
              서식 다운로드
              <template v-slot:rightIcon> <IconDownload /> </template>
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
                  <div
                    :class="[
                      $style['customer-links'],
                      'row-margin-item-medium',
                    ]"
                  >
                    <ul :class="$style['customer-links__list']">
                      <li :class="$style['customer-links__item']">
                        <TextButton
                          iconSize="medium"
                          textSize="medium"
                          :block="true"
                          :classNames="{ wrap: 'color-gray-tertiary' }"
                          tagName="RouterLink"
                          to=""
                        >
                          금융소비자보호헌장
                          <template v-slot:rightIcon>
                            <IconLink />
                          </template>
                        </TextButton>
                      </li>
                      <li :class="$style['customer-links__item']">
                        <TextButton
                          iconSize="medium"
                          textSize="medium"
                          :block="true"
                          :classNames="{ wrap: 'color-gray-tertiary' }"
                          tagName="RouterLink"
                          to=""
                        >
                          금융소비자보호조직
                          <template v-slot:rightIcon>
                            <IconLink />
                          </template>
                        </TextButton>
                      </li>
                      <li :class="$style['customer-links__item']">
                        <TextButton
                          iconSize="medium"
                          textSize="medium"
                          :block="true"
                          :classNames="{ wrap: 'color-gray-tertiary' }"
                          tagName="RouterLink"
                          to=""
                        >
                          금융소비자보호체계
                          <template v-slot:rightIcon>
                            <IconLink />
                          </template>
                        </TextButton>
                      </li>
                      <li :class="$style['customer-links__item']">
                        <TextButton
                          iconSize="medium"
                          textSize="medium"
                          :block="true"
                          :classNames="{ wrap: 'color-gray-tertiary' }"
                          tagName="RouterLink"
                          to=""
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
          <div class="flex-box__cell flex-1">
            <h3 class="text-big-3">공지사항</h3>
          </div>
          <div class="flex-box__cell">
            <TextButton
              iconSize="medium"
              textSize="medium"
              :block="true"
              :classNames="{ wrap: 'color-gray-tertiary' }"
            >
              더보기
              <template v-slot:rightIcon>
                <IconLink />
              </template>
            </TextButton>
          </div>
        </div>

        <div :class="$style['latest-list']">
          <ul :class="$style['latest-list__list']">
            <li v-for="i in 3" :key="i" :class="$style['latest-list__item']">
              <RouterLink to="" :class="$style['latest-list__block']">
                <div
                  :class="[
                    $style['latest-list__cell'],
                    $style['latest-list__cell--title'],
                  ]"
                >
                  <div :class="$style['latest-list__title']">
                    공지사항 타이틀 노출 공지사항 타이틀 노출 공지사항 타이틀
                    노출 공지사항 타이틀 노출
                  </div>
                </div>
                <div :class="[$style['latest-list__cell']]">
                  <div :class="$style['latest-list__date']">2022.08.30</div>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </section>
      <section :class="$style['customer-layout__section']">
        <div class="flex-box row-margin-contents">
          <div class="flex-box__cell flex-1">
            <h3 class="text-big-3">이벤트</h3>
          </div>
          <div class="flex-box__cell">
            <TextButton
              iconSize="medium"
              textSize="medium"
              :block="true"
              :classNames="{ wrap: 'color-gray-tertiary' }"
            >
              더보기
              <template v-slot:rightIcon>
                <IconLink />
              </template>
            </TextButton>
          </div>
        </div>

        <!-- DD : 관리자 등록 배너 -->
        <EventBanner thumb="/images/_dummy/img-area.png" @click="() => {}">
          <div class="inline-wrap row-margin-item-medium">
            <RoundStatus size="small" theme="duodenary">진행중</RoundStatus>
          </div>
          <h3 class="text-title-1 font-weight-medium ellipsis">
            타이틀 노출 최대 1줄 타이틀 노출 최대 1줄 타이틀 노출 최대 1줄
          </h3>
          <p
            class="text-body-1 font-weight-light row-margin-small multi-ellipsis"
          >
            설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출
            최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄
          </p>
          <p
            class="text-body-3 font-weight-light color-gray-tertiary row-margin-item-medium"
          >
            2022.12.01 ~ 2022.12.31
          </p>
        </EventBanner>
        <!-- // DD : 관리자 등록 배너 -->
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P00_p001.scss';
</style>

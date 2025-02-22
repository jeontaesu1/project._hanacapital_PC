<script>
// Customer_P09_p009
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageMainText,
    NoticeText,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'customer');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });
  },
};
</script>

<template>
  <PageContents size="wide">
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '고객센터',
            to: '/',
          },
          {
            text: '금융소비자보호',
          },
          {
            text: '중도상환수수료 면제',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>중도상환수수료 면제</PageTitle>
      <PageMainText
        align="center"
        :classNames="{ wrap: 'text-title-2 font-weight-regular' }"
      >
        대출금을 처음 약속한 기간 동안 사용하지 않고 중도에 상환(부분상환 또는
        중도완납)할 경우에 금융회사에 납부해야 하는 수수료를 말합니다.<br />
        중도상환수수료는 대출조건 및 대출기간과 상품에 따라 상이하게 운영됩니다.
      </PageMainText>
    </PageHead>

    <section>
      <h3 class="text-body-1 row-margin-item-group">중도상환수수료 면제기준</h3>

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
            피상속인(채무자) 사망 후 사망일로부터 3개월 이내에
            피상속인(채무자)의 대출금을 상속인 명의로 변경하지 않고 중도상환하는
            경우
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
            이외 별도의 운영기준이 있는 경우
          </div>
        </li>
      </ul>

      <NoticeText
        :classNames="{
          wrap: 'row-margin-item-medium',
        }"
      >
        계약자 사망에 따른 중도상환수수료 면제의 경우 신청자(상속인)의 신분증,
        가족관계증명서, 사망자의 사망진단서가 필요하며, 기타 자세한 사항은 당사
        고객센터(대표번호: 1800-1100) 또는 대출지점으로 문의 바랍니다.
      </NoticeText>
    </section>

    <div :class="[$style['logs-wrap'], 'row-margin-block-small']">
      <ul :class="$style['logs']">
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  금융소비자보호조직
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  금융소비자보호체계
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  금융소비자보호웹진
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  금융소비자보호공시
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  금리인하요구권 안내
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  대출계약철회권 안내
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  중도상환수수료 면제
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P09_p009.scss';
</style>

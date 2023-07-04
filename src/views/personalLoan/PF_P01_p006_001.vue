<script>
// PF_P01_p006 대출신청완료
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    IllustInfo,
    IllustObject,
    IllustInfoTitle,
    IllustInfoText,
    BasicHr,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'personalLoan');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    return {
      store,
    };
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '개인금융',
            to: '/',
          },
          {
            text: 'e하나신용대출',
          },
        ]"
      />
    </template>

    <IllustInfo>
      <IllustObject type="complete" />
      <IllustInfoTitle>온라인약정이 완료되었습니다</IllustInfoTitle>
      <IllustInfoText>
        고객님의 소중한 정보를 확인 후 심사결과를 알려드리겠습니다.
      </IllustInfoText>
    </IllustInfo>

    <BasicHr theme="tertiary" className="row-margin-block" />

    <div>
      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">금리인하권 요구 안내</h3>

        <section>
          <h4 class="text-body-1 row-margin-item-medium">대상</h4>
          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                대출 취급일로부터 6개월 경과한 고객
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                신용등급이 개선된 고객(단, 내부정책 및 평가결과 등에 따라서
                금리인하가 되지 않을 수도 있습니다.)
              </div>
            </li>
          </ul>
        </section>
        <section class="row-margin-contents">
          <h4 class="text-body-1 row-margin-item-medium">신청조건</h4>
          <p class="text-body-3 font-weight-light">
            연간 금리인하요구권 사용횟수가 2회 이내
          </p>
        </section>
        <section>
          <h4 class="text-body-1 row-margin-item-medium">신청방법</h4>
          <p class="text-body-3 font-weight-light">
            신청(1800-1110) → 접수 및 심사 → 결과통보 및 약정 → 금리인하 시행
          </p>
        </section>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">청약철회권 안내</h3>

        <section>
          <h4 class="text-body-1 row-margin-item-medium">대상</h4>
          <p class="text-body-3 font-weight-light">
            일반금융소비자(금융소비자보호법 기준)
          </p>
        </section>
        <section class="row-margin-contents">
          <h4 class="text-body-1 row-margin-item-medium">효과</h4>
          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                중도상환수수료 면제
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                대출정보 삭제 (금융회사, 신용정보 외, CB사 등)
              </div>
            </li>
          </ul>
        </section>
        <section>
          <h4 class="text-body-1 row-margin-item-medium">신청방법</h4>
          <p class="text-body-3 font-weight-light">
            고객센터(1800-1110) 및 지점 연락 → 청약철회 신청
          </p>
        </section>
      </section>
    </div>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P01_p006_001.scss';
</style>

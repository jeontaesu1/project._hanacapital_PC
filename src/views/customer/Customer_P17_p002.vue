<script>
// Customer_P17_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    UiTab,
    NavTab,
    NavTabButton,
    UiTabPanel,
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
            to: '',
          },
          {
            text: '프로그램 삭제 안내',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>프로그램 삭제 안내</PageTitle>
    </PageHead>

    <UiTab>
      <NavTab :useUiTab="true">
        <NavTabButton link="Customer_P17_p002_tab001">
          보안 프로그램 삭제
        </NavTabButton>
        <NavTabButton link="Customer_P17_p002_tab002">
          공동인증서 프로그램 삭제
        </NavTabButton>
        <NavTabButton link="Customer_P17_p002_tab003">
          증명서 발급 프로그램 삭제
        </NavTabButton>
      </NavTab>

      <UiTabPanel name="Customer_P17_p002_tab001">
        <div :class="$style['contents-list']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--senary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">1</div>
                <div :class="$style['contents-list__title']">
                  다음과 같이 제어판의 “프로그램 및 기능”에서 AhnLab Safe
                  Transaction을 찾아 “제거”를 선택하면 프로그램이 삭제됩니다.
                </div>
              </div>
              <div class="row-margin-item-regular">
                <div :class="$style['image-view']">
                  <img
                    src="@/assets/images/_dummy/box-detail-2.png"
                    alt="샘플 이미지"
                  />
                </div>
              </div>
            </li>
          </ol>
        </div>
      </UiTabPanel>

      <UiTabPanel name="Customer_P17_p002_tab002">
        <div :class="$style['contents-list']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--senary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">1</div>
                <div :class="$style['contents-list__title']">
                  다음과 같이 제어판의 “프로그램 및 기능”에서 Anysign4PC를 찾아
                  “제거”를 선택하면 프로그램이 삭제됩니다.
                </div>
              </div>
              <div class="row-margin-item-regular">
                <div :class="$style['image-view']">
                  <img
                    src="@/assets/images/_dummy/box-detail-2.png"
                    alt="샘플 이미지"
                  />
                </div>
              </div>
            </li>
          </ol>
        </div>
      </UiTabPanel>

      <UiTabPanel name="Customer_P17_p002_tab003">
        <div :class="$style['contents-list']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--senary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">1</div>
                <div :class="$style['contents-list__title']">
                  다음과 같이 제어판의 “프로그램 및 기능”에서 MarkAny Inc.
                  e-PageSafer를 찾아 “제거”를 선택하면 프로그램이 삭제됩니다.
                </div>
              </div>
              <div class="row-margin-item-regular">
                <div :class="$style['image-view']">
                  <img
                    src="@/assets/images/_dummy/box-detail-2.png"
                    alt="샘플 이미지"
                  />
                </div>
              </div>
            </li>
          </ol>
        </div>
      </UiTabPanel>
    </UiTab>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P17_p002.scss';
</style>

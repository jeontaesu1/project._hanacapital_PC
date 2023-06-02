<script>
import { computed } from 'vue';

import BasicButton from '@/components/ui/button/BasicButton.vue';

import IconPlus from '@/assets/images/icon/add-black.svg?component';
import IconMinus from '@/assets/images/icon/minus-black.svg?component';
import IconPrev from '@/assets/images/icon/pagination-prev.svg?component';
import IconNext from '@/assets/images/icon/pagination-next.svg?component';

const defaultClassNames = () => ({
  wrap: '',
  body: '',
  bottom: '',
  left: '',
  center: '',
  right: '',
  icon: '',
  guide: '',
  zoom: '',
  zoomButton: '',
  zoomText: '',
  pagination: '',
  paginationButton: '',
  paginationText: '',
  paginationTextItem: '',
});

export default {
  inheritAttrs: false,
  components: {
    BasicButton,
    IconPlus,
    IconMinus,
    IconPrev,
    IconNext,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
  },
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <div :class="[$style['viewer'], customClassNames.wrap]">
    <div :class="[$style['viewer__body'], customClassNames.body]">
      <div
        style="
          background: rgba(255, 0, 0, 0.14);
          flex: 1;
          min-height: 0;
          text-align: center;
        "
      >
        외부 프로그램 영역
      </div>
    </div>
    <div :class="[$style['viewer__bottom'], customClassNames.bottom]">
      <div :class="[$style['viewer__left'], customClassNames.left]">
        <div :class="[$style['viewer__zoom'], customClassNames.zoom]">
          <button
            type="button"
            :class="[
              $style['viewer__zoom-button'],
              customClassNames.zoomButton,
            ]"
          >
            <IconMinus
              :class="[$style['viewer__icon'], customClassNames.icon]"
            />
            <span :class="[$style['viewer__guide'], customClassNames.guide]"
              >축소</span
            >
          </button>
          <div
            :class="[$style['viewer__zoom-text'], customClassNames.zoomText]"
          >
            100%
          </div>
          <button
            type="button"
            :class="[
              $style['viewer__zoom-button'],
              customClassNames.zoomButton,
            ]"
          >
            <IconPlus
              :class="[$style['viewer__icon'], customClassNames.icon]"
            />
            <span :class="[$style['viewer__guide'], customClassNames.guide]"
              >확대</span
            >
          </button>
        </div>
      </div>
      <div :class="[$style['viewer__center'], customClassNames.center]">
        <div
          :class="[$style['viewer__pagination'], customClassNames.pagination]"
        >
          <button
            type="button"
            :class="[
              $style['viewer__pagination-button'],
              customClassNames.paginationButton,
            ]"
            :disabled="true"
          >
            <IconPrev
              :class="[$style['viewer__icon'], customClassNames.icon]"
            />
            <span :class="[$style['viewer__guide'], customClassNames.guide]"
              >이전</span
            >
          </button>
          <div
            :class="[
              $style['viewer__pagination-text'],
              customClassNames.paginationText,
            ]"
          >
            <div
              :class="[
                $style['viewer__pagination-text-item'],
                customClassNames.paginationTextItem,
              ]"
            >
              1
            </div>
            <div
              :class="[
                $style['viewer__pagination-text-item'],
                customClassNames.paginationTextItem,
              ]"
            >
              /
            </div>
            <div
              :class="[
                $style['viewer__pagination-text-item'],
                customClassNames.paginationTextItem,
              ]"
            >
              7
            </div>
          </div>
          <button
            type="button"
            :class="[
              $style['viewer__pagination-button'],
              customClassNames.paginationButton,
            ]"
          >
            <IconNext
              :class="[$style['viewer__icon'], customClassNames.icon]"
            />
            <span :class="[$style['viewer__guide'], customClassNames.guide]"
              >다음</span
            >
          </button>
        </div>
      </div>
      <div :class="[$style['viewer__right'], customClassNames.right]">
        <BasicButton size="small" :auto="true">약정하기</BasicButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/viewer/ViewerUi.scss';
</style>

<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  list: '',
  item: '',
  active: '',
});

export default {
  inheritAttrs: false,
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    steps: {
      Type: Array,
      default: [],
    },
    current: {
      Type: Number,
      default: 0,
    },
    cancel: {
      Type: Boolean,
      default: false,
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
  <div
    :class="[
      $style['progress'],
      {
        [$style['progress--cancel']]: cancel,
      },
      customClassNames.wrap,
    ]"
    role="img"
    :aria-label="`총 ${steps.length}단계 중 ${current + 1}단계, ${
      steps[current]
    }`"
  >
    <ul :class="[$style['progress__list'], customClassNames.list]">
      <li
        v-for="(item, i) in steps"
        :key="item"
        :class="[
          $style['progress__item'],
          customClassNames.item,
          {
            [$style['progress__item--active']]: i === current,
            [customClassNames.active]: i === current,
          },
        ]"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/progress/TextProgress.scss';
</style>

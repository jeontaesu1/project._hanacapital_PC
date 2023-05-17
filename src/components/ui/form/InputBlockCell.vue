<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  cell: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    flexible: {
      Type: Boolean,
      default: false,
    },
    type: {
      Type: String,
      default: null,
    },
    margin: {
      Type: String,
      default: null,
    },
  },
  setup(props) {
    const styleModule = inject('inputBlockStyleModule');

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      styleModule,
      customClassNames,
    };
  },
};
</script>

<template>
  <div
    :class="[
      styleModule['input-block__cell'],
      {
        [styleModule['input-block__cell--flexible']]: flexible,
        [styleModule[`input-block__cell--type-${type}`]]: type,
        [styleModule[`input-block__cell--margin-${margin}`]]: margin,
      },
      customClassNames.cell,
    ]"
  >
    <slot />
  </div>
</template>

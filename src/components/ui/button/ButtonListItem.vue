<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  item: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    flex: {
      // none, flexible
      Type: String,
      default: null,
    },
  },
  setup(props) {
    const styleModule = inject('buttonListStyleModule');

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
  <li
    :class="[
      styleModule['buttons__item'],
      {
        [styleModule['buttons__item--flex-none']]: flex === 'none',
        [styleModule['buttons__item--flexible']]: flex === 'flexible',
      },
      customClassNames.item,
    ]"
  >
    <slot />
  </li>
</template>

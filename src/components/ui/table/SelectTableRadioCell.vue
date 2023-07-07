<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  radio: '',
  radioText: '',
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
    action: {
      Type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const styleModule = inject('selectTableStyleModule');
    const selectTableRow = inject('selectTableRow', {});

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const click = () => {
      selectTableRow.radioClick();
      selectTableRow.select();
    };

    return {
      styleModule,
      selectTableRow,
      customClassNames,
      click,
    };
  },
};
</script>

<template>
  <td>
    <button
      v-bind="$attrs"
      type="button"
      :class="[
        styleModule['select-table__radio'],
        {
          'is-selected': selectTableRow.selected.value,
        },
        customClassNames.radio,
      ]"
      :disabled="selectTableRow.disabled.value"
      @click="
        () => {
          if (action) click();
        }
      "
      :title="selectTableRow.selected.value ? '선택 됨' : null"
    >
      <span
        :class="[
          styleModule['select-table__radio-text'],
          customClassNames.radioText,
        ]"
        >선택</span
      >
    </button>
  </td>
</template>

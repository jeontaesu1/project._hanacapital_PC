<script>
import { computed, inject } from 'vue';

import IconArrow from '@/assets/images/icon/dropdown.svg?component';

const defaultClassNames = () => ({
  button: '',
  text: '',
});

export default {
  components: {
    IconArrow,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    text: {
      Type: String,
      default: '하위 내용',
    },
    openText: {
      Type: String,
      default: '펼치기',
    },
    closeText: {
      Type: String,
      default: '접기',
    },
  },
  setup(props) {
    const styleModule = inject('uiAccordionStyleModule');
    const uiAccordion = inject('uiAccordion', {});
    const uiAccordionItem = inject('uiAccordionItem', {});

    const customClassNames = computed(() => {
      const { classNames } = props;

      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      styleModule,
      customClassNames,
      uiAccordion,
      uiAccordionItem,
    };
  },
};
</script>

<template>
  <button
    type="button"
    :class="[
      styleModule['accordion__opener'],
      {
        [uiAccordion.openedClassName]: uiAccordionItem.opened.value,
      },
      customClassNames.button,
    ]"
    @click="uiAccordionItem.toggle()"
  >
    <IconArrow />
    <span
      :class="[styleModule['accordion__opener-text'], customClassNames.text]"
    >
      하위 내용 {{ uiAccordionItem.opened.value ? '접기' : '펼치기' }}
    </span>
  </button>
</template>

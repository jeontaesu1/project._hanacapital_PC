<script>
import { ref, computed, inject, onMounted, onBeforeUnmount, watch } from 'vue';

const defaultClassNames = () => ({
  button: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    link: {
      Type: String,
      required: true,
    },
  },
  setup(props) {
    const styleModule = inject('uiTabStyleModule', {});
    const uiTab = inject('uiTab', {});

    const button = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isActive = computed(() => {
      return uiTab.activeName && uiTab.activeName.value;
    });

    const open = (isFocus) => {
      if (isFocus) {
        button.value.focus();
      }
    };

    const click = () => {
      if (uiTab.open) {
        uiTab.open(props.link);
      }
    };

    const keydown = (e) => {
      const { keyCode } = e;

      if ([13, 32, 35, 36, 37, 38, 39, 40].indexOf(keyCode) > -1) {
        e.preventDefault();
      }
    };

    const keyup = (e) => {
      const { keyCode } = e;

      switch (keyCode) {
        case 35:
          uiTab.end();
          break;
        case 36:
          uiTab.start();
          break;
        case 37:
        case 38:
          uiTab.prev();
          break;
        case 39:
        case 40:
          uiTab.next();
          break;
        case 13:
        case 32:
          uiTab.open(props.link);
          break;
        default:
          break;
      }
    };

    onMounted(() => {
      if (uiTab && uiTab.buttonsAdd) {
        uiTab.buttonsAdd({
          key: props.link,
          open,
        });
      }
    });

    onBeforeUnmount(() => {
      if (uiTab && uiTab.buttonsRemove) {
        uiTab.buttonsRemove(props.link);
      }
    });

    watch(
      () => props.link,
      (cur, pre) => {
        uiTab.buttonsUpdate(pre, {
          key: cur,
        });
      }
    );

    return {
      styleModule,
      button,
      customClassNames,
      isActive,
      click,
      keydown,
      keyup,
    };
  },
};
</script>

<template>
  <div
    ref="button"
    :class="[
      styleModule['tab__button'],
      {
        'is-tab-opened': isActive === link,
      },
      customClassNames.button,
    ]"
    role="tab"
    :tabindex="isActive === link ? '0' : '-1'"
    :aria-selected="isActive === link ? 'true' : 'false'"
    :aria-controls="`${link}_panel`"
    :id="`${link}_tab`"
    @click="click"
    @keydown="keydown"
    @keyup="keyup"
  >
    <slot />
  </div>
</template>

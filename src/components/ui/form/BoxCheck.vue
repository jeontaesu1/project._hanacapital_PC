<script>
import {
  ref,
  computed,
  useCssModule,
  provide,
  reactive,
  watch,
  onBeforeMount,
} from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  input: '',
  block: '',
  left: '',
  center: '',
  right: '',
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
    type: {
      Type: String,
      default: 'radio',
    },
    id: {
      Type: String,
      required: true,
    },
    align: {
      Type: String,
      default: null,
    },
    contents: {
      Type: Boolean,
      default: false,
    },
    minSide: {
      Type: Boolean,
      default: false,
    },
    defaultChecked: {
      Type: Boolean,
      default: false,
    },
    modelValue: {
      Type: Boolean,
    },
  },
  setup(props, { emit, slots }) {
    const state = reactive({
      type: { value: null },
      id: { value: null },
      checked: false,
    });

    const input = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isLeft = computed(() => {
      return Boolean(slots.left);
    });

    const isRight = computed(() => {
      return Boolean(slots.right);
    });

    const getInputElement = () => {
      return input.value;
    };

    const onChange = (e) => {
      const { checked } = e.target;

      state.checked = checked;
      emit('update:modelValue', checked);
    };

    watch(
      () => props.type,
      (cur) => {
        state.type.value = cur;
      }
    );

    watch(
      () => props.id,
      (cur) => {
        state.id.value = cur;
      }
    );

    watch(
      () => props.modelValue,
      (cur) => {
        state.checked = cur;
      }
    );

    onBeforeMount(() => {
      state.type.value = props.type;
      state.id.value = props.id;

      const { modelValue, defaultChecked } = props;
      state.checked =
        typeof modelValue === 'boolean' ? modelValue : defaultChecked;
    });

    provide('boxCheckstyleModule', useCssModule());
    provide('boxCheckType', state.type);
    provide('boxCheckId', state.id);

    return {
      state,
      input,
      customClassNames,
      getInputElement,
      isLeft,
      isRight,
      onChange,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['box-check'],
      {
        [$style['box-check--checkbox']]: type === 'checkbox',
        [$style[`box-check--align-${align}`]]: align,
        [$style['box-check--contents']]: contents,
        [$style['box-check--min-side']]: minSide,
      },
      customClassNames.wrap,
    ]"
  >
    <input
      ref="input"
      v-bind="$attrs"
      :type="type"
      :class="[$style['box-check__input'], customClassNames.input]"
      :id="id"
      :checked="state.checked"
      @change="onChange"
    />
    <div :class="[$style['box-check__block'], customClassNames.block]">
      <div
        v-if="isLeft"
        :class="[$style['box-check__left'], customClassNames.left]"
      >
        <slot name="left" />
      </div>
      <div :class="[$style['box-check__center'], customClassNames.center]">
        <slot />
      </div>
      <div
        v-if="isRight"
        :class="[$style['box-check__right'], customClassNames.right]"
      >
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/BoxCheck.scss';
</style>

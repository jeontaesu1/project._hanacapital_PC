<script>
import { ref, reactive, computed, onMounted, h, useCssModule } from 'vue';
import VueSelect from 'vue-select';
import { createPopper } from '@popperjs/core';

import IconDropdown from '@/assets/images/icon/dropdown.svg?component';

const defaultClassNames = () => ({
  wrap: '',
  list: '',
});

export default {
  components: {
    VueSelect,
  },
  inheritAttrs: false,
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    filterable: {
      Type: Boolean,
      default: false,
    },
    searchable: {
      Type: Boolean,
      default: false,
    },
    clearable: {
      Type: Boolean,
      default: false,
    },
    reduce: {
      type: Function,
      default: (option) => option.value,
    },
    onSelected: {
      type: Function,
      default: () => {},
    },
    onUpdate: {
      type: Function,
      default: () => {},
    },
    defaultValue: {
      Type: String,
      default: null,
    },
    modelValue: {
      Type: String,
    },
    error: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const $style = useCssModule();

    const state = reactive({
      placement: 'bottom',
      value: '',
    });

    const select = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const vmVal = computed({
      get() {
        onUpdate(props.modelValue);
        return props.modelValue;
      },
      set(value) {
        emit('update:modelValue', value);
      },
    });

    const withPopper = (dropdownList, component, { width }) => {
      dropdownList.style.width = width;

      const popper = createPopper(component.$refs.toggle, dropdownList, {
        placement: state.placement,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, -1],
            },
          },
          {
            name: 'toggleClass',
            enabled: true,
            phase: 'write',
            fn({ state }) {
              const { classNames } = props;
              const customClassNames = Object.assign(
                defaultClassNames(),
                classNames
              );

              dropdownList.classList.add($style['select__list']);

              if (customClassNames.list.length) {
                dropdownList.classList.add(customClassNames.list);
              }

              dropdownList.classList.toggle(
                'drop-up',
                state.placement === 'top'
              );

              component.$el.classList.toggle(
                'drop-up',
                state.placement === 'top'
              );
            },
          },
        ],
      });

      return () => popper.destroy();
    };

    const optionSelected = (selectedOption) => {
      state.value = selectedOption.value;
      props.onSelected(selectedOption);
    };

    const onUpdate = (val) => {
      state.value = val;
      props.onUpdate(val);
    };

    const OpenIndicator = computed(() => {
      return {
        render: () => h(IconDropdown),
      };
    });

    onMounted(() => {
      const { modelValue, defaultValue } = props;

      if (!modelValue && defaultValue) {
        select.value.setInternalValueFromOptions(defaultValue);
      }

      if (select.value.selectedValue[0]) {
        state.value = select.value.selectedValue[0].value;
      }
    });

    return {
      state,
      select,
      customClassNames,
      vmVal,
      withPopper,
      optionSelected,
      OpenIndicator,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['select'],
      {
        [$style['select--error']]: error,
      },
      customClassNames.wrap,
    ]"
  >
    <input type="hidden" :value="state.value" />
    <VueSelect
      ref="select"
      v-bind="$attrs"
      :filterable="filterable"
      :searchable="searchable"
      :clearable="clearable"
      :reduce="reduce"
      :appendToBody="true"
      :calculatePosition="withPopper"
      :components="{ OpenIndicator }"
      @option:selected="optionSelected"
      v-model="vmVal"
    ></VueSelect>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/SimpleSelect.scss';
</style>

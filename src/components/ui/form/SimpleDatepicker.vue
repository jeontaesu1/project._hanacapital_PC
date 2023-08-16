<script>
import {
  ref,
  reactive,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
  inject,
} from 'vue';

import IconCalendar from '@/assets/images/icon/calendar.svg?component';

const defaultClassNames = () => ({
  wrap: '',
  dummy: '',
  text: '',
  icon: '',
});

export default {
  inheritAttrs: false,
  components: {
    IconCalendar,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    title: {
      Type: String,
      default: null,
    },
    id: {
      Type: String,
      default: null,
    },
    buttonId: {
      Type: String,
      default: null,
    },
    align: {
      Type: String,
      default: null,
    },
    disabled: {
      Type: Boolean,
      default: false,
    },
    defaultValue: {
      Type: String,
      default: null,
    },
    min: {
      Type: String,
      default: null,
    },
    max: {
      Type: String,
      default: null,
    },
    onInit: {
      Type: Function,
      default() {
        return () => {};
      },
    },
    onChange: {
      Type: Function,
      default() {
        return () => {};
      },
    },
    pickerBlur: {
      Type: Function,
      default() {
        return () => {};
      },
    },
    pickerChange: {
      Type: Function,
      default() {
        return () => {};
      },
    },
    pickerFocus: {
      Type: Function,
      default() {
        return () => {};
      },
    },
    pickerOpen: {
      Type: Function,
      default() {
        return () => {};
      },
    },
    pickerClose: {
      Type: Function,
      default() {
        return () => {};
      },
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
    const DATE_FORMAT = /^(\d{4})\.(\d{2})\.(\d{2})$/;
    const timer = [];

    const state = reactive({
      val: '',
      element: null,
      date: null,
      isFocus: false,
    });

    const popupLayout = inject('popupLayout', {});

    const input = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const setButtonId = (id = '') => {
      const { element } = state;
      const button = element.getElementsByClassName('duet-date__toggle')[0];

      button.setAttribute('id', id);
    };

    const setSelectDisabled = (is = false) => {
      const { element } = state;
      const select = element.querySelectorAll('.duet-date__select select');

      [...select].forEach((item) => {
        if (is) {
          item.disabled = true;
          item.setAttribute('aria-hidden', 'true');
          item.setAttribute('inert', '');
        } else {
          item.disabled = false;
          item.removeAttribute('aria-hidden');
          item.removeAttribute('inert');
        }
      });
    };

    const animated = (callback = () => {}) => {
      const html = document.getElementsByTagName('html')[0];

      html.classList.add('is-date-picker-animated');

      if (popupLayout.bodyScroll) {
        popupLayout.bodyScroll.value.SimpleBar.recalculate();
      }

      clearTimeout(timer[0]);

      timer[0] = setTimeout(function () {
        clearTimeout(timer[0]);
        html.classList.remove('is-date-picker-animated');

        if (popupLayout.bodyScroll) {
          popupLayout.bodyScroll.value.SimpleBar.recalculate();
        }

        callback();
      }, 300);
    };

    const getElement = () => {
      return state.element;
    };

    const getValue = () => {
      return state.val;
    };

    const getDate = () => {
      return state.date;
    };

    const setValue = (val) => {
      if (val === state.val) return;

      const { element } = state;
      const eChange = new Event('change');

      if (!val || !val.length) {
        element.value = '';
        state.val = '';
        state.date = null;

        emit('update:modelValue', '');

        nextTick(() => {
          element.dispatchEvent(eChange);
        });

        return;
      }

      const value = val.replace(/\./g, '-');
      const matches = val.match(DATE_FORMAT);

      element.value = value;

      state.val = val;

      if (matches) {
        state.date = new Date(
          Number(matches[1]),
          Number(matches[2]) - 1,
          Number(matches[3])
        );
      } else {
        state.date = null;
      }

      emit('update:modelValue', val);

      nextTick(() => {
        element.dispatchEvent(eChange);
      });
    };

    const setMin = (val) => {
      const { element } = state;

      if (!val || !val.length) {
        element.min = '';

        return;
      }

      const value = val.replace(/\./g, '-');

      element.min = value;
    };

    const setMax = (val) => {
      const { element } = state;

      if (!val || !val.length) {
        element.max = '';

        return;
      }

      const value = val.replace(/\./g, '-');

      element.max = value;
    };

    const duetBlur = (e) => {
      const { pickerBlur } = props;

      pickerBlur(e);
    };

    const duetChange = (e) => {
      const { element } = state;
      const { valueAsDate, value } = e.detail;
      const { pickerChange } = props;
      const eChange = new Event('change');
      const val = value.replace(/-/g, '.');

      state.val = val;
      state.date = valueAsDate;

      emit('update:modelValue', val);

      nextTick(() => {
        element.dispatchEvent(eChange);

        pickerChange(e);
      });
    };

    const duetFocus = (e) => {
      const { pickerFocus } = props;

      pickerFocus(e);
    };

    const duetOpen = (e) => {
      const { pickerOpen } = props;
      const html = document.getElementsByTagName('html')[0];

      html.classList.add('is-date-picker-opened');

      setSelectDisabled(false);
      animated();

      pickerOpen(e);
    };

    const duetClose = (e) => {
      const { pickerClose } = props;
      const html = document.getElementsByTagName('html')[0];

      html.classList.remove('is-date-picker-opened');

      setSelectDisabled(true);
      animated();

      pickerClose(e);
    };

    const onfocusin = () => {
      clearTimeout(timer[1]);
      state.isFocus = true;
    };

    const onfocusout = () => {
      clearTimeout(timer[1]);

      timer[1] = setTimeout(() => {
        state.isFocus = false;
      }, 50);
    };

    watch(
      () => props.buttonId,
      (cur) => {
        setButtonId(cur);
      }
    );

    watch(
      () => props.modelValue,
      (cur) => {
        setValue(cur);
      }
    );

    watch(
      () => props.min,
      (cur) => {
        setMin(cur);
      }
    );

    watch(
      () => props.max,
      (cur) => {
        setMax(cur);
      }
    );

    onMounted(() => {
      const { buttonId, onInit, defaultValue, modelValue, min, max } = props;
      const element =
        input.value && input.value.querySelector('duet-date-picker');

      if (element) {
        state.element = element;

        nextTick(() => {
          setTimeout(() => {
            element.firstDayOfWeek = 0;
            element.localization = {
              buttonLabel: '날짜 선택',
              placeholder: '연도.월.일',
              selectedDateMessage: '선택 된 날짜',
              prevMonthLabel: '이전 달',
              nextMonthLabel: '다음 달',
              monthSelectLabel: '월',
              yearSelectLabel: '연도',
              closeLabel: '닫기',
              calendarHeading: '날짜 선택',
              dayNames: [
                '일 요일',
                '월 요일',
                '화 요일',
                '수 요일',
                '목 요일',
                '금 요일',
                '토 요일',
              ],
              monthNames: [
                '1월',
                '2월',
                '3월',
                '4월',
                '5월',
                '6월',
                '7월',
                '8월',
                '9월',
                '10월',
                '11월',
                '12월',
              ],
              monthNamesShort: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
              ],
              locale: 'ko-KR',
            };

            setButtonId(buttonId);
            setSelectDisabled(true);

            setMin(min);
            setMax(max);

            if (modelValue || defaultValue) {
              setValue(modelValue || defaultValue);
            }

            element.addEventListener('duetBlur', duetBlur);
            element.addEventListener('duetChange', duetChange);
            element.addEventListener('duetFocus', duetFocus);
            element.addEventListener('duetOpen', duetOpen);
            element.addEventListener('duetClose', duetClose);

            onInit(element);
          }, 0);
        });
      }
    });

    onBeforeUnmount(() => {
      const { element } = state;

      if (element) {
        element.removeEventListener('duetBlur', duetBlur);
        element.removeEventListener('duetChange', duetChange);
        element.removeEventListener('duetFocus', duetFocus);
        element.removeEventListener('duetOpen', duetOpen);
        element.removeEventListener('duetClose', duetClose);
      }
    });

    return {
      state,
      input,
      customClassNames,
      getElement,
      getValue,
      getDate,
      setValue,
      setMin,
      setMax,
      onfocusin,
      onfocusout,
    };
  },
};
</script>

<template>
  <div
    ref="input"
    :class="[
      $style['input'],
      {
        [$style[`input--align-${align}`]]: align,
        [$style['input--disabled']]: disabled,
        [$style['input--focus']]: state.isFocus,
        [$style['input--error']]: error,
      },
      customClassNames.wrap,
    ]"
    @focusin="onfocusin"
    @focusout="onfocusout"
  >
    <duet-date-picker
      v-bind="$attrs"
      :title="title"
      :identifier="id"
      :disabled="disabled"
      @change="onChange"
    ></duet-date-picker>
    <div
      :class="[$style['input__dummy'], customClassNames.dummy]"
      aria-hidden="true"
    >
      <div :class="[$style['input__text'], customClassNames.text]">
        {{ state.val }}
      </div>
      <div :class="[$style['input__icon'], customClassNames.icon]">
        <IconCalendar />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/SimpleDatepicker.scss';
</style>

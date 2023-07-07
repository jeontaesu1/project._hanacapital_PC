<script>
import {
  provide,
  inject,
  reactive,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  nextTick,
  ref,
  watch,
} from 'vue';

const call = (obj, callName, row) => {
  if (obj && obj.callback && obj.callback[callName]) {
    obj.callback[callName](row);
  }
};

export default {
  props: {
    initialActive: {
      Type: Boolean,
      default: false,
    },
    onSelected: {
      Type: Function,
      default() {
        return () => {};
      },
    },
    onUnSelected: {
      Type: Function,
      default() {
        return () => {};
      },
    },
    action: {
      Type: Boolean,
      default: true,
    },
    actionType: {
      Type: String,
      default: 'toggle',
    },
    disabled: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const selectTable = inject('selectTable', {});

    const state = reactive({
      key: null,
      selected: {
        value: false,
      },
      disabled: {
        value: false,
      },
      radioClick: false,
    });

    const row = ref(null);

    const select = () => {
      if (state.selected.value) return;

      if (selectTable.once.value) {
        selectTable.allUnSelect();
      }

      state.selected.value = true;

      nextTick(() => {
        props.onSelected(row);
        call(selectTable, 'onSelected', row);
      });
    };

    const unSelect = () => {
      if (!state.selected.value) return;

      state.selected.value = false;

      nextTick(() => {
        props.onUnSelected(row);
        call(selectTable, 'onUnSelected', row);
      });
    };

    const toggle = () => {
      if (state.selected.value) {
        unSelect();
      } else {
        select();
      }
    };

    const click = () => {
      const { disabled, actionType } = props;
      const { radioClick } = state;

      if (!disabled && !radioClick) {
        if (actionType === 'toggle') {
          toggle();
        } else if (actionType === 'select') {
          select();
        }
      }

      state.radioClick = false;
    };

    const radioClick = () => {
      state.radioClick = true;
    };

    onBeforeMount(() => {
      state.disabled.value = props.disabled;
    });

    onMounted(() => {
      if (selectTable && selectTable.itemsAdd) {
        state.key = selectTable.itemsAdd({
          select,
          unSelect,
          toggle,
        });
      }
      if (props.initialActive) {
        select();
      }
    });

    onBeforeUnmount(() => {
      if (selectTable && selectTable.itemsRemove) {
        selectTable.itemsRemove(state.key);
      }
    });

    watch(
      () => props.disabled,
      (cur) => {
        state.disabled.value = cur;
      }
    );

    provide('selectTableRow', {
      disabled: state.disabled,
      selected: state.selected,
      select,
      unSelect,
      toggle,
      radioClick,
    });

    return {
      state,
      row,
      select,
      unSelect,
      toggle,
      click,
    };
  },
};
</script>

<template>
  <tr
    ref="row"
    :tabindex="disabled ? '-1' : '0'"
    :class="[
      {
        'is-selected': state.selected.value,
        'is-disabled': disabled,
      },
    ]"
    @click="
      () => {
        if (action) click();
      }
    "
    :title="state.selected.value ? '선택 됨' : null"
  >
    <slot
      :select="select"
      :unSelect="unSelect"
      :toggle="toggle"
      :selected="state.selected.value"
    />
  </tr>
</template>

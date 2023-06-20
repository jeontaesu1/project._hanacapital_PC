<script>
import {
  inject,
  reactive,
  onMounted,
  onBeforeUnmount,
  nextTick,
  ref,
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
    disabled: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const selectTable = inject('selectTable', {});

    const state = reactive({
      selected: false,
      key: null,
    });

    const row = ref(null);

    const select = () => {
      if (state.selected) return;

      if (selectTable.once.value) {
        selectTable.allUnSelect();
      }

      state.selected = true;

      nextTick(() => {
        props.onSelected(row);
        call(selectTable, 'onSelected', row);
      });
    };

    const unSelect = () => {
      if (!state.selected) return;

      state.selected = false;

      nextTick(() => {
        props.onUnSelected(row);
        call(selectTable, 'onUnSelected', row);
      });
    };

    const toggle = () => {
      if (state.selected) {
        unSelect();
      } else {
        select();
      }
    };

    const click = () => {
      const { disabled } = props;

      if (disabled) return;

      toggle();
    };

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
        'is-selected': state.selected,
        'is-disabled': disabled,
      },
    ]"
    @click="
      () => {
        if (action) click();
      }
    "
  >
    <slot
      :select="select"
      :unSelect="unSelect"
      :toggle="toggle"
      :selected="state.selected.value"
    />
  </tr>
</template>

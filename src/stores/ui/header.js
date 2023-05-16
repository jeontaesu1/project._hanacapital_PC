import { defineStore } from 'pinia';

export const useUiHeaderStore = defineStore('uiHeader', {
  state: () => ({
    title: null,
    leftButtons: null,
    rightButtons: null,
    height: 0,
  }),
  actions: {
    setTitle(title = () => null) {
      this.title = title();
    },
    setLeftButtons(buttons = () => null) {
      this.leftButtons = buttons();
    },
    setRightButtons(buttons = () => null) {
      this.rightButtons = buttons();
    },
    setHeight(height = 0) {
      this.height = height;
    },
  },
});

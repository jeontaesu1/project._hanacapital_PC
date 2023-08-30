import { defineStore } from 'pinia';

export const useUiLoadingStore = defineStore('uiLoading', {
  state: () => ({
    isShow: false,
    element: null,
  }),
  actions: {
    show() {
      if (!this.isShow) {
        this.isShow = true;
      }
    },
    hide() {
      if (this.isShow) {
        this.isShow = false;
      }
    },
    setElement(element = null) {
      this.element = element;
    },
  },
});

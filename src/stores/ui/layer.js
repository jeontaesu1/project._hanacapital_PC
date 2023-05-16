import { defineStore } from 'pinia';

export const useUiLayerStore = defineStore('uiLayer', {
  state: () => ({
    zIndex: 10000,
  }),
  actions: {
    updateZIndex() {
      this.zIndex += 1;
    },
  },
});

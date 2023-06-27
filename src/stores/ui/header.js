import { defineStore } from 'pinia';

export const useUiHeaderStore = defineStore('uiHeader', {
  state: () => ({
    height: 0,
    active: null,
    locationHeight: 0,
  }),
  actions: {
    setHeight(height = 0) {
      this.height = height;
    },
    setActive(active = () => null) {
      this.active = active();
    },
    setLocationHeight(height = 0) {
      this.locationHeight = height;
    },
  },
});

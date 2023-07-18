import { defineStore } from 'pinia';

export const useUiHeaderStore = defineStore('uiHeader', {
  state: () => ({
    height: 0,
    active: null,
    depthActive: null,
    locationHeight: 0,
  }),
  actions: {
    setHeight(height = 0) {
      this.height = height;
    },
    setActive(active = () => null) {
      this.active = active();
    },
    setDepthActive(active = () => null) {
      this.depthActive = active();
    },
    setLocationHeight(height = 0) {
      this.locationHeight = height;
    },
  },
});

import { defineStore } from 'pinia';

export const useUiScrollBlockStore = defineStore('uiScrollBlock', {
  state: () => ({
    isBlocking: false,
    scrollTop: 0,
    scrollLeft: 0,
    classNames: {
      block: 'is-scroll-blocking',
    },
  }),

  actions: {
    block() {
      const html = document.getElementsByTagName('html')[0];
      const wrap = document.getElementById('app');

      if (!this.isBlocking) {
        this.scrollTop = html.scrollTop;
        this.scrollLeft = html.scrollLeft;

        html.classList.add(this.classNames.block);

        html.scrollTop = 0;
        wrap.scrollTop = this.scrollTop;
        html.scrollLeft = 0;
        wrap.scrollLeft = this.scrollLeft;

        this.isBlocking = true;
      }
    },

    clear() {
      const html = document.getElementsByTagName('html')[0];
      const wrap = document.getElementById('app');
      const { scrollTop, scrollLeft } = this;

      if (this.isBlocking) {
        html.classList.remove(this.classNames.block);

        wrap.scrollTop = 0;
        wrap.scrollLeft = 0;

        window.scrollTo(scrollLeft, scrollTop);

        this.isBlocking = false;
      }
    },

    updateScrollLeft() {
      const wrap = document.getElementById('app');

      if (this.isBlocking) {
        this.scrollLeft = wrap.scrollLeft;
      }
    },
  },
});

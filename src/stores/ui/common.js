import { defineStore } from 'pinia';

export const useUiCommonStore = defineStore('uiCommon', {
  state: () => ({
    rootClassName: null,
    scrollbarsWidth: 0,
  }),

  actions: {
    setRootClassName(className = null) {
      const html = document.getElementsByTagName('html')[0];
      const { rootClassName } = this;

      if (html) {
        if (typeof rootClassName === 'string') {
          html.classList.remove(rootClassName);
        }
        if (typeof className === 'string') {
          html.classList.add(className);
        }
      }

      this.rootClassName = className;
    },

    setScrollbarsWidth() {
      const html = document.getElementsByTagName('html')[0];
      const head = document.getElementsByTagName('head')[0];
      const wrap = document.getElementById('app');
      const oldStyle = document.getElementById('uiScrollbarsWidthStyle');
      const style = document.createElement('style');

      if (html && wrap) {
        html.style.overflow = 'hidden';

        const beforeW = wrap.offsetWidth;

        html.style.overflow = 'scroll';

        const afterW = wrap.offsetWidth;

        html.style.overflow = '';

        this.scrollbarsWidth = beforeW - afterW;
      }

      if (head) {
        style.appendChild(
          document.createTextNode(`
          html.is-scroll-blocking #app {
            margin-right: ${this.scrollbarsWidth}px;
          }
        `)
        );
        style.id = 'uiScrollbarsWidthStyle';

        if (oldStyle) {
          oldStyle.replaceWith(style);
        } else {
          head.appendChild(style);
        }
      }
    },
  },
});

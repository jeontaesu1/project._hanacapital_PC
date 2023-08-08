<script>
import { computed } from 'vue';

const BASE_URL = import.meta.env.BASE_URL;

const defaultClassNames = () => ({
  wrap: '',
  img: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    size: {
      Type: String,
      default: null,
    },
    code: {
      Type: String,
      default: null,
    },
    src: {
      Type: String,
      default: null,
    },
    name: {
      Type: String,
      default: null,
    },
  },
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const imgSrc = computed(() => {
      const { code, src = '' } = props;

      if (code) {
        return `${BASE_URL}images/car-emblem/${code}.svg`;
      } else if (typeof src === 'string' && src.length) {
        if (src.match(/^\//)) {
          return BASE_URL + src.replace(/^\//, '');
        } else {
          return src;
        }
      } else {
        return '';
      }
    });

    return {
      customClassNames,
      imgSrc,
    };
  },
};
</script>

<template>
  <span
    :class="[
      $style['car-emblem'],
      {
        [$style[`car-emblem--size-${size}`]]: size,
      },
      customClassNames.wrap,
    ]"
  >
    <img
      v-if="imgSrc.length"
      :src="imgSrc"
      :alt="name"
      :class="[$style['car-emblem__img'], customClassNames.img]"
      @error="
        (e) => {
          e.target.parentNode.classList.add('is-error');
        }
      "
    />
  </span>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/imageData/CarEmblem.scss';
</style>

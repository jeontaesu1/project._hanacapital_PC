<script>
// Main_P01_l001
import { ref, reactive, onMounted } from 'vue';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    UiLayer,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    TextButton,
  },
  setup() {
    const state = reactive({
      paginationEl: null,
    });

    const layer = ref(null);
    const pagination = ref(null);

    onMounted(() => {
      state.paginationEl = pagination.value;
    });

    return {
      state,
      layer,
      pagination,
      modules: [Pagination, A11y],
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <ModalPopup :classNames="{ bodyInner: $style['body-inner'] }">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </ModalPopupHead>
      </template>

      <div :class="$style['banner']">
        <Swiper
          v-if="state.paginationEl"
          :modules="modules"
          :pagination="{
            el: state.paginationEl,
            clickable: true,
          }"
          :autoHeight="true"
        >
          <!-- Case : 링크 기능 없을 때 -->
          <SwiperSlide>
            <div :class="$style['banner__block']">
              <img
                src="@/assets/images/_dummy/box-detail-3.png"
                :alt="'배너 설명 넣어주세요.'"
                @error="
                  (e) => {
                    e.target.parentNode.classList.add('is-error');
                  }
                "
              />
            </div>
          </SwiperSlide>
          <!-- // Case : 링크 기능 없을 때 -->

          <!-- Case : 링크 기능 있을 때 -->
          <SwiperSlide>
            <a href="" :class="$style['banner__block']">
              <img
                src="@/assets/images/_dummy/box-detail-3.png"
                :alt="'배너 설명 넣어주세요.'"
                @error="
                  (e) => {
                    e.target.parentNode.classList.add('is-error');
                  }
                "
              />
            </a>
          </SwiperSlide>
          <!-- // Case : 링크 기능 있을 때 -->

          <SwiperSlide>
            <div :class="$style['banner__block']">
              <img
                src="@/assets/images/_dummy/box-detail-3.png"
                :alt="'배너 설명 넣어주세요.'"
                @error="
                  (e) => {
                    e.target.parentNode.classList.add('is-error');
                  }
                "
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div :class="$style['banner__block']">
              <img
                src="@/assets/images/_dummy/box-detail-3.png"
                :alt="'배너 설명 넣어주세요.'"
                @error="
                  (e) => {
                    e.target.parentNode.classList.add('is-error');
                  }
                "
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <template v-slot:outerBottom>
        <div class="flex-box">
          <div class="flex-box__cell flex-1">
            <div ref="pagination" :class="$style['banner-pagination']"></div>
          </div>
          <div class="flex-box__cell flex-box__cell--regular">
            <TextButton
              textSize="regular"
              :underline="true"
              :block="true"
              :classNames="{ wrap: 'color-white' }"
            >
              오늘 하루 보지 않기
            </TextButton>
          </div>
        </div>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/Main_P01_l001.scss';
</style>

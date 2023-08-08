<script>
// My_P06_l002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    NoticeText,
  },
  setup() {
    const layer = ref(null);

    return {
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <ModalPopup>
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>온라인약정 이용가이드</PopupTitle>
        </ModalPopupHead>
      </template>

      <div>
        <NoticeText>
          온라인약정 이용가이드는 오토론 상품 기준으로 작성되었으며, 각 상품에
          따라서 온라인약정 진행 순서가 다를 수 있습니다.
        </NoticeText>

        <div :class="[$style['contents-list'], 'row-margin-container-medium']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--senary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">1</div>
                <div :class="$style['contents-list__title']">
                  상품 약관 확인
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  계약체결을 하시기 전에 반드시 상품 약관을 확인해 주세요.
                </p>
              </div>
              <div class="row-margin-item">
                <div :class="$style['image-view']">
                  <img
                    src="@/assets/images/contents/img-online-guide-1.png"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">2</div>
                <div :class="$style['contents-list__title']">
                  고객 정보 확인
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  고객 정보를 확인해 주세요.
                </p>
              </div>
              <div class="row-margin-item">
                <div :class="$style['image-view']">
                  <img
                    src="@/assets/images/contents/img-online-guide-2.png"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">3</div>
                <div :class="$style['contents-list__title']">
                  상품조건 필수 선택
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  차량 정보 및 상품 조건을 확인해 주세요.
                </p>
              </div>
              <div class="row-margin-item">
                <div :class="$style['image-view']">
                  <img
                    src="@/assets/images/contents/img-online-guide-3.png"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">4</div>
                <div :class="$style['contents-list__title']">
                  필수 이용 약관 동의
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  약관을 확인 및 동의해 주세요.
                </p>
              </div>
              <div class="row-margin-item">
                <div :class="$style['image-view']">
                  <img
                    src="@/assets/images/contents/img-online-guide-4.png"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">5</div>
                <div :class="$style['contents-list__title']">
                  출금이체 신청서 확인 및 약관 동의
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  자동이체 정보 확인 및 약관을 동의해 주세요.
                </p>
              </div>
              <div class="row-margin-item">
                <div :class="$style['image-view']">
                  <img
                    src="@/assets/images/contents/img-online-guide-5.png"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">6</div>
                <div :class="$style['contents-list__title']">약정하기</div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  화면 우측 하단의 [약정하기] 버튼을 클릭해 주세요.
                </p>
              </div>
              <div class="row-margin-item">
                <div :class="$style['image-view']">
                  <img
                    src="@/assets/images/contents/img-online-guide-6.png"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">7</div>
                <div :class="$style['contents-list__title']">
                  공동인증서 인증
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  공동인증서 인증을 진행해 주세요.
                </p>
              </div>
              <div class="row-margin-item">
                <div :class="$style['image-view']">
                  <img
                    src="@/assets/images/contents/img-online-guide-7.png"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">8</div>
                <div :class="$style['contents-list__title']">
                  온라인약정 완료
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  추가로 약정할 계약이 있으면 약정목록 버튼을, 종료하시려면 확인
                  버튼을 클릭해 주세요.
                </p>
              </div>
              <div class="row-margin-item">
                <div :class="$style['image-view']">
                  <img
                    src="@/assets/images/contents/img-online-guide-8.png"
                    alt=""
                  />
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular" @click="layerSlotProps.close()">
              확인
            </BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/additionalService/My_P06_l002.scss';
</style>

<script>
// Common_P00_l003
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import ContentsButton from '@/components/ui/button/ContentsButton.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicButton,
    InputBlock,
    InputBlockCell,
    BasicInput,
    SearchButton,
    BasicHr,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    FormList,
    FormListItem,
    ContentsButton,
  },
  setup() {
    const state = reactive({
      selected: false,
      address: '인천 서구 청라동',
    });

    const layer = ref(null);

    const select = (val) => {
      state.selected = val;
    };

    return {
      state,
      layer,
      select,
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
          <PopupTitle>주소검색</PopupTitle>
        </ModalPopupHead>
      </template>

      <section>
        <h3 class="text-body-1 row-margin-item-group">통합검색</h3>

        <InputBlock>
          <InputBlockCell :flexible="true">
            <BasicInput
              type="search"
              title="주소 검색어"
              placeholder="주소 검색"
            />
          </InputBlockCell>
          <InputBlockCell type="search">
            <SearchButton />
          </InputBlockCell>
        </InputBlock>

        <!-- Case : 검색 전 노출 -->
        <section
          :class="[$style['notice-section'], 'row-margin-contents-small']"
        >
          <h3 :class="$style['notice-section__title']">검색예시</h3>
          <ul :class="$style['basic-list']">
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                도로명 + 건물번호 : 남대문로 9길 24
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                건물명 : 하나캐피탈
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                동/읍/명/리+번지 : 다동 140
              </div>
            </li>
          </ul>
        </section>
        <!-- // Case : 검색 전 노출 -->
      </section>

      <!-- Case : 검색 후 노출 -->
      <BasicHr
        theme="secondary"
        type="popup"
        className="row-margin-container-medium"
      />

      <div v-if="!state.selected" class="contents-wrap">
        <div class="row-margin-container">
          <p class="text-body-3 color-gray">
            <strong class="font-weight-medium color-green">999</strong> 건
          </p>
          <BasicHr theme="quaternary" className="row-margin-item-medium" />
        </div>

        <!-- Case : 결과 없을 때 -->
        <div :class="$style['empty']">
          <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
        </div>
        <!-- // Case : 결과 없을 때 -->

        <!-- Case : 결과 있을 때 -->
        <ul :class="$style['address-list']">
          <li v-for="i in 3" :key="i" :class="$style['address-list__item']">
            <div :class="$style['address-list__block']">
              <div :class="$style['address-list__title']">16997</div>
              <KeyValue align="left" margin="small" size="regular">
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>도로명</KeyValueTitle>
                  <KeyValueText
                    >인천 서구 에코로 181 하나금융그룹데이터센터</KeyValueText
                  >
                </KeyValueItem>

                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>지번</KeyValueTitle>
                  <KeyValueText>인천 서구 청라동 7-5</KeyValueText>
                </KeyValueItem>
              </KeyValue>
              <button
                type="button"
                :class="$style['address-list__button']"
                @click="select(true)"
              >
                <span class="for-a11y">선택</span>
              </button>
            </div>
          </li>
        </ul>
        <!-- // Case : 결과 있을 때 -->
      </div>
      <!-- // Case : 검색 후 노출 -->

      <!-- 상세주소 입력 -->
      <div v-if="state.selected" class="contents-wrap">
        <section>
          <h3 class="text-body-1 row-margin-item-group">상세 주소 입력</h3>

          <FormList>
            <FormListItem
              titleText="기본주소"
              :forceFocus="true"
              :disabled="true"
            >
              <InputBlock>
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="기본주소"
                    v-model="state.address"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
            </FormListItem>

            <FormListItem
              titleText="나머지 주소"
              target="#layerSearchAddressDetail"
            >
              <InputBlock>
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="나머지 주소"
                    id="layerSearchAddressDetail"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton size="small">확인</BasicButton>
                </template>
              </InputBlock>
            </FormListItem>
          </FormList>
        </section>

        <!-- Case : 상세주소 입력 후 노출 -->
        <section class="row-margin-container-medium">
          <h3 class="text-body-1 row-margin-item-group">해당 주소 선택</h3>

          <ul :class="[$style['address-list'], $style['address-list--select']]">
            <li :class="$style['address-list__item']">
              <ContentsButton>
                <div :class="$style['address-list__block']">
                  <div :class="$style['address-list__title']">16997</div>
                  <KeyValue align="left" margin="small" size="medium">
                    <KeyValueItem
                      :classNames="{ item: 'text-body-3 color-black' }"
                    >
                      <KeyValueTitle>도로명</KeyValueTitle>
                      <KeyValueText>인천 서구 에코로 181</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{ item: 'text-body-3 color-black' }"
                    >
                      <KeyValueTitle>입력 주소</KeyValueTitle>
                      <KeyValueText>하나금융그룹 로비</KeyValueText>
                    </KeyValueItem>
                  </KeyValue>
                </div>
              </ContentsButton>
            </li>
            <li :class="$style['address-list__item']">
              <ContentsButton>
                <div :class="$style['address-list__block']">
                  <div :class="$style['address-list__title']">16997</div>
                  <KeyValue align="left" margin="small" size="medium">
                    <KeyValueItem
                      :classNames="{ item: 'text-body-3 color-black' }"
                    >
                      <KeyValueTitle>지번</KeyValueTitle>
                      <KeyValueText>인천 서구 청라동 7-5</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{ item: 'text-body-3 color-black' }"
                    >
                      <KeyValueTitle>입력 주소</KeyValueTitle>
                      <KeyValueText>하나금융그룹 로비</KeyValueText>
                    </KeyValueItem>
                  </KeyValue>
                </div>
              </ContentsButton>
            </li>
          </ul>
        </section>
        <!-- // Case : 상세주소 입력 후 노출 -->
      </div>
      <!-- // 상세주소 입력 -->
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/searchAddress/Common_P00_l003.scss';
</style>

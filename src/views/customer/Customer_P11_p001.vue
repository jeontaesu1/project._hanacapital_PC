<script>
//Customer_P11_p001
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import Customer_P11_l001 from '@/views/customer/Customer_P11_l001.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IllustObject,
    Customer_P11_l001,
  },

  setup() {
    const layer001 = ref(null);
    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };

    return {
      layer001,
      layer001Open,
    };
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageTitle>공동인증센터</PageTitle>
    </PageHead>

    <IllustObject
      type="certification"
      :classNames="{ wrap: 'row-margin-none' }"
    />

    <ButtonList
      align="full"
      :classNames="{
        wrap: 'row-margin-top-none',
      }"
    >
      <ButtonListItem>
        <BasicButton @click="layer001Open">
          인증서 내보내기 [ PC > 스마트폰 ]
        </BasicButton>
      </ButtonListItem>
    </ButtonList>
    <ButtonList
      align="full"
      :classNames="{
        wrap: 'row-margin-item-medium row-margin-bottom-none',
      }"
    >
      <ButtonListItem :classNames="{ item: 'row-margin-item-medium ' }">
        <BasicButton>인증서 가져오기 [ 스마트폰 > PC ]</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <div class="row-margin-block-small">
      <ul :class="[$style['basic-list'], $style['basic-list--regular-margin']]">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            기기간 인증서 이동/복사는 내보내기 및 가져오기 기능으로 모바일 및 타
            브라우저, 타 PC로 인증서 이동/복사가 가능합니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            브라우저 인증서(HTML5)를 사용하는 경우에만 이용이 가능합니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            8자리 승인코드를 이용하여 손쉽고 간단하게 이동/복사를 수정할 수
            있습니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            기기간 인증서 가져오기 기능은 ‘브라우저’ 또는 ‘하드디스크’
            저장매체에 인증서를 저장할 수 있습니다.
          </div>
        </li>
      </ul>
    </div>

    <Customer_P11_l001 ref="layer001" />
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P11_p001.scss';
</style>

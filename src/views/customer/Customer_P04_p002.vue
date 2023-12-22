<script>
// Customer_P04_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconRightArrow from '@/assets/images/icon/right-arrow.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicHr,
    TextButton,
    IconRightArrow,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'customer');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });
  },
};
</script>

<template>
  <PageContents size="wide">
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '고객센터',
            to: '/',
          },
          {
            text: '이벤트',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>이벤트</PageTitle>
    </PageHead>

    <div>
      <div :class="$style['image-view']">
        <img
          src="@/assets/images/_dummy/box-detail-large.png"
          alt="샘플 이미지"
        />
      </div>

      <ButtonList
        :wrap="true"
        align="center"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <BasicButton>응모하기</BasicButton>
        </ButtonListItem>
      </ButtonList>

      <!-- Case : 버튼 1개일 경우 -->
      <ButtonList
        :wrap="true"
        align="center"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <BasicButton tagName="RouterLink" to="">버튼</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!--  // Case : 버튼 1개일 경우 -->

      <!-- Case : 버튼 2개일 경우 -->
      <ButtonList
        col="4"
        :wrap="true"
        align="center"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <BasicButton tagName="RouterLink" to="">버튼</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton tagName="RouterLink" to="">버튼</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 버튼 2개일 경우 -->

      <!-- Case : 버튼 3개일 경우 -->
      <ButtonList
        col="4"
        :wrap="true"
        align="center"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <BasicButton tagName="RouterLink" to="">버튼</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton tagName="RouterLink" to="">버튼</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton tagName="RouterLink" to="">버튼</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 버튼 3개일 경우 -->

      <!-- Case : 버튼 컬러 타입 #143B75 -->
      <ButtonList
        :wrap="true"
        align="center"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <BasicButton theme="tertiary">버튼</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 버튼 컬러 타입 #143B75 -->

      <!-- Case : 버튼 컬러 타입 #3A81E0  -->
      <ButtonList
        :wrap="true"
        align="center"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <BasicButton theme="secondary">버튼</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 버튼 컬러 타입 #3A81E0 -->

      <!-- Case : 버튼 컬러 타입 #EAEAEA  -->
      <ButtonList
        :wrap="true"
        align="center"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <BasicButton theme="quaternary">버튼</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 버튼 컬러 타입 #EAEAEA  -->

      <!-- Case : 버튼 텍스트 컬러 타입 #00A69E  -->
      <ButtonList
        :wrap="true"
        align="center"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <BasicButton theme="quaternary-green">버튼</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 버튼 텍스트 컬러 타입 #00A69E  -->

      <!-- Case : 버튼 텍스트 컬러 타입 #3A81E0  -->
      <ButtonList
        :wrap="true"
        align="center"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <BasicButton theme="quaternary-blue">버튼</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 버튼 텍스트 컬러 타입 #3A81E0  -->

      <!-- Case : 버튼 텍스트 컬러 타입 #143B75  -->
      <ButtonList
        :wrap="true"
        align="center"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <BasicButton theme="quaternary-navy">버튼</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 버튼 텍스트 컬러 타입 #143B75  -->

      <!-- Case : 버튼 텍스트 컬러 타입 #00A69E  -->
      <ButtonList
        :wrap="true"
        align="center"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <BasicButton
            :line="true"
            theme="quaternary-green"
            tagName="RouterLink"
            to=""
            >버튼</BasicButton
          >
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 버튼 텍스트 컬러 타입 #00A69E  -->

      <!-- Case : 버튼 텍스트 컬러 타입 #3A81E0  -->
      <ButtonList
        :wrap="true"
        align="center"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <BasicButton
            :line="true"
            theme="quaternary-blue"
            tagName="RouterLink"
            to=""
            >버튼</BasicButton
          >
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 버튼 텍스트 컬러 타입 #3A81E0  -->

      <!-- Case : 버튼 텍스트 컬러 타입 #757575  -->
      <ButtonList
        :wrap="true"
        align="center"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <BasicButton
            :line="true"
            theme="quaternary"
            tagName="RouterLink"
            to=""
            >버튼</BasicButton
          >
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 버튼 텍스트 컬러 타입 #757575  -->
      <!-- Case : 버튼 텍스트 컬러 타입 #143B75  -->
      <ButtonList
        :wrap="true"
        align="center"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <BasicButton
            :line="true"
            theme="quaternary-navy"
            tagName="RouterLink"
            to=""
            >버튼</BasicButton
          >
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 버튼 텍스트 컬러 타입 #143B75  -->

      <!-- Case : 버튼 1개일 경우 -->
      <ButtonList
        :wrap="true"
        align="left"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <TextButton theme="secondary" :iconFillAll="true">
            <template v-slot:rightIcon>
              <IconRightArrow />
            </template>
            버튼
          </TextButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 버튼 1개일 경우 -->

      <!-- Case : 버튼 2개일 경우 -->
      <ButtonList
        col="2"
        :wrap="true"
        align="left"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <TextButton theme="secondary" :iconFillAll="true">
            <template v-slot:rightIcon>
              <IconRightArrow />
            </template>
            버튼
          </TextButton>
        </ButtonListItem>
        <ButtonListItem>
          <TextButton theme="secondary" :iconFillAll="true">
            <template v-slot:rightIcon>
              <IconRightArrow />
            </template>
            버튼
          </TextButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 버튼 2개일 경우 -->

      <!-- Case : 버튼 3개일 경우 -->
      <ButtonList
        col="3"
        :wrap="true"
        align="left"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <TextButton theme="secondary" :iconFillAll="true">
            <template v-slot:rightIcon>
              <IconRightArrow />
            </template>
            버튼
          </TextButton>
        </ButtonListItem>
        <ButtonListItem>
          <TextButton theme="secondary" :iconFillAll="true">
            <template v-slot:rightIcon>
              <IconRightArrow />
            </template>
            버튼
          </TextButton>
        </ButtonListItem>
        <ButtonListItem>
          <TextButton theme="secondary" :iconFillAll="true">
            <template v-slot:rightIcon>
              <IconRightArrow />
            </template>
            버튼
          </TextButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 버튼 3개일 경우 -->

      <!-- Case : 버튼 컬러 타입 #3A81E0 -->
      <ButtonList
        :wrap="true"
        align="left"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <TextButton theme="tertiary" :iconFillAll="true">
            <template v-slot:rightIcon>
              <IconRightArrow />
            </template>
            버튼
          </TextButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 버튼 컬러 타입 #3A81E0 -->

      <!-- Case : 버튼 컬러 타입 #757575 -->
      <ButtonList
        :wrap="true"
        align="left"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <TextButton class="color-gray-tertiary" :iconFillAll="true">
            <template v-slot:rightIcon>
              <IconRightArrow />
            </template>
            버튼
          </TextButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 버튼 컬러 타입 757575 -->

      <!-- Case : 버튼 컬러 타입 #143B75  -->
      <ButtonList
        :wrap="true"
        align="left"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <TextButton class="color-navy" :iconFillAll="true">
            <template v-slot:rightIcon>
              <IconRightArrow />
            </template>
            버튼
          </TextButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 버튼 컬러 타입 #143B75  -->
    </div>

    <BasicHr theme="quaternary" className="row-margin-block-small" />

    <ButtonList
      :wrap="true"
      align="center"
      :classNames="{
        wrap: 'row-margin-none',
      }"
    >
      <ButtonListItem>
        <BasicButton
          :line="true"
          theme="quaternary"
          tagName="RouterLink"
          to="/customer/Customer_P04_p001"
          >목록</BasicButton
        >
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P04_p002.scss';
</style>

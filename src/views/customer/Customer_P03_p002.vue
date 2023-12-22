<script>
// Customer_P03_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconDownloadSmall from '@/assets/images/icon/download-small.svg?component';
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
    TextButton,
    IconDownloadSmall,
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
            text: '공지사항',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>공지사항</PageTitle>
    </PageHead>

    <div :class="$style['board-detail']">
      <div :class="$style['board-detail__head']">
        <div
          :class="[
            $style['board-detail__head-cell'],
            $style['board-detail__head-cell--title'],
          ]"
        >
          <h3 :class="$style['board-detail__title']">게시물 제목</h3>
        </div>
        <div :class="$style['board-detail__head-cell']">2022.08.30</div>
      </div>

      <section :class="$style['board-detail__contents']">
        // 게시물 내용 노출

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
      </section>

      <!-- Case : 첨부 파일 없을시 비노출 -->
      <div :class="$style['board-detail__foot']">
        <div :class="$style['download-list']">
          <ul :class="$style['download-list__list']">
            <li :class="$style['download-list__item']">
              <TextButton
                iconSize="large"
                textSize="regular"
                tagName="a"
                href="/foo/bar.pdf"
                download
              >
                첨부파일.pdf
                <template v-slot:rightIcon>
                  <IconDownloadSmall :class="$style['download-list__icon']" />
                </template>
              </TextButton>
            </li>
            <li :class="$style['download-list__item']">
              <TextButton
                iconSize="large"
                textSize="regular"
                tagName="a"
                href="/foo/bar.pdf"
                download
              >
                첨부파일.pdf
                <template v-slot:rightIcon>
                  <IconDownloadSmall :class="$style['download-list__icon']" />
                </template>
              </TextButton>
            </li>
          </ul>
        </div>
      </div>
      <!-- // Case : 첨부 파일 없을시 비노출 -->
    </div>

    <!-- Case : 상시 노출 -->
    <ButtonList
      :wrap="true"
      align="center"
      :classNames="{
        wrap: 'row-margin-block-small',
      }"
    >
      <ButtonListItem>
        <BasicButton
          :line="true"
          theme="quaternary"
          tagName="RouterLink"
          to="/customer/Customer_P03_p001"
          >목록</BasicButton
        >
      </ButtonListItem>
    </ButtonList>
    <!-- Case : 상시 노출 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P03_p002.scss';
</style>

<script>
// Company_P03_p002
import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
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
    TextButton,
    IconRightArrow,
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
            text: '회사소개',
            to: '/',
          },
          {
            text: 'PR',
          },
          {
            text: '보도자료',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>보도자료</PageTitle>
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
      </section>
    </div>

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
          to="/company/Company_P03_p001"
          >목록</BasicButton
        >
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P03_p002.scss';
</style>

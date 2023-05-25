<script>
// IF_P02_p005
import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IllustObject,
    IllustInfo,
    IllustInfoTitle,
    IllustInfoText,
    BasicBox,
    RoundStatus,
  },
};
</script>

<template>
  <PageContents>
    <IllustInfo>
      <IllustObject type="complete" />
      <IllustInfoTitle>2건 중 1건 온라인약정이 완료되었습니다</IllustInfoTitle>
      <IllustInfoText
        className="text-title-2 row-margin-contents-group align-center"
      >
        접수하신 내역을 확인하여 빠른 시일 내에 답변 드리겠습니다.
      </IllustInfoText>
    </IllustInfo>

    <div class="row-margin-block-small">
      <BasicBox className="row-margin-contents">
        <div class="flex-box">
          <div class="flex-box__cell flex-1">
            <h3 class="text-body-1 font-weight-medium">재고금융Ⅱ20고5678</h3>
            <p class="text-body-4 color-gray row-margin-item-small">
              BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
            </p>
          </div>
          <div class="flex-box__cell">
            <RoundStatus
              theme="secondary"
              size="large"
              :classNames="{ wrap: 'display-block' }"
            >
              성공
            </RoundStatus>
          </div>
        </div>
      </BasicBox>

      <BasicBox className="row-margin-contents">
        <div class="flex-box">
          <div class="flex-box__cell flex-1">
            <h3 class="text-body-1 font-weight-medium">재고금융 20고5678</h3>
            <p class="text-body-4 color-gray row-margin-item-small">
              BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
            </p>
          </div>
          <div class="flex-box__cell">
            <RoundStatus
              theme="nonary"
              size="large"
              :classNames="{ wrap: 'display-block' }"
            >
              실패
            </RoundStatus>
          </div>
        </div>
      </BasicBox>
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton :line="true" theme="quaternary">추가약정하기</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton tagName="RouterLink" to="">대출약정완료</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/IF_P02_p005.scss';
</style>

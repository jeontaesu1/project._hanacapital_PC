<script>
// Customer_P16_p003
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    TextButton,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>그룹사간 고객정보 제공내역 조회</PageTitle>
    </PageHead>

    <ul
      :class="[
        $style['basic-list'],
        $style['basic-list--regular'],
        $style['basic-list--regular-margin'],
      ]"
    >
      <li
        :class="[
          $style['basic-list__item'],
          'font-weight-regular',
          'text-body-3',
        ]"
      >
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          기 제공한 목적 범위 외로 그룹사간 고객정보를 제공하는 경우에는
          고객에게 제공내역이 통지되오니 원하는 통지방법을 선택하여 주시기
          바랍니다.
        </div>
      </li>
      <li
        :class="[
          $style['basic-list__item'],
          'font-weight-regular',
          'text-body-3',
        ]"
      >
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          <div class="flex-box">
            <div class="flex-box__cell">
              고객정보 변경을 원하실 경우, [온라인지점 > 내 정보 관리] 메뉴를
              이용하세요.
            </div>
            <div class="flex-box__cell flex-box__cell--medium">
              <TextButton
                textSize="regular"
                theme="secondary"
                :underline="true"
                :block="true"
                :classNames="{ wrap: $style['right-button'] }"
              >
                바로가기
              </TextButton>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">통지방법</h3>

      <BoxCheckList>
        <BoxCheckListItem>
          <BoxCheck
            name="Customer_P16_p003_type"
            id="Customer_P16_p003_type_001"
            :defaultChecked="true"
          >
            <BoxCheckLabel>
              이메일<br />
              (kimhana@gmail.com/발송 가능)
            </BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            name="Customer_P16_p003_type"
            id="Customer_P16_p003_type_002"
          >
            <BoxCheckLabel>
              문자메시지<br />
              (010-1234-5678/발송 가능)
            </BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            name="Customer_P16_p003_type"
            id="Customer_P16_p003_type_003"
          >
            <BoxCheckLabel>
              사업장으로 우편신청<br />
              (서울특별시 강남구 개포동 ×××/발송 불가)
            </BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
    </section>

    <ButtonList :wrap="true" align="center" :col="4">
      <ButtonListItem>
        <BasicButton :line="true" theme="quaternary">취소</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P16_p003.scss';
</style>

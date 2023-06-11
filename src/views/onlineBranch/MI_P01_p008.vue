<script>
// MI_P01_p008
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    TextButton,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    ButtonList,
    ButtonListItem,
    BasicButton,
    NoticeText,
  },

  setup() {
    const state = reactive({
      phoneError: false,
      housePhoneError: false,
      officePhoneError: false,
      ceoOfficePhoneError: false,
      ceoPhoneError: false,
      managerOfficePhoneError001: false,
      managerOfficePhoneError002: false,
      managerPhoneError001: false,
      managerPhoneError002: false,
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">주소지/연락처 변경</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">연락처를 변경해 주세요</PageMainText>
    </PageHead>

    <div>
      <ul
        :class="[
          $style['basic-list'],
          $style['basic-list--regular'],
          $style['basic-list--regular-margin'],
        ]"
      >
        <li :class="[$style['basic-list__item'], 'font-weight-regular']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            <div class="flex-box">
              <div class="flex-box__cell flex-1">
                SMS안내 수신 시 사용할 연락처를 확인하고 변경할 수 있습니다.
              </div>
              <div class="flex-box__cell flex-box__cell--medium">
                <TextButton
                  textSize="regular"
                  theme="secondary"
                  :underline="true"
                  :block="true"
                >
                  이동하기
                </TextButton>
              </div>
            </div>
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'font-weight-regular']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            연락처 변경 시, 각 계약별로 설정되어 있는 SMS 안내 연락처도 함께
            변경됩니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'font-weight-regular']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            각 계약별로 설정된 SMS 안내 연락처 확인은 [계약정보 > SMS안내 수신
            변경] 메뉴를 이용하세요.
          </div>
        </li>
      </ul>

      <NoticeText :classNames="{ wrap: 'color-red row-margin-item-medium' }">
        스탁론은 홈페이지에서 연락처 변경 시 반대매매, 비율관련, 이자금액
        문자수신이 불가할 수 있으니 고객센터 (1800-1110)을 통해 변경바랍니다.
      </NoticeText>
    </div>

    <FormList
      :classNames="{ wrap: 'row-margin-block-small row-margin-bottom-none' }"
    >
      <!-- Case : 개인 회원일 경우 노출 -->
      <FormListItem titleText="휴대전화" target="#MI_P01_p008_phone">
        <FormInvalid :error="state.phoneError">
          <InputBlock :error="state.phoneError">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="휴대전화"
                pattern="\d*"
                id="MI_P01_p008_phone"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="자택전화" target="#MI_P01_p008_housePhone">
        <FormInvalid :error="state.housePhoneError">
          <InputBlock :error="state.housePhoneError">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="자택전화"
                pattern="\d*"
                id="MI_P01_p008_housePhone"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="직장전화" target="#MI_P01_p008_officePhone">
        <FormInvalid :error="state.officePhoneError">
          <InputBlock :error="state.officePhoneError">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="직장전화"
                pattern="\d*"
                id="MI_P01_p008_officePhone"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // Case : 개인 회원일 경우 노출 -->

      <!-- Case : 개인사업자/법인사업자일 경우 노출 -->
      <FormListItem
        titleText="대표자 사무실"
        target="#MI_P01_p008_ceoOfficePhone"
      >
        <FormInvalid :error="state.ceoOfficePhoneError">
          <InputBlock :error="state.ceoOfficePhoneError">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="대표자 사무실"
                pattern="\d*"
                id="MI_P01_p008_ceoOfficePhone"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="대표자 휴대전화" target="#MI_P01_p008_ceoPhone">
        <FormInvalid :error="state.ceoPhoneError">
          <InputBlock :error="state.ceoPhoneError">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="대표자 휴대전화"
                pattern="\d*"
                id="MI_P01_p008_ceoPhone"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="담당자1 사무실"
        target="#MI_P01_p008_managerOfficePhone001"
      >
        <FormInvalid :error="state.managerOfficePhoneError001">
          <InputBlock :error="state.managerOfficePhoneError001">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="담당자1 사무실"
                pattern="\d*"
                id="MI_P01_p008_managerOfficePhone001"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="담당자1 휴대전화"
        target="#MI_P01_p008_managerPhone001"
      >
        <FormInvalid :error="state.managerPhoneError001">
          <InputBlock :error="state.managerPhoneError001">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="담당자1 휴대전화"
                pattern="\d*"
                id="MI_P01_p008_managerPhone001"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="담당자2 사무실"
        target="#MI_P01_p008_managerOfficePhone002"
      >
        <FormInvalid :error="state.managerOfficePhoneError002">
          <InputBlock :error="state.managerOfficePhoneError002">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="담당자2 사무실"
                pattern="\d*"
                id="MI_P01_p008_managerOfficePhone002"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="담당자2 휴대전화"
        target="#MI_P01_p008_managerPhone002"
      >
        <FormInvalid :error="state.managerPhoneError002">
          <InputBlock :error="state.managerPhoneError002">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="담당자2 휴대전화"
                pattern="\d*"
                id="MI_P01_p008_managerPhone002"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // Case : 개인사업자/법인사업자일 경우 노출 -->
    </FormList>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>변경하기</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P01_p008.scss';
</style>

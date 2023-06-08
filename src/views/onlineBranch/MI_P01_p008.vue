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
      phoneError001: false,
      phoneError002: false,
      phoneError003: false,
      phoneError004: false,
      phoneError005: false,
      phoneError006: false,
      phoneError007: false,
      phoneError008: false,
      phoneError009: false,
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
      <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
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
      <!-- case : 개인 회원일 경우 노출 -->
      <FormListItem titleText="휴대전화" target="#MI_P01_p008_phone001">
        <FormInvalid :error="state.phone001Error">
          <InputBlock :error="state.phone001Error">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="휴대전화"
                type="number"
                pattern="\d*"
                id="MI_P01_p008_phone001"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="자택전화" target="#MI_P01_p008_phone002">
        <FormInvalid :error="state.phone002Error">
          <InputBlock :error="state.phone002Error">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="자택전화"
                type="number"
                pattern="\d*"
                id="MI_P01_p008_phone002"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="직장전화" target="#MI_P01_p008_phone003">
        <FormInvalid :error="state.phone003Error">
          <InputBlock :error="state.phone003Error">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="직장전화"
                type="number"
                pattern="\d*"
                id="MI_P01_p008_phone003"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // case : 개인 회원일 경우 노출 -->

      <!-- Case : 개인사업자/법인사업자일 경우 노출 -->
      <FormListItem titleText="대표자 사무실" target="#MI_P01_p008_phone004">
        <FormInvalid :error="state.phone004Error">
          <InputBlock :error="state.phone004Error">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="대표자 사무실"
                type="number"
                pattern="\d*"
                id="MI_P01_p008_phone004"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="대표자 휴대전화" target="#MI_P01_p008_phone005">
        <FormInvalid :error="state.phone005Error">
          <InputBlock :error="state.phone005Error">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="대표자 휴대전화"
                type="number"
                pattern="\d*"
                id="MI_P01_p008_phone005"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="담당자1 사무실" target="#MI_P01_p008_phone006">
        <FormInvalid :error="state.phone006Error">
          <InputBlock :error="state.phone006Error">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="담당자1 사무실"
                type="number"
                pattern="\d*"
                id="MI_P01_p008_phone006"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="담당자1 휴대전화" target="#MI_P01_p008_phone007">
        <FormInvalid :error="state.phone007Error">
          <InputBlock :error="state.phone007Error">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="담당자1 휴대전화"
                type="number"
                pattern="\d*"
                id="MI_P01_p008_phone007"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="담당자2 사무실" target="#MI_P01_p008_phone008">
        <FormInvalid :error="state.phone008Error">
          <InputBlock :error="state.phone008Error">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="담당자2 사무실"
                type="number"
                pattern="\d*"
                id="MI_P01_p008_phone008"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="담당자2 휴대전화" target="#MI_P01_p008_phone009">
        <FormInvalid :error="state.phone009Error">
          <InputBlock :error="state.phone009Error">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="담당자2 휴대전화"
                type="number"
                pattern="\d*"
                id="MI_P01_p008_phone009"
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

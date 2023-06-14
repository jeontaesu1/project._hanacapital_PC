<script>
// Etc_P01_p001
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicInput,
    BasicSelect,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },

  setup() {
    const state = reactive({
      type001Error: false,
      field001Error: false,
      nameError: false,
      phoneError: false,
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
      <PageTitle>
        연락처를 남겨주시면<br />
        상담원이 친절하게 상담해 드리겠습니다
      </PageTitle>
    </PageHead>

    <FormList>
      <FormListItem titleText="회원구분" :forceFocus="true">
        <FormInvalid :error="state.type001Error">
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                name="Etc_P01_p001_type"
                id="Etc_P01_p001_type_001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>개인 (개인사업자 포함)</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck name="Etc_P01_p001_type" id="Etc_P01_p001_type_002">
                <BoxCheckLabel>법인</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="상담 서비스 분야"
        target="#Etc_P01_p001_field001"
      >
        <FormInvalid :error="state.field001Error">
          <InputBlock :error="state.field001Error">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :options="[
                  {
                    value: '1',
                    label: '개인금융',
                  },
                  {
                    value: '2',
                    label: '자동차금융',
                  },
                  {
                    value: '3',
                    label: '기업금융',
                  },
                ]"
                title="대출기간"
                inputId="Etc_P01_p001_field001"
              />
            </InputBlockCell>
            <InputBlockCell :flexible="true" margin="regular">
              <BasicSelect
                :options="[
                  {
                    value: '1',
                    label: '신용대출',
                  },
                  {
                    value: '2',
                    label: '자동차담보대출',
                  },
                  {
                    value: '3',
                    label: '스탁론',
                  },
                  {
                    value: '4',
                    label: '신차할부(오토론)',
                  },
                  {
                    value: '5',
                    label: '신차리스',
                  },
                  {
                    value: '6',
                    label: '중고차오토론',
                  },
                  {
                    value: '7',
                    label: '렌터카',
                  },
                  {
                    value: '8',
                    label: '의료기리스',
                  },
                  {
                    value: '9',
                    label: '건설/상용금융',
                  },
                ]"
                title="대출기간"
                inputId="Etc_P01_p001_field002"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="이름" target="#Etc_P01_p001_name">
        <FormInvalid :error="state.nameError">
          <InputBlock :error="state.nameError">
            <InputBlockCell :flexible="true">
              <BasicInput title="이름" id="Etc_P01_p001_name" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="연락처" target="#Etc_P01_p001_phone">
        <FormInvalid :error="state.phoneError">
          <InputBlock :error="state.phoneError">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="number"
                pattern="\d*"
                title="연락처"
                id="Etc_P01_p001_phone"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="약관동의" :forceFocus="true">
        <div :class="$style['agree-list']">
          <ul :class="$style['agree-list__depth']">
            <li :class="$style['agree-list__depth-item']">
              <div :class="$style['agree-list__depth-head']">
                <CheckBox
                  id="Etc_P01_p001_phoneAgree001"
                  :classNames="{
                    wrap: $style['agree-list__depth-checkbox'],
                  }"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>서비스 이용약관</CheckBoxLabelText>
                </CheckBox>
              </div>
              <div :class="$style['agree-list__depth-contents']">
                <ul :class="$style['agree-list__list']">
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        id="Etc_P01_p001_phoneAgree001_001"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText>
                          개인정보 수집·이용 동의
                        </CheckBoxLabelText>
                      </CheckBox>
                      <div :class="$style['agree-list__right']">
                        <button
                          type="button"
                          :class="$style['agree-list__link']"
                        >
                          <span :class="$style['agree-list__link-text']">
                            상세보기
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </FormListItem>
    </FormList>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>상담예약신청</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/additionalService/Etc_P01_p001.scss';
</style>

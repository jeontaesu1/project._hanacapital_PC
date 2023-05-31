<script>
// MI_P00_p015
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
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
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    StepProgress,
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
    BasicButton,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicDatepicker,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    ButtonList,
    ButtonListItem,
  },

  setup() {
    const state = reactive({
      name001Error: false,
      name002Error: false,
      relative001Error: false,
      relative002Error: false,
      idNumber001Error: false,
      idNumber002Error: false,
      license001Error: false,
      license002Error: false,
      issueError001: false,
      issueError002: false,
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
        <PageTitle align="left">지정운전자 등록</PageTitle>
        <template v-slot:right>
          <StepProgress :total="4" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">지정운전자 정보를 입력해 주세요</PageMainText>
    </PageHead>

    <div>
      <BasicBox className="row-margin-block-small">
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-title-2 font-weight-medium">렌터카 159호5678</h3>
            <div :class="[$style['division-info'], 'row-margin-item-small']">
              <ul :class="$style['division-info__list']">
                <li :class="$style['division-info__item']">
                  <div class="text-body-3 color-gray-tertiary">
                    팰리세이드 디젤 2
                  </div>
                </li>
                <li :class="$style['division-info__item']">
                  <div class="text-body-3 color-gray-tertiary">
                    L99999999999999
                  </div>
                </li>
              </ul>
            </div>
          </BasicBoxHeadLeft>
        </BasicBoxHead>

        <KeyValue :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>보험사</KeyValueTitle>
            <KeyValueText>탄톤칙김기매니</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>가입연령</KeyValueTitle>
            <KeyValueText>만 26세 이상</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>임직원특약</KeyValueTitle>
            <KeyValueText>미가입</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <div>
        <section class="row-margin-block-small">
          <h3 class="text-title-1 row-margin-contents">지정운전자 I</h3>

          <FormList>
            <FormListItem titleText="지정운전자" target="#MI_P00_p015_name001">
              <FormInvalid :error="state.name001Error">
                <InputBlock :error="state.name001Error">
                  <InputBlockCell :flexible="true">
                    <BasicInput title="지정운전자" id="MI_P00_p015_name001" />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem titleText="계약자와의 관계" :forceFocus="true">
              <FormInvalid :error="state.relative001Error">
                <BoxCheckList>
                  <BoxCheckListItem>
                    <BoxCheck
                      name="MI_P00_p015_relative001"
                      id="MI_P00_p015_relative_001_001"
                      :defaultChecked="true"
                    >
                      <BoxCheckLabel>친인척</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                  <BoxCheckListItem>
                    <BoxCheck
                      name="MI_P00_p015_relative001"
                      id="MI_P00_p015_relative_001_002"
                    >
                      <BoxCheckLabel>기타</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                </BoxCheckList>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="생년월일"
              titleOptionalText="(6자리)"
              target="#MI_P00_p015_idNumber001_button"
            >
              <FormInvalid :error="state.idNumber001Error">
                <InputBlock :error="state.idNumber001Error">
                  <InputBlockCell :flexible="true">
                    <BasicDatepicker
                      title="생년월일"
                      id="MI_P00_p015_idNumber001"
                      buttonId="MI_P00_p015_idNumber001_button"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem titleText="면허번호" target="#MI_P00_p015_license001">
              <FormInvalid :error="state.license001Error">
                <InputBlock :error="state.license001Error">
                  <InputBlockCell>
                    <BasicSelect
                      :options="[
                        {
                          value: '1',
                          label: '서울 (11)',
                        },
                        {
                          value: '2',
                          label: '부산 (12)',
                        },
                        {
                          value: '3',
                          label: '경기 (13)',
                        },
                        {
                          value: '4',
                          label: '강원 (14)',
                        },
                        {
                          value: '5',
                          label: '충북 (15)',
                        },
                        {
                          value: '6',
                          label: '충남 (16)',
                        },
                        {
                          value: '7',
                          label: '전북 (17)',
                        },
                        {
                          value: '8',
                          label: '경남 (18)',
                        },
                        {
                          value: '9',
                          label: '제주 (19)',
                        },
                        {
                          value: '10',
                          label: '대구 (20)',
                        },
                        {
                          value: '11',
                          label: '인천 (21)',
                        },
                        {
                          value: '12',
                          label: '광주 (22)',
                        },
                        {
                          value: '13',
                          label: '대전 (23)',
                        },
                        {
                          value: '14',
                          label: '울산 (24)',
                        },
                      ]"
                      title="면허번호 - 지역번호 선택하기"
                      inputId="MI_P00_p015_license001"
                      :classNames="{
                        wrap: 'input-width-driving-license',
                      }"
                    />
                  </InputBlockCell>
                  <InputBlockCell :flexible="true" margin="regular">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="면허번호 앞 2자리"
                      :useDelete="false"
                    />
                  </InputBlockCell>
                  <InputBlockCell type="sub">-</InputBlockCell>
                  <InputBlockCell
                    :classNames="{
                      cell: 'flex-2',
                    }"
                    margin="regular"
                  >
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="면허번호 두번째 6자리"
                      :useDelete="false"
                    />
                  </InputBlockCell>
                  <InputBlockCell type="sub">-</InputBlockCell>
                  <InputBlockCell :flexible="true" margin="regular">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="면허번호 뒤 2자리"
                      :useDelete="false"
                    />
                  </InputBlockCell>
                  <template v-slot:right>
                    <BasicButton size="small" theme="quaternary">
                      확인
                    </BasicButton>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="발급일자"
              target="#MI_P00_p015_issue_button001"
            >
              <FormInvalid :error="state.issueError001">
                <InputBlock :error="state.issueError001">
                  <InputBlockCell :flexible="true">
                    <BasicDatepicker
                      title="발급일자"
                      id="MI_P00_p015_issue"
                      buttonId="MI_P00_p015_issue_button001"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </section>

        <section class="row-margin-block-small">
          <h3 class="text-title-1 row-margin-contents">지정운전자 II</h3>

          <FormList>
            <FormListItem titleText="지정운전자" target="#MI_P00_p015_name002">
              <FormInvalid :error="state.name002Error">
                <InputBlock :error="state.name002Error">
                  <InputBlockCell :flexible="true">
                    <BasicInput title="지정운전자" id="MI_P00_p015_name002" />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem titleText="계약자와의 관계" :forceFocus="true">
              <FormInvalid :error="state.relative002Error">
                <BoxCheckList>
                  <BoxCheckListItem>
                    <BoxCheck
                      name="MI_P00_p015_relative002"
                      id="MI_P00_p015_relative_002_001"
                      :defaultChecked="true"
                    >
                      <BoxCheckLabel>친인척</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                  <BoxCheckListItem>
                    <BoxCheck
                      name="MI_P00_p015_relative002"
                      id="MI_P00_p015_relative_002_002"
                    >
                      <BoxCheckLabel>기타</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                </BoxCheckList>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="생년월일"
              titleOptionalText="(6자리)"
              target="#MI_P00_p015_idNumber002_button"
            >
              <FormInvalid :error="state.idNumber001Error">
                <InputBlock :error="state.idNumber001Error">
                  <InputBlockCell :flexible="true">
                    <BasicDatepicker
                      title="생년월일"
                      id="MI_P00_p015_idNumber002"
                      buttonId="MI_P00_p015_idNumber002_button"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem titleText="면허번호" target="#MI_P00_p015_license002">
              <FormInvalid :error="state.license001Error">
                <InputBlock :error="state.license001Error">
                  <InputBlockCell>
                    <BasicSelect
                      :options="[
                        {
                          value: '1',
                          label: '서울 (11)',
                        },
                        {
                          value: '2',
                          label: '부산 (12)',
                        },
                        {
                          value: '3',
                          label: '경기 (13)',
                        },
                        {
                          value: '4',
                          label: '강원 (14)',
                        },
                        {
                          value: '5',
                          label: '충북 (15)',
                        },
                        {
                          value: '6',
                          label: '충남 (16)',
                        },
                        {
                          value: '7',
                          label: '전북 (17)',
                        },
                        {
                          value: '8',
                          label: '경남 (18)',
                        },
                        {
                          value: '9',
                          label: '제주 (19)',
                        },
                        {
                          value: '10',
                          label: '대구 (20)',
                        },
                        {
                          value: '11',
                          label: '인천 (21)',
                        },
                        {
                          value: '12',
                          label: '광주 (22)',
                        },
                        {
                          value: '13',
                          label: '대전 (23)',
                        },
                        {
                          value: '14',
                          label: '울산 (24)',
                        },
                      ]"
                      title="면허번호 - 지역번호 선택하기"
                      inputId="MI_P00_p015_license002"
                      :classNames="{
                        wrap: 'input-width-driving-license',
                      }"
                    />
                  </InputBlockCell>
                  <InputBlockCell :flexible="true" margin="regular">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="면허번호 앞 2자리"
                      :useDelete="false"
                    />
                  </InputBlockCell>
                  <InputBlockCell type="sub">-</InputBlockCell>
                  <InputBlockCell
                    :classNames="{
                      cell: 'flex-2',
                    }"
                    margin="regular"
                  >
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="면허번호 두번째 6자리"
                      :useDelete="false"
                    />
                  </InputBlockCell>
                  <InputBlockCell type="sub">-</InputBlockCell>
                  <InputBlockCell :flexible="true" margin="regular">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="면허번호 뒤 2자리"
                      :useDelete="false"
                    />
                  </InputBlockCell>
                  <template v-slot:right>
                    <BasicButton size="small" theme="quaternary">
                      확인
                    </BasicButton>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="발급일자"
              target="#MI_P00_p015_issue_button002"
            >
              <FormInvalid :error="state.issueError002">
                <InputBlock :error="state.issueError002">
                  <InputBlockCell :flexible="true">
                    <BasicDatepicker
                      title="발급일자"
                      id="MI_P00_p015_issue"
                      buttonId="MI_P00_p015_issue_button002"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </section>
      </div>

      <div class="row-margin-container-medium">
        <CheckBox id="MI_P00_p015_sms" theme="tertiary">
          <CheckBoxObject />
          <CheckBoxLabelText>
            지정운전자 등록은 운전면허 취득 후 1년이 경과된 손님에 한하여 적용
            가능합니다. 면허취득 1년 미만인 경우, 사고 발생 시 보험적용이
            불가하오니 반드시 면허취득일자를 다시 한 번 확인 후 입력해 주세요.
          </CheckBoxLabelText>
        </CheckBox>
      </div>
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>등록/변경 신청</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_p015.scss';
</style>

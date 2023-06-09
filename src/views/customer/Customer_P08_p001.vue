<script>
// Customer_P08_p001

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
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

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
    BasicSelect,
  },
  setup() {
    const state = reactive({
      testError001: false,
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>정책 및 약관</PageTitle>
    </PageHead>
    <FormList>
      <BoxCheckList :wrap="true" col="4">
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="testBoxCheckList005"
            id="testBoxCheckList005_001"
            :defaultChecked="true"
          >
            <BoxCheckLabel>온라인 서비스 이용약관</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="testBoxCheckList005"
            id="testBoxCheckList005_002"
          >
            <BoxCheckLabel>휴대폰 인증약관</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="testBoxCheckList005"
            id="testBoxCheckList005_003"
          >
            <BoxCheckLabel>하나머니 서비스 이용약관</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="testBoxCheckList005"
            id="testBoxCheckList005_004"
          >
            <BoxCheckLabel>금융약관</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="testBoxCheckList005"
            id="testBoxCheckList005_005"
          >
            <BoxCheckLabel>개인정보 처리 방침</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="testBoxCheckList005"
            id="testBoxCheckList005_006"
          >
            <BoxCheckLabel>고객정보 취급방침</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="testBoxCheckList005"
            id="testBoxCheckList005_007"
          >
            <BoxCheckLabel>개인(신용)정보관리보호</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="testBoxCheckList005"
            id="testBoxCheckList005_008"
          >
            <BoxCheckLabel>위탁 · 제휴 현황</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="testBoxCheckList005"
            id="testBoxCheckList005_009"
          >
            <BoxCheckLabel>이메일주소 무단수집거부</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="testBoxCheckList005"
            id="testBoxCheckList005_010"
          >
            <BoxCheckLabel>하나RE 멤버십 약관</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="testBoxCheckList005"
            id="testBoxCheckList005_011"
          >
            <BoxCheckLabel>하나캐피탈 멤버십 약관</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="testBoxCheckList005"
            id="testBoxCheckList005_012"
          >
            <BoxCheckLabel>영상정보처리기기 운영 · 관리 방침</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>

      <div class="row-margin-container-medium">
        <FormListItem
          titleText="약관명"
          target="#testInput012"
          :selectOnly="true"
          :disabled="true"
        >
          <FormInvalid :error="state.testError001">
            <InputBlock :error="state.testError001" :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '온라인 서비스 이용약관',
                    },
                    {
                      value: '2',
                      label: '휴대폰 인증약관',
                    },
                    {
                      value: '3',
                      label: '하나머니 서비스 이용약관',
                    },
                    {
                      value: '4',
                      label: '금융약관',
                    },
                    {
                      value: '5',
                      label: '개인정보 처리 방침',
                    },
                    {
                      value: '6',
                      label: '고객정보 취급방침',
                    },
                    {
                      value: '7',
                      label: '개인(신용)정보관리보호',
                    },
                    {
                      value: '8',
                      label: '위탁 · 제휴 현황',
                    },
                    {
                      value: '9',
                      label: '이메일주소 무단수집거부',
                    },
                    {
                      value: '10',
                      label: '하나RE 멤버십 약관',
                    },
                    {
                      value: '11',
                      label: '하나캐피탈 멤버십 약관',
                    },
                    {
                      value: '12',
                      label: '영상정보처리기기 운영 · 관리 방침',
                    },
                  ]"
                  title="약관명"
                  inputId="testInput012"
                  defaultValue="1"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="시행일 이력"
          target="#testInput010"
          :selectOnly="true"
        >
          <FormInvalid :error="state.testError001">
            <InputBlock :error="state.testError001">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '2022.10.25',
                    },
                    {
                      value: '2',
                      label: '2022.10.25',
                    },
                    {
                      value: '3',
                      label: '2022.10.25',
                    },
                    {
                      value: '4',
                      label: '2022.10.25',
                    },
                    {
                      value: '5',
                      label: '2022.10.25',
                    },
                    {
                      value: '6',
                      label: '2022.10.25',
                    },
                  ]"
                  title="시행일 이력"
                  inputId="testInput010"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </div>
    </FormList>
    <div>약관상세</div>
  </PageContents>
</template>

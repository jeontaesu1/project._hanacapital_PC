<script>
// My_P08_p026
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    NoticeText,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicDatepicker,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
  },

  setup() {
    const state = reactive({
      nameError: false,
      address001Error: false,
      address002Error: false,
      collectionError: false,
      dateError: false,
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
        <PageTitle align="left">만기후처리 구매 신청</PageTitle>
        <template v-slot:right>
          <StepProgress :total="5" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">구매 정보를 입력해 주세요</PageMainText>
    </PageHead>

    <div>
      <BasicBox>
        <KeyValue>
          <KeyValueItem>
            <KeyValueTitle>이전서류발송예정일자</KeyValueTitle>
            <KeyValueText>2023.01.10</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <NoticeText :classNames="{ wrap: 'color-red row-margin-contents-small' }">
        매도용인감 발급 사정에 따라 변경될 수 있습니다.
      </NoticeText>
    </div>

    <div class="row-margin-block row-margin-bottom-none">
      <section>
        <h3 class="text-title-1 row-margin-contents">매수인 정보</h3>

        <CheckBox id="My_P08_p026_agree001" theme="tertiary">
          <CheckBoxObject />
          <CheckBoxLabelText>계약자 정보와 동일</CheckBoxLabelText>
        </CheckBox>

        <FormList
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <FormListItem titleText="매수인명" target="#My_P08_p026_name">
            <FormInvalid :error="state.nameError">
              <InputBlock :error="state.nameError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="매수인명" id="My_P08_p026_name" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="매도용인감 주소"
            :forceFocus="true"
            target="#My_P08_p026_address001"
          >
            <FormInvalid :error="state.address001Error">
              <InputBlock :error="state.address001Error">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="매도용인감 주소 우편번호"
                    :disabled="true"
                    defaultValue="01000"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton size="small" theme="tertiary">
                    검색
                  </BasicButton>
                </template>
              </InputBlock>
              <!-- DD : 주소 검색 및 입력 후 노출 -->
              <InputBlock
                :error="state.address001Error"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="매도용인감 도로명 주소"
                    :disabled="true"
                    defaultValue="인천 서구 에코로 181"
                  />
                </InputBlockCell>
              </InputBlock>
              <InputBlock
                :error="state.address001Error"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="매도용인감 상세 주소"
                    :disabled="true"
                    defaultValue="하나금융 로비"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- // DD : 주소 검색 및 입력 후 노출 -->
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          // 툴팁
        </FormList>
      </section>

      <section class="row-margin-block">
        <h3 class="text-title-1 row-margin-contents">수령/수취 정보</h3>

        <CheckBox id="My_P08_p026_agree002" theme="tertiary">
          <CheckBoxObject />
          <CheckBoxLabelText>매도용 인감주소와 동일</CheckBoxLabelText>
        </CheckBox>

        <FormList
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <FormListItem
            titleText="수령주소"
            :forceFocus="true"
            target="#My_P08_p026_address002"
          >
            <FormInvalid :error="state.address002Error">
              <InputBlock :error="state.address002Error">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="수령주소 우편번호"
                    :disabled="true"
                    defaultValue="01000"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton size="small" theme="tertiary">
                    검색
                  </BasicButton>
                </template>
              </InputBlock>
              <!-- DD : 주소 검색 및 입력 후 노출 -->
              <InputBlock
                :error="state.address002Error"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="수령주소 주소"
                    :disabled="true"
                    defaultValue="인천 서구 에코로 181"
                  />
                </InputBlockCell>
              </InputBlock>
              <InputBlock
                :error="state.address002Error"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="수령주소 상세 주소"
                    :disabled="true"
                    defaultValue="하나금융 로비"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- // DD : 주소 검색 및 입력 후 노출 -->
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="수취방법" :forceFocus="true">
            <FormInvalid :error="state.collectionError">
              <BoxCheckList>
                <BoxCheckListItem>
                  <BoxCheck
                    name="My_P08_p026_collection_type"
                    id="My_P08_p026_collection_type_001"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>등기</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    name="My_P08_p026_collection_type"
                    id="My_P08_p026_collection_type_002"
                  >
                    <BoxCheckLabel>퀵착불</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <section class="row-margin-block">
        <h3 class="text-title-1 row-margin-contents">정산 정보</h3>

        <BasicBox>
          <KeyValue>
            <!-- Case : 정산금액이 +인 경우 노출 -->
            <KeyValueItem>
              <KeyValueTitle>정산금액</KeyValueTitle>
              <KeyValueText>99,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>입금계좌번호</KeyValueTitle>
              <KeyValueText>
                하나<br />
                21556-412-94556
              </KeyValueText>
            </KeyValueItem>
            <!-- // Case : 정산금액이 +인 경우 노출 -->

            <!-- Case : 정산금액이 -인 경우 노출 -->
            <KeyValueItem>
              <KeyValueTitle>정산금액</KeyValueTitle>
              <KeyValueText>-99,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>환불예정일자</KeyValueTitle>
              <KeyValueText>2023.01.10</KeyValueText>
            </KeyValueItem>
            <!-- // Case : 정산금액이 -인 경우 노출 -->
          </KeyValue>
        </BasicBox>

        <!-- Case : 정산금액이 +인 경우 노출 -->
        <FormList
          :classNames="{
            wrap: 'row-margin-contents row-margin-bottom-none',
          }"
        >
          <FormListItem
            titleText="입금예약일자"
            target="#My_P08_p026_dateButton"
          >
            <FormInvalid :error="state.dateError">
              <InputBlock :error="state.dateError">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="입금예약일자"
                    id="My_P08_p026_date"
                    buttonId="My_P08_p026_dateButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
          차량번호 혹은 계약자명으로 입금 부탁드립니다.
        </NoticeText>
        <!-- //  Case : 정산금액이 +인 경우 노출 -->

        <!-- Case : 정산금액이 -인 경우 노출 -->
        <NoticeText :classNames="{ wrap: 'row-margin-contents-small' }">
          환불예정일자는 회사 내부사정에 따라 변경 될 수 있습니다.
        </NoticeText>
        <!-- // Case : 정산금액이 -인 경우 노출 -->
      </section>
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

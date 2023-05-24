<script>
// My_p06_p002
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicBox,
    BasicHr,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicSelect,
    NoticeText,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },

  setup() {
    const state = reactive({
      accountError: false,
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
      <PageTitle>청약철회권 신청서를 작성해 주세요</PageTitle>
    </PageHead>

    <div>
      <section class="row-margin-block-small">
        <BasicBox>
          <KeyValue>
            <KeyValueItem verticalAlign="center">
              <KeyValueTitle :classNames="{ title: 'color-black' }">
                소비자신용대출
              </KeyValueTitle>
            </KeyValueItem>
          </KeyValue>
          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents-small"
          />
          <KeyValue>
            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>23,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>23,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText>6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>원리금균등분할상환</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">청약철회 예상금액</h3>

        <BasicBox>
          <KeyValue>
            <KeyValueItem verticalAlign="center">
              <KeyValueTitle :classNames="{ title: 'color-black' }">
                소비자신용대출
              </KeyValueTitle>
            </KeyValueItem>
          </KeyValue>
          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents-small"
          />
          <KeyValue>
            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>23,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출실행일</KeyValueTitle>
              <KeyValueText>2021.12.31</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>23,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText>6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>원리금균등분할상환</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">청약철회 예상금액</h3>

        <BasicBox>
          <KeyValue>
            <KeyValueItem>
              <KeyValueTitle>결제방법</KeyValueTitle>
              <KeyValueText>가상계좌입금</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <div class="row-margin-contents">
          <FormList>
            <FormListItem
              titleText="대출기간"
              target="#My_p06_p002_account"
              :selectOnly="true"
            >
              <FormInvalid :error="state.accountError001">
                <InputBlock :error="state.accountError001">
                  <InputBlockCell :flexible="true">
                    <BasicSelect
                      :options="[
                        {
                          value: '1',
                          label: '하나 123-456-789012',
                        },
                        {
                          value: '2',
                          label: '신한 123-456-789012',
                        },
                        {
                          value: '3',
                          label: '우리 123-456-789012',
                        },
                        {
                          value: '4',
                          label: '농협 123-456-789012',
                        },
                        {
                          value: '5',
                          label: '국민 123-456-789012',
                        },
                        {
                          value: '6',
                          label: '카카오뱅크 123-456-789012',
                        },
                        {
                          value: '7',
                          label: '기업 123-456-789012',
                        },
                      ]"
                      title="대출기간"
                      inputId="testInput010"
                      defaultValue="1"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>

          <NoticeText :classNames="{ wrap: 'row-margin-contents' }">
            당일 기준 금액으로 <span class="color-green">17시 이내</span> 입금해
            주셔야 합니다.
          </NoticeText>
        </div>
      </section>
    </div>

    <ButtonList align="full">
      <ButtonListItem>
        <BasicButton>청약철회 신청하기</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

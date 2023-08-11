<script>
// My_p06_p002
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
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
    LocationBar,
    PageHead,
    PageTitle,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
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
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      accountError: false,
    });

    onMounted(() => {
      store.ui.header.setActive(() => 'onlineBranch');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '온라인 지점',
            to: '/',
          },
          {
            text: '계약정보',
          },
          {
            text: '청약철회권 신청',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>청약철회권 신청서를 작성해 주세요</PageTitle>
    </PageHead>

    <div>
      <section class="row-margin-block-small">
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">소비자신용대출</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                L99999999999999
              </p>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue :wrap="true">
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
          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>청약철회 상환금액</KeyValueTitle>
              <KeyValueText>23,064,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>상환원금</KeyValueTitle>
              <KeyValueText>23,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>경과이자</KeyValueTitle>
              <KeyValueText>64,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>중도상환수수료</KeyValueTitle>
              <KeyValueText>면제</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>설정비</KeyValueTitle>
              <KeyValueText>0 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>인지세</KeyValueTitle>
              <KeyValueText>0 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>기타비용</KeyValueTitle>
              <KeyValueText>0 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">결제방법</h3>

        <BasicBox>
          <KeyValue>
            <KeyValueItem>
              <KeyValueTitle>결제방법</KeyValueTitle>
              <KeyValueText>가상계좌입금</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <FormList :classNames="{ wrap: 'row-margin-contents' }">
          <FormListItem
            titleText="입금가상계좌"
            target="#My_p06_p002_account"
            :selectOnly="true"
          >
            <FormInvalid :error="state.accountError">
              <InputBlock :error="state.accountError">
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
                    inputId="My_p06_p002_account"
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
      </section>
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>청약철회 신청하기</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

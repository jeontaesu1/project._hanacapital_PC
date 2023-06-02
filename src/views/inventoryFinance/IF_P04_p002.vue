<script>
// IF_P04_p002
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BankLogo from '@/components/ui/imageData/BankLogo.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicButton,
    ButtonList,
    ButtonListItem,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BankLogo,
    BasicHr,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    UnitText,
  },

  setup() {
    const state = reactive({
      percentError: false,
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
        만기연장 내역 확인 후<br />
        조건을 입력해 주세요
      </PageTitle>
    </PageHead>

    <div>
      <section class="row-margin-block">
        <h3 class="text-title-1 row-margin-small">대출정보</h3>
        <p class="text-body-1 font-weight-light color-gray-secondary">
          선택한 계약상품의 만기연장 내역을 확인해 주세요
        </p>

        <BasicBox className="row-margin-contents">
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h4 class="text-title-2 font-weight-medium">20고5678</h4>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
              </p>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>대출일자</KeyValueTitle>
              <KeyValueText>2019.03.05</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>5일</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>대출실행금액</KeyValueTitle>
              <KeyValueText>11,700,000 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>설정금액</KeyValueTitle>
              <KeyValueText>1,300,000 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>원금잔액</KeyValueTitle>
              <KeyValueText>11,700,000 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>연체이자율</KeyValueTitle>
              <KeyValueText>10.5%</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>금리</KeyValueTitle>
              <KeyValueText>10%</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>만기일시상환</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>기간</KeyValueTitle>
              <KeyValueText>2개월</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <BasicHr theme="quaternary" className="row-margin-contents" />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>만기일자</KeyValueTitle>
              <KeyValueText>2019.06.05</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>만기시 상환금액</KeyValueTitle>
              <KeyValueText>13,271,330 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>원금</KeyValueTitle>
              <KeyValueText>13,000,000 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>이자</KeyValueTitle>
              <KeyValueText>245,750 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>

      <section class="row-margin-block">
        <h3 class="text-title-1 row-margin-small">만기연장 신청정보</h3>
        <p class="text-body-1 font-weight-light color-gray-secondary">
          만기연장 조건을 선택해주세요
        </p>

        <BasicBox className="row-margin-contents">
          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>만기연장 예정일자</KeyValueTitle>
              <KeyValueText>2019.03.05</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>입금 신청일자</KeyValueTitle>
              <KeyValueText>13,000,000 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <section class="row-margin-container-medium">
          <h4 class="text-body-1 row-margin-item-group">필수 상환금액</h4>
          <FormList>
            <FormListItem titleText="원금상환비율" :forceFocus="true">
              <FormInvalid :error="state.percentError">
                <BoxCheckList
                  :wrap="true"
                  col="3"
                  :classNames="{ wrap: 'row-margin-item-group' }"
                >
                  <BoxCheckListItem>
                    <BoxCheck
                      name="IF_P04_p002_percent"
                      id="IF_P04_p002_percent01"
                    >
                      <BoxCheckLabel>30%</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                  <BoxCheckListItem>
                    <BoxCheck
                      name="IF_P04_p002_percent"
                      id="IF_P04_p002_percent02"
                    >
                      <BoxCheckLabel>20%</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                  <BoxCheckListItem>
                    <BoxCheck
                      name="IF_P04_p002_percent"
                      id="IF_P04_p002_percent03"
                      :defaultChecked="true"
                    >
                      <BoxCheckLabel>10%</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                </BoxCheckList>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>

          <BasicBox className="row-margin-contents">
            <KeyValue verticalAlign="center">
              <KeyValueItem>
                <KeyValueTitle :classNames="{ title: 'color-black' }">
                  필수 상환금액
                </KeyValueTitle>
                <KeyValueText>
                  <UnitText rightUnit="원" align="right">1,545,750</UnitText>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <BasicHr
              theme="quaternary"
              className="row-margin-contents"
            ></BasicHr>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>원금상환</KeyValueTitle>
                <KeyValueText>13,000,000 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>이자상환</KeyValueTitle>
                <KeyValueText>245,750 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h4 class="text-body-1 row-margin-item-group">입금정보</h4>

          <BasicBox>
            <KeyValue>
              <KeyValueItem>
                <KeyValueTitle>결제방법</KeyValueTitle>
                <KeyValueText>가상계좌입금</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <section class="row-margin-item-group">
              <h5
                class="text-body-1 font-weight-regular color-gray row-margin-item-group"
              >
                입금가상계좌
              </h5>
              <BasicBox theme="tertiary">
                <KeyValue align="left" :wrap="true">
                  <KeyValueItem>
                    <KeyValueTitle>
                      <div class="flex-box">
                        <div class="flex-box__cell">
                          <BankLogo size="small" code="004" />
                        </div>
                        <div class="flex-box__cell flex-box__cell--mini">
                          국민
                        </div>
                      </div>
                    </KeyValueTitle>
                    <KeyValueText> 123-456-78901234 </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem>
                    <KeyValueTitle>
                      <div class="flex-box">
                        <div class="flex-box__cell">
                          <BankLogo size="small" code="011" />
                        </div>
                        <div class="flex-box__cell flex-box__cell--mini">
                          농협
                        </div>
                      </div>
                    </KeyValueTitle>
                    <KeyValueText> 123-456-78901234 </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem>
                    <KeyValueTitle>
                      <div class="flex-box">
                        <div class="flex-box__cell">
                          <BankLogo size="small" code="020" />
                        </div>
                        <div class="flex-box__cell flex-box__cell--mini">
                          우리
                        </div>
                      </div>
                    </KeyValueTitle>
                    <KeyValueText> 123-456-78901234 </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem>
                    <KeyValueTitle>
                      <div class="flex-box">
                        <div class="flex-box__cell">
                          <BankLogo size="small" code="081" />
                        </div>
                        <div class="flex-box__cell flex-box__cell--mini">
                          하나
                        </div>
                      </div>
                    </KeyValueTitle>
                    <KeyValueText> 123-456-78901234 </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem>
                    <KeyValueTitle>
                      <div class="flex-box">
                        <div class="flex-box__cell">
                          <BankLogo size="small" code="088" />
                        </div>
                        <div class="flex-box__cell flex-box__cell--mini">
                          신한
                        </div>
                      </div>
                    </KeyValueTitle>
                    <KeyValueText>123-456-78901234</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </BasicBox>
            </section>
          </BasicBox>
        </section>
      </section>

      <section class="row-margin-block">
        <h3 class="text-title-1 row-margin-small">만기연장처리 후 대출정보</h3>
        <p class="text-body-1 font-weight-light color-gray-secondary">
          만기연장 처리 후 변경된 대출정보를 확인해 주세요
        </p>

        <BasicBox className="row-margin-contents">
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h4 class="text-title-2 font-weight-medium">20고5678</h4>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
              </p>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>대출일자</KeyValueTitle>
              <KeyValueText
                :classNames="{ text: 'color-green font-weight-medium' }"
              >
                2019.03.05
              </KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>5일</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>대출실행금액</KeyValueTitle>
              <KeyValueText
                :classNames="{ text: 'color-green font-weight-medium' }"
              >
                11,700,000 원
              </KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>설정금액</KeyValueTitle>
              <KeyValueText>1,300,000 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>금리</KeyValueTitle>
              <KeyValueText>10%</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>연체이자율</KeyValueTitle>
              <KeyValueText
                :classNames="{ text: 'color-green font-weight-medium' }"
              >
                10.5%
              </KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>기간</KeyValueTitle>
              <KeyValueText
                :classNames="{ text: 'color-green font-weight-medium' }"
              >
                2개월
              </KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>만기일시상환</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <BasicHr theme="quaternary" className="row-margin-contents" />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>만기일자</KeyValueTitle>
              <KeyValueText
                :classNames="{ text: 'color-green font-weight-medium' }"
              >
                2019.06.05
              </KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>만기시 상환금액</KeyValueTitle>
              <KeyValueText
                :classNames="{ text: 'color-green font-weight-medium' }"
              >
                13,271,330 원
              </KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>원금</KeyValueTitle>
              <KeyValueText
                :classNames="{ text: 'color-green font-weight-medium' }"
              >
                13,000,000 원
              </KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>이자</KeyValueTitle>
              <KeyValueText
                :classNames="{ text: 'color-green font-weight-medium' }"
              >
                245,750 원
              </KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>

      <div class="row-margin-block">// [공통 > 본인인증] 내용 노출</div>

      <ButtonList>
        <ButtonListItem>
          <BasicButton>만기연장 신청하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </div>
  </PageContents>
</template>

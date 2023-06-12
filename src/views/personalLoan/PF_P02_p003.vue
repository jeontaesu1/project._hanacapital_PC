<script>
// PF_P02_p003
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import SecurityKeypadButton from '@/components/ui/button/SecurityKeypadButton.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    PageSubText,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    SecurityInput,
    SecurityKeypadButton,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    BasicButton,
    NoticeText,
    BasicSelect,
    TextButton,
    ButtonList,
    ButtonListItem,
  },

  setup() {
    const state = reactive({
      nameError: false,
      idNumberError: false,
      incomeError: false,
      apartmentInfoError: false,
      setAmountError: false,
      residenceError: false,
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
        <PageTitle align="left">행복아파트론</PageTitle>
        <template v-slot:right>
          <StepProgress :total="5" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">고객정보를 입력해 주세요</PageMainText>
      <PageSubText align="left">
        실제 정보와 상이할 경우 한도 및 금리가 달라질 수 있습니다.
      </PageSubText>
    </PageHead>

    <FormList>
      <FormListItem
        titleText="이름"
        target="#PF_P02_p003_name"
        :disabled="true"
      >
        <FormInvalid :error="state.nameError">
          <InputBlock :error="state.nameError" :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="이름"
                id="PF_P02_p003_name"
                defaultValue="김하나"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="주민등록번호"
        target="#PF_P02_p003_idNumber"
        :disabled="true"
      >
        <FormInvalid :error="state.idNumberError">
          <InputBlock :error="state.idNumberError" :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="number"
                pattern="\d*"
                title="주민등록번호 앞 6자리"
                id="PF_P02_p003_idNumber"
                defaultValue="123456"
                :disabled="true"
              />
            </InputBlockCell>
            <InputBlockCell type="sub">-</InputBlockCell>
            <InputBlockCell :flexible="true">
              <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
              <SecurityInput
                title="주민등록번호 뒤 7자리"
                :dot="[true, true, true, true, true, true, true]"
                :disabled="true"
              />
            </InputBlockCell>
            <InputBlockCell>
              <SecurityKeypadButton :disabled="true" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="소득구분" :forceFocus="true">
        <FormInvalid :error="state.incomeError">
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="PF_P02_p003_incomeCheck"
                id="PF_P02_p003_incomeCheck1"
              >
                <BoxCheckLabel>급여소득자</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="PF_P02_p003_incomeCheck"
                id="PF_P02_p003_incomeCheck2"
              >
                <BoxCheckLabel>자영업자</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="PF_P02_p003_incomeCheck"
                id="PF_P02_p003_incomeCheck3"
              >
                <BoxCheckLabel>기타</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">아파트 정보</h3>

      <FormList>
        <FormListItem
          titleText="아파트 정보"
          target="#PF_P02_p003_apartmentInfo"
        >
          <FormInvalid :error="state.apartmentInfoError">
            <InputBlock :error="state.apartmentInfoError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="아파트 정보"
                  defaultValue="인천광역시 연수구 송도동 39-1"
                  :disabled="true"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton
                  size="small"
                  theme="tertiary"
                  id="PF_P02_p003_apartmentInfo"
                >
                  아파트 검색
                </BasicButton>
              </template>
            </InputBlock>
            <!-- Case: 주소 검색 및 입력 후 노출 -->
            <InputBlock
              :error="state.apartmentInfoError"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="아파트 정보"
                  defaultValue="더샵 랜드마크시티"
                  :disabled="true"
                />
              </InputBlockCell>
              <InputBlockCell>
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '59㎡',
                    },
                    {
                      value: '2',
                      label: '72㎡',
                    },
                    {
                      value: '3',
                      label: '74㎡',
                    },
                    {
                      value: '4',
                      label: '84㎡',
                    },
                    {
                      value: '5',
                      label: '85㎡',
                    },
                  ]"
                  title="아파트 평형"
                  inputId="PF_P02_p003_apartmentInfo"
                  :classNames="{
                    wrap: 'input-width-telecom',
                  }"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- //Case: 주소 검색 및 입력 후 노출 -->

            <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
              본인 소유 또는 배우자 공동소유만 대출진행 가능합니다.
            </NoticeText>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="부동산 설정금액"
          titleOptionalText="(선택)"
          target="#PF_P02_p003_amount"
        >
          <FormInvalid :error="state.setAmountError">
            <InputBlock :error="state.setAmountError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  id="PF_P02_p003_amount"
                  title="부동산 설정금액 (선택)"
                  :useDelete="false"
                  align="right"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-1 font-weight-medium">만원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>

            <div class="flex-box align-items-start row-margin-item-medium">
              <div class="flex-box__cell flex-1">
                <NoticeText>
                  등기부등본 조회버튼을 클릭하여 확인되는 하단의 채권최고액을
                  부동산설정금액란에 입력바랍니다. (근저당설정이 2건 이상일 경우
                  합산하여 입력)
                </NoticeText>
              </div>
              <div class="flex-box__cell flex-box__cell--medium">
                <TextButton
                  theme="secondary"
                  :underline="true"
                  :block="true"
                  textSize="regular"
                >
                  등기부등본 조회
                </TextButton>
              </div>
            </div>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <!-- Case : 등기부등본 확인 팝업 내 [확인] 선택 시 노출 -->
      <section class="row-margin-container-medium">
        <h4 class="text-body-1 row-margin-item-group">부동산설정정보</h4>

        <div :class="$style['basic-table']">
          <table>
            <colgroup>
              <col style="width: 80px" />
              <col style="width: 120px" />
              <col style="width: 131px" />
              <col style="width: 181px" />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>순위번호</th>
                <th>등기목적</th>
                <th>접수정보</th>
                <th>주요등기사항</th>
                <th>대상소유자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3</td>
                <td>근저당권설정</td>
                <td>2021년2월5일 제4845호</td>
                <td>
                  채권최고금액<br />금330,000,000원<br />
                  근저당권자 주식회사<br />국민은행
                </td>
                <td>박지혜</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="row-margin-container-medium">
        <h4 class="text-body-1 row-margin-item-group">
          표제부(전유 부분의 건물의 표시) 건물내역
        </h4>
        <p class="text-body-3">철근콘크리트조60.69㎡</p>
      </section>
      <!-- //Case : 등기부등본 확인 팝업 내 [확인] 선택 시 노출 -->

      <FormList>
        <FormListItem titleText="소유지 거주여부" :forceFocus="true">
          <FormInvalid :error="state.residenceError">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P02_p003_residence"
                  id="PF_P02_p003_residence01"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>예</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P02_p003_residence"
                  id="PF_P02_p003_residence02"
                >
                  <BoxCheckLabel>아니오</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>

            <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
              주민등록등본 주소와 아파트 주소가 일치하면 ‘예‘, 다르면 ‘아니오’를
              선택해주세요.
            </NoticeText>
          </FormInvalid>
        </FormListItem>
      </FormList>
    </section>

    <ButtonList align="full">
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>

      <!-- Case : 등기부등본 확인 팝업 내 [확인] 선택 시 노출 -->
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
      <!-- //Case : 등기부등본 확인 팝업 내 [확인] 선택 시 노출 -->
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P02_p003.scss';
</style>

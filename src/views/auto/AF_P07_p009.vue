<script>
// AF_P07_p009
import { onMounted, onUnmounted, ref, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
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
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import SecurityKeypadButton from '@/components/ui/button/SecurityKeypadButton.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
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
    SecurityInput,
    SecurityKeypadButton,
    BasicInput,
    BasicSelect,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
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

    onMounted(() => {
      store.ui.header.setActive(() => 'auto');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    const state = reactive({
      corporationNameError: false,
      representativeNameError: false,
      businessNumberError: false,
      suretyError: false,
      relationshipType: false,
      name001Error: false,
      name002Error: false,
      name003Error: false,
      idNumber001Error: false,
      idNumber002Error: false,
      idNumber003Error: false,
      phone001Error: false,
      phone002Error: false,
      phone003Error: false,
      businessNameError: false,
      businessLicense001Error: false,
      businessLicense002Error: false,
      birthNumberError: false,
    });

    const layer = ref(null);

    return {
      state,
      layer,
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
            text: '오토금융',
            to: '/',
          },
          {
            text: '오토승계',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">오토승계</PageTitle>
        <template v-slot:right>
          <StepProgress :total="6" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        양수인(승계후이용자) 및 신청인 정보를 입력해 주세요
      </PageMainText>
    </PageHead>

    <section>
      <h3 class="text-title-1 row-margin-contents">
        양수인(승계후이용자) 정보
      </h3>

      <BoxCheckList>
        <BoxCheckListItem>
          <BoxCheck
            name="AF_P07_p009_type"
            id="AF_P07_p009_type_001"
            :defaultChecked="true"
          >
            <BoxCheckLabel>개인</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck name="AF_P07_p009_type" id="AF_P07_p009_type_002">
            <BoxCheckLabel>개인사업자</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck name="AF_P07_p009_type" id="AF_P07_p009_type_003">
            <BoxCheckLabel>법인사업자</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
    </section>

    <div class="row-margin-container-medium row-margin-bottom-none">
      <!-- Case : 개인 선택시 노출 -->
      <FormList>
        <FormListItem titleText="이름" target="#AF_P07_p009_name001">
          <FormInvalid :error="state.name001Error">
            <InputBlock :error="state.name001Error">
              <InputBlockCell :flexible="true">
                <BasicInput title="이름" id="AF_P07_p009_name001" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="주민등록번호"
          target="#AF_P07_p009_idNumber001"
        >
          <FormInvalid :error="state.idNumber001Error">
            <InputBlock :error="state.idNumber001Error">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="AF_P07_p009_idNumber001"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                <SecurityInput
                  title="주민등록번호 뒤 7자리"
                  :dot="[true, true, true, false, false, false, false]"
                />
              </InputBlockCell>
              <InputBlockCell>
                <SecurityKeypadButton />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="휴대폰번호"
          target="#AF_P07_p009_phone001_telecom"
        >
          <FormInvalid :error="state.phone001Error">
            <InputBlock :error="state.phone001Error">
              <InputBlockCell>
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: 'SKT',
                    },
                    {
                      value: '2',
                      label: 'KT',
                    },
                    {
                      value: '3',
                      label: 'LG U+',
                    },
                    {
                      value: '4',
                      label: '알뜰폰 SKT',
                    },
                    {
                      value: '5',
                      label: '알뜰폰 KT',
                    },
                    {
                      value: '6',
                      label: '알뜰폰 LG +',
                    },
                  ]"
                  title="통신사"
                  inputId="AF_P07_p009_phone001_telecom"
                  :classNames="{
                    wrap: 'input-width-telecom',
                  }"
                />
              </InputBlockCell>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicInput type="number" pattern="\d*" title="휴대폰번호" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>
      <!-- // Case : 개인 선택시 노출 -->

      <!-- Case : 개인사업자 선택시 노출 -->
      <FormList>
        <FormListItem titleText="이름" target="#AF_P07_p009_name002">
          <FormInvalid :error="state.name002Error">
            <InputBlock :error="state.name002Error">
              <InputBlockCell :flexible="true">
                <BasicInput title="이름" id="AF_P07_p009_name002" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="주민등록번호"
          target="#AF_P07_p009_idNumber002"
        >
          <FormInvalid :error="state.idNumber002Error">
            <InputBlock :error="state.idNumber002Error">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="AF_P07_p009_idNumber002"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                <SecurityInput
                  title="주민등록번호 뒤 7자리"
                  :dot="[true, true, true, false, false, false, false]"
                />
              </InputBlockCell>
              <InputBlockCell>
                <SecurityKeypadButton />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="휴대폰번호"
          target="#AF_P07_p009_phone002_telecom"
        >
          <FormInvalid :error="state.phone002Error">
            <InputBlock :error="state.phone002Error">
              <InputBlockCell>
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: 'SKT',
                    },
                    {
                      value: '2',
                      label: 'KT',
                    },
                    {
                      value: '3',
                      label: 'LG U+',
                    },
                    {
                      value: '4',
                      label: '알뜰폰 SKT',
                    },
                    {
                      value: '5',
                      label: '알뜰폰 KT',
                    },
                    {
                      value: '6',
                      label: '알뜰폰 LG +',
                    },
                  ]"
                  title="통신사"
                  inputId="AF_P07_p009_phone002_telecom"
                  :classNames="{
                    wrap: 'input-width-telecom',
                  }"
                />
              </InputBlockCell>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicInput type="number" pattern="\d*" title="휴대폰번호" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="사업자명" target="#AF_P07_p009_businessName">
          <FormInvalid :error="state.businessNameError">
            <InputBlock :error="state.businessNameError">
              <InputBlockCell :flexible="true">
                <BasicInput title="사업자명" id="AF_P07_p009_businessName" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="사업자등록번호"
          target="#AF_P07_p009_BusinessLicense"
        >
          <FormInvalid :error="state.businessLicense001Error">
            <InputBlock :error="state.businessLicense001Error">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="사업자등록번호"
                  id="AF_P07_p009_BusinessLicense"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>
      <!-- // Case : 개인사업자 선택시 노출 -->

      <!-- Case : 법인사업자 선택시 노출 -->
      <FormList>
        <FormListItem titleText="법인명" target="#AF_P07_p009_corporationName">
          <FormInvalid :error="state.corporationNameError">
            <InputBlock :error="state.corporationNameError">
              <InputBlockCell :flexible="true">
                <BasicInput title="법인명" id="AF_P07_p009_corporationName" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="대표자명"
          target="#AF_P07_p009_representativeName"
        >
          <FormInvalid :error="state.representativeNameError">
            <InputBlock :error="state.representativeNameError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="대표자명"
                  id="AF_P07_p009_representativeName"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="법인번호" target="#AF_P07_p009_businessNumber">
          <FormInvalid :error="state.businessNumberError">
            <InputBlock :error="state.businessNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="법인번호 앞 6자리"
                  id="AF_P07_p009_businessNumber"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                <SecurityInput
                  title="법인번호 뒤 7자리"
                  :dot="[true, true, true, false, false, false, false]"
                />
              </InputBlockCell>
              <InputBlockCell>
                <SecurityKeypadButton />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="사업자번호"
          target="#AF_P07_p009_BusinessLicense"
        >
          <FormInvalid :error="state.businessLicense002Error">
            <InputBlock :error="state.businessLicense002Error">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  title="사업자번호"
                  id="AF_P07_p009_BusinessLicense"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="연대보증인 여부" :forceFocus="true">
          <FormInvalid :error="state.suretyError">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  name="AF_P07_p009_surety"
                  id="AF_P07_p009_surety001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>개인</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck name="AF_P07_p009_surety" id="AF_P07_p009_surety002">
                  <BoxCheckLabel>없음</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <!-- Case : 연대보증인 여부 개인 선택시 노출 -->
        <FormListItem
          titleText="계약자와의 관계"
          target="#AF_P07_p009_relationshipType"
          :selectOnly="true"
        >
          <FormInvalid :error="state.AF_P07_p009_relationshipType">
            <InputBlock :error="state.AF_P07_p009_relationshipType">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '최대주주',
                    },
                    {
                      value: '2',
                      label: '대주주',
                    },
                    {
                      value: '3',
                      label: '대표이사',
                    },
                    {
                      value: '4',
                      label: '무한책임 사원',
                    },
                  ]"
                  title="계약자와의 관계"
                  inputId="AF_P07_p009_relationshipType"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="이름" target="#AF_P07_p009_name003">
          <FormInvalid :error="state.name003Error">
            <InputBlock :error="state.name003Error">
              <InputBlockCell :flexible="true">
                <BasicInput title="이름" id="AF_P07_p009_name003" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="주민등록번호"
          target="#AF_P07_p009_idNumber003"
        >
          <FormInvalid :error="state.idNumber003Error">
            <InputBlock :error="state.idNumber003Error">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="AF_P07_p009_idNumber003"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                <SecurityInput
                  title="주민등록번호 뒤 7자리"
                  :dot="[true, true, true, false, false, false, false]"
                />
              </InputBlockCell>
              <InputBlockCell>
                <SecurityKeypadButton />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="휴대폰번호"
          target="#AF_P07_p009_phone003_telecom"
        >
          <FormInvalid :error="state.phone003Error">
            <InputBlock :error="state.phone003Error">
              <InputBlockCell>
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: 'SKT',
                    },
                    {
                      value: '2',
                      label: 'KT',
                    },
                    {
                      value: '3',
                      label: 'LG U+',
                    },
                    {
                      value: '4',
                      label: '알뜰폰 SKT',
                    },
                    {
                      value: '5',
                      label: '알뜰폰 KT',
                    },
                    {
                      value: '6',
                      label: '알뜰폰 LG +',
                    },
                  ]"
                  title="통신사"
                  inputId="AF_P07_p009_phone003_telecom"
                  :classNames="{
                    wrap: 'input-width-telecom',
                  }"
                />
              </InputBlockCell>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicInput type="number" pattern="\d*" title="휴대폰번호" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : 연대보증인 여부 개인 선택시 노출 -->
      </FormList>

      <section class="row-margin-block-small row-margin-bottom-none">
        <div class="flex-box row-margin-contents">
          <div class="flex-box__cell">
            <h3 class="text-title-1">신청인 정보</h3>
          </div>
          <div class="flex-box__cell flex-box__cell--small">
            <p class="text-body-1">(심사결과 안내 및 승계상담 담당자 정보)</p>
          </div>
        </div>

        <CheckBox id="AF_P07_p009_agree001" theme="tertiary">
          <CheckBoxObject />
          <CheckBoxLabelText>신청인 정보와 동일</CheckBoxLabelText>
        </CheckBox>

        <FormList
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <FormListItem titleText="이름" target="#AF_P07_p009_name002">
            <FormInvalid :error="state.name002Error">
              <InputBlock :error="state.name002Error">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이름" id="AF_P07_p009_name002" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="생년월일" target="#AF_P07_p009_birth">
            <FormInvalid :error="state.birthNumberError">
              <InputBlock :error="state.birthNumberError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="생년월일"
                    id="AF_P07_p009_birth"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="휴대폰번호"
            target="#AF_P07_p009_phone002_telecom"
          >
            <FormInvalid :error="state.phone002Error">
              <InputBlock :error="state.phone002Error">
                <InputBlockCell>
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: 'SKT',
                      },
                      {
                        value: '2',
                        label: 'KT',
                      },
                      {
                        value: '3',
                        label: 'LG U+',
                      },
                      {
                        value: '4',
                        label: '알뜰폰 SKT',
                      },
                      {
                        value: '5',
                        label: '알뜰폰 KT',
                      },
                      {
                        value: '6',
                        label: '알뜰폰 LG +',
                      },
                    ]"
                    title="통신사"
                    inputId="AF_P07_p009_phone002_telecom"
                    :classNames="{
                      wrap: 'input-width-telecom',
                    }"
                  />
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicInput type="number" pattern="\d*" title="휴대폰번호" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

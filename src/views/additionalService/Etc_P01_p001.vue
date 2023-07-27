<script>
// Etc_P01_p001
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
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
    LocationBar,
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
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      type001Error: false,
      field001Error: false,
      nameError: false,
      businessNameError: false,
      phoneError: false,
      time001Error: false,
      carTypeError: false,
      carNameError: false,
      areaError: false,
    });

    onMounted(() => {
      store.ui.header.setActive(() => 'customer');
      store.ui.header.setDepthActive(() => 'customer011');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
      store.ui.header.setDepthActive();
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
            text: '부가서비스',
          },
          {
            text: '전화상담신청',
            to: '/',
          },
        ]"
      />
    </template>

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

      <!-- Case : '법인' 선택 시 노출 -->
      <FormListItem titleText="법인명" target="#Etc_P01_p001_businessName">
        <FormInvalid :error="state.businessNameError">
          <InputBlock :error="state.businessNameError">
            <InputBlockCell :flexible="true">
              <BasicInput title="법인명" id="Etc_P01_p001_businessName" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // Case : '법인' 선택 시 노출 -->

      <FormListItem titleText="연락처" target="#Etc_P01_p001_phone">
        <FormInvalid :error="state.phoneError">
          <InputBlock :error="state.phoneError">
            <InputBlockCell>
              <BasicSelect
                :options="[
                  {
                    value: '1',
                    label: '010',
                  },
                  {
                    value: '2',
                    label: '011',
                  },
                  {
                    value: '3',
                    label: '0130',
                  },
                  {
                    value: '4',
                    label: '016',
                  },
                  {
                    value: '5',
                    label: '017',
                  },
                  {
                    value: '6',
                    label: '018',
                  },
                  {
                    value: '7',
                    label: '019',
                  },
                  {
                    value: '8',
                    label: '0505',
                  },
                  {
                    value: '9',
                    label: '02',
                  },
                  {
                    value: '10',
                    label: '070',
                  },
                  {
                    value: '11',
                    label: '031',
                  },
                  {
                    value: '12',
                    label: '032',
                  },
                  {
                    value: '13',
                    label: '033',
                  },
                  {
                    value: '14',
                    label: '041',
                  },
                  {
                    value: '15',
                    label: '042',
                  },
                  {
                    value: '16',
                    label: '043',
                  },
                  {
                    value: '17',
                    label: '044',
                  },
                  {
                    value: '18',
                    label: '051',
                  },
                  {
                    value: '19',
                    label: '052',
                  },
                  {
                    value: '20',
                    label: '053',
                  },
                  {
                    value: '21',
                    label: '054',
                  },
                  {
                    value: '22',
                    label: '055',
                  },
                  {
                    value: '23',
                    label: '061',
                  },
                  {
                    value: '24',
                    label: '062',
                  },
                  {
                    value: '25',
                    label: '063',
                  },
                  {
                    value: '26',
                    label: '064',
                  },
                ]"
                title="연락처 앞자리 번호 선택"
                inputId="Etc_P01_p001_phone"
                :classNames="{
                  wrap: 'input-width-telecom',
                }"
              />
            </InputBlockCell>
            <InputBlockCell :flexible="true" margin="regular">
              <BasicInput pattern="\d*" title="연락처 나머지 번호 입력" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <!-- Case : '개인금융', '자동차금융' 선택 시 노출 -->
      <FormListItem titleText="연락가능시간" target="#Etc_P01_p001_time001">
        <FormInvalid :error="state.time001Error">
          <InputBlock :error="state.time001Error">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :options="[
                  {
                    value: '1',
                    label: '9',
                  },
                  {
                    value: '2',
                    label: '10',
                  },
                  {
                    value: '3',
                    label: '11',
                  },
                  {
                    value: '4',
                    label: '12',
                  },
                  {
                    value: '5',
                    label: '13',
                  },
                  {
                    value: '6',
                    label: '14',
                  },
                  {
                    value: '7',
                    label: '15',
                  },
                  {
                    value: '8',
                    label: '16',
                  },
                  {
                    value: '9',
                    label: '17',
                  },
                ]"
                title="연락가능시간 시작시간"
                inputId="Etc_P01_p001_time001"
              />
            </InputBlockCell>
            <InputBlockCell margin="regular">
              <div class="text-body-1">시</div>
            </InputBlockCell>
            <InputBlockCell margin="regular">
              <div class="text-title-1">~</div>
            </InputBlockCell>
            <InputBlockCell :flexible="true" margin="regular">
              <BasicSelect
                :options="[
                  {
                    value: '1',
                    label: '9',
                  },
                  {
                    value: '2',
                    label: '10',
                  },
                  {
                    value: '3',
                    label: '11',
                  },
                  {
                    value: '4',
                    label: '12',
                  },
                  {
                    value: '5',
                    label: '13',
                  },
                  {
                    value: '6',
                    label: '14',
                  },
                  {
                    value: '7',
                    label: '15',
                  },
                  {
                    value: '8',
                    label: '16',
                  },
                  {
                    value: '9',
                    label: '17',
                  },
                ]"
                title="연락가능시간 종료시간"
                inputId="Etc_P01_p001_time002"
              />
            </InputBlockCell>
            <InputBlockCell margin="regular">
              <div class="text-body-1">시 사이</div>
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // Case : '개인금융', '자동차금융' 선택 시 노출 -->

      <!-- Case : '자동차금융'선택 시 노출 -->
      <FormListItem titleText="차량구분" target="#Etc_P01_p001_carType">
        <FormInvalid :error="state.carTypeError">
          <InputBlock :error="state.carTypeError">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :options="[
                  {
                    value: '1',
                    label: '국산차',
                  },
                  {
                    value: '2',
                    label: '수입차',
                  },
                ]"
                title="차량구분"
                inputId="Etc_P01_p001_carType"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="관심차량" target="#Etc_P01_p001_carName">
        <FormInvalid :error="state.carNameError">
          <InputBlock :error="state.carNameError">
            <InputBlockCell :flexible="true">
              <BasicInput title="관심차량" id="Etc_P01_p001_carName" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="지역"
        target="#Etc_P01_p001_area"
        :selectOnly="true"
      >
        <FormInvalid :error="state.areaError">
          <InputBlock :error="state.areaError">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :options="[
                  {
                    value: '1',
                    label: '전체',
                  },
                  {
                    value: '2',
                    label: '서울',
                  },
                  {
                    value: '3',
                    label: '부산',
                  },
                  {
                    value: '4',
                    label: '대구',
                  },
                  {
                    value: '5',
                    label: '광주',
                  },
                  {
                    value: '6',
                    label: '인천',
                  },
                  {
                    value: '7',
                    label: '대전',
                  },
                  {
                    value: '8',
                    label: '울산',
                  },
                  {
                    value: '9',
                    label: '경기',
                  },
                  {
                    value: '10',
                    label: '경남',
                  },
                  {
                    value: '11',
                    label: '경북',
                  },
                  {
                    value: '12',
                    label: '강원',
                  },
                  {
                    value: '13',
                    label: '충남',
                  },
                  {
                    value: '14',
                    label: '충북',
                  },
                  {
                    value: '15',
                    label: '전남',
                  },
                  {
                    value: '16',
                    label: '전북',
                  },
                  {
                    value: '17',
                    label: '제주',
                  },
                ]"
                title="시/도/명 선택하기"
                inputId="Etc_P01_p001_area"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // Case : '자동차금융'선택 시 노출 -->

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

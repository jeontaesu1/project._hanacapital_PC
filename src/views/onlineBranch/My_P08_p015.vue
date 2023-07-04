<script>
// My_P08_p015
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
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
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    BasicBox,
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
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    BasicDatepicker,
    BasicSelect,
    BasicInput,
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
      dayError: false,
      nameError: false,
      phoneError: false,
      timeError: false,
      addressError: false,
    });

    onMounted(() => {
      store.ui.header.setActive(() => 'onlineBranch');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    return {
      store,
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
            text: '만기후처리',
          },
          {
            text: '반환 신청',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">만기후처리 반환 신청</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">반환 정보를 입력해 주세요</PageMainText>
    </PageHead>

    <ul
      :class="[
        $style['basic-list'],
        $style['basic-list--regular'],
        $style['basic-list--regular-margin'],
      ]"
    >
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          최대반환가능일자를 경과하여 반환하는 경우 반환지연금이 청구됩니다.
        </div>
      </li>
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          반환 신청은 2영업일 이후 가능합니다.
        </div>
      </li>
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          출고 후 설치하신 개인물품 모두 확인 및 제거 후 반납해 주시기 바랍니다.
        </div>
      </li>
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          반환 시 탁송기사님께 인수 시 수령하신 키 전부를 반납해 주세요.
        </div>
      </li>
    </ul>

    <div class="row-margin-block-small row-margin-bottom-none">
      <BasicBox>
        <KeyValue :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>최종결제일자</KeyValueTitle>
            <KeyValueText>2023.01.10</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>최대반환가능일자</KeyValueTitle>
            <KeyValueText>2023.01.10</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>만기일자</KeyValueTitle>
            <KeyValueText>2023.01.10</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <FormList :classNames="{ wrap: 'row-margin-container-medium' }">
        <FormListItem titleText="반환예정일자" target="#My_P08_p015_day_button">
          <FormInvalid :error="state.dayError">
            <InputBlock :error="state.dayError">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="반환예정일자"
                  id="My_P08_p015_day"
                  buttonId="My_P08_p015_day_button"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">반환 담당자 정보</h3>

        <CheckBox id="My_P08_p015_agree" theme="tertiary">
          <CheckBoxObject />
          <CheckBoxLabelText>계약자 정보와 동일</CheckBoxLabelText>
        </CheckBox>

        <FormList
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <FormListItem titleText="반환 담당자 이름" target="#My_P08_p015_name">
            <FormInvalid :error="state.nameError">
              <InputBlock :error="state.nameError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="반환 담당자 이름" id="My_P08_p015_name" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="휴대폰번호"
            target="#My_P08_p015_phone_telecom"
            :disabled="true"
          >
            <FormInvalid :error="state.phoneError">
              <InputBlock :error="state.phoneError">
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
                    inputId="My_P08_p015_phone_telecom"
                    :classNames="{
                      wrap: 'input-width-telecom',
                    }"
                    :disabled="true"
                  />
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="휴대폰번호"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <section>
        <h3 class="text-title-1 row-margin-contents">반환 요청 정보</h3>

        <FormList>
          <FormListItem
            titleText="반환요청 시간"
            target="#My_P08_p015_time"
            :selectOnly="true"
          >
            <FormInvalid :error="state.timeError">
              <InputBlock :error="state.timeError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '9시',
                      },
                      {
                        value: '2',
                        label: '10시',
                      },
                      {
                        value: '3',
                        label: '11시',
                      },
                      {
                        value: '4',
                        label: '12시',
                      },
                      {
                        value: '5',
                        label: '13시',
                      },
                      {
                        value: '6',
                        label: '14시',
                      },
                      {
                        value: '7',
                        label: '15시',
                      },
                      {
                        value: '8',
                        label: '16시',
                      },
                      {
                        value: '9',
                        label: '17시',
                      },
                    ]"
                    title="반환요청 시간 선택하기"
                    inputId="My_P08_p015_time"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="반환요청 장소"
            :forceFocus="true"
            target="#My_P08_p015_addressSearch"
          >
            <FormInvalid :error="state.addressError">
              <InputBlock :error="state.addressError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="반환요청 장소 우편번호"
                    :disabled="true"
                    defaultValue="01000"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="small"
                    theme="tertiary"
                    id="My_P08_p015_addressSearch"
                  >
                    검색
                  </BasicButton>
                </template>
              </InputBlock>
              <!-- Case : 주소 검색 및 입력 후 노출 -->
              <InputBlock
                :error="state.addressError"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="반환요청 장소 도로명 주소"
                    :disabled="true"
                    defaultValue="인천 서구 에코로 181"
                  />
                </InputBlockCell>
              </InputBlock>
              <InputBlock
                :error="state.addressError"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="반환요청 장소 상세 주소"
                    :disabled="true"
                    defaultValue="하나금융 로비"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- // Case : 주소 검색 및 입력 후 노출 -->
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

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/My_P08_p015.scss';
</style>

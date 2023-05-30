<script>
// LM_P01_l009
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicSelect,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicInput,
    NoticeText,
  },
  setup() {
    const layer = ref(null);

    const state = reactive({
      area001Error: false,
      area002Error: false,
      area003Error: false,
      addressError: false,
      supplyError: false,
      dedicatedError: false,
      buyError: false,
      leaseError: false,
    });

    return {
      layer,
      state,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <ModalPopup>
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>아파트 시세입력</PopupTitle>
        </ModalPopupHead>
      </template>

      <div>
        <section class="row-margin-block-small">
          <h3 class="text-title-1 row-margin-contents">지역정보</h3>

          <FormList>
            <FormListItem
              titleText="시/도/명"
              target="#LM_P01_l009_area001"
              :selectOnly="true"
            >
              <FormInvalid :error="state.area001Error">
                <InputBlock :error="state.area001Error">
                  <InputBlockCell :flexible="true">
                    <BasicSelect
                      :options="[
                        {
                          value: '1',
                          label: '서울특별시',
                        },
                        {
                          value: '2',
                          label: '경기도',
                        },
                        {
                          value: '3',
                          label: '부산광역시',
                        },
                        {
                          value: '4',
                          label: '대구광역시',
                        },
                        {
                          value: '5',
                          label: '인천광역시',
                        },
                        {
                          value: '6',
                          label: '광주광역시',
                        },
                        {
                          value: '7',
                          label: '대전광역시',
                        },
                        {
                          value: '8',
                          label: '울산광역시',
                        },
                        {
                          value: '9',
                          label: '세종특별자치시',
                        },
                        {
                          value: '10',
                          label: '강원도',
                        },
                        {
                          value: '11',
                          label: '충청북도',
                        },
                        {
                          value: '12',
                          label: '충청남도',
                        },
                        {
                          value: '13',
                          label: '전라북도',
                        },
                        {
                          value: '14',
                          label: '전라남도',
                        },
                        {
                          value: '15',
                          label: '경상북도',
                        },
                        {
                          value: '16',
                          label: '경상남도',
                        },
                        {
                          value: '17',
                          label: '제주특별자치도',
                        },
                      ]"
                      title="시/도/명 선택하기"
                      inputId="LM_P01_l009_area001"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="시/군/구/명"
              target="#LM_P01_l009_area002"
              :selectOnly="true"
              :disabled="true"
            >
              <FormInvalid :error="state.area002Error" :disabled="true">
                <InputBlock :error="state.area002Error" :disabled="true">
                  <InputBlockCell :flexible="true">
                    <BasicSelect
                      :options="[
                        {
                          value: '1',
                          label: '강남구',
                        },
                        {
                          value: '2',
                          label: '강동구',
                        },
                        {
                          value: '3',
                          label: '강북구',
                        },
                        {
                          value: '4',
                          label: '강서구',
                        },
                        {
                          value: '5',
                          label: '관악구',
                        },
                        {
                          value: '6',
                          label: '광진구',
                        },
                        {
                          value: '7',
                          label: '구로구',
                        },
                        {
                          value: '8',
                          label: '금천구',
                        },
                        {
                          value: '9',
                          label: '노원구',
                        },
                        {
                          value: '10',
                          label: '도봉구',
                        },
                        {
                          value: '11',
                          label: '동대문구',
                        },
                        {
                          value: '12',
                          label: '동작구',
                        },
                        {
                          value: '13',
                          label: '마포구',
                        },
                        {
                          value: '14',
                          label: '서대문구',
                        },
                        {
                          value: '15',
                          label: '서초구',
                        },
                        {
                          value: '16',
                          label: '성동구',
                        },
                        {
                          value: '17',
                          label: '성북구',
                        },
                      ]"
                      title="시/군/구/명 선택하기"
                      inputId="LM_P01_l009_area002"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="읍/면/동"
              target="#LM_P01_l009_area003"
              :selectOnly="true"
              :disabled="true"
            >
              <FormInvalid :error="state.area003Error" :disabled="true">
                <InputBlock :error="state.area003Error" :disabled="true">
                  <InputBlockCell :flexible="true">
                    <BasicSelect
                      :options="[
                        {
                          value: '1',
                          label: '미아동',
                        },
                        {
                          value: '2',
                          label: '번동',
                        },
                        {
                          value: '3',
                          label: '수유동',
                        },
                        {
                          value: '4',
                          label: '우이동',
                        },
                      ]"
                      title="읍/면/동 선택하기"
                      inputId="LM_P01_l009_area003"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </section>

        <section class="row-margin-block-small">
          <h3 class="text-title-1 row-margin-contents">아파트 정보</h3>

          <FormList>
            <FormListItem
              titleText="아파트 상세주소"
              target="#LM_P01_l009_address"
            >
              <FormInvalid :error="state.addressError">
                <InputBlock :error="state.addressError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="아파트 상세주소"
                      id="LM_P01_l009_address"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem titleText="공급면적" target="#LM_P01_l009_supply">
              <FormInvalid :error="state.supplyError">
                <InputBlock :error="state.supplyError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      align="right"
                      :useDelete="false"
                      pattern="\d*"
                      title="공급면적"
                      id="LM_P01_l009_supply"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3">㎡</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem titleText="전용면적" target="#LM_P01_l009_dedicated">
              <FormInvalid :error="state.dedicatedError">
                <InputBlock :error="state.dedicatedError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      align="right"
                      :useDelete="false"
                      pattern="\d*"
                      title="전용면적"
                      id="LM_P01_l009_dedicated"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3">㎡</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </section>

        <section class="row-margin-block-small">
          <h3 class="text-title-1 row-margin-contents">아파트 시세</h3>

          <FormList>
            <FormListItem
              titleText="매매가"
              titleOptionalText="(분양가, 감정가액)"
              target="#LM_P01_l009_buy"
            >
              <FormInvalid :error="state.buyError">
                <InputBlock :error="state.buyError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      align="right"
                      :useDelete="false"
                      pattern="\d*"
                      title="매매가(분양가, 감정가액)"
                      id="LM_P01_l009_buy"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3">만원</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="전세가"
              titleOptionalText="(상한가)"
              target="#LM_P01_l009_lease"
              :disabled="true"
            >
              <FormInvalid :error="state.leaseError" :disabled="true">
                <InputBlock :error="state.leaseError" :disabled="true">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      align="right"
                      :useDelete="false"
                      pattern="\d*"
                      title="전세가(상한가)"
                      id="LM_P01_l009_lease"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3">만원</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </section>
      </div>

      <NoticeText :classNames="{ wrap: 'row-margin-block-small' }">
        아파트 검색이 되지 않는 경우는 전화 상담을 통해 대출 신청을
        도와드립니다. (1599-7942)
      </NoticeText>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular" :line="true" theme="quaternary">
              초기화
            </BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton size="regular">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<script>
// Agent_P09_l001 수정화면
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import SimpleInput from '@/components/ui/form/SimpleInput.vue';
import SimpleDatepicker from '@/components/ui/form/SimpleDatepicker.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    FormInvalid,
    FormInvalidMessage,
    SimpleInput,
    SimpleDatepicker,
  },
  setup() {
    const state = reactive({
      nameError: false,
      priceError: false,
      startDateError: false,
      endDateError: false,
      branchInChargeError: false,
      personInChargeNameError: false,
      stockNumberError: false,
      personInChargeNumberError: false,
      mailboxNumberError: false,
      startDate: '2023.01.01',
      endDate: '2023.01.01',
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
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <ModalPopup size="large">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>SGI 가입정보</PopupTitle>
        </ModalPopupHead>
      </template>

      <div :class="[$style['basic-table'], $style['basic-table--secondary']]">
        <table>
          <colgroup>
            <col style="width: 160px" />
            <col />
            <col style="width: 160px" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th class="align-left">제휴사 주문번호</th>
              <td class="align-left">12345@678901</td>
              <th class="align-left">상담번호</th>
              <td class="align-left">C12345678901234</td>
            </tr>
            <tr>
              <th class="align-left">보험가입자명</th>
              <td class="align-left">
                <FormInvalid :error="state.nameError">
                  <SimpleInput
                    :error="state.nameError"
                    title="고객명"
                    defaultValue="홍길동"
                  />
                  <FormInvalidMessage>Error Message</FormInvalidMessage>
                </FormInvalid>
              </td>
              <th class="align-left">가입금액</th>
              <td class="align-left">
                <FormInvalid :error="state.priceError">
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1">
                      <SimpleInput
                        :error="state.priceError"
                        title="가입금액"
                        align="right"
                        defaultValue="2,000,000"
                      />
                    </div>
                    <div class="flex-box__cell">
                      <div class="text-body-3">원</div>
                    </div>
                  </div>
                  <FormInvalidMessage>Error Message</FormInvalidMessage>
                </FormInvalid>
              </td>
            </tr>
            <tr>
              <th class="align-left">시작일</th>
              <td class="align-left">
                <FormInvalid :error="state.startDateError">
                  <SimpleDatepicker
                    :error="state.startDateError"
                    title="조회기간 시작 날짜"
                    :max="state.endDate"
                    v-model="state.startDate"
                  />
                  <FormInvalidMessage>Error Message</FormInvalidMessage>
                </FormInvalid>
              </td>
              <th class="align-left">종료일</th>
              <td class="align-left">
                <FormInvalid :error="state.endDateError">
                  <SimpleDatepicker
                    :error="state.endDateError"
                    title="조회기간 종료 날짜"
                    :min="state.startDate"
                    v-model="state.endDate"
                  />
                  <FormInvalidMessage>Error Message</FormInvalidMessage>
                </FormInvalid>
              </td>
            </tr>
            <tr>
              <th class="align-left">SGI담당지점</th>
              <td class="align-left">
                <FormInvalid :error="state.branchInChargeError">
                  <SimpleInput
                    :error="state.branchInChargeError"
                    title="SGI담당지점"
                    defaultValue="강남지점"
                  />
                  <FormInvalidMessage>Error Message</FormInvalidMessage>
                </FormInvalid>
              </td>
              <th class="align-left">SGI담당자명</th>
              <td class="align-left">
                <FormInvalid :error="state.personInChargeNameError">
                  <SimpleInput
                    :error="state.personInChargeNameError"
                    title="SGI담당자명"
                    defaultValue="김하나"
                  />
                  <FormInvalidMessage>Error Message</FormInvalidMessage>
                </FormInvalid>
              </td>
            </tr>
            <tr>
              <th class="align-left">SGI증권번호</th>
              <td class="align-left">
                <FormInvalid :error="state.stockNumberError">
                  <SimpleInput
                    :error="state.stockNumberError"
                    title="SGI증권번호"
                    defaultValue="123456789012345"
                  />
                  <FormInvalidMessage>Error Message</FormInvalidMessage>
                </FormInvalid>
              </td>
              <th class="align-left">SGI담당자번호</th>
              <td class="align-left">
                <FormInvalid :error="state.personInChargeNumberError">
                  <SimpleInput
                    :error="state.personInChargeNumberError"
                    title="SGI담당자번호"
                    defaultValue="1234-5678-9012"
                  />
                  <FormInvalidMessage>Error Message</FormInvalidMessage>
                </FormInvalid>
              </td>
            </tr>
            <tr>
              <th class="align-left">사서함번호(전)</th>
              <td class="align-left">
                <FormInvalid :error="state.mailboxNumberError">
                  <SimpleInput
                    :error="state.mailboxNumberError"
                    title="사서함번호(전)"
                    defaultValue="123456789012"
                  />
                  <FormInvalidMessage>Error Message</FormInvalidMessage>
                </FormInvalid>
              </td>
              <th class="align-left">사서함번호(후)</th>
              <td class="align-left">123456789012</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ButtonList
        :wrap="true"
        :col="5"
        align="center"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <BasicButton size="regular">저장</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/agent/Agent_P09_l001_form.scss';
</style>

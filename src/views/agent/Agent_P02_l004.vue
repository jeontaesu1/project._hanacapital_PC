<script>
// Agent_P02_l004
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import SimpleInput from '@/components/ui/form/SimpleInput.vue';
import SimpleSelect from '@/components/ui/form/SimpleSelect.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    SimpleInput,
    SimpleSelect,
  },
  setup() {
    const layer = ref(null);

    return {
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
          <PopupTitle>본인확인(본의명의 휴대폰소지자)</PopupTitle>
        </ModalPopupHead>
      </template>

      <div class="container">
        <div class="title">고객정보</div>
        <table class="table-type-01">
          <colgroup>
            <col width="15%" />
            <col width="35%" />
            <col width="15%" />
            <col width="35%" />
          </colgroup>
          <tbody>
            <tr>
              <td class="title">AG명</td>
              <td><input type="text" /></td>
              <td class="title">고객명</td>
              <td><input type="text" /></td>
            </tr>
          </tbody>
        </table>
        <div class="title">통신사선택</div>
        <table class="table-type-01">
          <colgroup>
            <col width="15%" />
            <col width="85%" />
          </colgroup>
          <tbody>
            <tr>
              <td class="title">본인확인</td>
              <td>
                <div class="flex-container jcfs">
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <SimpleSelect
                        :options="[
                          {
                            value: '1',
                            label: 'SKT',
                          },
                        ]"
                        title="조회기간"
                        defaultValue="1"
                        :classNames="{ wrap: 'input-width-regular' }"
                      />
                    </div>
                    <div class="flex-box__cell">
                      <SimpleInput :classNames="{ wrap: 'input-width-wide' }" />
                    </div>
                  </div>
                  <button class="btn btn-s03">SMS발송</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="title">스크립트</div>
        <table class="table-type-01">
          <colgroup>
            <col width="15%" />
            <col width="85%" />
          </colgroup>
          <tbody>
            <tr>
              <td class="title">본인확인</td>
              <td class="txt-left">
                본인명의 핸드폰이 맞으신가요? 제가 지금 손님 핸드폰으로 보내드린
                인증번호를 말씀해 주시겠습니까? 주민번호 앞 7자리 : 주민번호 앞
              </td>
            </tr>
          </tbody>
        </table>
        <div class="title">인증번호 확인</div>
        <table class="table-type-01">
          <colgroup>
            <col width="15%" />
            <col width="85%" />
          </colgroup>
          <tbody>
            <tr>
              <td class="title">본인확인</td>
              <td>
                <div class="flex-container jcfs">
                  <input type="text" class="w30p" />
                  <button class="btn btn-s03">인증확인</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="title">손님상담</div>
        <table class="table-type-01">
          <colgroup>
            <col width="15%" />
            <col width="85%" />
          </colgroup>
          <tbody>
            <tr>
              <td class="title">1차상담업로드</td>
              <td>
                <button class="btn btn-s03">손님상담</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="title">
          ARS 전송

          <div class="btn-container">
            <button class="btn btn-primary">ARS</button>
          </div>
        </div>
        <table class="table-type-01">
          <colgroup>
            <col width="15%" />
            <col width="85%" />
          </colgroup>
          <tbody>
            <tr>
              <td class="title">ARS전송</td>
              <td class="txt-left">
                기타 계약사항 안내는 ARS로 진행될 예정입니다. 전화를 끊으시고
                “02-1800-9540” 번호로 전화오면, 끝까지 들어주시고 전화가
                자동으로 끊겨야 완료 됩니다.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/Agent_P02_l004.scss';
</style>

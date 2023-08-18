<script>
// Agent_P03_l002
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
    const byte = ref(0);
    const textarea = ref('');

    function byteLength(s, b, i, c) {
      for (
        b = i = 0;
        (c = s.charCodeAt(i++));
        b += c >> 11 ? 3 : c >> 7 ? 2 : 1
      );
      byte.value = b;
    }

    return {
      layer,
      byte,
      textarea,
      byteLength,
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
          <PopupTitle>신용정보 녹취 동의</PopupTitle>
        </ModalPopupHead>
      </template>

      <div class="container">
        <table class="table-type-01">
          <colgroup>
            <col width="15%" />
            <col width="35%" />
            <col width="15%" />
            <col width="35%" />
            <col />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td class="title">주민등록번호</td>
              <td>
                <input type="text" />
              </td>
              <td class="title">성명</td>
              <td>
                <input type="text" value="김하나" />
              </td>
            </tr>
          </tbody>
        </table>

        <div class="title">녹취 동의</div>

        <table class="table-type-01">
          <colgroup>
            <col width="15%" />
            <col width="85%" />
          </colgroup>
          <tbody>
            <tr>
              <td class="title">녹취 동의 방식</td>
              <td>
                <div class="flex-container jcfs">
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="P03_l002_01" checked />
                      <span class="small"></span>
                      본인명의 휴대폰 녹취동의
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="P03_l002_01" />
                      <span class="small"></span>
                      신분증 본인확인 녹취동의
                    </label>
                  </div>
                </div>
              </td>
            </tr>
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
                  <button class="btn btn-s03">인증번호요청</button>
                  <input type="text" class="w20p" />
                  <button class="btn btn-s03">인증확인</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="title">녹취 내용</div>

        <table class="table-type-01">
          <colgroup>
            <col width="15%" />
            <col width="85%" />
          </colgroup>
          <tbody>
            <tr>
              <td class="title">신용정보 사전동의<br />녹취파일 등록</td>
              <td>
                <div class="flex-container jcfs">
                  <input
                    type="text"
                    class="w90p"
                    v-model="textarea"
                    @keyup="byteLength(textarea)"
                  />
                  <button class="btn btn-s03">찾아보기</button>
                </div>
                <div class="flex-container jcsb w90p">
                  <p class="explan">
                    손님 상담 녹취 파일은 .au .wav 파일만 가능합니다.
                  </p>
                  <span class="explan"
                    ><strong>{{ byte }}</strong> / 150</span
                  >
                </div>
              </td>
            </tr>
            <tr>
              <td class="title">사전신용정보조회<br />동의 녹취 스크립트</td>
              <td>
                <div class="scroll-container mxh-300">
                  안녕하세요. 하나캐피탈 할부금융제휴법인 신한프라자
                  XXX입니다.<br />
                  상담을 위해 본인확인 후 개인신용정보조회 동의 절차를
                  진행하겠습니다.<br />
                  ■ 본인확인<br />
                  먼저, 성함과 생년월일을 말씀해주세요.<br />
                  본인명의 휴대폰이 맞으신가요? 네. 감사합니다.<br />
                  통신사 및 휴대폰번호를 말씀해주시겠습니까? 네. 감사합니다.<br />
                  지금 보내드린 인증번호를 말씀해주시겠습니까?<br />
                  네. 본인확인이 완료되었습니다.<br />
                  ■ 개인신용정보조회 동의 스크립트<br />
                  상담을 위해 당사는 고객님의 신용정보와 고유식별정보를
                  수집,이용,조회하고 신용정보회사에게 제공할 수 있습니다. 단순
                  상담만으로는 신용등급에 영향이 없습니다. 기타 자세한 사항은
                  하나캐피탈 홈페이지에서 확인바랍니다.<br />
                  1.고객님의 개인신용정보 수집/이용/조회/제공에 동의하시나요?<br />
                  2.고객님의 고유식별정보 수집/이용/조회/제공에 동의하시나요?<br />
                  네. 감사합니다.고객님의 개인(신용)정보 동의절차가
                  완료되었습니다.<br />
                  1.고객님의 개인신용정보 수집/이용/조회/제공에 동의하시나요?<br />
                  2.고객님의 고유식별정보 수집/이용/조회/제공에 동의하시나요?<br />
                  네. 감사합니다.고객님의 개인(신용)정보 동의절차가
                  완료되었습니다.<br />
                  1.고객님의 개인신용정보 수집/이용/조회/제공에 동의하시나요?<br />
                  2.고객님의 고유식별정보 수집/이용/조회/제공에 동의하시나요?<br />
                  네. 감사합니다.고객님의 개인(신용)정보 동의절차가
                  완료되었습니다.<br />
                  1.고객님의 개인신용정보 수집/이용/조회/제공에 동의하시나요?<br />
                  2.고객님의 고유식별정보 수집/이용/조회/제공에 동의하시나요?<br />
                  네. 감사합니다.고객님의 개인(신용)정보 동의절차가
                  완료되었습니다.<br />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/Agent_P03_l002.scss';
</style>

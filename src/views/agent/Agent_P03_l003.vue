<script>
// Agent_P03_l003
import {reactive, ref} from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import SimpleDatepicker from "@/components/ui/form/SimpleDatepicker.vue";

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
    SimpleDatepicker,
  },
  setup() {
    const layer = ref(null);
    const byte = ref(0);
    const textarea = ref(
      '하나캐피탈 채무 승계를 위한 서비스입니다.\n채무 승계 확약을 위하여 아래의 URL로 접속하주십시오.\nhttps://m.hanacapital.co.kr/partnet/itsc/onlCert.hnc\n자세한 문의사항은 1800-1110으로 연락바랍니다.\n대단히 감사합니다.'
    );
    const title = ref('[하나캐피탈 할부 상담 안내]');

    function byteLength(s, b, i, c) {
      for (
        b = i = 0;
        (c = s.charCodeAt(i++));
        b += c >> 11 ? 3 : c >> 7 ? 2 : 1
      );
      byte.value = b;
    }

    byteLength(textarea.value);

    const state = reactive({
      searchMinDate: '2023.04.21',
      searchMaxDate: '2023.04.21',
    });

    return {
      layer,
      byte,
      textarea,
      title,
      state,
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
          <PopupTitle>하나캐피탈 채무승계확약 URL발송</PopupTitle>
        </ModalPopupHead>
      </template>

      <div class="container">
        <div class="title">발신자정보</div>
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
              <td class="title">발신자</td>
              <td>
                <input type="text" disabled />
              </td>
              <td class="title">대표전화</td>
              <td>
                <input type="text" value="김하나" />
              </td>
            </tr>
            <tr>
              <td class="title">부서명</td>
              <td colspan="3">
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>

        <div class="title">수신처정보</div>
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
              <td class="title">수신인</td>
              <td>
                <input type="text" />
              </td>
              <td class="title">생년월일</td>
              <td>
                <SimpleDatepicker
                  title="조회기간 시작 날짜"
                  :max="state.searchMaxDate"
                  v-model="state.searchMinDate"
                />
              </td>
            </tr>
            <tr>
              <td class="title">전화번호</td>
              <td colspan="3">
                <input type="tel" class="w25p" />
              </td>
            </tr>
          </tbody>
        </table>

        <div class="title">발송정보</div>

        <table class="table-type-01">
          <colgroup>
            <col width="15%" />
            <col width="85%" />
          </colgroup>
          <tbody>
            <tr>
              <td class="title">동의 방식</td>
              <td>
                <div class="flex-container jcfs">
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="P03_l003_01" checked />
                      <span class="small"></span>
                      URL 동의
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="P03_l003_01" />
                      <span class="small"></span>
                      ARS 동의
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="title">제목</td>
              <td><input type="text" v-model="title" /></td>
            </tr>
            <tr>
              <td class="title">사전신용정보조회<br />동의 녹취 스크립트</td>
              <td>
                <textarea
                  class="textarea"
                  v-model="textarea"
                  @keyup="byteLength(textarea)"
                ></textarea>
                <div class="flex-container jcfe cDisabled">
                  <strong>{{ byte }}</strong
                  >Byte
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          :col="5"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular" :classNames="{ wrap: 'btn-send' }">
              전송하기
            </BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/Agent_P03_l003.scss';
</style>

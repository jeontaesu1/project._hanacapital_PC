<script>
// Agent_P02_l008
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import SimpleDatepicker from '@/components/ui/form/SimpleDatepicker.vue';
import SimpleInput from '@/components/ui/form/SimpleInput.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    SimpleDatepicker,
    SimpleInput,
    ButtonList,
    ButtonListItem,
    BasicButton,
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
          <PopupTitle>민원세부정보</PopupTitle>
        </ModalPopupHead>
      </template>

      <section>
        <ButtonList align="right" :classNames="{ wrap: 'row-margin-contents' }">
          <ButtonListItem>
            <BasicButton size="small" :line="true">접수</BasicButton>
          </ButtonListItem>
          <ButtonListItem :class="$style['accept-btn']">
            <BasicButton size="small" :line="true">처리중</BasicButton>
          </ButtonListItem>
          <ButtonListItem :class="$style['accept-btn']">
            <BasicButton size="small">처리완료</BasicButton>
          </ButtonListItem>
        </ButtonList>

        <div :class="[$style['basic-table'], $style['basic-table--secondary']]">
          <table>
            <colgroup>
              <col style="width: 160px" />
              <col />
              <col style="width: 160px" />
              <col />
              <col style="width: 160px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th class="align-left">성명(상호)</th>
                <td class="align-left">김하나</td>
                <th class="align-left">실행일자</th>
                <td class="align-left">2022.07.14</td>
                <th class="align-left">발생일</th>
                <td class="align-left">2022.08.03</td>
              </tr>
              <tr>
                <th class="align-left">대표자명</th>
                <td class="align-left"></td>
                <th class="align-left">품목</th>
                <td class="align-left">LED 전광판</td>
                <th class="align-left">이송일</th>
                <td class="align-left">2022.08.03</td>
              </tr>
              <tr>
                <th class="align-left">형태구분</th>
                <td class="align-left">개인</td>
                <th class="align-left">할부원금</th>
                <td class="align-left">2,500,000</td>
                <th class="align-left">접수일</th>
                <td class="align-left">
                  <!-- Case : 접수상태 -->
                  Data
                  <!--// Case : 접수상태 -->
                </td>
              </tr>
              <tr>
                <th class="align-left">주민등록번호</th>
                <td class="align-left">123456-1******</td>
                <th class="align-left">원금잔액</th>
                <td class="align-left">2,500,000</td>
                <th class="align-left">처리완료예정일</th>
                <td class="align-left">
                  <SimpleDatepicker
                    title="처리 완료일"
                    id="Agent_P02_l008_date"
                    buttonId="Agent_P02_l008_date_Button"
                  />
                </td>
              </tr>
              <tr>
                <th class="align-left">사업자번호</th>
                <td class="align-left"></td>
                <th class="align-left">잔여/할부기간</th>
                <td class="align-left">30/30</td>
                <th class="align-left">처리완료일</th>
                <td class="align-left">
                  <!-- Case : 처리완료상태 -->
                  Data
                  <!-- // Case : 처리완료상태 -->
                </td>
              </tr>
              <tr>
                <th class="align-left">담당자</th>
                <td class="align-left">김용포</td>
                <th class="align-left">민원유형</th>
                <td class="align-left" colspan="3">신용도 영향</td>
              </tr>
              <tr>
                <th class="align-left">민원내용</th>
                <td colspan="5" class="align-left">신한프라자</td>
              </tr>
              <tr>
                <th class="align-left">처래예정내용</th>
                <td colspan="5" class="align-left">
                  <SimpleInput placeholder="예정내용" />
                </td>
              </tr>
              <tr>
                <th class="align-left">처리내용</th>
                <td colspan="5" class="align-left">
                  <SimpleInput placeholder="확인 결과" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/agent/Agent_P02_l008.scss';
</style>

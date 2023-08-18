<script>
// Agent_P00_l011
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
  },
  setup() {
    const layer = ref(null);

    const item1 = ref([
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
    ]);

    const item2 = ref([
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
    ]);

    const item3 = ref([
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
    ]);

    const item4 = ref([
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널S36_기타채널S36_기타채널S36_기타채널S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
      {
        name: 'S36_기타채널',
        checked: false,
      },
    ]);
    const isType = ref(1);

    function tableChange(n, i) {
      isType.value = n + 1;
      switch (n) {
        case 1:
          item1.value.forEach((ele) => {
            ele.checked = false;
          });
          item1.value[i].checked = true;
          break;
        case 2:
          console.log(item2.value);
          item2.value.forEach((ele) => {
            ele.checked = false;
          });
          item2.value[i].checked = true;
          break;
        case 3:
          item3.value.forEach((ele) => {
            ele.checked = false;
          });
          item3.value[i].checked = true;
          break;
        case 4:
          item4.value.forEach((ele) => {
            ele.checked = false;
          });
          item4.value[i].checked = true;
          break;
      }
    }

    return {
      layer,
      item1,
      item2,
      item3,
      item4,
      isType,
      tableChange,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <ModalPopup size="regular">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>품목 선택</PopupTitle>
        </ModalPopupHead>
      </template>

      <div class="container">
        <div class="flex-container aifs no-gap fw bdrbt jcfs">
          <table class="table-type-04 w100p bt">
            <colgroup>
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
            </colgroup>
            <thead>
              <tr>
                <th>품목 중분류</th>
                <th>품목 소분류</th>
                <th>품목 상세분류</th>
                <th>품목명</th>
              </tr>
            </thead>
          </table>
          <div class="scroll-container mxh-550 w25p1 bdrrt">
            <table class="table-type-05 body w100p cur-p">
              <tbody>
                <tr
                  :class="{ on: t.checked === true }"
                  v-for="(t, i) in item1"
                  :key="i"
                >
                  <td class="txt-center" @click="tableChange(1, i)">
                    <div>
                      {{ t.name }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="scroll-container mxh-550 w25p bdrrt" v-if="isType > 1">
            <table class="table-type-05 body w100p cur-p">
              <tbody>
                <tr
                  :class="{ on: t.checked === true }"
                  v-for="(t, i) in item2"
                  :key="i"
                >
                  <td class="txt-center" @click="tableChange(2, i)">
                    <div>
                      {{ t.name }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="scroll-container mxh-550 w25p bdrrt" v-if="isType > 2">
            <table class="table-type-05 body w100p cur-p">
              <tbody>
                <tr
                  :class="{ on: t.checked === true }"
                  v-for="(t, i) in item3"
                  :key="i"
                >
                  <td class="txt-center" @click="tableChange(3, i)">
                    <div>
                      {{ t.name }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="scroll-container mxh-550 w25p-1" v-if="isType > 3">
            <table class="table-type-05 body w100p cur-p">
              <tbody>
                <tr
                  :class="{ on: t.checked === true }"
                  v-for="(t, i) in item4"
                  :key="i"
                >
                  <td class="txt-center" @click="tableChange(4, i)">
                    <div>
                      {{ t.name }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/Agent_P00_l011.scss';
</style>

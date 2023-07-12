<script>
// LM_P01_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import SelectTable from '@/components/ui/table/SelectTable.vue';
import SelectTableRow from '@/components/ui/table/SelectTableRow.vue';
import SelectTableRadioCell from '@/components/ui/table/SelectTableRadioCell.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

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
    SelectTable,
    SelectTableRow,
    SelectTableRadioCell,
    NoticeText,
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
          <PopupTitle>한도 · 금리 확인</PopupTitle>
        </ModalPopupHead>
      </template>

      <SelectTable :maxRow="8">
        <template v-slot:colgroup>
          <col style="width: 80px" />
          <col />
          <col />
          <col />
          <col />
          <col />
        </template>

        <template v-slot:head>
          <tr>
            <th>선택</th>
            <th>상품명</th>
            <th>대출한도</th>
            <th>금리</th>
            <th>신청대출기간</th>
            <th>최대대출기간</th>
          </tr>
        </template>

        <SelectTableRow actionType="select">
          <SelectTableRadioCell />
          <td>아파트론</td>
          <td>20,000 만원</td>
          <td>14.20%</td>
          <td>48개월</td>
          <td>60개월</td>
        </SelectTableRow>
        <SelectTableRow actionType="select" :initialActive="true">
          <SelectTableRadioCell />
          <td>아파트론</td>
          <td>20,000 만원</td>
          <td>14.20%</td>
          <td>48개월</td>
          <td>60개월</td>
        </SelectTableRow>
        <SelectTableRow actionType="select">
          <SelectTableRadioCell />
          <td>아파트론</td>
          <td>20,000 만원</td>
          <td>14.20%</td>
          <td>48개월</td>
          <td>60개월</td>
        </SelectTableRow>
        <SelectTableRow actionType="select">
          <SelectTableRadioCell />
          <td>아파트론</td>
          <td>20,000 만원</td>
          <td>14.20%</td>
          <td>48개월</td>
          <td>60개월</td>
        </SelectTableRow>
        <SelectTableRow actionType="select">
          <SelectTableRadioCell />
          <td>아파트론</td>
          <td>20,000 만원</td>
          <td>14.20%</td>
          <td>48개월</td>
          <td>60개월</td>
        </SelectTableRow>
        <SelectTableRow actionType="select">
          <SelectTableRadioCell />
          <td>아파트론</td>
          <td>20,000 만원</td>
          <td>14.20%</td>
          <td>48개월</td>
          <td>60개월</td>
        </SelectTableRow>
        <SelectTableRow actionType="select">
          <SelectTableRadioCell />
          <td>아파트론</td>
          <td>20,000 만원</td>
          <td>14.20%</td>
          <td>48개월</td>
          <td>60개월</td>
        </SelectTableRow>
        <SelectTableRow actionType="select">
          <SelectTableRadioCell />
          <td>아파트론</td>
          <td>20,000 만원</td>
          <td>14.20%</td>
          <td>48개월</td>
          <td>60개월</td>
        </SelectTableRow>
      </SelectTable>

      <NoticeText :classNames="{ wrap: 'row-margin-contents-small' }">
        해당 금리는 신청대출기간 기준이며 대출기간 변경 시, 변경될 수 있습니다.
      </NoticeText>

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
            <BasicButton size="regular">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<script>
// PF_P07_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

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
    <ModalPopup>
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>
            주민 등록법 제21조(벌칙)<br />
            제 2항 9호(시행일 2006.09.24)
          </PopupTitle>
        </ModalPopupHead>
      </template>

      <section>
        <div class="row-margin-item-group">
          2006년 9월 25일부터 개정된 주민 등록법에 의해 타인의 주민등록번호를
          도용하여 온라인 회원 가입을 하는 등 아래와 같이 다른 사람의
          주민등록번호를 부정사용하는 경우 3년 이하의 징역 또는 1천만원 이하의
          벌금이 부과될 수 있습니다.
        </div>
        <div class="row-margin-item-group">
          - 다른 사람의 주민등록번호를 도용하여 인터넷 회원으로 가입하는 행위<br />
          - 다른 사람의 주민등록번호를 재산상의 이익을 위하여 부정 사용하는
          행위<br />
          - 다른 사람의 주민등록번호를 게임등의 목적으로 사고 파는 행위<br />
          - 다른 사람의 주민등록번호를 수집하여 유출시키는 행위<br />
          - 수집 목적 달성 후에도 주민등록번호를 파기하지 않고 보관하는 행위
        </div>
        <div class="row-margin-item-group">
          타인의 주민등록번호 도용 및 부정적 사용은 범죄행위이므로, 개정
          주민등록법 확인 후 불이익이 발생하지 않도록 주의 부탁드립니다. 또한,
          타인의 주민등록번호를 도용하여 회원가입 및 예약을 하시는 분들은 지금
          즉시 타인의 명의도용을 중단하여 주시기 바랍니다.
        </div>
      </section>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
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

<script>
// IF_P03_l003
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BankLogo from '@/components/ui/imageData/BankLogo.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupSubTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BankLogo,
    NoticeText,
    BasicBox,
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
          <PopupTitle>중도상환 입금 예약 신청</PopupTitle>
          <template v-slot:sub>
            <PopupSubTitle>
              가상계좌입금으로 중도상환신청을 하시겠습니까?
            </PopupSubTitle>
          </template>
        </ModalPopupHead>
      </template>

      <div>
        <KeyValue margin="regular">
          <KeyValueItem>
            <KeyValueTitle>계약상품명</KeyValueTitle>
            <KeyValueText>운영자금대출</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>입금예정금액</KeyValueTitle>
            <KeyValueText>7,485,870 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>입금예정일자</KeyValueTitle>
            <KeyValueText>2021.03.04</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <section class="row-margin-item-group">
          <h3
            class="text-body-1 font-weight-regular color-gray row-margin-item-group"
          >
            입금가상계좌
          </h3>
          <BasicBox theme="tertiary">
            <KeyValue align="left">
              <KeyValueItem>
                <KeyValueTitle>
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <BankLogo size="small" code="004" />
                    </div>
                    <div class="flex-box__cell flex-box__cell--mini">국민</div>
                  </div>
                </KeyValueTitle>
                <KeyValueText> 123-456-78901234 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <BankLogo size="small" code="011" />
                    </div>
                    <div class="flex-box__cell flex-box__cell--mini">농협</div>
                  </div>
                </KeyValueTitle>
                <KeyValueText> 123-456-78901234 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <BankLogo size="small" code="020" />
                    </div>
                    <div class="flex-box__cell flex-box__cell--mini">우리</div>
                  </div>
                </KeyValueTitle>
                <KeyValueText> 123-456-78901234 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <BankLogo size="small" code="081" />
                    </div>
                    <div class="flex-box__cell flex-box__cell--mini">하나</div>
                  </div>
                </KeyValueTitle>
                <KeyValueText> 123-456-78901234 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <BankLogo size="small" code="088" />
                    </div>
                    <div class="flex-box__cell flex-box__cell--mini">신한</div>
                  </div>
                </KeyValueTitle>
                <KeyValueText>123-456-78901234</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <KeyValue>
          <KeyValueItem>
            <KeyValueTitle>예금주</KeyValueTitle>
            <KeyValueText>하나상사(하나캐피탈)</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <NoticeText :classNames="{ wrap: 'row-margin-contents' }"
          >가상계좌 입금 후 반드시 고객센터(1800-1110)로
          연락바랍니다.</NoticeText
        >
      </div>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular" :line="true" theme="quaternary"
              >취소</BasicButton
            >
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton size="regular">신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

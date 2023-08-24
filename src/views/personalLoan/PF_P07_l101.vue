<script>
// PF_P07_l101
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconDownloadSmall from '@/assets/images/icon/download-small.svg?component';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    TextButton,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IconDownloadSmall,
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
          <PopupTitle>약관보기</PopupTitle>
        </ModalPopupHead>
      </template>

      <div>
        <section class="row-margin-container-medium">
          <div class="flex-box row-margin-item-group">
            <div class="flex-box__cell flex-1">
              <h3 class="text-body-1">대출거래약정서</h3>
            </div>
            <div class="flex-box__cell">
              <TextButton
                textSize="regular"
                theme="secondary"
                :underline="true"
                tagName="a"
                href="/foo/bar.pdf"
                download
              >
                <template v-slot:leftIcon>
                  <IconDownloadSmall />
                </template>
                약관상세 다운로드
              </TextButton>
            </div>
          </div>
          <p class="text-body-3 color-gray-tertiary font-weight-regular">
            본인은 하나캐피탈 주식회사(이하 “캐피탈”이라 합니다.)와 아래의
            조건에 따라 여신거래를 함께 함에 있어 “여신거래기본약관(가계용)“,
            “인터넷 서비스 이용약관“이 적용됨을 승인하고 다음 각 조항을
            확약합니다.
          </p>
        </section>

        <section class="row-margin-container-medium">
          <div class="flex-box row-margin-item-group">
            <div class="flex-box__cell flex-1">
              <h3 class="text-body-1">근질권설정계약서</h3>
            </div>
            <div class="flex-box__cell">
              <TextButton
                textSize="regular"
                theme="secondary"
                :underline="true"
                tagName="a"
                href="/foo/bar.pdf"
                download
              >
                <template v-slot:leftIcon>
                  <IconDownloadSmall />
                </template>
                약관상세 다운로드
              </TextButton>
            </div>
          </div>
          <p class="text-body-3 color-gray-tertiary font-weight-regular">
            근질권설정자(이하 “설정자”라고 합니다.)는 여신거래 기본 약관을
            승인하고, 이 계약서 끝부분 “담보목적물 목록”란에 기재한 채권, 물건,
            증권 등 (이하 “담보목적물“이라 합니다.)에 다음 내용으로 근질권을
            설정하고, 채권자 앞으로 그 담보 목적물의 인도 절차를 마쳤습니다.
          </p>
        </section>

        <section class="row-margin-container-medium">
          <div class="flex-box row-margin-item-group">
            <div class="flex-box__cell flex-1">
              <h3 class="text-body-1">여신거래기본약관</h3>
            </div>
            <div class="flex-box__cell">
              <TextButton
                textSize="regular"
                theme="secondary"
                :underline="true"
                tagName="a"
                href="/foo/bar.pdf"
                download
              >
                <template v-slot:leftIcon>
                  <IconDownloadSmall />
                </template>
                약관상세 다운로드
              </TextButton>
            </div>
          </div>
          <p class="text-body-3 color-gray-tertiary font-weight-regular">
            이 여신거래기본약관은 하나캐피탈주식회사와 거래처(이하 “채무자“라
            합니다.)와의 상호신뢰를 바탕으로 여신거래의 원활하고 공정한 처리를
            위하여 만들어진 것입니다.<br />
            회사는 이 약관을 회사 홈페이지에 게시하고 채무자는 영업시간 중
            언제든지 열람하거나 출력 할 수 있습니다.
          </p>
        </section>

        <section class="row-margin-container-medium">
          <div class="flex-box row-margin-item-group">
            <div class="flex-box__cell flex-1">
              <h3 class="text-body-1">온라인서비스 이용약관</h3>
            </div>
            <div class="flex-box__cell">
              <TextButton
                textSize="regular"
                theme="secondary"
                :underline="true"
                tagName="a"
                href="/foo/bar.pdf"
                download
              >
                <template v-slot:leftIcon>
                  <IconDownloadSmall />
                </template>
                약관상세 다운로드
              </TextButton>
            </div>
          </div>
          <p class="text-body-3 color-gray-tertiary font-weight-regular">
            이 약관은 하나캐피탈주식회사(이하 “회사“라 한다)가 운영하는
            온라인서비스(이하 “서비스”라 한다)를 이용함에 있어 이용자의
            권리·의무 및 책임사항과 서비스 이용에 대한 기타 필요한 사항을
            규정함을 목적으로 합니다.
          </p>
        </section>
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
            <BasicButton size="regular">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

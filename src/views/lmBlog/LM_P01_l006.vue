<script>
// LM_P01_l006
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

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
    <ModalPopup size="regular">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>등기부등본 확인</PopupTitle>
        </ModalPopupHead>
      </template>

      <NoticeText :classNames="{ wrap: 'color-red row-margin-contents-group' }">
        3번의 (근)저당권 및 전세권 등 (을구)란의 채권최고액을 확인하시고 부동산
        설정금액란에 설정금액을 입력 바랍니다.<br />
        근저당권 설정이 2건 이상인 경우, 합산 금액을 입력바랍니다.<br />
        하단의 확인 버튼을 누르시면 설정금액 입력란이 나오게 됩니다.
      </NoticeText>

      <BasicBox>
        <p class="text-body-3 color-green row-margin-item">집합건물</p>
        <p class="text-body-1">
          부산광역시 동구 범일동 830-100 삼익아파트 제15층 제1501호
        </p>
      </BasicBox>

      <div class="row-margin-container-medium">
        <section class="row-margin-container-medium">
          <h3 class="text-body-1 row-margin-item-group">
            1. 소유지분현황(갑구)
          </h3>

          <div :class="$style['basic-table']">
            <table>
              <colgroup>
                <col style="width: 87px" />
                <col style="width: 91px" />
                <col style="width: 84px" />
                <col />
                <col style="width: 80px" />
              </colgroup>
              <thead>
                <tr>
                  <th>동거명의인</th>
                  <th>주민번호</th>
                  <th>최종지분</th>
                  <th>주소</th>
                  <th>순위번호</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>박지혜 (공유자)</td>
                  <td>920709<br />-*******</td>
                  <td>2분의 1</td>
                  <td>
                    부산광역시 남구 진남로198번길 9-1, 101동 901호<br />
                    (현대아파트)
                  </td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>박지혜 (공유자)</td>
                  <td>920709<br />-*******</td>
                  <td>2분의 1</td>
                  <td>
                    부산광역시 남구 진남로198번길 9-1, 101동 901호<br />
                    (현대아파트)
                  </td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-body-1 row-margin-item-group">
            2. 소유지분을 제외한 소유권에 관한 사항(갑구)
          </h3>

          <div :class="$style['basic-table']">
            <table>
              <colgroup>
                <col style="width: 80px" />
                <col style="width: 91px" />
                <col style="width: 132px" />
                <col />
                <col style="width: 93px" />
              </colgroup>
              <thead>
                <tr>
                  <th>순위번호</th>
                  <th>등기목적</th>
                  <th>접수정보</th>
                  <th>주요등기사항</th>
                  <th>대상소유자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3</td>
                  <td>근저당권<br />설정</td>
                  <td>2021년2월5일 제4845호</td>
                  <td>
                    채권최고금액 금330,000,000원<br />
                    근저당권자 주식회사 국민은행
                  </td>
                  <td>박지혜</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>근저당권<br />설정</td>
                  <td>2021년2월5일 제4845호</td>
                  <td>
                    채권최고금액 금330,000,000원<br />
                    근저당권자 주식회사 국민은행
                  </td>
                  <td>박지혜</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-body-1 row-margin-item-group">
            3. (근)저당권 및 전세권 등(을구)
          </h3>

          <div :class="$style['basic-table']">
            <table>
              <colgroup>
                <col style="width: 80px" />
                <col style="width: 91px" />
                <col style="width: 132px" />
                <col />
                <col style="width: 93px" />
              </colgroup>
              <thead>
                <tr>
                  <th>순위번호</th>
                  <th>등기목적</th>
                  <th>접수정보</th>
                  <th>주요등기사항</th>
                  <th>대상소유자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3</td>
                  <td>근저당권<br />설정</td>
                  <td>2021년2월5일 제4845호</td>
                  <td>
                    채권최고금액 금330,000,000원<br />
                    근저당권자 주식회사 국민은행
                  </td>
                  <td>박지혜</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-body-1 row-margin-item-group">
            4. 표제부(전유 부분의 건물의 표시) 건물내역
          </h3>
          <p class="text-body-3">철근콘크리트조60.69㎡</p>
        </section>
      </div>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          col="3"
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

<style lang="scss" module>
@import '@/assets/scss/views/lmBlog/LM_P01_l006.scss';
</style>

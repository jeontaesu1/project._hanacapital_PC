<script>
// Agent_P00_l006
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

    const startDate = '2022-01-01';
    const endDate = '2022-01-01';
    const isOpen = ref(false);
    const address = ref('-');
    const isAddress = ref(false);
    const isSelectAddress = ref(false);
    const isTab = ref(1);

    function addressClick() {
      address.value = '서울 강서구 화곡동';
      isOpen.value = true;
    }
    function addressCheck() {
      isAddress.value = true;
    }

    function nextPart() {
      if (isAddress.value !== true) {
        alert('주소를 선택해 주세요.');
        return;
      }
      isSelectAddress.value = true;
    }

    function changeTab(n) {
      isTab.value = n;
      isAddress.value = false;
      isSelectAddress.value = false;
    }

    return {
      layer,

      startDate,
      endDate,
      isOpen,
      address,
      isAddress,
      isSelectAddress,
      isTab,

      addressClick,
      addressCheck,
      nextPart,
      changeTab,
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
          <PopupTitle>신주소 팝업</PopupTitle>
        </ModalPopupHead>
      </template>

      <div class="container">
        <div class="flex-container under-tab jcfs">
          <div :class="{ on: isTab === 1 }" @click="changeTab(1)">지번주소</div>
          <div :class="{ on: isTab === 2 }" @click="changeTab(2)">
            도로명주소
          </div>
        </div>

        <div class="flex-container address--wrap">
          <div class="bg-gary address--wrap__container" v-if="isTab === 1">
            <div class="flex-container">
              <div class="address--wrap__container-title">읍면동</div>
              <input type="text" />
            </div>
            <div class="flex-container">
              <div class="address--wrap__container-title">우편번호</div>
              <input type="text" />
            </div>
            <div class="explan">
              <i class="ico ico-explan"></i> [주소조회] 거래시 찾고자 하는
              지역의 '동이름'을 입력해 주십시오.<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(예: 서울시 강남구
              삼성1동 -> '삼성1')
              <br />
              <br />
              <i class="ico ico-explan"></i> 3-15대로의 경우 -> (-)은 ㄱ +
              한자키를 누른 후 8번을 선택해 주세요.
            </div>

            <div class="btn-container bottom">
              <button class="btn btn-primary btn-search">조회</button>
            </div>
          </div>

          <div class="bg-gary address--wrap__container" v-if="isTab === 2">
            <div class="flex-container">
              <div class="address--wrap__container-title">시도</div>
              <div class="select-container">
                <select>
                  <option>서울</option>
                </select>
              </div>
            </div>
            <div class="flex-container">
              <div class="address--wrap__container-title">시군구</div>
              <input type="text" />
            </div>
            <div class="flex-container">
              <div class="address--wrap__container-title">도로명</div>
              <input type="text" />
            </div>
            <div class="flex-container">
              <div class="address--wrap__container-title">건물번호</div>
              <div class="flex-container">
                <input type="text" /> -
                <input type="text" />
              </div>
            </div>
            <div class="flex-container">
              <div class="address--wrap__container-title">건물번호</div>
              <input type="text" />
            </div>
            <div class="explan">
              <i class="ico ico-explan"></i> [주소조회] 거래시 찾고자 하는
              지역의 '동이름'을 입력해 주십시오.<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(예: 서울시 강남구
              삼성1동 -> '삼성1')
              <br />
              <br />
              <i class="ico ico-explan"></i> 3-15대로의 경우 -> (-)은 ㄱ +
              한자키를 누른 후 8번을 선택해 주세요.
            </div>

            <div class="btn-container bottom">
              <button class="btn btn-primary btn-search">조회</button>
            </div>
          </div>

          <div class="address--wrap__container-02" v-if="!isSelectAddress">
            <div class="title">주소선택</div>
            <table class="table-type-01 none-search-small" v-if="isTab === 1">
              <thead>
                <tr>
                  <th>주소</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>조회된 내용이 없습니다.</td>
                </tr>
              </tbody>
            </table>
            <table class="table-type-01" v-if="isTab === 1">
              <thead>
                <tr>
                  <th>주소</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="txt-center on" @click="addressClick">
                    서울 강서구 화곡동
                  </td>
                </tr>
                <tr>
                  <td class="txt-center" @click="addressClick">
                    서울 강서구 화곡동
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="table-type-01" v-if="isTab === 2">
              <colgroup>
                <col width="17%" />
                <col width="30%" />
                <col width="12%" />
                <col width="20%" />
                <col width="27%" />
              </colgroup>
              <thead>
                <tr>
                  <th>우편번호</th>
                  <th>주소</th>
                  <th>지하</th>
                  <th>건물번호</th>
                  <th>건물명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="5" class="txt-center">
                    조회된 내용이 없습니다.
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="table-type-01" v-if="isTab === 2">
              <colgroup>
                <col width="17%" />
                <col width="30%" />
                <col width="12%" />
                <col width="20%" />
                <col width="27%" />
              </colgroup>
              <thead>
                <tr>
                  <th>우편번호</th>
                  <th>주소</th>
                  <th>지하</th>
                  <th>건물번호</th>
                  <th>건물명</th>
                </tr>
              </thead>
              <tbody>
                <tr class="on" @click="addressClick">
                  <td class="txt-center">077111</td>
                  <td class="txt-center">서울 강서구 화곡로</td>
                  <td class="txt-center">-</td>
                  <td class="txt-center">22</td>
                  <td class="txt-center">스카이 빌딩</td>
                </tr>
                <tr @click="addressClick">
                  <td class="txt-center">077111</td>
                  <td class="txt-center">서울 강서구 화곡로</td>
                  <td class="txt-center">-</td>
                  <td class="txt-center">22</td>
                  <td class="txt-center">스카이 빌딩</td>
                </tr>
              </tbody>
            </table>
            <table class="table-type-02">
              <colgroup>
                <col width="20%" />
                <col width="80%" />
              </colgroup>
              <tbody>
                <tr>
                  <td class="title">검색된 주소</td>
                  <td class="txt-right">{{ address }}</td>
                </tr>
                <tr>
                  <td class="title">나머지주소</td>
                  <td>
                    <div class="flex-container">
                      <input type="text" :disabled="!isOpen" />
                      <button
                        class="btn"
                        :class="{ 'btn-s04': !isOpen, 'btn-primary': isOpen }"
                      >
                        검증
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="table-type-03 none-search-small">
              <tbody>
                <tr>
                  <td>조회된 내용이 없습니다.</td>
                </tr>
              </tbody>
            </table>
            <table class="table-type-03">
              <colgroup>
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <td>
                    <div class="flex-container">
                      <div class="radio-container">
                        <label
                          class="flex-container jcfs"
                          @click="addressCheck"
                        >
                          <input type="radio" name="a1" />
                          <span></span>
                        </label>
                      </div>
                      <div class="depth2 w10p">
                        <div>지번</div>
                        <div>도로명</div>
                      </div>
                      <div class="w80p">
                        <div>서울 강서구 화곡동 987-1번지</div>
                        <div>서울 강서구 화곡로 279(화곡동)</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="flex-container">
                      <div class="radio-container">
                        <label
                          class="flex-container jcfs"
                          @click="addressCheck"
                        >
                          <input type="radio" name="a1" />
                          <span></span>
                        </label>
                      </div>
                      <div class="depth2 w10p">
                        <div>지번</div>
                        <div>도로명</div>
                      </div>
                      <div class="w80p">
                        <div>서울 강서구 화곡동 987-1번지</div>
                        <div>서울 강서구 화곡로 279(화곡동)</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="btn-container">
              <button
                class="btn w50p"
                :class="{ 'btn-s04': !isAddress, 'btn-s03': isAddress }"
              >
                취소
              </button>
              <button
                class="btn w50p"
                :class="{ 'btn-s05': !isAddress, 'btn-s02': isAddress }"
                @click="nextPart"
              >
                다음
              </button>
            </div>
          </div>
          <div class="address--wrap__container-02" v-if="isSelectAddress">
            <div class="title">주소 확인</div>
            <div class="explan explan-success">
              <i class="ico ico-success"></i>
              입력새길에 1:1 지번매칭성공.
            </div>
            <div class="flex-container fw address--wrap__container-box">
              <div class="address--wrap__container-02-address">
                <div class="title">입력주소</div>
                <div class="content">
                  <span>07687</span>
                  <span class="bar"></span>
                  <span>서울 강서구 화곡동</span>
                  <span class="bar"></span>
                  <span>987-1</span>
                </div>
              </div>
              <div class="address--wrap__container-02-address on">
                <div class="title">표준화지번주소</div>
                <div class="content">
                  <span>07687</span>
                  <span class="bar"></span>
                  <span>서울 강서구 화곡동</span>
                  <span class="bar"></span>
                  <span>987-1번지</span>
                </div>
              </div>
              <div class="address--wrap__container-02-address">
                <div class="title">도로명주소</div>
                <div class="content">
                  <span>07687</span>
                  <span class="bar"></span>
                  <span>서울 강서구 화곡동297</span>
                  <span class="bar"></span>
                  <span>(화곡동)</span>
                </div>
              </div>
            </div>
            <div class="btn-container">
              <button class="btn btn-s03 w50p">취소</button>
              <button class="btn btn-s02 w50p">확인</button>
            </div>
          </div>
        </div>
      </div>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/Agent_P00_l006.scss';
</style>

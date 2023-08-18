<script>
// Agent_P00_l005
import { reactive, ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import SearchForm from '@/components/ui/form/SearchForm.vue';
import SearchFormList from '@/components/ui/form/SearchFormList.vue';
import SearchFormItem from '@/components/ui/form/SearchFormItem.vue';
import SimpleInput from '@/components/ui/form/SimpleInput.vue';
import SimpleSelect from '@/components/ui/form/SimpleSelect.vue';
import SimpleDatepicker from '@/components/ui/form/SimpleDatepicker.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    SearchForm,
    SearchFormList,
    SearchFormItem,
    SimpleInput,
    SimpleSelect,
    SimpleDatepicker,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
  setup() {
    const layer = ref(null);

    const state = reactive({
      searchMinDate: '2023.04.21',
      searchMaxDate: '2023.04.21',
    });

    return {
      layer,
      state,
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
          <PopupTitle>상담/사전승인 내역 조회</PopupTitle>
        </ModalPopupHead>
      </template>

      <div class="container">
        <SearchForm>
          <h3 class="for-a11y">상담일자</h3>

          <SearchFormList>
            <SearchFormItem>
              <template v-slot:key>검색조건</template>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <SimpleSelect
                    :options="[
                      {
                        value: '1',
                        label: '선택',
                      },
                    ]"
                    title="조회기간"
                    defaultValue="1"
                    :classNames="{ wrap: 'input-width-regular' }"
                  />
                </div>
              </div>
            </SearchFormItem>
            <SearchFormItem>
              <template v-slot:key>승인일자</template>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <SimpleDatepicker
                    title="조회기간 시작 날짜"
                    :classNames="{ wrap: 'input-width-regular' }"
                    :max="state.searchMaxDate"
                    v-model="state.searchMinDate"
                  />
                </div>
                <div class="flex-box__cell">
                  <div class="text-body-3">~</div>
                </div>
                <div class="flex-box__cell">
                  <SimpleDatepicker
                    title="조회기간 종료 날짜"
                    :classNames="{ wrap: 'input-width-regular' }"
                    :min="state.searchMinDate"
                    v-model="state.searchMaxDate"
                  />
                </div>
              </div>
            </SearchFormItem>
            <SearchFormItem>
              <template v-slot:key>검색조건</template>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <SimpleSelect
                    :options="[
                      {
                        value: '1',
                        label: '고객명',
                      },
                    ]"
                    title="조회기간"
                    defaultValue="1"
                    :classNames="{ wrap: 'input-width-regular' }"
                  />
                </div>
                <div class="flex-box__cell">
                  <SimpleInput :classNames="{ wrap: 'input-width-large' }" />
                </div>
              </div>
            </SearchFormItem>
          </SearchFormList>

          <template v-slot:bottom>
            <ButtonList
              :wrap="true"
              :col="5"
              align="center"
              :classNames="{ wrap: 'row-margin-none' }"
            >
              <ButtonListItem>
                <BasicButton
                  :classNames="{ wrap: 'btn btn-primary btn-search-02' }"
                  >조회</BasicButton
                >
              </ButtonListItem>
            </ButtonList>
          </template>
        </SearchForm>

        <table class="table-type-01 none-search">
          <tbody>
            <tr>
              <td>조회된 내용이 없습니다.</td>
            </tr>
          </tbody>
        </table>

        <table class="table-type-04 bt">
          <colgroup>
            <col width="10%" />
            <col width="9%" />
            <col width="8%" />
            <col width="10%" />
            <col width="15%" />
            <col width="10%" />
            <col width="10%" />
            <col width="7%" />
            <col width="12%" />
            <col width="8%" />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>상담/승인일자</th>
              <th>거래방식</th>
              <th>고객구분</th>
              <th>고객명</th>
              <th>주민/사업자번호</th>
              <th>품목명</th>
              <th>상품코드</th>
              <th>사전심사</th>
              <th>신청/승인금액</th>
              <th>유효일자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">건별거래</td>
              <td class="txt-center">개인</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">LED전광판</td>
              <td class="txt-center">일반할부</td>
              <td class="txt-center cGreen">승인</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">2023.01.01</td>
            </tr>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">건별거래</td>
              <td class="txt-center">개인</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">LED전광판</td>
              <td class="txt-center">일반할부</td>
              <td class="txt-center cGreen">승인</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">2023.01.01</td>
            </tr>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">건별거래</td>
              <td class="txt-center">개인</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">LED전광판</td>
              <td class="txt-center">일반할부</td>
              <td class="txt-center cGreen">승인</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">2023.01.01</td>
            </tr>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">건별거래</td>
              <td class="txt-center">개인</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">LED전광판</td>
              <td class="txt-center">일반할부</td>
              <td class="txt-center cGreen">승인</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">2023.01.01</td>
            </tr>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">건별거래</td>
              <td class="txt-center">개인</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">LED전광판</td>
              <td class="txt-center">일반할부</td>
              <td class="txt-center cGreen">승인</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">2023.01.01</td>
            </tr>
          </tbody>
        </table>

        <ul class="paging">
          <li class="first">&lt;</li>
          <li class="on">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li class="dot"></li>
          <li>25</li>
          <li class="last">&gt;</li>
        </ul>
      </div>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/Agent_P00_l005.scss';
</style>

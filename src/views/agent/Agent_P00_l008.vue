<script>
// Agent_P00_l008
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
          <PopupTitle>제조사조회</PopupTitle>
        </ModalPopupHead>
      </template>

      <div class="container">
        <SearchForm>
          <h3 class="for-a11y">상담일자</h3>

          <SearchFormList>
            <SearchFormItem>
              <template v-slot:key>조회조건</template>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <SimpleSelect
                    :options="[
                      {
                        value: '1',
                        label: '은행명',
                      },
                    ]"
                    title="조회기간"
                    defaultValue="1"
                    :classNames="{ wrap: 'input-width-large' }"
                  />
                </div>
                <div class="flex-box__cell">
                  <SimpleInput :classNames="{ wrap: 'input-width-rwide' }" />
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
                  >검색</BasicButton
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
            <col width="20%" />
            <col width="15%" />
            <col width="20%" />
            <col width="30%" />
            <col width="10%" />
          </colgroup>
          <thead>
            <tr>
              <th>성명/상호</th>
              <th>주민/사업번호</th>
              <th>본지점</th>
              <th>거래구분</th>
              <th>고객구분명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="txt-center">상호명</td>
              <td class="txt-center">123-12-1****</td>
              <td class="txt-center">본사</td>
              <td class="txt-center">
                공급자, 제조사, 판매대리점, 탁송/등록대행사
              </td>
              <td class="txt-center">법인</td>
            </tr>
            <tr>
              <td class="txt-center">상호명</td>
              <td class="txt-center">123-12-1****</td>
              <td class="txt-center">본사</td>
              <td class="txt-center">
                공급자, 제조사, 판매대리점, 탁송/등록대행사
              </td>
              <td class="txt-center">법인</td>
            </tr>
            <tr>
              <td class="txt-center">상호명</td>
              <td class="txt-center">123-12-1****</td>
              <td class="txt-center">본사</td>
              <td class="txt-center">
                공급자, 제조사, 판매대리점, 탁송/등록대행사
              </td>
              <td class="txt-center">법인</td>
            </tr>
            <tr>
              <td class="txt-center">상호명</td>
              <td class="txt-center">123-12-1****</td>
              <td class="txt-center">본사</td>
              <td class="txt-center">
                공급자, 제조사, 판매대리점, 탁송/등록대행사
              </td>
              <td class="txt-center">법인</td>
            </tr>
            <tr>
              <td class="txt-center">상호명</td>
              <td class="txt-center">123-12-1****</td>
              <td class="txt-center">본사</td>
              <td class="txt-center">
                공급자, 제조사, 판매대리점, 탁송/등록대행사
              </td>
              <td class="txt-center">법인</td>
            </tr>
            <tr>
              <td class="txt-center">상호명</td>
              <td class="txt-center">123-12-1****</td>
              <td class="txt-center">본사</td>
              <td class="txt-center">
                공급자, 제조사, 판매대리점, 탁송/등록대행사
              </td>
              <td class="txt-center">법인</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/Agent_P00_l008.scss';
</style>

<script>
// Agent_P00_l003
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
import RadioButton from '@/components/ui/form/RadioButton.vue';
import RadioButtonLabelText from '@/components/ui/form/RadioButtonLabelText.vue';
import RadioButtonObject from '@/components/ui/form/RadioButtonObject.vue';
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
    RadioButtonLabelText,
    RadioButtonObject,
    RadioButton,
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
          <PopupTitle>상담등록내역</PopupTitle>
        </ModalPopupHead>
      </template>

      <div class="container">
        <SearchForm>
          <h3 class="for-a11y">상담일자</h3>

          <SearchFormList>
            <SearchFormItem>
              <template v-slot:key>상담일자</template>
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
            <SearchFormItem>
              <template v-slot:key>판매점</template>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <SimpleInput :classNames="{ wrap: 'input-width-large' }" />
                </div>
              </div>
            </SearchFormItem>
            <SearchFormItem>
              <template v-slot:key>상담결과</template>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <RadioButton
                    name="P00_l003_01"
                    id="P00_l003_01"
                    theme="tertiary"
                    align="center"
                    default-checked
                  >
                    <RadioButtonObject />
                    <RadioButtonLabelText>
                      <span class="flex-box">
                        <span
                          class="flex-box__cell flex-box__cell--regular flex-1"
                        >
                          <span class="text-title-5 font-weight-normal"
                            >전체</span
                          >
                        </span>
                      </span>
                    </RadioButtonLabelText>
                  </RadioButton>
                </div>
                <div class="flex-box__cell">
                  <RadioButton
                    name="P00_l003_01"
                    id="P00_l003_02"
                    theme="tertiary"
                    align="center"
                  >
                    <RadioButtonObject />
                    <RadioButtonLabelText>
                      <span class="flex-box">
                        <span
                          class="flex-box__cell flex-box__cell--regular flex-1"
                        >
                          <span class="text-title-5 font-weight-normal"
                            >접수</span
                          >
                        </span>
                      </span>
                    </RadioButtonLabelText>
                  </RadioButton>
                </div>
                <div class="flex-box__cell">
                  <RadioButton
                    name="P00_l003_01"
                    id="P00_l003_03"
                    theme="tertiary"
                    align="center"
                  >
                    <RadioButtonObject />
                    <RadioButtonLabelText>
                      <span class="flex-box">
                        <span
                          class="flex-box__cell flex-box__cell--regular flex-1"
                        >
                          <span class="text-title-5 font-weight-normal"
                            >심사중</span
                          >
                        </span>
                      </span>
                    </RadioButtonLabelText>
                  </RadioButton>
                </div>
                <div class="flex-box__cell">
                  <RadioButton
                    name="P00_l003_01"
                    id="P00_l003_04"
                    theme="tertiary"
                    align="center"
                  >
                    <RadioButtonObject />
                    <RadioButtonLabelText>
                      <span class="flex-box">
                        <span
                          class="flex-box__cell flex-box__cell--regular flex-1"
                        >
                          <span class="text-title-5 font-weight-normal"
                            >승인</span
                          >
                        </span>
                      </span>
                    </RadioButtonLabelText>
                  </RadioButton>
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

        <div class="search-count">
          <span>
            합계 : <span class="cGreen">85</span>건 /
            <span class="cGreen">2,700,462,280</span>원
          </span>

          <div class="btn-container">
            <button class="btn btn-s02">
              <i class="ico ico-excel f-main-color"></i>엑셀변환
            </button>
          </div>
        </div>

        <div class="scroll-container over-h">
          <table class="table-type-04 bt">
            <colgroup>
              <col width="114px" />
              <col width="105px" />
              <col width="158px" />
              <col width="130px" />
              <col width="110px" />
              <col width="148px" />
              <col width="122px" />
              <col width="110px" />
              <col width="70px" />
              <col width="110px" />
              <col width="110px" />
              <col width="110px" />
            </colgroup>
            <thead>
              <tr>
                <th>상담일</th>
                <th>구분</th>
                <th>상담채널</th>
                <th>신용정보동의</th>
                <th>고객명</th>
                <th>주민/사업자번호</th>
                <th>신청금액</th>
                <th>상담결과</th>
                <th>AG손배</th>
                <th>품목</th>
                <th>판매점</th>
                <th>온라인약정</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">이용자</td>
                <td class="txt-center">홈페이지(AG)</td>
                <td class="txt-center">온라인(SMS)</td>
                <td class="txt-center">김하나</td>
                <td class="txt-center">123456-1******</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center cGreen">승인</td>
                <td class="txt-center">N</td>
                <td class="txt-center">케이네트웍스케이네트웍스케이네트웍스</td>
                <td class="txt-center">식기세척기</td>
                <td class="txt-center">
                  <button class="btn btn-s05">SMS전송</button>
                </td>
              </tr>
              <tr>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">이용자</td>
                <td class="txt-center">홈페이지(AG)</td>
                <td class="txt-center">온라인(SMS)</td>
                <td class="txt-center">김하나</td>
                <td class="txt-center">123456-1******</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center cGreen">승인</td>
                <td class="txt-center">N</td>
                <td class="txt-center">케이네트웍스</td>
                <td class="txt-center">식기세척기</td>
                <td class="txt-center"></td>
              </tr>
              <tr>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">이용자</td>
                <td class="txt-center">홈페이지(AG)</td>
                <td class="txt-center">온라인(SMS)</td>
                <td class="txt-center">김하나</td>
                <td class="txt-center">123456-1******</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center cGreen">승인</td>
                <td class="txt-center">N</td>
                <td class="txt-center">케이네트웍스</td>
                <td class="txt-center">식기세척기</td>
                <td class="txt-center"></td>
              </tr>
              <tr>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">이용자</td>
                <td class="txt-center">홈페이지(AG)</td>
                <td class="txt-center">온라인(SMS)</td>
                <td class="txt-center">김하나</td>
                <td class="txt-center">123456-1******</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center cGreen">승인</td>
                <td class="txt-center">N</td>
                <td class="txt-center">케이네트웍스</td>
                <td class="txt-center">식기세척기</td>
                <td class="txt-center"></td>
              </tr>
              <tr>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">이용자</td>
                <td class="txt-center">홈페이지(AG)</td>
                <td class="txt-center">온라인(SMS)</td>
                <td class="txt-center">김하나</td>
                <td class="txt-center">123456-1******</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center cGreen">승인</td>
                <td class="txt-center">N</td>
                <td class="txt-center">케이네트웍스</td>
                <td class="txt-center">식기세척기</td>
                <td class="txt-center"></td>
              </tr>
            </tbody>
          </table>
        </div>

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
@import '@/assets/scss/views/agent/Agent_P00_l003.scss';
</style>

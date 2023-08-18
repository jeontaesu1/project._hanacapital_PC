<script>
// Agent_P02_l002
import {reactive, ref} from 'vue';

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
          <PopupTitle>상환스케줄 시뮬레이터</PopupTitle>
        </ModalPopupHead>
      </template>

      <div class="container">
        <SearchForm>
          <h3>상환정보입력</h3>

          <SearchFormList>
            <SearchFormItem>
              <template v-slot:key>할부원금</template>
              <div class="flex-box">
                <div class="flex-box__cell" :class="[$style['w95p']]">
                  <SimpleInput default-value="2,000,000" align="right" />
                </div>
                <div class="flex-box__cell">원</div>
              </div>
            </SearchFormItem>
            <SearchFormItem>
              <template v-slot:key>대출일자</template>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <SimpleDatepicker
                    title="조회기간 시작 날짜"
                    :classNames="{ wrap: 'input-width-regular' }"
                    :max="state.searchMaxDate"
                    v-model="state.searchMinDate"
                  />
                </div>
              </div>
            </SearchFormItem>
            <SearchFormItem>
              <template v-slot:key>초회납입일자</template>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <SimpleDatepicker
                    title="조회기간 시작 날짜"
                    :classNames="{ wrap: 'input-width-regular' }"
                    :max="state.searchMaxDate"
                    v-model="state.searchMinDate"
                  />
                </div>
              </div>
            </SearchFormItem>
            <SearchFormItem>
              <template v-slot:key>상환금리</template>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <SimpleInput default-value="12" align="right" :classNames="{wrap: 'input-width-small'}" />
                </div>
                <div class="flex-box__cell">개월</div>
                <div class="flex-box__cell">
                  <SimpleInput default-value="12" align="right" :classNames="{wrap: 'input-width-small'}" />
                </div>
                <div class="flex-box__cell">%</div>
              </div>
            </SearchFormItem>
            <SearchFormItem>
              <template v-slot:key>내구이자부과구분</template>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <RadioButton
                    name="P02_l002_01"
                    id="P02_l002_01"
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
                        >이자부과</span
                        >
                      </span>
                    </span>
                    </RadioButtonLabelText>
                  </RadioButton>
                </div>
                <div class="flex-box__cell">
                  <RadioButton
                    name="P02_l002_01"
                    id="P02_l002_02"
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
                        >부분이자</span
                        >
                      </span>
                    </span>
                    </RadioButtonLabelText>
                  </RadioButton>
                </div>
                <div class="flex-box__cell">
                  <RadioButton
                    name="P02_l002_01"
                    id="P02_l002_03"
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
                        >무이자</span
                        >
                      </span>
                    </span>
                    </RadioButtonLabelText>
                  </RadioButton>
                </div>
              </div>
            </SearchFormItem>
            <SearchFormItem>
              <template v-slot:key>내구재물품기본금리</template>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <SimpleInput default-value="12" align="right" :classNames="{wrap: 'input-width-small'}" />
                </div>
                <div class="flex-box__cell">%</div>
              </div>
            </SearchFormItem>
            <SearchFormItem>
              <template v-slot:key>결제일자</template>
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
                    :classNames="{ wrap: 'input-width-small' }"
                  />
                </div>
              </div>
            </SearchFormItem>
          </SearchFormList>

          <h3>선취수수료</h3>

          <SearchFormList>
            <SearchFormItem>
              <template v-slot:key>내구재선취수수료율</template>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <SimpleInput align="right" :classNames="{wrap: 'input-width-small'}" :disabled="true" />
                </div>
                <div class="flex-box__cell">%</div>
              </div>
            </SearchFormItem>
            <SearchFormItem>
            <template v-slot:key>내구재선취수수료</template>
            <div class="flex-box">
              <div class="flex-box__cell">
                <SimpleInput align="right" :classNames="{wrap: 'input-width-small'}" :disabled="true" />
              </div>
              <div class="flex-box__cell">원</div>
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
              <BasicButton
                :classNames="{ wrap: 'btn btn-primary btn-search-02' }"
              >산출</BasicButton
              >
            </ButtonList>
          </template>
        </SearchForm>

        <div class="title">
          상한스케줄
          <div class="btn-container">
            <button class="btn btn-s03">
              <i class="ico ico-print"></i>
              인쇄하기
            </button>
          </div>
        </div>

        <table class="table-type-01 none-search">
          <tbody>
            <tr>
              <td>조회된 내용이 없습니다.</td>
            </tr>
          </tbody>
        </table>

        <div class="scroll-container over-h">
          <table class="table-type-01">
            <colgroup>
              <col width="6%" />
              <col width="9%" />
              <col width="13%" />
              <col width="13%" />
              <col width="13%" />
              <col width="13%" />
              <col width="13%" />
              <col width="13%" />
            </colgroup>
            <thead>
              <tr>
                <th>회차</th>
                <th>납부계획일</th>
                <th>원금</th>
                <th>이자</th>
                <th>① 매회납부금</th>
                <th>② 기타금액</th>
                <th>납부금액(①+②)</th>
                <th>미회수원금</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="txt-center">1</td>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center">999,999,999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/agent/Agent_P02_l002.scss';
</style>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/Agent_P02_l002.scss';
</style>

<script>
// PF_P02_l002
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicButton,
    UiTab,
    NavTab,
    NavTabButton,
    UiTabPanel,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    BasicSelect,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    BasicHr,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonListItem,
    ButtonList,
  },
  setup() {
    const state = reactive({
      addressError001_001: false,
      addressError001_002: false,
      addressError001_003: false,
      addressError001_004: false,
      addressDetailError001: false,
      addressError002_001: false,
      addressError002_002: false,
      addressError002_003: false,
      addressError002_004: false,
      addressError002_005: false,
      addressDetailError002: false,
      addressError003_001: false,
    });

    const layer = ref(null);

    return {
      state,
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <UiTab type="popup">
      <ModalPopup>
        <template v-slot:head>
          <ModalPopupHead>
            <template v-slot:right>
              <PopupButton @click="layerSlotProps.close()" />
            </template>
            <PopupTitle>등기부등본 조회</PopupTitle>
          </ModalPopupHead>
        </template>

        <UiTab>
          <NavTab :useUiTab="true" type="popup">
            <NavTabButton link="PF_P02_l002_tab001">소재지번</NavTabButton>
            <NavTabButton link="PF_P02_l002_tab002">도로명주소</NavTabButton>
            <NavTabButton link="PF_P02_l002_tab003">고유번호</NavTabButton>
          </NavTab>

          <div>
            <UiTabPanel name="PF_P02_l002_tab001">
              <FormList>
                <FormListItem
                  titleText="부동산 구분"
                  target="#PF_P02_l002_method01"
                  :disabled="true"
                >
                  <FormInvalid :error="state.addressError001_001">
                    <InputBlock
                      :error="state.addressError001_001"
                      :disabled="true"
                    >
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          title="부동산 구분"
                          id="PF_P02_l002_method01"
                          defaultValue="집합건물"
                          :disabled="true"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>

                <FormListItem
                  titleText="시/도"
                  target="#PF_P02_l002_area001"
                  :selectOnly="true"
                >
                  <FormInvalid :error="state.addressError001_002">
                    <InputBlock :error="state.addressError001_002">
                      <InputBlockCell :flexible="true">
                        <BasicSelect
                          :options="[
                            {
                              value: '1',
                              label: '서울특별시',
                            },
                            {
                              value: '2',
                              label: '경기도',
                            },
                            {
                              value: '3',
                              label: '부산광역시',
                            },
                            {
                              value: '4',
                              label: '대구광역시',
                            },
                            {
                              value: '5',
                              label: '인천광역시',
                            },
                            {
                              value: '6',
                              label: '광주광역시',
                            },
                            {
                              value: '7',
                              label: '대전광역시',
                            },
                            {
                              value: '8',
                              label: '울산광역시',
                            },
                            {
                              value: '9',
                              label: '세종특별자치시',
                            },
                            {
                              value: '10',
                              label: '강원도',
                            },
                            {
                              value: '11',
                              label: '충청북도',
                            },
                            {
                              value: '12',
                              label: '충청남도',
                            },
                            {
                              value: '13',
                              label: '전라북도',
                            },
                            {
                              value: '14',
                              label: '전라남도',
                            },
                            {
                              value: '15',
                              label: '경상북도',
                            },
                            {
                              value: '16',
                              label: '경상남도',
                            },
                            {
                              value: '17',
                              label: '제주특별자치도',
                            },
                          ]"
                          title="시/도 선택하기"
                          inputId="PF_P02_l002_area001"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>

                <FormListItem
                  titleText="리/동"
                  target="#PF_P02_l002_area001_002"
                >
                  <FormInvalid :error="state.addressError001_003">
                    <InputBlock :error="state.addressError001_003">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          title="리/동"
                          id="PF_P02_l002_area001_002"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>

                <FormListItem titleText="입력선택" :forceFocus="true">
                  <FormInvalid :error="state.addressError001_004">
                    <BoxCheckList>
                      <BoxCheckListItem>
                        <BoxCheck
                          :minSide="true"
                          name="PF_P02_l002_address"
                          id="PF_P02_l002_address_001"
                        >
                          <BoxCheckLabel>지번</BoxCheckLabel>
                        </BoxCheck>
                      </BoxCheckListItem>
                      <BoxCheckListItem>
                        <BoxCheck
                          :minSide="true"
                          name="PF_P02_l002_address"
                          id="PF_P02_l002_address_002"
                        >
                          <BoxCheckLabel>건물명칭</BoxCheckLabel>
                        </BoxCheck>
                      </BoxCheckListItem>
                    </BoxCheckList>

                    <InputBlock
                      :error="state.addressError001_004"
                      :classNames="{ wrap: 'row-margin-item-group' }"
                    >
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          title="지번/건물명칭"
                          id="PF_P02_l002_address"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>

                  <FormInvalid
                    :error="state.addressDetailError001"
                    :classNames="{ wrap: 'row-margin-contents' }"
                  >
                    <BoxCheckList>
                      <BoxCheckListItem>
                        <BoxCheck
                          :minSide="true"
                          name="PF_P02_l002_addressDetail1"
                          id="PF_P02_l002_addressDetail1_001"
                        >
                          <BoxCheckLabel>동+호</BoxCheckLabel>
                        </BoxCheck>
                      </BoxCheckListItem>
                      <BoxCheckListItem>
                        <BoxCheck
                          :minSide="true"
                          name="PF_P02_l002_addressDetail1"
                          id="PF_P02_l002_addressDetail1_002"
                        >
                          <BoxCheckLabel>동</BoxCheckLabel>
                        </BoxCheck>
                      </BoxCheckListItem>
                      <BoxCheckListItem>
                        <BoxCheck
                          :minSide="true"
                          name="PF_P02_l002_addressDetail1"
                          id="PF_P02_l002_addressDetail1_003"
                        >
                          <BoxCheckLabel>호</BoxCheckLabel>
                        </BoxCheck>
                      </BoxCheckListItem>
                    </BoxCheckList>

                    <!-- Case : '동 + 호' 선택 시  -->
                    <InputBlock
                      :error="state.addressDetailError001"
                      :classNames="{ wrap: 'row-margin-item-group' }"
                    >
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          type="number"
                          pattern="\d*"
                          align="right"
                          :useDelete="false"
                          title="동"
                        />
                      </InputBlockCell>
                      <InputBlockCell>
                        <div class="text-body-1 font-weight-medium">동</div>
                      </InputBlockCell>
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          type="number"
                          pattern="\d*"
                          align="right"
                          :useDelete="false"
                          title="호"
                        />
                      </InputBlockCell>
                      <InputBlockCell>
                        <div class="text-body-1 font-weight-medium">호</div>
                      </InputBlockCell>
                    </InputBlock>
                    <!-- // Case : '동 + 호' 선택 시  -->

                    <!-- Case : '동' 선택 시  -->
                    <InputBlock
                      :error="state.addressDetailError001"
                      :classNames="{ wrap: 'row-margin-item-group' }"
                    >
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          type="number"
                          pattern="\d*"
                          align="right"
                          :useDelete="false"
                          title="동"
                        />
                      </InputBlockCell>
                      <template v-slot:innerRight>
                        <div class="text-body-1 font-weight-medium">동</div>
                      </template>
                    </InputBlock>
                    <!-- // Case : '동' 선택 시  -->

                    <!-- Case : '호' 선택 시  -->
                    <InputBlock
                      :error="state.addressDetailError001"
                      :classNames="{ wrap: 'row-margin-item-group' }"
                    >
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          type="number"
                          pattern="\d*"
                          align="right"
                          :useDelete="false"
                          title="호"
                        />
                      </InputBlockCell>
                      <template v-slot:innerRight>
                        <div class="text-body-1 font-weight-medium">호</div>
                      </template>
                    </InputBlock>
                    <!-- // Case : '호' 선택 시  -->
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>
              </FormList>
            </UiTabPanel>

            <UiTabPanel name="PF_P02_l002_tab002">
              <FormList>
                <FormListItem
                  titleText="부동산 구분"
                  target="#PF_P02_l002_method02"
                  :disabled="true"
                >
                  <FormInvalid :error="state.addressError002_001">
                    <InputBlock
                      :error="state.addressError002_001"
                      :disabled="true"
                    >
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          title="부동산 구분"
                          id="PF_P02_l002_method02"
                          defaultValue="집합건물"
                          :disabled="true"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>

                <FormListItem
                  titleText="시/도"
                  target="#PF_P02_l002_area002_001"
                  :selectOnly="true"
                >
                  <FormInvalid :error="state.addressError002_002">
                    <InputBlock :error="state.addressError002_002">
                      <InputBlockCell :flexible="true">
                        <BasicSelect
                          :options="[
                            {
                              value: '1',
                              label: '서울특별시',
                            },
                            {
                              value: '2',
                              label: '경기도',
                            },
                            {
                              value: '3',
                              label: '부산광역시',
                            },
                            {
                              value: '4',
                              label: '대구광역시',
                            },
                            {
                              value: '5',
                              label: '인천광역시',
                            },
                            {
                              value: '6',
                              label: '광주광역시',
                            },
                            {
                              value: '7',
                              label: '대전광역시',
                            },
                            {
                              value: '8',
                              label: '울산광역시',
                            },
                            {
                              value: '9',
                              label: '세종특별자치시',
                            },
                            {
                              value: '10',
                              label: '강원도',
                            },
                            {
                              value: '11',
                              label: '충청북도',
                            },
                            {
                              value: '12',
                              label: '충청남도',
                            },
                            {
                              value: '13',
                              label: '전라북도',
                            },
                            {
                              value: '14',
                              label: '전라남도',
                            },
                            {
                              value: '15',
                              label: '경상북도',
                            },
                            {
                              value: '16',
                              label: '경상남도',
                            },
                            {
                              value: '177',
                              label: '제주특별자치도',
                            },
                          ]"
                          title="시/도 선택하기"
                          inputId="PF_P02_l002_area002"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>

                <FormListItem
                  titleText="시/군/구"
                  target="#PF_P02_l002_area002_002"
                  :selectOnly="true"
                >
                  <FormInvalid :error="state.addressError002_003">
                    <InputBlock :error="state.addressError002_003">
                      <InputBlockCell :flexible="true">
                        <BasicSelect
                          :options="[
                            {
                              value: '1',
                              label: '강남구',
                            },
                            {
                              value: '2',
                              label: '강동구',
                            },
                            {
                              value: '3',
                              label: '강북구',
                            },
                            {
                              value: '4',
                              label: '강서구',
                            },
                            {
                              value: '5',
                              label: '관악구',
                            },
                            {
                              value: '6',
                              label: '광진구',
                            },
                            {
                              value: '7',
                              label: '구로구',
                            },
                            {
                              value: '8',
                              label: '금천구',
                            },
                            {
                              value: '9',
                              label: '노원구',
                            },
                            {
                              value: '10',
                              label: '도봉구',
                            },
                            {
                              value: '11',
                              label: '동대문구',
                            },
                            {
                              value: '12',
                              label: '동작구',
                            },
                            {
                              value: '13',
                              label: '마포구',
                            },
                            {
                              value: '14',
                              label: '서대문구',
                            },
                            {
                              value: '15',
                              label: '서초구',
                            },
                            {
                              value: '16',
                              label: '성동구',
                            },
                            {
                              value: '17',
                              label: '성북구',
                            },
                          ]"
                          title="시/군/구 선택하기"
                          inputId="PF_P02_l002_area002_002"
                        />
                      </InputBlockCell>
                    </InputBlock>
                  </FormInvalid>
                </FormListItem>

                <FormListItem
                  titleText="도로명"
                  target="#PF_P02_l002_area002_003"
                >
                  <FormInvalid :error="state.addressError002_004">
                    <InputBlock :error="state.addressError002_004">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          title="도로명"
                          id="PF_P02_l002_area002_003"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>

                <FormListItem
                  titleText="도로명/건물번호"
                  target="#PF_P02_l002_area002_004"
                >
                  <FormInvalid :error="state.addressError002_005">
                    <InputBlock :error="state.addressError002_005">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          title="도로명/건물번호"
                          id="PF_P02_l002_area002_004"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>

                <FormListItem titleText="입력선택" :forceFocus="true">
                  <FormInvalid :error="state.addressDetailError002">
                    <BoxCheckList>
                      <BoxCheckListItem>
                        <BoxCheck
                          :minSide="true"
                          name="PF_P02_l002_addressDetail2"
                          id="PF_P02_l002_addressDetail2_001"
                        >
                          <BoxCheckLabel>동+호</BoxCheckLabel>
                        </BoxCheck>
                      </BoxCheckListItem>
                      <BoxCheckListItem>
                        <BoxCheck
                          :minSide="true"
                          name="PF_P02_l002_addressDetail2"
                          id="PF_P02_l002_addressDetail2_002"
                        >
                          <BoxCheckLabel>동</BoxCheckLabel>
                        </BoxCheck>
                      </BoxCheckListItem>
                      <BoxCheckListItem>
                        <BoxCheck
                          :minSide="true"
                          name="PF_P02_l002_addressDetail2"
                          id="PF_P02_l002_addressDetail2_003"
                        >
                          <BoxCheckLabel>호</BoxCheckLabel>
                        </BoxCheck>
                      </BoxCheckListItem>
                    </BoxCheckList>

                    <!-- Case : '동 + 호' 선택 시  -->
                    <InputBlock
                      :error="state.addressDetailError002"
                      :classNames="{ wrap: 'row-margin-item-group' }"
                    >
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          type="number"
                          pattern="\d*"
                          align="right"
                          :useDelete="false"
                          title="동"
                        />
                      </InputBlockCell>
                      <InputBlockCell>
                        <div class="text-body-1 font-weight-medium">동</div>
                      </InputBlockCell>
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          type="number"
                          pattern="\d*"
                          align="right"
                          :useDelete="false"
                          title="호"
                        />
                      </InputBlockCell>
                      <InputBlockCell>
                        <div class="text-body-1 font-weight-medium">호</div>
                      </InputBlockCell>
                    </InputBlock>
                    <!-- // Case : '동 + 호' 선택 시  -->

                    <!-- Case : '동' 선택 시  -->
                    <InputBlock
                      :error="state.addressDetailError002"
                      :classNames="{ wrap: 'row-margin-item-group' }"
                    >
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          type="number"
                          pattern="\d*"
                          align="right"
                          :useDelete="false"
                          title="동"
                        />
                      </InputBlockCell>
                      <template v-slot:innerRight>
                        <div class="text-body-1 font-weight-medium">동</div>
                      </template>
                    </InputBlock>
                    <!-- // Case : '동' 선택 시  -->

                    <!-- Case : '호' 선택 시  -->
                    <InputBlock
                      :error="state.addressDetailError002"
                      :classNames="{ wrap: 'row-margin-item-group' }"
                    >
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          type="number"
                          pattern="\d*"
                          align="right"
                          :useDelete="false"
                          title="호"
                        />
                      </InputBlockCell>
                      <template v-slot:innerRight>
                        <div class="text-body-1 font-weight-medium">호</div>
                      </template>
                    </InputBlock>
                    <!-- // Case : '호' 선택 시  -->
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>
              </FormList>
            </UiTabPanel>

            <UiTabPanel name="PF_P02_l002_tab003">
              <FormList>
                <FormListItem
                  titleText="부동산 고유번호"
                  target="#PF_P02_l002_method03"
                >
                  <FormInvalid :error="state.addressError003_001">
                    <InputBlock :error="state.addressError003_001">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          title="부동산 고유번호"
                          id="PF_P02_l002_method03"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>
              </FormList>
            </UiTabPanel>

            <BasicButton
              :line="true"
              size="regular"
              :classNames="{ wrap: 'row-margin-contents' }"
            >
              조회
            </BasicButton>
          </div>

          <BasicHr
            theme="secondary"
            type="popup"
            className="row-margin-container-medium"
          />

          <!-- Case : 결과 있을 경우 -->
          <ul class="reset-list">
            <li class="row-margin-contents-small">
              <BasicBox>
                <KeyValue>
                  <KeyValueItem>
                    <KeyValueTitle>부동산고유번호</KeyValueTitle>
                    <KeyValueText>12345678901234</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem>
                    <KeyValueTitle>부동산 소재지번</KeyValueTitle>
                    <KeyValueText>
                      인천광역시 남동구 석석로333번길 33,<br />
                      제333동 제3층 제333호
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem>
                    <KeyValueTitle>소유자</KeyValueTitle>
                    <KeyValueText>김**</KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :classNames="{
                    wrap: 'row-margin-contents',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton size="regular" theme="quaternary">
                      보기
                    </BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </BasicBox>
            </li>

            <li class="row-margin-contents-small">
              <BasicBox>
                <KeyValue>
                  <KeyValueItem>
                    <KeyValueTitle>부동산고유번호</KeyValueTitle>
                    <KeyValueText>12345678901234</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem>
                    <KeyValueTitle>부동산 소재지번</KeyValueTitle>
                    <KeyValueText>
                      인천광역시 남동구 석석로333번길 33,<br />
                      제333동 제3층 제333호
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem>
                    <KeyValueTitle>소유자</KeyValueTitle>
                    <KeyValueText>박**</KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :classNames="{
                    wrap: 'row-margin-contents',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton size="regular">신청</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </BasicBox>
            </li>

            <li class="row-margin-contents-small">
              <BasicBox>
                <KeyValue>
                  <KeyValueItem>
                    <KeyValueTitle>부동산고유번호</KeyValueTitle>
                    <KeyValueText>12345678901234</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem>
                    <KeyValueTitle>부동산 소재지번</KeyValueTitle>
                    <KeyValueText>
                      인천광역시 남동구 석석로333번길 33,<br />
                      제333동 제3층 제333호
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem>
                    <KeyValueTitle>소유자</KeyValueTitle>
                    <KeyValueText>이**</KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :classNames="{
                    wrap: 'row-margin-contents',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton size="regular">신청</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </BasicBox>
            </li>
          </ul>
          <!-- // Case : 결과 있을 경우 -->
        </UiTab>
      </ModalPopup>
    </UiTab>
  </UiLayer>
</template>

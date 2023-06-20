<script>
// LM_P07_p001
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicTextarea from '@/components/ui/form/BasicTextarea.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconCustomer from '@/assets/images/icon/customer-center.svg?component';
import IconCall from '@/assets/images/icon/call.svg?component';

export default {
  components: {
    PageContents,
    TextButton,
    BasicHr,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicInput,
    BasicTextarea,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IconCustomer,
    IconCall,
  },
  setup() {
    const state = reactive({
      smsError: false,
      nameError001: false,
      nameError002: false,
      phoneError001: false,
      phoneError002: false,
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents size="wide">
    <div :class="$style['ars-layout']">
      <div
        :class="[
          $style['ars-layout__item'],
          $style['ars-layout__item--fixed-width'],
        ]"
      >
        <div :class="$style['ars-layout__box']">
          <div :class="$style['name-card']">
            <p :class="$style['name-card__top-text']">하나캐피탈 대출상담사</p>
            <div :class="$style['name-card__icon']">
              <IconCustomer />
            </div>
            <p :class="$style['name-card__name']">김하나</p>
            <p :class="$style['name-card__mail']">hanakim@capital</p>
            <div :class="$style['name-card__tel']">
              <TextButton tagName="span" :classNames="{ wrap: 'color-green' }">
                <template v-slot:leftIcon>
                  <IconCall />
                </template>
                010-1234-5678
              </TextButton>
            </div>
            <p :class="$style['name-card__number']">
              <span :class="$style['name-card__number-item']">
                여신금융협회 등록번호
              </span>
              <span :class="$style['name-card__number-item']">
                1000024254
              </span>
            </p>
          </div>

          <BasicHr theme="tertiary" className="row-margin-container-medium" />

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                김하나은(는) 하나캐피탈의 대출모집 업무(금융상품 판매업무)를
                대리하거나 중개합니다.(등록번호 1000024254)
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                위 사람은 금융 관계법률에 따라 하나캐피탈㈜와 위탁계약을
                체결하고 여신금융협회에 정식 등록된 대출상담사 입니다.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                (대출성 금융상품 판매대리 중개업체
                통합조회(www.loanconsultantor.kr))
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                위 사람은 하나캐피탈㈜만을 대리하거나 중개합니다.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                위 사람은 하나캐피탈㈜의 금융상품에 대한 계약체결 권한이
                없습니다.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                민원창구 연락처 1800-1110
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        :class="[
          $style['ars-layout__item'],
          $style['ars-layout__item--stretch'],
        ]"
      >
        <div class="row-margin-contents-small">
          // 배너 영역 내용 확인 후 진행 예정
        </div>

        <div :class="$style['ars-layout']">
          <div :class="$style['ars-layout__item']">
            <div
              :class="[
                $style['ars-layout__box'],
                $style['ars-layout__box--secondary'],
              ]"
            >
              <h3 class="text-title-1 row-margin-small">빠른 대출상담</h3>
              <p
                class="text-body-1 font-weight-light color-gray-secondary row-margin-small"
              >
                연락처를 남겨주시면 친절하고 편리한 상담전화를 드립니다.
              </p>

              <FormList :classNames="{ wrap: 'row-margin-contents' }">
                <FormListItem titleText="이름" target="#LM_P07_p001_name_001">
                  <FormInvalid :error="state.nameError001">
                    <InputBlock :error="state.nameError001">
                      <InputBlockCell :flexible="true">
                        <BasicInput title="이름" id="LM_P07_p001_name_001" />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>
                <FormListItem
                  titleText="휴대폰번호"
                  target="#LM_P07_p001_phone_001"
                >
                  <FormInvalid :error="state.phoneError001">
                    <InputBlock :error="state.phoneError001">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          pattern="\d*"
                          title="휴대폰번호"
                          id="LM_P07_p001_phone_001"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>
              </FormList>

              <div :class="$style['agree-wrap']">
                <div :class="$style['agree-list']">
                  <ul :class="$style['agree-list__depth']">
                    <li :class="$style['agree-list__depth-item']">
                      <div :class="$style['agree-list__depth-head']">
                        <CheckBox
                          id="LM_P07_p001_agree_001_All"
                          :classNames="{
                            wrap: $style['agree-list__depth-checkbox'],
                          }"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText> 전체동의 </CheckBoxLabelText>
                        </CheckBox>
                      </div>
                      <div :class="$style['agree-list__depth-contents']">
                        <ul :class="$style['agree-list__list']">
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="LM_P07_p001_agree_001_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  개인정보 수집 및 이용 동의
                                </CheckBoxLabelText>
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="LM_P07_p001_agree_001_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  개인정보 제공 동의
                                </CheckBoxLabelText>
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <ButtonList
                :classNames="{
                  wrap: 'row-margin-block-small',
                }"
              >
                <ButtonListItem>
                  <BasicButton size="regular">상담신청</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </div>
          </div>

          <div :class="$style['ars-layout__item']">
            <div
              :class="[
                $style['ars-layout__box'],
                $style['ars-layout__box--secondary'],
              ]"
            >
              <h3 class="text-title-1">SMS 상담</h3>
              <FormList :classNames="{ wrap: 'row-margin-contents' }">
                <BasicTextarea
                  :error="state.smsError"
                  titleText="SMS 입력"
                  title="SMS 입력"
                >
                  <template v-slot:bottom>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </template>
                </BasicTextarea>

                <FormListItem titleText="이름" target="#LM_P07_p001_name_002">
                  <FormInvalid :error="state.nameError002">
                    <InputBlock :error="state.nameError002">
                      <InputBlockCell :flexible="true">
                        <BasicInput title="이름" id="LM_P07_p001_name_002" />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>
                <FormListItem
                  titleText="휴대폰번호"
                  target="#LM_P07_p001_phone_002"
                >
                  <FormInvalid :error="state.phoneError002">
                    <InputBlock :error="state.phoneError002">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          pattern="\d*"
                          title="휴대폰번호"
                          id="LM_P07_p001_phone_002"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>
              </FormList>

              <div :class="$style['agree-wrap']">
                <div
                  :class="[$style['agree-list'], $style['agree-wrap__inner']]"
                >
                  <ul :class="$style['agree-list__depth']">
                    <li :class="$style['agree-list__depth-item']">
                      <div :class="$style['agree-list__depth-head']">
                        <CheckBox
                          id="LM_P07_p001_agree_002_All"
                          :classNames="{
                            wrap: $style['agree-list__depth-checkbox'],
                          }"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText> 전체동의 </CheckBoxLabelText>
                        </CheckBox>
                      </div>
                      <div :class="$style['agree-list__depth-contents']">
                        <ul :class="$style['agree-list__list']">
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="LM_P07_p001_agree_002_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  개인정보 수집 및 이용 동의
                                </CheckBoxLabelText>
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="LM_P07_p001_agree_002_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  개인정보 제공 동의
                                </CheckBoxLabelText>
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <ButtonList
                :classNames="{
                  wrap: 'row-margin-block-small',
                }"
              >
                <ButtonListItem>
                  <BasicButton size="regular">상담신청</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lmBlogPersonal/LM_P07_p001.scss';
</style>

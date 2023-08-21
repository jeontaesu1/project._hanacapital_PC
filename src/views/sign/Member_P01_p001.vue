<script>
// Member_P01_p001
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

import IconLogo from '@/assets/images/icon/hanacapital-small.svg?component';
import IconLink from '@/assets/images/icon/link.svg?component';

export default {
  components: {
    RouterLink,
    PageContents,
    PageHead,
    PageTitle,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    NoticeText,
    TextButton,
    BasicButton,
    ButtonList,
    ButtonListItem,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicInput,
    SecurityInput,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    IconLogo,
    IconLink,
  },
  setup() {
    const state = reactive({
      idError: false,
      passwordError: false,
      businessNameError: false,
      businessLicenseError: false,
      businessNumberError: false,
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageTitle>로그인</PageTitle>
    </PageHead>

    <UiTab :classNames="{ wrap: 'flex-none' }">
      <NavTab :useUiTab="true">
        <NavTabButton link="Member_P01_p001_tab001">아이디</NavTabButton>
        <NavTabButton link="Member_P01_p001_tab002">공동인증서</NavTabButton>
      </NavTab>

      <!-- 아이디 -->
      <UiTabPanel name="Member_P01_p001_tab001">
        <FormList>
          <FormListItem titleText="아이디" target="#signInId">
            <FormInvalid :error="state.idError">
              <InputBlock :error="state.idError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="아이디" id="signInId" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="비밀번호" target="#signInPassword">
            <FormInvalid :error="state.passwordError">
              <InputBlock :error="state.passwordError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="password"
                    title="비밀번호"
                    id="signInPassword"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <ButtonList>
          <ButtonListItem>
            <BasicButton>로그인</BasicButton>
          </ButtonListItem>
        </ButtonList>

        <div :class="$style['division-info']">
          <ul :class="$style['division-info__list']">
            <li :class="$style['division-info__item']">
              <RouterLink
                to=""
                class="none-deco-link text-body-1 font-weight-light color-gray-secondary"
              >
                아이디찾기
              </RouterLink>
            </li>
            <li :class="$style['division-info__item']">
              <RouterLink
                to=""
                class="none-deco-link text-body-1 font-weight-light color-gray-secondary"
              >
                비밀번호 찾기
              </RouterLink>
            </li>
            <li :class="$style['division-info__item']">
              <RouterLink
                to=""
                class="none-deco-link text-body-1 font-weight-light color-gray-secondary"
              >
                회원가입
              </RouterLink>
            </li>
          </ul>
        </div>
      </UiTabPanel>
      <!-- // 아이디 -->

      <!-- 공동인증서 -->
      <UiTabPanel name="Member_P01_p001_tab002">
        <BoxCheckList :classNames="{ wrap: 'row-margin-container-medium' }">
          <BoxCheckListItem>
            <BoxCheck
              name="Member_P01_p001_002_001"
              id="Member_P01_p001_002_001_001"
              :defaultChecked="true"
            >
              <BoxCheckLabel>개인 (개인사업자 포함)</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              name="Member_P01_p001_002_001"
              id="Member_P01_p001_002_001_002"
            >
              <BoxCheckLabel>법인</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

        <!-- Case : 개인 선택 시 노출 -->
        <div>
          <p class="text-body-1 font-weight-medium">
            개인회원은 공동인증서 등록 후 이용 가능합니다.
          </p>

          <ButtonList align="full">
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary"
                >공동인증서 등록</BasicButton
              >
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton>공동인증서 로그인</BasicButton>
            </ButtonListItem>
          </ButtonList>

          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <RouterLink
                  to=""
                  class="none-deco-link text-body-1 font-weight-light color-gray-secondary"
                >
                  회원가입
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <!-- // Case : 개인 선택 시 노출 -->

        <!-- Case : 법인 선택 시 노출 -->
        <div>
          <p class="text-body-1 font-weight-medium row-margin-container-medium">
            법인 정보 확인을 위해 몇 가지 정보를 입력 후 공동인증서 인증을
            진행해 주세요.
          </p>

          <FormList>
            <FormListItem
              titleText="법인명"
              target="#Member_P01_p001_businessName"
            >
              <FormInvalid :error="state.businessNameError">
                <InputBlock :error="state.businessNameError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="법인명"
                      id="Member_P01_p001_businessName"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="사업자번호"
              target="#Member_P01_p001_BusinessLicense"
            >
              <FormInvalid :error="state.businessLicenseError">
                <InputBlock :error="state.businessLicenseError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      ref="license"
                      title="사업자번호"
                      id="Member_P01_p001_BusinessLicense"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="법인번호"
              target="#Member_P01_p001_businessNumber"
            >
              <FormInvalid :error="state.businessNumberError">
                <InputBlock :error="state.businessNumberError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="법인번호 앞 6자리"
                      id="Member_P01_p001_businessNumber"
                    />
                  </InputBlockCell>
                  <InputBlockCell type="sub">-</InputBlockCell>
                  <InputBlockCell :flexible="true">
                    <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                    <SecurityInput
                      title="법인번호 뒤 7자리"
                      :dot="[true, true, true, false, false, false, false]"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>

          <ButtonList>
            <ButtonListItem>
              <BasicButton>공동인증서 로그인</BasicButton>
            </ButtonListItem>
          </ButtonList>

          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <RouterLink
                  to=""
                  class="none-deco-link text-body-1 font-weight-light color-gray-secondary"
                >
                  회원가입
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <!-- // Case : 법인 선택 시 노출 -->
      </UiTabPanel>
      <!-- // 공동인증서 -->
    </UiTab>

    <div :class="$style['join']">
      <div :class="$style['join__inner']">
        <div :class="$style['join__icon']"><IconLogo /></div>
        <div :class="$style['join__title']">앱에서 가입하셨나요?</div>
        <TextButton
          :block="true"
          :classNames="{
            wrap: [$style['join__link'], 'color-gray-tertiary'],
          }"
        >
          앱회원 가입
          <template v-slot:rightIcon>
            <IconLink />
          </template>
        </TextButton>
      </div>
    </div>

    <div class="row-margin-container-medium">
      <NoticeText :classNames="{ wrap: 'row-margin-item' }">
        아이디 또는 공동인증서로 로그인 가능합니다.
      </NoticeText>
      <NoticeText :classNames="{ wrap: 'row-margin-item' }">
        로그인 후 10분 이상 자리를 비우실 경우 자동으로 로그아웃 됩니다.
      </NoticeText>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/sign/Member_P01_p001.scss';
</style>

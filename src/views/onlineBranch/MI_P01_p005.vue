<script>
// MI_P01_p005
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    TextButton,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicSelect,
    FormInvalidMessage,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      addressError001: false,
      addressError002: false,
      addressError003: false,
      addressError004: false,
      addressError005: false,
      addressError006: false,
      addressError007: false,
      addressError008: false,
      addressError009: false,
      addressError010: false,
      mailError: false,
    });

    onMounted(() => {
      store.ui.header.setActive(() => 'onlineBranch');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '온라인지점',
            to: '/',
          },
          {
            text: '내정보관리',
          },
          {
            text: '주소지/연락처 변경',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">주소지/연락처 변경</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">주소지를 변경해 주세요</PageMainText>
    </PageHead>

    <ul
      :class="[
        $style['basic-list'],
        $style['basic-list--regular'],
        $style['basic-list--regular-margin'],
      ]"
    >
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              청구지의 주소를 확인하고 변경할 수 있습니다.
            </div>
            <div class="flex-box__cell flex-box__cell--medium">
              <TextButton
                textSize="regular"
                theme="secondary"
                :underline="true"
                :block="true"
              >
                이동하기
              </TextButton>
            </div>
          </div>
        </div>
      </li>
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          주소 변경 시, 각 계약별로 설정되어 있는 청구지 주소도 함께 변경됩니다.
        </div>
      </li>
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          각 계약별로 설정된 청구지 주소 확인은 [계약정보 > 청구방법/청구지변경]
          메뉴를 이용하세요.
        </div>
      </li>
    </ul>

    <FormList :classNames="{ wrap: 'row-margin-block-small' }">
      <!-- Case : 개인 회원일 경우 노출 -->
      <FormListItem
        titleText="등본지"
        target="#MI_P01_p005_addressSerach001Button"
      >
        <FormInvalid :error="state.addressError001">
          <InputBlock :error="state.addressError001">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="등본지 - 우편번호"
                defaultValue="12345"
                :disabled="true"
              />
            </InputBlockCell>
            <template v-slot:right>
              <BasicButton
                size="small"
                theme="tertiary"
                id="MI_P01_p005_addressSerach001Button"
                >검색</BasicButton
              >
            </template>
          </InputBlock>
          <!-- Case: 주소 검색 및 입력 후 노출 -->
          <InputBlock
            :error="state.addressError001"
            :disabled="true"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="등본지 - 주소"
                defaultValue="인천광역시 서구 에코로 181"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <InputBlock
            :error="state.addressError001"
            :disabled="true"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="등본지 - 상세주소"
                defaultValue="하나아파트 835동 4590호"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <!-- // Case: 주소 검색 및 입력 후 노출 -->
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="실거주지"
        target="#MI_P01_p005_addressSerach002Button"
      >
        <FormInvalid :error="state.addressError002">
          <InputBlock :error="state.addressError002">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="실거주지 - 우편번호"
                defaultValue="12345"
                :disabled="true"
              />
            </InputBlockCell>
            <template v-slot:right>
              <BasicButton
                size="small"
                theme="tertiary"
                id="MI_P01_p005_addressSerach002Button"
                >검색</BasicButton
              >
            </template>
          </InputBlock>
          <!-- Case: 주소 검색 및 입력 후 노출 -->
          <InputBlock
            :error="state.addressError002"
            :disabled="true"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="실거주지 - 주소"
                defaultValue="인천광역시 서구 에코로 181"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <InputBlock
            :error="state.addressError002"
            :disabled="true"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="실거주지 - 상세주소"
                defaultValue="하나아파트 835동 4590호"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <!-- // Case: 주소 검색 및 입력 후 노출 -->
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="직장주소"
        target="#MI_P01_p005_addressSerach003Button"
      >
        <FormInvalid :error="state.addressError003">
          <InputBlock :error="state.addressError003">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="직장주소 - 우편번호"
                defaultValue="12345"
                :disabled="true"
              />
            </InputBlockCell>
            <template v-slot:right>
              <BasicButton
                size="small"
                theme="tertiary"
                id="MI_P01_p005_addressSerach003Button"
                >검색</BasicButton
              >
            </template>
          </InputBlock>
          <!-- Case: 주소 검색 및 입력 후 노출 -->
          <InputBlock
            :error="state.addressError003"
            :disabled="true"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="직장주소 - 주소"
                defaultValue="인천광역시 서구 에코로 181"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <InputBlock
            :error="state.addressError003"
            :disabled="true"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="직장주소 - 상세주소"
                defaultValue="하나아파트 835동 4590호"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <!-- // Case: 주소 검색 및 입력 후 노출 -->
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="기타주소1"
        target="#MI_P01_p005_addressSerach004Button"
      >
        <FormInvalid :error="state.addressError004">
          <InputBlock :error="state.addressError004">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="기타주소1 - 우편번호"
                defaultValue="12345"
                :disabled="true"
              />
            </InputBlockCell>
            <template v-slot:right>
              <BasicButton
                size="small"
                theme="tertiary"
                id="MI_P01_p005_addressSerach004Button"
                >검색</BasicButton
              >
            </template>
          </InputBlock>
          <!-- Case: 주소 검색 및 입력 후 노출 -->
          <InputBlock
            :error="state.addressError004"
            :disabled="true"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="기타주소1 - 주소"
                defaultValue="인천광역시 서구 에코로 181"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <InputBlock
            :error="state.addressError004"
            :disabled="true"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="기타주소1 - 상세주소"
                defaultValue="하나아파트 835동 4590호"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <!-- // Case: 주소 검색 및 입력 후 노출 -->
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="기타주소2"
        target="#MI_P01_p005_addressSerach005Button"
      >
        <FormInvalid :error="state.addressError005">
          <InputBlock :error="state.addressError005">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="기타주소2 - 우편번호"
                defaultValue="12345"
                :disabled="true"
              />
            </InputBlockCell>
            <template v-slot:right>
              <BasicButton
                size="small"
                theme="tertiary"
                id="MI_P01_p005_addressSerach005Button"
                >검색</BasicButton
              >
            </template>
          </InputBlock>
          <!-- Case: 주소 검색 및 입력 후 노출 -->
          <InputBlock
            :error="state.addressError005"
            :disabled="true"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="기타주소2 - 주소"
                defaultValue="인천광역시 서구 에코로 181"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <InputBlock
            :error="state.addressError005"
            :disabled="true"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="기타주소2 - 상세주소"
                defaultValue="하나아파트 835동 4590호"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <!-- // Case: 주소 검색 및 입력 후 노출 -->
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // Case : 개인 회원일 경우 노출 -->

      <!-- Case : 개인사업자/법인사업자일 경우 노출 -->
      <FormListItem
        titleText="사업장"
        target="#MI_P01_p005_addressSerach006Button"
      >
        <FormInvalid :error="state.addressError006">
          <InputBlock :error="state.addressError006">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="사업장 - 우편번호"
                defaultValue="12345"
                :disabled="true"
              />
            </InputBlockCell>
            <template v-slot:right>
              <BasicButton
                size="small"
                theme="tertiary"
                id="MI_P01_p005_addressSerach006Button"
                >검색</BasicButton
              >
            </template>
          </InputBlock>
          <!-- Case: 주소 검색 및 입력 후 노출 -->
          <InputBlock
            :error="state.addressError006"
            :disabled="true"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="사업장 - 주소"
                defaultValue="인천광역시 서구 에코로 181"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <InputBlock
            :error="state.addressError006"
            :disabled="true"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="사업장 - 상세주소"
                defaultValue="하나아파트 835동 4590호"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <!-- // Case: 주소 검색 및 입력 후 노출 -->
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="본점"
        target="#MI_P01_p005_addressSerach007Button"
      >
        <FormInvalid :error="state.addressError007">
          <InputBlock :error="state.addressError007">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="본점 - 우편번호"
                defaultValue="12345"
                :disabled="true"
              />
            </InputBlockCell>
            <template v-slot:right>
              <BasicButton
                size="small"
                theme="tertiary"
                id="MI_P01_p005_addressSerach007Button"
                >검색</BasicButton
              >
            </template>
          </InputBlock>
          <!-- Case: 주소 검색 및 입력 후 노출 -->
          <InputBlock
            :error="state.addressError007"
            :disabled="true"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="본점 - 주소"
                defaultValue="인천광역시 서구 에코로 181"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <InputBlock
            :error="state.addressError007"
            :disabled="true"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="본점 - 상세주소"
                defaultValue="하나아파트 835동 4590호"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <!-- // Case: 주소 검색 및 입력 후 노출 -->
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="등본지"
        target="#MI_P01_p005_addressSerach008Button"
      >
        <FormInvalid :error="state.addressError008">
          <InputBlock :error="state.addressError008">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="등본지 - 우편번호"
                defaultValue="12345"
                :disabled="true"
              />
            </InputBlockCell>
            <template v-slot:right>
              <BasicButton
                size="small"
                theme="tertiary"
                id="MI_P01_p005_addressSerach008Button"
                >검색</BasicButton
              >
            </template>
          </InputBlock>
          <!-- Case: 주소 검색 및 입력 후 노출 -->
          <InputBlock
            :error="state.addressError008"
            :disabled="true"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="등본지 - 주소"
                defaultValue="인천광역시 서구 에코로 181"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <InputBlock
            :error="state.addressError008"
            :disabled="true"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="등본지 - 상세주소"
                defaultValue="하나아파트 835동 4590호"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <!-- // Case: 주소 검색 및 입력 후 노출 -->
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="실거주지"
        target="#MI_P01_p005_addressSerach009Button"
      >
        <FormInvalid :error="state.addressError009">
          <InputBlock :error="state.addressError009">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="실거주지 - 우편번호"
                defaultValue="12345"
                :disabled="true"
              />
            </InputBlockCell>
            <template v-slot:right>
              <BasicButton
                size="small"
                theme="tertiary"
                id="MI_P01_p005_addressSerach009Button"
                >검색</BasicButton
              >
            </template>
          </InputBlock>
          <!-- Case: 주소 검색 및 입력 후 노출 -->
          <InputBlock
            :error="state.addressError009"
            :disabled="true"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="실거주지 - 주소"
                defaultValue="인천광역시 서구 에코로 181"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <InputBlock
            :error="state.addressError009"
            :disabled="true"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="실거주지 - 상세주소"
                defaultValue="하나아파트 835동 4590호"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <!-- // Case: 주소 검색 및 입력 후 노출 -->
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="기타주소"
        target="#MI_P01_p005_addressSerach010Button"
      >
        <FormInvalid :error="state.addressError010">
          <InputBlock :error="state.addressError010">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="기타주소 - 우편번호"
                defaultValue="12345"
                :disabled="true"
              />
            </InputBlockCell>
            <template v-slot:right>
              <BasicButton
                size="small"
                theme="tertiary"
                id="MI_P01_p005_addressSerach010Button"
                >검색</BasicButton
              >
            </template>
          </InputBlock>
          <!-- Case: 주소 검색 및 입력 후 노출 -->
          <InputBlock
            :error="state.addressError010"
            :disabled="true"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="기타주소 - 주소"
                defaultValue="인천광역시 서구 에코로 181"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <InputBlock
            :error="state.addressError010"
            :disabled="true"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="기타주소 - 상세주소"
                defaultValue="하나아파트 835동 4590호"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <!-- // Case: 주소 검색 및 입력 후 노출 -->
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // Case : 개인사업자/법인사업자일 경우 노출 -->
    </FormList>

    <section>
      <div class="row-margin-contents">
        <h3 class="text-title-1 row-margin-small">이메일 변경</h3>
        <p class="text-body-1 color-gray-secondary font-weight-light">
          E-Mail 주소를 확인하고 변경할 수 있습니다.
        </p>
      </div>

      <FormList>
        <FormListItem titleText="이메일" target="#MI_P01_p005_EmailId">
          <FormInvalid :error="state.mailError">
            <InputBlock :error="state.mailError">
              <InputBlockCell :flexible="true">
                <BasicInput title="이메일 아이디" id="MI_P01_p005_EmailId" />
              </InputBlockCell>
              <InputBlockCell margin="regular">@</InputBlockCell>
              <InputBlockCell margin="regular" :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: 'naver.com',
                    },
                    {
                      value: '2',
                      label: 'hanmail.net',
                    },
                    {
                      value: '3',
                      label: 'gmail.com',
                    },
                    {
                      value: '4',
                      label: 'nate.com',
                    },
                    {
                      value: '5',
                      label: 'paran.com',
                    },
                    {
                      value: '6',
                      label: 'dreamwiz.com',
                    },
                    {
                      value: '7',
                      label: 'yahoo.com',
                    },
                    {
                      value: '8',
                      label: 'freechal.com',
                    },
                    {
                      value: '9',
                      label: '직접입력',
                    },
                  ]"
                  title="이메일 도메인"
                  placeholder="선택"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- Case : 직접입력 선택 시 노출 -->
            <InputBlock
              :error="state.mailError"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이메일 도메인 직접입력"
                  id="MI_P01_p005_EmailDomainSelf"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- //Case : 직접입력 선택 시 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>
    </section>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>변경하기</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P01_p005.scss';
</style>

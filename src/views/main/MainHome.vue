<script>
// Main_P01_p001
import { ref, reactive, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconAdd from '@/assets/images/icon/add.svg?component';
import IconLink from '@/assets/images/icon/link.svg?component';
import IconSearchProgress from '@/assets/images/icon/search-progress.svg?component';
import IconRegistrationDocument from '@/assets/images/icon/registration-document.svg?component';
import IconRegisterCertificate from '@/assets/images/icon/register-certificate.svg?component';
import IconPig from '@/assets/images/icon/pig.svg?component';
import IconBuilding from '@/assets/images/icon/building.svg?component';
import IconVip from '@/assets/images/icon/vip.svg?component';
import IconLeaseStuff from '@/assets/images/icon/lease-stuff.svg?component';
import IconMedical from '@/assets/images/icon/medical.svg?component';
import IconContractGray from '@/assets/images/icon/contract-gray.svg?component';
import IconWarning from '@/assets/images/icon/warning.svg?component';
import IconCustomerInfo from '@/assets/images/icon/customer-info.svg?component';
import IconDate from '@/assets/images/icon/date.svg?component';
import IconCorporateFinance from '@/assets/images/icon/corporate-finance.svg?component';
import IconDeposit from '@/assets/images/icon/deposit.svg?component';
import IconInstallment from '@/assets/images/icon/installment.svg?component';
import IconMyLoan from '@/assets/images/icon/my-loan.svg?component';
import IconCarSecurity from '@/assets/images/icon/car-security.svg?component';
import IconHomeSetting from '@/assets/images/icon/home-setting.svg?component';

const BASE_URL = import.meta.env.BASE_URL;

export default {
  components: {
    RouterLink,
    Swiper,
    SwiperSlide,

    PageContents,
    TextButton,
    CarThumb,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicInput,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    BasicButton,
    ButtonList,
    ButtonListItem,

    IconAdd,
    IconLink,
    IconSearchProgress,
    IconRegistrationDocument,
    IconRegisterCertificate,
    IconPig,
    IconBuilding,
    IconVip,
    IconLeaseStuff,
    IconMedical,
    IconContractGray,
    IconWarning,
    IconCustomerInfo,
    IconDate,
    IconCorporateFinance,
    IconDeposit,
    IconInstallment,
    IconMyLoan,
    IconCarSecurity,
    IconHomeSetting,
  },
  setup() {
    const state = reactive({
      isTestLogin: false,
      loginBusinessType: {
        personal: true,
        corporate: false,
      },
      idError: false,
      passwordError: false,
      businessNameError: false,
      businessLicenseError: false,
      businessNumberError: false,
      topBanner: {
        swiper: null,
        paginationEl: null,
        autoplay: false,
      },
    });

    const topBannerPagination = ref(null);

    const topBannerOn = {
      swiper: (swiper) => {
        state.topBanner.swiper = swiper;
      },
      autoplayStart: () => {
        state.topBanner.autoplay = true;
      },
      autoplayStop: () => {
        state.topBanner.autoplay = false;
      },
    };

    const topBannerToggle = () => {
      if (state.topBanner.autoplay) {
        state.topBanner.swiper.autoplay.stop();
      } else {
        state.topBanner.swiper.autoplay.start();
      }
    };

    const testLogin = () => {
      state.isTestLogin = true;
    };

    onMounted(() => {
      state.topBanner.paginationEl = topBannerPagination.value;
    });

    return {
      BASE_URL,
      modules: [Pagination, A11y, Autoplay],
      state,
      topBannerPagination,
      topBannerOn,
      topBannerToggle,
      testLogin,
    };
  },
};
</script>

<template>
  <PageContents size="full">
    <div :class="$style['top']">
      <div class="max-wrap">
        <div :class="$style['slice']">
          <div :class="[$style['slice__cell'], $style['slice__cell--wide']]">
            <!-- 상단 배너 -->
            <!-- DD : 관리자 등록 배너 -->
            <div :class="$style['top-banner']">
              <div :class="$style['top-banner__controller']">
                <div
                  ref="topBannerPagination"
                  :class="$style['top-banner__pagination']"
                ></div>
                <button
                  type="button"
                  :class="[
                    $style['top-banner__toggle'],
                    {
                      [$style['top-banner__toggle--autoplay']]:
                        state.topBanner.autoplay,
                    },
                  ]"
                  @click="topBannerToggle"
                >
                  <span class="for-a11y">
                    배너 롤링
                    {{ state.topBanner.autoplay ? '정지' : '재생' }}
                  </span>
                </button>
              </div>
              <Swiper
                v-if="state.topBanner.paginationEl"
                :modules="modules"
                :pagination="{
                  el: state.topBanner.paginationEl,
                  clickable: true,
                }"
                :autoplay="{
                  delay: 3000,
                }"
                :loop="true"
                @swiper="topBannerOn.swiper"
                @autoplayStart="topBannerOn.autoplayStart"
                @autoplayPause="topBannerOn.autoplayPause"
                @autoplayStop="topBannerOn.autoplayStop"
              >
                <!-- Case : 링크 기능 없을 때 -->
                <SwiperSlide>
                  <div :class="$style['top-banner__block']">
                    <div :class="$style['top-banner__contents']">
                      <div :class="$style['top-banner__category-wrap']">
                        <div :class="$style['top-banner__category']">상품</div>
                      </div>
                      <div :class="$style['top-banner__title']">
                        빠르고 간편한 인터넷 전용 대출<br />
                        e하나신용대출
                      </div>
                      <div :class="$style['top-banner__text']">
                        최대한도 6억원!<br />
                        최대 12개월까지!!
                      </div>
                    </div>
                    <div :class="$style['top-banner__img']">
                      <img
                        :src="`${BASE_URL}images/_dummy/banner-003.png`"
                        @error="
                          (e) => {
                            e.target.parentNode.classList.add('is-error');
                          }
                        "
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <!-- //Case : 링크 기능 없을 때 -->

                <!-- Case : 링크 기능 있을 때 (RouterLink) -->
                <SwiperSlide>
                  <div :class="$style['top-banner__block']">
                    <div :class="$style['top-banner__contents']">
                      <div :class="$style['top-banner__category-wrap']">
                        <div :class="$style['top-banner__category']">
                          이벤트
                        </div>
                      </div>
                      <div :class="$style['top-banner__title']">
                        타이틀 텍스트 최대 두줄까지 노출 타이틀 텍스트 최대
                        두줄까지 노출 타이틀 텍스트 최대 두줄까지 노출 타이틀
                        텍스트 최대 두줄까지 노출
                      </div>
                      <div :class="$style['top-banner__text']">
                        설명 텍스트 최대 두줄까지 노출 설명 텍스트 최대 두줄까지
                        노출 설명 텍스트 최대 두줄까지 노출 설명 텍스트 최대
                        두줄까지 노출 설명 텍스트 최대 두줄까지 노출 설명 텍스트
                        최대 두줄까지 노출 텍스트 최대 두줄까지 노출
                      </div>
                    </div>
                    <div :class="$style['top-banner__img']">
                      <img
                        :src="`${BASE_URL}images/_dummy/banner-003.png`"
                        @error="
                          (e) => {
                            e.target.parentNode.classList.add('is-error');
                          }
                        "
                      />
                    </div>
                    <RouterLink to="" :class="$style['top-banner__button']">
                      <span class="for-a11y">상세보기</span>
                    </RouterLink>
                  </div>
                </SwiperSlide>
                <!-- // Case : 링크 기능 있을 때 -->

                <!-- Case : 링크 기능 있을 때 (a tag) -->
                <SwiperSlide>
                  <div :class="$style['top-banner__block']">
                    <div :class="$style['top-banner__contents']">
                      <div :class="$style['top-banner__category-wrap']">
                        <div :class="$style['top-banner__category']">
                          이벤트
                        </div>
                      </div>
                      <div :class="$style['top-banner__title']">
                        타이틀 텍스트 최대 두줄까지 노출 타이틀 텍스트 최대
                        두줄까지 노출 타이틀 텍스트 최대 두줄까지 노출 타이틀
                        텍스트 최대 두줄까지 노출
                      </div>
                      <div :class="$style['top-banner__text']">
                        설명 텍스트 최대 두줄까지 노출 설명 텍스트 최대 두줄까지
                        노출 설명 텍스트 최대 두줄까지 노출 설명 텍스트 최대
                        두줄까지 노출 설명 텍스트 최대 두줄까지 노출 설명 텍스트
                        최대 두줄까지 노출 텍스트 최대 두줄까지 노출
                      </div>
                    </div>
                    <div :class="$style['top-banner__img']">
                      <img
                        :src="`${BASE_URL}images/_dummy/banner-003.png`"
                        @error="
                          (e) => {
                            e.target.parentNode.classList.add('is-error');
                          }
                        "
                      />
                    </div>
                    <a href="" :class="$style['top-banner__button']">
                      <span class="for-a11y">상세보기</span>
                    </a>
                  </div>
                </SwiperSlide>
                <!-- // Case : 링크 기능 있을 때 (a tag) -->
              </Swiper>
            </div>
            <!-- // DD : 관리자 등록 배너 -->
            <!-- // 상단 배너 -->

            <!-- 상단 퀵 메뉴 -->
            <div :class="$style['top-menu']">
              <ul :class="$style['top-menu__list']">
                <li :class="$style['top-menu__item']">
                  <RouterLink to="" :class="$style['top-menu__button']">
                    <span :class="$style['top-menu__icon']">
                      <IconSearchProgress />
                    </span>
                    <span :class="$style['top-menu__text']">진행상태조회</span>
                  </RouterLink>
                </li>
                <li :class="$style['top-menu__item']">
                  <RouterLink to="" :class="$style['top-menu__button']">
                    <span :class="$style['top-menu__icon']">
                      <IconRegistrationDocument />
                    </span>
                    <span :class="$style['top-menu__text']">서류등록</span>
                  </RouterLink>
                </li>
                <li :class="$style['top-menu__item']">
                  <RouterLink to="" :class="$style['top-menu__button']">
                    <span :class="$style['top-menu__icon']">
                      <IconRegisterCertificate />
                    </span>
                    <span :class="$style['top-menu__text']"
                      >증명서 발급/조회</span
                    >
                  </RouterLink>
                </li>
              </ul>
            </div>
            <!-- // 상단 퀵 메뉴 -->
          </div>
          <div :class="$style['slice__cell']">
            <!-- Case : 로그인 전 노출 폼 -->
            <section v-if="!state.isTestLogin" :class="$style['login']">
              <h2 class="for-a11y">로그인</h2>

              <UiTab>
                <NavTab :useUiTab="true">
                  <NavTabButton link="mainHomeLoginTab001">아이디</NavTabButton>
                  <NavTabButton link="mainHomeLoginTab002"
                    >공동인증서</NavTabButton
                  >
                </NavTab>

                <!-- 아이디 -->
                <UiTabPanel name="mainHomeLoginTab001">
                  <FormList>
                    <FormListItem titleText="아이디" target="#mainHomeLoginId">
                      <FormInvalid :error="state.idError">
                        <InputBlock :error="state.idError">
                          <InputBlockCell :flexible="true">
                            <BasicInput title="아이디" id="mainHomeLoginId" />
                          </InputBlockCell>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>

                    <FormListItem
                      titleText="비밀번호"
                      target="#mainHomeLoginPassword"
                    >
                      <FormInvalid :error="state.passwordError">
                        <InputBlock :error="state.passwordError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              type="password"
                              title="비밀번호"
                              id="mainHomeLoginPassword"
                            />
                          </InputBlockCell>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                  </FormList>

                  <ButtonList>
                    <ButtonListItem>
                      <BasicButton @click="testLogin">로그인</BasicButton>
                    </ButtonListItem>
                  </ButtonList>

                  <div :class="$style['login-menu']">
                    <ul :class="$style['login-menu__list']">
                      <li :class="$style['login-menu__item']">
                        <RouterLink to="" :class="$style['login-menu__link']">
                          아이디찾기
                        </RouterLink>
                      </li>
                      <li :class="$style['login-menu__item']">
                        <RouterLink to="" :class="$style['login-menu__link']">
                          비밀번호 찾기
                        </RouterLink>
                      </li>
                      <li :class="$style['login-menu__item']">
                        <RouterLink to="" :class="$style['login-menu__link']">
                          회원가입
                        </RouterLink>
                      </li>
                    </ul>
                  </div>
                </UiTabPanel>
                <!-- // 아이디 -->

                <!-- 공동인증서 -->
                <UiTabPanel name="mainHomeLoginTab002">
                  <BoxCheckList>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="mainHomeLoginBusinessType"
                        id="mainHomeLoginBusinessType001"
                        v-model="state.loginBusinessType.personal"
                      >
                        <BoxCheckLabel>개인 / 개인사업자</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="mainHomeLoginBusinessType"
                        id="mainHomeLoginBusinessType002"
                        v-model="state.loginBusinessType.corporate"
                      >
                        <BoxCheckLabel>법인</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                  </BoxCheckList>

                  <!-- Case : 개인 / 개인사업자 -->
                  <div v-if="state.loginBusinessType.personal">
                    <p :class="$style['login-guide']">
                      최초 로그인 시<br />
                      공동인증서 등록을 먼저 해주세요.
                    </p>
                    <ButtonList
                      align="full"
                      :classNames="{ wrap: 'row-margin-none' }"
                    >
                      <ButtonListItem>
                        <BasicButton :line="true" theme="quaternary"
                          >공동인증서 등록</BasicButton
                        >
                      </ButtonListItem>
                      <ButtonListItem>
                        <BasicButton>공동인증서 로그인</BasicButton>
                      </ButtonListItem>
                    </ButtonList>
                    <div :class="$style['login-menu']">
                      <ul :class="$style['login-menu__list']">
                        <li :class="$style['login-menu__item']">
                          <RouterLink to="" :class="$style['login-menu__link']">
                            회원가입
                          </RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- // Case : 개인 / 개인사업자 -->

                  <!-- Case : 법인 -->
                  <div
                    v-if="state.loginBusinessType.corporate"
                    class="row-margin-contents"
                  >
                    <FormList>
                      <FormListItem
                        titleText="법인명"
                        target="#mainHomeLoginBusinessName"
                        :classNames="{
                          item: $style['login-business-form-item'],
                        }"
                      >
                        <FormInvalid :error="state.businessNameError">
                          <InputBlock :error="state.businessNameError">
                            <InputBlockCell :flexible="true">
                              <BasicInput
                                title="법인명"
                                id="mainHomeLoginBusinessName"
                              />
                            </InputBlockCell>
                          </InputBlock>
                          <FormInvalidMessage>Error Message</FormInvalidMessage>
                        </FormInvalid>
                      </FormListItem>

                      <FormListItem
                        titleText="사업자번호"
                        target="#mainHomeLoginBusinessLicense"
                        :classNames="{
                          item: $style['login-business-form-item'],
                        }"
                      >
                        <FormInvalid :error="state.businessLicenseError">
                          <InputBlock :error="state.businessLicenseError">
                            <InputBlockCell :flexible="true">
                              <BasicInput
                                title="사업자번호"
                                id="mainHomeLoginBusinessLicense"
                              />
                            </InputBlockCell>
                          </InputBlock>
                          <FormInvalidMessage>Error Message</FormInvalidMessage>
                        </FormInvalid>
                      </FormListItem>

                      <FormListItem
                        titleText="법인번호"
                        target="#mainHomeLoginBusinessNumber001"
                        :classNames="{
                          item: $style['login-business-form-item'],
                        }"
                      >
                        <FormInvalid :error="state.businessNumberError">
                          <InputBlock :error="state.businessNumberError">
                            <InputBlockCell :flexible="true">
                              <BasicInput
                                type="number"
                                pattern="\d*"
                                title="법인번호 앞 6자리"
                                id="mainHomeLoginBusinessNumber001"
                              />
                            </InputBlockCell>
                            <InputBlockCell type="sub">-</InputBlockCell>
                            <InputBlockCell :flexible="true">
                              <BasicInput
                                type="password"
                                pattern="\d*"
                                title="법인번호 뒤 7자리"
                                id="mainHomeLoginBusinessNumber002"
                              />
                            </InputBlockCell>
                          </InputBlock>
                          <FormInvalidMessage>Error Message</FormInvalidMessage>
                        </FormInvalid>
                      </FormListItem>
                    </FormList>

                    <ButtonList
                      :classNames="{
                        wrap: 'row-margin-container-medium row-margin-bottom-none',
                      }"
                    >
                      <ButtonListItem>
                        <BasicButton>공동인증서 로그인</BasicButton>
                      </ButtonListItem>
                    </ButtonList>

                    <div :class="[$style['login-menu'], 'row-margin-contents']">
                      <ul :class="$style['login-menu__list']">
                        <li :class="$style['login-menu__item']">
                          <RouterLink to="" :class="$style['login-menu__link']">
                            회원가입
                          </RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- // Case : 법인 -->
                </UiTabPanel>
                <!-- // 공동인증서 -->
              </UiTab>
            </section>
            <!-- // Case : 로그인 전 노출 폼 -->

            <!-- Case : 로그인 후 노출 메뉴 -->
            <div v-if="state.isTestLogin" :class="$style['my-menu']">
              <ul :class="$style['my-menu__list']">
                <li :class="$style['my-menu__item']">
                  <RouterLink to="" :class="$style['my-menu__link']">
                    <span :class="$style['my-menu__icon']">
                      <IconCustomerInfo />
                    </span>
                    <span :class="$style['my-menu__title']">
                      계약현황<br />
                      조회
                    </span>
                  </RouterLink>
                </li>
                <li :class="$style['my-menu__item']">
                  <RouterLink to="" :class="$style['my-menu__link']">
                    <span :class="$style['my-menu__icon']">
                      <IconDate />
                    </span>
                    <span :class="$style['my-menu__title']">
                      상환<br />
                      스케줄
                    </span>
                  </RouterLink>
                </li>
                <li :class="$style['my-menu__item']">
                  <RouterLink to="" :class="$style['my-menu__link']">
                    <span :class="$style['my-menu__icon']">
                      <IconCorporateFinance />
                    </span>
                    <span :class="$style['my-menu__title']">
                      청구방법/<br />
                      청구지변경
                    </span>
                  </RouterLink>
                </li>
                <li :class="$style['my-menu__item']">
                  <RouterLink to="" :class="$style['my-menu__link']">
                    <span :class="$style['my-menu__icon']">
                      <IconDeposit />
                    </span>
                    <span :class="$style['my-menu__title']">
                      자동이체<br />
                      계좌변경
                    </span>
                  </RouterLink>
                </li>
                <li :class="$style['my-menu__item']">
                  <RouterLink to="" :class="$style['my-menu__link']">
                    <span :class="$style['my-menu__icon']">
                      <IconInstallment />
                    </span>
                    <span :class="$style['my-menu__title']">
                      중도상환<br />
                      신청
                    </span>
                  </RouterLink>
                </li>
                <li :class="$style['my-menu__item']">
                  <RouterLink to="" :class="$style['my-menu__link']">
                    <span :class="$style['my-menu__icon']">
                      <IconMyLoan />
                    </span>
                    <span :class="$style['my-menu__title']">
                      주소지/<br />
                      연락처 변경
                    </span>
                  </RouterLink>
                </li>
                <li :class="$style['my-menu__item']">
                  <RouterLink to="" :class="$style['my-menu__link']">
                    <span :class="$style['my-menu__icon']">
                      <IconCarSecurity />
                    </span>
                    <span :class="$style['my-menu__title']">
                      범칙금/<br />
                      자동차세 조회
                    </span>
                  </RouterLink>
                </li>
                <li :class="$style['my-menu__item']">
                  <RouterLink to="" :class="$style['my-menu__link']">
                    <span :class="$style['my-menu__icon']">
                      <IconHomeSetting />
                    </span>
                    <span :class="$style['my-menu__title']">
                      근저당설정<br />
                      해지 조회
                    </span>
                  </RouterLink>
                </li>
                <li :class="$style['my-menu__item']">
                  <RouterLink to="" :class="$style['my-menu__link']">
                    <span :class="$style['my-menu__icon']">
                      <IconLeaseStuff />
                    </span>
                    <span :class="$style['my-menu__title']">
                      온라인<br />
                      청구서
                    </span>
                  </RouterLink>
                </li>
              </ul>
            </div>
            <!-- // Case : 로그인 후 노출 메뉴 -->
          </div>
        </div>
      </div>
    </div>

    <div :class="$style['middle']">
      <div class="max-wrap">
        <div :class="$style['slice']">
          <div :class="[$style['slice__cell'], $style['slice__cell--wide']]">
            <!-- 즉시출고 핫딜! -->
            <section :class="$style['section']">
              <div :class="$style['section__head']">
                <div :class="$style['section__head-left']">
                  <h2 :class="$style['section__title']">즉시출고 핫딜!</h2>
                </div>
                <div :class="$style['section__head-right']">
                  <TextButton
                    :block="true"
                    :iconFillAll="true"
                    :classNames="{
                      wrap: 'color-gray-tertiary',
                    }"
                  >
                    전체보기
                    <template v-slot:rightIcon>
                      <IconAdd />
                    </template>
                  </TextButton>
                </div>
              </div>

              <div :class="$style['hot-deal']">
                <ul :class="$style['hot-deal__list']">
                  <li v-for="i in 4" :key="i" :class="$style['hot-deal__item']">
                    <RouterLink to="" :class="$style['hot-deal__link']">
                      <span :class="$style['hot-deal__thumb']">
                        <CarThumb
                          size="regular"
                          src="/images/_dummy/car-thumb.png"
                        />
                      </span>
                      <span :class="$style['hot-deal__brand']">현대</span>
                      <span :class="$style['hot-deal__model']"
                        >디 올 뉴 코나 Electric</span
                      >
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </section>
            <!-- // 즉시출고 핫딜! -->
          </div>
          <div :class="$style['slice__cell']">
            <!-- 오토금융 -->
            <div :class="$style['product-banners']">
              <ul :class="$style['product-banners__list']">
                <li :class="$style['product-banners__item']">
                  <RouterLink to="" :class="$style['product-banners__link']">
                    <span :class="$style['product-banners__category']"
                      >오토리스/렌터카</span
                    >
                    <span :class="$style['product-banners__title']">
                      쉽고 빠른<br />
                      견적조회
                    </span>
                  </RouterLink>
                </li>
                <li :class="$style['product-banners__item']">
                  <RouterLink
                    to=""
                    :class="[
                      $style['product-banners__link'],
                      $style['product-banners__link--secondary'],
                    ]"
                  >
                    <span :class="$style['product-banners__category']"
                      >중고차 오토론</span
                    >
                    <span :class="$style['product-banners__title']">
                      중고차 구입<br />
                      자금 대출
                    </span>
                  </RouterLink>
                </li>
              </ul>
            </div>
            <!-- // 오토금융 -->
          </div>
        </div>
      </div>
    </div>

    <div :class="$style['bottom']">
      <div class="max-wrap">
        <div :class="$style['slice']">
          <div :class="[$style['slice__cell'], $style['slice__cell--wide']]">
            <!-- 개인대출 -->
            <section :class="$style['section']">
              <div :class="$style['section__head']">
                <div :class="$style['section__head-left']">
                  <h2 :class="$style['section__title']">개인대출</h2>
                </div>
              </div>

              <div
                :class="[
                  $style['product-list'],
                  $style['product-list--secondary'],
                  $style['product-list--col-3'],
                ]"
              >
                <ul :class="$style['product-list__list']">
                  <li :class="$style['product-list__item']">
                    <div :class="$style['product-list__block']">
                      <div :class="$style['product-list__icon']">
                        <IconPig />
                      </div>
                      <h3 :class="$style['product-list__title']">
                        e하나신용대출
                      </h3>
                      <p :class="$style['product-list__text']">
                        빠르고 간편한<br />
                        인터넷 전용대출
                      </p>
                      <div :class="$style['product-list__link']">
                        <TextButton
                          theme="secondary"
                          :underline="true"
                          textSize="regular"
                          tagName="RouterLink"
                          to=""
                          :classNames="{
                            wrap: $style['product-list__link-button'],
                          }"
                        >
                          바로가기
                        </TextButton>
                      </div>
                    </div>
                  </li>
                  <li :class="$style['product-list__item']">
                    <div :class="$style['product-list__block']">
                      <div :class="$style['product-list__icon']">
                        <IconBuilding />
                      </div>
                      <h3 :class="$style['product-list__title']">
                        행복아파트론
                      </h3>
                      <p :class="$style['product-list__text']">
                        아파트를 소유자를<br />
                        대상으로 하는 신용대출
                      </p>
                      <div :class="$style['product-list__link']">
                        <TextButton
                          theme="secondary"
                          :underline="true"
                          textSize="regular"
                          tagName="RouterLink"
                          to=""
                          :classNames="{
                            wrap: $style['product-list__link-button'],
                          }"
                        >
                          바로가기
                        </TextButton>
                      </div>
                    </div>
                  </li>
                  <li :class="$style['product-list__item']">
                    <div :class="$style['product-list__block']">
                      <div :class="$style['product-list__icon']">
                        <IconVip />
                      </div>
                      <h3 :class="$style['product-list__title']">
                        우수고객추가대출
                      </h3>
                      <p :class="$style['product-list__text']">
                        우수고객에게<br />
                        추가 자금 지원
                      </p>
                      <div :class="$style['product-list__link']">
                        <TextButton
                          theme="secondary"
                          :underline="true"
                          textSize="regular"
                          tagName="RouterLink"
                          to=""
                          :classNames="{
                            wrap: $style['product-list__link-button'],
                          }"
                        >
                          바로가기
                        </TextButton>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <!-- // 개인대출 -->
          </div>
          <div :class="$style['slice__cell']">
            <!-- 의료기·설비 -->
            <section :class="$style['section']">
              <div :class="$style['section__head']">
                <div :class="$style['section__head-left']">
                  <h2 :class="$style['section__title']">의료기·설비</h2>
                </div>
              </div>

              <div :class="$style['link-banners']">
                <ul :class="$style['link-banners__list']">
                  <li :class="$style['link-banners__item']">
                    <RouterLink to="" :class="$style['link-banners__link']">
                      <span :class="$style['link-banners__icon']">
                        <IconLeaseStuff />
                      </span>
                      <span :class="$style['link-banners__contents']">
                        <span :class="$style['link-banners__title']"
                          >일반리스</span
                        >
                        <span :class="$style['link-banners__text']">
                          물건 장기대여<br />
                          금융 상품!
                        </span>
                      </span>
                      <span :class="$style['link-banners__arrow']">
                        <IconLink />
                      </span>
                    </RouterLink>
                  </li>
                  <li :class="$style['link-banners__item']">
                    <RouterLink to="" :class="$style['link-banners__link']">
                      <span :class="$style['link-banners__icon']">
                        <IconMedical />
                      </span>
                      <span :class="$style['link-banners__contents']">
                        <span :class="$style['link-banners__title']"
                          >일반할부</span
                        >
                        <span :class="$style['link-banners__text']">
                          의료장비, 의료소모품,<br />
                          설비 구입 지원
                        </span>
                      </span>
                      <span :class="$style['link-banners__arrow']">
                        <IconLink />
                      </span>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </section>
            <!-- // 의료기·설비 -->
          </div>
        </div>

        <div :class="$style['slice']">
          <div :class="$style['slice__cell']">
            <!-- 이벤트 -->
            <section :class="$style['section']">
              <div :class="[$style['section__head'], 'row-margin-item-group']">
                <div :class="$style['section__head-left']">
                  <h2 :class="$style['section__title']">이벤트</h2>
                </div>
              </div>

              <div :class="$style['event']">
                <div :class="$style['event__cell']">
                  <!-- 이벤트 배너 A -->
                  <!-- DD : 관리자 등록 배너 -->
                  <div :class="$style['event-banner']">
                    <Swiper
                      :modules="modules"
                      :pagination="{
                        clickable: true,
                      }"
                    >
                      <!-- Case : 링크 기능 없을 때 -->
                      <SwiperSlide>
                        <div :class="$style['event-banner__block']">
                          <div :class="$style['event-banner__img']">
                            <img
                              :src="`${BASE_URL}images/_dummy/banner-004.png`"
                              @error="
                                (e) => {
                                  e.target.parentNode.classList.add('is-error');
                                }
                              "
                              :alt="'배너 설명 넣어주세요'"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <!-- //Case : 링크 기능 없을 때 -->

                      <!-- Case : 링크 기능 있을 때 (RouterLink) -->
                      <SwiperSlide>
                        <div :class="$style['event-banner__block']">
                          <div :class="$style['event-banner__img']">
                            <img
                              :src="`${BASE_URL}images/_dummy/banner-005.png`"
                              @error="
                                (e) => {
                                  e.target.parentNode.classList.add('is-error');
                                }
                              "
                              :alt="'배너 설명 넣어주세요'"
                            />
                          </div>
                          <RouterLink
                            to=""
                            :class="$style['event-banner__button']"
                          >
                            <span class="for-a11y">상세보기</span>
                          </RouterLink>
                        </div>
                      </SwiperSlide>
                      <!-- // Case : 링크 기능 있을 때 -->

                      <!-- Case : 링크 기능 있을 때 (a tag) -->
                      <SwiperSlide>
                        <div :class="$style['event-banner__block']">
                          <div :class="$style['event-banner__img']">
                            <img
                              :src="`${BASE_URL}images/_dummy/banner-004.png`"
                              @error="
                                (e) => {
                                  e.target.parentNode.classList.add('is-error');
                                }
                              "
                              :alt="'배너 설명 넣어주세요'"
                            />
                          </div>
                          <a href="" :class="$style['event-banner__button']">
                            <span class="for-a11y">상세보기</span>
                          </a>
                        </div>
                      </SwiperSlide>
                      <!-- // Case : 링크 기능 있을 때 (a tag) -->
                    </Swiper>
                  </div>
                  <!-- // DD : 관리자 등록 배너 -->
                  <!-- // 이벤트 배너 A -->
                </div>
                <div :class="$style['event__cell']">
                  <!-- 이벤트 배너 B -->
                  <!-- DD : 관리자 등록 배너 -->
                  <div :class="$style['event-banner']">
                    <Swiper
                      :modules="modules"
                      :pagination="{
                        clickable: true,
                      }"
                    >
                      <!-- Case : 링크 기능 없을 때 -->
                      <SwiperSlide>
                        <div :class="$style['event-banner__block']">
                          <div :class="$style['event-banner__img']">
                            <img
                              :src="`${BASE_URL}images/_dummy/banner-005.png`"
                              @error="
                                (e) => {
                                  e.target.parentNode.classList.add('is-error');
                                }
                              "
                              :alt="'배너 설명 넣어주세요'"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <!-- //Case : 링크 기능 없을 때 -->

                      <!-- Case : 링크 기능 있을 때 (RouterLink) -->
                      <SwiperSlide>
                        <div :class="$style['event-banner__block']">
                          <div :class="$style['event-banner__img']">
                            <img
                              :src="`${BASE_URL}images/_dummy/banner-004.png`"
                              @error="
                                (e) => {
                                  e.target.parentNode.classList.add('is-error');
                                }
                              "
                              :alt="'배너 설명 넣어주세요'"
                            />
                          </div>
                          <RouterLink
                            to=""
                            :class="$style['event-banner__button']"
                          >
                            <span class="for-a11y">상세보기</span>
                          </RouterLink>
                        </div>
                      </SwiperSlide>
                      <!-- // Case : 링크 기능 있을 때 -->

                      <!-- Case : 링크 기능 있을 때 (a tag) -->
                      <SwiperSlide>
                        <div :class="$style['event-banner__block']">
                          <div :class="$style['event-banner__img']">
                            <img
                              :src="`${BASE_URL}images/_dummy/banner-005.png`"
                              @error="
                                (e) => {
                                  e.target.parentNode.classList.add('is-error');
                                }
                              "
                              :alt="'배너 설명 넣어주세요'"
                            />
                          </div>
                          <a href="" :class="$style['event-banner__button']">
                            <span class="for-a11y">상세보기</span>
                          </a>
                        </div>
                      </SwiperSlide>
                      <!-- // Case : 링크 기능 있을 때 (a tag) -->
                    </Swiper>
                  </div>
                  <!-- // DD : 관리자 등록 배너 -->
                  <!-- // 이벤트 배너 B -->
                </div>
              </div>
            </section>
            <!-- // 이벤트 -->
          </div>
          <div :class="$style['slice__cell']">
            <!-- 공지사항 -->
            <section :class="$style['section']">
              <div :class="[$style['section__head'], 'row-margin-item-group']">
                <div :class="$style['section__head-left']">
                  <h2 :class="$style['section__title']">공지사항</h2>
                </div>
                <div :class="$style['section__head-right']">
                  <TextButton
                    :block="true"
                    :iconFillAll="true"
                    textSize="regular"
                    iconSize="regular"
                    :classNames="{
                      wrap: 'color-gray-tertiary',
                    }"
                  >
                    전체보기
                    <template v-slot:rightIcon>
                      <IconAdd />
                    </template>
                  </TextButton>
                </div>
              </div>

              <div :class="$style['notice']">
                <RouterLink to="" :class="$style['notice__link']">
                  <span :class="$style['notice__title']"
                    >채권양도 관련 개인신용정보 제공사실 공지문 타이틀 최대 한줄
                    노출 타이틀 최대 한줄 노출</span
                  >
                  <span :class="$style['notice__date']">2022.08.30</span>
                </RouterLink>
              </div>
            </section>
            <!-- // 공지사항 -->

            <!-- 고객센터 -->
            <section :class="$style['section']">
              <div :class="[$style['section__head'], 'row-margin-item-group']">
                <div :class="$style['section__head-left']">
                  <h2 :class="$style['section__title']">고객센터</h2>
                </div>
                <div :class="$style['section__head-right']">
                  <TextButton
                    :block="true"
                    :iconFillAll="true"
                    textSize="regular"
                    iconSize="regular"
                    :classNames="{
                      wrap: 'color-gray-tertiary',
                    }"
                  >
                    전체보기
                    <template v-slot:rightIcon>
                      <IconAdd />
                    </template>
                  </TextButton>
                </div>
              </div>

              <div
                :class="[
                  $style['icon-list'],
                  $style['icon-list--wrap'],
                  $style['icon-list--col-2'],
                ]"
              >
                <ul :class="$style['icon-list__list']">
                  <li :class="$style['icon-list__item']">
                    <RouterLink to="" :class="$style['icon-list__block']">
                      <span :class="$style['icon-list__icon']">
                        <IconContractGray />
                      </span>
                      <span :class="$style['icon-list__content']">
                        <span :class="$style['icon-list__title']"
                          >전자민원접수</span
                        >
                        <span :class="$style['icon-list__text']">
                          불편했던 점을 말씀해주세요.<br />
                          신속히 개선하도록 하겠습니다.
                        </span>
                      </span>
                    </RouterLink>
                  </li>
                  <li :class="$style['icon-list__item']">
                    <RouterLink to="" :class="$style['icon-list__block']">
                      <span :class="$style['icon-list__icon']">
                        <IconWarning />
                      </span>
                      <span :class="$style['icon-list__content']">
                        <span :class="$style['icon-list__title']"
                          >금융소비자보호</span
                        >
                        <span :class="$style['icon-list__text']">
                          금융소비자보호의 권익 보호를 위해<br />
                          노력하겠습니다.
                        </span>
                      </span>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </section>
            <!-- // 고객센터 -->
          </div>
        </div>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/MainHome.scss';
</style>

<script>
// My_P08_p003
// My_P08_p004

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import IconPhone from '@/assets/images/icon/phone.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconPersonalTerms from '@/assets/images/icon/personal-terms.svg?component';
import IconDeposit from '@/assets/images/icon/deposit.svg?component';
import IconCallMint from '@/assets/images/icon/call-mint.svg?component';
import IconCompleted from '@/assets/images/icon/completed.svg?component';
import IconContract from '@/assets/images/icon/contract.svg?component';
import IconCarCheck from '@/assets/images/icon/car-check.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';
import IconDocumentSearch from '@/assets/images/icon/document-search.svg?component';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import IconLinkSmall from '@/assets/images/icon/link-small.svg?component';
import TextButton from '@/components/ui/button/TextButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    IconPhone,
    IconSend,
    IconPersonalTerms,
    IconDeposit,
    IconCallMint,
    IconCompleted,
    IconContract,
    IconCarCheck,
    IconCar,
    IconDocumentSearch,
    IconLinkSmall,
    BasicButton,
    NoticeText,
    TextButton,
    ButtonList,
    ButtonListItem,
  },
};
</script>

<template>
  <UiTab>
    <!-- <UiTab v-slot="tabSlotProps"> -->
    <PageContents>
      <PageHead>
        <!-- case : 만기후처리_반환 -->
        <PageTitle
          >오토리스 계약 만기 1개월 전까지<br />만기후처리를 반드시 선택해
          주세요</PageTitle
        >
        <!-- //case : 만기후처리_반환 -->
        <!-- case : 만기후처리_연장  -->
        <PageTitle
          >만기후 연장(재리스) 신청이<br />
          완료되었습니다.</PageTitle
        >
        <!-- //case : 만기후처리_연장  -->
      </PageHead>
      <BasicBox class="row-margin-block row-margin-top-none">
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-title-2 font-weight-medium">
              NH투자증권(유캔그린)
            </h3>
          </BasicBoxHeadLeft>
          <!-- case : 만기후처리_연장  -->
          <BasicBoxHeadRight>
            <TextButton :classNames="{ wrap: 'text-body-3 color-green' }">
              만기후처리 변경
              <template v-slot:rightIcon>
                <IconLinkSmall />
              </template>
            </TextButton>
          </BasicBoxHeadRight>
          <!-- //case : 만기후처리_연장  -->
        </BasicBoxHead>
        <div>대기영역</div>
        <!-- case : 만기후처리_연장 -->
        <ButtonList :wrap="true" align="center">
          <ButtonListItem>
            <BasicButton size="regular">연장 심사접수 하러가기</BasicButton>
          </ButtonListItem>
        </ButtonList>
        <!-- //case : 만기후처리_연장  -->
      </BasicBox>

      <NavTab :useUiTab="true">
        <NavTabButton link="testNavTab001_001">연장</NavTabButton>
        <NavTabButton link="testNavTab001_002">반환</NavTabButton>
        <NavTabButton link="testNavTab001_003">구매</NavTabButton>
      </NavTab>

      <UiTabPanel name="testNavTab001_001">
        <section>
          <h3 class="text-title-1 font-weight-bold">
            만기후 연장(재렌트) 진행절차
          </h3>
          <div :class="[$style['step'], 'row-margin-contents']">
            <ul :class="$style['step__list']">
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 1</div>
                    <p :class="$style['step__text']">
                      홈페이지/모바일(웹)을 통하여
                      <strong> 재렌트 신청 및 견적을 요청 </strong>합니다.
                      (신용조회동의)
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconPhone />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 2</div>
                    <p :class="$style['step__text']">
                      <strong>재렌트 견적 발송 및 재렌트 상담</strong>을
                      진행합니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconSend />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 3</div>
                    <p :class="$style['step__text']">
                      <strong>서면약정 또는 온라인약정</strong>으로 계약이
                      진행됩니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconPersonalTerms />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 4</div>
                    <p :class="$style['step__text']">
                      입금/지급 <strong>금액을 정산</strong>합니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconDeposit />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 5</div>
                    <p :class="$style['step__text']">
                      계약사항에 대해
                      <strong>이해하였음을 유선상 확인</strong>합니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconCallMint />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 6</div>
                    <p :class="$style['step__text']">
                      <strong>재렌트가 완료</strong>됩니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconCompleted />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section class="row-margin-block-small">
          <h3 class="text-title-1 font-weight-bold">상품안내</h3>
        </section>
        <section>
          <h3 class="text-title-1 font-weight-bold">유의사항</h3>
        </section>

        <div class="row-margin-block">
          <BasicButton size="regular">연장 신청</BasicButton>
        </div>
      </UiTabPanel>
      <UiTabPanel name="testNavTab001_002">
        <section>
          <h3 class="text-title-1 font-weight-bold">만기후 반환 진행절차</h3>
          <div :class="[$style['step'], 'row-margin-contents']">
            <ul :class="$style['step__list']">
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 1</div>
                    <p :class="$style['step__text']">
                      반환 일시, 장소 등 <strong>반환정보를 등록</strong>합니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconContract />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 2</div>
                    <p :class="$style['step__text']">
                      지정 일시, 장소에서 <strong>자동차를 반환</strong>합니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconCar />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 3</div>
                    <div :class="$style['step__text']">
                      지정 평가기관에서
                      <strong>반환자동차의 상태 및 성능을 평가</strong>합니다.
                      <NoticeText class="row-margin-item"
                        >평가결과에 따라 ‘차량평가정산금’이 발생될 수
                        있습니다.</NoticeText
                      >
                    </div>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconDocumentSearch />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 4</div>
                    <p :class="$style['step__text']">
                      반환등록 시
                      <strong>발생 비용을 정산</strong>(입금/지급)합니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconDeposit />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 5</div>
                    <p :class="$style['step__text']">
                      <strong>반환처리가 완료</strong>됩니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconCompleted />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <div class="row-margin-block">
          <BasicButton size="regular">반환 신청</BasicButton>
        </div>
      </UiTabPanel>
      <UiTabPanel name="testNavTab001_003">
        <section>
          <h3 class="text-title-1 font-weight-bold">만기후 구매 진행절차</h3>
          <div :class="[$style['step'], 'row-margin-contents']">
            <ul :class="$style['step__list']">
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 1</div>
                    <p :class="$style['step__text']">
                      <strong>구매방법</strong>(직접/이전대행)선택 및
                      <strong>구매정보</strong>(매도용 인감신청정보)를
                      입력합니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconContract />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 2</div>
                    <p :class="$style['step__text']">
                      구매 등록 시 발생
                      <strong>비용을 정산</strong> (입금/지급)합니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconDeposit />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 3</div>
                    <p :class="$style['step__text']">
                      차량 명의를 고객명의로
                      <strong>소유권 이전등록</strong> 합니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconPersonalTerms />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 4</div>
                    <p :class="$style['step__text']">
                      <strong>구매 처리가 완료</strong>됩니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconCarCheck />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <div class="row-margin-block">
          <BasicButton size="regular">구매 신청</BasicButton>
        </div>
      </UiTabPanel>
    </PageContents>
  </UiTab>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/My_P08_p003.scss';
</style>

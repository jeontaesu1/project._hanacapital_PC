<script>
// MI_P00_p002
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    NavTab,
    NavTabButton,
    BasicButton,
    BasicHr,
    ButtonList,
    ButtonListItem,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    RoundStatus,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageTitle>계약현황</PageTitle>
    </PageHead>

    <!-- Case : 탭2개 캐피탈 계약/종료계약 -->
    <NavTab>
      <NavTabButton tagName="button" type="button" :active="true">
        캐피탈 계약
      </NavTabButton>
      <NavTabButton tagName="button" type="button">종료된 계약</NavTabButton>
    </NavTab>
    <!-- //Case : 탭2개 캐피탈 계약/종료계약 -->
    <!-- Case : 탭2개 팩토링 계약/종료계약 -->
    <NavTab>
      <NavTabButton tagName="button" type="button" :active="true">
        팩토링 계약
      </NavTabButton>
      <NavTabButton tagName="button" type="button">종료된 계약</NavTabButton>
    </NavTab>
    <!-- //Case : 탭2개 팩토링 계약/종료계약 -->
    <!-- Case : 탭3개 캐피탈 계약/팩토링 계약/종료계약 -->
    <NavTab>
      <NavTabButton tagName="button" type="button" :active="true">
        캐피탈 계약
      </NavTabButton>
      <NavTabButton tagName="button" type="button">팩토링 계약</NavTabButton>
      <NavTabButton tagName="button" type="button">종료된 계약</NavTabButton>
    </NavTab>
    <!-- //Case : 탭3개 캐피탈 계약/팩토링 계약/종료계약 -->

    <!-- Case : 캐피탈 계약 영역 -->
    <ul :class="$style['logs']">
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">오토리스 20고5678</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">BMW 435d</div>
                  </li>
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">오토리스 20고5678</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">BMW 435d</div>
                  </li>
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <RoundStatus theme="nonary" size="large" :block="true"
              >연체</RoundStatus
            >
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">렌트카 20고5678</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">BMW 435d</div>
                  </li>
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>정비서비스</KeyValueTitle>
              <KeyValueText>프리미엄</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <div
            :class="[
              $style['inline-alert'],
              $style['inline-alert--error'],
              'row-margin-contents',
            ]"
          >
            <p :class="$style['inline-alert__text']">
              계약만기일이 180일 남았습니다. 만기안내장을 확인해 주세요.
            </p>
          </div>

          <div :class="[$style['logs__button'], 'row-margin-contents']">
            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-none',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular" line="true">만기안내장</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </div>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">
                리스[금융] 20고5678
              </h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">BMW 435d</div>
                  </li>
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <div
            :class="[
              $style['inline-alert'],
              $style['inline-alert--error'],
              'row-margin-contents',
            ]"
          >
            <p :class="$style['inline-alert__text']">
              계약만기일이 90일 남았습니다. 만기후처리를 등록해 주세요.
            </p>
          </div>

          <div :class="[$style['logs__button'], 'row-margin-contents']">
            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-none',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular" line="true">만기안내장</BasicButton>
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton size="regular">만기후처리</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </div>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">스탁론(키움증권)</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>원금균등상환</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <div :class="[$style['logs__button'], 'row-margin-contents']">
            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-none',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular">연장</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </div>
        </div>
      </li>
    </ul>
    <!-- //Case : 캐피탈 계약 영역 -->

    <!-- Case : 종료된 캐피탈계약 리스트 영역 -->
    <ul :class="$style['logs']">
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">오토리스 20고5678</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">BMW 435d</div>
                  </li>
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <RoundStatus size="large" :block="true">종료</RoundStatus>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출원금</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">오토리스 20고5678</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">BMW 435d</div>
                  </li>
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <RoundStatus size="large" :block="true">종료</RoundStatus>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출원금</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">오토리스 20고5678</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">BMW 435d</div>
                  </li>
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <RoundStatus size="large" :block="true">종료</RoundStatus>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출원금</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">오토리스 20고5678</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">BMW 435d</div>
                  </li>
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <RoundStatus size="large" :block="true">종료</RoundStatus>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출원금</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
    </ul>
    <!-- //Case : 종료된 캐피탈계약 리스트 영역 -->

    <!-- Case : 팩토링 계약 영역 -->
    <ul :class="$style['logs']">
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">야나두</h3>
              <p class="row-margin-item-small text-body-3 color-gray-tertiary">
                품목명이 노출됩니다.
              </p>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>월 납입금</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>할부금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>할부기간</KeyValueTitle>
              <KeyValueText>12/36개월</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>전화번호</KeyValueTitle>
              <KeyValueText>02-1234-6789</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">야나두</h3>
              <p class="row-margin-item-small text-body-3 color-gray-tertiary">
                품목명이 노출됩니다.
              </p>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>월 납입금</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>할부금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>할부기간</KeyValueTitle>
              <KeyValueText>12/36개월</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>전화번호</KeyValueTitle>
              <KeyValueText>02-1234-6789</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">야나두</h3>
              <p class="row-margin-item-small text-body-3 color-gray-tertiary">
                품목명이 노출됩니다.
              </p>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>월 납입금</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>할부금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>할부기간</KeyValueTitle>
              <KeyValueText>12/36개월</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>전화번호</KeyValueTitle>
              <KeyValueText>02-1234-6789</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">현대렌탈</h3>
              <p class="row-margin-item-small text-body-3 color-gray-tertiary">
                품목명이 노출됩니다.
              </p>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>월 납입금</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>렌탈잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>렌탈기간</KeyValueTitle>
              <KeyValueText>12/36개월</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>전화번호</KeyValueTitle>
              <KeyValueText>02-1234-6789</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">현대렌탈</h3>
              <p class="row-margin-item-small text-body-3 color-gray-tertiary">
                품목명이 노출됩니다.
              </p>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>월 납입금</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>렌탈잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>렌탈기간</KeyValueTitle>
              <KeyValueText>12/36개월</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>전화번호</KeyValueTitle>
              <KeyValueText>02-1234-6789</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
    </ul>
    <!-- //Case : 팩토링 계약 영역 -->

    <!-- Case : 종료된 팩토링계약 리스트 영역 -->
    <ul :class="$style['logs']">
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">야나두</h3>
              <p class="row-margin-item-small text-body-3 color-gray-tertiary">
                품목명이 노출됩니다.
              </p>
            </div>
            <RoundStatus size="large" :block="true">종료</RoundStatus>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>할부기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>할부금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>전화번호</KeyValueTitle>
              <KeyValueText>02-1234-6789</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">야나두</h3>
              <p class="row-margin-item-small text-body-3 color-gray-tertiary">
                품목명이 노출됩니다.
              </p>
            </div>
            <RoundStatus size="large" :block="true">종료</RoundStatus>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>할부기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>할부금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>전화번호</KeyValueTitle>
              <KeyValueText>02-1234-6789</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">야나두</h3>
              <p class="row-margin-item-small text-body-3 color-gray-tertiary">
                품목명이 노출됩니다.
              </p>
            </div>
            <RoundStatus size="large" :block="true">종료</RoundStatus>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>할부기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>할부금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>전화번호</KeyValueTitle>
              <KeyValueText>02-1234-6789</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">현대렌탈</h3>
              <p class="row-margin-item-small text-body-3 color-gray-tertiary">
                품목명이 노출됩니다.
              </p>
            </div>
            <RoundStatus size="large" :block="true">종료</RoundStatus>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>렌탈기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>월 렌탈료</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>전화번호</KeyValueTitle>
              <KeyValueText>02-1234-6789</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">현대렌탈</h3>
              <p class="row-margin-item-small text-body-3 color-gray-tertiary">
                품목명이 노출됩니다.
              </p>
            </div>
            <RoundStatus size="large" :block="true">종료</RoundStatus>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>렌탈기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>월 렌탈료</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>전화번호</KeyValueTitle>
              <KeyValueText>02-1234-6789</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
    </ul>
    <!-- //Case : 종료된 팩토링계약 리스트 영역 -->

    <!-- Case : 자동차금융 -->
    <ul :class="$style['logs']">
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">렌트카 20고5678</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">BMW 435d</div>
                  </li>
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>정비서비스</KeyValueTitle>
              <KeyValueText>프리미엄</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">
                리스[금융] 20고5678
              </h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">BMW 435d</div>
                  </li>
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">
                리스[금융] 20고5678
              </h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">BMW 435d</div>
                  </li>
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">오토론 20고5678</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">BMW 435d</div>
                  </li>
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>원금균등상환</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">중고차론 20고5678</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">BMW 435d</div>
                  </li>
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>원금균등상환</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">렌트카 20고5678</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">BMW 435d</div>
                  </li>
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>정비서비스</KeyValueTitle>
              <KeyValueText>프리미엄</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <div
            :class="[
              $style['inline-alert'],
              $style['inline-alert--error'],
              'row-margin-contents',
            ]"
          >
            <p :class="$style['inline-alert__text']">
              계약만기일이 180일 남았습니다. 만기안내장을 확인해 주세요.
            </p>
          </div>

          <div :class="[$style['logs__button'], 'row-margin-contents']">
            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-none',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular" line="true">만기안내장</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </div>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">
                리스[금융] 20고5678
              </h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">BMW 435d</div>
                  </li>
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <div
            :class="[
              $style['inline-alert'],
              $style['inline-alert--error'],
              'row-margin-contents',
            ]"
          >
            <p :class="$style['inline-alert__text']">
              계약만기일이 90일 남았습니다. 만기후처리를 등록해 주세요.
            </p>
          </div>

          <div :class="[$style['logs__button'], 'row-margin-contents']">
            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-none',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular" line="true">만기안내장</BasicButton>
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton size="regular">만기후처리</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </div>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">오토리스 20고5678</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">BMW 435d</div>
                  </li>
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <RoundStatus size="large" :block="true">종료</RoundStatus>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출원금</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
    </ul>
    <!-- //Case : 자동차금융 -->

    <!-- Case : 개인금융 -->
    <ul :class="$style['logs']">
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">신용대출</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>원금균등상환</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일자</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">아파트담보대출</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>원금균등상환</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일자</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">스탁론(키움증권)</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>원금균등상환</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일자</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">스탁론(키움증권)</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>원금균등상환</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일자</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>
          <div :class="[$style['logs__button'], 'row-margin-contents']">
            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-none',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular">연장</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </div>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">담보대출</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>원금균등상환</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일자</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">내구제</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일자</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
    </ul>
    <!-- //Case : 개인금융 -->
    <!-- Case : 기업금융 -->
    <ul :class="$style['logs']">
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">의료기리스</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일자</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">산업재/선박리스</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일자</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">건설상용금융</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>원금균등상환</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일자</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
    </ul>
    <!-- //Case : 기업금융 -->
    <!-- case : 팩토링 -->
    <ul :class="$style['logs']">
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">야나두</h3>
              <p class="row-margin-item-small text-body-3 color-gray-tertiary">
                품목명이 노출됩니다.
              </p>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>월 납입금</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>렌탈잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>렌탈기간</KeyValueTitle>
              <KeyValueText>12/36개월</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>전화번호</KeyValueTitle>
              <KeyValueText>02-1234-6789</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">야나두</h3>
              <p class="row-margin-item-small text-body-3 color-gray-tertiary">
                품목명이 노출됩니다.
              </p>
            </div>
            <RoundStatus size="large" :block="true">종료</RoundStatus>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>할부기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>할부금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>전화번호</KeyValueTitle>
              <KeyValueText>02-1234-6789</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">현대렌탈</h3>
              <p class="row-margin-item-small text-body-3 color-gray-tertiary">
                품목명이 노출됩니다.
              </p>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>월 납입금</KeyValueTitle>
              <KeyValueText class="color-green">6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>렌탈잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>렌탈기간</KeyValueTitle>
              <KeyValueText>12/36개월</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>전화번호</KeyValueTitle>
              <KeyValueText>02-1234-6789</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">현대렌탈</h3>
              <p class="row-margin-item-small text-body-3 color-gray-tertiary">
                품목명이 노출됩니다.
              </p>
            </div>
            <RoundStatus size="large" :block="true">종료</RoundStatus>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />
          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>렌탈기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>월 렌탈료</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>전화번호</KeyValueTitle>
              <KeyValueText>02-1234-6789</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
    </ul>
    <!-- //case : 팩토링 -->

    <!-- Case : 첫번째 페이지일 때 -->
    <PaginationNav>
      <PaginationNavArrow type="prev" :disabled="true" />
      <PaginationNavNumber :active="true">1</PaginationNavNumber>
      <PaginationNavNumber>2</PaginationNavNumber>
      <PaginationNavNumber>3</PaginationNavNumber>
      <PaginationNavNumber>4</PaginationNavNumber>
      <PaginationNavNumber>5</PaginationNavNumber>
      <PaginationNavNumber>6</PaginationNavNumber>
      <PaginationNavNumber>7</PaginationNavNumber>
      <PaginationNavEllipsis />
      <PaginationNavNumber>999</PaginationNavNumber>
      <PaginationNavArrow type="next" />
    </PaginationNav>
    <!-- // Case : 첫번째 페이지일 때 -->

    <!-- Case : 중간 페이지일 때 -->
    <PaginationNav>
      <PaginationNavArrow type="prev" />
      <PaginationNavNumber>1</PaginationNavNumber>
      <PaginationNavEllipsis />
      <PaginationNavNumber>13</PaginationNavNumber>
      <PaginationNavNumber>14</PaginationNavNumber>
      <PaginationNavNumber :active="true">15</PaginationNavNumber>
      <PaginationNavNumber>16</PaginationNavNumber>
      <PaginationNavNumber>17</PaginationNavNumber>
      <PaginationNavEllipsis />
      <PaginationNavNumber>99</PaginationNavNumber>
      <PaginationNavArrow type="next" />
    </PaginationNav>
    <!-- // Case : 중간 페이지일 때 -->

    <!-- Case : 마지막 페이지일 때 -->
    <PaginationNav>
      <PaginationNavArrow type="prev" />
      <PaginationNavNumber>1</PaginationNavNumber>
      <PaginationNavEllipsis />
      <PaginationNavNumber>93</PaginationNavNumber>
      <PaginationNavNumber>94</PaginationNavNumber>
      <PaginationNavNumber>95</PaginationNavNumber>
      <PaginationNavNumber>96</PaginationNavNumber>
      <PaginationNavNumber>97</PaginationNavNumber>
      <PaginationNavNumber>98</PaginationNavNumber>
      <PaginationNavNumber :active="true">99</PaginationNavNumber>
      <PaginationNavArrow type="next" :disabled="true" />
    </PaginationNav>
    <!-- // Case : 마지막 페이지일 때 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_p002.scss';
</style>

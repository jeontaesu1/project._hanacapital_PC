<script>
import { RouterLink } from 'vue-router';

import DropDownMenu from '@/components/ui/layout/DropDownMenu.vue';

import ImgGroupLogo from '@/assets/images/common/logo-hana-group.svg?component';
import IconFacebook from '@/assets/images/common/facebook.svg?component';
import IconYoutube from '@/assets/images/common/youtube.svg?component';
import IconInstagram from '@/assets/images/common/instagram.svg?component';
import IconGlobal from '@/assets/images/common/global.svg?component';

export default {
  components: {
    RouterLink,
    DropDownMenu,
    ImgGroupLogo,
    IconFacebook,
    IconYoutube,
    IconInstagram,
    IconGlobal,
  },
};
</script>

<template>
  <div :class="$style['footer-wrap']">
    <footer :class="$style['footer']">
      <h2 class="for-a11y">바닥 글</h2>

      <div :class="$style['footer__row']">
        <div :class="$style['footer__cell']">
          <p :class="$style['tel']">
            <span :class="$style['tel__text']">고객센터 1800-1110</span>
            <span :class="$style['tel__sub']">(업무시간 09:00 ~ 18:00)</span>
          </p>
        </div>
        <div
          :class="[$style['footer__cell'], $style['footer__cell--flexible']]"
        >
          <div :class="$style['nav']">
            <ul :class="$style['nav__list']">
              <li :class="$style['nav__item']">
                <RouterLink to="" :class="$style['nav__link']">
                  <span :class="$style['nav__text']">회사소개</span>
                </RouterLink>
              </li>
              <li :class="$style['nav__item']">
                <RouterLink to="" :class="$style['nav__link']">
                  <span :class="$style['nav__text']">지점안내</span>
                </RouterLink>
              </li>
              <li :class="$style['nav__item']">
                <RouterLink to="" :class="$style['nav__link']">
                  <span :class="$style['nav__text']">하나캐피탈 멤버십</span>
                </RouterLink>
              </li>
              <li :class="$style['nav__item']">
                <a href="" :class="$style['nav__link']">
                  <span :class="$style['nav__text']">ENGLISH</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div :class="$style['footer__cell']">
          <div :class="$style['family']">
            <div :class="$style['family__item']">
              <DropDownMenu
                title="하나금융네트워크"
                :data="[
                  {
                    text: '하나금융그룹',
                    url: 'https://www.hanafn.com/',
                  },
                  {
                    text: '하나은행',
                    url: 'https://www.kebhana.com/',
                  },
                  {
                    text: '하나금융투자',
                    url: 'https://www.hanaw.com/',
                  },
                  {
                    text: '하나카드',
                    url: 'https://www.hanacard.co.kr/',
                  },
                  {
                    text: '하나생명',
                    url: 'https://www.hanalife.co.kr/',
                  },
                  {
                    text: '하나저축은행',
                    url: 'https://www.hanasavings.com/',
                  },
                  {
                    text: '하나자산신탁',
                    url: 'https://www.hanatrust.com/',
                  },
                  {
                    text: '하나펀드서비스',
                    url: 'https://www.hanais.com/',
                  },
                  {
                    text: '하나자산운용',
                    url: 'http://ww25.hana-assetmanagement.com/',
                  },
                  {
                    text: '하나금융티아이',
                    url: 'https://www.hanati.co.kr/',
                  },
                  {
                    text: '하나금융경영연구소',
                    url: 'http://www.hanaif.re.kr/',
                  },
                  {
                    text: '하나금융공익재단',
                    url: 'http://hanafoundation.or.kr/',
                  },
                  {
                    text: '하나케어센터',
                    url: 'https://hanacarecenter.or.kr/',
                  },
                  {
                    text: '하나미소금융재단',
                    url: 'http://www.hanamiso.org/',
                  },
                  {
                    text: '핀크',
                    url: 'https://www.finnq.com/',
                  },
                  {
                    text: '하나금융나눔재단',
                    url: 'https://www.hana-nanum.com/',
                  },
                ]"
              />
            </div>
            <div :class="$style['family__item']">
              <DropDownMenu
                title="관련사이트"
                :data="[
                  {
                    text: '서민금융1332',
                    url: 'https://www.fss.or.kr/fss/s1332/s1332Index/sub.do?menuNo=200037',
                  },
                  {
                    text: '보이스피싱 지킴이',
                    url: 'https://www.fss.or.kr/fss/main/sub1voice.do?menuNo=200012',
                  },
                  {
                    text: '불법사금융신고센터',
                    url: 'https://www.fss.or.kr/fss/cvpl/unlawDistb/forInsertAgre.do?menuNo=200309',
                  },
                  {
                    text: '금융소비자 정보포털<br />파인',
                    url: 'https://fine.fss.or.kr/',
                  },
                  {
                    text: '여신금융협회',
                    url: 'https://www.crefia.or.kr/',
                  },
                ]"
              />
            </div>
          </div>
        </div>
      </div>

      <div :class="$style['footer__row']">
        <div
          :class="[$style['footer__cell'], $style['footer__cell--flexible']]"
        >
          <div :class="$style['sub-nav']">
            <ul :class="$style['sub-nav__list']">
              <li :class="$style['sub-nav__item']">
                <button type="button" :class="$style['sub-nav__link']">
                  <span :class="$style['sub-nav__text']">여신거래기본약관</span>
                </button>
              </li>
              <li :class="$style['sub-nav__item']">
                <button type="button" :class="$style['sub-nav__link']">
                  <span :class="$style['sub-nav__text']">
                    <strong class="color-black">개인정보처리방침</strong>
                  </span>
                </button>
              </li>
              <li :class="$style['sub-nav__item']">
                <button type="button" :class="$style['sub-nav__link']">
                  <span :class="$style['sub-nav__text']">전자금융거래약관</span>
                </button>
              </li>
              <li :class="$style['sub-nav__item']">
                <RouterLink to="" :class="$style['sub-nav__link']">
                  <span :class="$style['sub-nav__text']">이용약관</span>
                </RouterLink>
              </li>
              <li :class="$style['sub-nav__item']">
                <button type="button" :class="$style['sub-nav__link']">
                  <span :class="$style['sub-nav__text']">고객정보취급방침</span>
                </button>
              </li>
              <li :class="$style['sub-nav__item']">
                <RouterLink to="" :class="$style['sub-nav__link']">
                  <span :class="$style['sub-nav__text']"
                    >고객정보조회 동의 확인</span
                  >
                </RouterLink>
              </li>
              <li :class="$style['sub-nav__item']">
                <button type="button" :class="$style['sub-nav__link']">
                  <span :class="$style['sub-nav__text']"
                    >채권추심업무처리절차</span
                  >
                </button>
              </li>
              <li :class="$style['sub-nav__item']">
                <button type="button" :class="$style['sub-nav__link']">
                  <span :class="$style['sub-nav__text']"
                    >불법채권추심 대응요령</span
                  >
                </button>
              </li>
              <li :class="$style['sub-nav__item']">
                <RouterLink to="" :class="$style['sub-nav__link']">
                  <span :class="$style['sub-nav__text']">홈페이지이용안내</span>
                </RouterLink>
              </li>
            </ul>
            <ul :class="$style['sub-nav__list']">
              <li :class="$style['sub-nav__item']">
                <button type="button" :class="$style['sub-nav__link']">
                  <span :class="$style['sub-nav__text']"
                    >소멸시효 완성채권 추심 관련 금융소비자 유의사항</span
                  >
                </button>
              </li>
              <li :class="$style['sub-nav__item']">
                <button type="button" :class="$style['sub-nav__link']">
                  <span :class="$style['sub-nav__text']"
                    >영상정보처리기기 운영·관리방침</span
                  >
                </button>
              </li>
              <li :class="$style['sub-nav__item']">
                <RouterLink to="" :class="$style['sub-nav__link']">
                  <span :class="$style['sub-nav__text']"
                    >그룹사간 고객정보 제공내역 조회</span
                  >
                </RouterLink>
              </li>
              <li :class="$style['sub-nav__item']">
                <RouterLink to="" :class="$style['sub-nav__link']">
                  <span :class="$style['sub-nav__text']"
                    >방문 · 전화권유판매원 조회</span
                  >
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div :class="$style['footer__cell']">
          <p :class="$style['group-logo']">
            <a
              href="https://www.hanafn.com/"
              target="_blank"
              :class="$style['group-logo__link']"
            >
              <ImgGroupLogo />
              <span class="for-a11y">하나금융그룹 행복한 금융</span>
            </a>
          </p>
          <ul :class="$style['sns']">
            <li :class="$style['sns__item']">
              <a href="" :class="$style['sns__link']">
                <IconFacebook :class="$style['sns__icon']" />
                <span class="for-a11y">Facebook</span>
              </a>
            </li>
            <li :class="$style['sns__item']">
              <a href="" :class="$style['sns__link']">
                <IconYoutube :class="$style['sns__icon']" />
                <span class="for-a11y">Youtube</span>
              </a>
            </li>
            <li :class="$style['sns__item']">
              <a href="" :class="$style['sns__link']">
                <IconInstagram :class="$style['sns__icon']" />
                <span class="for-a11y">Instagram</span>
              </a>
            </li>
            <li :class="$style['sns__item']">
              <a href="" :class="$style['sns__link']">
                <IconGlobal :class="$style['sns__icon']" />
                <span class="for-a11y">Global</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div :class="$style['footer__row']">
        <div
          :class="[$style['footer__cell'], $style['footer__cell--flexible']]"
        >
          <div :class="$style['etc']">
            <address :class="$style['etc__item']">
              서울 강남구 테헤란로 127 하나금융그룹 (역삼동, 강남사옥)
            </address>
            <p :class="$style['etc__item']">사업자등록번호 220-81-09337</p>
          </div>
          <address :class="$style['copy']">
            ⓒ2023. HANA CAPITAL CO., LTD. All right reserved.
          </address>
        </div>
        <div :class="$style['footer__cell']">
          <p :class="$style['mark']">
            [정보보호관리체계인증] 대고객 인터넷공개서비스운영<br />
            2021. 12. 10 ~ 2024. 12. 09
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/DefaultFooter.scss';
</style>

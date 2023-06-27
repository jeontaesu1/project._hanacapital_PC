<template>
  <div :class="$style['footer-wrap']">
    <footer :class="$style['footer']">
      <h2 class="for-a11y">바닥 글</h2>

      <div :class="$style['footer__row']">
        <div
          :class="[$style['footer__cell'], $style['footer__cell--flexible']]"
        >
          <address :class="$style['copy']">
            ⓒ2023. HANA CAPITAL CO., LTD. All right reserved.
          </address>
        </div>
        <div :class="$style['footer__cell']">
          <p :class="$style['tel']">
            <span :class="$style['tel__text']">고객센터 1800-1110</span>
            <span :class="$style['tel__sub']">(업무시간 09:00 ~ 18:00)</span>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/ShortFooter.scss';
</style>

<script>
// Customer_P09_p008
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageSubText,
    NoticeText,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>청약철회권</PageTitle>
      <PageSubText
        :classNames="{
          wrap: 'font-weight-regular',
        }"
      >
        고객님이 대출 계약에 대한 숙려기간 동안 불이익 없이 대출 계약으로부터
        탈퇴할 수 있는 권리를 말합니다.
      </PageSubText>
    </PageHead>

    <div>
      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">행사요건</h3>

        <div>
          <section class="row-margin-container-medium">
            <h3 class="text-body-1 row-margin-item-group">적용대상</h3>

            <p class="font-weight-regular text-body-1 row-margin-item">
              금융소비자 보호법상 일반금융소비자(개인/개인사업자/상시근로자 5인
              미만 법인 등)
            </p>

            <ul :class="$style['basic-list']">
              <li :class="$style['basic-list__item']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  금융소비자보호법 기준
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-container-medium">
            <h3 class="text-body-1 row-margin-item-group">적용상품</h3>

            <p class="font-weight-regular text-body-1">
              시설대여, 할부금융, 연불판매 등을 제외한 대출성 상품
            </p>

            <NoticeText
              :classNames="{
                wrap: 'row-margin-item',
              }"
            >
              다만, 철회 기간 내에 재화를 제공 받지 않은 경우 위 상품 청약철회
              가능
            </NoticeText>

            <ul :class="$style['basic-list']">
              <li :class="$style['basic-list__item']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  「금융소비자보호에 관한 법률 시행령」 제37조 참고
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-container-medium">
            <h3 class="text-body-1 row-margin-item-group">절차</h3>

            <p class="font-weight-regular text-body-1 row-margin-item">
              대출계약 후 14일 이내 철회의 의사표시를 하고 원리금 등을
              상환함으로써 계약으로부터 탈퇴
            </p>

            <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  기산일 : 계약서류를 발급받은 날 또는 대출 실행일 중 늦은날
                  기준
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  의사표시 수단 : 서면, 전화, 컴퓨터 통신 등
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-container-medium">
            <h3 class="text-body-1 row-margin-item-group">요건</h3>

            <p class="font-weight-regular text-body-1 row-margin-item">
              철회기간(14일)내에 원리금 및 부대비용 등 반환<br />
              → 원금, 이자(경과이자) + 금융사로부터 받은 재화, 용역 및 금융사가
              부담한 근저당권 비용 / 인지세 등 제세공과금 / 보증료 / 보험료 /
              제3자에게 지급한 자동화기기 이용수수료 등
            </p>

            <ul :class="$style['basic-list']">
              <li :class="$style['basic-list__item']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  철회기간(14일)내 원리금 및 부대비용 미반환시 철회는
                  불가능하며, 신청내용은 자동 취소됩니다.
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-container-medium">
            <h3 class="text-body-1 row-margin-item-group">철회효과</h3>

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--medium'],
                $style['basic-list--regular-margin'],
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  중도상환수수료 면제
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  대출정보 삭제(금융회사, 신용정보원, CB사 등)
                </div>
              </li>
            </ul>
          </section>

          <NoticeText
            :classNames="{
              wrap: 'row-margin-container-medium',
            }"
          >
            청약 철회가 완료된 이후에는 철회취소가 불가능합니다.
          </NoticeText>
        </div>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">신청방법 및 필요서류</h3>

        <div>
          <section>
            <h3 class="text-body-1 row-margin-item-group">신청방법</h3>

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--medium'],
                $style['basic-list--regular-margin'],
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  고객센터(1800-1110) 및 지점 연락으로 연락하여 필요서류 작성 후
                  제출
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  홈페이지/모바일 고객센터 통해 접수<br />
                  (경로 : 고객센터 → 고객상담 → 문의분야[청약철회 선택] →
                  상담신청)
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-container-medium">
            <h3 class="text-body-1 row-margin-item-group">필요서류</h3>

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--medium'],
                $style['basic-list--regular-margin'],
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  청약 철회 신청서
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  청약 철회 신청서 · 청약 철회 신청서<br />
                  (신청양식 : 고객센터 → 서식다운로드)
                </div>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P09_p008.scss';
</style>

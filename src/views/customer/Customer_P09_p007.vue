<script>
// Customer_P09_p007
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
      <PageTitle>금리인하요구권</PageTitle>
      <PageSubText
        :classNames="{
          wrap: 'font-weight-regular',
        }"
      >
        대출 등 여신거래 기간 중 소득‧재산,신용도,재무상태 등이 개선된 경우
        금융회사에 금리인하를 요구할 수 있는 제도를 뜻합니다. 단, 신용상태의
        개선이 경미하여 금리인하 요구 인정 요건을 충족하지 못하는 경우 등 당사의
        심사 결과에 따라 고객의 금리인하 요구는 수용되지 않을 수 있습니다.
      </PageSubText>
    </PageHead>

    <div>
      <section class="row-margin-block-small">
        <div class="row-margin-contents">
          <h3 class="text-title-1 row-margin-small">대상대출상품</h3>

          <p class="font-weight-light text-body-1 color-gray-secondary">
            차주의 신용상태가 금리에 영향을 주지 않는, 아래와 같은 대출을 제외한
            모든 대출 상품
          </p>
        </div>

        <div>
          <section class="row-margin-container-medium">
            <h3 class="text-body-1 row-margin-item-group">
              금리인하 요구 대상이 아닌 대출
            </h3>

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
                  자동차 운용리스
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
                  자동차할부금융(한국GM제휴)
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
                <div :class="$style['basic-list__content']">스탁론</div>
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
                  전세자금대출(22년 5월 1일 이후 계약건)
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
                <div :class="$style['basic-list__content']">중도금대출</div>
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
                <div :class="$style['basic-list__content']">담보대출</div>
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
                <div :class="$style['basic-list__content']">시설대여(리스)</div>
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
                  일반 할부금융(내구재/의료기)
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-container-medium">
            <h3 class="text-body-1 row-margin-item-group">
              금리인하 가능한 대표상품*
            </h3>

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
                  일반신용대출(소비자신용대출)
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
                <div :class="$style['basic-list__content']">사업자담보대출</div>
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
                  전세자금대출(22년 4월 30일까지의 계약건)
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
                <div :class="$style['basic-list__content']">저작권담보대출</div>
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
                  중고차 오토론/할부
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'font-weight-regular',
                  'color-gray-secondary',
                ]"
              >
                <div :class="$style['basic-list__symbol']">*</div>
                <div :class="$style['basic-list__content']">
                  개인고객, 사업자고객 모두 금리인하 가능
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-container-medium">
            <h3 class="text-body-1 row-margin-item-group">
              개인고객 한정 금리인하요구 대상 상품**
            </h3>

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
                  자동차할부금융(한국GM제휴할부 제외)
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
                <div :class="$style['basic-list__content']">자동차오토론</div>
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
                  자동차 금융리스
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'font-weight-regular',
                  'color-gray-secondary',
                ]"
              >
                <div :class="$style['basic-list__symbol']">**</div>
                <div :class="$style['basic-list__content']">
                  해당 상품들은 22.5.1 이후 개인고객 계약건에 한하여
                  금리인하요구대상에 포함되며, 사업자 고객은 2023.1.1 이후
                  계약건부터 금리인하 요구대상 적용 예정
                </div>
              </li>
            </ul>
          </section>

          <NoticeText
            :classNames="{
              wrap: 'row-margin-container-medium',
            }"
          >
            금리인하요구 가능 대표 상품은 당사 약정서명 기준이며, 계약체결시
            개발 대출약정 내용에 따라 다를 수 있으니 자세한 사항은
            고객센터(1800-1110)로 문의 바랍니다.
          </NoticeText>
        </div>
      </section>

      <section class="row-margin-block-small">
        <div class="row-margin-contents">
          <h3 class="text-title-1 row-margin-small">신청사유</h3>

          <p class="font-weight-light text-body-1 color-gray-secondary">
            대출 등 여신거래 기간 중 아래의 경우 등 신용상태가 개선이 나타났다고
            인정되는 경우 금리인하요구가 가능함
          </p>
        </div>

        <div>
          <section class="row-margin-container-medium">
            <h3 class="text-body-1 row-margin-item-group">가계대출</h3>

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
                  <h5 class="text-body-1 font-weight-regular row-margin-small">
                    소득·재산증가
                  </h5>
                  <div>
                    소득이 증가(취업,승진,이직,전문자격 취득 등)하였거나,
                    재산증가(자산증가,부채감소) 등 개인의 재무 상태가
                    개선된것으로 판단되는 경우
                  </div>
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
                  <h5 class="text-body-1 font-weight-regular row-margin-small">
                    신용도상승
                  </h5>
                  <div>
                    신용평점(등급) 상승 등 신용등급이 상승하거나 기타 본인의
                    신용도가 상승하였다고 판단되는 경우
                  </div>
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
                  <h5 class="text-body-1 font-weight-regular row-margin-small">
                    기타
                  </h5>
                  <div>
                    상기사항 이외에 기타 차주가 신용상태 개선으로 판단하는 사항
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-container-medium">
            <h3 class="text-body-1 row-margin-item-group">기업대출</h3>

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
                  <h5 class="text-body-1 font-weight-regular row-margin-small">
                    재무상태 개선
                  </h5>
                  <div>
                    이익증가,부채감소 등 재무상태의 개선이 확인되는 경우
                  </div>
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
                  <h5 class="text-body-1 font-weight-regular row-margin-small">
                    신용도상승
                  </h5>
                  <div>
                    회사채등급(개인사업자는 신용등급 또는 개인신용평점)상승,
                    추가담보 제공, 특허권을 취득한 경우 등 신용도가 상승하였다고
                    판단되는 경우
                  </div>
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
                  <h5 class="text-body-1 font-weight-regular row-margin-small">
                    기타
                  </h5>
                  <div>
                    상기사항 이외에 기타 차주가 신용상태 개선으로 판단하는 사항
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </section>

      <section class="row-margin-block-small">
        <div class="row-margin-contents">
          <h3 class="text-title-1 row-margin-small">신청방법 및 결과통지</h3>

          <p class="font-weight-light text-body-1 color-gray-secondary">
            채널별 신청방법은 아래와 같음
          </p>
        </div>

        <div :class="$style['basic-table']">
          <table>
            <colgroup>
              <col style="width: 260px" />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>고객센터</th>
                <th>영업점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>신청경로</th>
                <td>1800-1110</td>
                <td>영업점 방문</td>
              </tr>
              <tr>
                <th>신청방법</th>
                <td>유선</td>
                <td>신분증 지참</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul class="reset-list row-margin-contents-small">
          <li class="row-margin-item-medium">
            <NoticeText>
              신청사유 증명을 위한 별도의 증빙서류 제출이 필요하며, 제출방법은
              별도 안내 예정
            </NoticeText>
          </li>
          <li class="row-margin-item-medium">
            <NoticeText>
              결과통지는 심사를 거쳐 10영업일 이내 전화, 문자메시지 또는 그 밖에
              이와 유사한 방법으로 통지
            </NoticeText>
          </li>
        </ul>

        <section
          :class="[$style['notice-section'], 'row-margin-container-medium']"
        >
          <h4 :class="$style['notice-section__title']">유의사항</h4>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                신용상태 개선이 금리 산정에 영향을 주지 않는 경우 금지인하요구가
                거절될 수 있음
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                신용상태 개선이 발생한 경우 신청횟수, 신청시점에 관계없이
                금리인하요구 가능함
              </div>
            </li>
          </ul>
        </section>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P09_p007.scss';
</style>

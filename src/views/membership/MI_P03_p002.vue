<script>
// MI_P03_p002
import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconHyendaiRentalCare from '@/assets/images/icon/hyendai-rental-care.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageSubText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    RoundStatus,
    BasicHr,
    IconHyendaiRentalCare,
  },
};
</script>

<template>
  <PageContents size="wide">
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '하나캐피탈 멤버십',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>하나캐피탈 멤버십</PageTitle>
      <PageSubText
        :classNames="{
          wrap: 'font-weight-regular',
        }"
      >
        하나캐피탈 멤버십 회원만을 위한 특별한 혜택을 만나보세요.
      </PageSubText>
    </PageHead>

    <ButtonList
      :wrap="true"
      align="center"
      :classNames="{ wrap: 'row-margin-block row-margin-top-none' }"
    >
      <ButtonListItem>
        <BasicButton>하나캐피탈 멤버십 가입하기</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <UiTab>
      <NavTab :useUiTab="true" :auto="true">
        <NavTabButton link="MI_P03_p002_tab001">
          무료 보험 서비스
        </NavTabButton>
        <NavTabButton link="MI_P03_p002_tab002">금리우대 서비스</NavTabButton>
        <NavTabButton link="MI_P03_p002_tab003">
          생활가전 렌탈료 할인 서비스
        </NavTabButton>
        <NavTabButton link="MI_P03_p002_tab004">자동차 시세조회</NavTabButton>
        <NavTabButton link="MI_P03_p002_tab005">부동산 시세조회</NavTabButton>
      </NavTab>

      <!-- 무료 보험 서비스 -->
      <UiTabPanel name="MI_P03_p002_tab001">
        <p class="text-big-3 font-weight-bold row-margin-contents">
          '교통상해사망/교통상해후유장해보험’ 서비스를 하나캐피탈 멤버십
          회원에게는 무료 제공하는 서비스
        </p>

        <div>
          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              서비스 안내
            </h4>

            <p class="text-title-2">
              교통상해 발생 시 최고 5백만원 보상 서비스 제공
            </p>
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--regular-margin'],
                'row-margin-item-medium',
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'color-gray-secondary',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  2022.06.29 이전 가입자는 메신저/보이스피싱 서비스 제공(최고
                  3백만원 보상)
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              대상고객
            </h4>

            <p class="text-title-2">하나캐피탈 멤버십 가입 회원</p>
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--regular-margin'],
                'row-margin-item-medium',
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'color-gray-secondary',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  2021년 8월 11일 이후 멤버십 회원에 한해 최초 1회 제공 (탈퇴 및
                  중복가입 시 제공불가)
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'color-gray-secondary',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  보험기간 중 일어난 사고에 한하여 사고 발생 후 3년 이내보상신청
                  가능
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'color-gray-secondary',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  하나캐피탈 APP, Mobile WEB 신규가입자 / 렌터카 상품 신규가입
                  고객 제외(단, 기존 하나캐피탈 상품 이용손님 멤버십 가입 시
                  보험서비스 제공)
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              제공혜택
            </h4>

            <p class="text-title-2">각 항목별 최고 5백만원 피해보상</p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              제휴회사
            </h4>

            <p class="text-title-2">하나손해보험㈜</p>
            <p class="text-body-3 color-gray row-margin-small">
              (상품 : 하나손해보험 단체안심상해보험II)
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              제공기간
            </h4>

            <p class="text-title-2">멤버십 최초 가입 다음 날 부터 1년간</p>
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--regular-margin'],
                'row-margin-item-medium',
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'color-gray-secondary',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  멤버십 탈퇴 시 탈퇴일 기준 보험서비스 해지
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              사고 접수
            </h4>

            <p class="text-title-2">고객센터 1566-3000 (하나손해보험)</p>
          </section>
        </div>

        <div class="row-margin-block-small">
          <section class="row-margin-block-small">
            <h3 class="text-title-1 row-margin-contents">유의사항</h3>

            <p class="text-body-1">
              상기 서비스는 하나손해보험(주) 제휴를 통해 제공해드리는 무료보험
              서비스로, 보험 약관 변경에 따라 서비스 내용이 변경 또는 종료될 수
              있습니다.
            </p>
          </section>
        </div>
      </UiTabPanel>
      <!-- // 무료 보험 서비스 -->

      <!-- 금리우대 서비스 -->
      <UiTabPanel name="MI_P03_p002_tab002">
        <div class="row-margin-contents">
          <div class="inline-wrap row-margin-item-group">
            <RoundStatus theme="secondary" size="large"
              >모바일 전용</RoundStatus
            >
          </div>
          <p class="text-big-3 font-weight-bold">
            하나캐피탈 멤버십 회원이 신용대출 상품 이용 시 금리 우대를 제공하는
            혜택 서비스
          </p>
        </div>

        <div>
          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              서비스 안내
            </h4>

            <p class="text-title-2">
              신용대출 상품 이용 시 금리 우대 서비스 제공
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              대상고객
            </h4>

            <p class="text-title-2">하나캐피탈 멤버십 가입 회원</p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              제공서비스
            </h4>

            <p class="text-title-2">
              신용대출 상품 이용 시 0.2% 금리 할인 제공
            </p>
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--regular-margin'],
                'row-margin-item-medium',
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'color-gray-secondary',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  신용대출 상품 : e하나신용대출, 행복아파트론,
                  원큐자동차담보대출
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              이용방법
            </h4>

            <p class="text-title-2">
              당사 홈페이지(모바일/App) 하나캐피탈 멤버십 금리우대 서비스 페이지
              내 "멤버십 대출신청 바로가기" 대출 신청 완료 고객에게 제공
            </p>
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--regular-margin'],
                'row-margin-item-medium',
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'color-gray-secondary',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  PC 홈페이지, 유선, 서면으로 대출신청 고객은 서비스 제외
                </div>
              </li>
            </ul>
          </section>
        </div>

        <div class="row-margin-block-small">
          <section class="row-margin-block-small">
            <h3 class="text-title-1 row-margin-contents">상품안내</h3>

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
                  'text-title-2',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  대출한도 : 최저 100만원 ~ 최대 1억원
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-title-2',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  <strong class="font-weight-medium">
                    금리 : 고정 연 4.9% ~ 18.9%
                  </strong>
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-title-2',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  대출기간 : 12개월 ~ 120개월
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-title-2',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  연체이자율 :
                  <strong class="font-weight-medium">
                    약정이율+3% (법정최고금리 연 20% 이내)
                  </strong>
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-title-2',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  <div>중도상환수수료 :</div>
                  <ul
                    :class="[
                      $style['basic-list'],
                      $style['basic-list--regular'],
                      $style['basic-list--regular-margin'],
                      'row-margin-item-medium',
                    ]"
                  >
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'color-black',
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">-</div>
                      <div :class="$style['basic-list__content']">
                        e하나신용대출 : 0%
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
                        행복아파트론 · 원큐자동차담보대출 대출일로부터 3년 이내
                        상환시 적용, 중도상환수수료율 2%
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
                        <div>중도상환수수료 산식 :</div>
                        <ul
                          :class="[
                            $style['basic-list'],
                            $style['basic-list--regular'],
                            $style['basic-list--regular-margin'],
                            'row-margin-item-medium',
                          ]"
                        >
                          <li
                            :class="[
                              $style['basic-list__item'],
                              'text-body-4',
                              'color-gray-secondary',
                              'font-weight-regular',
                            ]"
                          >
                            <div :class="$style['basic-list__symbol']">※</div>
                            <div :class="$style['basic-list__content']">
                              만기 1년 이상 : 중도상환원금 × 1% + 중도상환원금 ×
                              (중도상환수수료율 - 1%) × 잔존기간/(대출기간-30일)
                            </div>
                          </li>
                          <li
                            :class="[
                              $style['basic-list__item'],
                              'text-body-4',
                              'color-gray-secondary',
                              'font-weight-regular',
                            ]"
                          >
                            <div :class="$style['basic-list__symbol']">※</div>
                            <div :class="$style['basic-list__content']">
                              만기 1년 미만 : 중도상환원금 × (중도상환수수료율)
                              × 잔존기간/(대출기간-30일)
                            </div>
                          </li>
                          <li
                            :class="[
                              $style['basic-list__item'],
                              'text-body-4',
                              'color-gray-secondary',
                              'font-weight-regular',
                            ]"
                          >
                            <div :class="$style['basic-list__symbol']">※</div>
                            <div :class="$style['basic-list__content']">
                              잔존기간 : 30일 미만 상환 시 '대출사용기간'을
                              30일로 간주
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-title-2',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  상환방법 및 이자 납부시기 : 원리금균등분할상환, 매월 후취(단,
                  행복아파트론 대출신청금액 1억원이상 및 내부기준 충족 시
                  만기일시상환 선택 가능)
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-title-2',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  <div>
                    인지세는 5천만원 초과 실행 시 발생하며 하나캐피탈과
                    금융소비자가 50%씩 부담합니다.
                  </div>
                  <ul
                    :class="[
                      $style['basic-list'],
                      $style['basic-list--regular'],
                      $style['basic-list--regular-margin'],
                      'row-margin-item-medium',
                    ]"
                  >
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'color-black',
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">-</div>
                      <div :class="$style['basic-list__content']">
                        대출금액 5천만원 초과 1억원 이하 : 7만원
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
                        대출금액 1억원 초과 10억원 이하 : 15만원
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-block-small">
            <h3 class="text-title-1 row-margin-contents">유의사항</h3>

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
                  'text-title-2',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  계약을 체결하기 전에 상품설명서와 약관을 확인하시기 바랍니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-title-2',
                  'color-black',
                  'font-weight-medium',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  상환능력에 비해 대출금이 과도할 경우 귀하의 개인신용평점이
                  하락할 수 있습니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-title-2',
                  'color-black',
                  'font-weight-medium',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  개인신용평점 하락 시 금융거래와 관련된 불이익이 발생할 수
                  있습니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-title-2',
                  'color-black',
                  'font-weight-medium',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  일정기간 원리금을 연체할 경우, 모든 원리금을 변제할 의무가
                  발생할 수 있습니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-title-2',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  대출취급이 부적정한 경우(연체금 보유, 개인신용평점 낮음)
                  대출이 제한될 수 있습니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-title-2',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  담보물건, 담보종류 등에 따라 대출조건이 차등적용되며 담보물이
                  부적합할 경우 대출이 제한될 수 있습니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-title-2',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  금융소비자의 개인신용평점에 따라 대출한도 및 금리가 차등
                  적용됩니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-title-2',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  금융소비자는 해당상품에 대하여 설명을 받을 권리가 있으며, 그
                  설명을 듣고 내용을 충분히 이해한 후 거래하시기 바랍니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-title-2',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  금리인하요구권 및 대출계약 철회권에 대한 자세한 사항은
                  홈페이지에서 확인하시기 바랍니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-title-2',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  상기 서비스는 당사 또는 회원 사정에 의해 상이할 수 있으며,
                  서비스 내용이 변경 또는 종료될 수 있습니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-title-2',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  하나캐피탈 멤버십 금리우대 서비스는 2022년 11월 11일 대출
                  신청부터 적용됩니다.
                </div>
              </li>
            </ul>
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular-margin'],
                'row-margin-contents',
              ]"
            >
              <li :class="$style['basic-list__item']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  준법 심의필 22-1737 (2022.11.09 ~ 2023.11.08)
                </div>
              </li>
              <li :class="$style['basic-list__item']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  여신금융협회 심의필 제 2022-L1h-10002호(2022.11.09 ~
                  2023.11.08)
                </div>
              </li>
            </ul>
          </section>
        </div>
      </UiTabPanel>
      <!-- // 금리우대 서비스 -->

      <!-- 생활가전 렌탈료 할인 서비스 -->
      <UiTabPanel name="MI_P03_p002_tab003">
        <p class="text-big-3 font-weight-bold row-margin-contents">
          하나캐피탈 제휴처 렌탈 시 렌탈료 할인을 제공하는 혜택 서비스
        </p>

        <div>
          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              서비스 안내
            </h4>

            <p class="text-title-2">
              정수기/비데/공기청정기 등 렌탈 시 렌탈료 할인 제공 혜택 서비스
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              대상고객
            </h4>

            <p class="text-title-2">하나캐피탈 멤버십 가입 회원</p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              제공기간
            </h4>

            <p class="text-title-2">렌탈 약정기간: 36개월, 48개월, 60개월</p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              제휴회사
            </h4>

            <p class="text-title-2">(주) 현대렌탈서비스</p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              이용방법
            </h4>

            <p class="text-title-2">
              하나캐피탈 서비스 페이지 내 제휴사 연동 페이지 내 상담 신청 후
              제공
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              제공서비스
            </h4>

            <p class="text-title-2">멤버십 회원에 한하여 렌탈료 할인제공</p>
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--regular-margin'],
                'row-margin-item-medium',
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'font-weight-regular',
                  'color-gray-secondary',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  자세한 할인율 정보는 "현대렌탈 바로가기"에서 확인
                </div>
              </li>
            </ul>
          </section>
        </div>

        <BasicHr theme="tertiary" className="row-margin-container-medium" />

        <div :class="$style['icon-list']">
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <a href="" target="_blank" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']">
                  <IconHyendaiRentalCare />
                </span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__text']">
                    자세한 할인율 정보가 궁금하시다면
                  </span>
                  <span
                    :class="[$style['icon-list__title'], 'row-margin-small']"
                  >
                    현대렌탈 바로가기
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </UiTabPanel>
      <!-- // 생활가전 렌탈료 할인 서비스 -->

      <!-- 자동차 시세조회 -->
      <UiTabPanel name="MI_P03_p002_tab004">
        <div class="row-margin-contents">
          <div class="inline-wrap row-margin-item-group">
            <RoundStatus theme="secondary" size="large"
              >모바일 전용</RoundStatus
            >
          </div>
          <p class="text-big-3 font-weight-bold">
            매월 업데이트 되는 차량정보로 내 차 시세조회가 가능한 혜택 서비스
          </p>
        </div>

        <div>
          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              서비스 안내
            </h4>

            <p class="text-title-2">
              매월 업데이트 되는 데이터로 내 차량 시세조회 가능 서비스 제공
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              대상고객
            </h4>

            <p class="text-title-2">하나캐피탈 멤버십 가입 회원</p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              제공기간
            </h4>

            <p class="text-title-2">멤버십 탈퇴 시까지</p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              제휴회사
            </h4>

            <p class="text-title-2">NICE평가정보(주)</p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              이용방법
            </h4>

            <p class="text-title-2">하나캐피탈 모바일을 통해 이용 가능</p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              제공서비스
            </h4>

            <p class="text-title-2">월 말 기준의 내 차량 시세조회 가능</p>
          </section>
        </div>
      </UiTabPanel>
      <!-- // 자동차 시세조회 -->

      <!-- 부동산 시세조회 -->
      <UiTabPanel name="MI_P03_p002_tab005">
        <div class="row-margin-contents">
          <div class="inline-wrap row-margin-item-group">
            <RoundStatus theme="secondary" size="large"
              >모바일 전용</RoundStatus
            >
          </div>
          <p class="text-big-3 font-weight-bold">
            매주 업데이트 되는 부동산 시세조회를 무료로 이용할 수 있는 혜택
            서비스
          </p>
        </div>

        <div>
          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              서비스 안내
            </h4>

            <p class="text-title-2">
              매주 업데이트 되는 아파트/오피스텔 시세 조회 가능 서비스 제공
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              대상고객
            </h4>

            <p class="text-title-2">하나캐피탈 멤버십 가입 회원</p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              제공기간
            </h4>

            <p class="text-title-2">멤버십 탈퇴 시까지</p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              제휴회사
            </h4>

            <p class="text-title-2">(주)국민은행</p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              이용방법
            </h4>

            <p class="text-title-2">하나캐피탈 모바일을 통해 이용 가능</p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-3 color-gray font-weight-medium row-margin-item"
            >
              제공서비스
            </h4>

            <p class="text-title-2">
              매주 업데이트로 원하는 아파트/오피스텔의 매매 또는 전세 시세 확인
              가능
            </p>
          </section>
        </div>
      </UiTabPanel>
      <!-- // 부동산 시세조회 -->
    </UiTab>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/membership/MI_P03_p002.scss';
</style>

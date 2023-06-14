<script>
// Customer_P07_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageSubText,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>
        고객센터 ARS 안내<br />
        1800-1110
      </PageTitle>
      <PageSubText
        :classNames="{
          wrap: 'font-weight-regular',
        }"
      >
        하나캐피탈 고객센터 ARS 안내 메뉴를 확인하시고, 보다 편리한 상담을
        진행하세요.<br />
        각 단계별로 메뉴를 클릭하여 확인할 수 있습니다.
      </PageSubText>
    </PageHead>

    <section>
      <h3 class="text-body-1 row-margin-item-group">이용요금 안내</h3>
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
            전국 어디서나 시내전화 요금으로 이용가능(유선전화 기준 3분당 39원,
            VAT별도/국내 전용기준)
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'font-weight-regular']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            070 인터넷 전화 및 이동전화는 해당 통신사 이용요금 기준
          </div>
        </li>
      </ul>
    </section>

    <section class="row-margin-block-small">
      <div
        :class="[
          $style['contents-list'],
          $style['contents-list--wrap'],
          $style['contents-list--col-4'],
        ]"
      >
        <UiAccordion
          tagName="ol"
          :classNames="{ wrap: $style['contents-list__list'] }"
        >
          <UiAccordionItem
            :classNames="{ item: $style['contents-list__item'] }"
            :initialOpen="true"
          >
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">1</div>
              <div :class="$style['contents-list__title']">
                신규/추가대출 문의
              </div>
              <div :class="$style['contents-list__right']">
                <UiAccordionOpener
                  :classNames="{ button: $style['contents-list__opener'] }"
                />
              </div>
            </div>

            <UiAccordionLayer>
              <div :class="$style['contents-list__contents']">
                <ol
                  :class="[
                    $style['contents-list__list'],
                    $style['contents-list__list--secondary'],
                  ]"
                >
                  <li :class="$style['contents-list__item']">
                    <UiAccordion
                      tagName="ol"
                      :classNames="{
                        wrap: [
                          $style['contents-list__list'],
                          $style['contents-list__list--secondary'],
                        ],
                      }"
                    >
                      <UiAccordionItem
                        :classNames="{ item: $style['contents-list__item'] }"
                        :initialOpen="true"
                      >
                        <div :class="$style['contents-list__head']">
                          <div :class="$style['contents-list__symbol']">1</div>
                          <div :class="$style['contents-list__title']">
                            신용대출 상담
                          </div>
                          <div :class="$style['contents-list__right']">
                            <UiAccordionOpener
                              :classNames="{
                                button: $style['contents-list__opener'],
                              }"
                            />
                          </div>
                        </div>
                        <UiAccordionLayer>
                          <div :class="$style['contents-list__depth']">
                            <ol
                              :class="[
                                $style['contents-list__list'],
                                $style['contents-list__list--tertiary'],
                              ]"
                            >
                              <li :class="$style['contents-list__item']">
                                <div :class="$style['contents-list__head']">
                                  <div :class="$style['contents-list__symbol']">
                                    1
                                  </div>
                                  <div :class="$style['contents-list__title']">
                                    신규대출상담
                                  </div>
                                </div>
                              </li>
                              <li :class="$style['contents-list__item']">
                                <div :class="$style['contents-list__head']">
                                  <div :class="$style['contents-list__symbol']">
                                    2
                                  </div>
                                  <div :class="$style['contents-list__title']">
                                    추가대출상담
                                  </div>
                                </div>
                              </li>
                            </ol>
                          </div>
                        </UiAccordionLayer>
                      </UiAccordionItem>
                    </UiAccordion>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">2</div>
                      <div :class="$style['contents-list__title']">
                        자동차금융 상담
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">3</div>
                      <div :class="$style['contents-list__title']">
                        담보대출 상담
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">4</div>
                      <div :class="$style['contents-list__title']">
                        건설상용 상담
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">5</div>
                      <div :class="$style['contents-list__title']">
                        의료기 산업기계 상담
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">6</div>
                      <div :class="$style['contents-list__title']">
                        주식자금대출 상담
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">0</div>
                      <div :class="$style['contents-list__title']">
                        상담원 연결
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>
          <UiAccordionItem
            :classNames="{ item: $style['contents-list__item'] }"
            :initialOpen="true"
          >
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">2</div>
              <div :class="$style['contents-list__title']">당사 이용고객</div>
              <div :class="$style['contents-list__right']">
                <UiAccordionOpener
                  :classNames="{ button: $style['contents-list__opener'] }"
                />
              </div>
            </div>

            <UiAccordionLayer>
              <div :class="$style['contents-list__contents']">
                <UiAccordion
                  tagName="ol"
                  :classNames="{
                    wrap: [
                      $style['contents-list__list'],
                      $style['contents-list__list--secondary'],
                    ],
                  }"
                >
                  <UiAccordionItem
                    :classNames="{ item: $style['contents-list__item'] }"
                    :initialOpen="true"
                  >
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">1</div>
                      <div :class="$style['contents-list__title']">
                        기존거래정보 확인
                      </div>
                      <div :class="$style['contents-list__right']">
                        <UiAccordionOpener
                          :classNames="{
                            button: $style['contents-list__opener'],
                          }"
                        />
                      </div>
                    </div>
                    <UiAccordionLayer>
                      <div :class="$style['contents-list__depth']">
                        <UiAccordion
                          tagName="ol"
                          :classNames="{
                            wrap: [
                              $style['contents-list__list'],
                              $style['contents-list__list--tertiary'],
                            ],
                          }"
                        >
                          <li :class="$style['contents-list__item']">
                            <div :class="$style['contents-list__head']">
                              <div :class="$style['contents-list__symbol']">
                                1
                              </div>
                              <div :class="$style['contents-list__title']">
                                당월결제금액
                              </div>
                            </div>
                          </li>
                          <li :class="$style['contents-list__item']">
                            <div :class="$style['contents-list__head']">
                              <div :class="$style['contents-list__symbol']">
                                2
                              </div>
                              <div :class="$style['contents-list__title']">
                                최근입금내역
                              </div>
                            </div>
                          </li>
                          <li :class="$style['contents-list__item']">
                            <div :class="$style['contents-list__head']">
                              <div :class="$style['contents-list__symbol']">
                                3
                              </div>
                              <div :class="$style['contents-list__title']">
                                중도상환안내
                              </div>
                            </div>
                          </li>
                          <li :class="$style['contents-list__item']">
                            <div :class="$style['contents-list__head']">
                              <div :class="$style['contents-list__symbol']">
                                4
                              </div>
                              <div :class="$style['contents-list__title']">
                                승계 및 연장문의
                              </div>
                            </div>
                          </li>
                          <UiAccordionItem
                            :classNames="{
                              item: $style['contents-list__item'],
                            }"
                            :initialOpen="true"
                          >
                            <div :class="$style['contents-list__head']">
                              <div :class="$style['contents-list__symbol']">
                                5
                              </div>
                              <div :class="$style['contents-list__title']">
                                하나머니 상담
                              </div>
                              <div :class="$style['contents-list__right']">
                                <UiAccordionOpener
                                  :classNames="{
                                    button: $style['contents-list__opener'],
                                  }"
                                />
                              </div>
                            </div>
                            <UiAccordionLayer>
                              <div :class="$style['contents-list__depth-2']">
                                <ol
                                  :class="[
                                    $style['contents-list__list'],
                                    $style['contents-list__list--quaternary'],
                                  ]"
                                >
                                  <li :class="$style['contents-list__item']">
                                    <div :class="$style['contents-list__head']">
                                      <div
                                        :class="$style['contents-list__symbol']"
                                      >
                                        1
                                      </div>
                                      <div
                                        :class="$style['contents-list__title']"
                                      >
                                        당사 하나머니 회원 조회
                                      </div>
                                    </div>
                                  </li>
                                  <li :class="$style['contents-list__item']">
                                    <div :class="$style['contents-list__head']">
                                      <div
                                        :class="$style['contents-list__symbol']"
                                      >
                                        2
                                      </div>
                                      <div
                                        :class="$style['contents-list__title']"
                                      >
                                        하나머니 회원가입
                                      </div>
                                    </div>
                                  </li>
                                  <li :class="$style['contents-list__item']">
                                    <div :class="$style['contents-list__head']">
                                      <div
                                        :class="$style['contents-list__symbol']"
                                      >
                                        3
                                      </div>
                                      <div
                                        :class="$style['contents-list__title']"
                                      >
                                        관계사 연결
                                      </div>
                                    </div>
                                  </li>
                                  <li :class="$style['contents-list__item']">
                                    <div :class="$style['contents-list__head']">
                                      <div
                                        :class="$style['contents-list__symbol']"
                                      >
                                        0
                                      </div>
                                      <div
                                        :class="$style['contents-list__title']"
                                      >
                                        상담원 연결
                                      </div>
                                    </div>
                                  </li>
                                </ol>
                              </div>
                            </UiAccordionLayer>
                          </UiAccordionItem>
                        </UiAccordion>
                      </div>
                    </UiAccordionLayer>
                  </UiAccordionItem>
                  <UiAccordionItem
                    :classNames="{ item: $style['contents-list__item'] }"
                    :initialOpen="true"
                  >
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">0</div>
                      <div :class="$style['contents-list__title']">
                        상담원 연결
                      </div>
                      <div :class="$style['contents-list__right']">
                        <UiAccordionOpener
                          :classNames="{
                            button: $style['contents-list__opener'],
                          }"
                        />
                      </div>
                    </div>
                    <UiAccordionLayer>
                      <div :class="$style['contents-list__depth']">
                        <ol
                          :class="[
                            $style['contents-list__list'],
                            $style['contents-list__list--tertiary'],
                          ]"
                        >
                          <li :class="$style['contents-list__item']">
                            <div :class="$style['contents-list__head']">
                              <div :class="$style['contents-list__symbol']">
                                1
                              </div>
                              <div :class="$style['contents-list__title']">
                                자동차금융 상담
                              </div>
                            </div>
                          </li>
                          <li :class="$style['contents-list__item']">
                            <div :class="$style['contents-list__head']">
                              <div :class="$style['contents-list__symbol']">
                                2
                              </div>
                              <div :class="$style['contents-list__title']">
                                개인금융 상담
                              </div>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </UiAccordionLayer>
                  </UiAccordionItem>
                </UiAccordion>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>
          <UiAccordionItem
            :classNames="{ item: $style['contents-list__item'] }"
            :initialOpen="true"
          >
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">3</div>
              <div :class="$style['contents-list__title']">기타상담</div>
              <div :class="$style['contents-list__right']">
                <UiAccordionOpener
                  :classNames="{ button: $style['contents-list__opener'] }"
                />
              </div>
            </div>

            <UiAccordionLayer>
              <div :class="$style['contents-list__contents']">
                <ol
                  :class="[
                    $style['contents-list__list'],
                    $style['contents-list__list--secondary'],
                  ]"
                >
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">1</div>
                      <div :class="$style['contents-list__title']">
                        불법대출 및 보이스피싱
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">2</div>
                      <div :class="$style['contents-list__title']">
                        당사이용 고객이 아닌경우
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">3</div>
                      <div :class="$style['contents-list__title']">
                        상담원 연결
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">0</div>
              <div :class="$style['contents-list__title']">상담원 연결</div>
            </div>
          </li>
        </UiAccordion>
      </div>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P07_p001.scss';
</style>

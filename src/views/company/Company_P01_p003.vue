<script>
// Company_P01_p003
import PageContents from '@/components/ui/layout/PageContents.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>연혁</PageTitle>
    </PageHead>

    <UiTab>
      <NavTab :useUiTab="true">
        <NavTabButton link="Company_P01_p003_navTab001">
          도전하는 하나캐피탈 2011 ~ 현재
        </NavTabButton>
        <NavTabButton link="Company_P01_p003_navTab002">
          우리의 시작 2004 ~ 2010
        </NavTabButton>
      </NavTab>

      <UiTabPanel name="Company_P01_p003_navTab001">
        <div :class="$style['history']">
          <section :class="$style['history__item']">
            <h3 :class="$style['history__year']">2021</h3>
            <div :class="$style['history__detail']">
              <ul :class="$style['history__detail-list']">
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">7월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      유상증자 (납입자본금 1,462억)
                    </div>
                  </div>
                </li>
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">3월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      미얀마 현지법인 “Hana Microfinance Limited” 유상증자 참여
                      (지분 75%)
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section :class="$style['history__item']">
            <h3 :class="$style['history__year']">2020</h3>
            <div :class="$style['history__detail']">
              <ul :class="$style['history__detail-list']">
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">11월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      하나원큐드림카 VER.2 오픈
                    </div>
                  </div>
                </li>
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">7월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      업권 최초 내구재 할부 영업지원 플랫폼 ‘원큐하나로‘ 오픈
                    </div>
                  </div>
                </li>
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">6월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      인도네시아 ‘SHF’ 유상증자 참여 94억
                    </div>
                  </div>
                </li>
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">1월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      미얀마 진출 “Hana Microfinance Limited” 신주 인수 (지분
                      55%)
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section :class="$style['history__item']">
            <h3 :class="$style['history__year']">2019</h3>
            <div :class="$style['history__detail']">
              <ul :class="$style['history__detail-list']">
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">11월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      중고차 온라인 쇼핑 플랫폼 하나원큐드림카 오픈
                    </div>
                  </div>
                </li>
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">3월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      유상증자 (납입자본금 1,174억)
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section :class="$style['history__item']">
            <h3 :class="$style['history__year']">2018</h3>
            <div :class="$style['history__detail']">
              <ul :class="$style['history__detail-list']">
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">2월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      ㈜하나금융지주 완전 자회사 편입 (지분율 100%)
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section :class="$style['history__item']">
            <h3 :class="$style['history__year']">2017</h3>
            <div :class="$style['history__detail']">
              <ul :class="$style['history__detail-list']">
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">6월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      전산본부 청라 이전
                    </div>
                  </div>
                </li>
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">5월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      손님용 모바일앱 ‘원큐캐피탈‘ 오픈
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section :class="$style['history__item']">
            <h3 :class="$style['history__year']">2015</h3>
            <div :class="$style['history__detail']">
              <ul :class="$style['history__detail-list']">
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">8월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      신용등급 상향 (회사채 AA-, CP A1)
                    </div>
                    <div :class="$style['history__contents-row']">
                      유상증자 (납입자본금 824억)
                    </div>
                  </div>
                </li>
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">6월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      인도네시아 ‘SHF’ 유상증자 참여 70억
                    </div>
                  </div>
                </li>
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">3월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      서초지점 오픈
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section :class="$style['history__item']">
            <h3 :class="$style['history__year']">2013</h3>
            <div :class="$style['history__detail']">
              <ul :class="$style['history__detail-list']">
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">1월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      강남지점 오픈
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section :class="$style['history__item']">
            <h3 :class="$style['history__year']">2012</h3>
            <div :class="$style['history__detail']">
              <ul :class="$style['history__detail-list']">
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">7월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      인천/대전/광주 지점 승격
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section :class="$style['history__item']">
            <h3 :class="$style['history__year']">2011</h3>
            <div :class="$style['history__detail']">
              <ul :class="$style['history__detail-list']">
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">2월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      신용등급 상향 (회사채 A+, CP A2+)
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </UiTabPanel>

      <UiTabPanel name="Company_P01_p003_navTab002">
        <div :class="$style['history']">
          <section :class="$style['history__item']">
            <h3 :class="$style['history__year']">2010</h3>
            <div :class="$style['history__detail']">
              <ul :class="$style['history__detail-list']">
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">11월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      광주사무소 오픈
                    </div>
                  </div>
                </li>
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">9월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      대전사무소 오픈
                    </div>
                  </div>
                </li>
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">1월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      인천사무소 오픈
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section :class="$style['history__item']">
            <h3 :class="$style['history__year']">2008</h3>
            <div :class="$style['history__detail']">
              <ul :class="$style['history__detail-list']">
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">6월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      부산지점 오픈
                    </div>
                  </div>
                </li>
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">5월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      대구지점 오픈
                    </div>
                  </div>
                </li>
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">4월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      유상증자 (납입자본금 724억)
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section :class="$style['history__item']">
            <h3 :class="$style['history__year']">2007</h3>
            <div :class="$style['history__detail']">
              <ul :class="$style['history__detail-list']">
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">4월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      ㈜하나금융지주 자회사 편입
                    </div>
                    <div :class="$style['history__contents-row']">
                      유상증자 (납입자본금 611억)
                    </div>
                    <div :class="$style['history__contents-row']">
                      신용등급 상향 (회사채 A0, CP A20)
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section :class="$style['history__item']">
            <h3 :class="$style['history__year']">2006</h3>
            <div :class="$style['history__detail']">
              <ul :class="$style['history__detail-list']">
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">11월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      유상증자 (납입자본금 432억)
                    </div>
                    <div :class="$style['history__contents-row']">
                      신용등급 상향 (회사채 A-, CP A2-)
                    </div>
                  </div>
                </li>
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">3월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      신용등급 상향 (회사채 BBB+, CP A3+)
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section :class="$style['history__item']">
            <h3 :class="$style['history__year']">2005</h3>
            <div :class="$style['history__detail']">
              <ul :class="$style['history__detail-list']">
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">8월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      유상증자 (납입자본금 360억)
                    </div>
                  </div>
                </li>
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">6월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      신용등급 상향 (회사채 BBB0, CP A30)
                    </div>
                  </div>
                </li>
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">4월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      하나캐피탈㈜로 상호변경
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section :class="$style['history__item']">
            <h3 :class="$style['history__year']">2004</h3>
            <div :class="$style['history__detail']">
              <ul :class="$style['history__detail-list']">
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">12월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      ㈜하나금융지주 손자회사 편입 (하나은행의 자회사)
                    </div>
                  </div>
                </li>
                <li :class="$style['history__detail-item']">
                  <div :class="$style['history__month']">9월</div>
                  <div :class="$style['history__contents']">
                    <div :class="$style['history__contents-row']">
                      하나은행에서 코오롱캐피탈㈜ 인수
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </UiTabPanel>
    </UiTab>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P01_p003.scss';
</style>

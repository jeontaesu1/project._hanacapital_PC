<script>
// Customer_P17_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

import IconDownload from '@/assets/images/icon/download.svg?component';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    UiTab,
    NavTab,
    NavTabButton,
    UiTabPanel,
    BasicButton,
    IconDownload,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>프로그램 설치 안내</PageTitle>
    </PageHead>

    <UiTab>
      <NavTab :useUiTab="true">
        <NavTabButton link="Customer_P17_p001_tab001">
          보안 프로그램 설치
        </NavTabButton>
        <NavTabButton link="Customer_P17_p001_tab002">
          공동인증서 프로그램 설치
        </NavTabButton>
        <NavTabButton link="Customer_P17_p001_tab003">
          증명서 발급 프로그램 설치
        </NavTabButton>
      </NavTab>

      <UiTabPanel name="Customer_P17_p001_tab001">
        <div :class="$style['contents-list']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--senary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div
                :class="[
                  $style['contents-list__head'],
                  $style['contents-list__head--vertical-center'],
                ]"
              >
                <div :class="$style['contents-list__symbol']">1</div>
                <div :class="[$style['contents-list__title'], 'flex-1']">
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1">
                      다음 아이콘을 클릭하여 설치 파일을 다운로드 합니다.
                    </div>
                    <div class="flex-box__cell">
                      <BasicButton
                        size="regular"
                        tagName="a"
                        href="/foo/bar.pdf"
                        download
                      >
                        <template v-slot:leftIcon>
                          <IconDownload />
                        </template>
                        보안 프로그램 다운로드
                      </BasicButton>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">2</div>
                <div :class="$style['contents-list__title']">
                  설치 파일 다운로드 시, 다음과 같은 메시지가 나타납니다. AhnLab
                  Safe Transaction 설치를 위해 “다음”을 클릭합니다.
                </div>
              </div>
              <div class="row-margin-item-regular">
                <div :class="$style['image-view']">
                  <img
                    src="@/assets/images/_dummy/box-detail-2.png"
                    alt="샘플 이미지"
                  />
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">3</div>
                <div :class="$style['contents-list__title']">
                  아래와 같이 사용권 계약 화면이 나타납니다. “동의함”을 클릭하여
                  AhnLab Safe Transaction를 설치해주십시오.
                </div>
              </div>
              <div class="row-margin-item-regular">
                <div :class="$style['image-view']">
                  <img
                    src="@/assets/images/_dummy/box-detail-2.png"
                    alt="샘플 이미지"
                  />
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">4</div>
                <div :class="$style['contents-list__title']">
                  다음과 같이 설치를 진행합니다.
                </div>
              </div>
              <div class="row-margin-item-regular">
                <div :class="$style['image-view']">
                  <img
                    src="@/assets/images/_dummy/box-detail-2.png"
                    alt="샘플 이미지"
                  />
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">5</div>
                <div :class="$style['contents-list__title']">
                  설치 및 업데이트가 완료되어 실행되면, 모니터 오른쪽 하단에
                  다음과 같이 nProtect Online Security의 트레이 아이콘이
                  표시됩니다.
                </div>
              </div>
              <div class="row-margin-item-regular">
                <div :class="$style['image-view']">
                  <img
                    src="@/assets/images/_dummy/box-detail-2.png"
                    alt="샘플 이미지"
                  />
                </div>
              </div>
            </li>
          </ol>
        </div>
      </UiTabPanel>

      <UiTabPanel name="Customer_P17_p001_tab002">
        <div :class="$style['contents-list']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--senary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div
                :class="[
                  $style['contents-list__head'],
                  $style['contents-list__head--vertical-center'],
                ]"
              >
                <div :class="$style['contents-list__symbol']">1</div>
                <div :class="[$style['contents-list__title'], 'flex-1']">
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1">
                      다음 아이콘을 클릭하여 설치 파일을 다운로드 합니다.
                    </div>
                    <div class="flex-box__cell">
                      <BasicButton
                        size="regular"
                        tagName="a"
                        href="/foo/bar.pdf"
                        download
                      >
                        <template v-slot:leftIcon>
                          <IconDownload />
                        </template>
                        공동인증서 프로그램 다운로드
                      </BasicButton>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">2</div>
                <div :class="$style['contents-list__title']">
                  다음과 같이 설치를 진행 및 완료합니다.
                </div>
              </div>
              <div class="row-margin-item-regular">
                <div :class="$style['image-view']">
                  <img
                    src="@/assets/images/_dummy/box-detail-2.png"
                    alt="샘플 이미지"
                  />
                </div>
              </div>
            </li>
          </ol>
        </div>
      </UiTabPanel>

      <UiTabPanel name="Customer_P17_p001_tab003">
        <div :class="$style['contents-list']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--senary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div
                :class="[
                  $style['contents-list__head'],
                  $style['contents-list__head--vertical-center'],
                ]"
              >
                <div :class="$style['contents-list__symbol']">1</div>
                <div :class="[$style['contents-list__title'], 'flex-1']">
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1">
                      다음 아이콘을 클릭하여 설치 파일을 다운로드 합니다.
                    </div>
                    <div class="flex-box__cell">
                      <BasicButton
                        size="regular"
                        tagName="a"
                        href="/foo/bar.pdf"
                        download
                      >
                        <template v-slot:leftIcon>
                          <IconDownload />
                        </template>
                        증명서 발급 프로그램 다운로드
                      </BasicButton>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">2</div>
                <div :class="$style['contents-list__title']">
                  다음과 같이 설치를 진행 및 완료합니다.
                </div>
              </div>
              <div class="row-margin-item-regular">
                <div :class="$style['image-view']">
                  <img
                    src="@/assets/images/_dummy/box-detail-2.png"
                    alt="샘플 이미지"
                  />
                </div>
              </div>
            </li>
          </ol>
        </div>
      </UiTabPanel>
    </UiTab>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P17_p001.scss';
</style>

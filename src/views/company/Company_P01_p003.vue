<script>
// Company_P01_p003
import PageContents from '@/components/ui/layout/PageContents.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    UiTab,
    NavTab,
    NavTabButton,
    UiTabPanel,
    KeyValueItem,
    KeyValue,
    KeyValueTitle,
    KeyValueText,
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
        <ul class="reset-list">
          <li class="row-margin-container-medium">
            <div class="flex-box align-items-start">
              <div class="flex-box__cell">
                <h3 class="text-title-1">2021</h3>
              </div>
              <div class="flex-box__cell">
                <KeyValue align="left" margin="small">
                  <KeyValueItem>
                    <KeyValueTitle>7월</KeyValueTitle>
                    <KeyValueText>유상증자 (납입자본금 1,462억)</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem>
                    <KeyValueTitle>3월</KeyValueTitle>
                    <KeyValueText>
                      미얀마 현지법인 “Hana Microfinance Limited” 유상증자 참여
                      (지분 75%)
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </div>
          </li>

          <li class="row-margin-container-medium">
            <div class="flex-box align-items-start">
              <div class="flex-box__cell">
                <h3 class="text-title-1">2021</h3>
              </div>
              <div class="flex-box__cell">
                <KeyValue align="left" margin="small">
                  <KeyValueItem>
                    <KeyValueTitle>11월</KeyValueTitle>
                    <KeyValueText>하나원큐드림카 VER.2 오픈</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem>
                    <KeyValueTitle>7월</KeyValueTitle>
                    <KeyValueText>
                      업권 최초 내구재 할부 영업지원 플랫폼 ‘원큐하나로‘ 오픈
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </div>
          </li>
        </ul>
      </UiTabPanel>
      <UiTabPanel name="Company_P01_p003_navTab002"></UiTabPanel>
    </UiTab>
  </PageContents>
</template>

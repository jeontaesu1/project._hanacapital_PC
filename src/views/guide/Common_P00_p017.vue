<script>
// Common_P00_p017
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconDownload from '@/assets/images/icon/download.svg?component';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageSubText,
    BasicButton,
    ButtonList,
    ButtonListItem,

    IconDownload,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>보안 프로그램 설치 안내</PageTitle>
      <PageSubText>
        고객님의 안전한 금융거래를 위해 보안 프로그램을 필수적으로 설치하여야<br />
        합니다. 보안 프로그램을 설치하신 후 하나캐피탈 서비스 이용이 가능합니다.
      </PageSubText>
    </PageHead>

    <section>
      <div class="flex-box row-margin-contents">
        <div class="flex-box__cell flex-1">
          <h3 class="text-title-1">필수 설치 (통합 보안 프로그램)</h3>
        </div>
        <div class="flex-box__cell">
          <BasicButton size="regular" theme="tertiary">설치</BasicButton>
        </div>
      </div>

      <div :class="$style['basic-table']">
        <table>
          <colgroup>
            <col style="width: 300px" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th class="align-left color-black text-body-1">
                보안 프로그램<br />
                (Ahnlab Safe Transaction)
              </th>
              <td class="align-left">
                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--regular'],
                    $style['basic-list--normal-margin'],
                  ]"
                >
                  <li
                    :class="[$style['basic-list__item'], 'font-weight-regular']"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      고객 PC와 하나캐피탈 사이의 전송되는 데이터들을 모두
                      암호화함으로써 정보를 더욱 안전하게 지킬 수 있도록
                      지원하는 암호화 솔루션입니다.
                    </div>
                  </li>
                  <li
                    :class="[$style['basic-list__item'], 'font-weight-regular']"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      미지의 해킹요소에 대한 직접 감지/차단/복구가 가능합니다.
                    </div>
                  </li>
                  <li
                    :class="[$style['basic-list__item'], 'font-weight-regular']"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      PC의 키보드로 사용자가 입력하는 키보드 입력 정보를
                      가로채어 개인의 중요한 정보를 유출하는
                      키로거(keylogger)로부터 PC를 보호합니다.
                    </div>
                  </li>
                  <li
                    :class="[$style['basic-list__item'], 'font-weight-regular']"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      허락되지 않은 네트워크를 통한 침입과 외부해킹을 감지하여
                      각종 개인 암호나 개인정보의 무단 유출 및 데이터 손상의
                      위협을 사전에 차단하는 역할을 수행합니다.
                    </div>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th class="align-left color-black text-body-1">
                공동인증서 프로그램 (AnySign)
              </th>
              <td class="align-left">
                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--regular'],
                    $style['basic-list--normal-margin'],
                  ]"
                >
                  <li
                    :class="[$style['basic-list__item'], 'font-weight-regular']"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      안전한 공동인증서 사용을 지원하여 안전한 금융 거래를 할 수
                      있는 보안 솔루션 입니다.
                    </div>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ButtonList
        col="4"
        :wrap="true"
        align="center"
        :classNames="{
          wrap: 'row-margin-block-small',
        }"
      >
        <ButtonListItem>
          <BasicButton size="regular" :line="true"
            >설치 여부 재확인</BasicButton
          >
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton>확인</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </section>

    <section class="row-margin-block">
      <div class="flex-box row-margin-contents">
        <div class="flex-box__cell flex-1">
          <h3 class="text-title-1">수동 설치</h3>
          <p
            class="text-body-1 font-weight-light color-gray-secondary row-margin-small"
          >
            사용자의 환경에 따라 오류가 발생할 경우 보안 프로그램을 PC에
            다운로드하여 설치하시기 바랍니다.
          </p>
        </div>
        <div class="flex-box__cell">
          <BasicButton size="regular" theme="tertiary">
            <template v-slot:leftIcon>
              <IconDownload />
            </template>
            통합 보안 프로그램
          </BasicButton>
        </div>
      </div>

      <section>
        <h4 class="text-body-1 font-weight-medium row-margin-item-group">
          수동 설치 방법
        </h4>
        <div :class="$style['contents-list']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--quinary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">1</div>
                <div :class="$style['contents-list__title']">
                  보안 관련 프로그램을 수동으로 직접 PC에 다운로드 받고
                  브라우저를 모두 닫습니다.
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">2</div>
                <div :class="$style['contents-list__title']">
                  다운로드 받은 프로그램을 실행하여 설치합니다.
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">3</div>
                <div :class="$style['contents-list__title']">
                  브라우저를 실행하여 하나캐피탈 홈페이지에 접속합니다.
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/guide/Common_P00_p017.scss';
</style>

<script>
// Common_P00_p017
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageSubText,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>보안 프로그램 설치 안내</PageTitle>
      <PageSubText :classNames="{ wrap: 'font-weight-regular' }">
        고객님의 안전한 금융거래를 위해 보안 프로그램을 필수적으로 설치하여야
        합니다.<br />
        보안 프로그램을 설치하신 후 “하나캐피탈” 서비스 이용이 가능합니다.
      </PageSubText>
    </PageHead>

    <div>
      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">필수 설치</h3>

        <div :class="$style['basic-table']">
          <table>
            <colgroup>
              <col style="width: 300px" />
              <col />
              <col style="width: 200px" />
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
                      :class="[
                        $style['basic-list__item'],
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        고객 PC와 하나캐피탈 사이의 전송되는 데이터들을 모두
                        암호화함으로써 정보를 더욱 안전하게 지킬 수 있도록
                        지원하는 암호화 솔루션입니다.
                      </div>
                    </li>
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        미지의 해킹요소에 대한 직접 감지/차단/복구가 가능합니다.
                      </div>
                    </li>
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        PC의 키보드로 사용자가 입력하는 키보드 입력 정보를
                        가로채어 개인의 중요한 정보를 유출하는
                        키로거(keylogger)로부터 PC를 보호합니다.
                      </div>
                    </li>
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'font-weight-regular',
                      ]"
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
                <td>
                  <div class="flex-box justify-conten-center">
                    <div class="flex-box__cell">
                      <BasicButton size="regular" theme="tertiary">
                        설치
                      </BasicButton>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">선택 설치</h3>

        <div :class="$style['basic-table']">
          <table>
            <colgroup>
              <col style="width: 300px" />
              <col />
              <col style="width: 200px" />
            </colgroup>
            <tbody>
              <tr>
                <th class="align-left color-black text-body-1">
                  공동인증서 프로그램<br />
                  (MagicLine4NX)
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
                      :class="[
                        $style['basic-list__item'],
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        안전한 공동인증서 사용을 지원하여 안전한 금융 거래를 할
                        수 있는 보안 솔루션 입니다.
                      </div>
                    </li>
                  </ul>
                </td>
                <td>
                  <div class="flex-box justify-conten-center">
                    <div class="flex-box__cell">
                      <BasicButton size="regular" theme="tertiary">
                        설치
                      </BasicButton>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th class="align-left color-black text-body-1">
                  증명서발급 프로그램<br />
                  (ePageSaferRT)
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
                      :class="[
                        $style['basic-list__item'],
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        각종 증명서를 발급받는데 필요한 솔루션입니다.
                      </div>
                    </li>
                  </ul>
                </td>
                <td>
                  <div class="flex-box justify-conten-center">
                    <div class="flex-box__cell">
                      <BasicButton
                        size="regular"
                        theme="tertiary"
                        :disabled="true"
                      >
                        설치완료
                      </BasicButton>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
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
        <BasicButton size="regular" :line="true">설치 여부 재확인</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/guide/Common_P00_p017.scss';
</style>

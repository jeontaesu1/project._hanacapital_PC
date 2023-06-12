<script>
// Member_P05_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    StepProgress,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    RoundStatus,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">회원가입</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        회원가입을 위해<br />
        약관동의 및 본인확인이 필요합니다
      </PageMainText>
    </PageHead>

    <div>// [공통 > 본인인증] 내용 노출</div>

    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">약관동의</h3>

      <div :class="$style['agree-list']">
        <ul :class="$style['agree-list__container']">
          <li :class="$style['agree-list__all']">
            <div :class="$style['agree-list__all-head']">
              <CheckBox
                id="agreeAll"
                :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>전체동의</CheckBoxLabelText>
              </CheckBox>
            </div>

            <div :class="$style['agree-list__all-contents']">
              <ul :class="$style['agree-list__depth']">
                <li :class="$style['agree-list__depth-item']">
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="agree_001"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >서비스 이용약관 전체동의</CheckBoxLabelText
                      >
                    </CheckBox>
                  </div>
                  <div :class="$style['agree-list__depth-contents']">
                    <ul :class="$style['agree-list__list']">
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="agree_001_001"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText
                              >온라인 서비스 이용약관</CheckBoxLabelText
                            >
                          </CheckBox>
                          <div :class="$style['agree-list__right']">
                            <button
                              type="button"
                              :class="$style['agree-list__link']"
                            >
                              <span :class="$style['agree-list__link-text']">
                                상세보기
                              </span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="agree_001_002"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText
                              >개인정보 필수적 수집 ·
                              이용동의</CheckBoxLabelText
                            >
                          </CheckBox>
                          <div :class="$style['agree-list__right']">
                            <button
                              type="button"
                              :class="$style['agree-list__link']"
                            >
                              <span :class="$style['agree-list__link-text']">
                                상세보기
                              </span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="agree_001_003"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText
                              >개인(신용)정보 제3자 제공 동의(SSO
                              서비스)</CheckBoxLabelText
                            >
                          </CheckBox>
                          <div :class="$style['agree-list__right']">
                            <button
                              type="button"
                              :class="$style['agree-list__link']"
                            >
                              <span :class="$style['agree-list__link-text']">
                                상세보기
                              </span>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li :class="$style['agree-list__depth-item']">
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="agree_002"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >하나캐피탈 멤버십 가입 필수 전체
                        동의(선택사항)</CheckBoxLabelText
                      >
                    </CheckBox>
                  </div>
                  <div :class="$style['agree-list__depth-contents']">
                    <ul :class="$style['agree-list__list']">
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="agree_002_001"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText
                              >하나캐피탈 멤버십 회원 약관</CheckBoxLabelText
                            >
                          </CheckBox>
                          <div :class="$style['agree-list__right']">
                            <button
                              type="button"
                              :class="$style['agree-list__link']"
                            >
                              <span :class="$style['agree-list__link-text']">
                                상세보기
                              </span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="agree_002_002"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText
                              >개인(신용)정보 필수적 수집 ·
                              이용동의</CheckBoxLabelText
                            >
                          </CheckBox>
                        </div>
                        <ul
                          :class="[
                            $style['agree-list__list'],
                            $style['agree-list__list--secondary'],
                          ]"
                        >
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="agree_002_002_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >개인(신용)정보 필수적
                                  수집·이용</CheckBoxLabelText
                                >
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="agree_002_002_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >고유식별번호 필수적
                                  수집·이용</CheckBoxLabelText
                                >
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="agree_002_003"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText
                              >개인(신용)정보 필수적 조회
                              동의</CheckBoxLabelText
                            >
                          </CheckBox>
                        </div>
                        <ul
                          :class="[
                            $style['agree-list__list'],
                            $style['agree-list__list--secondary'],
                          ]"
                        >
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="agree_002_003_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >개인(신용)정보 필수적 조회</CheckBoxLabelText
                                >
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="agree_002_004"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText
                              >개인(신용)정보 필수적 제공
                              동의</CheckBoxLabelText
                            >
                          </CheckBox>
                        </div>
                        <ul
                          :class="[
                            $style['agree-list__list'],
                            $style['agree-list__list--secondary'],
                          ]"
                        >
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="agree_002_004_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >개인(신용)정보 필수적 제공
                                  (신용정보회사)</CheckBoxLabelText
                                >
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="agree_002_004_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >개인(신용)정보 필수적 제공
                                  (하나손해보험㈜)</CheckBoxLabelText
                                >
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="agree_002_004_003"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >고유식별번호 필수적 수집·이용
                                  (하나손해보험㈜)</CheckBoxLabelText
                                >
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li :class="$style['agree-list__depth-item']">
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="agree_003"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >하나캐피탈 멤버십 가입 선택 전체
                        동의(선택사항)</CheckBoxLabelText
                      >
                    </CheckBox>
                  </div>
                  <div :class="$style['agree-list__depth-contents']">
                    <ul :class="$style['agree-list__list']">
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="agree_003_001"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText
                              >개인(신용)정보 선택적 수집·이용
                              동의</CheckBoxLabelText
                            >
                          </CheckBox>
                          <div :class="$style['agree-list__right']">
                            <RoundStatus theme="quinary" :block="true">
                              보통
                            </RoundStatus>
                          </div>
                        </div>
                        <ul
                          :class="[
                            $style['agree-list__list'],
                            $style['agree-list__list--secondary'],
                          ]"
                        >
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="agree_003_002_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >금융상품 안내 및 이용권유를 위한
                                  수집·이용</CheckBoxLabelText
                                >
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="agree_003_002_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >전자적 전송 매체를 통한 광고성정보
                                  수신</CheckBoxLabelText
                                >
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                            <ul
                              :class="[
                                $style['agree-list__list'],
                                $style['agree-list__list--tertiary'],
                              ]"
                            >
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="agree_003_002_002_001"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText>전체</CheckBoxLabelText>
                                  </CheckBox>
                                </div>
                              </li>
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="agree_003_002_002_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText>전화</CheckBoxLabelText>
                                  </CheckBox>
                                </div>
                              </li>
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="agree_003_002_002_003"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >문자메시지</CheckBoxLabelText
                                    >
                                  </CheckBox>
                                </div>
                              </li>
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="agree_003_002_002_004"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText>우편</CheckBoxLabelText>
                                  </CheckBox>
                                </div>
                              </li>
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="agree_003_002_002_005"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >이메일</CheckBoxLabelText
                                    >
                                  </CheckBox>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/sign/Member_P05_p001.scss';
</style>

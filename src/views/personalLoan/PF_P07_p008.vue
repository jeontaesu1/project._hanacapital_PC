<script>
// PF_P07_p008
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import PageContents from '@/components/ui/layout/PageContents.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    ButtonList,
    ButtonListItem,
    BasicButton,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    RoundStatus,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">스탁론</PageTitle>
        <template v-slot:right>
          <StepProgress :total="5" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">상품설명서를 확인해 주세요</PageMainText>
    </PageHead>

    <div :class="$style['agree-list__all-contents']">
      <ul :class="$style['agree-list__depth']">
        <li :class="$style['agree-list__depth-item']">
          <ul :class="$style['agree-list__list']">
            <li :class="$style['agree-list__item']">
              <div :class="$style['agree-list__head']">
                <CheckBox
                  id="PF_P07_p008_agree001"
                  :classNames="{
                    wrap: $style['agree-list__checkbox'],
                  }"
                  theme="tertiary"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>가계대출(스탁론) 설명서</CheckBoxLabelText>
                </CheckBox>
                <div :class="$style['agree-list__right']">
                  <button type="button" :class="$style['agree-list__link']">
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
                  id="PF_P07_p008_agree001_002"
                  :classNames="{
                    wrap: $style['agree-list__checkbox'],
                  }"
                  theme="tertiary"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>
                    본인은 하나캐피탈 주식회사와 대출 거래를 함에 있어 금융회사
                    직원과 상담하여 위에서 설명한 내용을 포함하여 대출 거래의
                    주요내용 및 고객부담비용에 대하여 충분히 설명을 듣고
                    이해하였음을 확인합니다.
                  </CheckBoxLabelText>
                </CheckBox>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <section class="row-margin-block-small">
      <h3 class="text-title-1 row-margin-small">설명의무 대상 확인</h3>

      <div class="text-body-1 color-gray-secondary font-weight-light">
        금융회사는 금융소비자 보호를 위하여 대출 거래의 주요내용 및
        고객부담비용에 대하여 충분히 설명하여야 하며, 특히 취약한 금융소비자에
        대해서는 금융소비자의 불이익 사항을 다른 정보보다 우선적으로 설명하고
        그이해 여부를 확인하여야 합니다.<br /><br />
        「금융소비자보호법」상 강화된 설명의무 이행 대상에 해당하는지 여부를
        확인하고자 하오니 아래의 항목 중 해당하는 유형을 선택하여 주시기
        바랍니다.
      </div>

      <BoxCheckList :wrap="true" :col="3" class="row-margin-contents">
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="PF_P07_p008_CheckList001"
            id="PF_P07_p008_CheckList001_001"
          >
            <BoxCheckLabel>65세 이상 고령층</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="PF_P07_p008_CheckList001"
            id="PF_P07_p008_CheckList001_002"
          >
            <BoxCheckLabel>은퇴자</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="PF_P07_p008_CheckList001"
            id="PF_P07_p008_CheckList001_003"
          >
            <BoxCheckLabel>주부</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="PF_P07_p008_CheckList001"
            id="PF_P07_p008_CheckList001_004"
          >
            <BoxCheckLabel>기타</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="PF_P07_p008_CheckList001"
            id="PF_P07_p008_CheckList001_005"
          >
            <BoxCheckLabel>추가설명 원치 않음</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
    </section>

    <!-- Case : '다음' 선택시 노출 -->
    <section>
      <h3 class="text-title-1 row-margin-contents">약관동의</h3>

      <div :class="$style['agree-list__all-contents']">
        <ul :class="$style['agree-list__depth']">
          <li :class="$style['agree-list__depth-item']">
            <ul :class="$style['agree-list__list']">
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="PF_P07_p008_agree002"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>여신거래 기본 약관</CheckBoxLabelText>
                  </CheckBox>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
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
                    id="PF_P07_p008_agree003"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>전자금융거래 약관</CheckBoxLabelText>
                  </CheckBox>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
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
                    id="PF_P07_p008_agree004"
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
                    <button type="button" :class="$style['agree-list__link']">
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
                    id="PF_P07_p008_agree005"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText
                      >투자자(고객)보호 유의안내 및 동의서</CheckBoxLabelText
                    >
                  </CheckBox>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
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
                    id="PF_P07_p008_agree006"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>대출약정서</CheckBoxLabelText>
                  </CheckBox>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
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
                    id="PF_P07_p008_agree007"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>근질권 설정 계약서</CheckBoxLabelText>
                  </CheckBox>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
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
                    id="PF_P07_p008_agree008"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>계좌운용규칙</CheckBoxLabelText>
                  </CheckBox>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
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

      <div :class="$style['agree-list__all-contents']">
        <ul :class="$style['agree-list__depth']">
          <li :class="$style['agree-list__depth-item']">
            <div :class="$style['agree-list__depth-head']">
              <CheckBox
                id="PF_P07_p008_agree009_All"
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
                      id="PF_P07_p008_agree009_001"
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
                      <button type="button" :class="$style['agree-list__link']">
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
                      id="PF_P07_p008_agree009_002"
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
                    <div :class="$style['agree-list__right']">
                      <button type="button" :class="$style['agree-list__link']">
                        <span :class="$style['agree-list__link-text']">
                          상세보기
                        </span>
                      </button>
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
                          id="PF_P07_p008_agree009_002_001"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="quinary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >개인(신용)정보 필수적 수집·이용</CheckBoxLabelText
                          >
                        </CheckBox>
                      </div>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="PF_P07_p008_agree009_002_002"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="quinary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >고유식별번호 필수적 수집·이용</CheckBoxLabelText
                          >
                        </CheckBox>
                      </div>
                    </li>
                  </ul>
                </li>
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="PF_P07_p008_agree009_003"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >개인(신용)정보 필수적 조회 동의</CheckBoxLabelText
                      >
                    </CheckBox>
                    <div :class="$style['agree-list__right']">
                      <button type="button" :class="$style['agree-list__link']">
                        <span :class="$style['agree-list__link-text']">
                          상세보기
                        </span>
                      </button>
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
                          id="PF_P07_p008_agree009_003_001"
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
                      </div>
                    </li>
                  </ul>
                </li>
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="PF_P07_p008_agree009_004"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >개인(신용)정보 필수적 제공 동의</CheckBoxLabelText
                      >
                    </CheckBox>
                    <div :class="$style['agree-list__right']">
                      <button type="button" :class="$style['agree-list__link']">
                        <span :class="$style['agree-list__link-text']">
                          상세보기
                        </span>
                      </button>
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
                          id="PF_P07_p008_agree009_003_001"
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
                      </div>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="PF_P07_p008_agree009_003_002"
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
                      </div>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="PF_P07_p008_agree009_003_003"
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
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div :class="$style['agree-list__all-contents']">
        <ul :class="$style['agree-list__depth']">
          <li :class="$style['agree-list__depth-item']">
            <div :class="$style['agree-list__depth-head']">
              <CheckBox
                id="PF_P07_p008_agree010_All"
                :classNames="{
                  wrap: $style['agree-list__depth-checkbox'],
                }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText
                  >개인(신용)정보 선택적 수집, 이용 전체 동의</CheckBoxLabelText
                >
              </CheckBox>
            </div>
            <div :class="$style['agree-list__depth-contents']">
              <ul :class="$style['agree-list__list']">
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="PF_P07_p008_agree010_001"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >개인(신용)정보 선택적 수집·이용 동의</CheckBoxLabelText
                      >
                    </CheckBox>
                    <div :class="$style['agree-list__right']">
                      <RoundStatus theme="quinary" :block="true">
                        보통
                      </RoundStatus>
                      <button type="button" :class="$style['agree-list__link']">
                        <span :class="$style['agree-list__link-text']">
                          상세보기
                        </span>
                      </button>
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
                          id="PF_P07_p008_agree010_001_001"
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
                          id="PF_P07_p008_agree010_001_002"
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
                            <span :class="$style['agree-list__link-text']">
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
                              id="PF_P07_p008_agree010_001_002_001"
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
                              id="PF_P07_p008_agree010_001_002_002"
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
                              id="PF_P07_p008_agree010_001_002_003"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>문자메시지</CheckBoxLabelText>
                            </CheckBox>
                          </div>
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="PF_P07_p008_agree010_001_002_004"
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
                              id="PF_P07_p008_agree010_001_002_005"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>이메일</CheckBoxLabelText>
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
    </section>
    <!-- // Case : '다음' 선택시 노출 -->

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P07_p008.scss';
</style>

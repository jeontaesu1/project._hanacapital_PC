<script>
// My_P08_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

import IconCustomer from '@/assets/images/icon/customer-center.svg?component';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicHr,
    UnitText,
    IconCustomer,
  },
  setup() {
    const layer = ref(null);

    return {
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <ModalPopup>
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>만기안내장</PopupTitle>
        </ModalPopupHead>
      </template>

      <section>
        <p class="text-body-1">
          안녕하세요. 김하나님.<br />
          하나캐피탈을 이용해주신 손님께 깊은 감사를 드립니다.<br />
          손님께서 이용중인 오토리스의 만기가 다가오고 있습니다.<br />
          만기 1개월 전까지 만기상담 담당자가 배정되어, 만기 상담을 위하여 유선
          연락을 드릴 예정이오니, 상담원에게 만기처리방법(계약내용 참고) 중
          택일하여 알려주시면 구체적인 만기 절차를 안내해드리겠습니다.<br /><br />

          유선연락은 02-6911로 시작되는 번호로 상담이 진행되오니, 꼭 받아주시기
          바랍니다.
        </p>

        <BasicBox className="row-margin-block-small row-margin-bottom-none">
          <KeyValue>
            <KeyValueItem>
              <KeyValueTitle>만기일</KeyValueTitle>
              <KeyValueText>2023.01.01</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <BasicBox className="row-margin-contents">
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">오토리스 20고5678</h3>
              <p
                class="text-body-3 color-gray-tertiary font-weight-medium row-margin-small"
              >
                벤츠 더 뉴 C-class(W205/S205)
              </p>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue>
            <KeyValueItem>
              <KeyValueTitle>리스이용자</KeyValueTitle>
              <KeyValueText>김하나</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>계약번호</KeyValueTitle>
              <KeyValueText>L1211000000000</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>리스기간</KeyValueTitle>
              <KeyValueText>2개월</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>계약기간</KeyValueTitle>
              <KeyValueText>2021.10.21 ~ 2021.12.05</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>취득원가</KeyValueTitle>
              <KeyValueText>99,999,999원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>리스보증금</KeyValueTitle>
              <KeyValueText>99,999,999원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>잔존가치</KeyValueTitle>
              <KeyValueText>99,999,999원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>만기처리방법</KeyValueTitle>
              <KeyValueText>연장/반환/구매</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>

      <BasicHr theme="secondary" type="popup" className="row-margin-block" />

      <section>
        <h3 class="text-big-3 row-margin-contents">만기처리 안내</h3>

        <section class="row-margin-block-small row-margin-top-none">
          <h4 class="text-title-1 row-margin-small">연장</h4>
          <p class="text-body-1 font-weight-light color-gray-secondary">
            차량의 잔존가치 9,999,999원으로 리스 기한 연장
          </p>

          <BasicBox className="row-margin-contents">
            <KeyValue verticalAlign="center">
              <KeyValueItem>
                <KeyValueTitle :classNames="{ title: 'color-black' }">
                  잔존가치
                </KeyValueTitle>
                <KeyValueText>
                  <UnitText rightUnit="원" align="right">9,999,999</UnitText>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-block-small">
          <h4 class="text-title-1 row-margin-small">구매</h4>

          <BasicBox className="row-margin-contents">
            <KeyValue verticalAlign="center">
              <KeyValueItem>
                <KeyValueTitle :classNames="{ title: 'color-black' }">
                  구매대금
                </KeyValueTitle>
                <KeyValueText>
                  <UnitText rightUnit="원" align="right">9,999,999</UnitText>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>

          <div :class="[$style['contents-list'], 'row-margin-contents']">
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
                    구매대금은 별도로 납부하셔야 합니다.
                  </div>
                </div>
                <div
                  :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
                >
                  <p
                    class="text-body-2 font-weight-regular color-gray-tertiary"
                  >
                    (리스 보증금이 있는 경우 차액분만 입금)
                  </p>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">2</div>
                  <div :class="$style['contents-list__title']">
                    만기일 +10일 이내에 ‘차량등록명의’를 고객님으로 이전
                    완료(3자 이전금지) 하셔야 하며, 미이전 시에는 자동차관리법에
                    따른 범칙금이 부과됩니다.
                  </div>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">3</div>
                  <div :class="$style['contents-list__title']">
                    명의 이전에 소요되는 각종 비용(등록세, 취득세, 공채비용
                    등)은 고객님 부담입니다.
                  </div>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">4</div>
                  <div :class="$style['contents-list__title']">
                    소유권이전 등록은 손님이 직접 이전하는 방법과,
                    이전대행업체(주식회사 다코스)를 통한 이전 방법이 있습니다.
                    이전대행업체를 통한 이전 등록 시 이전대행비용이 발생됩니다.
                  </div>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">5</div>
                  <div :class="$style['contents-list__title']">
                    『차량등록명의』가 이용자명의일 경우에도 차량 매입시
                    취득세가 발생합니다.
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section class="row-margin-block-small row-margin-top-none">
          <h4 class="text-title-1 row-margin-small">반환</h4>
          <p class="text-body-1 font-weight-light color-gray-secondary">
            차량 반환 일시와 장소를 협의하여 반환 후 차량 평가
          </p>
          <div :class="[$style['contents-list'], 'row-margin-contents']">
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
                    평가 결과에 따라 ‘차량평가정산금‘이 발생될 수 있습니다.
                  </div>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">2</div>
                  <div :class="$style['contents-list__title']">
                    차량 반환 지연 시에는 ‘반환지연금‘이 추가로 부과됩니다.
                  </div>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">3</div>
                  <div :class="$style['contents-list__title']">
                    반환 가능 여부 및 ‘차량평가정산금‘에 관한 세부내용은 약관을
                    참조하시기 바랍니다.
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section class="row-margin-block-small row-margin-top-none">
          <h4 class="text-title-1 row-margin-contents">공통사항</h4>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
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
                만기 1개월전까지 담당자가 만기상담을 위해 연락드릴 예정입니다.
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
                반환 또는 구매시점에는 확인되지 않은 범칙금, 과태료, 자동차세
                등을 충당하기 위해 3개월간 예치하는 “해지후보증금”을 납부하셔야
                합니다.
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
                <div>승계(임차인변경)</div>

                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--regular'],
                    'row-margin-item',
                  ]"
                >
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'font-weight-regular color-black',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']">-</div>
                    <div :class="$style['basic-list__content']">
                      만기일로부터 2개월전 승계신청 원칙<br />
                      (만기일로부터 1개월전 승계불가)
                    </div>
                  </li>
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'font-weight-regular color-red',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']">-</div>
                    <div :class="$style['basic-list__content']">
                      YY.MM.DD 이후에는 승계신청이 불가합니다.
                    </div>
                  </li>
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'font-weight-regular color-black',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']">-</div>
                    <div :class="$style['basic-list__content']">
                      만기일로부터 3회차 이전 승계 접수 시 승계가능합니다.
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
      </section>

      <BasicHr theme="quaternary" className="row-margin-container-medium" />

      <div :class="$style['icon-list']">
        <ul :class="$style['icon-list__list']">
          <!-- Case : 만기 6개월 전 -->
          <li :class="$style['icon-list__item']">
            <div :class="$style['icon-list__block']">
              <div :class="$style['icon-list__icon']"><IconCustomer /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">
                  고객센터 1800-1110
                </div>
                <div :class="$style['icon-list__text']">평일 09:00 ~ 18:00</div>
              </div>
            </div>
          </li>
          <!-- // Case : 만기 6개월 전 -->

          <!-- Case : 만기 4개월 전 -->
          <li :class="$style['icon-list__item']">
            <div :class="$style['icon-list__block']">
              <div :class="$style['icon-list__icon']"><IconCustomer /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">
                  만기상담 1800-9560
                </div>
                <div :class="$style['icon-list__text']">Fax 02-2037-3251</div>
              </div>
            </div>
          </li>
          <li :class="$style['icon-list__item']">
            <div :class="$style['icon-list__block']">
              <div :class="$style['icon-list__icon']"><IconCustomer /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">
                  승계상담 02-3461-5538
                </div>
                <div :class="$style['icon-list__text']">Fax 02-2037-3207</div>
              </div>
            </div>
          </li>
          <!-- // Case : 만기 4개월 전 -->
        </ul>
      </div>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular" @click="layerSlotProps.close()"
              >확인</BasicButton
            >
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/My_P08_l001.scss';
</style>

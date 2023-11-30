<script>
// AF_P02_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

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
    <ModalPopup size="regular">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>차량 반납시 유의사항</PopupTitle>
        </ModalPopupHead>
      </template>

      <div :class="$style['contents-wrap']">
        <section>
          <h3 class="text-body-1 color-green row-margin-item-group">
            감가금액 안내
          </h3>

          <p class="text-body-3 color-gray-tertiary font-weight-regular">
            오토리스 계약으로 이용중인 자동차를 반환(중도, 만기)하는 경우 반환
            자동차의 상태 및 성능을 평가할 수 있습니다.<br />
            평가 결과에 따라 반환 시점의 자동차의 기대가치(혹은 중고차 시세)대비
            감가사유가 존재하는 경우 감가금액을 청구 할 수 있습니다.
          </p>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-body-1 color-green row-margin-item-group">
            감가금액 계산식
          </h3>

          <p class="text-body-3 color-gray-tertiary font-weight-regular">
            감가금액 = 반환시점의 자동차의 기대가치(혹은 중고차 시세) x 감가율의
            합
          </p>
        </section>

        <section>
          <h3 class="text-body-1 color-green row-margin-item-group">
            감가 기준액(자동차의 기대가치, 중고차 시세)
          </h3>

          <p class="text-body-3 color-gray-tertiary font-weight-regular">
            반환시점 자동차의 기대가치(중고차 시세)는 신차등록 당시 차량가격*에
            행정안전부에서 발표하는 경과연수별 차량 잔가율을 곱하여
            산정합니다.<br />
            *차량 가격은 출고시 차량가격을 의미(자동차등록증상 과표기준 x 1.1)
          </p>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              'row-margin-contents',
              'row-margin-bottom-none',
            ]"
          >
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'font-weight-regular',
                'color-gray',
              ]"
            >
              <div :class="$style['basic-list__symbol']">※</div>
              <div :class="$style['basic-list__content']">
                행정안전부 발표 경과연수별 잔가율(2023년 기준)
              </div>
            </li>
          </ul>

          <div :class="[$style['basic-table'], 'row-margin-item-group-small']">
            <table>
              <colgroup>
                <col style="width: 93px" />
                <col style="width: 93px" />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th colspan="2">경과연수</th>
                  <th>내용연수</th>
                  <th>1년미만</th>
                  <th>1년</th>
                  <th>2년</th>
                  <th>3년</th>
                  <th>4년</th>
                  <th>5년</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="2">승용</td>
                  <td>국산</td>
                  <td>15년</td>
                  <td>82.6%</td>
                  <td>72.5%</td>
                  <td>61.4%</td>
                  <td>51.8%</td>
                  <td>43.7%</td>
                  <td>36.8%</td>
                </tr>
                <tr>
                  <td :class="$style['basic-table__left-line']">수입</td>
                  <td>15년</td>
                  <td>84.2%</td>
                  <td>72.9%</td>
                  <td>60.5%</td>
                  <td>50.0%</td>
                  <td>41.2%</td>
                  <td>34.0%</td>
                </tr>
                <tr>
                  <td colspan="2">승합</td>
                  <td>15년</td>
                  <td>810</td>
                  <td>72.6%</td>
                  <td>60.9%</td>
                  <td>51.0%</td>
                  <td>42.6%</td>
                  <td>35.7%</td>
                </tr>
                <tr>
                  <td colspan="2">화물</td>
                  <td>15년</td>
                  <td>76.1%</td>
                  <td>67.1%</td>
                  <td>59.7%</td>
                  <td>51.0%</td>
                  <td>42.6%</td>
                  <td>35.7%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-body-1 color-green row-margin-item-group">
            항목별 감가율 (시해일 : 2021년 1월 실행건 부터)
          </h3>

          <div :class="$style['basic-table']">
            <table>
              <colgroup>
                <col style="width: 186px" />
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th rowspan="2">항목</th>
                  <th colspan="5" :class="$style['table-head']">
                    리스차량 등록 후 경과 기간
                  </th>
                </tr>
                <tr>
                  <th
                    :class="[
                      $style['basic-table__left-line'],
                      $style['table-head'],
                    ]"
                  >
                    12개월 이하
                  </th>
                  <th
                    :class="[
                      $style['basic-table__left-line'],
                      $style['table-head'],
                    ]"
                  >
                    13~24개월<br />
                    이하
                  </th>
                  <th
                    :class="[
                      $style['basic-table__left-line'],
                      $style['table-head'],
                    ]"
                  >
                    25~36개월<br />
                    이하
                  </th>
                  <th
                    :class="[
                      $style['basic-table__left-line'],
                      $style['table-head'],
                    ]"
                  >
                    37~48개월<br />
                    이하
                  </th>
                  <th
                    :class="[
                      $style['basic-table__left-line'],
                      $style['table-head'],
                    ]"
                  >
                    49개월 이상
                  </th>
                </tr>
                <tr>
                  <td>후드(봇넷)</td>
                  <td>4%</td>
                  <td>5%</td>
                  <td>7%</td>
                  <td>8%</td>
                  <td>9%</td>
                </tr>
                <tr>
                  <td>트렁크</td>
                  <td>3%</td>
                  <td>4%</td>
                  <td>5%</td>
                  <td>6%</td>
                  <td>7%</td>
                </tr>
                <tr>
                  <td>휀더(좌/우)</td>
                  <td>각3%</td>
                  <td>각3%</td>
                  <td>각5%</td>
                  <td>각6%</td>
                  <td>각7%</td>
                </tr>
                <tr>
                  <td>쿼터패널(좌/우)</td>
                  <td>각3%</td>
                  <td>각4%</td>
                  <td>각5%</td>
                  <td>각6%</td>
                  <td>각7%</td>
                </tr>
                <tr>
                  <td>앞문(좌/우)</td>
                  <td>각3%</td>
                  <td>각4%</td>
                  <td>각5%</td>
                  <td>각6%</td>
                  <td>각7%</td>
                </tr>
                <tr>
                  <td>뒷문(좌/우)</td>
                  <td>각3%</td>
                  <td>각4%</td>
                  <td>각5%</td>
                  <td>각6%</td>
                  <td>각7%</td>
                </tr>
                <tr>
                  <td>A필러(좌/우)</td>
                  <td>각4%</td>
                  <td>각5%</td>
                  <td>각7%</td>
                  <td>각8%</td>
                  <td>각9%</td>
                </tr>
                <tr>
                  <td>B필러(좌/우)</td>
                  <td>각4%</td>
                  <td>각5%</td>
                  <td>각7%</td>
                  <td>각8%</td>
                  <td>각9%</td>
                </tr>
                <tr>
                  <td>C필러(좌/우)</td>
                  <td>각4%</td>
                  <td>각5%</td>
                  <td>각7%</td>
                  <td>각8%</td>
                  <td>각9%</td>
                </tr>
                <tr>
                  <td>데쉬판낼</td>
                  <td>6%</td>
                  <td>8%</td>
                  <td>10%</td>
                  <td>12%</td>
                  <td>14%</td>
                </tr>
                <tr>
                  <td>프론트패널</td>
                  <td>3%</td>
                  <td>4%</td>
                  <td>5%</td>
                  <td>6%</td>
                  <td>7%</td>
                </tr>
                <tr>
                  <td>리어패널</td>
                  <td>3%</td>
                  <td>4%</td>
                  <td>5%</td>
                  <td>6%</td>
                  <td>7%</td>
                </tr>
                <tr>
                  <td>루프패널</td>
                  <td>6%</td>
                  <td>8%</td>
                  <td>10%</td>
                  <td>12%</td>
                  <td>14%</td>
                </tr>
                <tr>
                  <td>트렁크풀로어패널</td>
                  <td>4%</td>
                  <td>5%</td>
                  <td>7%</td>
                  <td>8%</td>
                  <td>9%</td>
                </tr>
                <tr>
                  <td>인사이드패널(좌/우)</td>
                  <td>각3%</td>
                  <td>각4%</td>
                  <td>각5%</td>
                  <td>각6%</td>
                  <td>각7%</td>
                </tr>
                <tr>
                  <td>앞휠하우스(좌/우)</td>
                  <td>각5%</td>
                  <td>각7%</td>
                  <td>각8%</td>
                  <td>각10%</td>
                  <td>각12%</td>
                </tr>
                <tr>
                  <td>뒤휠하우스(좌/우)</td>
                  <td>각5%</td>
                  <td>각7%</td>
                  <td>각8%</td>
                  <td>각10%</td>
                  <td>각12%</td>
                </tr>
                <tr>
                  <td>사이드씰(좌/우)</td>
                  <td>각4%</td>
                  <td>각5%</td>
                  <td>각7%</td>
                  <td>각8%</td>
                  <td>각9%</td>
                </tr>
                <tr>
                  <td>도장</td>
                  <td>1%</td>
                  <td>1%</td>
                  <td>2%</td>
                  <td>2%</td>
                  <td>2%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-body-1 color-green row-margin-item-group">
            초과운행부담금
          </h3>

          <p class="text-body-3 color-gray-tertiary font-weight-regular">
            손님이 금융회사와 계약한 운행거리를 초과하여 자동차를 운행한 경우
            금융회사는 아래 산식에 의한 초과운행부담금을 손님에게 청구할 수
            있습니다.
          </p>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              'row-margin-contents',
              'row-margin-bottom-none',
            ]"
          >
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'font-weight-regular',
                'color-gray',
              ]"
            >
              <div :class="$style['basic-list__symbol']">※</div>
              <div :class="$style['basic-list__content']">
                초과운행부담금 = 초과운행거리(km) x Km당 초과운행료
              </div>
            </li>
          </ul>

          <div :class="[$style['basic-table'], 'row-margin-item-group-small']">
            <table>
              <colgroup>
                <col style="width: 93px" />
                <col style="width: 93px" />
              </colgroup>
              <tbody>
                <tr>
                  <th>국산차</th>
                  <td>Km당 100원</td>
                </tr>
                <tr>
                  <th>수입차</th>
                  <td>Km당 300원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          col="3"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P02_l001.scss';
</style>

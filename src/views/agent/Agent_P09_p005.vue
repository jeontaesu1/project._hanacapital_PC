<script>
// Agent_P09_p005
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import SearchForm from '@/components/ui/form/SearchForm.vue';
import SearchFormList from '@/components/ui/form/SearchFormList.vue';
import SearchFormItem from '@/components/ui/form/SearchFormItem.vue';
import SimpleInput from '@/components/ui/form/SimpleInput.vue';
import SimpleSelect from '@/components/ui/form/SimpleSelect.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    SearchForm,
    SearchFormList,
    SearchFormItem,
    SimpleInput,
    SimpleSelect,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'agent003');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });
  },
};
</script>

<template>
  <PageContents size="max">
    <PageHead>
      <PageTitle>채권상태확인</PageTitle>
    </PageHead>

    <!-- 조회 조건 -->
    <SearchForm>
      <h3 class="for-a11y">조회 조건</h3>

      <SearchFormList>
        <SearchFormItem>
          <template v-slot:key>검색조건</template>
          <div class="flex-box">
            <div class="flex-box__cell">
              <SimpleSelect
                :options="[
                  {
                    value: '1',
                    label: '채권번호',
                  },
                  {
                    value: '2',
                    label: '제휴사주문번호',
                  },
                ]"
                title="검색범위"
                defaultValue="2"
                :classNames="{ wrap: 'input-width-large' }"
              />
            </div>
            <div class="flex-box__cell">
              <SimpleInput
                title="검색어"
                :classNames="{ wrap: 'input-width-double-wide' }"
              />
            </div>
          </div>
        </SearchFormItem>
      </SearchFormList>

      <template v-slot:bottom>
        <ButtonList
          :wrap="true"
          :col="5"
          align="center"
          :classNames="{ wrap: 'row-margin-none' }"
        >
          <ButtonListItem>
            <BasicButton size="regular" theme="tertiary">조회</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </SearchForm>
    <!-- // 조회 조건 -->

    <!-- table -->
    <div :class="[$style['basic-table'], $style['basic-table--secondary']]">
      <table>
        <colgroup>
          <col style="width: 160px" />
          <col />
          <col style="width: 160px" />
          <col />
          <col style="width: 160px" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th class="align-left">채권번호</th>
            <td class="align-left">D1234567890</td>
            <th class="align-left">할인율</th>
            <td class="align-left">1.23</td>
            <th class="align-left">실행일자</th>
            <td class="align-left">2023.06.14</td>
          </tr>
          <tr>
            <th class="align-left">매입취소금액</th>
            <td class="align-left">1,234,567</td>
            <th class="align-left">제휴사주문번호</th>
            <td class="align-left">12345@678901</td>
            <th class="align-left">할인금액</th>
            <td class="align-left">1,234,567</td>
          </tr>
          <tr>
            <th class="align-left">결제일자</th>
            <td class="align-left">01</td>
            <th class="align-left">중도반환금액</th>
            <td class="align-left">1,234,567</td>
            <th class="align-left">채권상태</th>
            <td class="align-left">채권상태</td>
          </tr>
          <tr>
            <th class="align-left">매회납부금액</th>
            <td class="align-left">123,456</td>
            <th class="align-left">초회납부일자</th>
            <td class="align-left">2023.06.14</td>
            <th class="align-left">중도상환금액</th>
            <td class="align-left">1,234,567</td>
          </tr>
          <tr>
            <th class="align-left">신청금액</th>
            <td class="align-left">1,234,567</td>
            <th class="align-left">연체회차</th>
            <td class="align-left">01</td>
            <th class="align-left">원금잔액</th>
            <td class="align-left">1,234,567</td>
          </tr>
          <tr>
            <th class="align-left">가상계좌번호</th>
            <td class="align-left">01234567890123</td>
            <th class="align-left">잔여/신청개월수</th>
            <td class="align-left">01/12</td>
            <th class="align-left">연체금액</th>
            <td class="align-left">123,456</td>
          </tr>
          <tr>
            <th class="align-left">대금지급일</th>
            <td class="align-left">2023.06.14</td>
            <th class="align-left">선수금액</th>
            <td class="align-left" colspan="3">1,234,567</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- // table -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/agent/Agent_P09_p005.scss';
</style>

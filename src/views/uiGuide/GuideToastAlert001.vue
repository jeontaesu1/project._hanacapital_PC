<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import ToastAlert from '@/components/ui/layer/ToastAlert.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    ToastAlert,
  },
  setup() {
    const toastAlert = ref(null);

    const toastAlertPush = (message) => {
      toastAlert.value.push(message);
    };

    return {
      toastAlert,
      toastAlertPush,
    };
  },
};
</script>

<template>
  <PageContents>
    <ButtonList
      :classNames="{
        wrap: 'row-margin-none',
      }"
      align="full"
    >
      <ButtonListItem>
        <BasicButton
          @click="
            toastAlertPush(
              '여기에 내용이 표시될 예정입니다.\n줄바꿈은 \\n 이용.\n세 줄일 경우는 이렿게 표시됩니다.'
            )
          "
          >토스트 얼럿</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <ToastAlert ref="toastAlert" />
  </PageContents>
</template>

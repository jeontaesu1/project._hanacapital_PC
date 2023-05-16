<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import AlertSystem from '@/components/ui/layer/AlertSystem.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    AlertSystem,
  },
  setup() {
    const alert = ref(null);

    const alertOpen = (options) => {
      alert.value.open(options);
    };

    const alertOpen001 = () => {
      alertOpen({
        title: '타이틀',
        message:
          '여기에 내용이 표시될 예정입니다.\n줄바꿈은 \\n 이용.\n세 줄일 경우는 이렿게 표시됩니다.',
        buttons: [
          {
            text: '취소',
            theme: 'quaternary',
            line: true,
            callback: (closeFn) => {
              console.log('취소');
              closeFn();
            },
            closeAfterCallback: () => {
              console.log('[취소] 닫는 애니메이션 끝난 후 호출 될 함수');
            },
          },
          {
            callback: (closeFn) => {
              console.log('확인');
              closeFn();
            },
            closeAfterCallback: () => {
              console.log('[확인] 닫는 애니메이션 끝난 후 호출 될 함수');
            },
          },
        ],
      });
    };

    return {
      alert,
      alertOpen001,
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
        <BasicButton @click="alertOpen001">얼럿</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <AlertSystem ref="alert" />
  </PageContents>
</template>

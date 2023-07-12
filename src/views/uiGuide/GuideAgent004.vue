<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import Agent_P03_l001 from '@/views/agent/Agent_P03_l001.vue';
import Agent_P03_l002 from '@/views/agent/Agent_P03_l002.vue';
import Agent_P03_l003 from '@/views/agent/Agent_P03_l003.vue';
import Agent_P03_l004 from '@/views/agent/Agent_P03_l004.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    Agent_P03_l001,
    Agent_P03_l002,
    Agent_P03_l003,
    Agent_P03_l004,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };
    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };
    const layer003Open = (e = {}) => {
      layer003.value.layer.open(e.target);
    };
    const layer004Open = (e = {}) => {
      layer004.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
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
        <BasicButton @click="layer001Open">
          승계전이용자조회 팝업<br />Agent_P03_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          신용정보 녹취 동의 팝업<br />Agent_P03_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          전 이용자 온라인인증 SMS 발송 팝업<br />Agent_P03_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          후 이용자 온라인인증 SMS 발송 팝업<br />Agent_P03_l004
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <Agent_P03_l001 ref="layer001" />
    <Agent_P03_l002 ref="layer002" />
    <Agent_P03_l003 ref="layer003" />
    <Agent_P03_l004 ref="layer004" />
  </PageContents>
</template>

<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import Common_P00_l005 from '@/views/guide/Common_P00_l005.vue';
import Common_P00_l006 from '@/views/guide/Common_P00_l006.vue';
import Common_P00_l008 from '@/views/guide/Common_P00_l008.vue';
import Common_P00_l011 from '@/views/guide/Common_P00_l011.vue';
import Common_P00_l012 from '@/views/guide/Common_P00_l012.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    Common_P00_l005,
    Common_P00_l006,
    Common_P00_l008,
    Common_P00_l011,
    Common_P00_l012,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);

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
    const layer005Open = (e = {}) => {
      layer005.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
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
          고객이탈방지<br />Common_P00_l005
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          로그아웃 안내<br />Common_P00_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          세션종료 안내<br />Common_P00_l008
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          접속대기 안내 팝업<br />Common_P00_l011
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          초과접속 안내 팝업<br />Common_P00_l012
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <Common_P00_l005 ref="layer001" />
    <Common_P00_l006 ref="layer002" />
    <Common_P00_l008 ref="layer003" />
    <Common_P00_l011 ref="layer004" />
    <Common_P00_l012 ref="layer005" />
  </PageContents>
</template>

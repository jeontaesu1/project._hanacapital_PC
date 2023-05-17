<script>
import { reactive, ref, nextTick } from 'vue';

import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupText from '@/components/ui/layer/PopupText.vue';
import AlertPopup from '@/components/ui/layer/AlertPopup.vue';

const defaultOptions = () => ({
  title: '',
  message: [''],
  buttons: [{}],
});
const defaultButtonsOptions = () => ({
  text: '확인',
  theme: null, // secondary, tertiary, quaternary
  line: false, // true
  callback: (closeFn) => {
    closeFn();
  },
  closeAfterCallback: () => {},
});

export default {
  components: {
    BasicButton,
    UiLayer,
    PopupTitle,
    PopupText,
    AlertPopup,
    ButtonList,
    ButtonListItem,
  },
  setup() {
    const initOptions = defaultOptions();

    const state = reactive({
      title: initOptions.title,
      message: initOptions.message,
      buttons: [defaultButtonsOptions()],
      onAfterClosed: () => {},
    });

    const layer = ref(null);

    const open = (customOptions) => {
      const options = Object.assign(defaultOptions(), customOptions);
      const { title, message, buttons } = options;

      for (let i = 0; i < buttons.length; i++) {
        buttons[i] = Object.assign(defaultButtonsOptions(), buttons[i]);
      }

      state.title = title;
      state.message =
        typeof message === 'string' ? message.split(/\n/) : message;
      state.buttons = buttons;

      layer.value.open();
    };

    const close = () => {
      layer.value.close();
    };

    const clear = () => {
      layer.value.close(0);
    };

    const buttonClick = (i) => {
      const { buttons } = state;

      state.onAfterClosed = () => {
        const resetOptions = defaultOptions();

        buttons[i].closeAfterCallback();

        state.title = resetOptions.title;
        state.message = resetOptions.message;
        state.buttons = [defaultButtonsOptions()];
      };

      nextTick(() => {
        buttons[i].callback(close);
      });
    };

    return {
      state,
      layer,
      open,
      close,
      clear,
      buttonClick,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" :onAfterClosed="state.onAfterClosed">
    <AlertPopup
      :forceHeadHide="!state.title.length"
      :forceBodyHide="!state.message[0].length"
    >
      <template v-slot:head>
        <PopupTitle>{{ state.title }}</PopupTitle>
      </template>

      <PopupText v-if="state.message[0].length">
        <template v-for="(text, i) in state.message" :key="i">
          <br v-if="i > 0" />{{ text }}
        </template>
      </PopupText>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem v-for="(item, i) in state.buttons" :key="i">
            <BasicButton
              size="regular"
              :line="item.line"
              :theme="item.theme"
              @click="buttonClick(i)"
            >
              {{ item.text }}
            </BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </AlertPopup>
  </UiLayer>
</template>

import ChatbotAvatar from '@/components/chat-widget/ChatbotAvatar.jsx'
import {
  createChatBotMessage,
  createCustomMessage,
} from 'react-chatbot-kit';
import WechatQRCodeResponse from '@/components/chat-widget/custom/WechatQRcode.jsx';
import i18n from "@/i18n"

const config = {
  botName: 'Yunda',
  customComponents: {
    botAvatar: (props) => <ChatbotAvatar {...props} />
  },
  widgets: [
    {
      widgetName: 'custom',
      widgetFunc: (props) => <WechatQRCodeResponse {...props} />,
      props: {},
      mapStateToProps: ['gist', 'infoBox']
    },
  ],
  // initialMessages: [createChatBotMessage(`Welcome to Yunda`)],
  initialMessages: [
    createChatBotMessage(
      i18n.t('bot.sentence1')
    ),
    createChatBotMessage(i18n.t('bot.sentence2'), {
      withAvatar: true,
      delay: 2000,
    }),
    createChatBotMessage(i18n.t('bot.sentence3'), {
      widget: "custom",
      delay: 4000,
      withAvatar: false,
    }),
  ],
};

export default config;
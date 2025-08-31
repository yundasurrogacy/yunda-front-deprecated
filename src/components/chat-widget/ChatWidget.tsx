import React, { useState } from "react"
import Chatbot from "react-chatbot-kit"
import './ChatbotWidget.scss'
import config from '@/components/chat-widget/bot/config'
import MessageParser from '@/components/chat-widget/bot/MessageParser'
import ActionProvider from '@/components/chat-widget/bot/ActionProvider'

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <div style={{ position: "relative" }}>
        {isOpen && (
          <div
            className="chat-toggle-win"
          >
            <Chatbot
              headerText='Yunda Support'
              placeholderText='Write a replay...'
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chat-toggle-btn"
        aria-label="Chatbot Toggle"
      >
        {/* CSS 绘制图标 */}
        <div style={{
          position: "relative",
          width: "22px",
          height: "18px",
          backgroundColor: "#E7ECE9",
          borderRadius: "4px",
        }}>
          <div style={{
            position: "absolute",
            bottom: "-4px",
            left: "4px",
            width: 0,
            height: 0,
            borderTop: "6px solid #E7ECE9",
            borderLeft: "6px solid transparent",
          }} />
        </div>
      </button>
      </div>
    </div>
  );
};


export default ChatbotWidget;
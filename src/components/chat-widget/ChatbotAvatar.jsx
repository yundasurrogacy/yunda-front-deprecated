import React from "react"

const ChatbotAvatar = ({ className }) => {
  return (
    <div className={className} style={{
      width: 32,
      height: 32,
      borderRadius: "50%",
      backgroundColor: "#fff",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "center",
      marginRight: 10,
    }}>
      <img src="/images/logo.svg" alt="Bot Avatar" width={32} height={32} />
    </div>
  )
}

export default ChatbotAvatar;

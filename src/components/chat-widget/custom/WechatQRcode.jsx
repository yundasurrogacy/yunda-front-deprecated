import React from 'react';

const WechatQRCodeResponse = () => {
  return (
    <div
      style={{
        maxWidth: '180px',
        padding: '10px',
        background: '#fff',
        borderRadius: '8px',
      }}
    >
      <img
        src="/images/wechatQRcode.png"
        alt="..."
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }}
      />
    </div>
  );
};

export default WechatQRCodeResponse;
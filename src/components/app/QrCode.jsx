import React from 'react'
import QRCode from "react-qr-code";

function QrCodeBOX({value}) {
  return (
    <div style={{ background: 'white', padding: '16px' }}>
    <QRCode value={value} />
  </div>
  )
}

export default QrCodeBOX
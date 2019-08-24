import React, { useEffect, useState } from 'react';

import * as qrcodegen from '../qr/qrcodegen';

const qr = _qr_qrcodegen__WEBPACK_IMPORTED_MODULE_1__.qrcodegen;

export default function QR(props) {
  const [content, setContent] = useState('');

  useEffect(() => {
    const c = document.getElementById('canvas');
    const segs = qr.QrSegment.makeSegments(content);
    const qr1 = qr.QrCode.encodeSegments(
      segs,
      qr.QrCode.Ecc.HIGH,
      5,
      5,
      2,
      false
    );
    qr1.drawCanvas(1, 4, c);
  });

  return (
    <div>
      <canvas id="canvas" />
    </div>
  );
}

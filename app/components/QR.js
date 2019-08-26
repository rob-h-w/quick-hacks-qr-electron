import React, { useEffect, useState } from 'react';

import * as qrcodegen from '../qr/qrcodegen';

const qr = _qr_qrcodegen__WEBPACK_IMPORTED_MODULE_1__.qrcodegen;

type Props = {
  message: string
};

export default function QR(props: Props) {
  useEffect(() => {
    const c = document.getElementById('canvas');
    const segs = qr.QrSegment.makeSegments(props.message);
    const qr1 = qr.QrCode.encodeSegments(
      segs,
      qr.QrCode.Ecc.HIGH,
      5,
      40,
      2,
      true
    );
    qr1.drawCanvas(4, 4, c);
  });

  return (
    <div>
      <canvas id="canvas" />
    </div>
  );
}

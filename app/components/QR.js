// @flow
import { createCanvas } from 'canvas';
import React, { useEffect, useState } from 'react';

import { qrcodegen } from '../qr/qrcodegen';

type Props = {
  message: string,
  onPng: Buffer => void
};

export default function QR(props: Props) {
  const { message, onPng } = props;

  useEffect(() => {
    const c = document.getElementById('canvas');
    const segs = qrcodegen.QrSegment.makeSegments(message);
    const qr1 = qrcodegen.QrCode.encodeSegments(
      segs,
      qrcodegen.QrCode.Ecc.HIGH,
      5,
      40,
      2,
      true
    );
    qr1.drawCanvas(4, 4, c);
    const offScreen = createCanvas(2, 2);
    qr1.drawCanvas(4, 4, offScreen);
    onPng(offScreen.createPNGStream().read());
  }, [message, onPng]);

  return (
    <div>
      <canvas id="canvas" />
    </div>
  );
}

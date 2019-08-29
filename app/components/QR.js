// @flow
import { createCanvas } from 'canvas';
import React, { useEffect, useState } from 'react';

import { qrcodegen } from '../qr/qrcodegen';

type Props = {
  message: string,
  onError: Object => void,
  onPng: Buffer => void
};

export default function QR(props: Props) {
  const { message, onError, onPng } = props;

  useEffect(() => {
    const c = document.getElementById('canvas');
    const segs = qrcodegen.QrSegment.makeSegments(message);
    try {
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
    } catch (e) {
      onError(e);
    }
  }, [message, onError, onPng]);

  return (
    <div>
      <canvas id="canvas" />
    </div>
  );
}

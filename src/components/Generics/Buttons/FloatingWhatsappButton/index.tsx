import React from 'react';

import {PiWhatsappLogo} from 'react-icons/pi';

import classes from './index.module.scss';

const phoneNumber = '905301493599';
const waMessage = 'Merhaba, ben ürünler hakkında bilgi almak istiyorum.';
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${waMessage}`;

export function FloatingWhatsappButton() {
  return (
    <div className={classes.floatingWhatsappButton}>
      <a href={whatsappUrl} target="_blank" rel="noreferrer">
        <PiWhatsappLogo className={classes.whatsappIcon} />
      </a>
    </div>
  );
}

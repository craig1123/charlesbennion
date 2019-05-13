/* eslint-disable  react/no-danger */
import React from 'react';

const GTAG_SRC = `https://www.googletagmanager.com/gtag/js`;
const gtagTrackingId = 'UA-128533502-1';

const onRenderBody = ({ setHeadComponents }) => { // eslint-disable-line
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  // Google Analytics script
  const gtagScript = (
    <script async key="gtag-gtag-js" src={`${GTAG_SRC}?id=${gtagTrackingId}`} />
  );

  // Google Analytics JS
  const scriptStr = `
    window.GTAG_TRACKING_ID = (
      '${gtagTrackingId}'
    );
    let options = {
      send_page_view: false
    };
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gtagTrackingId}', options);
  `;
  const trackScript = (
    <script
      key="gtag-inline-script"
      dangerouslySetInnerHTML={{ __html: scriptStr }}
    />
  );

  setHeadComponents([gtagScript, trackScript]);
};

export default onRenderBody;

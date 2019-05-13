// // sends the location to google analytics
// export const onRouteUpdate = ({ location }) => {
//   const gtagTrackingId = window.GTAG_TRACKING_ID;
//
//   if (
//     !gtagTrackingId ||
//     process.env.NODE_ENV !== `production` ||
//     typeof gtag !== `function`
//   ) {
//     return null;
//   }
//
//   let locationStr = '';
//
//   if (location) {
//     locationStr = `${location.pathname}${location.search}${location.hash}`;
//   }
//
//   gtag('config', gtagTrackingId, {
//     page_path: locationStr,
//   });
// };

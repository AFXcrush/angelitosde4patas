export const pageview = (url) => {
  window.gtag("congif", process.env.GOOGLE_ANALYTICS_ID, {
    path_url: url,
  });
};

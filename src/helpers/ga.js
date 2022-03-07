import Router from "next/router";
import GA4React from "ga-4-react";

let ga4react;

export async function init(G) {
  if (!GA4React.isInitialized() && G && process.browser) {
    ga4react = new GA4React(G, { debug_mode: !process.env.production });

    try {
      await ga4react.initialize();

      logPageViews();
    } catch (error) {
      console.error(error);
    }
  }
}

function logPageView() {
  ga4react.pageview(window.location.pathname);
}

function logPageViews() {
  logPageView();

  Router.events.on("routeChangeComplete", () => {
    logPageView();
  });
}

export function logEvent(action, label, category) {
  ga4react.event(action, label, category);
}

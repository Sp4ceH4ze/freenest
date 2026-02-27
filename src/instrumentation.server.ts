import * as Sentry from '@sentry/sveltekit';

Sentry.init({
  dsn: 'https://796e48d3d854fd664fb5e13eacc98dbf@o4510954035937280.ingest.de.sentry.io/4510954059137104',

  tracesSampleRate: 1.0,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: import.meta.env.DEV,
});
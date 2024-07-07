import "../styles/global.css";
import { inject } from "@vercel/analytics";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  // injext vercel analytics
  inject();
  return <Component {...pageProps} />;
}

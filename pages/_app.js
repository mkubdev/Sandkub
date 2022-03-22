import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // Add: Provider - ErrorToast - Layout
  // Rq: Layout break tailwind here!
  return <Component {...pageProps} />;
}

export default MyApp;

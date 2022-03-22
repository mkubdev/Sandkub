import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // Add: Provider - ErrorToast - Layout
  const getLayout = Component.getLayout || ((page) => 
    <>
      {page}
    </>
  );
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;

import "../styles/globals.css";
import WorkLayout from "../layout/WorkLayout";

function MyApp({ Component, pageProps }) {
  
  // Add: Provider - ErrorToast - Layout
  return (
    <WorkLayout>
      <Component {...pageProps} />
    </WorkLayout>
  );
}

export default MyApp;

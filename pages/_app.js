import '../styles/globals.css';
import { AppWrapper } from '../Context/beersContext';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;

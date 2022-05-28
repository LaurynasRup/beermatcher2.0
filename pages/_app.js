import '../styles/globals.css';
import { AppWrapper } from '../Context/beersContext';
import { AppWrapperModal } from '../Context/modalContext';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <AppWrapperModal>
        <Component {...pageProps} />
      </AppWrapperModal>
    </AppWrapper>
  );
}

export default MyApp;

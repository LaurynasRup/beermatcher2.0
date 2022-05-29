import '../styles/globals.css';
import { AppWrapper } from '../Context/beersContext';
import { AppWrapperModal } from '../Context/modalContext';
import { AppWrapperLikedBeers } from '../Context/likedBeersContext';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <AppWrapperModal>
        <AppWrapperLikedBeers>
          <Component {...pageProps} />
        </AppWrapperLikedBeers>
      </AppWrapperModal>
    </AppWrapper>
  );
}

export default MyApp;

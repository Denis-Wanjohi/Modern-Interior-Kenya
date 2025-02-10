import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import '../styles/sass/style.scss'
// import 'primereact'
import 'primereact/resources/themes/lara-light-indigo/theme.css';  /* Theme */
import 'primereact/resources/primereact.min.css';                 /* Core CSS */
// @import 'primeicons/primeicons.css';                               /* Icons */
// import 'primeflex/primeflex.css'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/index";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrimeReactProvider } from 'primereact/api';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PrimeReactProvider>
          <Component {...pageProps} />
        </PrimeReactProvider>
        <ToastContainer />
      </PersistGate>
    </Provider>

  )
}

export default MyApp

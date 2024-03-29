import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/nucleo-icons.css";
import "../styles/nucleo-svg.css";
import "../styles/material-dashboard.css";
import { Provider, useSelector } from "react-redux";
import { persistor, store } from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
// import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
// import { signIn, signOut, useSession } from "next-auth/react";
import AuthComponent from "../src/components/Auth";
import { selectors } from "../src/redux/ducks";
interface IProps {
  children: React.ReactNode;
}

// import "../styles/material-dashboard.css";
// import "../styles/material-dashboard.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // const token = useSelector(selectors.auth.SelectToken);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <SessionProvider session={session} basePath="/"> */}
        <Component {...pageProps} />
        {/* </SessionProvider> */}
      </PersistGate>
    </Provider>
  );
}

export default MyApp;

function Auth({ children }: IProps) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  // const { status } = useSession({ required: true });
  const token = useSelector(selectors.auth.SelectToken);

  if (token === undefined) {
    return <div>Loading...</div>;
  }

  return children;
}

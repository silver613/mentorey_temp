import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
// Redux import
import { wrapper } from "~/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStore } from "react-redux";
// Next theme and MUI
import { ThemeProvider } from "next-themes";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import "~/assets/styles/base.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

let theme = createTheme({
  palette: {
    primary: {
      main: "#059669",
      light: "#10b981",
      dark: "#047857",
    },
  },
});

function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const store: any = useStore();
  return getLayout(
    <>
      <PersistGate loading={<div>Loading</div>} persistor={store.__persistor}>
        <ToastContainer position="top-center" />
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <MuiThemeProvider theme={theme}>
            <Component {...pageProps} />
          </MuiThemeProvider>
        </ThemeProvider>
      </PersistGate>
    </>
  );
}
export default wrapper.withRedux(App);

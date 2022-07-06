import type { AppProps } from "next/app";
// libraries
import { CssBaseline, ThemeProvider } from "@mui/material";
// styles
import "../styles/globals.css";
import { darkTheme } from "../themes";
// context
import { UIProvider } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  );
}

export default MyApp;

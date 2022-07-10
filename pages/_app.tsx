import type { AppProps } from "next/app";
// libraries
import { CssBaseline, ThemeProvider } from "@mui/material";
// styles
import "../styles/globals.css";
import { darkTheme } from "../themes";
// context
import { UIProvider } from "../context";
import { EntriesProvider } from "../context/entries";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  );
}

export default MyApp;

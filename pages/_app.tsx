import "../styles/globals.css";
import { CssBaseline } from "@mui/material";
import ThemeProvider from "../utils/theme/Index";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { NextComponentType, NextPageContext } from "next";
import QueryProvider from "../utils/services";

const clientSideEmotionCache = createEmotionCache();
interface Props {
  Component: NextComponentType<NextPageContext>;
  emotionCache: EmotionCache;
  pageProps: any;
}
export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: Props) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider>
        <QueryProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </QueryProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

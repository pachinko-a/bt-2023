import "@/styles/globals.css";
import { RootLayout } from "@/core/layout/RootLayout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

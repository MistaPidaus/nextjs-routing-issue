import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // const [ready, setReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady && router.pathname !== "/") {
      router.push("/");
    }
  }, [router.isReady]);

  return <Component {...pageProps} />;
}

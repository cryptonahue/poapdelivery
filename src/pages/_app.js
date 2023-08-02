// import "tailwindcss/tailwind.css";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { AuthProvider } from "@/context/authContext";
import { ModalProvider } from "@/context/modalContext";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "@/components/Layout";
import theme from "@/utils/theme";
import "@/styles/globals.css";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", "https://www.googletagmanager.com/gtag/js?id=G-9QDKPYK5CJ", {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

{/*<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-9QDKPYK5CJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9QDKPYK5CJ');
</script>*/}

  return (
    <AuthProvider>
      <ModalProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <CssBaseline />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ModalProvider>
    </AuthProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

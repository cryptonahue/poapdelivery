// import Head from "next/head";
import NavBar from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "@/styles/components/Page.module.css";

const Page = ({ children, title, presentation = true }) => (
  <>
    {presentation && <NavBar />}
    <div className={styles.main}>
      <div className={styles.main_container}>{children}</div>
    </div>

    {presentation && <Footer />}
  </>
);

export default Page;

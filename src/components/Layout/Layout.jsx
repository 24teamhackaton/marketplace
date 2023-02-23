import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Layout.css";
import Voice from "../../components/Voice/Voice";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Voice />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

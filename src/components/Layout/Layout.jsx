import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Layout.css";
import Work from "../Work/Work";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div>
          <Work />
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

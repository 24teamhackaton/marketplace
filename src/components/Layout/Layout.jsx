import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Layout.css";


export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

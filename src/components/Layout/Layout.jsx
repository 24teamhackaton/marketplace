import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Layout.css";
import Work from "../Work/Work";
import Voice from "../Voice/Voice";
import ButtonUp from "../ButtonUp/ButtonUp";
import Wave from "../Wave/Wave"


export const Layout = () => {
  return (
    <>
      <Navbar />
      <Voice/>
      <Wave/>
      <ButtonUp/>
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

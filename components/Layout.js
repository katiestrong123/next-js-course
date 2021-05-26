import Nav from "./Nav";
import Header from "./Header";
import styles from "../styles/Layout.module.css";
import Donate from "./Donate";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
          <Donate />
        </main>
      </div>
    </>
  );
}

export default Layout;

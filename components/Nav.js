import Link from "next/link";

import navStyles from "../styles/Nav.module.css";

function Nav(props) {
  return (
    <div className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/get-involved">Get Involved</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;

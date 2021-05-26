import headerStyles from "../styles/Header.module.css";

function Header(props) {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>
          CHOOSE
          <br></br>  L O V E {" "}
        </span>
      </h1>
    </div>
  );
}

export default Header;

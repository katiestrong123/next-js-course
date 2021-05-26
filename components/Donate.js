import donateStyles from "../styles/Donate.module.css";

function Donate(props) {
  return (
    <div>
      <button
        className={donateStyles.donate}
        type="button"
      >
        DONATE
      </button>
    </div>
  );
}

export default Donate;

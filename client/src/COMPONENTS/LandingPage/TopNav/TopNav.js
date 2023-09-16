import styles from "./TopNav.modules.css";

export function TopNav() {
  return (
    <div className={styles["top-nav"]}>
      <div>
        <span>Write a review</span>
        <span>Events</span>
      </div>
      <div>
        <span>Login</span>
        <button className="button">Sign up</button>
      </div>
    </div>
  );
}

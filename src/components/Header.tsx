import styles from "./Header.module.css";
import imageLogo from "../assets/Logo.svg";
export function Header() {
  return (
    <div className={styles.container}>
      <img src={imageLogo}></img>
    </div>
  );
}

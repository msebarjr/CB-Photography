import styles from "../styles/Button.module.css";
import Link from "next/link";

function Button(props) {
    return <button className={styles.btn}>{props.children}</button>;
}

export default Button;

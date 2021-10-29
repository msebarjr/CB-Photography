import styles from "../styles/Button.module.css";


function Button(props) {
    return <button className={styles.btn}>{props.children}</button>;
}

export default Button;

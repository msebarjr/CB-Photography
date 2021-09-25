import styles from "../styles/Recognition.module.css";

function Recognition(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>{props.icon}</div>
            <div className={styles.info}>
                <span>{props.highlight}</span> {props.text}
            </div>
        </div>
    );
}

export default Recognition;

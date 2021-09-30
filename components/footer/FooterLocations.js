import styles from "../../styles/FooterLocations.module.css";

function FooterLocations(props) {
    return <li className={styles.city}>{props.city}</li>;
}

export default FooterLocations;

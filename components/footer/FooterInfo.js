import styles from "../../styles/FooterInfo.module.css";

function FooterInfo() {
    return (
        <div>
            <h4 className={styles.footer_info_title}>Visit</h4>
            <div className={styles.info_wrapper}>
                <p>CB Photography</p>
                <p>123 Newborn Street</p>
                <p>Wellington, FL. 33411</p>
            </div>
        </div>
    );
}
export default FooterInfo;

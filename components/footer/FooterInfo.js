import styles from "../../styles/FooterInfo.module.css";

function FooterInfo() {
    return (
        <div>
            <h4 className={styles.footer_info_title}>Visit</h4>
            <div className={styles.info_wrapper}>
                <p>CB Photography</p>
                <p>9600 West Sample Road</p>
                <p>Suite 203</p>
                <p>Coral Springs, FL. 33065</p>
            </div>
        </div>
    );
}
export default FooterInfo;

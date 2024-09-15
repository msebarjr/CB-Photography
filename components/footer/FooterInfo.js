import styles from '../../styles/FooterInfo.module.css';

function FooterInfo() {
  return (
    <div>
      <h4 className={styles.footer_info_title}>Visit</h4>
      <div className={styles.info_wrapper}>
        <p>CB Photography</p>
        <p>1401 North University Drive</p>
        <p>Suite 408B</p>
        <p>Coral Springs, FL. 33071</p>
      </div>
    </div>
  );
}
export default FooterInfo;

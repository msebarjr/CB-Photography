import Link from 'next/link';

import styles from '../../styles/ContactDetails.module.css';

import { IoLocationOutline, IoLogoInstagram } from 'react-icons/io5';
import { HiOutlinePhone } from 'react-icons/hi';

function ContactDetails() {
  return (
    <div className={styles.contact_details}>
      <div className={styles.icon_text}>
        <IoLocationOutline className={styles.icon} />
        <div>
          <p className={styles.text}>CB Photography</p>
          <p className={styles.text}>1401 North University Drive</p>
          <p className={styles.text}>Suite 408B</p>
          <p className={styles.text}>Coral Springs, FL. 33071</p>
        </div>
      </div>
      <div className={styles.icon_text}>
        <Link href='tel:9545921621'>
          <a>
            <HiOutlinePhone className={styles.icon} />
          </a>
        </Link>
        <Link href='tel:9545921621'>
          <a className={styles.text}>(954) 592-1621</a>
        </Link>
      </div>
      <div className={styles.icon_text}>
        <Link href='https://instagram.com/headshots_by_bleus/'>
          <a target='_blank'>
            <IoLogoInstagram className={styles.icon} />
          </a>
        </Link>
        <Link href='https://instagram.com/headshots_by_bleus/'>
          <a className={styles.text} target='_blank'>
            headshots_by_bleus
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ContactDetails;

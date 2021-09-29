import Image from "next/image";

import styles from "../styles/Profile.module.css";
import ProfileImage from "../public/images/conrad.jpg";

function Profile() {
    return (
        <div className={styles.profile}>
            <Image
                src={ProfileImage}
                alt="Conrad Bleus Profile Photo"
                width={300}
                height={300}
                layout="responsive"
                className={styles.photo}
            />
        </div>
    );
}

export default Profile;

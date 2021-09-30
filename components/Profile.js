import Image from "next/image";

import styles from "../styles/Profile.module.css";

function Profile(props) {
    return (
        <div className={props.reverse ? styles.stock : styles.profile}>
            <Image
                src={props.image}
                alt={props.alt}
                width={300}
                height={ 300}
                layout="responsive"
            />
        </div>
    );
}

export default Profile;

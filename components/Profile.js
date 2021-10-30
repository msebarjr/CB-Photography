import styles from "../styles/Profile.module.css";

function Profile(props) {
    return (
        <div className={props.reverse ? styles.stock : styles.profile}>
            <img src={props.image} alt={props.alt} />
        </div>
    );
}

export default Profile;

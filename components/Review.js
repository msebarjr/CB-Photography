import styles from "../styles/Review.module.css";

function Review(props) {
    return (
        <div className={styles.review}>
            <div className={styles.review_text}>{props.text}</div>
            <p className={styles.client}>- {props.client} -</p>
        </div>
    );
}

export default Review;

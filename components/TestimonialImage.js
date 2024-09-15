import styles from '../styles/TestimonialImage.module.css';

function TestimonialImage(props) {
  return (
    <div className={styles.image_container}>
      <img src={props.mobile} alt={props.alt} />
    </div>
  );
}

export default TestimonialImage;

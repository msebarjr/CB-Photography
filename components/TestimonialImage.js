import styles from '../styles/TestimonialImage.module.css';
import Image from 'next/image';

function TestimonialImage(props) {
  return (
    <div className={styles.image_container}>
      <Image
        alt={props.alt}
        src={props.mobile}
        width={175}
        height={175}
        layout='fixed'
      />
    </div>
  );
}

export default TestimonialImage;

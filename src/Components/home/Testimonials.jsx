import styles from '../../styles/Testimonials.module.css';

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h2>What People Say About Us</h2>
      <div className={styles.testimonial}>
        <p>
          {" 'The data science courses, and internship program provided were instrumental in helping me launch my career in data science. Thank you for the valuable learning experience!' "}
        </p>
        <span>Dinesh Singh, Mumbai, India</span>
      </div>
    </section>
  );
};

export default Testimonials;

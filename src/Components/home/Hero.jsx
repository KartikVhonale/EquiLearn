import styles from '../../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Start learning new skill with your buddies</h1>
      <p>
        Building a community of people who want to develop their skills by providing the best content on the web for free in one place.
      </p>
      <button className={styles.button}>Start learning Now</button>
    </section>
  );
};

export default Hero;

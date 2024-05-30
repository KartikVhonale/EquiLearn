import styles from '../../styles/Features.module.css';

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.feature}>
        <h2>Talent Pool</h2>
        <p>A handsy team which makes you eligible for exclusive internship opportunities.</p>
      </div>
      <div className={styles.feature}>
        <h2>Add Buddy</h2>
        <p>Add your friends and compete in healthy learning competitions.</p>
      </div>
      <div className={styles.feature}>
        <h2>Courses</h2>
        <p>Learn for free the best courses available online.</p>
      </div>
    </section>
  );
};

export default Features;

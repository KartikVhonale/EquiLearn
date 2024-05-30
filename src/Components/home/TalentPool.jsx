import styles from '../../styles/TalentPool.module.css';

const TalentPool = () => {
  return (
    <section className={styles.talentPool}>
      <h2>Talent Pool</h2>
      <p>
        Get access to exclusive internship and job opportunities. Give this
        industry level Exam Designed by top Recruits all over the world and
        unveil a chance to sit in an exclusive interview.
      </p>
      <div className={styles.benefits}>
        <span>Quality Job</span>
        <span>Top Companies</span>
        <span>Great opportunity</span>
        <span>Internships</span>
      </div>
      <button className={styles.applyButton}>Apply Now</button>
    </section>
  );
};

export default TalentPool;

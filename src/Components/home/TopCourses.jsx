import Image from 'next/image';
import styles from '../../styles/TopCourses.module.css';

const TopCourses = () => {
  return (
    <section className={styles.topCourses}>
      <h2>Top Courses</h2>
      <div className={styles.courseList}>
        <div className={styles.course}>
          <Image src="/machine-learning.png" alt="Machine Learning" width={100} height={100} />
          <h3>Machine Learning</h3>
        </div>
        <div className={styles.course}>
          <Image src="/video-editing.png" alt="Video Editing" width={100} height={100} />
          <h3>Video Editing</h3>
        </div>
        <div className={styles.course}>
          <Image src="/advanced-ai.png" alt="Advanced AI" width={100} height={100} />
          <h3>Advanced AI</h3>
        </div>
      </div>
    </section>
  );
};

export default TopCourses;

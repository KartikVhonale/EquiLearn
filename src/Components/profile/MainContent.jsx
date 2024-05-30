import styles from './styles/MainContent.module.css';

const MainContent = () => {
  return (
    <main className={styles.main}>
      <section className={styles.buddies}>
        <h2>My Buddies</h2>
        <div className={styles.buddyList}>
          <div className={styles.buddy}>Name 1</div>
          <div className={styles.buddy}>Name 2</div>
          <div className={styles.buddy}>Name 3</div>
          <div className={styles.buddy}>Name 4</div>
        </div>
        <img src="/buddies.png" alt="Buddies Illustration" />
      </section>
      <section className={styles.courses}>
        <h2>Courses Done</h2>
        <div className={styles.courseList}>
          <div className={styles.course}>Product Design</div>
          <div className={styles.course}>Front end</div>
          <div className={styles.course}>Visual Designer</div>
          <div className={styles.course}>Voyager</div>
        </div>
      </section>
      <section className={styles.skills}>
        <h2>Skills</h2>
        <div className={styles.skillList}>
          <div className={styles.skill}>Product Design</div>
          <div className={styles.skill}>Front end</div>
          <div className={styles.skill}>Visual Designer</div>
          <div className={styles.skill}>Voyager</div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;

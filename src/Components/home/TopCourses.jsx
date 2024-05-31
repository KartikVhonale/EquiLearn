import styles from "../../styles/TopCourses.module.css";
import TopCoursesCard from "./TopCoursesCard";

const TopCourses = () => {
  return (
    <section className={styles.topCourses}>
      <h2>Top Courses</h2>
      <div className={styles.courseList}>
        <TopCoursesCard
          src="/images/home/one.png"
          content="Machine Learning"
          alt="Machine Learning"
        />
        <TopCoursesCard
          src="/images/home/two.png"
          content="Video Editing"
          alt="Video Editing"
        />
        <TopCoursesCard
          src="/images/home/three.png"
          content="Advanced AI"
          alt="Advanced AI"
        />
      </div>
    </section>
  );
};

export default TopCourses;

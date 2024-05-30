import styles from "../../styles/CourseHead.module.css";

const CourseHead = () => {
  return (
    <header className={styles.header}>
      <div className={styles.box}>
        <h1>Machine Learning Using Python.</h1>
        <p>
          Learn Video Editing from Scratch. This Course will be a walkthrough
          right from timeline basics to advanced Aftereffects along with tips
          and tricks before you enter the industry.
        </p>
      </div>
      <div className={styles.headerImg}>
        <img src="/images/coursepage/mind.png" alt="Brain and Hand" />
      </div>
    </header>
  );
};

export default CourseHead;

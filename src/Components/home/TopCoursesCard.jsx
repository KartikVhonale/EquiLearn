import Image from "next/image";
import styles from "../../styles/TopCourses.module.css";

const TopCoursesCard = (props) => {
  return (
        <div className={styles.course}>
          <div className={styles.image}>
            <img
              src={props.src}
              alt={props.alt}
            />
          </div>
          <hr/>
          <div className={styles.content}>
            <h3>{props.content}</h3>
          </div>
        </div>
     
  );
};

export default TopCoursesCard;

import styles from '../../styles/CourseSteps.module.css';

const CourseSteps = ({ number, title, description }) => {
    return (
        <div className={styles.step}>
            <div className={styles.stepNumber}>{number}</div>
            <div className={styles.stepContent}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CourseSteps;

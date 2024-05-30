import Head from 'next/head';
import CourseHead from './CourseHead';
import CourseSteps from './CourseSteps';
import styles from '../../styles/Course.module.css';

const steps = [
    { number: 1, title: 'Python Basics', description: 'Fundamental, Libraries, data Visualization' },
    { number: 2, title: 'Data Preprocessing', description: 'Data Cleaning, Feature Engineering, EDA' },
    { number: 3, title: 'Machine Learning Basics', description: 'Introduction to Machine Learning, Supervised/Unsupervised Algorithms' },
    { number: 4, title: 'Advanced Machine Learning Techniques', description: 'Deep Learning, CNN\'s, NLP' },
    { number: 5, title: 'Model Evaluation', description: 'Model Evaluation, Hyperparameter Tuning, Cross-Validation' },
];

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Machine Learning Using Python</title>
                <meta name="description" content="Learn Machine Learning using Python from basics to advanced techniques." />
            </Head>
            <CourseHead />
            <main className={styles.main}>
                <div className={styles.steps}>
                    {steps.map((step, index) => (
                        <CourseSteps key={index} number={step.number} title={step.title} description={step.description} />
                    ))}
                </div>
            </main>
            
        </div>
    );
}

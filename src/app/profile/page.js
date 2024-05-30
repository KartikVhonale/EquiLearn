'use client'
import Header from '../../Components/header/Header';
import Sidebar from '../../Components/profile/Sidebar';
import MainContent from '../../Components/profile/MainContent';
import Footer from '../../Components/footer/Footer';
import styles from '../../styles/Profile.module.css';

export default function Profile() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <MainContent />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

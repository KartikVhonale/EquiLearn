import Image from 'next/image';
import styles from '../../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Equilearn Logo" width={50} height={50} />
        <h1>EQUILEARN</h1>
      </div>
      <nav className={styles.nav}>
        <a href="#">About Us</a>
        <a href="#">Courses</a>
        <a href="#">Talent Pool</a>
        <a href="#">Add Buddy</a>
      </nav>
      <div className={styles.userAccount}>
        <span>user.email@gmail.com</span>
        <Image src="/user-avatar.png" alt="User Avatar" width={40} height={40} />
      </div>
    </header>
  );
};

export default Header;

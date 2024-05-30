import Image from 'next/image';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <Image src="/logo.png" alt="Equilearn Logo" width={50} height={50} />
          <h1>EQUILEARN</h1>
        </div>
        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <a href="#">About Us</a>
          <a href="#">Join Talent Pool</a>
          <a href="#">Your Buddies</a>
          <a href="#">Partners</a>
          <a href="#">Blog</a>
          <a href="#">Contacts</a>
        </div>
        <div className={styles.footerCourses}>
          <h3>Courses</h3>
          <a href="#">Web Development</a>
          <a href="#">UI/UX</a>
          <a href="#">Video Editing</a>
        </div>
        <div className={styles.footerContact}>
          <h3>Request a call</h3>
          <p>+1 (800) 989-99-99</p>
          <p>info@equilearn.com</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <h3>If you didn't find the Courses you are interested in or have questions?</h3>
        <form className={styles.contactForm}>
          <input type="email" placeholder="YOUR EMAIL" />
          <input type="tel" placeholder="+91" />
          <button type="submit">Send</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;

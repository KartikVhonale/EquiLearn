import React from 'react';
import Head from 'next/head';
import styles from '@/styles/Signup.module.css';

const Signup = () => {
  return (
    <>
      <Head>
        <title>Sign Up - EquiLearn</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.illustration}>
            <img src="/illustration.png" alt="Illustration" />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.signupBox}>
            <h2>Sign up</h2>
            <p>
              If you already have an account register
              <br />
              You can <a href="/login">Login here!</a>
            </p>
            <form>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email address" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Enter your User name" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your Password" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" placeholder="Confirm your Password" />
              </div>
              <button type="submit" className={styles.signupButton}>Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

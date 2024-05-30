import React from 'react';
import Head from 'next/head';
import styles from '@/styles/Login.module.css';

const Login = () => {
  return (
    <>
      <Head>
        <title>Sign In - EquiLearn</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.illustration}>
            <img src="/illustration.png" alt="Illustration" />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.loginBox}>
            <h2>Sign in</h2>
            <p>
              If you don't have an account register
              <br />
              You can <a href="/signup">Register here!</a>
            </p>
            <form>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email address" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your Password" />
              </div>
              <div className={styles.checkboxGroup}>
                <div>
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <a href="/forgot-password" className={styles.forgotPassword}>Forgot Password?</a>
              </div>
              <button type="submit" className={styles.loginButton}>Login</button>
            </form>
            <div className={styles.socialLogin}>
              <p>or continue with</p>
              <div className={styles.socialIcons}>
                <button><img src="/facebook-icon.png" alt="Facebook" /></button>
                <button><img src="/apple-icon.png" alt="Apple" /></button>
                <button><img src="/google-icon.png" alt="Google" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

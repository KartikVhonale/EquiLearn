'use client'
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
            <img src="/images/login/him.png" alt="Illustration" />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.loginBox}>
            <h2>Sign in</h2>
            <p>
              {"If you dont have an account register"}
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
              <button type="submit" href="/coursePage" className={styles.loginButton}>Login</button>
            </form>
            <div className={styles.socialLogin}>
              <p>or continue with</p>
              <div className={styles.socialIcons}>
                <button><img src="images/login/Facebook.png" alt="Facebook" /></button>
                <button><img src="images/login/apple.png" alt="Apple" /></button>
                <button><img src="images/login/google.png" alt="Google" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

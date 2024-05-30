'use client'
import Head from 'next/head';
import Header from '../../Components/header/Header';
import Hero from '../../Components/home/Hero';
import Features from '../../Components/home/Features';
import TopCourses from '../../Components/home/TopCourses';
import TalentPool from '../../Components/home/TalentPool';
import Testimonials from '../../Components/home/Testimonials';
import Footer from '../../Components/footer/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Equilearn</title>
        <meta name="description" content="Start learning new skill with your buddies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Features />
        <TopCourses />
        <TalentPool />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

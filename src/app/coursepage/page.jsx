'use client'
import React from 'react'
import Course from '../../Components/coursePage/Course';
import Header from '@/Components/header/Header';
import Footer from '@/Components/footer/Footer';

function Coursepage() {
  return (
    
    <div className='mainbox'>
        <Header/>
        <Course/>
        <Footer/>
        <style jsx>{`
        .mainbox{
          background: rgba(234, 249, 255, 1);
        }
      `}</style>
    </div>
  )
}

export default Coursepage
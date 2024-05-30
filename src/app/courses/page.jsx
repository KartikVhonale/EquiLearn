'use client';
import React from 'react';
import Sidebar from '@/Components/courses/Slidebar';
import Head from '@/Components/courses/Head';
import ProgressCard from '@/Components/courses/ProgressCard';
const Courses = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Head />
        <div className="p-6 flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">In progress</h2>
              <ProgressCard title="Video Editing: Basic Editing" progress={15} total={15} />
              <ProgressCard title="Video Editing: Color Grading" progress={14} total={16} />
              <ProgressCard title="Video Editing: After Effects" progress={3} total={10} />
              <ProgressCard title="Video Editing: Story Telling" progress={2} total={14} />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">In progress</h2>
              <ProgressCard title="ML Using Python: Python Basics" progress={12} total={12} />
              <ProgressCard title="ML Using Python: Data Processing" progress={15} total={15} />
              <ProgressCard title="ML Using Python: ML Basics" progress={12} total={12} />
              <ProgressCard title="ML Using Python: Advanced ML Techniques" progress={1} total={5} />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Done (3)</h2>
              <ProgressCard title="DSA" progress={150} total={150} date="6 Jan 2022" />
              <ProgressCard title="Cloud Computing" progress={110} total={110} date="7 Jan 2022" />
              <ProgressCard title="SQL" progress={54} total={54} date="8 Jan 2022" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

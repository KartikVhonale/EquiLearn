import React from 'react';
const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Courses</h2>
      <div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Ongoing Courses (3)</h3>
          <ul className="mt-2">
            <li className="py-2 px-4 bg-white rounded-lg shadow mb-2 cursor-pointer">Video Editing</li>
            <li className="py-2 px-4 bg-white rounded-lg shadow mb-2 cursor-pointer">Web Development</li>
            <li className="py-2 px-4 bg-white rounded-lg shadow mb-2 cursor-pointer">UI/UX</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">All tasks (11)</h3>
            <ul className="mt-2">
              <li className="py-2 px-4 bg-white rounded-lg shadow mb-2 cursor-pointer">To do (4)</li>
              <li className="py-2 px-4 bg-white rounded-lg shadow mb-2 cursor-pointer">In progress (4)</li>
              <li className="py-2 px-4 bg-white rounded-lg shadow mb-2 cursor-pointer">Done (3)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

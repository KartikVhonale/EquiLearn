import React from 'react';

const Head = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-2xl font-bold">Welcome back, UserName 👋</h1>
      <div className="flex items-center">
        <button className="mr-4">🔍</button>
        <span className="mr-4">📅 15 May 2024</span>
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
};

export default Head;

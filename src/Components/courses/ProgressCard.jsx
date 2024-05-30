import React from 'react';

const ProgressCard = ({ title, progress, total, date, status }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(progress / total) * 100}%` }}></div>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span>{progress}/{total}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default ProgressCard;

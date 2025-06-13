import React from 'react';
import { RobotStats } from '../types';

const StatusIndicator: React.FC<{ status: RobotStats['status'] }> = ({ status }) => {
  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-red-500',
    restarting: 'bg-yellow-500',
  };

  return (
    <div className="flex items-center">
      <span className={`w-3 h-3 rounded-full mr-2 ${statusColors[status]}`}></span>
      <span className="capitalize">{status}</span>
    </div>
  );
};

export default StatusIndicator;
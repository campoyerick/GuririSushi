import React from 'react';
import { RobotStats } from '../types';
import StatusIndicator from './StatusIndicator';

const StatsDashboard: React.FC<{ stats: RobotStats }> = ({ stats }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-white mb-4">Estatísticas do Robô</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Status</h3>
          <div className="mt-1">
            <StatusIndicator status={stats.status} />
          </div>
        </div>
        
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Uptime</h3>
          <p className="text-white font-mono">{stats.uptime}</p>
        </div>
        
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Mensagens Enviadas</h3>
          <p className="text-white text-2xl font-bold">{stats.messagesSent}</p>
        </div>
        
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Mensagens Recebidas</h3>
          <p className="text-white text-2xl font-bold">{stats.messagesReceived}</p>
        </div>
        
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Uso de CPU</h3>
          <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
            <div 
              className="bg-blue-500 h-2 rounded-full" 
              style={{ width: `${stats.cpuUsage}%` }}
            ></div>
          </div>
          <p className="text-white text-right text-sm mt-1">{stats.cpuUsage}%</p>
        </div>
        
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Uso de Memória</h3>
          <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
            <div 
              className="bg-purple-500 h-2 rounded-full" 
              style={{ width: `${stats.memoryUsage}%` }}
            ></div>
          </div>
          <p className="text-white text-right text-sm mt-1">{stats.memoryUsage}%</p>
        </div>
      </div>
    </div>
  );
};

export default StatsDashboard;
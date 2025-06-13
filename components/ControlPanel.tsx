import React from 'react';
import StatusIndicator from './StatusIndicator';
import { RobotStats } from '../types';

const ControlPanel: React.FC<{ 
  stats: RobotStats,
  onPowerOn: () => void,
  onPowerOff: () => void,
  onRestart: () => void
}> = ({ stats, onPowerOn, onPowerOff, onRestart }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-white mb-4">Controles do Robô</h2>
      
      <div className="flex items-center mb-6">
        <span className="text-gray-400 mr-3">Status Atual:</span>
        <StatusIndicator status={stats.status} />
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={onPowerOn}
          disabled={stats.status === 'online'}
          className={`py-3 px-4 rounded-lg font-bold transition ${
            stats.status === 'online' 
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          Ligar
        </button>
        
        <button
          onClick={onPowerOff}
          disabled={stats.status === 'offline'}
          className={`py-3 px-4 rounded-lg font-bold transition ${
            stats.status === 'offline' 
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
              : 'bg-red-600 hover:bg-red-700 text-white'
          }`}
        >
          Desligar
        </button>
        
        <button
          onClick={onRestart}
          disabled={stats.status === 'offline'}
          className={`py-3 px-4 rounded-lg font-bold transition ${
            stats.status === 'offline' 
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
              : 'bg-yellow-600 hover:bg-yellow-700 text-white'
          }`}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
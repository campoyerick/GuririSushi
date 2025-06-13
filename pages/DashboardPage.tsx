import React, { useState, useEffect } from 'react';
import ControlPanel from '../components/ControlPanel';
import RobotTerminal from '../components/RobotTerminal';
import StatsDashboard from '../components/StatsDashboard';
import { RobotStats } from '../types';

const DashboardPage: React.FC = () => {
  const [robotStats, setRobotStats] = useState<RobotStats>({
    messagesSent: 1242,
    messagesReceived: 1568,
    uptime: '12:34:56',
    status: 'online',
    cpuUsage: 35,
    memoryUsage: 42
  });

  const handlePowerOn = () => {
    setRobotStats(prev => ({
      ...prev,
      status: 'online'
    }));
  };

  const handlePowerOff = () => {
    setRobotStats(prev => ({
      ...prev,
      status: 'offline'
    }));
  };

  const handleRestart = () => {
    setRobotStats(prev => ({
      ...prev,
      status: 'restarting'
    }));
    
    setTimeout(() => {
      setRobotStats(prev => ({
        ...prev,
        status: 'online',
        uptime: '00:00:01'
      }));
    }, 3000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (robotStats.status === 'online') {
        setRobotStats(prev => {
          const timeParts = prev.uptime.split(':').map(Number);
          let seconds = timeParts[0] * 3600 + timeParts[1] * 60 + timeParts[2] + 1;
          
          const hours = Math.floor(seconds / 3600);
          seconds %= 3600;
          const minutes = Math.floor(seconds / 60);
          seconds %= 60;
          
          return {
            ...prev,
            uptime: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`,
            messagesSent: prev.messagesSent + Math.floor(Math.random() * 5),
            messagesReceived: prev.messagesReceived + Math.floor(Math.random() * 7),
            cpuUsage: Math.min(100, Math.max(0, prev.cpuUsage + (Math.random() > 0.5 ? 1 : -1))),
            memoryUsage: Math.min(100, Math.max(0, prev.memoryUsage + (Math.random() > 0.5 ? 1 : -1)))
          };
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [robotStats.status]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Painel de Controle do Robô</h1>
        <p className="text-gray-400">Monitoramento e controle em tempo real</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <ControlPanel 
            stats={robotStats}
            onPowerOn={handlePowerOn}
            onPowerOff={handlePowerOff}
            onRestart={handleRestart}
          />
        </div>
        <div>
          <StatsDashboard stats={robotStats} />
        </div>
      </div>

      <div className="h-[500px]">
        <RobotTerminal />
      </div>
    </div>
  );
};

export default DashboardPage;
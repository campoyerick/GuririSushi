export interface RobotStats {
  messagesSent: number;
  messagesReceived: number;
  uptime: string;
  status: 'online' | 'offline' | 'restarting';
  cpuUsage: number;
  memoryUsage: number;
}
import React, { useState, useRef, useEffect } from 'react';

const RobotTerminal: React.FC = () => {
  const [commands, setCommands] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const newCommands = [...commands, `$ ${input}`, `> Executando comando: ${input}`];
    setCommands(newCommands);
    setInput('');
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg h-full flex flex-col">
      <h2 className="text-xl font-bold text-white mb-4">Terminal de Controle</h2>
      
      <div 
        ref={terminalRef}
        className="flex-grow bg-black text-green-400 font-mono p-4 rounded-lg overflow-y-auto mb-4"
      >
        {commands.map((cmd, index) => (
          <div key={index} className="mb-1">{cmd}</div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="flex">
        <span className="bg-gray-700 text-white p-2 rounded-l-lg">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow bg-gray-800 text-white p-2 focus:outline-none"
          placeholder="Digite um comando..."
        />
        <button 
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default RobotTerminal;
import React, { useState } from 'react';

const SettingsPage: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [apiKey, setApiKey] = useState('sk_live_1234567890abcdef1234567890abcdef');
  const [showApiKey, setShowApiKey] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Configurações</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Preferências</h2>
          
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span>Notificações</span>
              <button
                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                  notificationsEnabled ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    notificationsEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <span>Modo Escuro</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                  darkMode ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Idioma</h3>
            <select className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 w-full">
              <option>Português (Brasil)</option>
              <option>English</option>
              <option>Español</option>
            </select>
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg md:col-span-2">
          <h2 className="text-xl font-bold mb-4">API</h2>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Chave da API
            </label>
            <div className="flex">
              <input
                type={showApiKey ? "text" : "password"}
                value={apiKey}
                readOnly
                className="flex-grow bg-gray-700 border border-gray-600 rounded-l-lg px-4 py-2 focus:outline-none"
              />
              <button
                onClick={() => setShowApiKey(!showApiKey)}
                className="bg-gray-600 px-4 rounded-r-lg hover:bg-gray-700 transition"
              >
                {showApiKey ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                  </svg>
                )}
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Mantenha esta chave em segredo. Ela fornece acesso completo à sua conta.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Documentação da API</h3>
            <div className="bg-gray-700 p-4 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                {`// Exemplo de uso da API
fetch('https://api.robotcontrol.com/v1/commands', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${apiKey}'
  },
  body: JSON.stringify({
    command: 'start',
    robot_id: 'bot_123456'
  })
})
.then(response => response.json())
.then(data => console.log(data));`}
              </pre>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Zona de Perigo</h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition">
            Excluir todos os dados
          </button>
          <button className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition">
            Reiniciar configurações
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
            Exportar dados
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
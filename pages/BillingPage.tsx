import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BillingPage: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [description, setDescription] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduledCharges, setScheduledCharges] = useState<any[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Adiciona a cobrança à lista de agendamentos
    const newCharge = {
      id: Date.now(),
      phone,
      amount: parseFloat(amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      dueDate,
      description,
      scheduleDate,
      status: 'Agendado'
    };
    
    setScheduledCharges([...scheduledCharges, newCharge]);
    
    // Limpa o formulário
    setPhone('');
    setAmount('');
    setDueDate('');
    setDescription('');
    setScheduleDate('');
    
    alert(`Cobrança agendada para ${dueDate} no valor de ${newCharge.amount} para o número ${phone}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho com ícone de robô */}
        <div className="flex items-center mb-8">
          <div className="bg-blue-600 p-3 rounded-lg mr-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold">Controle Robô</h1>
            <p className="text-gray-400">Sistema de cobrança avançado</p>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-6">Cobrança</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Card: Plano Atual */}
          <div className="bg-gradient-to-r from-purple-900 to-indigo-800 rounded-xl shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4">Plano Atual</h2>
            <div className="bg-indigo-900 bg-opacity-50 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-bold text-indigo-300">Premium</h3>
              <p className="text-3xl font-bold mt-2">R$ 99,90<span className="text-sm text-gray-300">/mês</span></p>
            </div>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Robôs ilimitados
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Suporte 24/7
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Atualizações automáticas
              </li>
            </ul>
            <button className="w-full bg-white text-indigo-900 font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition">
              Atualizar Plano
            </button>
          </div>
          
          {/* Card: Cobrar via WhatsApp */}
          <div className="bg-gradient-to-r from-teal-900 to-emerald-800 rounded-xl shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4">Cobrar via WhatsApp</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Número do WhatsApp</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Valor (R$)</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="0,00"
                    min="0.01"
                    step="0.01"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Data de Vencimento</label>
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  rows={2}
                  placeholder="Descreva a cobrança..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Agendar para</label>
                <input
                  type="datetime-local"
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 transition"
              >
                Agendar Cobrança
              </button>
            </form>
          </div>
          
          {/* Card: Métodos de Pagamento */}
          <div className="bg-gradient-to-r from-amber-900 to-orange-800 rounded-xl shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4">Métodos de Pagamento</h2>
            <div className="space-y-4">
              <div className="border border-gray-700 rounded-lg p-4 flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-10" />
                <div className="ml-4">
                  <p className="font-medium">Cartão Mastercard **** 1234</p>
                  <p className="text-gray-400 text-sm">Expira em 12/2024</p>
                </div>
                <button className="ml-auto text-red-500 hover:text-red-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
              </div>
              
              <div className="border border-gray-700 rounded-lg p-4 flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-10" />
                <div className="ml-4">
                  <p className="font-medium">Pix</p>
                  <p className="text-gray-400 text-sm">Chave: contato@empresa.com</p>
                </div>
                <button className="ml-auto text-red-500 hover:text-red-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <button className="flex items-center justify-center w-full mt-4 border-2 border-dashed border-gray-600 rounded-lg p-4 text-gray-400 hover:text-white hover:border-gray-500 transition">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Adicionar método de pagamento
            </button>
          </div>
        </div>
        
        {/* Seção: Histórico de Pagamentos */}
        <div className="bg-gray-800 rounded-xl shadow-xl p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Histórico de Pagamentos</h2>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
                Exportar CSV
              </button>
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition">
                Filtrar
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Data</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Descrição</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Valor</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">15/06/2023</td>
                  <td className="px-4 py-3">Plano Premium</td>
                  <td className="px-4 py-3">R$ 99,90</td>
                  <td className="px-4 py-3">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Pago
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <button className="text-blue-500 hover:text-blue-400 mr-3">Recibo</button>
                    <button className="text-red-500 hover:text-red-400">Cancelar</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">15/05/2023</td>
                  <td className="px-4 py-3">Plano Premium</td>
                  <td className="px-4 py-3">R$ 99,90</td>
                  <td className="px-4 py-3">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Pago
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <button className="text-blue-500 hover:text-blue-400 mr-3">Recibo</button>
                    <button className="text-red-500 hover:text-red-400">Cancelar</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">15/04/2023</td>
                  <td className="px-4 py-3">Plano Premium</td>
                  <td className="px-4 py-3">R$ 99,90</td>
                  <td className="px-4 py-3">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Pendente
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <button className="text-blue-500 hover:text-blue-400 mr-3">Recibo</button>
                    <button className="text-red-500 hover:text-red-400">Cancelar</button>
                  </td>
                </tr>
                {scheduledCharges.map(charge => (
                  <tr key={charge.id}>
                    <td className="px-4 py-3 whitespace-nowrap">{charge.scheduleDate.split('T')[0]}</td>
                    <td className="px-4 py-3">{charge.description}</td>
                    <td className="px-4 py-3">{charge.amount}</td>
                    <td className="px-4 py-3">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {charge.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <button className="text-blue-500 hover:text-blue-400 mr-3">Editar</button>
                      <button 
                        className="text-red-500 hover:text-red-400"
                        onClick={() => setScheduledCharges(scheduledCharges.filter(c => c.id !== charge.id))}
                      >
                        Cancelar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Seção: Cobranças Agendadas */}
        <div className="bg-gray-800 rounded-xl shadow-xl p-6">
          <h2 className="text-xl font-bold mb-4">Cobranças Agendadas</h2>
          
          {scheduledCharges.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <svg className="w-16 h-16 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <p className="mt-4">Nenhuma cobrança agendada</p>
              <p className="text-sm">Use o formulário acima para agendar cobranças via WhatsApp</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {scheduledCharges.map(charge => (
                <div key={charge.id} className="bg-gray-700 rounded-lg p-4 border-l-4 border-blue-500">
                  <div className="flex justify-between">
                    <h3 className="font-bold">{charge.phone}</h3>
                    <span className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-sm">
                      {charge.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">{charge.description}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-lg font-bold">{charge.amount}</span>
                    <span className="text-sm text-gray-500">{charge.dueDate}</span>
                  </div>
                  <div className="mt-3 flex justify-end space-x-2">
                    <button className="text-blue-500 hover:text-blue-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                      </svg>
                    </button>
                    <button 
                      className="text-red-500 hover:text-red-400"
                      onClick={() => setScheduledCharges(scheduledCharges.filter(c => c.id !== charge.id))}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
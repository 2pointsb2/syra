import { X, Search, Edit2, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface Lead {
  id: string;
  name: string;
  first_name?: string;
  last_name?: string;
  email: string;
  phone: string;
  status?: string;
  city?: string;
  department?: string;
  birth_year?: number;
  imposition?: string;
  residence_status?: string;
  postal_code?: string;
}

interface ViewListLeadsModalProps {
  onClose: () => void;
  listName: string;
  leads: Lead[];
}

export default function ViewListLeadsModal({ onClose, listName, leads }: ViewListLeadsModalProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLeads = leads.filter(lead =>
    lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.phone.includes(searchQuery)
  );

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[109]" onClick={onClose} />
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-6xl border border-gray-200/50 pointer-events-auto max-h-[90vh] flex flex-col">
          <div className="p-6 border-b border-gray-200/30 flex items-center justify-between flex-shrink-0">
            <div>
              <h2 className="text-xl font-light text-gray-900">{listName}</h2>
              <p className="text-sm text-gray-500 font-light mt-1">{leads.length} leads au total</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="p-6 border-b border-gray-200/30 flex-shrink-0">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un lead..."
                className="w-full pl-10 pr-4 py-2.5 bg-white/80 border border-gray-200/50 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 font-light"
              />
            </div>
          </div>

          <div className="flex-1 overflow-auto p-6">
            {filteredLeads.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 font-light">Aucun lead trouvé</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 sticky top-0">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">PRÉNOM</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">NOM</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">TÉLÉPHONE</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">EMAIL</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">STATUT</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">VILLE</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">DÉPARTEMENT</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">ANNÉE</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">IMPOSITION</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">RÉSIDENCE</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">CODE POSTAL</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-700">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 text-sm font-light text-gray-900">{lead.first_name || lead.name.split(' ')[0]}</td>
                        <td className="px-4 py-3 text-sm font-light text-gray-900">{lead.last_name || lead.name.split(' ').slice(1).join(' ')}</td>
                        <td className="px-4 py-3 text-sm font-light text-gray-900">{lead.phone}</td>
                        <td className="px-4 py-3 text-sm font-light text-gray-900">{lead.email}</td>
                        <td className="px-4 py-3 text-sm font-light text-gray-900">{lead.status || '-'}</td>
                        <td className="px-4 py-3 text-sm font-light text-gray-900">{lead.city || '-'}</td>
                        <td className="px-4 py-3 text-sm font-light text-gray-900">{lead.department || '-'}</td>
                        <td className="px-4 py-3 text-sm font-light text-gray-900">{lead.birth_year || '-'}</td>
                        <td className="px-4 py-3 text-sm font-light text-gray-900">{lead.imposition || '-'}</td>
                        <td className="px-4 py-3 text-sm font-light text-gray-900">{lead.residence_status || '-'}</td>
                        <td className="px-4 py-3 text-sm font-light text-gray-900">{lead.postal_code || '-'}</td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => console.log('Edit lead:', lead.id)}
                              className="w-8 h-8 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center transition-all"
                            >
                              <Edit2 className="w-4 h-4 text-blue-600" />
                            </button>
                            <button
                              onClick={() => console.log('Delete lead:', lead.id)}
                              className="w-8 h-8 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center transition-all"
                            >
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-gray-200/30 flex items-center justify-between flex-shrink-0">
            <p className="text-sm text-gray-700 font-light">
              Affichage de <span className="font-normal">{filteredLeads.length}</span> sur{' '}
              <span className="font-normal">{leads.length}</span> leads
            </p>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-light hover:from-blue-600 hover:to-blue-700 shadow-md transition-all hover:scale-105"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import { X, Search, ChevronDown, Info } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { mockUsers, MockUser } from '../data/mockUsers';

interface AssignLeadsModalProps {
  onClose: () => void;
  lists: Array<{ id: number; name: string; lead_count: number }>;
}

interface Region {
  name: string;
  availableLeads: number;
}

const regions: Region[] = [
  { name: 'Toute la France', availableLeads: 177698 },
  { name: 'Île-de-France', availableLeads: 45000 },
  { name: 'Auvergne-Rhône-Alpes', availableLeads: 32000 },
  { name: 'Nouvelle-Aquitaine', availableLeads: 28000 },
  { name: 'Occitanie', availableLeads: 25000 },
  { name: 'Hauts-de-France', availableLeads: 22000 },
  { name: 'Provence-Alpes-Côte d\'Azur', availableLeads: 20000 },
];

export default function AssignLeadsModal({ onClose, lists }: AssignLeadsModalProps) {
  const [selectedUser, setSelectedUser] = useState<MockUser | null>(null);
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [selectedList, setSelectedList] = useState('');
  const [numberOfLeads, setNumberOfLeads] = useState('100');
  const [selectedRegion, setSelectedRegion] = useState('Toute la France');
  const [department, setDepartment] = useState('');
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const filteredUsers = mockUsers.filter(user =>
    `${user.first_name} ${user.last_name}`.toLowerCase().includes(userSearchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(userSearchQuery.toLowerCase())
  );

  const currentRegion = regions.find(r => r.name === selectedRegion);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser || !selectedList) return;

    setShowConfirmation(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const handleUserSelect = (user: MockUser) => {
    setSelectedUser(user);
    setUserSearchQuery(`${user.first_name} ${user.last_name}`);
    setShowUserDropdown(false);
  };

  return createPortal(
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[109]" onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center z-[110] p-4 md:p-8">
        <div className="bg-white dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto pointer-events-auto" onClick={(e) => e.stopPropagation()}>
          <div className="p-6 border-b border-gray-200 dark:border-gray-700/30 flex items-center justify-between sticky top-0 bg-white dark:bg-gray-900/95 backdrop-blur-xl rounded-t-3xl z-10">
            <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100">Attribuer des leads</h2>
            <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-all">
              <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-2">
                Utilisateur <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 dark:text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 z-10" />
                <input
                  type="text"
                  value={userSearchQuery}
                  onChange={(e) => {
                    setUserSearchQuery(e.target.value);
                    setShowUserDropdown(true);
                    if (!e.target.value) setSelectedUser(null);
                  }}
                  onFocus={() => setShowUserDropdown(true)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/50 rounded-2xl text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400/50 font-light"
                  placeholder="Rechercher un utilisateur..."
                  required
                />
                {showUserDropdown && filteredUsers.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto z-20">
                    {filteredUsers.map((user) => (
                      <button
                        key={user.id}
                        type="button"
                        onClick={() => handleUserSelect(user)}
                        className="w-full p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 flex items-center gap-3 transition-all text-left border-b border-gray-100 dark:border-gray-700 last:border-0"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-light shadow-md">
                          {user.first_name.charAt(0)}{user.last_name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-light text-gray-900 dark:text-gray-100">{user.first_name} {user.last_name}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 font-light">{user.email}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-2">
                Liste de leads <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={selectedList}
                  onChange={(e) => setSelectedList(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/50 rounded-2xl text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400/50 font-light appearance-none cursor-pointer"
                  required
                >
                  <option value="">Veuillez choisir</option>
                  {lists.map((list) => (
                    <option key={list.id} value={list.id}>
                      {list.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-2">
                Nombre de leads à attribuer
              </label>
              <input
                type="number"
                value={numberOfLeads}
                onChange={(e) => setNumberOfLeads(e.target.value)}
                className="w-full px-4 py-2.5 bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/50 rounded-2xl text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400/50 font-light"
                placeholder="100"
                min="1"
              />
            </div>

            <div>
              <label className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-2">
                Région (optionnel)
              </label>
              <div className="relative">
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/50 rounded-2xl text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400/50 font-light appearance-none cursor-pointer"
                >
                  {regions.map((region) => (
                    <option key={region.name} value={region.name}>
                      {region.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
              {currentRegion && (
                <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800 flex items-start gap-2">
                  <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-light italic">
                    La région sélectionnée a {currentRegion.availableLeads.toLocaleString()} leads disponibles.
                  </p>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-2">
                Département (optionnel)
              </label>
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full px-4 py-2.5 bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/50 rounded-2xl text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400/50 font-light"
                placeholder="Ex: 08"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-2">
                  Âge minimum (optionnel)
                </label>
                <input
                  type="number"
                  value={minAge}
                  onChange={(e) => setMinAge(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/50 rounded-2xl text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400/50 font-light"
                  placeholder="Ex: 25"
                  min="18"
                  max="100"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-2">
                  Âge maximum (optionnel)
                </label>
                <input
                  type="number"
                  value={maxAge}
                  onChange={(e) => setMaxAge(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/50 rounded-2xl text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400/50 font-light"
                  placeholder="Ex: 65"
                  min="18"
                  max="100"
                />
              </div>
            </div>

            {showConfirmation && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-4 animate-scale-in">
                <p className="text-sm text-green-800 dark:text-green-300 font-light text-center">
                  Les leads ont été attribués avec succès !
                </p>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-2.5 bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 rounded-full text-sm font-light hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={!selectedUser || !selectedList}
                className="flex-1 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-light hover:from-blue-600 hover:to-blue-700 shadow-md transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Attribuer les leads
              </button>
            </div>
          </form>
        </div>
      </div>
    </>,
    document.body
  );
}

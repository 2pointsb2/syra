import { Filter, X } from 'lucide-react';

interface ConseilFiltersProps {
  showFilters: boolean;
  filterClientName: string;
  filterContrat: string;
  filterDateDebut: string;
  filterDateFin: string;
  filterBudgetMin: string;
  filterBudgetMax: string;
  onToggleFilters: () => void;
  onFilterChange: (field: string, value: string) => void;
  onClearFilters: () => void;
}

export default function ConseilFilters({
  showFilters,
  filterClientName,
  filterContrat,
  filterDateDebut,
  filterDateFin,
  filterBudgetMin,
  filterBudgetMax,
  onToggleFilters,
  onFilterChange,
  onClearFilters
}: ConseilFiltersProps) {
  return (
    <>
      <button
        onClick={onToggleFilters}
        className="px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all flex items-center gap-2"
      >
        <Filter className="w-4 h-4" />
        Filtres
      </button>

      {showFilters && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Filtres</h3>
            <button
              onClick={onClearFilters}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Réinitialiser
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-normal text-gray-700 mb-2">Nom du client</label>
              <input
                type="text"
                value={filterClientName}
                onChange={(e) => onFilterChange('filterClientName', e.target.value)}
                placeholder="Rechercher..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              />
            </div>

            <div>
              <label className="block text-sm font-normal text-gray-700 mb-2">Type de contrat</label>
              <input
                type="text"
                value={filterContrat}
                onChange={(e) => onFilterChange('filterContrat', e.target.value)}
                placeholder="Ex: Santé, PER..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              />
            </div>

            <div>
              <label className="block text-sm font-normal text-gray-700 mb-2">Date de début</label>
              <input
                type="date"
                value={filterDateDebut}
                onChange={(e) => onFilterChange('filterDateDebut', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              />
            </div>

            <div>
              <label className="block text-sm font-normal text-gray-700 mb-2">Date de fin</label>
              <input
                type="date"
                value={filterDateFin}
                onChange={(e) => onFilterChange('filterDateFin', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              />
            </div>

            <div>
              <label className="block text-sm font-normal text-gray-700 mb-2">Budget min (€)</label>
              <input
                type="number"
                value={filterBudgetMin}
                onChange={(e) => onFilterChange('filterBudgetMin', e.target.value)}
                placeholder="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              />
            </div>

            <div>
              <label className="block text-sm font-normal text-gray-700 mb-2">Budget max (€)</label>
              <input
                type="number"
                value={filterBudgetMax}
                onChange={(e) => onFilterChange('filterBudgetMax', e.target.value)}
                placeholder="10000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

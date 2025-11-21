import { X, UserPlus, UserMinus } from 'lucide-react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import AssignLeadsModal from './AssignLeadsModal';
import RemoveLeadsModal from './RemoveLeadsModal';

interface LeadManagementModalProps {
  onClose: () => void;
  lists: Array<{ id: number; name: string; lead_count: number }>;
}

type ManagementMode = 'assign' | 'remove' | null;

export default function LeadManagementModal({ onClose, lists }: LeadManagementModalProps) {
  const [mode, setMode] = useState<ManagementMode>(null);

  if (mode === 'assign') {
    return <AssignLeadsModal onClose={onClose} lists={lists} />;
  }

  if (mode === 'remove') {
    return <RemoveLeadsModal onClose={onClose} lists={lists} />;
  }

  return createPortal(
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[109]" onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center z-[110] p-4 md:p-8">
        <div className="bg-white dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-lg pointer-events-auto" onClick={(e) => e.stopPropagation()}>
          <div className="p-6 border-b border-gray-200 dark:border-gray-700/30 flex items-center justify-between">
            <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100">Gestion des leads</h2>
            <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-all">
              <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          <div className="p-6 space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-light mb-6">
              Choisissez une action à effectuer sur les leads :
            </p>

            <button
              onClick={() => setMode('assign')}
              className="w-full p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 hover:from-blue-100 hover:to-blue-200/50 dark:hover:from-blue-900/30 dark:hover:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-2xl transition-all hover:scale-[1.02] group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <UserPlus className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-light text-gray-900 dark:text-gray-100 mb-1">Attribuer des leads</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                    Assigner des leads à un collaborateur depuis une liste
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setMode('remove')}
              className="w-full p-6 bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-900/20 dark:to-orange-800/10 hover:from-orange-100 hover:to-orange-200/50 dark:hover:from-orange-900/30 dark:hover:to-orange-800/20 border border-orange-200 dark:border-orange-800 rounded-2xl transition-all hover:scale-[1.02] group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <UserMinus className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-light text-gray-900 dark:text-gray-100 mb-1">Retirer des leads</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                    Retirer les leads d'un collaborateur selon des critères
                  </p>
                </div>
              </div>
            </button>
          </div>

          <div className="p-6 border-t border-gray-200 dark:border-gray-700/30">
            <button
              onClick={onClose}
              className="w-full px-6 py-2.5 bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 rounded-full text-sm font-light hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

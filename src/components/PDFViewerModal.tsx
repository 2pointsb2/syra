import { X } from 'lucide-react';

interface ConseilData {
  id?: string;
  client_name: string;
  besoins: string;
  risques: string;
  budget: string;
  situation_familiale: string;
  situation_professionnelle: string;
  projets: string;
  autres_remarques: string;
  produits_proposes: string;
  garanties: string;
  exclusions: string;
  limites: string;
  conditions: string;
  contrat_choisi: string;
  options: string;
  montants_garantie: string;
  adequation_confirmee: boolean;
  risques_refus: string;
  signature_client: string;
  date_signature: string;
  created_at?: string;
}

interface PDFViewerModalProps {
  conseil: ConseilData;
  onClose: () => void;
}

export default function PDFViewerModal({ conseil, onClose }: PDFViewerModalProps) {
  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[109]" onClick={onClose} />
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 overflow-y-auto pointer-events-none">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-5xl my-4 flex flex-col border border-gray-200/50 pointer-events-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 border-b border-gray-200/30 flex items-center justify-between flex-shrink-0">
          <h2 className="text-xl font-light text-gray-900">Devoir de Conseil - {conseil.client_name}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 pb-6 border-b border-gray-200">
              <h1 className="text-2xl font-light text-gray-900 mb-6">
                Document de Devoir de Conseil
              </h1>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 rounded-2xl p-4">
                  <span className="font-light text-gray-500 text-xs">Client</span>
                  <p className="font-light text-gray-900 mt-1">{conseil.client_name}</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <span className="font-light text-gray-500 text-xs">Date de signature</span>
                  <p className="font-light text-gray-900 mt-1">{new Date(conseil.date_signature).toLocaleDateString('fr-FR')}</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-light text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-light">1</span>
                Analyse de la situation du client
              </h2>
              <div className="bg-gray-50/50 rounded-2xl p-6 space-y-4 text-sm border border-gray-100">
                <div>
                  <div className="font-light text-gray-500 text-xs mb-2">Besoins</div>
                  <div className="text-gray-900 font-light">{conseil.besoins}</div>
                </div>

                <div>
                  <div className="font-light text-gray-500 text-xs mb-2">Risques identifiés</div>
                  <div className="text-gray-900 font-light">{conseil.risques}</div>
                </div>

                <div>
                  <div className="font-light text-gray-500 text-xs mb-2">Budget</div>
                  <div className="text-gray-900 font-light">{conseil.budget}</div>
                </div>

                <div>
                  <div className="font-light text-gray-500 text-xs mb-2">Situation familiale</div>
                  <div className="text-gray-900 font-light">{conseil.situation_familiale}</div>
                </div>

                <div>
                  <div className="font-light text-gray-500 text-xs mb-2">Situation professionnelle</div>
                  <div className="text-gray-900 font-light">{conseil.situation_professionnelle}</div>
                </div>

                <div>
                  <div className="font-light text-gray-500 text-xs mb-2">Projets</div>
                  <div className="text-gray-900 font-light">{conseil.projets}</div>
                </div>

                <div>
                  <div className="font-light text-gray-500 text-xs mb-2">Autres remarques</div>
                  <div className="text-gray-900 font-light">{conseil.autres_remarques}</div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-light text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-light">2</span>
                Informations sur les contrats proposés
              </h2>
              <div className="bg-gray-50/50 rounded-2xl p-6 space-y-4 text-sm border border-gray-100">
                <div>
                  <div className="font-light text-gray-500 text-xs mb-2">Produits proposés</div>
                  <div className="text-gray-900 font-light">{conseil.produits_proposes}</div>
                </div>

                <div>
                  <div className="font-light text-gray-500 text-xs mb-2">Garanties</div>
                  <div className="text-gray-900 font-light">{conseil.garanties}</div>
                </div>

                <div>
                  <div className="font-light text-gray-500 text-xs mb-2">Exclusions</div>
                  <div className="text-gray-900 font-light">{conseil.exclusions}</div>
                </div>

                <div>
                  <div className="font-light text-gray-500 text-xs mb-2">Limites</div>
                  <div className="text-gray-900 font-light">{conseil.limites}</div>
                </div>

                <div>
                  <div className="font-light text-gray-500 text-xs mb-2">Conditions</div>
                  <div className="text-gray-900 font-light">{conseil.conditions}</div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-light text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-light">3</span>
                Recommandation d'une solution adaptée
              </h2>
              <div className="bg-gray-50/50 rounded-2xl p-6 space-y-4 text-sm border border-gray-100">
                <div>
                  <div className="font-light text-gray-500 text-xs mb-2">Contrat choisi</div>
                  <div className="text-gray-900 font-light">{conseil.contrat_choisi}</div>
                </div>

                <div>
                  <div className="font-light text-gray-500 text-xs mb-2">Options</div>
                  <div className="text-gray-900 font-light">{conseil.options}</div>
                </div>

                <div>
                  <div className="font-light text-gray-500 text-xs mb-2">Montants de garantie</div>
                  <div className="text-gray-900 font-light">{conseil.montants_garantie}</div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-light text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-light">4</span>
                Vérification de l'adéquation
              </h2>
              <div className="bg-gray-50/50 rounded-2xl p-6 text-sm border border-gray-100">
                <div className="text-gray-900">
                  {conseil.adequation_confirmee ? (
                    <span className="text-green-600 font-light">✓ Le contrat correspond aux besoins exprimés par le client</span>
                  ) : (
                    <span className="text-red-600 font-light">✗ Le contrat ne correspond pas aux besoins</span>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-light text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-light">5</span>
                Risques en cas de refus de garanties
              </h2>
              <div className="bg-gray-50/50 rounded-2xl p-6 text-sm border border-gray-100">
                <div className="text-gray-900 font-light">{conseil.risques_refus}</div>
              </div>
            </div>

            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6">
              <h2 className="text-lg font-light text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-light">6</span>
                Validation et signature
              </h2>
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-light text-gray-500 text-xs mb-2">Signature du client</div>
                    <div className="text-gray-900 font-light">{conseil.signature_client}</div>
                  </div>
                  <div>
                    <div className="font-light text-gray-500 text-xs mb-2">Date de signature</div>
                    <div className="text-gray-900 font-light">{new Date(conseil.date_signature).toLocaleDateString('fr-FR')}</div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white/80 rounded-xl border border-blue-100">
                  <p className="text-xs text-gray-600 font-light leading-relaxed">
                    Je soussigné(e) <strong className="font-normal">{conseil.signature_client}</strong>, reconnais avoir été informé(e) de manière claire et complète
                    sur les garanties proposées, leurs limites et exclusions, ainsi que sur les risques encourus en cas de refus
                    de certaines garanties. Ce document respecte les obligations du devoir de conseil conformément à la DDA.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center text-xs text-gray-500 font-light">
              <p>Document généré par SYRA.io - Conforme à la Directive Distribution Assurance (DDA)</p>
              <p className="mt-1">Date de génération : {new Date().toLocaleDateString('fr-FR')}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

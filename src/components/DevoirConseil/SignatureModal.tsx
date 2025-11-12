interface SignatureModalProps {
  signatureType: 'immediate' | 'email';
  onClose: () => void;
  onValidate: () => void;
  onValidateLater: () => void;
}

export default function SignatureModal({
  signatureType,
  onClose,
  onValidate,
  onValidateLater
}: SignatureModalProps) {
  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]" onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {signatureType === 'immediate' ? 'Joindre le suivi de dossier papier' : 'Joindre l\'enregistrement'}
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            {signatureType === 'immediate'
              ? 'Veuillez joindre le suivi de dossier papier pour finaliser la signature immédiate.'
              : 'Vous pouvez joindre l\'enregistrement (non obligatoire).'}
          </p>
          <div className="mb-6">
            <label className="block text-sm font-normal text-gray-700 mb-2">
              Document {signatureType === 'email' && '(optionnel)'}
            </label>
            <input
              type="file"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
          <div className="flex gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-full text-sm font-light hover:bg-gray-200 transition-all"
            >
              Annuler
            </button>
            <button
              onClick={onValidateLater}
              className="px-6 py-2.5 bg-white border border-blue-500 text-blue-600 rounded-full text-sm font-light hover:bg-blue-50 transition-all"
            >
              Valider plus tard
            </button>
            <button
              onClick={onValidate}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-light hover:from-blue-600 hover:to-blue-700 shadow-md transition-all"
            >
              Valider
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

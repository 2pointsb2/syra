interface SignatureTextProps {
  formData: {
    prenom: string;
    nom: string;
    date_naissance: string;
    adresse: string;
    code_postal: string;
    ville: string;
    profession: string;
    telephone: string;
    email: string;
  };
  contracts: any[];
}

export default function SignatureText({ formData, contracts }: SignatureTextProps) {
  return (
    <div className="text-sm text-gray-700 leading-relaxed space-y-2">
      <p>
        Je soussigné(e) <span className="font-medium text-blue-600">{formData.prenom} {formData.nom}</span>,
        né(e) le <span className="font-medium text-blue-600">{formData.date_naissance ? new Date(formData.date_naissance).toLocaleDateString('fr-FR') : '___________'}</span>,
        demeurant à <span className="font-medium text-blue-600">{formData.adresse || '___________'}</span>,
        <span className="font-medium text-blue-600"> {formData.code_postal} {formData.ville}</span>.
      </p>
      <p>
        Profession: <span className="font-medium text-blue-600">{formData.profession || '___________'}</span>
      </p>
      <p>
        Téléphone: <span className="font-medium text-blue-600">{formData.telephone || '___________'}</span>
      </p>
      <p>
        Email: <span className="font-medium text-blue-600">{formData.email || '___________'}</span>
      </p>
      <p className="mt-4">
        Certifie avoir pris connaissance de l'ensemble des éléments du présent devoir de conseil,
        notamment les informations relatives à mes besoins et exigences, l'analyse de ma situation,
        les propositions qui m'ont été faites ainsi que les raisons qui motivent le conseil fourni.
      </p>
      <p className="mt-4">
        Accepte expressément que les contrats suivants soient souscrits:
      </p>
      {contracts.length > 0 && (
        <ul className="list-disc list-inside space-y-1 ml-4">
          {contracts.map((contract, index) => (
            <li key={index}>
              <span className="font-medium text-blue-600">{contract.gamme_contrat}</span> auprès de{' '}
              <span className="font-medium text-blue-600">{contract.assureur}</span>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4">
        Fait à <span className="font-medium text-blue-600">{formData.ville || '___________'}</span>,
        le <span className="font-medium text-blue-600">{new Date().toLocaleDateString('fr-FR')}</span>
      </p>
      <p className="mt-6 text-xs text-gray-500 italic">
        Signature précédée de la mention "Lu et approuvé"
      </p>
    </div>
  );
}

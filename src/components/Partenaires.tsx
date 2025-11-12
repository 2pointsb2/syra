import { Bell, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface PartenairesProps {
  onNotificationClick: () => void;
  notificationCount: number;
}

const partners = [
  { id: 1, name: 'Entoria', logo: '/entorialogo.svg', url: 'https://www.entoria.fr/' },
  { id: 2, name: 'Allianz', logo: '/entorialogo.svg', url: 'https://www.allianz.fr/' },
  { id: 3, name: 'AXA', logo: '/entorialogo.svg', url: 'https://www.axa.fr/' },
  { id: 4, name: 'Generali', logo: '/entorialogo.svg', url: 'https://www.generali.fr/' },
  { id: 5, name: 'CNP Assurances', logo: '/entorialogo.svg', url: 'https://www.cnp.fr/' },
  { id: 6, name: 'Groupama', logo: '/entorialogo.svg', url: 'https://www.groupama.fr/' },
  { id: 7, name: 'MAIF', logo: '/entorialogo.svg', url: 'https://www.maif.fr/' },
  { id: 8, name: 'MACIF', logo: '/entorialogo.svg', url: 'https://www.macif.fr/' },
];

export default function Partenaires({ onNotificationClick, notificationCount }: PartenairesProps) {
  const [selectedPartner, setSelectedPartner] = useState<typeof partners[0] | null>(null);

  return (
    <div className="flex-1 overflow-auto">
      <header className="glass-card ml-20 mr-4 lg:mx-8 mt-4 md:mt-6 lg:mt-8 px-4 md:px-6 lg:px-8 py-4 md:py-5 flex items-center justify-between floating-shadow">
        <div>
          <h1 className="text-xl md:text-2xl font-light text-gray-900">Partenaires</h1>
          <p className="text-xs md:text-sm text-gray-500 font-light mt-1 hidden sm:block">Accédez aux portails de nos partenaires</p>
        </div>
        <button onClick={onNotificationClick} className="w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all hover:scale-105 shadow-sm relative flex-shrink-0">
          <Bell className="w-5 h-5 text-gray-600" />
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-xs font-light shadow-lg animate-pulse">
              {notificationCount}
            </span>
          )}
        </button>
      </header>

      <div className="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
        {!selectedPartner ? (
          <div className="glass-card p-6 md:p-8 floating-shadow">
            <h2 className="text-lg font-light text-gray-900 mb-6">Nos partenaires assureurs</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {partners.map((partner) => (
                <button
                  key={partner.id}
                  onClick={() => setSelectedPartner(partner)}
                  className="glass-card p-6 md:p-8 hover:bg-white transition-all hover:scale-105 cursor-pointer flex flex-col items-center justify-center gap-4 group"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <span className="text-sm font-light text-gray-700 group-hover:text-gray-900">{partner.name}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="glass-card p-4 floating-shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-light text-gray-900">{selectedPartner.name}</h2>
              <button
                onClick={() => setSelectedPartner(null)}
                className="w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all hover:scale-105 shadow-sm"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <div className="w-full h-[calc(100vh-240px)] bg-white rounded-2xl overflow-hidden shadow-inner">
              <iframe
                src={selectedPartner.url}
                className="w-full h-full"
                title={selectedPartner.name}
                allow="fullscreen"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

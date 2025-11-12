import { useState } from 'react';
import { User, Mail, Camera, Bell, Lock, Eye, EyeOff } from 'lucide-react';

interface ParametresProps {
  onNotificationClick: () => void;
  notificationCount: number;
}

export default function Parametres({ onNotificationClick, notificationCount }: ParametresProps) {
  const [profileData, setProfileData] = useState({
    firstName: 'Moche',
    lastName: 'Azran',
    email: 'moche.azran@example.com',
    photoUrl: '/Retouched Azran Moche 2.jpeg'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  const handleSave = () => {
    console.log('Saving profile:', profileData);
  };

  const validatePassword = (password: string) => {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
  };

  const handlePasswordChange = () => {
    setPasswordError('');
    setPasswordSuccess(false);

    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      setPasswordError('Tous les champs sont requis.');
      return;
    }

    if (!validatePassword(passwordData.newPassword)) {
      setPasswordError('Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError('Les nouveaux mots de passe ne correspondent pas.');
      return;
    }

    console.log('Changing password');
    setPasswordSuccess(true);
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="flex-1 overflow-auto">
      <header className="glass-card ml-20 mr-4 lg:mx-8 mt-4 md:mt-6 lg:mt-8 px-4 md:px-6 lg:px-8 py-4 md:py-5 flex items-center justify-between floating-shadow">
        <div>
          <h1 className="text-xl md:text-2xl font-light text-gray-900">Paramètres du compte</h1>
          <p className="text-xs md:text-sm text-gray-500 font-light mt-1 hidden sm:block">Gérez les informations de votre profil</p>
        </div>
        <button onClick={onNotificationClick} className="w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all hover:scale-105 shadow-sm relative">
          <Bell className="w-5 h-5 text-gray-600" />
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-xs font-light shadow-lg animate-pulse">
              {notificationCount}
            </span>
          )}
        </button>
      </header>

      <div className="p-4 md:p-6 lg:p-8 max-w-5xl">
        <div className="glass-card p-4 md:p-6 lg:p-8 floating-shadow">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="flex-shrink-0 w-full md:w-auto flex flex-col items-center">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-violet-500 shadow-xl">
                  <img
                    src={profileData.photoUrl}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all hover:scale-110 flex items-center justify-center">
                  <Camera className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-3 font-light">JPG, PNG max 5MB</p>
            </div>

            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-xs md:text-sm font-light text-gray-700 mb-2">
                    Prénom
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={profileData.firstName}
                      onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-2xl text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 font-light transition-all"
                      placeholder="Prénom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-light text-gray-700 mb-2">
                    Nom
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={profileData.lastName}
                      onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-2xl text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 font-light transition-all"
                      placeholder="Nom"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-light text-gray-700 mb-2">
                  Adresse email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 font-light transition-all"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={handleSave}
                  className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-xs md:text-sm font-light hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:scale-105"
                >
                  Enregistrer
                </button>
                <button className="w-full sm:w-auto px-6 py-2.5 bg-white/80 border border-gray-200 text-gray-700 rounded-full text-xs md:text-sm font-light hover:bg-white transition-all">
                  Annuler
                </button>
              </div>
            </div>
          </div>

          <div className="glass-card p-4 md:p-6 lg:p-8 floating-shadow mt-6">
            <h2 className="text-lg md:text-xl font-light text-gray-900 mb-6">Modifier le mot de passe</h2>

            <div className="space-y-6 max-w-xl">
              <div>
                <label className="block text-xs md:text-sm font-light text-gray-700 mb-2">
                  Mot de passe actuel
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showCurrentPassword ? 'text' : 'password'}
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                    className="w-full pl-10 pr-12 py-2.5 bg-white border border-gray-200 rounded-2xl text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 font-light transition-all"
                    placeholder="Entrez votre mot de passe actuel"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-light text-gray-700 mb-2">
                  Nouveau mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                    className="w-full pl-10 pr-12 py-2.5 bg-white border border-gray-200 rounded-2xl text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 font-light transition-all"
                    placeholder="Entrez votre nouveau mot de passe"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <p className="text-xs text-gray-500 font-light mt-1.5">
                  Minimum 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial
                </p>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-light text-gray-700 mb-2">
                  Confirmer le nouveau mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                    className="w-full pl-10 pr-12 py-2.5 bg-white border border-gray-200 rounded-2xl text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 font-light transition-all"
                    placeholder="Confirmez votre nouveau mot de passe"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {passwordError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-2xl">
                  <p className="text-xs text-red-600 font-light">{passwordError}</p>
                </div>
              )}

              {passwordSuccess && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-2xl">
                  <p className="text-xs text-green-600 font-light">Votre mot de passe a été modifié avec succès.</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={handlePasswordChange}
                  className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-xs md:text-sm font-light hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:scale-105"
                >
                  Modifier le mot de passe
                </button>
                <button
                  onClick={() => {
                    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
                    setPasswordError('');
                    setPasswordSuccess(false);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 bg-white/80 border border-gray-200 text-gray-700 rounded-full text-xs md:text-sm font-light hover:bg-white transition-all"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

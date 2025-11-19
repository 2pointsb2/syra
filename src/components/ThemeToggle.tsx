import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeToggleProps {
  isCollapsed?: boolean;
}

export default function ThemeToggle({ isCollapsed = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`w-full flex items-center gap-3 px-4 py-3 text-sm rounded-2xl transition-all text-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-gray-100 font-light ${
        isCollapsed ? 'justify-center' : ''
      }`}
      title={isCollapsed ? (theme === 'light' ? 'Mode sombre' : 'Mode clair') : undefined}
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center transition-all">
        {theme === 'light' ? (
          <Moon className="w-5 h-5 text-amber-600 dark:text-slate-300 transition-all" />
        ) : (
          <Sun className="w-5 h-5 text-amber-500 transition-all" />
        )}
      </div>
      {!isCollapsed && <span>{theme === 'light' ? 'Mode sombre' : 'Mode clair'}</span>}
    </button>
  );
}

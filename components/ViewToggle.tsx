import React from 'react';
import { UtensilsCrossed, ShoppingBasket, BookOpen } from 'lucide-react';

export type ViewMode = 'plan' | 'recipes' | 'shopping';

interface ViewToggleProps {
  active: ViewMode;
  onChange: (mode: ViewMode) => void;
}

const views: { id: ViewMode; label: string; icon: React.ReactNode }[] = [
  { id: 'plan', label: 'Plan Semanal', icon: <UtensilsCrossed size={14} /> },
  { id: 'recipes', label: 'Recetas', icon: <BookOpen size={14} /> },
  { id: 'shopping', label: 'Compras', icon: <ShoppingBasket size={14} /> },
];

export const ViewToggle: React.FC<ViewToggleProps> = ({ active, onChange }) => {
  return (
    <div className="inline-flex bg-theme-elevated rounded-lg p-1">
      {views.map((v) => (
        <button
          key={v.id}
          onClick={() => onChange(v.id)}
          className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-150 ease active:scale-[0.97] motion-reduce:transition-none ${
            active === v.id
              ? 'bg-theme-card text-theme-text shadow-sm'
              : 'text-theme-muted hover:text-theme-secondary'
          }`}
        >
          {v.icon}
          {v.label}
        </button>
      ))}
    </div>
  );
};

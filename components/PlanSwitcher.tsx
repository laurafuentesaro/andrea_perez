import React from 'react';
import { PLANS, type PlanId } from '../data/plans';

interface PlanSwitcherProps {
  active: PlanId;
  onChange: (id: PlanId) => void;
}

const planIds: PlanId[] = ['plan1', 'plan2'];

export const PlanSwitcher: React.FC<PlanSwitcherProps> = ({ active, onChange }) => {
  return (
    <div className="inline-flex bg-theme-elevated rounded-lg p-1">
      {planIds.map((id) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={`rounded-md px-4 py-2 text-sm font-medium transition-colors duration-150 ease active:scale-[0.97] motion-reduce:transition-none ${
            active === id
              ? 'bg-theme-card text-theme-text shadow-sm'
              : 'text-theme-muted hover:text-theme-secondary'
          }`}
        >
          {PLANS[id].label}
        </button>
      ))}
    </div>
  );
};

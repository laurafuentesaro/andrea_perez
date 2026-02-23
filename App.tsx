import React, { useState } from 'react';
import { PlanComparisons } from './components/PlanComparisonsNew';
import { ShoppingList } from './components/ShoppingList';
import { ViewToggle, type ViewMode } from './components/ViewToggle';
import { PlanSwitcher } from './components/PlanSwitcher';
import { Header } from './components/Header';
import { ThemeProvider } from './ThemeContext';
import { PLANS, type PlanId } from './data/plans';

const AppContent: React.FC = () => {
  const [view, setView] = useState<ViewMode>('plan');
  const [activePlanId, setActivePlanId] = useState<PlanId>('plan2');

  const activePlan = PLANS[activePlanId];

  return (
    <div className="min-h-screen bg-theme-bg text-theme-text selection:bg-theme-accent/10 transition-colors duration-200">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-medium text-theme-text mb-1">
              Estrategia Nutricional
            </h2>
            <p className="text-sm text-theme-secondary">
              {activePlan.description} &middot; 1,200 kcal
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <PlanSwitcher active={activePlanId} onChange={setActivePlanId} />
            <ViewToggle active={view} onChange={setView} />
          </div>
          {view === 'plan'
            ? <PlanComparisons key={activePlanId} plan={activePlan} />
            : <ShoppingList key={activePlanId} plan={activePlan} />
          }
        </div>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;

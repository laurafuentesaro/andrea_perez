import React, { useMemo, useState } from 'react';
import { Clock, Users, ChefHat, ChevronDown, CalendarDays, Repeat } from 'lucide-react';
import { collectWeeklyRecipes, type RecipeNeed } from '../data/shoppingList';
import { SourceBadge } from './SourceBadge';
import type { PlanConfig } from '../data/plans';

interface RecipeListProps {
  plan: PlanConfig;
}

const RecipeCard: React.FC<{ need: RecipeNeed }> = ({ need }) => {
  const { recipe, appearsOnDays, isBatchCook } = need;
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-theme-card border border-theme-border rounded-lg overflow-hidden transition-colors">
      {/* Header — always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex items-start gap-4 hover:bg-theme-elevated/50 transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm font-semibold text-theme-text">{recipe.name}</h3>
            <SourceBadge source={recipe.source} />
          </div>

          {/* Meta badges */}
          <div className="flex items-center gap-3 mt-2 text-xs text-theme-muted">
            <span className="inline-flex items-center gap-1">
              <Clock size={12} />
              {recipe.cookTime} min
            </span>
            <span className="inline-flex items-center gap-1">
              <Users size={12} />
              {recipe.servings} porc.
            </span>
            <span className="inline-flex items-center gap-1">
              <ChefHat size={12} />
              {recipe.difficulty}
            </span>
          </div>

          {/* Days + batch badge */}
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <span className="inline-flex items-center gap-1 text-[11px] text-theme-secondary">
              <CalendarDays size={11} />
              {appearsOnDays.join(', ')}
            </span>
            {isBatchCook && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-theme-accent/10 text-theme-accent border border-theme-accent/20">
                <Repeat size={10} />
                Cocinar 1 vez
              </span>
            )}
          </div>
        </div>

        <ChevronDown
          size={16}
          className={`shrink-0 mt-1 text-theme-muted transition-transform duration-200 motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Expandable detail */}
      <div
        className="overflow-hidden transition-all duration-200 ease-out motion-reduce:transition-none"
        style={{ display: 'grid', gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="min-h-0">
          <div className="px-5 pb-5 border-t border-theme-border/50">
            {/* Ingredients */}
            <h4 className="text-xs font-semibold text-theme-muted uppercase tracking-wider mt-4 mb-2">
              Ingredientes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              {recipe.ingredients.map((ing, i) => (
                <div key={i} className="flex items-baseline justify-between text-xs py-0.5">
                  <span className="text-theme-secondary">{ing.name}</span>
                  <span className="text-theme-muted ml-2 shrink-0">{ing.quantity}</span>
                </div>
              ))}
            </div>

            {/* Notes */}
            {recipe.notes && recipe.notes.length > 0 && (
              <div className="mt-3">
                {recipe.notes.map((note, i) => (
                  <p key={i} className="text-[11px] text-theme-muted italic">{note}</p>
                ))}
              </div>
            )}

            {/* Steps */}
            <h4 className="text-xs font-semibold text-theme-muted uppercase tracking-wider mt-4 mb-2">
              Preparacion
            </h4>
            <ol className="space-y-2">
              {recipe.instructions.map((step, i) => (
                <li key={i} className="flex gap-2 text-xs text-theme-secondary">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-theme-elevated flex items-center justify-center text-[10px] font-medium text-theme-muted">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RecipeList: React.FC<RecipeListProps> = ({ plan }) => {
  const needs = useMemo(
    () => collectWeeklyRecipes(plan.days, plan.recipes),
    [plan],
  );

  // Separate main dishes from desserts/sides (by kcal or position)
  const mainRecipes = needs.filter(
    (n) => !['gelatina-frutos-rojos', 'yogur-semillas-fruta', 'trufas-cacao', 'trufas-coco-datiles', 'mousse-cacao-palta', 'pudding-chia-frutos-rojos', 'brownies-boniato', 'apple-crumble', 'dulce-leche-datiles'].includes(n.recipeId),
  );
  const dessertRecipes = needs.filter(
    (n) => !mainRecipes.includes(n),
  );

  const totalTime = needs.reduce((sum, n) => sum + n.recipe.cookTime, 0);

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="bg-theme-card border border-theme-border rounded-lg p-5 transition-colors">
        <div className="text-3xl font-semibold text-theme-text tracking-tight">
          {needs.length}
          <span className="text-theme-muted text-lg font-normal"> recetas</span>
        </div>
        <div className="text-sm text-theme-muted mt-1">
          ~{Math.round(totalTime / 60)}h {totalTime % 60}min de cocina en total
        </div>
      </div>

      {/* Main dishes */}
      {mainRecipes.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold text-theme-muted uppercase tracking-wider mb-3">
            Platos principales ({mainRecipes.length})
          </h3>
          <div className="space-y-3">
            {mainRecipes.map((need) => (
              <RecipeCard key={need.recipeId} need={need} />
            ))}
          </div>
        </div>
      )}

      {/* Desserts */}
      {dessertRecipes.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold text-theme-muted uppercase tracking-wider mb-3">
            Postres y snacks ({dessertRecipes.length})
          </h3>
          <div className="space-y-3">
            {dessertRecipes.map((need) => (
              <RecipeCard key={need.recipeId} need={need} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

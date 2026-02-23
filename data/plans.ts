import type { DayPlan } from './weeklyPlan';
import type { RecipeData } from './recipes';
import { WEEKLY_PLAN } from './weeklyPlan';
import { RECIPES } from './recipes';
import { WEEKLY_PLAN_V1 } from './weeklyPlanV1';
import { RECIPES_V1 } from './recipesV1';

export type PlanId = 'plan1' | 'plan2';

export interface PlanConfig {
  id: PlanId;
  label: string;
  description: string;
  days: DayPlan[];
  recipes: Record<string, RecipeData>;
}

export const PLANS: Record<PlanId, PlanConfig> = {
  plan1: {
    id: 'plan1',
    label: 'Plan 1',
    description: 'Plan original',
    days: WEEKLY_PLAN_V1,
    recipes: RECIPES_V1,
  },
  plan2: {
    id: 'plan2',
    label: 'Plan 2',
    description: 'Plan actualizado',
    days: WEEKLY_PLAN,
    recipes: RECIPES,
  },
};

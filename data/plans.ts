import type { DayPlan } from './weeklyPlan';
import type { RecipeData } from './recipes';
import { WEEKLY_PLAN } from './weeklyPlan';
import { RECIPES } from './recipes';
import { WEEKLY_PLAN_V1 } from './weeklyPlanV1';
import { RECIPES_V1 } from './recipesV1';
import { WEEKLY_PLAN_V3 } from './weeklyPlanV3';
import { RECIPES_V3 } from './recipesV3';
import { WEEKLY_PLAN_V4 } from './weeklyPlanV4';
import { RECIPES_V4 } from './recipesV4';

export type PlanId = 'plan1' | 'plan2' | 'plan3' | 'plan4';

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
    description: 'Plan 2',
    days: WEEKLY_PLAN,
    recipes: RECIPES,
  },
  plan3: {
    id: 'plan3',
    label: 'Plan 3',
    description: 'Plan 3',
    days: WEEKLY_PLAN_V3,
    recipes: RECIPES_V3,
  },
  plan4: {
    id: 'plan4',
    label: 'Plan 4',
    description: 'Plan 4',
    days: WEEKLY_PLAN_V4,
    recipes: RECIPES_V4,
  },
};

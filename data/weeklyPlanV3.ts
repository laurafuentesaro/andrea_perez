export type MealSlot = {
  description: string;
  kcal: number;
  recipeId?: string;
  sideRecipeId?: string;
  cookForDays?: number;
};

export type DayPlan = {
  day: string;
  focus: string;
  targetCalories: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
  meals: {
    breakfast: MealSlot;
    lunch: MealSlot;
    dessertLunch: MealSlot;
    dinner: MealSlot;
    dessertDinner: MealSlot;
    snack?: MealSlot;
  };
};

export const WEEKLY_PLAN_V3: DayPlan[] = [
  {
    day: "Lunes",
    focus: "Inicio de semana — pollo al horno troceado + ensalada cesar",
    targetCalories: 1100,
    macros: { protein: 82, carbs: 68, fat: 38 },
    meals: {
      breakfast: {
        description: "Huevos Revueltos + Tomate: 2 huevos revueltos con tomate cherry (50g) + cafe con leche deslactosada.",
        kcal: 250,
      },
      lunch: {
        description: "Ensalada Cesar: lechuga romana, pollo grillado, aderezo de yogur y parmesano.",
        kcal: 280,
        recipeId: 'ensalada-cesar',
      },
      dessertLunch: {
        description: "Gelatina de Frutos Rojos: 1 porcion.",
        kcal: 25,
        recipeId: 'gelatina-frutos-rojos',
      },
      snack: {
        description: "(Opcional) Merienda: cafe con 10g mani tostado.",
        kcal: 65,
      },
      dinner: {
        description: "Pollo Entero al Horno Troceado: cocinar el pollo entero, cenar 150g troceado con ensalada verde.",
        kcal: 220,
        recipeId: 'pollo-entero-horno',
        cookForDays: 4,
      },
      dessertDinner: {
        description: "(Opcional) Yogur con Semillas y Fruta: 1 porcion.",
        kcal: 90,
        recipeId: 'yogur-semillas-fruta',
      },
    }
  },
  {
    day: "Martes",
    focus: "Pollo troceado + tarta de verduras",
    targetCalories: 1100,
    macros: { protein: 78, carbs: 72, fat: 36 },
    meals: {
      breakfast: {
        description: "Bondiola + Huevo: 2 fetas de bondiola (40g) + 1 huevo revuelto + cafe con leche deslactosada.",
        kcal: 280,
      },
      lunch: {
        description: "Pollo Troceado + Ensalada Mediterranea: 150g pollo del lunes con rucula, tomate cherry y limon.",
        kcal: 260,
        recipeId: 'pollo-entero-horno',
      },
      dessertLunch: {
        description: "Gelatina de Frutos Rojos: 1 porcion.",
        kcal: 25,
        recipeId: 'gelatina-frutos-rojos',
      },
      snack: {
        description: "(Opcional) Merienda: frutos rojos (80g).",
        kcal: 40,
      },
      dinner: {
        description: "Tarta de Verduras (sin masa): espinaca, zucchini, morrón y queso port salut.",
        kcal: 150,
        recipeId: 'tarta-verduras',
        cookForDays: 2,
      },
      dessertDinner: {
        description: "(Opcional) Gelatina de Frutos Rojos: 1 porcion.",
        kcal: 25,
        recipeId: 'gelatina-frutos-rojos',
      },
    }
  },
  {
    day: "Miercoles",
    focus: "Pan de carne + sopa de calabaza",
    targetCalories: 1100,
    macros: { protein: 76, carbs: 70, fat: 40 },
    meals: {
      breakfast: {
        description: "Pan de Semillas + Huevo: 1 rebanada tostada con 1 huevo revuelto y tomate + cafe con leche deslactosada.",
        kcal: 250,
        recipeId: 'pan-de-semillas',
      },
      lunch: {
        description: "Tarta de Verduras: porcion del martes + ensalada de tomate y cebolla.",
        kcal: 180,
        recipeId: 'tarta-verduras',
      },
      dessertLunch: {
        description: "Yogur con Semillas y Fruta: 1 porcion.",
        kcal: 90,
        recipeId: 'yogur-semillas-fruta',
      },
      snack: {
        description: "(Opcional) Merienda: cafe con 10g almendras.",
        kcal: 60,
      },
      dinner: {
        description: "Pan de Carne Relleno: 1 rodaja con sopa crema de calabaza.",
        kcal: 310,
        recipeId: 'pan-de-carne',
        sideRecipeId: 'sopa-calabaza-jengibre',
        cookForDays: 2,
      },
      dessertDinner: {
        description: "(Opcional) Gelatina de Frutos Rojos: 1 porcion.",
        kcal: 25,
        recipeId: 'gelatina-frutos-rojos',
      },
    }
  },
  {
    day: "Jueves",
    focus: "Sobrante del miercoles + tarta de pollo con almendras",
    targetCalories: 1100,
    macros: { protein: 80, carbs: 66, fat: 38 },
    meals: {
      breakfast: {
        description: "Omelette Simple: 2 huevos + 20g queso port salut + cafe con leche deslactosada.",
        kcal: 250,
      },
      lunch: {
        description: "Pan de Carne: 1 rodaja del miercoles, fria o calentada, con ensalada verde.",
        kcal: 250,
        recipeId: 'pan-de-carne',
      },
      dessertLunch: {
        description: "Yogur con Semillas y Fruta: 1 porcion.",
        kcal: 90,
        recipeId: 'yogur-semillas-fruta',
      },
      snack: {
        description: "(Opcional) Merienda: frutos rojos (80g).",
        kcal: 40,
      },
      dinner: {
        description: "Tarta de Pollo con Masa de Almendras: masa de harina de almendras con pollo troceado, morrón y queso port salut.",
        kcal: 230,
        recipeId: 'tarta-pollo-almendras',
        cookForDays: 2,
      },
      dessertDinner: {
        description: "(Opcional) Yogur con Semillas y Fruta: 1 porcion.",
        kcal: 90,
        recipeId: 'yogur-semillas-fruta',
      },
    }
  },
  {
    day: "Viernes",
    focus: "Tarta de pollo sobrante + milanesas al horno",
    targetCalories: 1100,
    macros: { protein: 78, carbs: 74, fat: 36 },
    meals: {
      breakfast: {
        description: "Huevos Revueltos + Palta: 2 huevos + 1/4 palta (40g) + cafe con leche deslactosada.",
        kcal: 280,
      },
      lunch: {
        description: "Tarta de Pollo con Masa de Almendras: porcion del jueves con ensalada verde.",
        kcal: 230,
        recipeId: 'tarta-pollo-almendras',
      },
      dessertLunch: {
        description: "Gelatina de Frutos Rojos: 1 porcion.",
        kcal: 25,
        recipeId: 'gelatina-frutos-rojos',
      },
      snack: {
        description: "(Opcional) Merienda: cafe con 10g mani tostado.",
        kcal: 65,
      },
      dinner: {
        description: "Milanesa de Pollo al Horno con Ensalada: bifes de suprema apanados con fariña, con lechuga y tomate.",
        kcal: 300,
        recipeId: 'milanesa-pollo-horno',
        cookForDays: 2,
      },
      dessertDinner: {
        description: "(Opcional) Gelatina de Frutos Rojos: 1 porcion.",
        kcal: 25,
        recipeId: 'gelatina-frutos-rojos',
      },
    }
  },
  {
    day: "Sabado",
    focus: "Fin de semana — tortilla de atun + wok de pollo",
    targetCalories: 1100,
    macros: { protein: 74, carbs: 70, fat: 40 },
    meals: {
      breakfast: {
        description: "Bondiola + Huevo: 2 fetas bondiola (40g) + 1 huevo revuelto + cafe con leche deslactosada.",
        kcal: 280,
      },
      lunch: {
        description: "Milanesa de Pollo al Horno: porcion del viernes con ensalada de zanahoria rallada y limon.",
        kcal: 300,
        recipeId: 'milanesa-pollo-horno',
      },
      dessertLunch: {
        description: "Yogur con Semillas y Fruta: 1 porcion.",
        kcal: 90,
        recipeId: 'yogur-semillas-fruta',
      },
      snack: {
        description: "(Opcional) Merienda: frutos rojos (80g).",
        kcal: 40,
      },
      dinner: {
        description: "Tortilla de Atun y Tomate: atun, tomate, mozzarella gratinada.",
        kcal: 200,
        recipeId: 'tortilla-atun-tomate',
        cookForDays: 2,
      },
      dessertDinner: {
        description: "(Opcional) Gelatina de Frutos Rojos: 1 porcion.",
        kcal: 25,
        recipeId: 'gelatina-frutos-rojos',
      },
    }
  },
  {
    day: "Domingo",
    focus: "Descanso — sopa + ensalada rusa + prep semanal",
    targetCalories: 1100,
    macros: { protein: 70, carbs: 78, fat: 38 },
    meals: {
      breakfast: {
        description: "Pan de Semillas + Queso y Tomate: 1 rebanada tostada con 20g queso port salut y tomate + cafe con leche deslactosada.",
        kcal: 240,
        recipeId: 'pan-de-semillas',
      },
      lunch: {
        description: "Tortilla de Atun y Tomate: porcion del sabado con ensalada verde.",
        kcal: 220,
        recipeId: 'tortilla-atun-tomate',
      },
      dessertLunch: {
        description: "Yogur con Semillas y Fruta: 1 porcion.",
        kcal: 90,
        recipeId: 'yogur-semillas-fruta',
      },
      snack: {
        description: "(Opcional) Merienda: cafe con 10g almendras.",
        kcal: 60,
      },
      dinner: {
        description: "Sopa de Verduras con Pollo: sopa casera con zanahoria, zapallo, apio y pollo en cubos.",
        kcal: 130,
        recipeId: 'sopa-verduras-pollo',
      },
      dessertDinner: {
        description: "Ensalada Rusa: 1 porcion con yogur en vez de mayonesa (prep para lunes).",
        kcal: 170,
        recipeId: 'ensalada-rusa',
      },
    }
  }
];

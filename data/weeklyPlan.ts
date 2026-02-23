export type MealSlot = {
  description: string;
  kcal: number;
  recipeId?: string;
  sideRecipeId?: string;  // companion recipe (dip, side dish, starter)
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

export const WEEKLY_PLAN: DayPlan[] = [
  {
    day: "Lunes",
    focus: "Inicio de semana — omelette caprese y ensalada de atun",
    targetCalories: 1200,
    macros: { protein: 72, carbs: 86, fat: 44 },
    meals: {
      breakfast: {
        description: "Omelette Caprese: 2 huevos + tomate cherry + mozzarella (30g) + albahaca fresca + cafe con leche deslactosada.",
        kcal: 300,
      },
      lunch: {
        description: "Ensalada de Atun: atun al natural con huevo duro, lechuga, tomate, pepino, palta y limon.",
        kcal: 350,
        recipeId: 'ensalada-atun',
      },
      dessertLunch: {
        description: "Trufas de Cacao: 1 trufa congelada (~15g).",
        kcal: 70,
        recipeId: 'trufas-cacao',
      },
      snack: {
        description: "(Opcional) Merienda: cafe con 15g de mani tostado.",
        kcal: 90,
      },
      dinner: {
        description: "Chop Suey de Pollo + Verdes: pollo en tiras con zucchini, morrón, brotes de soja y salsa de soja.",
        kcal: 320,
        recipeId: 'chop-suey-pollo',
        cookForDays: 2,
      },
      dessertDinner: {
        description: "(Opcional) Mousse de Cacao & Palta: 1 porcion.",
        kcal: 90,
        recipeId: 'mousse-cacao-palta',
      },
    }
  },
  {
    day: "Martes",
    focus: "Sobrante del lunes + hamburguesas",
    targetCalories: 1200,
    macros: { protein: 78, carbs: 85, fat: 44 },
    meals: {
      breakfast: {
        description: "Bondiola + Huevo: 2 fetas de bondiola (40g) + 1 huevo revuelto + cafe con leche deslactosada.",
        kcal: 300,
      },
      lunch: {
        description: "Chop Suey de Pollo + Verdes: porcion del lunes, servir frio como ensalada asiatica.",
        kcal: 320,
        recipeId: 'chop-suey-pollo',
      },
      dessertLunch: {
        description: "Brownies de Boniato: 1 porcion con stevia.",
        kcal: 105,
        recipeId: 'brownies-boniato',
      },
      snack: {
        description: "(Opcional) Merienda: yogur descremado con frutos rojos (80g).",
        kcal: 80,
      },
      dinner: {
        description: "Hamburguesas de Carne + Vegetales Salteados: hamburguesas con zucchini, morrón y zanahoria salteados.",
        kcal: 350,
        recipeId: 'hamburguesas-vegetales',
        cookForDays: 2,
      },
      dessertDinner: {
        description: "(Opcional) Trufas de Cacao: 1 trufa congelada (~15g).",
        kcal: 70,
        recipeId: 'trufas-cacao',
      },
    }
  },
  {
    day: "Miercoles",
    focus: "Sobrante del martes + pizza de garbanzo con pollo",
    targetCalories: 1200,
    macros: { protein: 68, carbs: 100, fat: 44 },
    meals: {
      breakfast: {
        description: "Huevos Revueltos + Palta + Mani: 2 huevos + 1/4 palta (40g) + 10g mani + cafe con leche deslactosada.",
        kcal: 310,
      },
      lunch: {
        description: "Hamburguesas de Carne + Vegetales: porcion del martes con ensalada fresca.",
        kcal: 350,
        recipeId: 'hamburguesas-vegetales',
      },
      dessertLunch: {
        description: "Trufas de Coco & Datiles: 1 trufa congelada (~15g).",
        kcal: 65,
        recipeId: 'trufas-coco-datiles',
      },
      snack: {
        description: "(Opcional) Merienda: cafe + 10g almendras.",
        kcal: 65,
      },
      dinner: {
        description: "Pizza de Masa de Garbanzo con Pollo: base de harina de garbanzo con pollo desmenuzado, salsa de tomate, mozzarella light y rucula.",
        kcal: 380,
        recipeId: 'pizza-masa-garbanzo',
        cookForDays: 2,
      },
      dessertDinner: {
        description: "(Opcional) Pudding de Chia & Frutos Rojos: 1 porcion.",
        kcal: 85,
        recipeId: 'pudding-chia-frutos-rojos',
      },
    }
  },
  {
    day: "Jueves",
    focus: "Sobrante del miercoles + salteado de verduras",
    targetCalories: 1200,
    macros: { protein: 62, carbs: 100, fat: 42 },
    meals: {
      breakfast: {
        description: "Herbalife Shake: 2 scoops (26g) + 250ml leche deslactosada + 1 banana.",
        kcal: 270,
      },
      lunch: {
        description: "Pizza de Masa de Garbanzo con Pollo: porcion del miercoles.",
        kcal: 380,
        recipeId: 'pizza-masa-garbanzo',
      },
      dessertLunch: {
        description: "Mousse de Cacao & Palta: 1 porcion.",
        kcal: 90,
        recipeId: 'mousse-cacao-palta',
      },
      snack: {
        description: "(Opcional) Merienda: frutos rojos (80g).",
        kcal: 40,
      },
      dinner: {
        description: "Salteado de Verduras con Huevo: zucchini, morrón, champiñones y huevos revueltos con salsa de soja.",
        kcal: 310,
        recipeId: 'salteado-verduras-huevo',
        cookForDays: 2,
      },
      dessertDinner: {
        description: "(Opcional) Trufas de Coco & Datiles: 1 trufa congelada (~15g).",
        kcal: 65,
        recipeId: 'trufas-coco-datiles',
      },
    }
  },
  {
    day: "Viernes",
    focus: "Sobrante del jueves + ensalada de cuadril",
    targetCalories: 1200,
    macros: { protein: 76, carbs: 82, fat: 48 },
    meals: {
      breakfast: {
        description: "Bondiola + Huevo: 2 fetas de bondiola (40g) + 1 huevo revuelto + cafe con leche deslactosada.",
        kcal: 300,
      },
      lunch: {
        description: "Salteado de Verduras con Huevo: porcion del jueves, servir a temperatura ambiente.",
        kcal: 310,
        recipeId: 'salteado-verduras-huevo',
      },
      dessertLunch: {
        description: "Pudding de Chia & Frutos Rojos: 1 porcion.",
        kcal: 85,
        recipeId: 'pudding-chia-frutos-rojos',
      },
      snack: {
        description: "(Opcional) Merienda: 15g mani tostado.",
        kcal: 90,
      },
      dinner: {
        description: "Ensalada de Cuadril para Enamorar: cuadril con rucula, tomates cherry, parmesano y aceto balsamico.",
        kcal: 420,
        recipeId: 'ensalada-cuadril',
        cookForDays: 2,
      },
      dessertDinner: {
        description: "(Opcional) Trufas de Cacao: 1 trufa congelada (~15g).",
        kcal: 70,
        recipeId: 'trufas-cacao',
      },
    }
  },
  {
    day: "Sabado",
    focus: "Fin de semana — pollo pizzaiola",
    targetCalories: 1200,
    macros: { protein: 80, carbs: 90, fat: 44 },
    meals: {
      breakfast: {
        description: "Huevos Revueltos + Palta: 2 huevos (100g) + 1/4 palta (40g) + cafe con leche deslactosada.",
        kcal: 280,
      },
      lunch: {
        description: "Ensalada de Cuadril para Enamorar: porcion del viernes, servir con rucula fresca.",
        kcal: 420,
        recipeId: 'ensalada-cuadril',
      },
      dessertLunch: {
        description: "Brownies de Boniato: 1 porcion con stevia.",
        kcal: 105,
        recipeId: 'brownies-boniato',
      },
      snack: {
        description: "(Opcional) Merienda: cafe con 15g de mani tostado.",
        kcal: 90,
      },
      dinner: {
        description: "Pollo a la Pizzaiola: pechuga sellada con salsa de tomate, mozzarella gratinada y oregano.",
        kcal: 330,
        recipeId: 'pollo-pizzaiola',
        cookForDays: 2,
      },
      dessertDinner: {
        description: "(Opcional) Trufas de Cacao: 1 trufa congelada (~15g).",
        kcal: 70,
        recipeId: 'trufas-cacao',
      },
    }
  },
  {
    day: "Domingo",
    focus: "Descanso y prep — ensalada de lentejas",
    targetCalories: 1200,
    macros: { protein: 68, carbs: 102, fat: 42 },
    meals: {
      breakfast: {
        description: "Huevos con Queso + Mani: 2 huevos (100g) + 20g queso + 10g mani + cafe con leche deslactosada.",
        kcal: 310,
      },
      lunch: {
        description: "Pollo a la Pizzaiola: porcion del sabado con ensalada verde.",
        kcal: 350,
        recipeId: 'pollo-pizzaiola',
      },
      dessertLunch: {
        description: "Apple Crumble: porcion pequena con manzana, avena y canela.",
        kcal: 110,
        recipeId: 'apple-crumble',
      },
      snack: {
        description: "(Opcional) Merienda: frutos rojos (80g).",
        kcal: 40,
      },
      dinner: {
        description: "Ensalada de Lentejas: lentejas con tomate, cebolla colorada, morrón, perejil y limon.",
        kcal: 340,
        recipeId: 'ensalada-lentejas',
      },
      dessertDinner: {
        description: "(Opcional) Dulce de Leche de Datiles: 1 cda sobre rodajas de fruta.",
        kcal: 90,
        recipeId: 'dulce-leche-datiles',
      },
    }
  }
];

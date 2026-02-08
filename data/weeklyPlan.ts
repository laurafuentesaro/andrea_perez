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
  };
};

export const WEEKLY_PLAN: DayPlan[] = [
  {
    day: "Lunes",
    focus: "Inicio de semana",
    targetCalories: 1200,
    macros: { protein: 53, carbs: 140, fat: 42 },
    meals: {
      breakfast: {
        description: "Huevos Revueltos + Palta: 2 huevos (100g) + 1/4 palta (40g) + cafe con leche deslactosada.",
        kcal: 280,
      },
      lunch: {
        description: "Ensalada Criolla de Garbanzos & Palta + Baba Ganoush de Calabaza como dip con crudites.",
        kcal: 407,
        recipeId: 'ensalada-garbanzos-palta',
        sideRecipeId: 'ck-baba-ganoush-calabaza',
      },
      dessertLunch: {
        description: "Trufas de Cacao by Cora: 1 trufa congelada (~15g).",
        kcal: 70,
        recipeId: 'trufas-cacao-cora',
      },
      dinner: {
        description: "Chop Suey de Pollo + Verdes: pollo en tiras con zucchini, morron, brotes de soja y salsa de soja.",
        kcal: 320,
        recipeId: 'chop-suey-pollo',
        cookForDays: 2,
      },
      dessertDinner: {
        description: "(Opcional) Mousse de Cacao & Palta: 1 frasco individual (100ml).",
        kcal: 90,
        recipeId: 'mousse-cacao-palta',
      },
    }
  },
  {
    day: "Martes",
    focus: "Sobrante del lunes + ensalada de cuadril",
    targetCalories: 1200,
    macros: { protein: 78, carbs: 105, fat: 48 },
    meals: {
      breakfast: {
        description: "Herbalife Shake: 2 scoops (26g) + 250ml leche deslactosada + 1 banana + 15g avena.",
        kcal: 270,
      },
      lunch: {
        description: "Chop Suey de Pollo + Verdes: porcion del lunes, servir frio como ensalada asiatica.",
        kcal: 320,
        recipeId: 'chop-suey-pollo',
      },
      dessertLunch: {
        description: "Blondies de Garbanzos: 1 porcion.",
        kcal: 90,
        recipeId: 'blondies-garbanzos',
      },
      dinner: {
        description: "Ensalada de Cuadril para Enamorar: cuadril con rucula, tomates cherry, parmesano y aceto balsamico.",
        kcal: 420,
        recipeId: 'ensalada-cuadril',
        cookForDays: 2,
      },
      dessertDinner: {
        description: "(Opcional) Mousse de Cacao & Palta: 1 frasco individual (100ml).",
        kcal: 90,
        recipeId: 'mousse-cacao-palta',
      },
    }
  },
  {
    day: "Miercoles",
    focus: "Sobrante del martes + quinoa thai",
    targetCalories: 1200,
    macros: { protein: 74, carbs: 108, fat: 46 },
    meals: {
      breakfast: {
        description: "Omelette de Jamon: 2 huevos + 30g jamon + 20g queso + cafe con leche deslactosada.",
        kcal: 290,
      },
      lunch: {
        description: "Ensalada de Cuadril para Enamorar: porcion del martes, servir fria con rucula fresca.",
        kcal: 420,
        recipeId: 'ensalada-cuadril',
      },
      dessertLunch: {
        description: "Trufas de Cacao by Cora: 1 trufa congelada (~15g).",
        kcal: 70,
        recipeId: 'trufas-cacao-cora',
      },
      dinner: {
        description: "Quinoa Thai con Pollo: quinoa con pollo, leche de coco light, curry rojo, cilantro y mani.",
        kcal: 340,
        recipeId: 'quinoa-thai',
        cookForDays: 2,
      },
      dessertDinner: {
        description: "(Opcional) Pudding de Chia & Frutos Rojos: 1 frasco individual (120ml).",
        kcal: 85,
        recipeId: 'pudding-chia-frutos-rojos',
      },
    }
  },
  {
    day: "Jueves",
    focus: "Sobrante del miercoles + lombarda bowl",
    targetCalories: 1200,
    macros: { protein: 72, carbs: 118, fat: 38 },
    meals: {
      breakfast: {
        description: "FuXion BioPro+ Fit: 1 sachet vainilla + 250ml leche deslactosada + 80g frutos rojos.",
        kcal: 230,
      },
      lunch: {
        description: "Quinoa Thai con Pollo: porcion del miercoles, servir a temperatura ambiente.",
        kcal: 340,
        recipeId: 'quinoa-thai',
      },
      dessertLunch: {
        description: "Mousse de Cacao & Palta: 1 frasco individual (100ml).",
        kcal: 90,
        recipeId: 'mousse-cacao-palta',
      },
      dinner: {
        description: "Cesta de Lombarda con Quinoa y Pollo (Thermomix): pollo marinado con curcuma, quinoa y lombarda + Ensalada de Quinoa con Verduras como guarnicion.",
        kcal: 382,
        recipeId: 'ck-lombarda-quinoa-pollo',
        sideRecipeId: 'ck-ensalada-quinoa-verduras',
        cookForDays: 2,
      },
      dessertDinner: {
        description: "(Opcional) Blondies de Garbanzos: 1 porcion.",
        kcal: 90,
        recipeId: 'blondies-garbanzos',
      },
    }
  },
  {
    day: "Viernes",
    focus: "Sobrante del jueves + hamburguesas a la plancha",
    targetCalories: 1200,
    macros: { protein: 60, carbs: 108, fat: 46 },
    meals: {
      breakfast: {
        description: "Huevos Revueltos con Palta: 2 huevos (100g) + 1/4 palta (40g) + cafe con leche deslactosada.",
        kcal: 280,
      },
      lunch: {
        description: "Cesta de Lombarda con Quinoa y Pollo: porcion del jueves con guarnicion de quinoa con verduras.",
        kcal: 382,
        recipeId: 'ck-lombarda-quinoa-pollo',
        sideRecipeId: 'ck-ensalada-quinoa-verduras',
      },
      dessertLunch: {
        description: "Pudding de Chia & Frutos Rojos: 1 frasco individual (120ml).",
        kcal: 85,
        recipeId: 'pudding-chia-frutos-rojos',
      },
      dinner: {
        description: "Hamburguesas de Carne + Vegetales a la Plancha: hamburguesas con zucchini, morron y zanahoria a la plancha.",
        kcal: 350,
        recipeId: 'hamburguesas-vegetales',
        cookForDays: 2,
      },
      dessertDinner: {
        description: "(Opcional) Mousse de Cacao & Palta: 1 frasco individual (100ml).",
        kcal: 90,
        recipeId: 'mousse-cacao-palta',
      },
    }
  },
  {
    day: "Sabado",
    focus: "Fin de semana — pollo pizzaiola + helado de verano",
    targetCalories: 1200,
    macros: { protein: 87, carbs: 98, fat: 46 },
    meals: {
      breakfast: {
        description: "Herbalife Shake + Avena: 2 scoops (26g) + 200ml leche deslactosada + 15g avena.",
        kcal: 270,
      },
      lunch: {
        description: "Hamburguesas de Carne + Vegetales: porcion del viernes, servir con ensalada fresca.",
        kcal: 350,
        recipeId: 'hamburguesas-vegetales',
      },
      dessertLunch: {
        description: "Brownies Veganos de Boniato: 1 porcion con stevia.",
        kcal: 105,
        recipeId: 'brownies-boniato',
      },
      dinner: {
        description: "Pollo a la Pizzaiola (Thermomix): pechuga con salsa de tomate, queso gratinado y oregano — 41g proteina!",
        kcal: 331,
        recipeId: 'ck-pollo-pizzaiola',
        cookForDays: 2,
      },
      dessertDinner: {
        description: "(Opcional) Helado de Frutas Express (Thermomix): 1 porcion.",
        kcal: 134,
        recipeId: 'ck-helado-frutas',
      },
    }
  },
  {
    day: "Domingo",
    focus: "Descanso y prep — espinacas para el lunes",
    targetCalories: 1200,
    macros: { protein: 80, carbs: 102, fat: 48 },
    meals: {
      breakfast: {
        description: "Huevos con Queso: 2 huevos (100g) + 20g queso + 1/4 palta (40g) + cafe con leche deslactosada.",
        kcal: 300,
      },
      lunch: {
        description: "Pollo a la Pizzaiola: porcion del sabado + Gazpacho (Thermomix) como entrada fria.",
        kcal: 411,
        recipeId: 'ck-pollo-pizzaiola',
        sideRecipeId: 'ck-gazpacho',
      },
      dessertLunch: {
        description: "Apple Crumble Super Sana: porcion pequena con manzana, avena y canela.",
        kcal: 110,
        recipeId: 'apple-crumble',
      },
      dinner: {
        description: "Espinacas a la Crema con Huevos Poche (Thermomix): espinacas cremosas con huevos poche.",
        kcal: 328,
        recipeId: 'ck-espinacas-crema-huevos',
      },
      dessertDinner: {
        description: "(Opcional) Dulce de Leche de Datiles: 1 cda generosa sobre rodajas de fruta de verano.",
        kcal: 90,
        recipeId: 'dulce-leche-datiles',
      },
    }
  }
];

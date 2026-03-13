import type { DayPlan } from './weeklyPlan';

export const WEEKLY_PLAN_V4: DayPlan[] = [
  {
    day: "Lunes",
    focus: "Inicio de semana — pastel de carne + ensalada de atun",
    targetCalories: 1180,
    macros: { protein: 78, carbs: 72, fat: 40 },
    meals: {
      breakfast: {
        description: "Huevo Revuelto sobre Galleta Salma con Jamon Crudo crocante + cafe con leche deslactosada.",
        kcal: 280,
        recipeId: 'huevo-galleta-jamon',
      },
      lunch: {
        description: "Pastel de Carne & Zapallo (porcion generosa) + ensalada verde con limon.",
        kcal: 380,
        recipeId: 'pastel-carne-zapallo',

      },
      dessertLunch: {
        description: "",
        kcal: 0,
      },
      snack: {
        description: "Apple Crumble (1 porcion) + mate de frutas.",
        kcal: 180,
        recipeId: 'apple-crumble',

      },
      dinner: {
        description: "Completisima Ensalada de Atun: atun al natural, huevo duro, aceitunas, zanahoria rallada, almendras y mix de verdes con vinagreta.",
        kcal: 340,
        recipeId: 'ensalada-atun-completa',
      },
      dessertDinner: {
        description: "",
        kcal: 0,
      },
    }
  },
  {
    day: "Martes",
    focus: "Pastel de carne sobrante + tarta de puerros",
    targetCalories: 1180,
    macros: { protein: 76, carbs: 78, fat: 42 },
    meals: {
      breakfast: {
        description: "Tostada integral con Palta y Huevo Revuelto + cafe con leche deslactosada.",
        kcal: 310,
        recipeId: 'tostada-palta-huevo',
      },
      lunch: {
        description: "Pastel de Carne & Zapallo (sobrante) + ensalada verde con limon.",
        kcal: 350,
        recipeId: 'pastel-carne-zapallo',
      },
      dessertLunch: {
        description: "",
        kcal: 0,
      },
      snack: {
        description: "Apple Crumble (1 porcion) + mate de frutas.",
        kcal: 180,
        recipeId: 'apple-crumble',
      },
      dinner: {
        description: "Tarta de Puerros & Jamon Crudo (porcion generosa) + ensalada verde.",
        kcal: 340,
        recipeId: 'tarta-puerros-jamon',

      },
      dessertDinner: {
        description: "",
        kcal: 0,
      },
    }
  },
  {
    day: "Miercoles",
    focus: "Ultima porcion pastel + tarta de cebollas & manzanas",
    targetCalories: 1180,
    macros: { protein: 72, carbs: 68, fat: 38 },
    meals: {
      breakfast: {
        description: "Huevo Revuelto sobre Galleta Salma con Jamon Crudo crocante + cafe con leche deslactosada.",
        kcal: 280,
        recipeId: 'huevo-galleta-jamon',
      },
      lunch: {
        description: "Pastel de Carne & Zapallo (ultima porcion) + ensalada verde con limon.",
        kcal: 380,
        recipeId: 'pastel-carne-zapallo',
      },
      dessertLunch: {
        description: "",
        kcal: 0,
      },
      snack: {
        description: "Apple Crumble (ultima porcion) + mate de frutas.",
        kcal: 180,
        recipeId: 'apple-crumble',
      },
      dinner: {
        description: "Tarta de Cebollas & Manzanas (sin masa, base de semillas, porcion generosa) + ensalada de rucula.",
        kcal: 340,
        recipeId: 'tarta-cebollas-manzanas',

      },
      dessertDinner: {
        description: "",
        kcal: 0,
      },
    }
  },
  {
    day: "Jueves",
    focus: "Tarta de cebollas sobrante + milanesas al horno",
    targetCalories: 1180,
    macros: { protein: 80, carbs: 66, fat: 38 },
    meals: {
      breakfast: {
        description: "Tostada integral con Palta y Huevo Revuelto + cafe con leche deslactosada.",
        kcal: 310,
        recipeId: 'tostada-palta-huevo',
      },
      lunch: {
        description: "Tarta de Cebollas & Manzanas (sobrante) + ensalada verde con limon.",
        kcal: 290,
        recipeId: 'tarta-cebollas-manzanas',
      },
      dessertLunch: {
        description: "",
        kcal: 0,
      },
      snack: {
        description: "Panquequito Frutal (banana) con mermelada sin azucar + mate de frutas.",
        kcal: 200,
        recipeId: 'panquequito-frutal',
      },
      dinner: {
        description: "Milanesa de Pollo al Horno (apanada con farina) + vegetales horneados + ensalada verde.",
        kcal: 380,
        recipeId: 'milanesa-pollo-horno',

      },
      dessertDinner: {
        description: "",
        kcal: 0,
      },
    }
  },
  {
    day: "Viernes",
    focus: "Milanesa sobrante + chop suey de pollo",
    targetCalories: 1180,
    macros: { protein: 82, carbs: 70, fat: 40 },
    meals: {
      breakfast: {
        description: "Tostada integral con Palta y Huevo Revuelto + cafe con leche deslactosada.",
        kcal: 310,
        recipeId: 'tostada-palta-huevo',
      },
      lunch: {
        description: "Milanesa de Pollo al Horno (sobrante) + vegetales horneados + ensalada verde.",
        kcal: 380,
        recipeId: 'milanesa-pollo-horno',
      },
      dessertLunch: {
        description: "",
        kcal: 0,
      },
      snack: {
        description: "Pepas de Avena & Coco (1 pepa) + mate de frutas.",
        kcal: 180,
        recipeId: 'pepas-avena-coco',

      },
      dinner: {
        description: "Chop Suey de Carne: carne magra en tiritas con verduras salteadas al wok, hongos, almendras + ensalada verde.",
        kcal: 310,
        recipeId: 'chop-suey-carne',
      },
      dessertDinner: {
        description: "",
        kcal: 0,
      },
    }
  },
  {
    day: "Sabado",
    focus: "Arroz thai + tarta de puerros del freezer",
    targetCalories: 1180,
    macros: { protein: 74, carbs: 82, fat: 38 },
    meals: {
      breakfast: {
        description: "Huevo Revuelto sobre Galleta Salma con Jamon Crudo crocante + cafe con leche deslactosada.",
        kcal: 280,
        recipeId: 'huevo-galleta-jamon',
      },
      lunch: {
        description: "Arroz Thai con Huevo: arroz integral salteado con verduras, huevo y mani + mix de verdes.",
        kcal: 380,
        recipeId: 'arroz-thai-huevo',

      },
      dessertLunch: {
        description: "",
        kcal: 0,
      },
      snack: {
        description: "Pepas de Avena & Coco (1 pepa) + mate de frutas.",
        kcal: 180,
        recipeId: 'pepas-avena-coco',
      },
      dinner: {
        description: "Tarta de Puerros & Jamon Crudo (sobrante/freezer) + ensalada verde.",
        kcal: 340,
        recipeId: 'tarta-puerros-jamon',
      },
      dessertDinner: {
        description: "",
        kcal: 0,
      },
    }
  },
  {
    day: "Domingo",
    focus: "Wraps de pollo + chop suey sobrante + prep semanal",
    targetCalories: 1180,
    macros: { protein: 72, carbs: 76, fat: 38 },
    meals: {
      breakfast: {
        description: "Panquequito Frutal (manzana rallada) con mermelada sin azucar + cafe con leche deslactosada.",
        kcal: 280,
        recipeId: 'panquequito-frutal',
      },
      lunch: {
        description: "Pollo a la Mostaza al horno + Arroz Integral con Semillas Doradas y parmesano + mix de verdes.",
        kcal: 390,
        recipeId: 'pollo-mostaza-arroz',
      },
      dessertLunch: {
        description: "",
        kcal: 0,
      },
      snack: {
        description: "Pepas de Avena & Coco (ultima porcion) + mate de frutas.",
        kcal: 180,
        recipeId: 'pepas-avena-coco',
      },
      dinner: {
        description: "Chop Suey de Pollo (sobrante) + ensalada verde.",
        kcal: 310,
        recipeId: 'chop-suey-pollo',
      },
      dessertDinner: {
        description: "",
        kcal: 0,
      },
    }
  }
];

export type INutrition = {
  fat: string;
  carbs: string;
  protien: string;
  calories: string;
};

export default class Nutrition implements INutrition {
  fat: string;
  carbs: string;
  protien: string;
  calories: string;

  constructor(fat: string, carbs: string, protein: string, calories: string) {
    this.fat = fat;
    this.carbs = carbs;
    this.protien = protein;
    this.calories = calories;
  }

  static empty(): Nutrition {
    return new Nutrition("", "", "", "");
  }
}

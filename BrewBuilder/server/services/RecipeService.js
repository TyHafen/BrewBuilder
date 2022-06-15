import { dbContext } from "../db/DbContext";


class RecipeService {
    async getById(id) {
        const recipe = await dbContext.Recipe.findById(id)
    }
    async remove(id) {
        const recipe = await dbContext.Recipe.findByIdAndDelete(id)
    }
    async createRecipe(body) {
        const recipe = await dbContext.Recipe.create(body)
        return recipe
    }
    async getAll() {
        const recipes = await dbContext.Recipe.find()
        return recipes
    }

}

export const recipeService = new RecipeService()
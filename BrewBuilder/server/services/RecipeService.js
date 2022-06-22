import { dbContext } from "../db/DbContext";
import { BadRequest, Forbidden } from '../utils/Errors'


class RecipeService {
    async update(update) {
        const original = await this.getById(update.id)
        if (original.creatorId.toString() !== update.creatorId) {
            throw new BadRequest("unauthrozried to edit")
        }

    }
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
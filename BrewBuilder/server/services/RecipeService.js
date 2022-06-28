import { dbContext } from "../db/DbContext";
import { BadRequest, Forbidden } from '../utils/Errors'


class RecipeService {
    async update(update) {
        const original = await this.getById(update.id)
        if (original.creatorId.toString() !== update.creatorId) {
            throw new BadRequest("unauthorized to edit")
        }

    }
    async getById(id) {
        const recipe = await dbContext.Recipe.findById(id)
        return recipe
    }
    async remove(recipeId, userId) {
        const recipe = await dbContext.Recipe.findById(recipeId)
        if (recipe.creatorId.toString() !== userId) {
            throw new Forbidden("Not your recipe to delete")
        } const deleteRecipe = await dbContext.Recipe.findByIdAndDelete(recipeId)
        return `deleted ${deleteRecipe.name} from your recipe book`
    }
    async createRecipe(body) {
        const recipe = await dbContext.Recipe.create(body)
        return recipe
    }
    async getAll(userId) {
        const recipes = await dbContext.Recipe.find()
        return recipes.filter(r => r.creatorId == userId)
    }

}

export const recipeService = new RecipeService()
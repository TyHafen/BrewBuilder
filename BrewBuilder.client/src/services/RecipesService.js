import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class RecipesService {

    async getRecipes() {
        const res = await api.get('api/recipes')
        AppState.myRecipes = res.data
        logger.log(AppState.myRecipes)
    }


}

export const recipesService = new RecipesService()
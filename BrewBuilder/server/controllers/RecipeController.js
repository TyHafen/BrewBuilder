import { Auth0Provider } from "@bcwdev/auth0provider";
import { recipeService } from "../services/RecipeService";
import BaseController from "../utils/BaseController";

export class RecipeController extends BaseController {
    constructor() {
        super('api/recipes')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .get('', this.getAll)

    }
    async getAll(req, res, next) {
        try {
            const recipes = await recipeService.getAll()
            res.send(recipes)

        } catch (error) {
            next(error)
        }
    }
    async createRecipe(req, res, next) {
        try {
            const recipe = await recipeService.createRecipe(req.body)
            return res.send(recipe)
        } catch (error) {
            next(error)
        }
    }
    async remove(req, res, next) {
        try {
            const recipe = await recipeService.remove(req.params.id)
        } catch (error) {
            next(error)
        }
    }
    async getByid(req, res, next) {
        try {
            const recipe = await recipeService.getById(req.params.id)
            res.send(recipe)
        } catch (error) {
            next(error)
        }
    }

}
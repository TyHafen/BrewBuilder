
import { Auth0Provider } from "@bcwdev/auth0provider";
import { recipeService } from "../services/RecipeService";
import BaseController from "../utils/BaseController";

export class RecipeController extends BaseController {
    constructor() {
        super('api/recipes')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .get('', this.getAll)
            .post('', this.createRecipe)
            .get('/:id', this.getById)
            .delete('/:id', this.remove)





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
            req.body.creatorId = req.userInfo.id
            const recipe = await recipeService.createRecipe(req.body)
            return res.send(recipe)
        } catch (error) {
            next(error)
        }
    }
    async update(req, res, next) {
        try {
            req.body.id = req.params.id
            req.body.creatorId = req.userInfo.id
            const updateRecipe = await recipeService.update(req.body)
            res.send(updateRecipe)
        } catch (error) {
            next(error)
        }
    }
    async remove(req, res, next) {
        try {
            const recipeToDelete = await recipeService.remove(req.params.id, req.userInfo.id)
            return res.send(recipeToDelete)
        } catch (error) {
            next(error)
        }
    }
    async getById(req, res, next) {
        try {
            const recipe = await recipeService.getById(req.params.id)
            res.send(recipe)
        } catch (error) {
            next(error)
        }
    }

}
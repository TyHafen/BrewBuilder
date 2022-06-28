<template>
    <div class="component photo">
<div class="row justify-content-around p-3 m-0">
    <div  v-for="r in myRecipes" :key="r.id" class="col-md-2">
    <RecipeCard :recipe="r"/>
    </div>
</div>

    </div>
</template>


<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { logger } from '../utils/Logger'
import {recipesService} from "../services/RecipesService"
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
import RecipeCard from '../components/RecipeCard.vue'
export default {
    setup() {
        watchEffect(async () => {
            try {
                await recipesService.getRecipes();
            }
            catch (error) {
                logger.error(error);
                Pop.toast(error.message, "error");
            }
        });
        return {
            myRecipes: computed(() => AppState.myRecipes)
        };
    },
    components: { RecipeCard }
}
</script>


<style lang="scss" scoped>




.photo {
    background-image: url("https://s.hdnux.com/photos/57/00/50/12323335/4/1200x0.jpg");
    background-size: cover;
    height: 91.2vh;
}


</style>
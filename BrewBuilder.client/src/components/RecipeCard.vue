<template>
    <div class="component">
        <div class="row bg-dark rounded shadow text-center">
                <h3 class="text-light">{{recipe.name}}</h3>
        </div>
    

    </div>
</template>


<script>
export default {
    props: {
        recipe: {
            type: Object,
            required: true
        }
    },
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>
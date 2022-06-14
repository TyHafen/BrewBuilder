import mongoose from "mongoose";
const Schema = mongoose.Schema

export const RecipeSchema = new Schema(
    {
        creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
        recipeId: { type: String, required: true },
        pilsner: { type: Number, required: false },
        twoRow: { type: Number, required: false },
        marisOtter: { type: Number, required: false },
        crystal15: { type: Number, required: false },
        crystal30: { type: Number, required: false },
        crystal45: { type: Number, required: false },
        roastedMalt: { type: Number, required: false },
    },
    { timestamps: true, toJSON: { virtuals: true } }
)

RecipeSchema.virtual('creator', {
    localField: 'creatorId',
    foreignField: '_id',
    justOne: true,
    ref: 'Profile'
})
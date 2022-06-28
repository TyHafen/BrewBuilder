import mongoose from "mongoose";
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const RecipeSchema = new Schema(
    {
        name: { type: String, required: true },
        creatorId: { type: ObjectId, ref: 'account', required: true },
        pilsner: { type: Number, required: false },
        twoRow: { type: Number, required: false },
        marisOtter: { type: Number, required: false },
        crystal15: { type: Number, required: false },
        crystal30: { type: Number, required: false },
        crystal45: { type: Number, required: false },
        roastedMalt: { type: Number, required: false },
        wheat: { type: Number, required: false },
        oats: { type: Number, required: false }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)

RecipeSchema.virtual('creator', {
    localField: 'creatorId',
    foreignField: '_id',
    justOne: true,
    ref: 'Account',
    jsutOne: true
})
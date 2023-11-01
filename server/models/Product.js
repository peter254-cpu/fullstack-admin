import mongoose from 'mongoose'

const productsSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        decription: String,
        category: String,
        rating: Number,
        supply: Number
    },
    {timestamps : true}
)

const Product = mongoose.model("Product", productsSchema)
export default Product
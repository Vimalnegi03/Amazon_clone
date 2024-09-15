import mongoose,{Schema} from "mongoose";

const productSchema=new Schema({
    id: String,
    url: String,
    detailUrl: String,
    title:Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String
})

const Products= mongoose.model("product",productSchema)
export default Products